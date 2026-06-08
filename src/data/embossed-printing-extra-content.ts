// Additional long-form content for /embossed-printing-sri-lanka.
// Appended below the existing content — does not replace anything.
import type { Block, FAQ } from "./content-engine";

export const EMBOSSED_PRINTING_EXTRA: Block[] = [
  // ── SECTION 1: TECHNIQUES COMPARED ──
  { type: "h2", text: "Embossing Techniques Compared — Blind Emboss, Deboss, Foil Emboss & More" },
  { type: "p", text: "Embossed printing in Sri Lanka covers six distinct techniques, each producing a different tactile and visual result. Choosing the right one depends on your paper stock, design, brand positioning and end use. This is the most important decision before placing an order." },
  {
    type: "table",
    head: ["Technique", "How It Works", "Visual Effect", "Tactile Effect", "Best For", "Complexity"],
    rows: [
      ["Blind Emboss", "Male and female metal dies press the paper upward without ink or foil", "Subtle — design visible only in light and shadow", "Raised above paper surface", "Luxury stationery, corporate letterheads, premium business cards, minimalist brands", "Standard"],
      ["Deboss (Blind)", "Design is pressed downward into the paper surface", "Recessed indentation, shadow in the cavity", "Pressed below paper surface", "Leather-look covers, corporate notebooks, packaging boxes, certificate folders", "Standard"],
      ["Registered Emboss", "Emboss perfectly aligned over an existing printed element", "Printed colour plus raised dimension — most visually rich", "Raised, with colour on the raised surface", "Logos on brochure covers, key design elements on packaging, brand marks", "High — requires precise registration"],
      ["Foil Emboss", "Metallic foil applied simultaneously with embossing in a single die strike", "Metallic dimensional — gold, silver, copper, holographic", "Raised with reflective metallic surface", "Wedding invitations, award certificates, premium business cards, luxury packaging", "High — die and foil setup required"],
      ["Combination Emboss + Separate Foil", "Foil stamping and embossing done as two separate passes", "Maximum metallic depth and sharpness", "Raised with crisp metallic foil", "Ultra-premium invitations, high-end brand collateral, bespoke packaging", "Very high — two passes, two dies"],
      ["Sculptural / Multi-Level Emboss", "Custom dies create multiple relief levels within a single design", "Three-dimensional sculptural relief — multiple depth planes", "Dramatic, highly three-dimensional", "Award plaques, prestige certificates, ultra-luxury packaging, bespoke brand pieces", "Very high — custom die sculpting required"],
    ],
  },
  { type: "p", text: "For most Sri Lankan businesses ordering for the first time: Blind emboss on 350gsm or heavier uncoated stock is the recommended starting point — it delivers a clear premium quality signal at the most accessible entry point. Foil emboss is the step up for wedding stationery, award certificates and luxury brand collateral." },

  // ── SECTION 2: USE CASES BY PRODUCT ──
  { type: "h2", text: "Embossed Printing Applications — What Sri Lankan Businesses Order Most" },
  { type: "h3", text: "Business Cards" },
  { type: "p", text: "Embossed business cards are the most ordered embossed product in Sri Lanka. The standard format is a 90×55mm card on 350–400gsm uncoated or cotton stock with a soft-touch lamination and blind or foil embossed logo. When a recipient holds an embossed card, the raised logo is felt before it is consciously noticed — creating a physical brand impression that flat-printed cards simply cannot deliver. For professionals in law, finance, real estate, architecture and medicine in Colombo and Kandy, embossed business cards are now the expected standard rather than an upgrade." },
  { type: "p", text: "Most popular embossed business card combinations in Sri Lanka:" },
  {
    type: "ul",
    items: [
      "Soft-touch matte lamination + blind emboss logo (front) + matte print (back)",
      "Uncoated 400gsm + foil emboss logo in gold or silver",
      "Cotton stock + blind emboss logo + letterpress text",
      "Soft-touch + spot UV + blind emboss (triple finish — the most premium option)",
    ],
  },
  { type: "h3", text: "Wedding Invitations & Event Stationery" },
  { type: "p", text: "Wedding invitations with foil embossed motifs, monograms or floral elements are among the most intricate and sought-after embossed products in Sri Lanka. The combination of gold or rose gold foil emboss on premium ivory or white cotton stock creates an invitation that communicates celebration, exclusivity and permanence — qualities every couple wants their wedding stationery to convey. Beyond invitations, embossing is used on save-the-date cards, menu cards, ceremony programmes, place cards and thank-you cards to create a cohesive premium stationery suite." },
  { type: "h3", text: "Award Certificates & Institutional Documents" },
  { type: "p", text: "Embossed seals and crests on award certificates carry institutional authority that flat-printed documents cannot replicate. Universities, professional associations, chambers of commerce, and corporate recognition programmes across Sri Lanka use embossed certification documents to communicate the significance and authenticity of the recognition they confer. An embossed seal on a certificate is immediately understood as a mark of genuine institutional authority — a visual and tactile shorthand for legitimacy that embossing has conveyed in official documentation for centuries." },
  { type: "h3", text: "Corporate Presentation Folders" },
  { type: "p", text: "Presentation folders with a blind or foil embossed company logo on the cover transform a functional stationery item into a brand experience. Every time a client opens a folder to review a proposal, the embossed logo is the first physical point of contact with your brand. For corporate pitches, client presentations and tender submissions in Sri Lanka's competitive B2B market, this detail signals the level of care and quality that the proposal content within is expected to deliver." },
  { type: "h3", text: "Premium Packaging Boxes" },
  { type: "p", text: "Luxury retail brands, premium Ceylon tea exporters, fine chocolate makers and cosmetics companies in Sri Lanka use embossed or debossed packaging to elevate the unboxing experience. A debossed brand mark on a rigid gift box lid, or a foil embossed logo on a product sleeve, transforms the packaging into part of the product experience itself. For export-oriented Sri Lankan brands targeting premium international buyers, embossed packaging is often the difference between a product that is perceived as a commodity and one that commands a premium price." },
  { type: "h3", text: "Corporate Notebooks & Diaries" },
  { type: "p", text: "Branded notebooks and diaries with debossed logos on the cover are a popular corporate gift in Sri Lanka — ordered heavily ahead of Avurudu, the New Year, and Christmas gifting seasons. The deboss technique works particularly well on PU leather, linen and textured cover materials, producing a clean, professional brand impression that lasts the full life of the notebook. For conference and seminar organisers, branded notebooks with debossed event branding are a practical takeaway that keeps the brand visible throughout the year." },
  { type: "h3", text: "Letterheads & Correspondence Stationery" },
  { type: "p", text: "Law firms, accountancy practices, management consultancies and financial institutions in Colombo's professional services sector frequently use blind embossed letterheads for formal correspondence. The subtle raised crest or logo visible in raking light signals the age and establishment of the firm — a quality that centuries of legal and financial correspondence have made synonymous with the embossed letterhead. For new firms wanting to project a sense of heritage and authority, an embossed letterhead communicates that positioning more effectively than any flat-printed equivalent." },
  { type: "h3", text: "Book Covers & Annual Reports" },
  { type: "p", text: "Premium hardcover book covers, annual report covers and high-value corporate publications use embossing to signal that the content inside merits the investment in premium production. Sri Lanka's leading listed companies, banks and government institutions commission annual reports with embossed or foil-embossed covers as a statement of institutional quality. Publishers producing limited edition or collector's edition books use embossing to justify the premium over standard editions." },

  // ── SECTION 3: BY INDUSTRY ──
  { type: "h2", text: "Embossed Printing by Industry — Who Orders What in Sri Lanka" },
  {
    type: "table",
    head: ["Industry", "Most Common Embossed Products", "Preferred Technique", "Key Season in Sri Lanka"],
    rows: [
      ["Legal & Professional Services", "Business cards, letterheads, presentation folders, certificate portfolios", "Blind emboss on uncoated / cotton stock", "Year-round — new partner cards, firm rebrands"],
      ["Banking & Finance", "Premium business cards, annual report covers, client gift packaging", "Foil emboss + soft-touch lamination", "Q1 annual reports, year-end client gifts"],
      ["Hospitality & Hotels", "Menu covers, amenity packaging, room key wallets, welcome cards", "Deboss on leather-look covers, foil emboss on packaging", "Peak tourist season (Dec–Jan, Jul–Aug)"],
      ["Weddings & Events", "Invitations, menu cards, place cards, ceremony programmes, thank-you cards", "Foil emboss (gold / rose gold / silver) on cotton or ivory stock", "Peak wedding season (Jan–Apr, Sep–Nov)"],
      ["Education & Institutions", "Degree certificates, award certificates, convocation booklet covers", "Blind emboss seal / registered emboss crest", "Convocation seasons — typically Jun and Nov"],
      ["Luxury Retail & Fashion", "Shopping bag tissue paper, gift boxes, hang tags, garment labels", "Foil emboss or deboss on packaging stock", "Christmas, Avurudu, Vesak, Valentine's Day"],
      ["Ceylon Tea & Exports", "Gift tea boxes, tin lid labels, export packaging, promotional mailers", "Foil emboss (gold) on uncoated packaging board", "Christmas export season (Oct–Dec)"],
      ["Real Estate & Architecture", "Business cards, project brochure covers, presentation folders", "Blind emboss on thick uncoated stock", "Project launch periods"],
      ["Corporate Gifting", "Branded notebooks, diaries, box sets, pen sets with embossed packaging", "Deboss on PU leather cover, foil emboss on box lid", "Avurudu (April), Christmas (December), New Year (January)"],
      ["Healthcare & Pharma", "Medical certificates, doctor's appointment cards, premium clinic stationery", "Blind emboss or registered emboss", "Year-round — clinic rebrands and stationery orders"],
    ],
  },

  // ── SECTION 4: VS OTHER FINISHES ──
  { type: "h2", text: "Embossed Printing vs Other Premium Finishes — Which Should You Choose?" },
  { type: "p", text: "Sri Lankan businesses ordering premium print often compare embossing against spot UV, foil stamping, soft-touch lamination and letterpress. Here is how each finish compares so you can choose the right one — or the right combination — for your project." },
  {
    type: "table",
    head: ["Finish", "Visual Effect", "Tactile Effect", "Works Best On", "Can Combine With", "Impression it Creates"],
    rows: [
      ["Blind Emboss", "Subtle — shadow and light only", "Raised, smooth", "Uncoated 300gsm+", "Foil, soft-touch lamination, letterpress", "Understated luxury, refined elegance"],
      ["Foil Emboss", "Metallic, dimensional, high-impact", "Raised, metallic", "Uncoated or soft-touch 350gsm+", "Soft-touch lamination, matte print", "Prestige, exclusivity, celebration"],
      ["Spot UV", "High-gloss contrast against matte surface", "Slightly raised, smooth gloss", "Coated / laminated stock", "Matte lamination, CMYK print", "Modern, graphic, bold contrast"],
      ["Foil Stamping (flat)", "Metallic flat — high visual impact", "Flat, slightly textured surface", "Any 300gsm+ stock", "Emboss, soft-touch, matte lamination", "Glamour, luxury, celebration"],
      ["Soft-Touch Lamination", "Matte, velvety — premium surface", "Soft, suede-like", "Any laminated stock", "Emboss, foil, spot UV", "Premium, tactile warmth, sophisticated"],
      ["Letterpress", "Deep impression — inked or uninked", "Pressed into paper — deeply tactile", "Thick cotton or uncoated stock 600gsm+", "Foil, blind emboss", "Artisanal, craft, heritage quality"],
      ["Die-Cut (custom shape)", "Custom silhouette shape", "Clean cut edge", "Any stock", "All finishes", "Creative, distinctive, memorable"],
    ],
  },
  { type: "p", text: "Most powerful combinations used by Sri Lankan premium brands:" },
  {
    type: "ul",
    items: [
      "Soft-touch lamination + blind emboss — velvety surface with a raised logo. The most popular premium business card combination in Sri Lanka's corporate sector.",
      "Matte lamination + foil emboss — matte base makes the metallic foil pop dramatically. Standard for luxury wedding invitations and award certificates.",
      "Uncoated stock + blind emboss + letterpress — deep tactile print with raised logo. Favoured by law firms, architects and boutique brands wanting a craft aesthetic.",
      "Spot UV + registered emboss — gloss spot UV on the embossed element creates both visual and tactile contrast. Used for premium brochure covers and annual reports.",
    ],
  },

  // ── SECTION 5: PAPER & STOCK ──
  { type: "h2", text: "Paper & Stock Guide for Embossed Printing — What Works and What Doesn't" },
  { type: "p", text: "Paper choice is the single most important factor in embossing quality. The wrong stock produces a flat, cracked or poorly defined impression regardless of die quality. Here is a complete guide to paper selection for embossed printing in Sri Lanka." },
  {
    type: "table",
    head: ["Paper Type", "Weight Range", "Emboss Quality", "Best Emboss Techniques", "Notes for Sri Lanka"],
    rows: [
      ["Uncoated Art Card", "300–400 gsm", "Excellent", "Blind emboss, registered emboss, foil emboss", "Most widely available in Sri Lanka — good compressibility produces crisp, deep relief"],
      ["Cotton / Rag Stock", "300–600 gsm", "Outstanding", "All techniques — especially blind emboss and letterpress", "Best embossing substrate available — very soft fibre takes the deepest impressions. Used for premium certificates and luxury business cards."],
      ["Textured / Laid Stock", "250–400 gsm", "Very Good", "Blind emboss, foil emboss", "Linen, felt, wove and laid textures enhance the natural quality of blind emboss — design must be bold enough to read against the texture"],
      ["Soft-Touch Laminated Card", "300–400 gsm base + laminate", "Very Good", "Blind emboss, foil emboss — after lamination", "Most popular for business cards — soft-touch surface plus emboss is Sri Lanka's #1 premium business card combination"],
      ["Coated Gloss Art Card", "300–400 gsm", "Fair", "Registered emboss, foil emboss", "Gloss coating reduces compressibility — emboss is less deep and can crack if die pressure is too high. Foil emboss works better than blind emboss on this surface."],
      ["Matte Laminated Card", "300–400 gsm base + laminate", "Good", "Blind emboss, foil emboss", "Matte lamination gives a good embossing surface. Popular for luxury packaging boxes and premium folder covers."],
      ["Thin Coated Paper (below 250gsm)", "Below 250 gsm", "Poor", "Not recommended", "Thin stock is prone to cracking along emboss lines and cannot hold a deep impression. Avoid for embossing — minimum 300gsm strongly recommended."],
      ["Board / Greyboard", "1000–2000 micron", "Good for deboss", "Deboss only — emboss is very limited on rigid board", "Used for hardcover book covers, premium packaging boxes and folder covers — deboss works well on board where emboss would be limited by rigidity"],
    ],
  },
  { type: "p", text: "Minimum weight recommendation: Never emboss on stock below 300gsm. Below this weight, Sri Lanka's humidity causes additional paper instability that leads to waviness around the embossed area. 350gsm uncoated or cotton stock is the recommended starting weight for business cards and invitations." },

  // ── SECTION 6: ARTWORK SETUP ──
  { type: "h2", text: "Artwork Setup Guide for Embossed Printing — File Requirements" },
  { type: "p", text: "Embossing has stricter artwork requirements than flat printing. A file that works perfectly for digital or offset printing may not be suitable for embossing without modification. Here is exactly what is needed." },
  {
    type: "table",
    head: ["Requirement", "Specification", "Why It Matters"],
    rows: [
      ["Emboss artwork format", "Vector PDF or AI file — closed paths only", "The die is machined from vector paths — raster images cannot be used for die production"],
      ["Minimum stroke width", "0.5mm minimum for standard dies, 0.75mm recommended", "Finer strokes below 0.5mm cannot be reliably reproduced in metal dies and will collapse or break"],
      ["Minimum text size (embossed)", "10pt minimum, 12pt recommended", "Small text embossed in metal loses legibility — characters run together under press pressure"],
      ["Emboss layer", "Separate layer clearly labelled \"EMBOSS\" in the file", "Emboss elements must be separated from print elements — confusion causes incorrect die production"],
      ["Print artwork", "Separate file — CMYK, 300 DPI, with 3mm bleed", "Print and emboss elements supplied separately prevents confusion at pre-press stage"],
      ["Registration marks", "Minimum 3 registration marks on emboss artwork", "Registration marks ensure the die aligns precisely with the printed element on registered emboss jobs"],
      ["Foil colour specification", "Specify foil brand and colour code (e.g. KURZ Luxor 220 Gold)", "Foil colours vary significantly between brands — always specify the exact foil reference to avoid colour surprises"],
      ["Proof requirement", "Physical die proof on production stock strongly recommended", "Digital proofs cannot show the depth, sharpness or feel of the embossed result — physical proofs are the only reliable check before full production run"],
    ],
  },
  { type: "h3", text: "What Designs Work Well for Embossing" },
  {
    type: "ul",
    items: [
      "Bold logos with clear outlines — clean edges produce the sharpest die impression",
      "Simple geometric shapes — circles, ovals, diamonds, borders — all emboss cleanly",
      "Serif and sans-serif text above 12pt — readable and well-formed at standard die pressure",
      "Nature-inspired motifs — leaves, florals, feathers — popular for wedding stationery and luxury packaging",
      "Crests and seals — institutional marks emboss with authority on certificates and official documents",
    ],
  },
  { type: "h3", text: "What Designs to Avoid for Embossing" },
  {
    type: "ul",
    items: [
      "Photographic images — cannot be reproduced as emboss die artwork",
      "Gradient or halftone elements — embossing produces uniform relief height — no tonal gradation",
      "Very fine script fonts below 10pt — fine strokes break in the die and run together under pressure",
      "Highly complex designs with many tiny isolated elements — isolated fine elements break or fall from the die",
      "Large solid areas — large flat embossed areas can cause paper distortion and wave — keep embossed areas to logos and defined graphic elements",
    ],
  },

  // ── SECTION 7: PRODUCTION PROCESS ──
  { type: "h2", text: "Embossing Die Making & Production Process — What Happens After You Order" },
  { type: "p", text: "Understanding the embossing production process helps you plan your timeline and prepare your artwork correctly. Embossing is a more involved process than standard offset or digital printing — here is every stage from artwork to finished product." },
  {
    type: "ol",
    items: [
      "Artwork Preparation & Die Artwork. The embossing area of your design must be supplied as a separate vector file — typically a closed-path outline of each element to be embossed. This is different from your print artwork. If your logo is being embossed, we need a clean vector outline file (not a raster image) showing the exact boundary of every embossed element. Fine details below 0.5mm stroke width and text below 8pt are generally not suitable for standard die embossing.",
      "Die Manufacturing. Your emboss design is used to machine-cut a matched pair of metal dies — a male (convex) and female (concave) die that fit together precisely. For standard commercial embossing, dies are typically machined from magnesium or brass. Magnesium dies are more economical and suit most commercial embossing jobs. Brass dies are harder, more durable, and better for fine detail — preferred for long runs and complex designs. Die manufacturing takes 3 to 5 working days and is a one-time cost that applies to all future reprints of the same design.",
      "Press Make-Ready & Test Impression. The dies are mounted on the embossing press and precisely aligned. A test impression is run on the actual production stock to verify the relief depth, edge sharpness and paper behaviour at the specified die pressure. If the paper shows cracking or the relief is insufficient, die pressure and packing are adjusted before the production run begins. This make-ready process is why embossing has a longer minimum lead time than flat digital printing.",
      "Production Embossing Run. Once the make-ready is approved, the full production run proceeds. Each sheet is individually fed through the embossing press — embossing cannot be done on roll-fed high-speed presses, so production speeds are slower than flat printing. For business card quantities of 250 to 500 pieces, embossing run time is typically 2 to 4 hours after make-ready.",
      "Post-Emboss Finishing. After embossing, the sheets undergo any additional finishing — cutting to final size, rounding corners, adding a carry bag string (for hang tags) or folding (for invitations). For business cards, the embossed sheets are guillotine-cut to individual card size after embossing. The embossed relief is naturally robust and is not damaged by standard post-press cutting.",
      "Quality Inspection & Packing. Every embossed job is hand-inspected for relief consistency, edge sharpness, foil adhesion (for foil emboss jobs) and any cracking or deformation. Pieces with visible defects are removed before packing. Embossed pieces are packed flat — never rolled or folded — to preserve the relief through transit.",
    ],
  },
  { type: "p", text: "Typical lead time breakdown for embossed printing in Sri Lanka:" },
  {
    type: "table",
    head: ["Stage", "Time Required", "Notes"],
    rows: [
      ["Artwork approval", "1–2 days", "Your approval of digital proof required before die ordering"],
      ["Die manufacturing", "3–5 working days", "One-time for the design — reused for all reprints"],
      ["Print base (for registered emboss)", "2–3 working days", "Offset or digital print run completes before embossing"],
      ["Embossing press run", "1–2 working days", "Shorter for reprints using existing dies"],
      ["Post-press finishing", "1–2 working days", "Cutting, rounding, packing"],
      ["Total — first order", "8–12 working days", "Plan 2–3 weeks from brief to delivery for first-time orders"],
      ["Total — reorder (existing die)", "4–6 working days", "Die reused — significant time saving on repeat orders"],
    ],
  },

  // ── SECTION 8: RELATED ──
  { type: "h2", text: "Related Premium Print Finishing Services in Sri Lanka" },
  { type: "p", text: "Businesses ordering embossed printing in Sri Lanka frequently combine it with one or more of these complementary premium finishing services — spot UV printing, business card printing, certificate printing, brochure printing, presentation folder printing, packaging box printing, corporate gifting and offset printing all pair well with embossed orders." },
];

