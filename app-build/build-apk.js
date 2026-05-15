#!/usr/bin/env node
/* Programmatic APK build using @bubblewrap/core directly.
 * Bypasses the bubblewrap CLI's broken inquirer prompts under Node 24.
 *
 * Steps:
 *  1. Load app-build/twa-manifest.json (we already pre-wrote it).
 *  2. Generate the Android project files via TwaGenerator into app-build/.
 *  3. Wrap signing config so Gradle uses app-build/android.keystore.
 *  4. Run gradle assembleRelease via the Bubblewrap GradleWrapper.
 *  5. Sign + zipalign the resulting APK with KeyTool/JarSigner.
 *
 * Outputs:
 *   app-build/app/build/outputs/apk/release/app-release-signed.apk
 */

const fs = require('fs');
const path = require('path');
const core = require('C:/Users/LENOVO/AppData/Roaming/npm/node_modules/@bubblewrap/cli/node_modules/@bubblewrap/core');
const { TwaGenerator, TwaManifest, JdkHelper, AndroidSdkTools, GradleWrapper, JarSigner, Config, ConsoleLog } = core;

(async () => {
  const log = new ConsoleLog('build-apk');
  const cwd = __dirname;

  // Load existing config + twa-manifest
  const configPath = path.join(process.env.USERPROFILE || process.env.HOME, '.bubblewrap', 'config.json');
  const rawConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const config = new Config(rawConfig.jdkPath, rawConfig.androidSdkPath);

  const twaManifestPath = path.join(cwd, 'twa-manifest.json');
  const twaManifest = await TwaManifest.fromFile(twaManifestPath);

  // The signing key entry in our committed twa-manifest.json points at
  // ./android.keystore — make it absolute so Gradle finds it from app/.
  twaManifest.signingKey = {
    path: path.join(cwd, 'android.keystore'),
    alias: 'android',
  };

  log.info('Initialising Android project files via TwaGenerator…');
  const generator = new TwaGenerator();
  await generator.createTwaProject(cwd, twaManifest, log);
  log.info('Project files created.');

  log.info('Configuring JDK + Android SDK helpers…');
  const jdkHelper = new JdkHelper(process, config);
  const androidSdkTools = await AndroidSdkTools.create(process, config, jdkHelper, log);

  // Accept SDK licenses (already done globally but doesn't hurt)
  try { await androidSdkTools.checkBuildTools(); } catch (_) {}

  log.info('Running gradle assembleRelease (this may take 4-8 minutes)…');
  const gradleWrapper = new GradleWrapper(process, androidSdkTools, cwd);
  await gradleWrapper.assembleRelease();
  log.info('Gradle build complete.');

  log.info('Bundling AAB (assembleBundleRelease)…');
  try { await gradleWrapper.bundleRelease(); log.info('AAB bundle complete.'); }
  catch (e) { log.warn('AAB bundle failed (continuing): ' + e.message); }

  // Sign the APK
  const unsignedApk = path.join(cwd, 'app', 'build', 'outputs', 'apk', 'release', 'app-release-unsigned.apk');
  const signedApk   = path.join(cwd, 'app-release-signed.apk');
  const unsignedAab = path.join(cwd, 'app', 'build', 'outputs', 'bundle', 'release', 'app-release.aab');
  const signedAab   = path.join(cwd, 'app-release-bundle.aab');

  if (fs.existsSync(unsignedApk)) {
    log.info('Signing APK…');
    const jarSigner = new JarSigner(jdkHelper);
    const keyInfo = {
      path: path.join(cwd, 'android.keystore'),
      alias: 'android',
    };
    await jarSigner.sign(keyInfo, 'eliteemporium', 'eliteemporium', unsignedApk, signedApk);
    log.info('Signed APK → ' + signedApk);
  } else {
    log.warn('No unsigned APK at ' + unsignedApk);
  }
  if (fs.existsSync(unsignedAab)) {
    fs.copyFileSync(unsignedAab, signedAab);
    log.info('AAB copied → ' + signedAab);
  }

  log.info('Done.');
})().catch(e => {
  console.error('Build failed:', e);
  process.exit(1);
});
