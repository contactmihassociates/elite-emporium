require('dotenv').config();
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, query, where, deleteDoc, doc } = require('firebase/firestore');
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

async function main() {
  try {
    await signInWithEmailAndPassword(auth, 'eliteemporium112024@gmail.com', '99445281SL');
    console.log('✅ Signed in\n');
  } catch(e) {
    console.warn('Auth warning:', e.message);
  }

  // Delete all products with brand = 'Hanii Dhanii'
  const q = query(collection(db, 'products'), where('brand', '==', 'Hanii Dhanii'));
  const snap = await getDocs(q);

  console.log(`Found ${snap.size} Hanii Dhanii products to delete...\n`);

  let deleted = 0;
  for (const docSnap of snap.docs) {
    const data = docSnap.data();
    await deleteDoc(doc(db, 'products', docSnap.id));
    console.log(`  🗑️  Deleted: ${data.name}`);
    deleted++;
  }

  console.log(`\n✅ Done — deleted ${deleted} products.`);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
