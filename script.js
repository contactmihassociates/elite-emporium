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

// ── PRODUCT CATALOG ──────────────────────────
const products = [
  // Electronics
  { id: 1,  name: "Wireless Bluetooth Earbuds",        category: "Electronics",   price: 1499, emoji: "🎧", bg: "linear-gradient(135deg,#1a237e,#283593)", desc: "Premium sound with 24hr battery & active noise cancellation", rating: 4.5, reviews: 128, badge: "Bestseller" },
  { id: 2,  name: "Smart Watch Pro",                   category: "Electronics",   price: 2999, emoji: "⌚", bg: "linear-gradient(135deg,#0d47a1,#1565c0)", desc: "Health monitoring, GPS, 100+ sports modes & waterproof", rating: 4.3, reviews: 89 },
  { id: 3,  name: "Power Bank 10000mAh",               category: "Electronics",   price: 999,  emoji: "🔋", bg: "linear-gradient(135deg,#1b5e20,#2e7d32)", desc: "Fast charging, dual USB + Type-C, LED indicator", rating: 4.4, reviews: 201 },
  { id: 4,  name: "Portable Bluetooth Speaker",        category: "Electronics",   price: 1299, emoji: "🔊", bg: "linear-gradient(135deg,#4a148c,#6a1b9a)", desc: "360° surround sound, waterproof IPX5, 12hr playback", rating: 4.2, reviews: 156 },
  { id: 5,  name: "LED USB Desk Lamp",                 category: "Electronics",   price: 699,  emoji: "💡", bg: "linear-gradient(135deg,#e65100,#f57c00)", desc: "Adjustable brightness & color temp, eye-care mode", rating: 4.1, reviews: 67,  badge: "New" },
  // Clothing
  { id: 6,  name: "Men's Premium Formal Shirt",        category: "Clothing",      price: 799,  emoji: "👔", bg: "linear-gradient(135deg,#bf360c,#d84315)", desc: "100% premium cotton, slim-fit, anti-wrinkle finish", rating: 4.1, reviews: 234 },
  { id: 7,  name: "Women's Printed Kurti",             category: "Clothing",      price: 649,  emoji: "👗", bg: "linear-gradient(135deg,#880e4f,#ad1457)", desc: "Elegant floral print, breathable fabric, multiple sizes", rating: 4.3, reviews: 312, badge: "New" },
  { id: 8,  name: "Kids T-Shirt Pack (3 pcs)",         category: "Clothing",      price: 399,  emoji: "👕", bg: "linear-gradient(135deg,#1b5e20,#388e3c)", desc: "Soft breathable cotton, vibrant colors, sizes 2-12 yrs", rating: 4.5, reviews: 189 },
  { id: 9,  name: "Men's Slim-Fit Denim Jeans",        category: "Clothing",      price: 1299, emoji: "👖", bg: "linear-gradient(135deg,#0d47a1,#1976d2)", desc: "Stretchable premium denim, slim-fit, all sizes available", rating: 4.0, reviews: 445 },
  { id: 10, name: "Women's Palazzo Suit Set",          category: "Clothing",      price: 899,  emoji: "👘", bg: "linear-gradient(135deg,#4a148c,#7b1fa2)", desc: "Flowy palazzo with matching top, great for all occasions", rating: 4.4, reviews: 167, badge: "Popular" },
  // Home & Kitchen
  { id: 11, name: "Insulated Steel Water Bottle 1L",   category: "Home & Kitchen",price: 449,  emoji: "🫙", bg: "linear-gradient(135deg,#33691e,#558b2f)", desc: "Double-wall vacuum: cold 24hr, hot 12hr, leak-proof", rating: 4.6, reviews: 398, badge: "Bestseller" },
  { id: 12, name: "Non-Stick Cookware Set (5 pcs)",    category: "Home & Kitchen",price: 1999, emoji: "🍳", bg: "linear-gradient(135deg,#bf360c,#e64a19)", desc: "PFOA-free coating, induction & gas compatible", rating: 4.4, reviews: 278, badge: "Popular" },
  { id: 13, name: "King Size Bed Sheet Set",           category: "Home & Kitchen",price: 899,  emoji: "🛏️", bg: "linear-gradient(135deg,#1a237e,#3949ab)", desc: "300 thread count premium cotton with 2 pillow covers", rating: 4.2, reviews: 156 },
  { id: 14, name: "Airtight Storage Containers (6 pcs)",category:"Home & Kitchen",price: 599,  emoji: "📦", bg: "linear-gradient(135deg,#e65100,#f57c00)", desc: "BPA-free, microwave safe, stackable design", rating: 4.3, reviews: 89 },
  { id: 15, name: "Digital Kitchen Scale",             category: "Home & Kitchen",price: 349,  emoji: "⚖️", bg: "linear-gradient(135deg,#37474f,#546e7a)", desc: "Precise up to 5kg, slim profile, tare function", rating: 4.1, reviews: 112, badge: "New" },
  // Footwear
  { id: 16, name: "Men's Casual Sneakers",             category: "Footwear",      price: 1299, emoji: "👟", bg: "linear-gradient(135deg,#212121,#424242)", desc: "Lightweight mesh upper, cushioned sole, all-day comfort", rating: 4.1, reviews: 345 },
  { id: 17, name: "Women's Block Heel Sandals",        category: "Footwear",      price: 699,  emoji: "👡", bg: "linear-gradient(135deg,#880e4f,#c2185b)", desc: "Elegant design, cushioned footbed, anti-slip sole", rating: 4.3, reviews: 223, badge: "New" },
  { id: 18, name: "Kids Sports Shoes",                 category: "Footwear",      price: 599,  emoji: "👟", bg: "linear-gradient(135deg,#1565c0,#1976d2)", desc: "Velcro closure, flexible durable sole, sizes 5-10", rating: 4.4, reviews: 178 },
  { id: 19, name: "Men's Genuine Leather Formal Shoes",category: "Footwear",      price: 1799, emoji: "👞", bg: "linear-gradient(135deg,#3e2723,#5d4037)", desc: "Full grain leather, anti-slip rubber sole, lace-up", rating: 4.2, reviews: 267, badge: "Premium" },
  // Bags
  { id: 20, name: "Women's PU Leather Tote Bag",      category: "Bags",          price: 1199, emoji: "👜", bg: "linear-gradient(135deg,#880e4f,#ad1457)", desc: "Spacious with inner pockets, zip closure, durable strap", rating: 4.2, reviews: 198 },
  { id: 21, name: "School Backpack 30L",               category: "Bags",          price: 799,  emoji: "🎒", bg: "linear-gradient(135deg,#1b5e20,#2e7d32)", desc: "Waterproof, multiple compartments, ergonomic padded straps", rating: 4.5, reviews: 456, badge: "Bestseller" },
  { id: 22, name: "Hardshell Trolley Bag 24\"",        category: "Bags",          price: 2499, emoji: "🧳", bg: "linear-gradient(135deg,#1a237e,#283593)", desc: "360° spinner wheels, TSA lock, scratch-resistant shell", rating: 4.3, reviews: 134, badge: "Premium" },
  { id: 23, name: "Men's Laptop Messenger Bag",        category: "Bags",          price: 999,  emoji: "💼", bg: "linear-gradient(135deg,#37474f,#455a64)", desc: "Fits 15.6\" laptop, water-resistant, padded shoulder strap", rating: 4.1, reviews: 89 },
  // Toys & Games
  { id: 24, name: "Educational Building Blocks (100 pcs)",category:"Toys & Games",price: 499,  emoji: "🧱", bg: "linear-gradient(135deg,#e65100,#f57c00)", desc: "Colorful ABS blocks for ages 3+, boosts creativity & IQ", rating: 4.6, reviews: 267, badge: "Bestseller" },
  { id: 25, name: "Remote Control Racing Car",         category: "Toys & Games",  price: 799,  emoji: "🏎️", bg: "linear-gradient(135deg,#b71c1c,#c62828)", desc: "High-speed 1:18 scale RC car with rechargeable battery", rating: 4.4, reviews: 198 },
  { id: 26, name: "DIY Art & Craft Kit",               category: "Toys & Games",  price: 399,  emoji: "🎨", bg: "linear-gradient(135deg,#4a148c,#6a1b9a)", desc: "Complete kit: colors, brushes, drawing book & stencils", rating: 4.5, reviews: 312, badge: "New" },
];

