// Long-form content for /pen-printing-sri-lanka page.
import type { Block, FAQ } from "./content-engine";

export const PEN_PRINTING_EXTRA: Block[] = [
  ] = [

  // Section 2: Printing methods
  { type: "h2", text: "Pen Printing & Branding Methods — Which Technique for Which Pen" },
  { type: "p", text: "The branding method determines how your logo looks, how permanent it is, and what pen types it can be applied to. Here is every method available for branded pens in Sri Lanka, with clear guidance on when to use each one." },
  {
    type: "table",
    head: ["Method", "How It Works", "Pen Types", "Colour Capability", "Durability", "Print Area", "Best For"],
    rows: [
      ["Pad Printing", "Ink transferred from etched plate via silicone pad onto pen barrel — the standard method for curved surfaces", "Plastic, rubber-grip, stylus", "1 to 4 spot colours (Pantone)", "Good — resists normal handling", "Pen barrel — typically 30 to 50mm × 8 to 12mm", "Mass promotional pens, plastic pens in any colour, multi-colour logos on economy runs"],
      ["Screen Printing", "Ink pushed through mesh screen onto flat or slightly curved surface", "Plastic", "1 to 4 spot colours", "Good", "Larger flat barrel area", "High-volume runs, large barrel pens with maximum print area"],
      ["Laser Engraving", "Laser removes surface material to reveal metal or lighter layer below — permanent marking", "Metal (aluminium, steel, brass), bamboo, some plastics", "Single tone — the natural metal or material colour", "Permanent — cannot fade, scratch or peel", "Pen barrel — typically 30 to 60mm × 6 to 10mm", "Premium corporate gifts, executive pens, gifts that last — the gold standard for metal pens"],
      ["UV Printing (Full Colour)", "UV-cured inkjet printed directly onto pen barrel — full photographic colour reproduction", "Metal, plastic, bamboo", "Full CMYK — photographs, gradients, complex logos", "Very good — UV-cured ink is scratch-resistant", "Full barrel wrap — 360° print available on some pens", "Complex full-colour logos, photographic designs, premium brand-accurate colour reproduction"],
      ["Digital Transfer Print", "Full-colour design printed on transfer film and heat-applied to barrel", "Metal, plastic", "Full colour", "Good — moderate scratch resistance", "Pen barrel", "Short-run full-colour promotional pens, small quantity personalised orders"],
      ["Hot Foil Stamping", "Metallic foil pressed onto pen surface with heated die", "Plastic, some metal", "Metallic — gold, silver, copper, holographic", "Good indoors", "Small logo area", "Premium-looking promotional pens where metallic finish elevates perceived value on a plastic pen"],
      ["Debossing / Embossing", "Design pressed into or raised from pen barrel material", "Soft-touch plastic, rubber grip pens", "No colour — tactile only", "Permanent", "Small logo on grip area", "Subtle premium touch on soft-grip pens — understated luxury"],
      ["Barrel Colour Customisation", "Pen barrel produced in a custom Pantone colour matching brand guidelines", "Plastic (high MOQ)", "Single solid Pantone barrel colour", "N/A — colour of barrel itself", "Full barrel", "Large corporate orders where brand colour accuracy on the pen body itself is required — typically 5,000+ minimum"],
    ],
  },
  { type: "p", text: "Most important rule: Laser engraving is only available on metal and bamboo pens — it cannot be applied to standard plastic. If your brand requires permanent marking, budget accordingly for a metal pen body. Pad printing on plastic produces excellent results but is not permanent on premium executive gifts that are expected to last years." },

  // Section 1: Pen Types
  { type: "h2", text: "Branded Pen Types — Complete Guide to Every Option in Sri Lanka" },
  { type: "p", text: "Pen printing in Sri Lanka covers a wide spectrum of pen types — from budget plastic pens for mass event giveaways to premium metal executive pens for board-level gifting. Choosing the right pen for the occasion is the most important decision before ordering. The wrong pen grade for the recipient communicates the wrong brand message." },
  {
    type: "table",
    head: ["Pen Type", "Body Material", "Ink Type", "Brand Impression", "Best Printing Method", "Best For", "MOQ"],
    rows: [
      ["Plastic Ballpoint", "ABS plastic", "Oil-based ballpoint", "Economy — functional", "Pad print, screen print", "Mass event giveaways, trade shows, countertop pens, budget campaigns", "100 pcs"],
      ["Plastic Ballpoint (Rubberised Grip)", "ABS plastic with rubber/soft-touch coating", "Oil-based ballpoint", "Mid-range — comfortable", "Pad print, screen print", "Corporate events, conference packs, staff stationery sets", "100 pcs"],
      ["Metal Ballpoint", "Aluminium or stainless steel barrel", "Oil-based ballpoint", "Premium — professional", "Laser engraving, pad print, screen print", "Corporate gifts, client appreciation, AGM gifts, professional services branding", "50 pcs"],
      ["Metal Twist-Action Ballpoint", "Aluminium or brass barrel, twist mechanism", "Oil-based ballpoint", "Premium — executive", "Laser engraving", "Executive gifts, bank client gifts, premium corporate sets", "50 pcs"],
      ["Gel Pen", "Plastic or metal barrel", "Water-based gel — smooth writing", "Mid-range — quality writing", "Pad print, screen print", "Office stationery, educational institutions, healthcare sector pens", "100 pcs"],
      ["Rollerball Pen", "Metal barrel", "Water-based liquid — premium writing experience", "Luxury — prestigious", "Laser engraving", "Premium executive gifts, high-value client presents, board-level gifting", "25 pcs"],
      ["Fountain Pen", "Metal or resin barrel", "Liquid ink — refillable", "Prestige — heritage", "Laser engraving", "VIP executive gifts, long-service awards, commemorative sets", "10 pcs"],
      ["Stylus Pen (2-in-1)", "Plastic or metal barrel with rubber stylus tip", "Ballpoint + touchscreen stylus", "Mid-range — tech-practical", "Pad print, laser engraving", "Tech companies, banks, insurance firms, digital-forward brands", "100 pcs"],
      ["Eco / Bamboo Pen", "Bamboo, recycled plastic or wheat straw", "Ballpoint", "Mid-range — sustainable", "Laser engraving, pad print", "ESG-committed organisations, sustainability events, NGOs, eco campaigns", "100 pcs"],
      ["Multi-Function Pen", "Metal or premium plastic", "Ballpoint + additional function", "Premium — high utility", "Laser engraving, pad print", "Corporate tech gifts — pen with LED torch, stylus, USB drive or phone stand combinations", "50 pcs"],
      ["Executive Pen Set", "Premium metal (chrome, gunmetal, gold)", "Ballpoint + rollerball pair", "Prestige — luxury gifting", "Laser engraving", "Board meetings, client relationship gifts, retirement gifts, premium award sets", "10 sets"],
    ],
  },
  { type: "p", text: "Choosing the right grade: Match pen quality to recipient relationship. Budget plastic pens given to senior executives communicate carelessness rather than brand generosity. Premium engraved metal pens given away at mass public events disappear without creating any relationship value. The pen grade should reflect the value you place on the specific relationship." },

  // Section 4: Artwork
  { type: "h2", text: "Artwork Guide for Pen Printing — File Requirements & Logo Sizing" },
  { type: "p", text: "The print area on a pen barrel is small — errors that would be invisible on a banner are clearly visible on a pen held at reading distance. Correct artwork preparation prevents colour shifts, blurry logos and rejected orders." },
  { type: "h3", text: "File Requirements by Printing Method" },
  {
    type: "table",
    head: ["Method", "Preferred Format", "Colour Mode", "Resolution", "Key Notes"],
    rows: [
      ["Pad print", "AI or EPS — vector (preferred)", "Pantone spot colours", "Vector — no DPI limit", "Supply Pantone codes for each colour. Maximum 4 colours. Minimum line width 0.3mm — finer lines disappear under pad transfer."],
      ["Laser engraving", "AI or EPS — vector only", "Black and white only (colour not applicable)", "Vector — no DPI limit", "Vector outlines only — no gradients, no fills. Minimum line width 0.3mm. Text minimum 6pt. The laser follows vector paths — raster images cannot be engraved."],
      ["UV print (full colour)", "PDF or AI in CMYK", "CMYK", "300 DPI at actual print size", "Full colour including photographs accepted. Supply at actual pen barrel dimensions — do not scale artwork."],
      ["Screen print", "AI or EPS — vector", "Pantone spot colours", "Vector", "Minimum 1 Pantone colour, maximum 4. Same rules as pad print — clean vector paths, no gradients."],
      ["Hot foil stamp", "AI or EPS — vector only", "Black vector shape", "Vector", "Supply foil area as a solid black closed shape. Minimum logo size 5mm height for clean foil transfer."],
    ],
  },
  { type: "h3", text: "Standard Print Area Dimensions for Common Pens" },
  {
    type: "table",
    head: ["Pen Body Width", "Typical Print Area (W × H)", "Recommended Max Logo Width", "Recommended Min Font Size"],
    rows: [
      ["Slim pen (8 – 9mm diameter)", "40 × 6 mm", "35 mm", "5 pt minimum (6 pt recommended)"],
      ["Standard pen (10 – 11mm diameter)", "50 × 8 mm", "45 mm", "6 pt minimum (7 pt recommended)"],
      ["Wide-barrel pen (12 – 14mm diameter)", "60 × 10 mm", "55 mm", "7 pt minimum (8 pt recommended)"],
      ["Jumbo / chunky pen (15mm+ diameter)", "70 × 12 mm", "65 mm", "8 pt minimum"],
    ],
  },
  { type: "h3", text: "Design Tips for Pen Logo Printing" },
  {
    type: "ul",
    items: [
      "Simplify complex logos for small-scale printing. A logo that works at A4 often has fine lines or small text that becomes illegible at 40mm wide on a pen barrel. Supply a simplified horizontal lockup version of your logo specifically for pen printing.",
      "Prioritise one element. In most cases your company name or logo is sufficient for a pen. Tagline and contact details on one line below the logo is the maximum for most pen sizes.",
      "Use high-contrast colour combinations — dark logo on a light pen barrel, or white logo on a dark barrel. Yellow or pale colours on white pen bodies are invisible.",
      "For laser engraving, think about barrel colour. The engraved mark exposes the metal beneath the coating — the visual impact depends entirely on the contrast between the coating and the metal below.",
      "Request a digital proof before production. Always approve a digital mockup of your logo on the actual pen barrel at actual size before production begins.",
    ],
  },

  // Section 3: Industry
  { type: "h2", text: "Branded Pens by Industry — What Sri Lankan Organisations Order Most" },
  {
    type: "table",
    head: ["Industry / Organisation", "Most Common Use", "Recommended Pen Grade", "Recommended Method", "Peak Ordering Season"],
    rows: [
      ["Banks & Financial Institutions", "Counter pens, client gifts, branch opening giveaways, AGM delegate packs", "Metal ballpoint (counter), premium rollerball (executive gift)", "Laser engraving for executive; pad print for counter", "New Year (Jan), AGM season (May–Aug)"],
      ["Insurance Companies", "Agent branding, customer giveaways, claim processing counter pens", "Mid-range plastic or metal grip pen", "Pad print — 2 colours (company name + hotline)", "Year-round — monthly agent kit replenishment"],
      ["Hotels & Resorts", "In-room amenity pens, front desk pens, conference stationery", "Slim metal ballpoint or premium plastic", "Laser engraving or pad print — hotel name and logo", "Peak tourist season (Dec–Jan, Jul–Aug)"],
      ["Pharmaceutical Companies", "Doctor detailing pens, pharmacy counter pens, representative giveaways", "Good quality plastic with comfortable grip — doctor comfort matters", "Pad print — brand name, product name, hotline", "Year-round — quarterly rep distribution cycles"],
      ["Real Estate & Property", "Show flat stationery, contract signing pens, client gifts", "Premium metal ballpoint or executive set", "Laser engraving — project name, company brand", "Project launch periods"],
      ["Educational Institutions", "Student orientation packs, staff gifts, open day giveaways, prize-giving", "Mid-range plastic or gel pen", "Pad print — institution name, logo, website", "Academic year start (Jan, Sep)"],
      ["Law Firms & Professional Services", "Client desk pens, document signing, new client welcome packs", "Premium metal ballpoint or rollerball", "Laser engraving — firm name only (understated)", "Year-round"],
      ["FMCG & Retail", "Trade partner giveaways, dealer incentives, mass consumer promotions", "Budget plastic — high volume", "Pad print — product name, brand logo, tagline", "Avurudu (Apr), Christmas (Dec), product launches"],
      ["Healthcare & Hospitals", "Patient appointment pens, staff stationery, pharmacy counter", "Standard plastic — hygienic, easily replaceable", "Pad print — hospital name, department, hotline", "Year-round"],
      ["Corporates & Multinationals", "New employee welcome kits, AGM delegate packs, conference stationery", "Metal ballpoint or premium stylus pen", "Laser engraving or UV print for full-colour logo", "New Year (Jan), AGM season, corporate events year-round"],
      ["NGOs & Government", "Awareness campaigns, training programme stationery, community outreach", "Budget to mid-range plastic", "Pad print — organisation name, campaign message", "Programme launch dates"],
      ["Events & Exhibitions", "Delegate packs, booth giveaways, sponsor branding", "Budget plastic for mass; mid-range for conference delegates", "Pad print — event name, sponsor logo, website", "BMICH exhibition season, conference calendar"],
    ],
  },

  // Section 5: Packaging
  { type: "h2", text: "Pen Packaging & Presentation Options in Sri Lanka" },
  { type: "p", text: "Packaging is the first thing a recipient sees — and for pens given as corporate gifts, the packaging communicates as much as the pen itself. Here is every packaging option available for branded pens in Sri Lanka." },
  {
    type: "table",
    head: ["Packaging Type", "Best For", "Customisation Options", "Impression Created"],
    rows: [
      ["Polybag (single pen)", "Budget mass giveaways, trade show distribution, large-volume promotional pens", "Printed header card with logo and brand", "Functional — no premium perception"],
      ["Individual Cardboard Sleeve", "Mid-range promotional pens, conference delegate inserts", "Full-colour print on sleeve — logo, tagline, contact", "Professional — branded presentation"],
      ["Single Pen Gift Box", "Premium metal or executive pens — client gifts, awards", "Branded lid print, deboss or foil stamp on box, tissue insert", "Premium — gift-ready presentation"],
      ["Two-Pen Set Box", "Executive sets — ballpoint + rollerball pairs", "Branded box with custom insert, ribbon, tissue", "Prestige — high perceived value"],
      ["Pen + Notebook Set Box", "Conference gifts, new employee welcome kits, client appreciation sets", "Branded box, both pen and notebook branded, ribbon pull", "Premium corporate gift set — high utility"],
      ["Pen Pouch / Sleeve", "Leather or velvet pouch for premium single pens", "Embossed or foil logo on pouch", "Luxury — jewellery-like presentation"],
      ["Bulk Retail Box (bulk packing)", "High-volume orders — pens shipped in branded bulk box for internal distribution", "Branded master carton, pen count per box", "Functional — for internal distribution management"],
    ],
  },
  { type: "p", text: "Most effective combination for corporate gifting in Sri Lanka: Premium metal pen with laser-engraved logo + individual gift box with soft-touch lamination and debossed brand name on the lid. This combination produces a gift that looks and feels premium without requiring the very high cost of a full executive set." },

  // Section 6: Order steps
  { type: "h2", text: "How to Order Branded Pens in Sri Lanka — Step by Step" },
  {
    type: "ol",
    items: [
      "Select your pen type and grade. Use the pen types table above to identify the right material, mechanism and function for your recipient and occasion. If unsure, share your budget per pen and the occasion via WhatsApp and we will recommend the best option.",
      "Confirm quantity. Volume pricing applies above certain quantities — the per-unit cost decreases significantly at higher quantities. For annual stationery needs, ordering a full year's supply in one batch is almost always more economical than multiple small orders.",
      "Choose branding method. Pad print or screen print for plastic pens. Laser engraving for metal pens. UV print for full-colour logo reproduction. Specify the number of colours in your logo if using pad or screen print.",
      "Send your artwork. Supply your logo in the correct format for your chosen branding method. If you only have a JPG or PNG, send it — our pre-press team will advise and redraw to vector if required (design fee applies).",
      "Approve digital proof. We supply a digital mockup showing your logo at actual size on the chosen pen barrel before production. Review logo size, colour and placement carefully.",
      "Production and delivery. Plastic pens with pad print: 5 to 7 working days. Metal pens with laser engraving: 7 to 10 working days. Executive sets with custom packaging: 10 to 14 working days. Islandwide delivery after production — Colombo next day, outstation 1 to 3 days.",
    ],
  },
  { type: "h3", text: "Lead Time Summary" },
  {
    type: "table",
    head: ["Pen Type & Method", "Standard Lead Time", "Rush Available?"],
    rows: [
      ["Plastic pen — pad print (under 1,000 pcs)", "5 – 7 working days", "Yes — 3 days for simple 1-colour jobs"],
      ["Plastic pen — pad print (1,000 – 5,000 pcs)", "7 – 10 working days", "Limited"],
      ["Metal pen — laser engraving", "7 – 10 working days", "Yes — 5 days for small quantities"],
      ["Rollerball / fountain pen — engraving", "10 – 14 working days", "Limited"],
      ["Executive set with custom gift box", "10 – 14 working days", "Limited — box production adds time"],
      ["Custom barrel colour (Pantone matched body)", "21 – 28 working days", "No — factory production lead time fixed"],
    ],
  },
  { type: "p", text: "For seasonal gifting (Avurudu, Christmas, New Year): Order at least 4 weeks before your intended distribution date. Production facilities across Sri Lanka run at peak capacity in March and November–December." },
];

