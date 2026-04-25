require('dotenv').config();
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, query, where, doc, updateDoc } = require('firebase/firestore');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyCj96lYHZWfbJzGCdt9VpD-bWiAKll329A',
  authDomain: 'elite-emporium.firebaseapp.com',
  projectId: 'elite-emporium',
  storageBucket: 'elite-emporium.firebasestorage.app',
  messagingSenderId: '454136134080',
  appId: '1:454136134080:web:7e13a99864ac3a46617025',
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

// Products whose price needs to change → new price
const PRICE_FIXES = {
  'Gold AD Stone Necklace Set – White':      1400,
  'Gold AD Stone Necklace Set – Blue':       1400,
  'Gold AD Stone Necklace Set – Navy':       1400,
  'Gold AD Stone Necklace Set – Black':      1400,
  'Gold AD Stone Necklace Set – Pink':       1400,
  'Gold AD Stone Necklace Set – Multicolour': 1400,
};

async function main() {
  try {
    await signInWithEmailAndPassword(auth, 'eliteemporium112024@gmail.com', '99445281SL');
    console.log('✅ Signed in\n');
  } catch(e) {
    console.warn('Auth warning:', e.message);
  }

  const snap = await getDocs(collection(db, 'products'));
  let fixed = 0;

  for (const docSnap of snap.docs) {
    const name = docSnap.data().name;
    if (PRICE_FIXES[name] !== undefined) {
      const newPrice = PRICE_FIXES[name];
      await updateDoc(doc(db, 'products', docSnap.id), { price: newPrice });
      console.log(`  ✅ "${name}" → ₹${newPrice}`);
      fixed++;
    }
  }

  console.log(`\n✅ Done — updated ${fixed} product prices.`);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
