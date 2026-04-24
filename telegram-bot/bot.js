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
const CATEGORIES = ['Home & Kitchen', 'Bags', 'Clothing', 'Electronics', 'Other'];
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

// ── BULK TEXT PARSER ──────────────────────────────────────────────────────────
// Each product block separated by a blank line. Fields: Key: Value
function parseBulkText(text) {
  const blocks   = text.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  const products = [];
  for (const block of blocks) {
    const p = {};
    for (const line of block.split('\n')) {
      const m = line.match(/^([^:]+):\s*(.+)$/);
      if (!m) continue;
      const key = m[1].trim().toLowerCase();
      const val = m[2].trim();
      if      (key === 'name')                          p.name     = val;
      else if (key === 'category' || key === 'cat')     p.category = val;
      else if (key === 'price')                         p.price    = val.replace(/[^\d.]/g, '');
      else if (key === 'desc' || key === 'description') p.desc     = val;
      else if (key === 'badge')                         p.badge    = val;
      else if (key === 'image' || key === 'img')        p.image    = val;
    }
    if (p.name && p.price) products.push(p);
  }
  return products;
}

// ── /start ────────────────────────────────────────────────────────────────────
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  send(chatId,
    `👋 *Elite Emporium Product Bot*\n\n` +
    `Your Chat ID: \`${chatId}\`\n` +
    `_(Paste this into .env → ADMIN\\_CHAT\\_ID)_\n\n` +
    `*Commands:*\n` +
    `• /add — step-by-step product wizard\n` +
    `• /list — view products in Firebase\n` +
    `• /delete <id> — remove a product\n` +
    `• /cancel — cancel the wizard\n\n` +
    `*Bulk add* — paste product details like this:\n` +
    `\`\`\`\nName: Silk Saree\nCategory: Clothing\nPrice: 2500\nDesc: Beautiful silk saree\nBadge: New\n\`\`\`\n` +
    `Separate multiple products with a blank line.`
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
  if (text.toLowerCase().includes('name:') && text.toLowerCase().includes('price:')) {
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
