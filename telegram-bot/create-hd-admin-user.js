// Run once to create the Hanii Dhanii admin Firebase user
require('dotenv').config();
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

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

async function main() {
  try {
    const cred = await createUserWithEmailAndPassword(
      auth,
      'haniidhanii.admin@eliteemporium.com',
      'HaniiDhanii@2026'
    );
    console.log('✅ Hanii Dhanii admin user created!');
    console.log('   Email:    haniidhanii.admin@eliteemporium.com');
    console.log('   Password: HaniiDhanii@2026');
    console.log('   UID:', cred.user.uid);
  } catch (e) {
    if (e.code === 'auth/email-already-in-use') {
      console.log('✅ User already exists — credentials are ready to use.');
    } else {
      console.error('❌ Error:', e.message);
    }
  }
  process.exit(0);
}

main();