// ── CART STATE ───────────────────────────────
let cart = JSON.parse(localStorage.getItem('eliteEmporiumCart')) || [];

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
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  showToast(`✅ ${product.name} added to cart!`);

  const btn = document.querySelector(`[data-pid="${productId}"]`);
  if (btn) {
    const original = btn.innerHTML;
    btn.innerHTML = '✓ Added!';
    btn.classList.add('added');
    setTimeout(() => { btn.innerHTML = original; btn.classList.remove('added'); }, 2000);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) { removeFromCart(productId); return; }
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

// ── RENDER PRODUCTS ───────────────────────────
function renderProducts(list, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!list.length) {
    el.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:50px;color:var(--gray);">
      <div style="font-size:55px;margin-bottom:15px;">🔍</div>
      <h3 style="color:var(--primary);">No products found</h3>
      <p>Try a different search term or category</p>
    </div>`;
    return;
  }

  el.innerHTML = list.map(p => `
    <div class="product-card">
      ${p.badge ? `<span class="product-badge ${p.badge === 'New' ? 'new' : p.badge === 'Bestseller' ? 'hot' : p.badge === 'Premium' ? 'premium' : ''}">${p.badge}</span>` : ''}
      <div class="product-image" style="background:${p.bg}">${p.emoji}</div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-rating">
          ${renderStars(p.rating)}
          <span class="rating-count">(${p.reviews} reviews)</span>
        </div>
        <div class="product-footer">
          <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
          <button class="add-to-cart" data-pid="${p.id}" onclick="addToCart(${p.id})">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
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

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image" style="background:${item.bg}">${item.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-category">${item.category}</div>
        <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
      </div>
      <div class="quantity-controls">
        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
        <span class="qty-value">${item.quantity}</span>
        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove">🗑️</button>
    </div>
  `).join('');

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
  const now   = new Date();
  const date  = now.toLocaleDateString('en-IN',  { day:'2-digit', month:'2-digit', year:'numeric' });
  const time  = now.toLocaleTimeString('en-IN',  { hour:'2-digit', minute:'2-digit' });

  let msg = `🛍️ *NEW ORDER — ELITE EMPORIUM*\n`;
  msg    += `━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  msg    += `📋 *ORDER ITEMS:*\n\n`;

  cart.forEach((item, i) => {
    msg += `${i + 1}. *${item.name}*\n`;
    msg += `   Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')} = *₹${(item.price * item.quantity).toLocaleString('en-IN')}*\n\n`;
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
  // Featured: items with badge
  const featured = products.filter(p => p.badge).slice(0, 8);
  renderProducts(featured.length ? featured : products.slice(0, 8), 'featuredProducts');
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  initHeaderSearch();

  if (document.getElementById('featuredProducts')) initHomePage();
  if (document.getElementById('productsGrid'))     initProductsPage();
  if (document.getElementById('cartItems'))        renderCart();
});
