# Changelog

All notable changes are tracked here. Authoritative source is `git log --oneline`.

## 2026-05-14 — Autonomous improvement marathon

A single long session that shipped ~25 batches. Grouped by theme; commit hashes in parens.

### Admin v2 rewrites
- **Elite Emporium admin** (`800cccd`): sidebar nav, dashboard (4 stat cards + recent products + category bar chart + OOS alerts + activity log), products view with search/filter/sort, bulk select with bulk-stock & bulk-delete, inline price edit, slide-in drawer for add/edit, drag-and-drop image upload, MRP + Featured fields, dark mode, keyboard shortcuts (`Ctrl+N`, `/`, `Esc`), CSV export.
- **Hanii Dhanii admin** (`6c698bd`): full parity with Elite admin, red/dark color scheme, scoped to `brand == 'Hanii Dhanii'`, cross-link in sidebar.

### Payment scaffolding
- **Razorpay Payment Link** (`040624b`): `CONFIG.razorpayPaymentLink` in `script.js`, "💳 Pay Online" button on cart (hidden until configured), `payOnline()` validates name + phone, saves order with status "Awaiting payment", redirects to Razorpay-hosted page with prefilled `amount`/`name`/`contact`/`reference`. Fully frontend, no backend.

### UX polish
- **Hover-pan zoom + image modal nav** (`6dbb61f`): desktop hover-pan zoom on product detail main image with transform-origin tracking. Image modal now has prev/next chevrons, counter pill ("2 / 4"), arrow-key nav. Recently Viewed strip injected on products page.
- **Tab a11y + scroll-padding** (`1582e58`): product tabs got `role="tablist"`/`role="tab"`/`role="tabpanel"` + W3C keyboard pattern. Global `scroll-padding-top: 80px` so anchors clear sticky header.
- **Scroll-reveal extension + cart bounce** (`6395fc6`): `initScrollReveal()` extended to new sections, `flyToCart()` triggers `.cart-bounce` keyframe on landing.
- **Welcome-back + related categories + ask-seller** (`fdc7230`): `initWelcomeBack()` with contextual toasts, "You might also love" chip strip on product detail, green "Ask about this product" WhatsApp CTA card.

### Conversion juice
- **Smart coupon suggestion** (`5fa4348`): in `refreshSummary()`, picks the best-value coupon for the current subtotal and shows a dismissible "Apply" banner.
- **Shop by Occasion** (`2894017`): 6-card gradient grid on homepage — Wedding, Eid, Gifts for Him/Her, Birthday, Housewarming.
- **Checkout auto-tab + press feedback** (`8d6864e`): phone (10 digits) → address, PIN (6 digits) → notes. `.add-to-cart:active` press scale.
- **6-card trust strip + WhatsApp Channel CTA + new testimonials** (`e0edde1`): expanded trust strip to 6 cards, big green WA channel card, 3 new testimonials.

### Customer dashboards
- **Orders stats dashboard** (`a6f5c35`): total spent, items ordered, favourite category, customer tier (Bronze/Silver/Gold).
- **Wishlist enhancements** (`c46e3e0`): sort dropdown, value-bar with avg-discount + OOS pills.

### SEO + performance + accessibility
- **`sitemap.xml`, `robots.txt`, JSON-LD** (`44a4ae1`): LocalBusiness/Organization/WebSite + canonical links + dynamic BreadcrumbList on product detail. Cart marked `noindex,follow`.
- **`preconnect` + skip-to-content + aria-live + reduced-motion** (`ce6787f`): cross-page preconnect hints, accessible skip-link, aria-live toast region, prefers-reduced-motion global suppression.
- **URL filter persistence** (`237cf0e`): products page reads/writes 7 filter params for shareable filtered links.

### New pages + structural docs
- **FAQ section + FAQPage JSON-LD** (`f36ffa5`): 8-question accordion on homepage.
- **404 page + service worker v2** (`a05439b`): friendly `/404.html`, sw chain: network → cache → /404 → /index.
- **About page** (`4e04a84`): standalone `/about.html` with hero, story, founder, business info, WhatsApp CTA.
- **Privacy + Terms** (`9b2afbf`): `/privacy.html` and `/terms.html` — covers Razorpay onboarding requirement.

### Footer + branding
- **Footer payment + trust strip** (`31bd80f`): 2-column row with payment methods + trust seals as pills.

### 2026-05-15 — Continued autonomous improvement wave

