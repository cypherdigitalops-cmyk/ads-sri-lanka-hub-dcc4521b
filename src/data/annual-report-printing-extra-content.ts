// Additional long-form content for /annual-report-printing-sri-lanka.
// Appended below existing content — does not replace anything.
import type { Block, FAQ } from "./content-engine";

export const ANNUAL_REPORT_PRINTING_EXTRA: Block[] = [
  // ── SECTION 1: BINDING OPTIONS COMPARED ──
  { type: "h2", text: "Annual Report Binding Options — Which Is Right for Your Organisation" },
  { type: "p", text: "The binding method is the first physical quality signal a reader receives before they open a single page. For Sri Lankan corporates, listed companies and NGOs, the binding choice communicates the level of institutional investment behind the report. Here is every binding option available for annual report printing in Sri Lanka, with the right choice for each organisation type." },
  {
    type: "table",
    head: ["Binding Method", "How It Works", "Page Range", "Lies Flat?", "Durability", "Best For", "Grade"],
    rows: [
      ["Perfect Binding", "Pages glued to a squared spine — like a trade paperback book", "48 – 500+ pages", "Partially", "Good — spine may crack if forced flat", "Most corporate annual reports, NGO publications, large private company reports", "Standard Corporate"],
      ["Section Sewn (Thread Sewn) + Perfect or Case Bound", "Signatures (folded page groups) sewn together with thread before binding", "80 – 500+ pages", "Yes — lies fully flat", "Excellent — lasts decades", "CSE-listed companies, banks, major insurance firms, premium institutional reports", "Premium / CSE Grade"],
      ["Case Binding (Hardcover)", "Sewn signatures glued to rigid hardboard cover — traditional book construction", "80 – 500+ pages", "Yes", "Outstanding — archive quality", "Flagship annual reports, commemorative publications, premium CSE listed entities", "Premium Plus"],
      ["Saddle Stitch (Staple)", "Folded pages stapled through the spine", "8 – 48 pages", "Yes", "Basic — pages can loosen over time", "Short annual reviews, interim reports, sustainability summaries, NGO brief reports", "Economy"],
      ["Spiral / Wire-O Binding", "Pages punched and bound with metal or plastic coil", "Any page count", "Yes — fully flat", "Good — individual pages may tear at holes", "Working documents, draft annual reports for internal review, training manuals", "Functional / Draft"],
      ["Canadian (Half-Canadian) Binding", "Wire-O spine with a wrap-around soft cover", "30 – 200 pages", "Yes", "Good", "Annual reports needing flat-opening but wanting cover protection — CSR reports, sustainability reports", "Semi-Premium"],
    ],
  },
  { type: "p", text: "Recommendation for CSE-listed companies in Sri Lanka: Section sewn perfect binding is the industry standard for listed company annual reports. The sewn binding ensures pages do not fall out over years of reference — a consideration for documents that shareholders may retain for 5 to 10 years. Case binding (hardcover) is reserved for landmark years — IPOs, 25th or 50th anniversaries, flagship sustainability reports." },

  // ── SECTION 2: PAPER & STOCK ──
  { type: "h2", text: "Paper Specifications for Annual Reports — Complete Guide" },
  { type: "p", text: "Paper selection affects every quality perception — how the report feels in the hand, how photographs reproduce, how text reads, and how the document ages. Here is a complete reference for every paper specification used in annual report printing in Sri Lanka." },
  { type: "h3", text: "Interior Pages" },
  {
    type: "table",
    head: ["Paper Grade", "Weight", "Surface", "Image Quality", "Best For", "Typical Use"],
    rows: [
      ["Gloss Art (Coated)", "115 – 170 gsm", "High gloss", "Excellent — vivid colour, sharp photos", "Photo-heavy sections, design-led pages", "Chairman's message spreads, operational photography sections"],
      ["Silk / Satin Art (Coated)", "115 – 170 gsm", "Low sheen — no glare", "Very good — rich colour, readable under light", "Mixed text and image — most widely used interior stock", "Full interior pages of most Sri Lankan corporate annual reports"],
      ["Matt Art (Coated)", "115 – 150 gsm", "Flat, no sheen", "Good — slightly less vibrant than silk", "Text-heavy pages, financial statements section", "Financial tables, notes to accounts, governance sections"],
      ["Uncoated Offset", "80 – 120 gsm", "Natural, slightly textured", "Fair — ink absorbs into paper, less sharp", "Financial tables only — or specialist design choice", "Rarely used for full annual reports — sometimes used for financial statement insert"],
      ["Premium Uncoated (FSC)", "100 – 130 gsm", "Natural, premium texture", "Good — warm, luxurious feel", "Sustainability reports, ESG sections, CSR narratives", "Annual reports with strong sustainability positioning"],
      ["Recycled Coated", "115 – 150 gsm", "Silk or matt", "Good", "Sustainability-focused organisations", "Annual reports for ESG-committed companies — highlight in the report's production notes"],
    ],
  },
  { type: "h3", text: "Cover Stocks" },
  {
    type: "table",
    head: ["Cover Stock", "Weight", "Finish Options", "Best For"],
    rows: [
      ["Gloss Art Board", "300 – 350 gsm", "Gloss lamination, spot UV, foil stamp", "Vibrant photographic covers, bold graphic covers"],
      ["Silk Art Board", "300 – 350 gsm", "Soft-touch lamination, matt lamination, spot UV, emboss", "Most popular for Sri Lankan corporate annual reports — premium yet subdued"],
      ["Uncoated Premium Board", "300 – 400 gsm", "Blind emboss, foil stamp, letterpress", "Minimalist luxury covers — law firms, boutique financial houses, NGOs"],
      ["Textured / Felt Board", "270 – 350 gsm", "Blind emboss, foil stamp", "Premium tactile covers — board members' copies, commemorative editions"],
      ["Linen / Cotton Stock", "300 – 600 gsm", "Blind emboss, letterpress, foil", "Hardcover case binding interiors — the most prestigious annual report presentation"],
      ["Recycled / Kraft Board", "280 – 350 gsm", "Matt lamination, blind emboss", "Sustainability-positioned organisations — strong ESG messaging"],
    ],
  },
  { type: "p", text: "Standard for most Sri Lankan corporate annual reports: 130–150 gsm silk art interior + 350 gsm silk art board cover with soft-touch lamination. This combination provides excellent colour reproduction, a premium tactile experience and reasonable production cost for quantities of 300 to 2,000 copies." },

  // ── SECTION 3: COVER FINISHING ──
  { type: "h2", text: "Annual Report Cover Finishing Options — From Standard to Prestige" },
  { type: "p", text: "The cover finish is the most visible quality signal of an annual report. Here is every finishing technique available for annual report covers in Sri Lanka, and the effect each produces." },
  {
    type: "table",
    head: ["Finish", "Effect", "Applied To", "Impression", "Typical Users in Sri Lanka"],
    rows: [
      ["Gloss Lamination", "Bright, reflective surface — vivid colour", "Full cover", "Bold, dynamic, commercial", "FMCG companies, retail brands, dynamic growth-stage companies"],
      ["Matt Lamination", "Flat, non-reflective — sophisticated look", "Full cover", "Professional, understated, modern", "Professional services, mid-size corporates"],
      ["Soft-Touch Lamination", "Velvety, suede-like surface — premium tactile feel", "Full cover", "Premium, luxurious, high-end", "Banks, insurance companies, CSE-listed entities, major corporates"],
      ["Spot UV Varnish", "High-gloss UV coating on selected elements only — dramatic contrast on matt base", "Logo, title, key graphic elements", "Contemporary, striking visual contrast", "Design-forward companies, technology sector, media companies"],
      ["Foil Stamping (Gold / Silver)", "Metallic foil applied to logo or title — flat metallic shine", "Logo, company name, year", "Prestige, heritage, institutional authority", "Banks, listed companies, centenary editions, award-year reports"],
      ["Foil Emboss", "Metallic foil with raised dimensional relief", "Logo or key mark", "Maximum prestige — the highest premium finish available", "Top-tier CSE listed companies, flagship anniversary editions"],
      ["Blind Emboss", "Raised relief in the cover stock — no colour or foil", "Logo, crest or abstract form", "Understated luxury — quality visible only on close inspection", "Law firms, professional bodies, NGOs, heritage brands"],
      ["Deboss", "Pressed indentation in the cover stock", "Logo, spine title, abstract texture", "Tactile refinement, modern premium", "Boutique financial institutions, premium CSR reports"],
      ["Die-Cut Window", "Shaped cut-out in cover reveals interior page", "Cover front — reveals photography or pattern inside", "Creative, distinctive, high design impact", "Design-award-seeking companies, brand-forward organisations"],
      ["Velvet / Flocking", "Textured velvet applied to cover areas", "Selected cover zones", "Ultra-premium tactile luxury", "Luxury sector — gems, hospitality, premium consumer brands"],
    ],
  },
  { type: "p", text: "Most impactful combination used by Sri Lankan listed companies: Soft-touch lamination (full cover) + spot UV on the logo and cover headline + blind emboss on the company crest. This three-finish combination produces a cover that looks premium from across the room and feels premium in the hand — without requiring foil, which adds significant cost for long print runs." },

  // ── SECTION 4: PRODUCTION TIMELINE ──
  { type: "h2", text: "Annual Report Production Timeline — From Brief to Delivery" },
  { type: "p", text: "Annual report production in Sri Lanka is always driven by a fixed external deadline — the AGM date, the CSE filing deadline, or the shareholder distribution target. Missing that deadline is not an option. Here is a realistic production timeline working backward from delivery date." },
  {
    type: "table",
    head: ["Stage", "Activity", "Lead Time Required", "Who Is Responsible", "Common Delay Causes"],
    rows: [
      ["1. Design brief & content planning", "Theme, page count, structure, photography brief", "14 – 21 days before design starts", "Client communications / IR team", "Board approval delays for theme and messaging direction"],
      ["2. Narrative content writing", "Chairman's message, CEO review, business overview, divisional summaries", "21 – 30 days", "Client — senior management input required", "Executives unavailable for review, multiple rounds of edits"],
      ["3. Photography & infographic production", "Corporate photography sessions, data visualisation, map graphics", "14 – 21 days (can run parallel to writing)", "Photographer + design team", "Scheduling leadership photo sessions, access to operational sites"],
      ["4. Financial statements finalisation", "Audit sign-off, financial data, notes to accounts", "Depends on audit timeline — often the critical path", "Auditors + Finance team", "The single most common cause of annual report deadline pressure in Sri Lanka"],
      ["5. Design & layout", "Full InDesign layout of all sections — narrative + financial", "14 – 21 days for complete layout after all content received", "Design team", "Late financial content changes requiring page re-flow"],
      ["6. Internal review & approvals", "CEO, CFO, Board review — legal and compliance check", "5 – 10 days (budget 2 review rounds)", "Client — executive team", "Multiple reviewers with conflicting feedback, late financial figure changes"],
      ["7. Pre-press & print-ready file preparation", "Preflight check, colour proof, plate-making", "3 – 5 days", "Printer pre-press team", "RGB images, missing fonts, incorrect bleed in supplied PDF"],
      ["8. Hard proof (colour proof)", "Printed colour proof for client sign-off before full run", "2 – 3 days for proof + client approval", "Printer + client", "Client requests additional changes after seeing hard proof"],
      ["9. Offset print run", "Printing all interior sections and covers", "3 – 5 days depending on quantity and page count", "Printer press team", "Press scheduling conflicts, paper supply delays"],
      ["10. Finishing & binding", "Lamination, spot UV / foil, folding, collating, perfect binding / case binding", "3 – 5 days", "Printer finishing team", "Foil and emboss die production time (add 3–5 days if ordered)"],
      ["11. Quality check & packing", "Random sampling, pagination check, cover inspection, boxing", "1 – 2 days", "Printer QC team", "Pagination errors requiring reprint of affected signatures"],
      ["12. Delivery", "Islandwide distribution — Colombo same day, outstation 1–3 days", "1 – 3 days depending on distribution locations", "Courier + client distribution team", "Multiple delivery addresses not confirmed in advance"],
    ],
  },
  { type: "h3", text: "Total Time Required — Summary" },
  {
    type: "table",
    head: ["Scenario", "Total Production Time", "Notes"],
    rows: [
      ["Standard corporate annual report (perfect bound, no foil)", "6 – 8 weeks from brief", "Assumes financial statements available within 2 weeks of brief"],
      ["Premium annual report (soft-touch + spot UV + section sewn)", "8 – 10 weeks from brief", "Additional time for section sewing and soft-touch lamination curing"],
      ["Flagship annual report (hardcover + foil emboss)", "10 – 14 weeks from brief", "Foil emboss die manufacturing adds 5 days — plan accordingly"],
      ["Rush annual report (perfect bound, no special finishing)", "3 – 4 weeks if all content ready", "Requires pre-approved design template and pre-approved photography — no content development time"],
    ],
  },
  { type: "p", text: "The most important planning advice: Start design work on the narrative sections — chairman's message, business overview, strategy — before the financial statements are finalised. These sections can be designed, reviewed and approved while the audit is still in progress. Only the financial section requires waiting for audited figures. This parallel workflow is how Sri Lanka's most experienced annual report producers consistently hit tight deadlines." },

  // ── SECTION 5: CSE COMPLIANCE CHECKLIST ──
  { type: "h2", text: "CSE Annual Report Compliance Checklist — Sri Lanka Listed Companies" },
  { type: "p", text: "For companies listed on the Colombo Stock Exchange, the annual report must meet specific content requirements mandated by the CSE Listing Rules, the Securities and Exchange Commission of Sri Lanka (SEC) and the Companies Act No. 07 of 2007. This checklist covers the key content requirements — verify current rules with the CSE and your legal team as regulations are updated periodically." },
  {
    type: "table",
    head: ["Section", "Required Content", "Regulatory Reference", "Design Consideration"],
    rows: [
      ["Corporate Information", "Company name, registration number, registered address, directors' names, company secretary, auditors, bankers, legal counsel", "Companies Act 2007 / CSE Listing Rules", "Typically presented on an inner cover or first interior page — design to be clean and legible"],
      ["Chairman's Statement", "Review of year's performance, outlook, acknowledgements", "Best practice / CSE governance", "High-profile section — premium photography and design treatment expected"],
      ["Board of Directors", "Director profiles — name, designation, qualifications, experience, committee memberships", "CSE Listing Rules 7.10 (Corporate Governance)", "Uniform portrait photography for all directors — brief must be issued to photographer in advance"],
      ["Corporate Governance Report", "Board structure, committees (audit, remuneration, nominations), meetings attendance, independence declarations", "CSE Listing Rules 7.10 — mandatory for listed companies", "Dense text section — clean typography and table formatting critical for compliance legibility"],
      ["Audit Committee Report", "Committee composition, scope of work, findings, recommendation to board", "CSE Listing Rules 7.10.6", "Standard text section — signed by Audit Committee Chairman"],
      ["Remuneration Committee Report", "Policy, executive remuneration bands, committee composition", "CSE Listing Rules 7.10.5", "Standard text — remuneration bands presented in table format"],
      ["Directors' Responsibility Statement", "Directors' responsibility for financial statements, internal controls, going concern", "Companies Act 2007 / CSE Rules", "Standard single-page section — signed by Chairman and CEO/MD"],
      ["Independent Auditor's Report", "Auditor's opinion, basis, key audit matters, responsibilities", "Sri Lanka Standards on Auditing (SLSA) / Companies Act", "Reproduced verbatim from auditor — typography must be clear and unaltered"],
      ["Financial Statements", "Statement of Financial Position, Income Statement, Statement of Changes in Equity, Cash Flow Statement, Notes to Accounts", "Sri Lanka Accounting Standards (SLFRS/LKAS)", "Most complex layout section — consistent table formatting, clear hierarchy essential"],
      ["Ten-Year Summary", "Key financial indicators over last 10 financial years", "CSE Listing Rules — best practice for listed entities", "Data visualisation opportunity — charts showing trends significantly improve readability"],
      ["Shareholder Information", "Top 20 shareholders, public holding percentage, share price history, stock exchange information", "CSE Listing Rules 7.6", "Tables and share price chart — standard format across all CSE companies"],
      ["Notice of AGM", "Date, time, venue, agenda, proxy form", "Companies Act 2007 s.137–142", "Typically last pages of report — often printed on different stock to allow easy removal"],
    ],
  },
  { type: "p", text: "Important note: The above is a general reference guide only. CSE listing rules, SEC requirements and accounting standards are updated periodically. Always verify current requirements with your legal counsel, auditors and the CSE directly before finalising the annual report structure. Your printer's role is production — compliance verification is the responsibility of the company's legal and finance team." },

  // ── SECTION 6: ARTWORK & FILE GUIDE ──
  { type: "h2", text: "Artwork & File Preparation Guide — Annual Report Printing Sri Lanka" },
  { type: "p", text: "Annual reports are the most technically complex print job most organisations ever produce. A well-prepared file prevents costly delays, reprints and colour errors. Here is the complete pre-press checklist for annual report printing in Sri Lanka." },
  { type: "h3", text: "Software & File Format Requirements" },
  {
    type: "table",
    head: ["Requirement", "Standard", "Notes"],
    rows: [
      ["Layout software", "Adobe InDesign (preferred)", "InDesign is the industry standard for annual report layout in Sri Lanka — ensures correct bleed, master page consistency and professional typography control. QuarkXPress also accepted."],
      ["Export format", "PDF/X-1a or PDF/X-4 with all fonts embedded", "Never send native InDesign files to the printer — always export to press-ready PDF with correct settings. Supply one PDF per section if preferred (cover, interior, financial)."],
      ["Colour mode", "CMYK throughout — no RGB or spot colours without prior agreement", "All images, graphics and colour elements must be converted to CMYK before PDF export. Pantone colours should be converted to CMYK equivalents unless foil or spot ink is specifically ordered."],
      ["Image resolution", "300 DPI at actual placement size for all photographs", "The most common cause of rejected annual report files. An image placed at 50% of its original size is effectively 600 DPI — fine. An image placed at 200% of original is 150 DPI — too low and will appear soft in print."],
      ["Bleed", "3 mm bleed on all pages on all four sides", "Any element that extends to the page edge — full-bleed photography, colour backgrounds, rules — must extend 3 mm beyond the trim line. Text and logos must be kept 5 mm inside the trim line (safe zone)."],
      ["Fonts", "All fonts embedded in the PDF — not just subset-embedded", "Select 'Embed all fonts' in PDF export settings. Never rely on the printer having the same fonts installed — if a font is missing, InDesign substitutes a default that changes spacing and layout."],
      ["Black text", "100% K only (0C 0M 0Y 100K) for all body text", "Rich black (combined CMYK) on small text causes misregistration — characters appear blurry. Reserve rich black (60C 40M 40Y 100K) for large headlines and full-bleed backgrounds only."],
      ["Spot UV / foil artwork", "Separate layer or spot colour named 'SpotUV' or 'Foil' on cover file", "Spot UV and foil elements must be supplied as 100% black shapes on a separate named layer or spot colour. The printer uses this to create the UV or foil die — if not supplied separately, the finish cannot be applied correctly."],
      ["Table and chart artwork", "All financial tables and charts as vector in InDesign or exported from Excel as vector PDF", "Never place Excel screenshots or low-resolution chart images. Charts and tables must be vector or built within InDesign to ensure crisp lines at print resolution."],
      ["Page order", "Supply as reader spreads — pages in correct reading order with page numbers confirmed", "Confirm the total page count is divisible by 4 (for saddle stitch) or 8 (for section sewn binding) before sending to press. Odd page counts require blank pages — confirm placement with printer."],
    ],
  },
  { type: "h3", text: "Page Count Rules for Binding" },
  {
    type: "ul",
    items: [
      "Saddle stitch: Total page count must be divisible by 4. Minimum 8 pages, maximum 48 pages.",
      "Perfect binding: Total page count must be divisible by 4. Minimum 48 pages for a spine wide enough for spine text. Spine width = (page count × paper thickness in mm) ÷ 2.",
      "Section sewn: Interior pages divided into signatures of 8 or 16 pages each — total page count must be divisible by 8 or 16 for clean signature division.",
      "Spine text: For perfect-bound reports, spine text is practical only when spine width is 5mm or more (approximately 80 pages at 130gsm).",
    ],
  },

  // ── SECTION 7: PHOTOGRAPHY BRIEF ──
  { type: "h2", text: "Annual Report Photography Guide — What to Commission for Sri Lankan Reports" },
  { type: "p", text: "Photography is where most Sri Lankan annual reports are won or lost visually. Generic stock photography produces a generic report. Original commissioned photography creates an authentic document that genuinely represents the organisation. Here is a complete photography brief framework for annual report production in Sri Lanka." },
  {
    type: "table",
    head: ["Photography Category", "What to Capture", "Technical Requirement", "Usage in Report"],
    rows: [
      ["Leadership Portraits", "Chairman, CEO, all board directors, senior management team", "Consistent background, lighting and crop across all subjects. 3:4 portrait ratio minimum. RAW format.", "Board of directors section, chairman's message, CEO review, management profiles"],
      ["Operational Photography", "Production facilities, service delivery, branch operations, equipment, teams at work", "Natural working conditions — not staged. Mix of wide establishing shots and close detail shots. Releases for identifiable people required.", "Business overview spreads, divisional performance sections, inside cover"],
      ["Customer / Stakeholder Photography", "Customers using products or services, community interactions, partner meetings", "Authentic — not posed. Signed model releases for all identifiable subjects. Mix ethnicities and regions where relevant to Sri Lankan operations.", "Stakeholder value sections, CSR sections, brand narrative spreads"],
      ["Product Photography", "Core products, new launches, flagship services, branded environments", "Studio quality or environmental. White or contextual backgrounds depending on design brief.", "Product section covers, business overview, marketing highlights"],
      ["Location & Environmental", "Branches, outlets, facilities — exterior and interior", "Architectural quality — straight lines, no lens distortion. Both day and dusk/night where lighting makes an impact.", "Geographic coverage sections, network expansion narratives, sustainability sections"],
      ["Community & CSR", "CSR project sites, beneficiaries, events, volunteer activities", "Documentary style — authentic moments, not staged. Releases for identifiable subjects.", "Sustainability report sections, CSR narrative, community investment spreads"],
      ["Cover Photography", "Hero image that encapsulates the year's theme — conceptual, landscape or people", "Highest resolution available — minimum 300 DPI at A4 cover size. Shoot with cover text placement in mind.", "Front cover, back cover, section divider spreads"],
    ],
  },
  { type: "p", text: "Key advice for Sri Lankan annual report photography: Book photography sessions at least 6 weeks before the printing deadline. Leadership portrait sessions require coordination across multiple executives' schedules — the most difficult logistical element of annual report production. Always shoot more than you need — having 3 to 4 usable portraits per director means the design team can select the best match for the layout." },
];

