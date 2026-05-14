/* ============================================
   ELITE EMPORIUM - E-COMMERCE CORE SCRIPT
   ============================================ */

// ── BUSINESS CONFIG ─────────────────────────
const CONFIG = {
  businessName: "Elite Emporium",
  whatsappNumber: "917358650774",
  ownerName: "Muhammad Abubucker Siddeek S M N",
  address: "183b, Sadukai Street, Kayalpattinam, Thoothukudi, Tamil Nadu - 628204",
  gst: "33DWGPN3169G1ZF",
  udyam: "UDYAM-TN-26-0090343",
  email: "eliteemporium112024@gmail.com",
  phone: "8072173467",
  minFreeDelivery: 499,
  deliveryCharge: 60,

  // Razorpay Payment Link — drop a public link here to enable "Pay Online".
  // 1. Sign in to Razorpay → Payment Pages → create a "Customer-amount" page.
  // 2. Paste the public URL (e.g. https://razorpay.com/payment-link/...).
  // 3. The "Pay Online" button on the cart will then open it in a new tab.
  // Leave empty to keep the cart WhatsApp-only.
  razorpayPaymentLink: "",
};

// ── PRODUCT CATALOG (base / hardcoded) ───────
const HARDCODED_PRODUCTS = [
  // Home & Kitchen
  {
    id: 1, name: "3-Piece Stainless Steel Grater & Drain Bowl Set",
    category: "Home & Kitchen", price: 580, mrp: 799,
    image: "images/products/IMG-20260308-WA0138.jpg",
    desc: "Versatile 3-in-1 stainless steel kitchen set: mixing bowl, perforated drain colander, and multi-blade grater lid (5mm julienne, 3mm slicer, wavy slicer). Thickened food-grade steel — can be used directly on heat. Perfect for washing rice, draining vegetables, grating and slicing.",
    rating: 4.3, reviews: 12, badge: "New", inStock: true
  },
  {
    id: 2, name: "KBC Jumbo Grill – 2000W Electric Contact Griller",
    category: "Home & Kitchen", price: 1600, mrp: 2299,
    image: "images/products/IMG-20260308-WA0140.jpg",
    desc: "Heavy-duty 2000W KBC Jumbo Grill with large non-stick ribbed plates. Makes sandwiches, paninis, grilled chicken, vegetables and more. Wide-opening hinge fits thick items. 2-year warranty. Ideal for families who want quick, healthy grilled meals at home.",
    rating: 4.5, reviews: 8, badge: "Popular", inStock: true
  },
  // Bags
  {
    id: 3, name: "Cute Animal Print 3-Grid Cosmetic Organiser Bag",
    category: "Bags", price: 500, mrp: 699,
    image: "images/products/IMG-20260308-WA0144.jpg",
    desc: "Adorable panda-face printed PU leather makeup bag with 3 spacious grid compartments and a carry handle. Roomy enough for full-size foundation, palettes, brushes and skincare. Zippered closure keeps everything secure. Perfect travel companion for your beauty essentials.",
    rating: 4.2, reviews: 15, inStock: true
  },
  {
    id: 7, name: "YSL Quilted Tote Bag with Matching Pouch – 12A Quality",
    category: "Bags", price: 2999, mrp: 4499,
    image: "images/products/IMG-20260308-WA0163.jpg",
    desc: "Luxurious cream quilted leather tote with oversized gold YSL logo hardware and comfortable top handles. Includes a matching quilted zip pouch. Premium 12A quality with meticulous stitching and superior leather finish. A statement piece for every occasion.",
    rating: 4.6, reviews: 27, badge: "Premium", inStock: true
  },
  {
    id: 8, name: "Coach Field Tote 30 – Color Block (12A Quality)",
    category: "Bags", price: 3300, mrp: 4999,
    image: "images/products/IMG-20260308-WA0172.jpg",
    desc: "Iconic Coach Field Tote 30 in bold color block — white pebbled leather body, cognac brown top handles, and navy trim with gold stud accents. Embossed Coach Leatherware branding on front. Comes with dust bag. Premium 12A quality with reinforced base and structured shape.",
    rating: 4.7, reviews: 19, badge: "Premium", inStock: true
  },
  // Wallets / Men's Combos
  {
    id: 11, name: "Coach New York 3-Piece Men's Gift Set",
    category: "Wallets", price: 1350, mrp: 1899,
    image: "images/products/IMG-20260308-WA0183.jpg",
    desc: "Complete Coach New York men's gift set in a branded gift box: embossed-C bifold wallet, slim card holder, and reversible leather belt with silver Coach buckle. All in premium black leather with Coach signature embossing. Perfect gift for men who appreciate designer accessories.",
    rating: 4.5, reviews: 41, badge: "Popular", inStock: true
  },
  {
    id: 12, name: "Armani Exchange (A|X) 4-Piece Men's Gift Set",
    category: "Wallets", price: 1400, mrp: 1999,
    image: "images/products/IMG-20260308-WA0189.jpg",
    desc: "Premium Armani Exchange men's gift set presented in an AX branded box: embossed AX bifold wallet, slim card holder, reversible leather belt, and AX logo buckle. Crafted in dark leather with the bold AX logo detailing. An ideal gifting option for the style-conscious man.",
    rating: 4.4, reviews: 36, inStock: true
  },
  // Watches
  {
    id: 4, name: "Tommy Hilfiger Men's Black Chronograph Watch",
    category: "Watches", price: 1950, mrp: 2799,
    image: "images/products/IMG-20260308-WA0152.jpg",
    desc: "Bold Tommy Hilfiger men's chronograph with an all-black matte finish — black bezel engraved with HILFIGER, black textured dial with three sub-dials, silver-tone hands, and a black stainless steel link bracelet. A strong, sporty statement watch for everyday wear.",
    rating: 4.7, reviews: 22, badge: "Bestseller", inStock: true
  },
  {
    id: 5, name: "Tommy Hilfiger Chronograph Watch – Gift Box Edition",
    category: "Watches", price: 1850, mrp: 2499,
    image: "images/products/IMG-20260308-WA0153.jpg",
    desc: "Same sleek Tommy Hilfiger all-black chronograph presented in a premium navy gift box — makes a perfect gift. Features HILFIGER-engraved bezel, three sub-dials, and black stainless link bracelet. Arrives ready to gift, no wrapping needed.",
    rating: 4.6, reviews: 18, badge: "Premium", inStock: true
  },
  {
    id: 6, name: "Tommy Hilfiger Men's Skeleton Automatic Watch",
    category: "Watches", price: 2400, mrp: 3499,
    image: "images/products/IMG-20260308-WA0160.jpg",
    desc: "Stunning Tommy Hilfiger open-heart skeleton automatic watch. Navy blue concentric-circle dial with the intricate mechanical movement fully visible through the see-through face. Polished silver stainless steel bracelet and case. A horological showpiece for watch enthusiasts.",
    rating: 4.8, reviews: 31, badge: "Bestseller", inStock: true
  },
  // Sunglasses
  {
    id: 9, name: "Marc Jacobs Navigator Sunglasses – Model 486",
    category: "Coolers", price: 600, mrp: 999,
    image: "images/products/IMG-20260308-WA0176.jpg",
    desc: "Marc Jacobs Model 486 navigator-frame sunglasses with a transparent amber acetate frame and gradient honey-brown tinted lenses. Matte black temples branded with MARC JACOBS. Comes with a Marc Jacobs oval white case. Full kit with case available at ₹1,300.",
    rating: 4.4, reviews: 33, inStock: true
  },
  {
    id: 10, name: "Celine Paris Oval Metal Sunglasses",
    category: "Coolers", price: 1100, mrp: 1799,
    image: "images/products/IMG-20260308-WA0180.jpg",
    desc: "Chic Celine Paris oval rimless sunglasses with a slim gold metal frame and dark grey tinted lenses. Features the Celine interlocking-C logo on the bridge. Comes with a Celine branded black hard case and Celine cleaning cloth. Full kit with pouch available at ₹1,300.",
    rating: 4.3, reviews: 25, inStock: true
  },
  // Women's Ethnic Wear
  {
    id: 13, name: "Heavy Embroidery Anarkali Lehenga Gown Set",
    category: "Clothing", price: 1930, mrp: 2799,
    image: "images/products/IMG-20260308-WA0195.jpg",
    desc: "Stunning floor-length embroidered anarkali lehenga gown set available in 9 rich colours: navy blue, teal, red, golden yellow, dark purple, maroon, burgundy, cream-gold, and black. Dense gold zari embroidery all over the flare. Ideal for weddings, engagements, and festive celebrations.",
    rating: 4.8, reviews: 14, badge: "New", inStock: true
  },
  {
    id: 14, name: "Blush Pink Anarkali Gown with Embroidered Dupatta",
    category: "Clothing", price: 1450, mrp: 1999,
    image: "images/products/IMG-20260308-WA0199.jpg",
    desc: "Elegant full-length blush pink anarkali gown in soft tissue fabric with a scalloped hem and wide flare. Features a delicately embroidered neckline with mirror work and a matching embroidered dupatta with border detail. Perfect for Eid, sangeet, and festive gatherings.",
    rating: 4.6, reviews: 11, badge: "New", inStock: true
  },
  // Men's Dress
  {
    id: 15, name: "Calvin Klein Men's Casual Shirts",
    category: "Mens Dress", price: 450, mrp: 699,
    image: "images/products/IMG-20260308-WA0204.jpg",
    desc: "Calvin Klein (CK) branded men's casual shirts available in 12+ colours: brown, khaki, olive green, grey, beige, white, dark green, black, mustard, wine red, navy blue, and light blue. Relaxed fit with a chest pocket and CK logo patch. Order your preferred colour via WhatsApp.",
    rating: 4.2, reviews: 9, inStock: true
  },
];

// ── DYNAMIC PRODUCTS (hardcoded + Firebase) ──
let products = [...HARDCODED_PRODUCTS];
applyAutoBadges();

async function loadProducts() {
  if (typeof firebase === 'undefined' || !window.firebaseConfig ||
      window.firebaseConfig.apiKey === 'YOUR_API_KEY') return;
  try {
    if (!firebase.apps.length) firebase.initializeApp(window.firebaseConfig);
    const db   = firebase.firestore();
    const snap = await db.collection('products').orderBy('createdAt', 'desc').get();
    const fbProds = snap.docs.map(doc => ({ firestoreId: doc.id, ...doc.data() }));
    products = [...HARDCODED_PRODUCTS, ...fbProds];
  } catch (e) {
    // Firebase unavailable — fall back to hardcoded products silently
  }
  applyAutoBadges();
}

function clearAllFilters() {
  // Reset category to All
  document.querySelectorAll('.filter-option input[name="category"]').forEach(inp => {
    if (inp.value === 'All') { inp.checked = true; inp.closest('.filter-option').classList.add('active'); }
    else inp.closest('.filter-option').classList.remove('active');
  });
  // Reset price range
  const pMin = document.getElementById('priceMin');
  const pMax = document.getElementById('priceMax');
  if (pMin) pMin.value = '';
  if (pMax) pMax.value = '';
  _priceMin = null; _priceMax = null;
  // Reset rating
  const ratingAll = document.querySelector('input[name="ratingFilter"][value="0"]');
  if (ratingAll) ratingAll.checked = true;
  // Reset in-stock toggle
  const inStock = document.getElementById('inStockOnly');
  if (inStock) inStock.checked = false;
  // Reset sort
  const sortSel  = document.getElementById('sortSelect');
  const sortSelM = document.getElementById('sortSelectMobile');
  if (sortSel)  sortSel.value  = 'default';
  if (sortSelM) sortSelM.value = 'default';
  // Reset search
  const searchInp = document.getElementById('productSearchInput');
  if (searchInp) searchInp.value = '';
  // Trigger full state + DOM reset via closure hook
  if (_resetFilters) _resetFilters();
}

function applyAutoBadges() {
  // Mark the top-3 highest-discount products as "Best Value" if they have no badge
  const withMrp = products.filter(p => p.mrp && p.mrp > p.price && !p.badge);
  withMrp.sort((a, b) => (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp);
  withMrp.slice(0, 3).forEach(p => { p.badge = 'Best Value'; });
}

// ── COMPARE STATE ────────────────────────────
let compareList = [];

function toggleCompare(id, btn) {
  const idx = compareList.indexOf(id);
  if (idx === -1) {
    if (compareList.length >= 3) { showToast('⚠️ You can compare up to 3 products.'); return; }
    compareList.push(id);
    if (btn) { btn.classList.add('active'); btn.title = 'Remove from comparison'; }
  } else {
    compareList.splice(idx, 1);
    if (btn) { btn.classList.remove('active'); btn.title = 'Compare'; }
  }
  updateCompareBar();
}

function updateCompareBar() {
  let bar = document.getElementById('compareBar');
  if (!compareList.length) { if (bar) bar.remove(); return; }
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'compareBar';
    bar.className = 'compare-bar';
    document.body.appendChild(bar);
  }
  const items = compareList.map(id => {
    const p = products.find(x => x.id === id);
    if (!p) return '';
    return `<div class="cmp-bar-item">
      <img src="${p.image || ''}" alt="${p.name}" class="cmp-bar-img" />
      <span class="cmp-bar-name">${p.name.length > 22 ? p.name.slice(0, 22) + '…' : p.name}</span>
      <button class="cmp-bar-remove" onclick="toggleCompare(${p.id},document.querySelector('.compare-btn[data-cmpid=\\'${p.id}\\']'));updateCompareBar()">✕</button>
    </div>`;
  }).join('');
  const disabledAttr = compareList.length < 2 ? 'disabled' : '';
  bar.innerHTML = `
    <div class="cmp-bar-inner">
      <span class="cmp-bar-label">Compare (${compareList.length}/3)</span>
      <div class="cmp-bar-items">${items}</div>
      <button class="cmp-bar-btn" ${disabledAttr} onclick="openCompareModal()">⚖️ Compare Now</button>
      <button class="cmp-bar-clear" onclick="clearCompare()">Clear</button>
    </div>`;
}

function clearCompare() {
  compareList = [];
  document.querySelectorAll('.compare-btn.active').forEach(b => b.classList.remove('active'));
  const bar = document.getElementById('compareBar');
  if (bar) bar.remove();
}

function openCompareModal() {
  if (compareList.length < 2) return;
  const items = compareList.map(id => products.find(x => x.id === id)).filter(Boolean);
  const fields = [
    { label: 'Image',    render: p => `<img src="${p.image||''}" style="width:80px;height:80px;object-fit:cover;border-radius:10px;" />` },
    { label: 'Name',     render: p => `<strong style="font-size:12px;">${p.name}</strong>` },
    { label: 'Price',    render: p => `<span style="color:var(--red);font-weight:700;font-size:15px;">₹${p.price.toLocaleString('en-IN')}</span>` },
    { label: 'MRP',      render: p => p.mrp ? `<s style="color:#878787;">₹${p.mrp.toLocaleString('en-IN')}</s>` : '—' },
    { label: 'Discount', render: p => p.mrp && p.mrp > p.price ? `<span style="background:#e8f5e9;color:#2e7d32;padding:2px 8px;border-radius:12px;font-size:12px;font-weight:700;">${Math.round((p.mrp-p.price)/p.mrp*100)}% off</span>` : '—' },
    { label: 'Rating',   render: p => `<span style="background:#388e3c;color:white;padding:2px 8px;border-radius:10px;font-size:12px;font-weight:700;">★ ${p.rating}</span> <span style="font-size:11px;color:#878787;">(${p.reviews})</span>` },
    { label: 'Category', render: p => p.category },
    { label: 'Stock',    render: p => p.inStock !== false ? `<span style="color:#2e7d32;font-weight:600;">✅ In Stock</span>` : `<span style="color:var(--red);font-weight:600;">❌ Out of Stock</span>` },
    { label: '',         render: p => `<a href="product.html?id=${p.id}" class="cmp-view-btn">View Product</a>` },
  ];
  const colWidth = Math.floor(80 / items.length);
  const headerRow = `<tr><th style="width:20%;text-align:left;padding:10px 14px;background:#fafafa;border-bottom:1px solid #f0f0f0;"></th>${items.map(p => `<th style="width:${colWidth}%;text-align:center;padding:10px 8px;background:#fafafa;border-bottom:1px solid #f0f0f0;">${p.name.length > 28 ? p.name.slice(0,28)+'…' : p.name}</th>`).join('')}</tr>`;
  const bodyRows = fields.map(f => `<tr>
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#878787;border-bottom:1px solid #f9f9f9;background:#fafafa;">${f.label}</td>
    ${items.map(p => `<td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f9f9f9;vertical-align:middle;">${f.render(p)}</td>`).join('')}
  </tr>`).join('');

  let modal = document.getElementById('compareModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'compareModal';
    modal.className = 'cmp-modal-backdrop';
    modal.onclick = e => { if (e.target === modal) closeCompareModal(); };
    document.body.appendChild(modal);
  }
  modal.innerHTML = `<div class="cmp-modal">
    <div class="cmp-modal-header">
      <h3>⚖️ Product Comparison</h3>
      <button class="cmp-modal-close" onclick="closeCompareModal()">✕</button>
    </div>
    <div class="cmp-modal-body">
      <table class="cmp-table"><thead>${headerRow}</thead><tbody>${bodyRows}</tbody></table>
    </div>
  </div>`;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeCompareModal() {
  const modal = document.getElementById('compareModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

// ── WISHLIST STATE ───────────────────────────
let wishlist = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');

function saveWishlist() {
  localStorage.setItem('eliteEmporiumWishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function updateWishlistUI() {
  const count = wishlist.length;
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
  // Inject wishlist button into header-actions (once)
  const hdrActions = document.querySelector('.header-actions');
  if (hdrActions && !document.getElementById('headerWishlistBtn')) {
    const wlLink = document.createElement('a');
    wlLink.id = 'headerWishlistBtn';
    wlLink.href = 'wishlist.html';
    wlLink.className = 'header-wl-btn';
    wlLink.title = 'My Wishlist';
    wlLink.innerHTML = `🤍 <span class="header-wl-count" style="display:none;"></span>`;
    hdrActions.insertBefore(wlLink, hdrActions.firstChild);
  }
  const wlBadge = document.querySelector('.header-wl-count');
  if (wlBadge) {
    wlBadge.textContent = count;
    wlBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
  const wlBtn = document.getElementById('headerWishlistBtn');
  if (wlBtn) wlBtn.innerHTML = count > 0 ? `❤️ <span class="header-wl-count">${count}</span>` : `🤍`;
}
function isWishlisted(id) {
  return wishlist.includes(id);
}
function toggleWishlist(id, btnEl) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    if (btnEl) { btnEl.textContent = '❤️'; btnEl.classList.add('active'); }
    showToast('❤️ Added to wishlist!');
  } else {
    wishlist.splice(idx, 1);
    if (btnEl) { btnEl.textContent = '🤍'; btnEl.classList.remove('active'); }
    showToast('🤍 Removed from wishlist');
  }
  if (btnEl) {
    btnEl.classList.remove('pop');
    void btnEl.offsetWidth; // reflow to restart animation
    btnEl.classList.add('pop');
  }
  saveWishlist();
}

// ── CART STATE ───────────────────────────────
let cart = (JSON.parse(localStorage.getItem('eliteEmporiumCart')) || []).map(i => {
  // Backfill image from product catalog for any old cart items missing the image field
  const prod = HARDCODED_PRODUCTS.find(p => p.id === i.id);
  return {
    ...i,
    cartKey: i.cartKey || (String(i.id) + '|' + (i.selectedColor || '')),
    image: i.image || (prod ? prod.image : '')
  };
});

function saveCart(animate) {
  localStorage.setItem('eliteEmporiumCart', JSON.stringify(cart));
  updateCartUI(animate);
}

function updateCartUI(animate) {
  const total = cart.reduce((s, i) => s + i.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
    if (animate) {
      el.classList.remove('cart-badge-pop');
      void el.offsetWidth;
      el.classList.add('cart-badge-pop');
    }
  });
  // Show cart count in page title
  const baseTitle = document.title.replace(/^\(\d+\) /, '');
  document.title = total > 0 ? `(${total}) ${baseTitle}` : baseTitle;
  updateMiniCart();
  updateAlertBell();
}

function updateAlertBell() {
  const alerts = getPriceAlerts();
  let bell = document.getElementById('headerAlertBell');
  if (!bell) {
    const actionsDiv = document.querySelector('.header-actions');
    if (!actionsDiv) return;
    bell = document.createElement('button');
    bell.id = 'headerAlertBell';
    bell.className = 'header-alert-bell';
    bell.title = 'Price Alerts';
    bell.onclick = toggleAlertPanel;
    actionsDiv.insertBefore(bell, actionsDiv.firstChild);
  }
  const count = alerts.length;
  bell.innerHTML = `🔔${count > 0 ? `<span class="alert-bell-badge">${count}</span>` : ''}`;
  bell.style.display = count > 0 ? 'flex' : 'none';
}

function toggleAlertPanel() {
  let panel = document.getElementById('alertPanel');
  if (panel) { panel.remove(); return; }
  const alerts = getPriceAlerts();
  panel = document.createElement('div');
  panel.id = 'alertPanel';
  panel.className = 'alert-panel';
  panel.innerHTML = `
    <div class="alert-panel-head">🔔 Price Alerts <button onclick="document.getElementById('alertPanel').remove()" class="alert-panel-close">✕</button></div>
    ${alerts.length === 0
      ? '<div class="alert-panel-empty">No price alerts set.</div>'
      : alerts.map(a => {
          const prod = products.find(p => p.id === a.id);
          return `<div class="alert-panel-item">
            <div class="api-name">${a.productName.slice(0,32)}…</div>
            <div class="api-meta">Alert: <strong>₹${a.targetPrice.toLocaleString('en-IN')}</strong> · Now: ₹${(prod ? prod.price : '?').toLocaleString?.('en-IN') ?? prod?.price}</div>
            <button class="api-remove" onclick="removePriceAlert(${a.id});updateAlertBell();this.closest('.alert-panel-item').remove();">✕</button>
          </div>`;
        }).join('')
    }`;
  document.body.appendChild(panel);
  setTimeout(() => document.addEventListener('click', e => {
    if (!panel.contains(e.target) && e.target.id !== 'headerAlertBell') panel.remove();
  }, { once: true }), 50);
}

function updateMiniCart() {
  const mini = document.getElementById('miniCart');
  if (!mini) return;
  if (!cart.length) {
    mini.innerHTML = `<div class="mini-cart-empty">🛒 Your cart is empty</div>`;
    return;
  }
  const itemsHtml = cart.slice(0, 4).map(item => `
    <div class="mini-cart-item">
      ${item.image ? `<img src="${item.image}" alt="${item.name}" class="mini-cart-img" />` : '<div class="mini-cart-img" style="background:#f0f0f0;display:flex;align-items:center;justify-content:center;">🛍️</div>'}
      <div class="mini-cart-info">
        <div class="mini-cart-name">${item.name}</div>
        <div class="mini-cart-meta">Qty ${item.quantity} × ₹${item.price.toLocaleString('en-IN')}</div>
      </div>
      <div class="mini-cart-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
    </div>`).join('');
  const more = cart.length > 4 ? `<div class="mini-cart-more">+${cart.length - 4} more item${cart.length - 4 > 1 ? 's' : ''}</div>` : '';
  const sub  = getSubtotal();
  mini.innerHTML = `
    ${itemsHtml}${more}
    <div class="mini-cart-footer">
      <div class="mini-cart-total">Subtotal: <strong>₹${sub.toLocaleString('en-IN')}</strong></div>
      <a href="cart.html" class="mini-cart-btn">Go to Cart →</a>
    </div>`;
}

function initMiniCart() {
  const cartBtnEl = document.querySelector('.cart-btn');
  if (!cartBtnEl || window.location.pathname.includes('cart.html')) return;
  cartBtnEl.style.position = 'relative';
  const wrap = document.createElement('div');
  wrap.className = 'mini-cart-wrap';
  wrap.innerHTML = '<div class="mini-cart-dropdown" id="miniCart"></div>';
  cartBtnEl.parentElement.style.position = 'relative';
  cartBtnEl.appendChild(wrap);
  updateMiniCart();
  cartBtnEl.addEventListener('mouseenter', () => wrap.classList.add('open'));
  cartBtnEl.addEventListener('mouseleave', () => wrap.classList.remove('open'));
}

// ── ADD / REMOVE / UPDATE ────────────────────
function flyToCart(imgSrc) {
  if (!imgSrc || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cartIcon = document.querySelector('.cart-btn');
  if (!cartIcon) return;
  const destRect = cartIcon.getBoundingClientRect();

  const fly = document.createElement('img');
  fly.src = imgSrc;
  fly.style.cssText = `
    position:fixed;
    width:48px;height:48px;border-radius:8px;object-fit:cover;
    z-index:9998;pointer-events:none;
    top:${window.innerHeight * 0.4}px;left:${window.innerWidth * 0.5 - 24}px;
    opacity:1;
    transition:top 0.55s cubic-bezier(0.4,0,0.2,1),
               left 0.55s cubic-bezier(0.4,0,0.2,1),
               width 0.55s ease,height 0.55s ease,
               opacity 0.2s ease 0.4s;
  `;
  document.body.appendChild(fly);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    fly.style.top     = (destRect.top + destRect.height / 2 - 12) + 'px';
    fly.style.left    = (destRect.left + destRect.width / 2 - 12) + 'px';
    fly.style.width   = '24px';
    fly.style.height  = '24px';
    fly.style.opacity = '0';
  }));

  setTimeout(() => fly.remove(), 650);
}

function addToCart(productId, selectedColor, selectedImage, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cartKey  = String(productId) + '|' + (selectedColor || '');
  const existing = cart.find(i => i.cartKey === cartKey);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      ...product,
      quantity: qty,
      cartKey,
      selectedColor: selectedColor || null,
      image: selectedImage || product.image
    });
  }

  saveCart(true);
  flyToCart(selectedImage || product.image);
  const colorStr = selectedColor ? ` (${selectedColor})` : '';
  showToast(`✅ ${product.name}${colorStr} added to cart!`);

  // Suggest a coupon when subtotal crosses ₹200 and no coupon is active
  const sub = getSubtotal();
  if (!_activeCoupon && sub >= 200 && sub < 500) {
    setTimeout(() => showToast('💡 Use code ELITE10 to save 10% on your order!', 5000, 'info'), 1500);
  } else if (!_activeCoupon && sub >= 500) {
    setTimeout(() => showToast('🎉 Use SUMMER15 to save 15% — you qualify now!', 5000, 'info'), 1500);
  }

  // Upgrade card button to inline qty control
  const btn = document.querySelector(`[data-pid="${productId}"]`);
  if (btn) {
    const cardActionRow = btn.closest('.card-action-row');
    if (cardActionRow) {
      const qty = cart.find(i => i.id === productId)?.quantity || 1;
      const ctrl = document.createElement('div');
      ctrl.className = 'card-qty-ctrl';
      ctrl.id = 'qtyctrl_' + productId;
      ctrl.innerHTML = `<button class="card-qty-btn" onclick="event.preventDefault();cardQtyChange(${productId},-1)">−</button>
        <span class="card-qty-num">${qty}</span>
        <button class="card-qty-btn add" onclick="event.preventDefault();cardQtyChange(${productId},1)">+</button>`;
      cardActionRow.replaceWith(ctrl);
    }
  }
}

function cardQtyChange(productId, delta) {
  const cartKey = String(productId) + '|';
  const item = cart.find(i => i.id === productId);
  if (!item) { addToCart(productId); return; }
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
    // Replace qty controls with Add button
    const ctrl = document.getElementById('qtyctrl_' + productId);
    if (ctrl) {
      const product = products.find(p => p.id === productId);
      if (product) {
        const btnId = 'cartbtn_' + productId;
        const defaultImg   = (product.variants && product.variants.length > 1) ? product.variants[0].image : (product.image || '');
        const defaultColor = (product.variants && product.variants.length > 1) ? product.variants[0].color : '';
        const addToCartCall = (product.variants && product.variants.length > 1)
          ? `(function(b){addToCart(${productId},b.dataset.color,b.dataset.img)})(document.getElementById('${btnId}'))`
          : `addToCart(${productId})`;
        const row = document.createElement('div');
        row.className = 'card-action-row';
        row.innerHTML = `<button class="add-to-cart" id="${btnId}" data-pid="${productId}" data-color="${defaultColor}" data-img="${defaultImg}" onclick="${addToCartCall}">🛒 Add</button>`;
        ctrl.replaceWith(row);
      }
    }
  } else {
    const numEl = document.querySelector(`#qtyctrl_${productId} .card-qty-num`);
    if (numEl) numEl.textContent = item.quantity;
  }
  saveCart();
  updateCartCount();
  updateMiniCart();
}

