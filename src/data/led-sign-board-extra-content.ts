import type { Block, FAQ } from "./content-engine";

export const LED_SIGN_BOARD_EXTRA: Block[] = [
  // SECTION 1
  { type: "h2", text: "LED Sign Board Types Compared — Which Is Right for Your Business?" },
  { type: "p", text: "LED sign boards in Sri Lanka come in several distinct formats, each suited to different business types, building facades and budgets. Use this guide to identify the right type before requesting a quote." },
  {
    type: "table",
    head: ["Sign Type", "Best For", "Visible Distance", "Indoor / Outdoor", "Illumination Style", "Complexity"],
    rows: [
      ["LED Lightbox Sign", "Retail shops, pharmacies, supermarkets, clinics", "Up to 50 m", "Both", "Backlit face panel", "Standard"],
      ["Channel Letter Sign", "Restaurants, hotels, banks, car showrooms", "Up to 80 m", "Outdoor", "Front-lit, halo-lit or combo", "Premium"],
      ["LED Neon Flex Sign", "Cafes, bars, salons, boutiques, event spaces", "Up to 30 m", "Both", "LED strip flex glow", "Standard"],
      ["3D Acrylic LED Sign", "Office receptions, corporate lobbies, showrooms", "Up to 40 m", "Both", "Edge-lit or backlit acrylic", "Standard–Premium"],
      ["LED Pylon / Totem Sign", "Petrol stations, shopping malls, hospitals, complexes", "Up to 200 m", "Outdoor", "Fully illuminated panels", "High"],
      ["LED Projecting / Blade Sign", "Narrow lane shops, boutiques, alley-facing businesses", "Up to 60 m along street", "Outdoor", "Double-sided backlit", "Standard"],
      ["LED Fascia Sign", "Franchise retail, supermarkets, multi-branch businesses", "Up to 60 m", "Outdoor", "Front-lit or halo-lit", "Standard–Premium"],
      ["LED Cabinet / Box Sign", "Fuel stations, franchise outlets, roadside businesses", "Up to 100 m", "Outdoor", "Fully enclosed backlit", "Standard"],
    ],
  },
  { type: "p", text: "Not sure which type suits your building? Send us a photo of your shopfront on WhatsApp — our team will recommend the right sign type and layout within the hour." },

  // SECTION 2
  { type: "h2", text: "LED Sign Boards by Business Type — What Works in Sri Lanka" },
  { type: "p", text: "Different industries have different signage requirements. Here is how the most common business types in Sri Lanka use LED sign boards effectively, and what to prioritise in each design." },
  {
    type: "table",
    head: ["Business Type", "Recommended Sign Type", "Key Design Priority", "Typical Size"],
    rows: [
      ["Retail Shop / Boutique", "LED Lightbox or Channel Letters", "Business name clearly readable from road", "4 ft × 2 ft to 10 ft × 3 ft"],
      ["Restaurant / Café", "LED Neon Flex + Lightbox combo", "Warm inviting glow, visible at night", "6 ft × 3 ft + neon accent"],
      ["Pharmacy / Medical", "LED Lightbox (green cross + name)", "24-hour visibility, clear identification", "5 ft × 2 ft minimum"],
      ["Bank / Finance", "Channel Letters (halo-lit)", "Premium brand perception, high contrast", "8 ft × 4 ft to full fascia"],
      ["Car Showroom", "Channel Letters + LED Pylon", "Visible from road at high speed", "Pylon 10–20 ft tall"],
      ["Hotel / Guesthouse", "3D Acrylic LED or Channel Letters", "Luxury appearance, visible at night for guests", "Full facade width"],
      ["Salon / Spa", "LED Neon Flex Sign", "Aesthetic appeal, instagrammable", "3 ft × 1.5 ft to 6 ft × 2 ft"],
      ["Office / Corporate", "3D Acrylic LED (reception) + Fascia (exterior)", "Corporate identity, clean professional look", "Reception: 4 ft × 1.5 ft"],
      ["Supermarket / Grocery", "LED Cabinet Sign or Large Lightbox", "Maximum brightness, visible day and night", "10 ft × 4 ft to 20 ft × 6 ft"],
      ["School / Institution", "LED Lightbox or Fascia Sign", "Clear name, crest/logo legibility", "8 ft × 3 ft minimum"],
      ["Petrol Station", "LED Pylon + Price Board", "Road-facing visibility at distance", "Pylon 15–25 ft tall"],
      ["Fitness Centre / Gym", "Channel Letters or LED Lightbox", "Bold, energetic brand statement", "8 ft × 3 ft minimum"],
    ],
  },

  // SECTION 3
  { type: "h2", text: "LED Sign Board Materials Guide — What Each Component Does" },
  { type: "p", text: "Understanding the materials that go into an LED sign board helps you make a better decision when comparing quotes. A sign quoted at a lower cost may use inferior components that fail within 2–3 years. Here is what each material does and why quality matters." },
  {
    type: "table",
    head: ["Component", "Standard Option", "Premium Option", "Why It Matters"],
    rows: [
      ["Frame / Body", "Mild steel (painted)", "Marine-grade aluminium extrusion", "Aluminium does not rust in Sri Lanka's coastal humidity — steel frames can corrode within 2–3 years near the coast"],
      ["Face Panel", "3mm standard acrylic", "5mm UV-stabilised cast acrylic", "UV-stabilised acrylic resists yellowing from sun exposure — cheap acrylic yellows within 18 months outdoors in Sri Lanka"],
      ["LED Modules", "Generic LED strips", "SMD 5050 or Samsung/Epistar LED modules", "Quality LEDs maintain consistent brightness for 50,000+ hours — generic strips can dim or develop dead spots within 2 years"],
      ["Power Supply", "Generic transformer", "IP67-rated waterproof SMPS driver", "IP67-rated power supplies are sealed against moisture — critical for outdoor signs in Sri Lanka's monsoon conditions"],
      ["Wiring", "Standard PVC wire", "UV-resistant double-insulated cable", "Standard PVC wiring degrades under direct UV and heat — poor wiring is the most common cause of LED sign failure"],
      ["Mounting Hardware", "Mild steel brackets", "Stainless steel anchor bolts and brackets", "Stainless steel resists corrosion — essential for signs mounted on concrete or masonry in humid coastal areas"],
      ["Weatherproof Rating", "IP54 (splash resistant)", "IP65 (fully dust and water jet resistant)", "IP65 is the minimum standard for outdoor signs in Sri Lanka — IP54 is only acceptable for covered outdoor areas"],
    ],
  },
  { type: "p", text: "Always ask your supplier for the IP rating and LED brand before confirming an order. Any reputable LED sign board fabricator in Sri Lanka should be able to provide this information without hesitation." },

  // SECTION 4
  { type: "h2", text: "LED Sign Board Installation Process in Sri Lanka — Step by Step" },
  { type: "p", text: "Understanding how LED sign boards are professionally installed helps you plan the project timeline and prepare your premises. Here is the full process from site survey to switch-on." },
  {
    type: "ol",
    items: [
      "Site Survey — Our team visits your premises to assess the mounting surface, measure the fascia space, check for structural anchor points, and identify the nearest electrical supply point. Free of charge within Colombo and major cities.",
      "Design & Approval — We produce a scaled design showing dimensions, letter heights, colours and placement, presented as a digital mockup on a photo of your actual shopfront. Revisions are included until you are satisfied.",
      "Fabrication — Aluminium frame is cut and welded, face panels produced, LED modules installed and tested, and all weatherproofing applied. Standard time is 7 to 14 working days depending on sign type and complexity.",
      "Electrical Preparation — Ensure your electrician has prepared a dedicated 230V AC feed with an isolator switch accessible from inside the premises. Large signs above 100W need a separate circuit breaker.",
      "Installation — Anchor bolts drilled into the building structure (not just surface cladding), frame mounted and levelled, electrical connections made and tested. Ground-floor jobs finish in 4 to 8 hours; pylons or multi-storey installs take 1 to 2 days with scaffolding or an elevated work platform.",
      "Testing & Handover — LED circuits tested for uniform brightness and correct colour. Power supply, wiring and waterproofing inspected. Operation walkthrough, cleaning guidance and a warranty certificate covering components and workmanship.",
    ],
  },
  { type: "p", text: "Timeline summary: From initial enquiry to completed installation, allow 2 to 4 weeks for standard lightbox and channel letter signs. Complex pylon signs and large fascia projects may require 4 to 6 weeks. Rush fabrication is available — contact us to discuss." },

  // SECTION 5
  { type: "h2", text: "LED Sign Board Size Guide — How to Choose the Right Dimensions" },
  { type: "p", text: "The most common mistake when ordering an LED sign board in Sri Lanka is choosing a size that looks correct on a drawing but is too small in real life. Use these guidelines to determine the right dimensions for your location." },
  { type: "h3", text: "Letter Height vs Viewing Distance" },
  {
    type: "table",
    head: ["Viewing Distance", "Minimum Letter Height", "Recommended Letter Height", "Typical Application"],
    rows: [
      ["5 – 10 m (pedestrian close range)", "50 mm", "75 – 100 mm", "Indoor reception signs, small shopfront nameplates"],
      ["10 – 20 m (pedestrian street)", "100 mm", "150 – 200 mm", "Shopfront lightbox signs, small facade signs"],
      ["20 – 40 m (slow traffic road)", "200 mm", "300 – 400 mm", "Main road retail, restaurant and service business signs"],
      ["40 – 80 m (arterial road)", "400 mm", "500 – 600 mm", "Highway-facing signs, car showrooms, supermarkets"],
      ["80 m+ (expressway / high speed)", "600 mm", "800 mm+", "Pylon signs, petrol stations, large commercial complexes"],
    ],
  },
  { type: "h3", text: "Standard Sign Sizes for Common Sri Lankan Business Types" },
  {
    type: "table",
    head: ["Business Type", "Typical Fascia Width", "Recommended Sign Size", "Notes"],
    rows: [
      ["Small retail shop (single unit)", "10 – 15 ft", "8 ft × 2 ft", "Fill 70–80% of fascia width for maximum impact"],
      ["Medium retail / restaurant", "15 – 25 ft", "12 ft × 2.5 ft", "Allow 1 ft clearance from fascia edge on each side"],
      ["Large shopfront", "25 – 40 ft", "20 ft × 3 ft", "Consider split sign or two-line layout for wide fascias"],
      ["Office lobby / reception", "Wall width varies", "4 ft × 1.5 ft (logo) or 6 ft × 1 ft (name)", "3D acrylic letters preferred for interior corporate use"],
      ["Petrol station forecourt", "N/A (freestanding)", "Pylon: 4 ft × 8 ft face, 15–20 ft tall", "Must comply with local authority height restrictions"],
    ],
  },
  { type: "p", text: "General rule: Your sign should fill at least 70% of the available fascia width. A sign that is too narrow looks lost on the building and misses the visual impact that drives foot traffic in Sri Lanka's busy commercial streets." },

  // SECTION 6
  { type: "h2", text: "LED Sign Board Maintenance Guide — How to Keep Your Sign at Its Best" },
  { type: "p", text: "A properly maintained LED sign board will last 8 to 12 years in Sri Lanka's climate. Follow this maintenance routine to protect your investment and avoid costly repairs." },
  { type: "h3", text: "Routine Maintenance Schedule" },
  {
    type: "table",
    head: ["Task", "Frequency", "How To Do It", "Why It Matters"],
    rows: [
      ["Clean face panel", "Monthly", "Soft microfibre cloth + diluted mild soap. Never use solvent cleaners or abrasive pads.", "Dust and pollution reduce light output. Clean signs are up to 20% brighter than dirty ones."],
      ["Check for dark spots", "Monthly", "View the sign at night from the street. Note any sections that appear dimmer or unlit.", "Dark spots indicate individual LED module failure. Early detection prevents spread."],
      ["Inspect mounting brackets", "Every 6 months", "Check for rust, looseness or movement. Tighten any loose fixings immediately.", "Coastal humidity can corrode steel fixings. Loose signs are a safety hazard."],
      ["Check power supply and wiring", "Annually", "Have a qualified electrician inspect connections, check for heat damage on wiring.", "Overheating wiring is the leading cause of LED sign failure and fire risk."],
      ["Test weatherproofing seals", "Annually (before monsoon)", "Inspect silicone seals around the face panel and cable entry points for cracks or gaps.", "Failed seals allow moisture ingress during monsoon, causing LED module and power supply damage."],
      ["Professional service", "Every 2–3 years", "Book a full inspection with your sign provider — internal cleaning, LED brightness test, electrical check.", "Preventive servicing extends sign life by 3–5 years and prevents unexpected failures."],
    ],
  },
  { type: "h3", text: "Common Problems & What to Do" },
  {
    type: "ul",
    items: [
      "Sign not lighting up at all — Check the isolator switch and circuit breaker first. If power is confirmed, the power supply unit (transformer) may have failed. This is the most common component to replace and is straightforward to swap out.",
      "Flickering sections — Usually indicates a loose LED module connection or a failing LED driver. Do not ignore flickering — it indicates electrical stress that can shorten the life of surrounding modules.",
      "Yellow/discoloured face panel — UV degradation of the acrylic face. The face panel needs replacement. Premium UV-stabilised acrylic should not yellow for 5+ years outdoors.",
      "Water inside the sign — Failed weatherproofing seal. Switch the sign off immediately and contact your fabricator. Operating a water-ingressed sign is a serious electrical safety risk.",
      "Uneven brightness across sections — LED modules age at slightly different rates. This is normal after 5–7 years. Full LED module replacement restores uniform brightness and is far cheaper than a new sign.",
    ],
  },

  // SECTION 7
  { type: "h2", text: "LED Sign Board Installation — Areas We Cover in Sri Lanka" },
  { type: "p", text: "We design, fabricate and install LED sign boards islandwide across Sri Lanka. Our installation teams operate from our Colombo production facility and cover all major cities and towns." },
  {
    type: "table",
    head: ["Region", "Cities & Areas Covered", "Typical Installation Lead Time"],
    rows: [
      ["Western Province", "Colombo, Dehiwala, Moratuwa, Kotte, Nugegoda, Maharagama, Homagama, Piliyandala, Kesbewa, Kaduwela, Gampaha, Negombo, Ja-Ela, Wattala, Ragama, Kalutara, Panadura, Horana", "1–3 days after fabrication"],
      ["Central Province", "Kandy, Matale, Nuwara Eliya, Peradeniya, Katugastota, Gampola", "2–4 days after fabrication"],
      ["Southern Province", "Galle, Matara, Hambantota, Unawatuna, Weligama, Mirissa, Tangalle", "2–4 days after fabrication"],
      ["North Western Province", "Kurunegala, Puttalam, Kuliyapitiya, Chilaw, Wariyapola", "2–3 days after fabrication"],
      ["North Central Province", "Anuradhapura, Polonnaruwa, Dambulla, Habarana", "3–5 days after fabrication"],
      ["Northern Province", "Jaffna, Vavuniya, Mannar, Kilinochchi", "4–6 days after fabrication"],
      ["Eastern Province", "Trincomalee, Batticaloa, Ampara, Arugam Bay", "4–6 days after fabrication"],
      ["Sabaragamuwa Province", "Ratnapura, Kegalle, Balangoda", "2–3 days after fabrication"],
      ["Uva Province", "Badulla, Bandarawela, Monaragala, Ella", "3–5 days after fabrication"],
    ],
  },
  { type: "p", text: "For locations outside major city centres, installation is coordinated with local access arrangements. Contact us with your location and we will confirm the exact installation timeline for your area." },

  // SECTION 8
  { type: "h2", text: "LED Sign Boards vs Other Sign Types — Which Should You Choose?" },
  { type: "p", text: "If you are comparing LED sign boards against other signage options available in Sri Lanka, this guide will help you make the right decision for your business needs and budget." },
  {
    type: "table",
    head: ["Sign Type", "Night Visibility", "Lifespan", "Energy Use", "Maintenance", "Best Suited For"],
    rows: [
      ["LED Sign Board ✅", "Excellent", "8–12 years", "Very low", "Low — no bulb changes", "All commercial businesses — the #1 choice"],
      ["Fluorescent Lightbox", "Good", "3–5 years", "High", "Medium — tube replacements every 1–2 years", "Being phased out — avoid for new installations"],
      ["Painted Signboard", "None (no illumination)", "2–4 years", "Zero", "High — repainting required", "Temporary or very low-budget signage only"],
      ["Traditional Neon", "Excellent", "5–8 years", "High", "High — fragile glass tubes, specialist repair needed", "Legacy installations — being replaced by LED neon"],
      ["Acrylic Sign (unlit)", "None", "5–8 years", "Zero", "Very low", "Interior reception signs where ambient lighting is sufficient"],
      ["Flex Printed Banner Sign", "Poor (no illumination)", "1–2 years", "Zero", "Replacement required regularly", "Temporary promotions, events — not permanent signage"],
    ],
  },
  { type: "p", text: "For any permanent commercial signage in Sri Lanka — shop, office, restaurant, clinic or institution — LED sign boards are the clear choice across all evaluation criteria. The only scenario where an unlit sign board makes sense is for interior installations where ambient lighting is consistently sufficient." },

  // SECTION 11 (related — keep as paragraph; sidebar already exists)
  { type: "h2", text: "Related Sign Board & Signage Services" },
  { type: "p", text: "Businesses ordering LED sign boards in Sri Lanka frequently also require acrylic sign boards, 3D letter signs, lightbox signs, neon signs, pylon signs, wayfinding signage and frosted glass printing — all available under the same project team." },
];

