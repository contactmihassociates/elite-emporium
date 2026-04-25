require('dotenv').config();
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const fetch = require('node-fetch');
const fs   = require('fs');
const path = require('path');
const FormData = require('form-data');

const firebaseConfig = {
  apiKey: 'AIzaSyCj96lYHZWfbJzGCdt9VpD-bWiAKll329A',
  authDomain: 'elite-emporium.firebaseapp.com',
  projectId: 'elite-emporium',
  storageBucket: 'elite-emporium.firebasestorage.app',
  messagingSenderId: '454136134080',
  appId: '1:454136134080:web:7e13a99864ac3a46617025',
};

const CLOUDINARY_CLOUD  = 'dwygvtjad';
const CLOUDINARY_PRESET = 'ml_default';
const IMAGE_DIR = 'C:\\Users\\HP\\Desktop\\inam workings\\inam\\landing page elite emporium\\whatsapp_extract';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const PRODUCTS = [
  // ── ₹300 · Hath Pan (Hand Harnesses) ──────────────────────────────────────
  {
    file: 'IMG-20260220-WA0047.jpg', name: 'Silver Crystal Fan Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Elegant rhinestone fan-shaped hand harness connecting wrist to middle finger. Dense waterfall-style silver crystal chains form a stunning triangular fan across the back of the hand.</p><p><strong>Key Features:</strong></p><ul><li>Fan-shaped cascade of glittering rhinestone chains</li><li>Wrist bracelet connected to finger ring in one piece</li><li>Adjustable 115mm fit</li><li>Silver-tone finish, anti-tarnish coating</li><li>Perfect for bridal, parties and festive occasions</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0048.jpg', name: 'Silver Multi-Strand Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Delicate three-strand silver crystal hand chain harness with ring connector. Fine rhinestone rows spread elegantly across the back of the hand for a graceful, ethereal look.</p><p><strong>Key Features:</strong></p><ul><li>Three parallel rhinestone strands across the hand</li><li>Slim wrist chain with finger ring attachment</li><li>Adjustable 110mm fit</li><li>Silver-tone plating</li><li>Ideal for weddings and special occasions</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0049.jpg', name: 'Aqua Crystal Cross Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Stunning silver hand harness with a beautiful cross-body design and an aqua blue oval stone centrepiece. Diamond-line rhinestone chains run elegantly along the hand and wrist.</p><p><strong>Key Features:</strong></p><ul><li>Aqua blue oval centre stone</li><li>Criss-cross rhinestone chain design</li><li>Adjustable 80mm wrist fit</li><li>Silver-tone finish</li><li>Perfect with Indian and western outfits</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0050.jpg', name: 'Silver Tennis Chain Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Classic diamond tennis bracelet-style hand harness with ring attachment. Featuring a square solitaire crystal at the connection point — clean, minimalist luxury for the modern woman.</p><p><strong>Key Features:</strong></p><ul><li>Tennis bracelet chain style</li><li>Square solitaire crystal connector</li><li>Adjustable 80mm fit</li><li>Silver-tone plating</li><li>Minimalist luxury design</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0051.jpg', name: 'Silver Teardrop Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Slim elegant hand chain harness with two parallel rows of rhinestones and a teardrop crystal accent. Simple yet statement-making — a must-have for any festive look.</p><p><strong>Key Features:</strong></p><ul><li>Teardrop crystal accent at centre</li><li>Dual rhinestone chain rows</li><li>Adjustable 95mm fit</li><li>Silver-tone finish</li><li>Lightweight and comfortable</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0053.jpg', name: 'Baguette Crystal Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Striking hand harness featuring a chain of baguette-cut crystals with a square blue sapphire-style centre stone. Elegant T-bar wrist design with ring loop — perfect for bridal styling.</p><p><strong>Key Features:</strong></p><ul><li>Baguette-cut crystal chain</li><li>Square blue sapphire-style focal stone</li><li>T-bar wrist design</li><li>Adjustable 80mm fit</li><li>Bridal and party wear</li></ul>`
  },
  // ── ₹300 · AD Stone Necklace Sets ─────────────────────────────────────────
  {
    file: 'IMG-20260220-WA0054.jpg', name: 'Gold AD Stone Necklace Set – White',
    price: 300, category: 'Jewellery', badge: 'Bestseller',
    desc: `<p>Rose gold plated American Diamond (AD) stone choker necklace set with matching dangling earrings and maang tikka. Dense fringe of white CZ stones — a timeless bridal classic.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>White CZ / AD stones throughout</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Perfect for weddings, engagements and festive occasions</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0055.jpg', name: 'Gold AD Stone Necklace Set – Blue',
    price: 300, category: 'Jewellery', badge: 'Bestseller',
    desc: `<p>Rose gold plated American Diamond choker necklace set with vibrant sky blue stone accents. The same premium fringe-style design in a refreshing blue — ideal for festive and formal occasions.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>Sky blue CZ / AD stones</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Festive, bridal and party wear</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0064.jpg', name: 'Gold AD Stone Necklace Set – Navy',
    price: 300, category: 'Jewellery', badge: 'Bestseller',
    desc: `<p>Rose gold plated American Diamond choker set with deep navy blue stone accents. Rich and regal — perfect for pairing with silk sarees and lehengas.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>Deep navy CZ / AD stones</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Bridal and grand occasion wear</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0065.jpg', name: 'Gold AD Stone Necklace Set – Black',
    price: 300, category: 'Jewellery', badge: 'Bestseller',
    desc: `<p>Rose gold plated American Diamond choker set with elegant black stone accents. Bold contrast of gold and black — makes a dramatic statement at any event.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>Black CZ / AD stones</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Festive, party and reception wear</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0071.jpg', name: 'Gold AD Stone Necklace Set – Pink',
    price: 300, category: 'Jewellery', badge: 'Bestseller',
    desc: `<p>Rose gold plated American Diamond choker set with delicate baby pink stone accents. Soft and feminine — the perfect jewellery for mehndi, haldi and sangeet celebrations.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>Baby pink CZ / AD stones</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Bridal and pre-wedding events</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0072.jpg', name: 'Gold AD Stone Necklace Set – Multicolour',
    price: 300, category: 'Jewellery', badge: 'Popular',
    desc: `<p>Rose gold plated American Diamond choker set with eye-catching multicolour stone accents — pink, green, blue and red. A celebration of colour for festive occasions.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>Multicolour CZ / AD stones (pink, green, blue, red)</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Perfect for festivals, garba and celebrations</li></ul>`
  },
  // ── ₹1400 ─────────────────────────────────────────────────────────────────
  {
    file: 'IMG-20260220-WA0074.jpg', name: 'Rose Gold Pearl Flower Necklace Set',
    price: 1400, category: 'Jewellery', badge: 'Premium',
    desc: `<p>Breathtaking rose gold floral motif necklace with freshwater pearl drops. Intricate flower-shaped clusters with pave diamond petals hang in a gorgeous neckline arrangement — a true bridal masterpiece.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated floral clusters with pave diamond petals</li><li>Freshwater pearl drops at each floral centre</li><li>Matching floral drop earrings with pearl detail included</li><li>Ideal for bridal, reception and grand festive occasions</li><li>ADJ 2130 certified design</li></ul>`
  },
  // ── ₹2100 ─────────────────────────────────────────────────────────────────
  {
    file: 'IMG-20260220-WA0075.jpg', name: 'Silver Pearl Flower Necklace Set',
    price: 2100, category: 'Jewellery', badge: 'Premium',
    desc: `<p>Luxurious silver-toned floral necklace with natural pearl drops. Oversized botanical floral clusters linked across the neckline with teardrop pearls — the epitome of bridal elegance.</p><p><strong>Key Features:</strong></p><ul><li>Silver-tone plated floral clusters</li><li>Freshwater pearl drop pendants</li><li>Matching leaf-style drop earrings included</li><li>Stunning on white and cream sarees</li><li>ADJ 2130 — premium bridal design</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0077.jpg', name: 'Korean Clover Combo Set – Green',
    price: 470, category: 'Jewellery', badge: 'New',
    desc: `<p>Imported Korean four-leaf clover jewellery combo set in rich malachite green and gold. A Van Cleef-inspired design that is trendy, elegant and versatile.</p><p><strong>Key Features:</strong></p><ul><li>Full combo: necklace, bracelet, ring and stud earrings</li><li>Malachite green enamel clover motifs</li><li>Gold-plated chain and mounts</li><li>Imported Korean fashion jewellery</li><li>Perfect gift set — comes ready to give</li></ul>`
  },
  {
    file: 'IMG-20260220-WA0078.jpg', name: 'Korean Clover Combo Set – Multicolour',
    price: 470, category: 'Jewellery', badge: 'New',
    desc: `<p>Imported Korean multicolour clover jewellery combo set in bold black, white, red and green enamel with gold. Fun, vibrant and on-trend Korean fashion jewellery.</p><p><strong>Key Features:</strong></p><ul><li>Full combo: necklace, bracelet, ring and stud earrings</li><li>Multicolour enamel clover motifs (black, white, red, green)</li><li>Gold-plated chain and mounts</li><li>Imported Korean design</li><li>Great for gifting and everyday fashion</li></ul>`
  },
  // ── ₹350 · Delleza Luxury Bangles ─────────────────────────────────────────
  {
    file: 'IMG-20260220-WA0079.jpg', name: 'Gold Leaf Engraved Cuff Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Premium wide gold cuff bangle with dual horizontal bars and delicately engraved olive leaf motifs inlaid with sparkling diamonds. An architectural piece that makes a bold statement.</p><p><strong>Key Features:</strong></p><ul><li>Wide cuff bangle with geometric centre bar</li><li>Olive leaf pattern with diamond accents</li><li>Gold-plated premium finish</li><li>Delleza Luxury Jewellery collection</li><li>Comes in a luxury gift box</li></ul>`
  },
];