export const EMBOSSED_PRINTING_EXTRA_FAQS: FAQ[] = [
  {
    q: "What is the difference between embossing and debossing?",
    a: "Embossing raises the design element above the paper surface — the logo or motif stands proud of the surrounding paper, catching light and creating a shadow that makes it visible. Debossing presses the design element downward into the paper, creating a recessed indentation. Both are done with matched metal dies under high pressure. Embossing is more common for business cards, invitations and certificates. Debossing is more common for notebook covers, packaging boxes and any cover material where a pressed-in mark is preferred over a raised one.",
  },
  {
    q: "What paper weight is needed for embossed printing in Sri Lanka?",
    a: "A minimum of 300gsm is recommended for embossed printing in Sri Lanka. Below this weight, the paper does not have sufficient body to hold the embossed relief cleanly, and Sri Lanka's humidity causes thin stock to wave and distort around the embossed area. The ideal weight for most embossed products is 350 to 400gsm on uncoated art card, or 300 to 600gsm on cotton or rag stock. Cotton stock produces the deepest and most defined embossed impressions of any paper type.",
  },
  {
    q: "How long does embossed printing take in Sri Lanka?",
    a: "First-time embossed printing orders in Sri Lanka typically take 8 to 12 working days — allow 2 to 3 weeks from brief to delivery. The die manufacturing stage (3 to 5 working days) is the main lead time factor and is a one-time requirement. Reorder of an existing design using the same die takes 4 to 6 working days. Rush production is occasionally possible for reorders but not for first-time orders requiring new die manufacture.",
  },
  {
    q: "What is blind embossing and when should I use it?",
    a: "Blind embossing creates a raised relief effect using the paper's own surface — no ink, no foil, no additional colour. The design is visible only through the play of light and shadow across the raised surface. It is the most subtle and refined embossing technique, associated with understated luxury. Blind embossing is the right choice for minimalist brands, professional services, corporate stationery and any application where the brand positioning is quiet confidence rather than overt glamour. It works best on uncoated or textured paper stocks where the relief reads most clearly.",
  },
  {
    q: "What is foil embossing and how is it different from foil stamping?",
    a: "Foil embossing combines metallic foil application with a raised embossed relief in a single die strike — the foil is applied to the raised surface simultaneously. Foil stamping (flat foil) applies metallic foil to a flat surface without any dimensional relief. Foil embossing produces a richer, more three-dimensional metallic effect than flat foil stamping. It is the premium technique for wedding invitations, award certificates and luxury packaging. Flat foil stamping is more economical and suited to larger coverage areas where the cost of a deep-relief die would be excessive.",
  },
  {
    q: "What is the minimum order quantity for embossed printing in Sri Lanka?",
    a: "The minimum order quantity for embossed printing in Sri Lanka is typically 100 pieces for business cards and small stationery items. The one-time die manufacturing cost makes very small quantities (below 100 pieces) uneconomical per unit. Most clients order 250 to 500 pieces for business cards, 100 to 250 pieces for wedding invitations, and 100 to 500 pieces for certificates. Volume pricing applies above 500 pieces with a significant per-unit reduction. Contact us for a quote based on your specific quantity requirement.",
  },
  {
    q: "Can I emboss on both sides of a business card?",
    a: "Yes, double-sided embossing is possible but requires two separate die sets and two press passes, adding to both cost and production time. In practice, most Sri Lankan business card orders feature embossing on the front face only — typically the logo — with standard flat printing on the reverse. Double-sided embossing is more common on premium folded invitations and greeting cards where both sides are visible and contribute to the overall luxury presentation.",
  },
  {
    q: "Is embossed printing suitable for packaging boxes in Sri Lanka?",
    a: "Yes. Embossing and debossing are widely used on premium packaging boxes in Sri Lanka for tea, chocolates, cosmetics, jewellery and corporate gifts. Debossing is more common than embossing on rigid packaging board as the board's rigidity limits how high an emboss can rise, while a deboss impression reads clearly in the concave surface. For folding carton packaging, embossing works well on the cover panels. Foil emboss on packaging is particularly effective for export-oriented Sri Lankan products targeting premium international buyers.",
  },
  {
    q: "Can I reuse the embossing die if I reorder the same design?",
    a: "Yes. Embossing dies are durable and are retained for reorders of the same design. Magnesium dies typically last 50,000 to 100,000 impressions. Brass dies last 500,000 impressions or more. For a design ordered repeatedly — such as annual business card reprints or recurring stationery orders — the die cost is a true one-time investment. When reordering, simply specify the existing design and your die will be located, mounted and used without a new die manufacturing charge.",
  },
  {
    q: "Do you offer embossed wedding invitations in Sri Lanka?",
    a: "Yes. Wedding invitations with foil embossed motifs, monograms and decorative elements are one of our most ordered products. We produce wedding invitation suites including invitations, RSVP cards, envelope liners, menu cards and place cards with foil emboss finishing in gold, silver, rose gold, copper and holographic foils. We work with cotton and heavyweight uncoated stocks for traditional and contemporary Sri Lankan wedding aesthetics. Production lead time for embossed wedding stationery is 2 to 3 weeks — order at least 6 weeks before your event date to allow for design approval, die production and delivery.",
  },
];