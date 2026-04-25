require('dotenv').config();
const TelegramBot  = require('node-telegram-bot-api');
const { initializeApp }       = require('firebase/app');
const { getFirestore, collection, addDoc, getDocs, deleteDoc,
        query, orderBy, where, limit, serverTimestamp } = require('firebase/firestore');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const fetch = require('node-fetch');

// ── FIREBASE (uses the same config as your website) ──────────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyCj96lYHZWfbJzGCdt9VpD-bWiAKll329A",
  authDomain:        "elite-emporium.firebaseapp.com",
  projectId:         "elite-emporium",
  storageBucket:     "elite-emporium.firebasestorage.app",
  messagingSenderId: "454136134080",
  appId:             "1:454136134080:web:7e13a99864ac3a46617025",
};

const app     = initializeApp(firebaseConfig);
const db      = getFirestore(app);
const storage = getStorage(app);

// ── BOT INIT ─────────────────────────────────────────────────────────────────
const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_ID  = process.env.ADMIN_CHAT_ID ? Number(process.env.ADMIN_CHAT_ID) : null;

if (!BOT_TOKEN) { console.error('❌  BOT_TOKEN missing in .env'); process.exit(1); }

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// ── SECURITY ──────────────────────────────────────────────────────────────────
function isAdmin(msg) {
  if (!ADMIN_ID) return true; // first run — allow until ADMIN_CHAT_ID is set
  return msg.chat.id === ADMIN_ID;
}

// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const CATEGORIES = ['Home & Kitchen', 'Bags', 'Clothing', 'Electronics', 'Footwear', 'Toys & Games', 'Wallets', 'Coolers', 'Watches', 'Others', 'Jewellery', 'Cosmetics'];
const BADGES     = ['New', 'Popular', 'Bestseller', 'Premium', 'none'];

// ── WIZARD STATE ──────────────────────────────────────────────────────────────
const sessions = {};

// ── HELPERS ───────────────────────────────────────────────────────────────────
function send(chatId, text, opts = {}) {
  return bot.sendMessage(chatId, text, { parse_mode: 'Markdown', ...opts });
}

async function getNextId() {
  const snap = await getDocs(query(collection(db, 'products'), orderBy('id', 'desc'), limit(1)));
  if (snap.empty) return 100;
  return (snap.docs[0].data().id || 99) + 1;
}

async function saveProduct(p) {
  const id  = await getNextId();
  const doc = {
    id,
    name:      p.name,
    category:  p.category || 'Other',
    price:     Number(p.price),
    desc:      p.desc || '',
    image:     p.image || '',
    rating:    4.5,
    reviews:   0,
    createdAt: serverTimestamp(),
  };
  if (p.badge && p.badge !== 'none') doc.badge = p.badge;
  await addDoc(collection(db, 'products'), doc);
  return id;
}

// Download Telegram photo and upload to Firebase Storage
async function uploadPhoto(fileId) {
  const fileUrl  = await bot.getFileLink(fileId);
  const response = await fetch(fileUrl);
  const buffer   = Buffer.from(await response.arrayBuffer());
  const fileName = `products/telegram_${Date.now()}.jpg`;
  const storageRef = ref(storage, fileName);
  await uploadBytes(storageRef, buffer, { contentType: 'image/jpeg' });
  return await getDownloadURL(storageRef);
}

// ── SMART PARSER ──────────────────────────────────────────────────────────────

function stripMarkup(line) {
  return line
    .replace(/\*/g, '')
    .replace(/[\u{1F300}-\u{1FFFF}]/gu, '') // remove all emoji
    .replace(/[✅👉📦✔️😎🤩💯]/g, '')
    .replace(/_/g, ' ')
    .replace(/^[-👉•]\s*/, '')
    .trim();
}

function detectCategory(text) {
  const t = text.toLowerCase();
  if (/\bwatch\b|tissot|rolex|omega|fossil|g.shock|patek|casio|chronograph|timepiece/.test(t)) return 'Watches';
  if (/\bwallet\b|\bpurse\b|cardholder|card.?holder/.test(t)) return 'Wallets';
  if (/cooler|sunglass|\bshades\b|goggle|uv.?protect|spectacle|optical/.test(t)) return 'Coolers';
  if (/bag|tote|sling|clutch|pouch|handbag|vanity|crossbody|backpack/.test(t)) return 'Bags';
  if (/saree|dress|gown|lehenga|kurta|jeans|shirt|blouse|trouser/.test(t)) return 'Clothing';
  if (/kitchen|bowl|griller|tiffin|cooker|pan|plate|mug|bottle|jar/.test(t)) return 'Home & Kitchen';
  if (/phone|cable|charger|earphone|headphone|speaker|laptop/.test(t)) return 'Electronics';
  if (/shoe|boot|sandal|slipper|heel|footwear/.test(t)) return 'Footwear';
  if (/toy|game|puzzle|lego|doll/.test(t)) return 'Toys & Games';
  return 'Others';
}

