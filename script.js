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
  email: "smnabu36@gmail.com",
  phone: "8072173467",
  minFreeDelivery: 499,
  deliveryCharge: 60,
};

// ── PRODUCT CATALOG (base / hardcoded) ───────
const HARDCODED_PRODUCTS = [
  // Home & Kitchen
  { id: 1,  name: "3-in-1 Kitchen Bowl Set",                  category: "Home & Kitchen", price: 580,  image: "images/products/IMG-20260308-WA0138.jpg", desc: "Versatile 3-in-1 mixing and serving bowl set for everyday kitchen use", rating: 4.3, reviews: 12, badge: "New" },
  { id: 2,  name: "Jumbo 4-Slice Sandwich Griller",           category: "Home & Kitchen", price: 1600, image: "images/products/IMG-20260308-WA0140.jpg", desc: "Large capacity 4-slice sandwich maker & griller — perfect for quick family meals", rating: 4.5, reviews: 8,  badge: "Popular" },
  // Bags & Accessories
  { id: 3,  name: "3-Grid PU Leather Cosmetic Bag",           category: "Bags",           price: 500,  image: "images/products/IMG-20260308-WA0144.jpg", desc: "Spacious 3-compartment PU leather makeup organizer, perfect for travel", rating: 4.2, reviews: 15 },
  { id: 7,  name: "YSL Tote Bag – 12A Quality",              category: "Bags",           price: 2999, image: "images/products/IMG-20260308-WA0163.jpg", desc: "Premium 12A quality YSL-inspired tote bag with superior finish and stitching", rating: 4.6, reviews: 27, badge: "Premium" },
  { id: 8,  name: "Coach Field Tote 30",                      category: "Bags",           price: 3300, image: "images/products/IMG-20260308-WA0172.jpg", desc: "Classic Coach Field Tote 30 in premium leather finish with signature hardware", rating: 4.7, reviews: 19, badge: "Premium" },
  { id: 11, name: "Coach 3-Piece Men's Combo",                category: "Bags",           price: 1350, image: "images/products/IMG-20260308-WA0183.jpg", desc: "Complete Coach men's set: Belt + Wallet + Card Holder in premium quality", rating: 4.5, reviews: 41, badge: "Popular" },
  { id: 12, name: "Alex 3-Piece Men's Combo",                 category: "Bags",           price: 1400, image: "images/products/IMG-20260308-WA0189.jpg", desc: "Stylish Alex men's combo: premium belt, bi-fold wallet & card holder", rating: 4.4, reviews: 36 },
  // Clothing
  { id: 4,  name: "Tommy Hilfiger Rose Gold Ladies Watch",    category: "Clothing",       price: 1950, image: "images/products/IMG-20260308-WA0152.jpg", desc: "Elegant Tommy Hilfiger ladies watch with stunning rose gold dial and strap", rating: 4.7, reviews: 22, badge: "Bestseller" },
  { id: 5,  name: "Richard Mille Watch",                      category: "Clothing",       price: 1850, image: "images/products/IMG-20260308-WA0153.jpg", desc: "Bold Richard Mille inspired design watch — a statement piece for any occasion", rating: 4.6, reviews: 18, badge: "Premium" },
  { id: 6,  name: "Tommy Hilfiger Men's Automatic Watch",     category: "Clothing",       price: 2400, image: "images/products/IMG-20260308-WA0160.jpg", desc: "Classic Tommy Hilfiger men's automatic wristwatch with premium finish", rating: 4.8, reviews: 31, badge: "Bestseller" },
  { id: 9,  name: "Marc Jacobs Sunglasses",                   category: "Clothing",       price: 600,  image: "images/products/IMG-20260308-WA0176.jpg", desc: "Stylish Marc Jacobs sunglasses (Indian box). Full kit with case available at ₹1300", rating: 4.4, reviews: 33 },
  { id: 10, name: "Celine Metal Sunglasses",                  category: "Clothing",       price: 1100, image: "images/products/IMG-20260308-WA0180.jpg", desc: "Premium Celine metal frame sunglasses. Full kit with pouch available at ₹1300", rating: 4.3, reviews: 25 },
  { id: 13, name: "Heavy Embroidery Lehenga Set",             category: "Clothing",       price: 1930, image: "images/products/IMG-20260308-WA0195.jpg", desc: "Stunning heavy embroidered lehenga set — ideal for weddings and festive occasions", rating: 4.8, reviews: 14, badge: "New" },
  { id: 14, name: "Agni Jwala Designer Gown",                 category: "Clothing",       price: 1450, image: "images/products/IMG-20260308-WA0199.jpg", desc: "Gorgeous Agni Jwala designer gown for parties and special events", rating: 4.6, reviews: 11, badge: "New" },
  { id: 15, name: "Fashion Accessories Set",                  category: "Clothing",       price: 450,  image: "images/products/IMG-20260308-WA0204.jpg", desc: "Trendy fashion accessories set at an unbeatable price — limited stock!", rating: 4.2, reviews: 9 },
];

