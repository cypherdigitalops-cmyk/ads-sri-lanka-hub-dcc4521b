// Additional long-form content for /banner-printing-sri-lanka.
// Appended below the existing content — does not replace anything.
import type { Block, FAQ } from "./content-engine";

export const BANNER_PRINTING_EXTRA: Block[] = [
  // ── SECTION 1: BANNER TYPES COMPARISON ──
  { type: "h2", text: "Banner Types Compared — Which Banner Material Is Right for Your Job?" },
  { type: "p", text: "Banner printing in Sri Lanka covers many different materials, each built for a specific use case, weather condition and display duration. Choosing the wrong material is the most common and most expensive mistake — a banner that fails early or looks poor costs more than doing it right the first time." },
  {
    type: "table",
    head: ["Banner Type", "Material", "Best For", "Outdoor Durability", "Finish Options", "Reusable?"],
    rows: [
      ["Frontlit Flex Banner", "PVC flex 440gsm", "Outdoor events, roadside, shopfronts", "6–12 months", "Eyelets, hem, pole pocket", "Limited"],
      ["Backlit Flex Banner", "Translucent PVC 510gsm", "Lightboxes, illuminated displays", "12–24 months", "Cut to frame size", "No"],
      ["Mesh Banner", "Perforated PVC mesh", "Building wraps, fences, scaffolding", "12–18 months", "Reinforced hem, eyelets every 500mm", "No"],
      ["Vinyl Banner", "Self-adhesive or non-adhesive vinyl", "Window graphics, vehicle branding, walls", "2–5 years", "Cut edges, lamination", "No"],
      ["Fabric Banner (Dye-Sub)", "Polyester fabric", "Indoor events, exhibitions, trade shows", "Indoor only", "Sewn edges, sleeve, clip rail", "Yes — machine washable"],
      ["Blockout Banner", "Black-core blockout PVC", "Double-sided printing, light-blocking", "6–12 months", "Eyelets, hem", "No"],
      ["Canvas Banner", "Cotton/poly canvas", "Art, décor, premium indoor display", "Indoor only", "Stretcher frame, rolled", "Yes"],
      ["Economy Flex", "PVC flex 300gsm", "Short-term events, 1–4 week use", "4–8 weeks", "Eyelets, hem", "No"],
    ],
  },
  { type: "p", text: "Quick guide for Sri Lanka's climate: For anything displayed outdoors longer than 8 weeks, always use minimum 440gsm frontlit flex. For coastal areas — Galle, Negombo, Trincomalee — choose 510gsm or vinyl due to salt air degradation. For building wraps and scaffolding, mesh is mandatory — solid flex on large areas acts as a sail in strong wind and will tear or pull fixings out." },

  // ── SECTION 2: BY INDUSTRY ──
  { type: "h2", text: "Banner Printing by Industry — What Sri Lankan Businesses Order Most" },
  {
    type: "table",
    head: ["Industry / Event Type", "Most Common Banner Uses", "Recommended Material", "Typical Size Range"],
    rows: [
      ["Retail & Supermarkets", "Sale promotions, new arrivals, seasonal campaigns, price banners", "440gsm frontlit flex", "4×8 ft to 6×12 ft"],
      ["Restaurants & Cafés", "Menu displays, promotions, outdoor shopfront, new branch opening", "440gsm flex or fabric (indoor)", "3×6 ft to 5×10 ft"],
      ["Hotels & Resorts", "Welcome banners, event signage, pool area décor, conference room", "Fabric dye-sub (indoor), 510gsm flex (outdoor)", "Custom — full room width"],
      ["Schools & Universities", "Sports day, prize-giving, welcome banners, open day, exam result boards", "440gsm frontlit flex", "4×8 ft to 6×12 ft"],
      ["Political & Government", "Campaign banners, election displays, government announcements", "440gsm frontlit flex", "5×10 ft to 10×20 ft"],
      ["Religious & Cultural Events", "Vesak banners, Pooja notices, temple festivals, Avurudu celebrations", "440gsm frontlit flex", "4×8 ft to 8×16 ft"],
      ["Corporate Events", "Stage backdrops, conference banners, product launch, trade shows", "Fabric dye-sub or 510gsm flex", "8×16 ft to 20×10 ft backdrop"],
      ["Construction & Real Estate", "Hoarding wraps, site banners, project launch, sales office", "510gsm frontlit or mesh for large spans", "10×30 ft to full site perimeter"],
      ["Healthcare & Pharma", "Health awareness campaigns, clinic opening, waiting room info", "440gsm flex (outdoor), fabric (indoor)", "4×8 ft to 6×12 ft"],
      ["Banks & Finance", "Branch promotions, product launches, seasonal offers, ATM branding", "440gsm flex or vinyl", "4×8 ft to custom fascia size"],
      ["FMCG & Manufacturers", "Dealer promotions, market activations, POS displays", "440gsm flex", "4×8 ft to 6×12 ft"],
      ["Sports Events", "Sponsor banners, match-day advertising, team branding", "440gsm flex or mesh (perimeter fencing)", "3×6 ft to 5×10 ft panels"],
    ],
  },

  // ── SECTION 3: SIZES GUIDE ──
  { type: "h2", text: "Banner Sizes Guide — Standard Sizes & Custom Dimensions" },
  { type: "p", text: "Banner printing in Sri Lanka has no fixed size limit — our wide-format printers output up to 3.2 metres wide in a single piece, and any height. For widths above 3.2 metres, banners are joined in panels with welded or stitched seams. Use the tables below to find the right size for your application." },
  { type: "h3", text: "Standard Banner Sizes Used in Sri Lanka" },
  {
    type: "table",
    head: ["Size (W × H)", "Common Application", "Typical Viewing Distance", "Min. Font Size for Legibility"],
    rows: [
      ["1 ft × 3 ft (30 × 90 cm)", "Table top displays, entrance labels, small retail signs", "1 – 2 m", "25 mm"],
      ["2 ft × 4 ft (60 × 120 cm)", "Shop window banners, indoor event signs", "2 – 5 m", "40 mm"],
      ["3 ft × 6 ft (90 × 180 cm)", "Retail promotions, event entrance, rollup banner print", "3 – 8 m", "60 mm"],
      ["4 ft × 8 ft (120 × 240 cm)", "Outdoor shop banners, roadside events, school displays", "5 – 15 m", "80 mm"],
      ["4 ft × 10 ft (120 × 300 cm)", "Street banners, political events, temple festivals", "8 – 20 m", "100 mm"],
      ["5 ft × 10 ft (150 × 300 cm)", "Outdoor advertising, building facade banners", "10 – 25 m", "120 mm"],
      ["6 ft × 12 ft (180 × 360 cm)", "Roadside hoardings, large event backdrops", "15 – 40 m", "150 mm"],
      ["8 ft × 20 ft (240 × 600 cm)", "Large outdoor advertising, construction hoardings", "20 – 60 m", "200 mm"],
      ["10 ft × 30 ft (300 × 900 cm)", "Billboard-size hoardings, major commercial sites", "40 – 100 m", "300 mm"],
      ["Custom any size", "Any application — no size premium for custom dimensions", "Varies", "Varies"],
    ],
  },
  { type: "h3", text: "Artwork Setup — File Requirements by Banner Size" },
  {
    type: "table",
    head: ["Banner Size", "Minimum Artwork Resolution", "Recommended Resolution", "Colour Mode", "Bleed Required"],
    rows: [
      ["Up to 2 ft × 4 ft", "150 DPI at actual size", "200 DPI", "CMYK", "25 mm all sides"],
      ["2 ft × 4 ft to 6 ft × 12 ft", "100 DPI at actual size", "150 DPI", "CMYK", "25 mm all sides"],
      ["Above 6 ft × 12 ft", "72 DPI at actual size", "100 DPI", "CMYK", "50 mm all sides"],
    ],
  },
  { type: "p", text: "Accepted file formats: PDF (preferred, with bleed and embedded fonts), Adobe Illustrator AI/EPS (fonts outlined), PSD (flattened, at correct resolution). JPG and PNG accepted at 150 DPI minimum at actual print size. Never send files designed at A4 and ask them to be scaled up — low resolution at source produces blurry output at large format." },

  // ── SECTION 4: FINISHING OPTIONS ──
  { type: "h2", text: "Banner Finishing Options — Eyelets, Hems, Pockets & More" },
  { type: "p", text: "The finish you choose determines how the banner is mounted, how long it holds up, and how professional it looks. Here is every finishing option available for banner printing in Sri Lanka, and when to use each one." },
  {
    type: "table",
    head: ["Finish", "What It Is", "Best For", "Spacing Standard"],
    rows: [
      ["Eyelets (Grommets)", "Circular metal rings punched through a reinforced edge, used for hanging with rope, cable ties or hooks", "Outdoor banners, fence banners, event banners", "Every 500mm around perimeter"],
      ["Reinforced Hem", "The edge of the banner is folded and welded or stitched to create a thick border that resists tearing", "All outdoor banners — prevents edge tearing from wind", "40–50mm hem width standard"],
      ["Pole Pocket (Sleeve)", "A folded channel sewn along the top (and sometimes bottom) edge that a pole slides through for hanging", "Hanging banners, street banners, outdoor event banners", "75mm pocket width standard"],
      ["Velcro Strip", "Self-adhesive velcro sewn along banner edges for attachment to fabric frames or display systems", "Fabric banner systems, exhibition displays", "Full perimeter or top edge only"],
      ["Clip Rail / Snap Rail", "Aluminium extrusion channels that clamp the top and bottom edges for a taut, frameless display", "Indoor hanging banners, suspended displays", "Matches banner width exactly"],
      ["Sewn Edges", "Fabric banner edges finished with overlock or hem stitch — prevents fraying on woven fabric materials", "Fabric (dye-sublimation) banners only", "10mm sew border standard"],
      ["No Finish (Cut Only)", "Banner cut to size with no edge treatment — raw cut edge", "Lightbox inserts, frame-mounted displays where frame holds edges", "N/A"],
      ["Wind Slits", "Small cuts or perforations across large outdoor banners to reduce wind resistance", "Very large outdoor banners above 3m wide in exposed locations", "Every 1 metre across the banner face"],
    ],
  },
  { type: "p", text: "For outdoor banners in Sri Lanka: Always request reinforced hem plus eyelets as a minimum. For coastal areas or exposed rooftop locations, request double-welded hem and eyelets every 300mm rather than 500mm. Wind load on large banners is significant — poor finishing is the leading cause of outdoor banner failures in Sri Lanka's monsoon conditions." },

  // ── SECTION 5: WEATHER ──
  { type: "h2", text: "Outdoor Banner Durability in Sri Lanka's Climate — What You Need to Know" },
  { type: "p", text: "Sri Lanka's tropical climate is one of the most demanding environments for outdoor printed materials in the world. High UV index year-round, two annual monsoon seasons with heavy rain and wind, coastal salt air, and high ambient humidity all act on outdoor banners simultaneously. Here is how to choose materials that survive." },
  {
    type: "table",
    head: ["Environmental Factor", "Impact on Banners", "How to Protect Against It"],
    rows: [
      ["UV Radiation (year-round, highest April–August)", "Fades ink, yellows acrylic coatings, degrades PVC", "UV-resistant eco-solvent or latex inks. Lamination adds 40% UV life extension."],
      ["Monsoon Rain (SW: May–Sep, NE: Nov–Jan)", "Water penetrates seams, causes delamination, warps unprotected edges", "Double-welded hems on all edges. Eyelets punched through welded sections only."],
      ["Wind Load (especially coastal areas)", "Tearing at eyelet points, seam separation, structural failure on large banners", "Mesh material for large banners. Eyelets every 300mm in high-wind locations. Nylon rope, not cable ties."],
      ["Coastal Salt Air (Galle, Negombo, Trincomalee, Jaffna)", "Accelerates corrosion of metal eyelets and fixings. Degrades surface coatings.", "Stainless steel or plastic eyelets (not aluminium or brass). Stainless steel mounting hardware."],
      ["Humidity (60–90% RH year-round)", "Promotes mould growth on fabric surfaces, causes flex to stiffen and crack", "Antimicrobial coating on fabric banners. Store indoors between uses. Never fold wet."],
      ["Heat (30–35°C average outdoors)", "Accelerates ink fade, softens adhesive on self-adhesive vinyl", "High-quality inks rated for 60°C+ surface temperature. Premium adhesive vinyl for hot-surface applications."],
    ],
  },
  { type: "p", text: "Recommended material for each scenario in Sri Lanka:" },
  {
    type: "ul",
    items: [
      "Short-term indoor event (under 4 weeks): Economy flex 300gsm or fabric dye-sub",
      "Outdoor event or promotion (4–12 weeks): Frontlit flex 440gsm with reinforced hem and eyelets",
      "Long-term outdoor advertising (3–12 months): Frontlit flex 510gsm with UV lamination, double-welded hem",
      "Coastal location (any duration): 510gsm flex or vinyl with stainless steel eyelets",
      "Building wrap or scaffolding: Mesh PVC — never solid flex for spans above 3 metres in open air",
    ],
  },

  // ── SECTION 6: ARTWORK GUIDE ──
  { type: "h2", text: "Banner Design & Artwork Guide — How to Send Print-Ready Files" },
  { type: "p", text: "Sending correct artwork avoids delays, reprints and disappointment. Here is exactly what our pre-press team needs from you for banner printing in Sri Lanka." },
  { type: "h3", text: "Design Rules for High-Impact Banners" },
  {
    type: "ul",
    items: [
      "One primary message per banner. Banners are read in seconds by people walking or driving past. A banner trying to say five things says nothing. Lead with the single most important message — your brand name, offer headline, or event name.",
      "Use no more than 2 fonts. One display font for headlines, one clean sans-serif for body text. Mixed fonts create visual noise that reduces legibility at distance.",
      "High contrast between text and background. White text on yellow is illegible at distance. Black or dark text on light backgrounds, or white text on dark backgrounds, deliver the best outdoor legibility in Sri Lanka's bright sunlight.",
      "Leave 10% margin on all edges. Content placed too close to the edge risks being cut during trimming or hidden by mounting hardware. Keep all critical content at least 10% of the banner width away from each edge.",
      "Use large, simple images. Complex detailed photographs lose impact at banner scale. Simple, strong visuals — a product close-up, a face, a bold graphic — read better than busy lifestyle photography at distance.",
      "Include a clear call to action. Every banner should answer 'what do I do now?' — visit this address, call this number, scan this QR code. Make the CTA the second-largest element after the headline.",
    ],
  },
  { type: "h3", text: "File Submission Checklist" },
  {
    type: "table",
    head: ["Requirement", "Standard", "Notes"],
    rows: [
      ["File format", "PDF with bleed (preferred)", "Also accepted: AI (fonts outlined), PSD (flattened), EPS"],
      ["Colour mode", "CMYK", "RGB files will be converted — blues and greens may shift"],
      ["Resolution", "100–150 DPI at actual print size", "72 DPI acceptable for banners above 8 ft × 20 ft"],
      ["Bleed", "25 mm all sides (50mm for large banners)", "Background must extend into bleed — no white borders"],
      ["Fonts", "Embedded or outlined", "Missing fonts default to system substitutes — always outline"],
      ["Image links", "Embedded (not linked)", "Linked images not available when file is received cause print delays"],
      ["Black text", "100% K only (not rich black)", "Rich black on text causes misregistration at edges — use 0C 0M 0Y 100K"],
      ["Rich black (backgrounds)", "60C 40M 40Y 100K", "Use only for large dark background areas, not text"],
    ],
  },
  { type: "p", text: "Not sure if your file is ready? Send it to us on WhatsApp or email — our pre-press team checks every artwork file free of charge before printing. We will flag any issues and advise on corrections before a single metre of material is consumed." },

  // ── SECTION 7: INSTALLATION ──
  { type: "h2", text: "How to Hang & Install a Banner — Complete Guide for Sri Lanka" },
  { type: "p", text: "Correct installation is as important as the print quality. A well-printed banner installed poorly will tear, fall, or look unprofessional within days. Here is how to install banners correctly for every common scenario in Sri Lanka." },
  { type: "h3", text: "Outdoor Banner — Rope & Eyelet Method (Most Common)" },
  {
    type: "ol",
    items: [
      "Check mounting points first. Identify two solid anchor points — poles, railings, wall hooks or scaffolding tubes — spaced to match your banner width. Never attach to electrical conduit, gutters or decorative elements that cannot carry load.",
      "Use nylon rope or bungee cords, not wire. Nylon rope allows slight movement in wind without tearing the eyelets. Wire or cable ties do not flex and will cut through eyelets in high wind. Minimum 6mm rope for banners above 6 ft wide.",
      "Thread rope through every eyelet. Do not skip eyelets — each one carries a portion of the load. Skipping eyelets concentrates stress and leads to tearing.",
      "Leave slight slack in the rope. A banner stretched completely rigid will tear along the seam in wind. The banner should be taut but with approximately 5–10mm of movement allowed.",
      "For large banners above 10 ft wide, add a central support line from the middle-top eyelet to a central anchor point above. This prevents the banner from sagging in the centre under its own weight.",
    ],
  },
  { type: "h3", text: "Building Facade — Screw & Bracket Method" },
  {
    type: "ol",
    items: [
      "Install eye-bolt anchors into the building's masonry — never into surface render or cladding alone. Use M8 or larger stainless steel eye-bolts with chemical anchor for concrete, or frame fixings into masonry.",
      "Run stainless steel cable or tensioning wire between anchor points and attach banner with carabiner clips through eyelets.",
      "For banners displayed long-term (3+ months), use UV-resistant stainless steel cable — galvanised cable corrodes rapidly in Sri Lanka's coastal and tropical humidity.",
    ],
  },
  { type: "h3", text: "Indoor Event — Clip Rail System" },
  {
    type: "ol",
    items: [
      "For fabric banners, clip-rail aluminium systems provide a clean, professional display without visible fixings. The top rail clips over the banner edge and hangs from ceiling hooks or suspension wire.",
      "A bottom rail (filled with sand or water in the case of weighted bases) keeps the banner taut and flat — essential for fabric which otherwise ripples under air conditioning airflow.",
      "For stage backdrops, use a pipe-and-drape system or tensioned cable run between stage uprights, with the banner attached via pole pocket along the top edge.",
    ],
  },
  { type: "h3", text: "Common Installation Mistakes to Avoid in Sri Lanka" },
  {
    type: "ul",
    items: [
      "Installing outdoors before monsoon without double-checking fixings. Sri Lanka's southwest monsoon (May–September) and northeast monsoon (November–January) both produce strong gusts that will strip poorly fixed banners.",
      "Using staples or tape as primary fixings. Staples and tape are appropriate for very light indoor banners only. For any outdoor use, they will fail within days.",
      "Hanging without a bottom tensioner. A banner with no weight or fixing at the bottom will flap continuously in even light breeze, creating noise and causing the print to crack along fold lines.",
      "Not waterproofing the back of the print. Our outdoor banners are printed on weatherproof substrate, but if you drill through the banner for any reason, seal the hole with weatherproof tape to prevent water ingress that discolours the print from behind.",
    ],
  },

  // ── SECTION 8: RELATED ──
  { type: "h2", text: "Related Banner & Large Format Printing Services" },
  { type: "p", text: "Businesses ordering banner printing in Sri Lanka frequently also need one or more of these related services for their campaigns and events — backdrop printing, roll up banner printing, hoarding printing, mesh banner printing, flex printing, exhibition banner printing, flag printing and large format printing all pair well with banner orders." },
];

