# Elite Emporium

> Vanilla HTML/CSS/JS e-commerce site for **Elite Emporium**, a GST-registered retail business in Kayalpattinam, Thoothukudi, Tamil Nadu. Orders are placed via WhatsApp. Live at https://elite-emporium-one.vercel.app/

This README is intentionally detailed — it's the entry point for any new coding session so the next agent can be productive immediately without re-discovering the architecture.

---

## 1. Product / Business context

- **Business:** Elite Emporium — small premium retail store (clothing, bags, watches, beauty, jewellery, kitchen).
- **Location:** 183b, Sadukai Street, Kayalpattinam – 628204, Thoothukudi District, Tamil Nadu.
- **GST:** 33DWGPN3169G1ZF · **Udyam:** UDYAM-TN-26-0090343
- **Contact:** +91 80721 73467 · WhatsApp **+91 7358 650 774** · eliteemporium112024@gmail.com
- **Order flow:** Customer browses → adds to cart → fills delivery details → clicks "Place Order via WhatsApp" → opens WhatsApp with a pre-formatted order message → store confirms manually. No payment gateway yet — see §8.
- **Partner brand:** *Hanii Dhanii* (fancy & cosmetics) lives on its own page (`hanii-dhanii.html`) with its own admin panel (`hanii-dhanii-admin.html`).

### Standing instruction from the owner

> *"Keep improvising the website without stopping until you run out of tokens, I fully trust you and give you full control, do everything without asking."*

Treat this as the default for autonomous sessions: pick high-impact UX improvements and ship them. Stop only when the user explicitly tells you to stop or when you genuinely can't make further progress without input.

---

## 2. Tech stack

- **Frontend:** Plain HTML5 + vanilla JS (no framework, no build step) + Google Fonts (Inter + Apple system stack).
- **Styling:** A single `styles.css` (~4500 lines). Apple-inspired aesthetic — pill kickers, soft shadows, 18px card radius.
- **Data:** Firebase Firestore (`products` collection). Pre-seed of "hardcoded" products lives in `script.js` as `HARDCODED_PRODUCTS`; admin-added products in Firestore are merged on top.
- **Auth:** Firebase Authentication (email/password) — only used by the admin panel.
- **Images:** Cloudinary (`dwygvtjad` cloud, `ml_default` unsigned preset, folder `elite-emporium`).
- **Hosting:** Vercel, auto-deploy from the `master` branch on push.
- **PWA:** `manifest.json` + `sw.js` (service worker, basic offline shell).
- **No backend.** Everything runs in the browser. Firestore reads happen client-side with the public web API key.

---

## 3. File layout

```
elite-emporium/
├── index.html              # Homepage: hero, categories, FAQ, testimonials, trust strip, partner brand
├── products.html           # Product listing with full URL-persisted filter state
├── product.html            # Product detail: hover-pan zoom, variants, qty, reviews, related categories
├── cart.html               # Cart + checkout form + Razorpay Pay Online (opt-in) + WhatsApp order
├── wishlist.html           # Saved items: sort dropdown, value bar with avg-discount + OOS counts
├── orders.html             # Local order history with stats dashboard (tier, total spent, fav category)
├── about.html              # Standalone About page (story, founder, business info)
├── privacy.html            # Privacy Policy (legal, covers Razorpay onboarding)
├── terms.html              # Terms & Conditions (ordering, returns, liability)
├── track-order.html        # Customer order lookup by ID with timeline + ETA
├── 404.html                # Friendly 404 with category quick-jump
├── admin.html              # 10x admin panel (Firebase Auth gated) — manage products
├── hanii-dhanii.html       # Partner brand storefront
├── hanii-dhanii-admin.html # Partner brand admin panel (parity with main admin)
├── script.js               # ALL frontend JS (~4400 lines)
├── styles.css              # ALL styles (~4900 lines)
├── firebase-config.js      # Firebase web config (committed; key is public)
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (v2) with network→cache→404 navigation chain
├── sitemap.xml             # Sitemap with category landing pages
├── robots.txt              # Allow everything except admin panels + firebase-config
├── serve.bat / serve.ps1   # Local dev: `python -m http.server` shortcut
├── images/                 # Logo + a few legacy product assets (most products use Cloudinary)
├── telegram-bot/           # Separate Node project — Telegram order notifications (independent)
└── README.md               # ← this file
```

