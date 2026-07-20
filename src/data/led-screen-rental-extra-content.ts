// Additional long-form content for /led-screen-rental-sri-lanka.
// Appended below the existing content — does not replace anything.
import type { Block, FAQ } from "./content-engine";

export const LED_SCREEN_RENTAL_EXTRA: Block[] = [
  // ── SECTION 1: WHAT IS LED SCREEN RENTAL ──
  { type: "h2", text: "LED Screen Rental Sri Lanka — What You Are Actually Hiring" },
  { type: "p", text: "LED screen rental in Sri Lanka means hiring a modular LED video wall system — a tiled array of individual LED panels that combine to form a large, seamlessly joined display screen. Unlike a projector and screen setup, an LED video wall produces its own light, works in full daylight, has no minimum throw distance, and can be built to virtually any size or aspect ratio by adding or removing panels." },
  { type: "p", text: "In Sri Lanka's event industry, LED screens are used in two primary configurations. Indoor LED walls — used in hotel ballrooms, conference centres, exhibition halls and corporate venues — are built from fine-pitch panels (P2 to P4) producing sharp, close-up viewing quality. Outdoor LED walls — used for concerts, political rallies, outdoor festivals, sports events and mobile roadshow trucks — use coarser panels (P4 to P10) with higher brightness (5,000 to 10,000 nits) to remain visible in direct Sri Lankan sunlight." },
  { type: "p", text: "Every LED screen rental in Sri Lanka includes the panels themselves, the processing hardware (video processor / scaler), the structural rigging or ground-support frame, power distribution, signal cabling, and a trained technical operator who manages the screen throughout your event. Delivery, installation, operation and removal are all part of the rental service — you do not handle the equipment yourself." },

  // ── SECTION 2: USE CASES BY EVENT TYPE ──
  { type: "h2", text: "LED Screen Rental by Event Type — What Works in Sri Lanka" },
  {
    type: "table",
    head: ["Event Type", "Recommended Screen", "Typical Size", "Key Requirement", "Common Venues in Sri Lanka"],
    rows: [
      ["Corporate Conference / AGM", "Indoor P3 or P3.9", "4×3 m to 6×3 m", "Sharp presentation display, HDMI laptop input, confidence monitor for presenter", "BMICH, Cinnamon Grand, Shangri-La, Waters Edge, Cinnamon Lakeside"],
      ["Product Launch", "Indoor P3, dramatic reveal setup", "6×3 m to 8×4 m", "Video playback, colour accuracy for brand visuals, synchronised reveal moment", "Hotel ballrooms, Colombo showrooms, BMICH, rooftop venues"],
      ["Award Ceremony / Gala", "Indoor P2.5 to P3", "6×3 m to 8×3 m", "Photographic-quality winner reveals, name and logo display, live camera IMAG feed", "Kingsbury, Galle Face Hotel, Hilton, Cinnamon Grand ballroom"],
      ["Concert / Live Music", "Outdoor P3.9 to P6", "8×4 m to 12×5 m", "High brightness for stage wash overspill, live camera IMAG, weather resistance", "Outdoor amphitheatres, Sugathadasa Stadium, open grounds islandwide"],
      ["Political Rally / Public Event", "Outdoor P6 to P10", "8×4 m to 10×5 m (often multiple screens)", "Maximum brightness for daylight, wide viewing angle, robust structure for large crowds", "Open grounds, sports stadiums, town centres across all provinces"],
      ["Wedding Reception", "Indoor P3 to P3.9", "4×3 m to 6×3 m", "Photo and video slideshow display, warm colour reproduction, ambient integration", "Hotel ballrooms, banquet halls, garden venues, beach resorts"],
      ["Exhibition / Trade Show", "Indoor P3 to P4", "3×2 m to 6×3 m per booth", "Multi-day hire, product video loop, bright enough to compete with venue lighting", "BMICH, Cinnamon Grand exhibition space, Galadari ballroom"],
      ["Sports Event", "Outdoor P6 to P10 (scoreboard/replay)", "Varies — 4×2 m scoreboard to 10×5 m replay wall", "Fast refresh rate for motion content, high brightness, durable outdoor structure", "SSC, R. Premadasa Stadium, Rangiri Dambulla stadium, provincial grounds"],
      ["Roadshow / Mobile Activation", "Mobile LED truck — outdoor P6 to P10", "3×4 m to 5×3 m on vehicle", "Moving audience — must be visible while truck is stationary and during slow approach", "Street-level, market areas, shopping complexes — islandwide routing"],
      ["School / University Event", "Indoor P3 to P4", "4×3 m to 6×3 m", "PowerPoint and video display, microphone confidence monitor, easy presenter operation", "School halls, university auditoriums, outdoor prize-giving grounds"],
      ["Religious / Cultural Festival", "Outdoor P6 to P10", "6×3 m to 10×5 m", "Daylight operation, crowd-scale viewing, robust overnight operation", "Temple grounds, Vesak festival sites, cultural centres, open fields"],
    ],
  },

  // ── SECTION 3: PIXEL PITCH GUIDE ──
  { type: "h2", text: "Pixel Pitch Guide — Which LED Screen Specification Do You Need?" },
  { type: "p", text: "Pixel pitch is the single most important technical specification when renting an LED screen in Sri Lanka. It is the distance in millimetres between the centre of one LED cluster and the centre of the next. A smaller pixel pitch number means more pixels per square metre, finer detail and sharper image — but also higher rental cost. Choosing the wrong pixel pitch for your viewing distance either wastes budget (too fine for the distance) or produces a visibly pixelated image (too coarse for close viewing)." },
  {
    type: "table",
    head: ["Pixel Pitch", "Type", "Minimum Viewing Distance", "Brightness", "Best For"],
    rows: [
      ["P1.5 – P2", "Ultra-fine indoor", "1.5 – 2 m", "800 – 1,200 nits", "Boardroom presentations, luxury event backdrops, broadcast studios, close-range exhibition displays"],
      ["P2.5 – P3", "Fine indoor", "2.5 – 3 m", "1,000 – 1,500 nits", "Corporate conferences, hotel ballroom events, product launches, BMICH exhibition halls"],
      ["P3.9 – P4", "Standard indoor / covered outdoor", "4 – 6 m", "1,500 – 3,000 nits", "Stage backdrops at concerts, award ceremonies, outdoor events under covers, large conference halls"],
      ["P5 – P6", "Outdoor semi-permanent", "5 – 8 m", "4,000 – 6,000 nits", "Outdoor events, sports venues, roadshows, exhibitions in open spaces"],
      ["P8 – P10", "Outdoor long-distance", "8 – 15 m", "6,000 – 10,000 nits", "Political rallies, outdoor concerts, mobile LED trucks, highway advertising, large sports fields"],
    ],
  },
  { type: "p", text: "Practical rule for Sri Lanka: Divide your minimum audience viewing distance (in metres) by 3 to get the maximum acceptable pixel pitch. A conference room where the back row is 9 metres from the screen needs a maximum P3 panel. An outdoor rally where the furthest viewers are 30 metres away can use P10 comfortably." },
  { type: "p", text: "For most corporate events in Sri Lanka — hotel conferences, award nights, product launches — P3 or P3.9 is the standard specification and delivers excellent results in all common event venues including Cinnamon Grand, Shangri-La, Waters Edge, BMICH, Kingsbury and Galle Face Hotel." },

  // ── SECTION 4: INDOOR VS OUTDOOR ──
  { type: "h2", text: "Indoor vs Outdoor LED Screen Rental — Key Differences" },
  {
    type: "table",
    head: ["Specification", "Indoor LED Screen", "Outdoor LED Screen"],
    rows: [
      ["Pixel pitch range", "P1.5 to P4", "P4 to P10"],
      ["Brightness", "800 – 2,000 nits", "4,000 – 10,000 nits"],
      ["Weatherproofing", "IP20 – IP30 (indoor use only)", "IP65 – IP67 (rain and dust proof)"],
      ["Viewing in daylight", "No — requires controlled lighting", "Yes — visible in full Sri Lanka sunlight"],
      ["Cabinet weight", "Lighter — 8 to 12 kg per panel", "Heavier — 15 to 25 kg per panel"],
      ["Mounting method", "Hanging from truss, ground-stack or wall-mounted", "Ground-stack on steel frame, mobile truck, scaffold tower"],
      ["Power consumption", "Lower — 150 to 300W per m²", "Higher — 300 to 600W per m²"],
      ["Minimum viewing distance", "1.5 to 5 m depending on pitch", "5 to 15 m depending on pitch"],
      ["Typical Sri Lanka use", "Hotels, conference centres, BMICH, ballrooms, showrooms", "Outdoor concerts, rallies, festivals, sports, roadshows"],
      ["Generator required?", "Venue power usually sufficient for small to medium screens", "Always — dedicated generator required for outdoor events"],
      ["Setup time", "2 to 4 hours for standard stage backdrop", "4 to 8 hours for large outdoor installation"],
    ],
  },

  // ── SECTION 5: STANDARD SIZES ──
  { type: "h2", text: "Standard LED Screen Sizes for Events in Sri Lanka" },
  { type: "p", text: "LED screens are modular — size is built from standard cabinet dimensions. Most rental providers in Sri Lanka use 500×500mm or 500×1000mm cabinets. This means screen sizes increase in those steps. Here are the most commonly rented configurations for each event type." },
  {
    type: "table",
    head: ["Screen Size", "Approx. Dimensions", "Resolution (P3.9)", "Typical Use in Sri Lanka", "Venue Scale"],
    rows: [
      ["Small — 3×2 m", "3 m wide × 2 m tall", "768 × 512 px", "Press conferences, small product launches, boardroom backdrops", "Rooms up to 100 pax"],
      ["Medium — 4×3 m", "4 m wide × 3 m tall", "1024 × 768 px", "Corporate conferences, award ceremonies, hotel ballroom events", "Venues up to 300 pax"],
      ["Standard — 6×3 m", "6 m wide × 3 m tall", "1536 × 768 px", "Concert stage backdrop, major product launches, large conferences", "Venues up to 800 pax"],
      ["Large — 8×4 m", "8 m wide × 4 m tall", "2048 × 1024 px", "Major concerts, outdoor festivals, political events, exhibitions", "Up to 3,000 pax"],
      ["Extra Large — 10×5 m+", "10 m wide × 5 m tall", "2560 × 1280 px", "National concerts, large political rallies, sports events, mega outdoor shows", "5,000+ pax"],
      ["Dual Screen Setup", "Two screens flanking main stage", "Varies per screen", "Large stage shows — IMAG (image magnification) so all audience sees presenter", "1,000+ pax"],
      ["Mobile LED Truck", "Typically 3×4 m to 5×3 m fixed to vehicle", "P6 to P10 outdoor", "Roadshows, mobile activations, political campaigns, roving promotions", "Street-level — moving audience"],
      ["Custom Portrait Format", "2 m wide × 4 m tall", "Varies", "Entrance towers, column wraps, narrow stage flanks", "Architectural integration"],
    ],
  },
  { type: "p", text: "Note on aspect ratios: Standard 16:9 widescreen content (PowerPoint, video) works best on screens wider than they are tall. If your content is 16:9, request a screen ratio to match. Custom aspect ratios are available — just specify if your content format is non-standard (square social media content, portrait video, etc.) at the time of booking so the screen configuration is planned accordingly." },

  // ── SECTION 6: WHAT'S INCLUDED ──
  { type: "h2", text: "What Is Included in an LED Screen Rental Package in Sri Lanka" },
  { type: "p", text: "LED screen rental in Sri Lanka is a full-service hire — not equipment-only. Here is exactly what a complete rental package includes and what may be quoted separately depending on your event requirements." },
  { type: "h3", text: "Included in Every Rental" },
  {
    type: "ul",
    items: [
      "LED panels and cabinets — the specified pixel pitch, quantity and configuration for your required screen size",
      "Video processor / scaler — the hardware that receives your input signal and maps it to the LED wall at the correct resolution",
      "Ground-support frame or rigging hardware — the structural steel frame for ground-stacking, or the truss and motors for hanging the screen from a stage rig",
      "Power distribution and cabling — power boxes, data cables and power cables to connect the panels, processor and frame",
      "Delivery to venue — transportation of all equipment to your event location",
      "Professional installation — assembly, rigging or ground-stacking, electrical connection and commissioning by trained technicians",
      "On-site technical operator throughout the event — a dedicated LED technician present for the full event duration to manage playback, troubleshoot and respond to any issues",
      "Removal and collection after the event — full de-rig and transport back after the event ends",
    ],
  },
  { type: "h3", text: "Usually Quoted Separately — Confirm at Booking" },
  {
    type: "table",
    head: ["Item", "Notes"],
    rows: [
      ["Generator hire", "Required for all outdoor events and venues without adequate power — specify screen size so generator capacity is calculated correctly"],
      ["Truss and motor hire (for hanging screens)", "If your venue requires the screen to be flown (hung) rather than ground-stacked — confirm ceiling height, load rating and anchor points with your venue before booking"],
      ["Content creation and formatting", "If your presentation files, videos or graphics need to be reformatted to match the screen resolution — supply content at least 5 days before the event"],
      ["Multi-day hire", "Exhibition and conference hires running 2 to 5 days are quoted differently to single-day event hires"],
      ["Outstation delivery surcharge", "Events outside Colombo and suburbs — Kandy, Galle, Negombo, Jaffna etc. — include transport distance in your enquiry"],
      ["Live camera IMAG system", "If you want live camera feeds displayed on the LED wall (presenter magnification) — cameras, switcher and director are additional"],
      ["Streaming and recording", "If the event is being live-streamed to YouTube, Facebook or Zoom — encoding equipment and operators are separate from LED screen hire"],
    ],
  },

  // ── SECTION 7: MOBILE LED TRUCK ──
  { type: "h2", text: "Mobile LED Truck Rental Sri Lanka — Roadshow & Activation Screens" },
  { type: "p", text: "Mobile LED trucks are a distinct category of LED screen rental in Sri Lanka — a high-brightness outdoor LED video wall permanently mounted on a lorry or truck chassis, with an onboard generator. The truck drives to your location, parks, and operates as a standalone mobile advertising or event screen. No external power connection is required." },
  { type: "h3", text: "How Mobile LED Trucks Are Used in Sri Lanka" },
  {
    type: "ul",
    items: [
      "Product launches and brand activations — park outside a target retail location or competitor and run brand content directly to passing consumers",
      "Political campaigns — the highest-volume use case in Sri Lanka — trucks travel pre-defined routes displaying candidate content and broadcasting live rally audio",
      "FMCG roadshows — reach semi-urban and rural markets in Kurunegala, Anuradhapura, Matara, Jaffna that traditional outdoor media does not cover efficiently",
      "Event amplification — park trucks outside a venue to display event content, sponsor branding and crowd direction to people approaching the entrance",
      "Emergency public information — government and NGO campaigns to reach communities quickly across multiple districts simultaneously",
    ],
  },
  { type: "h3", text: "Mobile LED Truck Specifications" },
  {
    type: "table",
    head: ["Specification", "Typical Range in Sri Lanka"],
    rows: [
      ["Screen size", "3×2 m to 6×3 m (fixed to vehicle body)"],
      ["Pixel pitch", "P6 to P10 outdoor"],
      ["Brightness", "5,000 to 8,000 nits — visible in full daylight"],
      ["Power source", "Onboard diesel generator — self-sufficient"],
      ["Viewing angle", "160° horizontal — wide street coverage"],
      ["Content playback", "USB media player — MP4 video loop, image slideshow"],
      ["Audio", "Integrated PA speaker system on truck"],
      ["Operating hours", "12 to 16 hours per fuel tank"],
      ["Crew included", "Driver + LED technician / content operator"],
      ["Minimum hire", "Typically 1 day (8 to 12 operating hours)"],
    ],
  },
  { type: "p", text: "Planning tip for Sri Lanka: Mobile LED trucks require prior route approval from the Police Traffic Division for movement in and around Colombo. For roadshows covering multiple districts, coordinate district-level police clearances at least 7 to 10 working days before the activation. Your LED truck supplier should be familiar with this process — if they are not, that is a red flag." },

  // ── SECTION 8: CONTENT GUIDE ──
  { type: "h2", text: "Content Guide — How to Prepare Visuals for LED Screens" },
  { type: "p", text: "The most common cause of poor LED screen image quality at events in Sri Lanka is not the screen — it is the content. Slides and videos prepared for a laptop screen or projector do not automatically look good on a large LED wall. Here is exactly how to prepare content that will look sharp and professional on your hired LED screen." },
  { type: "h3", text: "Video Content Specifications" },
  {
    type: "table",
    head: ["Specification", "Recommended", "Minimum Acceptable", "Notes"],
    rows: [
      ["Resolution", "1920×1080 (Full HD) or 3840×2160 (4K)", "1280×720 (HD)", "Match aspect ratio to your screen configuration — 16:9 for standard widescreen"],
      ["Frame rate", "25fps or 30fps", "24fps", "Higher frame rates (60fps) produce smoother motion on LED — ideal for product reveal videos"],
      ["File format", "MP4 (H.264 or H.265 codec)", "MOV, AVI", "MP4 H.264 is universally compatible with all LED processors used in Sri Lanka"],
      ["Bitrate", "15 – 50 Mbps", "8 Mbps", "Low bitrate causes visible compression artefacts, especially on dark scenes and gradients"],
      ["Colour profile", "Rec. 709 (standard broadcast colour)", "sRGB", "Avoid HDR and wide colour gamut profiles — LED processors typically do not handle them correctly"],
      ["Audio", "AAC stereo, embedded in MP4", "MP3 separate file", "Confirm with AV team how audio from video will be routed to the PA system"],
    ],
  },
  { type: "h3", text: "Presentation (PowerPoint / Keynote) Guidelines" },
  {
    type: "ul",
    items: [
      "Set slide size to 1920×1080px (16:9) — the default \"widescreen\" setting in PowerPoint. Do not use the old 4:3 ratio.",
      "Use high-contrast text and backgrounds. White text on dark backgrounds reads well on LED. Light grey text on white is invisible. Black text on white can cause a \"blooming\" effect on high-brightness outdoor screens.",
      "Minimum font size 24pt for body text. Smaller text is illegible at event scale. Test by viewing your slide from 5 metres away on your monitor — if you cannot read it, neither can your audience.",
      "Avoid very thin lines and fine detail. Fine elements that look sharp on a laptop screen can disappear or alias on an LED wall with a different pixel pitch.",
      "Export as PDF backup. Always bring a PDF version of your slides on a USB drive as a backup in case PowerPoint fonts or animations fail to render correctly on the event computer.",
      "Bring all files on a USB drive AND a second USB drive. Never rely on email or cloud download at the venue — Sri Lanka's venue internet speeds are unpredictable.",
    ],
  },
  { type: "h3", text: "Image Specifications" },
  {
    type: "ul",
    items: [
      "Minimum 1920×1080px resolution — larger is better",
      "JPEG at quality 90%+ or PNG format",
      "sRGB colour profile",
      "Avoid heavily compressed social media images — download quality is not screen quality",
    ],
  },
  { type: "h3", text: "Input Connections — What the LED Processor Accepts" },
  {
    type: "table",
    head: ["Input Type", "Availability", "Notes"],
    rows: [
      ["HDMI (Type A)", "Standard on all systems", "Most common — from laptop, media player, broadcast device"],
      ["DisplayPort", "Available on most systems", "Preferred for 4K signal at 60fps — specify at booking if required"],
      ["SDI (HD-SDI / 3G-SDI)", "Available on broadcast-grade systems", "Required for professional broadcast camera feeds — confirm at booking"],
      ["USB media playback", "Available on some processors", "Loop video directly from USB without a laptop — confirm compatibility at booking"],
      ["NDI network video", "Available on advanced systems", "For streaming and broadcast integration — requires stable wired network at venue"],
    ],
  },
  { type: "p", text: "Always bring your own HDMI cable (minimum 3 metres) and a USB-C to HDMI adapter if your laptop uses USB-C only. Do not rely on the venue or LED team to supply laptop adaptors." },

  // ── SECTION 9: SETUP & LOGISTICS ──
  { type: "h2", text: "LED Screen Rental Setup — Timelines & Logistics in Sri Lanka" },
  { type: "p", text: "Poor planning of setup time is the most common cause of last-minute stress at events with LED screens in Sri Lanka. Here is a realistic guide to how long setup takes for each screen size and configuration." },
  { type: "h3", text: "Setup Time by Screen Size" },
  {
    type: "table",
    head: ["Screen Size", "Setup Time", "De-rig Time", "Minimum Access Required Before Event"],
    rows: [
      ["3×2 m (small indoor)", "1.5 – 2 hours", "1 hour", "3 hours before event start"],
      ["4×3 m (medium indoor)", "2 – 3 hours", "1.5 hours", "4 hours before event start"],
      ["6×3 m (standard indoor)", "3 – 4 hours", "2 hours", "5 hours before event start"],
      ["8×4 m (large indoor/outdoor)", "4 – 6 hours", "2 – 3 hours", "6 – 8 hours before event start"],
      ["10×5 m+ (extra large outdoor)", "6 – 10 hours", "3 – 4 hours", "Day before for complex rigging"],
      ["Mobile LED truck", "30 – 60 min (screen already mounted)", "Drives away after event", "1 hour for positioning and generator connection"],
    ],
  },
  { type: "h3", text: "Pre-Event Checklist for Event Organisers" },
  {
    type: "ol",
    items: [
      "Confirm venue access time with your venue coordinator — LED screen setup cannot begin until loading dock or service entrance access is granted. Confirm this in writing at least 1 week before the event.",
      "Provide a venue floor plan — share the stage dimensions, ceiling height, audience seating layout and any overhead obstructions (chandeliers, HVAC ducts, sprinklers) with the LED team at least 5 days before the event.",
      "Confirm power availability — for indoor events, check with the venue whether the available power supply can support the LED screen. For a 6×3m P3 indoor screen, expect approximately 6 to 10 amps at 230V. For outdoor events, a dedicated generator is always required.",
      "Supply all content at least 5 days before the event — this allows the LED team to test your files, format them correctly for the screen resolution and identify any issues before the event day.",
      "Plan a technical rehearsal — at minimum 2 hours before audience arrival, the full AV system including the LED screen, sound, lighting and presenter microphones should run a full rehearsal. This is when issues are found and fixed — not during the live event.",
      "Confirm the technical operator's contact number — you should have the direct mobile number of the LED technician who will be on-site for the full event. Do not communicate through a central office number on the event day.",
      "Plan for monsoon weather for outdoor events — if the event is outdoors during southwest monsoon (May to September) or northeast monsoon (November to January), confirm the IP rating of the screen panels and have a rain contingency plan agreed in advance with the LED supplier.",
    ],
  },

  // ── SECTION 10: BOOKING GUIDE ──
  { type: "h2", text: "How to Book LED Screen Rental in Sri Lanka — Step by Step" },
  {
    type: "ol",
    items: [
      "Define your requirements before enquiring. Prepare: event date and time, venue name and location, indoor or outdoor, expected number of attendees, required screen size or available stage width, type of content (presentations, video, live camera), whether a generator is needed, and any special requirements (IP rated for rain, specific aspect ratio, dual screens).",
      "Request a written quotation with full specifications. A professional quote should specify the pixel pitch, panel quantity, processor model, frame type (ground-stack or rigged), included services, operator hours, delivery area and any exclusions. If a supplier cannot provide this level of detail, the equipment quality and service reliability may be uncertain.",
      "Confirm the booking with a deposit. LED screen rental equipment is capacity-limited — peak event dates (December, April and major public holidays) book out weeks in advance. Confirm your booking with a deposit as soon as the quote is approved. A verbal confirmation does not reserve the equipment.",
      "Supply content and technical information 5 days before the event. Send all video files, presentation files, images and a run-of-show order to the LED team at least 5 working days before the event. This allows time for content testing, format conversion if needed, and a pre-event walkthrough of the programme flow.",
      "Confirm logistics 2 days before the event. Reconfirm venue access time, loading dock details, parking for the delivery vehicle, contact person at the venue on the day, and any last-minute programme changes. Share the final run-of-show with the LED operator so they know every cue in advance.",
      "Technical rehearsal on the event day. Build a minimum 2-hour technical rehearsal into your event schedule before the audience arrives. Run through every piece of content in order, test all inputs, check presenter confidence monitors, and have the LED operator walk the room to verify image quality from the back row.",
    ],
  },
  { type: "h3", text: "How Far in Advance to Book" },
  {
    type: "table",
    head: ["Event Type", "Recommended Booking Lead Time"],
    rows: [
      ["Small corporate event (under 200 pax)", "7 to 14 days"],
      ["Medium conference or product launch (200–500 pax)", "14 to 21 days"],
      ["Large event or concert (500–2,000 pax)", "3 to 6 weeks"],
      ["Mega event, national show or outdoor concert (2,000+ pax)", "6 to 12 weeks"],
      ["December events (Christmas and New Year — peak season)", "8 to 12 weeks — equipment books out fast"],
      ["Avurudu season events (April)", "6 to 10 weeks"],
      ["Mobile LED truck for political or FMCG roadshow", "2 to 4 weeks (plus police route clearance time)"],
    ],
  },
];

