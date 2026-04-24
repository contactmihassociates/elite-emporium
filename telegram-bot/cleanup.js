require('dotenv').config();
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, deleteDoc, updateDoc } = require('firebase/firestore');
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

const APPLY = process.argv.includes('--apply');
const EMAIL = 'eliteemporium112024@gmail.com';
const PASS  = '99445281SL';

async function main() {
  const app  = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db   = getFirestore(app);
  try { await signInWithEmailAndPassword(auth, EMAIL, PASS); console.log('Signed in'); }
  catch (e) { console.log('Auth skipped:', e.message); }

  const snap = await getDocs(collection(db, 'products'));
  const products = snap.docs.map(d => ({ _ref: d.ref, _id: d.id, ...d.data() }));

  const hasValidImage = p => {
    const imgOk = typeof p.image === 'string' && p.image.trim().length > 0;
    const varOk = Array.isArray(p.variants) && p.variants.length > 0
                  && p.variants.some(v => v && typeof v.image === 'string' && v.image.trim().length > 0);
    return imgOk || varOk;
  };

  const toDelete  = products.filter(p => !hasValidImage(p));
  const survivors = products.filter(p => hasValidImage(p));
  const toEnhance  = survivors.filter(p => typeof p.desc === 'string' && p.desc.trim().length > 0);
  const toGenerate = survivors.filter(p => !p.desc || !String(p.desc).trim());
  const legacyOther = survivors.filter(p => p.category === 'Other');

  console.log(`\nScan complete:`);
  console.log(`  Total products:   ${products.length}`);
  console.log(`  To DELETE (no photo): ${toDelete.length}`);
  console.log(`  To ENHANCE (has desc): ${toEnhance.length}`);
  console.log(`  To GENERATE (no desc): ${toGenerate.length}`);
  console.log(`  Legacy category "Other": ${legacyOther.length}`);
  if (toDelete.length) {
    console.log('\nDELETE candidates:');
    console.table(toDelete.map(p => ({ docId: p._id, id: p.id, name: p.name, category: p.category })));
  }

  // In --apply mode, read existing filled plan; otherwise generate fresh
  let plan;
  if (APPLY && fs.existsSync('descriptions.plan.json')) {
    plan = JSON.parse(fs.readFileSync('descriptions.plan.json', 'utf8'));
    console.log(`\nLoaded ${plan.length} rows from existing descriptions.plan.json`);
  } else {
    plan = survivors.map(p => ({
      docId: p._id,
      id: p.id,
      name: p.name,
      category: p.category,
      action: (p.desc && String(p.desc).trim()) ? 'enhance' : 'generate',
      currentDesc: p.desc || '',
      newDesc: null
    }));
    fs.writeFileSync('descriptions.plan.json', JSON.stringify(plan, null, 2));
    console.log(`\nWrote ${plan.length} rows to descriptions.plan.json`);
  }

  if (!APPLY) {
    console.log('\nDRY RUN — fill descriptions.plan.json then re-run with --apply');
    process.exit(0);
  }

  let deleted = 0, updated = 0, failed = 0;
  for (const p of toDelete) {
    try { await deleteDoc(p._ref); deleted++; console.log(`DELETED ${p._id} ${p.name}`); }
    catch (e) { failed++; console.error(`FAIL delete ${p._id}: ${e.message}`); }
  }

  const filled = plan.filter(r => r.newDesc && String(r.newDesc).trim());
  const byId = new Map(survivors.map(s => [s._id, s._ref]));
  for (const r of filled) {
    const ref = byId.get(r.docId);
    if (!ref) { failed++; console.error(`MISSING ref for ${r.docId}`); continue; }
    try { await updateDoc(ref, { desc: String(r.newDesc).trim() }); updated++; console.log(`UPDATED ${r.docId} ${r.name}`); }
    catch (e) { failed++; console.error(`FAIL update ${r.docId}: ${e.message}`); }
  }

  console.log(`\nApply complete: deleted=${deleted} updated=${updated} failed=${failed}`);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