### What lives where in `script.js`

`script.js` is one file but is internally sectioned by `// ── HEADER ───` style comments. Important anchors (line numbers drift; use Grep):

- `HARDCODED_PRODUCTS` — initial product catalogue baked into the bundle.
- `CONFIG` — site-wide constants (WhatsApp number, free-delivery threshold ₹499, etc.).
- `wishlist`, `cart`, `compareList`, `_activeCoupon` — module-level state.
- `addToCart(productId, color, image, qty)` — add (or increment) cart item.
- `renderCart()` / `refreshSummary()` — cart page render + totals + bulk-order CTA + free-delivery bar.
- `placeOrder()` — validates form, saves to order history, opens WhatsApp, launches confetti, redirects to `orders.html`.
- `buildWhatsAppMessage(details)` — formats the order message sent to the store.
- `initProductDetailPage()` — wires up the product detail page (variants, thumbnails, qty selector, coupon chip, wishlist button, keyboard arrows, swipe).
- `initProductsPage()` — filtering, sorting, category banner, scroll-position restoration.
- `initWishlistPage()`, `initOrdersPage()`, `initHomePage()` — page bootstrappers.
- `initHeaderSearch()` — search suggestions dropdown (live product matches).
- `initMiniCart()` — hover dropdown on the cart button.
- `initSocialProof()` — random "X from Y just ordered Z" toast.
- `launchConfetti()` — canvas-based 120-particle confetti for order success.
- `flyToCart(imgSrc)` — fly-to-cart animation on add.
- `printGSTInvoice(orderId)` — opens a print-ready GST invoice window.
- `initAccessibility()` — ARIA labels, `kbd-nav` focus class, `/` to focus search, `Esc` to close modals.
- `initPageTransitions()` — fade-out on internal nav.
- `initLazyImageFade()` — IntersectionObserver blur-up.
- `initScrollProgress()`, `initScrollHeader()`, `initBackToTop()`, `initDarkMode()`, `initFlashSaleTimer()` — small utilities.

Bottom of file: a single `DOMContentLoaded` handler bootstraps everything in the right order, then calls the page-specific `init…Page()` based on which DOM hooks exist.

### What lives in `styles.css`

One file, sectioned by comment banners. Loosely: root tokens → reset → header → product cards → cart → product detail (`.pd-*`) → wishlist (`.wl-*`) → orders (`.oh-*`) → admin overrides (very little) → animations → dark mode (`[data-theme="dark"] ...`) → responsive (`@media`).

Dark mode is driven by `data-theme="dark"` on `<html>`, toggled by `initDarkMode()`. Most colors flow through CSS variables (`--bg`, `--text`, `--text2`, `--border`, `--red`, `--green`, etc.) so a new component only needs to use the tokens to support both modes.

---

## 4. Firebase + Cloudinary

### Firebase

- Config is in `firebase-config.js` as `window.firebaseConfig`. Public — safe to commit because Firebase web keys are not secrets; security is enforced by Firestore rules.
- Collections in use: `products` (Elite Emporium) and a separate collection used by Hanii Dhanii.
- Auth: email/password. Admin user(s) created manually in the Firebase console. The admin login form just calls `signInWithEmailAndPassword`.

### Cloudinary

- Cloud name: `dwygvtjad`. Unsigned preset: `ml_default`. Folder: `elite-emporium`.
- Uploads happen directly from the admin panel using `XMLHttpRequest` to `https://api.cloudinary.com/v1_1/<cloud>/image/upload`.
- Cloudinary is unsigned for ease — anyone with the preset name can upload, which is acceptable for this scale.

---

## 5. Recent feature additions (rough timeline)

This list is approximate — `git log --oneline` is authoritative for what landed and when. See also **CHANGELOG-style commits** like `feat(admin):`, `feat(cart):`, `perf+a11y:`, `feat(seo):`, etc.