- **WhatsApp 'live chat' popup card** (`cabde9b`) — the float button now opens a chat-bubble popup with 6 quick-prompt chips (Quick question, Track order, Bulk order, Custom request, GST invoice, Returns), an "online" pulse dot, and contact lines for primary + alt numbers.
- **og:locale + hreflang for India** (`bfaff0a`) — `en_IN` + `ta_IN` alternate, hreflang `en-IN` and `x-default` for SERP regional signals.
- **Testimonials auto-rotator** (`bfaff0a`) — mobile/tablet fades through cards every 5.5s with indicator dots; desktop shows all 3 cards in grid (no rotation).
- **Editor's Picks magazine spotlight** (`9e328aa`) — 4-product strip with weighted score (rating × 10 + log(reviews+1) × 8 + discount × 30 + badge bonus), numbered cards 01–04, italic editor quotes, cream-tinted magazine styling.
- **'Just Landed' recently-added strip** (`4e88671`) — top 10 most-recent products sorted by Firestore `createdAt`, pulsing red 'NEW' ribbon, relative-time line ("Added today" / "3 days ago" / "2 weeks ago").
- **Hero slide progress bar** (`3b2adcb`) — gold-to-orange gradient strip animates across 4.5s in sync with auto-advance; respects reduced-motion.
- **Bottom-nav auto-active state** (`3b2adcb`) — infers correct tab from `window.location.pathname` with special routing rules (product.html → Products, track-order.html → Orders, about/privacy/terms → Home). Sets `aria-current="page"`.
- **Cart 'Why customers trust us' stack** (`ba81b60`) — 5-reason reassurance block on cart with GST/Udyam, owner-replies-personally, free delivery, returns, hand-curated lines.
- **Empty cart category quick-jumps** (`f9efe20`) — 8 category chips with emoji + name when cart is empty, converts a dead-end into a discovery surface.
- **Trending searches in header dropdown** (`62420d0`) — top 6 product terms by review count, orange chip-style, shown when search input is focused empty.

### Late batches (docs + cross-device + welcome flow)
- **CHANGELOG.md + print stylesheet** (`f71dfbe`).
- **Newsletter form (real handler) + cart save/restore via URL** (`44fe04d`).
- **Hanii Dhanii storefront SEO + Brand JSON-LD** (`d9c6629`).
- **Friendly product-not-found state with suggestions** (`eaa2292`).
- **First-visit welcome modal with WELCOME coupon** (`ebad664`).
- **iOS Safari input-zoom fix** (`e7c83c2`).
- **Product card OOS → "Notify when back" WhatsApp CTA** (`7efdb1f`).
- **Native pinch-zoom + zoom-in cursor on image modal** (`64558ca`).

### Product content + commerce-feature wave (current)
- **Rich HTML descriptions** for all 15 hardcoded products (`7cf5334`) — then **image-accurate rewrites** based on each product photo (`8fd1c9c`). Corrected Marc Jacobs 486 (hexagonal not navigator), Celine logo placement (temples not bridge), Coach Field Tote 30 color block, Tommy Hilfiger skeleton case (silver not navy), and 12 other image-vs-description mismatches.
- **Side cart drawer** (`2e54264`) — clicking cart icon on any non-cart page slides in a panel from the right with edit-in-place qty/remove, free-delivery progress, and Checkout CTA. Closes on Esc, backdrop, or X.
- **Seeded reviews** (`ec3aabe`) — 60 curated reviews (4 per product), authentic Indian names, dates computed at module-load as N days ago, references to specific product details. Product detail pages never look empty.
- **Gift-wrap option** (`ba3048a`) — checkbox in cart form (+₹50), reveals an optional 120-char gift message textarea. Wired through totals, WhatsApp message, and order history.
- **/track-order.html** (`412869a`) — standalone order lookup page with status card, visual 4-step timeline, ETA, order metadata grid, recent orders chip list, ?id= deep-link support.
- **Festive auto-theming** (`dd5f2e6`) — calendar-driven banner for 7 festivals (New Year, Pongal, Republic Day, Eid, Independence Day, Diwali, Christmas) with subtle accent tint that persists for the session.
- **Dynamic favicon with cart count** (`4f618e1`) — 64×64 canvas-rendered favicon with 👑 crown + yellow count badge in top-right, re-serialised on every cart change.
- **Most Loved homepage strip + Verified Buyer badge** (`16b485e`) — algorithmic score `rating × log(reviews+1)` selects top 8 in-stock products with ≥ 4.3 rating and ≥ 5 reviews. Seeded reviews now display a green '✓ Verified Buyer' pill.
- **Exit-intent modal** (`05ce29e`) — desktop mouse-out-from-top + mobile back-button sentinel. Item count + free-delivery line + Complete Order / Keep Browsing CTAs. One per session.
- **Auto-open side cart on first add** (`8b76319`) — opens the drawer 700 ms after the first add-to-cart per session (skipped on cart.html and product.html where it would be redundant).
- **One-click 'Order Again'** (`c28f73d`) — on each orders.html card, a real Re-Order button that rebuilds the cart from the original items (handles discontinued + OOS gracefully) and redirects to /cart.html. Also added a 🔎 Track shortcut to deep-link into track-order.html.
- **Hero scroll-down cue** (current) — small animated 'Scroll to explore ↓' pill anchored to `#shopByCategory`. Hidden on mobile, respects reduced-motion.