// Cloudinary upload function
async function uploadToCloudinary(filePath) {
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));
  form.append('upload_preset', CLOUDINARY_PRESET);
  form.append('folder', 'elite-emporium/hanii-dhanii');

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`,
    { method: 'POST', body: form }
  );
  if (!res.ok) throw new Error(`Cloudinary error: ${res.statusText}`);
  const json = await res.json();
  return json.secure_url;
}

// Main upload function
async function main() {
  console.log('🚀 Starting Hanii Dhanii Product Upload...\n');
  
  // Sign in to Firebase
  try {
    await signInWithEmailAndPassword(auth, 'eliteemporium112024@gmail.com', '99445281SL');
    console.log('✅ Signed in to Firebase\n');
  } catch(e) {
    console.warn('Auth warning (may still work):', e.message);
  }

  let uploaded = 0, failed = 0, skipped = 0;

  for (const p of PRODUCTS) {
    const filePath = path.join(IMAGE_DIR, p.file);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ [${uploaded + failed + skipped + 1}/${PRODUCTS.length}] SKIPPED: ${p.file} - File not found`);
      skipped++;
      continue;
    }

    console.log(`📤 [${uploaded + failed + skipped + 1}/${PRODUCTS.length}] Uploading: ${p.name} (₹${p.price})`);

    try {
      // Upload to Cloudinary
      const imageUrl = await uploadToCloudinary(filePath);
      console.log(`   📸 Image → ${imageUrl.substring(0, 70)}...`);

      // Save to Firestore
      await addDoc(collection(db, 'products'), {
        name:      p.name,
        price:     p.price,
        category:  p.category,
        desc:      p.desc,
        badge:     p.badge || null,
        image:     imageUrl,
        variants:  null,
        rating:    4.5,
        reviews:   0,
        brand:     'Hanii Dhanii',
        createdAt: serverTimestamp(),
      });

      console.log(`   ✅ Saved to Firestore\n`);
      uploaded++;
    } catch (err) {
      console.error(`   ❌ FAILED: ${err.message}\n`);
      failed++;
    }

    // Small delay to avoid rate limits
    await new Promise(r => setTimeout(r, 600));
  }

  console.log('═══════════════════════════════════════════');
  console.log(`📊 SUMMARY:`);
  console.log(`   ✅ Uploaded: ${uploaded}`);
  console.log(`   ❌ Failed:   ${failed}`);
  console.log(`   ⚠️ Skipped:  ${skipped}`);
  console.log(`   📦 Total:    ${PRODUCTS.length} products`);
  console.log('═══════════════════════════════════════════');
  
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });