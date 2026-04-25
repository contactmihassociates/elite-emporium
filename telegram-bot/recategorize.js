require('dotenv').config();
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, updateDoc } = require('firebase/firestore');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyCj96lYHZWfbJzGCdt9VpD-bWiAKll329A',
  authDomain: 'elite-emporium.firebaseapp.com',
  projectId: 'elite-emporium',
  storageBucket: 'elite-emporium.firebasestorage.app',
  messagingSenderId: '454136134080',
  appId: '1:454136134080:web:7e13a99864ac3a46617025',
};

const APPLY = process.argv.includes('--apply');

// Known watch brand names — even without the word "watch" in the product name
const WATCH_BRANDS = /tissot|rolex|omega|fossil|g.shock|g shock|patek|casio|earth\s*pride|just\s*cavalli|cavalli|richard\s*mill|chanel.*watch|gucci.*watch|ck.*watch|tommy.*watch|watch.*tommy|light\s*baby\s*watch|tommy\s*hilfiger\s*men/;

// Known handbag brand names — brand-only product names that are definitely bags
const BAG_BRANDS = /michael\s*kors|coach|ted\s*baker|charles.*keith|yinggedaishu|woodland|jims\s*honey|lianghui|jingpindaishu|ronalade|lasu|lovevook|heatoo|corsica|ryanair|kekemi|traveller\s*bag/;

function detectCategory(name, currentCategory) {
  const t = name.toLowerCase()
    .replace(/[*_🎁🛍️🥰🦄🎒]/g, ' ')
    .replace(/\s+/g, ' ').trim();

  // Explicit watch keyword OR known watch brand
  if (/\bwatch\b|chronograph|timepiece/.test(t) || WATCH_BRANDS.test(t)) return 'Watches';

  // Wallet keywords
  if (/\bwallet\b|\bpurse\b|cardholder|card.?holder/.test(t)) return 'Wallets';

  // Sunglasses / coolers
  if (/cooler|sunglass|\bshades\b|\bgoggle\b|uv.?protect|spectacle|optical/.test(t)) return 'Coolers';

  // Explicit bag keywords OR known bag brands
  if (/bag|tote|sling|clutch|pouch|handbag|vanity|crossbody|backpack|diaper|cabin|rucksack/.test(t) || BAG_BRANDS.test(t)) return 'Bags';

  // Clothing
  if (/saree|dress|gown|lehenga|kurta|jeans|shirt|blouse|trouser|pant\b|suit\b/.test(t)) return 'Clothing';

  // Home & Kitchen
  if (/kitchen|bowl|griller|tiffin|cooker|pan|plate|mug|bottle|jar|juicer|juice|peeler|hot\s*box|cash\s*box|storage|mosquito|racket|tumbler/.test(t)) return 'Home & Kitchen';

  // Electronics
  if (/phone|cable|charger|earphone|headphone|speaker|laptop/.test(t)) return 'Electronics';

  // Footwear
  if (/shoe|boot|sandal|slipper|heel|\bfootwear\b/.test(t)) return 'Footwear';

  // Toys
  if (/toy|game|puzzle|lego|doll/.test(t)) return 'Toys & Games';

  // If no keyword matches but product is already in a valid non-Toys category, keep it
  const valid = ['Home & Kitchen', 'Bags', 'Clothing', 'Electronics', 'Footwear', 'Wallets', 'Coolers', 'Watches', 'Others'];
  if (valid.includes(currentCategory) && currentCategory !== 'Toys & Games') return currentCategory;

  // Products in Toys & Games with no other keyword match are watches (legacy mis-category)
  if (currentCategory === 'Toys & Games') return 'Watches';

  return 'Others';
}

async function main() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  try { await signInWithEmailAndPassword(auth, 'eliteemporium112024@gmail.com', '99445281SL'); console.log('Signed in'); } catch(e) {}

  const snap = await getDocs(collection(db, 'products'));
  const products = snap.docs.map(d => ({ docId: d.id, ref: d.ref, ...d.data() }));

  const changes = [];
  const correct = [];

  for (const p of products) {
    const suggested = detectCategory(p.name || '', p.category);
    if (suggested !== p.category) {
      changes.push({ docId: p.docId, name: p.name, old: p.category, new: suggested, ref: p.ref });
    } else {
      correct.push({ name: p.name, category: p.category });
    }
  }

  console.log(`\nTotal products: ${products.length}`);
  console.log(`Already correct: ${correct.length}`);
  console.log(`Need recategorizing: ${changes.length}\n`);

  if (changes.length) {
    console.log('CHANGES:');
    console.table(changes.map(c => ({ name: c.name.substring(0, 40), old: c.old, new: c.new })));
  }

  if (!APPLY) {
    console.log('\nDRY RUN — re-run with --apply to write changes to Firestore');
    process.exit(0);
  }

  let updated = 0, failed = 0;
  for (const c of changes) {
    try {
      await updateDoc(c.ref, { category: c.new });
      console.log(`UPDATED [${c.old} → ${c.new}] ${c.name}`);
      updated++;
    } catch(e) {
      console.error(`FAIL ${c.docId}: ${e.message}`);
      failed++;
    }
  }

  console.log(`\nDone: updated=${updated} failed=${failed}`);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