function saveForLater(cartKey, productId) {
  removeFromCart(cartKey);
  toggleWishlist(Number(productId), null);
  showToast('🤍 Saved to wishlist for later!');
}

function removeFromCart(cartKey) {
  const removed = cart.find(i => i.cartKey === cartKey);
  cart = cart.filter(i => i.cartKey !== cartKey);
  saveCart();
  renderCart();
  if (removed) {
    showUndoToast(`🗑️ "${removed.name.slice(0, 28)}" removed`, () => {
      cart.push(removed);
      saveCart();
      renderCart();
    });
  }
}

function showUndoToast(message, onUndo, duration = 5000) {
  let stack = document.getElementById('toastStack');
  if (!stack) {
    stack = document.createElement('div');
    stack.id = 'toastStack';
    stack.className = 'toast-stack';
    stack.setAttribute('role', 'status');
    stack.setAttribute('aria-live', 'polite');
    stack.setAttribute('aria-atomic', 'true');
    document.body.appendChild(stack);
  }
  const toast = document.createElement('div');
  toast.className = 'toast-item toast-info';
  let timer;
  const dismiss = () => {
    toast.style.animation = 'toastSlideOut 0.25s ease forwards';
    setTimeout(() => toast.remove(), 250);
    clearTimeout(timer);
  };
  toast.innerHTML = `
    <span class="toast-msg">${message}</span>
    <button class="toast-undo-btn" style="background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.35);color:white;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;cursor:pointer;margin-left:8px;font-family:inherit;">Undo</button>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
  toast.querySelector('.toast-undo-btn').onclick = () => { onUndo(); dismiss(); };
  stack.appendChild(toast);
  timer = setTimeout(dismiss, duration);
}

function shareCart(e) {
  if (e) e.preventDefault();
  if (!cart.length) { showToast('⚠️ Your cart is empty!'); return; }
  let msg = `🛍️ *My Shopping List – Elite Emporium*\n━━━━━━━━━━━━━━━━━\n\n`;
  cart.forEach((item, i) => {
    msg += `${i + 1}. *${item.name}*`;
    if (item.selectedColor) msg += ` (${item.selectedColor})`;
    msg += `\n   ₹${item.price.toLocaleString('en-IN')} × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━\n💰 *Total: ₹${getTotal().toLocaleString('en-IN')}*\n\nOrder at Elite Emporium 👉 https://wa.me/917358650774`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}

let _cartSnapshot = null;

function clearCart() {
  if (!cart.length) return;
  if (!confirm('Remove all items from your cart?')) return;
  _cartSnapshot = [...cart];
  cart = [];
  saveCart();
  renderCart();
  showUndoToast('🗑️ Cart cleared', () => {
    if (_cartSnapshot) { cart = _cartSnapshot; _cartSnapshot = null; saveCart(); renderCart(); }
  });
}

function updateQuantity(cartKey, delta) {
  const item = cart.find(i => i.cartKey === cartKey);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) { removeFromCart(cartKey); return; }
  saveCart();
  renderCart();
}

// ── TOTALS ───────────────────────────────────
function getSubtotal() { return cart.reduce((s, i) => s + i.price * i.quantity, 0); }
function getItemCount() { return cart.reduce((s, i) => s + i.quantity, 0); }
function getDelivery()  { const st = getSubtotal(); return st === 0 ? 0 : st < CONFIG.minFreeDelivery ? CONFIG.deliveryCharge : 0; }
function getTotal()     { return getSubtotal() + getDelivery(); }

// ── RENDER STARS ─────────────────────────────
function generateRatingDist(rating, total) {
  // Spread total reviews across 5 stars in a way consistent with the given avg
  const r = Math.min(5, Math.max(1, rating));
  const weights = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  // Higher rating → skew toward 5 and 4
  weights[5] = Math.max(0, (r - 3) / 2);
  weights[4] = Math.max(0, 1 - Math.abs(r - 4) * 0.6);
  weights[3] = Math.max(0, 1 - Math.abs(r - 3) * 0.7);
  weights[2] = Math.max(0, (4 - r) / 3);
  weights[1] = Math.max(0, (3.5 - r) / 3);
  const sum = Object.values(weights).reduce((a, b) => a + b, 0);
  const dist = {};
  let used = 0;
  [5, 4, 3, 2].forEach(s => {
    dist[s] = Math.round((weights[s] / sum) * total);
    used += dist[s];
  });
  dist[1] = Math.max(0, total - used);
  return dist;
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += i <= Math.floor(rating) ? '★' : (i - 0.5 <= rating ? '½' : '☆');
  }
  return `<span class="stars">${html}</span>`;
}

// ── RENDER PRODUCTS (Flipkart style) ─────────
function renderProducts(list, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!list.length) {
    const popularCats = ['Bags','Watches','Clothing','Abaiya','Cosmetics'];
    const catChips = popularCats.map(c =>
      `<a href="products.html?category=${encodeURIComponent(c)}" class="no-result-chip">${c}</a>`
    ).join('');
    el.innerHTML = `<div class="no-results-state">
      <div class="no-results-icon">🔍</div>
      <h3>No products found</h3>
      <p>We couldn't find anything matching your filters. Try a different search or browse a category:</p>
      <div class="no-results-chips">${catChips}</div>
      <button onclick="clearAllFilters()" class="no-results-clear">Clear All Filters</button>
    </div>`;
    return;
  }

  el.innerHTML = list.map((p, idx) => {
    const hidden = (containerId === 'productsGrid' && idx >= 12) ? ' card-hidden' : '';
    const badgeClass  = p.badge === 'New' ? 'new' : p.badge === 'Bestseller' ? 'hot' : p.badge === 'Premium' ? 'premium' : p.badge === 'Best Value' ? 'best-value' : '';
    const pid         = 'pid_'     + p.id;
    const btnId       = 'cartbtn_' + p.id;
    const detailLink  = `product.html?id=${p.id}`;

    // Default image & color for this card
    const defaultImg   = (p.variants && p.variants.length > 1) ? p.variants[0].image : (p.image || '');
    const defaultColor = (p.variants && p.variants.length > 1) ? p.variants[0].color : '';

    // Image area (onerror fallback to emoji placeholder)
    const imgFallback = `this.onerror=null;this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:52px;\\'>📦</span>'`;
    let imageHtml;
    if (p.variants && p.variants.length > 1) {
      imageHtml = `<a href="${detailLink}" class="product-img-link">
        <div class="product-image product-image-photo">
          <img id="${pid}" src="${p.variants[0].image}" alt="${p.name}" loading="lazy" onerror="${imgFallback}" />
        </div></a>`;
    } else if (p.image) {
      imageHtml = `<a href="${detailLink}" class="product-img-link">
        <div class="product-image product-image-photo">
          <img id="${pid}" src="${p.image}" alt="${p.name}" loading="lazy" onerror="${imgFallback}" />
        </div></a>`;
    } else {
      imageHtml = `<a href="${detailLink}" class="product-img-link">
        <div class="product-image" style="font-size:64px;background:#f0f0f0;">${p.emoji || '📦'}</div></a>`;
    }

    // Variant swatches — also update cart button data attributes on click
    let swatchHtml = '';
    if (p.variants && p.variants.length > 1) {
      const swatches = p.variants.map((v, i) =>
        `<img src="${v.image}"
              class="vswatch${i === 0 ? ' vactive' : ''}"
              onclick="swapVariant(this,'${pid}','vlbl_${pid}','${btnId}')"
              title="${v.color}" loading="lazy" />`
      ).join('');
      swatchHtml = `<div class="variant-swatches">
        <span class="vcolor-name">Color: <strong id="vlbl_${pid}">${p.variants[0].color}</strong></span>
        <div class="vswatch-row">${swatches}</div>
      </div>`;
    }

    // Add-to-cart: pass the button's live data-color & data-img for variant products
    const addToCartCall = (p.variants && p.variants.length > 1)
      ? `(function(b){addToCart(${p.id},b.dataset.color,b.dataset.img)})(document.getElementById('${btnId}'))`
      : `addToCart(${p.id})`;

    const isOos     = p.inStock === false;
    const wishlisted = isWishlisted(p.id);
    const isLowStock = !isOos && (p.badge === 'Bestseller' || (p.reviews && p.reviews > 30));
    return `
    <div class="product-card${isOos ? ' oos' : ''}${hidden}">
      ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
      ${isOos ? `<div class="oos-overlay"><div class="oos-ribbon">Out of Stock</div></div>` : ''}
      ${isLowStock ? `<div class="card-low-stock">Only a few left!</div>` : ''}
      <button class="wishlist-btn${wishlisted ? ' active' : ''}"
        onclick="event.preventDefault();toggleWishlist(${p.id},this)"
        title="${wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}">${wishlisted ? '❤️' : '🤍'}</button>
      <button class="qv-card-btn" onclick="event.preventDefault();openQuickView(${p.id})" title="Quick View">👁️</button>
      <button class="compare-btn${compareList.includes(p.id) ? ' active' : ''}"
        data-cmpid="${p.id}"
        onclick="event.preventDefault();toggleCompare(${p.id},this)"
        title="Compare">⚖️</button>
      ${imageHtml}
      ${swatchHtml}
      <div class="product-info">
        <div class="product-name"><a href="${detailLink}">${p.name}</a></div>
        <div class="product-rating">
          <span class="fk-rating-badge">★ ${p.rating}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price-block">
            <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
            ${p.mrp && p.mrp > p.price ? `<s class="product-mrp">₹${p.mrp.toLocaleString('en-IN')}</s><span class="product-save">${Math.round((p.mrp - p.price) / p.mrp * 100)}% off</span>` : ''}
          </div>
          ${isOos
            ? `<button class="add-to-cart oos-btn" disabled>Out of Stock</button>`
            : (() => {
                const cartItem = cart.find(i => i.id === p.id);
                if (cartItem) {
                  return `<div class="card-qty-ctrl" id="qtyctrl_${p.id}">
                    <button class="card-qty-btn" onclick="event.preventDefault();cardQtyChange(${p.id},-1)">−</button>
                    <span class="card-qty-num">${cartItem.quantity}</span>
                    <button class="card-qty-btn add" onclick="event.preventDefault();cardQtyChange(${p.id},1)">+</button>
                  </div>`;
                }
                return `<div class="card-action-row">
                  <button class="add-to-cart"
                    id="${btnId}"
                    data-pid="${p.id}"
                    data-color="${defaultColor}"
                    data-img="${defaultImg}"
                    onclick="${addToCartCall}">
                    🛒 Add
                  </button>
                  <a class="card-wa-btn" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi! I want to order:\n\n*${p.name}*\nPrice: ₹${p.price.toLocaleString('en-IN')}\n\nPlease confirm availability.`)}" target="_blank" rel="noopener" title="Order on WhatsApp">💬</a>
                </div>`;
              })()
          }
        </div>
      </div>
    </div>`;
  }).join('');

  // Show More button for products grid
  const oldBtn = document.getElementById('showMoreBtn');
  if (oldBtn) oldBtn.remove();
  if (containerId === 'productsGrid' && list.length > 12) {
    let shown = 12;
    const btn = document.createElement('button');
    btn.id = 'showMoreBtn';
    btn.className = 'show-more-btn';
    btn.textContent = `Show More (${list.length - shown} more)`;
    btn.onclick = () => {
      const cards = el.querySelectorAll('.card-hidden');
      let revealed = 0;
      cards.forEach(c => { if (revealed < 12) { c.classList.remove('card-hidden'); revealed++; } });
      shown = Math.min(shown + 12, list.length);
      if (el.querySelectorAll('.card-hidden').length === 0) btn.remove();
      else btn.textContent = `Show More (${list.length - shown} more)`;
    };
    el.parentElement.insertBefore(btn, el.nextSibling);
  }
}

// ── SWAP VARIANT IMAGE ────────────────────────
function swapVariant(swatch, pid, labelId, btnId) {
  const main = document.getElementById(pid);
  if (main) { main.style.opacity = '0.7'; main.src = swatch.src; main.onload = () => main.style.opacity = '1'; }
  swatch.closest('.vswatch-row').querySelectorAll('.vswatch').forEach(s => s.classList.remove('vactive'));
  swatch.classList.add('vactive');
  const lbl = document.getElementById(labelId);
  if (lbl) lbl.textContent = swatch.title;
  // Keep cart button in sync so the right color & image go into WhatsApp message
  if (btnId) {
    const btn = document.getElementById(btnId);
    if (btn) { btn.dataset.color = swatch.title; btn.dataset.img = swatch.src; }
  }
}

// ── PIN → STATE AUTO-DETECT (cart form) ──────
function initPinAutoDetect() {
  const pinEl   = document.getElementById('custPincode');
  const stateEl = document.getElementById('custState');
  if (!pinEl || !stateEl) return;

  const PIN_STATES = [
    [[11,12],   'Delhi'],
    [[14,16],   'Punjab'],  // 14=Punjab, 15=Himachal, 16=Haryana
    [[17,17],   'Himachal Pradesh'],
    [[18,19],   'Jammu & Kashmir'],
    [[20,28],   'Uttar Pradesh'],
    [[30,34],   'Rajasthan'],
    [[36,36],   'Gujarat'],
    [[37,37],   'Gujarat'],
    [[38,39],   'Gujarat'],
    [[40,44],   'Maharashtra'],
    [[45,49],   'Madhya Pradesh'],
    [[50,53],   'Andhra Pradesh'],
    [[56,59],   'Karnataka'],
    [[60,64],   'Tamil Nadu'],
    [[67,69],   'Kerala'],
    [[70,74],   'West Bengal'],
    [[75,77],   'Orissa'],
    [[78,78],   'Assam'],
    [[80,85],   'Bihar'],
    [[90,95],   'Assam'],
  ];

  pinEl.addEventListener('input', () => {
    const pin = pinEl.value.trim();
    if (!/^\d{6}$/.test(pin)) return;
    const prefix = parseInt(pin.slice(0,2), 10);
    for (const [[lo, hi], state] of PIN_STATES) {
      if (prefix >= lo && prefix <= hi) {
        // Map to select option values used in cart.html
        const stateMap = {
          'Tamil Nadu': 'Tamil Nadu', 'Andhra Pradesh': 'Andhra Pradesh',
          'Karnataka': 'Karnataka', 'Kerala': 'Kerala',
          'Telangana': 'Telangana', 'Maharashtra': 'Maharashtra',
          'Delhi': 'Delhi', 'Uttar Pradesh': 'Uttar Pradesh',
          'West Bengal': 'West Bengal', 'Rajasthan': 'Rajasthan',
          'Gujarat': 'Gujarat', 'Madhya Pradesh': 'Madhya Pradesh',
          'Punjab': 'Punjab', 'Haryana': 'Haryana',
        };
        const mapped = stateMap[state] || '';
        if (mapped && !stateEl.value) {
          stateEl.value = mapped;
          stateEl.style.borderColor = 'var(--green)';
          setTimeout(() => { stateEl.style.borderColor = ''; }, 2000);
        }
        break;
      }
    }
  });
}

// ── RENDER CART ───────────────────────────────
const FORM_DRAFT_KEY = 'eliteEmporiumFormDraft';

function saveFormDraft() {
  const fields = ['custName','custPhone','custAddress','custCity','custState','custPincode','custNotes'];
  const draft = {};
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) draft[id] = el.value;
  });
  localStorage.setItem(FORM_DRAFT_KEY, JSON.stringify(draft));
}

function loadFormDraft() {
  const draft = JSON.parse(localStorage.getItem(FORM_DRAFT_KEY) || 'null');
  if (!draft) return false;
  const fill = (id, val) => { const el = document.getElementById(id); if (el && !el.value && val) el.value = val; };
  Object.entries(draft).forEach(([id, val]) => fill(id, val));
  return true;
}

function clearFormDraft() {
  localStorage.removeItem(FORM_DRAFT_KEY);
}

function prefillCustomerFromHistory() {
  const hasDraft = loadFormDraft();
  if (!hasDraft) {
    const orders = getOrderHistory();
    if (!orders.length) return;
    const last = orders[0].customer;
    const fill = (id, val) => { const el = document.getElementById(id); if (el && !el.value) el.value = val || ''; };
    fill('custName',    last.name);
    fill('custPhone',   last.phone);
    fill('custAddress', last.address);
    fill('custCity',    last.city);
    fill('custState',   last.state);
    fill('custPincode', last.pincode);
    fill('custNotes',   last.notes);
  }

  // Auto-save on every change
  ['custName','custPhone','custAddress','custCity','custState','custPincode','custNotes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', saveFormDraft);
  });

  const hint = document.getElementById('prefillHint');
  if (hint) { hint.style.display = 'flex'; }
}

function renderCart() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  if (!cart.length) {
    const suggestions = products.filter(p => p.badge && p.inStock !== false).slice(0, 4);
    const suggHtml = suggestions.length
      ? `<div style="margin-top:20px;border-top:1px solid var(--border);padding-top:16px;">
           <div style="font-weight:700;color:var(--text);margin-bottom:12px;font-size:14px;">🔥 Popular Right Now</div>
           <div class="products-grid" style="grid-template-columns:repeat(2,1fr);gap:10px;">${suggestions.map(p =>
             `<a href="product.html?id=${p.id}" style="background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:10px;text-decoration:none;color:inherit;display:block;">
               <img src="${p.image}" alt="${p.name}" style="width:100%;height:100px;object-fit:contain;border-radius:var(--radius);margin-bottom:6px;" />
               <div style="font-size:12px;font-weight:600;color:var(--text);line-height:1.3;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">${p.name}</div>
               <div style="font-size:13px;font-weight:700;color:var(--red);margin-top:4px;">₹${p.price.toLocaleString('en-IN')}</div>
             </a>`).join('')}
           </div>
         </div>`
      : '';
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty!</h3>
        <p>Looks like you haven't added anything yet.</p>
        <a href="products.html" class="btn-primary">Browse Products</a>
        ${suggHtml}
      </div>`;
    refreshSummary();
    return;
  }

  container.innerHTML = cart.map(item => {
    const cartImageHtml = item.image
      ? `<div class="cart-item-image cart-item-image-photo"><img src="${item.image}" alt="${item.name}" loading="lazy" /></div>`
      : `<div class="cart-item-image" style="background:${item.bg}">${item.emoji}</div>`;
    const escKey = (item.cartKey || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    return `
    <div class="cart-item">
      ${cartImageHtml}
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-category">${item.category}${item.selectedColor ? ` — <span style="color:var(--primary);font-weight:600;">${item.selectedColor}</span>` : ''}</div>
        <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
      </div>
      <div class="quantity-controls">
        <button class="qty-btn" data-key="${escKey}" onclick="updateQuantity(this.dataset.key, -1)">−</button>
        <span class="qty-value">${item.quantity}</span>
        <button class="qty-btn" data-key="${escKey}" onclick="updateQuantity(this.dataset.key, 1)">+</button>
      </div>
      <div class="cart-item-secondary-actions">
        <button class="save-for-later-btn" data-key="${escKey}" data-pid="${item.id}"
          onclick="saveForLater(this.dataset.key, this.dataset.pid)"
          title="Save for later">🤍 Save for Later</button>
        <button class="remove-btn" data-key="${escKey}" onclick="removeFromCart(this.dataset.key)" title="Remove">🗑️ Remove</button>
      </div>
    </div>
  `;
  }).join('');

  refreshSummary();
  initCartUpsell();
  prefillCustomerFromHistory();
  initPinAutoDetect();
  initFormValidation();
}

function initCartUpsell() {
  const section = document.getElementById('cartUpsellSection');
  const strip   = document.getElementById('cartUpsellStrip');
  if (!section || !strip) return;

  const cartIds   = new Set(cart.map(i => i.id));
  const cartCats  = [...new Set(cart.map(i => i.category))];
  let candidates  = products.filter(p => !cartIds.has(p.id) && p.inStock !== false);
  const relevant  = candidates.filter(p => cartCats.includes(p.category));
  const fallback  = candidates.filter(p => !cartCats.includes(p.category));
  const picks     = [...relevant, ...fallback].slice(0, 8);

  if (!picks.length) { section.style.display = 'none'; return; }
  section.style.display = '';

  strip.innerHTML = picks.map(p => {
    const discount = p.mrp && p.mrp > p.price ? Math.round((p.mrp - p.price) / p.mrp * 100) : 0;
    return `<div class="product-card" style="min-width:170px;max-width:170px;flex-shrink:0;">
      <a href="product.html?id=${p.id}" class="product-img-link">
        <div class="product-image product-image-photo">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
      </a>
      <div class="product-info">
        <div class="product-name" style="font-size:12px;"><a href="product.html?id=${p.id}">${p.name.length > 34 ? p.name.slice(0,34)+'…' : p.name}</a></div>
        <div class="product-rating"><span class="fk-rating-badge">★ ${p.rating}</span></div>
        <div class="product-footer">
          <div class="product-price-block">
            <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
            ${discount ? `<span class="product-save">${discount}% off</span>` : ''}
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id});this.textContent='✓ Added';this.style.background='var(--green)';setTimeout(()=>{this.textContent='🛒 Add';this.style.background='';},1500)">🛒 Add</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── COUPON CODES ──────────────────────────────
const COUPONS = {
  'ELITE10':  { type: 'percent', value: 10,  label: '10% off' },
  'FLAT50':   { type: 'flat',    value: 50,  label: '₹50 off' },
  'WELCOME':  { type: 'percent', value: 5,   label: '5% off' },
  'SUMMER15': { type: 'percent', value: 15,  label: '15% off' },
};
let _activeCoupon = null;

function getCouponDiscount(sub) {
  if (!_activeCoupon) return 0;
  const c = COUPONS[_activeCoupon];
  if (!c) return 0;
  if (c.type === 'percent') return Math.round(sub * c.value / 100);
  return Math.min(c.value, sub);
}

function applyCoupon() {
  const code = (document.getElementById('couponCode')?.value || '').trim().toUpperCase();
  if (!code) { showToast('⚠️ Enter a coupon code first.'); return; }
  if (!COUPONS[code]) { showToast('❌ Invalid coupon code.'); return; }
  _activeCoupon = code;
  const inputDiv    = document.getElementById('couponInput');
  const appliedDiv  = document.getElementById('couponApplied');
  const appliedText = document.getElementById('couponAppliedText');
  if (inputDiv)   inputDiv.style.display = 'none';
  if (appliedDiv) { appliedDiv.style.display = 'flex'; }
  if (appliedText) appliedText.textContent = `🎟️ "${code}" — ${COUPONS[code].label} applied!`;
  refreshSummary();
  showToast(`✅ Coupon ${code} applied!`);
}

function fillCoupon(code) {
  const inp = document.getElementById('couponCode');
  if (!inp) return;
  // If already applied, remove first then re-apply new one
  if (_activeCoupon) removeCoupon();
  inp.value = code;
  applyCoupon();
  // Scroll to coupon section
  document.getElementById('couponSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function removeCoupon() {
  _activeCoupon = null;
  const inputDiv   = document.getElementById('couponInput');
  const appliedDiv = document.getElementById('couponApplied');
  const codeInp    = document.getElementById('couponCode');
  if (inputDiv)   inputDiv.style.display = 'flex';
  if (appliedDiv) appliedDiv.style.display = 'none';
  if (codeInp)    codeInp.value = '';
  refreshSummary();
  showToast('🎟️ Coupon removed.');
}

function refreshSummary() {
  const sub      = getSubtotal();
  const del      = getDelivery();
  const discount = getCouponDiscount(sub);
  const tot      = Math.max(0, sub + del - discount);

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('summaryItems',    getItemCount() + ' item(s)');
  set('summarySubtotal', '₹' + sub.toLocaleString('en-IN'));
  set('summaryDelivery', del === 0 ? (sub > 0 ? 'FREE 🎉' : '—') : '₹' + del);
  set('summaryTotal',    '₹' + tot.toLocaleString('en-IN'));

  const discountRow = document.getElementById('discountRow');
  const discountEl  = document.getElementById('summaryDiscount');
  if (discountRow) discountRow.style.display = discount > 0 ? 'flex' : 'none';
  if (discountEl)  discountEl.textContent = '–₹' + discount.toLocaleString('en-IN');

  const deliveryRow = document.getElementById('deliveryRow');
  if (deliveryRow) deliveryRow.className = del === 0 && sub > 0 ? 'summary-row delivery-free' : 'summary-row';

  // Mobile cart sticky bar
  const mbar = document.getElementById('cartMobileBar');
  const barItems = document.getElementById('cartBarItems');
  const barTotal = document.getElementById('cartBarTotal');
  if (mbar) mbar.classList.toggle('show', cart.length > 0);
  if (barItems) barItems.textContent = getItemCount() + ' item' + (getItemCount() !== 1 ? 's' : '');
  if (barTotal) barTotal.textContent = '₹' + tot.toLocaleString('en-IN');

  // Estimated delivery date (3–7 business days from today)
  const etaEl = document.getElementById('deliveryEstimate');
  const etaSpan = document.getElementById('deliveryEta');
  if (etaEl && etaSpan) {
    if (cart.length) {
      const fmt = d => d.toLocaleDateString('en-IN', { day:'numeric', month:'short', weekday:'short' });
      const addDays = (d, n) => { const r = new Date(d); for (let i = 0; i < n; ) { r.setDate(r.getDate()+1); if (r.getDay() !== 0 && r.getDay() !== 6) i++; } return r; };
      const now = new Date();
      etaSpan.textContent = `${fmt(addDays(now, 3))} – ${fmt(addDays(now, 7))}`;
      etaEl.style.display = 'block';
    } else {
      etaEl.style.display = 'none';
    }
  }

  // Total savings callout
  const mrpTotal   = cart.reduce((s, i) => s + ((i.mrp || i.price) * i.quantity), 0);
  const saved      = mrpTotal - sub + discount + (del === 0 && sub > 0 ? 0 : 0);
  const savingsEl  = document.getElementById('summarySavings');
  if (savingsEl) {
    if (saved > 0 && cart.length) {
      savingsEl.textContent = `🎉 You're saving ₹${saved.toLocaleString('en-IN')} on this order!`;
      savingsEl.style.display = 'block';
    } else {
      savingsEl.style.display = 'none';
    }
  }

  // Bulk order CTA — show when subtotal ≥ ₹2000
  let bulkCtaEl = document.getElementById('bulkOrderCta');
  if (sub >= 2000 && cart.length) {
    if (!bulkCtaEl) {
      bulkCtaEl = document.createElement('a');
      bulkCtaEl.id = 'bulkOrderCta';
      bulkCtaEl.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi! I have a bulk order above ₹2000. Can I get an additional discount?')}`;
      bulkCtaEl.target = '_blank';
      bulkCtaEl.rel = 'noopener';
      bulkCtaEl.className = 'bulk-order-cta';
      bulkCtaEl.innerHTML = '📦 Big order? <strong>Ask us for a bulk discount</strong> →';
      const savingsEl2 = document.getElementById('summarySavings');
      if (savingsEl2 && savingsEl2.parentElement) {
        savingsEl2.parentElement.insertBefore(bulkCtaEl, savingsEl2.nextSibling);
      }
    }
    bulkCtaEl.style.display = 'flex';
  } else if (bulkCtaEl) {
    bulkCtaEl.style.display = 'none';
  }

  // Free delivery progress bar
  const fdBar    = document.getElementById('freeDeliveryBar');
  const fdFill   = document.getElementById('freeDeliveryFill');
  const fdMsg    = document.getElementById('freeDeliveryMsg');
  if (fdBar && fdFill && fdMsg) {
    if (sub === 0) {
      fdBar.style.display = 'none';
    } else {
      fdBar.style.display = '';
      if (del === 0) {
        fdFill.style.width = '100%';
        fdMsg.innerHTML = `🎉 <strong>You've unlocked FREE delivery!</strong>`;
        fdFill.style.background = 'var(--green)';
      } else {
        const need  = CONFIG.minFreeDelivery - sub;
        const pct   = Math.min(100, Math.round(sub / CONFIG.minFreeDelivery * 100));
        fdFill.style.width = pct + '%';
        fdFill.style.background = '';
        fdMsg.innerHTML = `Add <strong>₹${need.toLocaleString('en-IN')}</strong> more to get <strong>FREE delivery</strong> 🚚`;
      }
    }
  }
}

// ── WHATSAPP ORDER ────────────────────────────
function buildWhatsAppMessage(details) {
  const now     = new Date();
  const date    = now.toLocaleDateString('en-IN',  { day:'2-digit', month:'2-digit', year:'numeric' });
  const time    = now.toLocaleTimeString('en-IN',  { hour:'2-digit', minute:'2-digit' });
  const baseUrl = 'https://elite-emporium-one.vercel.app/';

  let msg = `🛍️ *NEW ORDER — ELITE EMPORIUM*\n`;
  msg    += `━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  msg    += `📋 *ORDER ITEMS:*\n\n`;

  cart.forEach((item, i) => {
    msg += `${i + 1}. *${item.name}*\n`;
    if (item.selectedColor) msg += `   🎨 Color: *${item.selectedColor}*\n`;
    msg += `   Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')} = *₹${(item.price * item.quantity).toLocaleString('en-IN')}*\n`;
    if (item.image) {
      const imgUrl = item.image.startsWith('http') ? item.image : baseUrl + item.image;
      msg += `   🖼️ ${imgUrl}\n`;
    }
    msg += `\n`;
  });

  const sub      = getSubtotal();
  const del      = getDelivery();
  const discount = getCouponDiscount(sub);
  const tot      = Math.max(0, sub + del - discount);

  msg += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 Subtotal : ₹${sub.toLocaleString('en-IN')}\n`;
  msg += `🚚 Delivery : ${del === 0 ? 'FREE' : '₹' + del}\n`;
  if (discount > 0) msg += `🎟️ Coupon (${_activeCoupon}) : –₹${discount.toLocaleString('en-IN')}\n`;
  msg += `✅ *TOTAL   : ₹${tot.toLocaleString('en-IN')}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  msg += `👤 *CUSTOMER DETAILS:*\n`;
  msg += `Name    : ${details.name}\n`;
  msg += `Phone   : ${details.phone}\n`;
  msg += `Address : ${details.address}\n`;
  msg += `City    : ${details.city}\n`;
  msg += `State   : ${details.state}\n`;
  msg += `PIN     : ${details.pincode}\n`;
  if (details.notes) msg += `Notes   : ${details.notes}\n`;

  msg += `\n📅 Order Time: ${date}, ${time}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `_Sent from Elite Emporium Online Store_`;

  return encodeURIComponent(msg);
}

// ── PRICE DROP ALERTS ─────────────────────────
const PRICE_ALERTS_KEY = 'eliteEmporiumPriceAlerts';

function getPriceAlerts() { return JSON.parse(localStorage.getItem(PRICE_ALERTS_KEY) || '[]'); }
function getPriceAlert(productId) { return getPriceAlerts().find(a => a.id === productId) || null; }

function savePriceAlert(productId, targetPrice, productName, currentPrice) {
  const alerts = getPriceAlerts().filter(a => a.id !== productId);
  alerts.push({ id: productId, targetPrice, productName, currentPrice, savedAt: Date.now() });
  localStorage.setItem(PRICE_ALERTS_KEY, JSON.stringify(alerts));
}

function removePriceAlert(productId) {
  const alerts = getPriceAlerts().filter(a => a.id !== productId);
  localStorage.setItem(PRICE_ALERTS_KEY, JSON.stringify(alerts));
}

function checkPriceAlerts() {
  const alerts = getPriceAlerts();
  if (!alerts.length) return;
  const triggered = alerts.filter(a => {
    const product = products.find(p => p.id === a.id);
    return product && product.price <= a.targetPrice;
  });
  triggered.forEach(a => {
    const product = products.find(p => p.id === a.id);
    showToast(`🔔 Price Drop! ${a.productName.slice(0,30)}… is now ₹${product.price.toLocaleString('en-IN')} (your alert: ₹${a.targetPrice.toLocaleString('en-IN')})`, 6000);
  });
}

function openPriceAlertModal(p) {
  const existing = getPriceAlert(p.id);
  const backdrop = document.createElement('div');
  backdrop.className = 'pa-backdrop';
  const suggested = Math.floor(p.price * 0.9);
  backdrop.innerHTML = `
    <div class="pa-modal">
      <div class="pa-modal-head">
        <span>🔔 Set Price Drop Alert</span>
        <button class="pa-close" onclick="this.closest('.pa-backdrop').remove()">✕</button>
      </div>
      <p class="pa-desc">${p.name.slice(0,50)}${p.name.length > 50 ? '…' : ''}</p>
      <div class="pa-current">Current price: <strong>₹${p.price.toLocaleString('en-IN')}</strong></div>
      <label class="pa-label">Alert me when price drops to:</label>
      <div class="pa-input-row">
        <span class="pa-rupee">₹</span>
        <input type="number" id="paTargetPrice" class="pa-input" value="${existing ? existing.targetPrice : suggested}"
               min="1" max="${p.price - 1}" placeholder="Target price" />
      </div>
      <div class="pa-actions">
        ${existing ? `<button class="pa-remove" onclick="removePriceAlert(${p.id});this.closest('.pa-backdrop').remove();showToast('Alert removed.');document.querySelector('.btn-price-alert').innerHTML='🔔 Set Price Drop Alert';document.querySelector('.btn-price-alert').classList.remove('active');">Remove Alert</button>` : ''}
        <button class="pa-save" onclick="
          const v=parseInt(document.getElementById('paTargetPrice').value);
          if(!v||v<=0){alert('Enter a valid price.');return;}
          savePriceAlert(${p.id},v,'${p.name.replace(/'/g,"\\'")}',${p.price});
          this.closest('.pa-backdrop').remove();
          showToast('🔔 Alert set! We\\'ll notify you when price drops to ₹'+v.toLocaleString('en-IN')+'.');
          const ab=document.querySelector('.btn-price-alert');
          if(ab){ab.innerHTML='🔔 Alert set at ₹'+v.toLocaleString('en-IN');ab.classList.add('active');}
        ">Set Alert</button>
      </div>
    </div>`;
  backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.remove(); });
  document.body.appendChild(backdrop);
  setTimeout(() => document.getElementById('paTargetPrice')?.select(), 50);
}

// ── ORDER HISTORY ─────────────────────────────
const ORDER_HISTORY_KEY = 'eliteEmporiumOrders';

function getOrderHistory() {
  return JSON.parse(localStorage.getItem(ORDER_HISTORY_KEY) || '[]');
}

function saveOrderToHistory(order) {
  const orders = getOrderHistory();
  orders.unshift(order);
  if (orders.length > 50) orders.length = 50;
  localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(orders));
}

function exportOrdersCSV() {
  const orders = getOrderHistory();
  if (!orders.length) { showToast('⚠️ No orders to export.'); return; }

  const esc = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = [
    ['Order ID', 'Date', 'Status', 'Items', 'Subtotal (₹)', 'Delivery (₹)', 'Discount (₹)', 'Total (₹)', 'Coupon', 'Name', 'Phone', 'Address', 'City', 'State', 'PIN'].join(',')
  ];
  orders.forEach(o => {
    const itemStr = o.items.map(i => `${i.name} x${i.quantity}`).join(' | ');
    const d = new Date(o.date).toLocaleDateString('en-IN');
    rows.push([
      o.id, d, o.status, itemStr, o.subtotal, o.delivery, o.discount || 0, o.total,
      o.coupon || '', o.customer?.name || '', o.customer?.phone || '',
      o.customer?.address || '', o.customer?.city || '', o.customer?.state || '', o.customer?.pincode || ''
    ].map(esc).join(','));
  });

  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `elite-emporium-orders-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('✅ Orders exported as CSV!');
}

function clearOrderHistory() {
  if (!confirm('Clear all order history? This cannot be undone.')) return;
  localStorage.removeItem(ORDER_HISTORY_KEY);
  const c = document.getElementById('ordersContainer');
  const n = document.getElementById('ordersCount');
  if (n) n.textContent = '0';
  if (c) c.innerHTML = `<div class="empty-state"><div class="empty-icon">📦</div><h2>No orders yet</h2><p>Your order history will appear here after you place your first order.</p><a href="products.html" class="btn-primary">Start Shopping</a></div>`;
}

function generateOrderId() {
  return 'EE-' + Date.now().toString(36).toUpperCase();
}

function setFieldError(id, msg) {
  const el  = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = msg ? 'var(--red)' : '';
  let errEl = el.parentElement.querySelector('.field-error');
  if (msg) {
    if (!errEl) {
      errEl = document.createElement('div');
      errEl.className = 'field-error';
      el.parentElement.appendChild(errEl);
    }
    errEl.textContent = msg;
  } else if (errEl) {
    errEl.remove();
  }
}

function clearFieldError(id) { setFieldError(id, ''); }

function initFormValidation() {
  const rules = [
    { id: 'custName',    test: v => v.length >= 2, msg: 'Enter your full name' },
    { id: 'custPhone',   test: v => /^\d{10}$/.test(v), msg: 'Enter 10-digit mobile number' },
    { id: 'custAddress', test: v => v.length >= 5, msg: 'Enter a valid address' },
    { id: 'custCity',    test: v => v.length >= 2, msg: 'Enter your city/town' },
    { id: 'custState',   test: v => v !== '', msg: 'Select your state' },
    { id: 'custPincode', test: v => /^\d{6}$/.test(v), msg: 'Enter 6-digit PIN code' },
  ];
  rules.forEach(({ id, test, msg }) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      const v = el.value.trim();
      if (v) setFieldError(id, test(v) ? '' : msg);
    });
    el.addEventListener('input', () => { if (el.style.borderColor) clearFieldError(id); });
  });

  // Phone: only allow digits, max 10
  const phoneEl = document.getElementById('custPhone');
  if (phoneEl) {
    phoneEl.addEventListener('input', () => {
      phoneEl.value = phoneEl.value.replace(/\D/g, '').slice(0, 10);
    });
  }

  // PIN: only allow digits, max 6 + auto-detect state
  const pinEl = document.getElementById('custPincode');
  if (pinEl) {
    const PIN_STATE = {
      '11':'Delhi','12':'Haryana','13':'Punjab','14':'Punjab','15':'Punjab','16':'Punjab',
      '17':'Himachal Pradesh','18':'Jammu & Kashmir','19':'Jammu & Kashmir',
      '20':'Uttar Pradesh','21':'Uttar Pradesh','22':'Uttar Pradesh','23':'Uttar Pradesh',
      '24':'Uttar Pradesh','25':'Uttar Pradesh','26':'Uttar Pradesh','27':'Uttar Pradesh','28':'Uttar Pradesh',
      '30':'Rajasthan','31':'Rajasthan','32':'Rajasthan','33':'Rajasthan','34':'Rajasthan',
      '36':'Gujarat','37':'Gujarat','38':'Gujarat','39':'Gujarat',
      '40':'Maharashtra','41':'Maharashtra','42':'Maharashtra','43':'Maharashtra','44':'Maharashtra',
      '45':'Madhya Pradesh','46':'Madhya Pradesh','47':'Madhya Pradesh','48':'Madhya Pradesh',
      '49':'Chhattisgarh',
      '50':'Telangana','51':'Andhra Pradesh','52':'Andhra Pradesh','53':'Andhra Pradesh',
      '56':'Karnataka','57':'Karnataka','58':'Karnataka','59':'Karnataka',
      '60':'Tamil Nadu','61':'Tamil Nadu','62':'Tamil Nadu','63':'Tamil Nadu','64':'Tamil Nadu',
      '67':'Kerala','68':'Kerala','69':'Kerala',
      '70':'West Bengal','71':'West Bengal','72':'West Bengal','73':'West Bengal','74':'West Bengal',
      '75':'Odisha','76':'Odisha','77':'Odisha',
      '80':'Bihar','81':'Jharkhand','82':'Jharkhand','83':'Bihar',
      '84':'Bihar','85':'Bihar',
    };
    pinEl.addEventListener('input', () => {
      const raw = pinEl.value.replace(/\D/g, '').slice(0, 6);
      pinEl.value = raw;
      if (raw.length === 6) {
        const prefix2 = raw.slice(0, 2);
        const detectedState = PIN_STATE[prefix2];
        const stateEl = document.getElementById('custState');
        if (stateEl && detectedState) {
          const opt = [...stateEl.options].find(o => o.value === detectedState);
          if (opt && !stateEl.value) {
            stateEl.value = detectedState;
            clearFieldError('custState');
            showToast(`📍 State auto-filled: ${detectedState}`, 2500, 'info');
          }
        }
      }
    });
  }

  // City autocomplete
  const cityEl = document.getElementById('custCity');
  if (cityEl) {
    const CITIES = ['Chennai','Madurai','Coimbatore','Trichy','Salem','Tirunelveli','Erode','Vellore','Thoothukudi','Kanyakumari','Kayalpattinam','Mumbai','Delhi','Bengaluru','Hyderabad','Kolkata','Ahmedabad','Pune','Jaipur','Lucknow','Kanpur','Nagpur','Indore','Bhopal','Visakhapatnam','Patna','Vadodara','Ghaziabad','Ludhiana','Agra','Nashik','Meerut','Rajkot','Varanasi','Srinagar','Aurangabad','Dhanbad','Amritsar','Allahabad','Ranchi','Howrah','Jodhpur','Gwalior','Vijayawada','Chandigarh','Mysuru','Kochi','Kozhikode'];
    const datalist = document.createElement('datalist');
    datalist.id = 'cityList';
    datalist.innerHTML = CITIES.map(c => `<option value="${c}">`).join('');
    document.body.appendChild(datalist);
    cityEl.setAttribute('list', 'cityList');
    cityEl.setAttribute('autocomplete', 'address-level2');
  }

  // Notes: character counter
  const notesEl = document.getElementById('custNotes');
  if (notesEl) {
    const MAX = 200;
    const counter = document.createElement('div');
    counter.style.cssText = 'font-size:11px;color:var(--text-light);text-align:right;margin-top:3px;';
    counter.textContent = `0 / ${MAX}`;
    notesEl.parentElement.appendChild(counter);
    notesEl.maxLength = MAX;
    notesEl.addEventListener('input', () => {
      const len = notesEl.value.length;
      counter.textContent = `${len} / ${MAX}`;
      counter.style.color = len > MAX * 0.9 ? 'var(--red)' : 'var(--text-light)';
    });
  }
}

function launchConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLORS = ['#DB3022','#FFE500','#388E3C','#1565C0','#FF9F00','#9C27B0','#E91E63'];
  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: -10 - Math.random() * canvas.height * 0.3,
    vx: (Math.random() - 0.5) * 4,
    vy: 2 + Math.random() * 5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    w: 6 + Math.random() * 8,
    h: 4 + Math.random() * 5,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.2,
    alpha: 1,
  }));

  let frame, elapsed = 0;
  const DURATION = 2200;
  const start = performance.now();

  function draw(now) {
    elapsed = now - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const progress = Math.min(elapsed / DURATION, 1);
    particles.forEach(p => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += 0.12;
      p.rot += p.rotSpeed;
      p.alpha = progress > 0.7 ? 1 - (progress - 0.7) / 0.3 : 1;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (elapsed < DURATION) frame = requestAnimationFrame(draw);
    else { cancelAnimationFrame(frame); canvas.remove(); }
  }
  frame = requestAnimationFrame(draw);
}

function placeOrder() {
  // Prevent double-submit
  const orderBtn = document.querySelector('.whatsapp-order-btn');
  if (orderBtn && orderBtn.disabled) return;
  if (orderBtn) { orderBtn.disabled = true; orderBtn.innerHTML = '⏳ Processing…'; }

  const get = id => (document.getElementById(id) || {}).value?.trim() || '';
  const resetBtn = () => { if (orderBtn) { orderBtn.disabled = false; orderBtn.innerHTML = '💬 Place Order via WhatsApp'; } };

  const name    = get('custName');
  const phone   = get('custPhone');
  const address = get('custAddress');
  const city    = get('custCity');
  const state   = get('custState');
  const pincode = get('custPincode');
  const notes   = get('custNotes');

  // Show inline errors for all invalid fields
  const validations = [
    { id: 'custName',    ok: name.length >= 2,         msg: 'Enter your full name' },
    { id: 'custPhone',   ok: /^\d{10}$/.test(phone),   msg: 'Enter a valid 10-digit phone number' },
    { id: 'custAddress', ok: address.length >= 5,       msg: 'Enter your delivery address' },
    { id: 'custCity',    ok: city.length >= 2,          msg: 'Enter your city/town' },
    { id: 'custState',   ok: state !== '',              msg: 'Select your state' },
    { id: 'custPincode', ok: /^\d{6}$/.test(pincode),  msg: 'Enter a valid 6-digit PIN code' },
  ];
  let hasError = false;
  validations.forEach(({ id, ok, msg }) => { setFieldError(id, ok ? '' : msg); if (!ok) hasError = true; });
  if (hasError) { resetBtn(); showToast('⚠️ Please fix the highlighted fields!'); return; }

  if (!cart.length) {
    resetBtn(); showToast('⚠️ Your cart is empty!'); return;
  }

  const sub      = getSubtotal();
  const del      = getDelivery();
  const discount = getCouponDiscount(sub);
  const tot      = Math.max(0, sub + del - discount);
  const now      = new Date();

  // Save to order history before clearing cart
  saveOrderToHistory({
    id:        generateOrderId(),
    date:      now.toISOString(),
    status:    'Sent via WhatsApp',
    customer:  { name, phone, address, city, state, pincode, notes },
    items:     cart.map(i => ({ id: i.id, name: i.name, image: i.image, price: i.price, quantity: i.quantity, selectedColor: i.selectedColor || null })),
    subtotal:  sub,
    delivery:  del,
    discount:  discount,
    coupon:    _activeCoupon || null,
    total:     tot,
  });

  const msg   = buildWhatsAppMessage({ name, phone, address, city, state, pincode, notes });
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;

  // Clear cart and draft
  cart = [];
  saveCart();
  clearFormDraft();

  // Reset order button (reuse the orderBtn from the top of this function)
  resetBtn();

  launchConfetti();
  window.open(waUrl, '_blank');
  showToast('🎉 Order sent! Redirecting to WhatsApp…');

  setTimeout(() => { window.location.href = 'orders.html'; }, 2800);
}

// ── TOAST ─────────────────────────────────────
function showToast(message, duration = 3200, type = 'default') {
  // Auto-detect type from message prefix
  if (type === 'default') {
    if (message.startsWith('✅') || message.startsWith('🎉') || message.startsWith('🛒')) type = 'success';
    else if (message.startsWith('❌') || message.startsWith('⚠️'))                       type = 'error';
    else if (message.startsWith('🔔') || message.startsWith('ℹ️'))                       type = 'info';
  }

  let stack = document.getElementById('toastStack');
  if (!stack) {
    stack = document.createElement('div');
    stack.id = 'toastStack';
    stack.className = 'toast-stack';
    stack.setAttribute('role', 'status');
    stack.setAttribute('aria-live', 'polite');
    stack.setAttribute('aria-atomic', 'true');
    document.body.appendChild(stack);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type} toast-show`;
  toast.textContent = message;

  // Dismiss on click
  toast.addEventListener('click', () => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 340);
  });

  stack.appendChild(toast);

  // Cap stack at 3
  const all = stack.querySelectorAll('.toast');
  if (all.length > 3) all[0].click();

  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 340);
  }, duration);
}

// ── HEADER SEARCH ─────────────────────────────
const SEARCH_HISTORY_KEY = 'eliteEmporiumSearchHistory';

function getSearchHistory() {
  return JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY) || '[]');
}

function saveSearchTerm(q) {
  if (!q) return;
  let h = getSearchHistory().filter(t => t !== q);
  h.unshift(q);
  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(h.slice(0, 8)));
}

function initHeaderSearch() {
  const form = document.getElementById('headerSearchForm');
  const inp  = document.getElementById('headerSearchInput');
  if (!form || !inp) return;

  // Dropdown container
  const dropdown = document.createElement('div');
  dropdown.id = 'searchHistoryDropdown';
  dropdown.className = 'search-history-dropdown';
  inp.parentElement.style.position = 'relative';
  inp.parentElement.appendChild(dropdown);

  function showHistory() {
    const history = getSearchHistory();
    if (!history.length) { dropdown.style.display = 'none'; return; }
    dropdown.innerHTML = `
      <div class="sh-header">
        <span>Recent Searches</span>
        <button onclick="clearSearchHistory()" class="sh-clear">Clear</button>
      </div>
      ${history.map(t =>
        `<div class="sh-item" onclick="useSearchTerm('${t.replace(/'/g,"\\'")}')">🕐 ${t}</div>`
      ).join('')}`;
    dropdown.style.display = 'block';
  }

  inp.addEventListener('focus', () => { if (!inp.value) showHistory(); else showSuggestions(inp.value); });
  inp.addEventListener('input', () => {
    if (!inp.value) showHistory(); else showSuggestions(inp.value);
  });

  function highlightMatch(text, term) {
    if (!term) return text;
    const idx = text.toLowerCase().indexOf(term.toLowerCase());
    if (idx === -1) return text;
    return text.slice(0, idx) + `<mark class="sh-highlight">${text.slice(idx, idx + term.length)}</mark>` + text.slice(idx + term.length);
  }

  let _selectedIdx = -1;

  function showSuggestions(q) {
    if (!products.length) { dropdown.style.display = 'none'; return; }
    const term = q.toLowerCase();
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)
    ).slice(0, 6);
    if (!matches.length) { dropdown.style.display = 'none'; return; }
    _selectedIdx = -1;
    dropdown.innerHTML = `
      <div class="sh-header"><span>Suggestions for "<strong>${q}</strong>"</span></div>
      ${matches.map(p => `
        <a class="sh-item sh-product-item" href="product.html?id=${p.id}">
          <img src="${p.image || ''}" alt="${p.name}" class="sh-thumb" onerror="this.style.display='none'" />
          <div class="sh-product-info">
            <div class="sh-product-name">${highlightMatch(p.name, q)}</div>
            <div class="sh-product-price">₹${p.price.toLocaleString('en-IN')} · <span style="color:var(--red)">${p.category}</span></div>
          </div>
          ${p.mrp && p.mrp > p.price ? `<span class="sh-discount">${Math.round((p.mrp - p.price)/p.mrp*100)}% off</span>` : ''}
        </a>`).join('')}
      <a class="sh-item sh-search-all" href="products.html?search=${encodeURIComponent(q)}" onclick="saveSearchTerm('${q.replace(/'/g,"\\'")}')">
        🔍 See all results for "<strong>${q}</strong>"
      </a>`;
    dropdown.style.display = 'block';
  }

  inp.addEventListener('keydown', e => {
    const items = dropdown.querySelectorAll('.sh-item');
    if (!items.length || dropdown.style.display === 'none') return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      _selectedIdx = Math.min(_selectedIdx + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('sh-kbd-active', i === _selectedIdx));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      _selectedIdx = Math.max(_selectedIdx - 1, -1);
      items.forEach((el, i) => el.classList.toggle('sh-kbd-active', i === _selectedIdx));
      if (_selectedIdx === -1) inp.focus();
    } else if (e.key === 'Enter' && _selectedIdx >= 0) {
      e.preventDefault();
      items[_selectedIdx].click();
    }
  });

  document.addEventListener('click', e => {
    if (!inp.parentElement.contains(e.target)) dropdown.style.display = 'none';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = inp.value.trim();
    if (q) { saveSearchTerm(q); window.location.href = `products.html?search=${encodeURIComponent(q)}`; }
  });
}

function useSearchTerm(q) {
  const inp = document.getElementById('headerSearchInput');
  if (inp) inp.value = q;
  document.getElementById('searchHistoryDropdown').style.display = 'none';
  saveSearchTerm(q);
  window.location.href = `products.html?search=${encodeURIComponent(q)}`;
}

function clearSearchHistory() {
  localStorage.removeItem(SEARCH_HISTORY_KEY);
  document.getElementById('searchHistoryDropdown').style.display = 'none';
}

// ── PRODUCTS PAGE ─────────────────────────────
function initProductsPage() {
  const params      = new URLSearchParams(window.location.search);
  let activeCat     = params.get('category') || 'All';
  let activeSort    = params.get('sort')     || 'default';
  let searchQuery   = params.get('search')   || '';
  let minRating     = parseFloat(params.get('rating')) || 0;
  let inStockOnly   = params.get('inStock')  === '1';
  const minPriceP   = parseInt(params.get('minPrice'));
  const maxPriceP   = parseInt(params.get('maxPrice'));
  if (!isNaN(minPriceP)) _priceMin = minPriceP;
  if (!isNaN(maxPriceP)) _priceMax = maxPriceP;

  // Pre-fill search input & save term to history
  const searchInp = document.getElementById('productSearchInput');
  if (searchInp && searchQuery) { searchInp.value = searchQuery; saveSearchTerm(searchQuery); }

  // Pre-select category
  if (activeCat !== 'All') {
    document.querySelectorAll('.filter-option').forEach(opt => {
      const lbl = opt.querySelector('label');
      if (lbl && lbl.textContent.trim() === activeCat) {
        opt.classList.add('active');
        const inp = opt.querySelector('input');
        if (inp) inp.checked = true;
      }
    });
  }

  function filtered() {
    let list = [...products];
    if (activeCat !== 'All') list = list.filter(p => p.category === activeCat);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );
    }
    if (_priceMin !== null) list = list.filter(p => p.price >= _priceMin);
    if (_priceMax !== null) list = list.filter(p => p.price <= _priceMax);
    if (minRating > 0) list = list.filter(p => (p.rating || 0) >= minRating);
    if (inStockOnly) list = list.filter(p => p.inStock !== false);
    switch (activeSort) {
      case 'new':        list = list.filter(p => p.badge === 'New').concat(list.filter(p => p.badge !== 'New')); break;
      case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
      case 'price-desc': list.sort((a,b) => b.price - a.price); break;
      case 'rating':     list.sort((a,b) => b.rating - a.rating); break;
      case 'popular':    list.sort((a,b) => b.reviews - a.reviews); break;
      case 'discount':   list.sort((a,b) => {
        const discA = a.mrp ? Math.round((a.mrp - a.price) / a.mrp * 100) : 0;
        const discB = b.mrp ? Math.round((b.mrp - b.price) / b.mrp * 100) : 0;
        return discB - discA;
      }); break;
    }
    return list;
  }

  const CAT_META = {
    'Bags':         { icon:'👜', desc:'Premium designer bags — YSL, Coach, Michael Kors & more.' },
    'Watches':      { icon:'⌚', desc:'Luxury watches — Tommy Hilfiger, Armani, Rolex-style & more.' },
    'Clothing':     { icon:'👗', desc:'Lehengas, gowns, ethnic wear & casual fashion for every occasion.' },
    'Abaiya':       { icon:'🕌', desc:'Elegant abayas in premium fabrics — modest fashion at its best.' },
    'Hijab':        { icon:'🧕', desc:'Beautiful hijab styles — chiffon, silk, cotton & more.' },
    'Sarees':       { icon:'👘', desc:'Bridal, party & daily wear sarees in stunning designs.' },
    'Kurta Sets':   { icon:'🥻', desc:'Salwar suits, Anarkali & kurta sets for all occasions.' },
    'Mens Dress':   { icon:'👔', desc:'Calvin Klein shirts, formal & casual menswear collections.' },
    'Kids Wear':    { icon:'👶', desc:'Adorable clothing & accessories for boys and girls.' },
    'Coolers':      { icon:'🕶️', desc:'Marc Jacobs, Versace, sport & fashion sunglasses.' },
    'Wallets':      { icon:'👛', desc:'Genuine leather & designer wallets for men & women.' },
    'Belts':        { icon:'🔗', desc:'Formal & casual belts in leather & fabric styles.' },
    'Perfumes':     { icon:'🧴', desc:'Imported & premium fragrances for every mood.' },
    'Cosmetics':    { icon:'💄', desc:'Makeup, skincare & beauty essentials.' },
    'Hair Care':    { icon:'💆', desc:'Shampoos, oils, serums & hair accessories.' },
    'Footwear':     { icon:'👟', desc:'Sports shoes, sandals, heels & formal footwear.' },
    'Sports':       { icon:'🏃', desc:'Sportswear, equipment & fitness accessories.' },
    'Home & Kitchen':{ icon:'🍳', desc:'Kitchen appliances, utensils & home essentials.' },
    'Toys & Games': { icon:'🎮', desc:'Fun toys, games & educational items for all ages.' },
    'Electronics':  { icon:'📱', desc:'Gadgets, accessories & tech products.' },
  };

  function renderCategoryBanner(cat, count) {
    const banner = document.getElementById('categoryBanner');
    if (!banner) return;
    if (!cat || cat === 'All') { banner.style.display = 'none'; return; }
    const meta = CAT_META[cat] || { icon: '🛍️', desc: `Browse all ${cat} products at Elite Emporium.` };
    banner.innerHTML = `
      <div class="cat-banner-icon">${meta.icon}</div>
      <div class="cat-banner-info">
        <div class="cat-banner-name">${cat}</div>
        <div class="cat-banner-desc">${meta.desc}</div>
      </div>
      <div class="cat-banner-count">${count} product${count !== 1 ? 's' : ''}</div>`;
    banner.style.display = 'flex';
  }

  function refresh() {
    const list = filtered();
    renderProducts(list, 'productsGrid');
    const countEl = document.getElementById('productsCount');
    if (countEl) countEl.textContent = `Showing ${list.length} of ${products.length} products`;
    renderCategoryBanner(activeCat, list.length);
    renderFilterChips();
    syncStateToURL();
  }

  // Persist the full filter state to the URL via replaceState so links are shareable
  function syncStateToURL() {
    const params = new URLSearchParams();
    if (activeCat   !== 'All')      params.set('category', activeCat);
    if (searchQuery)                params.set('search',   searchQuery);
    if (activeSort  !== 'default')  params.set('sort',     activeSort);
    if (_priceMin   !== null)       params.set('minPrice', _priceMin);
    if (_priceMax   !== null)       params.set('maxPrice', _priceMax);
    if (minRating   > 0)            params.set('rating',   minRating);
    if (inStockOnly)                params.set('inStock',  '1');
    const qs = params.toString();
    const newUrl = window.location.pathname + (qs ? '?' + qs : '');
    history.replaceState(null, '', newUrl);
  }

  function renderFilterChips() {
    const bar = document.getElementById('activeFiltersBar');
    if (!bar) return;
    bar.innerHTML = '';
    if (activeCat !== 'All') {
      bar.appendChild(makeChip('📂 ' + activeCat, () => {
        activeCat = 'All';
        document.querySelectorAll('.filter-option input[name="category"]').forEach(inp => {
          if (inp.value === 'All') { inp.checked = true; inp.closest('.filter-option').classList.add('active'); }
          else inp.closest('.filter-option').classList.remove('active');
        });
        refresh();
      }));
    }
    if (_priceMin !== null || _priceMax !== null) {
      const label = _priceMin !== null && _priceMax !== null
        ? `₹${_priceMin} – ₹${_priceMax}`
        : _priceMin !== null ? `≥ ₹${_priceMin}` : `≤ ₹${_priceMax}`;
      bar.appendChild(makeChip('💰 ' + label, () => { clearPriceFilter(); }));
    }
    if (searchQuery) {
      bar.appendChild(makeChip('🔍 "' + searchQuery + '"', () => {
        searchQuery = '';
        const inp = document.getElementById('productSearchInput');
        if (inp) inp.value = '';
        refresh();
      }));
    }
    if (inStockOnly) {
      bar.appendChild(makeChip('✅ In Stock Only', () => {
        inStockOnly = false;
        const el = document.getElementById('inStockOnly');
        if (el) el.checked = false;
        refresh();
      }));
    }
    if (minRating > 0) {
      bar.appendChild(makeChip(`★ ${minRating}+ Rating`, () => {
        minRating = 0;
        const all = document.querySelector('input[name="ratingFilter"][value="0"]');
        if (all) all.checked = true;
        refresh();
      }));
    }
    if (activeSort !== 'default') {
      const sortLabels = { 'price-asc':'Price ↑','price-desc':'Price ↓','rating':'Top Rated','popular':'Popular','new':'New Arrivals','discount':'Best Discount' };
      bar.appendChild(makeChip('⇅ ' + (sortLabels[activeSort] || activeSort), () => {
        activeSort = 'default';
        const sel = document.getElementById('sortSelect');
        const selM = document.getElementById('sortSelectMobile');
        if (sel) sel.value = 'default';
        if (selM) selM.value = 'default';
        refresh();
      }));
    }

    // Update mobile filter button badge
    const activeCount = bar.childElementCount;
    const fBtn = document.getElementById('filterToggleBtn');
    if (fBtn) {
      fBtn.textContent = activeCount > 0 ? `🔧 Filters (${activeCount})` : '🔧 Filters';
      fBtn.style.background = activeCount > 0 ? 'var(--red)' : '';
      fBtn.style.color      = activeCount > 0 ? 'white' : '';
    }
  }

  function makeChip(text, onClose) {
    const chip = document.createElement('span');
    chip.className = 'active-filter-chip';
    chip.textContent = text;
    const btn = document.createElement('button');
    btn.className = 'active-filter-chip-close';
    btn.innerHTML = '✕';
    btn.title = 'Remove filter';
    btn.addEventListener('click', onClose);
    chip.appendChild(btn);
    return chip;
  }

  function closeSidebarOnMobile() {
    if (window.innerWidth > 768) return;
    const sidebar = document.querySelector('.filters-sidebar');
    const btn     = document.getElementById('filterToggleBtn');
    const overlay = document.getElementById('filterSheetOverlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
    document.body.style.overflow = '';
    if (btn) {
      btn.textContent = '🔧 Filters';
      btn.classList.remove('active');
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }
  }

  // Inject product counts next to each category label
  document.querySelectorAll('.filter-option input[name="category"]').forEach(inp => {
    const lbl = inp.closest('.filter-option')?.querySelector('label');
    if (!lbl) return;
    const cat   = inp.value;
    const count = cat === 'All' ? products.length : products.filter(p => p.category === cat).length;
    const badge = lbl.querySelector('.cat-count-badge');
    if (!badge && count > 0) {
      const span = document.createElement('span');
      span.className = 'cat-count-badge';
      span.textContent = count;
      lbl.appendChild(span);
    }
  });

  // Category filters
  document.querySelectorAll('.filter-option input[name="category"]').forEach(inp => {
    inp.addEventListener('change', e => {
      activeCat = e.target.value;
      document.querySelectorAll('.filter-option').forEach(o => o.classList.remove('active'));
      e.target.closest('.filter-option').classList.add('active');
      refresh();
      closeSidebarOnMobile();
    });
  });

  // Sort
  const sortSel = document.getElementById('sortSelect');
  if (sortSel) sortSel.addEventListener('change', e => {
    activeSort = e.target.value;
    refresh();
    closeSidebarOnMobile();
    // Sync sort chips
    document.querySelectorAll('.sort-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.sort === activeSort);
    });
  });

  const sortSelMobile = document.getElementById('sortSelectMobile');
  if (sortSelMobile) sortSelMobile.addEventListener('change', e => { activeSort = e.target.value; refresh(); });

  // Search with debounce + clear button + history dropdown
  let _searchDebounce;
  if (searchInp) {
    // Clear button
    const clearBtn = document.createElement('button');
    clearBtn.className = 'search-clear-btn';
    clearBtn.innerHTML = '✕';
    clearBtn.title = 'Clear search';
    clearBtn.style.display = 'none';
    clearBtn.onclick = () => { searchInp.value = ''; searchQuery = ''; clearBtn.style.display = 'none'; refresh(); searchInp.focus(); };
    const searchWrap = searchInp.parentElement;
    searchWrap.style.position = 'relative';
    searchWrap.appendChild(clearBtn);

    // Search history dropdown
    const histDrop = document.createElement('div');
    histDrop.className = 'ps-hist-drop';
    histDrop.style.display = 'none';
    searchWrap.appendChild(histDrop);

    function showSearchHistory() {
      const history = getSearchHistory().slice(0, 6);
      if (!history.length) { histDrop.style.display = 'none'; return; }
      histDrop.innerHTML = `<div class="ps-hist-head">🕐 Recent Searches</div>` +
        history.map(term =>
          `<div class="ps-hist-item" onclick="(function(){
            document.getElementById('productSearchInput').value='${term.replace(/'/g,"\\'")}';
            document.querySelector('.ps-hist-drop').style.display='none';
          })();">${term}</div>`
        ).join('');
      histDrop.style.display = 'block';
    }

    searchInp.addEventListener('focus', () => { if (!searchInp.value) showSearchHistory(); });
    searchInp.addEventListener('input', e => {
      searchQuery = e.target.value;
      clearBtn.style.display = searchQuery ? 'flex' : 'none';
      histDrop.style.display = 'none';
      clearTimeout(_searchDebounce);
      _searchDebounce = setTimeout(() => {
        if (searchQuery) saveSearchTerm(searchQuery);
        refresh();
      }, 260);
    });
    document.addEventListener('click', e => {
      if (!searchWrap.contains(e.target)) histDrop.style.display = 'none';
    });
  }

  // Price range — allow Enter key to apply
  ['priceMin','priceMax'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') applyPriceFilter(); });
  });

  // Rating filter
  document.querySelectorAll('input[name="ratingFilter"]').forEach(inp => {
    inp.addEventListener('change', e => { minRating = parseFloat(e.target.value) || 0; refresh(); });
  });

  // In Stock Only toggle
  const inStockEl = document.getElementById('inStockOnly');
  if (inStockEl) inStockEl.addEventListener('change', e => { inStockOnly = e.target.checked; refresh(); });

  _priceRefresh = refresh;

  // Sync UI controls to URL-restored state (so the sidebar reflects the actual filters)
  (() => {
    const sortSel  = document.getElementById('sortSelect');
    const sortSelM = document.getElementById('sortSelectMobile');
    if (sortSel)  sortSel.value  = activeSort;
    if (sortSelM) sortSelM.value = activeSort;
    document.querySelectorAll('.sort-chip').forEach(c => c.classList.toggle('active', c.dataset.sort === activeSort));

    const inStockUI = document.getElementById('inStockOnly');
    if (inStockUI) inStockUI.checked = inStockOnly;

    const ratingUI = document.querySelector(`input[name="ratingFilter"][value="${minRating}"]`);
    if (ratingUI) ratingUI.checked = true;

    const minEl = document.getElementById('priceMin');
    const maxEl = document.getElementById('priceMax');
    if (minEl && _priceMin !== null) minEl.value = _priceMin;
    if (maxEl && _priceMax !== null) maxEl.value = _priceMax;
  })();

  _resetFilters = function() {
    activeCat   = 'All';
    activeSort  = 'default';
    searchQuery = '';
    minRating   = 0;
    inStockOnly = false;
    _priceMin   = null;
    _priceMax   = null;
    refresh();
  };

  refresh();

  // Recently Viewed strip on products page
  injectProductsPageRecentStrip();

  // Scroll restoration: restore Y position when user presses Back from a product page
  const _SCROLL_KEY = 'ee_products_scroll';
  const _savedY = sessionStorage.getItem(_SCROLL_KEY);
  if (_savedY) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      window.scrollTo({ top: parseInt(_savedY, 10), behavior: 'instant' });
      sessionStorage.removeItem(_SCROLL_KEY);
    }));
  }
  // Save scroll position before navigating to a product
  document.getElementById('productsGrid')?.addEventListener('click', e => {
    if (e.target.closest('a[href*="product.html"]')) {
      sessionStorage.setItem(_SCROLL_KEY, window.scrollY);
    }
  });
}

// ── PRODUCTS PAGE: RECENTLY VIEWED STRIP ──────
function injectProductsPageRecentStrip() {
  if (document.getElementById('ppRecentSection')) return;
  const rv = JSON.parse(localStorage.getItem(RV_KEY) || '[]');
  if (rv.length < 2) return; // hide until they've looked at 2+ products

  const main = document.querySelector('.products-layout main') || document.querySelector('main');
  if (!main) return;

  const section = document.createElement('section');
  section.id = 'ppRecentSection';
  section.className = 'pp-recent-section';
  section.innerHTML = `
    <div class="pp-recent-head">
      <h3>👁️ Recently Viewed</h3>
      <button class="pp-recent-clear" onclick="clearRecentlyViewed()">Clear</button>
    </div>
    <div class="pp-recent-strip">
      ${rv.map(item => `
        <a class="pp-recent-card" href="product.html?id=${item.id}">
          ${item.image ? `<img src="${item.image}" alt="${(item.name || '').replace(/"/g, '&quot;')}" loading="lazy" />` : `<div style="width:92px;height:92px;border-radius:10px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:32px;">🛍️</div>`}
          <div class="pp-recent-card-name">${item.name || ''}</div>
          <div class="pp-recent-card-price">₹${(item.price || 0).toLocaleString('en-IN')}</div>
        </a>`).join('')}
    </div>`;

  // Insert above the products grid header
  const grid = document.getElementById('productsGrid');
  if (grid && grid.parentElement) grid.parentElement.insertBefore(section, grid.parentElement.firstChild);
  else main.insertBefore(section, main.firstChild);
}

function clearRecentlyViewed() {
  localStorage.removeItem(RV_KEY);
  document.getElementById('ppRecentSection')?.remove();
  document.getElementById('recentlyViewedSection') && (document.getElementById('recentlyViewedSection').style.display = 'none');
  document.getElementById('pdRecentlyViewedSection') && (document.getElementById('pdRecentlyViewedSection').style.display = 'none');
  showToast('🗑️ Recently viewed cleared.', 2500, 'info');
}

// ── NEW ARRIVALS STRIP ────────────────────────
function initNewArrivals() {
  const section = document.getElementById('newArrivalsSection');
  const strip   = document.getElementById('newArrivalsStrip');
  if (!section || !strip) return;
  const newItems = products.filter(p => p.badge === 'New' && p.inStock !== false);
  if (!newItems.length) return;
  section.style.display = 'block';
  renderProducts(newItems, 'newArrivalsStrip');
  strip.classList.add('horiz-product-strip');
  // Override grid to flex for horizontal scroll
  strip.style.display = 'flex';
  strip.style.overflowX = 'auto';
}

// ── HOMEPAGE FEATURED ─────────────────────────
function initForYou() {
  const section = document.getElementById('forYouSection');
  const strip   = document.getElementById('forYouStrip');
  if (!section || !strip) return;

  // Build picks from wishlisted categories → recently viewed categories → fallback to rated products
  const wishCats = [...new Set(
    wishlist.map(id => products.find(p => p.id === id)?.category).filter(Boolean)
  )];
  const recentIds = JSON.parse(localStorage.getItem('eliteEmporiumRecentlyViewed') || '[]');
  const recentCats = [...new Set(
    recentIds.map(id => products.find(p => p.id === Number(id))?.category).filter(Boolean)
  )];
  const interestCats = [...new Set([...wishCats, ...recentCats])];

  let picks;
  if (interestCats.length) {
    picks = products
      .filter(p => interestCats.includes(p.category) && !wishlist.includes(p.id) && p.inStock !== false)
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 8);
  }
  if (!picks || picks.length < 4) {
    picks = products.filter(p => p.inStock !== false).sort((a,b) => (b.rating||0)-(a.rating||0)).slice(0, 8);
  }
  if (!picks.length) { section.style.display = 'none'; return; }

  section.style.display = '';
  renderProducts(picks, 'forYouStrip');
  strip.style.display   = 'flex';
  strip.style.overflowX = 'auto';
}