export const LED_SIGN_BOARD_EXTRA_FAQS: FAQ[] = [
  { q: "What is the best type of LED sign board for a shop in Sri Lanka?", a: "For most retail shops in Sri Lanka, an LED lightbox sign is the most cost-effective and practical choice. It provides bright, consistent illumination day and night, is durable in Sri Lanka's tropical climate, and is available in any custom size. For larger businesses or premium brands, channel letter signs (individual illuminated 3D letters) offer a more prestigious appearance. Share a photo of your shopfront and we will recommend the most suitable type." },
  { q: "How long does an LED sign board last in Sri Lanka?", a: "A well-made LED sign board using quality components will last 8 to 12 years in Sri Lanka's climate. LED modules are rated for 50,000 to 100,000 hours of operation. The power supply unit may need replacement after 5–7 years and the acrylic face may yellow if low-grade material is used. IP65-rated signs with marine-grade aluminium frames and UV-stabilised acrylic maximise lifespan." },
  { q: "How long does it take to make and install an LED sign board in Sri Lanka?", a: "Standard LED lightbox sign boards take 7 to 10 working days to fabricate after design approval. Channel letter signs take 10 to 14 working days. Installation is usually completed within 1 day for ground floor shopfronts. Pylon signs and elevated installs take longer due to scaffolding. Total enquiry-to-install timeline is typically 2 to 4 weeks. Rush fabrication is available." },
  { q: "Do you install LED sign boards islandwide in Sri Lanka?", a: "Yes. We install LED sign boards islandwide including Colombo, Kandy, Galle, Negombo, Jaffna, Kurunegala, Matara, Anuradhapura, Trincomalee, Badulla and all other cities and towns. Our installation teams are based in Colombo and travel islandwide; for remote locations we coordinate with local access arrangements." },
  { q: "What is the difference between a lightbox sign and a channel letter sign?", a: "A lightbox sign is a flat, rectangular backlit panel — the entire face is illuminated from behind, showing your brand on a translucent printed face. Channel letter signs use individual three-dimensional letters, each with its own LED illumination. Lightbox signs are more affordable and faster to produce; channel letters look more premium and three-dimensional and are preferred by restaurants, banks, hotels and brand-conscious businesses." },
  { q: "Can you make a custom shaped LED sign board?", a: "Yes. We fabricate LED sign boards in any custom shape — circular, oval, shield, logo-shaped, or any form that matches your brand identity. Custom shapes are cut using CNC routing for precision. The frame, face panel and LED layout are all adapted to the custom shape. More complex shapes require longer fabrication time." },
  { q: "Do LED sign boards work during power cuts in Sri Lanka?", a: "Standard LED sign boards do not have a backup power system and will switch off during a power cut. If continuous illumination during outages is important, we can integrate a UPS (uninterruptible power supply) backup system into the sign installation so it continues operating during short power interruptions." },
  { q: "How do I maintain my LED sign board?", a: "Maintenance is minimal. Clean the face panel monthly with a soft microfibre cloth and mild soap — avoid solvent cleaners. Inspect at night monthly for dark spots or flickering. Check mounting brackets every 6 months for corrosion. Before each monsoon, inspect weatherproof seals around the face panel and cable entry points. A professional service inspection every 2 to 3 years will significantly extend your sign's life." },
  { q: "What electrical supply does an LED sign board need?", a: "LED sign boards in Sri Lanka require a standard 230V AC single-phase supply with a dedicated isolator switch accessible from inside the premises. Small lightboxes draw 20–50 watts; large channel letter or pylon signs may draw 100–300 watts. The circuit amperage should match the sign's wattage as specified after the site survey, and all wiring must comply with Sri Lanka's electrical installation standards." },
  { q: "Do I need permission from local authorities for my LED sign board?", a: "Signage on commercial properties in most areas requires approval from the relevant local authority — Municipal Council, Urban Council or Pradeshiya Sabha depending on location. You will typically need to submit a sign drawing showing dimensions and placement, and pay an annual sign licence fee. We can advise on general requirements for your area and provide the drawings needed for your application." },
];