// ── DYNAMIC PRODUCTS (hardcoded + Firebase) ──
let products = [...HARDCODED_PRODUCTS];

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
}

// ── CART STATE ───────────────────────────────
let cart = (JSON.parse(localStorage.getItem('eliteEmporiumCart')) || []).map(i => ({
  ...i,
  cartKey: i.cartKey || (String(i.id) + '|' + (i.selectedColor || ''))
}));

function saveCart() {
  localStorage.setItem('eliteEmporiumCart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

// ── ADD / REMOVE / UPDATE ────────────────────
function addToCart(productId, selectedColor, selectedImage) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cartKey  = String(productId) + '|' + (selectedColor || '');
  const existing = cart.find(i => i.cartKey === cartKey);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
      cartKey,
      selectedColor: selectedColor || null,
      image: selectedImage || product.image
    });
  }

  saveCart();
  const colorStr = selectedColor ? ` (${selectedColor})` : '';
  showToast(`✅ ${product.name}${colorStr} added to cart!`);

  const btn = document.querySelector(`[data-pid="${productId}"]`);
  if (btn) {
    const original = btn.innerHTML;
    btn.innerHTML = '✓ Added!';
    btn.classList.add('added');
    setTimeout(() => { btn.innerHTML = original; btn.classList.remove('added'); }, 2000);
  }
}

function removeFromCart(cartKey) {
  cart = cart.filter(i => i.cartKey !== cartKey);
  saveCart();
  renderCart();
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
    el.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:50px;color:#878787;">
      <div style="font-size:55px;margin-bottom:15px;">🔍</div>
      <h3 style="color:#2874F0;">No products found</h3>
      <p>Try a different search term or category</p>
    </div>`;
    return;
  }

  el.innerHTML = list.map(p => {
    const badgeClass  = p.badge === 'New' ? 'new' : p.badge === 'Bestseller' ? 'hot' : p.badge === 'Premium' ? 'premium' : '';
    const pid         = 'pid_'     + p.id;
    const btnId       = 'cartbtn_' + p.id;
    const detailLink  = `product.html?id=${p.id}`;

    // Default image & color for this card
    const defaultImg   = (p.variants && p.variants.length > 1) ? p.variants[0].image : (p.image || '');
    const defaultColor = (p.variants && p.variants.length > 1) ? p.variants[0].color : '';

    // Image area
    let imageHtml;
    if (p.variants && p.variants.length > 1) {
      imageHtml = `<a href="${detailLink}" class="product-img-link">
        <div class="product-image product-image-photo">
          <img id="${pid}" src="${p.variants[0].image}" alt="${p.name}" loading="lazy" />
        </div></a>`;
    } else if (p.image) {
      imageHtml = `<a href="${detailLink}" class="product-img-link">
        <div class="product-image product-image-photo">
          <img id="${pid}" src="${p.image}" alt="${p.name}" loading="lazy" />
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

    return `
    <div class="product-card">
      ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
      ${imageHtml}
      ${swatchHtml}
      <div class="product-info">
        <div class="product-name"><a href="${detailLink}">${p.name}</a></div>
        <div class="product-rating">
          <span class="fk-rating-badge">★ ${p.rating}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
          <button class="add-to-cart"
            id="${btnId}"
            data-pid="${p.id}"
            data-color="${defaultColor}"
            data-img="${defaultImg}"
            onclick="${addToCartCall}">
            🛒 Add
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
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

// ── RENDER CART ───────────────────────────────
function renderCart() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty!</h3>
        <p>Looks like you haven't added anything yet.</p>
        <a href="products.html" class="btn-primary">Browse Products</a>
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
      <button class="remove-btn" data-key="${escKey}" onclick="removeFromCart(this.dataset.key)" title="Remove">🗑️</button>
    </div>
  `;
  }).join('');

  refreshSummary();
}