function initHomePage() {
  const featured = products.filter(p => p.badge);
  renderProducts(featured.length ? featured : products.slice(0, 8), 'featuredProducts');
  initRecentlyViewed();
  initNewArrivals();
  initTrending();
  initDealOfDay();
  initForYou();
  setTimeout(initCartReminder, 2000);
}

// ── SIZE GUIDE ────────────────────────────────
const SIZE_GUIDES = {
  clothing: [
    ['Size','Chest (in)','Waist (in)','Hip (in)'],
    ['XS','32–34','26–28','34–36'],
    ['S','34–36','28–30','36–38'],
    ['M','36–38','30–32','38–40'],
    ['L','38–40','32–34','40–42'],
    ['XL','40–42','34–36','42–44'],
    ['XXL','42–44','36–38','44–46'],
  ],
  footwear: [
    ['UK Size','EU Size','US Size','Foot Length (cm)'],
    ['5','38','6','23.5'],['6','39','7','24.5'],
    ['7','40','8','25.5'],['8','41','9','26.5'],
    ['9','42','10','27.5'],['10','43','11','28.5'],
  ],
};

const CLOTHING_CATS = ['Clothing','Abaiya','Hijab','Sarees','Kurta Sets','Mens Dress','Kids Wear'];

function initSizeGuide(product) {
  const accord = document.getElementById('sizeGuideAccord');
  const body   = document.getElementById('sizeGuideBody');
  if (!accord || !body) return;

  let guide = null;
  if (CLOTHING_CATS.includes(product.category)) guide = SIZE_GUIDES.clothing;
  else if (product.category === 'Footwear')      guide = SIZE_GUIDES.footwear;
  if (!guide) return;

  const [headers, ...rows] = guide;
  body.innerHTML = `
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-size:11px;">
        <thead><tr>${headers.map(h =>
          `<th style="background:var(--red);color:white;padding:6px 8px;text-align:left;">${h}</th>`
        ).join('')}</tr></thead>
        <tbody>${rows.map((r, i) =>
          `<tr style="background:${i%2===0?'white':'var(--bg)'};">${r.map(c =>
            `<td style="padding:5px 8px;border-bottom:1px solid var(--border);">${c}</td>`
          ).join('')}</tr>`
        ).join('')}</tbody>
      </table>
    </div>
    <div style="font-size:11px;color:var(--text-light);margin-top:8px;">
      💡 If between sizes, we recommend going up one size.
    </div>`;
  accord.style.display = 'block';
}

function initDealOfDay() {
  const section = document.getElementById('dealOfDaySection');
  const card    = document.getElementById('dealOfDayCard');
  if (!section || !card) return;

  // Pick product with highest discount %
  const deal = [...products]
    .filter(p => p.mrp && p.mrp > p.price && p.inStock !== false)
    .sort((a, b) => (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp)[0];
  if (!deal) return;

  const disc = Math.round((deal.mrp - deal.price) / deal.mrp * 100);
  card.innerHTML = `
    <div class="deal-img-wrap">
      <span class="deal-discount-badge">${disc}% OFF</span>
      <img src="${deal.image || ''}" alt="${deal.name}" />
    </div>
    <div class="deal-info">
      <div class="deal-category">${deal.category}</div>
      <div class="deal-name">${deal.name}</div>
      <div class="deal-rating">${renderStars(deal.rating)} <span class="rating-count">(${deal.reviews} reviews)</span></div>
      <div class="deal-price-block">
        <span class="deal-price">₹${deal.price.toLocaleString('en-IN')}</span>
        <span class="deal-mrp">₹${deal.mrp.toLocaleString('en-IN')}</span>
        <span class="deal-saving">Save ₹${(deal.mrp - deal.price).toLocaleString('en-IN')}</span>
      </div>
      <div class="deal-desc">${deal.desc || ''}</div>
      <div class="deal-actions">
        <button class="add-to-cart" onclick="addToCart(${deal.id})">🛒 Add to Cart</button>
        <a class="deal-view-btn" href="product.html?id=${deal.id}">View Details →</a>
      </div>
    </div>`;
  section.style.display = 'block';

  // Countdown reuses the flash sale timer approach — counts to midnight
  const timerEl = document.getElementById('dealTimer');
  if (timerEl) {
    const tick = () => {
      const now = new Date();
      const midnight = new Date(now); midnight.setHours(23,59,59,999);
      let diff = Math.max(0, midnight - now);
      const h = Math.floor(diff / 3600000); diff -= h * 3600000;
      const m = Math.floor(diff / 60000);   diff -= m * 60000;
      const s = Math.floor(diff / 1000);
      timerEl.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    };
    tick();
    setInterval(tick, 1000);
  }
}

function initTrending() {
  const section = document.getElementById('trendingSection');
  const strip   = document.getElementById('trendingStrip');
  if (!section || !strip) return;
  const trending = [...products]
    .filter(p => p.inStock !== false)
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 8);
  if (!trending.length) return;
  section.style.display = 'block';
  renderProducts(trending, 'trendingStrip');
  strip.classList.add('horiz-product-strip');
  strip.style.display = 'flex';
  strip.style.overflowX = 'auto';
}

// ── VIEWER COUNT WIDGET ───────────────────────
function initViewerCount() {
  const wrap  = document.getElementById('pdViewerCount');
  const numEl = document.getElementById('pdViewerNum');
  if (!wrap || !numEl) return;

  let count = Math.floor(Math.random() * 18) + 6;
  numEl.textContent = count;
  wrap.style.display = 'flex';

  setInterval(() => {
    const delta = Math.random() < 0.5 ? 1 : -1;
    count = Math.max(4, Math.min(30, count + delta));
    numEl.textContent = count;
  }, 7000);
}

// ── PRODUCT DETAIL PAGE ───────────────────────
function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const rawId  = params.get('id');
  const p      = products.find(prod => String(prod.id) === String(rawId));

  if (!p) {
    document.getElementById('pdTitle').textContent = 'Product not found';
    const breadEl = document.getElementById('pdBreadcrumb');
    if (breadEl) breadEl.innerHTML = `<a href="index.html">Home</a> › <a href="products.html">Products</a> › Not Found`;
    return;
  }

  trackRecentlyViewed(p);
  initFBT(p);
  initPairWith(p);
  initRelatedProducts(p);
  initPdRecentlyViewed(p.id);
  initStickyBar(p);
  initReviewSection(p);
  initSizeGuide(p);
  initViewerCount();
  initPdTabInk();
  document.title = `${p.name} – ₹${p.price.toLocaleString('en-IN')} | Elite Emporium`;

  // Dynamic OG tags for social sharing of product links
  const setMeta = (prop, val, attr = 'property') => {
    let el = document.querySelector(`meta[${attr}="${prop}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, prop); document.head.appendChild(el); }
    el.setAttribute('content', val);
  };
  setMeta('og:title',       `${p.name} – Elite Emporium`);
  setMeta('og:description', `${(p.desc || '').slice(0, 120)}… ₹${p.price.toLocaleString('en-IN')} | Free delivery above ₹499`);
  setMeta('og:image',       p.image || 'images/logo.png');
  setMeta('og:type',        'product');
  setMeta('description',    `${p.name} at ₹${p.price.toLocaleString('en-IN')}. ${(p.desc || '').slice(0, 100)}`, 'name');

  // JSON-LD structured data for SEO rich snippets
  const baseUrl = 'https://elite-emporium-one.vercel.app/';
  const ldScript = document.getElementById('productJsonLd') || document.createElement('script');
  ldScript.id   = 'productJsonLd';
  ldScript.type = 'application/ld+json';
  ldScript.text = JSON.stringify({
    '@context':     'https://schema.org/',
    '@type':        'Product',
    name:           p.name,
    description:    p.desc || '',
    image:          p.image ? (p.image.startsWith('http') ? p.image : baseUrl + p.image) : baseUrl + 'images/logo.png',
    brand:          { '@type': 'Brand', name: 'Elite Emporium' },
    offers: {
      '@type':        'Offer',
      url:            baseUrl + `product.html?id=${p.id}`,
      priceCurrency:  'INR',
      price:          p.price,
      availability:   p.inStock !== false ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller:         { '@type': 'Organization', name: 'Elite Emporium' },
    },
    aggregateRating: p.rating ? {
      '@type':      'AggregateRating',
      ratingValue:  p.rating,
      reviewCount:  p.reviews || 1,
      bestRating:   5,
      worstRating:  1,
    } : undefined,
  });
  if (!document.getElementById('productJsonLd')) document.head.appendChild(ldScript);

  // Open Graph tags for WhatsApp / social link previews (via element IDs defined in product.html)
  const ogImg = p.image || (p.variants && p.variants[0]?.image) || '';
  const setOgById = (id, val) => { const el = document.getElementById(id); if (el) el.setAttribute('content', val); };
  setOgById('ogTitle', `${p.name} – ₹${p.price.toLocaleString('en-IN')} | Elite Emporium`);
  setOgById('ogDesc',  `${p.category} · ${p.mrp && p.mrp > p.price ? Math.round((p.mrp - p.price) / p.mrp * 100) + '% off · ' : ''}Rated ★${p.rating}. Free delivery above ₹499.`);
  setOgById('ogImage', ogImg.startsWith('http') ? ogImg : `https://elite-emporium-one.vercel.app/${ogImg}`);
  setOgById('ogUrl',   window.location.href);

  // Update canonical URL to the actual ?id=... permalink
  const canonical = document.getElementById('canonicalLink');
  if (canonical) canonical.href = window.location.href;

  // BreadcrumbList JSON-LD for SERP rich breadcrumbs
  const bcScript = document.getElementById('productBreadcrumbLd') || document.createElement('script');
  bcScript.id = 'productBreadcrumbLd';
  bcScript.type = 'application/ld+json';
  bcScript.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://elite-emporium-one.vercel.app/' },
      { '@type': 'ListItem', position: 2, name: 'All Products', item: 'https://elite-emporium-one.vercel.app/products.html' },
      { '@type': 'ListItem', position: 3, name: p.category,     item: `https://elite-emporium-one.vercel.app/products.html?category=${encodeURIComponent(p.category)}` },
      { '@type': 'ListItem', position: 4, name: p.name,         item: window.location.href },
    ],
  });
  if (!document.getElementById('productBreadcrumbLd')) document.head.appendChild(bcScript);
  document.querySelector('meta[name="description"]')?.setAttribute('content', `Buy ${p.name} at ₹${p.price.toLocaleString('en-IN')} on Elite Emporium. ${p.category}. Free delivery above ₹499.`);

  // Breadcrumb
  const breadEl = document.getElementById('pdBreadcrumb');
  if (breadEl) breadEl.innerHTML =
    `<a href="index.html">Home</a> › <a href="products.html">All Products</a> › <a href="products.html?category=${encodeURIComponent(p.category)}">${p.category}</a> › ${p.name}`;

  // Badge + stock status
  const bw = document.getElementById('pdBadgeWrap');
  if (bw) {
    const badgeHtml = p.badge ? (() => {
      const cls = p.badge === 'New' ? 'new' : p.badge === 'Bestseller' ? 'hot' : p.badge === 'Premium' ? 'premium' : '';
      return `<span class="product-badge ${cls}" style="position:static;display:inline-block;">${p.badge}</span>`;
    })() : '';
    const stockHtml = p.inStock !== false
      ? `<span class="pd-stock-badge">✅ In Stock</span>`
      : `<span class="pd-stock-badge oos">❌ Out of Stock</span>`;
    bw.innerHTML = `<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px;">${badgeHtml}${stockHtml}</div>`;
  }

  // Category tag with clickable link
  const catEl = document.getElementById('pdCategory');
  if (catEl) {
    catEl.innerHTML = `<a href="products.html?category=${encodeURIComponent(p.category)}" style="color:inherit;text-decoration:none;">${p.category}</a>`;
  }

  // Product keyword tags (extracted from name + brand keywords)
  const tagsWrap = document.createElement('div');
  tagsWrap.className = 'pd-tags-row';
  const nameWords = p.name.split(/\s+/).filter(w => w.length > 3);
  const keyTags   = [p.category, ...nameWords.slice(0, 4)].filter((v,i,a) => a.indexOf(v) === i);
  tagsWrap.innerHTML = keyTags.map(tag =>
    `<a href="products.html?search=${encodeURIComponent(tag)}" class="pd-tag">#${tag}</a>`
  ).join('');
  const pdTitleEl = document.getElementById('pdTitle');
  if (pdTitleEl) pdTitleEl.insertAdjacentElement('afterend', tagsWrap);

  // Category, title, rating, price, description
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('pdTitle',    p.name);
  set('pdPrice',    '₹' + p.price.toLocaleString('en-IN'));
  if (p.mrp && p.mrp > p.price) {
    const savings    = Math.round((p.mrp - p.price) / p.mrp * 100);
    const savedAmt   = (p.mrp - p.price).toLocaleString('en-IN');
    const mrpEl      = document.getElementById('pdPrice');
    if (mrpEl) mrpEl.insertAdjacentHTML('afterend',
      `<div class="pd-mrp"><s>M.R.P: ₹${p.mrp.toLocaleString('en-IN')}</s><span class="pd-save-badge">${savings}% off</span></div>
       <div class="pd-savings-callout">🎉 You save ₹${savedAmt} on this product!</div>`);
  }
  const descEl = document.getElementById('pdDesc');
  if (descEl) {
    // Format description: convert line breaks and bullet markers to HTML
    const formatDesc = raw => {
      if (!raw) return '';
      // Already has HTML tags — render as-is
      if (/<[a-z][\s\S]*>/i.test(raw)) return raw;
      const lines = raw.split(/\n+/);
      const bullets = lines.filter(l => /^[\-\•\*]/.test(l.trim()));
      if (bullets.length >= 2) {
        // Has bullet list — render mixed paragraphs + list
        let html = '';
        let inList = false;
        lines.forEach(line => {
          const t = line.trim();
          if (!t) { if (inList) { html += '</ul>'; inList = false; } return; }
          if (/^[\-\•\*]/.test(t)) {
            if (!inList) { html += '<ul class="pd-desc-list">'; inList = true; }
            html += `<li>${t.replace(/^[\-\•\*]\s*/, '')}</li>`;
          } else {
            if (inList) { html += '</ul>'; inList = false; }
            html += `<p class="pd-desc-para">${t}</p>`;
          }
        });
        if (inList) html += '</ul>';
        return html;
      }
      // Plain text — wrap each paragraph in <p>
      return lines.filter(l => l.trim()).map(l => `<p class="pd-desc-para">${l.trim()}</p>`).join('');
    };
    descEl.innerHTML = formatDesc(p.desc);
    // Append Price Alert button below description
    const alertBtn = document.createElement('button');
    alertBtn.className = 'btn-price-alert';
    alertBtn.innerHTML = '🔔 Set Price Drop Alert';
    alertBtn.onclick = () => openPriceAlertModal(p);
    const existingAlert = getPriceAlert(p.id);
    if (existingAlert) {
      alertBtn.innerHTML = `🔔 Alert set at ₹${existingAlert.targetPrice.toLocaleString('en-IN')}`;
      alertBtn.classList.add('active');
    }
    descEl.appendChild(alertBtn);
  }

  const ratingEl = document.getElementById('pdRating');
  if (ratingEl) ratingEl.innerHTML = `${renderStars(p.rating)} <span class="rating-count">(${p.reviews} reviews)</span>`;

  const barsEl = document.getElementById('pdRatingBars');
  if (barsEl && p.rating && p.reviews) {
    const r = p.rating;
    const n = p.reviews;
    // Simulate a plausible distribution anchored around the actual rating
    const dist = generateRatingDist(r, n);
    barsEl.innerHTML = [5,4,3,2,1].map(star => {
      const count = dist[star];
      const pct   = n > 0 ? Math.round(count / n * 100) : 0;
      const cls   = star <= 2 ? 'low' : star === 3 ? 'mid' : '';
      return `<div class="rating-bar-row">
        <span class="rating-bar-label">${star}★</span>
        <div class="rating-bar-track"><div class="rating-bar-fill ${cls}" style="width:${pct}%"></div></div>
        <span class="rating-bar-count">${count}</span>
      </div>`;
    }).join('');
  }

  // Main image & color picker
  const mainImg     = document.getElementById('pdMainImage');
  const colorPicker = document.getElementById('pdColorPicker');

  if (p.variants && p.variants.length > 1) {
    if (mainImg) mainImg.src = p.variants[0].image;
    // Thumbnail strip under main image
    const gallery = document.querySelector('.pd-gallery');
    if (gallery && p.variants.length > 1) {
      let thumbStrip = gallery.querySelector('.pd-thumb-strip');
      if (!thumbStrip) {
        thumbStrip = document.createElement('div');
        thumbStrip.className = 'pd-thumb-strip';
        gallery.appendChild(thumbStrip);
      }
      thumbStrip.innerHTML = p.variants.map((v, i) =>
        `<div class="pd-thumb${i === 0 ? ' active' : ''}"
              data-img="${v.image.replace(/"/g,'&quot;')}"
              data-color="${v.color.replace(/"/g,'&quot;')}"
              onclick="selectThumb(this)"
              title="${v.color}">
           <img src="${v.image}" alt="${v.color}" loading="lazy" />
         </div>`
      ).join('');
    }
    if (colorPicker) {
      colorPicker.innerHTML =
        `<div class="pd-color-label">Color: <strong id="pdSelectedColor">${p.variants[0].color}</strong></div>
         <div class="pd-color-swatches">
           ${p.variants.map((v, i) =>
             `<div class="pd-swatch-item${i === 0 ? ' active' : ''}"
                   data-img="${v.image.replace(/"/g,'&quot;')}"
                   data-color="${v.color.replace(/"/g,'&quot;')}"
                   onclick="selectDetailVariant(this)">
               <img src="${v.image}" alt="${v.color}" loading="lazy" />
               <span>${v.color}</span>
             </div>`
           ).join('')}
         </div>`;
    }
  } else {
    if (mainImg) mainImg.src = p.image || '';
    if (colorPicker) colorPicker.style.display = 'none';
  }

  // WhatsApp order button
  const waBtn = document.getElementById('pdWhatsApp');
  if (waBtn) {
    const msg = encodeURIComponent(`Hi! I want to order:\n\n*${p.name}*\nPrice: ₹${p.price.toLocaleString('en-IN')}\n\nPlease confirm availability.`);
    waBtn.href = `https://wa.me/917358650774?text=${msg}`;
  }

  // Out of Stock state on detail page
  const cartBtn = document.getElementById('pdAddToCart');
  if (p.inStock === false) {
    const oosEl = document.createElement('div');
    oosEl.className = 'pd-oos-badge';
    oosEl.textContent = 'Out of Stock';
    const actions = document.querySelector('.pd-actions');
    if (actions) actions.insertBefore(oosEl, actions.firstChild);
    if (cartBtn) {
      cartBtn.disabled = true;
      cartBtn.classList.add('oos-btn');
      cartBtn.textContent = 'Out of Stock';
    }
    const waBtn = document.getElementById('pdWhatsApp');
    if (waBtn) waBtn.textContent = '💬 Ask on WhatsApp';
    // Notify Me button
    const notifyBtn = document.createElement('button');
    notifyBtn.className = 'btn-notify-me';
    notifyBtn.innerHTML = '🔔 Notify Me When Available';
    notifyBtn.onclick = () => {
      const wa = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi! I'd like to be notified when "${p.name}" is back in stock.`)}`;
      window.open(wa, '_blank');
    };
    if (actions) actions.appendChild(notifyBtn);
  } else {
    // Quantity selector — inserted before .pd-actions
    let _pdQty = 1;
    const pdActions = document.querySelector('.pd-actions');
    if (pdActions) {
      const qtyRow = document.createElement('div');
      qtyRow.className = 'pd-qty-row';
      qtyRow.innerHTML =
        `<span class="pd-qty-label">Qty:</span>
         <div class="pd-qty-ctrl">
           <button class="pd-qty-btn" id="pdQtyDec" onclick="__pdQtyChange(-1)" aria-label="Decrease quantity">−</button>
           <span class="pd-qty-num" id="pdQtyNum">1</span>
           <button class="pd-qty-btn" id="pdQtyInc" onclick="__pdQtyChange(1)" aria-label="Increase quantity">+</button>
         </div>
         <span class="pd-qty-max-note" id="pdQtyNote"></span>`;
      pdActions.insertAdjacentElement('beforebegin', qtyRow);

      window.__pdQtyChange = function(delta) {
        _pdQty = Math.max(1, Math.min(10, _pdQty + delta));
        document.getElementById('pdQtyNum').textContent = _pdQty;
        document.getElementById('pdQtyDec').disabled = _pdQty <= 1;
        document.getElementById('pdQtyInc').disabled = _pdQty >= 10;
        document.getElementById('pdQtyNote').textContent = _pdQty >= 10 ? 'Max 10' : '';
      };
      // Initial state
      document.getElementById('pdQtyDec').disabled = true;
    }

    // Add to cart — pass selected variant + qty
    if (cartBtn) {
      if (p.variants && p.variants.length > 1) {
        cartBtn.dataset.selectedColor = p.variants[0].color;
        cartBtn.dataset.selectedImage = p.variants[0].image;
      }
      cartBtn.onclick = () => {
        const color = cartBtn.dataset.selectedColor || undefined;
        const img   = cartBtn.dataset.selectedImage || undefined;
        addToCart(p.id, color, img, _pdQty);
      };
    }
  }

  // Buy Now button
  const buyNowBtn = document.getElementById('pdBuyNow');
  if (buyNowBtn) {
    if (p.inStock === false) {
      buyNowBtn.disabled = true;
      buyNowBtn.textContent = 'Out of Stock';
    } else {
      buyNowBtn.onclick = () => {
        const color = cartBtn?.dataset.selectedColor || undefined;
        const img   = cartBtn?.dataset.selectedImage || undefined;
        const qty   = parseInt(document.getElementById('pdQtyNum')?.textContent || '1', 10) || 1;
        addToCart(p.id, color, img, qty);
        window.location.href = 'cart.html';
      };
    }
  }

  // Wishlist + Ask a Question buttons — always visible
  const actions = document.querySelector('.pd-actions');
  if (actions) {
    // Wishlist button
    const wlBtn = document.createElement('button');
    wlBtn.className = 'pd-btn-wishlist' + (isWishlisted(p.id) ? ' active' : '');
    wlBtn.innerHTML = isWishlisted(p.id) ? '❤️ Wishlisted' : '🤍 Wishlist';
    wlBtn.title = 'Save to wishlist';
    wlBtn.onclick = () => {
      toggleWishlist(p.id, null);
      const inWl = isWishlisted(p.id);
      wlBtn.innerHTML = inWl ? '❤️ Wishlisted' : '🤍 Wishlist';
      wlBtn.classList.toggle('active', inWl);
    };
    actions.appendChild(wlBtn);

    // Ask a Question button
    const askBtn = document.createElement('a');
    askBtn.className = 'btn-ask-question';
    askBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi! I have a question about:\n\n*${p.name}*\nPrice: ₹${p.price.toLocaleString('en-IN')}\n\nMy question: `)}`;
    askBtn.target = '_blank';
    askBtn.rel = 'noopener';
    askBtn.innerHTML = '❓ Ask a Question';
    actions.appendChild(askBtn);
  }

  // Related categories chip strip — appended to description tab
  (() => {
    const descEl = document.getElementById('pdDesc');
    if (!descEl) return;
    const RELATED_MAP = {
      'Abaiya':         ['Hijab', 'Sarees', 'Clothing', 'Perfumes'],
      'Hijab':          ['Abaiya', 'Sarees', 'Clothing', 'Cosmetics'],
      'Sarees':         ['Kurta Sets', 'Clothing', 'Jewellery', 'Hijab'],
      'Kurta Sets':     ['Sarees', 'Mens Dress', 'Clothing', 'Footwear'],
      'Clothing':       ['Footwear', 'Bags', 'Watches', 'Belts'],
      'Mens Dress':     ['Watches', 'Wallets', 'Belts', 'Footwear'],
      'Kids Wear':      ['Footwear', 'Toys & Games', 'Bags'],
      'Bags':           ['Wallets', 'Watches', 'Coolers', 'Clothing'],
      'Watches':        ['Bags', 'Wallets', 'Mens Dress', 'Coolers'],
      'Coolers':        ['Watches', 'Bags', 'Mens Dress'],
      'Wallets':        ['Bags', 'Belts', 'Watches', 'Mens Dress'],
      'Belts':          ['Wallets', 'Mens Dress', 'Footwear'],
      'Perfumes':       ['Cosmetics', 'Hair Care', 'Abaiya'],
      'Cosmetics':      ['Perfumes', 'Hair Care', 'Jewellery'],
      'Hair Care':      ['Cosmetics', 'Perfumes'],
      'Jewellery':      ['Sarees', 'Kurta Sets', 'Cosmetics'],
      'Home & Kitchen': ['Sports', 'Toys & Games'],
      'Sports':         ['Footwear', 'Clothing'],
      'Footwear':       ['Bags', 'Clothing', 'Belts'],
      'Toys & Games':   ['Kids Wear', 'Home & Kitchen'],
    };
    const related = RELATED_MAP[p.category] || [];
    if (!related.length) return;
    const wrap = document.createElement('div');
    wrap.className = 'pd-related-cats';
    wrap.innerHTML = `
      <div class="pd-related-cats-label">🔍 You might also love:</div>
      <div class="pd-related-cats-chips">
        ${related.map(c => `<a class="pd-related-cat-chip" href="products.html?category=${encodeURIComponent(c)}">${c}</a>`).join('')}
      </div>`;
    descEl.appendChild(wrap);
  })();

  // "Ask about this product" — dedicated WhatsApp deep link with product URL prefilled
  (() => {
    const descEl = document.getElementById('pdDesc');
    if (!descEl) return;
    const askProduct = document.createElement('a');
    askProduct.className = 'pd-ask-product';
    askProduct.target = '_blank';
    askProduct.rel = 'noopener';
    askProduct.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi! I have a question about this product:\n\n*${p.name}*\nPrice: ₹${p.price.toLocaleString('en-IN')}\nLink: ${window.location.href}\n\nMy question: `)}`;
    askProduct.innerHTML = `
      <span class="pd-ask-product-icon">💬</span>
      <div>
        <strong>Have a question about this product?</strong>
        <span>Ask the seller directly on WhatsApp — usually replies within 30 minutes.</span>
      </div>
      <span class="pd-ask-product-arrow">→</span>`;
    descEl.appendChild(askProduct);
  })();

  // Coupon nudge chip below price
  const priceEl = document.getElementById('pdPrice');
  if (priceEl && p.inStock !== false) {
    const couponChip = document.createElement('div');
    couponChip.className = 'pd-coupon-chip';
    couponChip.innerHTML = `
      <span class="pd-coupon-chip-text">💡 Use code <strong>ELITE10</strong> for 10% off at checkout</span>
      <button class="pd-coupon-copy" onclick="navigator.clipboard.writeText('ELITE10').then(()=>{this.textContent='✅ Copied!';setTimeout(()=>this.textContent='Copy',2000)}).catch(()=>{})" title="Copy code">Copy</button>`;
    const savings = priceEl.closest('.pd-info');
    if (savings) {
      const mrpEl = priceEl.nextElementSibling;
      const insertAfter = (mrpEl && mrpEl.classList?.contains('pd-mrp')) ? mrpEl.nextElementSibling : mrpEl || priceEl;
      if (insertAfter) insertAfter.insertAdjacentElement('afterend', couponChip);
      else priceEl.insertAdjacentElement('afterend', couponChip);
    }
  }

  // PIN code checker — Enter key support
  const pinInp = document.getElementById('pinCheckerInput');
  if (pinInp) {
    pinInp.addEventListener('keydown', e => { if (e.key === 'Enter') checkPinDelivery(); });
    // Auto-fill from saved address if available
    const history = JSON.parse(localStorage.getItem('eliteEmporiumOrders') || '[]');
    if (history.length) {
      const savedPin = history[history.length - 1]?.customer?.pincode;
      if (savedPin && /^\d{6}$/.test(savedPin)) {
        pinInp.value = savedPin;
        checkPinDelivery();
      }
    }
  }

  // Hover-pan zoom on the main product image (desktop only)
  (() => {
    const wrap = document.querySelector('.pd-main-image');
    const img  = document.getElementById('pdMainImage');
    if (!wrap || !img) return;
    if (window.matchMedia('(hover: none)').matches) return; // skip on touch

    wrap.classList.add('pd-zoomable');

    let lens; // floating zoom hint overlay
    wrap.addEventListener('mouseenter', () => {
      img.style.transition = 'transform 0.15s ease-out';
      img.style.transform  = 'scale(2.2)';
      if (!lens) {
        lens = document.createElement('div');
        lens.className = 'pd-zoom-hint';
        lens.textContent = '🔍 Move to pan · click to zoom in fullscreen';
        wrap.appendChild(lens);
      }
      lens.style.opacity = '1';
    });
    wrap.addEventListener('mousemove', e => {
      const rect = wrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
    });
    wrap.addEventListener('mouseleave', () => {
      img.style.transition = 'transform 0.2s ease-out';
      img.style.transform  = 'scale(1)';
      img.style.transformOrigin = 'center center';
      if (lens) lens.style.opacity = '0';
    });
  })();

  // Swipe gesture on main product image to cycle through variants
  if (p.variants && p.variants.length > 1) {
    const mainImgWrap = document.querySelector('.pd-main-image');
    if (mainImgWrap) {
      let _swipeStartX = 0;
      mainImgWrap.addEventListener('touchstart', e => { _swipeStartX = e.touches[0].clientX; }, { passive: true });
      mainImgWrap.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - _swipeStartX;
        if (Math.abs(dx) < 40) return;
        const thumbs = [...document.querySelectorAll('.pd-thumb')];
        if (!thumbs.length) return;
        const activeIdx = thumbs.findIndex(t => t.classList.contains('active'));
        const nextIdx   = dx < 0
          ? Math.min(activeIdx + 1, thumbs.length - 1)
          : Math.max(activeIdx - 1, 0);
        if (nextIdx !== activeIdx) selectThumb(thumbs[nextIdx]);
      }, { passive: true });
    }

    // Keyboard arrow navigation for product variants
    document.addEventListener('keydown', e => {
      if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) return;
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const thumbs = [...document.querySelectorAll('.pd-thumb')];
      if (!thumbs.length) return;
      const activeIdx = thumbs.findIndex(t => t.classList.contains('active'));
      const nextIdx   = e.key === 'ArrowRight'
        ? Math.min(activeIdx + 1, thumbs.length - 1)
        : Math.max(activeIdx - 1, 0);
      if (nextIdx !== activeIdx) selectThumb(thumbs[nextIdx]);
    });
  }
}

function initStickyBar(p) {
  const bar       = document.getElementById('pdStickyBar');
  const nameEl    = document.getElementById('pdStickyName');
  const priceEl   = document.getElementById('pdStickyPrice');
  const stickyBtn = document.getElementById('pdStickyBtn');
  if (!bar) return;

  if (nameEl)  nameEl.textContent  = p.name;
  if (priceEl) priceEl.textContent = '₹' + p.price.toLocaleString('en-IN');

  if (p.inStock === false) {
    if (stickyBtn) { stickyBtn.disabled = true; stickyBtn.textContent = 'Out of Stock'; stickyBtn.classList.add('oos-btn'); }
  } else {
    if (stickyBtn) stickyBtn.onclick = () => {
      const qty = parseInt(document.getElementById('pdQtyNum')?.textContent || '1', 10) || 1;
      addToCart(p.id, undefined, undefined, qty);
    };
  }

  const pdInfo = document.querySelector('.pd-info');
  if (pdInfo) {
    const obs = new IntersectionObserver(([entry]) => {
      bar.classList.toggle('show', !entry.isIntersecting);
    }, { threshold: 0.2 });
    obs.observe(pdInfo);
  }
}

// ── PRINT RECEIPT ────────────────────────────
// ── RAZORPAY: open hosted Payment Link ─────
function payOnline() {
  const link = CONFIG.razorpayPaymentLink;
  if (!link) {
    showToast('💳 Online payment not configured yet — please order via WhatsApp.', 4000, 'info');
    return;
  }
  if (!cart.length) { showToast('⚠️ Your cart is empty!'); return; }

  // Validate required customer fields before sending them off-site
  const get = id => (document.getElementById(id) || {}).value?.trim() || '';
  const name  = get('custName');
  const phone = get('custPhone');
  if (!name || !/^\d{10}$/.test(phone)) {
    showToast('⚠️ Fill name & 10-digit phone first — we use these for the receipt.', 4000, 'error');
    document.getElementById(name ? 'custPhone' : 'custName')?.focus();
    return;
  }

  const sub      = getSubtotal();
  const del      = getDelivery();
  const discount = getCouponDiscount(sub);
  const total    = Math.max(0, sub + del - discount);

  // Save order to history before redirecting off-site
  const orderId = generateOrderId();
  saveOrderToHistory({
    id: orderId,
    date: new Date().toISOString(),
    status: 'Awaiting payment',
    customer: { name, phone, address: get('custAddress'), city: get('custCity'), state: get('custState'), pincode: get('custPincode'), notes: get('custNotes') },
    items: cart.map(i => ({ id: i.id, name: i.name, image: i.image, price: i.price, quantity: i.quantity, selectedColor: i.selectedColor || null })),
    subtotal: sub, delivery: del, discount, coupon: _activeCoupon || null, total,
  });

  // Append prefill params if the link supports them (Razorpay Payment Pages accept name/email/contact)
  const url = new URL(link);
  url.searchParams.set('amount', String(total));
  url.searchParams.set('prefill[name]', name);
  url.searchParams.set('prefill[contact]', phone);
  url.searchParams.set('reference', orderId);

  window.open(url.toString(), '_blank');
  showToast('💳 Opening secure payment page…', 3000, 'info');
}

// Show Pay Online button when configured
function initPayOnlineButton() {
  const btn = document.getElementById('payOnlineBtn');
  const note = document.getElementById('payOnlineNote');
  if (!btn) return;
  const enabled = !!(CONFIG.razorpayPaymentLink && CONFIG.razorpayPaymentLink.startsWith('http'));
  btn.style.display  = enabled ? 'flex' : 'none';
  if (note) note.style.display = enabled ? 'block' : 'none';
}