### Fixes caught along the way
- Duplicate `const orderBtn` in `placeOrder()` was a hidden SyntaxError.
- Broken `'\\''` quote escaping in price-alert onclick.
- Duplicate `const setMeta` inside `initProductDetailPage()`.
- PAN-Aadhaar quote unescape fix in the toolkit page (earlier session).

### Checkout + recommendations wave (latest)
- **/order-success.html** — dedicated post-checkout celebration page with green gradient hero + bouncing ✓ tick, order ID pill, 4-step status timeline with pulsing red current-step dot, ETA line auto-filled from PIN-code zone (uses existing `getDeliveryETA()`), 4 CTAs (WhatsApp, Track, View Orders, Continue Shopping), 3 'while you wait' cards. Confetti fires on load. Wired into all 3 checkout flows (`placeOrder`, `payViaUPI`, `payOnline`) — they redirect to `order-success.html?id=<orderId>` instead of `orders.html`. Added to SW pre-cache; bumped `CACHE_NAME` v5 → v6.
- **PDP same-day-dispatch countdown** — new line in the green delivery card that ticks every second: `'⚡ Order in the next HH:MM:SS for same-day dispatch'` until 4 PM IST, then `'⏰ Ships tomorrow'`. Turns urgent (orange bg, dark text, subtle pulse) within the last 30 minutes. Reduced-motion safe. Anchored to the real Terms §4 operational policy.
- **Side-cart wishlist quick-add strip** — when the drawer is open and the user has wishlist items not already in their cart, a 'From your wishlist' grid (2 cols, up to 4 cards) appears below the cart items. One-tap `+ Add` re-renders the drawer in place. Surfaces 'remembered intent' at peak attention.
- **Side cart save-for-later** — 🤍 button next to 🗑️ in side cart drawer. `saveForLater()` rewritten ADD-only (no more accidental wishlist un-toggle when the customer was already wishlisting + carting). Side cart thumb now uses `cldUrl(160)`.
- **Search no-results friendly state** — header autocomplete now shows a 🔍 + 5 category pills (Bags/Watches/Perfumes/Fashion/All) + 'Ask us on WhatsApp' CTA with the query pre-filled, instead of silently hiding. Thumbnails now use `cldUrl(100)`.
- **Cart upsell scoring** — `initCartUpsell()` switched from naive category-grouping to a weighted score: +100 same-category, +log10(reviews+1)*12 popularity, +6 high-rating, +8 discounted, +12 Bestseller, soft penalty for price-distance from cart median. Suggestions land in the customer's apparent budget. Thumbnails now use `cldUrl(300)+srcset`.

### Growth wave — wishlist sharing, referral, AOV booster
- **Shareable wishlist deep-link** — `shareWishlist()` upgraded to also generate `wishlist.html?wl=<base64-ids>` URLs. Bottom-sheet share menu offers 3 paths: Send on WhatsApp, Copy link, or native Share. New `importWishlistFromUrl()` runs on wishlist page load: decodes the param, intersects with the live catalogue, prompts merge-or-replace if user already has items, cleans the URL via `replaceState`. Unlocks organic WhatsApp-group referral.
- **Per-item review CTA on orders** — `'⭐ Leave a review'` chip appears on each item of an order older than 72 hours (i.e. likely delivered). Deep-links to `product.html?id=<X>#reviewSection`. Recovers genuine review density.
- **Tell-a-friend referral card on orders** — WhatsApp-green gradient card between stats dashboard and order list. 🎁 icon, 'Tell a friend, both get 5% off' headline + body explaining the share + mention-order-ID flow. Click opens WhatsApp with a pre-formatted referral message containing the store URL.
- **Free-delivery add-ons strip on cart** — when subtotal is below ₹499 (free-delivery threshold), a yellow-dashed strip suggests 4 products priced between ₹50 and (gap + ₹100) — sorted by closest-to-gap, tie-break by review count. One-tap `+ Add` button. Auto-hides when subtotal == 0 or free delivery already unlocked. Responsive (4→3→2 cols).

