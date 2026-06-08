// Long-form content for /wristband-sri-lanka page.
import type { Block, FAQ } from "./content-engine";

export const WRISTBAND_EXTRA: Block[] = [
  // Intro
  { type: "h2", text: "What Is a Wristband and Why Every Sri Lankan Event Uses Them" },
  { type: "p", text: "Wristbands in Sri Lanka are custom-printed or custom-embossed bands worn around the wrist for identification, access control, crowd management and brand promotion. They are the standard tool for any event, venue or institution that needs to quickly identify, categorise or authenticate the people entering or moving through a space." },
  { type: "p", text: "At a concert in Colombo, wristbands separate VIP guests from general admission. At a school sports day in Kandy, they identify team membership. At a resort in Bentota, they mark all-inclusive guests. At a hospital in Jaffna, they carry patient identification details. The wristband is the most widely used single-use identity and access product in Sri Lanka's event, hospitality and healthcare industries — and it is used in larger numbers than most organisers initially plan for." },
  { type: "p", text: "Custom wristbands are produced in several materials — each with a different durability, security feature and aesthetic. The right material depends entirely on how long the wristband needs to last, what environment it will be used in, and what the wearer needs to see or scan on it. The guide below covers every type available in Sri Lanka." },

  // Section 1: types
  { type: "h2", text: "Wristband Types Available in Sri Lanka — Complete Comparison" },
  {
    type: "table",
    head: ["Type", "Material", "Durability", "Security Level", "Customisation", "Best For", "Reusable?"],
    rows: [
      ["Tyvek Wristband", "DuPont Tyvek (tear-resistant paper composite)", "1 – 3 days", "Medium — tamper-evident clasp", "Full colour print, sequential numbering, barcode, QR", "One-day and multi-day events, festivals, concerts, school events", "No — single use"],
      ["Silicone / Rubber Wristband", "Medical-grade silicone", "Years", "Low — easy to transfer", "Debossed, embossed, printed, colour-filled, segmented, swirl", "Fundraising, awareness, corporate gifts, brand merchandise, sports teams", "Yes — reusable"],
      ["Fabric / Cloth Wristband", "Woven polyester with metal or plastic snap/lock clasp", "1 week – 1 month", "High — locking clasp cannot be removed without cutting", "Full colour woven or printed, logo, text, barcode", "Multi-day festivals, resort access, VIP events, beach clubs, tours", "No — security locking clasp"],
      ["Vinyl / PVC Wristband", "Durable PVC plastic", "3 – 7 days", "High — snap closure, tamper-evident", "Full colour print, logo, sequential number, barcode, QR code", "Resort access, waterparks, hotel pools, multi-day events", "No — snap closure destroys on removal"],
      ["Plastic / Polypropylene Wristband", "Rigid or semi-rigid plastic with snap closure", "1 – 5 days", "Medium-High", "Print on face panel — logo, text, barcode", "Hospital patient ID, event access, water-resistant identification", "No"],
      ["Hospital / Patient Wristband", "Soft Tyvek or synthetic polymer", "Multi-day wear", "Medical ID — not security", "Patient name, DOB, ward, allergy flags, barcode", "Hospitals, clinics, care homes, medical events", "No"],
      ["RFID Wristband", "Silicone, fabric or PVC with embedded RFID chip", "Depends on base material", "Very High — electronic verification", "Printed surface + embedded chip", "Cashless payment events, access control, luxury resort all-inclusive", "Silicone RFID: Yes. Fabric/Tyvek RFID: No"],
      ["Beaded / Charm Wristband", "Craft beads, elastic cord or chain", "Indefinite", "None — decorative", "Logo charm, name bead, colour combination", "Charity fundraising, school events, souvenir merchandise", "Yes"],
    ],
  },

  // Section 2: Tyvek
  { type: "h2", text: "Tyvek Wristbands in Sri Lanka — The Event Industry Standard" },
  { type: "p", text: "Tyvek wristbands are the most widely used event wristband in Sri Lanka. Made from DuPont Tyvek — a non-woven, high-density polyethylene fibre composite — they are tear-resistant, waterproof, lightweight and inexpensive enough to use as a single-use disposable. Every concert, festival, school sports day and corporate event in Sri Lanka that needs crowd and access management relies on Tyvek wristbands as the primary solution." },
  { type: "h3", text: "Tyvek Wristband Specifications" },
  {
    type: "table",
    head: ["Specification", "Detail"],
    rows: [
      ["Material", "DuPont Tyvek — tear-resistant, waterproof, breathable composite"],
      ["Standard size", "25mm wide × 254mm long (fits most adult wrists)"],
      ["Closure type", "Tamper-evident adhesive tab — applies once, cannot be removed without visible tearing"],
      ["Print area", "Full face — 25mm × 240mm print area"],
      ["Colour options", "Full CMYK print — any colour, photograph, logo, text"],
      ["Variable data", "Sequential numbering, unique barcodes, QR codes per band — available on digital print runs"],
      ["Security features", "Tamper-evident adhesive, void-on-removal pattern, UV ink options, sequential serialisation"],
      ["Durability", "1 to 3 days water and sweat resistance — suitable for outdoor events and beach venues"],
      ["Minimum order", "Typically 100 bands — contact us to confirm current MOQ"],
      ["Turnaround", "3 to 5 working days standard — rush available"],
    ],
  },
  { type: "h3", text: "How to Use Tyvek Wristbands Effectively at Events in Sri Lanka" },
  {
    type: "ul",
    items: [
      "Use a different colour per ticket tier. Print VIP bands in gold or red, standard entry in blue, staff in green. Colour-coded tiers allow staff to verify access category at a glance without reading text at a distance.",
      "Add sequential numbering. Numbered bands prevent forgery and allow accurate attendance tracking. If a band is found on the ground, its number identifies whether it has been used.",
      "Apply at entry — not in advance. Wristbands applied at the gate by your team cannot be transferred. Never give out pre-applied wristbands or send them in the mail.",
      "Check the tamper seal, not just the band. Train your entry staff to look at the adhesive tab — a re-applied or cut-and-reattached band shows visible damage at the closure.",
      "Order 10 to 15% more than your ticket count. Misprints, damaged bands during application and replacements for torn bands are inevitable.",
    ],
  },

  // Section 3: Silicone
  { type: "h2", text: "Silicone Wristbands in Sri Lanka — Fundraising, Awareness & Brand Merchandise" },
  { type: "p", text: "Silicone wristbands are durable, reusable, comfortable and one of the most cost-effective branded merchandise items available in Sri Lanka. They became globally recognisable through charity campaigns and remain the standard wristband for fundraising, awareness programmes, sports teams, school events and corporate brand merchandise across the island." },
  { type: "h3", text: "Silicone Wristband Customisation Options" },
  {
    type: "table",
    head: ["Style", "Description", "Best For"],
    rows: [
      ["Debossed", "Text or logo pressed into the silicone — recessed below the surface", "Classic look — most popular for fundraising and awareness campaigns"],
      ["Embossed", "Text or logo raised above the silicone surface", "Strong visual impact — words and logos stand out clearly"],
      ["Debossed Colour-Filled", "Text pressed in and then filled with a contrasting ink colour", "Maximum legibility — the most popular premium silicone wristband style"],
      ["Printed (Silk Screen)", "Flat print directly on the silicone surface", "Detailed logos, full-colour graphics"],
      ["Segmented", "Multiple solid colour segments in one band — no text", "Team colours, national flag colours, event colour themes"],
      ["Swirl / Marbled", "Two or more colours swirled together in the silicone material", "Decorative — charity events, school colour combinations"],
      ["Glow-in-the-Dark", "Photoluminescent silicone — glows green after light exposure", "Night events, concerts, EDM parties, novelty giveaways"],
      ["UV Reactive", "Colour changes under UV/blacklight", "Club events, beach parties, UV-themed activations"],
      ["Dual Layer", "Two-colour silicone layers — different inner and outer colour", "Premium merchandise — contrasting colours visible when band flexes"],
    ],
  },
  { type: "h3", text: "Standard Silicone Wristband Sizes" },
  {
    type: "table",
    head: ["Size", "Circumference", "Width", "Best For"],
    rows: [
      ["Adult Standard", "202 mm", "12 mm", "Adults — the most common size for corporate and event wristbands"],
      ["Adult Wide", "202 mm", "20 mm or 25 mm", "Adults — more print space for detailed logos and multiple lines of text"],
      ["Youth", "180 mm", "12 mm", "Teenagers and older children (10–16 years)"],
      ["Child", "160 mm", "12 mm", "Children (5–10 years) — school events, sports days"],
      ["Toddler", "140 mm", "6 mm", "Young children — identification at children's events"],
    ],
  },

  // Section 4: Fabric
  { type: "h2", text: "Fabric Wristbands in Sri Lanka — Multi-Day Events & Resort Access" },
  { type: "p", text: "Fabric wristbands are the premium event wristband for multi-day festivals, resort all-inclusive access, beach clubs and VIP experiences. The woven polyester fabric is comfortable to wear for days, resistant to water and sweat, and the metal or plastic snap-lock clasp makes them non-transferable without cutting — providing genuine security that Tyvek cannot match for longer events." },
  {
    type: "table",
    head: ["Specification", "Detail"],
    rows: [
      ["Material", "Woven polyester fabric — soft, durable, sweat and water resistant"],
      ["Closure type", "Stainless steel or plastic snap-lock clasp — one-way lock cannot be opened without cutting"],
      ["Standard width", "15mm, 20mm or 25mm"],
      ["Print method", "Dye-sublimation full colour, or woven design (jacquard loom)"],
      ["Security features", "Non-removable snap clasp, optional UV ink, sequential serial number"],
      ["Comfort duration", "3 to 7 days continuous wear — breathable and sweat-resistant"],
      ["Colour options", "Full CMYK sublimation print or up to 4 woven thread colours"],
      ["Best use case", "Multi-day music festivals, resort all-inclusive, boat tours, beach clubs, VIP access"],
    ],
  },
  { type: "p", text: "Why resorts and beach venues in Sri Lanka prefer fabric wristbands: Guests wearing all-inclusive fabric wristbands stay in the water, at the beach and through rain without the wristband degrading. The snap-lock closure means staff can visually verify access at pools and bars without scanning. The fabric is comfortable enough to sleep in, which prevents the security gap created when guests remove Tyvek bands at night." },

  // Section 5: by event type
  { type: "h2", text: "Wristbands by Event Type — What Works in Sri Lanka" },
  {
    type: "table",
    head: ["Event / Application", "Recommended Wristband", "Key Feature Needed", "Quantity Guide"],
    rows: [
      ["Concert / Music Show", "Tyvek — colour-coded by ticket tier", "Tamper-evident, fast application at gate, colour differentiation", "100% of ticket count + 15% buffer"],
      ["Multi-Day Music Festival", "Fabric with snap-lock clasp", "Non-removable, waterproof, multi-day wear", "100% of attendees per day + 10% buffer"],
      ["School Sports Day", "Tyvek or silicone — colour per house/team", "Colour coding by team, comfortable for active wear", "1 per student + 5% buffer"],
      ["Corporate Conference / AGM", "Tyvek or fabric — branded with company logo", "Professional appearance, delegate identification", "1 per delegate + 10% buffer"],
      ["Resort / Hotel Pool Access", "Vinyl or fabric — colour per room type", "Waterproof, multi-day, colour identification for staff", "1 per guest per stay + 10% for replacements"],
      ["Water Park / Theme Park", "Vinyl or fabric — waterproof", "Fully waterproof, durable for rides, snap-lock", "1 per visitor per day + 10% buffer"],
      ["Hospital Patient ID", "Patient wristband — Tyvek or synthetic polymer", "Printed patient data, barcode for scanning, skin-safe adhesive", "2 per patient admission (primary + backup)"],
      ["Fundraising Campaign", "Silicone — debossed with cause message", "Reusable, wearable long-term, cause messaging visible", "Match to campaign distribution target"],
      ["School / University Charity Drive", "Silicone — debossed colour-filled", "School colours, durable for daily wear, cost-effective in bulk", "1 per student + staff quantity"],
      ["Beach Club / Bar Access", "Tyvek — neon colours for night visibility", "Tamper-evident, waterproof, visually distinctive in low light", "1 per cover per evening + 10%"],
      ["Brand Activation / Roadshow", "Silicone branded or printed Tyvek", "Brand recall after event — silicone stays on; Tyvek for gate control", "Match to activation target reach"],
      ["Children's Event / Party", "Tyvek — child size, bright colours", "Child-safe closure, name field for lost child identification", "1 per child + parent contact set"],
      ["Marathon / Fun Run", "Tyvek — with bib number or chip timing data", "Race number correlation, water resistant for sweat", "1 per participant + 5% buffer"],
      ["Political / Community Event", "Tyvek — large volume, colour per faction", "Fast production, high volume, colour differentiation", "100% of expected attendance + 20%"],
    ],
  },

  // Section 6: customisation
  { type: "h2", text: "Wristband Customisation Options — What You Can Print & Add" },
  { type: "p", text: "Every wristband we produce in Sri Lanka is custom — there is no off-the-shelf stock option. Here is everything that can be customised across different wristband types." },
  {
    type: "table",
    head: ["Customisation", "Available On", "Notes"],
    rows: [
      ["Full-colour logo / artwork", "Tyvek, vinyl, fabric (sublimation), silicone (print)", "Supply vector AI or high-resolution PNG — minimum 300 DPI at print size"],
      ["Organisation / event name", "All types", "Debossed on silicone, printed on Tyvek/vinyl/fabric"],
      ["Date and year", "All types", "Useful for multi-day events where different dates need different bands"],
      ["Sequential serial numbering", "Tyvek, vinyl, plastic", "Enables attendance tracking and anti-forgery management"],
      ["Barcode (1D)", "Tyvek, vinyl, plastic, fabric", "Scannable with standard barcode readers — confirm type at ordering"],
      ["QR code", "Tyvek, vinyl, fabric", "Links to URL, ticket validation or registration — minimum 15mm × 15mm"],
      ["RFID chip embedding", "Silicone, fabric, vinyl", "Requires compatible reader system — specify frequency (125kHz or 13.56MHz)"],
      ["UV fluorescent ink", "Tyvek, vinyl", "Invisible in normal light, glows under UV blacklight — anti-counterfeiting"],
      ["Tamper-evident void pattern", "Tyvek", "'VOID' text appears on band when adhesive tab is removed"],
      ["Debossed text / logo", "Silicone only", "Permanent — cannot be removed. Best for long-term branded merchandise."],
      ["Colour selection", "All types", "Silicone: Pantone match. Tyvek/vinyl: CMYK full colour. Fabric: woven or sublimation."],
      ["Size (child / youth / adult)", "All types", "Specify size at ordering — child events require smaller circumference bands"],
      ["Snap-lock clasp colour", "Fabric, vinyl", "Silver, black or gold clasp — silver is standard"],
    ],
  },

  // Section 7: artwork
  { type: "h2", text: "Artwork Guide — How to Send Files for Wristband Printing" },
  { type: "p", text: "Wristbands are small but viewed at very close range — artwork quality is critical. Here is exactly what to prepare before ordering." },
  {
    type: "table",
    head: ["Wristband Type", "Preferred File Format", "Colour Mode", "Resolution", "Key Notes"],
    rows: [
      ["Tyvek wristband", "PDF with bleed, or AI (fonts outlined)", "CMYK", "300 DPI at actual size", "Artwork area: 25mm × 240mm. Include 2mm bleed. Min font size 6pt."],
      ["Silicone wristband", "AI or EPS — vector only for deboss/emboss", "Pantone colour codes", "Vector — no DPI limit", "Deboss minimum line width 0.5mm. Text minimum 8pt."],
      ["Fabric wristband", "PDF or AI for sublimation print", "CMYK for sublimation", "300 DPI at 20mm × 240mm", "Colours shift slightly in dye-sub — supply Pantone reference for brand-critical colour."],
      ["Vinyl wristband", "PDF with bleed", "CMYK", "300 DPI", "Print area varies by manufacturer — confirm template dimensions at ordering."],
      ["Hospital wristband", "PDF template with variable data CSV", "Black or 1-colour only", "300 DPI", "Patient data (name, DOB, ward, allergy) supplied as CSV. Barcode type must be confirmed with your hospital system."],
    ],
  },
  { type: "h3", text: "Design Tips for Wristbands" },
  {
    type: "ul",
    items: [
      "Keep it simple. A wristband face is 25mm tall — the most legible designs use one clear element (logo or name) plus one line of supporting text.",
      "Use high-contrast colour combinations. Dark on light or white on dark. Yellow on white or light blue on white are impossible to read at a glance.",
      "Make the colour, not the text, your primary access signal. Staff at a busy gate have 1 to 2 seconds per person — a distinct colour is seen instantly.",
      "Reserve white space around barcodes and QR codes — a quiet zone of about 5mm on each side is required for reliable scanning.",
      "Send your logo in vector format for silicone wristbands. The debossing die is machined from the vector — a raster PNG produces a rough, jagged die.",
    ],
  },

  // Section 8: ordering
  { type: "h2", text: "How to Order Wristbands in Sri Lanka — Step by Step" },
  {
    type: "ol",
    items: [
      "Choose your wristband type. Use the comparison table above to select the right material for your event duration, security level and budget. If unsure, WhatsApp us a brief description of your event and we will recommend the best option.",
      "Confirm quantity and size. State total quantity required, whether adult, youth or child sizing is needed, and whether split quantities of different colours are required. Always order 10 to 15% more than your attendee count.",
      "Send your artwork. Supply your logo and text content in the correct format (see artwork guide above). If you do not have artwork, our design team will create it within 24 hours.",
      "Approve the digital proof. We send a digital proof showing your exact design on the wristband template before production begins. Review carefully — changes after approval require reprinting.",
      "Confirm order and production begins. Tyvek and vinyl: 3 to 5 working days. Silicone: 7 to 14 working days (mould required for first order). Fabric: 5 to 10 working days.",
      "Delivery. Islandwide courier from our Colombo facility. Colombo same-day or next-day. Outstation 1 to 3 days. Order with at least 7 days' buffer before event day.",
    ],
  },
  { type: "h3", text: "Lead Time Summary" },
  {
    type: "table",
    head: ["Wristband Type", "Standard Lead Time", "Rush Available?", "Notes"],
    rows: [
      ["Tyvek wristband", "3 – 5 working days", "Yes — 1 to 2 days for urgent", "Rush surcharge applies. Artwork must be approved by 10am for same-day starts."],
      ["Vinyl / PVC wristband", "3 – 5 working days", "Yes", "Snap closure type must be confirmed — different tools required"],
      ["Fabric wristband", "5 – 10 working days", "Limited", "Woven designs take longer than sublimation-printed fabric"],
      ["Silicone — first order (new mould)", "10 – 14 working days", "No — mould manufacture is fixed", "Mould is reused for all future reorders — reorders are 5 to 7 days"],
      ["Silicone — reorder (existing mould)", "5 – 7 working days", "Yes", "Specify existing design at ordering — mould retrieved and production starts immediately"],
      ["Hospital / patient wristband", "3 – 5 working days", "Yes", "Variable data CSV must be supplied and verified before production"],
      ["RFID wristband", "14 – 21 working days", "No", "RFID chips must be sourced, programmed and embedded"],
    ],
  },
];