### Original wave (Apple-style refresh era)
- Apple-style refresh: pill buttons, larger hero, soft shadows, 18px card radius, Inter + Apple system stack.
- 15 long-form Insights briefs added.
- Hanii Dhanii partner brand integration (storefront + admin + linked product cards).
- Rich HTML descriptions for ~27 newer products.

### UX polish wave
- Quantity selector on product detail page (1–10, syncs with Add to Cart + Buy Now + sticky bar).
- Product detail coupon nudge chip ("Use ELITE10 — Copy").
- Wishlist button inside `.pd-actions`.
- Keyboard left/right arrows to cycle product variants.
- Press `/` to focus header search, `Esc` to close any modal.
- PIN-to-state auto-detect in the checkout form.
- Bulk order CTA on the cart when subtotal ≥ ₹2000.
- Scroll position restoration when returning from a product page.
- Header wishlist shortcut auto-injected into `.header-actions` on all pages.

### Admin 10x wave (commit `800cccd`)
- **`admin.html`** completely rewritten with sidebar nav (Dashboard / Products / Categories / Orders / Settings).
- Dashboard: stat cards, recent products, category bar chart, OOS alerts, activity log.
- Products: search, category/stock filter, sort, bulk select with bulk mark-stock and bulk-delete, inline price edit, drag-and-drop image upload.
- MRP field with live discount % preview, Featured toggle.
- Slide-in drawer for add/edit. CSV export. Dark mode persisted. `Ctrl+N`, `/`, `Esc` shortcuts.

### Hanii Dhanii admin parity (`6c698bd`)
- `hanii-dhanii-admin.html` rewritten with the same architecture, branded red, scoped to `brand == 'Hanii Dhanii'`. Activity log key: `hdAdminActivity`. Cloudinary folder: `elite-emporium/hanii-dhanii`.

### Payment scaffolding (`040624b`)
- `CONFIG.razorpayPaymentLink` in `script.js` + a "💳 Pay Online" button on cart (hidden by default). When configured, `payOnline()` validates name + 10-digit phone, saves the order to history with status `"Awaiting payment"`, then opens the Razorpay-hosted page in a new tab with prefilled `amount`, `prefill[name]`, `prefill[contact]`, `reference` (order ID).

### Storefront UX polish (`6dbb61f`)
- Hover-pan zoom on the product detail main image (desktop only, skipped on touch). `transform: scale(2.2)` with `transformOrigin` tracking the cursor.
- Image modal now builds a gallery from `.pd-thumb` data attrs — prev/next chevrons, "2 / 4" counter pill, arrow-key navigation.
- "Recently Viewed" horizontal strip injected above the products grid (shown after viewing 2+ products).

### Performance + Accessibility (`ce6787f`)
- `preconnect` to Cloudinary + gstatic on key pages; `preload` for `styles.css` and logo on index.
- Skip-to-content link auto-injected (visible only on focus). Target falls back to `<main>` / `.fk-main`.
- Toast container now has `role="status" aria-live="polite" aria-atomic="true"`.
- Global `@media (prefers-reduced-motion: reduce)` killing animations & transitions.

### SEO (`44a4ae1`)
- New `sitemap.xml` (homepage + 6 main pages + 18 category landing URLs) and `robots.txt` (disallows `/admin.html`, `/hanii-dhanii-admin.html`, `/firebase-config.js`; points to sitemap).
- `index.html`: full `@graph` JSON-LD — LocalBusiness (address, geo, hours, payment, aggregateRating), Organization (vatID=GST, identifier=Udyam), WebSite (SearchAction for sitelinks search box).
- Canonical links on index/products/product/cart. Product page sets canonical dynamically to the actual `?id=...` URL.
- BreadcrumbList JSON-LD on `products.html` (static) and `product.html` (generated dynamically: Home → Products → Category → Product).
- Cart marked `noindex,follow`.

### Trust & social proof (`e0edde1`)
- Trust strip expanded from 3 → 6 cards (Free Delivery, WhatsApp Orders, GST Registered, 7-Day Returns, Same-Day Dispatch, Real Human Support).
- Big green WhatsApp Channel CTA card.
- 3 new testimonials (6 total) covering kitchen, local lehenga buyer, B2B GST gifting.