function extractPriceFromLine(line) {
  const clean = stripMarkup(line);
  // Patterns: "PRICE:2899", "RS 2899", "₹2899", "@900/-", "2899/-", "@1200/- ONLY"
  const m = clean.match(
    /@([\d,]+)\s*\/?\-?|(?:price|rs\.?|₹|inr)[^0-9]*([\d,]+)|([\d,]{3,5})\s*\/\-/i
  );
  if (!m) return null;
  const raw = (m[1] || m[2] || m[3]).replace(/,/g, '');
  const price = parseInt(raw);
  return (price >= 100 && price <= 99999) ? price : null;
}

function parseBlock(lines) {
  // ── Structured Key: Value format ──
  const cleanLines = lines.map(stripMarkup).filter(Boolean);
  if (cleanLines.some(l => /^(name|category|cat|desc|badge|image)\s*:/i.test(l))) {
    const p = {};
    for (const line of cleanLines) {
      const m = line.match(/^([^:]+):\s*(.+)$/);
      if (!m) continue;
      const key = m[1].trim().toLowerCase();
      const val = m[2].trim();
      if      (key === 'name')                          p.name     = val;
      else if (key === 'category' || key === 'cat')     p.category = val;
      else if (key === 'price')                         p.price    = parseInt(val.replace(/[^\d]/g,''));
      else if (key === 'desc' || key === 'description') p.desc     = val;
      else if (key === 'badge')                         p.badge    = val;
      else if (key === 'image' || key === 'img')        p.image    = val;
    }
    if (p.name && p.price) return p;
    return null;
  }

  // ── WhatsApp / freeform format ──
  let price = null;
  for (const line of lines) {
    price = extractPriceFromLine(line);
    if (price) break;
  }
  if (!price) return null;

  const isBoldLine  = l => /^\s*\*[^*]+\*\s*$/.test(l);
  const isColorLine = l => /^\s*[-•]\s*\w/.test(l);
  const isSizeLine  = l => /size\s*[:\-_\s]\s*[\dH]/i.test(l);
  const isPriceLine = l => /price|₹|rs\./i.test(l) && /\d{3,}/.test(l);
  const isSkip      = l => /^(brand|check|best|comes|inside|avl|available|only|with\s+box|without|video|article|personal|arrival)$/i.test(stripMarkup(l));

  // Name: first bold lines that are not price/skip/quality markers
  const nameParts = [];
  for (const line of lines) {
    if (!isBoldLine(line)) continue;
    const c = stripMarkup(line);
    if (isPriceLine(line)) continue;
    if (isSkip(line)) continue;
    if (/\d{2}a\s*quality|100%|pure leather|dust\s*cover|card\s*slot|fold\s*wallet|uv.?protect|shipping|booking/i.test(c)) continue;
    if (isSizeLine(line)) continue;
    nameParts.push(c);
    if (nameParts.length >= 2) break;
  }
  // If only one bold name line, also grab first non-bold non-color non-size line as model name
  if (nameParts.length <= 1) {
    const modelLine = lines.find(l => !isBoldLine(l) && !isColorLine(l) && !isSizeLine(l) && !isPriceLine(l) && !/avail|colour|color|quality/i.test(l) && stripMarkup(l).length > 3);
    if (modelLine) nameParts.push(stripMarkup(modelLine));
  }

  const name = nameParts.join(' ')
    .replace(/^BRAND[-:\s]+/i, '')
    .replace(/\s+/g, ' ').trim();
  if (!name) return null;

  // Colors
  const colors = lines.filter(isColorLine).map(l => stripMarkup(l).replace(/^[-•]\s*/, '').trim()).filter(Boolean);

  // Size
  let size = '';
  for (const line of lines) {
    const m = stripMarkup(line).match(/size\s*[:\-_\s]+(.+)/i);
    if (m) { size = m[1].replace(/\s*only\s*$/i,'').trim(); break; }
  }

  // Quality / features from bold lines
  const features = lines
    .filter(l => isBoldLine(l) && /quality|leather|cover|dust|card|box|sling|chain|fold|slot|catlouge|catalogue/i.test(l))
    .map(stripMarkup).slice(0, 2);

  const descParts = [];
  if (size)           descParts.push(`Size: ${size}`);
  if (colors.length)  descParts.push(`Colors: ${colors.join(', ')}`);
  descParts.push(...features);

  return {
    name,
    price,
    category: detectCategory(lines.join(' ')),
    desc: descParts.join(' | '),
    badge: 'Premium',
  };
}

