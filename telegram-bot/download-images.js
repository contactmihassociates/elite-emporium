require('dotenv').config();
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const list = JSON.parse(fs.readFileSync('image-list.json', 'utf8'));
const dir = 'product-images';
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

async function main() {
  for (const p of list) {
    const ext = '.jpg';
    const filename = path.join(dir, p.docId + ext);
    if (fs.existsSync(filename)) { console.log('SKIP', p.name); continue; }
    try {
      const res = await fetch(p.image);
      if (!res.ok) { console.log('FAIL', p.name, res.status); continue; }
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(filename, buf);
      console.log('OK', p.docId, p.name);
    } catch(e) { console.log('ERR', p.name, e.message); }
  }
  console.log('Done');
  process.exit(0);
}
main();
