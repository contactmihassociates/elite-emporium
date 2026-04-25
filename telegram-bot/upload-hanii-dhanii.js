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
const IMAGE_DIR = 'C:\\Users\\HP\\Desktop\\inam workings\\elite emporium\\whatsapp-extract';

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

// ── PRODUCT CATALOG ──────────────────────────────────────────────────────────
const PRODUCTS = [

  // ── ₹300 · Hath Pan (Hand Harnesses) ──────────────────────────────────────
  {
    file: 'IMG-20260425-WA0056.jpg',
    name: 'Silver Crystal Fan Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Elegant rhinestone fan-shaped hand harness connecting wrist to middle finger. Dense waterfall-style silver crystal chains form a stunning triangular fan across the back of the hand.</p><p><strong>Key Features:</strong></p><ul><li>Fan-shaped cascade of glittering rhinestone chains</li><li>Wrist bracelet connected to finger ring in one piece</li><li>Adjustable 115mm fit</li><li>Silver-tone finish, anti-tarnish coating</li><li>Perfect for bridal, parties and festive occasions</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0061.jpg',
    name: 'Silver Multi-Strand Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Delicate three-strand silver crystal hand chain harness with ring connector. Fine rhinestone rows spread elegantly across the back of the hand for a graceful, ethereal look.</p><p><strong>Key Features:</strong></p><ul><li>Three parallel rhinestone strands across the hand</li><li>Slim wrist chain with finger ring attachment</li><li>Adjustable 110mm fit</li><li>Silver-tone plating</li><li>Ideal for weddings and special occasions</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0057.jpg',
    name: 'Aqua Crystal Cross Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Stunning silver hand harness with a beautiful cross-body design and an aqua blue oval stone centrepiece. Diamond-line rhinestone chains run elegantly along the hand and wrist.</p><p><strong>Key Features:</strong></p><ul><li>Aqua blue oval centre stone</li><li>Criss-cross rhinestone chain design</li><li>Adjustable 80mm wrist fit</li><li>Silver-tone finish</li><li>Perfect with Indian and western outfits</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0060.jpg',
    name: 'Silver Tennis Chain Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Classic diamond tennis bracelet-style hand harness with ring attachment. Featuring a square solitaire crystal at the connection point — clean, minimalist luxury for the modern woman.</p><p><strong>Key Features:</strong></p><ul><li>Tennis bracelet chain style</li><li>Square solitaire crystal connector</li><li>Adjustable 80mm fit</li><li>Silver-tone plating</li><li>Minimalist luxury design</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0058.jpg',
    name: 'Silver Teardrop Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Slim elegant hand chain harness with two parallel rows of rhinestones and a teardrop crystal accent. Simple yet statement-making — a must-have for any festive look.</p><p><strong>Key Features:</strong></p><ul><li>Teardrop crystal accent at centre</li><li>Dual rhinestone chain rows</li><li>Adjustable 95mm fit</li><li>Silver-tone finish</li><li>Lightweight and comfortable</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0059.jpg',
    name: 'Baguette Crystal Hath Pan',
    price: 300, category: 'Jewellery', badge: 'New',
    desc: `<p>Striking hand harness featuring a chain of baguette-cut crystals with a square blue sapphire-style centre stone. Elegant T-bar wrist design with ring loop — perfect for bridal styling.</p><p><strong>Key Features:</strong></p><ul><li>Baguette-cut crystal chain</li><li>Square blue sapphire-style focal stone</li><li>T-bar wrist design</li><li>Adjustable 80mm fit</li><li>Bridal and party wear</li></ul>`
  },

  // ── ₹300 · AD Stone Necklace Sets ─────────────────────────────────────────
  {
    file: 'IMG-20260425-WA0062.jpg',
    name: 'Gold AD Stone Necklace Set – White',
    price: 300, category: 'Jewellery', badge: 'Bestseller',
    desc: `<p>Rose gold plated American Diamond (AD) stone choker necklace set with matching dangling earrings and maang tikka. Dense fringe of white CZ stones — a timeless bridal classic.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>White CZ / AD stones throughout</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Perfect for weddings, engagements and festive occasions</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0063.jpg',
    name: 'Gold AD Stone Necklace Set – Blue',
    price: 300, category: 'Jewellery', badge: 'Bestseller',
    desc: `<p>Rose gold plated American Diamond choker necklace set with vibrant sky blue stone accents. The same premium fringe-style design in a refreshing blue — ideal for festive and formal occasions.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>Sky blue CZ / AD stones</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Festive, bridal and party wear</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0064.jpg',
    name: 'Gold AD Stone Necklace Set – Navy',
    price: 300, category: 'Jewellery', badge: 'Bestseller',
    desc: `<p>Rose gold plated American Diamond choker set with deep navy blue stone accents. Rich and regal — perfect for pairing with silk sarees and lehengas.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>Deep navy CZ / AD stones</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Bridal and grand occasion wear</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0065.jpg',
    name: 'Gold AD Stone Necklace Set – Black',
    price: 300, category: 'Jewellery', badge: 'Bestseller',
    desc: `<p>Rose gold plated American Diamond choker set with elegant black stone accents. Bold contrast of gold and black — makes a dramatic statement at any event.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>Black CZ / AD stones</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Festive, party and reception wear</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0066.jpg',
    name: 'Gold AD Stone Necklace Set – Pink',
    price: 300, category: 'Jewellery', badge: 'Bestseller',
    desc: `<p>Rose gold plated American Diamond choker set with delicate baby pink stone accents. Soft and feminine — the perfect jewellery for mehndi, haldi and sangeet celebrations.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>Baby pink CZ / AD stones</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Bridal and pre-wedding events</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0067.jpg',
    name: 'Gold AD Stone Necklace Set – Multicolour',
    price: 300, category: 'Jewellery', badge: 'Popular',
    desc: `<p>Rose gold plated American Diamond choker set with eye-catching multicolour stone accents — pink, green, blue and red. A celebration of colour for festive occasions.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated base metal</li><li>Multicolour CZ / AD stones (pink, green, blue, red)</li><li>Set includes: necklace, earrings and maang tikka</li><li>Adjustable necklace length</li><li>Perfect for festivals, garba and celebrations</li></ul>`
  },

  // ── ₹1400 ─────────────────────────────────────────────────────────────────
  {
    file: 'IMG-20260425-WA0068.jpg',
    name: 'Rose Gold Pearl Flower Necklace Set',
    price: 1400, category: 'Jewellery', badge: 'Premium',
    desc: `<p>Breathtaking rose gold floral motif necklace with freshwater pearl drops. Intricate flower-shaped clusters with pave diamond petals hang in a gorgeous neckline arrangement — a true bridal masterpiece.</p><p><strong>Key Features:</strong></p><ul><li>Rose gold plated floral clusters with pave diamond petals</li><li>Freshwater pearl drops at each floral centre</li><li>Matching floral drop earrings with pearl detail included</li><li>Ideal for bridal, reception and grand festive occasions</li><li>ADJ 2130 certified design</li></ul>`
  },

  // ── ₹2100 ─────────────────────────────────────────────────────────────────
  {
    file: 'IMG-20260425-WA0069.jpg',
    name: 'Silver Pearl Flower Necklace Set',
    price: 2100, category: 'Jewellery', badge: 'Premium',
    desc: `<p>Luxurious silver-toned floral necklace with natural pearl drops. Oversized botanical floral clusters linked across the neckline with teardrop pearls — the epitome of bridal elegance.</p><p><strong>Key Features:</strong></p><ul><li>Silver-tone plated floral clusters</li><li>Freshwater pearl drop pendants</li><li>Matching leaf-style drop earrings included</li><li>Stunning on white and cream sarees</li><li>ADJ 2130 — premium bridal design</li></ul>`
  },

  // ── ₹470 · Imported Korean Full Combo ─────────────────────────────────────
  {
    file: 'IMG-20260425-WA0070.jpg',
    name: 'Korean Clover Combo Set – Green',
    price: 470, category: 'Jewellery', badge: 'New',
    desc: `<p>Imported Korean four-leaf clover jewellery combo set in rich malachite green and gold. A Van Cleef-inspired design that is trendy, elegant and versatile.</p><p><strong>Key Features:</strong></p><ul><li>Full combo: necklace, bracelet, ring and stud earrings</li><li>Malachite green enamel clover motifs</li><li>Gold-plated chain and mounts</li><li>Imported Korean fashion jewellery</li><li>Perfect gift set — comes ready to give</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0071.jpg',
    name: 'Korean Clover Combo Set – Multicolour',
    price: 470, category: 'Jewellery', badge: 'New',
    desc: `<p>Imported Korean multicolour clover jewellery combo set in bold black, white, red and green enamel with gold. Fun, vibrant and on-trend Korean fashion jewellery.</p><p><strong>Key Features:</strong></p><ul><li>Full combo: necklace, bracelet, ring and stud earrings</li><li>Multicolour enamel clover motifs (black, white, red, green)</li><li>Gold-plated chain and mounts</li><li>Imported Korean design</li><li>Great for gifting and everyday fashion</li></ul>`
  },

  // ── ₹350 · Delleza Luxury Bangles ─────────────────────────────────────────
  {
    file: 'IMG-20260425-WA0073.jpg',
    name: 'Gold Leaf Engraved Cuff Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Premium wide gold cuff bangle with dual horizontal bars and delicately engraved olive leaf motifs inlaid with sparkling diamonds. An architectural piece that makes a bold statement.</p><p><strong>Key Features:</strong></p><ul><li>Wide cuff bangle with geometric centre bar</li><li>Olive leaf pattern with diamond accents</li><li>Gold-plated premium finish</li><li>Delleza Luxury Jewellery collection</li><li>Comes in a luxury gift box</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0074.jpg',
    name: 'Gold Medusa Coin Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Sophisticated gold bangle featuring an embossed Medusa head coin at centre, flanked by white enamel channels set with baguette crystals. Modern luxury meets mythology.</p><p><strong>Key Features:</strong></p><ul><li>Embossed Medusa head gold coin centrepiece</li><li>White enamel with baguette crystal channels</li><li>Gold-plated bangle band</li><li>Delleza Jewellery collection</li><li>Luxury gift box included</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0075.jpg',
    name: 'Gold Star Diamond Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Elegant gold cuff bangle with a stunning double-star motif at centre, fully paved with brilliant round diamonds. A sparkling focal point on a sleek minimalist band.</p><p><strong>Key Features:</strong></p><ul><li>Double star centre motif with pave diamond setting</li><li>Sleek gold bangle band</li><li>Sparkling brilliance from every angle</li><li>Delleza Luxury Jewellery</li><li>Perfect for daily luxury or special events</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0076.jpg',
    name: 'Gold Greek Key Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Bold gold chain bangle featuring the timeless Greek meander (key) pattern inlaid with rows of sparkling round crystals. A powerful statement piece for any occasion.</p><p><strong>Key Features:</strong></p><ul><li>Classic Greek meander pattern</li><li>Crystal-inlaid detail throughout</li><li>Bold wide band design</li><li>Delleza collection</li><li>Makes a head-turning statement</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0077.jpg',
    name: 'Gold Square Diamond Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Gold chain bracelet with diamond-paved square frame links separated by round crystal connectors. Chic, geometric and eye-catching — modern luxury jewellery.</p><p><strong>Key Features:</strong></p><ul><li>Square diamond-paved frame links</li><li>Round crystal connector beads</li><li>Gold-tone chain bracelet</li><li>Delleza Luxury Jewellery</li><li>Ideal for layering or standalone wear</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0098.jpg',
    name: 'Gold Double Row Bezel Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Two-row gold cuff bangle with bezel-set round crystals on top and a pave diamond strip below. Timeless elegance in a stacked silhouette — effortlessly luxurious.</p><p><strong>Key Features:</strong></p><ul><li>Double-row design: bezel crystals + pave diamonds</li><li>Wide gold cuff bangle</li><li>Premium gold-plated finish</li><li>Delleza collection</li><li>Timeless everyday luxury</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0097.jpg',
    name: 'Gold Butterfly Leaf Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Gold cuff bangle with a delicate butterfly at centre flanked by engraved laurel leaf branches and a pave diamond band. Nature-inspired luxury at its finest.</p><p><strong>Key Features:</strong></p><ul><li>Butterfly centre motif with laurel leaves</li><li>Pave diamond channel band</li><li>Nature-inspired design</li><li>Delleza Luxury Jewellery</li><li>Beautiful gift for nature lovers</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0078.jpg',
    name: 'Gold CC Chain Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Gold open bangle with an interlocking circle chain motif on one side and a pave diamond bar detail at top. Contemporary fashion jewellery with a designer feel.</p><p><strong>Key Features:</strong></p><ul><li>Interlocking circle chain pattern</li><li>Pave diamond bar accent</li><li>Gold-plated open bangle</li><li>Delleza collection</li><li>Elegant daily wear piece</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0079.jpg',
    name: 'Gold Infinity Twist Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Sculptural gold open bangle in an infinity-loop twist form with pave diamond-encrusted bars and textured screw end caps. A modern, architectural statement piece.</p><p><strong>Key Features:</strong></p><ul><li>Infinity-loop sculptural twisted form</li><li>Pave diamond bar inserts</li><li>Textured screw end caps</li><li>Open bangle — easy to wear</li><li>Bold wrist statement jewellery</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0096.jpg',
    name: 'Gold Sunflower Pave Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Three-row pave diamond gold bangle with a golden sunflower medallion at centre and a small moonstone oval accent. Radiant, feminine and full of sparkle.</p><p><strong>Key Features:</strong></p><ul><li>Three rows of pave diamonds</li><li>Sunflower medallion centrepiece</li><li>Moonstone oval accent</li><li>Rich gold-plated finish</li><li>Sparkling from every angle</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0095.jpg',
    name: 'Gold Tree of Life Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Two-band gold bangle with an ornate diamond-halo Tree of Life medallion at centre. Symbolic and meaningful — a beautiful gift representing growth, strength and connection.</p><p><strong>Key Features:</strong></p><ul><li>Tree of Life medallion with diamond halo</li><li>Double-band gold bangle</li><li>Symbolic meaningful design</li><li>Premium gold-plated finish</li><li>Ideal as a gift for loved ones</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0080.jpg',
    name: 'Gold Circle Link Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Gold bangle with openwork circle chain pattern on the front half, each circle filled with pave diamonds. Feminine, modern and effortlessly chic.</p><p><strong>Key Features:</strong></p><ul><li>Openwork circle chain design</li><li>Diamond-filled circle motifs</li><li>Gold-plated bangle</li><li>Half-front decorative pattern</li><li>Perfect for festive and casual wear</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0094.jpg',
    name: 'Gold Wave Twist Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Bold sculptural gold bangle in a flowing wave-twist form with pave diamond-edged arcs. Aurum Collection Design "Wave" — wearable art for the modern woman.</p><p><strong>Key Features:</strong></p><ul><li>Sculptural wave-twist bangle form</li><li>Pave diamond edging on arcs</li><li>Gold-plated finish</li><li>Aurum Collection — Design "Wave"</li><li>Statement wrist jewellery</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0083.jpg',
    name: 'Gold Full Pave Cuff Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Sleek wide gold cuff bangle with the entire front face fully paved with white round crystals. Understated yet absolutely dazzling — Eclipse Collection by Luna.</p><p><strong>Key Features:</strong></p><ul><li>Full-face pave crystal setting</li><li>Wide gold cuff form</li><li>Uniform crystal sparkle</li><li>Eclipse Collection by Luna</li><li>Minimal yet glamorous</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0081.jpg',
    name: 'Gold Screw Multi-Strand Bangle',
    price: 350, category: 'Jewellery', badge: 'Premium',
    desc: `<p>Triple-strand rose gold diamond bar bangle with a rectangular pave clasp and screw detail at ends. The Screw Collection — A Legacy of Style. Elegant for work and events alike.</p><p><strong>Key Features:</strong></p><ul><li>Triple-strand bracelet design</li><li>Pave diamond horizontal bar clasp</li><li>Screw detail end caps</li><li>The Screw Collection — A Legacy of Style</li><li>Versatile for office and formal wear</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0082.jpg',
    name: 'Gold LV Monogram Bangle',
    price: 350, category: 'Jewellery', badge: 'Popular',
    desc: `<p>Gold bangle featuring a prominent LV monogram centre medallion surrounded by brilliant pave diamonds, flanked by clover motifs and pave crystal sections. A luxury fashion statement.</p><p><strong>Key Features:</strong></p><ul><li>LV monogram centre medallion with diamond surround</li><li>Clover motif accents on sides</li><li>Pave diamond sections throughout</li><li>Métier collection</li><li>High-fashion designer-inspired look</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0093.jpg',
    name: 'Gold Chain Link Double Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Stacked double bangle set featuring a bold gold chain-link bangle and a matching pave diamond-edged band worn together. A layered, sophisticated wrist look.</p><p><strong>Key Features:</strong></p><ul><li>Set of 2 stackable bangles</li><li>Bold chain-link bangle + pave diamond band</li><li>Gold-plated finish</li><li>Perfect stacked or worn separately</li><li>Trendy layered jewellery look</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0084.jpg',
    name: 'Gold Twin Pave Bar Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Pair of minimalist sleek gold bangles — one with a pave diamond strip running along the top edge. Clean, modern and effortlessly elegant worn stacked or alone.</p><p><strong>Key Features:</strong></p><ul><li>Set of 2 thin gold bangles</li><li>One bangle with pave diamond strip</li><li>Slim minimalist design</li><li>Gold-plated finish</li><li>Perfect for daily wear and layering</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0092.jpg',
    name: 'Gold Brick Link Pave Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Gold bangle with a brick-tile pattern on the front and a single pave diamond channel running through the centre. Aurélia Gold collection — where architecture meets jewellery.</p><p><strong>Key Features:</strong></p><ul><li>Brick-tile link pattern on front face</li><li>Central pave diamond channel strip</li><li>Gold-plated wide band</li><li>Aurélia Gold collection</li><li>Bold architectural statement piece</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0087.jpg',
    name: 'Gold Triple Wrap Pave Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Gold triple-wrap crossover bangle with overlapping pave diamond bands and logo connector detail. Layered luxury in one wrist piece — bold and unapologetically glamorous.</p><p><strong>Key Features:</strong></p><ul><li>Triple-band crossover bangle design</li><li>Full pave diamond surfaces</li><li>Logo screw connector detail</li><li>Gold-plated premium finish</li><li>Statement piece for evening events</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0085.jpg',
    name: 'Gold Butterfly Frame Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Gold open bangle with three charming diamond-framed square butterfly motifs linked in a row. Feminine, dainty and delightful — a jewellery piece that tells a story.</p><p><strong>Key Features:</strong></p><ul><li>Three square butterfly motifs</li><li>Pave diamond frames around each butterfly</li><li>Gold-plated open bangle</li><li>Feminine and nature-inspired</li><li>Perfect gift for butterfly lovers</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0086.jpg',
    name: 'Gold Lattice Cuff Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Wide gold cuff bangle with an all-over woven lattice pattern and a crystal-paved square centre clasp. Bold, fashion-forward and impossible to ignore.</p><p><strong>Key Features:</strong></p><ul><li>All-over lattice weave pattern</li><li>Crystal-paved square clasp centrepiece</li><li>Wide cuff bangle form</li><li>Gold-plated finish</li><li>Fashion statement for parties and events</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0091.jpg',
    name: 'Gold Love Pave Diamond Bangle',
    price: 350, category: 'Jewellery', badge: 'Popular',
    desc: `<p>Gold love-inspired bangle fully paved with brilliant round crystals, featuring a large solitaire diamond as the showstopping centrepiece. Iconic screw-end detail adds designer flair.</p><p><strong>Key Features:</strong></p><ul><li>Full pave round crystal body</li><li>Large solitaire diamond centre stone</li><li>Iconic screw end detail</li><li>Gold-plated finish</li><li>Perfect Valentine's or anniversary gift</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0088.jpg',
    name: 'Gold Nail Twist Open Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Open gold bangle in a sculptural nail-inspired design with a pave diamond bar running through the centre and spiral coil end caps. Aura Fine Jewelry — edgy, modern and utterly unique.</p><p><strong>Key Features:</strong></p><ul><li>Sculptural nail-inspired open bangle</li><li>Pave diamond centre bar</li><li>Spiral coil end caps</li><li>Aura Fine Jewelry collection</li><li>Bold and contemporary design</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0090.jpg',
    name: 'Gold Flora Daisy Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Gold double-band bangle adorned with charming daisy flower charms with diamond accents. Flora Collection — light, romantic and full of floral grace.</p><p><strong>Key Features:</strong></p><ul><li>Double-band gold bangle</li><li>Daisy flower charms with diamond centres</li><li>Delicate and feminine design</li><li>Flora Collection</li><li>Lovely gift for floral jewellery lovers</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0089.jpg',
    name: 'Gold Slim Pave Open Bangle',
    price: 350, category: 'Jewellery', badge: 'New',
    desc: `<p>Slim, refined open gold bangle with a clean pave diamond strip and a small logo disc detail. Aura Collection Fine Gold & Diamonds — elegant, wearable luxury for every day.</p><p><strong>Key Features:</strong></p><ul><li>Slim open bangle profile</li><li>Pave diamond strip on top face</li><li>Small logo disc detail</li><li>Aura Collection — Fine Gold & Diamonds</li><li>Unisex — suitable for men and women</li></ul>`
  },
  {
    file: 'IMG-20260425-WA0099.jpg',
    name: 'Silver Pearl Flower Necklace – Bridal Set',
    price: 350, category: 'Jewellery', badge: 'Premium',
    desc: `<p>Elegant silver-toned pearl flower necklace set — floral clusters with freshwater pearl drops and matching drop earrings. Styled beautifully on cream silk for a complete bridal look.</p><p><strong>Key Features:</strong></p><ul><li>Silver-tone floral cluster necklace</li><li>Freshwater pearl drops at each flower</li><li>Matching floral drop earrings included</li><li>Complete bridal and reception look</li><li>ADJ 2130 premium design</li></ul>`
  },
];

// ── CLOUDINARY UPLOAD ─────────────────────────────────────────────────────────
async function uploadToCloudinary(filePath) {
  const form = new FormData();
  form.append('file',          fs.createReadStream(filePath));
  form.append('upload_preset', CLOUDINARY_PRESET);
  form.append('folder',        'elite-emporium/hanii-dhanii');

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`,
    { method: 'POST', body: form }
  );
  if (!res.ok) throw new Error(`Cloudinary error: ${res.statusText}`);
  const json = await res.json();
  return json.secure_url;
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  // Sign in
  try {
    await signInWithEmailAndPassword(auth, 'eliteemporium112024@gmail.com', '99445281SL');
    console.log('✅ Signed in to Firebase\n');
  } catch(e) {
    console.warn('Auth warning (may still work):', e.message);
  }

  let uploaded = 0, failed = 0;

  for (const p of PRODUCTS) {
    const filePath = path.join(IMAGE_DIR, p.file);
    console.log(`[${uploaded + failed + 1}/${PRODUCTS.length}] Uploading: ${p.name}`);

    try {
      const imageUrl = await uploadToCloudinary(filePath);
      console.log(`  📸 Image → ${imageUrl.substring(0, 60)}...`);

      await addDoc(collection(db, 'products'), {
        id:        Date.now(),
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

      console.log(`  ✅ Saved to Firestore — ₹${p.price}\n`);
      uploaded++;
    } catch (err) {
      console.error(`  ❌ FAILED: ${err.message}\n`);
      failed++;
    }

    // Small delay to avoid rate limits
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\n═══════════════════════════════`);
  console.log(`✅ Uploaded: ${uploaded}  ❌ Failed: ${failed}`);
  console.log(`Total: ${PRODUCTS.length} products`);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