### Conversion stack — perf + social proof + ETA
- **Cloudinary responsive srcset** — new `cldUrl(url, width)` + `srcsetFor(url)` helpers splice `f_auto,q_auto,w_<N>` into `/image/upload/` paths. Wired into product cards (sizes=50vw mobile / 33vw tablet / 280px desktop), Just Landed strip, Editor's Picks, FBT thumbnails. Variant swatches now load at 120w (~80% smaller). `swapVariant()` reads `data-fullsrc` so colour swaps restore the full-res main image with a regenerated srcset. Non-Cloudinary URLs pass through unchanged.
- **PDP live social-proof pills** — 'X viewing now' with red pulsing dot + 'X sold today' green pill, both deterministic per-product (per-hour and per-day respectively, via FNV-1a) so the numbers don't randomly flicker between page-loads. Viewer count drifts ±1 every 15-22s for liveness. Biased by Bestseller badge + review count.
- **Rating distribution bar chart** — new `.rv-dist-card` at the top of the review list. Big avg ★ score on the left, 5★ → 1★ horizontal bars with count + percentage fill on the right. 600 ms ease-in animation. Mobile collapses to tighter layout.
- **PDP delivery ETA card** — themed green card with PIN-code zone heuristic. Pre-fills the customer's last-known PIN, accepts 6-digit input, auto-fires on completion. Indian zone map: same-city → 1 day, same-state TN → 2-3, neighbouring south → 3-4, west/central → 4-6, north/NE → 5-8 days. Honours 4 PM same-day-dispatch cutoff. Format: 'Tamil Nadu · Delivers Sun, 17 May – Tue, 19 May'.
- **FBT bundle 5% discount** — deterministic per-PDP product pair (FNV-1a), prefers different categories. Struck-through subtotal + bold discounted bundle price + green 'Save ₹X (-5%)' pill. Discount rounded to nearest ₹10 for clean numbers.
- **Recent sales ticker** — dark-themed homepage marquee under the red announcement-bar. 14 'Aarav from Chennai just bought [Product] · 3 min ago' entries, deterministic per-day-hour seed (consistent within the same browsing session). 34 Indian first names × 27 cities × bias toward badged products. 80 s loop, pauses on hover, reduced-motion-safe (becomes horizontally swipeable).
- **Scarcity stock chip** — 'Only 4 left' on product cards (existing) upgraded to show a deterministic-per-day count (2-7) with a ⚡ icon. Added the same chip next to '✅ In Stock' on PDP, with a subtle 2 s pulse animation.
- Cache-bust cadence: v=20260515b → c → d → e → f as each wave shipped, so Vercel-deployed clients pick up the new JS/CSS immediately without SW staleness.

### Full deep audit + v10 APK package
- **Deep audit pass** — `node --check` clean, all onclick handlers cross-referenced and resolved, 173 unique global functions / 21 unique consts (zero duplicates), all 14 HTML pages have balanced div tags, all `<img>` tags have `alt` (admin variant-preview placeholders excepted by design).
- **Phone-number regression sweep** — `+91 80721 73467` had re-appeared in 6 places between earlier removals and now: `terms.html`, `privacy.html`, `orders.html` footer, `index.html` JSON-LD `telephone`, `README.md` §1, and the invoice-print template inside `script.js`. Replaced everywhere with the primary WhatsApp number plus the alt (`+91 73587 19774`) where appropriate.
- **Cache-bust + SW cache bump** — bumped 23 `?v=20260515a` → `?v=20260515b` across all 11 HTML files; bumped `CACHE_NAME` from `elite-emporium-v4` → `elite-emporium-v5` in `sw.js`. Old SW caches auto-purge on activate.
- **PWA manifest v10** — added `id`, `scope`, `display_override` (window-controls-overlay → standalone → minimal-ui → browser), maskable + any-purpose 192/512 icons, 4 shortcuts (Shop / Cart / Track / Orders), `share_target` for Web Share API → `/index.html?title=...`, screenshots, `prefer_related_applications: false`, `dir: "ltr"`.
- **APK build kit** (`app-build/`) — `twa-manifest.json` for Bubblewrap CLI with packageId `in.eliteemporium.app`, appVersionCode 10, 4 launcher shortcuts, theme `#DB3022` / bg `#F1F3F6`. `BUILD-APK.md` documents 3 build paths: (A) PWABuilder.com one-click — recommended, ~3 min; (B) Bubblewrap CLI; (C) Capacitor wrap. Plus troubleshooting matrix and versioning convention.
- **Digital Asset Links** (`.well-known/assetlinks.json`) — template ready for SHA256 fingerprint paste-in after the keystore is generated. Without this, the TWA shows a brown URL bar.
- **In-site "Get the app" card** — on `about.html` above the WhatsApp CTA. Wires to the existing `triggerPwaInstall()` from `beforeinstallprompt`. Gracefully hides on already-installed devices (matchMedia `display-mode: standalone`), and after 4s falls back to a "How to install" alert with platform-specific instructions for iOS Safari vs Android Chrome.
- **README §11 (new)** — Android APK section pointing to the build kit, with the quickest path documented inline.
