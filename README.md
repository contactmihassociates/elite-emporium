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
├── index.html              # Homepage: hero slideshow, category grid, flash sale, featured, testimonials
├── products.html           # Product listing: filters (category/price/rating/stock), sort chips, grid/list view
├── product.html            # Product detail: gallery, variants, price, qty, reviews, tabs (desc/delivery/seller), pin checker
├── cart.html               # Cart + checkout form + coupon + delivery progress + WhatsApp order
├── wishlist.html           # Saved items, "Add all to cart", "Share wishlist"
├── orders.html             # Local order history (from localStorage) with timeline + GST invoice print
├── admin.html              # Admin panel (Firebase Auth gated) — manage products
├── hanii-dhanii.html       # Partner brand storefront
├── hanii-dhanii-admin.html # Partner brand admin panel
├── script.js               # ALL frontend JS (~4150 lines after recent additions)
├── styles.css              # ALL styles (~4500 lines)
├── firebase-config.js      # Firebase web config (committed; key is public)
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (basic)
├── serve.bat / serve.ps1   # Local dev: `python -m http.server` shortcut
├── images/                 # Logo + product assets (most products use Cloudinary URLs)
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

This list is approximate — `git log --oneline` is authoritative for what landed and when.

- **Apple-style refresh:** pill buttons, larger hero, soft shadows, 18px card radius, Inter + Apple system stack.
- **PAN-Aadhaar quote unescape fix** in the toolkit page.
- **15 long-form Insights briefs** added.
- **Admin edit-product feature** so existing products can be modified without re-creating.
- **Hanii Dhanii partner brand** integration (storefront + admin + linked product cards).
- **Rich HTML descriptions** for ~27 newer products.
- **Quantity selector on product detail page** (1-10, syncs with Add to Cart + Buy Now + sticky bar).
- **Product detail coupon nudge chip** ("Use ELITE10 — Copy").
- **Wishlist button inside `.pd-actions`**.
- **Keyboard left/right arrows** to cycle product variants.
- **Press `/` to focus header search**, `Esc` to close any modal.
- **PIN-to-state auto-detect** in the checkout form (covers all major Indian state code prefixes).
- **Bulk order CTA** on the cart when subtotal ≥ ₹2000.
- **Scroll position restoration** when returning from a product page.
- **Header wishlist shortcut** auto-injected into `.header-actions` on all pages.
- **Fixes:** duplicate `const orderBtn` in `placeOrder()` (was a hidden SyntaxError), broken price-alert onclick (`'\\''` quote escaping), duplicate `const setMeta`.

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

**No gateway integrated yet.** Today's flow is WhatsApp → manual UPI/bank transfer.

Recommended next step: **Razorpay Payment Links** (zero-code, generate per-order via dashboard or API, share via WhatsApp). For embedded checkout: **Razorpay Standard Checkout JS**, but that needs a tiny backend (Cloud Functions, Cloudflare Worker, or Vercel serverless function) to create `order_id`s server-side — the secret key cannot live in the browser.

If keeping it 100% frontend: switch to **Razorpay Payment Button** (one HTML snippet, hosted checkout) or **Instamojo Payment Links**. Both work without a server.

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