function printReceipt() {
  if (!cart.length) { showToast('⚠️ Your cart is empty.'); return; }
  const sub      = getSubtotal();
  const del      = getDelivery();
  const discount = getCouponDiscount(sub);
  const tot      = Math.max(0, sub + del - discount);
  const now      = new Date().toLocaleString('en-IN');

  const rows = cart.map(item => `
    <tr>
      <td>${item.name}${item.selectedColor ? ' (' + item.selectedColor + ')' : ''}</td>
      <td style="text-align:center">${item.quantity}</td>
      <td style="text-align:right">₹${item.price.toLocaleString('en-IN')}</td>
      <td style="text-align:right">₹${(item.price * item.quantity).toLocaleString('en-IN')}</td>
    </tr>`).join('');

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"/>
    <title>Receipt – Elite Emporium</title>
    <style>
      body{font-family:Arial,sans-serif;max-width:600px;margin:30px auto;color:#212121;font-size:13px;}
      h1{color:#DB3022;text-align:center;font-size:20px;margin-bottom:4px;}
      .sub{text-align:center;color:#878787;font-size:11px;margin-bottom:16px;}
      table{width:100%;border-collapse:collapse;margin-top:12px;}
      th{background:#DB3022;color:white;padding:8px;text-align:left;font-size:12px;}
      td{padding:7px 8px;border-bottom:1px solid #eee;}
      .total-row td{font-weight:700;background:#FFEBEE;}
      .footer{margin-top:20px;font-size:11px;color:#878787;text-align:center;border-top:1px solid #eee;padding-top:12px;}
    </style></head><body>
    <h1>🛍️ Elite Emporium</h1>
    <div class="sub">GST: 33DWGPN3169G1ZF | ${now}</div>
    <table>
      <tr><th>Item</th><th style="text-align:center">Qty</th><th style="text-align:right">Price</th><th style="text-align:right">Total</th></tr>
      ${rows}
      <tr><td colspan="3">Subtotal</td><td style="text-align:right">₹${sub.toLocaleString('en-IN')}</td></tr>
      <tr><td colspan="3">Delivery</td><td style="text-align:right">${del === 0 ? 'FREE' : '₹' + del}</td></tr>
      ${discount > 0 ? `<tr><td colspan="3">Coupon (${_activeCoupon})</td><td style="text-align:right;color:#388E3C;">–₹${discount.toLocaleString('en-IN')}</td></tr>` : ''}
      <tr class="total-row"><td colspan="3">TOTAL</td><td style="text-align:right">₹${tot.toLocaleString('en-IN')}</td></tr>
    </table>
    <div class="footer">Elite Emporium · 183b Sadukai Street, Kayalpattinam · +91 8072173467<br/>Order via WhatsApp: +91 7358650774 · eliteemporium112024@gmail.com</div>
  </body></html>`;

  const win = window.open('', '_blank');
  if (win) { win.document.write(html); win.document.close(); win.print(); }
}

// ── REVIEW FORM ───────────────────────────────
let _reviewProductName = '';
let _reviewProductId   = null;
let _reviewRating = 0;
const REVIEWS_KEY = 'eliteEmporiumReviews';

function getProductReviews(pid) {
  const all = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
  return all[pid] || [];
}

function saveProductReview(pid, review) {
  const all = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
  if (!all[pid]) all[pid] = [];
  all[pid].unshift(review);
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
}

function renderLocalReviews(pid) {
  const section = document.getElementById('reviewSection');
  if (!section) return;
  const reviews = getProductReviews(pid);
  let listEl = section.querySelector('.rv-local-list');
  if (!listEl) {
    listEl = document.createElement('div');
    listEl.className = 'rv-local-list';
    const formWrap = section.querySelector('.review-form-wrap');
    if (formWrap) section.insertBefore(listEl, formWrap);
  }
  if (!reviews.length) { listEl.innerHTML = ''; return; }
  listEl.innerHTML = `<div class="rv-list-head">💬 Customer Reviews (${reviews.length})</div>` +
    reviews.map(r => {
      const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
      const d = new Date(r.date).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
      return `<div class="rv-local-item">
        <div class="rv-local-header">
          <span class="rv-local-name">${r.name || 'Anonymous'}</span>
          <span class="rv-local-stars" style="color:#FF9F00;">${stars}</span>
          <span class="rv-local-date">${d}</span>
        </div>
        <div class="rv-local-text">${r.text}</div>
      </div>`;
    }).join('');
}

function initReviewSection(product) {
  const section = document.getElementById('reviewSection');
  if (!section) return;
  _reviewProductName = product.name;
  _reviewProductId   = product.id;
  section.style.display = 'block';

  renderLocalReviews(product.id);

  const stars = section.querySelectorAll('.star-pick');
  stars.forEach(s => {
    s.addEventListener('mouseover', () => {
      const v = +s.dataset.v;
      stars.forEach(st => st.classList.toggle('active', +st.dataset.v <= v));
    });
    s.addEventListener('mouseout', () => {
      stars.forEach(st => st.classList.toggle('active', +st.dataset.v <= _reviewRating));
    });
    s.addEventListener('click', () => {
      _reviewRating = +s.dataset.v;
      stars.forEach(st => st.classList.toggle('active', +st.dataset.v <= _reviewRating));
    });
  });
}

function submitReview() {
  const name = (document.getElementById('reviewName')?.value || '').trim();
  const text = (document.getElementById('reviewText')?.value || '').trim();
  if (!_reviewRating) { showToast('⚠️ Please select a star rating.'); return; }
  if (!text) { showToast('⚠️ Please write something about this product.'); return; }
  const stars = '★'.repeat(_reviewRating) + '☆'.repeat(5 - _reviewRating);
  const msg = `✍️ *Product Review — Elite Emporium*\n\n📦 *Product:* ${_reviewProductName}\n${stars} (${_reviewRating}/5)\n👤 *Name:* ${name || 'Anonymous'}\n\n💬 *Review:*\n${text}`;
  // Save locally
  if (_reviewProductId !== null) {
    saveProductReview(_reviewProductId, { rating: _reviewRating, name: name || 'Anonymous', text, date: Date.now() });
    renderLocalReviews(_reviewProductId);
  }
  // Reset form
  const nameEl = document.getElementById('reviewName');
  const textEl = document.getElementById('reviewText');
  if (nameEl) nameEl.value = '';
  if (textEl) textEl.value = '';
  _reviewRating = 0;
  document.querySelectorAll('.star-pick').forEach(s => s.classList.remove('active'));
  showToast('✅ Review saved! Opening WhatsApp…');
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

function initFBT(product) {
  const section = document.getElementById('fbtSection');
  const inner   = document.getElementById('fbtInner');
  if (!section || !inner) return;

  // Pick 2 complementary products from different categories
  const others = products
    .filter(p => p.id !== product.id && p.inStock !== false && p.category !== product.category)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  if (!others.length) return;

  const bundle = [product, ...others];
  const total  = bundle.reduce((s, p) => s + p.price, 0);

  inner.innerHTML = `
    <div class="fbt-products">
      ${bundle.map((p, i) => `
        <div class="fbt-item">
          <a href="product.html?id=${p.id}">
            <img src="${p.image || ''}" alt="${p.name}" class="fbt-img" />
            <div class="fbt-name">${p.name}</div>
            <div class="fbt-price">₹${p.price.toLocaleString('en-IN')}</div>
          </a>
        </div>
        ${i < bundle.length - 1 ? '<div class="fbt-plus">+</div>' : ''}`
      ).join('')}
    </div>
    <div class="fbt-action">
      <div class="fbt-total">Bundle Total: <strong>₹${total.toLocaleString('en-IN')}</strong></div>
      <button class="fbt-add-btn" onclick="addBundleToCart([${bundle.map(p=>p.id).join(',')}])">🛒 Add All to Cart</button>
    </div>`;
  section.style.display = 'block';
}

function addBundleToCart(ids) {
  ids.forEach(id => {
    const p = products.find(pr => pr.id === id);
    if (!p || p.inStock === false) return;
    const cartKey = String(p.id) + '|';
    const existing = cart.find(i => i.cartKey === cartKey);
    if (existing) existing.quantity++;
    else cart.push({ ...p, quantity: 1, cartKey, selectedColor: null });
  });
  saveCart(true);
  showToast(`🛒 ${ids.length} items added to cart!`);
}

function initPairWith(product) {
  const section  = document.getElementById('pairWithSection');
  const strip    = document.getElementById('pairWithStrip');
  const titleEl  = document.getElementById('pairWithTitle');
  if (!section || !strip) return;

  const PAIRS = {
    'Bags':        ['Wallets', 'Watches', 'Coolers', 'Belts'],
    'Watches':     ['Wallets', 'Belts', 'Bags', 'Mens Dress'],
    'Wallets':     ['Bags', 'Watches', 'Belts'],
    'Belts':       ['Wallets', 'Watches', 'Mens Dress'],
    'Coolers':     ['Bags', 'Watches', 'Footwear'],
    'Clothing':    ['Bags', 'Coolers', 'Footwear', 'Perfumes'],
    'Abaiya':      ['Hijab', 'Bags', 'Perfumes'],
    'Hijab':       ['Abaiya', 'Bags', 'Perfumes'],
    'Sarees':      ['Cosmetics', 'Bags', 'Footwear'],
    'Kurta Sets':  ['Footwear', 'Bags', 'Cosmetics'],
    'Mens Dress':  ['Watches', 'Belts', 'Wallets', 'Footwear'],
    'Kids Wear':   ['Footwear', 'Toys & Games', 'Bags'],
    'Footwear':    ['Bags', 'Clothing', 'Coolers'],
    'Perfumes':    ['Cosmetics', 'Hair Care'],
    'Cosmetics':   ['Perfumes', 'Hair Care'],
    'Hair Care':   ['Cosmetics', 'Perfumes'],
    'Home & Kitchen': ['Home & Kitchen'],
    'Sports':      ['Footwear', 'Bags', 'Clothing'],
    'Toys & Games':['Kids Wear'],
  };

  const companionCats = PAIRS[product.category] || [];
  if (!companionCats.length) return;

  const picks = products
    .filter(p => companionCats.includes(p.category) && p.id !== product.id && p.inStock !== false)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 8);

  if (!picks.length) return;

  const catLabel = companionCats.slice(0, 2).join(' & ');
  if (titleEl) titleEl.textContent = `✨ Pair It With — ${catLabel}`;

  section.style.display = 'block';
  renderProducts(picks, 'pairWithStrip');
  strip.style.display   = 'flex';
  strip.style.overflowX = 'auto';
}

function initRelatedProducts(product) {
  const section = document.getElementById('relatedSection');
  const grid    = document.getElementById('relatedProducts');
  if (!section || !grid) return;
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id && p.inStock !== false)
    .slice(0, 4);
  if (!related.length) return;
  section.style.display = 'block';
  renderProducts(related, 'relatedProducts');
}

function initPdRecentlyViewed(currentId) {
  const section = document.getElementById('pdRecentlyViewedSection');
  const strip   = document.getElementById('pdRecentlyViewedStrip');
  if (!section || !strip) return;
  const ids = JSON.parse(localStorage.getItem(RV_KEY) || '[]')
    .filter(id => Number(id) !== currentId);
  const picks = ids.map(id => products.find(p => p.id === Number(id))).filter(Boolean).slice(0, 8);
  if (!picks.length) return;
  renderProducts(picks, 'pdRecentlyViewedStrip');
  strip.style.display   = 'flex';
  strip.style.overflowX = 'auto';
  section.style.display = 'block';
}

function selectDetailVariant(el) {
  const imgSrc    = el.dataset.img;
  const colorName = el.dataset.color;
  const mainImg   = document.getElementById('pdMainImage');
  if (mainImg) {
    mainImg.style.opacity = '0.6';
    mainImg.src = imgSrc;
    mainImg.onload = () => { mainImg.style.opacity = '1'; };
  }
  const lbl = document.getElementById('pdSelectedColor');
  if (lbl) lbl.textContent = colorName;
  el.closest('.pd-color-swatches').querySelectorAll('.pd-swatch-item').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  // Sync thumbnail strip
  document.querySelectorAll('.pd-thumb').forEach(t => t.classList.toggle('active', t.dataset.img === imgSrc));
  // Keep cart button in sync with selected variant
  const cartBtn = document.getElementById('pdAddToCart');
  if (cartBtn) {
    cartBtn.dataset.selectedColor = colorName;
    cartBtn.dataset.selectedImage = imgSrc;
  }
}

function selectThumb(el) {
  const imgSrc    = el.dataset.img;
  const colorName = el.dataset.color;
  const mainImg   = document.getElementById('pdMainImage');
  if (mainImg) {
    mainImg.style.opacity = '0.6';
    mainImg.src = imgSrc;
    mainImg.onload = () => { mainImg.style.opacity = '1'; };
  }
  document.querySelectorAll('.pd-thumb').forEach(t => t.classList.toggle('active', t === el));
  // Sync swatch strip
  document.querySelectorAll('.pd-swatch-item').forEach(s => s.classList.toggle('active', s.dataset.img === imgSrc));
  const lbl = document.getElementById('pdSelectedColor');
  if (lbl && colorName) lbl.textContent = colorName;
  const cartBtn = document.getElementById('pdAddToCart');
  if (cartBtn) {
    cartBtn.dataset.selectedColor = colorName;
    cartBtn.dataset.selectedImage = imgSrc;
  }
}

// ── SHARE PRODUCT ─────────────────────────────
function shareProduct() {
  const title = document.getElementById('pdTitle')?.textContent || 'Elite Emporium Product';
  const url   = window.location.href;
  if (navigator.share) {
    navigator.share({ title, text: `Check out ${title} on Elite Emporium!`, url })
      .catch(() => copyToClipboard(url));
  } else {
    copyToClipboard(url);
  }
}
function copyToClipboard(text) {
  navigator.clipboard?.writeText(text).then(() => showToast('🔗 Link copied to clipboard!'))
    .catch(() => showToast('🔗 Copy this link: ' + text));
}

// ── IMAGE ZOOM MODAL ──────────────────────────
let _imgModalGallery = []; // list of src strings (current product variants)
let _imgModalIndex   = 0;

function openImageModal(src) {
  if (!src) return;
  const modal = document.getElementById('imgModal');
  const img   = document.getElementById('imgModalImg');
  if (!modal || !img) return;

  // Build a gallery from the product detail thumbs if present, else single image
  const thumbs = [...document.querySelectorAll('.pd-thumb')];
  _imgModalGallery = thumbs.length
    ? thumbs.map(t => t.dataset?.img).filter(Boolean)
    : [src];
  _imgModalIndex = Math.max(0, _imgModalGallery.indexOf(src));
  if (_imgModalIndex < 0) _imgModalIndex = 0;

  img.src = _imgModalGallery[_imgModalIndex] || src;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Inject prev/next buttons + counter once
  if (!document.getElementById('imgModalPrev') && _imgModalGallery.length > 1) {
    const inner = modal.querySelector('.img-modal-inner') || modal;
    inner.insertAdjacentHTML('beforeend', `
      <button id="imgModalPrev" class="img-modal-nav prev" onclick="imgModalStep(-1)" aria-label="Previous">‹</button>
      <button id="imgModalNext" class="img-modal-nav next" onclick="imgModalStep(1)" aria-label="Next">›</button>
      <div id="imgModalCounter" class="img-modal-counter"></div>
    `);
  }
  updateImgModalCounter();
}
function imgModalStep(delta) {
  if (!_imgModalGallery.length) return;
  _imgModalIndex = (_imgModalIndex + delta + _imgModalGallery.length) % _imgModalGallery.length;
  const img = document.getElementById('imgModalImg');
  if (img) img.src = _imgModalGallery[_imgModalIndex];
  updateImgModalCounter();
}
function updateImgModalCounter() {
  const c = document.getElementById('imgModalCounter');
  const prev = document.getElementById('imgModalPrev');
  const next = document.getElementById('imgModalNext');
  const show = _imgModalGallery.length > 1;
  if (c) { c.textContent = `${_imgModalIndex + 1} / ${_imgModalGallery.length}`; c.style.display = show ? 'block' : 'none'; }
  if (prev) prev.style.display = show ? 'flex' : 'none';
  if (next) next.style.display = show ? 'flex' : 'none';
}
function closeImageModal() {
  const modal = document.getElementById('imgModal');
  if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
}
// Arrow-key nav while modal is open
document.addEventListener('keydown', e => {
  const open = document.getElementById('imgModal')?.classList.contains('open');
  if (!open) return;
  if (e.key === 'ArrowLeft')  imgModalStep(-1);
  if (e.key === 'ArrowRight') imgModalStep(1);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeImageModal(); closeQuickView(); closeCompareModal(); } });

// ── RECENTLY VIEWED ───────────────────────────
const RV_KEY = 'eliteEmporiumRecentlyViewed';
const RV_MAX = 6;

function trackRecentlyViewed(product) {
  let rv = JSON.parse(localStorage.getItem(RV_KEY) || '[]');
  rv = rv.filter(item => item.id !== product.id);
  rv.unshift({ id: product.id, name: product.name, image: product.image || '', price: product.price, category: product.category });
  if (rv.length > RV_MAX) rv = rv.slice(0, RV_MAX);
  localStorage.setItem(RV_KEY, JSON.stringify(rv));
}

function initRecentlyViewed() {
  const rv = JSON.parse(localStorage.getItem(RV_KEY) || '[]');
  if (!rv.length) return;
  const section = document.getElementById('recentlyViewedSection');
  const list    = document.getElementById('recentlyViewedList');
  if (!section || !list) return;
  section.style.display = 'block';
  list.innerHTML = rv.map(item => `
    <a href="product.html?id=${item.id}" class="rv-card">
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="rv-card-name">${item.name}</div>
      <div class="rv-card-price">₹${item.price.toLocaleString('en-IN')}</div>
    </a>`).join('');
}

// ── WISHLIST PAGE ─────────────────────────────
function initWishlistPage() {
  const grid     = document.getElementById('wishlistGrid');
  const countEl  = document.getElementById('wishlistCount');
  if (!grid) return;

  const rv = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');
  const wishlisted = products.filter(p => rv.includes(p.id));

  if (countEl) countEl.textContent = wishlisted.length
    ? `${wishlisted.length} saved item${wishlisted.length > 1 ? 's' : ''}`
    : 'No saved items yet';

  if (!wishlisted.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#878787;">
      <div style="font-size:60px;margin-bottom:16px;">🤍</div>
      <h3 style="color:var(--red);font-size:18px;margin-bottom:8px;">Your wishlist is empty</h3>
      <p style="margin-bottom:16px;">Tap the ❤️ on any product to save it here</p>
      <a href="products.html" style="display:inline-block;background:var(--red);color:white;padding:9px 22px;border-radius:20px;font-weight:600;font-size:13px;text-decoration:none;">Browse Products</a>
    </div>`;
    return;
  }

  // Wishlist value bar
  const totalVal  = wishlisted.reduce((s, p) => s + p.price, 0);
  const totalMrp  = wishlisted.reduce((s, p) => s + (p.mrp || p.price), 0);
  const totalSave = totalMrp - totalVal;
  const oosCount  = wishlisted.filter(p => p.inStock === false).length;
  const avgDisc   = totalMrp > totalVal ? Math.round((totalMrp - totalVal) / totalMrp * 100) : 0;
  const valueBar  = document.createElement('div');
  valueBar.className = 'wl-value-bar';
  valueBar.innerHTML = `
    <div>
      <div class="wl-value-label">Total Wishlist Value</div>
      <div class="wl-value-amount">₹${totalVal.toLocaleString('en-IN')}</div>
      <div class="wl-value-meta">
        ${totalSave > 0 ? `<span class="wl-value-savings">💸 Save ₹${totalSave.toLocaleString('en-IN')} (${avgDisc}% off MRP)</span>` : ''}
        ${oosCount > 0 ? `<span class="wl-value-oos">⚠️ ${oosCount} out of stock</span>` : ''}
      </div>
    </div>
    <button class="wl-move-all-btn" onclick="addAllWishlistToCart()">🛒 Add All to Cart</button>`;
  grid.parentElement.insertBefore(valueBar, grid);

  // Sort dropdown
  const sortBar = document.createElement('div');
  sortBar.className = 'wl-sort-bar';
  sortBar.innerHTML = `
    <span class="wl-sort-label">Sort by:</span>
    <select id="wlSortSelect" class="wl-sort-select">
      <option value="recent">🕐 Recently added</option>
      <option value="price-asc">₹ Price: Low → High</option>
      <option value="price-desc">₹ Price: High → Low</option>
      <option value="discount">💸 Best discount</option>
      <option value="name">A → Z</option>
    </select>`;
  grid.parentElement.insertBefore(sortBar, grid);

  const sortBy = (mode) => {
    let list = [...wishlisted];
    switch (mode) {
      case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
      case 'price-desc': list.sort((a,b) => b.price - a.price); break;
      case 'discount':   list.sort((a,b) => {
        const da = a.mrp && a.mrp > a.price ? (a.mrp - a.price) / a.mrp : 0;
        const db = b.mrp && b.mrp > b.price ? (b.mrp - b.price) / b.mrp : 0;
        return db - da;
      }); break;
      case 'name':       list.sort((a,b) => a.name.localeCompare(b.name)); break;
      // 'recent' is the natural insertion order (most-recent first via wishlist.indexOf)
      case 'recent':
      default:
        list.sort((a,b) => rv.indexOf(b.id) - rv.indexOf(a.id));
        break;
    }
    renderProducts(list, 'wishlistGrid');
  };

  document.getElementById('wlSortSelect').addEventListener('change', e => sortBy(e.target.value));
  sortBy('recent');
}

function shareWishlist() {
  const rv = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');
  const wishlisted = products.filter(p => rv.includes(p.id));
  if (!wishlisted.length) { showToast('⚠️ Your wishlist is empty!'); return; }
  let msg = `❤️ *My Wishlist – Elite Emporium*\n━━━━━━━━━━━━━━━━━\n\n`;
  wishlisted.forEach((p, i) => {
    msg += `${i + 1}. *${p.name}*\n   ₹${p.price.toLocaleString('en-IN')}`;
    if (p.mrp && p.mrp > p.price) msg += ` (MRP ₹${p.mrp.toLocaleString('en-IN')})`;
    msg += `\n   🔗 ${window.location.origin}${window.location.pathname.replace('wishlist.html', '')}product.html?id=${p.id}\n\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━\nShop at Elite Emporium 👉 https://wa.me/917358650774`;
  if (navigator.share) {
    navigator.share({ title: 'My Wishlist – Elite Emporium', text: msg }).catch(() => {});
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  }
}

function addAllWishlistToCart() {
  const rv = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');
  const wishlisted = products.filter(p => rv.includes(p.id) && p.inStock !== false);
  if (!wishlisted.length) { showToast('⚠️ No in-stock items in your wishlist.'); return; }
  wishlisted.forEach(p => {
    const cartKey  = String(p.id) + '|';
    const existing = cart.find(i => i.cartKey === cartKey);
    if (existing) { existing.quantity += 1; }
    else { cart.push({ ...p, quantity: 1, cartKey, selectedColor: null }); }
  });
  saveCart(true);
  showToast(`🛒 ${wishlisted.length} item${wishlisted.length > 1 ? 's' : ''} added to cart!`);
}

// ── PRICE RANGE FILTER ────────────────────────
let _priceMin = null;
let _priceMax = null;
let _priceRefresh = null;
let _resetFilters = null;

function applyPriceFilter() {
  const minEl = document.getElementById('priceMin');
  const maxEl = document.getElementById('priceMax');
  _priceMin = minEl?.value ? Number(minEl.value) : null;
  _priceMax = maxEl?.value ? Number(maxEl.value) : null;
  if (_priceRefresh) _priceRefresh();
}

function clearPriceFilter() {
  _priceMin = null; _priceMax = null;
  const minEl = document.getElementById('priceMin');
  const maxEl = document.getElementById('priceMax');
  if (minEl) minEl.value = '';
  if (maxEl) maxEl.value = '';
  if (_priceRefresh) _priceRefresh();
}

// ── GRID / LIST VIEW TOGGLE ───────────────────
let _currentViewMode = 'grid';

function setViewMode(mode, btn) {
  _currentViewMode = mode;
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  if (mode === 'list') {
    grid.classList.add('products-list-view');
  } else {
    grid.classList.remove('products-list-view');
  }
}

// ── SORT CHIPS (products page) ────────────────
function applySortChip(value, btn) {
  // Sync with the hidden selects
  const sel  = document.getElementById('sortSelect');
  const selM = document.getElementById('sortSelectMobile');
  if (sel)  sel.value  = value;
  if (selM) selM.value = value;
  sel?.dispatchEvent(new Event('change'));

  // Update chip active state
  document.querySelectorAll('.sort-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ── PRODUCT DETAIL TABS ───────────────────────
function switchPdTab(name, btn) {
  const panelMap = { desc: 'pdTabDesc', delivery: 'pdTabDelivery', seller: 'pdTabSeller' };
  document.querySelectorAll('.pd-tab').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
    b.setAttribute('tabindex', '-1');
  });
  document.querySelectorAll('.pd-tab-panel').forEach(p => p.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    btn.setAttribute('tabindex', '0');
  }
  const panel = document.getElementById(panelMap[name]);
  if (panel) {
    void panel.offsetWidth; // force reflow so animation replays
    panel.classList.add('active');
  }
  // Move the ink indicator
  const ink = document.getElementById('pdTabInk');
  if (ink && btn) {
    ink.style.left  = btn.offsetLeft + 'px';
    ink.style.width = btn.offsetWidth + 'px';
  }
}

function initPdTabInk() {
  const tabs = [...document.querySelectorAll('.pd-tab')];
  const activeTab = document.querySelector('.pd-tab.active');
  const ink = document.getElementById('pdTabInk');
  if (ink && activeTab) {
    ink.style.left  = activeTab.offsetLeft + 'px';
    ink.style.width = activeTab.offsetWidth + 'px';
  }
  // ARIA roles + keyboard navigation for the tablist
  const tablist = activeTab?.closest('.pd-tabs-nav');
  if (tablist) {
    tablist.setAttribute('role', 'tablist');
    tabs.forEach((t, i) => {
      t.setAttribute('role', 'tab');
      t.setAttribute('aria-selected', t.classList.contains('active') ? 'true' : 'false');
      t.setAttribute('tabindex', t.classList.contains('active') ? '0' : '-1');
    });
    ['pdTabDesc','pdTabDelivery','pdTabSeller'].forEach(id => {
      const p = document.getElementById(id);
      if (p) p.setAttribute('role', 'tabpanel');
    });
    tablist.addEventListener('keydown', e => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
      const cur = tabs.findIndex(t => t === document.activeElement);
      if (cur === -1) return;
      e.preventDefault();
      let next;
      if (e.key === 'ArrowRight') next = (cur + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (cur - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else next = tabs.length - 1;
      tabs[next].focus();
      tabs[next].click();
    });
  }
}

// ── MOBILE FILTER TOGGLE ──────────────────────
function toggleFilters() {
  const sidebar  = document.querySelector('.filters-sidebar');
  const btn      = document.getElementById('filterToggleBtn');
  const overlay  = document.getElementById('filterSheetOverlay');
  if (!sidebar) return;
  const isOpen = sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('visible', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
  if (btn) {
    btn.classList.toggle('active', isOpen);
    const countMatch = btn.textContent.match(/\((\d+)\)/);
    const countSuffix = countMatch ? ` (${countMatch[1]})` : '';
    btn.textContent = isOpen ? '✕ Close' : `🔧 Filters${countSuffix}`;
    if (isOpen) {
      btn.style.background = 'var(--red)';
      btn.style.color = 'white';
      btn.style.borderColor = 'var(--red)';
    } else {
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }
  }
}

// ── SKELETON LOADER ───────────────────────────
function showSkeletons(containerId, count = 8) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = Array.from({ length: count }, () => `
    <div class="skeleton-card">
      <div class="skel skel-img"></div>
      <div class="skel skel-line"></div>
      <div class="skel skel-line short"></div>
      <div class="skel skel-line price"></div>
    </div>`).join('');
}

// ── PIN CODE DELIVERY CHECKER ─────────────────
function checkPinDelivery() {
  const inp    = document.getElementById('pinCheckerInput');
  const result = document.getElementById('pinCheckerResult');
  if (!inp || !result) return;

  const pin = inp.value.trim();
  result.className = 'pin-checker-result';
  if (!/^\d{6}$/.test(pin)) {
    result.textContent = '⚠️ Please enter a valid 6-digit PIN code.';
    result.classList.add('error');
    return;
  }

  const prefix = parseInt(pin.slice(0, 2), 10);
  let state = 'India', days = [5, 7];
  if (prefix >= 60 && prefix <= 64) { state = 'Tamil Nadu';         days = [3, 5]; }
  else if (prefix >= 50 && prefix <= 53) { state = 'Andhra Pradesh / Telangana'; days = [4, 6]; }
  else if (prefix >= 56 && prefix <= 59) { state = 'Karnataka';     days = [4, 6]; }
  else if (prefix >= 67 && prefix <= 69) { state = 'Kerala';        days = [4, 6]; }
  else if (prefix >= 40 && prefix <= 41) { state = 'Maharashtra';   days = [5, 7]; }
  else if (prefix >= 11 && prefix <= 12) { state = 'Delhi';         days = [5, 7]; }
  else if (prefix >= 20 && prefix <= 28) { state = 'Uttar Pradesh'; days = [6, 8]; }
  else if (prefix >= 70 && prefix <= 74) { state = 'West Bengal';   days = [6, 8]; }
  else if (prefix >= 14 && prefix <= 16) { state = 'Punjab / Haryana'; days = [5, 7]; }
  else if (prefix >= 30 && prefix <= 34) { state = 'Rajasthan';    days = [6, 8]; }
  else if (prefix >= 38 && prefix <= 39) { state = 'Gujarat';      days = [5, 7]; }
  else if (prefix >= 46 && prefix <= 49) { state = 'Madhya Pradesh'; days = [6, 8]; }
  else if (prefix >= 80 && prefix <= 85) { state = 'Bihar / Jharkhand'; days = [6, 8]; }

  const addDays = (d, n) => { const r = new Date(d); for (let i = 0; i < n;) { r.setDate(r.getDate()+1); if (r.getDay()!==0&&r.getDay()!==6) i++; } return r; };
  const today   = new Date();
  const earliest = addDays(today, days[0]);
  const latest   = addDays(today, days[1]);
  const fmt = d => d.toLocaleDateString('en-IN', { weekday:'short', day:'numeric', month:'short' });

  result.innerHTML = `✅ Delivery to ${state} (${pin})<br>📅 Expected: <strong>${fmt(earliest)} – ${fmt(latest)}</strong>`;
  result.classList.add('success');
}

// ── DARK MODE ─────────────────────────────────
function initDarkMode() {
  const THEME_KEY = 'eliteEmporiumTheme';
  const root      = document.documentElement;

  // Apply saved theme immediately (before paint)
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  root.setAttribute('data-theme', saved);

  // Inject toggle button into every page's header-actions
  const headerActions = document.querySelector('.header-actions');
  if (headerActions) {
    const btn = document.createElement('button');
    btn.className   = 'dark-mode-btn';
    btn.title       = 'Toggle dark mode';
    btn.setAttribute('aria-label', 'Toggle dark/light mode');
    btn.textContent = saved === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const next   = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(THEME_KEY, next);
      btn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
    headerActions.insertBefore(btn, headerActions.firstChild);
  }
}

// ── CART REMINDER BANNER (homepage) ──────────
// ── WELCOME-BACK NUDGE ───────────────────────
// Stores last visit timestamp. If the user returns after >1h with a non-empty
// cart, show a single contextual toast. Runs once per session to avoid noise.
const LAST_VISIT_KEY = 'eliteEmporiumLastVisit';
function initWelcomeBack() {
  if (sessionStorage.getItem('welcomeBackShown')) return;

  const now      = Date.now();
  const lastRaw  = localStorage.getItem(LAST_VISIT_KEY);
  const lastMs   = lastRaw ? parseInt(lastRaw, 10) : 0;
  const hoursAgo = lastMs ? (now - lastMs) / 3600000 : null;

  // Always update the timestamp for next time
  localStorage.setItem(LAST_VISIT_KEY, String(now));

  // First-ever visit — no nudge
  if (!hoursAgo) return;
  // Same-session bounce — no nudge
  if (hoursAgo < 1) return;

  sessionStorage.setItem('welcomeBackShown', '1');

  // Returning user with items in cart → highest priority nudge
  if (cart.length) {
    const itemCount = cart.reduce((s, i) => s + i.quantity, 0);
    setTimeout(() => {
      showToast(`👋 Welcome back! You have ${itemCount} item${itemCount > 1 ? 's' : ''} waiting in your cart.`, 6000, 'info');
    }, 1200);
    return;
  }

  // Returning user with recently viewed items but no cart → soft nudge
  const rv = JSON.parse(localStorage.getItem(RV_KEY) || '[]');
  if (rv.length) {
    setTimeout(() => {
      showToast(`👋 Welcome back! Continue browsing where you left off.`, 5000, 'info');
    }, 1500);
    return;
  }

  // Long-gone returning user (1 week+) → fresh-welcome nudge
  if (hoursAgo > 24 * 7) {
    setTimeout(() => {
      showToast(`👋 Welcome back to Elite Emporium! Check out what's new this week.`, 5000, 'info');
    }, 1500);
  }
}

function initCartReminder() {
  if (!document.getElementById('featuredProducts')) return; // homepage only
  if (!cart.length) return;
  if (sessionStorage.getItem('eliteCartReminderDismissed')) return;

  const sub      = getSubtotal();
  const items    = cart.reduce((s, i) => s + i.quantity, 0);
  const toFree   = Math.max(0, 499 - sub);

  let el = document.getElementById('cartReminderBanner');
  if (el) return;
  el = document.createElement('div');
  el.id        = 'cartReminderBanner';
  el.className = 'cart-reminder-banner';
  el.innerHTML = `
    <div class="cart-reminder-left">
      <span class="cart-reminder-icon">🛒</span>
      <div>
        <strong>${items} item${items > 1 ? 's' : ''} in your cart — ₹${sub.toLocaleString('en-IN')}</strong>
        ${toFree > 0 ? `<span>Add ₹${toFree.toLocaleString('en-IN')} more for FREE delivery!</span>` : '<span>🎉 You qualify for FREE delivery!</span>'}
      </div>
    </div>
    <a href="cart.html" class="cart-reminder-btn">Checkout →</a>
    <button class="cart-reminder-close" onclick="dismissCartReminder()" title="Dismiss">✕</button>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
}

function dismissCartReminder() {
  const el = document.getElementById('cartReminderBanner');
  if (el) { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }
  sessionStorage.setItem('eliteCartReminderDismissed', '1');
}

// ── PWA INSTALL BANNER ────────────────────────
let _deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _deferredInstallPrompt = e;

  // Don't show if dismissed within last 7 days
  const dismissed = localStorage.getItem('eliteEmporiumPwaDismissed');
  if (dismissed && (Date.now() - Number(dismissed)) < 7 * 86400000) return;

  setTimeout(showInstallBanner, 3000);
});

function showInstallBanner() {
  if (document.getElementById('pwaInstallBanner')) return;
  const banner = document.createElement('div');
  banner.id        = 'pwaInstallBanner';
  banner.className = 'pwa-install-banner';
  banner.innerHTML = `
    <div class="pwa-install-icon">👑</div>
    <div class="pwa-install-text">
      <strong>Install Elite Emporium</strong>
      <span>Add to your home screen for faster access & offline browsing</span>
    </div>
    <button class="pwa-install-btn" onclick="triggerPwaInstall()">Install</button>
    <button class="pwa-install-dismiss" onclick="dismissInstallBanner()" title="Dismiss">✕</button>`;
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add('show'));
}

function triggerPwaInstall() {
  if (!_deferredInstallPrompt) return;
  _deferredInstallPrompt.prompt();
  _deferredInstallPrompt.userChoice.then(choice => {
    if (choice.outcome === 'accepted') showToast('✅ App installed! Find it on your home screen.');
    _deferredInstallPrompt = null;
    dismissInstallBanner();
  });
}

function dismissInstallBanner() {
  const banner = document.getElementById('pwaInstallBanner');
  if (banner) { banner.classList.remove('show'); setTimeout(() => banner.remove(), 300); }
  localStorage.setItem('eliteEmporiumPwaDismissed', Date.now());
}

window.addEventListener('appinstalled', () => {
  showToast('🎉 Elite Emporium installed successfully!');
  dismissInstallBanner();
});

// ── SCROLL REVEAL ─────────────────────────────
function initAccessibility() {
  // Inject a "Skip to main content" link for keyboard users (once)
  if (!document.getElementById('skipToMain')) {
    const skip = document.createElement('a');
    skip.id = 'skipToMain';
    skip.href = '#main';
    skip.className = 'skip-link';
    skip.textContent = 'Skip to main content';
    document.body.insertBefore(skip, document.body.firstChild);
    // Make sure there's a target — fall back to the first <main>, <section>, or .fk-main
    if (!document.getElementById('main')) {
      const target = document.querySelector('main, [role="main"], .fk-main, .products-layout');
      if (target) target.id = 'main';
    }
  }

  // Add aria-labels to icon-only buttons
  const labelMap = [
    ['.back-to-top',     'Back to top'],
    ['.dark-mode-btn',   'Toggle dark mode'],
    ['.whatsapp-float',  'Order via WhatsApp'],
    ['.mini-cart-toggle','Open mini cart'],
    ['.filter-toggle',   'Open filters'],
    ['.img-modal-close', 'Close image'],
    ['.qv-close-btn',    'Close quick view'],
    ['.toast-close',     'Dismiss notification'],
  ];
  labelMap.forEach(([sel, label]) => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', label);
    });
  });

  // Improve focus outlines for keyboard users
  document.addEventListener('keydown', e => {
    if (e.key === 'Tab') document.body.classList.add('kbd-nav');

    // Press '/' to focus header search (unless already in an input)
    if (e.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) {
      const inp = document.getElementById('headerSearchInput');
      if (inp) { e.preventDefault(); inp.focus(); inp.select(); }
    }

    // Press Escape to close modals / dropdowns
    if (e.key === 'Escape') {
      const qv = document.getElementById('quickViewModal');
      if (qv && qv.style.display !== 'none') { closeQuickView?.(); return; }
      const imgModal = document.getElementById('imgModal');
      if (imgModal && imgModal.style.display !== 'none') { closeImageModal?.(); return; }
      const cmpModal = document.getElementById('compareModal');
      if (cmpModal) { closeCompareModal?.(); return; }
      // Close search dropdown
      const shDrop = document.getElementById('searchHistoryDropdown');
      if (shDrop && shDrop.style.display !== 'none') { shDrop.style.display = 'none'; return; }
    }
  });
  document.addEventListener('mousedown', () => document.body.classList.remove('kbd-nav'));
}

function initPageTransitions() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me')) return;
    if (a.target === '_blank' || a.rel?.includes('noopener')) return;
    e.preventDefault();
    document.body.classList.add('page-exiting');
    setTimeout(() => { window.location.href = href; }, 200);
  });
}

function initLazyImageFade() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      if (img.complete) return;
      img.classList.add('img-loading');
      img.addEventListener('load', () => img.classList.remove('img-loading'), { once: true });
      img.addEventListener('error', () => img.classList.remove('img-loading'), { once: true });
      observer.unobserve(img);
    });
  }, { rootMargin: '200px' });

  document.querySelectorAll('.product-image-photo img[loading="lazy"]').forEach(img => {
    if (!img.complete) observer.observe(img);
  });

  // Also handle dynamically added images
  const mutObs = new MutationObserver(mutations => {
    mutations.forEach(m => m.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      const imgs = node.tagName === 'IMG' ? [node] : [...node.querySelectorAll('.product-image-photo img[loading="lazy"]')];
      imgs.forEach(img => { if (!img.complete) observer.observe(img); });
    }));
  });
  mutObs.observe(document.body, { childList: true, subtree: true });
}

function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const style = document.createElement('style');
  style.textContent = `
    .sr-hidden { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .sr-visible { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  const targets = document.querySelectorAll(
    '.fk-section-head, .stats-strip, .testimonials-grid, .fbt-section, ' +
    '.related-section, .review-section, .newsletter-strip, .cart-trust-badges, ' +
    '.deal-of-day-section, .oh-card'
  );

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sr-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => {
    el.classList.add('sr-hidden');
    obs.observe(el);
  });
}

// ── BACK TO TOP ───────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 320);
  }, { passive: true });
}

// ── ANIMATED SEARCH PLACEHOLDER ──────────────
function animateSearchPlaceholder() {
  const hints = [
    'Search products, brands and more',
    'Try "Tommy Hilfiger watch"…',
    'Try "YSL bag"…',
    'Try "Anarkali lehenga"…',
    'Try "Calvin Klein shirts"…',
    'Try "Marc Jacobs sunglasses"…',
  ];
  const inp = document.getElementById('headerSearchInput');
  if (!inp) return;
  let i = 0;
  setInterval(() => {
    if (document.activeElement !== inp) {
      i = (i + 1) % hints.length;
      inp.placeholder = hints[i];
    }
  }, 3000);
}

// ── KEYBOARD SHORTCUTS ────────────────────────
function openShortcutHelp() {
  let modal = document.getElementById('kbdHelpModal');
  if (modal) { modal.style.display = 'flex'; return; }
  modal = document.createElement('div');
  modal.id        = 'kbdHelpModal';
  modal.className = 'kbd-help-backdrop';
  modal.innerHTML = `
    <div class="kbd-help-modal">
      <div class="kbd-help-head">
        <h3>⌨️ Keyboard Shortcuts</h3>
        <button class="kbd-help-close" onclick="document.getElementById('kbdHelpModal').style.display='none'">✕</button>
      </div>
      <div class="kbd-help-body">
        <div class="kbd-row"><kbd>/</kbd><span>Focus search bar</span></div>
        <div class="kbd-row"><kbd>Esc</kbd><span>Close modal / blur search</span></div>
        <div class="kbd-row"><kbd>?</kbd><span>Show this help</span></div>
        <div class="kbd-row"><kbd>↑</kbd><kbd>↓</kbd><span>Navigate search suggestions</span></div>
        <div class="kbd-row"><kbd>Enter</kbd><span>Select suggestion / submit search</span></div>
        <div class="kbd-row"><kbd>G H</kbd><span>Go to Home</span></div>
        <div class="kbd-row"><kbd>G P</kbd><span>Go to Products</span></div>
        <div class="kbd-row"><kbd>G C</kbd><span>Go to Cart</span></div>
        <div class="kbd-row"><kbd>G W</kbd><span>Go to Wishlist</span></div>
      </div>
    </div>`;
  modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
  document.body.appendChild(modal);
}

let _kbdSeq = '';
document.addEventListener('keydown', e => {
  const tag = document.activeElement.tagName;
  const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

  if (e.key === '/' && !isInput) {
    e.preventDefault();
    const inp = document.getElementById('headerSearchInput');
    if (inp) { inp.focus(); inp.select(); }
  }
  if (e.key === '?' && !isInput) { e.preventDefault(); openShortcutHelp(); }

  if (e.key === 'Escape') {
    const inp = document.getElementById('headerSearchInput');
    if (inp && document.activeElement === inp) inp.blur();
    const kbdModal = document.getElementById('kbdHelpModal');
    if (kbdModal) kbdModal.style.display = 'none';
  }

  // Two-key navigation shortcuts (G then letter)
  if (!isInput) {
    _kbdSeq += e.key.toLowerCase();
    if (_kbdSeq.length > 2) _kbdSeq = _kbdSeq.slice(-2);
    if (_kbdSeq === 'gh') { window.location.href = 'index.html'; _kbdSeq = ''; }
    if (_kbdSeq === 'gp') { window.location.href = 'products.html'; _kbdSeq = ''; }
    if (_kbdSeq === 'gc') { window.location.href = 'cart.html'; _kbdSeq = ''; }
    if (_kbdSeq === 'gw') { window.location.href = 'wishlist.html'; _kbdSeq = ''; }
  } else {
    _kbdSeq = '';
  }
});

// ── INIT ──────────────────────────────────────
// ── SOCIAL PROOF NOTIFICATIONS ───────────────
const SOCIAL_PROOF_NAMES = ['Fatima','Aisha','Priya','Mohammed','Ravi','Sara','Hina','Rohan','Zara','Ali','Meera','Omar'];
const SOCIAL_PROOF_CITIES = ['Chennai','Coimbatore','Madurai','Salem','Trichy','Tirunelveli','Erode','Vellore','Kanyakumari','Tuticorin'];

function initSocialProof() {
  if (!document.getElementById('featuredProducts') && !document.getElementById('productsGrid')) return;
  const container = document.createElement('div');
  container.id = 'socialProofToast';
  container.className = 'sp-toast';
  document.body.appendChild(container);

  function showProof() {
    const pList = products.filter(p => p.inStock !== false);
    if (!pList.length) return;
    const p    = pList[Math.floor(Math.random() * pList.length)];
    const name = SOCIAL_PROOF_NAMES[Math.floor(Math.random() * SOCIAL_PROOF_NAMES.length)];
    const city = SOCIAL_PROOF_CITIES[Math.floor(Math.random() * SOCIAL_PROOF_CITIES.length)];
    const mins = Math.floor(Math.random() * 55) + 5;
    container.innerHTML = `
      ${p.image ? `<img src="${p.image}" alt="${p.name}" class="sp-thumb" />` : '<span style="font-size:24px;">🛍️</span>'}
      <div class="sp-body">
        <div class="sp-name"><strong>${name}</strong> from ${city}</div>
        <div class="sp-text">just ordered <em>${p.name}</em></div>
        <div class="sp-time">${mins} min ago</div>
      </div>`;
    container.classList.add('sp-show');
    setTimeout(() => container.classList.remove('sp-show'), 4500);
  }

  setTimeout(showProof, 6000);
  setInterval(showProof, 18000);
}

// ── QUICK VIEW MODAL ─────────────────────────
function openQuickView(pid) {
  const p = products.find(pr => pr.id === pid);
  if (!p) return;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  set('qvCategory', p.category);
  set('qvName',     p.name);
  set('qvRating',   `${renderStars(p.rating)} <span class="rating-count">(${p.reviews} reviews)</span>`);
  set('qvPrice',    `₹${p.price.toLocaleString('en-IN')}`);
  set('qvMrp',      p.mrp && p.mrp > p.price
    ? `<s>₹${p.mrp.toLocaleString('en-IN')}</s> <span class="qv-save">${Math.round((p.mrp - p.price) / p.mrp * 100)}% off</span>`
    : '');
  set('qvDesc', p.desc || '');
  const img = document.getElementById('qvImg');
  if (img) { img.src = p.image || ''; img.alt = p.name; }
  const link = document.getElementById('qvViewLink');
  if (link) link.href = `product.html?id=${p.id}`;
  const btn = document.getElementById('qvAddBtn');
  if (btn) {
    if (p.inStock === false) {
      btn.textContent = 'Out of Stock';
      btn.disabled = true;
      btn.classList.add('oos-btn');
    } else {
      btn.textContent = '🛒 Add to Cart';
      btn.disabled = false;
      btn.classList.remove('oos-btn');
      btn.onclick = () => { addToCart(p.id); closeQuickView(); };
    }
  }

  // Inject wishlist + price alert buttons dynamically
  const actions = document.querySelector('#qvBackdrop .qv-actions');
  if (actions) {
    // Wishlist button
    let wBtn = document.getElementById('qvWishBtn');
    if (!wBtn) {
      wBtn = document.createElement('button');
      wBtn.id = 'qvWishBtn';
      wBtn.className = 'qv-wish-btn';
      if (link) actions.insertBefore(wBtn, link);
      else actions.appendChild(wBtn);
    }
    const wished = isWishlisted(p.id);
    wBtn.innerHTML = wished ? '❤️ Wishlisted' : '🤍 Wishlist';
    wBtn.classList.toggle('active', wished);
    wBtn.onclick = () => {
      toggleWishlist(p.id, null);
      const nowWished = isWishlisted(p.id);
      wBtn.innerHTML = nowWished ? '❤️ Wishlisted' : '🤍 Wishlist';
      wBtn.classList.toggle('active', nowWished);
    };

    // Price alert button (only for in-stock products with an MRP)
    let paBtn = document.getElementById('qvAlertBtn');
    if (!paBtn && p.inStock !== false) {
      paBtn = document.createElement('button');
      paBtn.id = 'qvAlertBtn';
      paBtn.className = 'btn-price-alert';
      paBtn.style.fontSize = '11px';
      paBtn.style.padding  = '4px 12px';
      actions.appendChild(paBtn);
    }
    if (paBtn) {
      const existingAlert = getPriceAlert(p.id);
      paBtn.innerHTML = existingAlert
        ? `🔔 Alert ₹${existingAlert.targetPrice.toLocaleString('en-IN')}`
        : '🔔 Price Alert';
      paBtn.classList.toggle('active', !!existingAlert);
      paBtn.onclick = () => openPriceAlertModal(p);
    }
  }

  const bd = document.getElementById('qvBackdrop');
  if (bd) { bd.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closeQuickView(e) {
  if (e && e.target !== document.getElementById('qvBackdrop')) return;
  const bd = document.getElementById('qvBackdrop');
  if (bd) { bd.classList.remove('open'); document.body.style.overflow = ''; }
}

// ── FLASH SALE COUNTDOWN ──────────────────────
function initFlashSaleTimer() {
  const hh = document.getElementById('flashHH');
  const mm = document.getElementById('flashMM');
  const ss = document.getElementById('flashSS');
  if (!hh || !mm || !ss) return;

  function tick() {
    const now      = new Date();
    const midnight = new Date(now);
    midnight.setHours(23, 59, 59, 999);
    let diff = Math.max(0, midnight - now);
    const h  = Math.floor(diff / 3600000);       diff -= h  * 3600000;
    const m  = Math.floor(diff / 60000);          diff -= m  * 60000;
    const s  = Math.floor(diff / 1000);
    hh.textContent = String(h).padStart(2, '0');
    mm.textContent = String(m).padStart(2, '0');
    ss.textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
}

// ── NEWSLETTER ───────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  const inp = e.target.querySelector('input[type="email"]');
  const email = inp ? inp.value.trim() : '';
  showToast(`🎉 Subscribed! Use code ELITE10 for 10% off your next order.`);
  if (inp) inp.value = '';
}

// ── STATS COUNTER ANIMATION ──────────────────
function initStatsCounter() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = +el.dataset.target;
      const dur    = 1200;
      const step   = target / (dur / 16);
      let cur = 0;
      const tick = () => {
        cur = Math.min(cur + step, target);
        el.textContent = Math.floor(cur);
        if (cur < target) requestAnimationFrame(tick);
      };
      tick();
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(el => observer.observe(el));
}

// ── SCROLL PROGRESS BAR ──────────────────────
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const doc   = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    bar.style.width = total > 0 ? (window.scrollY / total * 100) + '%' : '0%';
  }, { passive: true });
}

// ── SCROLL-SHRINK HEADER ──────────────────────
function initScrollHeader() {
  const hdr = document.querySelector('header');
  if (!hdr) return;
  const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── ORDERS PAGE ───────────────────────────────
function printGSTInvoice(orderId) {
  const orders = getOrderHistory();
  const order  = orders.find(o => o.id === orderId);
  if (!order) { showToast('Order not found.'); return; }

  const date = new Date(order.date);
  const dStr = date.toLocaleDateString('en-IN', { day:'2-digit', month:'long', year:'numeric' });

  const itemRows = order.items.map((item, i) => {
    const amount = item.price * item.quantity;
    const gstRate = 12;
    const taxableAmt = Math.round(amount / 1.12);
    const gstAmt = amount - taxableAmt;
    return `<tr>
      <td style="padding:8px;border:1px solid #ddd;">${i + 1}</td>
      <td style="padding:8px;border:1px solid #ddd;">${item.name}${item.selectedColor ? ' (' + item.selectedColor + ')' : ''}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;">${item.quantity}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${item.price.toLocaleString('en-IN')}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${taxableAmt.toLocaleString('en-IN')}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;">${gstRate}%</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${gstAmt.toLocaleString('en-IN')}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;font-weight:600;">₹${amount.toLocaleString('en-IN')}</td>
    </tr>`;
  }).join('');

  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>GST Invoice – ${order.id}</title>
  <style>
    body { font-family: Arial, sans-serif; font-size: 13px; color: #222; margin: 0; padding: 24px; }
    .inv-header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #DB3022; padding-bottom: 16px; margin-bottom: 16px; }
    .inv-logo { font-size: 22px; font-weight: 900; color: #DB3022; letter-spacing: -1px; }
    .inv-logo small { display: block; font-size: 11px; font-weight: 400; color: #555; letter-spacing: 0; }
    .inv-tag { background: #DB3022; color: white; padding: 6px 14px; border-radius: 6px; font-size: 13px; font-weight: 700; }
    .inv-meta { display: flex; gap: 40px; margin-bottom: 16px; }
    .inv-meta-col h4 { font-size: 11px; color: #888; text-transform: uppercase; margin-bottom: 6px; }
    .inv-meta-col p { font-size: 13px; margin: 2px 0; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
    th { background: #DB3022; color: white; padding: 8px; text-align: left; font-size: 12px; }
    th:not(:first-child) { text-align: right; }
    th:nth-child(3) { text-align: center; }
    .inv-totals { margin-left: auto; width: 280px; }
    .inv-totals tr td { padding: 5px 8px; font-size: 13px; }
    .inv-totals tr:last-child td { font-weight: 700; font-size: 15px; border-top: 2px solid #DB3022; }
    .inv-footer { margin-top: 24px; padding-top: 12px; border-top: 1px dashed #ccc; font-size: 11px; color: #888; }
    .badge-paid { background: #e8f5e9; color: #2e7d32; border: 1px solid #a5d6a7; padding: 4px 12px; border-radius: 20px; font-weight: 700; }
    @media print { button { display: none !important; } }
  </style></head><body>
  <div class="inv-header">
    <div>
      <div class="inv-logo">Elite Emporium<small>183b, Sadukai Street, Kayalpattinam – 628204</small></div>
      <div style="margin-top:6px;font-size:12px;color:#555;">📞 +91 80721 73467 &nbsp;|&nbsp; ✉️ eliteemporium112024@gmail.com</div>
      <div style="margin-top:3px;font-size:12px;color:#555;">GSTIN: <strong>33DWGPN3169G1ZF</strong> &nbsp;|&nbsp; Udyam: UDYAM-TN-26-0090343</div>
    </div>
    <div style="text-align:right;">
      <div class="inv-tag">TAX INVOICE</div>
      <div style="margin-top:8px;font-size:12px;">Invoice No: <strong>${order.id}</strong></div>
      <div style="font-size:12px;">Date: <strong>${dStr}</strong></div>
      <div style="margin-top:6px;"><span class="badge-paid">✅ Paid via WhatsApp</span></div>
    </div>
  </div>

  <div class="inv-meta">
    <div class="inv-meta-col">
      <h4>Bill To</h4>
      <p><strong>${order.customer.name || 'Customer'}</strong></p>
      <p>${order.customer.phone || ''}</p>
      <p>${order.customer.address}</p>
      <p>${order.customer.city}, ${order.customer.state} – ${order.customer.pincode}</p>
    </div>
    <div class="inv-meta-col">
      <h4>Ship To</h4>
      <p>${order.customer.address}</p>
      <p>${order.customer.city}, ${order.customer.state}</p>
      <p>PIN: ${order.customer.pincode}</p>
    </div>
  </div>

  <table>
    <thead><tr>
      <th style="width:40px;">#</th>
      <th>Description</th>
      <th style="width:60px;text-align:center;">Qty</th>
      <th style="width:90px;text-align:right;">Unit Price</th>
      <th style="width:100px;text-align:right;">Taxable Amt</th>
      <th style="width:60px;text-align:center;">GST%</th>
      <th style="width:80px;text-align:right;">GST Amt</th>
      <th style="width:100px;text-align:right;">Total</th>
    </tr></thead>
    <tbody>${itemRows}</tbody>
  </table>

  <table class="inv-totals">
    <tr><td>Subtotal</td><td style="text-align:right;">₹${order.subtotal.toLocaleString('en-IN')}</td></tr>
    <tr><td>Delivery Charges</td><td style="text-align:right;">${order.delivery === 0 ? 'FREE' : '₹' + order.delivery}</td></tr>
    ${order.discount > 0 ? `<tr><td>Discount${order.coupon ? ' (' + order.coupon + ')' : ''}</td><td style="text-align:right;color:#2e7d32;">–₹${order.discount.toLocaleString('en-IN')}</td></tr>` : ''}
    <tr><td><strong>Total</strong></td><td style="text-align:right;color:#DB3022;"><strong>₹${order.total.toLocaleString('en-IN')}</strong></td></tr>
  </table>

  <div class="inv-footer">
    <p>This is a computer-generated invoice. No signature required. &nbsp;|&nbsp; Subject to Kayalpattinam jurisdiction.</p>
    <p style="margin-top:4px;">Thank you for shopping with Elite Emporium! 🙏</p>
  </div>
  <div style="text-align:center;margin-top:20px;">
    <button onclick="window.print()" style="background:#DB3022;color:white;border:none;padding:10px 28px;border-radius:6px;font-size:14px;cursor:pointer;font-family:Arial,sans-serif;">🖨️ Print Invoice</button>
  </div>
  </body></html>`);
  win.document.close();
}

function initOrdersPage() {
  const container = document.getElementById('ordersContainer');
  const countEl   = document.getElementById('ordersCount');
  if (!container) return;

  const orders = getOrderHistory();
  if (countEl) countEl.textContent = orders.length;

  // Show a success banner if redirected from checkout (fresh order)
  if (orders.length) {
    const latestOrder = orders[0];
    const placedSecondsAgo = (Date.now() - new Date(latestOrder.date).getTime()) / 1000;
    if (placedSecondsAgo < 30) {
      const banner = document.createElement('div');
      banner.className = 'order-success-banner';
      banner.innerHTML = `
        <div class="osb-icon">🎉</div>
        <div class="osb-body">
          <strong>Order Sent Successfully!</strong>
          <span>Your order ${latestOrder.id} has been sent via WhatsApp. We'll confirm soon.</span>
        </div>
        <a href="index.html" class="osb-home-btn">Continue Shopping</a>`;
      container.parentElement.insertBefore(banner, container);
      launchConfetti();
    }
  }

  if (!orders.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <h2>No orders yet</h2>
        <p>Your order history will appear here after you place your first order.</p>
        <a href="products.html" class="btn-primary">Start Shopping</a>
      </div>`;
    return;
  }

  // Customer stats dashboard (above the order list)
  const totalSpent = orders.reduce((s, o) => s + (o.total || 0), 0);
  const totalItems = orders.reduce((s, o) => s + (o.items || []).reduce((x, i) => x + (i.quantity || 1), 0), 0);
  const catCount   = {};
  orders.forEach(o => (o.items || []).forEach(i => {
    const c = (products.find(p => p.id === i.id) || {}).category;
    if (c) catCount[c] = (catCount[c] || 0) + (i.quantity || 1);
  }));
  const topCat = Object.entries(catCount).sort((a,b) => b[1] - a[1])[0];
  const tier = orders.length >= 10 ? { label: 'Gold', emoji: '🥇', color: '#c9a84c' }
              : orders.length >= 5 ? { label: 'Silver', emoji: '🥈', color: '#9aa3b2' }
              : { label: 'Bronze', emoji: '🥉', color: '#b87333' };

  const statsHtml = `
    <div class="oh-stats">
      <div class="oh-stat-card">
        <div class="oh-stat-icon">💰</div>
        <div class="oh-stat-val">₹${totalSpent.toLocaleString('en-IN')}</div>
        <div class="oh-stat-label">Total spent</div>
      </div>
      <div class="oh-stat-card">
        <div class="oh-stat-icon">📦</div>
        <div class="oh-stat-val">${totalItems}</div>
        <div class="oh-stat-label">Items ordered</div>
      </div>
      <div class="oh-stat-card">
        <div class="oh-stat-icon">${topCat ? '❤️' : '🛍️'}</div>
        <div class="oh-stat-val">${topCat ? topCat[0] : '—'}</div>
        <div class="oh-stat-label">${topCat ? 'Favourite category' : 'No favourite yet'}</div>
      </div>
      <div class="oh-stat-card oh-tier" style="--tier-color:${tier.color};">
        <div class="oh-stat-icon">${tier.emoji}</div>
        <div class="oh-stat-val">${tier.label}</div>
        <div class="oh-stat-label">Customer tier · ${orders.length} order${orders.length > 1 ? 's' : ''}</div>
      </div>
    </div>`;
  container.insertAdjacentHTML('beforebegin', statsHtml);

  container.innerHTML = orders.map(order => {
    const date  = new Date(order.date);
    const dStr  = date.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
    const tStr  = date.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
    const itemsHTML = order.items.map(item => `
      <div class="oh-item">
        <img src="${item.image || 'images/logo.png'}" alt="${item.name}" class="oh-item-img" onerror="this.src='images/logo.png'" />
        <div class="oh-item-info">
          <div class="oh-item-name">${item.name}</div>
          <div class="oh-item-meta">Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')} = <strong>₹${(item.price * item.quantity).toLocaleString('en-IN')}</strong></div>
          ${item.selectedColor ? `<div class="oh-item-color">Color: ${item.selectedColor}</div>` : ''}
        </div>
      </div>`).join('');

    const couponLine = order.discount > 0
      ? `<div class="oh-summary-row oh-saving">🎟️ Coupon${order.coupon ? ' (' + order.coupon + ')' : ''} <span>–₹${order.discount.toLocaleString('en-IN')}</span></div>`
      : '';

    // Determine order stage based on elapsed time
    const hoursAgo = (Date.now() - date.getTime()) / 3600000;
    const stages   = ['Ordered', 'Confirmed', 'Shipped', 'Delivered'];
    const stageIdx = hoursAgo < 6 ? 0 : hoursAgo < 24 ? 1 : hoursAgo < 72 ? 2 : 3;
    const timelineHtml = `
      <div class="oh-timeline">
        ${stages.map((s, i) => `
          <div class="oh-tl-step ${i <= stageIdx ? 'done' : ''} ${i === stageIdx ? 'current' : ''}">
            <div class="oh-tl-dot"></div>
            <div class="oh-tl-label">${s}</div>
          </div>`).join('<div class="oh-tl-line"></div>')}
      </div>`;

    return `
      <div class="oh-card">
        <div class="oh-card-header">
          <div>
            <div class="oh-order-id">${order.id}</div>
            <div class="oh-date">${dStr} at ${tStr}</div>
          </div>
          <span class="oh-status">${order.status}</span>
        </div>
        ${timelineHtml}
        <div class="oh-items">${itemsHTML}</div>
        <div class="oh-summary">
          <div class="oh-summary-row">Subtotal <span>₹${order.subtotal.toLocaleString('en-IN')}</span></div>
          <div class="oh-summary-row">Delivery <span>${order.delivery === 0 ? 'FREE' : '₹' + order.delivery}</span></div>
          ${couponLine}
          <div class="oh-summary-row oh-total">Total <span>₹${order.total.toLocaleString('en-IN')}</span></div>
        </div>
        <div class="oh-card-footer">
          <div class="oh-address">📍 ${order.customer.address}, ${order.customer.city}, ${order.customer.state} – ${order.customer.pincode}</div>
          <div class="oh-footer-actions">
            <button class="oh-invoice-btn" onclick="printGSTInvoice('${order.id}')">🧾 GST Invoice</button>
            <a class="oh-reorder-btn" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi! I want to reorder my order ' + order.id + ' placed on ' + dStr)}" target="_blank" rel="noopener">💬 Reorder via WhatsApp</a>
          </div>
        </div>
      </div>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', async () => {
  initDarkMode();
  initPageTransitions();
  initAccessibility();
  updateCartUI();
  updateWishlistUI();
  initHeaderSearch();
  initLazyImageFade();
  initScrollReveal();
  initBackToTop();
  animateSearchPlaceholder();
  initScrollHeader();
  initScrollProgress();
  initFlashSaleTimer();
  initMiniCart();
  initSocialProof();
  initStatsCounter();

  // Show skeletons while products load
  if (document.getElementById('featuredProducts')) showSkeletons('featuredProducts', 6);
  if (document.getElementById('productsGrid'))     showSkeletons('productsGrid', 12);

  await loadProducts();

  checkPriceAlerts();

  // Register PWA service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  if (document.getElementById('featuredProducts')) initHomePage();
  initWelcomeBack();
  if (document.getElementById('productsGrid'))     initProductsPage();
  if (document.getElementById('cartItems')) {
    renderCart();
    initPayOnlineButton();
    // Auto-apply coupon from URL: cart.html?coupon=ELITE10
    const urlCoupon = new URLSearchParams(window.location.search).get('coupon');
    if (urlCoupon && COUPONS[urlCoupon.toUpperCase()] && !_activeCoupon) {
      const inp = document.getElementById('couponCode');
      if (inp) { inp.value = urlCoupon.toUpperCase(); applyCoupon(); }
    }
  }
  if (document.getElementById('pdTitle'))          initProductDetailPage();
  if (document.getElementById('wishlistGrid'))     initWishlistPage();
  if (document.getElementById('ordersContainer'))  initOrdersPage();
});
