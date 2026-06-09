// Additional long-form content for /atl-advertising-sri-lanka.
// Renders below the services grid via CategoryHubTemplate.
import type { Block, FAQ } from "./content-engine";

export const ATL_EXTRA: Block[] = [
  // ── SECTION 1: ATL CHANNELS DEEP COMPARISON ──
  { type: "h2", text: "ATL Advertising Channels in Sri Lanka — Complete Comparison" },
  { type: "p", text: "Each ATL channel in Sri Lanka reaches a different audience profile, delivers a different type of brand impact and requires a different creative approach. Understanding how they compare prevents the most common ATL planning mistake — picking the channel you are most familiar with rather than the one that best matches your audience and objective." },
  {
    type: "table",
    head: ["Channel", "Reach", "Audience Engagement", "Best Objective", "Language Strength", "Geographic Reach", "Minimum Effective Duration"],
    rows: [
      ["Television", "National — 2–4 million viewers per prime-time airing on major channels", "High — audio + visual + emotional storytelling", "Brand awareness, emotional connection, new product launch", "Sinhala dominant — Tamil and English channels available", "National — strongest in Western and Central Provinces", "4 weeks minimum for awareness; 3 months for recall"],
      ["Radio", "Regional to national — 60%+ adult daily reach", "Medium — audio only, but high frequency and intimacy", "Brand recall, promotional offers, local market activation", "Strong across all three — dedicated Sinhala, Tamil and English FM stations", "National and regional — strongest upcountry and rural reach of all ATL channels", "2 weeks minimum for promotions; 6+ weeks for brand building"],
      ["Newspaper", "150,000–400,000 combined daily circulation", "Medium — high-attention reading environment", "Trust building, B2B, tender notices, product announcements", "Sinhala (highest circulation), Tamil (Northern/Eastern), English (Colombo professionals)", "National — but skews urban and educated", "Single insertion effective for announcements; 4+ weeks for brand"],
      ["Magazine", "10,000–80,000 per title", "High — premium reading context, longer dwell time", "Premium brand positioning, lifestyle association, B2B trade", "Primarily English — some Sinhala lifestyle titles", "Colombo urban and suburban primarily", "3 consecutive issues minimum for impact"],
      ["Cinema", "Small — 5,000–20,000 weekly at major Colombo cinemas", "Very High — large screen, captive, no second screen distraction", "Premium brand image, urban youth targeting, experiential recall", "English and Sinhala — audience skews young, urban, bilingual", "Colombo and key provincial towns only", "3–4 week run tied to film screenings"],
    ],
  },

  // ── SECTION 2: TV ADVERTISING GUIDE ──
  { type: "h2", text: "Television Advertising in Sri Lanka — Channel Guide & Planning Reference" },
  { type: "p", text: "Television remains the single highest-reach advertising channel in Sri Lanka. A prime-time TVC on one of the major Sinhala channels reaches more Sri Lankans simultaneously than any other media. Here is a practical reference for every major TV channel and what to consider when planning a TV campaign." },
  { type: "h3", text: "Sri Lanka TV Channels — Advertising Reference" },
  {
    type: "table",
    head: ["Channel", "Language", "Audience Profile", "Peak Viewing Period", "Best For", "Content Strengths"],
    rows: [
      ["Derana TV", "Sinhala", "Aspirational middle class — families, 25–55, national reach", "6:30pm – 10:30pm (teledrama and news)", "FMCG, banking, telecoms, insurance — mass consumer reach", "Top-rated teledramas, Derana 60+ Dorama format, prime news"],
      ["Sirasa TV", "Sinhala", "Mass market — broad national audience across all demographics", "7:00pm – 10:00pm", "FMCG, beverages, consumer products — highest-reach Sinhala channel", "Sirasa Superstar, popular teledramas, Sirasa news"],
      ["Hiru TV", "Sinhala", "Youth-leaning — 18–35, urban and semi-urban", "6:00pm – 11:00pm", "Youth brands, telecoms, FMCG targeting younger adults", "Hiru Star, reality formats, entertainment programming"],
      ["Swarnavahini", "Sinhala", "Family — broad cross-demographic, strong women 25–55", "7:00pm – 10:00pm", "Personal care, household products, FMCG targeting women", "Sinhala teledramas, family entertainment"],
      ["ITN (Independent Television Network)", "Sinhala / Tamil / English", "Rural and semi-urban — broad national reach including Northern and Eastern provinces", "6:00pm – 9:00pm", "Government campaigns, rural consumer brands, national reach", "National news, educational programming, multi-language content"],
      ["Rupavahini (SLRC)", "Sinhala / Tamil", "Older demographic — 40+, strong rural and provincial reach", "7:00pm – 9:30pm", "Banks, insurance, government, traditional FMCG targeting older consumers", "State news, traditional programming, cultural content"],
      ["Shakthi TV", "Tamil", "Tamil-speaking households — Northern, Eastern, Central plantation regions", "6:30pm – 9:30pm", "Brands targeting Tamil-speaking Sri Lanka — banking, FMCG, telecoms", "Tamil teledramas, news, entertainment"],
      ["Vasantham TV", "Tamil", "Tamil-speaking — entertainment-focused, younger Tamil audience", "6:00pm – 10:00pm", "Consumer brands, youth targeting in Tamil market", "Tamil music, entertainment, reality shows"],
      ["TV1 (formerly ETV)", "English / Sinhala", "Bilingual urban professionals — Colombo and suburbs", "6:00pm – 9:00pm", "Premium brands, financial services, B2B, English-market products", "News, English programming, international content"],
      ["Channel Eye", "English", "Premium urban English-speaking — Colombo professionals, expats", "7:00pm – 10:00pm", "Luxury brands, premium FMCG, financial services, tourism", "English news, international content, business programming"],
    ],
  },
  { type: "h3", text: "TV Advertising Formats in Sri Lanka" },
  {
    type: "table",
    head: ["Format", "Duration", "Best Use", "Notes"],
    rows: [
      ["TVC (Television Commercial)", "30 seconds (standard), 15 seconds (cut-down), 60 seconds (brand film)", "Product launch, brand building, seasonal campaigns", "30s is the Sri Lankan industry standard for ATL TV. 15s cuts are used in sustained campaigns to reduce cost-per-spot after the initial 30s launch phase."],
      ["Sponsorship Billboard", "5–10 seconds", "Programme sponsorship — \u201Cbrought to you by\u201D identification", "Attaches brand to a specific popular programme. Appears before and after the programme and at ad breaks. Strong brand-by-association effect for long-running teledramas."],
      ["Product Placement", "Integrated within programme duration", "Brand integration in teledrama or entertainment programming", "Products or signage appear within the programme content — integrated more naturally than spot advertising. Must comply with TRCSL broadcast content guidelines."],
      ["Infomercial / Long-Form", "2–10 minutes", "High-consideration products requiring explanation — financial, real estate, health products", "Run in off-peak timeslots. Effective for products where the purchase decision requires significant consumer education before action."],
      ["Live Brand Mention / Presenter Read", "30–60 seconds", "News and current affairs programmes, live shows", "Presenter reads the advertising message live or to-camera. High trust factor due to presenter credibility association. Popular for banking, insurance and health product promotions."],
    ],
  },
  { type: "h3", text: "Key TV Planning Metrics" },
  {
    type: "ul",
    items: [
      "GRP (Gross Rating Point): The currency of TV buying in Sri Lanka. 1 GRP = 1% of the target audience reached once. A campaign delivering 200 GRPs against women 25–54 means that audience was reached an average of twice per GRP point. Always plan TV in GRPs against a specific target audience, not just total population.",
      "Reach: The percentage of the target audience who saw the ad at least once during the campaign period. Aim for minimum 70% reach before optimising for frequency.",
      "Frequency: How many times the average viewer in the target audience saw the ad. For new product launches, a minimum of 3 OTS (Opportunities to See) is the threshold for awareness conversion. For brand reminders, 2+ frequency per month maintains recall.",
      "OTS (Opportunity to See): The average number of times a member of the target audience has the opportunity to see the ad across the campaign period. It is the exposure opportunity based on audience ratings data, not confirmed viewership.",
      "Prime Time vs Off-Peak: Prime time in Sri Lanka (7pm–10pm on major channels) commands a significant premium over off-peak slots. For launch campaigns where frequency in a short window matters, prime time is worth the premium. For sustained campaigns where reach over time is the goal, a mix of prime and off-peak delivers better GRP efficiency.",
    ],
  },

  // ── SECTION 3: RADIO ──
  { type: "h2", text: "Radio Advertising in Sri Lanka — Station Guide & Planning Reference" },
  { type: "p", text: "Radio is the most undervalued ATL channel in Sri Lanka. With 60%+ adult daily reach — higher than any digital channel — and the strongest penetration in rural, upcountry and Northern/Eastern markets where other media struggles, radio delivers cost-per-reach rates that no other channel can match. It is the primary media vehicle for reaching Sri Lanka's Sinhala-speaking middle class outside Colombo." },
  { type: "h3", text: "Sri Lanka Radio Stations — Advertising Reference" },
  {
    type: "table",
    head: ["Station", "Language", "Audience Profile", "Peak Listening", "Best For"],
    rows: [
      ["Y FM", "Sinhala", "Young adults 18–35 — urban, aspirational, entertainment-driven", "Morning drive (7–9am), evening (5–7pm)", "Youth brands, telecoms, entertainment, FMCG targeting younger adults"],
      ["Hiru FM", "Sinhala", "Mass market — broad 20–50, national reach including provincial towns", "Morning drive, lunch hour, evening drive", "FMCG, banking, telecoms — highest Sinhala radio audience nationally"],
      ["Sirasa FM", "Sinhala", "Mainstream — families and working adults 25–55", "Morning 7–9am, midday, evening 5–8pm", "Consumer FMCG, household products, banking, insurance"],
      ["Shaa FM", "Sinhala / English", "Young urban bilingual — Colombo, cities, bilingual 20–35", "Morning drive, evening", "Premium consumer brands, urban products, telecoms, digital services"],
      ["TNL Radio", "Sinhala / English", "Colombo urban professionals — English-leaning 25–45", "Morning drive, midday", "Financial services, professional services, premium brands"],
      ["Rangiri Dambulla FM", "Sinhala", "North Central Province — Anuradhapura, Dambulla, Matale audiences", "Morning, midday, evening", "Agricultural products, FMCG, banking — upcountry Sinhala market"],
      ["SLBC Sinhala Service", "Sinhala", "Rural and older demographic — broad national reach", "Morning, midday", "Government campaigns, agricultural information, rural consumer brands"],
      ["SLBC Tamil Service", "Tamil", "Tamil-speaking — Northern, Eastern and Central plantation", "Morning, midday, evening", "Brands targeting Tamil-speaking markets — strong Northern/Eastern reach"],
      ["Sooriyan FM", "Tamil", "Tamil-speaking — entertainment-focused, younger Tamil listeners", "Morning drive, evening", "Consumer brands, telecoms, FMCG targeting Tamil youth"],
      ["Yes FM", "English", "Urban English-speaking — Colombo professionals, expats", "Morning drive (7–9am)", "Premium brands, financial services, B2B, English-market products"],
      ["Gold FM", "English", "Mature English-speaking — 35–60 Colombo professionals", "Morning drive, midday", "Financial services, luxury, real estate, B2B"],
      ["Neth FM", "Sinhala", "Traditional Sinhala — older and rural demographic", "Morning, midday", "Traditional FMCG, rural market products, government information"],
    ],
  },
  { type: "h3", text: "Radio Advertising Formats in Sri Lanka" },
  {
    type: "table",
    head: ["Format", "Duration", "Best Use", "Sri Lanka Specific Notes"],
    rows: [
      ["Radio Spot (Standard)", "30 seconds (standard), 15 seconds (promotional)", "Product promotions, brand awareness, seasonal campaigns", "30-second spots dominate Sri Lankan radio buying. 15-second spots are used for high-frequency promotional campaigns or as reminders once the 30-second message has established the offer."],
      ["Programme Sponsorship", "Opening and closing billboard + spot within programme", "Brand association with popular shows — morning shows, news, traffic reports", "Traffic and weather sponsorships deliver high morning commuter attention during Colombo rush hour. Popular morning shows on youth stations attract premium sponsorship competition."],
      ["Live Presenter Read / Mention", "30–90 seconds", "Promotions, competitions, product launches requiring personality endorsement feel", "Presenter endorsement tone outperforms scripted spots for purchase intent in Sri Lanka's relationship-oriented market. Must disclose as paid promotion under TRCSL guidelines."],
      ["On-Air Competition / Activation", "1–2 week campaign mechanic", "Consumer engagement, product trial, lead generation", "Competitions requiring listeners to call in, text or WhatsApp to enter generate real consumer data. Very effective for FMCG product trial campaigns."],
      ["Road Block", "Simultaneous spot buy across multiple stations", "Maximum reach in a single time window — product launch day, emergency recall", "Buying the same 30-second window simultaneously across Hiru FM, Sirasa FM, Y FM and Shaa FM creates a near-total Sinhala radio audience block. Expensive but effective for a single high-impact launch moment."],
    ],
  },

  // ── SECTION 4: NEWSPAPER ──
  { type: "h2", text: "Newspaper Advertising in Sri Lanka — Publication Guide" },
  { type: "p", text: "Print newspaper advertising in Sri Lanka has declined in volume as digital grows, but it retains unique strengths for specific audiences and objectives that no digital channel replicates — trust, permanence, and the credibility that comes from physical publication. The Sunday papers in particular retain strong readership among Sri Lanka's educated middle class." },
  {
    type: "table",
    head: ["Publication", "Language", "Type", "Audience", "Best For"],
    rows: [
      ["Daily Mirror", "English", "Daily broadsheet", "English-educated professionals, business community, Colombo decision-makers", "B2B, financial services, legal notices, tender announcements, premium consumer brands"],
      ["Sunday Times", "English", "Sunday broadsheet", "Premium English-educated readers, families, professionals — highest-quality Sunday readership", "Premium consumer, real estate, automotive, lifestyle, high-value classifieds"],
      ["Sunday Observer", "English / Sinhala / Tamil", "State Sunday broadsheet", "Broad national reach — bilingual, government and public sector audience", "Government tenders, public notices, mass-market consumer brands"],
      ["Lankadeepa", "Sinhala", "Daily", "Sinhala-reading middle class — one of the highest circulation Sinhala dailies", "FMCG, banking, insurance, consumer promotions targeting Sinhala-reading market"],
      ["Dinamina", "Sinhala", "State daily", "Sinhala readers — broad national including provincial and rural", "Government notices, broad consumer reach, agricultural sector"],
      ["Divaina", "Sinhala", "Daily", "Sinhala-educated mass market, strong provincial coverage", "FMCG, consumer brands, provincial market reach"],
      ["Thinakkural", "Tamil", "Daily", "Tamil-reading households — Northern, Eastern, Central (plantation) regions", "Brands targeting Tamil-speaking Sri Lanka — banking, FMCG, telecoms, property"],
      ["Virakesari", "Tamil", "Daily", "Tamil-educated — professionals and families in Tamil-speaking regions", "Premium Tamil-market advertising — banking, professional services, consumer brands"],
      ["Sunday Lankadeepa", "Sinhala", "Sunday", "Sinhala-reading families — very high Sunday readership", "Consumer promotions, FMCG, real estate, automotive targeting Sinhala market"],
      ["Financial Times (LBO)", "English", "Business weekly", "Business community, finance professionals, investors", "B2B, financial services, listed company announcements, professional services"],
    ],
  },
  { type: "h3", text: "Newspaper Advertising Formats" },
  {
    type: "table",
    head: ["Format", "Description", "Best For"],
    rows: [
      ["Full Page Display", "Full broadsheet or tabloid page — the highest-impact print format", "Major product launches, brand statements, annual sales events"],
      ["Half Page", "Horizontal or vertical half-page placement", "Campaign sustain phase, second-tier product launches, category promotions"],
      ["Quarter Page / Strip", "Compact display ad — typically bottom strip or quarter block", "Regular brand presence, special offers, event announcements"],
      ["Front Page Strip / Jacket", "Strip across the bottom of the front page or a wrap around the full paper", "Maximum impact launch day — highest-visibility placement in Sri Lankan print"],
      ["Supplement / Insert", "Branded supplement or loose insert carried within the paper", "Real estate project launches, automotive model launches, seasonal catalogues"],
      ["Classified / Tender Notice", "Text-based classified listing", "Tenders, job listings, legal notices, property sales — high search intent audience"],
      ["Advertorial", "Paid content formatted to look like editorial — clearly marked as advertisement", "Product education, company profile, CSR communication"],
    ],
  },

  // ── SECTION 5: MEDIA PLANNING ──
  { type: "h2", text: "ATL Media Planning in Sri Lanka — How to Build a Campaign Plan" },
  { type: "p", text: "A media plan is the document that converts your campaign budget into specific channel allocations, timings and expected reach. Without a written media plan, your ATL spend is not a campaign — it is a collection of individual purchases. Here is how a professional ATL media plan is built for Sri Lanka." },
  { type: "h3", text: "Step 1 — Set the Campaign Objective and KPIs" },
  {
    type: "table",
    head: ["Objective", "Primary KPI", "Measurement Method", "ATL Channel Implication"],
    rows: [
      ["New product awareness", "Aided + unaided brand recall", "Post-campaign brand tracker survey", "TV + radio combination required for national launch"],
      ["Promotional offer (limited time)", "Redemptions, sales uplift during campaign window", "Point-of-sale data, promo code, call tracking", "Radio alone can be effective for short promotional windows"],
      ["Brand building (sustained)", "Share of voice, brand preference score, search volume", "Brand tracker, Google Trends, competitive monitoring", "Minimum 3-month sustained TV investment for meaningful brand equity"],
      ["Regional market entry", "Unaided awareness in target district within 8 weeks", "Field survey or distributor feedback", "Regional radio + outdoor most cost-efficient for district entry"],
      ["Festive season push", "Sales uplift vs same period prior year", "Sell-through data vs control period", "Heavy TV + high-frequency radio in 3-week pre-peak window"],
    ],
  },
  { type: "h3", text: "Step 2 — Define the Target Audience" },
  { type: "p", text: "Sri Lankan ATL audience segments map to specific channels. Use this matrix to match your target to the right media mix:" },
  {
    type: "table",
    head: ["Target Audience", "Primary Channel", "Secondary Channel", "Notes"],
    rows: [
      ["Sinhala housewives 30–55 (National)", "Sinhala TV — Derana, Sirasa, Swarnavahini (prime time teledrama slots)", "Hiru FM, Sirasa FM (midday)", "Teledrama sponsorships are the single most effective format for this segment"],
      ["Youth 18–30 (Urban, Colombo)", "Hiru TV, Hiru FM, Y FM", "Cinema (Scope, Savoy), digital supplement", "ATL reach for this segment is declining — digital must complement heavily"],
      ["Tamil-speaking households (North, East, Central)", "Shakthi TV, SLBC Tamil Service", "Sooriyan FM, Virakesari, Thinakkural", "This segment is severely under-served — first movers capture loyal audiences"],
      ["English-educated professionals (Colombo)", "Sunday Times, Daily Mirror", "Yes FM, Gold FM, Channel Eye, TV1", "Print still commands authority with this segment for financial and professional products"],
      ["Rural Sinhala market (Provincial towns)", "ITN, Rupavahini, SLBC Sinhala", "Rangiri Dambulla FM, Neth FM", "Radio is significantly more cost-effective than TV for rural reach below district-town level"],
      ["Small business owners and traders", "Sinhala TV (news and current affairs)", "Radio (morning drive), Lankadeepa, Divaina", "Morning radio during commute and newspaper at breakfast are primary media touchpoints"],
    ],
  },
  { type: "h3", text: "Step 3 — Budget Allocation Framework" },
  {
    type: "table",
    head: ["Campaign Objective", "TV %", "Radio %", "Print %", "Cinema %", "Notes"],
    rows: [
      ["National FMCG launch", "60–70%", "20–30%", "5–10%", "0–5%", "TV leads for national reach; radio for frequency and rural penetration"],
      ["Regional / provincial market", "20–30%", "50–60%", "10–15%", "0%", "Radio is most cost-efficient for upcountry and provincial market entry"],
      ["Premium brand / image campaign", "40–50%", "10–15%", "25–35%", "10–15%", "Print and cinema provide premium environment for luxury positioning"],
      ["Short promotional window (2–3 weeks)", "30–40%", "50–60%", "5–10%", "0%", "Radio's high frequency and low lead time makes it ideal for short promotions"],
      ["B2B / professional services", "0–20%", "0–10%", "60–70%", "0%", "Print (Sunday Times, Financial Times, Daily Mirror) dominates for B2B reach"],
      ["Tamil market campaign", "40–50% (Tamil channels)", "30–35% (Tamil radio)", "20–25% (Tamil print)", "0%", "Use dedicated Tamil-language creative — do not repurpose Sinhala content"],
    ],
  },

  // ── SECTION 6: TVC PRODUCTION ──
  { type: "h2", text: "TVC Production for Sri Lankan Television — File & Technical Requirements" },
  { type: "p", text: "Every Sri Lankan TV channel has specific technical requirements for advertising content. Submitting files that do not meet specifications causes broadcast delays, rejection and last-minute reprints. Here is the universal technical reference for TVC delivery to Sri Lankan channels." },
  {
    type: "table",
    head: ["Specification", "Standard Requirement", "Notes"],
    rows: [
      ["Video format", "MP4 (H.264) or MOV — broadcast channels increasingly accepting both", "Always confirm with the specific channel's traffic department before delivery. Some channels still require Betacam or MXF for HD broadcast."],
      ["Resolution", "1920×1080px (Full HD) — standard for all major Sri Lankan channels", "4K production is increasingly common but most Sri Lankan channels broadcast at 1080i or 1080p."],
      ["Frame rate", "25fps (PAL standard — used across Sri Lanka)", "Sri Lanka uses PAL broadcast standard. Do not deliver NTSC (30fps) content — it requires conversion that degrades quality."],
      ["Audio standard", "Stereo or 5.1 surround, 48kHz sample rate, -23 LUFS integrated loudness", "Loudness normalisation (-23 LUFS) is required by TRCSL standards — ads mixed louder than surrounding programming are flagged for adjustment."],
      ["Aspect ratio", "16:9 widescreen", "All major Sri Lankan channels broadcast in 16:9. 4:3 safe zones are no longer required for most channels."],
      ["Subtitles / Supers", "Embedded in the video file — not sent as a separate sidecar file", "All on-screen text must be within the title-safe zone (10% inset). Sinhala and Tamil supers must be in standard broadcast Unicode fonts."],
      ["Delivery lead time", "Minimum 48–72 hours before first broadcast", "Build in 5 working days for clearance on first run of any new TVC. Repeat runs of cleared material typically clear within 24–48 hours."],
      ["TRCSL clearance", "Mandatory for all broadcast advertising content", "TRCSL reviews all TVCs before broadcast. Restricted categories (tobacco, alcohol, certain pharmaceutical claims) require additional documentation."],
    ],
  },

  // ── SECTION 7: COMPLIANCE ──
  { type: "h2", text: "ATL Advertising Compliance in Sri Lanka — What Every Marketer Must Know" },
  { type: "p", text: "ATL advertising in Sri Lanka is more heavily regulated than most marketers realise. Getting compliance wrong is expensive — content removal, fines, and reputational damage in a small market where word travels fast. Here is the complete compliance reference." },
  {
    type: "table",
    head: ["Regulatory Body", "What It Covers", "Key Rules for ATL Advertisers", "Consequence of Non-Compliance"],
    rows: [
      ["TRCSL (Telecommunications Regulatory Commission)", "All broadcast advertising — TV and radio", "All TVCs and radio spots must be cleared before broadcast. Prohibited content: tobacco products, excessive alcohol glamourisation, misleading health claims, content offensive to religious or ethnic communities.", "Broadcast suspension, fine, forced removal from air"],
      ["Consumer Affairs Authority (CAA)", "Consumer-facing advertising claims across all media", "Price claims must be accurate. Comparative advertising must be factually substantiated. \u201CBest\u201D, \u201Ccheapest\u201D, \u201Cnumber one\u201D claims require evidence. Misleading offers are prohibited.", "Mandatory withdrawal of campaign, public correction, fine"],
      ["Central Bank of Sri Lanka", "Financial services advertising — banks, finance companies, leasing", "Interest rate claims must include all charges and conditions. Loan ads must state APR. Deposit rate advertising requires current license status.", "Campaign suspension, regulatory action against institution"],
      ["Ministry of Health / NMRA", "Pharmaceutical, medical device and health product advertising", "No prescription medicine advertising to the general public. OTC product claims require clinical substantiation. Health claims not approved by NMRA are prohibited.", "Product withdrawal, license action, criminal liability in severe cases"],
      ["Excise Department", "Alcohol advertising", "Alcohol advertising is prohibited on state TV and radio. Restrictions on glamourising consumption. Cannot target audiences below legal drinking age.", "Broadcast prohibition, excise penalty"],
      ["AASL (Advertising Standards Association of Sri Lanka)", "Self-regulatory code for advertising industry members", "Truthfulness, decency, legality and fair competition standards. Comparative advertising must be factual.", "Industry complaint process — public ASA ruling, reputational cost"],
      ["Personal Data Protection Act 2022", "Consumer data captured through advertising response mechanisms", "Opt-in consent required for data collection. Privacy notice mandatory. Right of deletion must be honoured.", "Legal action, fine, reputational damage"],
    ],
  },
];