function parseBulkText(text) {
  // If user used "---" as explicit separator, use that
  if (/^-{3,}$/m.test(text)) {
    return text.split(/\n?-{3,}\n?/).map(c => c.trim()).filter(Boolean)
      .map(chunk => parseBlock(chunk.split('\n').filter(Boolean)))
      .filter(Boolean);
  }

  // Auto-split: each product ends at its PRICE line
  const lines = text.split('\n');
  const products = [];
  let block = [];

  for (const line of lines) {
    block.push(line);
    if (isPriceEndLine(line)) {
      const p = parseBlock(block.filter(l => l.trim()));
      if (p) products.push(p);
      block = [];
    }
  }
  // Catch any remaining block
  if (block.filter(l => l.trim()).length) {
    const p = parseBlock(block.filter(l => l.trim()));
    if (p) products.push(p);
  }

  return products;
}

function isPriceEndLine(line) {
  // Don't split on "WITH ... @price" lines — those are price variants, not new products
  const clean = stripMarkup(line);
  if (/^with\b/i.test(clean)) return false;
  return (/price/i.test(line) || /@\d{3,}/.test(line) || /\d{3,}\s*\/\-\s*(only)?/i.test(line)) && /\d{3,}/.test(line);
}

// ── /start ────────────────────────────────────────────────────────────────────
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId,
    `👋 <b>Elite Emporium Product Bot</b>\n\n` +
    `Your Chat ID: <code>${chatId}</code>\n` +
    `(Paste this into .env as ADMIN_CHAT_ID)\n\n` +
    `<b>Commands:</b>\n` +
    `• /add — step-by-step product wizard\n` +
    `• /list — view products in Firebase\n` +
    `• /delete &lt;id&gt; — remove a product\n` +
    `• /cancel — cancel the wizard\n\n` +
    `<b>Bulk add</b> — paste product details like this:\n` +
    `<pre>Name: Silk Saree\nCategory: Clothing\nPrice: 2500\nDesc: Beautiful silk saree\nBadge: New</pre>\n` +
    `Separate multiple products with a blank line.`,
    { parse_mode: 'HTML' }
  );
});

// ── /list ─────────────────────────────────────────────────────────────────────
bot.onText(/\/list/, async (msg) => {
  if (!isAdmin(msg)) return;
  const chatId = msg.chat.id;
  try {
    const snap = await getDocs(query(collection(db, 'products'), orderBy('createdAt', 'desc'), limit(20)));
    if (snap.empty) return send(chatId, 'No products in Firebase yet.');
    const lines = snap.docs.map(d => {
      const p = d.data();
      return `• *${p.name}* — ₹${p.price} [ID: ${p.id}]`;
    });
    send(chatId, `*Recent products:*\n\n${lines.join('\n')}`);
  } catch (e) {
    send(chatId, `❌ Error: ${e.message}`);
  }
});

// ── /delete ───────────────────────────────────────────────────────────────────
bot.onText(/\/delete (.+)/, async (msg, match) => {
  if (!isAdmin(msg)) return;
  const chatId   = msg.chat.id;
  const targetId = Number(match[1].trim());
  try {
    const snap = await getDocs(query(collection(db, 'products'), where('id', '==', targetId)));
    if (snap.empty) return send(chatId, `No product found with ID ${targetId}`);
    await deleteDoc(snap.docs[0].ref);
    send(chatId, `✅ Product ID ${targetId} deleted.`);
  } catch (e) {
    send(chatId, `❌ Error: ${e.message}`);
  }
});

// ── /cancel ───────────────────────────────────────────────────────────────────
bot.onText(/\/cancel/, (msg) => {
  delete sessions[msg.chat.id];
  send(msg.chat.id, '❌ Wizard cancelled.');
});

// ── /add WIZARD ───────────────────────────────────────────────────────────────
bot.onText(/\/add/, (msg) => {
  if (!isAdmin(msg)) return;
  const chatId = msg.chat.id;
  sessions[chatId] = { step: 'name', data: {} };
  send(chatId, `➕ *Add New Product — Step 1/6*\n\nEnter the *product name*:`);
});