### Welcome-back + related categories + ask-seller (`fdc7230`)
- `initWelcomeBack()` — toast on return after >1h, contextual: cart items / recently viewed / fresh welcome.
- Product detail: "You might also love" chip strip with curated `RELATED_MAP` per category.
- Product detail: "Have a question about this product?" WhatsApp CTA card (green, hover-arrow).

### Orders + Wishlist + Footer + Filters wave
- **Orders stats dashboard** (`a6f5c35`): 4-card strip above order list — total spent, items ordered, favourite category, customer tier (Bronze/Silver/Gold).
- **Wishlist enhancements** (`c46e3e0`): sort dropdown (Recently added / Price / Discount / A-Z), value-bar with avg-discount-% pill, OOS count pill.
- **Footer trust strip** (`31bd80f`): two-column row with payment methods (UPI/GPay/PhonePe/Paytm/Bank/WA Cash) + trust seals (GST/Udyam/Privacy/Returns) as pills.
- **URL filter persistence** (`237cf0e`): products page reads & writes 7 filter params (category, search, sort, minPrice, maxPrice, rating, inStock) via `history.replaceState`. Any filter combination = shareable link.

### FAQ + 404 + offline + About wave
- **FAQ section** (`f36ffa5`): 8-question accordion on homepage between promo banner and partner brand, with FAQPage JSON-LD for SERP rich snippets.
- **404 page** (`a05439b`): `/404.html` with floating-emoji illustration, 3 primary CTAs, 10-category quick-jump grid.
- **Service worker v2** (`a05439b`): bumped to v2, precaches `/404.html`, navigation chain now network → cache → /404.html → /index.html.
- **About page** (`4e04a84`): standalone `/about.html` with hero pillars, founder card, business info grid, WhatsApp CTA. Added to sitemap + sw cache.

### A11y + animation polish wave
- **Tab a11y + scroll-padding** (`1582e58`): product detail tabs got proper `role="tablist"`/`role="tab"`/`role="tabpanel"` semantics, full W3C keyboard pattern (Left/Right cycle, Home/End jump). Added global `scroll-padding-top: 80px` so anchor jumps clear the sticky header.
- **Scroll-reveal extension + cart bounce** (`6395fc6`): `initScrollReveal()` now also reveals FAQ, footer-strip, WhatsApp channel CTA, fk-deal-row, about sections, oh-stats. `flyToCart()` now triggers a `.cart-bounce` keyframe on the cart icon when the flying image lands.

### Conversion-juice wave
- **Smart coupon suggestion** (`5fa4348`): inside `refreshSummary()`, picks the best-value coupon for the current subtotal (SUMMER15 only above ₹500) and shows a one-click "Apply" banner. Dismissible per session.
- **Shop by Occasion** (`2894017`): 6-card gradient grid on homepage (Wedding, Eid, Gifts for Him/Her, Birthday, Housewarming). Each card uses a CSS custom property `--occ-grad` for its background. Drives discovery for scenario-shoppers.
- **Checkout auto-tab + button feedback** (`8d6864e`): focus jumps from phone (10 digits) → address and from PIN (6 digits) → notes (only if next field is empty). `.add-to-cart:active` adds a 0.96 scale press feedback.

### Legal pages wave (`9b2afbf`)
- **`/privacy.html`** — what we collect, how we use it, who we share with, cookies, retention, rights, security, contact. Covers Razorpay onboarding requirement.
- **`/terms.html`** — ordering, payment, shipping, returns, product accuracy, IP, liability cap, governing law (Thoothukudi jurisdiction).
- Both added to sitemap, sw cache, and footer Quick Links. Cross-linked from each other's footer.

### Docs + print + newsletter + cart-share wave
- **CHANGELOG.md** (`f71dfbe`) — single-day timeline of all batches, grouped by theme, with commit hashes.
- **Print styles** (`f71dfbe`) — full `@media print` rules: hides chrome (header, footer, nav, toasts, CTAs), forces serif/black-on-white, page-break-inside on order cards. Orders.html now prints as a clean multi-order receipt.
- **Newsletter handler** (`44fe04d`) — `handleNewsletter()` now validates email regex, stores subscribers in localStorage (capped 50), detects duplicates, auto-copies ELITE10 coupon to clipboard, fires a delayed WA-channel invite toast.
- **Cart save & restore** (`44fe04d`) — `shareCart()` embeds a base64 cart token into the WA message as a `?restore=...` link. `restoreCartFromUrl()` decodes it on cart page load with REPLACE/MERGE prompt. Enables cross-device cart handoff.

