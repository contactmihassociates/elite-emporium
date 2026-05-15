# Elite Emporium — APK Build Guide (v10)

This folder contains everything needed to build an Android APK for the Elite Emporium PWA.

The site is already a fully-functional Progressive Web App (`manifest.json`, `sw.js`, installable on Android & iOS). The APK simply wraps the live PWA inside a native Android shell — no separate codebase, no parallel maintenance.

## What's in this folder

| File | Purpose |
|------|---------|
| `twa-manifest.json` | Bubblewrap CLI input — describes the TWA (Trusted Web Activity) |
| `BUILD-APK.md` | This file |
| `../manifest.json` | The PWA Web App Manifest (v10, with maskable icons, shortcuts, share target) |
| `../.well-known/assetlinks.json` | Digital Asset Links template (Play Console fills SHA256) |
| `../sw.js` | Service Worker (`CACHE_NAME = 'elite-emporium-v5'`) |

## Three ways to get the APK

### Path A — PWABuilder.com (easiest, no install)

1. Go to **<https://www.pwabuilder.com>**
2. Paste: `https://elite-emporium-one.vercel.app`
3. Wait for the PWA score (should be 90+/100 — we already meet all installability criteria).
4. Click **"Package For Stores" → "Android"**.
5. Choose **"Other Android stores / Sideload APK"** (or "Google Play" if you want an AAB).
6. Settings:
   - **Package ID**: `in.eliteemporium.app`
   - **App name**: `Elite Emporium`
   - **Launcher name**: `Elite Emporium`
   - **Theme color**: `#DB3022`
   - **Background color**: `#F1F3F6`
   - **Start URL**: `/index.html?source=twa`
   - **Display mode**: `standalone`
   - **App version**: `10.0.0` / `versionCode 10`
   - **Signing key**: choose **"PWABuilder generates"** the first time (download `signing.keystore` + `signing-key-info.txt` and keep them safe — you'll need the same key for every future update).
7. Download the ZIP. Inside you'll find:
   - `elite-emporium.apk` — sideloadable on any Android (Settings → Install unknown apps).
   - `elite-emporium.aab` — for Google Play.
   - `signing.keystore` + `signing-key-info.txt` — keep these safe!
   - `assetlinks.json` — Digital Asset Links file with the **real SHA256 fingerprint**.
8. **Critical**: open the downloaded `assetlinks.json`, copy the SHA256 fingerprint, and paste it into `<repo>/.well-known/assetlinks.json` (replace the `REPLACE_WITH_...` placeholder), then push & redeploy. Without this, the TWA shows a brown URL bar at the top of the app.

This is the recommended path — takes ~3 minutes.

### Path B — Bubblewrap CLI (full control, requires Node + JDK)

```bash
# 1. Install Bubblewrap globally
npm install -g @bubblewrap/cli

# 2. Init project from the live PWA manifest (one-time)
cd app-build
bubblewrap init --manifest=https://elite-emporium-one.vercel.app/manifest.json

# Bubblewrap will read twa-manifest.json from this folder as defaults.
# It prompts for: package ID, signing key path/password, JDK location, Android SDK.
# Accept the defaults except for the signing key (create your own, NEVER lose it).

# 3. Build a signed APK
bubblewrap build

# Output: app-release-signed.apk in this folder.

# 4. Update later (after pushing site changes):
#    bumping the appVersionCode in twa-manifest.json then re-running:
bubblewrap update
bubblewrap build
```

**Prerequisites for Bubblewrap:**
- Node.js 14+
- JDK 17 (`brew install openjdk@17` / `winget install ojdkbuild.openjdk.17.jdk`)
- Android SDK build-tools (Bubblewrap can auto-install)

### Path C — Capacitor wrap (heavyweight, only if you want Play-store-only native plugins)

Not needed for this site. Skipping. If you ever need camera/biometric/native push,
revisit this option:

```bash
npm init @capacitor/app
npx cap add android
npx cap copy
npx cap open android   # builds APK from Android Studio
```

## After the APK is built

1. **Install on your phone** (or share via WhatsApp/Drive):
   - Enable "Install unknown apps" → for your file manager / WhatsApp / Drive.
   - Tap the APK. Done.

2. **Upload to Google Play** (recommended for distribution):
   - Sign up at <https://play.google.com/console> (₹2000 one-time fee).
   - Create a new app → upload the `.aab` (not `.apk`) from PWABuilder.
   - Fill the listing (use copy from `about.html` + `privacy.html` + `terms.html`).
   - Wait ~3 days for review. Done.

3. **Verify Digital Asset Links** (avoids the brown URL bar):
   ```bash
   # After deploying assetlinks.json with the real SHA256:
   curl https://elite-emporium-one.vercel.app/.well-known/assetlinks.json
   # Should return the JSON with your real SHA256.
   ```

## PWA quality checks (already passing)

Run before every APK release:

```bash
# Lighthouse PWA score (Chrome DevTools → Lighthouse → PWA)
# Targets:
# ✅ Installable
# ✅ Service worker present
# ✅ manifest.json valid + icons 192/512
# ✅ HTTPS (Vercel default)
# ✅ Themed splash screen (background_color, theme_color)
# ✅ Maskable icons (we added purpose:"maskable")
# ✅ Shortcuts (we declared 4: Shop, Cart, Track, Orders)
```

## Versioning convention

| App version | Notes |
|---|---|
| **v10.0.0** (current) | First APK release. Bubblewrap appVersionCode 10. |
| v10.x.x | Patch/bugfix — no need to rebuild APK, the PWA shell auto-loads the new site. |
| v11.0.0 | Rebuild APK only if `manifest.json` changes (icons, shortcuts, scope) or for Play Store store-listing refresh. |

Most updates don't need an APK rebuild — the user opens the app, the PWA shell loads the latest HTML/JS/CSS from `elite-emporium-one.vercel.app`, and they see the new version instantly.

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Brown URL bar at top of app | `assetlinks.json` SHA256 mismatch | Paste correct SHA from `signing-key-info.txt` into `/.well-known/assetlinks.json`, redeploy. |
| App shows white screen on launch | `start_url` returns 404 | Confirm `start_url` in manifest.json matches a real route (currently `/index.html?source=pwa`). |
| App icon is square (no rounded corners) | Missing `purpose: "maskable"` icon | Already added in manifest.json v10. |
| Splash screen has wrong colors | `theme_color` / `background_color` mismatch with twa-manifest.json | Both files must match. Currently: `#DB3022` theme, `#F1F3F6` bg. |
| Install button doesn't appear on Chrome | PWA criteria failed | Run Lighthouse → PWA audit, fix red items. |

## Contact

For build help: WhatsApp +91 73586 50774 (Elite Emporium).
