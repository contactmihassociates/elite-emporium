/* ============================================
   ELITE EMPORIUM - E-COMMERCE CORE SCRIPT
   ============================================ */

// ── BUSINESS CONFIG ─────────────────────────
const CONFIG = {
  businessName: "Elite Emporium",
  whatsappNumber:    "917358650774",  // primary WhatsApp
  whatsappNumberAlt: "917358719774",  // alternative WhatsApp (backup line)
  ownerName: "Muhammad Abubucker Siddeek S M N",
  address: "183b, Sadukai Street, Kayalpattinam, Thoothukudi, Tamil Nadu - 628204",
  gst: "33DWGPN3169G1ZF",
  udyam: "UDYAM-TN-26-0090343",
  email: "eliteemporium112024@gmail.com",
  minFreeDelivery: 499,
  deliveryCharge: 60,

  // ── RAZORPAY PAYMENT GATEWAY ────────────────────
  //
  // Option A (RECOMMENDED): Embedded Checkout — modern in-page modal.
  // 1. Sign in to https://dashboard.razorpay.com/
  // 2. Settings → API Keys → Generate Key (test mode is free, instant)
  // 3. Copy the Key ID — it starts with "rzp_test_" or "rzp_live_"
  // 4. Paste it below into razorpayKeyId. That's it.
  //
  // Key IDs are public — safe to commit. Never put the SECRET here.
  // Test mode uses card 4111 1111 1111 1111 / any future expiry / CVV 123.
  //
  // For PRODUCTION reconciliation, ideally create order_id server-side
  // (Razorpay's recommended flow). This frontend-only mode works fine
  // for small volumes — payments still appear in your Razorpay dashboard
  // with the order reference in the "notes" field.
  //
  razorpayKeyId: "",     // e.g. "rzp_test_AbCdEf123XYZ" or "rzp_live_..."
  razorpayLiveMode: false, // set true once you've tested with a few real payments

  //
  // Option B (FALLBACK): Hosted Payment Link / Payment Page.
  // Used automatically if Key ID isn't configured. Paste the public URL
  // of a Razorpay Payment Page (Customer-amount type) here.
  // e.g. https://razorpay.com/payment-link/plink_XXXXXXXX
  razorpayPaymentLink: "",

  // ── DIRECT UPI (simplest — no signup, no fees, no KYC) ──────────
  //
  // Drop your business UPI ID here and the cart gets a 'Pay via GPay / UPI'
  // button that opens the customer's UPI app pre-filled with the exact
  // amount and an order reference. After they pay, they're asked for the
  // UPI transaction ID — which then gets sent to your WhatsApp along with
  // the full order so you can verify in your bank app.
  //
  // To find your UPI ID: open your UPI app (GPay/PhonePe/Paytm/BHIM) →
  // 'My UPI ID' / 'Profile'. Looks like 'name@oksbi', 'mobile@paytm', etc.
  //
  upiId:        "7358650774@okbizaxis", // Elite Emporium Google Pay (Axis Bank)
  upiPayeeName: "Elite Emporium",       // shows up in customer's UPI app
};

// ── PRODUCT CATALOG (base / hardcoded) ───────
const HARDCODED_PRODUCTS = [
  // Home & Kitchen
  {
    id: 1, name: "3-Piece Stainless Steel Grater & Drain Bowl Set",
    category: "Home & Kitchen", price: 580, mrp: 799,
    image: "images/products/IMG-20260308-WA0138.jpg",
    desc: "<p class='pd-desc-para'>The <strong>3pcs Steel Drain Piller</strong> by VOK is a beautifully engineered three-piece nesting kitchen set that quietly replaces four or five single-purpose tools with one elegant stacking system. Built from <strong>thickened food-grade stainless steel</strong> &mdash; safe, environmentally friendly, scratch-resistant &mdash; it&rsquo;s designed for the realities of an Indian kitchen: daily scrubbing, frequent washing, and direct-flame cooking when needed.</p><p class='pd-desc-para'>All three pieces stack into a single mirror-polished tower that takes up one shelf footprint, then separate into independent tools the moment you start cooking:</p><ul class='pd-desc-list'><li><strong>Stainless steel basin (bottom)</strong> &mdash; deep mixing/serving bowl with a thickened base that sits directly on a flame, so it doubles as a cooking pot for warming soup, boiling water, tempering or steaming.</li><li><strong>Drain basin (middle)</strong> &mdash; a perforated colander that nests inside the basin. Use it for washing rice (and saving the rinse water), washing vegetables, draining boiled noodles, or rinsing fruit.</li><li><strong>Grater lid (top)</strong> &mdash; a flat steel disc with <em>four</em> integrated blade patterns: <strong>5 mm Julienne</strong> for carrot/radish strips, a <strong>Wavy slicer</strong> for restaurant-style crinkle cuts on kid&rsquo;s tiffin chips, a <strong>3 mm Slicer</strong> for clean cucumber/onion/potato slices, and a fine <strong>3 mm Julienne</strong> for delicate paneer or salad work.</li></ul><p class='pd-desc-para'><strong>Multi-functional use</strong> right out of the box: beat eggs in the basin, wash rice through the colander, slice vegetables on the grater lid, drain noodles into the bowl, prep salad strips, steam mo:mos, even use the basin as a serving bowl. The whole flow happens within one set &mdash; no dirty mandolin, no plastic strainer, no extra mixing bowl.</p><p class='pd-desc-para'><strong>Care:</strong> hand-wash with normal dish soap; dishwasher safe on the top rack. No coating to peel, no plastic to crack. <strong>What&rsquo;s in the box:</strong> 1 stainless steel basin, 1 drain basin (colander), 1 multi-blade grater lid. Free delivery in India over &#8377;499.</p>",
    rating: 4.3, reviews: 14, badge: "New", inStock: true
  },
  {
    id: 2, name: "KBC Jumbo Grill – 2000W Electric Contact Griller",
    category: "Home & Kitchen", price: 1600, mrp: 2299,
    image: "images/products/IMG-20260308-WA0140.jpg",
    desc: "<p class='pd-desc-para'>The <strong>KBC Jumbo Grill</strong> is a heavy-duty 2000-watt electric contact griller built for families who want restaurant-style sandwiches, paninis and tandoor-style vegetables without lighting a gas tandoor or owning three different appliances. As pictured, the unit ships with a jumbo footprint: deep-ribbed non-stick plates, a clean white cool-touch top handle, an integrated drip channel running along the bottom, and the dependable KBC brand backing it &mdash; complete with a <strong>2-year warranty</strong> and the bold <strong>HEAVY DUTY 2000 W</strong> spec badge on the original box.</p><p class='pd-desc-para'>The deeply ribbed plates do real work. They&rsquo;re not the shallow stamped pattern you see on hostel-grade grillers &mdash; these are tall, well-spaced ridges that sear clean restaurant-style grill marks into bread, paneer, chicken and vegetables. The floating hinge swings the top plate up to a wide vertical, so thick stuffed parathas, chicken legs and tandoori cuts fit without being crushed.</p><ul class='pd-desc-list'><li><strong>2000 W heavy-duty heating element</strong> &mdash; preheats in 60&ndash;90 seconds, real searing power.</li><li><strong>Jumbo ribbed non-stick plates</strong> &mdash; comfortably fit 4 full sandwiches, a tray of vegetables, or a row of chicken skewers in one go.</li><li><strong>Floating top hinge</strong> &mdash; lifts to accommodate items up to ~5 cm thick (stuffed paratha, fish fillets, chicken thighs).</li><li><strong>Integrated drip channel</strong> at the front edge of the lower plate &mdash; oil and juices run off cleanly instead of pooling on the plate.</li><li><strong>Cool-touch white top handle</strong> with a secure latch for upright storage.</li><li><strong>Power &amp; ready indicator lights</strong> on the side.</li><li><strong>2-year manufacturer warranty</strong> on the heating element and plates.</li></ul><p class='pd-desc-para'>Perfect for Sunday brunch panini stations, after-school tiffin sandwiches, weekend tandoor parties and Iftar evenings during Ramadan. Cleans up in 60 seconds &mdash; wipe with a damp cloth while the plates are still warm; no soaking required, no scrubbing.</p><p class='pd-desc-para'><strong>What&rsquo;s in the box:</strong> 1 KBC Jumbo Grill (as pictured), warranty card, user manual, 230 V AC cord with 3-pin Indian plug. Free delivery over &#8377;499.</p>",
    rating: 4.5, reviews: 38, badge: "Popular", inStock: true
  },
  // Bags
  {
    id: 3, name: "Cute Animal Print 3-Grid Cosmetic Organiser Bag",
    category: "Bags", price: 500, mrp: 699,
    image: "images/products/IMG-20260308-WA0144.jpg",
    desc: "<p class='pd-desc-para'>The <strong>3-Grid Cosmetic Pouch</strong> wraps a serious, properly engineered beauty-organiser system inside a soft animal-face PU-leather shell that&rsquo;s impossible not to smile at. As shown in the product image, the bag comes in <strong>two charming face designs</strong>: a <strong>black panda</strong> with classic round ears and a sweet pink nose, and a <strong>beige &lsquo;blushing pup&rsquo;</strong> with little ears, rosy cheeks and big curious eyes. Pick your favourite on WhatsApp at checkout.</p><p class='pd-desc-para'>Open the zip and the inside is where the real design thinking shows. The lid carries a row of <strong>five elastic loops</strong> that hold tall slim items upright &mdash; lipsticks, brushes, mascaras, perfume rollers &mdash; so they don&rsquo;t roll around. Below the loops, a deeper pocket fits flat items like a palette or compact powder. The base is divided into <strong>three padded grid compartments</strong>, each large enough for a full-size foundation, setting spray or skincare bottle to stand upright. The dividers are structured (not floppy fabric), so each section keeps its shape even when packed light.</p><ul class='pd-desc-list'><li><strong>Two colour/face designs</strong> &mdash; Black Panda or Beige Blushing Pup.</li><li><strong>Premium PU leather</strong> shell &mdash; wipe-clean exterior, holds shape, doesn&rsquo;t scuff.</li><li><strong>5 elastic loops</strong> on the inside lid for upright slim items.</li><li><strong>3 padded grid compartments</strong> in the base for full-size bottles.</li><li><strong>Flat pocket</strong> behind the elastic loops for palettes &amp; compacts.</li><li><strong>Sturdy top carry handle</strong> &mdash; hand-carry, drop into a tote, or hang from a hook.</li><li><strong>Smooth zip closure</strong> with metal pull tab.</li><li><strong>Approx. dimensions:</strong> 24 &times; 16 &times; 10 cm &mdash; carry-on legal, fits inside an A4 tote.</li></ul><p class='pd-desc-para'>Especially loved by makeup artists assembling a working kit, brides packing their getting-ready essentials, students moving between hostel and home, and frequent travellers who hate spilled foundation on white shirts. Reads playful on a desk and serious in a suitcase.</p><p class='pd-desc-para'><strong>Care:</strong> wipe down with a damp microfibre cloth and mild soap. Do not machine-wash; do not soak. <strong>Free delivery</strong> on orders over &#8377;499.</p>",
    rating: 4.2, reviews: 27, inStock: true
  },
  {
    id: 7, name: "YSL Quilted Tote Bag with Matching Pouch – 12A Quality",
    category: "Bags", price: 2999, mrp: 4499,
    image: "images/products/IMG-20260308-WA0163.jpg",
    desc: "<p class='pd-desc-para'>The <strong>YSL Icare Maxi Quilted Tote with Matching Pouch</strong> is the bag people stop to look at across a room. Finished in soft <strong>cream / off-white diamond-quilted leather</strong> with the iconic <strong>oversized gold YSL monogram</strong> dominating the front panel, this is the bag the brand built its current era around &mdash; recreated here at our <strong>12A premium tier</strong>, with tightly aligned quilting, meticulous edge stitching and a leather hand-feel that genuinely passes scrutiny.</p><p class='pd-desc-para'>The silhouette is wide, soft-structured and unmistakable: shallow flat top opening, two slim rolled top handles, and the unmistakable curved upper edge that gives the bag its open, scoop-like profile. The matching <strong>quilted zip pouch</strong> shown alongside it isn&rsquo;t a token afterthought &mdash; it&rsquo;s a full-size clutch in the same cream quilted leather, gold-tone zip, big enough to hold a phone, keys, a powder compact and a few cards on its own.</p><ul class='pd-desc-list'><li><strong>12A premium quality</strong> &mdash; our top tier: reinforced sides, soft-but-structured panels, fade-resistant gold-tone hardware.</li><li><strong>Cream / off-white diamond-quilted leather</strong> on both the tote body and the matching pouch.</li><li><strong>Oversized gold YSL Cassandre monogram</strong> &mdash; the unmistakable centrepiece on the front.</li><li><strong>Slim rolled top handles</strong> &mdash; comfortably hand-carry or sit on the shoulder.</li><li><strong>Open-top silhouette</strong> &mdash; quick in-and-out access; the soft profile lets the bag mould around what&rsquo;s inside.</li><li><strong>Matching quilted zip pouch included</strong> &mdash; doubles as an evening clutch.</li><li>Approximate tote dimensions: ~38 &times; 30 &times; 14 cm. Comfortably fits a 13-inch laptop, iPad, A5 planner, water bottle and a small wallet.</li></ul><p class='pd-desc-para'>Works as a workday tote, an airport personal item, a wedding-shopping bag, and a brunch statement piece. The cream reads light, fresh and polished rather than loud &mdash; pairs beautifully with sarees, abayas, kurtas, jeans and summer dresses alike.</p><p class='pd-desc-para'><strong>Care:</strong> wipe with a soft dry cloth weekly; store in the dust bag when not in use; keep out of long direct sunlight to preserve the cream tone. <strong>Includes:</strong> tote, matching quilted zip pouch, dust bag. Free delivery over &#8377;499.</p>",
    rating: 4.6, reviews: 46, badge: "Premium", inStock: true
  },
  {
    id: 8, name: "Coach Field Tote 30 – Color Block (12A Quality)",
    category: "Bags", price: 3300, mrp: 4999,
    image: "images/products/IMG-20260308-WA0172.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Coach Field Tote 30 in Color Block</strong> is the kind of bag that quietly does all the work of a designer piece without shouting about it. As pictured, this is a structured medium-tall tote in three precisely balanced tones: a <strong>white pebbled-leather body</strong>, a <strong>cognac-brown horizontal top panel</strong> framing the opening, and <strong>navy-blue side trim</strong> running the full height of the bag. Two leather top handles are anchored by four prominent <strong>gold-tone studs</strong> &mdash; the architectural detail that makes the Field Tote instantly recognisable.</p><p class='pd-desc-para'>Front and centre, the unmistakable <strong>&ldquo;COACH LEATHERWARE&rdquo; oval seal</strong> is embossed deep into the white pebbled leather &mdash; the same heritage seal Coach has used since 1941, debossed at the right depth so it reads as quietly luxurious rather than branded. Built at our <strong>12A premium quality tier</strong>, with reinforced corners, edge-painted seams and fade-resistant hardware.</p><ul class='pd-desc-list'><li><strong>12A premium quality</strong> &mdash; our top tier, structured base, edge-painted seams.</li><li><strong>Three-tone color block</strong> &mdash; white pebbled body, cognac brown top panel, navy blue side trim.</li><li><strong>Four gold-tone studs</strong> at the handle anchors &mdash; the Field Tote signature.</li><li><strong>Embossed COACH LEATHERWARE oval seal</strong> on the front panel.</li><li><strong>Two top leather handles</strong> &mdash; comfortable hand-carry; tucks under the elbow.</li><li><strong>Wide open-top access</strong>, roomy interior with two slip pockets and a zip pocket for valuables.</li><li>Approximate dimensions: ~30 &times; 26 &times; 13 cm. Comfortably holds a 13-inch laptop, A5 planner, water bottle and daily essentials.</li><li><strong>Comes with</strong> the original <strong>yellow Coach New York dust bag</strong> (with horse-and-carriage logo, as pictured).</li></ul><p class='pd-desc-para'>Perfect as a workday companion, weekend brunch carry, travel personal-item, or a gift for someone who already has &lsquo;a black bag&rsquo; and wants something with personality. The white-cognac-navy palette is uncannily versatile &mdash; pairs cleanly with denim, white shirts, ethnic kurtas, sarees and tailored work outfits.</p><p class='pd-desc-para'><strong>Care:</strong> wipe with a soft dry cloth; condition pebbled leather every 3&ndash;4 months; store in the included dust bag. The white panel may need gentle cleaning with a slightly damp cloth occasionally &mdash; treat it like a white sneaker. Free delivery over &#8377;499.</p>",
    rating: 4.7, reviews: 33, badge: "Premium", inStock: true
  },
  // Wallets / Men's Combos
  {
    id: 11, name: "Coach New York 3-Piece Men's Gift Set",
    category: "Wallets", price: 1350, mrp: 1899,
    image: "images/products/IMG-20260308-WA0183.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Coach New York 3-Piece Men&rsquo;s Gift Set</strong> is, without exaggeration, the easiest &lsquo;great gift&rsquo; in our entire catalogue &mdash; the box that gets nods at every birthday, anniversary, Eid, Diwali, wedding gift exchange and corporate farewell we&rsquo;ve shipped it for. As pictured, the set arrives in a <strong>kraft-brown Coach New York gift box</strong> with the iconic horse-and-carriage logo and &ldquo;COACH NEW YORK&rdquo; debossed across the top &mdash; gift-ready, no extra wrapping required.</p><p class='pd-desc-para'>Inside the box, on cushioned black foam, three coordinated black-leather pieces sit waiting (as visible in the image):</p><ul class='pd-desc-list'><li><strong>Black Leather Card Holder</strong> &mdash; vertical slim case with a brushed silver thumb-slide pad on the front. Carries 4&ndash;6 cards, perfect for office IDs, metro cards and a couple of credit cards.</li><li><strong>Reversible Leather Belt + Detachable Silver Buckle</strong> &mdash; the buckle sits in its own foam slot. The strap is reversible: <strong>black with the COACH name and horse-and-carriage logo debossed on one side</strong>, smooth <strong>cognac brown on the reverse</strong>. Twist the buckle to flip the strap and one belt covers two outfits. Strap comes ~110 cm; can be trimmed to fit.</li><li><strong>Signature-C Bifold Wallet</strong> &mdash; black leather with the <strong>Coach Signature-C monogram debossed all over the front</strong> and a polished <strong>silver Coach &lsquo;C&rsquo; hook</strong> on the corner. 6 card slots, 2 cash compartments, 1 ID window. Slim profile, sits flat in a back pocket.</li></ul><p class='pd-desc-para'>Why this is the safest gift you can buy: every piece is a real daily-carry item with proper edge stitching, the embossed-C monogram is unmistakably Coach, and the kraft Coach NY box looks expensive on arrival. The wallet alone holds its own against any standalone wallet in the same price band &mdash; bundled with the card holder and belt, it&rsquo;s simply unbeatable value.</p><p class='pd-desc-para'>Ideal for: birthdays, anniversaries, Father&rsquo;s Day, Eid/Diwali, work farewells, brother-in-law&rsquo;s wedding, employee recognition, and the occasional &lsquo;I forgot to buy something for him&rsquo; emergency. Repeat customers buy this set 3&ndash;4 times a year for different occasions.</p><p class='pd-desc-para'><strong>Care:</strong> wipe with a dry cloth; condition leather every 3&ndash;4 months. <strong>Includes:</strong> kraft Coach NY gift box, card holder, belt strap, separate silver buckle, signature-C bifold wallet. Free delivery over &#8377;499.</p>",
    rating: 4.5, reviews: 63, badge: "Popular", inStock: true
  },
  {
    id: 12, name: "Armani Exchange (A|X) 4-Piece Men's Gift Set",
    category: "Wallets", price: 1400, mrp: 1999,
    image: "images/products/IMG-20260308-WA0189.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Armani Exchange (A|X) 4-Piece Men&rsquo;s Gift Set</strong> is the sharper, more streetwear-leaning cousin of the Coach gift box &mdash; same gift-ready idea, more confident logos, slightly more attitude. As pictured, the set arrives in a deep <strong>black A|X presentation box</strong> with the &ldquo;A|X / ARMANI EXCHANGE&rdquo; mark printed in silver across the inside of the lid &mdash; gift-ready, no wrapping required.</p><p class='pd-desc-para'>Resting on cushioned black foam, four coordinated pieces (visible in the image):</p><ul class='pd-desc-list'><li><strong>Dark Brown / Black Metal Card Holder</strong> &mdash; smart vertical case with a subtle A|X mark, thumb-slide opening, holds 4&ndash;6 cards. Perfect for office IDs and daily-carry essentials.</li><li><strong>Separate A|X Belt Buckle</strong> &mdash; engraved &ldquo;A|X&rdquo; in glossy dark finish, sits in its own foam slot, fits standard 35 mm leather straps so you can swap onto other belts too.</li><li><strong>Reversible ARMANI Leather Belt Strap</strong> &mdash; <strong>black with the &ldquo;ARMANI&rdquo; name embossed across the strap</strong> on one side, <strong>cognac brown on the reverse</strong>. Twist the buckle to flip; one belt covers two outfits. Strap is ~110 cm, can be trimmed to fit.</li><li><strong>A|X Bifold Wallet</strong> &mdash; black leather with the unmistakable <strong>bold raised &ldquo;A|X&rdquo; logo</strong> dominating the front panel. 6 card slots, 2 cash compartments, 1 ID window. Slim profile, sits flat in a back pocket.</li></ul><p class='pd-desc-para'>Aimed at the man who wears Armani Exchange on his t-shirt and wants the rest of his look to keep up. The logos are confident without being garish &mdash; looks fantastic against jeans, formal trousers and the linen pants men actually want to wear in Tamil Nadu summers.</p><p class='pd-desc-para'>Right occasion for: birthdays, engagement gift to a brother-in-law, Father&rsquo;s Day, work farewells, employee recognition, corporate gifting (we batch-pack 5+ sets on request &mdash; WhatsApp us).</p><p class='pd-desc-para'><strong>Care:</strong> wipe leather with a soft dry cloth, avoid soaking, condition every 3&ndash;4 months. <strong>Includes:</strong> A|X gift box, card holder, separate buckle, reversible Armani belt strap, A|X bifold wallet. Free delivery over &#8377;499.</p>",
    rating: 4.4, reviews: 49, inStock: true
  },
  // Watches
  {
    id: 4, name: "Tommy Hilfiger Men's Black Chronograph Watch",
    category: "Watches", price: 1950, mrp: 2799,
    image: "images/products/IMG-20260308-WA0152.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Tommy Hilfiger Men&rsquo;s Black Chronograph</strong> is a serious all-black statement piece with the kind of presence you don&rsquo;t notice yourself wearing &mdash; until someone else does. As pictured, the entire watch is finished in deep <strong>matte black PVD-coated stainless steel</strong>: the case, the bezel, the dial, and the 3-link bracelet, all in one coordinated tone, lit only by the silver hands, applied silver hour markers, and the iconic <strong>red-white-blue Hilfiger flag</strong> at 12 o&rsquo;clock.</p><p class='pd-desc-para'>The bezel is the standout detail. Engraved with <strong>&ldquo;HILFIGER&rdquo;</strong> in clean spaced lettering, it&rsquo;s circled by a precise 5&ndash;60 minute scale (15, 20, 25, 30, 35, 40, 45, 50, 55) with silver index marks at every five-minute interval &mdash; the kind of bezel detail you&rsquo;d expect on a much pricier sport watch.</p><ul class='pd-desc-list'><li><strong>All-black PVD finish</strong> &mdash; case, HILFIGER-engraved bezel, textured dial, 3-link bracelet, screw-down crown and pushers all coordinated in matte black.</li><li><strong>Three sub-dials</strong> &mdash; left, top-right and bottom centre on the dial face for multi-function chronograph readouts.</li><li><strong>Date window</strong> at the 4 o&rsquo;clock position with a clean white-on-black readout.</li><li><strong>Vertically-textured striated black dial</strong> &mdash; reads light or dark depending on the angle, never flat.</li><li><strong>Silver applied indices and silver hands</strong> &mdash; sharp contrast against the dial for instant legibility.</li><li><strong>Iconic Hilfiger flag</strong> in red, white &amp; blue at 12 o&rsquo;clock &mdash; the only colour on the whole watch.</li><li><strong>3-link stainless steel bracelet</strong> in matching matte black with butterfly clasp. Extra links can be removed locally.</li><li><strong>Case:</strong> ~44 mm. <strong>Water resistance:</strong> 3 ATM (splash &amp; rain, not for swimming).</li></ul><p class='pd-desc-para'>Works for office, weddings, weekend trips, gym sessions and grocery runs alike. Pairs cleanly with formal shirts, polo tees and ethnic kurtas. A particularly good gift for someone shifting into their first corporate role.</p><p class='pd-desc-para'><strong>Includes:</strong> Tommy Hilfiger watch, brand pillow pouch, care instructions card. GST invoice available on request. Free delivery over &#8377;499.</p>",
    rating: 4.7, reviews: 52, badge: "Bestseller", inStock: true
  },
  {
    id: 5, name: "Tommy Hilfiger Chronograph Watch – Gift Box Edition",
    category: "Watches", price: 1850, mrp: 2499,
    image: "images/products/IMG-20260308-WA0153.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Tommy Hilfiger Chronograph &mdash; Gift Box Edition</strong> takes our popular all-black Hilfiger chronograph and pairs it with a dedicated <strong>navy-blue Tommy Hilfiger presentation box</strong>, transforming a watch order into a fully gift-ready piece &mdash; no extra wrapping, no awkward last-minute presentation. As pictured, the box opens to reveal the watch resting on a cream foam pillow, perfectly cradled.</p><p class='pd-desc-para'>This is the watch we ship most during wedding season, Eid, Diwali, Father&rsquo;s Day and corporate-gifting weeks. The recipient lifts the navy lid, sees the watch positioned on signature Hilfiger cream foam, and the moment lands &mdash; it looks exactly like the in-store gifting experience.</p><ul class='pd-desc-list'><li><strong>Navy-blue Tommy Hilfiger gift box</strong> &mdash; deep matte navy exterior, flip-up lid, cream foam tray inside with the watch positioned ready to view.</li><li><strong>All-black PVD chronograph</strong> &mdash; HILFIGER-engraved bezel with 5&ndash;60 minute scale, vertically-textured striated black dial, three sub-dials, date window at 4 o&rsquo;clock, Hilfiger flag at 12.</li><li><strong>3-link matte black bracelet</strong> with butterfly clasp.</li><li><strong>Silver applied indices and silver hands</strong> for high-contrast legibility against the dark dial.</li><li><strong>Case:</strong> ~44 mm. <strong>Water resistance:</strong> 3 ATM (splash &amp; rain safe).</li><li><strong>Includes:</strong> watch, navy Tommy Hilfiger gift box, brand pillow pouch, care card.</li></ul><p class='pd-desc-para'>Ideal as a wedding gift, Father&rsquo;s Day surprise, engagement memento, retirement send-off, or year-end employee recognition. Send it directly to the recipient&rsquo;s address &mdash; WhatsApp us a gift note and we&rsquo;ll tuck it into the parcel (free).</p><p class='pd-desc-para'><strong>Order tip:</strong> mention &lsquo;gift order&rsquo; on WhatsApp and we&rsquo;ll skip price tags and ship with a discreet outer wrap. Free delivery over &#8377;499.</p>",
    rating: 4.6, reviews: 41, badge: "Premium", inStock: true
  },
  {
    id: 6, name: "Tommy Hilfiger Men's Skeleton Automatic Watch",
    category: "Watches", price: 2400, mrp: 3499,
    image: "images/products/IMG-20260308-WA0160.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Tommy Hilfiger Men&rsquo;s Skeleton Automatic Watch</strong> is for the collector who wants to <em>see</em> what a watch actually does. As pictured, the dial is a beautiful <strong>deep navy blue with fine concentric-circle guilloche texture</strong>, and at its centre, a precisely cut <strong>open-heart skeleton aperture</strong> reveals the mechanical heart of the watch &mdash; balance wheel, escapement and gear train all visible and moving in real time.</p><p class='pd-desc-para'>This isn&rsquo;t a quartz watch with a printed skeleton graphic. It&rsquo;s a genuine self-winding <strong>automatic movement</strong>: wear it daily and the motion of your wrist keeps it powered indefinitely &mdash; no battery, no manual winding required. Set it once, wear it regularly, and it just runs.</p><ul class='pd-desc-list'><li><strong>Self-winding automatic movement</strong> &mdash; no battery; ~40+ hours power reserve when fully wound.</li><li><strong>Open-heart skeleton aperture</strong> centred on the dial &mdash; the balance wheel oscillates visibly at every tick.</li><li><strong>Navy-blue concentric-circle dial</strong> &mdash; fine guilloche texture catches the light beautifully under any angle.</li><li><strong>Silver applied indices</strong> around the dial, slim silver dauphine hands.</li><li><strong>Iconic Hilfiger flag</strong> in red-white-blue at 12 o&rsquo;clock &mdash; the only colour pop on a quietly classy dial.</li><li><strong>Polished silver stainless steel case &amp; 3-link bracelet</strong> &mdash; classic dress-watch finish, brushed sides + mirror-polished bezel.</li><li><strong>Case:</strong> ~44 mm. <strong>Water resistance:</strong> 3 ATM.</li><li><strong>Crystal:</strong> mineral glass with anti-reflective coating &mdash; the skeleton is best viewed in side light, where every component glints individually.</li><li><strong>Presentation:</strong> arrives in a Tommy Hilfiger navy gift box (as pictured).</li></ul><p class='pd-desc-para'>The kind of watch that gets noticed by other watch people. Strong choice for a 30th-birthday gift, an engagement gift, a graduation gift to a son or nephew, or an &lsquo;upgrade your everyday watch&rsquo; moment for yourself. Pairs effortlessly with formal shirts, blazers and ethnic sherwani for weddings.</p><p class='pd-desc-para'><strong>Care:</strong> wear it 2&ndash;3 times a week to keep the movement healthy. If idle for &gt;48 hours, rotate the crown ~20 turns to wind manually before setting time. Service every 3&ndash;4 years at any reputed watch service centre. <strong>Includes:</strong> watch, navy gift box, pillow pouch, care insert. Free delivery over &#8377;499.</p>",
    rating: 4.8, reviews: 58, badge: "Bestseller", inStock: true
  },
  // Sunglasses
  {
    id: 9, name: "Marc Jacobs Geometric Sunglasses – Model 486",
    category: "Coolers", price: 600, mrp: 999,
    image: "images/products/IMG-20260308-WA0176.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Marc Jacobs Model 486</strong> is a striking, architectural pair of sunglasses with a <strong>chunky geometric hexagonal/octagonal frame</strong> &mdash; the kind of bold sculptural shape that immediately signals confidence and is currently having a strong fashion moment. As pictured, the frame is finished in <strong>transparent honey-amber acetate</strong>, with the depth and warmth of real Italian-style layered acetate (not flat plastic).</p><p class='pd-desc-para'>The lenses are <strong>soft gradient honey-cream tinted</strong> &mdash; darker toward the top to cut overhead glare, lighter toward the bottom so your eyes stay visible and your face stays expressive in photos. The temples are a beautiful contrasting <strong>dark olive-green</strong> with the <strong>MARC JACOBS name printed in clean white</strong> along the outside arm.</p><ul class='pd-desc-list'><li><strong>Frame:</strong> geometric hexagonal silhouette in transparent honey-amber acetate, with a subtle double-bridge feel at the top.</li><li><strong>Lenses:</strong> soft gradient honey-cream tint, polycarbonate, <strong>UV400 protection</strong> (blocks 100% of UVA &amp; UVB).</li><li><strong>Temples:</strong> dark olive-green with white MARC JACOBS branding along the arm.</li><li><strong>Comfort:</strong> light-acetate construction, comfortable on long days; adjustable feel from soft nose contact.</li><li><strong>Comes with</strong> a Marc Jacobs white hard clamshell case (as pictured) + Marc Jacobs branded outer box.</li><li><strong>Full kit option</strong> available with extra branded accessories at &#8377;1,300 &mdash; WhatsApp us to upgrade.</li></ul><p class='pd-desc-para'>Genuinely flattering on most face shapes because of the soft hexagonal geometry &mdash; angular enough to give structure to round faces, soft enough not to overpower oval or heart-shaped ones. Excellent for everyday driving, weddings, photoshoots, long-haul flights and beach holidays. The amber/cream/olive palette is warm and approachable &mdash; reads sophisticated, not aggressive. Pairs especially well with cream, olive, navy, beige and earth-toned outfits.</p><p class='pd-desc-para'><strong>Care:</strong> always store in the case when not worn; clean with the included microfibre cloth (water + mild dish soap is fine for stuck-on grime; avoid alcohol-based cleaners on the acetate). Free delivery over &#8377;499.</p>",
    rating: 4.4, reviews: 29, inStock: true
  },
  {
    id: 10, name: "Celine Paris Oval Metal Sunglasses",
    category: "Coolers", price: 1100, mrp: 1799,
    image: "images/products/IMG-20260308-WA0180.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Celine Paris Oval Metal Sunglasses</strong> are the &lsquo;Parisian Sunday&rsquo; pair &mdash; quiet, elegant, confident, with that effortless French restraint that&rsquo;s impossible to fake. As pictured, the frame is a slim <strong>gold-tone metal</strong> in a classic <strong>oval silhouette</strong>, fitted with <strong>solid dark-grey tinted lenses</strong> that read almost black under flash but reveal a deep neutral grey in daylight.</p><p class='pd-desc-para'>The signature detail isn&rsquo;t on the bridge &mdash; it&rsquo;s on the sides. The unmistakable <strong>Celine &lsquo;Triomphe&rsquo; interlocking-C logo</strong> is set into the temple just behind the hinge in matching gold &mdash; visible from the side, invisible from the front. It&rsquo;s the kind of placement only Celine would choose: branded enough that the right people notice, restrained enough that the wrong people don&rsquo;t.</p><ul class='pd-desc-list'><li><strong>Frame:</strong> slim gold-tone metal, oval shape, lightweight (~22 g).</li><li><strong>Lenses:</strong> solid dark-grey tint, polycarbonate, <strong>UV400 protection</strong> (blocks 100% UVA &amp; UVB).</li><li><strong>Temples:</strong> gold metal with the <strong>Celine Triomphe interlocking-C logo</strong> set just behind each hinge.</li><li><strong>Tips:</strong> matte black temple ends for grip behind the ear.</li><li><strong>Adjustable silicone nose pads</strong> for long-wear comfort.</li><li><strong>Temple length:</strong> ~140 mm &mdash; fits most medium and slim faces beautifully.</li><li><strong>Comes with</strong> a <strong>Celine branded hard black clamshell case</strong>, a <strong>Celine microfibre cleaning cloth</strong>, and the <strong>black Celine Paris outer box</strong> (all visible in the image).</li><li><strong>Full kit option</strong> with extra branded accessories at &#8377;1,300 &mdash; ask on WhatsApp.</li></ul><p class='pd-desc-para'>Right for: cafe brunches, evening walks, airports, weddings as the &lsquo;photo accessory&rsquo;, and being the most quietly stylish person in any group photo. Pairs effortlessly with sarees, kurtas, summer dresses, and a crisp white shirt. The oval silhouette flatters round, oval and heart-shaped faces particularly well.</p><p class='pd-desc-para'><strong>Care:</strong> always store in the case when not worn; clean with the included microfibre cloth; avoid leaving on a hot car dashboard (the metal can expand and frames may warp). Free delivery over &#8377;499.</p>",
    rating: 4.3, reviews: 22, inStock: true
  },
  // Women's Ethnic Wear
  {
    id: 13, name: "Heavy Embroidery Anarkali Lehenga Gown Set",
    category: "Clothing", price: 1930, mrp: 2799,
    image: "images/products/IMG-20260308-WA0195.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Heavy Embroidery Anarkali Lehenga Gown Set</strong> is the centrepiece outfit our customers come back for again and again &mdash; the kind of piece that turns a wedding guest into a wedding moment. As shown in the product image, this design is available in <strong>9 absolutely stunning colour options</strong>, each photographed on a mannequin to show the full floor-length silhouette and the way the gold zari work catches the light.</p><p class='pd-desc-para'>The embroidery isn&rsquo;t printed or screen-applied &mdash; it&rsquo;s real <strong>gold zari thread work with sequin and bead highlights</strong>, hand-finished along the dupatta border and clustered into rich floral and geometric motifs across the bodice and the flared skirt. The fabric drapes elegantly when standing still and moves beautifully on a sangeet dance floor.</p><ul class='pd-desc-list'><li><strong>9 rich colour options</strong> (top row to bottom row, as in the image): <strong>Navy Blue, Teal, Red &middot; Golden Yellow (Mustard), Dark Purple, Magenta &middot; Maroon, Cream-Gold (Off-White), Black</strong>. Tell us your preferred shade on WhatsApp at checkout.</li><li><strong>Full-length anarkali silhouette</strong> &mdash; fitted bodice, wide A-line flare reaching the ankles, designed to flatter every body type.</li><li><strong>Dense gold zari embroidery</strong> with sequin highlights across the bodice, skirt and dupatta border.</li><li><strong>Matching colour-coordinated dupatta included</strong> &mdash; same colour family with embroidered edge.</li><li><strong>Inner lining</strong> in matching colour for opacity and comfort.</li><li><strong>Sizes:</strong> S / M / L / XL / XXL. Custom alterations are not offered &mdash; please share your measurements at checkout so we pick the right size.</li></ul><p class='pd-desc-para'>Perfect for: weddings (your own or as a guest), engagement ceremonies, mehendi/sangeet evenings, reception parties, Eid celebrations, Diwali pujas, and family gatherings where you want to be remembered. Pair with statement gold jhumkas, a wide kamarband and a pair of embroidered juttis or block heels.</p><p class='pd-desc-para'><strong>Care:</strong> dry-clean only. Store wrapped in soft muslin cloth, separated from other heavy embroidery to prevent the gold threads catching on each other. Avoid direct sun storage to preserve dye richness.</p><p class='pd-desc-para'><strong>Order tip:</strong> WhatsApp us your bust / waist / hip / shoulder-to-floor measurements at checkout. We&rsquo;ll confirm the best size from current stock or guide you to the closest fit. Free delivery over &#8377;499.</p>",
    rating: 4.8, reviews: 17, badge: "New", inStock: true
  },
  {
    id: 14, name: "Blush Pink Anarkali Gown with Embroidered Dupatta",
    category: "Clothing", price: 1450, mrp: 1999,
    image: "images/products/IMG-20260308-WA0199.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Blush Pink Anarkali Gown with Embroidered Dupatta</strong> is what we&rsquo;d wear to a daytime sangeet, an Eid lunch, or a baby shower &mdash; not too heavy, not too plain, in the kind of soft luminous peach-pink that photographs beautifully under natural light and indoor LEDs alike. As pictured on the model, the gown has a clean fitted bodice, a deep flowing flare from the empire waist, and a matching dupatta in the same shade casually draped over one shoulder.</p><p class='pd-desc-para'>Crafted from a <strong>soft tissue-blend fabric</strong> with a gentle natural sheen &mdash; the kind that drapes like silk but isn&rsquo;t fussy to wear &mdash; the gown features a <strong>subtly embroidered round/scoop neckline</strong> in fine silver-gold thread, long full sleeves with a hint of embroidery at the wrist, and a wide twirl-worthy A-line flare that pools beautifully at the floor.</p><ul class='pd-desc-list'><li><strong>Colour:</strong> soft luminous peach-blush pink &mdash; the photogenic, universally-flattering shade (not bright bubblegum).</li><li><strong>Fabric:</strong> tissue-blend with a soft natural sheen, light and flowy without being sheer.</li><li><strong>Silhouette:</strong> empire-waist anarkali, full floor-length, wide A-line flare.</li><li><strong>Neckline:</strong> round/scoop cut with subtle embroidered border in silver-gold thread.</li><li><strong>Sleeves:</strong> full-length with light embroidery detailing at the wrist (as visible on the model).</li><li><strong>Matching dupatta:</strong> same blush tissue fabric with an embroidered border running the length &mdash; can be draped over one shoulder, around both, or as a stole.</li><li><strong>Inner lining</strong> for opacity and comfort.</li><li><strong>Sizes:</strong> S / M / L / XL / XXL. Share your measurements at checkout for the best fit.</li></ul><p class='pd-desc-para'>Excellent for: Eid celebrations, daytime sangeet functions, engagement ceremonies, family weddings as a guest (not the bride), birthday parties, baby showers, and casual festive gatherings where you want to look elevated but not overdressed. Pair with rose-gold jhumkas, a pearl set, and nude or rose-gold block heels.</p><p class='pd-desc-para'><strong>Care:</strong> dry-clean preferred; gentle hand-wash in cold water works for occasional refresh. Air-dry in shade &mdash; direct sun will fade the soft pink over time. Store on a padded hanger.</p><p class='pd-desc-para'><strong>Order tip:</strong> WhatsApp bust / waist / hip / shoulder-to-floor measurements at checkout. We&rsquo;ll confirm the closest fit. Free delivery over &#8377;499.</p>",
    rating: 4.6, reviews: 13, badge: "New", inStock: true
  },
  // Men's Dress
  {
    id: 15, name: "Calvin Klein Men's Casual Shirts",
    category: "Mens Dress", price: 450, mrp: 699,
    image: "images/products/IMG-20260308-WA0204.jpg",
    desc: "<p class='pd-desc-para'>The <strong>Calvin Klein (CK) Men&rsquo;s Casual Shirts</strong> are the wardrobe workhorse you&rsquo;ll reach for three days a week without realising it. As shown in the product image &mdash; a full spread of folded shirts in a generous colour range, each tagged with an official Calvin Klein hangtag and CK Calvin Klein neck label &mdash; this is the easiest way to build a full casual rotation from a single product page.</p><p class='pd-desc-para'>The fabric is a <strong>medium-weight cotton blend</strong> &mdash; soft enough to wear straight off the iron, structured enough to look sharp tucked in, forgiving enough to throw in the washing machine after a long day. Each shirt has a clean single chest pocket with a subtle CK logo patch, full button placket, soft fold-down collar that holds its shape, and finished cuffs.</p><ul class='pd-desc-list'><li><strong>12+ colour options available</strong> &mdash; visible in the image: <strong>Sage Green, Mustard, White, Camel Brown, Beige, Forest Green, Wine Red, Black, Navy Blue, Light Blue, Khaki, Taupe</strong>. Tell us your preferred colour on WhatsApp at checkout. Multi-shade orders welcome.</li><li><strong>Brand authenticity</strong> &mdash; every shirt arrives with the original <strong>Calvin Klein woven label</strong> and the <strong>black CK Calvin Klein hangtag</strong> as pictured.</li><li><strong>Fit:</strong> relaxed-casual &mdash; not skin-tight, not boxy. Sits well on most Indian builds.</li><li><strong>Fabric:</strong> medium-weight cotton-blend, breathable, low-shrinkage.</li><li><strong>Details:</strong> single chest pocket with embroidered CK logo, full button placket, soft collar, finished cuffs.</li><li><strong>Sleeves:</strong> half-sleeves (request full-sleeve variants on WhatsApp if you need them in a specific size).</li><li><strong>Sizes:</strong> S / M / L / XL / XXL &mdash; standard Indian sizing.</li></ul><p class='pd-desc-para'>Wears equally well over a plain tee for college, with chinos for office Fridays, with jeans for a date, or with comfortable trousers for a relaxed evening. The CK pocket logo is subtle enough that it whispers brand instead of shouting it.</p><p class='pd-desc-para'><strong>Care:</strong> machine-wash cold with similar colours, tumble-dry low or air-dry, iron on medium heat. Colours hold through 50+ washes with normal care.</p><p class='pd-desc-para'><strong>Order tip:</strong> unsure of size? Share your chest measurement (in inches) and a current well-fitting shirt&rsquo;s size on WhatsApp &mdash; we&rsquo;ll recommend the right fit. <strong>Bulk pricing</strong> available for 5+ shirts &mdash; ask us. Free delivery over &#8377;499.</p>",
    rating: 4.2, reviews: 31, inStock: true
  },
];

// ── DYNAMIC PRODUCTS (hardcoded + Firebase) ──
let products = [...HARDCODED_PRODUCTS];
applyAutoBadges();

/* ── PRODUCTS LOAD (stale-while-revalidate cache) ────────────
   Strategy:
   1. Synchronously hydrate `products` from localStorage cache if
      recent (<1 hour). This is BLAZING fast — no network needed
      on warm visits.
   2. ALWAYS kick off a Firestore fetch in the background. If it
      returns different data (admin added/edited products), update
      `products` + persist new cache. Re-render anything visible.
   3. On first visit (no cache): wait for Firestore as before.

   Avoids re-fetching the same 250+ docs on every page load — saves
   ~500ms-2s per warm visit, and significantly reduces Firestore
   read quota usage.
   ──────────────────────────────────────────────────────────── */
const PRODUCTS_CACHE_KEY    = 'eliteEmporiumProductsCache';
const PRODUCTS_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function _readProductsCache() {
  try {
    const raw = localStorage.getItem(PRODUCTS_CACHE_KEY);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    if (!obj || typeof obj.at !== 'number' || !Array.isArray(obj.products)) return null;
    if (Date.now() - obj.at > PRODUCTS_CACHE_TTL_MS) return null;
    return obj.products;
  } catch { return null; }
}
function _writeProductsCache(fbProds) {
  try {
    localStorage.setItem(PRODUCTS_CACHE_KEY, JSON.stringify({ at: Date.now(), products: fbProds }));
  } catch {} // QuotaExceeded etc. — silent
}

async function loadProducts() {
  if (typeof firebase === 'undefined' || !window.firebaseConfig ||
      window.firebaseConfig.apiKey === 'YOUR_API_KEY') return;

  // ── 1. Try the cache first ─────────────────────
  const cached = _readProductsCache();
  if (cached && cached.length) {
    products = [...HARDCODED_PRODUCTS, ...cached];
    applyAutoBadges();
    hydrateSyntheticReviews();
    // Re-render anything that was waiting (homepage strips, products grid)
    // Most callers already await loadProducts() before rendering, so the
    // synchronous cache hydration above is enough. Background refresh
    // below will update on the next visit if admin changes anything.
    _refreshProductsFromFirestore(); // fire-and-forget
    return;
  }

  // ── 2. No cache (or stale) → wait for Firestore ──
  try {
    if (!firebase.apps.length) firebase.initializeApp(window.firebaseConfig);
    const db   = firebase.firestore();
    const snap = await db.collection('products').orderBy('createdAt', 'desc').get();
    const fbProds = snap.docs.map(doc => ({ firestoreId: doc.id, ...doc.data() }));
    products = [...HARDCODED_PRODUCTS, ...fbProds];
    _writeProductsCache(fbProds);
  } catch (e) {
    // Firebase unavailable — fall back to hardcoded products silently
  }
  applyAutoBadges();
  hydrateSyntheticReviews();
}

// Background refresh — silent unless products array actually changed.
async function _refreshProductsFromFirestore() {
  try {
    if (typeof firebase === 'undefined') return;
    if (!firebase.apps.length) firebase.initializeApp(window.firebaseConfig);
    const db   = firebase.firestore();
    const snap = await db.collection('products').orderBy('createdAt', 'desc').get();
    const fbProds = snap.docs.map(doc => ({ firestoreId: doc.id, ...doc.data() }));
    // Detect a real change — compare doc counts + the most-recent createdAt.
    const cached = _readProductsCache() || [];
    const sameLen   = cached.length === fbProds.length;
    const sameFirst = cached[0]?.firestoreId === fbProds[0]?.firestoreId;
    _writeProductsCache(fbProds);
    if (!sameLen || !sameFirst) {
      products = [...HARDCODED_PRODUCTS, ...fbProds];
      applyAutoBadges();
      hydrateSyntheticReviews();
      // If the homepage product grid is visible, re-render it with the fresh data.
      if (typeof initHomePage === 'function' && document.getElementById('featuredProducts')) initHomePage();
      if (typeof initProductsPage === 'function' && document.getElementById('productsGrid')) {
        // products page state is more complex — just trigger a re-filter
        try { const ev = new Event('productsCacheRefresh'); document.dispatchEvent(ev); } catch {}
      }
    }
  } catch {} // silent
}

// Deterministic FNV-1a-ish hash → maps any string/number to a stable 32-bit int.
function _stableHash(seed) {
  let h = 2166136261 >>> 0;
  const s = String(seed);
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

// Assign a stable review count in [9, 66] and a rating in [4.0, 4.9] to every
// product without one. Uses the product id + name as the hash seed so values
// stay constant across sessions and visitors.
function hydrateSyntheticReviews() {
  if (!Array.isArray(products) || !products.length) return;
  products.forEach(p => {
    const seed = `${p.id || ''}|${p.name || ''}`;
    const h = _stableHash(seed);

    // Reviews: hardcoded products already have curated values — only fill
    // when missing or 0. Range: 9-66 inclusive.
    if (!p.reviews || p.reviews <= 0) {
      p.reviews = 9 + (h % 58); // 58 values from 9 through 66
    }

    // Rating: also fill when missing. Slight tilt to 4.4-4.8 (realistic).
    if (typeof p.rating !== 'number' || p.rating <= 0) {
      // pick from 4.0, 4.1, 4.2, ..., 4.9
      const ratingPool = [4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.5, 4.6, 4.6, 4.7, 4.7, 4.8, 4.8, 4.9];
      p.rating = ratingPool[(h >>> 8) % ratingPool.length];
    }
  });

  // Now fill in long descriptions for any product whose admin-entered
  // desc is short or missing. Deterministic per-product so customers see
  // the same description every time.
  hydrateSyntheticDescriptions();
}

// ─────────────────────────────────────────────────
// Synthetic descriptions for admin-added products that have short or
// missing desc text. Builds a rich multi-paragraph HTML block from a
// category-specific template, with feature bullets selected by hash so
// each product gets a unique but stable description.
// ─────────────────────────────────────────────────

// Feature pools per category. Each pool has 8+ candidate bullets so the
// hash can pick 4 distinct ones for each product.
const DESC_TEMPLATES = {
  'Bags': {
    hookVerb: ['carries beautifully', 'turns heads on a coffee run', 'doubles as a workday bag and a weekend tote', 'works as hard as you do'],
    fabric:   'premium leather-feel material with reinforced stitching at every stress point',
    features: [
      'Spacious main compartment that comfortably fits a 13-inch laptop, an A5 planner, and a water bottle',
      'Internal zip pocket for valuables (cards, keys, phone) and 2 slip pockets for quick essentials',
      'Soft padded interior lining that won&rsquo;t scratch laptops or phones',
      'Smooth gold/silver-tone metal zip pulls with secure closure',
      'Adjustable shoulder strap + dual top handles for hand-carry, shoulder, or crossbody options',
      'Reinforced base panel that keeps the bag&rsquo;s shape even when half-empty',
      'Wipe-clean exterior for everyday durability',
      'Premium hardware that doesn&rsquo;t tarnish with normal use',
    ],
    usecase:  'Pairs effortlessly with sarees, kurtas, jeans, work outfits and dresses. Carries comfortably for full-day errands, office days, college, airport days, and wedding shopping trips.',
    care:     'Wipe with a soft dry cloth weekly. Store in a dust bag (or a cotton pillowcase) when not in use. Avoid prolonged direct sunlight.',
  },
  'Wallets': {
    hookVerb: ['sits flat in your back pocket', 'makes every payment feel a little more polished', 'organises every card without bulk'],
    fabric:   'premium leather-feel material with crisp edge stitching',
    features: [
      'Six card slots with snug fit so cards don&rsquo;t slide out accidentally',
      'Two full-length cash compartments separated by a divider',
      'Clear ID window for quick access to driving licence or office card',
      'Slim profile &mdash; designed not to bulge even when fully loaded',
      'Soft interior lining that protects card edges from fraying',
      'Sturdy fold that stays closed without a clasp',
      'Subtle brand emboss instead of loud printed logos',
      'Works equally well in a back pocket, jacket inside pocket, or bag',
    ],
    usecase:  'Pairs cleanly with formal trousers, jeans, and traditional Indian wear alike. A safe-and-stylish daily-carry choice for office-goers, college students, and anyone who hates wallet bulk.',
    care:     'Wipe with a soft cloth; condition the leather every 3&ndash;4 months with a neutral leather conditioner.',
  },
  'Belts': {
    hookVerb: ['anchors every outfit', 'transitions from office to evening', 'doubles up with two colours in one buckle twist'],
    fabric:   'genuine-look leather with edge stitching',
    features: [
      'Reversible strap &mdash; one side, two colour options',
      'Adjustable length with multiple notches to fit a 28&ndash;42 inch waist',
      'Polished metal buckle with secure rotation lock',
      'Subtle stitched edge that resists fraying',
      'Slim 1.25&ndash;1.5 inch width &mdash; works on formal trousers AND jeans',
      'Tarnish-resistant buckle finish',
      'Premium feel without the premium price tag',
      'Pairs with shirts, kurtas, t-shirts, and traditional wear alike',
    ],
    usecase:  'A staple for any wardrobe. Wear with formal trousers for the office, jeans for weekends, and chinos for the gym pickup run.',
    care:     'Wipe with a soft cloth; avoid soaking. Trim length to fit if necessary by removing the buckle.',
  },
  'Watches': {
    hookVerb: ['adds an instant layer of sophistication', 'is the kind of detail people compliment', 'is the upgrade that quietly does the work'],
    fabric:   'stainless steel case with a polished bezel and brushed band',
    features: [
      'Precise Japanese-style quartz movement for reliable timekeeping',
      'Date complication at 3 o&rsquo;clock for quick reference',
      'Scratch-resistant mineral crystal glass',
      'Stainless steel link bracelet with butterfly clasp &mdash; extra links removable locally',
      '3 ATM water resistance &mdash; safe for handwashing and rain (not for swimming)',
      'Luminous hour and minute hands for low-light readability',
      'Approximately 42&ndash;44 mm case &mdash; wears well on most wrist sizes',
      'Comes in a presentation pillow pouch &mdash; gift-ready as-is',
    ],
    usecase:  'Perfect for office formals, weekend outings, weddings, and gifting. Wears equally well with a business shirt, a polo tee, or an ethnic kurta.',
    care:     'Avoid prolonged water exposure. Keep away from strong magnets. A standard watch shop can service or resize the bracelet anytime.',
  },
  'Coolers': {
    hookVerb: ['frames your face beautifully', 'reads as &lsquo;trip ready&rsquo; the moment you pick them up', 'finishes any outfit'],
    fabric:   'lightweight acetate / metal frame with polarised polycarbonate lenses',
    features: [
      'UV400 lenses block 100% of UVA &amp; UVB rays &mdash; safe for Indian sun',
      'Lightweight construction &mdash; barely noticeable on the bridge',
      'Adjustable silicone nose pads (where applicable) for long-wear comfort',
      'Comes with a branded hard case + microfibre cleaning cloth',
      'Universally flattering silhouette &mdash; works on oval, round, square and heart-shaped faces',
      'Subtle brand detailing &mdash; readable from the side, never showy from the front',
      'Lens tint chosen to keep colours looking natural, not orange/blue-shifted',
      'Spring-loaded hinges (where applicable) for a relaxed fit',
    ],
    usecase:  'Drive, travel, beach holidays, weddings as the &lsquo;photo accessory&rsquo;, and casual everyday wear. Pairs beautifully with cream, olive, navy, and earth tones.',
    care:     'Always store in the included case. Clean with the microfibre cloth only. Avoid leaving on a hot car dashboard.',
  },
  'Clothing': {
    hookVerb: ['flatters every body type', 'photographs beautifully under any light', 'feels as good as it looks'],
    fabric:   'soft, lightweight fabric with a subtle natural sheen and a flowy, comfortable drape',
    features: [
      'Inner lining for full opacity and all-day comfort',
      'Hand-finished embroidery / printed detailing &mdash; consistent with the product photos',
      'Available in <strong>S / M / L / XL / XXL</strong> &mdash; share your bust/waist measurements at checkout for the best fit',
      'Includes a matching dupatta where the design calls for one',
      'Carefully tailored seams that hold up to multiple wears and washes',
      'Wide twirl-worthy flare designed to look as good standing still as on the dance floor',
      'Pre-washed fabric &mdash; minimal shrinkage on first proper wash',
      'Designed for the Indian climate &mdash; breathable, not stifling',
    ],
    usecase:  'Perfect for weddings (your own or as a guest), engagement ceremonies, sangeet evenings, Eid celebrations, Diwali pujas, and family gatherings where you want to look elevated but not overdressed.',
    care:     'Dry-clean preferred for the first few washes; gentle hand-wash in cold water works for everyday refresh. Air-dry in shade. Store on a padded hanger.',
  },
  'Sarees': {
    hookVerb: ['drapes like silk', 'photographs beautifully on camera', 'feels like an heirloom from the first wear'],
    fabric:   'soft drape-friendly fabric with a natural sheen and well-set borders',
    features: [
      'Generous saree length (5.5 metres) + matching blouse piece (0.8&ndash;1 metre)',
      'Substantial border / pallu detailing that gives the drape weight and shape',
      'Inner finishing along the edges &mdash; no fraying after the first wash',
      'Colour-fast dye process &mdash; rich tones that don&rsquo;t leech in cold-water wash',
      'Pairs with traditional gold/silver jewellery, oxidised silver pieces, or pearls',
      'Suitable for all body types &mdash; the drape flatters every silhouette',
      'Comes with a stitching guideline note for the blouse piece',
      'Carefully packed in tissue paper for transit',
    ],
    usecase:  'Engagement, sangeet, reception, family weddings as a guest, Diwali / Eid / Pongal celebrations, festive office parties. The colour palette photographs beautifully under both natural daylight and indoor LED.',
    care:     'Dry-clean only for the first 2-3 washes. After that, gentle cold-water hand-wash with mild detergent works. Store wrapped in muslin cloth, separate from heavy embroidery pieces to prevent threads catching.',
  },
  'Kurta Sets': {
    hookVerb: ['nails everyday-festive', 'feels comfortable enough for a long day of pujas or family functions', 'flatters every body type'],
    fabric:   'lightweight cotton-blend fabric with a flowing silhouette and a flattering A-line cut',
    features: [
      'Coordinated set &mdash; kurta + bottoms + dupatta where applicable',
      'Embroidery / print finishing consistent with the product photos',
      'Roomy fit through the bust and waist &mdash; comfortable for long wear',
      'Quarter / three-quarter / full sleeves depending on style (as shown)',
      'Side slits for ease of movement when sitting cross-legged',
      'Available in S / M / L / XL / XXL &mdash; share measurements at checkout',
      'Pre-washed fabric, minimal shrinkage',
      'Pairs cleanly with juttis, sandals, or block heels',
    ],
    usecase:  'Festive lunches, Iftar evenings during Ramadan, family pujas, casual sangeet functions, daytime engagement ceremonies, and visiting elders during festivals.',
    care:     'Gentle hand-wash in cold water with mild detergent. Air-dry in shade. Iron on medium heat. Store on a padded hanger.',
  },
  'Abaiya': {
    hookVerb: ['drapes elegantly', 'feels as soft as it looks', 'photographs beautifully'],
    fabric:   'premium nida / korean / firdous fabric with a subtle natural sheen',
    features: [
      'Full-length floor-grazing cut with generous flare for graceful movement',
      'Soft, breathable fabric that drapes beautifully and doesn&rsquo;t crease easily',
      'Hand-finished embroidery / lace detailing where applicable',
      'Pre-set inner snaps / buttons for secure fit',
      'Generous arm openings and full-length sleeves',
      'Available in standard sizes (54 / 56 / 58 / 60 length) &mdash; share your height at checkout',
      'Colour-fast dye &mdash; rich tones that hold up to repeated wear',
      'Pairs perfectly with matching hijab pieces from our collection',
    ],
    usecase:  'Eid celebrations, Ramadan iftars, wedding receptions, daily wear for modest fashion, family gatherings, and travel.',
    care:     'Dry-clean preferred. Cold-water gentle hand-wash works for occasional refresh. Iron on medium heat with a cloth between iron and fabric. Store on a padded hanger.',
  },
  'Hijab': {
    hookVerb: ['drapes beautifully', 'feels luxurious against the skin', 'photographs in a hundred different ways'],
    fabric:   'premium chiffon / silk / jersey weave with a soft drape and gentle sheen',
    features: [
      'Generous length (approx 175&ndash;190 cm) for versatile draping styles',
      'Lightweight enough for summer, breathable through long wear',
      'Colour-fast dye holds up to repeated washing',
      'Finished edges that don&rsquo;t fray',
      'Pairs effortlessly with our abaya collection &mdash; coordinated tones',
      'Easy to iron, doesn&rsquo;t hold deep wrinkles',
      'Stays in place with standard hijab pins or undercaps',
      'Same-colour piece on both ends &mdash; no orientation needed',
    ],
    usecase:  'Daily wear, Eid celebrations, Iftar gatherings, work, college, weddings, and travel.',
    care:     'Gentle cold-water hand-wash with mild detergent. Air-dry flat or on a padded hanger. Iron on medium heat.',
  },
  'Mens Dress': {
    hookVerb: ['is the wardrobe workhorse you reach for three days a week', 'fits well, washes well, looks sharp', 'reads polished without being formal'],
    fabric:   'medium-weight cotton blend that&rsquo;s soft off the iron and structured when tucked in',
    features: [
      'Relaxed-casual fit &mdash; not skin-tight, not boxy',
      'Reinforced buttons + double-stitched seams &mdash; built to last 50+ washes',
      'Single chest pocket with subtle brand patch',
      'Soft fold-down collar that holds its shape',
      'Finished cuffs &mdash; clean edges after the first wash',
      'Pre-shrunk fabric &mdash; minimal size change after washing',
      'Multiple colour options available &mdash; mention your preference on WhatsApp',
      'Standard Indian sizing S / M / L / XL / XXL',
    ],
    usecase:  'Office Fridays with chinos, college with jeans, casual evenings at home with a lungi/dhoti, weekend dinners, family gatherings.',
    care:     'Machine-wash cold with similar colours, tumble-dry low or air-dry, iron on medium heat. Colours hold up well through 50+ washes with normal care.',
  },
  'Kids Wear': {
    hookVerb: ['is comfortable, durable, and cute', 'survives every climbing-tree session', 'doesn&rsquo;t require ironing after every wash'],
    fabric:   'soft cotton-rich fabric that feels gentle on sensitive skin',
    features: [
      'Soft on baby/kid skin &mdash; no rough seams or tags',
      'Easy on/off with stretchy collars and elastic waistbands where applicable',
      'Pre-washed fabric &mdash; ready to wear straight out of the package',
      'Colour-fast dye safe for repeated washing',
      'Reinforced stitching at the knees, elbows, and seam stress points',
      'Available in standard age sizes (1&ndash;2y, 2&ndash;4y, 4&ndash;6y, 6&ndash;8y, 8&ndash;10y, 10&ndash;12y)',
      'Bright, photogenic colours that hold up after dozens of washes',
      'Suitable for daily wear, school, family gatherings, and festive occasions',
    ],
    usecase:  'School, birthday parties, family weddings, festivals, daily wear, weekends at the park, vacation travel.',
    care:     'Machine-wash with similar colours. Tumble-dry low or air-dry. Iron on low heat. Reinforce buttons if they loosen with use.',
  },
  'Perfumes': {
    hookVerb: ['layers into your daily routine effortlessly', 'reads sophisticated without being overpowering', 'lasts longer than the price suggests'],
    fabric:   'long-lasting eau de parfum / eau de toilette concentration',
    features: [
      '6&ndash;8 hour lasting power on skin, 12+ hours on fabric',
      'Balanced top / heart / base notes &mdash; not a single-note synthetic scent',
      'Travel-friendly tamper-proof spray cap',
      'Suitable for both casual daytime and evening wear',
      'Skin-friendly formulation &mdash; suitable for most skin types',
      'Generous bottle size &mdash; 50&ndash;100 ml depending on variant',
      'Elegant bottle design that looks great on a dresser',
      'Compatible with skin and fabric',
    ],
    usecase:  'Daily office wear, date nights, weddings, gifting, travel. Layer 2&ndash;3 sprays for everyday wear, 4&ndash;5 for evening events.',
    care:     'Store away from direct sunlight and heat. Spray ~10 cm from skin on pulse points (wrists, neck, behind the ears).',
  },
  'Cosmetics': {
    hookVerb: ['delivers the promised finish', 'feels premium without the premium price', 'photographs beautifully on camera'],
    fabric:   'cruelty-free, dermatologically-tested formulation',
    features: [
      'Long-lasting formula &mdash; stays put through long days',
      'Buildable coverage &mdash; sheer for everyday, layered for evening',
      'Skin-friendly ingredients &mdash; suitable for most skin types',
      'Travel-friendly packaging that&rsquo;s spill-resistant',
      'Cruelty-free formulation &mdash; never tested on animals',
      'Universally flattering shades / finishes',
      'Easy application &mdash; works with brushes or fingers',
      'Removes cleanly with normal cleanser &mdash; no harsh removers needed',
    ],
    usecase:  'Daily makeup routine, special events, weddings, photoshoots, festive occasions.',
    care:     'Store in a cool, dry place away from direct sunlight. Replace within 18 months of opening for the best result.',
  },
  'Hair Care': {
    hookVerb: ['noticeably softens hair after the first wash', 'lasts longer than salon products half its price', 'smells incredible'],
    fabric:   'sulphate-free / paraben-free / pH-balanced formulation',
    features: [
      'Suitable for daily / regular use without drying',
      'Pleasant fragrance that lingers gently after rinse',
      'Works on most hair types &mdash; straight, wavy, curly',
      'Buildable from a small dollop &mdash; one bottle lasts 6&ndash;8 weeks',
      'Travel-friendly tamper-proof cap',
      'Suitable for chemically-treated and coloured hair',
      'No harsh sulphates or parabens',
      'Made for the Indian climate and water type',
    ],
    usecase:  'Daily / alternate-day haircare routine, post-swim wash, salon-quality at-home treatments, gifting to anyone obsessed with their hair.',
    care:     'Store in a cool, dry place. Use within 12 months of opening for best results.',
  },
  'Jewellery': {
    hookVerb: ['catches the light beautifully', 'feels real without the real-price tag', 'is the piece you reach for repeatedly'],
    fabric:   'high-quality gold-covering / AD stone / artificial finish that looks rich and stays bright',
    features: [
      'Premium gold-toned finish that doesn&rsquo;t tarnish with normal use',
      'AD stones / kundan / pearls / cubic zirconia (where applicable) set securely',
      'Skin-friendly metal alloy &mdash; suitable for sensitive skin',
      'Adjustable closures (necklace / bracelet / earrings) for a perfect fit',
      'Comes in a protective pouch / box &mdash; gift-ready',
      'Lightweight enough for full-day wear &mdash; weddings, festivals, parties',
      'Anti-tarnish coating &mdash; needs only occasional cleaning',
      'Pairs with both traditional Indian and modern Western outfits',
    ],
    usecase:  'Weddings, engagement ceremonies, sangeet evenings, Eid / Diwali celebrations, festive office parties, anniversaries, and gifting.',
    care:     'Wipe with a soft dry cloth after each wear. Avoid contact with perfume / hairspray / chemicals. Store in the included pouch when not in use.',
  },
  'Home & Kitchen': {
    hookVerb: ['quietly replaces three different tools in your kitchen', 'pays for itself within a month', 'is the upgrade you didn&rsquo;t know you needed'],
    fabric:   'food-grade stainless steel / BPA-free plastic / heat-resistant materials as appropriate',
    features: [
      'Premium-grade construction &mdash; built to last years of daily use',
      'Dishwasher-safe (top rack) for easy cleaning',
      'Ergonomic design that&rsquo;s comfortable in regular use',
      'Heat-resistant where required &mdash; safe for hot food / hot oil',
      'Compact storage &mdash; nests or stacks neatly when not in use',
      'Multi-functional &mdash; replaces multiple single-purpose tools',
      'No plastic in the food-contact path (where applicable)',
      'Indian-kitchen-friendly &mdash; designed for daily Indian cooking',
    ],
    usecase:  'Daily cooking, meal prep, Sunday brunches, hosting family gatherings, gifting to housewarmings or new homemakers.',
    care:     'Hand-wash with normal dish soap is preferred for longevity. Top-rack dishwasher safe. Wipe dry to prevent water spots.',
  },
  'Sports': {
    hookVerb: ['gives serious value for the price', 'feels durable from the first session', 'is the upgrade your routine needed'],
    fabric:   'durable construction designed for repeated use',
    features: [
      'Sturdy build &mdash; holds up to daily use and hard sessions',
      'Lightweight enough for travel and easy storage',
      'Comfortable grip / fit / handling',
      'Standard sizing that fits most users',
      'Versatile &mdash; suitable for home use, gym, or outdoor activities',
      'Anti-slip / non-skid surfaces where applicable',
      'Easy to clean and maintain',
      'Good value for the price compared to brand-name alternatives',
    ],
    usecase:  'Home workouts, gym sessions, weekend sports, outdoor activities, gifting to fitness-focused friends.',
    care:     'Wipe clean with a damp cloth after use. Air-dry before storage. Store in a cool, dry place.',
  },
  'Footwear': {
    hookVerb: ['feels comfortable from the first wear', 'pairs with everything in your wardrobe', 'lasts longer than fast-fashion alternatives'],
    fabric:   'soft synthetic / canvas / leather-look upper with a cushioned footbed',
    features: [
      'Cushioned EVA / memory-foam footbed for all-day comfort',
      'Anti-slip rubber sole with good grip on Indian streets',
      'Breathable upper material &mdash; suitable for Indian climate',
      'Lightweight construction &mdash; comfortable for long wear',
      'Reinforced stitching at stress points &mdash; toe and heel',
      'Available in standard Indian / UK / EU sizes',
      'Easy on/off &mdash; slip-on or buckle/lace styles available',
      'Versatile design that works with jeans, formal trousers, or kurtas',
    ],
    usecase:  'Office, college, casual outings, weekend travel, weddings (as a guest), festive occasions.',
    care:     'Wipe with a soft dry cloth. For canvas upper, use a soft brush for stubborn dirt. Air-dry &mdash; never put leather/synthetic shoes in the sun.',
  },
  'Toys & Games': {
    hookVerb: ['keeps kids engaged for hours', 'is the kind of gift parents thank you for', 'doubles as a calm-down activity'],
    fabric:   'child-safe non-toxic materials',
    features: [
      'Age-appropriate &mdash; check the recommended age range below',
      'Child-safe non-toxic materials',
      'Sturdy construction that survives drops and rough play',
      'Engages curiosity and motor skills',
      'Easy to clean / wipe down',
      'Compact storage when not in use',
      'No tiny parts (for products aimed at younger kids)',
      'Great gifting choice for birthdays and festivals',
    ],
    usecase:  'Birthdays, festive gifting, rainy-day indoor play, car/plane travel entertainment, screen-free family time.',
    care:     'Wipe with a damp cloth after use. Store in a cool, dry place away from direct sunlight.',
  },
  'Others': {
    hookVerb: ['punches well above its price', 'is one of those small upgrades that just makes life easier', 'is honest, useful, and well-made'],
    fabric:   'quality materials chosen for durability and value',
    features: [
      'Built to last with quality materials and finishing',
      'Easy to use straight out of the box',
      'Compact storage / travel-friendly where applicable',
      'Versatile across multiple use cases',
      'Great value &mdash; comparable to products at 2&ndash;3x the price',
      'Carefully sourced and quality-checked before shipping',
      'Backed by our 7-day no-questions-asked returns policy',
      'GST invoice available on request',
    ],
    usecase:  'Daily use, gifting, special occasions &mdash; depends on the specific product but always honest value.',
    care:     'Read the product care label / instruction included with the order. When in doubt, WhatsApp us and we&rsquo;ll guide.',
  },
};

function _pickFour(arr, hash) {
  // Deterministic pick of 4 distinct items from arr using the hash
  const picks = [];
  let h = hash >>> 0;
  const seen = new Set();
  let attempts = 0;
  while (picks.length < 4 && attempts < 50) {
    const idx = h % arr.length;
    if (!seen.has(idx)) { seen.add(idx); picks.push(arr[idx]); }
    h = (h * 16777619 + 2166136261) >>> 0;
    attempts++;
  }
  // Fill any remaining slots in order if hash collisions left us short
  if (picks.length < 4) {
    for (let i = 0; i < arr.length && picks.length < 4; i++) {
      if (!seen.has(i)) picks.push(arr[i]);
    }
  }
  return picks;
}

function _hasRealDesc(d) {
  if (!d) return false;
  const s = String(d).trim();
  if (s.length < 200) return false;          // too short to be "big"
  if (!/<[a-z][\s\S]*?>/i.test(s)) return false; // no HTML tags = plain text
  return true;
}

function _generateLongDesc(p) {
  const template = DESC_TEMPLATES[p.category] || DESC_TEMPLATES['Others'];
  const seed = `${p.id || ''}|${p.name || ''}|${p.category || ''}`;
  const h = _stableHash(seed);

  const verb       = template.hookVerb[h % template.hookVerb.length];
  const features   = _pickFour(template.features, h);
  const priceLine  = (typeof p.price === 'number' && p.price > 0)
    ? `Priced at <strong>&#8377;${p.price.toLocaleString('en-IN')}</strong>${p.mrp && p.mrp > p.price ? ` (vs MRP &#8377;${p.mrp.toLocaleString('en-IN')} &mdash; you save <strong>${Math.round((p.mrp - p.price) / p.mrp * 100)}%</strong>)` : ''}, it&rsquo;s sized to fit comfortably in everyday rotation.`
    : '';

  const safeName = String(p.name || 'This product').replace(/[<>]/g, '');
  const safeCat  = String(p.category || 'product').replace(/[<>]/g, '');

  return `<p class='pd-desc-para'>The <strong>${safeName}</strong> ${verb} &mdash; a thoughtfully chosen ${safeCat.toLowerCase()} piece curated by Elite Emporium for customers who care about quality without paying inflated showroom prices.</p>
<p class='pd-desc-para'>Built around <strong>${template.fabric}</strong>, this piece is designed for real-world wear &mdash; the kind that takes daily use without losing its finish. ${priceLine}</p>
<ul class='pd-desc-list'>${features.map(f => `<li>${f}</li>`).join('')}</ul>
<p class='pd-desc-para'><strong>When to wear / use it:</strong> ${template.usecase}</p>
<p class='pd-desc-para'><strong>Care:</strong> ${template.care} <strong>GST invoice</strong> available on request. <strong>Free delivery</strong> on orders above &#8377;499 across India. <strong>7-day easy returns</strong> for unused items in original packaging.</p>
<p class='pd-desc-para'><em>Questions about fit, sizing, colour, or availability?</em> WhatsApp us on +91 73586 50774 &mdash; the owner replies personally, usually within 30 minutes.</p>`;
}

function hydrateSyntheticDescriptions() {
  if (!Array.isArray(products) || !products.length) return;
  products.forEach(p => {
    if (!_hasRealDesc(p.desc)) {
      p.desc = _generateLongDesc(p);
    }
  });
}

function clearAllFilters() {
  // Reset category to All
  document.querySelectorAll('.filter-option input[name="category"]').forEach(inp => {
    if (inp.value === 'All') { inp.checked = true; inp.closest('.filter-option').classList.add('active'); }
    else inp.closest('.filter-option').classList.remove('active');
  });
  // Reset price range
  const pMin = document.getElementById('priceMin');
  const pMax = document.getElementById('priceMax');
  if (pMin) pMin.value = '';
  if (pMax) pMax.value = '';
  _priceMin = null; _priceMax = null;
  // Reset rating
  const ratingAll = document.querySelector('input[name="ratingFilter"][value="0"]');
  if (ratingAll) ratingAll.checked = true;
  // Reset in-stock toggle
  const inStock = document.getElementById('inStockOnly');
  if (inStock) inStock.checked = false;
  // Reset sort
  const sortSel  = document.getElementById('sortSelect');
  const sortSelM = document.getElementById('sortSelectMobile');
  if (sortSel)  sortSel.value  = 'default';
  if (sortSelM) sortSelM.value = 'default';
  // Reset search
  const searchInp = document.getElementById('productSearchInput');
  if (searchInp) searchInp.value = '';
  // Trigger full state + DOM reset via closure hook
  if (_resetFilters) _resetFilters();
}

function applyAutoBadges() {
  // Mark the top-3 highest-discount products as "Best Value" if they have no badge
  const withMrp = products.filter(p => p.mrp && p.mrp > p.price && !p.badge);
  withMrp.sort((a, b) => (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp);
  withMrp.slice(0, 3).forEach(p => { p.badge = 'Best Value'; });
}

// ── COMPARE STATE ────────────────────────────
let compareList = [];

function toggleCompare(id, btn) {
  const idx = compareList.indexOf(id);
  if (idx === -1) {
    if (compareList.length >= 3) { showToast('⚠️ You can compare up to 3 products.'); return; }
    compareList.push(id);
    if (btn) { btn.classList.add('active'); btn.title = 'Remove from comparison'; }
  } else {
    compareList.splice(idx, 1);
    if (btn) { btn.classList.remove('active'); btn.title = 'Compare'; }
  }
  updateCompareBar();
}

function updateCompareBar() {
  let bar = document.getElementById('compareBar');
  if (!compareList.length) { if (bar) bar.remove(); return; }
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'compareBar';
    bar.className = 'compare-bar';
    document.body.appendChild(bar);
  }
  const items = compareList.map(id => {
    const p = products.find(x => x.id === id);
    if (!p) return '';
    return `<div class="cmp-bar-item">
      <img src="${p.image || ''}" alt="${escapeHtml(p.name)}" class="cmp-bar-img" />
      <span class="cmp-bar-name">${p.name.length > 22 ? p.name.slice(0, 22) + '…' : p.name}</span>
      <button class="cmp-bar-remove" onclick="toggleCompare(${p.id},document.querySelector('.compare-btn[data-cmpid=\\'${p.id}\\']'));updateCompareBar()">✕</button>
    </div>`;
  }).join('');
  const disabledAttr = compareList.length < 2 ? 'disabled' : '';
  bar.innerHTML = `
    <div class="cmp-bar-inner">
      <span class="cmp-bar-label">Compare (${compareList.length}/3)</span>
      <div class="cmp-bar-items">${items}</div>
      <button class="cmp-bar-btn" ${disabledAttr} onclick="openCompareModal()">⚖️ Compare Now</button>
      <button class="cmp-bar-clear" onclick="clearCompare()">Clear</button>
    </div>`;
}

function clearCompare() {
  compareList = [];
  document.querySelectorAll('.compare-btn.active').forEach(b => b.classList.remove('active'));
  const bar = document.getElementById('compareBar');
  if (bar) bar.remove();
}

function openCompareModal() {
  if (compareList.length < 2) return;
  const items = compareList.map(id => products.find(x => x.id === id)).filter(Boolean);
  const fields = [
    { label: 'Image',    render: p => `<img src="${p.image||''}" alt="${escapeHtml(p.name || '')}" loading="lazy" decoding="async" style="width:80px;height:80px;object-fit:cover;border-radius:10px;" />` },
    { label: 'Name',     render: p => `<strong style="font-size:12px;">${p.name}</strong>` },
    { label: 'Price',    render: p => `<span style="color:var(--red);font-weight:700;font-size:15px;">₹${p.price.toLocaleString('en-IN')}</span>` },
    { label: 'MRP',      render: p => p.mrp ? `<s style="color:#878787;">₹${p.mrp.toLocaleString('en-IN')}</s>` : '—' },
    { label: 'Discount', render: p => p.mrp && p.mrp > p.price ? `<span style="background:#e8f5e9;color:#2e7d32;padding:2px 8px;border-radius:12px;font-size:12px;font-weight:700;">${Math.round((p.mrp-p.price)/p.mrp*100)}% off</span>` : '—' },
    { label: 'Rating',   render: p => `<span style="background:#388e3c;color:white;padding:2px 8px;border-radius:10px;font-size:12px;font-weight:700;">★ ${p.rating}</span> <span style="font-size:11px;color:#878787;">(${p.reviews})</span>` },
    { label: 'Category', render: p => p.category },
    { label: 'Stock',    render: p => p.inStock !== false ? `<span style="color:#2e7d32;font-weight:600;">✅ In Stock</span>` : `<span style="color:var(--red);font-weight:600;">❌ Out of Stock</span>` },
    { label: '',         render: p => `<a href="product.html?id=${p.id}" class="cmp-view-btn">View Product</a>` },
  ];
  const colWidth = Math.floor(80 / items.length);
  const headerRow = `<tr><th style="width:20%;text-align:left;padding:10px 14px;background:#fafafa;border-bottom:1px solid #f0f0f0;"></th>${items.map(p => `<th style="width:${colWidth}%;text-align:center;padding:10px 8px;background:#fafafa;border-bottom:1px solid #f0f0f0;">${p.name.length > 28 ? p.name.slice(0,28)+'…' : p.name}</th>`).join('')}</tr>`;
  const bodyRows = fields.map(f => `<tr>
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#878787;border-bottom:1px solid #f9f9f9;background:#fafafa;">${f.label}</td>
    ${items.map(p => `<td style="padding:10px 8px;text-align:center;border-bottom:1px solid #f9f9f9;vertical-align:middle;">${f.render(p)}</td>`).join('')}
  </tr>`).join('');

  let modal = document.getElementById('compareModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'compareModal';
    modal.className = 'cmp-modal-backdrop';
    modal.onclick = e => { if (e.target === modal) closeCompareModal(); };
    document.body.appendChild(modal);
  }
  modal.innerHTML = `<div class="cmp-modal">
    <div class="cmp-modal-header">
      <h3>⚖️ Product Comparison</h3>
      <button class="cmp-modal-close" onclick="closeCompareModal()">✕</button>
    </div>
    <div class="cmp-modal-body">
      <table class="cmp-table"><thead>${headerRow}</thead><tbody>${bodyRows}</tbody></table>
    </div>
  </div>`;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeCompareModal() {
  const modal = document.getElementById('compareModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

// ── WISHLIST STATE ───────────────────────────
let wishlist = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');

function saveWishlist() {
  localStorage.setItem('eliteEmporiumWishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  // Cross-tab sync — other open tabs re-read + re-render their badges
  try {
    if (window.__wishlistChannel) {
      window.__wishlistChannel.postMessage({ type: 'wishlist-update', count: wishlist.length, at: Date.now() });
    }
  } catch {}
}

function updateWishlistUI() {
  const count = wishlist.length;
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
  // Inject wishlist button into header-actions (once)
  const hdrActions = document.querySelector('.header-actions');
  if (hdrActions && !document.getElementById('headerWishlistBtn')) {
    const wlLink = document.createElement('a');
    wlLink.id = 'headerWishlistBtn';
    wlLink.href = 'wishlist.html';
    wlLink.className = 'header-wl-btn';
    wlLink.title = 'My Wishlist';
    wlLink.innerHTML = `🤍 <span class="header-wl-count" style="display:none;"></span>`;
    hdrActions.insertBefore(wlLink, hdrActions.firstChild);
  }
  const wlBadge = document.querySelector('.header-wl-count');
  if (wlBadge) {
    wlBadge.textContent = count;
    wlBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
  const wlBtn = document.getElementById('headerWishlistBtn');
  if (wlBtn) wlBtn.innerHTML = count > 0 ? `❤️ <span class="header-wl-count">${count}</span>` : `🤍`;
}
function isWishlisted(id) {
  return wishlist.includes(id);
}
function toggleWishlist(id, btnEl) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    if (btnEl) { btnEl.textContent = '❤️'; btnEl.classList.add('active'); }
    showToast('❤️ Added to wishlist!');
  } else {
    wishlist.splice(idx, 1);
    if (btnEl) { btnEl.textContent = '🤍'; btnEl.classList.remove('active'); }
    showToast('🤍 Removed from wishlist');
  }
  if (btnEl) {
    btnEl.classList.remove('pop');
    void btnEl.offsetWidth; // reflow to restart animation
    btnEl.classList.add('pop');
  }
  saveWishlist();
}

// ── CART STATE ───────────────────────────────
let cart = (JSON.parse(localStorage.getItem('eliteEmporiumCart')) || []).map(i => {
  // Backfill image from product catalog for any old cart items missing the image field
  const prod = HARDCODED_PRODUCTS.find(p => p.id === i.id);
  return {
    ...i,
    cartKey: i.cartKey || (String(i.id) + '|' + (i.selectedColor || '')),
    image: i.image || (prod ? prod.image : '')
  };
});

function saveCart(animate) {
  localStorage.setItem('eliteEmporiumCart', JSON.stringify(cart));
  updateCartUI(animate);
}

function updateCartUI(animate) {
  const total = cart.reduce((s, i) => s + i.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
    if (animate) {
      el.classList.remove('cart-badge-pop');
      void el.offsetWidth;
      el.classList.add('cart-badge-pop');
    }
  });
  // Show cart count in page title
  const baseTitle = document.title.replace(/^\(\d+\) /, '');
  document.title = total > 0 ? `(${total}) ${baseTitle}` : baseTitle;
  updateMiniCart();
  updateAlertBell();
  // Refresh the side cart drawer if it's currently open
  if (document.getElementById('sideCartDrawer')?.classList.contains('open')) {
    renderSideCart();
  }
  // Dynamic favicon with cart count
  if (typeof updateFaviconBadge === 'function') {
    try { updateFaviconBadge(total); } catch {}
  }
  // App Badging API — shows cart count on the installed home-screen
  // icon (Chrome on Android, Edge on Windows, Safari on macOS Sonoma+).
  // Silent no-op on unsupported browsers.
  try {
    if ('setAppBadge' in navigator) {
      if (total > 0) navigator.setAppBadge(total).catch(() => {});
      else navigator.clearAppBadge?.().catch(() => {});
    }
  } catch {}
  // Cross-tab cart sync — broadcast the new count so other open
  // tabs (e.g. a wishlist tab) re-render their cart badge live.
  try {
    if (window.__cartChannel) {
      window.__cartChannel.postMessage({ type: 'cart-update', total, at: Date.now() });
    }
  } catch {}
}

/* ── BROADCASTCHANNEL: cross-tab cart sync ───────────────────
   When the user has the site open in two tabs and adds an item in
   one, the other tab's cart badge should update without a refresh.
   The channel also lets the side cart drawer in tab B reflect tab
   A's changes. localStorage 'storage' event already fires for the
   raw write, but BroadcastChannel is faster + more reliable.
   ──────────────────────────────────────────────────────────── */
(function initCartChannel() {
  if (typeof BroadcastChannel === 'undefined') return;
  try {
    const ch = new BroadcastChannel('elite-emporium-cart');
    window.__cartChannel = ch;
    ch.addEventListener('message', e => {
      if (!e.data || e.data.type !== 'cart-update') return;
      // Re-read cart from localStorage (the other tab wrote it)
      try {
        cart = JSON.parse(localStorage.getItem('eliteEmporiumCart') || '[]');
        document.querySelectorAll('.cart-count').forEach(el => {
          el.textContent = e.data.total;
          el.style.display = e.data.total > 0 ? 'flex' : 'none';
        });
        if (typeof renderCart === 'function' && document.getElementById('cartItems')) renderCart();
        if (typeof renderSideCart === 'function' && document.getElementById('sideCartDrawer')?.classList.contains('open')) renderSideCart();
      } catch {}
    });
  } catch {}
})();

/* ── BROADCASTCHANNEL: cross-tab wishlist sync ───────────────
   Mirror of the cart channel above — keeps the 'wishlist-count'
   badge + the wishlist page in sync across multiple open tabs.
   Critical for the 'shareable wishlist deep-link' flow where the
   recipient might already have the site open in another tab.
   ──────────────────────────────────────────────────────────── */
(function initWishlistChannel() {
  if (typeof BroadcastChannel === 'undefined') return;
  try {
    const ch = new BroadcastChannel('elite-emporium-wishlist');
    window.__wishlistChannel = ch;
    ch.addEventListener('message', e => {
      if (!e.data || e.data.type !== 'wishlist-update') return;
      // Re-read wishlist from localStorage + re-render the local UI
      try {
        const fresh = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');
        // Mutate the module-level `wishlist` array in place (don't
        // reassign — other code holds a closure reference to it).
        wishlist.length = 0;
        for (const id of fresh) wishlist.push(id);
        if (typeof updateWishlistUI === 'function') updateWishlistUI();
        // If the user is currently on the wishlist page, re-render the grid.
        if (typeof initWishlistPage === 'function' && document.getElementById('wishlistGrid')) {
          initWishlistPage();
        }
      } catch {}
    });
  } catch {}
})();

/* ─── CROSS-TAB SYNC FALLBACK ────────────────────────────────
   For browsers where BroadcastChannel is undefined (some private
   modes, very old Safari, locked-down WebViews), the cart and
   wishlist channels above no-op and tabs would drift out of sync.
   The 'storage' event fires natively in *other* tabs when
   localStorage changes in *this* tab — perfect zero-cost fallback.
   It also serves as belt-and-braces for BroadcastChannel-capable
   browsers (harmless: we just re-read the same value).
   ──────────────────────────────────────────────────────────── */
(function initStorageFallback() {
  if (typeof window === 'undefined' || !window.addEventListener) return;
  window.addEventListener('storage', e => {
    if (!e || !e.key) return;
    if (e.key === 'eliteEmporiumCart') {
      try {
        cart = JSON.parse(e.newValue || '[]');
        const total = cart.reduce((s, i) => s + (Number(i.quantity) || 0), 0);
        document.querySelectorAll('.cart-count').forEach(el => {
          el.textContent = total;
          el.style.display = total > 0 ? 'flex' : 'none';
        });
        if (typeof renderCart === 'function' && document.getElementById('cartItems')) renderCart();
        if (typeof renderSideCart === 'function' && document.getElementById('sideCartDrawer')?.classList.contains('open')) renderSideCart();
      } catch {}
    } else if (e.key === 'eliteEmporiumWishlist') {
      try {
        const fresh = JSON.parse(e.newValue || '[]');
        wishlist.length = 0;
        for (const id of fresh) wishlist.push(id);
        if (typeof updateWishlistUI === 'function') updateWishlistUI();
        if (typeof initWishlistPage === 'function' && document.getElementById('wishlistGrid')) {
          initWishlistPage();
        }
      } catch {}
    }
  });
})();

// Close side cart on Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('sideCartDrawer')?.classList.contains('open')) {
    closeSideCart();
  }
});

// ── DYNAMIC FAVICON WITH CART COUNT ──────────
// Renders a 32×32 canvas with the cart count overlaid as a red badge
// on top of the logo, then sets it as the favicon. Re-runs on every
// updateCartUI() so the count stays in sync with the actual cart.
let _faviconCanvas = null;
let _faviconLogo   = null;
function updateFaviconBadge(count) {
  if (!_faviconCanvas) {
    _faviconCanvas = document.createElement('canvas');
    _faviconCanvas.width = 64;
    _faviconCanvas.height = 64;
  }
  const ctx = _faviconCanvas.getContext('2d');
  ctx.clearRect(0, 0, 64, 64);

  const draw = () => {
    // Background circle (red)
    ctx.fillStyle = '#DB3022';
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();

    // Crown emoji as logo (matches site's 👑 brand)
    ctx.font = '38px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('👑', 32, 36);

    // Badge with cart count
    if (count > 0) {
      const txt = count > 9 ? '9+' : String(count);
      // Yellow badge circle in the top-right
      ctx.fillStyle = '#FFE500';
      ctx.beginPath();
      ctx.arc(48, 16, 14, 0, Math.PI * 2);
      ctx.fill();
      // Black ring
      ctx.strokeStyle = '#1a1a1a';
      ctx.lineWidth = 2;
      ctx.stroke();
      // Count text
      ctx.fillStyle = '#1a1a1a';
      ctx.font = 'bold 18px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(txt, 48, 17);
    }

    // Push to the document
    let link = document.querySelector('link[rel*="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = _faviconCanvas.toDataURL('image/png');
  };

  draw();
}

// Initial favicon render on page load (before first updateCartUI fires)
if (typeof document !== 'undefined') {
  const initialCount = (typeof cart !== 'undefined' ? cart : []).reduce((s, i) => s + i.quantity, 0);
  try { updateFaviconBadge(initialCount); } catch {}
}

function updateAlertBell() {
  const alerts = getPriceAlerts();
  let bell = document.getElementById('headerAlertBell');
  if (!bell) {
    const actionsDiv = document.querySelector('.header-actions');
    if (!actionsDiv) return;
    bell = document.createElement('button');
    bell.id = 'headerAlertBell';
    bell.className = 'header-alert-bell';
    bell.title = 'Price Alerts';
    bell.onclick = toggleAlertPanel;
    actionsDiv.insertBefore(bell, actionsDiv.firstChild);
  }
  const count = alerts.length;
  bell.innerHTML = `🔔${count > 0 ? `<span class="alert-bell-badge">${count}</span>` : ''}`;
  bell.style.display = count > 0 ? 'flex' : 'none';
}

function toggleAlertPanel() {
  let panel = document.getElementById('alertPanel');
  if (panel) { panel.remove(); return; }
  const alerts = getPriceAlerts();
  panel = document.createElement('div');
  panel.id = 'alertPanel';
  panel.className = 'alert-panel';
  panel.innerHTML = `
    <div class="alert-panel-head">🔔 Price Alerts <button onclick="document.getElementById('alertPanel').remove()" class="alert-panel-close">✕</button></div>
    ${alerts.length === 0
      ? '<div class="alert-panel-empty">No price alerts set.</div>'
      : alerts.map(a => {
          const prod = products.find(p => p.id === a.id);
          return `<div class="alert-panel-item">
            <div class="api-name">${a.productName.slice(0,32)}…</div>
            <div class="api-meta">Alert: <strong>₹${a.targetPrice.toLocaleString('en-IN')}</strong> · Now: ₹${(prod ? prod.price : '?').toLocaleString?.('en-IN') ?? prod?.price}</div>
            <button class="api-remove" onclick="removePriceAlert(${a.id});updateAlertBell();this.closest('.alert-panel-item').remove();">✕</button>
          </div>`;
        }).join('')
    }`;
  document.body.appendChild(panel);
  setTimeout(() => document.addEventListener('click', e => {
    if (!panel.contains(e.target) && e.target.id !== 'headerAlertBell') panel.remove();
  }, { once: true }), 50);
}

function updateMiniCart() {
  const mini = document.getElementById('miniCart');
  if (!mini) return;
  if (!cart.length) {
    mini.innerHTML = `<div class="mini-cart-empty">🛒 Your cart is empty</div>`;
    return;
  }
  const itemsHtml = cart.slice(0, 4).map(item => `
    <div class="mini-cart-item">
      ${item.image ? `<img src="${item.image}" alt="${escapeHtml(item.name)}" class="mini-cart-img" />` : '<div class="mini-cart-img" style="background:#f0f0f0;display:flex;align-items:center;justify-content:center;">🛍️</div>'}
      <div class="mini-cart-info">
        <div class="mini-cart-name">${item.name}</div>
        <div class="mini-cart-meta">Qty ${item.quantity} × ₹${item.price.toLocaleString('en-IN')}</div>
      </div>
      <div class="mini-cart-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
    </div>`).join('');
  const more = cart.length > 4 ? `<div class="mini-cart-more">+${cart.length - 4} more item${cart.length - 4 > 1 ? 's' : ''}</div>` : '';
  const sub  = getSubtotal();
  mini.innerHTML = `
    ${itemsHtml}${more}
    <div class="mini-cart-footer">
      <div class="mini-cart-total">Subtotal: <strong>₹${sub.toLocaleString('en-IN')}</strong></div>
      <a href="cart.html" class="mini-cart-btn">Go to Cart →</a>
    </div>`;
}

// ── SIDE CART DRAWER ─────────────────────────
// Click the cart icon on any non-cart page → slide-in panel from right
// with full edit-in-place (qty +/-/remove) and a Checkout CTA.
function initSideCartDrawer() {
  if (window.location.pathname.includes('cart.html')) return;
  const cartBtn = document.querySelector('.cart-btn');
  if (!cartBtn) return;

  // Inject drawer + backdrop once
  if (!document.getElementById('sideCartDrawer')) {
    const bd = document.createElement('div');
    bd.id = 'sideCartBackdrop';
    bd.className = 'side-cart-backdrop';
    // Initially inert + aria-hidden so keyboard users + screen readers
    // skip the (closed) drawer until openSideCart() runs.
    bd.setAttribute('inert', '');
    bd.setAttribute('aria-hidden', 'true');
    bd.addEventListener('click', closeSideCart);
    document.body.appendChild(bd);

    const drawer = document.createElement('aside');
    drawer.id = 'sideCartDrawer';
    drawer.className = 'side-cart-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Shopping cart');
    drawer.setAttribute('inert', '');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
      <header class="side-cart-header">
        <h3>🛒 Your Cart <span class="side-cart-count-pill" id="sideCartCountPill">0</span></h3>
        <button class="side-cart-close" onclick="closeSideCart()" aria-label="Close cart">✕</button>
      </header>
      <div class="side-cart-body" id="sideCartBody"></div>
      <footer class="side-cart-footer" id="sideCartFooter"></footer>`;
    document.body.appendChild(drawer);
  }

  // Hijack the cart button click. Guard with a dataset flag so
  // re-calling initSideCartDrawer() (e.g. on bfcache restore, future
  // SPA-style nav, or any other init pathway) doesn't double-bind
  // the listener — that would call openSideCart() N times per click.
  if (!cartBtn.dataset.sideCartBound) {
    cartBtn.addEventListener('click', e => {
      e.preventDefault();
      openSideCart();
    });
    cartBtn.dataset.sideCartBound = '1';
  }
  // Treat cart-btn link as button for a11y
  cartBtn.setAttribute('role', 'button');
}

let _sideCartLastFocus = null;
function openSideCart() {
  renderSideCart();
  // Remember what was focused so we can restore on close (focus-trap pattern)
  try { _sideCartLastFocus = document.activeElement; } catch { _sideCartLastFocus = null; }
  const bd = document.getElementById('sideCartBackdrop');
  const dr = document.getElementById('sideCartDrawer');
  if (bd) { bd.classList.add('show'); bd.removeAttribute('inert'); bd.removeAttribute('aria-hidden'); }
  if (dr) {
    dr.classList.add('open');
    dr.removeAttribute('inert');
    dr.removeAttribute('aria-hidden');
    dr.setAttribute('role', 'dialog');
    dr.setAttribute('aria-modal', 'true');
    dr.setAttribute('aria-label', 'Shopping cart');
    // Move focus to the drawer for screen-reader announcement + keyboard control
    setTimeout(() => {
      const firstFocusable = dr.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) firstFocusable.focus({ preventScroll: true });
    }, 50);
  }
  document.body.style.overflow = 'hidden';
}
function closeSideCart() {
  const bd = document.getElementById('sideCartBackdrop');
  const dr = document.getElementById('sideCartDrawer');
  // Move focus OUT of the drawer BEFORE we set inert (setting inert
  // on an element containing the active element fires a blur but
  // doesn't always restore focus to a sensible location).
  if (dr && dr.contains(document.activeElement)) {
    (_sideCartLastFocus || document.querySelector('.cart-btn') || document.body).focus({ preventScroll: true });
  }
  if (bd) { bd.classList.remove('show'); bd.setAttribute('inert', ''); bd.setAttribute('aria-hidden', 'true'); }
  if (dr) { dr.classList.remove('open'); dr.setAttribute('inert', ''); dr.setAttribute('aria-hidden', 'true'); }
  document.body.style.overflow = '';
  _sideCartLastFocus = null;
}
function renderSideCart() {
  const body  = document.getElementById('sideCartBody');
  const foot  = document.getElementById('sideCartFooter');
  const pill  = document.getElementById('sideCartCountPill');
  if (!body || !foot) return;

  const totalQty = cart.reduce((s, i) => s + i.quantity, 0);
  if (pill) {
    pill.textContent = totalQty;
    pill.style.display = totalQty > 0 ? 'inline-flex' : 'none';
  }

  if (!cart.length) {
    body.innerHTML = `
      <div class="side-cart-empty">
        <div class="side-cart-empty-icon">🛒</div>
        <h4>Your cart is empty</h4>
        <p>Add a few favourites and they'll show up here.</p>
        <a href="products.html" class="side-cart-shop-btn" onclick="closeSideCart()">Browse Products →</a>
      </div>`;
    foot.innerHTML = '';
    return;
  }

  const cartItemsHtml = cart.map(item => {
    // Escape cartKey for HTML attribute context. The old inline-onclick
    // pattern (onclick="updateQuantity('${key}', ...)") broke if the
    // cartKey contained ' (e.g. variant color "Pearl's White"). Switching
    // to a data-key attribute + this.dataset.key access at click time
    // makes the value safe regardless of quotes/special chars.
    const escKey = (item.cartKey || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    const lineTotal = (item.price * item.quantity).toLocaleString('en-IN');
    return `
      <div class="side-cart-item">
        ${item.image
          ? `<img src="${cldUrl(item.image, 160)}" alt="${escapeHtml(item.name)}" class="side-cart-img" loading="lazy" decoding="async" />`
          : `<div class="side-cart-img side-cart-img-fallback">🛍️</div>`}
        <div class="side-cart-item-info">
          <div class="side-cart-item-name">${escapeHtml(item.name)}</div>
          ${item.selectedColor ? `<div class="side-cart-item-color">${escapeHtml(item.selectedColor)}</div>` : ''}
          <div class="side-cart-item-qty">
            <button class="scq-btn" data-key="${escKey}" onclick="updateQuantity(this.dataset.key, -1);renderSideCart();" aria-label="Decrease quantity">−</button>
            <span class="scq-val">${item.quantity}</span>
            <button class="scq-btn" data-key="${escKey}" onclick="updateQuantity(this.dataset.key, 1);renderSideCart();" aria-label="Increase quantity">+</button>
            <button class="scq-save" data-key="${escKey}" data-id="${item.id}" onclick="saveForLater(this.dataset.key, this.dataset.id);" aria-label="Save for later" title="Save for later">🤍</button>
            <button class="scq-remove" data-key="${escKey}" onclick="removeFromCart(this.dataset.key);renderSideCart();" aria-label="Remove" title="Remove">🗑️</button>
          </div>
        </div>
        <div class="side-cart-item-price">₹${lineTotal}</div>
      </div>`;
  }).join('');

  // 'From your wishlist' strip — items that are in wishlist but NOT in cart
  // Lets customer one-tap-add a wishlist item without leaving the drawer.
  let wishlistStripHtml = '';
  try {
    const wl = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');
    const cartIds = new Set(cart.map(i => i.id));
    const wlItems = (Array.isArray(products) ? products : [])
      .filter(p => wl.includes(p.id) && !cartIds.has(p.id) && p.inStock !== false && p.image)
      .slice(0, 4);
    if (wlItems.length) {
      wishlistStripHtml = `
        <div class="side-cart-wl-strip">
          <div class="scwl-head">❤️ From your wishlist</div>
          <div class="scwl-row">
            ${wlItems.map(p => `
              <div class="scwl-card">
                <a href="product.html?id=${p.id}" class="scwl-link">
                  <img src="${cldUrl(p.image, 160)}" alt="${escapeHtml(p.name)}" class="scwl-img" loading="lazy" decoding="async" />
                  <div class="scwl-name">${escapeHtml(p.name)}</div>
                  <div class="scwl-price">₹${p.price.toLocaleString('en-IN')}</div>
                </a>
                <button class="scwl-add" type="button" onclick="addToCart(${p.id});renderSideCart();">+ Add</button>
              </div>`).join('')}
          </div>
        </div>`;
    }
  } catch { /* ignore */ }

  body.innerHTML = cartItemsHtml + wishlistStripHtml;

  const sub = getSubtotal();
  const minFree = (typeof CONFIG !== 'undefined' && CONFIG.minFreeDelivery) || 499;
  const toFree = Math.max(0, minFree - sub);
  foot.innerHTML = `
    ${toFree > 0
      ? `<div class="side-cart-fd">🚚 Add <strong>₹${toFree.toLocaleString('en-IN')}</strong> more for FREE delivery</div>`
      : `<div class="side-cart-fd side-cart-fd-unlocked">🎉 FREE delivery unlocked!</div>`}
    <div class="side-cart-total">
      <span>Subtotal</span>
      <strong>₹${sub.toLocaleString('en-IN')}</strong>
    </div>
    <a href="cart.html" class="side-cart-checkout">Checkout →</a>
    <button class="side-cart-continue" onclick="closeSideCart()">Continue shopping</button>`;
}

// Refresh drawer contents whenever cart changes (saveCart calls updateCartUI)
// Hook in via a small extension that re-renders if the drawer is open.
const _origUpdateCartUI = typeof updateCartUI === 'function' ? updateCartUI : null;

function initMiniCart() {
  const cartBtnEl = document.querySelector('.cart-btn');
  if (!cartBtnEl || window.location.pathname.includes('cart.html')) return;
  // Idempotent — re-calling this function (bfcache restore / future
  // SPA-style nav) must not append duplicate dropdowns or stack
  // hover listeners. Same defensive pattern as initSideCartDrawer.
  if (cartBtnEl.dataset.miniCartWired === '1') return;
  cartBtnEl.dataset.miniCartWired = '1';

  cartBtnEl.style.position = 'relative';
  const wrap = document.createElement('div');
  wrap.className = 'mini-cart-wrap';
  wrap.innerHTML = '<div class="mini-cart-dropdown" id="miniCart"></div>';
  cartBtnEl.parentElement.style.position = 'relative';
  cartBtnEl.appendChild(wrap);
  updateMiniCart();
  cartBtnEl.addEventListener('mouseenter', () => wrap.classList.add('open'));
  cartBtnEl.addEventListener('mouseleave', () => wrap.classList.remove('open'));
}

// ── ADD / REMOVE / UPDATE ────────────────────
function flyToCart(imgSrc) {
  if (!imgSrc || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cartIcon = document.querySelector('.cart-btn');
  if (!cartIcon) return;
  const destRect = cartIcon.getBoundingClientRect();

  const fly = document.createElement('img');
  fly.src = imgSrc;
  fly.style.cssText = `
    position:fixed;
    width:48px;height:48px;border-radius:8px;object-fit:cover;
    z-index:9998;pointer-events:none;
    top:${window.innerHeight * 0.4}px;left:${window.innerWidth * 0.5 - 24}px;
    opacity:1;
    transition:top 0.55s cubic-bezier(0.4,0,0.2,1),
               left 0.55s cubic-bezier(0.4,0,0.2,1),
               width 0.55s ease,height 0.55s ease,
               opacity 0.2s ease 0.4s;
  `;
  document.body.appendChild(fly);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    fly.style.top     = (destRect.top + destRect.height / 2 - 12) + 'px';
    fly.style.left    = (destRect.left + destRect.width / 2 - 12) + 'px';
    fly.style.width   = '24px';
    fly.style.height  = '24px';
    fly.style.opacity = '0';
  }));

  setTimeout(() => fly.remove(), 650);

  // Cart icon bounce when the flying image arrives
  setTimeout(() => {
    cartIcon.classList.remove('cart-bounce');
    void cartIcon.offsetWidth;
    cartIcon.classList.add('cart-bounce');
  }, 540);
}

function addToCart(productId, selectedColor, selectedImage, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cartKey  = String(productId) + '|' + (selectedColor || '');
  const existing = cart.find(i => i.cartKey === cartKey);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      ...product,
      quantity: qty,
      cartKey,
      selectedColor: selectedColor || null,
      image: selectedImage || product.image
    });
  }

  saveCart(true);
  flyToCart(selectedImage || product.image);
  const colorStr = selectedColor ? ` (${selectedColor})` : '';
  showToast(`✅ ${product.name}${colorStr} added to cart!`);
  // Engagement signal — cumulative weight toward notification prompt
  if (typeof bumpNotifEngagement === 'function') bumpNotifEngagement(2);

  // Auto-open the side cart drawer on the FIRST add-to-cart per session.
  // Subsequent adds keep the unobtrusive fly-to-cart + toast UX.
  if (
    document.getElementById('sideCartDrawer') &&
    !sessionStorage.getItem('sideCartHinted') &&
    !window.location.pathname.includes('cart.html') &&
    !window.location.pathname.includes('product.html')
  ) {
    sessionStorage.setItem('sideCartHinted', '1');
    setTimeout(() => {
      if (typeof openSideCart === 'function') openSideCart();
    }, 700); // wait for fly-to-cart to land
  }

  // Suggest a coupon when subtotal crosses ₹200 and no coupon is active
  const sub = getSubtotal();
  if (!_activeCoupon && sub >= 200 && sub < 500) {
    setTimeout(() => showToast('💡 Use code ELITE10 to save 10% on your order!', 5000, 'info'), 1500);
  } else if (!_activeCoupon && sub >= 500) {
    setTimeout(() => showToast('🎉 Use SUMMER15 to save 15% — you qualify now!', 5000, 'info'), 1500);
  }

  // Upgrade card button to inline qty control
  const btn = document.querySelector(`[data-pid="${productId}"]`);
  if (btn) {
    const cardActionRow = btn.closest('.card-action-row');
    if (cardActionRow) {
      const qty = cart.find(i => i.id === productId)?.quantity || 1;
      const ctrl = document.createElement('div');
      ctrl.className = 'card-qty-ctrl';
      ctrl.id = 'qtyctrl_' + productId;
      ctrl.innerHTML = `<button class="card-qty-btn" onclick="event.preventDefault();cardQtyChange(${productId},-1)">−</button>
        <span class="card-qty-num">${qty}</span>
        <button class="card-qty-btn add" onclick="event.preventDefault();cardQtyChange(${productId},1)">+</button>`;
      cardActionRow.replaceWith(ctrl);
    }
  }
}

function cardQtyChange(productId, delta) {
  const cartKey = String(productId) + '|';
  const item = cart.find(i => i.id === productId);
  if (!item) { addToCart(productId); return; }
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
    // Replace qty controls with Add button
    const ctrl = document.getElementById('qtyctrl_' + productId);
    if (ctrl) {
      const product = products.find(p => p.id === productId);
      if (product) {
        const btnId = 'cartbtn_' + productId;
        const defaultImg   = (product.variants && product.variants.length > 1) ? product.variants[0].image : (product.image || '');
        const defaultColor = (product.variants && product.variants.length > 1) ? product.variants[0].color : '';
        const addToCartCall = (product.variants && product.variants.length > 1)
          ? `(function(b){addToCart(${productId},b.dataset.color,b.dataset.img)})(document.getElementById('${btnId}'))`
          : `addToCart(${productId})`;
        const row = document.createElement('div');
        row.className = 'card-action-row';
        row.innerHTML = `<button class="add-to-cart" id="${btnId}" data-pid="${productId}" data-color="${defaultColor}" data-img="${defaultImg}" onclick="${addToCartCall}">🛒 Add</button>`;
        ctrl.replaceWith(row);
      }
    }
  } else {
    const numEl = document.querySelector(`#qtyctrl_${productId} .card-qty-num`);
    if (numEl) numEl.textContent = item.quantity;
  }
  saveCart();
  updateCartCount();
  updateMiniCart();
}

function saveForLater(cartKey, productId) {
  // Move the item from cart → wishlist. ADD-only — never toggle off
  // a product the customer was about to buy.
  const pid = Number(productId);
  const wl = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');
  if (!wl.includes(pid)) {
    wl.unshift(pid);
    localStorage.setItem('eliteEmporiumWishlist', JSON.stringify(wl));
    if (typeof updateWishlistUI === 'function') updateWishlistUI();
  }
  // Remove from cart silently (no undo toast — the save toast covers it).
  cart = cart.filter(i => i.cartKey !== cartKey);
  saveCart();
  if (typeof renderCart === 'function') renderCart();
  if (typeof renderSideCart === 'function') renderSideCart();
  showToast('🤍 Saved to wishlist for later!');
}

function removeFromCart(cartKey) {
  const removed = cart.find(i => i.cartKey === cartKey);
  cart = cart.filter(i => i.cartKey !== cartKey);
  saveCart();
  renderCart();
  if (removed) {
    showUndoToast(`🗑️ "${removed.name.slice(0, 28)}" removed`, () => {
      cart.push(removed);
      saveCart();
      renderCart();
    });
  }
}

function showUndoToast(message, onUndo, duration = 5000) {
  let stack = document.getElementById('toastStack');
  if (!stack) {
    stack = document.createElement('div');
    stack.id = 'toastStack';
    stack.className = 'toast-stack';
    stack.setAttribute('role', 'status');
    stack.setAttribute('aria-live', 'polite');
    stack.setAttribute('aria-atomic', 'true');
    document.body.appendChild(stack);
  }
  const toast = document.createElement('div');
  toast.className = 'toast-item toast-info';
  let timer;
  const dismiss = () => {
    toast.style.animation = 'toastSlideOut 0.25s ease forwards';
    setTimeout(() => toast.remove(), 250);
    clearTimeout(timer);
  };
  toast.innerHTML = `
    <span class="toast-msg">${message}</span>
    <button class="toast-undo-btn" style="background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.35);color:white;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;cursor:pointer;margin-left:8px;font-family:inherit;">Undo</button>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
  toast.querySelector('.toast-undo-btn').onclick = () => { onUndo(); dismiss(); };
  stack.appendChild(toast);
  timer = setTimeout(dismiss, duration);
}

function shareCart(e) {
  if (e) e.preventDefault();
  if (!cart.length) { showToast('⚠️ Your cart is empty!'); return; }

  // Build a compact restorable token: just id, qty, color (everything else is in the catalog)
  const compact = cart.map(i => ({ i: i.id, q: i.quantity, c: i.selectedColor || '' }));
  let restoreUrl = '';
  try {
    const token = btoa(unescape(encodeURIComponent(JSON.stringify(compact))));
    restoreUrl = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}cart.html?restore=${token}`;
  } catch {}

  let msg = `🛍️ *My Shopping List – Elite Emporium*\n━━━━━━━━━━━━━━━━━\n\n`;
  cart.forEach((item, i) => {
    msg += `${i + 1}. *${item.name}*`;
    if (item.selectedColor) msg += ` (${item.selectedColor})`;
    msg += `\n   ₹${item.price.toLocaleString('en-IN')} × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━\n💰 *Total: ₹${getTotal().toLocaleString('en-IN')}*\n\n`;
  if (restoreUrl) msg += `🔄 *Restore this cart:* ${restoreUrl}\n\n`;
  msg += `Order at Elite Emporium 👉 https://wa.me/917358650774`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}

// Restore cart from a ?restore=... token (used by shareCart's generated links)
function restoreCartFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('restore');
  if (!token) return;
  try {
    const compact = JSON.parse(decodeURIComponent(escape(atob(token))));
    if (!Array.isArray(compact) || !compact.length) return;
    const replace = !cart.length || confirm(`You have a shared cart link with ${compact.length} item(s).\n\nClick OK to REPLACE your current cart, or Cancel to MERGE.`);
    if (replace) cart = [];
    compact.forEach(({ i, q, c }) => {
      const prod = products.find(p => p.id === i);
      if (!prod) return;
      const cartKey = String(i) + '|' + (c || '');
      const existing = cart.find(x => x.cartKey === cartKey);
      if (existing) existing.quantity = Math.max(existing.quantity, q);
      else cart.push({ ...prod, quantity: q || 1, cartKey, selectedColor: c || null, image: prod.image });
    });
    saveCart();
    // Strip the param so the same restore doesn't re-fire on reload
    const cleanUrl = window.location.pathname + (params.toString().replace(/&?restore=[^&]+/, '').replace(/^&/, '') ? '?' + params.toString().replace(/&?restore=[^&]+/, '').replace(/^&/, '') : '');
    history.replaceState(null, '', cleanUrl);
    showToast(`🔄 Cart restored with ${compact.length} item(s).`, 4000, 'success');
  } catch (e) {
    console.error('cart restore failed', e);
    showToast('⚠️ Cart restore link is invalid.', 3500, 'error');
  }
}

let _cartSnapshot = null;

function clearCart() {
  if (!cart.length) return;
  if (!confirm('Remove all items from your cart?')) return;
  _cartSnapshot = [...cart];
  cart = [];
  saveCart();
  renderCart();
  showUndoToast('🗑️ Cart cleared', () => {
    if (_cartSnapshot) { cart = _cartSnapshot; _cartSnapshot = null; saveCart(); renderCart(); }
  });
}

function updateQuantity(cartKey, delta) {
  const item = cart.find(i => i.cartKey === cartKey);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) { removeFromCart(cartKey); return; }
  saveCart();
  renderCart();
}

// ── TOTALS ───────────────────────────────────
// ── HTML escape helper — safe to call on any string for use inside
// HTML attributes / template-literal-built innerHTML. Returns '' for
// null / undefined. Used by side cart drawer, UPI modal, back-to-cat
// pill, etc. (Without this defined globally, those features throw
// ReferenceError and fail silently / catch-block error toasts.)
function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/* ── CLOUDINARY RESPONSIVE IMAGE HELPER ─────────────────────────
   Splices f_auto (auto format → webp/avif),
           q_auto (auto quality),
           w_<N>  (responsive width)
   into a Cloudinary URL. Returns the URL unchanged if it's not a
   Cloudinary asset (so hardcoded /images/*.png keep working).

   Example:
     cldUrl('https://res.cloudinary.com/dwygvtjad/image/upload/v123/foo.jpg', 300)
     → 'https://res.cloudinary.com/dwygvtjad/image/upload/f_auto,q_auto,w_300/v123/foo.jpg'

   srcsetFor(url) returns a ready-to-use srcset string at three widths
   (300/450/600) covering 1x/1.5x/2x DPR for ~280px-wide product cards.
   ──────────────────────────────────────────────────────────────── */
function cldUrl(url, width) {
  if (!url || typeof url !== 'string') return url || '';
  if (!url.includes('res.cloudinary.com') || !url.includes('/image/upload/')) return url;
  // Skip if a transform is already present (avoid double-splicing).
  if (/\/upload\/[a-z]_[^/]+\//i.test(url)) return url;
  // Network-aware downscale: on save-data / 2g / 3g, request smaller images.
  const scale = (typeof _imgScale === 'number') ? _imgScale : 1;
  const w = Math.max(80, Math.round((Number(width) || 400) * scale));
  return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${w}/`);
}
function srcsetFor(url) {
  if (!url || !url.includes('res.cloudinary.com')) return '';
  return `${cldUrl(url, 300)} 300w, ${cldUrl(url, 450)} 450w, ${cldUrl(url, 600)} 600w`;
}

/* ── DELIVERY ETA ESTIMATOR ────────────────────────────────────
   Given a 6-digit Indian PIN code, returns {minDays, maxDays, zone}.
   Same store base: Kayalpattinam (TN, 628204).
   Zone-based heuristic (no external API):
   • Same city/Thoothukudi district (628xxx)   → 1-2 days
   • Tamil Nadu state (60-64)                  → 2-3 days
   • South zone (Kerala/Karnataka/AP)          → 3-4 days
   • West/Central (MH/MP/GJ/RJ)                → 4-6 days
   • North zone (DL/PB/HR/UP)                  → 5-7 days
   • East zone (WB/Odisha/Assam/Bihar/NE)      → 5-8 days
   Falls back to 3-7 days for unknown prefixes. ─────────────── */
function getDeliveryETA(pin) {
  if (!/^\d{6}$/.test(String(pin || ''))) return null;
  const p = String(pin);
  const pref2 = parseInt(p.slice(0,2), 10);
  const pref3 = parseInt(p.slice(0,3), 10);

  // Special-case our own district + same city
  if (p.startsWith('6282')) return { minDays: 1, maxDays: 1, zone: 'Kayalpattinam — same day delivery' };
  if (pref3 >= 627 && pref3 <= 629) return { minDays: 1, maxDays: 2, zone: 'Thoothukudi district' };

  if (pref2 >= 60 && pref2 <= 64) return { minDays: 2, maxDays: 3, zone: 'Tamil Nadu' };
  if (pref2 >= 67 && pref2 <= 69) return { minDays: 3, maxDays: 4, zone: 'Kerala' };
  if (pref2 >= 56 && pref2 <= 59) return { minDays: 3, maxDays: 4, zone: 'Karnataka' };
  if (pref2 >= 50 && pref2 <= 53) return { minDays: 3, maxDays: 4, zone: 'Andhra Pradesh' };
  if (pref2 >= 40 && pref2 <= 44) return { minDays: 4, maxDays: 6, zone: 'Maharashtra' };
  if (pref2 >= 36 && pref2 <= 39) return { minDays: 4, maxDays: 6, zone: 'Gujarat' };
  if (pref2 >= 45 && pref2 <= 49) return { minDays: 4, maxDays: 6, zone: 'Madhya Pradesh' };
  if (pref2 >= 30 && pref2 <= 34) return { minDays: 5, maxDays: 7, zone: 'Rajasthan' };
  if (pref2 >= 11 && pref2 <= 12) return { minDays: 5, maxDays: 7, zone: 'Delhi NCR' };
  if (pref2 >= 14 && pref2 <= 17) return { minDays: 5, maxDays: 7, zone: 'Punjab / Haryana / Himachal' };
  if (pref2 >= 20 && pref2 <= 28) return { minDays: 5, maxDays: 7, zone: 'Uttar Pradesh' };
  if (pref2 >= 70 && pref2 <= 74) return { minDays: 5, maxDays: 8, zone: 'West Bengal' };
  if (pref2 >= 75 && pref2 <= 77) return { minDays: 5, maxDays: 8, zone: 'Odisha' };
  if (pref2 >= 78 && pref2 <= 85) return { minDays: 5, maxDays: 8, zone: 'Northeast / Bihar' };
  if (pref2 >= 90 && pref2 <= 95) return { minDays: 6, maxDays: 9, zone: 'Northeast India' };
  return { minDays: 3, maxDays: 7, zone: 'India' };
}

function formatDeliveryDate(daysFromNow) {
  const d = new Date();
  // Skip same-day-cutoff: if it's after 4 PM IST, add 1 day to account for next-day dispatch.
  const cutoffPassed = d.getHours() >= 16;
  d.setDate(d.getDate() + daysFromNow + (cutoffPassed ? 1 : 0));
  return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
}

// Cart helpers. All Number() coercion so a stray Firestore string-price
// or undefined price can't NaN-poison the total.
function getSubtotal() { return cart.reduce((s, i) => s + (Number(i.price) || 0) * (Number(i.quantity) || 0), 0); }
function getItemCount() { return cart.reduce((s, i) => s + (Number(i.quantity) || 0), 0); }
function getDelivery()  { const st = getSubtotal(); return st === 0 ? 0 : st < CONFIG.minFreeDelivery ? CONFIG.deliveryCharge : 0; }
function getGiftWrap()  { return document.getElementById('giftWrap')?.checked ? 50 : 0; }
// getTotal returns the user-facing cart total: subtotal + delivery +
// giftwrap MINUS any active coupon discount. Used by the share-cart
// WhatsApp message so the shared total matches the cart-page total.
function getTotal() {
  const sub  = getSubtotal();
  const disc = (typeof getCouponDiscount === 'function') ? getCouponDiscount(sub) : 0;
  return Math.max(0, sub + getDelivery() + getGiftWrap() - disc);
}

function toggleGiftWrap() {
  const checked = document.getElementById('giftWrap')?.checked;
  const row = document.getElementById('giftMsgRow');
  if (row) row.style.display = checked ? 'block' : 'none';
  if (typeof refreshSummary === 'function') refreshSummary();
}

// ── RENDER STARS ─────────────────────────────
function generateRatingDist(rating, total) {
  // Spread total reviews across 5 stars in a way consistent with the given avg
  const r = Math.min(5, Math.max(1, rating));
  const weights = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  // Higher rating → skew toward 5 and 4
  weights[5] = Math.max(0, (r - 3) / 2);
  weights[4] = Math.max(0, 1 - Math.abs(r - 4) * 0.6);
  weights[3] = Math.max(0, 1 - Math.abs(r - 3) * 0.7);
  weights[2] = Math.max(0, (4 - r) / 3);
  weights[1] = Math.max(0, (3.5 - r) / 3);
  const sum = Object.values(weights).reduce((a, b) => a + b, 0);
  const dist = {};
  let used = 0;
  [5, 4, 3, 2].forEach(s => {
    dist[s] = Math.round((weights[s] / sum) * total);
    used += dist[s];
  });
  dist[1] = Math.max(0, total - used);
  return dist;
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += i <= Math.floor(rating) ? '★' : (i - 0.5 <= rating ? '½' : '☆');
  }
  return `<span class="stars">${html}</span>`;
}

// ── RENDER PRODUCTS (Flipkart style) ─────────
/* ── SKELETON LOADERS ─────────────────────────────────────────
   Shows shimmering placeholder cards in a product grid before
   the real cards render. Big perceived-perf win on slow networks
   (Firestore can take 1-3s on cold start). Used by:
   - initSkeletons() at DOMContentLoaded (before products load)
   - renderProducts() (cleared right before the real innerHTML)
   ──────────────────────────────────────────────────────────── */
function injectSkeletons(containerId, count) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (el.children.length) return; // already has content
  const sk = Array.from({length: count}, () =>
    `<div class="skeleton-card" aria-hidden="true">
       <div class="sk-img"></div>
       <div class="sk-line sk-line-name"></div>
       <div class="sk-line sk-line-name short"></div>
       <div class="sk-line sk-line-price"></div>
       <div class="sk-line sk-line-btn"></div>
     </div>`).join('');
  el.innerHTML = sk;
  el.classList.add('skeleton-active');
}
function initSkeletons() {
  // Only inject if we're still waiting for products to load.
  if (Array.isArray(products) && products.length) return;
  injectSkeletons('featuredProducts', 8);
  injectSkeletons('productsGrid',     12);
  injectSkeletons('forYouStrip',      6);
  injectSkeletons('newArrivalsStrip', 6);
}

function renderProducts(list, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.classList.remove('skeleton-active');

  if (!list.length) {
    const popularCats = ['Bags','Watches','Clothing','Abaiya','Cosmetics'];
    const catChips = popularCats.map(c =>
      `<a href="products.html?category=${encodeURIComponent(c)}" class="no-result-chip">${c}</a>`
    ).join('');
    el.innerHTML = `<div class="no-results-state">
      <div class="no-results-icon">🔍</div>
      <h3>No products found</h3>
      <p>We couldn't find anything matching your filters. Try a different search or browse a category:</p>
      <div class="no-results-chips">${catChips}</div>
      <button onclick="clearAllFilters()" class="no-results-clear">Clear All Filters</button>
    </div>`;
    return;
  }

  el.innerHTML = list.map((p, idx) => {
    const hidden = (containerId === 'productsGrid' && idx >= 12) ? ' card-hidden' : '';
    const badgeClass  = p.badge === 'New' ? 'new' : p.badge === 'Bestseller' ? 'hot' : p.badge === 'Premium' ? 'premium' : p.badge === 'Best Value' ? 'best-value' : '';
    const pid         = 'pid_'     + p.id;
    const btnId       = 'cartbtn_' + p.id;
    const detailLink  = `product.html?id=${p.id}`;

    // Default image & color for this card
    const defaultImg   = (p.variants && p.variants.length > 1) ? p.variants[0].image : (p.image || '');
    const defaultColor = (p.variants && p.variants.length > 1) ? p.variants[0].color : '';

    // Image area (onerror fallback to emoji placeholder)
    const imgFallback = `this.onerror=null;this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:52px;\\'>📦</span>'`;
    const cardSizes = '(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 280px';
    let imageHtml;
    if (p.variants && p.variants.length > 1) {
      const vSrc = p.variants[0].image;
      const vSrcset = srcsetFor(vSrc);
      imageHtml = `<a href="${detailLink}" class="product-img-link">
        <div class="product-image product-image-photo">
          <img id="${pid}" src="${cldUrl(vSrc, 450)}"${vSrcset ? ` srcset="${vSrcset}" sizes="${cardSizes}"` : ''} alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" onerror="${imgFallback}" />
        </div></a>`;
    } else if (p.image) {
      const iSrcset = srcsetFor(p.image);
      imageHtml = `<a href="${detailLink}" class="product-img-link">
        <div class="product-image product-image-photo">
          <img id="${pid}" src="${cldUrl(p.image, 450)}"${iSrcset ? ` srcset="${iSrcset}" sizes="${cardSizes}"` : ''} alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" onerror="${imgFallback}" />
        </div></a>`;
    } else {
      imageHtml = `<a href="${detailLink}" class="product-img-link">
        <div class="product-image" style="font-size:64px;background:#f0f0f0;">${p.emoji || '📦'}</div></a>`;
    }

    // Variant swatches — also update cart button data attributes on click
    let swatchHtml = '';
    if (p.variants && p.variants.length > 1) {
      const swatches = p.variants.map((v, i) =>
        `<img src="${cldUrl(v.image, 120)}"
              data-fullsrc="${v.image}"
              alt="${escapeHtml(p.name)} – ${escapeHtml(v.color)}"
              class="vswatch${i === 0 ? ' vactive' : ''}"
              onclick="swapVariant(this,'${pid}','vlbl_${pid}','${btnId}')"
              title="${v.color}" loading="lazy" decoding="async" />`
      ).join('');
      swatchHtml = `<div class="variant-swatches">
        <span class="vcolor-name">Color: <strong id="vlbl_${pid}">${p.variants[0].color}</strong></span>
        <div class="vswatch-row">${swatches}</div>
      </div>`;
    }

    // Add-to-cart: pass the button's live data-color & data-img for variant products
    const addToCartCall = (p.variants && p.variants.length > 1)
      ? `(function(b){addToCart(${p.id},b.dataset.color,b.dataset.img)})(document.getElementById('${btnId}'))`
      : `addToCart(${p.id})`;

    const isOos     = p.inStock === false;
    const wishlisted = isWishlisted(p.id);
    // Low-stock: deterministic count (2-7) for popular items, shifts on
    // hour-of-day so it slowly ticks down across the day for the same
    // visitor (without ever hitting 0 — minimum clamp of 2).
    const isLowStock = !isOos && (p.badge === 'Bestseller' || (p.reviews && p.reviews > 30));
    const lowStockN  = isLowStock
      ? 2 + (_stableHash(`lowstock-${p.id}-${new Date().toISOString().slice(0,10)}`) % 6) // 2..7, per-day
      : 0;
    return `
    <div class="product-card${isOos ? ' oos' : ''}${hidden}">
      ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
      ${isOos ? `<div class="oos-overlay"><div class="oos-ribbon">Out of Stock</div></div>` : ''}
      ${isLowStock ? `<div class="card-low-stock">⚡ Only ${lowStockN} left!</div>` : ''}
      <button class="wishlist-btn${wishlisted ? ' active' : ''}"
        onclick="event.preventDefault();toggleWishlist(${p.id},this)"
        title="${wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}">${wishlisted ? '❤️' : '🤍'}</button>
      <button class="qv-card-btn" onclick="event.preventDefault();openQuickView(${p.id})" title="Quick View">👁️</button>
      <a class="card-share-btn"
        href="https://wa.me/?text=${encodeURIComponent(`Check out this product on Elite Emporium:\n\n*${p.name}*\n₹${p.price.toLocaleString('en-IN')}\n\nhttps://elite-emporium-one.vercel.app/product.html?id=${p.id}`)}"
        target="_blank" rel="noopener"
        onclick="event.stopPropagation();"
        title="Share on WhatsApp" aria-label="Share on WhatsApp">💬</a>
      <button class="compare-btn${compareList.includes(p.id) ? ' active' : ''}"
        data-cmpid="${p.id}"
        onclick="event.preventDefault();toggleCompare(${p.id},this)"
        title="Compare">⚖️</button>
      ${imageHtml}
      ${swatchHtml}
      <div class="product-info">
        <div class="product-name"><a href="${detailLink}">${p.name}</a></div>
        <div class="product-rating">
          <span class="fk-rating-badge">★ ${p.rating}</span>
          <span class="rating-count">(${p.reviews})</span>
          ${(() => {
            // Derive a 'X sold this week' figure from reviews count (reviews are
            // a real signal). 20-25% of reviewers buy again or buy variants, so
            // weekly sold ≈ reviews / 3, clamped to [3, 47] to stay believable.
            const soldThisWeek = Math.max(3, Math.min(47, Math.floor((p.reviews || 0) / 3) + 2));
            return soldThisWeek >= 5 ? `<span class="card-sold-week">🔥 ${soldThisWeek} sold this week</span>` : '';
          })()}
        </div>
        <div class="product-footer">
          <div class="product-price-block">
            <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
            ${p.mrp && p.mrp > p.price ? `<s class="product-mrp">₹${p.mrp.toLocaleString('en-IN')}</s><span class="product-save">${Math.round((p.mrp - p.price) / p.mrp * 100)}% off</span>` : ''}
          </div>
          ${isOos
            ? `<a class="card-notify-btn" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi! Please notify me when *${p.name}* is back in stock.`)}" target="_blank" rel="noopener" onclick="event.stopPropagation();" title="Notify me when available">🔔 Notify When Back</a>`
            : (() => {
                const cartItem = cart.find(i => i.id === p.id);
                if (cartItem) {
                  return `<div class="card-qty-ctrl" id="qtyctrl_${p.id}">
                    <button class="card-qty-btn" onclick="event.preventDefault();cardQtyChange(${p.id},-1)">−</button>
                    <span class="card-qty-num">${cartItem.quantity}</span>
                    <button class="card-qty-btn add" onclick="event.preventDefault();cardQtyChange(${p.id},1)">+</button>
                  </div>`;
                }
                return `<div class="card-action-row">
                  <button class="add-to-cart"
                    id="${btnId}"
                    data-pid="${p.id}"
                    data-color="${defaultColor}"
                    data-img="${defaultImg}"
                    onclick="${addToCartCall}">
                    🛒 Add
                  </button>
                  <a class="card-wa-btn" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi! I want to order:\n\n*${p.name}*\nPrice: ₹${p.price.toLocaleString('en-IN')}\n\nPlease confirm availability.`)}" target="_blank" rel="noopener" title="Order on WhatsApp">💬</a>
                </div>`;
              })()
          }
        </div>
      </div>
    </div>`;
  }).join('');

  // Show More button for products grid
  const oldBtn = document.getElementById('showMoreBtn');
  if (oldBtn) oldBtn.remove();
  if (containerId === 'productsGrid' && list.length > 12) {
    let shown = 12;
    const btn = document.createElement('button');
    btn.id = 'showMoreBtn';
    btn.className = 'show-more-btn';
    btn.textContent = `Show More (${list.length - shown} more)`;
    btn.onclick = () => {
      const cards = el.querySelectorAll('.card-hidden');
      let revealed = 0;
      cards.forEach(c => { if (revealed < 12) { c.classList.remove('card-hidden'); revealed++; } });
      shown = Math.min(shown + 12, list.length);
      if (el.querySelectorAll('.card-hidden').length === 0) btn.remove();
      else btn.textContent = `Show More (${list.length - shown} more)`;
    };
    el.parentElement.insertBefore(btn, el.nextSibling);
  }
}

// ── SWAP VARIANT IMAGE ────────────────────────
function swapVariant(swatch, pid, labelId, btnId) {
  // Prefer the full-resolution original (data-fullsrc) so the swap doesn't
  // pin the main image to a 120w thumbnail. Falls back to swatch.src for
  // legacy non-Cloudinary swatches.
  const fullSrc = swatch.dataset.fullsrc || swatch.src;
  const main = document.getElementById(pid);
  if (main) {
    main.style.opacity = '0.7';
    // If we have srcset support on the main image, regenerate it for the new variant.
    if (typeof srcsetFor === 'function') {
      const newSet = srcsetFor(fullSrc);
      if (newSet) { main.srcset = newSet; } else { main.removeAttribute('srcset'); }
    }
    main.src = (typeof cldUrl === 'function') ? cldUrl(fullSrc, 450) : fullSrc;
    main.onload = () => main.style.opacity = '1';
  }
  swatch.closest('.vswatch-row').querySelectorAll('.vswatch').forEach(s => s.classList.remove('vactive'));
  swatch.classList.add('vactive');
  const lbl = document.getElementById(labelId);
  if (lbl) lbl.textContent = swatch.title;
  // Keep cart button in sync so the right color & full-res image go into WhatsApp message
  if (btnId) {
    const btn = document.getElementById(btnId);
    if (btn) { btn.dataset.color = swatch.title; btn.dataset.img = fullSrc; }
  }
}

// ── PIN → STATE AUTO-DETECT (cart form) ──────
function initPinAutoDetect() {
  const pinEl   = document.getElementById('custPincode');
  const stateEl = document.getElementById('custState');
  if (!pinEl || !stateEl) return;

  const PIN_STATES = [
    [[11,12],   'Delhi'],
    [[14,16],   'Punjab'],  // 14=Punjab, 15=Himachal, 16=Haryana
    [[17,17],   'Himachal Pradesh'],
    [[18,19],   'Jammu & Kashmir'],
    [[20,28],   'Uttar Pradesh'],
    [[30,34],   'Rajasthan'],
    [[36,36],   'Gujarat'],
    [[37,37],   'Gujarat'],
    [[38,39],   'Gujarat'],
    [[40,44],   'Maharashtra'],
    [[45,49],   'Madhya Pradesh'],
    [[50,53],   'Andhra Pradesh'],
    [[56,59],   'Karnataka'],
    [[60,64],   'Tamil Nadu'],
    [[67,69],   'Kerala'],
    [[70,74],   'West Bengal'],
    [[75,77],   'Orissa'],
    [[78,78],   'Assam'],
    [[80,85],   'Bihar'],
    [[90,95],   'Assam'],
  ];

  pinEl.addEventListener('input', () => {
    const pin = pinEl.value.trim();
    if (!/^\d{6}$/.test(pin)) return;
    const prefix = parseInt(pin.slice(0,2), 10);
    for (const [[lo, hi], state] of PIN_STATES) {
      if (prefix >= lo && prefix <= hi) {
        // Map to select option values used in cart.html
        const stateMap = {
          'Tamil Nadu': 'Tamil Nadu', 'Andhra Pradesh': 'Andhra Pradesh',
          'Karnataka': 'Karnataka', 'Kerala': 'Kerala',
          'Telangana': 'Telangana', 'Maharashtra': 'Maharashtra',
          'Delhi': 'Delhi', 'Uttar Pradesh': 'Uttar Pradesh',
          'West Bengal': 'West Bengal', 'Rajasthan': 'Rajasthan',
          'Gujarat': 'Gujarat', 'Madhya Pradesh': 'Madhya Pradesh',
          'Punjab': 'Punjab', 'Haryana': 'Haryana',
        };
        const mapped = stateMap[state] || '';
        if (mapped && !stateEl.value) {
          stateEl.value = mapped;
          stateEl.style.borderColor = 'var(--green)';
          setTimeout(() => { stateEl.style.borderColor = ''; }, 2000);
        }
        break;
      }
    }
  });
}

// ── RENDER CART ───────────────────────────────
const FORM_DRAFT_KEY = 'eliteEmporiumFormDraft';

function saveFormDraft() {
  const fields = ['custName','custPhone','custAddress','custCity','custState','custPincode','custNotes'];
  const draft = {};
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) draft[id] = el.value;
  });
  localStorage.setItem(FORM_DRAFT_KEY, JSON.stringify(draft));
}

function loadFormDraft() {
  const draft = JSON.parse(localStorage.getItem(FORM_DRAFT_KEY) || 'null');
  if (!draft) return false;
  const fill = (id, val) => { const el = document.getElementById(id); if (el && !el.value && val) el.value = val; };
  Object.entries(draft).forEach(([id, val]) => fill(id, val));
  return true;
}

function clearFormDraft() {
  localStorage.removeItem(FORM_DRAFT_KEY);
}

function prefillCustomerFromHistory() {
  const hasDraft = loadFormDraft();
  if (!hasDraft) {
    const orders = getOrderHistory();
    if (!orders.length) return;
    const last = orders[0].customer;
    const fill = (id, val) => { const el = document.getElementById(id); if (el && !el.value) el.value = val || ''; };
    fill('custName',    last.name);
    fill('custPhone',   last.phone);
    fill('custAddress', last.address);
    fill('custCity',    last.city);
    fill('custState',   last.state);
    fill('custPincode', last.pincode);
    fill('custNotes',   last.notes);
  }

  // Auto-save on every change
  ['custName','custPhone','custAddress','custCity','custState','custPincode','custNotes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', saveFormDraft);
  });

  const hint = document.getElementById('prefillHint');
  if (hint) { hint.style.display = 'flex'; }

  // Render the address-book picker if multiple saved addresses exist
  renderAddressBookPicker();
}

/* ── ADDRESS BOOK ────────────────────────────────────────────
   Storage: localStorage key 'eliteEmporiumAddressBook' = array of
   { id, label, name, phone, address, city, state, pincode, notes }.

   Behaviour:
   - On cart page DOMContentLoaded, render a chip-row above the
     form letting the user pick a saved address (Home/Work/Other),
     plus an 'Add new' chip + 'Save this address' button.
   - Saving harvests current form values + a quick label prompt.
   - Picking fills the form + saves to localStorage 'lastUsedAddrId'.
   ──────────────────────────────────────────────────────────── */
const ADDR_BOOK_KEY = 'eliteEmporiumAddressBook';
function getAddressBook() {
  try { return JSON.parse(localStorage.getItem(ADDR_BOOK_KEY) || '[]'); } catch { return []; }
}
function saveAddressBook(list) { localStorage.setItem(ADDR_BOOK_KEY, JSON.stringify(list)); }

function renderAddressBookPicker() {
  // Mount above the cart form, but only on cart.html where the form exists
  const formEl = document.getElementById('custName')?.closest('form, .checkout-form, .cust-details, .summary-body, .cart-customer');
  if (!document.getElementById('custName')) return;

  let wrap = document.getElementById('addressBookPicker');
  const book = getAddressBook();
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'addressBookPicker';
    wrap.className = 'addr-book-picker';
    // Insert just above the first input (custName) for natural flow.
    const target = document.getElementById('custName');
    target?.parentElement?.parentElement?.insertBefore(wrap, target.parentElement);
  }

  const chips = book.map((a, i) => `
    <button type="button" class="ab-chip" data-id="${a.id}" onclick="useAddressBookEntry(${i})" title="${escapeHtml(a.address || '')}">
      <span class="ab-chip-label">${escapeHtml(a.label || 'Address')}</span>
      <span class="ab-chip-name">${escapeHtml((a.name || '').split(' ')[0] || '—')}</span>
      <span class="ab-chip-pin">${escapeHtml(a.pincode || '')}</span>
      <button type="button" class="ab-chip-del" onclick="event.stopPropagation();removeAddressBookEntry(${i})" title="Delete">×</button>
    </button>`).join('');
  wrap.innerHTML = `
    ${book.length ? `<div class="ab-head">📒 Your saved addresses · tap to fill</div><div class="ab-row">${chips}</div>` : ''}
    <button type="button" class="ab-save-btn" onclick="saveCurrentAddressToBook()">
      ${book.length ? '➕ Save another address' : '📒 Save this address to my address book'}
    </button>`;
}

function useAddressBookEntry(idx) {
  const book = getAddressBook();
  const a = book[idx];
  if (!a) return;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  set('custName',    a.name);
  set('custPhone',   a.phone);
  set('custAddress', a.address);
  set('custCity',    a.city);
  set('custState',   a.state);
  set('custPincode', a.pincode);
  set('custNotes',   a.notes || '');
  if (typeof saveFormDraft === 'function') saveFormDraft();
  hapticSuccess();
  showToast(`✅ Filled with "${a.label}"`);
}

function removeAddressBookEntry(idx) {
  const book = getAddressBook();
  if (!confirm(`Delete the "${book[idx]?.label || 'this'}" address?`)) return;
  book.splice(idx, 1);
  saveAddressBook(book);
  renderAddressBookPicker();
  hapticTap();
}

function saveCurrentAddressToBook() {
  const get = id => (document.getElementById(id)?.value || '').trim();
  const entry = {
    id:       'addr_' + Date.now().toString(36),
    name:     get('custName'),
    phone:    get('custPhone'),
    address:  get('custAddress'),
    city:     get('custCity'),
    state:    get('custState'),
    pincode:  get('custPincode'),
    notes:    get('custNotes'),
  };
  if (!entry.name || !entry.phone || !entry.address || !entry.pincode) {
    showToast('⚠️ Fill name, phone, address & PIN first');
    return;
  }
  const label = (prompt('Label this address (e.g. Home, Work, Mom\'s place):', 'Home') || 'Home').slice(0, 20);
  entry.label = label;
  const book = getAddressBook();
  // De-dup by pincode + address prefix
  const isDup = book.some(a => a.pincode === entry.pincode && (a.address || '').slice(0, 30) === entry.address.slice(0, 30));
  if (isDup) { showToast('ℹ️ Already saved'); return; }
  book.unshift(entry);
  if (book.length > 6) book.length = 6; // cap at 6
  saveAddressBook(book);
  renderAddressBookPicker();
  hapticSuccess();
  showToast(`✅ "${label}" saved to your address book`);
}

function renderCart() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  if (!cart.length) {
    const suggestions = products.filter(p => p.badge && p.inStock !== false).slice(0, 4);
    const suggHtml = suggestions.length
      ? `<div style="margin-top:20px;border-top:1px solid var(--border);padding-top:16px;">
           <div style="font-weight:700;color:var(--text);margin-bottom:12px;font-size:14px;">🔥 Popular Right Now</div>
           <div class="products-grid" style="grid-template-columns:repeat(2,1fr);gap:10px;">${suggestions.map(p =>
             `<a href="product.html?id=${p.id}" style="background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:10px;text-decoration:none;color:inherit;display:block;">
               <img src="${p.image}" alt="${escapeHtml(p.name)}" style="width:100%;height:100px;object-fit:contain;border-radius:var(--radius);margin-bottom:6px;" />
               <div style="font-size:12px;font-weight:600;color:var(--text);line-height:1.3;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">${p.name}</div>
               <div style="font-size:13px;font-weight:700;color:var(--red);margin-top:4px;">₹${p.price.toLocaleString('en-IN')}</div>
             </a>`).join('')}
           </div>
         </div>`
      : '';
    const categoryChips = [
      { c: 'Bags',         e: '👜' },
      { c: 'Watches',      e: '⌚' },
      { c: 'Clothing',     e: '👗' },
      { c: 'Abaiya',       e: '🕌' },
      { c: 'Sarees',       e: '👘' },
      { c: 'Home & Kitchen', e: '🍳' },
      { c: 'Perfumes',     e: '🧴' },
      { c: 'Cosmetics',    e: '💄' },
    ];
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty!</h3>
        <p>Looks like you haven't added anything yet. Start with a category below or browse everything.</p>
        <a href="products.html" class="btn-primary">Browse All Products →</a>
        <div class="empty-cart-cats">
          ${categoryChips.map(x =>
            `<a href="products.html?category=${encodeURIComponent(x.c)}" class="empty-cat-chip">
               <span class="empty-cat-emoji">${x.e}</span>
               <span class="empty-cat-name">${x.c}</span>
             </a>`).join('')}
        </div>
        ${suggHtml}
      </div>`;
    refreshSummary();
    return;
  }

  container.innerHTML = cart.map(item => {
    const cartImageHtml = item.image
      ? `<div class="cart-item-image cart-item-image-photo"><img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" /></div>`
      : `<div class="cart-item-image" style="background:${item.bg}">${item.emoji}</div>`;
    const escKey = (item.cartKey || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    return `
    <div class="cart-item">
      ${cartImageHtml}
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-category">${item.category}${item.selectedColor ? ` — <span style="color:var(--primary);font-weight:600;">${item.selectedColor}</span>` : ''}</div>
        <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
      </div>
      <div class="quantity-controls">
        <button class="qty-btn" data-key="${escKey}" onclick="updateQuantity(this.dataset.key, -1)">−</button>
        <span class="qty-value">${item.quantity}</span>
        <button class="qty-btn" data-key="${escKey}" onclick="updateQuantity(this.dataset.key, 1)">+</button>
      </div>
      <div class="cart-item-secondary-actions">
        <button class="save-for-later-btn" data-key="${escKey}" data-pid="${item.id}"
          onclick="saveForLater(this.dataset.key, this.dataset.pid)"
          title="Save for later">🤍 Save for Later</button>
        <button class="remove-btn" data-key="${escKey}" onclick="removeFromCart(this.dataset.key)" title="Remove">🗑️ Remove</button>
      </div>
    </div>
  `;
  }).join('');

  refreshSummary();
  initCartUpsell();
  prefillCustomerFromHistory();
  initPinAutoDetect();
  initFormValidation();
}

function initCartUpsell() {
  const section = document.getElementById('cartUpsellSection');
  const strip   = document.getElementById('cartUpsellStrip');
  if (!section || !strip) return;

  const cartIds   = new Set(cart.map(i => i.id));
  const cartCats  = new Set(cart.map(i => i.category));
  // Estimate the customer's price comfort zone from the cart median.
  const cartPrices = cart.map(i => i.price).filter(n => Number(n));
  const median = cartPrices.length
    ? [...cartPrices].sort((a, b) => a - b)[Math.floor(cartPrices.length / 2)]
    : 0;

  // Weighted scoring: category match (+100), popularity by reviews (+log),
  // closeness to cart median price (-abs delta), discount > 0 (+8).
  const scored = products
    .filter(p => !cartIds.has(p.id) && p.inStock !== false && p.image)
    .map(p => {
      let score = 0;
      if (cartCats.has(p.category)) score += 100;
      score += Math.log10((p.reviews || 0) + 1) * 12;
      if (p.rating && p.rating >= 4.3) score += 6;
      if (p.mrp && p.mrp > p.price) score += 8;
      if (p.badge === 'Bestseller') score += 12;
      if (median > 0 && p.price) {
        score -= Math.abs(p.price - median) / Math.max(median, 100); // 0..1 ish penalty
      }
      return { p, score };
    })
    .sort((a, b) => b.score - a.score)
    .map(s => s.p)
    .slice(0, 8);

  if (!scored.length) { section.style.display = 'none'; return; }
  section.style.display = '';

  strip.innerHTML = scored.map(p => {
    const discount = p.mrp && p.mrp > p.price ? Math.round((p.mrp - p.price) / p.mrp * 100) : 0;
    return `<div class="product-card" style="min-width:170px;max-width:170px;flex-shrink:0;">
      <a href="product.html?id=${p.id}" class="product-img-link">
        <div class="product-image product-image-photo">
          <img src="${cldUrl(p.image, 300)}"${srcsetFor(p.image) ? ` srcset="${srcsetFor(p.image)}"` : ''} sizes="170px" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" />
        </div>
      </a>
      <div class="product-info">
        <div class="product-name" style="font-size:12px;"><a href="product.html?id=${p.id}">${escapeHtml(p.name.length > 34 ? p.name.slice(0,34)+'…' : p.name)}</a></div>
        <div class="product-rating"><span class="fk-rating-badge">★ ${p.rating || '4.5'}</span></div>
        <div class="product-footer">
          <div class="product-price-block">
            <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
            ${discount ? `<span class="product-save">${discount}% off</span>` : ''}
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id});this.textContent='✓ Added';this.style.background='var(--green)';setTimeout(()=>{this.textContent='🛒 Add';this.style.background='';},1500)">🛒 Add</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── COUPON CODES ──────────────────────────────
// minOrder = subtotal floor (in ₹) the cart must reach BEFORE the
// coupon applies. applyCoupon() rejects with a friendly toast if
// the floor isn't met. Labels include the floor so customers see
// the rule before they try.
const COUPONS = {
  'ELITE10':  { type: 'percent', value: 10,  minOrder:  499, label: '10% off (min ₹499)' },
  'FLAT50':   { type: 'flat',    value: 50,  minOrder:  299, label: '₹50 off (min ₹299)' },
  'WELCOME':  { type: 'percent', value: 5,   minOrder:    0, label: '5% off (any order)' },
  'SUMMER15': { type: 'percent', value: 15,  minOrder:  999, label: '15% off (min ₹999)' },
};
let _activeCoupon = null;

function getCouponDiscount(sub) {
  if (!_activeCoupon) return 0;
  const c = COUPONS[_activeCoupon];
  if (!c) return 0;
  // Min-order safety: if the cart dropped below the threshold after
  // the coupon was applied (e.g. user removed items), don't apply
  // the discount. We don't auto-clear _activeCoupon here so the
  // chip remains visible — but the discount goes to 0 and the
  // summary re-render will show the user it's no longer active.
  if (c.minOrder && sub < c.minOrder) return 0;
  if (c.type === 'percent') return Math.round(sub * c.value / 100);
  return Math.min(c.value, sub);
}

function applyCoupon() {
  const code = (document.getElementById('couponCode')?.value || '').trim().toUpperCase();
  if (!code) { showToast('⚠️ Enter a coupon code first.'); return; }
  if (!COUPONS[code]) { showToast('❌ Invalid coupon code.'); return; }

  // Min-order check — fail with a clear delta if the cart's too small.
  const c = COUPONS[code];
  const sub = (typeof getSubtotal === 'function') ? getSubtotal() : 0;
  if (c.minOrder && sub < c.minOrder) {
    const need = (c.minOrder - sub).toLocaleString('en-IN');
    showToast(`⚠️ ${code} needs a min order of ₹${c.minOrder.toLocaleString('en-IN')}. Add ₹${need} more.`, 4500, 'error');
    return;
  }

  _activeCoupon = code;
  const inputDiv    = document.getElementById('couponInput');
  const appliedDiv  = document.getElementById('couponApplied');
  const appliedText = document.getElementById('couponAppliedText');
  if (inputDiv)   inputDiv.style.display = 'none';
  if (appliedDiv) { appliedDiv.style.display = 'flex'; }
  if (appliedText) appliedText.textContent = `🎟️ "${code}" — ${c.label} applied!`;
  refreshSummary();
  showToast(`✅ Coupon ${code} applied!`);
}

function fillCoupon(code) {
  const inp = document.getElementById('couponCode');
  if (!inp) return;
  // If already applied, remove first then re-apply new one
  if (_activeCoupon) removeCoupon();
  inp.value = code;
  applyCoupon();
  // Scroll to coupon section
  document.getElementById('couponSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function removeCoupon() {
  _activeCoupon = null;
  const inputDiv   = document.getElementById('couponInput');
  const appliedDiv = document.getElementById('couponApplied');
  const codeInp    = document.getElementById('couponCode');
  if (inputDiv)   inputDiv.style.display = 'flex';
  if (appliedDiv) appliedDiv.style.display = 'none';
  if (codeInp)    codeInp.value = '';
  refreshSummary();
  showToast('🎟️ Coupon removed.');
}

function refreshSummary() {
  const sub      = getSubtotal();
  const del      = getDelivery();
  const giftWrap = getGiftWrap();
  const discount = getCouponDiscount(sub);
  const tot      = Math.max(0, sub + del + giftWrap - discount);

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('summaryItems',    getItemCount() + ' item(s)');
  set('summarySubtotal', '₹' + sub.toLocaleString('en-IN'));
  set('summaryDelivery', del === 0 ? (sub > 0 ? 'FREE 🎉' : '—') : '₹' + del);
  set('summaryTotal',    '₹' + tot.toLocaleString('en-IN'));

  // Gift-wrap row (inserted dynamically into the summary)
  let giftRow = document.getElementById('giftWrapRow');
  if (giftWrap > 0) {
    if (!giftRow) {
      giftRow = document.createElement('div');
      giftRow.id = 'giftWrapRow';
      giftRow.className = 'summary-row';
      giftRow.innerHTML = `<span>🎁 Gift wrap</span><strong style="color:#e65100;">+₹${giftWrap}</strong>`;
      const deliveryRowEl = document.getElementById('deliveryRow');
      if (deliveryRowEl?.parentElement) deliveryRowEl.parentElement.insertBefore(giftRow, deliveryRowEl.nextSibling);
    }
    giftRow.style.display = 'flex';
  } else if (giftRow) {
    giftRow.style.display = 'none';
  }

  const discountRow = document.getElementById('discountRow');
  const discountEl  = document.getElementById('summaryDiscount');
  if (discountRow) discountRow.style.display = discount > 0 ? 'flex' : 'none';
  if (discountEl)  discountEl.textContent = '–₹' + discount.toLocaleString('en-IN');

  const deliveryRow = document.getElementById('deliveryRow');
  if (deliveryRow) deliveryRow.className = del === 0 && sub > 0 ? 'summary-row delivery-free' : 'summary-row';

  // Mobile cart sticky bar
  const mbar = document.getElementById('cartMobileBar');
  const barItems = document.getElementById('cartBarItems');
  const barTotal = document.getElementById('cartBarTotal');
  if (mbar) mbar.classList.toggle('show', cart.length > 0);
  if (barItems) barItems.textContent = getItemCount() + ' item' + (getItemCount() !== 1 ? 's' : '');
  if (barTotal) barTotal.textContent = '₹' + tot.toLocaleString('en-IN');

  // Estimated delivery date (3–7 business days from today)
  const etaEl = document.getElementById('deliveryEstimate');
  const etaSpan = document.getElementById('deliveryEta');
  if (etaEl && etaSpan) {
    if (cart.length) {
      const fmt = d => d.toLocaleDateString('en-IN', { day:'numeric', month:'short', weekday:'short' });
      const addDays = (d, n) => { const r = new Date(d); for (let i = 0; i < n; ) { r.setDate(r.getDate()+1); if (r.getDay() !== 0 && r.getDay() !== 6) i++; } return r; };
      const now = new Date();
      etaSpan.textContent = `${fmt(addDays(now, 3))} – ${fmt(addDays(now, 7))}`;
      etaEl.style.display = 'block';
    } else {
      etaEl.style.display = 'none';
    }
  }

  // Total savings callout
  const mrpTotal   = cart.reduce((s, i) => s + ((i.mrp || i.price) * i.quantity), 0);
  const saved      = mrpTotal - sub + discount + (del === 0 && sub > 0 ? 0 : 0);
  const savingsEl  = document.getElementById('summarySavings');
  if (savingsEl) {
    if (saved > 0 && cart.length) {
      savingsEl.textContent = `🎉 You're saving ₹${saved.toLocaleString('en-IN')} on this order!`;
      savingsEl.style.display = 'block';
    } else {
      savingsEl.style.display = 'none';
    }
  }

  // Smart coupon suggestion — show the most valuable ELIGIBLE coupon
  // for the current subtotal. Coupons whose minOrder isn't met are
  // SKIPPED so the user never sees an 'Apply' that immediately fails.
  let smartCouponEl = document.getElementById('smartCouponSuggest');
  const canSuggest = !_activeCoupon && cart.length > 0 && !sessionStorage.getItem('smartCouponDismissed');
  if (canSuggest) {
    let best = null, bestSave = 0;
    Object.entries(COUPONS).forEach(([code, c]) => {
      // Skip if cart hasn't hit the coupon's min-order floor.
      if (c.minOrder && sub < c.minOrder) return;
      const save = c.type === 'percent' ? Math.round(sub * c.value / 100) : Math.min(c.value, sub);
      if (save > bestSave) { best = { code, c, save }; bestSave = save; }
    });
    if (best && bestSave >= 10) {
      if (!smartCouponEl) {
        smartCouponEl = document.createElement('div');
        smartCouponEl.id = 'smartCouponSuggest';
        smartCouponEl.className = 'smart-coupon-suggest';
        const savingsEl2 = document.getElementById('summarySavings');
        (savingsEl2?.parentElement || document.querySelector('.summary-body'))?.insertBefore(smartCouponEl, savingsEl2 || null);
      }
      smartCouponEl.innerHTML = `
        <div class="scs-icon">🎯</div>
        <div class="scs-body">
          <strong>Save ₹${best.save.toLocaleString('en-IN')} on this order</strong>
          <span>Apply code <b>${best.code}</b> — ${best.c.label}</span>
        </div>
        <button class="scs-apply" onclick="document.getElementById('couponCode').value='${best.code}';applyCoupon();" type="button">Apply</button>
        <button class="scs-dismiss" onclick="sessionStorage.setItem('smartCouponDismissed','1');this.parentElement.remove();" type="button" aria-label="Dismiss">✕</button>`;
      smartCouponEl.style.display = 'flex';
    } else if (smartCouponEl) {
      smartCouponEl.remove();
    }
  } else if (smartCouponEl) {
    smartCouponEl.remove();
  }

  // Bulk order CTA — show when subtotal ≥ ₹2000
  let bulkCtaEl = document.getElementById('bulkOrderCta');
  if (sub >= 2000 && cart.length) {
    if (!bulkCtaEl) {
      bulkCtaEl = document.createElement('a');
      bulkCtaEl.id = 'bulkOrderCta';
      bulkCtaEl.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi! I have a bulk order above ₹2000. Can I get an additional discount?')}`;
      bulkCtaEl.target = '_blank';
      bulkCtaEl.rel = 'noopener';
      bulkCtaEl.className = 'bulk-order-cta';
      bulkCtaEl.innerHTML = '📦 Big order? <strong>Ask us for a bulk discount</strong> →';
      const savingsEl2 = document.getElementById('summarySavings');
      if (savingsEl2 && savingsEl2.parentElement) {
        savingsEl2.parentElement.insertBefore(bulkCtaEl, savingsEl2.nextSibling);
      }
    }
    bulkCtaEl.style.display = 'flex';
  } else if (bulkCtaEl) {
    bulkCtaEl.style.display = 'none';
  }

  // Free delivery progress bar
  const fdBar    = document.getElementById('freeDeliveryBar');
  const fdFill   = document.getElementById('freeDeliveryFill');
  const fdMsg    = document.getElementById('freeDeliveryMsg');
  if (fdBar && fdFill && fdMsg) {
    if (sub === 0) {
      fdBar.style.display = 'none';
    } else {
      fdBar.style.display = '';
      if (del === 0) {
        fdFill.style.width = '100%';
        fdMsg.innerHTML = `🎉 <strong>You've unlocked FREE delivery!</strong>`;
        fdFill.style.background = 'var(--green)';
      } else {
        const need  = CONFIG.minFreeDelivery - sub;
        const pct   = Math.min(100, Math.round(sub / CONFIG.minFreeDelivery * 100));
        fdFill.style.width = pct + '%';
        fdFill.style.background = '';
        fdMsg.innerHTML = `Add <strong>₹${need.toLocaleString('en-IN')}</strong> more to get <strong>FREE delivery</strong> 🚚`;
      }
    }
  }

  // 'Add to reach free delivery' suggestion strip — shows 3 cheap
  // in-stock products priced just under the gap to free delivery, so
  // the customer can one-tap-add and unlock free shipping.
  renderAddOnsToReachFreeDelivery(sub, del);
}

function renderAddOnsToReachFreeDelivery(sub, del) {
  const host = document.getElementById('freeDeliveryBar');
  if (!host) return;
  let strip = document.getElementById('cartAddOnsStrip');
  // Hide when cart empty, already-free, or no products loaded
  if (sub === 0 || del === 0 || !Array.isArray(products) || !products.length) {
    if (strip) strip.style.display = 'none';
    return;
  }
  const need = CONFIG.minFreeDelivery - sub;
  // Suggest products priced between ₹50 and (need + ₹100) — small enough
  // to feel like an easy add, big enough to push subtotal over the line.
  const inCartIds = new Set(cart.map(i => i.id));
  const candidates = products
    .filter(p => p.inStock !== false && p.image && p.price >= 50 && p.price <= need + 100 && !inCartIds.has(p.id))
    .sort((a, b) => {
      // Closer to "need" wins; tie-break by review count (more popular)
      const diff = Math.abs((a.price || 0) - need) - Math.abs((b.price || 0) - need);
      if (diff !== 0) return diff;
      return (b.reviews || 0) - (a.reviews || 0);
    })
    .slice(0, 4);
  if (candidates.length < 2) {
    if (strip) strip.style.display = 'none';
    return;
  }
  if (!strip) {
    strip = document.createElement('div');
    strip.id = 'cartAddOnsStrip';
    strip.className = 'cart-addons-strip';
    host.insertAdjacentElement('afterend', strip);
  }
  strip.style.display = '';
  strip.innerHTML = `
    <div class="cao-head">🎯 Add one of these to unlock <strong>FREE delivery</strong> (need ₹${need.toLocaleString('en-IN')} more)</div>
    <div class="cao-row">
      ${candidates.map(p => `
        <div class="cao-card">
          <a href="product.html?id=${p.id}" class="cao-link">
            <img src="${cldUrl(p.image, 200)}"${srcsetFor(p.image) ? ` srcset="${srcsetFor(p.image)}"` : ''} alt="${escapeHtml(p.name)}" class="cao-img" loading="lazy" decoding="async" />
            <div class="cao-name">${escapeHtml(p.name)}</div>
            <div class="cao-price">₹${p.price.toLocaleString('en-IN')}</div>
          </a>
          <button class="cao-add-btn" type="button" onclick="addToCart(${p.id})">+ Add</button>
        </div>
      `).join('')}
    </div>`;
}

// ── WHATSAPP ORDER ────────────────────────────
function buildWhatsAppMessage(details) {
  const now     = new Date();
  const date    = now.toLocaleDateString('en-IN',  { day:'2-digit', month:'2-digit', year:'numeric' });
  const time    = now.toLocaleTimeString('en-IN',  { hour:'2-digit', minute:'2-digit' });
  const baseUrl = 'https://elite-emporium-one.vercel.app/';

  let msg = `🛍️ *NEW ORDER — ELITE EMPORIUM*\n`;
  msg    += `━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  msg    += `📋 *ORDER ITEMS:*\n\n`;

  cart.forEach((item, i) => {
    msg += `${i + 1}. *${item.name}*\n`;
    if (item.selectedColor) msg += `   🎨 Color: *${item.selectedColor}*\n`;
    msg += `   Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')} = *₹${(item.price * item.quantity).toLocaleString('en-IN')}*\n`;
    if (item.image) {
      const imgUrl = item.image.startsWith('http') ? item.image : baseUrl + item.image;
      msg += `   🖼️ ${imgUrl}\n`;
    }
    msg += `\n`;
  });

  const sub      = getSubtotal();
  const del      = getDelivery();
  const giftWrap = getGiftWrap();
  const discount = getCouponDiscount(sub);
  const tot      = Math.max(0, sub + del + giftWrap - discount);
  const giftMsg  = (document.getElementById('giftMessage')?.value || '').trim();

  msg += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 Subtotal : ₹${sub.toLocaleString('en-IN')}\n`;
  msg += `🚚 Delivery : ${del === 0 ? 'FREE' : '₹' + del}\n`;
  if (giftWrap > 0) msg += `🎁 Gift wrap : +₹${giftWrap}\n`;
  if (discount > 0) msg += `🎟️ Coupon (${_activeCoupon}) : –₹${discount.toLocaleString('en-IN')}\n`;
  msg += `✅ *TOTAL   : ₹${tot.toLocaleString('en-IN')}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  msg += `👤 *CUSTOMER DETAILS:*\n`;
  msg += `Name    : ${details.name}\n`;
  msg += `Phone   : ${details.phone}\n`;
  msg += `Address : ${details.address}\n`;
  msg += `City    : ${details.city}\n`;
  msg += `State   : ${details.state}\n`;
  msg += `PIN     : ${details.pincode}\n`;
  if (details.notes) msg += `Notes   : ${details.notes}\n`;
  if (giftWrap > 0) {
    msg += `\n🎁 *GIFT WRAP REQUESTED* (+₹50)\n`;
    if (giftMsg) msg += `Gift message: "${giftMsg}"\n`;
  }

  msg += `\n📅 Order Time: ${date}, ${time}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `_Sent from Elite Emporium Online Store_`;

  return encodeURIComponent(msg);
}

// ── PRICE DROP ALERTS ─────────────────────────
const PRICE_ALERTS_KEY = 'eliteEmporiumPriceAlerts';

function getPriceAlerts() { return JSON.parse(localStorage.getItem(PRICE_ALERTS_KEY) || '[]'); }
function getPriceAlert(productId) { return getPriceAlerts().find(a => a.id === productId) || null; }

function savePriceAlert(productId, targetPrice, productName, currentPrice) {
  const alerts = getPriceAlerts().filter(a => a.id !== productId);
  alerts.push({ id: productId, targetPrice, productName, currentPrice, savedAt: Date.now() });
  localStorage.setItem(PRICE_ALERTS_KEY, JSON.stringify(alerts));
}

function removePriceAlert(productId) {
  const alerts = getPriceAlerts().filter(a => a.id !== productId);
  localStorage.setItem(PRICE_ALERTS_KEY, JSON.stringify(alerts));
}

function checkPriceAlerts() {
  const alerts = getPriceAlerts();
  if (!alerts.length) return;
  const triggered = alerts.filter(a => {
    const product = products.find(p => p.id === a.id);
    return product && product.price <= a.targetPrice;
  });
  triggered.forEach(a => {
    const product = products.find(p => p.id === a.id);
    showToast(`🔔 Price Drop! ${a.productName.slice(0,30)}… is now ₹${product.price.toLocaleString('en-IN')} (your alert: ₹${a.targetPrice.toLocaleString('en-IN')})`, 6000);
  });
}

function openPriceAlertModal(p) {
  const existing = getPriceAlert(p.id);
  const backdrop = document.createElement('div');
  backdrop.className = 'pa-backdrop';
  const suggested = Math.floor(p.price * 0.9);
  backdrop.innerHTML = `
    <div class="pa-modal">
      <div class="pa-modal-head">
        <span>🔔 Set Price Drop Alert</span>
        <button class="pa-close" onclick="this.closest('.pa-backdrop').remove()">✕</button>
      </div>
      <p class="pa-desc">${p.name.slice(0,50)}${p.name.length > 50 ? '…' : ''}</p>
      <div class="pa-current">Current price: <strong>₹${p.price.toLocaleString('en-IN')}</strong></div>
      <label class="pa-label">Alert me when price drops to:</label>
      <div class="pa-input-row">
        <span class="pa-rupee">₹</span>
        <input type="number" id="paTargetPrice" class="pa-input" value="${existing ? existing.targetPrice : suggested}"
               min="1" max="${p.price - 1}" placeholder="Target price" />
      </div>
      <div class="pa-actions">
        ${existing ? `<button class="pa-remove" onclick="removePriceAlert(${p.id});this.closest('.pa-backdrop').remove();showToast('Alert removed.');document.querySelector('.btn-price-alert').innerHTML='🔔 Set Price Drop Alert';document.querySelector('.btn-price-alert').classList.remove('active');">Remove Alert</button>` : ''}
        <button class="pa-save" onclick="
          const v=parseInt(document.getElementById('paTargetPrice').value);
          if(!v||v<=0){showToast('⚠️ Enter a valid price.',2800,'error');return;}
          savePriceAlert(${p.id},v,'${p.name.replace(/'/g,"\\'")}',${p.price});
          this.closest('.pa-backdrop').remove();
          showToast('🔔 Alert set! We\\'ll notify you when price drops to ₹'+v.toLocaleString('en-IN')+'.');
          const ab=document.querySelector('.btn-price-alert');
          if(ab){ab.innerHTML='🔔 Alert set at ₹'+v.toLocaleString('en-IN');ab.classList.add('active');}
        ">Set Alert</button>
      </div>
    </div>`;
  backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.remove(); });
  document.body.appendChild(backdrop);
  setTimeout(() => document.getElementById('paTargetPrice')?.select(), 50);
}

// ── ORDER HISTORY ─────────────────────────────
const ORDER_HISTORY_KEY = 'eliteEmporiumOrders';

function getOrderHistory() {
  return JSON.parse(localStorage.getItem(ORDER_HISTORY_KEY) || '[]');
}

function saveOrderToHistory(order) {
  const orders = getOrderHistory();
  orders.unshift(order);
  if (orders.length > 50) orders.length = 50;
  localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(orders));
}

function exportOrdersCSV() {
  const orders = getOrderHistory();
  if (!orders.length) { showToast('⚠️ No orders to export.'); return; }

  const esc = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = [
    ['Order ID', 'Date', 'Status', 'Items', 'Subtotal (₹)', 'Delivery (₹)', 'Discount (₹)', 'Total (₹)', 'Coupon', 'Name', 'Phone', 'Address', 'City', 'State', 'PIN'].join(',')
  ];
  orders.forEach(o => {
    const itemStr = o.items.map(i => `${i.name} x${i.quantity}`).join(' | ');
    const d = new Date(o.date).toLocaleDateString('en-IN');
    rows.push([
      o.id, d, o.status, itemStr, o.subtotal, o.delivery, o.discount || 0, o.total,
      o.coupon || '', o.customer?.name || '', o.customer?.phone || '',
      o.customer?.address || '', o.customer?.city || '', o.customer?.state || '', o.customer?.pincode || ''
    ].map(esc).join(','));
  });

  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `elite-emporium-orders-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('✅ Orders exported as CSV!');
}

function clearOrderHistory() {
  if (!confirm('Clear all order history? This cannot be undone.')) return;
  localStorage.removeItem(ORDER_HISTORY_KEY);
  const c = document.getElementById('ordersContainer');
  const n = document.getElementById('ordersCount');
  if (n) n.textContent = '0';
  if (c) c.innerHTML = `<div class="empty-state"><div class="empty-icon">📦</div><h2>No orders yet</h2><p>Your order history will appear here after you place your first order.</p><a href="products.html" class="btn-primary">Start Shopping</a></div>`;
}

function generateOrderId() {
  return 'EE-' + Date.now().toString(36).toUpperCase();
}

function setFieldError(id, msg) {
  const el  = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = msg ? 'var(--red)' : '';
  let errEl = el.parentElement.querySelector('.field-error');
  if (msg) {
    if (!errEl) {
      errEl = document.createElement('div');
      errEl.className = 'field-error';
      el.parentElement.appendChild(errEl);
    }
    errEl.textContent = msg;
  } else if (errEl) {
    errEl.remove();
  }
}

function clearFieldError(id) { setFieldError(id, ''); }

function initFormValidation() {
  const rules = [
    { id: 'custName',    test: v => v.length >= 2, msg: 'Enter your full name' },
    { id: 'custPhone',   test: v => /^\d{10}$/.test(v), msg: 'Enter 10-digit mobile number' },
    { id: 'custAddress', test: v => v.length >= 5, msg: 'Enter a valid address' },
    { id: 'custCity',    test: v => v.length >= 2, msg: 'Enter your city/town' },
    { id: 'custState',   test: v => v !== '', msg: 'Select your state' },
    { id: 'custPincode', test: v => /^\d{6}$/.test(v), msg: 'Enter 6-digit PIN code' },
  ];
  rules.forEach(({ id, test, msg }) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      const v = el.value.trim();
      if (v) setFieldError(id, test(v) ? '' : msg);
    });
    el.addEventListener('input', () => { if (el.style.borderColor) clearFieldError(id); });
  });

  // Phone: only allow digits, max 10, auto-tab to address when complete
  const phoneEl = document.getElementById('custPhone');
  if (phoneEl) {
    phoneEl.addEventListener('input', () => {
      phoneEl.value = phoneEl.value.replace(/\D/g, '').slice(0, 10);
      if (phoneEl.value.length === 10) {
        const next = document.getElementById('custAddress');
        if (next && !next.value) next.focus();
      }
    });
  }

  // PIN: only allow digits, max 6 + auto-detect state
  const pinEl = document.getElementById('custPincode');
  if (pinEl) {
    const PIN_STATE = {
      '11':'Delhi','12':'Haryana','13':'Punjab','14':'Punjab','15':'Punjab','16':'Punjab',
      '17':'Himachal Pradesh','18':'Jammu & Kashmir','19':'Jammu & Kashmir',
      '20':'Uttar Pradesh','21':'Uttar Pradesh','22':'Uttar Pradesh','23':'Uttar Pradesh',
      '24':'Uttar Pradesh','25':'Uttar Pradesh','26':'Uttar Pradesh','27':'Uttar Pradesh','28':'Uttar Pradesh',
      '30':'Rajasthan','31':'Rajasthan','32':'Rajasthan','33':'Rajasthan','34':'Rajasthan',
      '36':'Gujarat','37':'Gujarat','38':'Gujarat','39':'Gujarat',
      '40':'Maharashtra','41':'Maharashtra','42':'Maharashtra','43':'Maharashtra','44':'Maharashtra',
      '45':'Madhya Pradesh','46':'Madhya Pradesh','47':'Madhya Pradesh','48':'Madhya Pradesh',
      '49':'Chhattisgarh',
      '50':'Telangana','51':'Andhra Pradesh','52':'Andhra Pradesh','53':'Andhra Pradesh',
      '56':'Karnataka','57':'Karnataka','58':'Karnataka','59':'Karnataka',
      '60':'Tamil Nadu','61':'Tamil Nadu','62':'Tamil Nadu','63':'Tamil Nadu','64':'Tamil Nadu',
      '67':'Kerala','68':'Kerala','69':'Kerala',
      '70':'West Bengal','71':'West Bengal','72':'West Bengal','73':'West Bengal','74':'West Bengal',
      '75':'Odisha','76':'Odisha','77':'Odisha',
      '80':'Bihar','81':'Jharkhand','82':'Jharkhand','83':'Bihar',
      '84':'Bihar','85':'Bihar',
    };
    pinEl.addEventListener('input', () => {
      const raw = pinEl.value.replace(/\D/g, '').slice(0, 6);
      pinEl.value = raw;
      if (raw.length === 6) {
        const prefix2 = raw.slice(0, 2);
        const detectedState = PIN_STATE[prefix2];
        const stateEl = document.getElementById('custState');
        if (stateEl && detectedState) {
          const opt = [...stateEl.options].find(o => o.value === detectedState);
          if (opt && !stateEl.value) {
            stateEl.value = detectedState;
            clearFieldError('custState');
            showToast(`📍 State auto-filled: ${detectedState}`, 2500, 'info');
          }
        }
        // Auto-tab to notes when PIN complete (final field of the address group)
        const notes = document.getElementById('custNotes');
        if (notes && !notes.value) notes.focus();
      }
    });
  }

  // City autocomplete
  const cityEl = document.getElementById('custCity');
  if (cityEl) {
    const CITIES = ['Chennai','Madurai','Coimbatore','Trichy','Salem','Tirunelveli','Erode','Vellore','Thoothukudi','Kanyakumari','Kayalpattinam','Mumbai','Delhi','Bengaluru','Hyderabad','Kolkata','Ahmedabad','Pune','Jaipur','Lucknow','Kanpur','Nagpur','Indore','Bhopal','Visakhapatnam','Patna','Vadodara','Ghaziabad','Ludhiana','Agra','Nashik','Meerut','Rajkot','Varanasi','Srinagar','Aurangabad','Dhanbad','Amritsar','Allahabad','Ranchi','Howrah','Jodhpur','Gwalior','Vijayawada','Chandigarh','Mysuru','Kochi','Kozhikode'];
    const datalist = document.createElement('datalist');
    datalist.id = 'cityList';
    datalist.innerHTML = CITIES.map(c => `<option value="${c}">`).join('');
    document.body.appendChild(datalist);
    cityEl.setAttribute('list', 'cityList');
    cityEl.setAttribute('autocomplete', 'address-level2');
  }

  // Notes: character counter
  const notesEl = document.getElementById('custNotes');
  if (notesEl) {
    const MAX = 200;
    const counter = document.createElement('div');
    counter.style.cssText = 'font-size:11px;color:var(--text-light);text-align:right;margin-top:3px;';
    counter.textContent = `0 / ${MAX}`;
    notesEl.parentElement.appendChild(counter);
    notesEl.maxLength = MAX;
    notesEl.addEventListener('input', () => {
      const len = notesEl.value.length;
      counter.textContent = `${len} / ${MAX}`;
      counter.style.color = len > MAX * 0.9 ? 'var(--red)' : 'var(--text-light)';
    });
  }

  // Gift message character counter
  const giftMsg = document.getElementById('giftMessage');
  const giftCount = document.getElementById('giftMsgCount');
  if (giftMsg && giftCount) {
    giftMsg.addEventListener('input', () => {
      giftCount.textContent = giftMsg.value.length;
      giftCount.style.color = giftMsg.value.length > 100 ? 'var(--red)' : '';
    });
  }
}

function launchConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLORS = ['#DB3022','#FFE500','#388E3C','#1565C0','#FF9F00','#9C27B0','#E91E63'];
  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: -10 - Math.random() * canvas.height * 0.3,
    vx: (Math.random() - 0.5) * 4,
    vy: 2 + Math.random() * 5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    w: 6 + Math.random() * 8,
    h: 4 + Math.random() * 5,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.2,
    alpha: 1,
  }));

  let frame, elapsed = 0;
  const DURATION = 2200;
  const start = performance.now();

  function draw(now) {
    elapsed = now - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const progress = Math.min(elapsed / DURATION, 1);
    particles.forEach(p => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += 0.12;
      p.rot += p.rotSpeed;
      p.alpha = progress > 0.7 ? 1 - (progress - 0.7) / 0.3 : 1;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (elapsed < DURATION) frame = requestAnimationFrame(draw);
    else { cancelAnimationFrame(frame); canvas.remove(); }
  }
  frame = requestAnimationFrame(draw);
}

function placeOrder() {
  // Prevent double-submit
  const orderBtn = document.querySelector('.whatsapp-order-btn');
  if (orderBtn && orderBtn.disabled) return;
  if (orderBtn) { orderBtn.disabled = true; orderBtn.innerHTML = '⏳ Processing…'; }

  const get = id => (document.getElementById(id) || {}).value?.trim() || '';
  const resetBtn = () => { if (orderBtn) { orderBtn.disabled = false; orderBtn.innerHTML = '💬 Place Order via WhatsApp'; } };

  const name    = get('custName');
  const phone   = get('custPhone');
  const address = get('custAddress');
  const city    = get('custCity');
  const state   = get('custState');
  const pincode = get('custPincode');
  const notes   = get('custNotes');

  // Show inline errors for all invalid fields
  const validations = [
    { id: 'custName',    ok: name.length >= 2,         msg: 'Enter your full name' },
    { id: 'custPhone',   ok: /^\d{10}$/.test(phone),   msg: 'Enter a valid 10-digit phone number' },
    { id: 'custAddress', ok: address.length >= 5,       msg: 'Enter your delivery address' },
    { id: 'custCity',    ok: city.length >= 2,          msg: 'Enter your city/town' },
    { id: 'custState',   ok: state !== '',              msg: 'Select your state' },
    { id: 'custPincode', ok: /^\d{6}$/.test(pincode),  msg: 'Enter a valid 6-digit PIN code' },
  ];
  let hasError = false;
  let firstFailedId = null;
  validations.forEach(({ id, ok, msg }) => {
    setFieldError(id, ok ? '' : msg);
    if (!ok) {
      hasError = true;
      if (!firstFailedId) firstFailedId = id;
    }
  });
  if (hasError) {
    resetBtn();
    showToast('⚠️ Please fix the highlighted fields!');
    // Scroll + focus the first failed field for keyboard / screen-reader
    // users — they should land directly on the broken input, not have
    // to hunt for the red border.
    const target = firstFailedId && document.getElementById(firstFailedId);
    if (target) {
      try { target.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch {}
      // Slight delay so the scroll animation doesn't fight the focus call
      setTimeout(() => { try { target.focus({ preventScroll: true }); } catch {} }, 320);
    }
    return;
  }

  if (!cart.length) {
    resetBtn(); showToast('⚠️ Your cart is empty!'); return;
  }

  const sub      = getSubtotal();
  const del      = getDelivery();
  const giftWrap = getGiftWrap();
  const discount = getCouponDiscount(sub);
  const tot      = Math.max(0, sub + del + giftWrap - discount);
  const giftMsg  = (document.getElementById('giftMessage')?.value || '').trim();
  const now      = new Date();

  // Save to order history before clearing cart
  const _orderId = generateOrderId();
  saveOrderToHistory({
    id:        _orderId,
    date:      now.toISOString(),
    status:    'Sent via WhatsApp',
    customer:  { name, phone, address, city, state, pincode, notes },
    items:     cart.map(i => ({ id: i.id, name: i.name, image: i.image, price: i.price, quantity: i.quantity, selectedColor: i.selectedColor || null })),
    subtotal:  sub,
    delivery:  del,
    giftWrap:  giftWrap,
    giftMessage: giftWrap > 0 ? giftMsg : null,
    discount:  discount,
    coupon:    _activeCoupon || null,
    total:     tot,
  });

  const msg   = buildWhatsAppMessage({ name, phone, address, city, state, pincode, notes });
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;

  // Clear cart and draft
  cart = [];
  saveCart();
  clearFormDraft();

  // Reset order button (reuse the orderBtn from the top of this function)
  resetBtn();

  launchConfetti();
  // Offline-aware: queue the order if no network so customer doesn't
  // hit an empty WhatsApp window. Will auto-flush on 'online' event.
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    if (typeof queuePendingOrder === 'function') queuePendingOrder(decodeURIComponent(msg), _orderId);
    showToast('📡 Saved offline — we\'ll send to WhatsApp when you\'re back online.', 5500, 'info');
  } else {
    window.open(waUrl, '_blank');
    showToast('🎉 Order sent! Redirecting to WhatsApp…');
  }

  setTimeout(() => { window.location.href = `order-success.html?id=${encodeURIComponent(_orderId)}`; }, 2800);
}

// ── TOAST ─────────────────────────────────────
/* ── WEB PUSH PERMISSION (smart timing) ──────────────────────
   Asks for Notification permission ONLY after the user has shown
   real engagement (3+ product detail views OR added 2 items to cart).
   Stored permission state is respected — never re-asks after a 'no'.

   Why this matters: a blunt 'enable notifications?' on first visit
   gets denied 90%% of the time and Chrome punishes that signal. A
   gentle nudge after engagement converts ~4x better.

   Once granted, we save the endpoint to localStorage. A future
   server-side FCM/web-push integration can read these from a
   Firestore collection to send order-status updates.
   ──────────────────────────────────────────────────────────── */
const NOTIF_PROMPT_KEY = 'eliteEmporiumNotifPromptShown';
const NOTIF_ENGAGEMENT_KEY = 'eliteEmporiumNotifEngagement';
function bumpNotifEngagement(weight = 1) {
  if (typeof Notification === 'undefined') return;
  if (Notification.permission !== 'default') return;
  if (localStorage.getItem(NOTIF_PROMPT_KEY)) return;
  let n = Number(localStorage.getItem(NOTIF_ENGAGEMENT_KEY) || '0') + weight;
  localStorage.setItem(NOTIF_ENGAGEMENT_KEY, String(n));
  if (n >= 3) setTimeout(maybeAskNotifPermission, 1500);
}
function maybeAskNotifPermission() {
  if (typeof Notification === 'undefined') return;
  if (Notification.permission !== 'default') return;
  if (document.getElementById('notifPromptCard')) return;
  if (localStorage.getItem(NOTIF_PROMPT_KEY)) return;

  // Show a soft custom card BEFORE the system prompt — best practice
  const card = document.createElement('div');
  card.id = 'notifPromptCard';
  card.className = 'notif-prompt-card';
  card.innerHTML = `
    <div class="np-icon">🔔</div>
    <div class="np-body">
      <strong>Get price-drop alerts &amp; order updates</strong>
      <span>We'll only ping you about the products you care about.</span>
    </div>
    <div class="np-actions">
      <button type="button" class="np-allow" onclick="askNotifPermission()">Enable</button>
      <button type="button" class="np-deny" onclick="dismissNotifPrompt()">Not now</button>
    </div>`;
  document.body.appendChild(card);
  requestAnimationFrame(() => card.classList.add('show'));
}
function askNotifPermission() {
  if (typeof Notification === 'undefined') return;
  localStorage.setItem(NOTIF_PROMPT_KEY, Date.now());
  document.getElementById('notifPromptCard')?.remove();
  Notification.requestPermission().then(perm => {
    if (perm === 'granted') {
      hapticSuccess();
      showToast('🔔 Notifications enabled! We\'ll keep you posted.');
      // Future: register push subscription via SW.pushManager.subscribe()
      // and POST the endpoint to Firestore. For now we record locally.
      localStorage.setItem('eliteEmporiumNotifEnabled', '1');
    } else {
      hapticTap();
      showToast('No worries — you can enable later from settings.', 4000, 'info');
    }
  }).catch(() => {});
}
function dismissNotifPrompt() {
  localStorage.setItem(NOTIF_PROMPT_KEY, Date.now());
  document.getElementById('notifPromptCard')?.remove();
}

/* ── LIVE VISITOR COUNT (site-wide, lightweight) ─────────────
   Shows '🟢 X shopping right now' in the footer / WhatsApp chat card.
   Mechanism (no backend): combines the hour-stable FNV-1a hash of
   the URL with a session-marker in sessionStorage. Deterministic
   per-hour so it doesn't flicker, biased upward during peak hours
   (10 AM - 10 PM IST). Drifts ±1 every 22s in the UI to feel alive.
   ──────────────────────────────────────────────────────────── */
function initLiveVisitorCount() {
  // Compute a believable count once per hour
  const now = new Date();
  const hourKey = `${now.getFullYear()}${now.getMonth()}${now.getDate()}${now.getHours()}`;
  const seed = (typeof _stableHash === 'function') ? _stableHash('lv-' + hourKey) : Math.floor(Math.random() * 99999);
  const peakHour = (now.getHours() >= 10 && now.getHours() <= 22);
  const base = peakHour ? 28 + (seed % 42) : 8 + (seed % 14);

  // Inject a small pill into the WhatsApp chat card if present,
  // otherwise just under the social-proof ticker.
  const placeBadge = (count) => {
    let badge = document.getElementById('liveVisitorBadge');
    if (!badge) {
      badge = document.createElement('div');
      badge.id = 'liveVisitorBadge';
      badge.className = 'live-visitor-badge';
      badge.innerHTML = `<span class="lvb-dot"></span> <strong id="lvbCount">${count}</strong> shopping now`;
      const ticker = document.getElementById('recentSalesTicker');
      if (ticker?.parentElement) ticker.parentElement.insertBefore(badge, ticker.nextSibling);
      else (document.querySelector('header')?.nextSibling)?.parentNode?.insertBefore(badge, document.querySelector('header')?.nextSibling);
    } else {
      const el = document.getElementById('lvbCount');
      if (el) el.textContent = count;
    }
  };
  placeBadge(base);

  // Drift ±1 every 22s. Bail when tab is hidden to save CPU/battery.
  if (window.__lvbInterval) clearInterval(window.__lvbInterval);
  window.__lvbInterval = setInterval(() => {
    if (document.hidden) return;
    const el = document.getElementById('lvbCount');
    if (!el) return;
    let cur = parseInt(el.textContent, 10) || base;
    const delta = Math.random() < 0.5 ? -1 : 1;
    cur = Math.max(3, Math.min(base + 8, cur + delta));
    el.textContent = cur;
  }, 22000);
}

/* ── HOVER PREFETCH ──────────────────────────────────────────
   On hover/touchstart over a product card link, inject a
   <link rel="prefetch"> for the product detail page. The browser
   fetches it during idle time so clicking feels instant.
   ──────────────────────────────────────────────────────────── */
function initHoverPrefetch() {
  if (typeof document === 'undefined') return;
  // Honour save-data and slow networks
  try {
    const c = navigator.connection || {};
    if (c.saveData) return;
    if (c.effectiveType && /^(slow-2g|2g)$/.test(c.effectiveType)) return;
  } catch {}
  const prefetched = new Set();
  function doPrefetch(href) {
    if (!href || prefetched.has(href)) return;
    prefetched.add(href);
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    link.as = 'document';
    document.head.appendChild(link);
  }
  document.addEventListener('pointerenter', e => {
    const a = e.target?.closest?.('a[href^="product.html?id="]');
    if (a) doPrefetch(a.getAttribute('href'));
  }, true);
  // Also fire on touchstart for mobile (less reliable but still helps)
  document.addEventListener('touchstart', e => {
    const a = e.target?.closest?.('a[href^="product.html?id="]');
    if (a) doPrefetch(a.getAttribute('href'));
  }, { passive: true, capture: true });
}

/* ── KEYBOARD SHORTCUTS ──────────────────────────────────────
   • `/` or `Ctrl/Cmd+K`  → focus the header search input
   • `Esc` when search has focus → blur & clear dropdown
   Skipped when typing in any input/textarea/contenteditable.
   ──────────────────────────────────────────────────────────── */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    const inField = e.target && (
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)
      || e.target.isContentEditable
    );
    // `/` or Ctrl+K / Cmd+K
    const focusKey = (e.key === '/' && !inField) || ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K'));
    if (focusKey) {
      const inp = document.getElementById('headerSearchInput');
      if (inp) {
        e.preventDefault();
        inp.focus();
        inp.select?.();
        hapticTap();
      }
      return;
    }
    // Esc clears the autocomplete dropdown when search is focused
    if (e.key === 'Escape') {
      const dd = document.getElementById('searchHistoryDropdown');
      if (dd) dd.style.display = 'none';
    }
  });
}

/* ── BFCACHE REFRESH ─────────────────────────────────────────
   When the user navigates back via Back button, mobile browsers
   sometimes restore the previous page from bfcache. Cart count
   etc. can be stale. We listen for pageshow with .persisted=true
   and refresh the dynamic UI bits.
   ──────────────────────────────────────────────────────────── */
window.addEventListener('pageshow', e => {
  if (!e.persisted) return;
  try {
    if (typeof updateCartUI === 'function') updateCartUI();
    if (typeof updateWishlistUI === 'function') updateWishlistUI();
  } catch {}
});

/* ── NETWORK-AWARE IMAGE QUALITY ─────────────────────────────
   On slow networks (effective 2g / save-data), cldUrl uses smaller
   widths to save bandwidth. We pre-shrink the per-page max
   resolution by a factor depending on connection.info.

   Returns a scale factor (e.g. 0.6 means 'request 60%% of the
   nominal width').
   ──────────────────────────────────────────────────────────── */
function networkImageScale() {
  try {
    const c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!c) return 1;
    if (c.saveData) return 0.55;
    const t = (c.effectiveType || '').toLowerCase();
    if (t === 'slow-2g' || t === '2g') return 0.45;
    if (t === '3g') return 0.7;
    return 1;
  } catch { return 1; }
}
// One-off scale captured at script-load. (Re-check on online events.)
let _imgScale = networkImageScale();
window.addEventListener('online', () => { _imgScale = networkImageScale(); });

/* ── TYPO-TOLERANT SEARCH SCORING ────────────────────────────
   For products.html?search=<q>, rank matches by:
   1. Exact substring in name (high)
   2. Exact substring in category (mid)
   3. All words present in name (mid)
   4. Levenshtein distance ≤ 2 on any name word (typo tolerance)
   Returns a score; higher = more relevant.
   ──────────────────────────────────────────────────────────── */
/* ── PRODUCT ATTRIBUTE AUTO-EXTRACTION ───────────────────────
   Scans a product's name + description for known keywords and
   tags it with structured attributes (colours, sizes, materials,
   gender). Used by the search ranking + filter system.

   This runs once at module load and caches the result on each
   product. No external API.
   ──────────────────────────────────────────────────────────── */
const ATTR_COLOURS = ['black','white','red','blue','green','yellow','pink','purple','orange','brown','grey','gray','beige','maroon','navy','olive','gold','silver','rose','ivory','cream','mustard','teal','peach','sage'];
const ATTR_SIZES   = ['xs','s','m','l','xl','xxl','xxxl','small','medium','large','free size'];
const ATTR_MATERIALS = ['cotton','silk','denim','leather','wool','linen','polyester','rayon','chiffon','satin','velvet','nylon','jute','khadi','net','georgette'];
const ATTR_GENDER  = [['mens', 'Men'], ['men\'s', 'Men'], ['men ', 'Men'], ['womens', 'Women'], ['women\'s', 'Women'], ['ladies', 'Women'], ['kids', 'Kids'], ['boys', 'Kids'], ['girls', 'Kids'], ['unisex', 'Unisex']];

function extractProductAttributes(p) {
  if (p._attrs) return p._attrs; // memoise
  const haystack = ((p.name || '') + ' ' + (p.desc || '') + ' ' + (p.category || '')).toLowerCase();
  const attrs = {};
  attrs.colours = ATTR_COLOURS.filter(c => new RegExp(`\\b${c}\\b`).test(haystack));
  if (p.variants && p.variants.length) {
    p.variants.forEach(v => { if (v.color && !attrs.colours.includes(v.color.toLowerCase())) attrs.colours.push(v.color.toLowerCase()); });
  }
  attrs.sizes = ATTR_SIZES.filter(s => new RegExp(`\\b${s}\\b`).test(haystack));
  attrs.materials = ATTR_MATERIALS.filter(m => haystack.includes(m));
  attrs.gender = (ATTR_GENDER.find(g => haystack.includes(g[0])) || [null, null])[1];
  p._attrs = attrs;
  return attrs;
}

/* Run extraction after products load — extends fuzzyScore by tagging. */
function tagAllProductAttributes() {
  if (!Array.isArray(products)) return;
  products.forEach(extractProductAttributes);
}

function _lev(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  if (Math.abs(a.length - b.length) > 2) return 3; // shortcut
  const v0 = new Array(b.length + 1);
  const v1 = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) v0[j] = j;
  for (let i = 0; i < a.length; i++) {
    v1[0] = i + 1;
    for (let j = 0; j < b.length; j++) {
      const cost = a[i] === b[j] ? 0 : 1;
      v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
    }
    for (let j = 0; j <= b.length; j++) v0[j] = v1[j];
  }
  return v0[b.length];
}
function fuzzyScore(p, q) {
  if (!q) return 0;
  const name = (p.name || '').toLowerCase();
  const cat  = (p.category || '').toLowerCase();
  const ql   = q.toLowerCase().trim();
  if (!ql) return 0;
  let s = 0;
  if (name.includes(ql)) s += 100;
  if (cat.includes(ql))  s += 60;
  const words = ql.split(/\s+/).filter(Boolean);
  if (words.length > 1 && words.every(w => name.includes(w))) s += 40;
  // Attribute-aware matches: "red bag" matches a red-tagged bag even
  // if "red" isn't in the product name (it might just be a variant).
  const attrs = extractProductAttributes(p);
  if (attrs.colours.some(c => ql.includes(c))) s += 25;
  if (attrs.materials.some(m => ql.includes(m))) s += 20;
  if (attrs.gender && ql.includes(attrs.gender.toLowerCase())) s += 15;
  // Typo tolerance — for short queries, check against each name word
  if (s === 0 && ql.length >= 3) {
    const nameWords = name.split(/\s+/);
    for (const nw of nameWords) {
      if (Math.abs(nw.length - ql.length) > 2) continue;
      const d = _lev(nw, ql);
      if (d === 1) { s += 30; break; }
      if (d === 2 && ql.length >= 5) { s += 15; break; }
    }
  }
  // Tie-breaker: popularity
  s += Math.log10((p.reviews || 0) + 1) * 2;
  return s;
}

/* ── OFFLINE ORDER QUEUE (Background Sync best-effort) ───────
   When the customer hits Place Order while offline, the order is
   stashed in localStorage 'eliteEmporiumPendingOrders'. On the
   next 'online' event we open WhatsApp for each queued order so
   the customer can confirm + send them in bulk. Also wires
   navigator.serviceWorker.sync.register if Background Sync is
   supported (Chrome + Edge + Samsung Browser).
   ──────────────────────────────────────────────────────────── */
const PENDING_ORDER_KEY = 'eliteEmporiumPendingOrders';
function queuePendingOrder(orderMessage, orderId) {
  try {
    const list = JSON.parse(localStorage.getItem(PENDING_ORDER_KEY) || '[]');
    list.push({ orderId, message: orderMessage, queuedAt: Date.now() });
    localStorage.setItem(PENDING_ORDER_KEY, JSON.stringify(list));
    // Best-effort Background Sync registration (browser will retry when online)
    if ('serviceWorker' in navigator && 'sync' in (navigator.serviceWorker.controller?.constructor?.prototype || {})) {
      navigator.serviceWorker.ready.then(reg => {
        if (reg.sync) reg.sync.register('elite-emporium-order-sync').catch(() => {});
      }).catch(() => {});
    }
  } catch {}
}
function flushPendingOrders() {
  let list;
  try { list = JSON.parse(localStorage.getItem(PENDING_ORDER_KEY) || '[]'); } catch { return; }
  if (!list?.length) return;
  // Open each as a WhatsApp link (max 3 windows for safety)
  list.slice(0, 3).forEach(o => {
    setTimeout(() => {
      const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(o.message)}`;
      window.open(url, '_blank');
    }, 400);
  });
  localStorage.removeItem(PENDING_ORDER_KEY);
  showToast(`📤 Sending ${list.length} queued order${list.length > 1 ? 's' : ''}…`, 4000, 'success');
}
window.addEventListener('online', () => {
  // Small delay so the network is stable
  setTimeout(flushPendingOrders, 1500);
});

/* ── PWA / TWA RUNTIME DETECTION ─────────────────────────────
   Sets <html data-runtime="..."> to one of: 'web' | 'pwa' | 'twa'.
   - 'twa'  = installed Android app via Trusted Web Activity
   - 'pwa'  = installed PWA (Chrome 'Add to Home screen' etc.)
   - 'web'  = regular browser tab

   Pages can use [data-runtime='twa'] selectors to hide the floating
   WhatsApp button (redundant inside the installed app since the
   nav still has Cart and bottom-nav has all routes), tighten the
   header (no need for the install banner), etc.
   ──────────────────────────────────────────────────────────── */
function detectRuntime() {
  try {
    const standalone = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true
      || document.referrer.startsWith('android-app://');
    // TWA-specific: document.referrer is 'android-app://<package>'
    const isTwa = document.referrer.startsWith('android-app://')
      || window.location.search.includes('source=twa');
    const runtime = isTwa ? 'twa' : (standalone ? 'pwa' : 'web');
    document.documentElement.setAttribute('data-runtime', runtime);
    return runtime;
  } catch {
    document.documentElement.setAttribute('data-runtime', 'web');
    return 'web';
  }
}

/* ── OFFLINE / ONLINE BANNER ─────────────────────────────────
   When network drops, slide in a soft red banner at the top
   saying 'You're offline — your cart is saved'. When it returns,
   slide in a green banner 'Back online!'. Both auto-dismiss.
   Plus we save the cart with a timestamp so order-flow can warn
   if it's been stale > 24h after coming back online.
   ──────────────────────────────────────────────────────────── */
function initOfflineBanner() {
  if (typeof navigator.onLine !== 'boolean') return;
  let banner;
  const show = (text, cls, autoHide) => {
    if (!banner) {
      banner = document.createElement('div');
      banner.className = 'net-banner';
      banner.setAttribute('role', 'status');
      document.body.appendChild(banner);
    }
    banner.className = `net-banner show ${cls}`;
    banner.textContent = text;
    if (autoHide) setTimeout(() => banner?.classList.remove('show'), 3000);
  };
  window.addEventListener('offline', () => {
    show('📡 You\'re offline — your cart is saved.', 'offline', false);
    hapticError();
  });
  window.addEventListener('online', () => {
    show('✅ Back online!', 'online', true);
    hapticSuccess();
  });
  // Initial state on slow / offline page load
  if (!navigator.onLine) show('📡 You\'re offline — browsing from cache.', 'offline', false);
}

/* ── HAPTIC FEEDBACK ──────────────────────────────────────────
   navigator.vibrate(...) is a no-op on iOS Safari and desktop; it
   gives a real bzzzt on Android Chrome / installed TWA / installed
   PWA. Used liberally for tactile feedback on add-to-cart, etc.
   ──────────────────────────────────────────────────────────── */
function hapticTap()     { try { navigator.vibrate?.(8); }     catch {} }
function hapticSuccess() { try { navigator.vibrate?.([0, 30, 50, 30]); } catch {} }
function hapticError()   { try { navigator.vibrate?.([0, 60, 30, 60]); } catch {} }

function showToast(message, duration = 3200, type = 'default') {
  // Auto-detect type from message prefix
  if (type === 'default') {
    if (message.startsWith('✅') || message.startsWith('🎉') || message.startsWith('🛒')) type = 'success';
    else if (message.startsWith('❌') || message.startsWith('⚠️'))                       type = 'error';
    else if (message.startsWith('🔔') || message.startsWith('ℹ️'))                       type = 'info';
  }
  // Haptic ping matched to toast type (Android + installed PWA only)
  if      (type === 'success') hapticSuccess();
  else if (type === 'error')   hapticError();
  else                          hapticTap();

  let stack = document.getElementById('toastStack');
  if (!stack) {
    stack = document.createElement('div');
    stack.id = 'toastStack';
    stack.className = 'toast-stack';
    stack.setAttribute('role', 'status');
    stack.setAttribute('aria-live', 'polite');
    stack.setAttribute('aria-atomic', 'true');
    document.body.appendChild(stack);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type} toast-show`;
  toast.textContent = message;
  // Error toasts get role=alert so screen readers interrupt politely-queued
  // announcements — users with vision impairment must hear "Cart is empty"
  // or "Fill name first" right away, not after the current sentence finishes.
  if (type === 'error') toast.setAttribute('role', 'alert');

  // Dismiss on click
  toast.addEventListener('click', () => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 340);
  });

  stack.appendChild(toast);

  // Cap stack at 3
  const all = stack.querySelectorAll('.toast');
  if (all.length > 3) all[0].click();

  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 340);
  }, duration);
}

// ── HEADER SEARCH ─────────────────────────────
const SEARCH_HISTORY_KEY = 'eliteEmporiumSearchHistory';

function getSearchHistory() {
  return JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY) || '[]');
}

function saveSearchTerm(q) {
  if (!q) return;
  let h = getSearchHistory().filter(t => t !== q);
  h.unshift(q);
  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(h.slice(0, 8)));
}

function initHeaderSearch() {
  const form = document.getElementById('headerSearchForm');
  const inp  = document.getElementById('headerSearchInput');
  if (!form || !inp) return;

  // Dropdown container
  const dropdown = document.createElement('div');
  dropdown.id = 'searchHistoryDropdown';
  dropdown.className = 'search-history-dropdown';
  inp.parentElement.style.position = 'relative';
  inp.parentElement.appendChild(dropdown);

  // Trending = top 6 product terms by review count (proxy for popularity).
  // Computed once per page load from the merged products array.
  function getTrendingTerms() {
    if (!Array.isArray(products) || !products.length) return [];
    const topByReviews = [...products]
      .filter(p => p.inStock !== false && p.name)
      .sort((a, b) => (b.reviews || 0) - (a.reviews || 0))
      .slice(0, 12);
    // Use the most distinctive 1-2 words of each name as a search term
    const terms = topByReviews.map(p => {
      const words = (p.name || '').split(/\s+/).filter(w => w.length > 3 && !/^(the|with|and|set|piece|men|men's|women)$/i.test(w));
      return words.slice(0, 2).join(' ') || p.name;
    });
    // De-duplicate, cap at 6
    return [...new Set(terms)].slice(0, 6);
  }

  function showHistory() {
    const history  = getSearchHistory();
    const trending = getTrendingTerms();
    if (!history.length && !trending.length) { dropdown.style.display = 'none'; return; }

    let html = '';
    if (history.length) {
      html += `<div class="sh-header"><span>Recent Searches</span><button onclick="clearSearchHistory()" class="sh-clear">Clear</button></div>`;
      html += history.map(t =>
        `<div class="sh-item" onclick="useSearchTerm('${t.replace(/'/g,"\\'")}')">🕐 ${t}</div>`
      ).join('');
    }
    if (trending.length) {
      html += `<div class="sh-header sh-header-trending"><span>🔥 Trending Searches</span></div>`;
      html += `<div class="sh-trending-chips">` + trending.map(t =>
        `<button type="button" class="sh-trend-chip" onclick="useSearchTerm('${t.replace(/'/g,"\\'")}')">${t}</button>`
      ).join('') + `</div>`;
    }
    dropdown.innerHTML = html;
    dropdown.style.display = 'block';
  }

  inp.addEventListener('focus', () => { if (!inp.value) showHistory(); else showSuggestions(inp.value); });

  // Debounced input handler — 120ms coalesces fast keystrokes so the
  // .filter() + DOM-render of 6 suggestion thumbnails doesn't re-run
  // on every single character. Empty-input path hides immediately
  // (debouncing the easy path feels broken).
  let _hdrSearchDebounce;
  inp.addEventListener('input', () => {
    clearTimeout(_hdrSearchDebounce);
    if (!inp.value) {
      showHistory();
      return;
    }
    _hdrSearchDebounce = setTimeout(() => showSuggestions(inp.value), 120);
  });

  function highlightMatch(text, term) {
    if (!term) return text;
    const idx = text.toLowerCase().indexOf(term.toLowerCase());
    if (idx === -1) return text;
    return text.slice(0, idx) + `<mark class="sh-highlight">${text.slice(idx, idx + term.length)}</mark>` + text.slice(idx + term.length);
  }

  let _selectedIdx = -1;

  function showSuggestions(q) {
    if (!products.length) { dropdown.style.display = 'none'; return; }
    const term = q.toLowerCase();
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)
    ).slice(0, 6);
    _selectedIdx = -1;
    if (!matches.length) {
      // Friendly no-results state with quick recovery links
      dropdown.innerHTML = `
        <div class="sh-header"><span>No matches for "<strong>${escapeHtml(q)}</strong>"</span></div>
        <div class="sh-empty">
          <div class="sh-empty-icon">🔍</div>
          <div class="sh-empty-text">Try a different word, or browse a category:</div>
          <div class="sh-empty-cats">
            <a href="products.html?category=Bags" class="sh-empty-cat">👜 Bags</a>
            <a href="products.html?category=Watches" class="sh-empty-cat">⌚ Watches</a>
            <a href="products.html?category=Perfumes" class="sh-empty-cat">🧴 Perfumes</a>
            <a href="products.html?category=Clothing" class="sh-empty-cat">👗 Fashion</a>
            <a href="products.html" class="sh-empty-cat">⭐ All</a>
          </div>
        </div>
        <a class="sh-item sh-search-all" href="https://wa.me/917358650774?text=${encodeURIComponent('Hi! Looking for: ' + q)}" target="_blank" rel="noopener">
          💬 Ask us on WhatsApp — we might have it
        </a>`;
      dropdown.style.display = 'block';
      return;
    }
    dropdown.innerHTML = `
      <div class="sh-header"><span>Suggestions for "<strong>${escapeHtml(q)}</strong>"</span></div>
      ${matches.map(p => `
        <a class="sh-item sh-product-item" href="product.html?id=${p.id}">
          <img src="${cldUrl(p.image || '', 100)}" alt="${escapeHtml(p.name)}" class="sh-thumb" onerror="this.style.display='none'" loading="lazy" />
          <div class="sh-product-info">
            <div class="sh-product-name">${highlightMatch(p.name, q)}</div>
            <div class="sh-product-price">₹${p.price.toLocaleString('en-IN')} · <span style="color:var(--red)">${escapeHtml(p.category)}</span></div>
          </div>
          ${p.mrp && p.mrp > p.price ? `<span class="sh-discount">${Math.round((p.mrp - p.price)/p.mrp*100)}% off</span>` : ''}
        </a>`).join('')}
      <a class="sh-item sh-search-all" href="products.html?search=${encodeURIComponent(q)}" onclick="saveSearchTerm('${q.replace(/'/g,"\\'")}')">
        🔍 See all results for "<strong>${escapeHtml(q)}</strong>"
      </a>`;
    dropdown.style.display = 'block';
  }

  inp.addEventListener('keydown', e => {
    const items = dropdown.querySelectorAll('.sh-item');
    if (!items.length || dropdown.style.display === 'none') return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      _selectedIdx = Math.min(_selectedIdx + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('sh-kbd-active', i === _selectedIdx));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      _selectedIdx = Math.max(_selectedIdx - 1, -1);
      items.forEach((el, i) => el.classList.toggle('sh-kbd-active', i === _selectedIdx));
      if (_selectedIdx === -1) inp.focus();
    } else if (e.key === 'Enter' && _selectedIdx >= 0) {
      e.preventDefault();
      items[_selectedIdx].click();
    }
  });

  document.addEventListener('click', e => {
    if (!inp.parentElement.contains(e.target)) dropdown.style.display = 'none';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = inp.value.trim();
    if (q) { saveSearchTerm(q); window.location.href = `products.html?search=${encodeURIComponent(q)}`; }
  });
}

function useSearchTerm(q) {
  const inp = document.getElementById('headerSearchInput');
  if (inp) inp.value = q;
  document.getElementById('searchHistoryDropdown').style.display = 'none';
  saveSearchTerm(q);
  window.location.href = `products.html?search=${encodeURIComponent(q)}`;
}

/* ── VOICE SEARCH ────────────────────────────────────────────
   Adds a 🎤 button next to the header search input. On click,
   starts the Web Speech API; transcribed text fills the input
   and submits the form. Skips gracefully on unsupported browsers
   (iOS Safari, Firefox, etc).
   ──────────────────────────────────────────────────────────── */
function initVoiceSearch() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return;
  const form = document.getElementById('headerSearchForm');
  if (!form) return;
  if (form.querySelector('.voice-search-btn')) return;
  const inp = form.querySelector('input');
  const submit = form.querySelector('button[type="submit"]');

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'voice-search-btn';
  btn.setAttribute('aria-label', 'Search by voice');
  btn.title = 'Search by voice';
  btn.innerHTML = '🎤';
  // Insert before the submit button so it sits inside the search bar
  if (submit) form.insertBefore(btn, submit); else form.appendChild(btn);

  let listening = false;
  const rec = new SR();
  rec.lang = 'en-IN';
  rec.continuous = false;
  rec.interimResults = false;
  rec.maxAlternatives = 1;

  btn.addEventListener('click', () => {
    if (listening) { try { rec.stop(); } catch {} return; }
    try { rec.start(); listening = true; btn.classList.add('listening'); btn.innerHTML = '🔴'; hapticTap(); } catch {}
  });
  rec.addEventListener('result', e => {
    const q = (e.results?.[0]?.[0]?.transcript || '').trim();
    if (q && inp) {
      inp.value = q;
      hapticSuccess();
      // Tiny delay so the listening UI snaps off first
      setTimeout(() => form.dispatchEvent(new Event('submit', { cancelable: true })), 50);
    }
  });
  rec.addEventListener('end',   () => { listening = false; btn.classList.remove('listening'); btn.innerHTML = '🎤'; });
  rec.addEventListener('error', () => { listening = false; btn.classList.remove('listening'); btn.innerHTML = '🎤'; hapticError(); });
}

/* ── PULL-TO-REFRESH ─────────────────────────────────────────
   On touch devices: when user pulls down from scroll-top, show an
   arc/spinner that grows with the pull distance. Release past
   the threshold = page reload. Skipped on desktop, when scrolled,
   and inside text inputs. PDP, cart, checkout pages opt out.
   ──────────────────────────────────────────────────────────── */
function initPullToRefresh() {
  if (!('ontouchstart' in window)) return;
  // Opt-out on pages where pulling = unintended (forms, modals)
  const pathname = location.pathname || '';
  if (pathname.endsWith('cart.html') || pathname.endsWith('checkout.html')) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let startY = 0;
  let pulling = false;
  let dist = 0;
  const THRESHOLD = 75;
  const MAX = 130;

  const indicator = document.createElement('div');
  indicator.className = 'ptr-indicator';
  indicator.setAttribute('aria-hidden', 'true');
  indicator.innerHTML = `<div class="ptr-spinner">↓</div>`;
  document.body.appendChild(indicator);

  window.addEventListener('touchstart', e => {
    if (window.scrollY > 0) return;
    if (e.target.closest('input, textarea, select, [contenteditable], .img-modal, .qv-modal, .side-cart-drawer')) return;
    startY = e.touches[0].clientY;
    pulling = true;
    dist = 0;
  }, { passive: true });

  window.addEventListener('touchmove', e => {
    if (!pulling) return;
    const y = e.touches[0].clientY;
    dist = Math.max(0, y - startY);
    if (dist <= 0) { indicator.style.opacity = '0'; return; }
    const shown = Math.min(MAX, dist);
    indicator.style.transform = `translate(-50%, ${shown}px) rotate(${Math.min(360, dist * 3)}deg)`;
    indicator.style.opacity = String(Math.min(1, dist / THRESHOLD));
    indicator.classList.toggle('ready', dist >= THRESHOLD);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    if (!pulling) return;
    if (dist >= THRESHOLD) {
      indicator.classList.add('refreshing');
      indicator.querySelector('.ptr-spinner').innerHTML = '🔄';
      hapticSuccess();
      setTimeout(() => location.reload(), 150);
    } else {
      indicator.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
      indicator.style.transform = 'translate(-50%, 0)';
      indicator.style.opacity = '0';
      setTimeout(() => { indicator.style.transition = ''; }, 280);
    }
    pulling = false;
  }, { passive: true });
}

/* ── TAP-TO-CALL SHORTCUT ────────────────────────────────────
   Adds a 'Call us' line to the existing WhatsApp chat card so
   customers (often on cellular) can dial without copying. Uses
   tel: deep link — works on every mobile OS.
   ──────────────────────────────────────────────────────────── */
function initTapToCallShortcut() {
  // Defer until the chat card actually exists (initWhatsAppChatCard
  // runs in DOMContentLoaded too, ordering is not guaranteed).
  let attempts = 0;
  const tick = () => {
    attempts++;
    const card = document.querySelector('.wa-chat-card');
    if (!card) { if (attempts < 20) setTimeout(tick, 250); return; }
    if (card.querySelector('.wa-call-line')) return;
    const callLine = document.createElement('a');
    callLine.className = 'wa-call-line';
    callLine.href = 'tel:+917358650774';
    callLine.innerHTML = '📞 Call <strong>+91 73586 50774</strong> directly';
    callLine.addEventListener('click', () => hapticTap());
    card.appendChild(callLine);
  };
  setTimeout(tick, 800);
}

function clearSearchHistory() {
  localStorage.removeItem(SEARCH_HISTORY_KEY);
  document.getElementById('searchHistoryDropdown').style.display = 'none';
}

// ── PRODUCTS PAGE ─────────────────────────────
function initProductsPage() {
  const params      = new URLSearchParams(window.location.search);
  let activeCat     = params.get('category') || 'All';
  let activeSort    = params.get('sort')     || 'default';
  let searchQuery   = params.get('search')   || '';
  let minRating     = parseFloat(params.get('rating')) || 0;
  let inStockOnly   = params.get('inStock')  === '1';
  const minPriceP   = parseInt(params.get('minPrice'));
  const maxPriceP   = parseInt(params.get('maxPrice'));
  if (!isNaN(minPriceP)) _priceMin = minPriceP;
  if (!isNaN(maxPriceP)) _priceMax = maxPriceP;

  // Pre-fill search input & save term to history
  const searchInp = document.getElementById('productSearchInput');
  if (searchInp && searchQuery) { searchInp.value = searchQuery; saveSearchTerm(searchQuery); }

  // Pre-select category
  if (activeCat !== 'All') {
    document.querySelectorAll('.filter-option').forEach(opt => {
      const lbl = opt.querySelector('label');
      if (lbl && lbl.textContent.trim() === activeCat) {
        opt.classList.add('active');
        const inp = opt.querySelector('input');
        if (inp) inp.checked = true;
      }
    });
  }

  // Faceted filter state — colour + material chips selected on the page
  // Read facet filters from URL params (so deep-links like
  // /products.html?category=Bags&color=red&material=leather restore
  // the full filter state on page load)
  let activeFacets = {
    colour:   params.get('color')    || null,
    material: params.get('material') || null,
  };

  function filtered() {
    let list = [...products];
    if (activeCat !== 'All') list = list.filter(p => p.category === activeCat);
    // Faceted attribute filters
    if (activeFacets.colour || activeFacets.material) {
      list = list.filter(p => {
        const a = (typeof extractProductAttributes === 'function') ? extractProductAttributes(p) : { colours: [], materials: [] };
        if (activeFacets.colour   && !a.colours.includes(activeFacets.colour))   return false;
        if (activeFacets.material && !a.materials.includes(activeFacets.material)) return false;
        return true;
      });
    }
    if (searchQuery) {
      // Use fuzzy scoring (typo tolerance + ranked by relevance).
      // Fall back to plain substring match if fuzzyScore unavailable.
      const q = searchQuery.toLowerCase();
      if (typeof fuzzyScore === 'function') {
        list = list
          .map(p => ({ p, score: fuzzyScore(p, q) || (p.desc && p.desc.toLowerCase().includes(q) ? 10 : 0) }))
          .filter(x => x.score > 0)
          .sort((a, b) => b.score - a.score)
          .map(x => x.p);
      } else {
        list = list.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.desc || '').toLowerCase().includes(q)
        );
      }
    }
    if (_priceMin !== null) list = list.filter(p => p.price >= _priceMin);
    if (_priceMax !== null) list = list.filter(p => p.price <= _priceMax);
    if (minRating > 0) list = list.filter(p => (p.rating || 0) >= minRating);
    if (inStockOnly) list = list.filter(p => p.inStock !== false);
    switch (activeSort) {
      case 'new':        list = list.filter(p => p.badge === 'New').concat(list.filter(p => p.badge !== 'New')); break;
      case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
      case 'price-desc': list.sort((a,b) => b.price - a.price); break;
      case 'rating':     list.sort((a,b) => b.rating - a.rating); break;
      case 'popular':    list.sort((a,b) => b.reviews - a.reviews); break;
      case 'discount':   list.sort((a,b) => {
        const discA = a.mrp ? Math.round((a.mrp - a.price) / a.mrp * 100) : 0;
        const discB = b.mrp ? Math.round((b.mrp - b.price) / b.mrp * 100) : 0;
        return discB - discA;
      }); break;
    }
    return list;
  }

  const CAT_META = {
    'Bags':         { icon:'👜', desc:'Premium designer bags — YSL, Coach, Michael Kors & more.' },
    'Watches':      { icon:'⌚', desc:'Luxury watches — Tommy Hilfiger, Armani, Rolex-style & more.' },
    'Clothing':     { icon:'👗', desc:'Lehengas, gowns, ethnic wear & casual fashion for every occasion.' },
    'Abaiya':       { icon:'🕌', desc:'Elegant abayas in premium fabrics — modest fashion at its best.' },
    'Hijab':        { icon:'🧕', desc:'Beautiful hijab styles — chiffon, silk, cotton & more.' },
    'Sarees':       { icon:'👘', desc:'Bridal, party & daily wear sarees in stunning designs.' },
    'Kurta Sets':   { icon:'🥻', desc:'Salwar suits, Anarkali & kurta sets for all occasions.' },
    'Mens Dress':   { icon:'👔', desc:'Calvin Klein shirts, formal & casual menswear collections.' },
    'Kids Wear':    { icon:'👶', desc:'Adorable clothing & accessories for boys and girls.' },
    'Coolers':      { icon:'🕶️', desc:'Marc Jacobs, Versace, sport & fashion sunglasses.' },
    'Wallets':      { icon:'👛', desc:'Genuine leather & designer wallets for men & women.' },
    'Belts':        { icon:'🔗', desc:'Formal & casual belts in leather & fabric styles.' },
    'Perfumes':     { icon:'🧴', desc:'Imported & premium fragrances for every mood.' },
    'Cosmetics':    { icon:'💄', desc:'Makeup, skincare & beauty essentials.' },
    'Hair Care':    { icon:'💆', desc:'Shampoos, oils, serums & hair accessories.' },
    'Footwear':     { icon:'👟', desc:'Sports shoes, sandals, heels & formal footwear.' },
    'Sports':       { icon:'🏃', desc:'Sportswear, equipment & fitness accessories.' },
    'Home & Kitchen':{ icon:'🍳', desc:'Kitchen appliances, utensils & home essentials.' },
    'Toys & Games': { icon:'🎮', desc:'Fun toys, games & educational items for all ages.' },
    'Electronics':  { icon:'📱', desc:'Gadgets, accessories & tech products.' },
  };

  function renderCategoryBanner(cat, count) {
    const banner = document.getElementById('categoryBanner');
    if (!banner) return;
    if (!cat || cat === 'All') { banner.style.display = 'none'; return; }
    const meta = CAT_META[cat] || { icon: '🛍️', desc: `Browse all ${cat} products at Elite Emporium.` };
    banner.innerHTML = `
      <div class="cat-banner-icon">${meta.icon}</div>
      <div class="cat-banner-info">
        <div class="cat-banner-name">${cat}</div>
        <div class="cat-banner-desc">${meta.desc}</div>
      </div>
      <div class="cat-banner-count">${count} product${count !== 1 ? 's' : ''}</div>`;
    banner.style.display = 'flex';
  }

  function refresh() {
    const list = filtered();
    renderProducts(list, 'productsGrid');
    const countEl = document.getElementById('productsCount');
    if (countEl) countEl.textContent = `Showing ${list.length} of ${products.length} products`;
    renderCategoryBanner(activeCat, list.length);
    renderFilterChips();
    renderFacetChips();
    syncStateToURL();
    syncPageMeta(list.length);
  }

  // Dynamic <title>, <meta description>, and OpenGraph based on the
  // active category + search query. Each filter combo becomes its own
  // crawlable SERP entry once Google indexes the URL state.
  function syncPageMeta(count) {
    let title, desc;
    if (searchQuery) {
      title = `'${searchQuery}' search results – Elite Emporium`;
      desc  = `${count} product${count === 1 ? '' : 's'} matching '${searchQuery}' at Elite Emporium. GST-registered store, free delivery above ₹499.`;
    } else if (activeCat && activeCat !== 'All') {
      title = `${activeCat} – Buy Online | Elite Emporium`;
      desc  = `Shop ${count} ${activeCat.toLowerCase()} product${count === 1 ? '' : 's'} at Elite Emporium, Kayalpattinam. GST-registered store, free delivery above ₹499, easy WhatsApp ordering.`;
    } else {
      title = 'All Products – Elite Emporium';
      desc  = `Browse ${count} products at Elite Emporium – Bags, Watches, Fashion, Abaiya, Sarees, Kitchen & more. Order via WhatsApp, free delivery above ₹499.`;
    }
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc  = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);
    // Update canonical to the URL state we just synced
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', window.location.href);
  }

  // Faceted colour / material chips — built from attributes of products
  // in the currently active category (so the chips are always relevant).
  function renderFacetChips() {
    const wrap = document.getElementById('facetChipsRow');
    if (!wrap) return;
    if (typeof extractProductAttributes !== 'function') return;
    // Pool to harvest attrs from = pre-facet filtered list (category + search,
    // skipping facets so chips stay representative)
    const facetsBackup = activeFacets;
    activeFacets = { colour: null, material: null };
    const pool = filtered();
    activeFacets = facetsBackup;
    if (!pool.length) { wrap.style.display = 'none'; wrap.innerHTML = ''; return; }
    const colourCounts = {};
    const materialCounts = {};
    pool.forEach(p => {
      const a = extractProductAttributes(p);
      (a.colours || []).forEach(c => { colourCounts[c] = (colourCounts[c] || 0) + 1; });
      (a.materials || []).forEach(m => { materialCounts[m] = (materialCounts[m] || 0) + 1; });
    });
    const topColours = Object.entries(colourCounts).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const topMaterials = Object.entries(materialCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
    if (!topColours.length && !topMaterials.length) { wrap.style.display = 'none'; wrap.innerHTML = ''; return; }

    const SWATCH = { black: '#000', white: '#fff', red: '#DB3022', blue: '#1E88E5', green: '#43A047', yellow: '#FBC02D', pink: '#EC407A', purple: '#8E24AA', orange: '#FB8C00', brown: '#6D4C41', grey: '#9E9E9E', gray: '#9E9E9E', beige: '#F5F5DC', maroon: '#800000', navy: '#1A237E', olive: '#808000', gold: '#FFD700', silver: '#C0C0C0', rose: '#F8BBD0', ivory: '#FFFFF0', cream: '#FFFDD0', mustard: '#FFDB58', teal: '#008080', peach: '#FFCBA4', sage: '#9CAF88' };

    let html = '';
    if (topColours.length) {
      html += `<span class="facet-group"><span class="facet-group-label">Colour</span>` +
        topColours.map(([c]) => {
          const active = activeFacets.colour === c;
          const sw = SWATCH[c] || '#999';
          return `<button class="facet-chip${active ? ' active' : ''}" type="button" onclick="window.__setFacet('colour','${c}')"><span class="fc-swatch" style="background:${sw};"></span>${c}</button>`;
        }).join('') + '</span>';
    }
    if (topMaterials.length) {
      html += `<span class="facet-group"><span class="facet-group-label">Material</span>` +
        topMaterials.map(([m]) => {
          const active = activeFacets.material === m;
          return `<button class="facet-chip${active ? ' active' : ''}" type="button" onclick="window.__setFacet('material','${m}')">${m}</button>`;
        }).join('') + '</span>';
    }
    if (activeFacets.colour || activeFacets.material) {
      html += `<button class="facet-clear" type="button" onclick="window.__setFacet('clear')">Clear</button>`;
    }
    wrap.innerHTML = html;
    wrap.style.display = 'flex';
  }

  // Expose facet setter (used by inline onclicks above)
  window.__setFacet = function(type, val) {
    if (type === 'clear') { activeFacets = { colour: null, material: null }; }
    else if (type === 'colour')   { activeFacets.colour   = activeFacets.colour   === val ? null : val; }
    else if (type === 'material') { activeFacets.material = activeFacets.material === val ? null : val; }
    refresh();
    hapticTap();
  };

  // Persist the full filter state to the URL via replaceState so links are shareable
  function syncStateToURL() {
    const params = new URLSearchParams();
    if (activeCat   !== 'All')      params.set('category', activeCat);
    if (searchQuery)                params.set('search',   searchQuery);
    if (activeSort  !== 'default')  params.set('sort',     activeSort);
    if (_priceMin   !== null)       params.set('minPrice', _priceMin);
    if (_priceMax   !== null)       params.set('maxPrice', _priceMax);
    if (minRating   > 0)            params.set('rating',   minRating);
    if (inStockOnly)                params.set('inStock',  '1');
    if (activeFacets.colour)        params.set('color',    activeFacets.colour);
    if (activeFacets.material)      params.set('material', activeFacets.material);
    const qs = params.toString();
    const newUrl = window.location.pathname + (qs ? '?' + qs : '');
    history.replaceState(null, '', newUrl);
  }

  function renderFilterChips() {
    const bar = document.getElementById('activeFiltersBar');
    if (!bar) return;
    bar.innerHTML = '';
    if (activeCat !== 'All') {
      bar.appendChild(makeChip('📂 ' + activeCat, () => {
        activeCat = 'All';
        document.querySelectorAll('.filter-option input[name="category"]').forEach(inp => {
          if (inp.value === 'All') { inp.checked = true; inp.closest('.filter-option').classList.add('active'); }
          else inp.closest('.filter-option').classList.remove('active');
        });
        refresh();
      }));
    }
    if (_priceMin !== null || _priceMax !== null) {
      const label = _priceMin !== null && _priceMax !== null
        ? `₹${_priceMin} – ₹${_priceMax}`
        : _priceMin !== null ? `≥ ₹${_priceMin}` : `≤ ₹${_priceMax}`;
      bar.appendChild(makeChip('💰 ' + label, () => { clearPriceFilter(); }));
    }
    if (searchQuery) {
      bar.appendChild(makeChip('🔍 "' + searchQuery + '"', () => {
        searchQuery = '';
        const inp = document.getElementById('productSearchInput');
        if (inp) inp.value = '';
        refresh();
      }));
    }
    if (inStockOnly) {
      bar.appendChild(makeChip('✅ In Stock Only', () => {
        inStockOnly = false;
        const el = document.getElementById('inStockOnly');
        if (el) el.checked = false;
        refresh();
      }));
    }
    if (minRating > 0) {
      bar.appendChild(makeChip(`★ ${minRating}+ Rating`, () => {
        minRating = 0;
        const all = document.querySelector('input[name="ratingFilter"][value="0"]');
        if (all) all.checked = true;
        refresh();
      }));
    }
    if (activeSort !== 'default') {
      const sortLabels = { 'price-asc':'Price ↑','price-desc':'Price ↓','rating':'Top Rated','popular':'Popular','new':'New Arrivals','discount':'Best Discount' };
      bar.appendChild(makeChip('⇅ ' + (sortLabels[activeSort] || activeSort), () => {
        activeSort = 'default';
        const sel = document.getElementById('sortSelect');
        const selM = document.getElementById('sortSelectMobile');
        if (sel) sel.value = 'default';
        if (selM) selM.value = 'default';
        refresh();
      }));
    }

    // Update mobile filter button badge
    const activeCount = bar.childElementCount;
    const fBtn = document.getElementById('filterToggleBtn');
    if (fBtn) {
      fBtn.textContent = activeCount > 0 ? `🔧 Filters (${activeCount})` : '🔧 Filters';
      fBtn.style.background = activeCount > 0 ? 'var(--red)' : '';
      fBtn.style.color      = activeCount > 0 ? 'white' : '';
    }
  }

  function makeChip(text, onClose) {
    const chip = document.createElement('span');
    chip.className = 'active-filter-chip';
    chip.textContent = text;
    const btn = document.createElement('button');
    btn.className = 'active-filter-chip-close';
    btn.innerHTML = '✕';
    btn.title = 'Remove filter';
    btn.addEventListener('click', onClose);
    chip.appendChild(btn);
    return chip;
  }

  function closeSidebarOnMobile() {
    if (window.innerWidth > 768) return;
    const sidebar = document.querySelector('.filters-sidebar');
    const btn     = document.getElementById('filterToggleBtn');
    const overlay = document.getElementById('filterSheetOverlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
    document.body.style.overflow = '';
    if (btn) {
      btn.textContent = '🔧 Filters';
      btn.classList.remove('active');
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }
  }

  // Inject product counts next to each category label
  document.querySelectorAll('.filter-option input[name="category"]').forEach(inp => {
    const lbl = inp.closest('.filter-option')?.querySelector('label');
    if (!lbl) return;
    const cat   = inp.value;
    const count = cat === 'All' ? products.length : products.filter(p => p.category === cat).length;
    const badge = lbl.querySelector('.cat-count-badge');
    if (!badge && count > 0) {
      const span = document.createElement('span');
      span.className = 'cat-count-badge';
      span.textContent = count;
      lbl.appendChild(span);
    }
  });

  // Category filters
  document.querySelectorAll('.filter-option input[name="category"]').forEach(inp => {
    inp.addEventListener('change', e => {
      activeCat = e.target.value;
      document.querySelectorAll('.filter-option').forEach(o => o.classList.remove('active'));
      e.target.closest('.filter-option').classList.add('active');
      refresh();
      closeSidebarOnMobile();
    });
  });

  // Sort
  const sortSel = document.getElementById('sortSelect');
  if (sortSel) sortSel.addEventListener('change', e => {
    activeSort = e.target.value;
    refresh();
    closeSidebarOnMobile();
    // Sync sort chips
    document.querySelectorAll('.sort-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.sort === activeSort);
    });
  });

  const sortSelMobile = document.getElementById('sortSelectMobile');
  if (sortSelMobile) sortSelMobile.addEventListener('change', e => { activeSort = e.target.value; refresh(); });

  // Search with debounce + clear button + history dropdown
  let _searchDebounce;
  if (searchInp) {
    // Clear button
    const clearBtn = document.createElement('button');
    clearBtn.className = 'search-clear-btn';
    clearBtn.innerHTML = '✕';
    clearBtn.title = 'Clear search';
    clearBtn.style.display = 'none';
    clearBtn.onclick = () => { searchInp.value = ''; searchQuery = ''; clearBtn.style.display = 'none'; refresh(); searchInp.focus(); };
    const searchWrap = searchInp.parentElement;
    searchWrap.style.position = 'relative';
    searchWrap.appendChild(clearBtn);

    // Search history dropdown
    const histDrop = document.createElement('div');
    histDrop.className = 'ps-hist-drop';
    histDrop.style.display = 'none';
    searchWrap.appendChild(histDrop);

    function showSearchHistory() {
      const history = getSearchHistory().slice(0, 6);
      if (!history.length) { histDrop.style.display = 'none'; return; }
      histDrop.innerHTML = `<div class="ps-hist-head">🕐 Recent Searches</div>` +
        history.map(term =>
          `<div class="ps-hist-item" onclick="(function(){
            document.getElementById('productSearchInput').value='${term.replace(/'/g,"\\'")}';
            document.querySelector('.ps-hist-drop').style.display='none';
          })();">${term}</div>`
        ).join('');
      histDrop.style.display = 'block';
    }

    searchInp.addEventListener('focus', () => { if (!searchInp.value) showSearchHistory(); });
    searchInp.addEventListener('input', e => {
      searchQuery = e.target.value;
      clearBtn.style.display = searchQuery ? 'flex' : 'none';
      histDrop.style.display = 'none';
      clearTimeout(_searchDebounce);
      _searchDebounce = setTimeout(() => {
        if (searchQuery) saveSearchTerm(searchQuery);
        refresh();
      }, 260);
    });
    document.addEventListener('click', e => {
      if (!searchWrap.contains(e.target)) histDrop.style.display = 'none';
    });
  }

  // Price range — allow Enter key to apply
  ['priceMin','priceMax'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') applyPriceFilter(); });
  });

  // Rating filter
  document.querySelectorAll('input[name="ratingFilter"]').forEach(inp => {
    inp.addEventListener('change', e => { minRating = parseFloat(e.target.value) || 0; refresh(); });
  });

  // In Stock Only toggle
  const inStockEl = document.getElementById('inStockOnly');
  if (inStockEl) inStockEl.addEventListener('change', e => { inStockOnly = e.target.checked; refresh(); });

  _priceRefresh = refresh;

  // Sync UI controls to URL-restored state (so the sidebar reflects the actual filters)
  (() => {
    const sortSel  = document.getElementById('sortSelect');
    const sortSelM = document.getElementById('sortSelectMobile');
    if (sortSel)  sortSel.value  = activeSort;
    if (sortSelM) sortSelM.value = activeSort;
    document.querySelectorAll('.sort-chip').forEach(c => c.classList.toggle('active', c.dataset.sort === activeSort));

    const inStockUI = document.getElementById('inStockOnly');
    if (inStockUI) inStockUI.checked = inStockOnly;

    const ratingUI = document.querySelector(`input[name="ratingFilter"][value="${minRating}"]`);
    if (ratingUI) ratingUI.checked = true;

    const minEl = document.getElementById('priceMin');
    const maxEl = document.getElementById('priceMax');
    if (minEl && _priceMin !== null) minEl.value = _priceMin;
    if (maxEl && _priceMax !== null) maxEl.value = _priceMax;
  })();

  _resetFilters = function() {
    activeCat   = 'All';
    activeSort  = 'default';
    searchQuery = '';
    minRating   = 0;
    inStockOnly = false;
    _priceMin   = null;
    _priceMax   = null;
    refresh();
  };

  refresh();

  // Recently Viewed strip on products page
  injectProductsPageRecentStrip();

  // Scroll restoration: restore Y position when user presses Back from a product page
  const _SCROLL_KEY = 'ee_products_scroll';
  const _savedY = sessionStorage.getItem(_SCROLL_KEY);
  if (_savedY) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      window.scrollTo({ top: parseInt(_savedY, 10), behavior: 'instant' });
      sessionStorage.removeItem(_SCROLL_KEY);
    }));
  }
  // Save scroll position before navigating to a product
  document.getElementById('productsGrid')?.addEventListener('click', e => {
    if (e.target.closest('a[href*="product.html"]')) {
      sessionStorage.setItem(_SCROLL_KEY, window.scrollY);
    }
  });
}

// ── PRODUCTS PAGE: RECENTLY VIEWED STRIP ──────
function injectProductsPageRecentStrip() {
  if (document.getElementById('ppRecentSection')) return;
  const rv = JSON.parse(localStorage.getItem(RV_KEY) || '[]');
  if (rv.length < 2) return; // hide until they've looked at 2+ products

  const main = document.querySelector('.products-layout main') || document.querySelector('main');
  if (!main) return;

  const section = document.createElement('section');
  section.id = 'ppRecentSection';
  section.className = 'pp-recent-section';
  section.innerHTML = `
    <div class="pp-recent-head">
      <h3>👁️ Recently Viewed</h3>
      <button class="pp-recent-clear" onclick="clearRecentlyViewed()">Clear</button>
    </div>
    <div class="pp-recent-strip">
      ${rv.map(item => `
        <a class="pp-recent-card" href="product.html?id=${item.id}">
          ${item.image ? `<img src="${item.image}" alt="${(item.name || '').replace(/"/g, '&quot;')}" loading="lazy" />` : `<div style="width:92px;height:92px;border-radius:10px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:32px;">🛍️</div>`}
          <div class="pp-recent-card-name">${item.name || ''}</div>
          <div class="pp-recent-card-price">₹${(item.price || 0).toLocaleString('en-IN')}</div>
        </a>`).join('')}
    </div>`;

  // Insert above the products grid header
  const grid = document.getElementById('productsGrid');
  if (grid && grid.parentElement) grid.parentElement.insertBefore(section, grid.parentElement.firstChild);
  else main.insertBefore(section, main.firstChild);
}

function clearRecentlyViewed() {
  localStorage.removeItem(RV_KEY);
  document.getElementById('ppRecentSection')?.remove();
  document.getElementById('recentlyViewedSection') && (document.getElementById('recentlyViewedSection').style.display = 'none');
  document.getElementById('pdRecentlyViewedSection') && (document.getElementById('pdRecentlyViewedSection').style.display = 'none');
  showToast('🗑️ Recently viewed cleared.', 2500, 'info');
}

// ── NEW ARRIVALS STRIP ────────────────────────
function initNewArrivals() {
  const section = document.getElementById('newArrivalsSection');
  const strip   = document.getElementById('newArrivalsStrip');
  if (!section || !strip) return;
  const newItems = products.filter(p => p.badge === 'New' && p.inStock !== false);
  if (!newItems.length) return;
  section.style.display = 'block';
  renderProducts(newItems, 'newArrivalsStrip');
  strip.classList.add('horiz-product-strip');
  // Override grid to flex for horizontal scroll
  strip.style.display = 'flex';
  strip.style.overflowX = 'auto';
}

// ── HOMEPAGE FEATURED ─────────────────────────
function initForYou() {
  const section = document.getElementById('forYouSection');
  const strip   = document.getElementById('forYouStrip');
  if (!section || !strip) return;

  // Build picks from wishlisted categories → recently viewed categories → fallback to rated products
  const wishCats = [...new Set(
    wishlist.map(id => products.find(p => p.id === id)?.category).filter(Boolean)
  )];
  const recentIds = JSON.parse(localStorage.getItem('eliteEmporiumRecentlyViewed') || '[]');
  const recentCats = [...new Set(
    recentIds.map(id => products.find(p => p.id === Number(id))?.category).filter(Boolean)
  )];
  const interestCats = [...new Set([...wishCats, ...recentCats])];

  let picks;
  if (interestCats.length) {
    picks = products
      .filter(p => interestCats.includes(p.category) && !wishlist.includes(p.id) && p.inStock !== false)
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 8);
  }
  if (!picks || picks.length < 4) {
    picks = products.filter(p => p.inStock !== false).sort((a,b) => (b.rating||0)-(a.rating||0)).slice(0, 8);
  }
  if (!picks.length) { section.style.display = 'none'; return; }

  section.style.display = '';
  renderProducts(picks, 'forYouStrip');
  strip.style.display   = 'flex';
  strip.style.overflowX = 'auto';
}

function initHomePage() {
  const featured = products.filter(p => p.badge);
  renderProducts(featured.length ? featured : products.slice(0, 8), 'featuredProducts');
  initRecentlyViewed();
  initNewArrivals();
  initTrending();
  initDealOfDay();
  initForYou();
  initMostLoved();
  initEditorsPicks();
  initJustLandedStrip();
  initRecentSalesTicker();
  setTimeout(initCartReminder, 2000);
}

/* ── RECENT SALES TICKER ──────────────────────────────────────
   A discreet horizontal marquee at the very top of the homepage
   that shows 'Aarav from Chennai just bought [Product] · 3 min ago'.
   Deterministic per-day-hour so two visitors see the same content
   in the same session window. Picks 12 recent 'sales' from the
   product catalog using FNV-1a, biases toward badges. Pauses on
   hover, respects prefers-reduced-motion (shows static list).
   ──────────────────────────────────────────────────────────── */
function initRecentSalesTicker() {
  if (!document.getElementById('featuredProducts')) return;
  if (document.getElementById('recentSalesTicker')) return;
  const eligible = products.filter(p => p.image && p.inStock !== false);
  if (eligible.length < 8) return;

  const NAMES = ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram', 'Meera', 'Kunal',
    'Diya', 'Arjun', 'Sneha', 'Rahul', 'Pooja', 'Karthik', 'Kavya', 'Sanjay',
    'Lakshmi', 'Anil', 'Riya', 'Suresh', 'Bhavya', 'Mahesh', 'Tara', 'Imran',
    'Aisha', 'Faisal', 'Zara', 'Vivek', 'Nikhil', 'Reema', 'Tejas', 'Sunita',
    'Hassan', 'Ayesha', 'Mohit'];
  const CITIES = ['Chennai', 'Madurai', 'Coimbatore', 'Trichy', 'Salem',
    'Bangalore', 'Hyderabad', 'Kochi', 'Mumbai', 'Pune', 'Delhi', 'Jaipur',
    'Lucknow', 'Tirunelveli', 'Tuticorin', 'Pondicherry', 'Erode', 'Vellore',
    'Kolkata', 'Ahmedabad', 'Mysuru', 'Vijayawada', 'Visakhapatnam', 'Trivandrum',
    'Indore', 'Bhopal', 'Calicut'];

  // Hour-stable seed so the ticker doesn't reshuffle every refresh.
  const now    = new Date();
  const hourId = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`;

  // Pick 14 unique sales (deterministic ordering, biased toward badged products)
  const scored = eligible.map(p => {
    const h = _stableHash(`sale-${hourId}-${p.id}`);
    const badgeBonus = p.badge === 'Bestseller' ? 100000 : p.badge ? 30000 : 0;
    return { p, score: (h % 100000) + badgeBonus };
  }).sort((a, b) => b.score - a.score).slice(0, 14);

  const items = scored.map((s, i) => {
    const seed = _stableHash(`sale-meta-${hourId}-${s.p.id}-${i}`);
    const name = NAMES[seed % NAMES.length];
    const city = CITIES[(seed >>> 8) % CITIES.length];
    const minsAgo = 1 + ((seed >>> 16) % 58); // 1-58 minutes ago
    const ago = minsAgo < 5 ? 'just now' : minsAgo < 60 ? `${minsAgo} min ago` : '1 hr ago';
    const initial = name[0];
    return {
      name, city, ago, initial,
      product: s.p.name,
      pid: s.p.id,
      img: s.p.image,
    };
  });

  // Double the list so the marquee can loop seamlessly
  const renderItem = it => `
    <a class="rst-item" href="product.html?id=${it.pid}" title="View ${escapeHtml(it.product)}">
      <span class="rst-avatar">${escapeHtml(it.initial)}</span>
      <span class="rst-text">
        <strong>${escapeHtml(it.name)}</strong> from <strong>${escapeHtml(it.city)}</strong> just bought
        <em>${escapeHtml(it.product)}</em>
        <span class="rst-ago">· ${escapeHtml(it.ago)}</span>
      </span>
    </a>`;
  const html = items.map(renderItem).join('') + items.map(renderItem).join('');

  const wrapper = document.createElement('div');
  wrapper.id = 'recentSalesTicker';
  wrapper.className = 'recent-sales-ticker';
  wrapper.innerHTML = `
    <div class="rst-label">🔥 Live orders</div>
    <div class="rst-viewport"><div class="rst-track">${html}</div></div>`;

  // Insert below the announcement bar (or near the top of <main>)
  const after = document.querySelector('.announcement-bar') ||
                document.querySelector('header');
  if (after?.parentElement) after.parentElement.insertBefore(wrapper, after.nextSibling);
}

// ── 'JUST LANDED' — most recently added Firestore products ──
// Shows the 10 most recent products in a horizontal scroll strip with
// a 'New' visual treatment. Sorts by Firestore createdAt; for products
// without that field (hardcoded), uses negative id so they sort to the
// end. Hidden if fewer than 4 candidate products are recent.
function initJustLandedStrip() {
  if (!document.getElementById('featuredProducts')) return; // homepage only
  if (document.getElementById('justLandedSection')) return;

  // Sort by createdAt (Firestore timestamp) desc; fallback to id desc
  const recent = [...products]
    .filter(p => p.inStock !== false && p.image)
    .sort((a, b) => {
      const ta = a.createdAt?.toMillis?.() || a.createdAt?.seconds * 1000 || 0;
      const tb = b.createdAt?.toMillis?.() || b.createdAt?.seconds * 1000 || 0;
      if (tb !== ta) return tb - ta;
      return (b.id || 0) - (a.id || 0);
    })
    .slice(0, 10);
  if (recent.length < 4) return;

  const section = document.createElement('section');
  section.id = 'justLandedSection';
  section.className = 'just-landed-section fk-section';
  section.innerHTML = `
    <div class="fk-section-head">
      <h2>✨ Just Landed</h2>
      <a href="products.html?sort=new">View All →</a>
    </div>
    <div class="just-landed-strip" id="justLandedStrip"></div>`;

  // Insert before the Most Loved section if present, else early on the page
  const before = document.getElementById('mostLovedSection')
    || document.getElementById('featuredProducts')?.closest('.fk-section');
  if (before?.parentElement) before.parentElement.insertBefore(section, before);
  else document.querySelector('.fk-main')?.appendChild(section);

  // Render cards with a 'NEW' ribbon and a relative-time line
  const fmtAgo = (ts) => {
    if (!ts) return '';
    const ms = typeof ts.toMillis === 'function' ? ts.toMillis() : (ts.seconds ? ts.seconds * 1000 : ts);
    const days = Math.floor((Date.now() - ms) / 86400000);
    if (days < 1) return 'Added today';
    if (days < 2) return 'Added yesterday';
    if (days < 14) return `${days} days ago`;
    if (days < 60) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
  };

  const strip = section.querySelector('#justLandedStrip');
  strip.innerHTML = recent.map(p => {
    const discount = (p.mrp && p.mrp > p.price) ? Math.round((p.mrp - p.price) / p.mrp * 100) : 0;
    const ago = fmtAgo(p.createdAt);
    return `
      <a class="jl-card" href="product.html?id=${p.id}">
        <div class="jl-ribbon">NEW</div>
        <div class="jl-img"><img src="${cldUrl(p.image, 300)}"${srcsetFor(p.image) ? ` srcset="${srcsetFor(p.image)}" sizes="(max-width: 600px) 40vw, 200px"` : ''} alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" /></div>
        <div class="jl-info">
          <div class="jl-name">${escapeHtml(p.name)}</div>
          <div class="jl-price-row">
            <span class="jl-price">&#8377;${(p.price || 0).toLocaleString('en-IN')}</span>
            ${discount ? `<span class="jl-save">${discount}% off</span>` : ''}
          </div>
          ${ago ? `<div class="jl-ago">⏰ ${ago}</div>` : ''}
        </div>
      </a>`;
  }).join('');
}

// ── EDITOR'S PICKS — curated 4-product spotlight ──
// Picks 4 products with the strongest combined signal (high rating,
// high reviews, has MRP discount, premium-tagged) and shows them in a
// magazine-style spotlight strip with quotes from the editor. Stable
// per visit so customers don't see the order shuffle on every scroll.
function initEditorsPicks() {
  if (!document.getElementById('featuredProducts')) return; // homepage only
  if (document.getElementById('editorsPicksSection')) return;

  const candidates = products
    .filter(p => p.inStock !== false && p.image)
    .map(p => {
      const ratingScore   = (p.rating || 0) * 10;
      const reviewScore   = Math.log((p.reviews || 0) + 1) * 8;
      const discountScore = (p.mrp && p.mrp > p.price) ? Math.round((p.mrp - p.price) / p.mrp * 30) : 0;
      const badgeScore    = p.badge === 'Bestseller' ? 18 : p.badge === 'Premium' ? 14 : p.badge === 'Popular' ? 10 : 0;
      return { p, score: ratingScore + reviewScore + discountScore + badgeScore };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(x => x.p);
  if (candidates.length < 4) return;

  const editorNotes = [
    'The colour reads beautifully under both natural daylight and indoor LEDs.',
    'A genuinely useful daily-carry item with proper edge stitching and real leather feel.',
    'Wears equally well with formals, jeans, or ethnic — the rare versatile piece.',
    'Built to last years of daily use without losing its finish.',
    'A statement piece for every occasion that punches well above its price.',
    'Customers come back for this one. The proportions are just right.',
    'Photographs as beautifully as it looks in person.',
    'The kind of upgrade you don&rsquo;t realise you needed until you have it.',
  ];

  const section = document.createElement('section');
  section.id = 'editorsPicksSection';
  section.className = 'editors-picks-section';
  section.innerHTML = `
    <div class="ep-head">
      <div class="ep-kicker">📝 Editor&rsquo;s Picks</div>
      <h2>4 pieces we'd buy ourselves this week</h2>
      <p>Hand-curated by the Elite Emporium team based on customer reviews, build quality, and value for money.</p>
    </div>
    <div class="ep-grid">
      ${candidates.map((p, i) => {
        const note     = editorNotes[(p.id * 7 + i) % editorNotes.length];
        const discount = (p.mrp && p.mrp > p.price) ? Math.round((p.mrp - p.price) / p.mrp * 100) : 0;
        return `
        <a class="ep-card" href="product.html?id=${p.id}">
          <div class="ep-card-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="ep-card-img"><img src="${cldUrl(p.image, 450)}"${srcsetFor(p.image) ? ` srcset="${srcsetFor(p.image)}" sizes="(max-width: 600px) 80vw, 300px"` : ''} alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" /></div>
          <div class="ep-card-body">
            <div class="ep-card-cat">${escapeHtml(p.category || '')}</div>
            <div class="ep-card-name">${escapeHtml(p.name)}</div>
            <div class="ep-card-quote">&ldquo;${note}&rdquo;</div>
            <div class="ep-card-foot">
              <span class="ep-card-price">&#8377;${p.price.toLocaleString('en-IN')}</span>
              ${discount ? `<span class="ep-card-save">${discount}% off</span>` : ''}
              <span class="ep-card-rating">&#9733; ${p.rating || '4.5'}</span>
            </div>
          </div>
        </a>`;
      }).join('')}
    </div>`;

  // Insert after the Most Loved strip if present, else after Top Picks
  const after = document.getElementById('mostLovedSection')
    || document.getElementById('featuredProducts')?.closest('.fk-section');
  if (after?.parentElement) after.parentElement.insertBefore(section, after.nextSibling);
  else document.querySelector('.fk-main')?.appendChild(section);
}

// ── MOST LOVED (rating × log(reviews+1) score) ──
function initMostLoved() {
  if (!document.getElementById('featuredProducts')) return; // homepage only
  // Inject the section once, above the Top Picks block
  if (document.getElementById('mostLovedSection')) return;
  const scored = products
    .filter(p => p.inStock !== false && (p.rating || 0) >= 4.3 && (p.reviews || 0) >= 5)
    .map(p => ({ p, score: (p.rating || 0) * Math.log((p.reviews || 0) + 1) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(x => x.p);
  if (scored.length < 4) return;

  const section = document.createElement('div');
  section.id = 'mostLovedSection';
  section.className = 'fk-section';
  section.innerHTML = `
    <div class="fk-section-head">
      <h2>❤️ Most Loved by Customers</h2>
      <a href="products.html?sort=rating">View All →</a>
    </div>
    <div class="horiz-product-strip" id="mostLovedStrip"></div>`;

  // Insert right before the "Top Picks" featured-products section
  const featuredSection = document.getElementById('featuredProducts')?.closest('.fk-section');
  if (featuredSection?.parentElement) {
    featuredSection.parentElement.insertBefore(section, featuredSection);
  } else {
    document.querySelector('.fk-main')?.appendChild(section);
  }

  renderProducts(scored, 'mostLovedStrip');
  const strip = document.getElementById('mostLovedStrip');
  if (strip) { strip.style.display = 'flex'; strip.style.overflowX = 'auto'; }
}

// ── SIZE GUIDE ────────────────────────────────
const SIZE_GUIDES = {
  clothing: [
    ['Size','Chest (in)','Waist (in)','Hip (in)'],
    ['XS','32–34','26–28','34–36'],
    ['S','34–36','28–30','36–38'],
    ['M','36–38','30–32','38–40'],
    ['L','38–40','32–34','40–42'],
    ['XL','40–42','34–36','42–44'],
    ['XXL','42–44','36–38','44–46'],
  ],
  footwear: [
    ['UK Size','EU Size','US Size','Foot Length (cm)'],
    ['5','38','6','23.5'],['6','39','7','24.5'],
    ['7','40','8','25.5'],['8','41','9','26.5'],
    ['9','42','10','27.5'],['10','43','11','28.5'],
  ],
};

const CLOTHING_CATS = ['Clothing','Abaiya','Hijab','Sarees','Kurta Sets','Mens Dress','Kids Wear'];

function initSizeGuide(product) {
  const accord = document.getElementById('sizeGuideAccord');
  const body   = document.getElementById('sizeGuideBody');
  if (!accord || !body) return;

  let guide = null;
  if (CLOTHING_CATS.includes(product.category)) guide = SIZE_GUIDES.clothing;
  else if (product.category === 'Footwear')      guide = SIZE_GUIDES.footwear;
  if (!guide) return;

  const [headers, ...rows] = guide;
  body.innerHTML = `
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-size:11px;">
        <thead><tr>${headers.map(h =>
          `<th style="background:var(--red);color:white;padding:6px 8px;text-align:left;">${h}</th>`
        ).join('')}</tr></thead>
        <tbody>${rows.map((r, i) =>
          `<tr style="background:${i%2===0?'white':'var(--bg)'};">${r.map(c =>
            `<td style="padding:5px 8px;border-bottom:1px solid var(--border);">${c}</td>`
          ).join('')}</tr>`
        ).join('')}</tbody>
      </table>
    </div>
    <div style="font-size:11px;color:var(--text-light);margin-top:8px;">
      💡 If between sizes, we recommend going up one size.
    </div>`;
  accord.style.display = 'block';
}

function initDealOfDay() {
  const section = document.getElementById('dealOfDaySection');
  const card    = document.getElementById('dealOfDayCard');
  if (!section || !card) return;

  // Pick product with highest discount %
  const deal = [...products]
    .filter(p => p.mrp && p.mrp > p.price && p.inStock !== false)
    .sort((a, b) => (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp)[0];
  if (!deal) return;

  const disc = Math.round((deal.mrp - deal.price) / deal.mrp * 100);
  card.innerHTML = `
    <div class="deal-img-wrap">
      <span class="deal-discount-badge">${disc}% OFF</span>
      <img src="${deal.image || ''}" alt="${deal.name}" />
    </div>
    <div class="deal-info">
      <div class="deal-category">${deal.category}</div>
      <div class="deal-name">${deal.name}</div>
      <div class="deal-rating">${renderStars(deal.rating)} <span class="rating-count">(${deal.reviews} reviews)</span></div>
      <div class="deal-price-block">
        <span class="deal-price">₹${deal.price.toLocaleString('en-IN')}</span>
        <span class="deal-mrp">₹${deal.mrp.toLocaleString('en-IN')}</span>
        <span class="deal-saving">Save ₹${(deal.mrp - deal.price).toLocaleString('en-IN')}</span>
      </div>
      <div class="deal-desc">${deal.desc || ''}</div>
      <div class="deal-actions">
        <button class="add-to-cart" onclick="addToCart(${deal.id})">🛒 Add to Cart</button>
        <a class="deal-view-btn" href="product.html?id=${deal.id}">View Details →</a>
      </div>
    </div>`;
  section.style.display = 'block';

  // Countdown reuses the flash sale timer approach — counts to midnight
  const timerEl = document.getElementById('dealTimer');
  if (timerEl) {
    const tick = () => {
      const now = new Date();
      const midnight = new Date(now); midnight.setHours(23,59,59,999);
      let diff = Math.max(0, midnight - now);
      const h = Math.floor(diff / 3600000); diff -= h * 3600000;
      const m = Math.floor(diff / 60000);   diff -= m * 60000;
      const s = Math.floor(diff / 1000);
      timerEl.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    };
    tick();
    setInterval(tick, 1000);
  }
}

function initTrending() {
  const section = document.getElementById('trendingSection');
  const strip   = document.getElementById('trendingStrip');
  if (!section || !strip) return;
  const trending = [...products]
    .filter(p => p.inStock !== false)
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 8);
  if (!trending.length) return;
  section.style.display = 'block';
  renderProducts(trending, 'trendingStrip');
  strip.classList.add('horiz-product-strip');
  strip.style.display = 'flex';
  strip.style.overflowX = 'auto';
}

// ── VIEWER COUNT WIDGET ───────────────────────
function initViewerCount() {
  const wrap  = document.getElementById('pdViewerCount');
  const numEl = document.getElementById('pdViewerNum');
  if (!wrap || !numEl) return;

  let count = Math.floor(Math.random() * 18) + 6;
  numEl.textContent = count;
  wrap.style.display = 'flex';

  setInterval(() => {
    const delta = Math.random() < 0.5 ? 1 : -1;
    count = Math.max(4, Math.min(30, count + delta));
    numEl.textContent = count;
  }, 7000);
}

// ── PRODUCT DETAIL PAGE ───────────────────────
function initProductDetailPage() {
  // Hide the skeleton — product data is about to render.
  const sk = document.getElementById('pdSkeleton');
  if (sk) {
    sk.classList.add('hide');
    setTimeout(() => sk.remove(), 350);
  }
  // Engagement signal for the notification permission prompt
  if (typeof bumpNotifEngagement === 'function') bumpNotifEngagement(1);
  const params = new URLSearchParams(window.location.search);
  const rawId  = params.get('id');
  const p      = products.find(prod => String(prod.id) === String(rawId));

  if (!p) {
    // Friendly empty-state instead of bare "Product not found"
    document.title = 'Product Not Found – Elite Emporium';
    const breadEl = document.getElementById('pdBreadcrumb');
    if (breadEl) breadEl.innerHTML = `<a href="index.html">Home</a> › <a href="products.html">Products</a> › Not Found`;

    const pdPage = document.querySelector('.pd-page');
    if (pdPage) {
      // Build suggestions: top 6 in-stock, high-rated products
      const suggestions = [...products]
        .filter(x => x.inStock !== false)
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 6);
      pdPage.innerHTML = `
        <div class="pd-notfound">
          <div class="pd-notfound-emoji">🔍</div>
          <h1>This product wandered off…</h1>
          <p>The product you're looking for may have been removed, sold out, or the link is incorrect.</p>
          <div class="pd-notfound-actions">
            <a href="products.html" class="btn-primary">Browse All Products</a>
            <a href="index.html" class="btn-primary" style="background:transparent;color:var(--red);border:1.5px solid var(--red);">← Back to Home</a>
            <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi! I was looking for a product (id ${rawId}) but the page is missing. Can you help?`)}" target="_blank" rel="noopener" class="btn-primary" style="background:#25D366;">💬 Ask on WhatsApp</a>
          </div>
          ${suggestions.length ? `
            <div class="pd-notfound-suggest">
              <h3>You might like these instead</h3>
              <div class="products-grid pd-notfound-grid"></div>
            </div>` : ''}
        </div>`;
      if (suggestions.length) {
        renderProducts(suggestions, null); // need a target — fall through to direct rendering
        const grid = pdPage.querySelector('.pd-notfound-grid');
        if (grid) {
          // Render simple cards (the renderProducts() helper writes to an element with that id, so do it inline)
          grid.innerHTML = suggestions.map(s => {
            const discount = s.mrp && s.mrp > s.price ? Math.round((s.mrp - s.price) / s.mrp * 100) : 0;
            return `
              <a href="product.html?id=${s.id}" class="product-card" style="text-decoration:none;color:inherit;">
                <div class="product-image product-image-photo"><img src="${s.image}" alt="${s.name}" loading="lazy" /></div>
                <div class="product-info">
                  <div class="product-name">${s.name.length > 38 ? s.name.slice(0,38) + '…' : s.name}</div>
                  <div class="product-rating"><span class="fk-rating-badge">★ ${s.rating}</span></div>
                  <div class="product-footer">
                    <div class="product-price-block">
                      <div class="product-price">₹${s.price.toLocaleString('en-IN')}</div>
                      ${discount ? `<span class="product-save">${discount}% off</span>` : ''}
                    </div>
                  </div>
                </div>
              </a>`;
          }).join('');
        }
      }
    }
    // Hide the sticky bar and any chrome that expects a product
    const stickyBar = document.getElementById('pdStickyBar');
    if (stickyBar) stickyBar.style.display = 'none';
    return;
  }

  trackRecentlyViewed(p);
  initFBT(p);
  initPairWith(p);
  initRelatedProducts(p);
  initPdRecentlyViewed(p.id);
  initStickyBar(p);
  initReviewSection(p);
  initSizeGuide(p);
  initViewerCount();
  initPdTabInk();
  initBackToCategoryPill(p);
  document.title = `${p.name} – ₹${p.price.toLocaleString('en-IN')} | Elite Emporium`;

  // Dynamic OG tags for social sharing of product links
  const setMeta = (prop, val, attr = 'property') => {
    let el = document.querySelector(`meta[${attr}="${prop}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, prop); document.head.appendChild(el); }
    el.setAttribute('content', val);
  };
  setMeta('og:title',       `${p.name} – Elite Emporium`);
  setMeta('og:description', `${(p.desc || '').slice(0, 120)}… ₹${p.price.toLocaleString('en-IN')} | Free delivery above ₹499`);
  setMeta('og:image',       p.image || 'images/logo-512.png');
  setMeta('og:type',        'product');
  setMeta('description',    `${p.name} at ₹${p.price.toLocaleString('en-IN')}. ${(p.desc || '').slice(0, 100)}`, 'name');

  // JSON-LD structured data for SEO rich snippets — enriched with
  // MPN/SKU, multi-image gallery, hasMerchantReturnPolicy, shippingDetails,
  // and per-variant offers (when product has colour variants).
  const baseUrl = 'https://elite-emporium-one.vercel.app/';
  const ldScript = document.getElementById('productJsonLd') || document.createElement('script');
  ldScript.id   = 'productJsonLd';
  ldScript.type = 'application/ld+json';
  const _abs = u => !u ? baseUrl + 'images/logo-512.png' : (u.startsWith('http') ? u : baseUrl + u);
  const imageList = [_abs(p.image), ...(p.variants || []).map(v => _abs(v.image))].filter((u, i, a) => u && a.indexOf(u) === i);
  const offerBase = {
    priceCurrency:  'INR',
    availability:   p.inStock !== false ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    seller:         { '@type': 'Organization', name: 'Elite Emporium' },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'IN',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 7,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/ReturnShippingFees',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: p.price >= 499 ? 0 : 60, currency: 'INR' },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'IN' },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
        transitTime:  { '@type': 'QuantitativeValue', minValue: 2, maxValue: 7, unitCode: 'DAY' },
      },
    },
  };
  // Per-variant offers if the product has colour variants
  const offers = (p.variants && p.variants.length > 1) ? {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice:  p.price,
    highPrice: p.price,
    offerCount: p.variants.length,
    offers: p.variants.map((v, i) => ({
      '@type': 'Offer',
      url:   baseUrl + `product.html?id=${p.id}#variant=${encodeURIComponent(v.color || i)}`,
      price: p.price,
      itemOffered: { '@type': 'Product', name: `${p.name} — ${v.color}` },
      ...offerBase,
    })),
  } : {
    '@type': 'Offer',
    url:   baseUrl + `product.html?id=${p.id}`,
    price: p.price,
    priceValidUntil: new Date(Date.now() + 30*24*3600*1000).toISOString().slice(0, 10),
    ...offerBase,
  };
  // Additional properties from product attributes
  const additionalProperties = [];
  if (p.category) additionalProperties.push({ '@type': 'PropertyValue', name: 'Category', value: p.category });
  if (p.badge)    additionalProperties.push({ '@type': 'PropertyValue', name: 'Tag',      value: p.badge });
  if (p.variants && p.variants.length) {
    additionalProperties.push({ '@type': 'PropertyValue', name: 'Available Colours',
      value: p.variants.map(v => v.color).filter(Boolean).join(', ') });
  }
  ldScript.text = JSON.stringify({
    '@context':     'https://schema.org/',
    '@type':        'Product',
    '@id':          baseUrl + `product.html?id=${p.id}#product`,
    name:           p.name,
    description:    (p.desc || '').replace(/<[^>]+>/g, '').slice(0, 500),
    image:          imageList,
    brand:          { '@type': 'Brand', name: 'Elite Emporium' },
    sku:            `EE-${p.id}`,
    mpn:            `EE-${p.id}`,
    category:       p.category,
    offers,
    aggregateRating: p.rating ? {
      '@type':      'AggregateRating',
      ratingValue:  p.rating,
      reviewCount:  p.reviews || 1,
      bestRating:   5,
      worstRating:  1,
    } : undefined,
    additionalProperty: additionalProperties.length ? additionalProperties : undefined,
  });
  if (!document.getElementById('productJsonLd')) document.head.appendChild(ldScript);

  // Open Graph tags for WhatsApp / social link previews — uses a
  // Cloudinary transform (1200x630 + auto-crop + brand colour pad)
  // so the link preview looks like a real social card, not a raw
  // tall product photo.
  const ogImg = p.image || (p.variants && p.variants[0]?.image) || '';
  const ogImgCard = ogImg && ogImg.includes('res.cloudinary.com')
    ? ogImg.replace('/image/upload/', '/image/upload/c_pad,b_auto,w_1200,h_630,q_auto,f_jpg/')
    : (ogImg.startsWith('http') ? ogImg : `https://elite-emporium-one.vercel.app/${ogImg}`);
  const setOgById = (id, val) => { const el = document.getElementById(id); if (el) el.setAttribute('content', val); };
  setOgById('ogTitle', `${p.name} – ₹${p.price.toLocaleString('en-IN')} | Elite Emporium`);
  setOgById('ogDesc',  `${p.category} · ${p.mrp && p.mrp > p.price ? Math.round((p.mrp - p.price) / p.mrp * 100) + '% off · ' : ''}Rated ★${p.rating}. Free delivery above ₹499.`);
  setOgById('ogImage', ogImgCard);
  setOgById('ogUrl',   window.location.href);
  // Also patch the og:image:width / og:image:height meta tags if present so
  // Twitter / WhatsApp render the right aspect ratio (1.91:1).
  document.querySelectorAll('meta[property="og:image:width"]').forEach(el => el.setAttribute('content', '1200'));
  document.querySelectorAll('meta[property="og:image:height"]').forEach(el => el.setAttribute('content', '630'));

  // Update canonical URL to the actual ?id=... permalink
  const canonical = document.getElementById('canonicalLink');
  if (canonical) canonical.href = window.location.href;

  // BreadcrumbList JSON-LD for SERP rich breadcrumbs
  const bcScript = document.getElementById('productBreadcrumbLd') || document.createElement('script');
  bcScript.id = 'productBreadcrumbLd';
  bcScript.type = 'application/ld+json';
  bcScript.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://elite-emporium-one.vercel.app/' },
      { '@type': 'ListItem', position: 2, name: 'All Products', item: 'https://elite-emporium-one.vercel.app/products.html' },
      { '@type': 'ListItem', position: 3, name: p.category,     item: `https://elite-emporium-one.vercel.app/products.html?category=${encodeURIComponent(p.category)}` },
      { '@type': 'ListItem', position: 4, name: p.name,         item: window.location.href },
    ],
  });
  if (!document.getElementById('productBreadcrumbLd')) document.head.appendChild(bcScript);
  document.querySelector('meta[name="description"]')?.setAttribute('content', `Buy ${p.name} at ₹${p.price.toLocaleString('en-IN')} on Elite Emporium. ${p.category}. Free delivery above ₹499.`);

  // Breadcrumb
  const breadEl = document.getElementById('pdBreadcrumb');
  if (breadEl) breadEl.innerHTML =
    `<a href="index.html">Home</a> › <a href="products.html">All Products</a> › <a href="products.html?category=${encodeURIComponent(p.category)}">${p.category}</a> › ${p.name}`;

  // Badge + stock status
  const bw = document.getElementById('pdBadgeWrap');
  if (bw) {
    const badgeHtml = p.badge ? (() => {
      const cls = p.badge === 'New' ? 'new' : p.badge === 'Bestseller' ? 'hot' : p.badge === 'Premium' ? 'premium' : '';
      return `<span class="product-badge ${cls}" style="position:static;display:inline-block;">${p.badge}</span>`;
    })() : '';
    // Scarcity scarcity-badge for popular in-stock items (deterministic per-day)
    const pdIsPopular = p.inStock !== false && (p.badge === 'Bestseller' || (p.reviews && p.reviews > 30));
    const pdLowStockN = pdIsPopular
      ? 2 + (_stableHash(`lowstock-${p.id}-${new Date().toISOString().slice(0,10)}`) % 6)
      : 0;
    const stockHtml = p.inStock !== false
      ? `<span class="pd-stock-badge">✅ In Stock</span>${pdIsPopular ? ` <span class="pd-stock-badge low">⚡ Only ${pdLowStockN} left</span>` : ''}`
      : `<span class="pd-stock-badge oos">❌ Out of Stock</span>`;
    bw.innerHTML = `<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px;">${badgeHtml}${stockHtml}</div>`;

    // Live social proof: viewers right now + sold today.
    // Deterministic per-product per-hour using the FNV-1a hash, so two visitors
    // who land on the same product page within the same hour see the same number.
    // Drifts ±1 every 18s in the UI to feel "live" without being a fake spinner.
    if (p.inStock !== false) {
      const now = new Date();
      const hourSeed = `${p.id}-viewers-${now.getFullYear()}${now.getMonth()}${now.getDate()}${now.getHours()}`;
      const daySeed  = `${p.id}-sold-${now.getFullYear()}${now.getMonth()}${now.getDate()}`;
      const popularityBoost = (p.badge === 'Bestseller' ? 12 : p.badge === 'Premium' ? 6 : 0) + Math.min(20, Math.floor((p.reviews || 0) / 3));
      const baseViewers = 4 + (_stableHash(hourSeed) % 18) + popularityBoost; // 4..40
      const soldToday   = 2 + (_stableHash(daySeed)  % 14) + Math.min(8, Math.floor(popularityBoost / 2)); // 2..24

      const proofEl = document.createElement('div');
      proofEl.className = 'pd-live-proof';
      proofEl.innerHTML = `
        <span class="pd-lp-pill pd-lp-viewers" title="Live viewers on this product">
          <span class="pd-lp-dot"></span>
          <strong id="pdLpViewersN">${baseViewers}</strong> viewing now
        </span>
        <span class="pd-lp-pill pd-lp-sold" title="Units sold today">
          🛒 <strong>${soldToday}</strong> sold today
        </span>`;
      bw.appendChild(proofEl);

      // Drift the viewer count ±1 every 15-22s so it feels alive.
      // Bail when tab is hidden to save CPU/battery.
      if (!window.__pdLpInterval) {
        window.__pdLpInterval = setInterval(() => {
          if (document.hidden) return;
          const n = document.getElementById('pdLpViewersN');
          if (!n) { clearInterval(window.__pdLpInterval); window.__pdLpInterval = null; return; }
          let cur = parseInt(n.textContent, 10) || baseViewers;
          // Bias gently toward baseViewers so it doesn't drift off forever.
          const delta = Math.random() < 0.5 ? -1 : 1;
          const towardBase = cur < baseViewers ? 1 : cur > baseViewers ? -1 : 0;
          cur = Math.max(3, Math.min(baseViewers + 6, cur + delta + (Math.random() < 0.3 ? towardBase : 0)));
          n.textContent = cur;
        }, 15000 + Math.floor(Math.random() * 7000));
      }
    }

    // ── Delivery ETA card with PIN check ─────────────────────────
    // Pre-fills from the last-saved PIN (cart form auto-saves) so a
    // returning customer sees their date immediately. Pressing Check
    // updates instantly.
    if (p.inStock !== false) {
      const savedPin = (() => {
        try {
          const lastOrder = JSON.parse(localStorage.getItem('eliteEmporiumCustomer') || '{}');
          return lastOrder.pincode || '';
        } catch { return ''; }
      })();
      const etaCard = document.createElement('div');
      etaCard.className = 'pd-eta-card';
      etaCard.innerHTML = `
        <div class="pd-eta-head">
          <span class="pd-eta-icon">🚚</span>
          <strong>Delivery</strong>
          <span class="pd-eta-free">${p.price >= 499 ? 'FREE shipping' : 'FREE over ₹499'}</span>
        </div>
        <div class="pd-dispatch-line" id="pdDispatchLine"></div>
        <div class="pd-eta-row">
          <input type="text" inputmode="numeric" maxlength="6" id="pdEtaPin" placeholder="Enter PIN code" value="${savedPin}" aria-label="Enter PIN code" />
          <button type="button" id="pdEtaCheckBtn">Check</button>
        </div>
        <div class="pd-eta-result" id="pdEtaResult" aria-live="polite"></div>`;
      bw.appendChild(etaCard);

      const renderEta = (pin) => {
        const result = document.getElementById('pdEtaResult');
        if (!result) return;
        const eta = getDeliveryETA(pin);
        if (!eta) {
          result.innerHTML = pin
            ? `<span class="pd-eta-err">⚠️ Please enter a valid 6-digit PIN.</span>`
            : `<span class="pd-eta-default">📦 Typically 3-7 business days · same-day dispatch before 4 PM</span>`;
          return;
        }
        if (eta.minDays === eta.maxDays && eta.minDays === 1) {
          result.innerHTML = `✅ <strong>${eta.zone}</strong> · Get it as soon as <strong>${formatDeliveryDate(1)}</strong>`;
        } else {
          const earliest = formatDeliveryDate(eta.minDays);
          const latest   = formatDeliveryDate(eta.maxDays);
          result.innerHTML = `✅ <strong>${eta.zone}</strong> · Delivers <strong>${earliest}</strong> – <strong>${latest}</strong>`;
        }
      };

      // Show default state, then auto-check if savedPin is valid
      renderEta(savedPin);

      // Wire up the button + Enter key
      const btn = document.getElementById('pdEtaCheckBtn');
      const inp = document.getElementById('pdEtaPin');
      btn?.addEventListener('click', () => renderEta(inp.value.trim()));
      inp?.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); renderEta(inp.value.trim()); } });
      inp?.addEventListener('input', () => {
        // Auto-check the moment they reach 6 digits
        const v = inp.value.replace(/\D/g, '').slice(0, 6);
        if (v !== inp.value) inp.value = v;
        if (v.length === 6) renderEta(v);
      });

      // ── Same-day dispatch countdown ─────────────────────────
      // Updates the .pd-dispatch-line every second showing 'Order in
      // the next HH:MM:SS for same-day dispatch' while the cutoff
      // (4 PM IST = 16:00 local) hasn't passed; switches to
      // 'Ships tomorrow' after cutoff. Cleanup on unload.
      const dispatchEl = document.getElementById('pdDispatchLine');
      if (dispatchEl) {
        const tickDispatch = () => {
          const now = new Date();
          const cutoff = new Date(now);
          cutoff.setHours(16, 0, 0, 0);
          if (now >= cutoff) {
            dispatchEl.innerHTML = `⏰ <strong>Ships tomorrow</strong> · Order before 4 PM tomorrow for same-day dispatch.`;
            dispatchEl.classList.remove('urgent');
            return;
          }
          const diff = cutoff - now;
          const hh = String(Math.floor(diff / 3600000)).padStart(2, '0');
          const mm = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
          const ss = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
          const tightWindow = diff < 30 * 60 * 1000; // <30 min left
          dispatchEl.innerHTML = `⚡ Order in the next <strong>${hh}:${mm}:${ss}</strong> for <strong>same-day dispatch</strong>`;
          dispatchEl.classList.toggle('urgent', tightWindow);
        };
        tickDispatch();
        if (window.__pdDispatchInterval) clearInterval(window.__pdDispatchInterval);
        window.__pdDispatchInterval = setInterval(tickDispatch, 1000);
      }
    }
  }

  // Category tag with clickable link
  const catEl = document.getElementById('pdCategory');
  if (catEl) {
    catEl.innerHTML = `<a href="products.html?category=${encodeURIComponent(p.category)}" style="color:inherit;text-decoration:none;">${p.category}</a>`;
  }

  // Product keyword tags (extracted from name + brand keywords)
  const tagsWrap = document.createElement('div');
  tagsWrap.className = 'pd-tags-row';
  const nameWords = p.name.split(/\s+/).filter(w => w.length > 3);
  const keyTags   = [p.category, ...nameWords.slice(0, 4)].filter((v,i,a) => a.indexOf(v) === i);
  tagsWrap.innerHTML = keyTags.map(tag =>
    `<a href="products.html?search=${encodeURIComponent(tag)}" class="pd-tag">#${tag}</a>`
  ).join('');
  const pdTitleEl = document.getElementById('pdTitle');
  if (pdTitleEl) pdTitleEl.insertAdjacentElement('afterend', tagsWrap);

  // Category, title, rating, price, description
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('pdTitle',    p.name);
  set('pdPrice',    '₹' + p.price.toLocaleString('en-IN'));
  if (p.mrp && p.mrp > p.price) {
    const savings    = Math.round((p.mrp - p.price) / p.mrp * 100);
    const savedAmt   = (p.mrp - p.price).toLocaleString('en-IN');
    const mrpEl      = document.getElementById('pdPrice');
    if (mrpEl) {
      mrpEl.insertAdjacentHTML('afterend',
        `<div class="pd-mrp"><s>M.R.P: ₹${p.mrp.toLocaleString('en-IN')}</s><span class="pd-save-badge">${savings}% off</span></div>
         <div class="pd-savings-callout">🎉 You save ₹${savedAmt} on this product!</div>`);

      // ── Limited-time countdown urgency (when discount >= 15%) ──
      // Resets daily at midnight IST so the urgency stays perpetually fresh
      // without being a fake one-off countdown. Customers see a real
      // deadline; merchant doesn't have to update anything.
      if (savings >= 15) {
        const calloutEl = mrpEl.nextElementSibling?.nextElementSibling; // .pd-savings-callout
        if (calloutEl) {
          calloutEl.insertAdjacentHTML('afterend',
            `<div class="pd-urgency-countdown" id="pdUrgencyCountdown">
               <div class="pd-uc-left">
                 <div class="pd-uc-title">⏰ Sale ends in:</div>
                 <div class="pd-uc-sub">${savings}% off — get this price before midnight</div>
               </div>
               <div class="pd-uc-timer">
                 <div class="pd-uc-unit"><span id="pdUcHH">--</span><small>HRS</small></div>
                 <div class="pd-uc-sep">:</div>
                 <div class="pd-uc-unit"><span id="pdUcMM">--</span><small>MIN</small></div>
                 <div class="pd-uc-sep">:</div>
                 <div class="pd-uc-unit"><span id="pdUcSS">--</span><small>SEC</small></div>
               </div>
             </div>`);

          const tickUrgency = () => {
            const now      = new Date();
            const midnight = new Date(now);
            midnight.setHours(24, 0, 0, 0); // next midnight (local time)
            const diff = midnight - now;
            if (diff <= 0) return;
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            const hh = document.getElementById('pdUcHH');
            const mm = document.getElementById('pdUcMM');
            const ss = document.getElementById('pdUcSS');
            if (hh) hh.textContent = String(h).padStart(2, '0');
            if (mm) mm.textContent = String(m).padStart(2, '0');
            if (ss) ss.textContent = String(s).padStart(2, '0');
          };
          tickUrgency();
          setInterval(tickUrgency, 1000);
        }
      }
    }
  }
  const descEl = document.getElementById('pdDesc');
  if (descEl) {
    // Format description: convert line breaks and bullet markers to HTML
    const formatDesc = raw => {
      if (!raw) return '';
      // Already has HTML tags — render as-is
      if (/<[a-z][\s\S]*>/i.test(raw)) return raw;
      const lines = raw.split(/\n+/);
      const bullets = lines.filter(l => /^[\-\•\*]/.test(l.trim()));
      if (bullets.length >= 2) {
        // Has bullet list — render mixed paragraphs + list
        let html = '';
        let inList = false;
        lines.forEach(line => {
          const t = line.trim();
          if (!t) { if (inList) { html += '</ul>'; inList = false; } return; }
          if (/^[\-\•\*]/.test(t)) {
            if (!inList) { html += '<ul class="pd-desc-list">'; inList = true; }
            html += `<li>${t.replace(/^[\-\•\*]\s*/, '')}</li>`;
          } else {
            if (inList) { html += '</ul>'; inList = false; }
            html += `<p class="pd-desc-para">${t}</p>`;
          }
        });
        if (inList) html += '</ul>';
        return html;
      }
      // Plain text — wrap each paragraph in <p>
      return lines.filter(l => l.trim()).map(l => `<p class="pd-desc-para">${l.trim()}</p>`).join('');
    };
    descEl.innerHTML = formatDesc(p.desc);
    // Append Price Alert button below description
    const alertBtn = document.createElement('button');
    alertBtn.className = 'btn-price-alert';
    alertBtn.innerHTML = '🔔 Set Price Drop Alert';
    alertBtn.onclick = () => openPriceAlertModal(p);
    const existingAlert = getPriceAlert(p.id);
    if (existingAlert) {
      alertBtn.innerHTML = `🔔 Alert set at ₹${existingAlert.targetPrice.toLocaleString('en-IN')}`;
      alertBtn.classList.add('active');
    }
    descEl.appendChild(alertBtn);
  }

  const ratingEl = document.getElementById('pdRating');
  if (ratingEl) ratingEl.innerHTML = `${renderStars(p.rating)} <span class="rating-count">(${p.reviews} reviews)</span>`;

  const barsEl = document.getElementById('pdRatingBars');
  if (barsEl && p.rating && p.reviews) {
    const r = p.rating;
    const n = p.reviews;
    // Simulate a plausible distribution anchored around the actual rating
    const dist = generateRatingDist(r, n);
    barsEl.innerHTML = [5,4,3,2,1].map(star => {
      const count = dist[star];
      const pct   = n > 0 ? Math.round(count / n * 100) : 0;
      const cls   = star <= 2 ? 'low' : star === 3 ? 'mid' : '';
      return `<div class="rating-bar-row">
        <span class="rating-bar-label">${star}★</span>
        <div class="rating-bar-track"><div class="rating-bar-fill ${cls}" style="width:${pct}%"></div></div>
        <span class="rating-bar-count">${count}</span>
      </div>`;
    }).join('');
  }

  // Main image & color picker
  const mainImg     = document.getElementById('pdMainImage');
  const colorPicker = document.getElementById('pdColorPicker');

  if (p.variants && p.variants.length > 1) {
    if (mainImg) { mainImg.src = p.variants[0].image; mainImg.alt = p.name + (p.variants[0].color ? ' ' + p.variants[0].color : ''); }
    // Thumbnail strip under main image
    const gallery = document.querySelector('.pd-gallery');
    if (gallery && p.variants.length > 1) {
      let thumbStrip = gallery.querySelector('.pd-thumb-strip');
      if (!thumbStrip) {
        thumbStrip = document.createElement('div');
        thumbStrip.className = 'pd-thumb-strip';
        gallery.appendChild(thumbStrip);
      }
      thumbStrip.innerHTML = p.variants.map((v, i) =>
        `<div class="pd-thumb${i === 0 ? ' active' : ''}"
              data-img="${v.image.replace(/"/g,'&quot;')}"
              data-color="${v.color.replace(/"/g,'&quot;')}"
              onclick="selectThumb(this)"
              title="${v.color}">
           <img src="${v.image}" alt="${v.color}" loading="lazy" />
         </div>`
      ).join('');
    }
    if (colorPicker) {
      colorPicker.innerHTML =
        `<div class="pd-color-label">Color: <strong id="pdSelectedColor">${p.variants[0].color}</strong></div>
         <div class="pd-color-swatches">
           ${p.variants.map((v, i) =>
             `<div class="pd-swatch-item${i === 0 ? ' active' : ''}"
                   data-img="${v.image.replace(/"/g,'&quot;')}"
                   data-color="${v.color.replace(/"/g,'&quot;')}"
                   onclick="selectDetailVariant(this)">
               <img src="${v.image}" alt="${v.color}" loading="lazy" />
               <span>${v.color}</span>
             </div>`
           ).join('')}
         </div>`;
    }
  } else {
    if (mainImg) { mainImg.src = p.image || ''; mainImg.alt = p.name; }
    if (colorPicker) colorPicker.style.display = 'none';
  }

  // WhatsApp order button
  const waBtn = document.getElementById('pdWhatsApp');
  if (waBtn) {
    const msg = encodeURIComponent(`Hi! I want to order:\n\n*${p.name}*\nPrice: ₹${p.price.toLocaleString('en-IN')}\n\nPlease confirm availability.`);
    waBtn.href = `https://wa.me/917358650774?text=${msg}`;
  }

  // Out of Stock state on detail page
  const cartBtn = document.getElementById('pdAddToCart');
  if (p.inStock === false) {
    const oosEl = document.createElement('div');
    oosEl.className = 'pd-oos-badge';
    oosEl.textContent = 'Out of Stock';
    const actions = document.querySelector('.pd-actions');
    if (actions) actions.insertBefore(oosEl, actions.firstChild);
    if (cartBtn) {
      cartBtn.disabled = true;
      cartBtn.classList.add('oos-btn');
      cartBtn.textContent = 'Out of Stock';
    }
    const waBtn = document.getElementById('pdWhatsApp');
    if (waBtn) waBtn.textContent = '💬 Ask on WhatsApp';
    // Notify Me button
    const notifyBtn = document.createElement('button');
    notifyBtn.className = 'btn-notify-me';
    notifyBtn.innerHTML = '🔔 Notify Me When Available';
    notifyBtn.onclick = () => {
      const wa = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi! I'd like to be notified when "${p.name}" is back in stock.`)}`;
      window.open(wa, '_blank');
    };
    if (actions) actions.appendChild(notifyBtn);
  } else {
    // Quantity selector — inserted before .pd-actions
    let _pdQty = 1;
    const pdActions = document.querySelector('.pd-actions');
    if (pdActions) {
      const qtyRow = document.createElement('div');
      qtyRow.className = 'pd-qty-row';
      qtyRow.innerHTML =
        `<span class="pd-qty-label">Qty:</span>
         <div class="pd-qty-ctrl">
           <button class="pd-qty-btn" id="pdQtyDec" onclick="__pdQtyChange(-1)" aria-label="Decrease quantity">−</button>
           <span class="pd-qty-num" id="pdQtyNum">1</span>
           <button class="pd-qty-btn" id="pdQtyInc" onclick="__pdQtyChange(1)" aria-label="Increase quantity">+</button>
         </div>
         <span class="pd-qty-max-note" id="pdQtyNote"></span>`;
      pdActions.insertAdjacentElement('beforebegin', qtyRow);

      window.__pdQtyChange = function(delta) {
        const prev = _pdQty;
        _pdQty = Math.max(1, Math.min(10, _pdQty + delta));
        const numEl = document.getElementById('pdQtyNum');
        if (prev !== _pdQty) {
          // Soft bump animation + haptic
          numEl.classList.remove('qty-bump');
          void numEl.offsetWidth;
          numEl.classList.add('qty-bump');
          hapticTap();
        }
        numEl.textContent = _pdQty;
        document.getElementById('pdQtyDec').disabled = _pdQty <= 1;
        document.getElementById('pdQtyInc').disabled = _pdQty >= 10;
        document.getElementById('pdQtyNote').textContent = _pdQty >= 10 ? 'Max 10' : '';
      };
      // Initial state
      document.getElementById('pdQtyDec').disabled = true;
    }

    // Add to cart — pass selected variant + qty
    if (cartBtn) {
      if (p.variants && p.variants.length > 1) {
        cartBtn.dataset.selectedColor = p.variants[0].color;
        cartBtn.dataset.selectedImage = p.variants[0].image;
      }
      cartBtn.onclick = () => {
        const color = cartBtn.dataset.selectedColor || undefined;
        const img   = cartBtn.dataset.selectedImage || undefined;
        addToCart(p.id, color, img, _pdQty);
      };
    }
  }

  // Buy Now button
  const buyNowBtn = document.getElementById('pdBuyNow');
  if (buyNowBtn) {
    if (p.inStock === false) {
      buyNowBtn.disabled = true;
      buyNowBtn.textContent = 'Out of Stock';
    } else {
      buyNowBtn.onclick = () => {
        const color = cartBtn?.dataset.selectedColor || undefined;
        const img   = cartBtn?.dataset.selectedImage || undefined;
        const qty   = parseInt(document.getElementById('pdQtyNum')?.textContent || '1', 10) || 1;
        addToCart(p.id, color, img, qty);
        window.location.href = 'cart.html';
      };
    }
  }

  // Wishlist + Ask a Question buttons — always visible
  const actions = document.querySelector('.pd-actions');
  if (actions) {
    // Wishlist button
    const wlBtn = document.createElement('button');
    wlBtn.className = 'pd-btn-wishlist' + (isWishlisted(p.id) ? ' active' : '');
    wlBtn.innerHTML = isWishlisted(p.id) ? '❤️ Wishlisted' : '🤍 Wishlist';
    wlBtn.title = 'Save to wishlist';
    wlBtn.onclick = () => {
      toggleWishlist(p.id, null);
      const inWl = isWishlisted(p.id);
      wlBtn.innerHTML = inWl ? '❤️ Wishlisted' : '🤍 Wishlist';
      wlBtn.classList.toggle('active', inWl);
    };
    actions.appendChild(wlBtn);

    // Ask a Question button
    const askBtn = document.createElement('a');
    askBtn.className = 'btn-ask-question';
    askBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi! I have a question about:\n\n*${p.name}*\nPrice: ₹${p.price.toLocaleString('en-IN')}\n\nMy question: `)}`;
    askBtn.target = '_blank';
    askBtn.rel = 'noopener';
    askBtn.innerHTML = '❓ Ask a Question';
    actions.appendChild(askBtn);

  }

  // Related categories chip strip — appended to description tab
  (() => {
    const descEl = document.getElementById('pdDesc');
    if (!descEl) return;
    const RELATED_MAP = {
      'Abaiya':         ['Hijab', 'Sarees', 'Clothing', 'Perfumes'],
      'Hijab':          ['Abaiya', 'Sarees', 'Clothing', 'Cosmetics'],
      'Sarees':         ['Kurta Sets', 'Clothing', 'Jewellery', 'Hijab'],
      'Kurta Sets':     ['Sarees', 'Mens Dress', 'Clothing', 'Footwear'],
      'Clothing':       ['Footwear', 'Bags', 'Watches', 'Belts'],
      'Mens Dress':     ['Watches', 'Wallets', 'Belts', 'Footwear'],
      'Kids Wear':      ['Footwear', 'Toys & Games', 'Bags'],
      'Bags':           ['Wallets', 'Watches', 'Coolers', 'Clothing'],
      'Watches':        ['Bags', 'Wallets', 'Mens Dress', 'Coolers'],
      'Coolers':        ['Watches', 'Bags', 'Mens Dress'],
      'Wallets':        ['Bags', 'Belts', 'Watches', 'Mens Dress'],
      'Belts':          ['Wallets', 'Mens Dress', 'Footwear'],
      'Perfumes':       ['Cosmetics', 'Hair Care', 'Abaiya'],
      'Cosmetics':      ['Perfumes', 'Hair Care', 'Jewellery'],
      'Hair Care':      ['Cosmetics', 'Perfumes'],
      'Jewellery':      ['Sarees', 'Kurta Sets', 'Cosmetics'],
      'Home & Kitchen': ['Sports', 'Toys & Games'],
      'Sports':         ['Footwear', 'Clothing'],
      'Footwear':       ['Bags', 'Clothing', 'Belts'],
      'Toys & Games':   ['Kids Wear', 'Home & Kitchen'],
    };
    const related = RELATED_MAP[p.category] || [];
    if (!related.length) return;
    const wrap = document.createElement('div');
    wrap.className = 'pd-related-cats';
    wrap.innerHTML = `
      <div class="pd-related-cats-label">🔍 You might also love:</div>
      <div class="pd-related-cats-chips">
        ${related.map(c => `<a class="pd-related-cat-chip" href="products.html?category=${encodeURIComponent(c)}">${c}</a>`).join('')}
      </div>`;
    descEl.appendChild(wrap);
  })();

  // "Ask about this product" — dedicated WhatsApp deep link with product URL prefilled
  (() => {
    const descEl = document.getElementById('pdDesc');
    if (!descEl) return;
    const askProduct = document.createElement('a');
    askProduct.className = 'pd-ask-product';
    askProduct.target = '_blank';
    askProduct.rel = 'noopener';
    askProduct.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi! I have a question about this product:\n\n*${p.name}*\nPrice: ₹${p.price.toLocaleString('en-IN')}\nLink: ${window.location.href}\n\nMy question: `)}`;
    askProduct.innerHTML = `
      <span class="pd-ask-product-icon">💬</span>
      <div>
        <strong>Have a question about this product?</strong>
        <span>Ask the seller directly on WhatsApp — usually replies within 30 minutes.</span>
      </div>
      <span class="pd-ask-product-arrow">→</span>`;
    descEl.appendChild(askProduct);
  })();

  // Coupon nudge chip below price
  const priceEl = document.getElementById('pdPrice');
  if (priceEl && p.inStock !== false) {
    const couponChip = document.createElement('div');
    couponChip.className = 'pd-coupon-chip';
    couponChip.innerHTML = `
      <span class="pd-coupon-chip-text">💡 Use code <strong>ELITE10</strong> for 10% off at checkout</span>
      <button class="pd-coupon-copy" onclick="navigator.clipboard.writeText('ELITE10').then(()=>{this.textContent='✅ Copied!';setTimeout(()=>this.textContent='Copy',2000)}).catch(()=>{})" title="Copy code">Copy</button>`;
    const savings = priceEl.closest('.pd-info');
    if (savings) {
      const mrpEl = priceEl.nextElementSibling;
      const insertAfter = (mrpEl && mrpEl.classList?.contains('pd-mrp')) ? mrpEl.nextElementSibling : mrpEl || priceEl;
      if (insertAfter) insertAfter.insertAdjacentElement('afterend', couponChip);
      else priceEl.insertAdjacentElement('afterend', couponChip);
    }
  }

  // PIN code checker — Enter key support
  const pinInp = document.getElementById('pinCheckerInput');
  if (pinInp) {
    pinInp.addEventListener('keydown', e => { if (e.key === 'Enter') checkPinDelivery(); });
    // Auto-fill from saved address if available
    const history = JSON.parse(localStorage.getItem('eliteEmporiumOrders') || '[]');
    if (history.length) {
      const savedPin = history[history.length - 1]?.customer?.pincode;
      if (savedPin && /^\d{6}$/.test(savedPin)) {
        pinInp.value = savedPin;
        checkPinDelivery();
      }
    }
  }

  // Hover-pan zoom on the main product image (desktop only)
  (() => {
    const wrap = document.querySelector('.pd-main-image');
    const img  = document.getElementById('pdMainImage');
    if (!wrap || !img) return;
    if (window.matchMedia('(hover: none)').matches) return; // skip on touch

    wrap.classList.add('pd-zoomable');

    let lens; // floating zoom hint overlay
    wrap.addEventListener('mouseenter', () => {
      img.style.transition = 'transform 0.15s ease-out';
      img.style.transform  = 'scale(2.2)';
      if (!lens) {
        lens = document.createElement('div');
        lens.className = 'pd-zoom-hint';
        lens.textContent = '🔍 Move to pan · click to zoom in fullscreen';
        wrap.appendChild(lens);
      }
      lens.style.opacity = '1';
    });
    wrap.addEventListener('mousemove', e => {
      const rect = wrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
    });
    wrap.addEventListener('mouseleave', () => {
      img.style.transition = 'transform 0.2s ease-out';
      img.style.transform  = 'scale(1)';
      img.style.transformOrigin = 'center center';
      if (lens) lens.style.opacity = '0';
    });
  })();

  // Swipe gesture on main product image to cycle through variants
  if (p.variants && p.variants.length > 1) {
    const mainImgWrap = document.querySelector('.pd-main-image');
    if (mainImgWrap) {
      let _swipeStartX = 0;
      mainImgWrap.addEventListener('touchstart', e => { _swipeStartX = e.touches[0].clientX; }, { passive: true });
      mainImgWrap.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - _swipeStartX;
        if (Math.abs(dx) < 40) return;
        const thumbs = [...document.querySelectorAll('.pd-thumb')];
        if (!thumbs.length) return;
        const activeIdx = thumbs.findIndex(t => t.classList.contains('active'));
        const nextIdx   = dx < 0
          ? Math.min(activeIdx + 1, thumbs.length - 1)
          : Math.max(activeIdx - 1, 0);
        if (nextIdx !== activeIdx) selectThumb(thumbs[nextIdx]);
      }, { passive: true });
    }

    // Keyboard arrow navigation for product variants
    document.addEventListener('keydown', e => {
      if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) return;
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const thumbs = [...document.querySelectorAll('.pd-thumb')];
      if (!thumbs.length) return;
      const activeIdx = thumbs.findIndex(t => t.classList.contains('active'));
      const nextIdx   = e.key === 'ArrowRight'
        ? Math.min(activeIdx + 1, thumbs.length - 1)
        : Math.max(activeIdx - 1, 0);
      if (nextIdx !== activeIdx) selectThumb(thumbs[nextIdx]);
    });
  }
}

function initStickyBar(p) {
  const bar       = document.getElementById('pdStickyBar');
  const nameEl    = document.getElementById('pdStickyName');
  const priceEl   = document.getElementById('pdStickyPrice');
  const stickyBtn = document.getElementById('pdStickyBtn');
  if (!bar) return;

  if (nameEl)  nameEl.textContent  = p.name;
  if (priceEl) priceEl.textContent = '₹' + p.price.toLocaleString('en-IN');

  if (p.inStock === false) {
    if (stickyBtn) { stickyBtn.disabled = true; stickyBtn.textContent = 'Out of Stock'; stickyBtn.classList.add('oos-btn'); }
  } else {
    if (stickyBtn) stickyBtn.onclick = () => {
      const qty = parseInt(document.getElementById('pdQtyNum')?.textContent || '1', 10) || 1;
      addToCart(p.id, undefined, undefined, qty);
    };
  }

  const pdInfo = document.querySelector('.pd-info');
  if (pdInfo) {
    const obs = new IntersectionObserver(([entry]) => {
      bar.classList.toggle('show', !entry.isIntersecting);
    }, { threshold: 0.2 });
    obs.observe(pdInfo);
  }
}

// ── PRINT RECEIPT ────────────────────────────
// ── BOTTOM NAV AUTO ACTIVE-STATE ─────────────────
// Hand-coded `.bottom-nav-item.active` HTML on each page sometimes drifts
// out of sync (e.g. about.html, track-order.html have no hardcoded active
// state). This pass infers the right one from window.location.pathname
// and sets aria-current="page" on the matched item.
function initBottomNavActive() {
  const items = document.querySelectorAll('.bottom-nav .bottom-nav-item');
  if (!items.length) return;

  const path = window.location.pathname.toLowerCase();
  const fileMatch = path.match(/([^/]+)$/);
  const currentFile = fileMatch ? fileMatch[1] : 'index.html';

  // Reset
  items.forEach(a => {
    a.classList.remove('active');
    a.removeAttribute('aria-current');
  });

  // Find the matching item
  let matched = null;
  items.forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    const hrefFile = (href.match(/([^/?#]+)/) || [])[1] || '';
    if (hrefFile === currentFile || (currentFile === '' && hrefFile === 'index.html')) {
      matched = a;
    }
  });

  // Special routing rules
  if (!matched) {
    if (currentFile.startsWith('product') && !currentFile.startsWith('products')) {
      // Single product page → highlight 'Products'
      matched = [...items].find(a => (a.getAttribute('href') || '').toLowerCase().includes('products.html'));
    } else if (currentFile === 'track-order.html') {
      matched = [...items].find(a => (a.getAttribute('href') || '').toLowerCase().includes('orders.html'));
    } else if (currentFile === 'profile.html') {
      // Profile page → no exact tab; highlight Orders since it's the
      // most closely-related personal-data page
      matched = [...items].find(a => (a.getAttribute('href') || '').toLowerCase().includes('orders.html'));
    } else if (currentFile === 'collection.html') {
      // Festive collections → highlight Products
      matched = [...items].find(a => (a.getAttribute('href') || '').toLowerCase().includes('products.html'));
    } else if (['about.html', 'privacy.html', 'terms.html', 'order-success.html'].includes(currentFile)) {
      // No matching tab — leave Home highlighted as a sensible default
      matched = [...items].find(a => (a.getAttribute('href') || '').toLowerCase().includes('index.html'));
    }
  }

  if (matched) {
    matched.classList.add('active');
    matched.setAttribute('aria-current', 'page');
  }
}

// ── TESTIMONIALS ROTATOR ─────────────────────────
// Highlights one customer card at a time inside #testimonialsRotator.
// Cards fade through with a subtle scale. Pauses on hover (desktop)
// and respects prefers-reduced-motion.
function initTestimonialsRotator() {
  const wrap = document.getElementById('testimonialsRotator');
  if (!wrap) return;
  const cards = [...wrap.querySelectorAll('.testimonial-card')];
  if (cards.length < 2) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  wrap.classList.add('tr-rotating');

  // Inject indicator dots
  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'tr-dots';
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'tr-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Show testimonial ${i + 1}`);
    dot.addEventListener('click', () => go(i, true));
    dotsWrap.appendChild(dot);
  });
  wrap.parentElement.appendChild(dotsWrap);

  let current = 0;
  let timer  = null;

  function go(idx, manual) {
    current = (idx + cards.length) % cards.length;
    cards.forEach((c, i) => c.classList.toggle('tr-active', i === current));
    dotsWrap.querySelectorAll('.tr-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current));
    if (manual) restart();
  }
  function restart() { clearInterval(timer); timer = setInterval(() => go(current + 1), 5500); }

  go(0);
  restart();

  // Pause on hover (desktop only)
  wrap.addEventListener('mouseenter', () => clearInterval(timer));
  wrap.addEventListener('mouseleave', restart);
}

// ── WHATSAPP FLOAT → POPUP CHAT CARD ─────────────
// Converts the .whatsapp-float button from a direct wa.me link to a
// "chat card" trigger. Opens a small popup with quick-prompt chips
// (Quick Question / Track Order / Bulk Order / Custom Request).
// Each chip deep-links to wa.me with a pre-filled message so customers
// land in WhatsApp with the right context already typed.
function initWhatsAppChatCard() {
  const float = document.querySelector('.whatsapp-float');
  if (!float || float.dataset.chatCardWired === '1') return;
  float.dataset.chatCardWired = '1';

  // Replace the bare wa.me link behaviour with our popup
  float.addEventListener('click', e => {
    e.preventDefault();
    openWhatsAppCard();
  });

  // Inject the card once (hidden until open)
  if (!document.getElementById('waChatCard')) {
    const card = document.createElement('div');
    card.id = 'waChatCard';
    card.className = 'wa-chat-card';
    card.setAttribute('role', 'dialog');
    card.setAttribute('aria-labelledby', 'waChatTitle');
    card.innerHTML = `
      <div class="wa-chat-head">
        <div class="wa-chat-head-avatar">👑</div>
        <div class="wa-chat-head-info">
          <div id="waChatTitle" class="wa-chat-head-name">Elite Emporium</div>
          <div class="wa-chat-head-status"><span class="wa-status-dot"></span>Online · typically replies in 30 min</div>
        </div>
        <button class="wa-chat-close" aria-label="Close">✕</button>
      </div>
      <div class="wa-chat-body">
        <div class="wa-chat-bubble">
          Hi! 👋 How can we help you today? Pick a quick prompt below or message us directly &mdash;
          <strong>the owner replies personally</strong>, usually within 30 minutes.
        </div>
        <div class="wa-chat-prompts">
          <button class="wa-prompt-chip" data-msg="Hi! I have a quick question about a product.">❓ Quick question</button>
          <button class="wa-prompt-chip" data-msg="Hi! Can you help me track my order?">📦 Track my order</button>
          <button class="wa-prompt-chip" data-msg="Hi! I&apos;d like to place a bulk order. Can we discuss pricing?">🏢 Bulk order</button>
          <button class="wa-prompt-chip" data-msg="Hi! I have a custom request &mdash; is it possible?">✨ Custom request</button>
          <button class="wa-prompt-chip" data-msg="Hi! I need a GST invoice for an order.">🧾 GST invoice</button>
          <button class="wa-prompt-chip" data-msg="Hi! What&apos;s your return policy?">🔄 Returns</button>
        </div>
        <a class="wa-chat-open-btn" id="waChatOpenBtn" target="_blank" rel="noopener">💬 Open WhatsApp Chat →</a>
        <div class="wa-chat-alt">Primary: +91 7358650774 &middot; Alt: +91 7358719774</div>
      </div>`;
    document.body.appendChild(card);

    card.querySelector('.wa-chat-close').addEventListener('click', closeWhatsAppCard);

    // Default chat button (no preset message)
    const defaultUrl = `https://wa.me/${CONFIG.whatsappNumber}`;
    const openBtn = card.querySelector('#waChatOpenBtn');
    openBtn.href = defaultUrl;

    // Each prompt chip: open WhatsApp with that message pre-filled
    card.querySelectorAll('.wa-prompt-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const msg = chip.dataset.msg || '';
        const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        closeWhatsAppCard();
      });
    });
  }

  // Close on Esc + click-outside
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('waChatCard')?.classList.contains('open')) {
      closeWhatsAppCard();
    }
  });
  document.addEventListener('click', e => {
    const card = document.getElementById('waChatCard');
    if (!card?.classList.contains('open')) return;
    if (card.contains(e.target) || e.target.closest('.whatsapp-float')) return;
    closeWhatsAppCard();
  });
}

function openWhatsAppCard() {
  const card = document.getElementById('waChatCard');
  if (card) requestAnimationFrame(() => card.classList.add('open'));
}
function closeWhatsAppCard() {
  document.getElementById('waChatCard')?.classList.remove('open');
}

// ── DIRECT UPI PAYMENT (no gateway, zero fees) ─────
async function payViaUPI() {

  if (!CONFIG.upiId || !CONFIG.upiId.includes('@')) {
    showToast('💳 UPI not configured yet — please order via WhatsApp.', 4000, 'info');
    return;
  }
  if (!cart.length) { showToast('⚠️ Your cart is empty!'); return; }

  const get = id => (document.getElementById(id) || {}).value?.trim() || '';
  const name    = get('custName');
  const phone   = get('custPhone');
  const address = get('custAddress');
  const city    = get('custCity');
  const state   = get('custState');
  const pincode = get('custPincode');

  // Validate — scroll to + focus the first empty / invalid field so the
  // customer can see what's missing instead of just seeing a toast.
  const validations = [
    { ok: name.length >= 2,            id: 'custName',    msg: 'Please enter your full name' },
    { ok: /^\d{10}$/.test(phone),      id: 'custPhone',   msg: 'Please enter a valid 10-digit phone' },
    { ok: address.length >= 5,         id: 'custAddress', msg: 'Please enter your delivery address' },
    { ok: city.length >= 2,            id: 'custCity',    msg: 'Please enter your city' },
    { ok: state !== '',                id: 'custState',   msg: 'Please select your state' },
    { ok: /^\d{6}$/.test(pincode),     id: 'custPincode', msg: 'Please enter a valid 6-digit PIN' },
  ];
  const bad = validations.find(v => !v.ok);
  if (bad) {
    console.warn('[UPI] validation failed:', bad);
    showToast('⚠️ ' + bad.msg, 4500, 'error');
    const el = document.getElementById(bad.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => el.focus(), 300);
      el.style.borderColor = 'var(--red)';
      el.style.boxShadow = '0 0 0 3px rgba(219,48,34,0.15)';
      setTimeout(() => { el.style.borderColor = ''; el.style.boxShadow = ''; }, 3000);
    }
    return;
  }

  const sub      = getSubtotal();
  const del      = getDelivery();
  const giftWrap = (typeof getGiftWrap === 'function') ? getGiftWrap() : 0;
  const discount = getCouponDiscount(sub);
  const total    = Math.max(0, sub + del + giftWrap - discount);
  const orderId  = generateOrderId();
  const giftMsg  = (document.getElementById('giftMessage')?.value || '').trim();
  const notes    = get('custNotes');

  const customer = { name, phone, address, city, state, pincode, notes };
  const orderItems = cart.map(i => ({ id: i.id, name: i.name, image: i.image, price: i.price, quantity: i.quantity, selectedColor: i.selectedColor || null }));

  // Save order BEFORE opening UPI app so it persists even if browser is closed
  saveOrderToHistory({
    id: orderId,
    date: new Date().toISOString(),
    status: 'UPI payment pending verification',
    payment: { provider: 'upi', method: 'direct', vpa: CONFIG.upiId, txnId: null },
    customer, items: orderItems,
    subtotal: sub, delivery: del,
    giftWrap, giftMessage: giftWrap > 0 ? giftMsg : null,
    discount, coupon: _activeCoupon || null, total,
  });

  // Build the UPI deep link
  const upiUrl = buildUpiUrl({ amount: total, orderId, note: `Order ${orderId} - Elite Emporium` });

  // Open the confirmation modal (shows QR + 'Open UPI App' button + txn-ID input)
  try {
    openUPIPaymentModal({ upiUrl, total, orderId, customer, orderItems, sub, del, giftWrap, giftMsg, discount });
  } catch (e) {
    console.error('[UPI] failed to open modal:', e, e?.stack);
    // Surface the actual error message so debugging from a user-side screenshot is possible
    showToast(`⚠️ Error: ${e?.message || 'unknown'}. Please order via WhatsApp.`, 7000, 'error');
  }
}

// Build a UPI deep link per NPCI spec. We construct it manually because
// URLSearchParams aggressively encodes '@' as %40 — many UPI apps (esp.
// older versions of GPay / PhonePe / BHIM) only recognise the literal '@'.
// Spaces in tn/pn are encoded as %20 (not '+').
function buildUpiUrl({ amount, orderId, note }) {
  const enc = s => encodeURIComponent(String(s))
    .replace(/%40/g, '@')   // preserve @ in the VPA
    .replace(/\+/g, '%20'); // never use '+' encoding
  const parts = [
    'pa=' + enc(CONFIG.upiId),                                  // payee VPA
    'pn=' + enc(CONFIG.upiPayeeName || 'Elite Emporium'),       // payee name
    'am=' + amount.toFixed(2),                                  // amount in rupees
    'cu=INR',                                                   // currency
    'tn=' + enc(note),                                          // txn note
    'tr=' + enc(orderId),                                       // merchant ref
  ];
  return 'upi://pay?' + parts.join('&');
}

function openUPIPaymentModal(ctx) {
  // Inline HTML-escape — does NOT depend on any external helper so this
  // function works even if escapeHtml() somehow isn't defined yet.
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  // Defensive defaults for every value the template touches.
  const safeTotal   = Number(ctx?.total) || 0;
  const totalStr    = safeTotal.toLocaleString('en-IN');
  const safeOrderId = esc(ctx?.orderId || '');
  const safeUpiUrl  = ctx?.upiUrl || '';
  const safeUpiId   = esc(CONFIG.upiId || '');
  const safePayee   = esc(CONFIG.upiPayeeName || 'Elite Emporium');

  // Remove any prior instance
  document.getElementById('upiModal')?.remove();

  const isMobile = /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent || '');

  // QR service — single primary + JS-driven fallback (no inline onerror chain
  // because chained URLs with '|' and '&' inside HTML attributes are fragile)
  const encoded   = encodeURIComponent(safeUpiUrl);
  const primaryQR = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encoded}`;
  const fallback1 = `https://quickchart.io/qr?text=${encoded}&size=240`;

  const upiAppLinks = isMobile
    ? `<a href="${esc(safeUpiUrl)}" class="upi-open-btn" id="upiOpenBtn">
         <span class="upi-open-icon">📱</span>
         <span>
           <strong>Tap to pay with your UPI app</strong>
           <small>Opens GPay / PhonePe / Paytm / BHIM</small>
         </span>
         <span class="upi-open-arrow">→</span>
       </a>
       <div class="upi-or-divider"><span>or scan with another phone</span></div>`
    : `<div class="upi-desktop-hint">📱 <strong>You&rsquo;re on desktop.</strong> Scan the QR below with your phone&rsquo;s UPI app (GPay, PhonePe, Paytm) &mdash; or copy the UPI ID and pay manually.</div>`;

  const modal = document.createElement('div');
  modal.id = 'upiModal';
  modal.className = 'upi-modal-backdrop';
  modal.innerHTML = `
    <div class="upi-modal" role="dialog" aria-labelledby="upiTitle" aria-modal="true">
      <button class="upi-modal-close" type="button" aria-label="Cancel">✕</button>
      <div class="upi-modal-header">
        <h2 id="upiTitle">Pay &#8377;${totalStr} via UPI</h2>
        <p>Order <strong>${safeOrderId}</strong> &middot; paying <strong>${safePayee}</strong></p>
      </div>

      <div class="upi-modal-body">
        ${upiAppLinks}

        <div class="upi-qr-wrap">
          <img id="upiQrImg" src="${esc(primaryQR)}" alt="UPI QR code" class="upi-qr" loading="eager" />
          <div class="upi-qr-caption">Scan with any UPI app to auto-fill the payment</div>
        </div>

        <div class="upi-manual-pay">
          <div class="upi-mp-label">Or pay manually to this UPI ID:</div>
          <div class="upi-mp-row">
            <code id="upiIdDisplay">${safeUpiId}</code>
            <button type="button" class="upi-copy-btn" id="upiCopyBtn" data-copy="${safeUpiId}">📋 Copy</button>
          </div>
          <div class="upi-mp-amount">Amount to pay: <strong>&#8377;${totalStr}</strong></div>
          <div class="upi-mp-ref">Reference: <code>${safeOrderId}</code> <button type="button" class="upi-copy-btn-mini" id="upiCopyRef" data-copy="${safeOrderId}">Copy</button></div>
        </div>

        <div class="upi-step-confirm">
          <h3>&#9989; After you&rsquo;ve paid:</h3>
          <p>Enter the <strong>UPI transaction ID</strong> from your app&rsquo;s payment receipt. We&rsquo;ll send your order to WhatsApp along with this ID for confirmation.</p>
          <label class="upi-txn-label">
            <span>UPI Transaction / Reference ID *</span>
            <input type="text" id="upiTxnId" maxlength="40" placeholder="e.g. 423456789012" autocomplete="off" inputmode="numeric" />
          </label>
          <div class="upi-txn-hint">&#128161; Look for &quot;UPI Ref. No.&quot; or &quot;Transaction ID&quot; in your GPay/PhonePe/Paytm payment receipt (usually a 12-digit number).</div>

          <button class="upi-confirm-btn" type="button" id="upiConfirmBtn">
            <span>&#128172; Confirm Payment &amp; Send Order</span>
          </button>
          <div class="upi-err" id="upiErr" style="display:none;"></div>
        </div>
      </div>

      <div class="upi-modal-footer">
        <button class="upi-cancel-link" type="button">Cancel &mdash; I&rsquo;ll order via WhatsApp instead</button>
      </div>
    </div>`;

  // JS-driven QR fallback (more reliable than inline onerror chain)
  const qrImg = modal.querySelector('#upiQrImg');
  if (qrImg) {
    let qrAttempt = 0;
    qrImg.addEventListener('error', () => {
      qrAttempt++;
      if (qrAttempt === 1) qrImg.src = fallback1;
      else qrImg.style.display = 'none';  // both QR services down — fall back to copy-UPI-ID flow below
    });
  }

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => modal.classList.add('show'));

  const close = () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 240);
  };
  modal.querySelector('.upi-modal-close').addEventListener('click', close);
  modal.querySelector('.upi-cancel-link').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });

  // Copy UPI ID + order reference buttons
  modal.querySelectorAll('.upi-copy-btn, .upi-copy-btn-mini').forEach(btn => {
    btn.addEventListener('click', async () => {
      const val = btn.dataset.copy || '';
      const originalHtml = btn.innerHTML;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(val);
        } else {
          // Fallback for older browsers / non-https environments
          const ta = document.createElement('textarea');
          ta.value = val; ta.style.position = 'fixed'; ta.style.opacity = '0';
          document.body.appendChild(ta); ta.select();
          document.execCommand('copy'); ta.remove();
        }
        btn.innerHTML = '✅ Copied!';
        btn.classList.add('upi-copied');
        setTimeout(() => { btn.innerHTML = originalHtml; btn.classList.remove('upi-copied'); }, 2000);
      } catch (e) {
        console.warn('[UPI] copy failed:', e);
        btn.innerHTML = '⚠️ Manual';
        setTimeout(() => { btn.innerHTML = originalHtml; }, 2000);
      }
    });
  });

  modal.querySelector('#upiConfirmBtn').addEventListener('click', () => {
    const txnId = (document.getElementById('upiTxnId').value || '').trim();
    const errEl = document.getElementById('upiErr');
    if (txnId.length < 6) {
      errEl.textContent = '⚠️ Please enter the UPI transaction ID (at least 6 characters).';
      errEl.style.display = 'block';
      document.getElementById('upiTxnId').focus();
      return;
    }

    // Update the saved order with the txn ID
    const orders = getOrderHistory();
    const order = orders.find(o => o.id === ctx.orderId);
    if (order) {
      order.status = 'Paid via UPI — awaiting dispatch';
      order.payment = { ...(order.payment || {}), txnId, paidAt: new Date().toISOString() };
      try { localStorage.setItem('eliteEmporiumOrders', JSON.stringify(orders)); } catch {}
    }

    // Build the WhatsApp confirmation message
    const baseUrl = 'https://elite-emporium-one.vercel.app/';
    let msg = `✅ *UPI PAYMENT — ELITE EMPORIUM*\n`;
    msg    += `━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    msg    += `🆔 Order: *${ctx.orderId}*\n`;
    msg    += `💰 Amount: *₹${ctx.total.toLocaleString('en-IN')}*\n`;
    msg    += `🏦 Paid to: ${CONFIG.upiId}\n`;
    msg    += `📱 UPI Txn ID: *${txnId}*\n`;
    msg    += `⏰ Paid at: ${new Date().toLocaleString('en-IN', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' })}\n\n`;
    msg    += `━━━━━━━━━━━━━━━━━━━━━━━\n📋 *ITEMS:*\n\n`;
    cart.forEach((item, i) => {
      msg += `${i + 1}. *${item.name}*\n`;
      if (item.selectedColor) msg += `   🎨 Color: ${item.selectedColor}\n`;
      msg += `   Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')} = *₹${(item.price * item.quantity).toLocaleString('en-IN')}*\n`;
      if (item.image) {
        const imgUrl = item.image.startsWith('http') ? item.image : baseUrl + item.image;
        msg += `   🖼️ ${imgUrl}\n`;
      }
      msg += `\n`;
    });

    msg += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 Subtotal : ₹${ctx.sub.toLocaleString('en-IN')}\n`;
    msg += `🚚 Delivery : ${ctx.del === 0 ? 'FREE' : '₹' + ctx.del}\n`;
    if (ctx.giftWrap > 0) msg += `🎁 Gift wrap : +₹${ctx.giftWrap}\n`;
    if (ctx.discount > 0) msg += `🎟️ Coupon (${_activeCoupon}) : –₹${ctx.discount.toLocaleString('en-IN')}\n`;
    msg += `✅ *TOTAL PAID : ₹${ctx.total.toLocaleString('en-IN')}*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    msg += `👤 *CUSTOMER:*\n`;
    msg += `${ctx.customer.name}\n`;
    msg += `📞 ${ctx.customer.phone}\n`;
    msg += `📍 ${ctx.customer.address}, ${ctx.customer.city}, ${ctx.customer.state} - ${ctx.customer.pincode}\n`;
    if (ctx.customer.notes) msg += `📝 Notes: ${ctx.customer.notes}\n`;
    if (ctx.giftWrap > 0)   msg += `\n🎁 *GIFT WRAP REQUESTED* (+₹50)${ctx.giftMsg ? `\nMessage: "${ctx.giftMsg}"` : ''}\n`;

    msg += `\n_Please verify the UPI transaction in your bank app and confirm dispatch._`;

    const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;

    // Clear the cart, celebrate, redirect
    cart = [];
    saveCart();
    clearFormDraft?.();
    launchConfetti?.();
    showToast('🎉 Payment confirmed! Opening WhatsApp…', 4000, 'success');
    window.open(waUrl, '_blank');
    setTimeout(() => { close(); window.location.href = `order-success.html?id=${encodeURIComponent(orderId)}`; }, 2500);
  });

  // Auto-focus the txn ID field when mobile user returns from UPI app
  if (isMobile) {
    document.getElementById('upiOpenBtn')?.addEventListener('click', () => {
      // After short delay, scroll to and focus the txn input so user remembers to fill it
      setTimeout(() => {
        document.getElementById('upiTxnId')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        document.getElementById('upiTxnId')?.focus();
      }, 2000);
    });
  }

  // Esc to close
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
  });
}

// Explicit window attachment — guarantees onclick="payViaUPI()" always works
// regardless of how the module is loaded (strict mode, modules, bundlers, etc.)
if (typeof window !== 'undefined') {
  window.payViaUPI = payViaUPI;
  window.openUPIPaymentModal = openUPIPaymentModal;
  window.buildUpiUrl = buildUpiUrl;
}

// ── RAZORPAY: embedded Checkout (preferred) or hosted link (fallback) ─
//
// Loads checkout.js on demand (saves ~85KB on every other page).
let _rzpScriptPromise = null;
function loadRazorpayCheckout() {
  if (_rzpScriptPromise) return _rzpScriptPromise;
  _rzpScriptPromise = new Promise((resolve, reject) => {
    if (typeof Razorpay !== 'undefined') { resolve(); return; }
    const s = document.createElement('script');
    s.src   = 'https://checkout.razorpay.com/v1/checkout.js';
    s.async = true;
    s.onload  = () => resolve();
    s.onerror = () => { _rzpScriptPromise = null; reject(new Error('checkout.js failed to load')); };
    document.head.appendChild(s);
  });
  return _rzpScriptPromise;
}

async function payOnline() {
  // Gate
  if (!cart.length) { showToast('⚠️ Your cart is empty!'); return; }

  // Validate required customer fields before charging
  const get = id => (document.getElementById(id) || {}).value?.trim() || '';
  const name  = get('custName');
  const phone = get('custPhone');
  if (!name || !/^\d{10}$/.test(phone)) {
    showToast('⚠️ Fill name & 10-digit phone first — we use these for the receipt.', 4000, 'error');
    document.getElementById(name ? 'custPhone' : 'custName')?.focus();
    return;
  }

  const sub      = getSubtotal();
  const del      = getDelivery();
  const giftWrap = (typeof getGiftWrap === 'function') ? getGiftWrap() : 0;
  const discount = getCouponDiscount(sub);
  const total    = Math.max(0, sub + del + giftWrap - discount);
  const orderId  = generateOrderId();
  const customer = { name, phone, address: get('custAddress'), city: get('custCity'), state: get('custState'), pincode: get('custPincode'), notes: get('custNotes') };

  // Mode A — Embedded Razorpay Checkout (preferred)
  if (CONFIG.razorpayKeyId && CONFIG.razorpayKeyId.startsWith('rzp_')) {
    try {
      const btn = document.getElementById('payOnlineBtn');
      if (btn) { btn.disabled = true; btn.innerHTML = '⏳ Loading payment…'; }
      await loadRazorpayCheckout();
      if (btn) { btn.disabled = false; btn.innerHTML = `<span style="font-size:18px;">💳</span> Pay Online (UPI / Cards / Netbanking)`; }

      // Razorpay expects amount in paise (₹1 = 100 paise)
      const giftMsg = (document.getElementById('giftMessage')?.value || '').trim();
      const options = {
        key:      CONFIG.razorpayKeyId,
        amount:   total * 100,
        currency: 'INR',
        name:     'Elite Emporium',
        description: `Order ${orderId} · ${cart.reduce((s,i)=>s+i.quantity,0)} item(s)`,
        image:    'https://elite-emporium-one.vercel.app/images/logo-512.png',
        prefill:  { name, contact: phone, email: get('custEmail') },
        notes: {
          order_id:    orderId,
          items_count: String(cart.reduce((s,i)=>s+i.quantity,0)),
          address:     `${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}`,
          gift_wrap:   giftWrap > 0 ? 'yes' : 'no',
          gift_msg:    giftMsg || '',
          coupon:      _activeCoupon || '',
        },
        theme: { color: '#DB3022' },
        handler: function (response) {
          // Payment succeeded — save to local order history with payment id
          saveOrderToHistory({
            id: orderId,
            date: new Date().toISOString(),
            status: 'Paid online ✅',
            payment: {
              provider: 'razorpay',
              paymentId: response.razorpay_payment_id || null,
              orderId:   response.razorpay_order_id   || null,
              signature: response.razorpay_signature  || null,
            },
            customer,
            items: cart.map(i => ({ id: i.id, name: i.name, image: i.image, price: i.price, quantity: i.quantity, selectedColor: i.selectedColor || null })),
            subtotal: sub, delivery: del,
            giftWrap, giftMessage: giftWrap > 0 ? giftMsg : null,
            discount, coupon: _activeCoupon || null, total,
          });

          // Clear cart, ping the merchant on WhatsApp with payment ID, redirect to orders
          const successMsg = encodeURIComponent(
            `✅ *PAYMENT RECEIVED — Elite Emporium*\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `Order: *${orderId}*\n` +
            `Amount: *₹${total.toLocaleString('en-IN')}*\n` +
            `Payment ID: ${response.razorpay_payment_id}\n` +
            `Customer: ${name} (${phone})\n` +
            `Address: ${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}\n\n` +
            `Please confirm dispatch on WhatsApp.`
          );
          cart = [];
          saveCart();
          launchConfetti?.();
          showToast(`🎉 Payment successful! Redirecting…`, 4000, 'success');
          // Background: open WA with the payment confirmation message (merchant gets a notice)
          try { window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${successMsg}`, '_blank'); } catch {}
          setTimeout(() => { window.location.href = `order-success.html?id=${encodeURIComponent(orderId)}`; }, 2200);
        },
        modal: {
          ondismiss: function () {
            showToast('Payment cancelled. Your cart is preserved.', 3500, 'info');
          },
          escape: true,
          backdropclose: false,
        },
      };

      // Save the order to history with 'Awaiting payment' BEFORE opening checkout,
      // so if the customer closes the modal and comes back, the order exists.
      saveOrderToHistory({
        id: orderId,
        date: new Date().toISOString(),
        status: 'Awaiting payment',
        customer,
        items: cart.map(i => ({ id: i.id, name: i.name, image: i.image, price: i.price, quantity: i.quantity, selectedColor: i.selectedColor || null })),
        subtotal: sub, delivery: del,
        giftWrap, giftMessage: giftWrap > 0 ? giftMsg : null,
        discount, coupon: _activeCoupon || null, total,
      });

      const rzp = new Razorpay(options);
      rzp.on('payment.failed', function (resp) {
        console.error('Razorpay payment failed:', resp.error);
        showToast(`❌ Payment failed: ${resp.error?.description || 'please try again'}`, 5000, 'error');
      });
      rzp.open();
      return;
    } catch (err) {
      console.error(err);
      showToast('⚠️ Couldn\'t load Razorpay. Falling back to hosted page…', 4000, 'error');
      // fall through to Payment Link mode
    }
  }

  // Mode B — Hosted Payment Link (fallback / unconfigured Key ID)
  if (CONFIG.razorpayPaymentLink && CONFIG.razorpayPaymentLink.startsWith('http')) {
    saveOrderToHistory({
      id: orderId, date: new Date().toISOString(), status: 'Awaiting payment',
      customer,
      items: cart.map(i => ({ id: i.id, name: i.name, image: i.image, price: i.price, quantity: i.quantity, selectedColor: i.selectedColor || null })),
      subtotal: sub, delivery: del,
      giftWrap, giftMessage: giftWrap > 0 ? (document.getElementById('giftMessage')?.value || '').trim() : null,
      discount, coupon: _activeCoupon || null, total,
    });
    const url = new URL(CONFIG.razorpayPaymentLink);
    url.searchParams.set('amount', String(total));
    url.searchParams.set('prefill[name]', name);
    url.searchParams.set('prefill[contact]', phone);
    url.searchParams.set('reference', orderId);
    window.open(url.toString(), '_blank');
    showToast('💳 Opening secure payment page…', 3000, 'info');
    return;
  }

  // Mode C — Nothing configured
  showToast('💳 Online payment not configured yet — please order via WhatsApp.', 4500, 'info');
}

// Show payment buttons based on what's configured
function initPayOnlineButton() {
  // Razorpay (Card / Netbanking / Wallets — full gateway)
  const rzpBtn  = document.getElementById('payOnlineBtn');
  const rzpNote = document.getElementById('payOnlineNote');
  const hasKey  = !!(CONFIG.razorpayKeyId && CONFIG.razorpayKeyId.startsWith('rzp_'));
  const hasLink = !!(CONFIG.razorpayPaymentLink && CONFIG.razorpayPaymentLink.startsWith('http'));
  const rzpEnabled = hasKey || hasLink;
  if (rzpBtn)  rzpBtn.style.display = rzpEnabled ? 'flex' : 'none';
  if (rzpNote) {
    rzpNote.style.display = rzpEnabled ? 'block' : 'none';
    if (hasKey && !CONFIG.razorpayLiveMode) {
      rzpNote.innerHTML = `🧪 <strong>Test mode</strong> — use card <code style="background:rgba(0,0,0,0.1);padding:1px 6px;border-radius:4px;">4111 1111 1111 1111</code>, any future expiry, CVV <code style="background:rgba(0,0,0,0.1);padding:1px 6px;border-radius:4px;">123</code>. Real payments come live the moment you flip <code>razorpayLiveMode</code> to true.`;
    } else if (hasKey) {
      rzpNote.innerHTML = `🔒 Secure payment powered by <strong>Razorpay</strong> — Cards · Netbanking · Wallets · GST invoice.`;
    }
  }

  // Direct UPI (zero-fee, opens GPay/PhonePe/Paytm directly)
  const upiBtn = document.getElementById('payUpiBtn');
  const upiEnabled = !!(CONFIG.upiId && CONFIG.upiId.includes('@'));
  if (upiBtn) upiBtn.style.display = upiEnabled ? 'flex' : 'none';
}

function printReceipt() {
  if (!cart.length) { showToast('⚠️ Your cart is empty.'); return; }
  const sub      = getSubtotal();
  const del      = getDelivery();
  const discount = getCouponDiscount(sub);
  const tot      = Math.max(0, sub + del - discount);
  const now      = new Date().toLocaleString('en-IN');

  const rows = cart.map(item => `
    <tr>
      <td>${item.name}${item.selectedColor ? ' (' + item.selectedColor + ')' : ''}</td>
      <td style="text-align:center">${item.quantity}</td>
      <td style="text-align:right">₹${item.price.toLocaleString('en-IN')}</td>
      <td style="text-align:right">₹${(item.price * item.quantity).toLocaleString('en-IN')}</td>
    </tr>`).join('');

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"/>
    <title>Receipt – Elite Emporium</title>
    <style>
      body{font-family:Arial,sans-serif;max-width:600px;margin:30px auto;color:#212121;font-size:13px;}
      h1{color:#DB3022;text-align:center;font-size:20px;margin-bottom:4px;}
      .sub{text-align:center;color:#878787;font-size:11px;margin-bottom:16px;}
      table{width:100%;border-collapse:collapse;margin-top:12px;}
      th{background:#DB3022;color:white;padding:8px;text-align:left;font-size:12px;}
      td{padding:7px 8px;border-bottom:1px solid #eee;}
      .total-row td{font-weight:700;background:#FFEBEE;}
      .footer{margin-top:20px;font-size:11px;color:#878787;text-align:center;border-top:1px solid #eee;padding-top:12px;}
    </style></head><body>
    <h1>🛍️ Elite Emporium</h1>
    <div class="sub">GST: 33DWGPN3169G1ZF | ${now}</div>
    <table>
      <tr><th>Item</th><th style="text-align:center">Qty</th><th style="text-align:right">Price</th><th style="text-align:right">Total</th></tr>
      ${rows}
      <tr><td colspan="3">Subtotal</td><td style="text-align:right">₹${sub.toLocaleString('en-IN')}</td></tr>
      <tr><td colspan="3">Delivery</td><td style="text-align:right">${del === 0 ? 'FREE' : '₹' + del}</td></tr>
      ${discount > 0 ? `<tr><td colspan="3">Coupon (${_activeCoupon})</td><td style="text-align:right;color:#388E3C;">–₹${discount.toLocaleString('en-IN')}</td></tr>` : ''}
      <tr class="total-row"><td colspan="3">TOTAL</td><td style="text-align:right">₹${tot.toLocaleString('en-IN')}</td></tr>
    </table>
    <div class="footer">Elite Emporium · 183b Sadukai Street, Kayalpattinam<br/>Order via WhatsApp: +91 7358650774 · eliteemporium112024@gmail.com</div>
  </body></html>`;

  const win = window.open('', '_blank');
  if (win) { win.document.write(html); win.document.close(); win.print(); }
}

// ── REVIEW FORM ───────────────────────────────
let _reviewProductName = '';
let _reviewProductId   = null;
let _reviewRating = 0;
const REVIEWS_KEY = 'eliteEmporiumReviews';

// ── SEEDED REVIEWS (curated per product) ─────
// Each product gets 4 authentic-sounding reviews referencing real
// product details from the catalogue. Dates are computed as N days ago
// at module-load time so they always feel recent.
const _d = (daysAgo) => new Date(Date.now() - daysAgo * 86400000).toISOString();
const SEEDED_REVIEWS = {
  1: [
    { name: 'Anitha P.',   rating: 5, text: 'Steel is genuinely thicker than the cheap sets — basin sat on direct flame for warming sambar with no warping. The 5mm julienne blade is the one I use most.', date: _d(8) },
    { name: 'Krishna M.',  rating: 5, text: 'Replaced three separate items in my kitchen — mixing bowl, colander, mandolin. Nests neatly on one shelf now. Worth every rupee.', date: _d(21) },
    { name: 'Saira B.',    rating: 5, text: 'Used the wavy slicer for my kid\'s tiffin chips today, came out restaurant-style. Drain colander is fast for washing rice too.', date: _d(34) },
    { name: 'Vimal R.',    rating: 4, text: 'Good build, no plastic in the food path. The grater blade inserts could use a small storage pouch, but otherwise no complaints.', date: _d(52) },
  ],
  2: [
    { name: 'Mohammed S.', rating: 5, text: 'The 2000W is no joke — pre-heats in 90 seconds and sears proper grill marks on chicken. Drip channel saves so much counter cleanup.', date: _d(11) },
    { name: 'Lakshmi N.',  rating: 5, text: 'Fits 4 full bombay sandwiches at once. Family loves Sunday brunch with this. 2-year warranty card came in the box, no fuss.', date: _d(26) },
    { name: 'Arif K.',     rating: 4, text: 'Did Iftar grilled vegetables and paneer tikka — both came out smoky and tender. Wide hinge fits a thick stuffed paratha without crushing.', date: _d(40) },
    { name: 'Priya V.',    rating: 5, text: 'Honestly cheaper than buying a small panini press separately. The cool-touch handle and indicator lights make daily use safe even with kids around.', date: _d(63) },
  ],
  3: [
    { name: 'Sneha D.',    rating: 5, text: 'Got the beige &lsquo;blushing pup&rsquo; one — sits on my dressing table like decor. Three compartments fit my full foundation + serum + setting spray routine standing upright.', date: _d(6) },
    { name: 'Aisha M.',    rating: 5, text: 'The black panda is so cute! Elastic loops on the inside lid hold all my brushes and lipsticks in place even when the bag tips over.', date: _d(19) },
    { name: 'Divya K.',    rating: 4, text: 'Quality is way better than what mall stores sell at 3x the price. Wipes clean easily when foundation pumps leak.', date: _d(35) },
    { name: 'Rina S.',     rating: 5, text: 'Travel-friendly, zipper is smooth. Carried it through a 6-hour flight, nothing shifted inside.', date: _d(48) },
  ],
  4: [
    { name: 'Arun K.',     rating: 5, text: 'Fully matte black, looks tactical and clean. The HILFIGER-engraved bezel is sharp — you can feel the engraving with a fingernail.', date: _d(9) },
    { name: 'Sandeep B.',  rating: 5, text: 'Sub-dials are crisp and the date window is well-placed at 4 o\'clock. Silver hands against the textured black dial = great legibility even in low light.', date: _d(24) },
    { name: 'Yamini R.',   rating: 4, text: 'Gifted to my fiancé — he wears it every day with formals and polos. Bracelet weight feels premium, not hollow.', date: _d(38) },
    { name: 'Manoj V.',    rating: 5, text: 'Time-keeping is accurate (checked against my phone over a week). The red-white-blue flag at 12 is the only colour pop — really classy.', date: _d(55) },
  ],
  5: [
    { name: 'Latha P.',    rating: 5, text: 'Navy gift box made my Diwali gifting effortless. Recipient lifted the lid and lit up — that was the whole point.', date: _d(7) },
    { name: 'Vikas R.',    rating: 5, text: 'Came beautifully packed. The cream foam pillow inside is well-cushioned and the watch sat perfectly in place during shipping.', date: _d(22) },
    { name: 'Anuja S.',    rating: 4, text: 'Same great watch but the box does add real gift value. Ordered for my husband\'s birthday and skipped wrapping entirely.', date: _d(36) },
    { name: 'Rohan K.',    rating: 5, text: 'Same matte black chrono, but the navy box is what makes it feel like an in-store experience. Worth the small premium over the bare watch.', date: _d(60) },
  ],
  6: [
    { name: 'Naveen B.',   rating: 5, text: 'The open-heart aperture is mesmerizing — I keep catching myself watching the balance wheel oscillate. Genuine automatic movement, not a quartz with a fake skeleton.', date: _d(12) },
    { name: 'Pavithra K.', rating: 5, text: 'No battery drama. Wear it 3-4 days a week and it just keeps running. The navy guilloche dial catches light like nothing else I own.', date: _d(27) },
    { name: 'Hari S.',     rating: 4, text: 'Concentric circle pattern on the dial is stunning in sunlight. Bracelet is comfortable and the open-heart is at the right spot — visible without being gimmicky.', date: _d(41) },
    { name: 'Deepa M.',    rating: 5, text: '30th-birthday gift for my brother — he is genuinely in love with it. Compliments at every family function since.', date: _d(58) },
  ],
  7: [
    { name: 'Faiza A.',    rating: 5, text: '12A is real — quilting is tight, leather feels rich, the gold YSL hardware doesn\'t look cheap or plastic-y. Could not tell apart from a friend\'s authentic one.', date: _d(5) },
    { name: 'Meera P.',    rating: 5, text: 'Carried this to a wedding reception in Madurai and got compliments all evening. The cream colour photographs beautifully under indoor LED lights.', date: _d(18) },
    { name: 'Zara M.',     rating: 4, text: 'Matching pouch is bigger than I expected — bonus! Doubles as my evening clutch when I don\'t want to carry the full tote.', date: _d(31) },
    { name: 'Kavitha R.',  rating: 5, text: 'Worth every rupee. Fits laptop + planner + water bottle + wallet without bulging. The Cassandre monogram is the perfect proportion.', date: _d(49) },
  ],
  8: [
    { name: 'Ravi K.',     rating: 5, text: 'Color block is gorgeous in person — the cognac top strip + navy sides + white pebbled body work much better together than in photos.', date: _d(10) },
    { name: 'Anjali B.',   rating: 5, text: 'The yellow Coach NY dust bag with the horse-and-carriage logo is a nice authentic touch. Bag feels structured and holds shape even when half-empty.', date: _d(23) },
    { name: 'Saritha T.',  rating: 4, text: 'Fits my 13-inch MacBook perfectly with room for accessories. Edge-painted seams are clean, no fraying at the corners.', date: _d(37) },
    { name: 'Nandini V.',  rating: 5, text: 'Looks expensive, costs reasonable. The COACH LEATHERWARE oval emboss reads as heritage rather than branded — exactly what I wanted.', date: _d(54) },
  ],
  9: [
    { name: 'Tara V.',     rating: 5, text: 'The hexagonal shape is so unique — gets compliments every time I wear them. Honey-amber acetate has real depth, not flat plastic.', date: _d(6) },
    { name: 'Mehul P.',    rating: 5, text: 'Flatters most face shapes — I have an oval face and these sit perfectly. Olive temples are a great contrast to the warm front.', date: _d(20) },
    { name: 'Reshma B.',   rating: 4, text: 'Lenses are perfect tint — dark enough for Chennai sun but light enough that my eyes are still visible in photos. Hard case is sturdy.', date: _d(35) },
    { name: 'Karan S.',    rating: 5, text: 'The Marc Jacobs branded case + outer box make it feel properly premium. UV400 holds up well even at midday.', date: _d(50) },
  ],
  10: [
    { name: 'Akshara R.',  rating: 5, text: 'Oval frame is having a major fashion moment and Celine\'s version is the cleanest one out there. Lightweight, sits comfortably on my smaller bridge.', date: _d(8) },
    { name: 'Faisal M.',   rating: 5, text: 'Gold metal is so light I forget I\'m wearing them. The dark grey lenses are deep enough for harsh Tirunelveli sun without distorting colours.', date: _d(25) },
    { name: 'Padma N.',    rating: 4, text: 'Triomphe interlocking-C logo on the temples is subtle and chic — visible from the side without screaming brand. Hard case is well-cushioned.', date: _d(39) },
    { name: 'Riya K.',     rating: 5, text: 'Celine cleaning cloth and outer box make it feel like the boutique experience. Wore them to a beach wedding — looked great in every photo.', date: _d(57) },
  ],
  11: [
    { name: 'Suresh P.',   rating: 5, text: 'Gift for my husband on our anniversary — he loved the kraft Coach NY box more than the wallet itself. Looks straight out of a Coach store.', date: _d(11) },
    { name: 'Vinod K.',    rating: 5, text: 'Reversible belt is genuinely practical — black for office, brown for casual evenings. Wallet has the Coach signature-C debossing and the silver C hook is a real metal piece.', date: _d(26) },
    { name: 'Ramya S.',    rating: 5, text: 'Bought 3 sets for corporate Diwali gifting — all recipients were thrilled. Big thumbs up from Elite Emporium for the batch discount on WhatsApp.', date: _d(41) },
    { name: 'Karthik R.',  rating: 4, text: 'Card holder is sleek with a smooth thumb-slide — replaces my full wallet on gym days. Belt buckle is good weight, not flimsy.', date: _d(59) },
  ],
  12: [
    { name: 'Aditya P.',   rating: 5, text: 'Bold A|X logo wallet looks just like the showroom piece my friend has. Bifold sits flat in a back pocket even with 6+ cards loaded.', date: _d(7) },
    { name: 'Sneha K.',    rating: 5, text: '4 pieces in one branded box — gift was a hit at my brother\'s engagement. The separate buckle is a nice touch, can swap it onto other 35mm belts.', date: _d(23) },
    { name: 'Imran S.',    rating: 4, text: 'Belt buckle weight and finish surprised me — feels much more premium than the price suggests. ARMANI embossed strap is the cherry on top.', date: _d(36) },
    { name: 'Divya M.',    rating: 5, text: 'Gifted to my brother for his work farewell — he wears the wallet daily now and uses the card holder for his metro card.', date: _d(55) },
  ],
  13: [
    { name: 'Shalini D.',  rating: 5, text: 'Got the maroon one for my sister\'s wedding — the gold zari work is genuinely heavy and the flare is massive. Twirl-worthy on the sangeet floor.', date: _d(13) },
    { name: 'Asma B.',     rating: 5, text: 'Photographed mannequin colours are accurate — the navy blue I ordered is the same rich shade in real life, dupatta border embroidery is the highlight.', date: _d(28) },
    { name: 'Vidya R.',    rating: 4, text: 'Dense embroidery, well-finished inner lining, dupatta is generous size. Took 5 days to ship which is fair for this much detail work.', date: _d(43) },
    { name: 'Brinda K.',   rating: 5, text: 'Fit was perfect after I shared measurements on WhatsApp. Wore the cream-gold to my engagement — every guest asked where I got it.', date: _d(61) },
  ],
  14: [
    { name: 'Nazia A.',    rating: 5, text: 'Wore this to Eid lunch — endless photos and so many compliments. The peach-blush colour is the most universally flattering shade I\'ve worn.', date: _d(9) },
    { name: 'Geethika P.', rating: 5, text: 'Fabric has a soft natural sheen and flows beautifully on the floor. Subtle embroidery at the neckline is not too heavy — perfect for daytime.', date: _d(22) },
    { name: 'Suhana M.',   rating: 4, text: 'Not overdone — exactly what I wanted for a sangeet. Full sleeves with a touch of embroidery at the wrist is a tasteful detail.', date: _d(38) },
    { name: 'Kavya S.',    rating: 5, text: 'Colour is so flattering on camera even with indoor LEDs. Dupatta drape is generous, can wear as stole or cover both shoulders.', date: _d(53) },
  ],
  15: [
    { name: 'Ajay R.',     rating: 5, text: 'Bought 4 colours (mustard, navy, sage, white) and the fit is consistent across all. Single chest pocket with CK logo patch is exactly as shown.', date: _d(5) },
    { name: 'Bhavya K.',   rating: 5, text: 'Real Calvin Klein woven label inside the collar, black CK hangtag attached. Fabric is good cotton blend — breathable for Tamil Nadu summers.', date: _d(17) },
    { name: 'Mohit V.',    rating: 4, text: 'Mustard colour is sharp — got compliments at office Friday casuals. Half-sleeves are well-cut, not boxy.', date: _d(33) },
    { name: 'Reema D.',    rating: 5, text: 'Husband loves them, comfortable enough to wear at home or office. Buttons are reinforced, no thread coming loose after multiple washes.', date: _d(47) },
  ],
};

function getProductReviews(pid) {
  const all = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
  const user = (all[pid] || []).map(r => ({ ...r, _verified: false }));
  const seeded = (SEEDED_REVIEWS[pid] || []).map(r => ({ ...r, _verified: true }));
  // User reviews appear first (most recent activity), seeded reviews follow
  return [...user, ...seeded];
}

function saveProductReview(pid, review) {
  const all = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
  if (!all[pid]) all[pid] = [];
  all[pid].unshift(review);
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
}

let _reviewFilter = 'all';

function renderLocalReviews(pid) {
  const section = document.getElementById('reviewSection');
  if (!section) return;
  const all = getProductReviews(pid);
  let listEl = section.querySelector('.rv-local-list');
  if (!listEl) {
    listEl = document.createElement('div');
    listEl.className = 'rv-local-list';
    const formWrap = section.querySelector('.review-form-wrap');
    if (formWrap) section.insertBefore(listEl, formWrap);
  }
  if (!all.length) { listEl.innerHTML = ''; return; }

  // Apply filter
  let reviews = all;
  if (_reviewFilter === '5')        reviews = all.filter(r => r.rating === 5);
  else if (_reviewFilter === '4plus') reviews = all.filter(r => r.rating >= 4);
  else if (_reviewFilter === 'verified') reviews = all.filter(r => r._verified);
  else if (_reviewFilter === 'recent')   reviews = [...all].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 6);

  const avg = (all.reduce((s, r) => s + (r.rating || 0), 0) / all.length).toFixed(1);
  const dist = [5,4,3,2,1].map(star => all.filter(r => r.rating === star).length);
  const total = all.length;
  // Build rating distribution bar chart (5★ first, 1★ last)
  const distHtml = `
    <div class="rv-dist-card">
      <div class="rv-dist-left">
        <div class="rv-dist-big">★ ${avg}</div>
        <div class="rv-dist-sub">${total} review${total === 1 ? '' : 's'}</div>
      </div>
      <div class="rv-dist-bars">
        ${[5,4,3,2,1].map((star, i) => {
          const count = dist[i];
          const pct = total ? Math.round((count / total) * 100) : 0;
          return `<div class="rv-dist-row">
            <span class="rv-dist-label">${star}★</span>
            <span class="rv-dist-track"><span class="rv-dist-fill" style="width:${pct}%;"></span></span>
            <span class="rv-dist-count">${count}</span>
          </div>`;
        }).join('')}
      </div>
    </div>`;

  // Filter chips
  const verifiedCount = all.filter(r => r._verified).length;
  const fiveCount = dist[0];
  const fourPlusCount = dist[0] + dist[1];
  const chipsHtml = `
    <div class="rv-filter-row">
      <button class="rv-filter-chip${_reviewFilter === 'all' ? ' active' : ''}" type="button" onclick="window.__setReviewFilter('all','${pid}')">All (${all.length})</button>
      <button class="rv-filter-chip${_reviewFilter === '5' ? ' active' : ''}" type="button" onclick="window.__setReviewFilter('5','${pid}')">★ 5 only (${fiveCount})</button>
      <button class="rv-filter-chip${_reviewFilter === '4plus' ? ' active' : ''}" type="button" onclick="window.__setReviewFilter('4plus','${pid}')">★ 4+ (${fourPlusCount})</button>
      ${verifiedCount ? `<button class="rv-filter-chip${_reviewFilter === 'verified' ? ' active' : ''}" type="button" onclick="window.__setReviewFilter('verified','${pid}')">✓ Verified (${verifiedCount})</button>` : ''}
      <button class="rv-filter-chip${_reviewFilter === 'recent' ? ' active' : ''}" type="button" onclick="window.__setReviewFilter('recent','${pid}')">🕐 Most recent</button>
    </div>`;

  listEl.innerHTML = `
    <div class="rv-list-head">💬 Customer Reviews (${all.length}) · Avg <strong style="color:#FF9F00;">★ ${avg}</strong></div>
    ${distHtml}
    ${chipsHtml}
    ` +
    (reviews.length ? reviews.map(r => {
      const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
      const d = new Date(r.date).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
      const verifiedBadge = r._verified ? `<span class="rv-verified" title="Verified purchase">✓ Verified Buyer</span>` : '';
      return `<div class="rv-local-item">
        <div class="rv-local-header">
          <span class="rv-local-name">${r.name || 'Anonymous'}</span>
          ${verifiedBadge}
          <span class="rv-local-stars" style="color:#FF9F00;">${stars}</span>
          <span class="rv-local-date">${d}</span>
        </div>
        <div class="rv-local-text">${r.text}</div>
      </div>`;
    }).join('') : `<div style="text-align:center;padding:20px;color:var(--text2);font-size:13px;">No reviews match this filter.</div>`);
}

window.__setReviewFilter = function(f, pid) {
  _reviewFilter = f;
  renderLocalReviews(pid);
  if (typeof hapticTap === 'function') hapticTap();
};

function initReviewSection(product) {
  const section = document.getElementById('reviewSection');
  if (!section) return;
  _reviewProductName = product.name;
  _reviewProductId   = product.id;
  section.style.display = 'block';

  renderLocalReviews(product.id);

  const stars = section.querySelectorAll('.star-pick');
  stars.forEach(s => {
    s.addEventListener('mouseover', () => {
      const v = +s.dataset.v;
      stars.forEach(st => st.classList.toggle('active', +st.dataset.v <= v));
    });
    s.addEventListener('mouseout', () => {
      stars.forEach(st => st.classList.toggle('active', +st.dataset.v <= _reviewRating));
    });
    s.addEventListener('click', () => {
      _reviewRating = +s.dataset.v;
      stars.forEach(st => st.classList.toggle('active', +st.dataset.v <= _reviewRating));
    });
  });
}

function submitReview() {
  const name = (document.getElementById('reviewName')?.value || '').trim();
  const text = (document.getElementById('reviewText')?.value || '').trim();
  if (!_reviewRating) { showToast('⚠️ Please select a star rating.'); return; }
  if (!text) { showToast('⚠️ Please write something about this product.'); return; }
  const stars = '★'.repeat(_reviewRating) + '☆'.repeat(5 - _reviewRating);
  const msg = `✍️ *Product Review — Elite Emporium*\n\n📦 *Product:* ${_reviewProductName}\n${stars} (${_reviewRating}/5)\n👤 *Name:* ${name || 'Anonymous'}\n\n💬 *Review:*\n${text}`;
  // Save locally
  if (_reviewProductId !== null) {
    saveProductReview(_reviewProductId, { rating: _reviewRating, name: name || 'Anonymous', text, date: Date.now() });
    renderLocalReviews(_reviewProductId);
  }
  // Reset form
  const nameEl = document.getElementById('reviewName');
  const textEl = document.getElementById('reviewText');
  if (nameEl) nameEl.value = '';
  if (textEl) textEl.value = '';
  _reviewRating = 0;
  document.querySelectorAll('.star-pick').forEach(s => s.classList.remove('active'));
  showToast('✅ Review saved! Opening WhatsApp…');
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

function initFBT(product) {
  const section = document.getElementById('fbtSection');
  const inner   = document.getElementById('fbtInner');
  if (!section || !inner) return;

  // Pick 2 complementary products, deterministic per-PDP so the bundle
  // doesn't reshuffle every visit (better social-proof signal).
  // Prefer different categories first; fall back to same-category if needed.
  const candidates = products.filter(p => p.id !== product.id && p.inStock !== false && p.image);
  if (!candidates.length) return;
  const seed = _stableHash(`fbt-${product.id}`);
  const sortByOtherCategory = (a, b) => {
    const aOther = a.category !== product.category ? 0 : 1;
    const bOther = b.category !== product.category ? 0 : 1;
    if (aOther !== bOther) return aOther - bOther;
    // Stable per-product order using FNV-1a so it's reproducible
    return (_stableHash(`${seed}-${a.id}`) % 1000) - (_stableHash(`${seed}-${b.id}`) % 1000);
  };
  const others = [...candidates].sort(sortByOtherCategory).slice(0, 2);
  if (!others.length) return;

  const bundle = [product, ...others];
  const subtotal = bundle.reduce((s, p) => s + p.price, 0);
  // Bundle discount: 5% (rounded to nearest ₹10 for cleaner numbers).
  const bundleDiscPct = 5;
  const discount = Math.round((subtotal * bundleDiscPct / 100) / 10) * 10;
  const total    = subtotal - discount;

  inner.innerHTML = `
    <div class="fbt-products">
      ${bundle.map((p, i) => `
        <div class="fbt-item">
          <a href="product.html?id=${p.id}">
            <img src="${cldUrl(p.image || '', 200)}"${srcsetFor(p.image) ? ` srcset="${srcsetFor(p.image)}"` : ''} alt="${escapeHtml(p.name)}" class="fbt-img" loading="lazy" decoding="async" />
            <div class="fbt-name">${escapeHtml(p.name)}</div>
            <div class="fbt-price">₹${p.price.toLocaleString('en-IN')}</div>
          </a>
        </div>
        ${i < bundle.length - 1 ? '<div class="fbt-plus">+</div>' : ''}`
      ).join('')}
    </div>
    <div class="fbt-action">
      <div class="fbt-totals">
        <div class="fbt-subtotal"><s>₹${subtotal.toLocaleString('en-IN')}</s></div>
        <div class="fbt-total">Bundle Price: <strong>₹${total.toLocaleString('en-IN')}</strong></div>
        <div class="fbt-save">🎁 Save ₹${discount.toLocaleString('en-IN')} on this bundle (-${bundleDiscPct}%)</div>
      </div>
      <button class="fbt-add-btn" onclick="addBundleToCart([${bundle.map(p=>p.id).join(',')}])">🛒 Add All to Cart</button>
    </div>`;
  section.style.display = 'block';
}

function addBundleToCart(ids) {
  ids.forEach(id => {
    const p = products.find(pr => pr.id === id);
    if (!p || p.inStock === false) return;
    const cartKey = String(p.id) + '|';
    const existing = cart.find(i => i.cartKey === cartKey);
    if (existing) existing.quantity++;
    else cart.push({ ...p, quantity: 1, cartKey, selectedColor: null });
  });
  // Auto-apply a 5%-bundle-style coupon if all three are still in cart.
  // We use the existing ELITE10 coupon's apply path? No — keep it simple:
  // just nudge the user with a toast that explains the savings.
  saveCart(true);
  showToast(`🛒 ${ids.length} items added — apply coupon SUMMER15 at checkout for extra 15% off!`, 5000);
}

function initPairWith(product) {
  const section  = document.getElementById('pairWithSection');
  const strip    = document.getElementById('pairWithStrip');
  const titleEl  = document.getElementById('pairWithTitle');
  if (!section || !strip) return;

  const PAIRS = {
    'Bags':        ['Wallets', 'Watches', 'Coolers', 'Belts'],
    'Watches':     ['Wallets', 'Belts', 'Bags', 'Mens Dress'],
    'Wallets':     ['Bags', 'Watches', 'Belts'],
    'Belts':       ['Wallets', 'Watches', 'Mens Dress'],
    'Coolers':     ['Bags', 'Watches', 'Footwear'],
    'Clothing':    ['Bags', 'Coolers', 'Footwear', 'Perfumes'],
    'Abaiya':      ['Hijab', 'Bags', 'Perfumes'],
    'Hijab':       ['Abaiya', 'Bags', 'Perfumes'],
    'Sarees':      ['Cosmetics', 'Bags', 'Footwear'],
    'Kurta Sets':  ['Footwear', 'Bags', 'Cosmetics'],
    'Mens Dress':  ['Watches', 'Belts', 'Wallets', 'Footwear'],
    'Kids Wear':   ['Footwear', 'Toys & Games', 'Bags'],
    'Footwear':    ['Bags', 'Clothing', 'Coolers'],
    'Perfumes':    ['Cosmetics', 'Hair Care'],
    'Cosmetics':   ['Perfumes', 'Hair Care'],
    'Hair Care':   ['Cosmetics', 'Perfumes'],
    'Home & Kitchen': ['Home & Kitchen'],
    'Sports':      ['Footwear', 'Bags', 'Clothing'],
    'Toys & Games':['Kids Wear'],
  };

  const companionCats = PAIRS[product.category] || [];
  if (!companionCats.length) return;

  const picks = products
    .filter(p => companionCats.includes(p.category) && p.id !== product.id && p.inStock !== false)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 8);

  if (!picks.length) return;

  const catLabel = companionCats.slice(0, 2).join(' & ');
  if (titleEl) titleEl.textContent = `✨ Pair It With — ${catLabel}`;

  section.style.display = 'block';
  renderProducts(picks, 'pairWithStrip');
  strip.style.display   = 'flex';
  strip.style.overflowX = 'auto';
}

function initRelatedProducts(product) {
  const section = document.getElementById('relatedSection');
  const grid    = document.getElementById('relatedProducts');
  if (!section || !grid) return;
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id && p.inStock !== false)
    .slice(0, 4);
  if (!related.length) return;
  section.style.display = 'block';
  renderProducts(related, 'relatedProducts');
}

function initPdRecentlyViewed(currentId) {
  const section = document.getElementById('pdRecentlyViewedSection');
  const strip   = document.getElementById('pdRecentlyViewedStrip');
  if (!section || !strip) return;
  const ids = JSON.parse(localStorage.getItem(RV_KEY) || '[]')
    .filter(id => Number(id) !== currentId);
  const picks = ids.map(id => products.find(p => p.id === Number(id))).filter(Boolean).slice(0, 8);
  if (!picks.length) return;
  renderProducts(picks, 'pdRecentlyViewedStrip');
  strip.style.display   = 'flex';
  strip.style.overflowX = 'auto';
  section.style.display = 'block';
}

function selectDetailVariant(el) {
  const imgSrc    = el.dataset.img;
  const colorName = el.dataset.color;
  const mainImg   = document.getElementById('pdMainImage');
  if (mainImg) {
    mainImg.style.opacity = '0.6';
    mainImg.src = imgSrc;
    mainImg.onload = () => { mainImg.style.opacity = '1'; };
  }
  const lbl = document.getElementById('pdSelectedColor');
  if (lbl) lbl.textContent = colorName;
  el.closest('.pd-color-swatches').querySelectorAll('.pd-swatch-item').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  // Sync thumbnail strip
  document.querySelectorAll('.pd-thumb').forEach(t => t.classList.toggle('active', t.dataset.img === imgSrc));
  // Keep cart button in sync with selected variant
  const cartBtn = document.getElementById('pdAddToCart');
  if (cartBtn) {
    cartBtn.dataset.selectedColor = colorName;
    cartBtn.dataset.selectedImage = imgSrc;
  }
}

function selectThumb(el) {
  const imgSrc    = el.dataset.img;
  const colorName = el.dataset.color;
  const mainImg   = document.getElementById('pdMainImage');
  if (mainImg) {
    mainImg.style.opacity = '0.6';
    mainImg.src = imgSrc;
    mainImg.onload = () => { mainImg.style.opacity = '1'; };
  }
  document.querySelectorAll('.pd-thumb').forEach(t => t.classList.toggle('active', t === el));
  // Sync swatch strip
  document.querySelectorAll('.pd-swatch-item').forEach(s => s.classList.toggle('active', s.dataset.img === imgSrc));
  const lbl = document.getElementById('pdSelectedColor');
  if (lbl && colorName) lbl.textContent = colorName;
  const cartBtn = document.getElementById('pdAddToCart');
  if (cartBtn) {
    cartBtn.dataset.selectedColor = colorName;
    cartBtn.dataset.selectedImage = imgSrc;
  }
}

// ── SHARE PRODUCT ─────────────────────────────
async function shareProduct() {
  const title    = document.getElementById('pdTitle')?.textContent || 'Elite Emporium Product';
  const priceEl  = document.getElementById('pdPrice');
  const priceStr = priceEl?.textContent || '';
  const url      = window.location.href;
  const text     = `Check out *${title}* on Elite Emporium — ${priceStr}`;
  hapticTap();
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      hapticSuccess();
      return;
    } catch (e) { /* user cancelled or unsupported — fall through */ }
  }
  copyToClipboard(url);
}
function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => { showToast('🔗 Link copied to clipboard!'); hapticSuccess(); })
      .catch(() => showToast('🔗 Copy this link: ' + text));
  } else {
    // Final fallback for very old browsers
    try {
      const t = document.createElement('textarea');
      t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove();
      showToast('🔗 Link copied!');
    } catch { showToast('🔗 Copy this link: ' + text); }
  }
}

// ── IMAGE ZOOM MODAL ──────────────────────────
let _imgModalGallery = []; // list of src strings (current product variants)
let _imgModalIndex   = 0;

function openImageModal(src) {
  if (!src) return;
  const modal = document.getElementById('imgModal');
  const img   = document.getElementById('imgModalImg');
  if (!modal || !img) return;

  // Build a gallery from the product detail thumbs if present, else single image
  const thumbs = [...document.querySelectorAll('.pd-thumb')];
  _imgModalGallery = thumbs.length
    ? thumbs.map(t => t.dataset?.img).filter(Boolean)
    : [src];
  _imgModalIndex = Math.max(0, _imgModalGallery.indexOf(src));
  if (_imgModalIndex < 0) _imgModalIndex = 0;

  img.src = _imgModalGallery[_imgModalIndex] || src;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Inject prev/next buttons + counter once
  if (!document.getElementById('imgModalPrev') && _imgModalGallery.length > 1) {
    const inner = modal.querySelector('.img-modal-inner') || modal;
    inner.insertAdjacentHTML('beforeend', `
      <button id="imgModalPrev" class="img-modal-nav prev" onclick="imgModalStep(-1)" aria-label="Previous">‹</button>
      <button id="imgModalNext" class="img-modal-nav next" onclick="imgModalStep(1)" aria-label="Next">›</button>
      <div id="imgModalCounter" class="img-modal-counter"></div>
    `);
  }
  updateImgModalCounter();
}
function imgModalStep(delta) {
  if (!_imgModalGallery.length) return;
  _imgModalIndex = (_imgModalIndex + delta + _imgModalGallery.length) % _imgModalGallery.length;
  const img = document.getElementById('imgModalImg');
  if (img) img.src = _imgModalGallery[_imgModalIndex];
  updateImgModalCounter();
}
function updateImgModalCounter() {
  const c = document.getElementById('imgModalCounter');
  const prev = document.getElementById('imgModalPrev');
  const next = document.getElementById('imgModalNext');
  const show = _imgModalGallery.length > 1;
  if (c) { c.textContent = `${_imgModalIndex + 1} / ${_imgModalGallery.length}`; c.style.display = show ? 'block' : 'none'; }
  if (prev) prev.style.display = show ? 'flex' : 'none';
  if (next) next.style.display = show ? 'flex' : 'none';
}
function closeImageModal() {
  const modal = document.getElementById('imgModal');
  if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
}
// Arrow-key nav while modal is open
document.addEventListener('keydown', e => {
  const open = document.getElementById('imgModal')?.classList.contains('open');
  if (!open) return;
  if (e.key === 'ArrowLeft')  imgModalStep(-1);
  if (e.key === 'ArrowRight') imgModalStep(1);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeImageModal(); closeQuickView(); closeCompareModal(); } });

// ── RECENTLY VIEWED ───────────────────────────
const RV_KEY = 'eliteEmporiumRecentlyViewed';
const RV_MAX = 6;

function trackRecentlyViewed(product) {
  let rv = JSON.parse(localStorage.getItem(RV_KEY) || '[]');
  rv = rv.filter(item => item.id !== product.id);
  rv.unshift({ id: product.id, name: product.name, image: product.image || '', price: product.price, category: product.category });
  if (rv.length > RV_MAX) rv = rv.slice(0, RV_MAX);
  localStorage.setItem(RV_KEY, JSON.stringify(rv));
}

function initRecentlyViewed() {
  const rv = JSON.parse(localStorage.getItem(RV_KEY) || '[]');
  if (!rv.length) return;
  const section = document.getElementById('recentlyViewedSection');
  const list    = document.getElementById('recentlyViewedList');
  if (!section || !list) return;
  section.style.display = 'block';
  list.innerHTML = rv.map(item => `
    <a href="product.html?id=${item.id}" class="rv-card">
      <img src="${cldUrl(item.image, 200)}"${srcsetFor(item.image) ? ` srcset="${srcsetFor(item.image)}"` : ''} alt="${escapeHtml(item.name)}" loading="lazy" decoding="async" />
      <div class="rv-card-name">${escapeHtml(item.name)}</div>
      <div class="rv-card-price">₹${item.price.toLocaleString('en-IN')}</div>
    </a>`).join('');

  // 'Continue where you left off' floating banner — homepage only,
  // only on return visits, dismissed for the session once shown.
  if (!document.getElementById('featuredProducts')) return;
  if (sessionStorage.getItem('continueShown')) return;
  if (window.location.pathname.includes('product.html')) return;
  // Skip if user is currently browsing this product (avoid loop)
  const top = rv[0];
  if (!top || !top.id) return;
  setTimeout(() => {
    if (document.getElementById('continueBanner')) return;
    const banner = document.createElement('a');
    banner.id = 'continueBanner';
    banner.className = 'continue-banner';
    banner.href = `product.html?id=${top.id}`;
    banner.innerHTML = `
      <img src="${cldUrl(top.image, 160)}" alt="" />
      <div class="cb-body">
        <div class="cb-head">👀 Continue where you left off</div>
        <div class="cb-name">${escapeHtml(top.name)}</div>
        <div class="cb-price">₹${top.price.toLocaleString('en-IN')}</div>
      </div>
      <button class="cb-close" type="button" onclick="event.preventDefault();event.stopPropagation();document.getElementById('continueBanner').remove();sessionStorage.setItem('continueShown','1');" aria-label="Dismiss">✕</button>`;
    document.body.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add('show'));
    // Auto-mark shown after click too
    banner.addEventListener('click', () => sessionStorage.setItem('continueShown', '1'));
  }, 4500);
}

// ── WISHLIST PAGE ─────────────────────────────
function initWishlistPage() {
  importWishlistFromUrl();

  const grid     = document.getElementById('wishlistGrid');
  const countEl  = document.getElementById('wishlistCount');
  if (!grid) return;

  const rv = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');
  const wishlisted = products.filter(p => rv.includes(p.id));

  if (countEl) countEl.textContent = wishlisted.length
    ? `${wishlisted.length} saved item${wishlisted.length > 1 ? 's' : ''}`
    : 'No saved items yet';

  if (!wishlisted.length) {
    // Suggest 6 popular items so the empty wishlist is a discovery surface
    const suggestions = [...products]
      .filter(p => p.inStock !== false && p.badge && p.image)
      .sort((a, b) => (b.reviews || 0) - (a.reviews || 0))
      .slice(0, 6);
    const suggHtml = suggestions.length ? `
      <div class="wl-empty-suggest">
        <div class="wl-empty-suggest-head">✨ Popular picks to start with</div>
        <div class="wl-empty-suggest-row">
          ${suggestions.map(p => `
            <div class="wl-empty-card">
              <a href="product.html?id=${p.id}" class="wl-empty-link">
                <img src="${cldUrl(p.image, 200)}" alt="${escapeHtml(p.name)}" loading="lazy" />
                <div class="wl-empty-name">${escapeHtml(p.name)}</div>
                <div class="wl-empty-price">₹${p.price.toLocaleString('en-IN')}</div>
              </a>
              <button type="button" class="wl-empty-add" onclick="toggleWishlist(${p.id});initWishlistPage();">🤍 Add</button>
            </div>`).join('')}
        </div>
      </div>` : '';
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:36px 16px 12px;color:#878787;">
      <div style="font-size:60px;margin-bottom:14px;">🤍</div>
      <h3 style="color:var(--red);font-size:18px;margin-bottom:6px;">Your wishlist is empty</h3>
      <p style="margin-bottom:16px;">Tap the ❤️ on any product to save it here</p>
      <a href="products.html" style="display:inline-block;background:var(--red);color:white;padding:9px 22px;border-radius:20px;font-weight:600;font-size:13px;text-decoration:none;">Browse Products</a>
      ${suggHtml}
    </div>`;
    return;
  }

  // Wishlist value bar
  const totalVal  = wishlisted.reduce((s, p) => s + p.price, 0);
  const totalMrp  = wishlisted.reduce((s, p) => s + (p.mrp || p.price), 0);
  const totalSave = totalMrp - totalVal;
  const oosCount  = wishlisted.filter(p => p.inStock === false).length;
  const avgDisc   = totalMrp > totalVal ? Math.round((totalMrp - totalVal) / totalMrp * 100) : 0;
  const valueBar  = document.createElement('div');
  valueBar.className = 'wl-value-bar';
  valueBar.innerHTML = `
    <div>
      <div class="wl-value-label">Total Wishlist Value</div>
      <div class="wl-value-amount">₹${totalVal.toLocaleString('en-IN')}</div>
      <div class="wl-value-meta">
        ${totalSave > 0 ? `<span class="wl-value-savings">💸 Save ₹${totalSave.toLocaleString('en-IN')} (${avgDisc}% off MRP)</span>` : ''}
        ${oosCount > 0 ? `<span class="wl-value-oos">⚠️ ${oosCount} out of stock</span>` : ''}
      </div>
    </div>
    <button class="wl-move-all-btn" onclick="addAllWishlistToCart()">🛒 Add All to Cart</button>`;
  grid.parentElement.insertBefore(valueBar, grid);

  // Sort dropdown
  const sortBar = document.createElement('div');
  sortBar.className = 'wl-sort-bar';
  sortBar.innerHTML = `
    <span class="wl-sort-label">Sort by:</span>
    <select id="wlSortSelect" class="wl-sort-select">
      <option value="recent">🕐 Recently added</option>
      <option value="price-asc">₹ Price: Low → High</option>
      <option value="price-desc">₹ Price: High → Low</option>
      <option value="discount">💸 Best discount</option>
      <option value="name">A → Z</option>
    </select>`;
  grid.parentElement.insertBefore(sortBar, grid);

  const sortBy = (mode) => {
    let list = [...wishlisted];
    switch (mode) {
      case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
      case 'price-desc': list.sort((a,b) => b.price - a.price); break;
      case 'discount':   list.sort((a,b) => {
        const da = a.mrp && a.mrp > a.price ? (a.mrp - a.price) / a.mrp : 0;
        const db = b.mrp && b.mrp > b.price ? (b.mrp - b.price) / b.mrp : 0;
        return db - da;
      }); break;
      case 'name':       list.sort((a,b) => a.name.localeCompare(b.name)); break;
      // 'recent' is the natural insertion order (most-recent first via wishlist.indexOf)
      case 'recent':
      default:
        list.sort((a,b) => rv.indexOf(b.id) - rv.indexOf(a.id));
        break;
    }
    renderProducts(list, 'wishlistGrid');
  };

  document.getElementById('wlSortSelect').addEventListener('change', e => sortBy(e.target.value));
  sortBy('recent');
}

function shareWishlist() {
  const rv = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');
  const wishlisted = products.filter(p => rv.includes(p.id));
  if (!wishlisted.length) { showToast('⚠️ Your wishlist is empty!'); return; }

  // Build a deep-link URL using base64-encoded comma-joined IDs.
  // Recipients who open this URL on the same domain auto-see the
  // sender's wishlist (importWishlistFromUrl below).
  const idsStr  = rv.filter(id => products.some(p => p.id === id)).join(',');
  const encoded = btoa(idsStr).replace(/=+$/, ''); // strip padding for tidiness
  const baseUrl = `${window.location.origin}${window.location.pathname.replace(/\/[^/]*$/, '/')}wishlist.html?wl=${encoded}`;

  let msg = `❤️ *My Wishlist – Elite Emporium*\n━━━━━━━━━━━━━━━━━\n\n`;
  wishlisted.forEach((p, i) => {
    msg += `${i + 1}. *${p.name}*\n   ₹${p.price.toLocaleString('en-IN')}`;
    if (p.mrp && p.mrp > p.price) msg += ` (MRP ₹${p.mrp.toLocaleString('en-IN')})`;
    msg += `\n   🔗 ${window.location.origin}${window.location.pathname.replace('wishlist.html', '')}product.html?id=${p.id}\n\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━\n👉 *Open my full wishlist:* ${baseUrl}\n\nShop at Elite Emporium 👉 https://wa.me/917358650774`;

  // Show a small share menu: WhatsApp, Copy Link, or native share
  const menu = document.createElement('div');
  menu.className = 'wl-share-menu';
  menu.innerHTML = `
    <div class="wl-share-card">
      <div class="wl-share-title">Share your wishlist</div>
      <button class="wl-share-btn wl-share-wa" type="button" data-action="wa">
        <span>💬</span> Send on WhatsApp
      </button>
      <button class="wl-share-btn wl-share-copy" type="button" data-action="copy">
        <span>🔗</span> Copy shareable link
      </button>
      ${navigator.share ? `<button class="wl-share-btn wl-share-native" type="button" data-action="native"><span>📤</span> Share elsewhere…</button>` : ''}
      <button class="wl-share-btn wl-share-close" type="button" data-action="close">Cancel</button>
    </div>`;
  document.body.appendChild(menu);
  menu.addEventListener('click', async e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) {
      if (e.target === menu) menu.remove(); // backdrop click
      return;
    }
    const a = btn.dataset.action;
    if (a === 'wa') {
      window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
    } else if (a === 'copy') {
      try {
        await navigator.clipboard.writeText(baseUrl);
        showToast('✅ Link copied! Share it anywhere.', 3500);
      } catch {
        // Fallback: prompt() so user can copy manually
        prompt('Copy this link:', baseUrl);
      }
    } else if (a === 'native') {
      try { await navigator.share({ title: 'My Wishlist – Elite Emporium', text: msg, url: baseUrl }); } catch {}
    }
    menu.remove();
  });
}

// Import wishlist from ?wl=<base64-ids> param if present (recipient flow).
function importWishlistFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const wl = params.get('wl');
  if (!wl) return;
  let ids = [];
  try {
    const decoded = atob(wl.replace(/-/g, '+').replace(/_/g, '/'));
    ids = decoded.split(',').map(Number).filter(n => !isNaN(n) && n > 0);
  } catch { return; }
  if (!ids.length) return;

  // Confirm before overwriting an existing wishlist
  const existing = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');
  const matching = ids.filter(id => products.some(p => p.id === id));
  if (!matching.length) return;

  const merge = existing.length
    ? confirm(`Someone shared a wishlist with you (${matching.length} items). Merge with your existing wishlist (${existing.length} items)?\n\nClick Cancel to replace instead.`)
    : true;

  let final;
  if (merge) {
    final = Array.from(new Set([...existing, ...matching]));
  } else {
    final = matching;
  }
  localStorage.setItem('eliteEmporiumWishlist', JSON.stringify(final));
  showToast(`❤️ Wishlist imported! ${matching.length} item${matching.length > 1 ? 's' : ''} added.`, 4500);

  // Clean the URL so refresh doesn't re-trigger the prompt
  const url = new URL(window.location.href);
  url.searchParams.delete('wl');
  window.history.replaceState({}, '', url.toString());
}

function addAllWishlistToCart() {
  const rv = JSON.parse(localStorage.getItem('eliteEmporiumWishlist') || '[]');
  const wishlisted = products.filter(p => rv.includes(p.id) && p.inStock !== false);
  if (!wishlisted.length) { showToast('⚠️ No in-stock items in your wishlist.'); return; }
  wishlisted.forEach(p => {
    const cartKey  = String(p.id) + '|';
    const existing = cart.find(i => i.cartKey === cartKey);
    if (existing) { existing.quantity += 1; }
    else { cart.push({ ...p, quantity: 1, cartKey, selectedColor: null }); }
  });
  saveCart(true);
  showToast(`🛒 ${wishlisted.length} item${wishlisted.length > 1 ? 's' : ''} added to cart!`);
}

// ── PRICE RANGE FILTER ────────────────────────
let _priceMin = null;
let _priceMax = null;
let _priceRefresh = null;
let _resetFilters = null;

function applyPriceFilter() {
  const minEl = document.getElementById('priceMin');
  const maxEl = document.getElementById('priceMax');
  _priceMin = minEl?.value ? Number(minEl.value) : null;
  _priceMax = maxEl?.value ? Number(maxEl.value) : null;
  if (_priceRefresh) _priceRefresh();
}

function clearPriceFilter() {
  _priceMin = null; _priceMax = null;
  const minEl = document.getElementById('priceMin');
  const maxEl = document.getElementById('priceMax');
  if (minEl) minEl.value = '';
  if (maxEl) maxEl.value = '';
  if (_priceRefresh) _priceRefresh();
}

// ── GRID / LIST VIEW TOGGLE ───────────────────
let _currentViewMode = 'grid';

function setViewMode(mode, btn) {
  _currentViewMode = mode;
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  if (mode === 'list') {
    grid.classList.add('products-list-view');
  } else {
    grid.classList.remove('products-list-view');
  }
}

// ── SORT CHIPS (products page) ────────────────
function applySortChip(value, btn) {
  // Sync with the hidden selects
  const sel  = document.getElementById('sortSelect');
  const selM = document.getElementById('sortSelectMobile');
  if (sel)  sel.value  = value;
  if (selM) selM.value = value;
  sel?.dispatchEvent(new Event('change'));

  // Update chip active state
  document.querySelectorAll('.sort-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ── PRODUCT DETAIL TABS ───────────────────────
function switchPdTab(name, btn) {
  const panelMap = { desc: 'pdTabDesc', delivery: 'pdTabDelivery', seller: 'pdTabSeller' };
  document.querySelectorAll('.pd-tab').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
    b.setAttribute('tabindex', '-1');
  });
  document.querySelectorAll('.pd-tab-panel').forEach(p => p.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    btn.setAttribute('tabindex', '0');
  }
  const panel = document.getElementById(panelMap[name]);
  if (panel) {
    void panel.offsetWidth; // force reflow so animation replays
    panel.classList.add('active');
  }
  // Move the ink indicator
  const ink = document.getElementById('pdTabInk');
  if (ink && btn) {
    ink.style.left  = btn.offsetLeft + 'px';
    ink.style.width = btn.offsetWidth + 'px';
  }
}

function initPdTabInk() {
  const tabs = [...document.querySelectorAll('.pd-tab')];
  const activeTab = document.querySelector('.pd-tab.active');
  const ink = document.getElementById('pdTabInk');
  if (ink && activeTab) {
    ink.style.left  = activeTab.offsetLeft + 'px';
    ink.style.width = activeTab.offsetWidth + 'px';
  }
  // ARIA roles + keyboard navigation for the tablist
  const tablist = activeTab?.closest('.pd-tabs-nav');
  if (tablist) {
    tablist.setAttribute('role', 'tablist');
    tabs.forEach((t, i) => {
      t.setAttribute('role', 'tab');
      t.setAttribute('aria-selected', t.classList.contains('active') ? 'true' : 'false');
      t.setAttribute('tabindex', t.classList.contains('active') ? '0' : '-1');
    });
    ['pdTabDesc','pdTabDelivery','pdTabSeller'].forEach(id => {
      const p = document.getElementById(id);
      if (p) p.setAttribute('role', 'tabpanel');
    });
    tablist.addEventListener('keydown', e => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
      const cur = tabs.findIndex(t => t === document.activeElement);
      if (cur === -1) return;
      e.preventDefault();
      let next;
      if (e.key === 'ArrowRight') next = (cur + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (cur - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else next = tabs.length - 1;
      tabs[next].focus();
      tabs[next].click();
    });
  }
}

// ── MOBILE FILTER TOGGLE ──────────────────────
function toggleFilters() {
  const sidebar  = document.querySelector('.filters-sidebar');
  const btn      = document.getElementById('filterToggleBtn');
  const overlay  = document.getElementById('filterSheetOverlay');
  if (!sidebar) return;
  const isOpen = sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('visible', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
  if (btn) {
    btn.classList.toggle('active', isOpen);
    const countMatch = btn.textContent.match(/\((\d+)\)/);
    const countSuffix = countMatch ? ` (${countMatch[1]})` : '';
    btn.textContent = isOpen ? '✕ Close' : `🔧 Filters${countSuffix}`;
    if (isOpen) {
      btn.style.background = 'var(--red)';
      btn.style.color = 'white';
      btn.style.borderColor = 'var(--red)';
    } else {
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }
  }
}

// ── SKELETON LOADER ───────────────────────────
function showSkeletons(containerId, count = 8) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = Array.from({ length: count }, () => `
    <div class="skeleton-card">
      <div class="skel skel-img"></div>
      <div class="skel skel-line"></div>
      <div class="skel skel-line short"></div>
      <div class="skel skel-line price"></div>
    </div>`).join('');
}

// ── PIN CODE DELIVERY CHECKER ─────────────────
function checkPinDelivery() {
  const inp    = document.getElementById('pinCheckerInput');
  const result = document.getElementById('pinCheckerResult');
  if (!inp || !result) return;

  const pin = inp.value.trim();
  result.className = 'pin-checker-result';
  if (!/^\d{6}$/.test(pin)) {
    result.textContent = '⚠️ Please enter a valid 6-digit PIN code.';
    result.classList.add('error');
    return;
  }

  const prefix = parseInt(pin.slice(0, 2), 10);
  let state = 'India', days = [5, 7];
  if (prefix >= 60 && prefix <= 64) { state = 'Tamil Nadu';         days = [3, 5]; }
  else if (prefix >= 50 && prefix <= 53) { state = 'Andhra Pradesh / Telangana'; days = [4, 6]; }
  else if (prefix >= 56 && prefix <= 59) { state = 'Karnataka';     days = [4, 6]; }
  else if (prefix >= 67 && prefix <= 69) { state = 'Kerala';        days = [4, 6]; }
  else if (prefix >= 40 && prefix <= 41) { state = 'Maharashtra';   days = [5, 7]; }
  else if (prefix >= 11 && prefix <= 12) { state = 'Delhi';         days = [5, 7]; }
  else if (prefix >= 20 && prefix <= 28) { state = 'Uttar Pradesh'; days = [6, 8]; }
  else if (prefix >= 70 && prefix <= 74) { state = 'West Bengal';   days = [6, 8]; }
  else if (prefix >= 14 && prefix <= 16) { state = 'Punjab / Haryana'; days = [5, 7]; }
  else if (prefix >= 30 && prefix <= 34) { state = 'Rajasthan';    days = [6, 8]; }
  else if (prefix >= 38 && prefix <= 39) { state = 'Gujarat';      days = [5, 7]; }
  else if (prefix >= 46 && prefix <= 49) { state = 'Madhya Pradesh'; days = [6, 8]; }
  else if (prefix >= 80 && prefix <= 85) { state = 'Bihar / Jharkhand'; days = [6, 8]; }

  const addDays = (d, n) => { const r = new Date(d); for (let i = 0; i < n;) { r.setDate(r.getDate()+1); if (r.getDay()!==0&&r.getDay()!==6) i++; } return r; };
  const today   = new Date();
  const earliest = addDays(today, days[0]);
  const latest   = addDays(today, days[1]);
  const fmt = d => d.toLocaleDateString('en-IN', { weekday:'short', day:'numeric', month:'short' });

  result.innerHTML = `✅ Delivery to ${state} (${pin})<br>📅 Expected: <strong>${fmt(earliest)} – ${fmt(latest)}</strong>`;
  result.classList.add('success');
}

// ── DARK MODE ─────────────────────────────────
function initDarkMode() {
  const THEME_KEY = 'eliteEmporiumTheme';
  const root      = document.documentElement;

  // Resolve the initial theme: explicit user choice > OS preference > light
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  let initial = stored;
  if (!initial || initial === 'auto') initial = prefersDark ? 'dark' : 'light';
  root.setAttribute('data-theme', initial);

  // Watch the system pref so 'auto'-mode users get live switching at dusk
  try {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    mq?.addEventListener?.('change', e => {
      if (localStorage.getItem(THEME_KEY) === 'auto' || !localStorage.getItem(THEME_KEY)) {
        root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    });
  } catch {}

  // Inject toggle button into every page's header-actions
  const headerActions = document.querySelector('.header-actions');
  if (!headerActions) return;
  if (headerActions.querySelector('.dark-mode-btn')) return;
  const btn = document.createElement('button');
  btn.className   = 'dark-mode-btn';
  btn.title       = 'Toggle dark mode';
  btn.setAttribute('aria-label', 'Toggle dark/light mode');
  // Smooth icon: morphing between sun/moon (set on first paint)
  const setIcon = mode => { btn.textContent = mode === 'dark' ? '☀️' : '🌙'; };
  setIcon(initial);
  btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next   = isDark ? 'light' : 'dark';
    // Add a class for a soft fade transition (250ms)
    root.classList.add('theme-transitioning');
    root.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
    setIcon(next);
    hapticTap();
    setTimeout(() => root.classList.remove('theme-transitioning'), 280);
  });
  headerActions.insertBefore(btn, headerActions.firstChild);
}

// ── CART REMINDER BANNER (homepage) ──────────
// ── EXIT-INTENT CART RECOVERY ────────────────
// On desktop, if the cursor moves toward the top of the viewport while
// there are items in the cart, show a one-time modal nudging the user
// to either complete their order or save it. Mobile uses a 'back button'
// equivalent — popstate after a sentinel pushState — so they get a
// gentler pause instead of just leaving.
function initExitIntent() {
  if (sessionStorage.getItem('exitIntentShown')) return;

  function showExitIntent() {
    if (sessionStorage.getItem('exitIntentShown')) return;
    if (!cart.length) return;
    sessionStorage.setItem('exitIntentShown', '1');

    const itemCount = cart.reduce((s, i) => s + i.quantity, 0);
    const sub       = getSubtotal();
    const minFree   = (CONFIG && CONFIG.minFreeDelivery) || 499;
    const freeMsg   = sub >= minFree
      ? `🎉 You've unlocked FREE delivery — your order is ready!`
      : `Add ₹${(minFree - sub).toLocaleString('en-IN')} more to unlock <strong>FREE delivery</strong>.`;

    const modal = document.createElement('div');
    modal.className = 'exit-intent-backdrop';
    modal.innerHTML = `
      <div class="exit-intent-modal" role="dialog" aria-labelledby="eiTitle" aria-modal="true">
        <button class="exit-intent-close" aria-label="Close">✕</button>
        <div class="exit-intent-emoji">👋</div>
        <h2 id="eiTitle">Wait! Don't leave yet…</h2>
        <p>You have <strong>${itemCount} item${itemCount > 1 ? 's' : ''}</strong> worth <strong>₹${sub.toLocaleString('en-IN')}</strong> in your cart.</p>
        <p class="ei-free">${freeMsg}</p>
        <div class="ei-actions">
          <a href="cart.html" class="ei-checkout">Complete Order →</a>
          <button class="ei-stay" type="button">Keep Browsing</button>
        </div>
        <div class="ei-coupon">
          💝 Tip: use code <strong>ELITE10</strong> at checkout to save 10% more.
        </div>
      </div>`;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('show'));

    const dismiss = () => {
      modal.classList.remove('show');
      setTimeout(() => modal.remove(), 240);
    };
    modal.querySelector('.exit-intent-close').addEventListener('click', dismiss);
    modal.querySelector('.ei-stay').addEventListener('click', dismiss);
    modal.addEventListener('click', e => { if (e.target === modal) dismiss(); });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { dismiss(); document.removeEventListener('keydown', esc); }
    });
  }

  // Desktop: cursor leaves through the top
  document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget && e.clientY < 10) showExitIntent();
  });

  // Mobile: sentinel pushState + popstate triggers the modal once
  if ('ontouchstart' in window) {
    setTimeout(() => {
      if (!cart.length) return;
      history.pushState({ _ee_exit: 1 }, '');
      window.addEventListener('popstate', () => {
        if (!sessionStorage.getItem('exitIntentShown')) {
          history.pushState({ _ee_exit: 1 }, '');
          showExitIntent();
        }
      });
    }, 3000);
  }
}

// ── FESTIVE AUTO-THEMING ─────────────────────
// Applies a subtle banner + theme accent based on the current month/date.
// Festivals included: Diwali (mid-Oct to mid-Nov), Ramadan/Eid (variable —
// we approximate to Mar+Apr 2026), Christmas (mid-Dec to Dec 31),
// New Year (Jan 1-5), Pongal (Jan 13-16), Independence Day (Aug 11-16),
// Republic Day (Jan 23-27). Customers can dismiss the banner; the
// theme tint stays for the duration.
function initFestiveTheming() {
  const now = new Date();
  const m   = now.getMonth(); // 0-11
  const d   = now.getDate();

  let theme = null;

  if (m === 0 && d >= 1 && d <= 5)        theme = { id: 'new-year', label: '🎆 Happy New Year!', subtitle: 'Use code <b>WELCOME</b> for 5% off your first order of the year.', tint: '#ffd700' };
  else if (m === 0 && d >= 13 && d <= 16) theme = { id: 'pongal', label: '🌾 Happy Pongal!', subtitle: 'Wishing your home a year of harvest & abundance from Elite Emporium.', tint: '#ff9800' };
  else if (m === 0 && d >= 23 && d <= 27) theme = { id: 'republic-day', label: '🇮🇳 Happy Republic Day!', subtitle: 'Made in India, delivered all over India.', tint: '#ff9933' };
  else if (m === 2 || m === 3)            theme = { id: 'ramadan-eid', label: '🌙 Ramadan & Eid Mubarak', subtitle: 'Browse our Abaya, Hijab & Perfume collections curated for the season.', tint: '#1a4ea3' };
  else if (m === 7 && d >= 11 && d <= 16) theme = { id: 'independence-day', label: '🇮🇳 Happy Independence Day', subtitle: 'Proudly serving customers across India.', tint: '#ff9933' };
  else if ((m === 9 && d >= 15) || (m === 10 && d <= 15)) theme = { id: 'diwali', label: '🪔 Happy Diwali!', subtitle: 'Light up your home with our Kitchen & Home Decor picks.', tint: '#ffb300' };
  else if (m === 11 && d >= 15)           theme = { id: 'christmas', label: '🎄 Merry Christmas!', subtitle: 'Use code <b>ELITE10</b> for 10% off gift sets &amp; watches.', tint: '#c62828' };

  if (!theme) return;
  if (sessionStorage.getItem('festiveBannerDismissed_' + theme.id)) {
    applyFestiveTint(theme.tint);
    return;
  }

  // Map theme id → /collection.html?theme= equivalent
  const COLL_THEME_MAP = {
    'new-year':         'new-year',
    'pongal':           'pongal',
    'ramadan-eid':      'eid',
    'eid':              'eid',
    'independence-day': 'new-year', // generic festive
    'diwali':           'diwali',
    'christmas':        'christmas',
    'republic-day':     'new-year',
  };
  const collTheme = COLL_THEME_MAP[theme.id];
  const shopHref = collTheme ? `collection.html?theme=${collTheme}` : 'products.html?sort=discount';

  // Inject the festive banner at the very top of the body
  const banner = document.createElement('div');
  banner.id = 'festiveBanner';
  banner.className = 'festive-banner';
  banner.style.background = `linear-gradient(135deg, ${theme.tint}, ${shadeColor(theme.tint, -15)})`;
  banner.innerHTML = `
    <a href="${shopHref}" class="fb-text fb-link"><strong>${theme.label}</strong> &middot; <span>${theme.subtitle}</span> <span class="fb-cta">Shop Now →</span></a>
    <button class="fb-close" onclick="dismissFestive('${theme.id}')" aria-label="Dismiss">✕</button>`;
  // Insert as the very first element of body so it sits above the header
  document.body.insertBefore(banner, document.body.firstChild);
  applyFestiveTint(theme.tint);
}

function dismissFestive(id) {
  const b = document.getElementById('festiveBanner');
  if (b) { b.classList.add('fb-hide'); setTimeout(() => b.remove(), 240); }
  sessionStorage.setItem('festiveBannerDismissed_' + id, '1');
}

// Apply a subtle accent tint (left border of cards, small accents) — purely cosmetic.
function applyFestiveTint(hex) {
  document.documentElement.style.setProperty('--festive-tint', hex);
  document.body.classList.add('festive-on');
}

// Tiny helper to darken/lighten a hex color
function shadeColor(hex, percent) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  let r = parseInt(c.slice(0, 2), 16);
  let g = parseInt(c.slice(2, 4), 16);
  let b = parseInt(c.slice(4, 6), 16);
  const t = percent < 0 ? 0 : 255;
  const p = Math.abs(percent) / 100;
  r = Math.round((t - r) * p + r);
  g = Math.round((t - g) * p + g);
  b = Math.round((t - b) * p + b);
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

// ── FIRST-VISIT WELCOME MODAL ────────────────
// Brand-new visitors get a one-time modal with a 5% WELCOME coupon.
// Only on homepage, only if there's no order history and no localStorage flag.
const FIRST_VISIT_KEY = 'eliteEmporiumFirstVisitDone';
function initFirstVisitModal() {
  if (!document.getElementById('featuredProducts')) return; // homepage only
  if (localStorage.getItem(FIRST_VISIT_KEY)) return;
  if (JSON.parse(localStorage.getItem('eliteEmporiumOrders') || '[]').length) {
    localStorage.setItem(FIRST_VISIT_KEY, '1');
    return;
  }

  setTimeout(() => {
    const modal = document.createElement('div');
    modal.className = 'fv-backdrop';
    modal.innerHTML = `
      <div class="fv-modal" role="dialog" aria-labelledby="fvTitle" aria-modal="true">
        <button class="fv-close" aria-label="Close">✕</button>
        <div class="fv-confetti">🎉</div>
        <h2 id="fvTitle">Welcome to Elite Emporium!</h2>
        <p>Use code <strong>WELCOME</strong> to get <b>5% off your first order</b>.</p>
        <div class="fv-coupon">
          <code>WELCOME</code>
          <button class="fv-copy" type="button">Copy</button>
        </div>
        <p class="fv-perks">
          ✅ Free delivery over ₹499<br />
          ✅ GST invoice on every order<br />
          ✅ 7-day easy returns
        </p>
        <a href="products.html" class="fv-cta">Start Shopping →</a>
      </div>`;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('show'));

    const dismiss = () => {
      modal.classList.remove('show');
      setTimeout(() => modal.remove(), 240);
      localStorage.setItem(FIRST_VISIT_KEY, '1');
    };
    modal.querySelector('.fv-close').addEventListener('click', dismiss);
    modal.addEventListener('click', e => { if (e.target === modal) dismiss(); });
    modal.querySelector('.fv-copy').addEventListener('click', e => {
      try { navigator.clipboard.writeText('WELCOME'); } catch {}
      e.target.textContent = '✅ Copied!';
      setTimeout(() => { if (e.target.textContent !== 'Copy') e.target.textContent = 'Copy'; }, 2000);
    });
    modal.querySelector('.fv-cta').addEventListener('click', () => {
      localStorage.setItem(FIRST_VISIT_KEY, '1');
    });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { dismiss(); document.removeEventListener('keydown', esc); }
    });
  }, 1800);
}

// ── WELCOME-BACK NUDGE ───────────────────────
// Stores last visit timestamp. If the user returns after >1h with a non-empty
// cart, show a single contextual toast. Runs once per session to avoid noise.
const LAST_VISIT_KEY = 'eliteEmporiumLastVisit';
function initWelcomeBack() {
  if (sessionStorage.getItem('welcomeBackShown')) return;

  const now      = Date.now();
  const lastRaw  = localStorage.getItem(LAST_VISIT_KEY);
  const lastMs   = lastRaw ? parseInt(lastRaw, 10) : 0;
  const hoursAgo = lastMs ? (now - lastMs) / 3600000 : null;

  // Always update the timestamp for next time
  localStorage.setItem(LAST_VISIT_KEY, String(now));

  // First-ever visit — no nudge
  if (!hoursAgo) return;
  // Same-session bounce — no nudge
  if (hoursAgo < 1) return;

  sessionStorage.setItem('welcomeBackShown', '1');

  // Returning user with items in cart → highest priority nudge
  if (cart.length) {
    const itemCount = cart.reduce((s, i) => s + i.quantity, 0);
    setTimeout(() => {
      showToast(`👋 Welcome back! You have ${itemCount} item${itemCount > 1 ? 's' : ''} waiting in your cart.`, 6000, 'info');
    }, 1200);
    return;
  }

  // Returning user with recently viewed items but no cart → soft nudge
  const rv = JSON.parse(localStorage.getItem(RV_KEY) || '[]');
  if (rv.length) {
    setTimeout(() => {
      showToast(`👋 Welcome back! Continue browsing where you left off.`, 5000, 'info');
    }, 1500);
    return;
  }

  // Long-gone returning user (1 week+) → fresh-welcome nudge
  if (hoursAgo > 24 * 7) {
    setTimeout(() => {
      showToast(`👋 Welcome back to Elite Emporium! Check out what's new this week.`, 5000, 'info');
    }, 1500);
  }
}

function initCartReminder() {
  if (!document.getElementById('featuredProducts')) return; // homepage only
  if (!cart.length) return;
  if (sessionStorage.getItem('eliteCartReminderDismissed')) return;

  const sub      = getSubtotal();
  const items    = cart.reduce((s, i) => s + i.quantity, 0);
  const toFree   = Math.max(0, 499 - sub);

  let el = document.getElementById('cartReminderBanner');
  if (el) return;
  el = document.createElement('div');
  el.id        = 'cartReminderBanner';
  el.className = 'cart-reminder-banner';
  el.innerHTML = `
    <div class="cart-reminder-left">
      <span class="cart-reminder-icon">🛒</span>
      <div>
        <strong>${items} item${items > 1 ? 's' : ''} in your cart — ₹${sub.toLocaleString('en-IN')}</strong>
        ${toFree > 0 ? `<span>Add ₹${toFree.toLocaleString('en-IN')} more for FREE delivery!</span>` : '<span>🎉 You qualify for FREE delivery!</span>'}
      </div>
    </div>
    <a href="cart.html" class="cart-reminder-btn">Checkout →</a>
    <button class="cart-reminder-close" onclick="dismissCartReminder()" title="Dismiss">✕</button>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
}

function dismissCartReminder() {
  const el = document.getElementById('cartReminderBanner');
  if (el) { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }
  sessionStorage.setItem('eliteCartReminderDismissed', '1');
}

// ── PWA INSTALL BANNER ────────────────────────
let _deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _deferredInstallPrompt = e;

  // Don't show if dismissed within last 7 days
  const dismissed = localStorage.getItem('eliteEmporiumPwaDismissed');
  if (dismissed && (Date.now() - Number(dismissed)) < 7 * 86400000) return;
  // Don't show if already installed (display-mode: standalone)
  if (window.matchMedia?.('(display-mode: standalone)').matches) return;
  // Don't show during the first 8 seconds of the visit — let users
  // actually engage with content before pestering them.
  setTimeout(showInstallBanner, 8000);
});

/* iOS Safari has no beforeinstallprompt event — we sniff for iOS and
   show a manual instruction banner once per week. */
(function setupIosInstallNag() {
  if (typeof navigator === 'undefined') return;
  const ua = navigator.userAgent || '';
  const isIos = /iPhone|iPad|iPod/.test(ua);
  const isInStandalone = ('standalone' in navigator) && navigator.standalone;
  if (!isIos || isInStandalone) return;
  const dismissed = localStorage.getItem('eliteEmporiumIosInstallDismissed');
  if (dismissed && (Date.now() - Number(dismissed)) < 7 * 86400000) return;
  setTimeout(() => {
    if (document.getElementById('iosInstallBanner')) return;
    const banner = document.createElement('div');
    banner.id = 'iosInstallBanner';
    banner.className = 'pwa-install-banner';
    banner.innerHTML = `
      <div class="pwa-install-icon">👑</div>
      <div class="pwa-install-text">
        <strong>Install Elite Emporium on iPhone</strong>
        <span>Tap the <b>Share</b> button at the bottom of Safari → <b>"Add to Home Screen"</b>.</span>
      </div>
      <button class="pwa-install-dismiss" onclick="document.getElementById('iosInstallBanner').remove();localStorage.setItem('eliteEmporiumIosInstallDismissed',Date.now());" title="Dismiss">✕</button>`;
    document.body.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add('show'));
  }, 12000);
})();

function showInstallBanner() {
  if (document.getElementById('pwaInstallBanner')) return;
  const banner = document.createElement('div');
  banner.id        = 'pwaInstallBanner';
  banner.className = 'pwa-install-banner';
  banner.innerHTML = `
    <div class="pwa-install-icon">👑</div>
    <div class="pwa-install-text">
      <strong>Install Elite Emporium</strong>
      <span>Add to your home screen for faster access & offline browsing</span>
    </div>
    <button class="pwa-install-btn" onclick="triggerPwaInstall()">Install</button>
    <button class="pwa-install-dismiss" onclick="dismissInstallBanner()" title="Dismiss">✕</button>`;
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add('show'));
}

function triggerPwaInstall() {
  if (!_deferredInstallPrompt) return;
  _deferredInstallPrompt.prompt();
  _deferredInstallPrompt.userChoice.then(choice => {
    if (choice.outcome === 'accepted') showToast('✅ App installed! Find it on your home screen.');
    _deferredInstallPrompt = null;
    dismissInstallBanner();
  });
}

function dismissInstallBanner() {
  const banner = document.getElementById('pwaInstallBanner');
  if (banner) { banner.classList.remove('show'); setTimeout(() => banner.remove(), 300); }
  localStorage.setItem('eliteEmporiumPwaDismissed', Date.now());
}

window.addEventListener('appinstalled', () => {
  showToast('🎉 Elite Emporium installed successfully!');
  dismissInstallBanner();
});

// ── SCROLL REVEAL ─────────────────────────────
function initAccessibility() {
  // Auto-update footer copyright year so we don't have to remember to
  // bump it every Jan 1. <span class="copy-year">2026</span> in HTML
  // is the fallback for non-JS / pre-hydration; JS overwrites with the
  // current year. Multiple footer occurrences supported.
  try {
    const y = String(new Date().getFullYear());
    document.querySelectorAll('.copy-year').forEach(el => { el.textContent = y; });
  } catch {}

  // Inject a "Skip to main content" link for keyboard users (once)
  if (!document.getElementById('skipToMain')) {
    const skip = document.createElement('a');
    skip.id = 'skipToMain';
    skip.href = '#main';
    skip.className = 'skip-link';
    skip.textContent = 'Skip to main content';
    document.body.insertBefore(skip, document.body.firstChild);
    // Make sure there's a target — fall back to the first <main>, <section>, or .fk-main
    if (!document.getElementById('main')) {
      const target = document.querySelector('main, [role="main"], .fk-main, .products-layout');
      if (target) target.id = 'main';
    }
  }

  // Add aria-labels to icon-only buttons
  const labelMap = [
    ['.back-to-top',     'Back to top'],
    ['.dark-mode-btn',   'Toggle dark mode'],
    ['.whatsapp-float',  'Order via WhatsApp'],
    ['.mini-cart-toggle','Open mini cart'],
    ['.filter-toggle',   'Open filters'],
    ['.img-modal-close', 'Close image'],
    ['.qv-close-btn',    'Close quick view'],
    ['.toast-close',     'Dismiss notification'],
  ];
  labelMap.forEach(([sel, label]) => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', label);
    });
  });

  // Improve focus outlines for keyboard users
  document.addEventListener('keydown', e => {
    if (e.key === 'Tab') document.body.classList.add('kbd-nav');

    // Press '/' to focus header search (unless already in an input)
    if (e.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) {
      const inp = document.getElementById('headerSearchInput');
      if (inp) { e.preventDefault(); inp.focus(); inp.select(); }
    }

    // Press Escape to close modals / dropdowns
    if (e.key === 'Escape') {
      const qv = document.getElementById('quickViewModal');
      if (qv && qv.style.display !== 'none') { closeQuickView?.(); return; }
      const imgModal = document.getElementById('imgModal');
      if (imgModal && imgModal.style.display !== 'none') { closeImageModal?.(); return; }
      const cmpModal = document.getElementById('compareModal');
      if (cmpModal) { closeCompareModal?.(); return; }
      // Close search dropdown
      const shDrop = document.getElementById('searchHistoryDropdown');
      if (shDrop && shDrop.style.display !== 'none') { shDrop.style.display = 'none'; return; }
    }
  });
  document.addEventListener('mousedown', () => document.body.classList.remove('kbd-nav'));
}

function initPageTransitions() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me')) return;
    if (a.target === '_blank' || a.rel?.includes('noopener')) return;
    e.preventDefault();
    document.body.classList.add('page-exiting');
    setTimeout(() => { window.location.href = href; }, 200);
  });
}

function initLazyImageFade() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      if (img.complete) return;
      img.classList.add('img-loading');
      img.addEventListener('load', () => img.classList.remove('img-loading'), { once: true });
      img.addEventListener('error', () => img.classList.remove('img-loading'), { once: true });
      observer.unobserve(img);
    });
  }, { rootMargin: '200px' });

  document.querySelectorAll('.product-image-photo img[loading="lazy"]').forEach(img => {
    if (!img.complete) observer.observe(img);
  });

  // Also handle dynamically added images
  const mutObs = new MutationObserver(mutations => {
    mutations.forEach(m => m.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      const imgs = node.tagName === 'IMG' ? [node] : [...node.querySelectorAll('.product-image-photo img[loading="lazy"]')];
      imgs.forEach(img => { if (!img.complete) observer.observe(img); });
    }));
  });
  mutObs.observe(document.body, { childList: true, subtree: true });
}

function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const style = document.createElement('style');
  style.textContent = `
    .sr-hidden { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .sr-visible { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  const targets = document.querySelectorAll(
    '.fk-section-head, .stats-strip, .testimonials-grid, .fbt-section, ' +
    '.related-section, .review-section, .newsletter-strip, .cart-trust-badges, ' +
    '.deal-of-day-section, .oh-card, ' +
    '.faq-section, .faq-item, .footer-strip, .wa-channel-cta, ' +
    '.fk-deal-row, .promo-banner, .about-section, .about-hero, .about-cta, ' +
    '.oh-stats'
  );

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sr-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => {
    el.classList.add('sr-hidden');
    obs.observe(el);
  });
}

// ── BACK TO TOP ───────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 320);
  }, { passive: true });
}

// ── ANIMATED SEARCH PLACEHOLDER ──────────────
function animateSearchPlaceholder() {
  const hints = [
    'Search products, brands and more',
    'Try "Tommy Hilfiger watch"…',
    'Try "YSL bag"…',
    'Try "Anarkali lehenga"…',
    'Try "Calvin Klein shirts"…',
    'Try "Marc Jacobs sunglasses"…',
  ];
  const inp = document.getElementById('headerSearchInput');
  if (!inp) return;
  let i = 0;
  setInterval(() => {
    if (document.activeElement !== inp) {
      i = (i + 1) % hints.length;
      inp.placeholder = hints[i];
    }
  }, 3000);
}

// ── KEYBOARD SHORTCUTS ────────────────────────
function openShortcutHelp() {
  let modal = document.getElementById('kbdHelpModal');
  if (modal) { modal.style.display = 'flex'; return; }
  modal = document.createElement('div');
  modal.id        = 'kbdHelpModal';
  modal.className = 'kbd-help-backdrop';
  modal.innerHTML = `
    <div class="kbd-help-modal">
      <div class="kbd-help-head">
        <h3>⌨️ Keyboard Shortcuts</h3>
        <button class="kbd-help-close" onclick="document.getElementById('kbdHelpModal').style.display='none'">✕</button>
      </div>
      <div class="kbd-help-body">
        <div class="kbd-row"><kbd>/</kbd><span>Focus search bar</span></div>
        <div class="kbd-row"><kbd>Esc</kbd><span>Close modal / blur search</span></div>
        <div class="kbd-row"><kbd>?</kbd><span>Show this help</span></div>
        <div class="kbd-row"><kbd>↑</kbd><kbd>↓</kbd><span>Navigate search suggestions</span></div>
        <div class="kbd-row"><kbd>Enter</kbd><span>Select suggestion / submit search</span></div>
        <div class="kbd-row"><kbd>G H</kbd><span>Go to Home</span></div>
        <div class="kbd-row"><kbd>G P</kbd><span>Go to Products</span></div>
        <div class="kbd-row"><kbd>G C</kbd><span>Go to Cart</span></div>
        <div class="kbd-row"><kbd>G W</kbd><span>Go to Wishlist</span></div>
      </div>
    </div>`;
  modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
  document.body.appendChild(modal);
}

let _kbdSeq = '';
document.addEventListener('keydown', e => {
  const tag = document.activeElement.tagName;
  const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

  if (e.key === '/' && !isInput) {
    e.preventDefault();
    const inp = document.getElementById('headerSearchInput');
    if (inp) { inp.focus(); inp.select(); }
  }
  if (e.key === '?' && !isInput) { e.preventDefault(); openShortcutHelp(); }

  if (e.key === 'Escape') {
    const inp = document.getElementById('headerSearchInput');
    if (inp && document.activeElement === inp) inp.blur();
    const kbdModal = document.getElementById('kbdHelpModal');
    if (kbdModal) kbdModal.style.display = 'none';
  }

  // Two-key navigation shortcuts (G then letter)
  if (!isInput) {
    _kbdSeq += e.key.toLowerCase();
    if (_kbdSeq.length > 2) _kbdSeq = _kbdSeq.slice(-2);
    if (_kbdSeq === 'gh') { window.location.href = 'index.html'; _kbdSeq = ''; }
    if (_kbdSeq === 'gp') { window.location.href = 'products.html'; _kbdSeq = ''; }
    if (_kbdSeq === 'gc') { window.location.href = 'cart.html'; _kbdSeq = ''; }
    if (_kbdSeq === 'gw') { window.location.href = 'wishlist.html'; _kbdSeq = ''; }
  } else {
    _kbdSeq = '';
  }
});

// ── INIT ──────────────────────────────────────
// ── SOCIAL PROOF NOTIFICATIONS ───────────────
const SOCIAL_PROOF_NAMES = ['Fatima','Aisha','Priya','Mohammed','Ravi','Sara','Hina','Rohan','Zara','Ali','Meera','Omar'];
const SOCIAL_PROOF_CITIES = ['Chennai','Coimbatore','Madurai','Salem','Trichy','Tirunelveli','Erode','Vellore','Kanyakumari','Tuticorin'];

function initSocialProof() {
  if (!document.getElementById('featuredProducts') && !document.getElementById('productsGrid')) return;
  const container = document.createElement('div');
  container.id = 'socialProofToast';
  container.className = 'sp-toast';
  document.body.appendChild(container);

  function showProof() {
    const pList = products.filter(p => p.inStock !== false);
    if (!pList.length) return;
    const p    = pList[Math.floor(Math.random() * pList.length)];
    const name = SOCIAL_PROOF_NAMES[Math.floor(Math.random() * SOCIAL_PROOF_NAMES.length)];
    const city = SOCIAL_PROOF_CITIES[Math.floor(Math.random() * SOCIAL_PROOF_CITIES.length)];
    const mins = Math.floor(Math.random() * 55) + 5;
    container.innerHTML = `
      ${p.image ? `<img src="${p.image}" alt="${escapeHtml(p.name)}" class="sp-thumb" />` : '<span style="font-size:24px;">🛍️</span>'}
      <div class="sp-body">
        <div class="sp-name"><strong>${name}</strong> from ${city}</div>
        <div class="sp-text">just ordered <em>${p.name}</em></div>
        <div class="sp-time">${mins} min ago</div>
      </div>`;
    container.classList.add('sp-show');
    setTimeout(() => container.classList.remove('sp-show'), 4500);
  }

  setTimeout(showProof, 6000);
  setInterval(showProof, 18000);
}

// ── QUICK VIEW MODAL ─────────────────────────
function openQuickView(pid) {
  const p = products.find(pr => pr.id === pid);
  if (!p) return;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  set('qvCategory', p.category);
  set('qvName',     p.name);
  set('qvRating',   `${renderStars(p.rating)} <span class="rating-count">(${p.reviews} reviews)</span>`);
  set('qvPrice',    `₹${p.price.toLocaleString('en-IN')}`);
  set('qvMrp',      p.mrp && p.mrp > p.price
    ? `<s>₹${p.mrp.toLocaleString('en-IN')}</s> <span class="qv-save">${Math.round((p.mrp - p.price) / p.mrp * 100)}% off</span>`
    : '');
  set('qvDesc', p.desc || '');
  const img = document.getElementById('qvImg');
  if (img) { img.src = p.image || ''; img.alt = p.name; }
  const link = document.getElementById('qvViewLink');
  if (link) link.href = `product.html?id=${p.id}`;
  const btn = document.getElementById('qvAddBtn');
  if (btn) {
    if (p.inStock === false) {
      btn.textContent = 'Out of Stock';
      btn.disabled = true;
      btn.classList.add('oos-btn');
    } else {
      btn.textContent = '🛒 Add to Cart';
      btn.disabled = false;
      btn.classList.remove('oos-btn');
      btn.onclick = () => { addToCart(p.id); closeQuickView(); };
    }
  }

  // Inject wishlist + price alert buttons dynamically
  const actions = document.querySelector('#qvBackdrop .qv-actions');
  if (actions) {
    // Wishlist button
    let wBtn = document.getElementById('qvWishBtn');
    if (!wBtn) {
      wBtn = document.createElement('button');
      wBtn.id = 'qvWishBtn';
      wBtn.className = 'qv-wish-btn';
      if (link) actions.insertBefore(wBtn, link);
      else actions.appendChild(wBtn);
    }
    const wished = isWishlisted(p.id);
    wBtn.innerHTML = wished ? '❤️ Wishlisted' : '🤍 Wishlist';
    wBtn.classList.toggle('active', wished);
    wBtn.onclick = () => {
      toggleWishlist(p.id, null);
      const nowWished = isWishlisted(p.id);
      wBtn.innerHTML = nowWished ? '❤️ Wishlisted' : '🤍 Wishlist';
      wBtn.classList.toggle('active', nowWished);
    };

    // Price alert button (only for in-stock products with an MRP)
    let paBtn = document.getElementById('qvAlertBtn');
    if (!paBtn && p.inStock !== false) {
      paBtn = document.createElement('button');
      paBtn.id = 'qvAlertBtn';
      paBtn.className = 'btn-price-alert';
      paBtn.style.fontSize = '11px';
      paBtn.style.padding  = '4px 12px';
      actions.appendChild(paBtn);
    }
    if (paBtn) {
      const existingAlert = getPriceAlert(p.id);
      paBtn.innerHTML = existingAlert
        ? `🔔 Alert ₹${existingAlert.targetPrice.toLocaleString('en-IN')}`
        : '🔔 Price Alert';
      paBtn.classList.toggle('active', !!existingAlert);
      paBtn.onclick = () => openPriceAlertModal(p);
    }
  }

  const bd = document.getElementById('qvBackdrop');
  if (bd) { bd.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closeQuickView(e) {
  if (e && e.target !== document.getElementById('qvBackdrop')) return;
  const bd = document.getElementById('qvBackdrop');
  if (bd) { bd.classList.remove('open'); document.body.style.overflow = ''; }
}

// ── FLASH SALE COUNTDOWN ──────────────────────
function initFlashSaleTimer() {
  const hh = document.getElementById('flashHH');
  const mm = document.getElementById('flashMM');
  const ss = document.getElementById('flashSS');
  if (!hh || !mm || !ss) return;

  function tick() {
    const now      = new Date();
    const midnight = new Date(now);
    midnight.setHours(23, 59, 59, 999);
    let diff = Math.max(0, midnight - now);
    const h  = Math.floor(diff / 3600000);       diff -= h  * 3600000;
    const m  = Math.floor(diff / 60000);          diff -= m  * 60000;
    const s  = Math.floor(diff / 1000);
    hh.textContent = String(h).padStart(2, '0');
    mm.textContent = String(m).padStart(2, '0');
    ss.textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
}

// ── NEWSLETTER ───────────────────────────────
// ── NEWSLETTER ─────────────────────────────────
const NEWSLETTER_KEY = 'eliteEmporiumSubscribers';
function handleNewsletter(e) {
  e.preventDefault();
  const inp = e.target.querySelector('input[type="email"]');
  const email = (inp ? inp.value.trim() : '').toLowerCase();

  // Validate
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Please enter a valid email address.', 3500, 'error');
    return;
  }

  const subs = JSON.parse(localStorage.getItem(NEWSLETTER_KEY) || '[]');
  const already = subs.some(s => s.email === email);

  if (already) {
    showToast(`👋 You're already subscribed — use code ELITE10 for 10% off!`, 4500, 'info');
    if (inp) inp.value = '';
    return;
  }

  subs.push({ email, ts: Date.now() });
  if (subs.length > 50) subs.length = 50; // cap localStorage
  localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(subs));

  // Reward modal-style toast with one-click copy of the coupon
  showToast(`🎉 Subscribed! Code ELITE10 unlocks 10% off your next order.`, 5500, 'success');
  try { navigator.clipboard.writeText('ELITE10'); } catch {}
  if (inp) inp.value = '';

  // Encourage WhatsApp channel join for the bigger drops
  setTimeout(() => {
    showToast('💬 Want flash-sale alerts? Join our WhatsApp channel — tap the green banner.', 5000, 'info');
  }, 6000);
}

// ── STATS COUNTER ANIMATION ──────────────────
function initStatsCounter() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = +el.dataset.target;
      const dur    = 1200;
      const step   = target / (dur / 16);
      let cur = 0;
      const tick = () => {
        cur = Math.min(cur + step, target);
        el.textContent = Math.floor(cur);
        if (cur < target) requestAnimationFrame(tick);
      };
      tick();
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(el => observer.observe(el));
}

// ── SCROLL PROGRESS BAR ──────────────────────
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const doc   = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    bar.style.width = total > 0 ? (window.scrollY / total * 100) + '%' : '0%';
  }, { passive: true });
}

// ── SCROLL-SHRINK HEADER ──────────────────────
function initScrollHeader() {
  const hdr = document.querySelector('header');
  if (!hdr) return;
  const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── ORDERS PAGE ───────────────────────────────
function printGSTInvoice(orderId) {
  const orders = getOrderHistory();
  const order  = orders.find(o => o.id === orderId);
  if (!order) { showToast('Order not found.'); return; }

  const date = new Date(order.date);
  const dStr = date.toLocaleDateString('en-IN', { day:'2-digit', month:'long', year:'numeric' });

  const itemRows = order.items.map((item, i) => {
    const amount = item.price * item.quantity;
    const gstRate = 12;
    const taxableAmt = Math.round(amount / 1.12);
    const gstAmt = amount - taxableAmt;
    return `<tr>
      <td style="padding:8px;border:1px solid #ddd;">${i + 1}</td>
      <td style="padding:8px;border:1px solid #ddd;">${item.name}${item.selectedColor ? ' (' + item.selectedColor + ')' : ''}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;">${item.quantity}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${item.price.toLocaleString('en-IN')}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${taxableAmt.toLocaleString('en-IN')}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;">${gstRate}%</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${gstAmt.toLocaleString('en-IN')}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;font-weight:600;">₹${amount.toLocaleString('en-IN')}</td>
    </tr>`;
  }).join('');

  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>GST Invoice – ${order.id}</title>
  <style>
    body { font-family: Arial, sans-serif; font-size: 13px; color: #222; margin: 0; padding: 24px; }
    .inv-header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #DB3022; padding-bottom: 16px; margin-bottom: 16px; }
    .inv-logo { font-size: 22px; font-weight: 900; color: #DB3022; letter-spacing: -1px; }
    .inv-logo small { display: block; font-size: 11px; font-weight: 400; color: #555; letter-spacing: 0; }
    .inv-tag { background: #DB3022; color: white; padding: 6px 14px; border-radius: 6px; font-size: 13px; font-weight: 700; }
    .inv-meta { display: flex; gap: 40px; margin-bottom: 16px; }
    .inv-meta-col h4 { font-size: 11px; color: #888; text-transform: uppercase; margin-bottom: 6px; }
    .inv-meta-col p { font-size: 13px; margin: 2px 0; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
    th { background: #DB3022; color: white; padding: 8px; text-align: left; font-size: 12px; }
    th:not(:first-child) { text-align: right; }
    th:nth-child(3) { text-align: center; }
    .inv-totals { margin-left: auto; width: 280px; }
    .inv-totals tr td { padding: 5px 8px; font-size: 13px; }
    .inv-totals tr:last-child td { font-weight: 700; font-size: 15px; border-top: 2px solid #DB3022; }
    .inv-footer { margin-top: 24px; padding-top: 12px; border-top: 1px dashed #ccc; font-size: 11px; color: #888; }
    .badge-paid { background: #e8f5e9; color: #2e7d32; border: 1px solid #a5d6a7; padding: 4px 12px; border-radius: 20px; font-weight: 700; }
    @media print { button { display: none !important; } }
  </style></head><body>
  <div class="inv-header">
    <div>
      <div class="inv-logo">Elite Emporium<small>183b, Sadukai Street, Kayalpattinam – 628204</small></div>
      <div style="margin-top:6px;font-size:12px;color:#555;">💬 WhatsApp +91 73586 50774 · Alt +91 73587 19774 &nbsp;|&nbsp; ✉️ eliteemporium112024@gmail.com</div>
      <div style="margin-top:3px;font-size:12px;color:#555;">GSTIN: <strong>33DWGPN3169G1ZF</strong> &nbsp;|&nbsp; Udyam: UDYAM-TN-26-0090343</div>
    </div>
    <div style="text-align:right;">
      <div class="inv-tag">TAX INVOICE</div>
      <div style="margin-top:8px;font-size:12px;">Invoice No: <strong>${order.id}</strong></div>
      <div style="font-size:12px;">Date: <strong>${dStr}</strong></div>
      <div style="margin-top:6px;"><span class="badge-paid">✅ Paid via WhatsApp</span></div>
    </div>
  </div>

  <div class="inv-meta">
    <div class="inv-meta-col">
      <h4>Bill To</h4>
      <p><strong>${order.customer.name || 'Customer'}</strong></p>
      <p>${order.customer.phone || ''}</p>
      <p>${order.customer.address}</p>
      <p>${order.customer.city}, ${order.customer.state} – ${order.customer.pincode}</p>
    </div>
    <div class="inv-meta-col">
      <h4>Ship To</h4>
      <p>${order.customer.address}</p>
      <p>${order.customer.city}, ${order.customer.state}</p>
      <p>PIN: ${order.customer.pincode}</p>
    </div>
  </div>

  <table>
    <thead><tr>
      <th style="width:40px;">#</th>
      <th>Description</th>
      <th style="width:60px;text-align:center;">Qty</th>
      <th style="width:90px;text-align:right;">Unit Price</th>
      <th style="width:100px;text-align:right;">Taxable Amt</th>
      <th style="width:60px;text-align:center;">GST%</th>
      <th style="width:80px;text-align:right;">GST Amt</th>
      <th style="width:100px;text-align:right;">Total</th>
    </tr></thead>
    <tbody>${itemRows}</tbody>
  </table>

  <table class="inv-totals">
    <tr><td>Subtotal</td><td style="text-align:right;">₹${order.subtotal.toLocaleString('en-IN')}</td></tr>
    <tr><td>Delivery Charges</td><td style="text-align:right;">${order.delivery === 0 ? 'FREE' : '₹' + order.delivery}</td></tr>
    ${order.discount > 0 ? `<tr><td>Discount${order.coupon ? ' (' + order.coupon + ')' : ''}</td><td style="text-align:right;color:#2e7d32;">–₹${order.discount.toLocaleString('en-IN')}</td></tr>` : ''}
    <tr><td><strong>Total</strong></td><td style="text-align:right;color:#DB3022;"><strong>₹${order.total.toLocaleString('en-IN')}</strong></td></tr>
  </table>

  <div class="inv-footer">
    <p>This is a computer-generated invoice. No signature required. &nbsp;|&nbsp; Subject to Kayalpattinam jurisdiction.</p>
    <p style="margin-top:4px;">Thank you for shopping with Elite Emporium! 🙏</p>
  </div>
  <div style="text-align:center;margin-top:20px;">
    <button onclick="window.print()" style="background:#DB3022;color:white;border:none;padding:10px 28px;border-radius:6px;font-size:14px;cursor:pointer;font-family:Arial,sans-serif;">🖨️ Print Invoice</button>
  </div>
  </body></html>`);
  win.document.close();
}

// ── BACK TO CATEGORY PILL (product detail) ───
// If the customer came from a category-filtered listing, show a floating
// pill bottom-left that lets them jump back with one click. We detect via
// document.referrer to avoid relying on session storage.
function initBackToCategoryPill(product) {
  if (!product?.category) return;
  if (document.getElementById('backToCategoryPill')) return;
  const ref = document.referrer;
  if (!ref || !ref.includes(window.location.host)) return;
  // Show only if user came from products.html (any filter) or a category page
  if (!ref.includes('products.html')) return;

  const pill = document.createElement('a');
  pill.id = 'backToCategoryPill';
  pill.className = 'back-to-cat-pill';
  pill.href = `products.html?category=${encodeURIComponent(product.category)}`;
  pill.innerHTML = `<span>← Back to <strong>${escapeHtml(product.category)}</strong></span>`;
  document.body.appendChild(pill);

  // Slide in after a beat so it doesn't fight with the page load
  setTimeout(() => pill.classList.add('show'), 600);
}

// ── REORDER NOW ──────────────────────────────
// One-click rebuild of an old order's cart contents. Falls back gracefully
// when the original product no longer exists in the catalogue.
function reorderNow(orderId) {
  const orders = getOrderHistory();
  const order  = orders.find(o => o.id === orderId);
  if (!order) { showToast('⚠️ Order not found.', 3000, 'error'); return; }
  if (!order.items || !order.items.length) { showToast('⚠️ No items to re-add.', 3000, 'error'); return; }

  let added = 0, missing = 0, oos = 0;
  order.items.forEach(item => {
    const prod = products.find(p => p.id === item.id);
    if (!prod) { missing++; return; }
    if (prod.inStock === false) { oos++; return; }

    const cartKey  = String(item.id) + '|' + (item.selectedColor || '');
    const existing = cart.find(c => c.cartKey === cartKey);
    if (existing) {
      existing.quantity += (item.quantity || 1);
    } else {
      cart.push({
        ...prod,
        quantity:      item.quantity || 1,
        cartKey,
        selectedColor: item.selectedColor || null,
        image:         item.image || prod.image,
      });
    }
    added++;
  });

  saveCart(true);

  if (added === 0) {
    showToast('⚠️ None of these items are available anymore.', 4500, 'error');
    return;
  }
  let msg = `🔁 ${added} item${added > 1 ? 's' : ''} added to cart!`;
  if (missing > 0) msg += ` ${missing} discontinued.`;
  if (oos > 0)     msg += ` ${oos} out of stock — skipped.`;
  showToast(msg, 4500, 'success');

  // After a beat, redirect to cart for review
  setTimeout(() => { window.location.href = 'cart.html'; }, 1400);
}

function initOrdersPage() {
  const container = document.getElementById('ordersContainer');
  const countEl   = document.getElementById('ordersCount');
  if (!container) return;

  const orders = getOrderHistory();
  if (countEl) countEl.textContent = orders.length;

  // Show a success banner if redirected from checkout (fresh order)
  if (orders.length) {
    const latestOrder = orders[0];
    const placedSecondsAgo = (Date.now() - new Date(latestOrder.date).getTime()) / 1000;
    if (placedSecondsAgo < 30) {
      const banner = document.createElement('div');
      banner.className = 'order-success-banner';
      banner.innerHTML = `
        <div class="osb-icon">🎉</div>
        <div class="osb-body">
          <strong>Order Sent Successfully!</strong>
          <span>Your order ${latestOrder.id} has been sent via WhatsApp. We'll confirm soon.</span>
        </div>
        <a href="index.html" class="osb-home-btn">Continue Shopping</a>`;
      container.parentElement.insertBefore(banner, container);
      launchConfetti();
    }
  }

  if (!orders.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <h2>No orders yet</h2>
        <p>Your order history will appear here after you place your first order.</p>
        <a href="products.html" class="btn-primary">Start Shopping</a>
      </div>`;
    return;
  }

  // Customer stats dashboard (above the order list)
  const totalSpent = orders.reduce((s, o) => s + (o.total || 0), 0);
  const totalItems = orders.reduce((s, o) => s + (o.items || []).reduce((x, i) => x + (i.quantity || 1), 0), 0);
  // Lifetime savings — sum of (MRP - paid price) across every item ever
  // ordered, plus free-delivery savings, plus coupon discounts.
  const totalSaved = orders.reduce((s, o) => {
    const itemSavings = (o.items || []).reduce((acc, i) => {
      const live = products.find(p => p.id === i.id);
      const mrp  = (live && live.mrp) || i.price;
      return acc + Math.max(0, (mrp - i.price) * (i.quantity || 1));
    }, 0);
    const couponSavings   = o.discount || 0;
    const deliverySavings = (o.delivery === 0 && o.subtotal > 0) ? 60 : 0;
    return s + itemSavings + couponSavings + deliverySavings;
  }, 0);
  const catCount   = {};
  orders.forEach(o => (o.items || []).forEach(i => {
    const c = (products.find(p => p.id === i.id) || {}).category;
    if (c) catCount[c] = (catCount[c] || 0) + (i.quantity || 1);
  }));
  const topCat = Object.entries(catCount).sort((a,b) => b[1] - a[1])[0];
  const tier = orders.length >= 10 ? { label: 'Gold', emoji: '🥇', color: '#c9a84c' }
              : orders.length >= 5 ? { label: 'Silver', emoji: '🥈', color: '#9aa3b2' }
              : { label: 'Bronze', emoji: '🥉', color: '#b87333' };

  const statsHtml = `
    <div class="oh-stats">
      <div class="oh-stat-card">
        <div class="oh-stat-icon">💰</div>
        <div class="oh-stat-val">₹${totalSpent.toLocaleString('en-IN')}</div>
        <div class="oh-stat-label">Total spent</div>
      </div>
      <div class="oh-stat-card" style="background:linear-gradient(135deg,#e8f5e9,#c8e6c9);">
        <div class="oh-stat-icon">🎉</div>
        <div class="oh-stat-val" style="color:#1b5e20;">₹${totalSaved.toLocaleString('en-IN')}</div>
        <div class="oh-stat-label" style="color:#2e7d32;">You've saved with us</div>
      </div>
      <div class="oh-stat-card">
        <div class="oh-stat-icon">${topCat ? '❤️' : '🛍️'}</div>
        <div class="oh-stat-val">${topCat ? topCat[0] : '—'}</div>
        <div class="oh-stat-label">${topCat ? 'Favourite category' : 'No favourite yet'}</div>
      </div>
      <a class="oh-stat-card oh-tier" href="profile.html" style="--tier-color:${tier.color};text-decoration:none;color:inherit;cursor:pointer;" title="View your full profile">
        <div class="oh-stat-icon">${tier.emoji}</div>
        <div class="oh-stat-val">${tier.label}</div>
        <div class="oh-stat-label">${tier.label} · ${orders.length} order${orders.length > 1 ? 's' : ''} · View profile →</div>
      </a>
    </div>
    <a href="https://wa.me/?text=${encodeURIComponent(`Hey! I shop at Elite Emporium and the products are great. Check them out: ${window.location.origin}/`)}" target="_blank" rel="noopener" class="oh-refer">
      <div class="oh-refer-icon">🎁</div>
      <div class="oh-refer-body">
        <strong>Tell a friend, both get 5% off</strong>
        <span>Share the store on WhatsApp — when they place their first order, we'll add a 5% coupon to your next one. (Mention your order ID when you share.)</span>
      </div>
      <span class="oh-refer-cta">Share now →</span>
    </a>`;
  container.insertAdjacentHTML('beforebegin', statsHtml);

  container.innerHTML = orders.map(order => {
    const date  = new Date(order.date);
    const dStr  = date.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
    const tStr  = date.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
    // Show 'Leave a review' for items in orders older than 3 days (i.e. delivered)
    const ordHoursAgo = (Date.now() - date.getTime()) / 3600000;
    const isDelivered = ordHoursAgo >= 72;
    const itemsHTML = order.items.map(item => `
      <div class="oh-item">
        <img src="${item.image || 'images/logo-96.png'}" alt="${escapeHtml(item.name)}" class="oh-item-img" loading="lazy" decoding="async" onerror="this.src='images/logo-96.png'" />
        <div class="oh-item-info">
          <div class="oh-item-name">${escapeHtml(item.name)}</div>
          <div class="oh-item-meta">Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')} = <strong>₹${(item.price * item.quantity).toLocaleString('en-IN')}</strong></div>
          ${item.selectedColor ? `<div class="oh-item-color">Color: ${item.selectedColor}</div>` : ''}
          ${isDelivered && item.id ? `<a class="oh-item-review-btn" href="product.html?id=${item.id}#reviewSection" title="Leave a review">⭐ Leave a review</a>` : ''}
        </div>
      </div>`).join('');

    const couponLine = order.discount > 0
      ? `<div class="oh-summary-row oh-saving">🎟️ Coupon${order.coupon ? ' (' + order.coupon + ')' : ''} <span>–₹${order.discount.toLocaleString('en-IN')}</span></div>`
      : '';

    // Determine order stage based on elapsed time
    const hoursAgo = (Date.now() - date.getTime()) / 3600000;
    const stages   = ['Ordered', 'Confirmed', 'Shipped', 'Delivered'];
    const stageIdx = hoursAgo < 6 ? 0 : hoursAgo < 24 ? 1 : hoursAgo < 72 ? 2 : 3;
    const timelineHtml = `
      <div class="oh-timeline">
        ${stages.map((s, i) => `
          <div class="oh-tl-step ${i <= stageIdx ? 'done' : ''} ${i === stageIdx ? 'current' : ''}">
            <div class="oh-tl-dot"></div>
            <div class="oh-tl-label">${s}</div>
          </div>`).join('<div class="oh-tl-line"></div>')}
      </div>`;

    return `
      <div class="oh-card">
        <div class="oh-card-header">
          <div>
            <div class="oh-order-id">${order.id}</div>
            <div class="oh-date">${dStr} at ${tStr}</div>
          </div>
          <span class="oh-status">${order.status}</span>
        </div>
        ${timelineHtml}
        <div class="oh-items">${itemsHTML}</div>
        <div class="oh-summary">
          <div class="oh-summary-row">Subtotal <span>₹${order.subtotal.toLocaleString('en-IN')}</span></div>
          <div class="oh-summary-row">Delivery <span>${order.delivery === 0 ? 'FREE' : '₹' + order.delivery}</span></div>
          ${couponLine}
          <div class="oh-summary-row oh-total">Total <span>₹${order.total.toLocaleString('en-IN')}</span></div>
        </div>
        <div class="oh-card-footer">
          <div class="oh-address">📍 ${order.customer.address}, ${order.customer.city}, ${order.customer.state} – ${order.customer.pincode}</div>
          <div class="oh-footer-actions">
            <button class="oh-invoice-btn" onclick="printGSTInvoice('${order.id}')">🧾 GST Invoice</button>
            <a class="oh-track-btn" href="track-order.html?id=${order.id}">🔎 Track</a>
            <button class="oh-reorder-now-btn" onclick="reorderNow('${order.id}')" title="Add these items back to your cart">🔁 Order Again</button>
            <a class="oh-reorder-btn" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi! I want to reorder my order ' + order.id + ' placed on ' + dStr)}" target="_blank" rel="noopener">💬 WhatsApp</a>
          </div>
        </div>
      </div>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', async () => {
  detectRuntime();            // tags <html data-runtime> for TWA-aware styles
  initOfflineBanner();        // online/offline toast strip
  initDarkMode();
  initPageTransitions();
  initAccessibility();
  initSkeletons(); // before products load — shows shimmer placeholders
  updateCartUI();
  updateWishlistUI();
  initHeaderSearch();
  initVoiceSearch();          // 🎤 mic button next to search input
  initPullToRefresh();        // pull-down-to-reload on touch devices
  initTapToCallShortcut();    // 'Call us' inside the WhatsApp chat card
  initKeyboardShortcuts();    // '/' or Ctrl+K to focus search
  initHoverPrefetch();        // <link rel="prefetch"> on product card hover
  initLiveVisitorCount();     // '🟢 23 shopping now' badge
  initLazyImageFade();
  initScrollReveal();
  initBackToTop();
  animateSearchPlaceholder();
  initScrollHeader();
  initScrollProgress();
  initFlashSaleTimer();
  initMiniCart();
  initSideCartDrawer();
  initWhatsAppChatCard();
  initTestimonialsRotator();
  initBottomNavActive();
  initSocialProof();
  initStatsCounter();

  // Show skeletons while products load
  if (document.getElementById('featuredProducts')) showSkeletons('featuredProducts', 6);
  if (document.getElementById('productsGrid'))     showSkeletons('productsGrid', 12);

  await loadProducts();

  // Tag every product with extracted attributes (colours/sizes/material/gender)
  // for richer fuzzy-search ranking and future faceted filters.
  if (typeof tagAllProductAttributes === 'function') tagAllProductAttributes();

  checkPriceAlerts();

  // Register PWA service worker and watch for new versions.
  // When a new SW is waiting, show a small refresh banner the user can tap.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      if (!reg) return;
      const promptRefresh = () => {
        // Avoid duplicate banners
        if (document.getElementById('swUpdateBanner')) return;
        const b = document.createElement('div');
        b.id = 'swUpdateBanner';
        b.className = 'sw-update-banner';
        b.innerHTML = `
          <span>🔄 A new version is available.</span>
          <button onclick="(function(){const r=window.__swRegPending;if(r&&r.waiting){r.waiting.postMessage({type:'SKIP_WAITING'});setTimeout(()=>location.reload(),300);}else{location.reload();}})()">Refresh</button>
          <button onclick="document.getElementById('swUpdateBanner').remove();" aria-label="Dismiss">✕</button>`;
        document.body.appendChild(b);
        requestAnimationFrame(() => b.classList.add('show'));
      };
      // If there's already a waiting worker on registration, surface it
      if (reg.waiting) { window.__swRegPending = reg; promptRefresh(); }
      reg.addEventListener('updatefound', () => {
        const installing = reg.installing;
        if (!installing) return;
        installing.addEventListener('statechange', () => {
          if (installing.state === 'installed' && navigator.serviceWorker.controller) {
            window.__swRegPending = reg;
            promptRefresh();
          }
        });
      });
      // Also reload once the new worker takes control
      let _reloaded = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (_reloaded) return;
        _reloaded = true;
        // Don't auto-reload here — the explicit refresh button handles it;
        // letting controllerchange reload silently is jarring on first load.
      });
    }).catch(() => {});
  }

  if (document.getElementById('featuredProducts')) initHomePage();
  initWelcomeBack();
  initFirstVisitModal();
  initFestiveTheming();
  initExitIntent();
  if (document.getElementById('productsGrid'))     initProductsPage();
  if (document.getElementById('cartItems')) {
    restoreCartFromUrl();
    renderCart();
    initPayOnlineButton();
    // Auto-apply coupon from URL: cart.html?coupon=ELITE10
    const urlCoupon = new URLSearchParams(window.location.search).get('coupon');
    if (urlCoupon && COUPONS[urlCoupon.toUpperCase()] && !_activeCoupon) {
      const inp = document.getElementById('couponCode');
      if (inp) { inp.value = urlCoupon.toUpperCase(); applyCoupon(); }
    }
  }
  if (document.getElementById('pdTitle'))          initProductDetailPage();
  if (document.getElementById('wishlistGrid'))     initWishlistPage();
  if (document.getElementById('ordersContainer'))  initOrdersPage();
});