// ── MAIN MESSAGE HANDLER ──────────────────────────────────────────────────────
bot.on('message', async (msg) => {
  if (!isAdmin(msg)) return;
  const chatId = msg.chat.id;
  const text   = (msg.text || '').trim();

  if (text.startsWith('/')) return; // handled by onText

  const session = sessions[chatId];

  // ── WIZARD ────────────────────────────────────────────────────────────────
  if (session) {
    const { step, data } = session;

    if (step === 'name') {
      data.name = text;
      sessions[chatId].step = 'category';
      bot.sendMessage(chatId, `Step 2/6 — Select *category*:`, {
        parse_mode: 'Markdown',
        reply_markup: {
          keyboard: CATEGORIES.map(c => [{ text: c }]),
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });

    } else if (step === 'category') {
      data.category = CATEGORIES.find(c => c.toLowerCase() === text.toLowerCase()) || text;
      sessions[chatId].step = 'price';
      send(chatId, `Step 3/6 — Enter *price* (e.g. 580):`, { reply_markup: { remove_keyboard: true } });

    } else if (step === 'price') {
      const price = Number(text.replace(/[^\d.]/g, ''));
      if (!price) return send(chatId, '⚠️ Enter a valid number for price.');
      data.price = price;
      sessions[chatId].step = 'desc';
      send(chatId, `Step 4/6 — Enter *description* (or send "skip"):`);

    } else if (step === 'desc') {
      data.desc = text === 'skip' ? '' : text;
      sessions[chatId].step = 'badge';
      bot.sendMessage(chatId, `Step 5/6 — Select *badge* (or "none"):`, {
        parse_mode: 'Markdown',
        reply_markup: {
          keyboard: BADGES.map(b => [{ text: b }]),
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });

    } else if (step === 'badge') {
      data.badge = text === 'none' ? null : text;
      sessions[chatId].step = 'image';
      send(chatId, `Step 6/6 — Send a *photo*, paste an image URL, or send "skip":`,
        { reply_markup: { remove_keyboard: true } });

    } else if (step === 'image') {
      if (msg.photo) {
        send(chatId, '⏳ Uploading image to Firebase Storage…');
        try {
          data.image = await uploadPhoto(msg.photo[msg.photo.length - 1].file_id);
        } catch (e) {
          send(chatId, `⚠️ Upload failed (${e.message}). Saving without image.`);
          data.image = '';
        }
      } else {
        data.image = text === 'skip' ? '' : text;
      }

      try {
        const id = await saveProduct(data);
        delete sessions[chatId];
        send(chatId,
          `✅ *Product saved!*\n\n` +
          `*Name:* ${data.name}\n` +
          `*Category:* ${data.category}\n` +
          `*Price:* ₹${data.price}\n` +
          `*Badge:* ${data.badge || '—'}\n` +
          `*ID:* ${id}\n\n` +
          `Live on the website now!`
        );
      } catch (e) {
        send(chatId, `❌ Failed to save: ${e.message}`);
      }
    }
    return;
  }

  // ── BULK PASTE ────────────────────────────────────────────────────────────
  // Trigger on structured format OR WhatsApp-style (has price digits + product keywords)
  const looksLikeProduct = (/price/i.test(text) || /@\d{3,}/.test(text) || /\d{3,}\s*\/\-/.test(text)) && /\d{3,}/.test(text);
  if (looksLikeProduct) {
    const products = parseBulkText(text);
    if (!products.length) {
      return send(chatId, '⚠️ Could not parse products. Make sure each has at least Name: and Price:');
    }
    send(chatId, `⏳ Saving *${products.length}* product(s) to Firebase…`);
    const results = [];
    for (const p of products) {
      try {
        const id = await saveProduct(p);
        results.push(`✅ *${p.name}* — ₹${p.price} (ID: ${id})`);
      } catch (e) {
        results.push(`❌ *${p.name}* — ${e.message}`);
      }
    }
    send(chatId, `*Done!*\n\n${results.join('\n')}\n\nAll products are live on the website.`);
  }
});

// ── PHOTO OUTSIDE WIZARD ──────────────────────────────────────────────────────
bot.on('photo', (msg) => {
  if (!isAdmin(msg)) return;
  if (!sessions[msg.chat.id]) {
    send(msg.chat.id, 'Use /add to start the wizard, then send the photo at step 6.');
  }
});

console.log('🤖 Elite Emporium bot is running…');
console.log('   Open Telegram → @Eliteemporiummagdoom95bot → send /start to get your Chat ID.');
