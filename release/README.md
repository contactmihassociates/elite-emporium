# Elite Emporium — Built APKs

This folder is where the `.apk` and `.aab` files land once the **GitHub Actions** workflow `.github/workflows/build-apk.yml` runs.

## How to get a build right now

1. Go to your repo on GitHub → **Actions** tab.
2. Click **"Build Android APK (TWA)"** in the left sidebar.
3. Click **"Run workflow"** (top right) → green **Run workflow** button.
4. Wait ~12-18 min.
5. The completed run will:
   - Attach the APK + AAB as a **workflow artifact** (downloadable ZIP at the bottom of the run page, retained 30 days).
   - Auto-create a **GitHub Release** tagged `app-v10.0.0-<run#>` with the APK + AAB attached for permanent linking.

## File-naming convention

| Filename pattern | What it is |
|---|---|
| `elite-emporium-<version_name>-<version_code>.apk` | Sideloadable APK (for direct install on Android phones, sharing via WhatsApp/Drive) |
| `elite-emporium-<version_name>-<version_code>.aab` | Android App Bundle (for uploading to Google Play Console) |

`version_code` auto-increments by `GITHUB_RUN_NUMBER` on every Action run, so two builds from the same `version_name` always have different `version_code`s — that satisfies Play Store's "uploaded version must be greater than the previous" rule.

## Real signing key (avoid the brown URL bar)

By default the Action builds with a generated debug keystore. Sideloading works but you'll see a brown URL bar at the top of the app, because Android can't verify Digital Asset Links without your real signing key.

To fix:
1. Locally, generate or locate your release keystore:
   ```bash
   keytool -genkey -v -keystore elite-release.keystore -alias android -keyalg RSA -keysize 2048 -validity 25000
   ```
2. Base64-encode it:
   ```bash
   base64 -w 0 elite-release.keystore > keystore.b64.txt
   ```
3. Copy the contents.
4. Repo → **Settings → Secrets and variables → Actions → New repository secret**.
   - Name: `ANDROID_KEYSTORE_B64`
   - Value: paste the base64.
5. Also paste the SHA-256 fingerprint of your key into `.well-known/assetlinks.json` (replace `REPLACE_WITH_...`):
   ```bash
   keytool -list -v -keystore elite-release.keystore -alias android | grep "SHA256"
   ```
6. Commit `.well-known/assetlinks.json` and push.
7. Re-run the Action — now the APK is signed with your real key and the brown URL bar goes away.

## Manual local build (alternative to GitHub Actions)

See `../app-build/BUILD-APK.md` § "Path A / B / C".