export const ANNUAL_REPORT_PRINTING_EXTRA_FAQS: FAQ[] = [
  {
    q: "How long does annual report printing take in Sri Lanka?",
    a: "A standard corporate annual report with perfect binding takes 7 to 12 working days from receipt of final, approved, print-ready PDF artwork. A premium report with soft-touch lamination, spot UV and section sewn binding takes 10 to 15 working days. A flagship report with hardcover case binding and foil embossing takes 14 to 21 working days due to die manufacturing for the emboss and foil stamp. For the full production process from brief to delivery — including design, photography, content review and print — allow 6 to 10 weeks depending on specification.",
  },
  {
    q: "What binding should I use for a CSE-listed company annual report in Sri Lanka?",
    a: "Section sewn perfect binding is the standard for CSE-listed company annual reports in Sri Lanka. The sewn binding ensures pages remain secure over years of shareholder reference — a consideration for documents retained for 5 to 10 years. Simple perfect binding is acceptable for shorter reports and private company publications. Hardcover case binding is reserved for flagship anniversary editions, IPO prospectuses and premium commemorative publications. Saddle stitch is appropriate for annual reviews and sustainability summaries under 48 pages.",
  },
  {
    q: "What paper specification is standard for annual report printing in Sri Lanka?",
    a: "The most widely used specification for corporate annual reports in Sri Lanka is 130 to 150 gsm silk art paper for interior pages and 350 gsm silk art board with soft-touch lamination for the cover. This combination delivers excellent colour reproduction for photography and data graphics, a premium tactile cover experience, and reasonable production cost for typical print quantities of 300 to 2,000 copies. Heavier interior stocks (170 gsm) are used for shorter, design-heavy annual reviews where a more substantial feel is a priority.",
  },
  {
    q: "What file format should I send for annual report printing?",
    a: "The required format for annual report printing is PDF/X-1a or PDF/X-4 exported from Adobe InDesign, with all fonts embedded, all images at 300 DPI in CMYK colour mode, 3mm bleed on all sides, and crop marks included. Supply the cover and interior as separate PDF files. All spot UV or foil elements must be supplied on a separate named layer or spot colour. Never send native InDesign files — always export to press-ready PDF. Send files at least 5 working days before the required print start date to allow time for preflight checking and hard proof production.",
  },
  {
    q: "What is soft-touch lamination and why do Sri Lankan companies use it on annual reports?",
    a: "Soft-touch lamination is a special laminate film applied to the cover that produces a velvety, suede-like surface texture — often described as feeling like soft leather or velvet. It is the most popular premium cover finish for corporate annual reports in Sri Lanka because it communicates quality immediately through touch, before the report is even opened. It is also highly resistant to fingerprints, which keeps the cover looking pristine through handling at AGMs and shareholder distributions. Soft-touch lamination works best combined with spot UV on selected elements — the contrast between the soft matt base and the high-gloss UV creates a dramatic visual and tactile effect.",
  },
  {
    q: "What is the minimum and maximum quantity for annual report printing in Sri Lanka?",
    a: "There is no strict minimum or maximum for annual report printing in Sri Lanka. Digital printing is cost-effective for quantities of 50 to 300 copies. Offset printing becomes more economical above 300 copies and is the standard for most listed company and major corporate annual reports. Typical print runs for Sri Lankan listed companies range from 500 to 3,000 copies. Government institutions and major banks sometimes require 5,000 to 10,000 copies for nationwide distribution. Contact us with your page count, specification and required quantity for an accurate quotation.",
  },
  {
    q: "Do you deliver annual reports islandwide in Sri Lanka?",
    a: "Yes. We deliver annual report printing islandwide from our Colombo production facility. For companies requiring distribution to branch offices, shareholder addresses or CSE stakeholders across the island, we coordinate split deliveries to multiple locations. Colombo deliveries within 24 hours of production completion. Outstation deliveries to Kandy, Galle, Negombo within 1 to 2 days. Jaffna, Trincomalee, Anuradhapura and other outstation locations within 2 to 4 days. For AGM distribution requiring same-day delivery to multiple Colombo venues, advance logistics coordination is required — contact us at least 1 week before the AGM date.",
  },
  {
    q: "Can you print both the physical annual report and produce a digital PDF version?",
    a: "Yes. We can produce both the physical printed annual report and an optimised digital PDF version from the same design files. The digital PDF is optimised for screen viewing — interactive table of contents, hyperlinked cross-references, compressed file size for website upload and email distribution — while the print PDF is prepared for high-resolution press output. Both versions are produced from the same InDesign source files, ensuring design consistency. The digital PDF meets CSE website publishing requirements for listed companies.",
  },
  {
    q: "What is section sewn binding and why is it better than perfect binding?",
    a: "Section sewn (thread sewn) binding means the interior pages are grouped into signatures of 8 or 16 pages each, and each signature is sewn together with thread before all signatures are glued to the cover. Perfect binding simply glues all pages directly to the spine without sewing. Section sewn binding is significantly more durable — pages cannot fall out because they are physically sewn, not just glued. It also allows the report to lie completely flat when open, which is important for reading financial tables and reference documents. The sewing process adds approximately 3 to 5 working days and increases cost, but is the expected standard for major Sri Lankan corporate annual reports.",
  },
];