export const LED_SCREEN_RENTAL_EXTRA_FAQS: FAQ[] = [
  {
    q: "What pixel pitch LED screen should I rent for a corporate event in Sri Lanka?",
    a: "For most corporate events in Sri Lanka — conferences, award nights, product launches and hotel ballroom events — P3 or P3.9 is the standard recommendation. P3 is ideal for venues where the back row is within 9 metres of the screen. P3.9 is excellent value for most conference and banquet hall setups. For boardroom or VIP close-viewing setups where the audience is within 3 metres, P2 or P2.5 produces sharper results. For outdoor events where the audience is 10 metres or more from the screen, P6 or P8 outdoor panels are appropriate.",
  },
  {
    q: "How much does LED screen rental cost in Sri Lanka?",
    a: "LED screen rental in Sri Lanka is quoted based on screen size, pixel pitch, event duration, location and whether additional services such as generator hire or live camera IMAG are required. Contact us on 0701772626 or WhatsApp with your event date, venue, approximate screen size requirement and number of attendees — we will provide a detailed written quotation within 2 working hours.",
  },
  {
    q: "Is an LED screen better than a projector for events in Sri Lanka?",
    a: "For most events in Sri Lanka, LED screens outperform projectors in several important ways. LED screens produce their own light so they work in ambient light without blackout — no need to dim the room. They have no minimum throw distance so they can be placed close to the stage or audience. Outdoor LED screens are fully visible in daylight, which projectors cannot achieve. LED screens also have no lamp to fail mid-event. Projectors remain a lower-cost option for small venues and tight budgets, but for professional corporate events, concerts and outdoor use, LED video walls are the preferred standard in Sri Lanka's event industry.",
  },
  {
    q: "Can LED screens be used outdoors in Sri Lanka's monsoon weather?",
    a: "Yes. Outdoor LED screens used in Sri Lanka are rated IP65 — fully sealed against dust and water jets from any direction. IP65-rated panels can operate in heavy rain, making them suitable for outdoor events during both the southwest monsoon (May to September) and northeast monsoon (November to January). The structural frame and power distribution for outdoor screens must also be weatherproofed. Always confirm the IP rating of outdoor screens with your supplier before booking — indoor panels rated IP20 cannot be used outdoors in rain.",
  },
  {
    q: "What size LED screen do I need for my event?",
    a: "A general guideline is that the screen width should be at least one-sixth of the distance to the furthest viewer. For a conference room 18 metres deep, a minimum 3-metre-wide screen is recommended. For a 300-person ballroom 25 metres deep, a 4 to 6 metre wide screen works well. For outdoor events with audiences spread over 50 metres, an 8 to 10 metre screen is more appropriate. Share your venue dimensions and audience size with us and we will recommend the right configuration.",
  },
  {
    q: "Do you provide LED screen rental islandwide in Sri Lanka?",
    a: "Yes. We provide LED screen rental for events islandwide across Sri Lanka including Colombo, Kandy, Galle, Negombo, Jaffna, Kurunegala, Anuradhapura, Trincomalee, Matara, Badulla and all other cities and towns. Our installation team travels islandwide with equipment. Outstation events require advance logistical planning — include your venue location in your enquiry so we can factor in transport, accommodation for the technical team and any local permit requirements.",
  },
  {
    q: "Is a technical operator included in the LED screen rental?",
    a: "Yes. Every LED screen rental includes a dedicated trained technical operator who is on-site for the full event duration. The operator manages content playback, input switching, screen calibration and any technical issues during the event. You do not operate the screen yourself. For events running multiple days, operators work in shifts to ensure continuous coverage. The operator's contact number is provided to the event organiser before the event day.",
  },
  {
    q: "How far in advance should I book LED screen rental in Sri Lanka?",
    a: "For small to medium corporate events, 7 to 21 days advance booking is usually sufficient. For large events, concerts and outdoor events, book 3 to 6 weeks ahead. For peak season events in December and April, book 8 to 12 weeks in advance — equipment availability is limited during these periods. Mobile LED trucks for political roadshows should be booked 3 to 4 weeks ahead to allow time for police route approval. Contact us early to check availability for your event date.",
  },
  {
    q: "What video format should I send for my LED screen content?",
    a: "MP4 format with H.264 codec at 1920×1080 resolution (Full HD) is the universally compatible standard for LED screens in Sri Lanka. For 4K content, MP4 H.265 at 3840×2160 is accepted on most modern processors. Send content at minimum 15 Mbps bitrate. Supply content at least 5 days before the event to allow for testing and format verification. Always bring a USB drive with your content to the event as a backup regardless of how files were previously transferred.",
  },
  {
    q: "Can I display live camera footage on the LED screen at my event?",
    a: "Yes. Live camera IMAG (image magnification) — where presenter or performer footage from a camera is displayed live on the LED wall — is a standard capability. It requires a camera, video switcher and camera operator in addition to the LED screen itself. IMAG is particularly useful for events above 300 to 400 attendees where audience members at the back cannot clearly see the stage. Specify at booking whether live camera feeds are required so the correct processing hardware is included in the system.",
  },
];