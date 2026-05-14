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

### Late batches (docs + cross-device + welcome flow)
- **CHANGELOG.md + print stylesheet** (`f71dfbe`).
- **Newsletter form (real handler) + cart save/restore via URL** (`44fe04d`).
- **Hanii Dhanii storefront SEO + Brand JSON-LD** (`d9c6629`).
- **Friendly product-not-found state with suggestions** (`eaa2292`).
- **First-visit welcome modal with WELCOME coupon** (`ebad664`).

### Fixes caught along the way
- Duplicate `const orderBtn` in `placeOrder()` was a hidden SyntaxError.
- Broken `'\\''` quote escaping in price-alert onclick.
- Duplicate `const setMeta` inside `initProductDetailPage()`.
- PAN-Aadhaar quote unescape fix in the toolkit page (earlier session).