export const WRISTBAND_EXTRA_FAQS: FAQ[] = [
  { q: "What is the difference between Tyvek and silicone wristbands?", a: "Tyvek wristbands are single-use disposable bands made from DuPont Tyvek composite — used for event access control, last 1 to 3 days, tamper-evident. Silicone wristbands are reusable, durable rubber bands used for fundraising, awareness campaigns and brand merchandise — they last years. Use Tyvek for event gate management. Use silicone for branded merchandise, charity campaigns and long-term brand promotion." },
  { q: "What is the minimum order quantity for wristbands in Sri Lanka?", a: "Minimum order quantities vary by type. Tyvek: typically 100 bands minimum. Silicone: typically 100 bands for first orders (mould required). Fabric: typically 100 bands. Vinyl: typically 50 to 100 bands. Contact us with your specific type and quantity and we will confirm the current minimum and most cost-effective production method." },
  { q: "How long does wristband printing take in Sri Lanka?", a: "Tyvek and vinyl wristbands take 3 to 5 working days from artwork approval. Fabric wristbands take 5 to 10 working days. Silicone wristbands for first-time orders take 10 to 14 working days due to mould manufacture — reorders take 5 to 7 working days. RFID wristbands take 14 to 21 working days. Always add 1 to 2 days for islandwide delivery and order at least 7 to 10 days before your event date." },
  { q: "Are Tyvek wristbands waterproof in Sri Lanka's weather?", a: "Yes. Tyvek wristbands are water-resistant and sweat-resistant — they will not dissolve or lose their print when wet, and are suitable for outdoor events, beach venues and pool parties. They are not designed for prolonged submersion. For events requiring 3 or more days of continuous wear including water activities, fabric or vinyl wristbands with snap-lock closures are more appropriate." },
  { q: "Can I get wristbands with sequential numbers or barcodes in Sri Lanka?", a: "Yes. Sequential numbering, barcodes (Code 128, EAN, QR) and unique serial numbers per band are available on Tyvek, vinyl and fabric wristbands using digital variable data printing. Each band can carry a unique number linked to your ticketing or access management system. Specify your barcode format at ordering — we will confirm compatibility with your scanning equipment before production starts." },
  { q: "Do you deliver wristbands islandwide in Sri Lanka?", a: "Yes. We deliver islandwide from our Colombo production facility. Colombo and suburbs receive same-day or next-day delivery. Kandy, Galle, Negombo and Kurunegala within 1 to 2 days. Outstation locations including Jaffna, Trincomalee, Anuradhapura and Batticaloa within 2 to 4 days. Order with at least 7 days' buffer before the event to account for production plus delivery." },
  { q: "How many wristbands should I order for my event?", a: "Order 110 to 115% of your expected attendance — a 10 to 15% buffer above your ticket count. This covers misprints discovered during quality check, bands damaged during application by staff, torn bands requiring replacement, and last-minute ticket sales above your estimate. Running short of wristbands at an event gate creates significant delay — the cost of ordering extra is always less than managing a gate shortage live." },
  { q: "What type of wristband is best for a resort or hotel in Sri Lanka?", a: "Fabric wristbands with snap-lock closures are the standard for resorts and hotels in Sri Lanka. They are comfortable for multi-day wear including sleeping, are fully waterproof for pool and beach use, and the locking clasp means guests cannot transfer their all-inclusive access. Colour-coded fabric bands allow staff to identify room tier or meal plan at a glance. Vinyl is a more economical alternative for stays of 1 to 3 days." },
  { q: "Can silicone wristbands be made in school or team colours?", a: "Yes. Silicone wristbands are available in any Pantone colour, allowing precise matching to school colours, sports team colours or corporate brand colours. Segmented bands (two or more colour blocks in one band) and swirl bands (colours blended together) are also available for multi-colour team identity. Specify your Pantone codes at ordering — if you do not have them, send your logo and we will match as closely as possible." },
  { q: "What file format should I send for wristband printing?", a: "For Tyvek and vinyl: PDF with 2mm bleed or Adobe Illustrator AI with fonts outlined, in CMYK at 300 DPI. For silicone: Adobe Illustrator AI or EPS vector file — raster images cannot be used for debossing. For fabric: PDF or AI in CMYK. If you only have a JPG or PNG logo, send it at the highest resolution and we will advise whether it is suitable or needs to be redrawn as a vector." },
];