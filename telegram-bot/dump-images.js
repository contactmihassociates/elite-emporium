require('dotenv').config();
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const fs = require('fs');

const firebaseConfig = {
  apiKey:            "AIzaSyCj96lYHZWfbJzGCdt9VpD-bWiAKll329A",
  authDomain:        "elite-emporium.firebaseapp.com",
  projectId:         "elite-emporium",
  storageBucket:     "elite-emporium.firebasestorage.app",
  messagingSenderId: "454136134080",
  appId:             "1:454136134080:web:7e13a99864ac3a46617025",
};

async function main() {
  const app  = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db   = getFirestore(app);
  try { await signInWithEmailAndPassword(auth, 'eliteemporium112024@gmail.com', '99445281SL'); } catch(e){}

  const snap = await getDocs(collection(db, 'products'));
  const products = snap.docs.map(d => ({ _id: d.id, ...d.data() }));

  const hasValidImage = p => {
    const imgOk = typeof p.image === 'string' && p.image.trim().length > 0;
    const varOk = Array.isArray(p.variants) && p.variants.some(v => v && typeof v.image === 'string' && v.image.trim().length > 0);
    return imgOk || varOk;
  };

  const survivors = products.filter(hasValidImage).map(p => ({
    docId: p._id,
    name: p.name,
    category: p.category,
    image: p.image || (p.variants && p.variants.find(v => v?.image)?.image) || ''
  }));

  fs.writeFileSync('image-list.json', JSON.stringify(survivors, null, 2));
  console.log(`Wrote ${survivors.length} items to image-list.json`);
  process.exit(0);
}
main().catch(e => { console.error(e); process.exit(1); });