### Hanii Dhanii storefront SEO parity (`d9c6629`)
- Added canonical, OG tags, preconnect hints, manifest, theme-color, and Brand JSON-LD (declaring HD with `parentOrganization = Elite Emporium`) to the partner brand page.

### Product page polish + first-visit conversion wave
- **Product not-found state** (`eaa2292`) — friendly empty state with floating-emoji illustration, 3 recovery CTAs (Browse, Home, Ask on WhatsApp with the bad id prefilled), 6 high-rated suggested products. Sticky bar hidden in this state.
- **First-visit welcome modal** (`ebad664`) — one-time-per-device modal 1.8s after first homepage land. Bouncy confetti, WELCOME coupon (5% off) with one-click copy, 3 perks, Start Shopping CTA. ARIA-correct (`role="dialog"`, `aria-modal`, `aria-labelledby`), Esc/backdrop/X to dismiss. Skipped if user already has order history.

### Product content + commerce features wave (latest)
- **Rich + image-accurate descriptions** (`7cf5334` → `8fd1c9c`) — all 15 products now have multi-paragraph HTML descriptions verified against actual photos. Fixed Marc Jacobs 486 (hexagonal not navigator), Celine logo placement, Coach Field Tote color block, TH skeleton case colour, and 10+ other mismatches.
- **Side cart drawer** (`2e54264`) — slide-in panel from cart icon click on any non-cart page, with edit-in-place qty/remove, free-delivery progress, and Checkout CTA. Esc/backdrop/X to close.
- **Seeded reviews** (`ec3aabe`) — 60 curated reviews (4 per product), authentic Indian names, dates computed as N days ago, references to specific product details. Product pages never look empty.
- **Gift-wrap option** (`ba3048a`) — `+₹50` checkbox + optional 120-char gift message. Wired through totals, WhatsApp message, order history.
- **Track Order page** (`412869a`) — `/track-order.html` with status card, 4-step timeline, ETA, order metadata, recent orders, `?id=` deep-link.
- **Festive auto-theming** (`dd5f2e6`) — calendar-driven banner for 7 festivals + persistent accent tint. New Year, Pongal, Republic Day, Eid, Independence Day, Diwali, Christmas.
- **Dynamic favicon** (`4f618e1`) — canvas-rendered 👑 favicon with yellow cart-count badge in the top-right, re-serialised on every cart change.

### Fixes caught along the way
- Duplicate `const orderBtn` in `placeOrder()` — was a hidden SyntaxError.
- Broken `'\\''` quote escaping in price-alert onclick.
- Duplicate `const setMeta` inside `initProductDetailPage()`.
- PAN-Aadhaar quote unescape fix in the toolkit page.

---

## 6. Local development

```bat
:: from the repo root, Windows
serve.bat
```

…starts a `python -m http.server` on port 8000. Open http://localhost:8000/.

No build step. Just edit files and refresh. Service worker may cache aggressively — hard refresh or unregister it in DevTools if stale.

Deployment is automatic via Vercel on push to `master`.

### Sanity checks

- `node --check script.js` — catches JS syntax errors before they hit the browser. **Always run this after non-trivial edits to `script.js`** — the file is large and easy to break.
- Manual browser check: open index/products/product/cart/orders/wishlist and confirm no console errors.

---

## 7. Admin panel

`admin.html` is a self-contained SPA that gates everything behind Firebase Auth.

**What it can do (current capabilities — see `admin.html` for the truth):**

- Add products (name, price, category, description, badge, in-stock toggle, multiple color variants with images).
- Edit existing products (images are read-only in edit mode — delete & re-add to swap images).
- Toggle in-stock / out-of-stock inline.
- Delete products.
- Sees only products in Firestore (not the hardcoded ones in `script.js`).