export const ATL_EXTRA_FAQS: FAQ[] = [
  { q: "What is ATL advertising in Sri Lanka?", a: "ATL (Above-the-Line) advertising in Sri Lanka means using mass-reach broadcast and print media to reach large audiences simultaneously — television (Derana, Sirasa, Hiru, ITN, Rupavahini), radio (Y FM, Hiru FM, Sirasa FM, Shaa FM, Sooriyan FM), newspapers (Lankadeepa, Daily Mirror, Sunday Times, Thinakkural) and cinema. Unlike digital or BTL which target specific individuals, ATL broadcasts the same message to all viewers or readers of the chosen medium, making it ideal for fast brand awareness and new product launches that need national or regional reach." },
  { q: "Which TV channel is best for advertising in Sri Lanka?", a: "It depends on your target audience. For the widest Sinhala-speaking national reach, Derana, Sirasa and Hiru are the top-rated channels with the largest prime-time audiences. For Tamil-speaking households in the Northern, Eastern and Central provinces, Shakthi TV and Vasantham TV are the primary options. For English-educated urban professionals, TV1 and Channel Eye are more targeted. For rural and provincial reach, ITN and Rupavahini provide the strongest coverage beyond the Western Province. Most national campaigns use a combination of 2 to 3 channels to balance reach, frequency and cost." },
  { q: "Which radio station has the highest audience in Sri Lanka?", a: "Among Sinhala stations, Hiru FM and Sirasa FM consistently reach the widest national audiences. Y FM leads for youth (18–35) urban audiences. For Tamil-speaking audiences, SLBC Tamil Service has the widest reach across Northern, Eastern and Central plantation regions. For English-language audiences, Yes FM and Gold FM reach urban Colombo professionals. Always request current ratings data from the station or a media buying agency before planning a radio campaign." },
  { q: "What is a GRP in TV advertising and how is it used in Sri Lanka?", a: "GRP stands for Gross Rating Point — the standard currency for planning and buying television advertising in Sri Lanka. One GRP equals 1% of the defined target audience reached once. A campaign delivering 200 GRPs means the target audience was reached an average of twice per rating point. GRPs are used to compare the efficiency of different TV schedules, channels and timeslots on a like-for-like basis regardless of the raw cost." },
  { q: "How long should a TV advertising campaign run in Sri Lanka?", a: "A minimum of 4 weeks is needed for a TV campaign to build meaningful awareness. For a new product launch requiring national recall, 8 to 12 weeks of sustained television presence produces measurably higher brand awareness than shorter bursts. For brand-building, a continuous or flighted presence over 3 to 6 months is more effective than a single concentrated burst. The most common ATL mistake is running a campaign for 2 weeks, seeing no immediate sales lift, and stopping — before the awareness built on TV has had time to convert through purchase consideration." },
  { q: "Do I need TRCSL clearance for a TV or radio advertisement in Sri Lanka?", a: "Yes. All broadcast advertising content in Sri Lanka — TVCs and radio spots — must be cleared by the Telecommunications Regulatory Commission of Sri Lanka (TRCSL) before going to air. The clearance process takes a minimum of 5 working days for a new advertisement. Repeat broadcasts of previously cleared material typically clear within 24 to 48 hours. For restricted categories — pharmaceuticals, financial products, alcohol-adjacent content — additional documentation is required and clearance takes longer." },
  { q: "What is the difference between ATL and BTL advertising in Sri Lanka?", a: "ATL (Above-the-Line) advertising uses mass broadcast and print media — TV, radio, newspapers — to reach large audiences simultaneously with the same message. It builds broad awareness quickly but cannot target specific individuals. BTL (Below-the-Line) advertising uses targeted on-ground activities — brand activations, mall events, roadshows, sampling, POS — to engage specific consumers directly. ATL builds the brand at mass scale; BTL converts that awareness into trial and purchase. The most effective Sri Lankan campaigns use both." },
  { q: "Which newspapers are best for advertising in Sri Lanka?", a: "For English-educated professionals and B2B audiences, the Daily Mirror and Sunday Times are the highest-quality options. For the widest Sinhala-reading reach, Lankadeepa and Sunday Lankadeepa have the strongest circulation. For Tamil-speaking markets, Thinakkural and Virakesari are the primary vehicles. For government tenders and public notices, the Sunday Observer and Dinamina (state papers) are required by many government procurement processes. For business and financial sector advertising, the Financial Times reaches the corporate decision-maker audience." },
];