export const BANNER_PRINTING_EXTRA_FAQS: FAQ[] = [
  {
    q: "What is the standard banner printing material used in Sri Lanka?",
    a: "The most widely used banner material in Sri Lanka is frontlit PVC flex at 440gsm. It offers the best balance of outdoor durability, print quality and cost for the majority of commercial applications including retail promotions, outdoor events and roadside advertising. For premium indoor events, dye-sublimation fabric is preferred. For building wraps and large exposed outdoor spans, perforated mesh PVC is recommended to manage wind load.",
  },
  {
    q: "How long does banner printing take in Sri Lanka?",
    a: "Standard banner printing in Sri Lanka takes 1 to 3 working days from artwork approval. For urgent orders, same-day printing is available for orders placed before 10:00 AM with approved artwork ready. Large quantity orders or banners requiring special finishing such as sewn edges or pole pockets may take 3 to 5 working days. Islandwide delivery adds 1 to 2 days depending on destination.",
  },
  {
    q: "What file format should I send for banner printing?",
    a: "The preferred file format for banner printing is PDF with embedded fonts, 25mm bleed on all sides and CMYK colour mode. Adobe Illustrator AI or EPS files with fonts outlined are also accepted. PSD files should be flattened at 100 to 150 DPI at actual print size. JPG and PNG files are accepted at 150 DPI minimum at actual print dimensions. Do not send files designed at A4 size and ask them to be scaled up — this produces blurry output at large format.",
  },
  {
    q: "What banner size is best for outdoor advertising in Sri Lanka?",
    a: "For outdoor shopfront banners visible from the street, a minimum of 4 ft × 8 ft (120 × 240 cm) is recommended. For roadside banners visible from moving traffic, 6 ft × 12 ft (180 × 360 cm) or larger is more effective. The key rule is that text height should be at least 25mm per 3 metres of viewing distance — so a banner viewed from 30 metres needs minimum 250mm letter height to be legible. Custom sizes are available at no size premium.",
  },
  {
    q: "How long do outdoor banners last in Sri Lanka's weather?",
    a: "Outdoor banner lifespan in Sri Lanka depends on material and exposure. Economy 300gsm flex lasts 4 to 8 weeks outdoors. Standard 440gsm frontlit flex lasts 6 to 12 months. Premium 510gsm flex with UV lamination lasts 12 to 24 months. Coastal locations near the sea reduce lifespan by approximately 30% due to salt air. UV radiation, monsoon rain and wind are the primary degradation factors — choosing the right material for the display duration prevents wasted spend.",
  },
  {
    q: "Do you print banners in Sinhala and Tamil for Sri Lankan events?",
    a: "Yes. We print banners with Sinhala, Tamil and English text, including mixed-language designs. If you are providing artwork with Sinhala or Tamil text, please ensure all fonts are outlined or embedded in the file — local language fonts frequently cause substitution issues if not converted to paths. If you need design assistance for Sinhala or Tamil banner layouts, our design team can prepare artwork from your content brief.",
  },
  {
    q: "Can I get same-day banner printing in Colombo?",
    a: "Yes. Same-day banner printing is available in Colombo for orders placed with approved, print-ready artwork before 10:00 AM on working days. Standard sizes in 440gsm frontlit flex with eyelet finish are available for same-day turnaround. Call 0701772626 to confirm availability before sending artwork.",
  },
  {
    q: "What is the difference between flex and fabric banner printing?",
    a: "Flex banners are printed on PVC (plastic) material — rigid, waterproof, and suited for outdoor use. They are the standard choice for most outdoor and general-purpose commercial banners in Sri Lanka. Fabric banners are printed on polyester fabric using dye-sublimation — they are lighter, have a softer appearance, are washable and reusable, and produce richer colours for close-up viewing. Fabric banners are preferred for indoor exhibitions, trade shows, hotel events and any application where a premium visual finish is required.",
  },
  {
    q: "Do you deliver banners islandwide across Sri Lanka?",
    a: "Yes. We deliver banner printing islandwide across Sri Lanka from our Colombo production facility. Deliveries to Colombo and suburbs are typically completed same-day or next-day. Kandy, Galle, Negombo and Kurunegala receive orders within 24 to 48 hours of dispatch. Jaffna, Trincomalee, Batticaloa, Anuradhapura and other outstation locations receive orders within 2 to 3 working days via our courier partners. Pickup from our Colombo facility is also available.",
  },
  {
    q: "Can you design my banner if I don't have artwork?",
    a: "Yes. Our in-house design team can create your banner artwork from your logo, brand colours and content. Send us your logo file, the text you want on the banner, any images to be included, and any reference designs you like — via WhatsApp or email. Design turnaround is typically within 24 hours. A design fee applies based on complexity. For repeat customers and clients on monthly retainers, design support is included at no additional charge.",
  },
];