export const PEN_PRINTING_EXTRA_FAQS: FAQ[] = [
  { q: "What is the difference between pad printing and laser engraving for branded pens?", a: "Pad printing applies ink to the pen barrel using a silicone pad — available in 1 to 4 colours, works on plastic and metal, and is the standard method for most promotional pens. Laser engraving uses a laser to permanently mark the metal or bamboo surface by removing the top coating — it creates a permanent, prestige impression that cannot fade, scratch or peel. Pad printing is the right choice for plastic promotional pens. Laser engraving is the right choice for premium metal executive pens where the branding needs to last for years." },
  { q: "What is the minimum order quantity for branded pens in Sri Lanka?", a: "The minimum order quantity varies by type. Plastic pens with pad print: 100 pieces minimum. Metal pens with laser engraving: 50 pieces. Executive pen sets: 10 sets. Rollerball and fountain pens: 25 pieces. For very small quantities below these minimums, contact us — small-batch digital transfer printing may be available for certain pen types at adjusted per-unit rates." },
  { q: "How long does branded pen printing take in Sri Lanka?", a: "Plastic pens with pad print take 5 to 7 working days from artwork approval. Metal pens with laser engraving take 7 to 10 working days. Executive sets with custom packaging take 10 to 14 working days. For Avurudu and Christmas seasonal gifting, order at least 4 weeks before your distribution date — production facilities run at peak capacity in March and November to December." },
  { q: "Can I get full-colour logo printing on branded pens in Sri Lanka?", a: "Yes. Full-colour logo printing is available using UV printing technology — this prints your full CMYK logo, including photographs, gradients and complex multi-colour designs, directly onto the pen barrel with excellent colour accuracy. UV printing is available on both plastic and metal pens. Standard pad printing is limited to 1 to 4 Pantone spot colours. Specify full-colour UV printing at ordering if your logo has more than 4 colours or uses gradients." },
  { q: "What file format should I send for pen logo printing?", a: "For pad print and laser engraving, the required format is Adobe Illustrator AI or EPS vector file with fonts outlined. Vector files are essential because the logo must be scaled to the tiny pen barrel print area without loss of quality. For UV full-colour printing, PDF or AI in CMYK at 300 DPI at actual print size is required. If you only have a JPG or PNG logo, send it — our pre-press team will advise on suitability and can redraw your logo as a vector if required." },
  { q: "Which pen is best for a corporate gift in Sri Lanka?", a: "For most corporate gifting in Sri Lanka, a metal ballpoint or metal twist-action ballpoint with laser engraving is the best choice. It communicates quality and permanence, the laser engraving is permanent and will not fade, and the metal body is durable enough to last years rather than weeks. Presented in a simple gift box with your engraved brand name, a quality metal pen is one of the most cost-effective premium corporate gifts available. For board-level or VIP recipients, upgrade to a rollerball or fountain pen in a two-pen set box." },
  { q: "Do you deliver branded pens islandwide in Sri Lanka?", a: "Yes. We deliver branded pens islandwide from our Colombo production facility. Colombo and suburbs receive same-day or next-day delivery. Kandy, Galle, Negombo and Kurunegala within 1 to 2 days. Jaffna, Trincomalee, Anuradhapura and all outstation locations within 2 to 4 days. For large corporate orders requiring split delivery to multiple branch offices simultaneously, we coordinate scheduled multi-location dispatches." },
  { q: "Can I get eco-friendly branded pens in Sri Lanka?", a: "Yes. Eco-friendly branded pens available in Sri Lanka include bamboo pens (laser engraved), recycled plastic pens, wheat straw pens and biodegradable seed paper pens. These are increasingly popular for ESG-committed organisations, sustainability events, NGO campaigns and companies wanting to highlight their environmental credentials through their branded merchandise choices. Specify eco-friendly material at ordering and we will confirm available options and lead times." },
];