function refreshSummary() {
  const sub = getSubtotal();
  const del = getDelivery();
  const tot = getTotal();

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('summaryItems',    getItemCount() + ' item(s)');
  set('summarySubtotal', '₹' + sub.toLocaleString('en-IN'));
  set('summaryDelivery', del === 0 ? (sub > 0 ? 'FREE 🎉' : '—') : '₹' + del);
  set('summaryTotal',    '₹' + tot.toLocaleString('en-IN'));

  const deliveryRow = document.getElementById('deliveryRow');
  if (deliveryRow) deliveryRow.className = del === 0 && sub > 0 ? 'summary-row delivery-free' : 'summary-row';
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

  const sub = getSubtotal();
  const del = getDelivery();
  const tot = getTotal();

  msg += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 Subtotal : ₹${sub.toLocaleString('en-IN')}\n`;
  msg += `🚚 Delivery : ${del === 0 ? 'FREE' : '₹' + del}\n`;
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

function placeOrder() {
  const get = id => (document.getElementById(id) || {}).value?.trim() || '';

  const name    = get('custName');
  const phone   = get('custPhone');
  const address = get('custAddress');
  const city    = get('custCity');
  const state   = get('custState');
  const pincode = get('custPincode');
  const notes   = get('custNotes');

  if (!name || !phone || !address || !city || !state || !pincode) {
    showToast('⚠️ Please fill all required fields!'); return;
  }
  if (!/^\d{10}$/.test(phone)) {
    showToast('⚠️ Enter a valid 10-digit phone number!'); return;
  }
  if (!/^\d{6}$/.test(pincode)) {
    showToast('⚠️ Enter a valid 6-digit PIN code!'); return;
  }
  if (!cart.length) {
    showToast('⚠️ Your cart is empty!'); return;
  }

  const msg   = buildWhatsAppMessage({ name, phone, address, city, state, pincode, notes });
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;

  // Clear cart
  cart = [];
  saveCart();

  window.open(waUrl, '_blank');
  showToast('🎉 Order sent! Redirecting to WhatsApp…');

  setTimeout(() => { window.location.href = 'index.html'; }, 2500);
}

// ── TOAST ─────────────────────────────────────
function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── HEADER SEARCH ─────────────────────────────
function initHeaderSearch() {
  const form = document.getElementById('headerSearchForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const q = document.getElementById('headerSearchInput')?.value.trim();
      if (q) window.location.href = `products.html?search=${encodeURIComponent(q)}`;
    });
  }
}

// ── PRODUCTS PAGE ─────────────────────────────
function initProductsPage() {
  const params      = new URLSearchParams(window.location.search);
  let activeCat     = params.get('category') || 'All';
  let activeSort    = 'default';
  let searchQuery   = params.get('search') || '';

  // Pre-fill search input
  const searchInp = document.getElementById('productSearchInput');
  if (searchInp && searchQuery) searchInp.value = searchQuery;

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
    switch (activeSort) {
      case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
      case 'price-desc': list.sort((a,b) => b.price - a.price); break;
      case 'rating':     list.sort((a,b) => b.rating - a.rating); break;
      case 'popular':    list.sort((a,b) => b.reviews - a.reviews); break;
    }
    return list;
  }

  function refresh() {
    const list = filtered();
    renderProducts(list, 'productsGrid');
    const countEl = document.getElementById('productsCount');
    if (countEl) countEl.textContent = `Showing ${list.length} of ${products.length} products`;
  }

  // Category filters
  document.querySelectorAll('.filter-option input[name="category"]').forEach(inp => {
    inp.addEventListener('change', e => {
      activeCat = e.target.value;
      document.querySelectorAll('.filter-option').forEach(o => o.classList.remove('active'));
      e.target.closest('.filter-option').classList.add('active');
      refresh();
    });
  });

  // Sort
  const sortSel = document.getElementById('sortSelect');
  if (sortSel) sortSel.addEventListener('change', e => { activeSort = e.target.value; refresh(); });

  // Search
  if (searchInp) searchInp.addEventListener('input', e => { searchQuery = e.target.value; refresh(); });

  refresh();
}

// ── HOMEPAGE FEATURED ─────────────────────────
function initHomePage() {
  const featured = products.filter(p => p.badge);
  renderProducts(featured.length ? featured : products.slice(0, 8), 'featuredProducts');
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

  document.title = p.name + ' – Elite Emporium';

  // Breadcrumb
  const breadEl = document.getElementById('pdBreadcrumb');
  if (breadEl) breadEl.innerHTML =
    `<a href="index.html">Home</a> › <a href="products.html">All Products</a> › <a href="products.html?category=${encodeURIComponent(p.category)}">${p.category}</a> › ${p.name}`;

  // Badge
  if (p.badge) {
    const badgeClass = p.badge === 'New' ? 'new' : p.badge === 'Bestseller' ? 'hot' : p.badge === 'Premium' ? 'premium' : '';
    const bw = document.getElementById('pdBadgeWrap');
    if (bw) bw.innerHTML = `<span class="product-badge ${badgeClass}" style="position:static;margin-bottom:12px;display:inline-block;">${p.badge}</span>`;
  }

  // Category, title, rating, price, description
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('pdCategory', p.category);
  set('pdTitle',    p.name);
  set('pdPrice',    '₹' + p.price.toLocaleString('en-IN'));
  set('pdDesc',     p.desc);

  const ratingEl = document.getElementById('pdRating');
  if (ratingEl) ratingEl.innerHTML = `${renderStars(p.rating)} <span class="rating-count">(${p.reviews} reviews)</span>`;

  // Main image & color picker
  const mainImg     = document.getElementById('pdMainImage');
  const colorPicker = document.getElementById('pdColorPicker');

  if (p.variants && p.variants.length > 1) {
    if (mainImg) mainImg.src = p.variants[0].image;
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

  // Add to cart — pass selected variant
  const cartBtn = document.getElementById('pdAddToCart');
  if (cartBtn) {
    if (p.variants && p.variants.length > 1) {
      cartBtn.dataset.selectedColor = p.variants[0].color;
      cartBtn.dataset.selectedImage = p.variants[0].image;
    }
    cartBtn.onclick = () => {
      const color = cartBtn.dataset.selectedColor || undefined;
      const img   = cartBtn.dataset.selectedImage || undefined;
      addToCart(p.id, color, img);
    };
  }
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
  // Keep cart button in sync with selected variant
  const cartBtn = document.getElementById('pdAddToCart');
  if (cartBtn) {
    cartBtn.dataset.selectedColor = colorName;
    cartBtn.dataset.selectedImage = imgSrc;
  }
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  updateCartUI();
  initHeaderSearch();

  await loadProducts();

  if (document.getElementById('featuredProducts')) initHomePage();
  if (document.getElementById('productsGrid'))     initProductsPage();
  if (document.getElementById('cartItems'))        renderCart();
  if (document.getElementById('pdTitle'))          initProductDetailPage();
});