The admin panel was substantially upgraded — search, filter, sort, bulk actions, MRP field, dashboard stats, dark mode, CSV export, drag-and-drop uploads, keyboard shortcuts. See `admin.html` for the current shape.

A separate `hanii-dhanii-admin.html` exists for the partner brand with its own credentials.

---

## 8. Payments

**Status:** WhatsApp-only by default. A Razorpay Payment Link button is scaffolded on the cart but hidden until the link is configured.

**To turn on online payments:**

1. Sign in to [Razorpay Dashboard](https://dashboard.razorpay.com/) → **Payment Pages** → create a "Customer-amount" page (the customer types the amount).
2. Copy the public link (e.g. `https://razorpay.com/payment-link/pl_XXXXXXXX`).
3. Paste it into `CONFIG.razorpayPaymentLink` at the top of `script.js`.
4. Done. The "💳 Pay Online" button appears on the cart next to "Place Order via WhatsApp".

What the button does (`payOnline()` in `script.js`):
- Validates name + 10-digit phone are filled.
- Saves the order to local history with status `"Awaiting payment"` and a generated order ID.
- Opens the Razorpay-hosted Payment Page in a new tab, prefilling `amount`, `prefill[name]`, `prefill[contact]`, and `reference` (the order ID).

This is **fully frontend** — no backend needed. The merchant reconciles by matching the `reference` field in Razorpay → Payments → Filter by reference.

**Upgrade path** (when you want embedded checkout instead of hosted page):
- **Razorpay Standard Checkout JS** — needs a tiny backend (Vercel serverless function or Firebase Cloud Function) to create `order_id`s server-side; the API secret cannot live in the browser. ~30 lines of server code + ~20 lines of frontend.
- **Razorpay Payment Button** (zero-code HTML snippet) — works for fixed-amount only or single-product flows.

**Alternative gateways** (similar simplicity):
- **Instamojo Payment Links** — even easier signup, slightly higher fees.
- **Cashfree Payment Links** — comparable to Razorpay.

---

## 9. Telegram bot

`telegram-bot/` is a standalone Node.js project that sends order notifications to a Telegram chat. It is independent from the website and has its own README inside that folder. Not deployed by Vercel.

---

## 10. Conventions / gotchas

- **No framework, no build.** Resist the urge to add Webpack/Vite/React. The constraint is part of the deal — the owner wants something that opens in any browser as static files.
- **Edit, don't recreate.** Prefer `Edit` tool over rewriting whole files unless the diff is genuinely better as a rewrite (the admin panel is a fair exception).
- **No comments unless they explain *why* something non-obvious is there.** Don't narrate the code.
- **Don't break existing pages.** Touch all pages with a `header` (index, products, product, cart, orders, wishlist) consistently — they share the same header HTML and `header-actions` div, so JS-injected widgets show up everywhere.
- **Cart state is `localStorage` keyed by `eliteEmporiumCart`.** Wishlist: `eliteEmporiumWishlist`. Orders: `eliteEmporiumOrders`. Reviews: `eliteEmporiumReviews`. Form draft: `eliteEmporiumFormDraft`. Search history: `eliteEmporiumSearchHistory`. Recently viewed: `eliteEmporiumRecentlyViewed`.
- **`document.title` shows cart count as `(N) Title`** — handled in `updateCartUI()`.
- **`HARDCODED_PRODUCTS` IDs are numeric.** Firestore products use `Date.now()` as their numeric `id` so they don't collide. The Firestore document `docId` is separate (string) and only used inside the admin panel.
- **Hanii Dhanii product URLs** previously used the Firestore `docId` and broke `product.html?id=...` (which expects the numeric id). That's fixed — uses numeric id now.

---

## 11. Where to start in a new session

1. Read `git log --oneline -20` to see what just landed.
2. `git status` to see any uncommitted work in flight.
3. Skim this README for context, then jump into `script.js` and `styles.css` based on the task.
4. If the request is open-ended ("keep improvising"), pick something user-visible from the long backlog: better empty states, micro-animations, accessibility audit, lighthouse score, new sections, fresh testimonials, partner brand parity, payment integration scaffolding.
5. Always finish with `node --check script.js` before declaring done.
