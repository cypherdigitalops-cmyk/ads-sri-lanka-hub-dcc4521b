// Sri Lanka advertising knowledge base + long-form content generators.
// Used by blog articles, category hubs, sub-service pages and the homepage
// to render real, useful, 1,000+ word content without per-page hand-writing.

import type { Category } from "./site";
import { SITE, titleCase } from "./site";

export type Para = { type: "p"; text: string };
export type Heading = { type: "h2"; text: string };
export type Sub = { type: "h3"; text: string };
export type Bullets = { type: "ul"; items: string[] };
export type Numbered = { type: "ol"; items: string[] };
export type Table = { type: "table"; head: string[]; rows: string[][] };
export type Block = Para | Heading | Sub | Bullets | Numbered | Table;

export type FAQ = { q: string; a: string };

export type CategoryKnowledge = {
  slug: string;
  // Plain-language definition (3–5 sentences).
  definition: string;
  // Why this matters in Sri Lanka (3–4 sentences).
  whyItMatters: string;
  // Channels / formats / sub-types with one-line descriptions.
  channels: { name: string; desc: string }[];
  // Approximate LKR cost ranges so users get real numbers.
  costs: { item: string; range: string; notes: string }[];
  // Who it suits.
  bestFor: string[];
  // Common mistakes specific to this category.
  mistakes: string[];
  // How to choose a partner — 4–6 specific checks.
  choosing: string[];
  // 6–8 real FAQ Q&As with substantive 2–4 sentence answers.
  faqs: FAQ[];
};

// --------- KNOWLEDGE BASE ---------
export const KNOWLEDGE: Record<string, CategoryKnowledge> = {
  "atl-advertising-sri-lanka": {
    slug: "atl-advertising-sri-lanka",
    definition:
      "ATL (Above-The-Line) advertising in Sri Lanka means using mass-reach media that broadcast to a wide audience without targeting individuals — television, radio, newspapers, magazines and cinema. The same creative reaches everyone tuning in, which makes ATL ideal for fast brand awareness, new product launches and campaigns that need cultural reach across Sinhala, Tamil and English audiences. Sri Lanka still has very strong ATL consumption: Derana, Sirasa, Hiru, ITN and Rupavahini lead TV; Y FM, Hiru FM, Sirasa FM and Shaa FM lead radio; Daily Mirror, Daily News, Lankadeepa, Dinamina, Thinakkural, Sunday Times and Sunday Observer lead press.",
    whyItMatters:
      "Despite the rise of digital, mass media still drives the strongest brand recall and trust signals in Sri Lanka — especially outside the Western Province. A 30-second TVC during a Derana prime-time teledrama can reach 2–3 million viewers in a single airing. National FMCG, telecom, banking and insurance brands continue to anchor major campaigns with ATL because no digital channel matches that simultaneous reach.",
    channels: [
      { name: "Television (TVC)", desc: "30s/15s commercials on Derana, Sirasa, Hiru, ITN, TV1, Swarnavahini and Rupavahini — bought by spot, package or long-term deal." },
      { name: "Radio", desc: "Spots, sponsorships, mentions and live-reads on Sinhala, Tamil and English FM stations across all districts." },
      { name: "Newspaper", desc: "Display, classifieds and supplements in dailies and Sunday papers — still high-trust for local SMEs and tender notices." },
      { name: "Magazine", desc: "Lifestyle, business and trade magazines for premium and B2B audiences." },
      { name: "Cinema", desc: "Pre-show ads at Scope, Savoy, Liberty and Regal — captive premium urban audience." },
    ],
    costs: [
      { item: "TV spot (30s, prime time, top channel)", range: "LKR 60,000 – 250,000", notes: "Per airing. Negotiated in packages of 20–60 spots." },
      { item: "Radio spot (30s, prime drive-time)", range: "LKR 6,000 – 25,000", notes: "Per airing on top FM stations." },
      { item: "Newspaper full page colour", range: "LKR 350,000 – 1,200,000", notes: "Daily Mirror, Lankadeepa, Daily News etc." },
      { item: "Magazine full page", range: "LKR 80,000 – 300,000", notes: "Depends on title and placement." },
      { item: "Cinema 30s ad pack", range: "LKR 150,000 – 500,000 / month", notes: "Multi-cinema circuit." },
      { item: "TVC production", range: "LKR 300,000 – 5,000,000+", notes: "Depends on cast, location, post-production." },
    ],
    bestFor: [
      "New product launches needing fast national awareness",
      "FMCG, telecom, banking, insurance, automotive",
      "Brands targeting audiences outside Colombo / Western Province",
      "Election, public service or seasonal campaigns",
    ],
    mistakes: [
      "Buying TV spots without checking AC Nielsen / LMRB ratings for the timeslot",
      "Producing one English creative and only subtitling it for Sinhala/Tamil — local versions perform far better",
      "Skipping reach-and-frequency planning and relying only on rate cards",
      "Running ATL alone without any digital follow-up to capture interested leads",
    ],
    choosing: [
      "Ask for actual past media plans with channel, slot and cost breakdowns",
      "Confirm they buy direct from channels (not via 3rd-party resellers adding margin)",
      "Check they can produce in Sinhala, Tamil and English in-house",
      "Look for post-campaign reporting that includes GRPs, reach % and frequency",
      "Verify they also handle BTL/digital so you can integrate later",
    ],
    faqs: [
      { q: "What is ATL advertising in simple terms?", a: "ATL stands for Above-The-Line advertising. It is mass-media advertising — TV, radio, newspapers, magazines and cinema — that broadcasts the same message to a very large audience instead of targeting specific individuals. It is the fastest way to build national awareness in Sri Lanka." },
      { q: "Is ATL still effective in Sri Lanka in 2025?", a: "Yes. Sri Lanka still has very high TV and radio consumption, especially outside the Western Province and among the over-35 audience. National FMCG, telecom and banking brands continue to invest 40–60% of their media budget in ATL because nothing else delivers the same simultaneous reach." },
      { q: "How much does a TV ad cost in Sri Lanka?", a: "A 30-second prime-time spot on a top channel like Derana or Sirasa typically costs LKR 60,000–250,000 per airing, with discounts on package buys of 20+ spots. Production of the TVC itself ranges from LKR 300,000 for a simple shoot to over LKR 5 million for cinematic productions." },
      { q: "What is the difference between ATL and BTL?", a: "ATL uses mass media (TV/radio/press) for broad awareness with no direct interaction. BTL uses targeted, on-ground or one-to-one channels (events, activations, sampling, retail) where consumers can interact with the brand. Most strong campaigns use both — ATL builds awareness, BTL converts it." },
      { q: "How quickly can an ATL campaign go live?", a: "Once creative is approved, TV and radio spots can be on air within 5–10 working days. Newspaper and magazine bookings depend on the publication's deadline — typically 2–5 days for dailies. Production lead time for the creative itself is usually 3–6 weeks." },
      { q: "Do I need an agency or can I buy ATL media directly?", a: "You can buy direct from channels, but most brands use a media agency because agencies negotiate package rates that are often 20–40% below rate-card and they handle creative, language adaptation, traffic and post-campaign reporting. For one-off small bookings, direct is fine." },
    ],
  },
  "btl-advertising-sri-lanka": {
    slug: "btl-advertising-sri-lanka",
    definition:
      "BTL (Below-The-Line) advertising in Sri Lanka covers all targeted, on-ground and one-to-one promotional activity — brand activations, mall events, roadshows, retail branding, sampling, point-of-sale, leaflet drops, exhibition stalls and field marketing. Instead of broadcasting one message to millions, BTL puts your brand directly in front of a defined audience in a place where they can touch, taste, try or buy it.",
    whyItMatters:
      "Sri Lanka's retail and consumer landscape is highly relationship-driven — purchase decisions in supermarkets, modern trade and rural outlets are still strongly influenced by visible in-store presence and live demonstrations. BTL drives the last-mile conversion that ATL or digital alone cannot. It is also far more cost-efficient for region-specific or category-specific launches.",
    channels: [
      { name: "Brand activations", desc: "Live consumer engagement zones at malls, parks and high-footfall locations." },
      { name: "Mall events", desc: "Multi-day branded experiences at Colombo City Centre, One Galle Face, K-Zone, Liberty Plaza, etc." },
      { name: "Roadshows", desc: "Multi-city tours hitting Kandy, Galle, Kurunegala, Jaffna, Batticaloa and beyond." },
      { name: "Retail / shop branding", desc: "Branded shop fronts, in-store wraps, gondola ends, shelf talkers and POS material." },
      { name: "Sampling & demos", desc: "Free-trial distribution at supermarkets, schools, offices and events." },
      { name: "Exhibition stalls", desc: "Booths at BMICH, Sirasa Lakshapathi, Ideal Home Exhibition, EDEX, etc." },
      { name: "Leaflet & flyer distribution", desc: "Door-to-door, in-mall and traffic-junction handouts in defined zones." },
      { name: "Field marketing", desc: "Branded teams visiting outlets to merchandise, train staff and run promotions." },
    ],
    costs: [
      { item: "Mall activation (3 days, mid-tier mall)", range: "LKR 250,000 – 900,000", notes: "Includes space rental, setup and 2 promoters." },
      { item: "Roadshow (single city, 1 day)", range: "LKR 350,000 – 1,200,000", notes: "Stage, sound, host, promoters, transport." },
      { item: "Sampling team (per day, 4 promoters)", range: "LKR 35,000 – 80,000", notes: "Excludes product cost." },
      { item: "Retail branding (per outlet)", range: "LKR 15,000 – 250,000", notes: "Shop facia, in-store wrap, POS." },
      { item: "Exhibition booth (3-day fair)", range: "LKR 150,000 – 1,500,000", notes: "Depends on size and finish." },
      { item: "Leaflet distribution (per 1,000)", range: "LKR 1,500 – 4,000", notes: "Door-to-door zones in Colombo, Gampaha, Kandy." },
    ],
    bestFor: [
      "FMCG sampling and trial-driving launches",
      "Telecom, finance and insurance acquisition drives in regional towns",
      "Retail brands opening new outlets",
      "School / institutional / B2B targeted campaigns",
    ],
    mistakes: [
      "Picking high-footfall locations without checking footfall quality (target audience match)",
      "Untrained promoters reading from scripts — kills credibility",
      "No data capture (no leads, no opt-ins) so the activity can't be measured",
      "Skipping permits — Colombo Municipal Council, Police and venue permissions take 7–14 days",
    ],
    choosing: [
      "Ask for venue relationships (do they own the slot or are they reselling?)",
      "Check promoter quality — meet 2–3 in person before signing",
      "Confirm digital lead capture (tablet / QR / WhatsApp) is included",
      "Insist on photo/video reporting and footfall counts per day",
      "Verify they can scale to multi-city without quality drop",
    ],
    faqs: [
      { q: "What is BTL advertising?", a: "BTL stands for Below-The-Line advertising — targeted, on-ground or one-to-one promotional activity such as brand activations, sampling, retail branding, roadshows and exhibitions. It is designed to create direct interaction with consumers, usually at the point where they make a buying decision." },
      { q: "How is BTL different from digital marketing?", a: "BTL is physical — promoters, samples, retail material, events. Digital marketing is online — search, social, display. Both are targeted (unlike ATL), but BTL works through real-world experience and digital works through screens. Strong campaigns in Sri Lanka usually combine both." },
      { q: "How much does a brand activation cost in Sri Lanka?", a: "A 3-day mall activation at a mid-tier mall like K-Zone or Liberty Plaza typically costs LKR 250,000–900,000 including space, setup and a small promoter team. A premium location like One Galle Face or Colombo City Centre can be 2–3x higher. Multi-city roadshows scale linearly with each city." },
      { q: "Do I need permits for BTL events in Sri Lanka?", a: "Yes — most BTL activity needs permits from the venue, the local Municipal Council (e.g. CMC for Colombo), and sometimes the Police if it involves public spaces, sound or large gatherings. Reputable BTL agencies handle permits as part of their fee. Allow 7–14 working days." },
      { q: "Can BTL be measured?", a: "Absolutely. Modern BTL campaigns capture footfall counts, sample distribution numbers, lead forms (paper or digital), QR/WhatsApp opt-ins, on-the-spot sales and post-event surveys. Insist on a daily reporting template before the campaign starts so the ROI is clear." },
      { q: "What's the minimum budget for a BTL campaign?", a: "A focused single-day, single-location activation can start from around LKR 150,000–250,000. Below that you're better off with targeted digital ads. Above LKR 500,000 you can run a proper multi-day or multi-city BTL programme." },
    ],
  },
  "ttl-advertising-sri-lanka": {
    slug: "ttl-advertising-sri-lanka",
    definition:
      "TTL (Through-The-Line) advertising — also called 360° or integrated marketing — combines ATL mass reach with BTL precision and digital targeting under one strategy. In Sri Lanka, TTL is how serious brands run major launches: a TV campaign drives awareness, social and Google capture interest, BTL activations create trial, and CRM/email closes the loop.",
    whyItMatters:
      "Sri Lankan consumers move across channels in minutes — they see a TVC at 8pm, search the brand on Google by 8:05, scroll Instagram at 8:10 and visit the shop on Saturday. Disconnected campaigns lose them at every handoff. TTL keeps the message, audience signal and call-to-action consistent across every touchpoint, which is what actually drives ROI.",
    channels: [
      { name: "Integrated campaigns", desc: "Single concept executed across TV, radio, digital, OOH and BTL." },
      { name: "360° launches", desc: "Phased rollout — teaser, reveal, sustain, retarget." },
      { name: "Omnichannel CRM", desc: "Email, SMS, WhatsApp and retargeting connected to the main campaign." },
      { name: "Cross-platform creative", desc: "One brand idea adapted into TVC, social cuts, billboard, shop branding and influencer content." },
    ],
    costs: [
      { item: "Small TTL campaign (1 month, 1 city)", range: "LKR 1,500,000 – 4,000,000", notes: "Digital + radio + 1 BTL activation." },
      { item: "Mid TTL campaign (1 month, national)", range: "LKR 5,000,000 – 15,000,000", notes: "TV + digital + 5–10 BTL stops." },
      { item: "Large TTL campaign (3 months)", range: "LKR 15,000,000 – 60,000,000+", notes: "Full ATL + BTL + digital + CRM + influencer." },
    ],
    bestFor: [
      "New product launches at scale",
      "Re-positioning a tired brand",
      "Annual flagship campaigns (festival, season, anniversary)",
      "Multi-region growth pushes",
    ],
    mistakes: [
      "Different agencies for TV, digital and BTL — fragmented message, double cost",
      "No single campaign KPI — every channel reports vanity metrics",
      "Treating digital as an afterthought instead of core",
      "Skipping CRM / first-party data capture so retargeting is impossible",
    ],
    choosing: [
      "Single integrated team across ATL, BTL, digital and creative",
      "One campaign brief, one KPI dashboard",
      "Demonstrated multi-channel case studies",
      "Owned data layer (UTM, pixel, CRM) day one",
    ],
    faqs: [
      { q: "What does TTL stand for?", a: "TTL stands for Through-The-Line advertising. It refers to integrated campaigns that combine ATL (mass media), BTL (on-ground) and digital channels under a single strategy and creative idea." },
      { q: "Why use TTL instead of just digital?", a: "Digital alone caps out — once you've reached your high-intent audience on Google and Meta, costs spike and growth slows. TTL adds top-of-funnel reach (TV/radio/OOH) and physical trial (BTL) that digital cannot create on its own." },
      { q: "What's a realistic TTL budget in Sri Lanka?", a: "A meaningful national TTL campaign typically starts around LKR 5 million per month and scales to LKR 60 million+ for major brand launches. Below LKR 1.5 million you're better off doing digital-only or a focused BTL push." },
      { q: "How long should a TTL campaign run?", a: "Most TTL campaigns run 4–12 weeks: 1–2 weeks teaser, 3–6 weeks main burst, 2–4 weeks sustain and retarget. Continuous always-on TTL is mostly used by category leaders (telco, banks, FMCG)." },
    ],
  },
  "digital-marketing-sri-lanka": {
    slug: "digital-marketing-sri-lanka",
    definition:
      "Digital marketing in Sri Lanka is everything you do to grow a business through online channels — Google Ads, Facebook, Instagram, TikTok, YouTube, LinkedIn, SEO, email, SMS and WhatsApp. Unlike traditional advertising, every click, view and conversion is measurable, so you know exactly which rupee produced which result.",
    whyItMatters:
      "Over 12 million Sri Lankans are online and 80%+ access the internet primarily on mobile. Facebook alone has over 8 million local users, TikTok is exploding past 6 million, and Google handles millions of searches daily for everything from 'restaurants in Colombo' to 'best mobile phone Sri Lanka'. If your business isn't visible on these platforms, your competitors are taking those buyers.",
    channels: [
      { name: "Google Ads (Search)", desc: "Pay to appear when someone searches your service in Sri Lanka — highest intent traffic." },
      { name: "Google Display & YouTube", desc: "Visual ads across millions of websites and YouTube videos." },
      { name: "Facebook & Instagram Ads", desc: "Demographic, interest and behaviour-based targeting at scale." },
      { name: "TikTok Ads", desc: "Fastest-growing platform for under-35 audiences in Sri Lanka." },
      { name: "LinkedIn Ads", desc: "B2B targeting by job title, company size and industry." },
      { name: "SEO", desc: "Organic Google rankings — long-term, highest ROI channel." },
      { name: "Email & SMS", desc: "Direct marketing to your existing customer base." },
      { name: "Influencer marketing", desc: "Partnered content with Sri Lankan creators." },
    ],
    costs: [
      { item: "Google Search Ads (monthly spend)", range: "LKR 50,000 – 1,500,000+", notes: "Plus 12–20% management fee." },
      { item: "Facebook / Instagram ads (monthly)", range: "LKR 30,000 – 1,000,000+", notes: "CPM ~LKR 200–700 in Sri Lanka." },
      { item: "TikTok ads (monthly)", range: "LKR 50,000 – 800,000", notes: "Min recommended LKR 100k for results." },
      { item: "SEO retainer", range: "LKR 60,000 – 350,000 / month", notes: "12-month commitment for real ranking." },
      { item: "Influencer post (mid-tier)", range: "LKR 25,000 – 300,000", notes: "Per post, depends on follower count and engagement." },
    ],
    bestFor: [
      "Lead generation businesses (real estate, education, finance, B2B)",
      "E-commerce and DTC brands",
      "Local services (restaurants, salons, clinics)",
      "Any brand that wants measurable ROI",
    ],
    mistakes: [
      "Boosting posts instead of running structured ad campaigns with proper objectives",
      "No conversion tracking — running ads blind for months",
      "Splitting tiny budgets across 5 platforms instead of dominating 1–2",
      "Ignoring SEO because it's slow — losing the long-term cheapest channel",
      "Hiring freelancers without access to your own ad accounts (you should always own your accounts)",
    ],
    choosing: [
      "You own the Google Ads, Meta Business and GA4 accounts — not the agency",
      "Monthly reporting includes spend, conversions, CPA and ROAS (not just impressions)",
      "Google Partner / Meta Business Partner certification",
      "Real Sri Lanka case studies with before/after numbers",
      "Clear scope — number of ads, creatives, A/B tests per month",
    ],
    faqs: [
      { q: "What is digital marketing?", a: "Digital marketing is any marketing activity that happens through online channels — Google search, social media, websites, email, SMS, WhatsApp, YouTube. It is fully measurable, which means you can see exactly how many leads, sales or visits each rupee of advertising produced." },
      { q: "How much should a Sri Lankan business spend on digital marketing?", a: "Most growing SMEs spend LKR 100,000–500,000 per month across ads, content and SEO. Larger brands spend LKR 1–10 million per month. A good rule of thumb is 7–12% of target revenue if you're growing, and at minimum LKR 50,000/month to see meaningful results." },
      { q: "Which is better — Google Ads or Facebook Ads?", a: "Google Ads captures people who are actively searching for what you sell — highest intent, fastest sales. Facebook/Instagram captures people based on interests and behaviour — better for awareness, discovery and visual products. Most businesses should run both." },
      { q: "How long until digital marketing produces results?", a: "Paid ads (Google, Meta, TikTok) can produce leads within 3–7 days of launch. SEO typically takes 3–6 months for meaningful traffic and 6–12 months for #1 rankings. Email and CRM produce immediate results from your existing list." },
      { q: "Can I do digital marketing myself?", a: "Yes for basic Boosted Posts and simple Google Ads, but most businesses lose money for the first 6–12 months while learning. A specialist or agency typically pays for itself within the first 60 days through better targeting, lower CPA and proper conversion tracking." },
      { q: "Should I own my ad accounts or let the agency own them?", a: "Always own your own accounts. The agency should be added as a manager — never the account owner. If you ever switch agencies, you keep the data, audiences, pixels and history. This is the single most important rule when hiring a digital agency in Sri Lanka." },
    ],
  },
  "seo-services-sri-lanka": {
    slug: "seo-services-sri-lanka",
    definition:
      "SEO (Search Engine Optimisation) is the work of getting your website to rank on the first page of Google for the keywords your customers are typing in. In Sri Lanka, ranking #1 for a keyword like 'best web design Colombo' or 'tile suppliers Sri Lanka' produces a steady flow of high-intent leads at zero cost per click — which is why SEO is the highest-ROI marketing channel over a 12–24 month horizon.",
    whyItMatters:
      "Google handles the vast majority of search traffic in Sri Lanka and 30–60% of all clicks go to the #1 organic result. Paid ads stop the moment you stop paying; SEO rankings keep producing leads month after month. For service businesses, e-commerce and B2B in Sri Lanka, organic search is often the single biggest source of qualified leads.",
    channels: [
      { name: "On-page SEO", desc: "Title tags, meta descriptions, headings, internal links and content quality on your own site." },
      { name: "Technical SEO", desc: "Site speed, mobile usability, crawlability, structured data, Core Web Vitals." },
      { name: "Content / blog SEO", desc: "Keyword-targeted articles that rank and bring organic traffic." },
      { name: "Local SEO", desc: "Google Business Profile, local citations, reviews — for service businesses." },
      { name: "Off-page / link building", desc: "Earning quality backlinks from Sri Lankan and international sites." },
      { name: "E-commerce SEO", desc: "Category and product page optimisation for Daraz, WooCommerce, Shopify stores." },
    ],
    costs: [
      { item: "Local SEO (small business)", range: "LKR 35,000 – 100,000 / month", notes: "Google Business Profile + 4–8 local pages." },
      { item: "Standard SEO retainer", range: "LKR 85,000 – 250,000 / month", notes: "Audit + 4–8 articles + technical fixes + links." },
      { item: "Aggressive / e-commerce SEO", range: "LKR 250,000 – 600,000+ / month", notes: "12+ articles, dedicated link building, dev support." },
      { item: "One-off SEO audit", range: "LKR 75,000 – 350,000", notes: "Detailed technical + content + competitor analysis." },
    ],
    bestFor: [
      "Service businesses where customers Google their problem",
      "E-commerce stores competing on category and product keywords",
      "B2B and SaaS targeting non-branded research keywords",
      "Local businesses competing in 'near me' searches",
    ],
    mistakes: [
      "Expecting #1 rankings in 30 days — real SEO is a 6–12 month project",
      "Buying cheap PBN backlinks — get the site penalised in 90 days",
      "Producing thin AI-generated articles with no editing — Google's Helpful Content update demotes them",
      "No tracking — not connecting Google Search Console and GA4",
      "Ignoring site speed and mobile experience — Sri Lanka is 80%+ mobile",
    ],
    choosing: [
      "Ask for ranking screenshots from Search Console (not just SEMrush) of past clients",
      "Check they do real link outreach, not directory blasts",
      "Confirm content is written by humans with editorial review",
      "Look for transparent monthly reports with keyword positions and traffic",
      "Make sure they fix technical issues, not just write content",
    ],
    faqs: [
      { q: "What is SEO?", a: "SEO stands for Search Engine Optimisation. It is the process of improving your website so it ranks higher in Google's free search results for keywords your customers use. Higher rankings mean more clicks, leads and sales without paying per click." },
      { q: "How long does SEO take in Sri Lanka?", a: "For a new website, expect 4–8 weeks for technical fixes, 3–6 months for first meaningful rankings, and 6–12 months for top-3 positions on competitive keywords. Local SEO (Google Maps) can show results in 30–60 days." },
      { q: "How much does SEO cost in Sri Lanka?", a: "Local small-business SEO starts around LKR 35,000–100,000 per month. Standard retainers are LKR 85,000–250,000 per month. Aggressive e-commerce or national SEO ranges LKR 250,000–600,000+ per month. Anything below LKR 25,000/month is rarely real SEO." },
      { q: "Is SEO better than Google Ads?", a: "They serve different purposes. Google Ads gives instant traffic but stops when you stop paying. SEO is slower (6–12 months) but produces traffic for years at no cost-per-click. Most businesses should run both — ads for short-term, SEO for long-term." },
      { q: "Can SEO guarantee #1 ranking?", a: "Any agency that guarantees #1 is lying — Google's algorithm changes constantly and no one controls it. What a good SEO agency can guarantee is the work: audits, technical fixes, quality content, real links and transparent reporting that statistically moves rankings up." },
      { q: "Will SEO work for a small business in Sri Lanka?", a: "Yes — local SEO is one of the highest-ROI activities for small businesses. Optimising your Google Business Profile, getting reviews and ranking for 'service + city' keywords (e.g. 'AC repair Colombo') can produce 10–50 qualified leads per month for a small monthly fee." },
    ],
  },
  "social-media-marketing-sri-lanka": {
    slug: "social-media-marketing-sri-lanka",
    definition:
      "Social media marketing in Sri Lanka means building your brand and selling through Facebook, Instagram, TikTok, LinkedIn and YouTube — the platforms where Sri Lankans spend hours every day. It includes organic content (posts, reels, stories), paid ads, community management, influencer collaborations and direct selling through Messenger and WhatsApp.",
    whyItMatters:
      "Sri Lanka has over 8 million Facebook users, 6 million+ TikTok users, 4 million+ Instagram users and 1.5 million+ LinkedIn profiles. These platforms are where buying decisions are formed — through reels, reviews, stories and ads. A strong social presence is no longer optional for any consumer-facing brand.",
    channels: [
      { name: "Facebook", desc: "Largest reach in Sri Lanka, strong for ages 25–55, group communities and Messenger commerce." },
      { name: "Instagram", desc: "Premium urban audience, fashion, food, lifestyle and visual brands." },
      { name: "TikTok", desc: "Fastest-growing — under-30 audience, short-form video, viral discovery." },
      { name: "LinkedIn", desc: "B2B, recruitment, professional services." },
      { name: "YouTube", desc: "Long-form video, brand storytelling and SEO from video search." },
      { name: "Influencer marketing", desc: "Partnering with Sri Lankan creators to borrow their audience and trust." },
    ],
    costs: [
      { item: "Social media management (1 platform)", range: "LKR 35,000 – 120,000 / month", notes: "10–20 posts, basic engagement." },
      { item: "Multi-platform (3 platforms)", range: "LKR 100,000 – 300,000 / month", notes: "Includes reels and stories." },
      { item: "Premium / video-led", range: "LKR 250,000 – 700,000 / month", notes: "Production team, monthly shoots, paid promotion." },
      { item: "Influencer post (nano, <50k)", range: "LKR 5,000 – 25,000", notes: "Per post." },
      { item: "Influencer post (mid, 100–500k)", range: "LKR 50,000 – 300,000", notes: "Per post." },
      { item: "Top creator (500k+)", range: "LKR 350,000 – 1,500,000+", notes: "Per post or campaign." },
    ],
    bestFor: [
      "Consumer brands (fashion, food, beauty, home, travel)",
      "Local services that benefit from word-of-mouth (restaurants, gyms, clinics)",
      "E-commerce and DTC",
      "B2B that targets a specific professional audience (LinkedIn)",
    ],
    mistakes: [
      "Posting daily but never running paid promotion — organic reach is under 5%",
      "Using only English content for a market that's 70% Sinhala/Tamil first-language",
      "Beautiful feeds with no call-to-action — followers don't equal customers",
      "Hiring an agency that only re-posts the same content across all platforms",
    ],
    choosing: [
      "Look at their own social presence — if their account is weak, they can't run yours",
      "Ask for content calendar samples and past reels/videos they produced",
      "Confirm in-house production (or strong freelance network) for video",
      "Check pricing includes paid promotion budget management",
      "Make sure you keep ownership of your accounts and creative files",
    ],
    faqs: [
      { q: "Which social media platform is most important in Sri Lanka?", a: "For most consumer brands, Facebook + Instagram + TikTok is the core trio. Facebook has the largest reach, Instagram the premium urban audience, and TikTok the fastest-growing under-30 audience. LinkedIn is critical only for B2B." },
      { q: "How often should we post on social media?", a: "A realistic minimum is 3–5 posts per week per platform, plus 5–10 stories and 1–3 reels weekly. Posting daily is good only if quality stays high — 3 great posts beat 7 weak ones." },
      { q: "What's a realistic social media budget for an SME in Sri Lanka?", a: "LKR 50,000–150,000 per month covers content management for 1–2 platforms with light paid promotion. LKR 200,000–400,000 covers proper multi-platform management with regular video and meaningful ad spend. Below LKR 35,000/month, expect template-only output." },
      { q: "Do influencers really work in Sri Lanka?", a: "Yes, when matched correctly. A nano-influencer (5k–50k engaged followers) with a niche audience often outperforms a celebrity (500k+) for actual sales. Always check engagement rate (4%+ is healthy) and recent post comments for real-audience signals." },
      { q: "Can I just boost posts instead of running real campaigns?", a: "Boosted posts are okay for visibility but they use the simplest objective (engagement) and don't optimise for sales or leads. Proper Ads Manager campaigns with conversion objectives, custom audiences and pixel tracking deliver 3–10x better ROI on the same spend." },
    ],
  },
  "email-sms-marketing-sri-lanka": {
    slug: "email-sms-marketing-sri-lanka",
    definition:
      "Email, SMS and WhatsApp marketing in Sri Lanka is direct, permission-based marketing to people who already gave you their contact — your customers, leads, subscribers and event attendees. It's the cheapest, highest-ROI channel after SEO because you own the list and pay only a fraction of a rupee per message.",
    whyItMatters:
      "Sri Lankan mobile penetration is over 140% (most adults have 2+ SIMs). SMS open rates exceed 95% within 5 minutes. WhatsApp adoption is near-universal among smartphone users. Yet most local businesses ignore these channels — which makes them an enormous opportunity for any brand willing to build and use a clean opt-in list.",
    channels: [
      { name: "Bulk SMS", desc: "Promotional and transactional SMS via Mobitel, Dialog, Hutch, Airtel APIs." },
      { name: "Email marketing", desc: "Newsletters, automated journeys, win-back campaigns via Mailchimp, Brevo, ActiveCampaign etc." },
      { name: "WhatsApp Business / API", desc: "Broadcast lists, click-to-chat ads, automated catalogs, order updates." },
      { name: "Email automation", desc: "Welcome series, abandoned cart, re-engagement, drip campaigns." },
      { name: "B2B email", desc: "Cold-warm outreach to verified business contacts." },
    ],
    costs: [
      { item: "Bulk SMS (per message)", range: "LKR 0.50 – 2.50", notes: "Volume-based, lower for transactional." },
      { item: "Email platform (10k contacts)", range: "LKR 8,000 – 25,000 / month", notes: "Mailchimp, Brevo, ActiveCampaign tier." },
      { item: "WhatsApp Business API setup", range: "LKR 25,000 – 150,000 one-time", notes: "Plus per-message conversation fees." },
      { item: "Managed email/SMS retainer", range: "LKR 45,000 – 250,000 / month", notes: "Strategy, design, copy, automation." },
    ],
    bestFor: [
      "E-commerce (cart recovery, post-purchase, win-back)",
      "Education and training (course launches, webinars)",
      "Real estate and finance (lead nurture, follow-up)",
      "Any business with a customer database over 1,000 contacts",
    ],
    mistakes: [
      "Buying random SMS / email lists — illegal under Sri Lanka's data protection regime and destroys deliverability",
      "Sending the same message to your entire list — segment by behaviour and interest",
      "No automation — manually sending every campaign wastes 80% of the value",
      "Not measuring open, click and conversion rates — you must know what works",
    ],
    choosing: [
      "Confirm they use compliant platforms (no scraped lists)",
      "Ask for sample automations: welcome, cart, post-purchase, re-engage",
      "Check WhatsApp BSP partner status (Meta-approved business solution provider)",
      "Look for clear KPI reporting: open rate, CTR, conversions, revenue per email",
    ],
    faqs: [
      { q: "Is email marketing still worth it in Sri Lanka?", a: "Yes — email consistently delivers the highest ROI of any digital channel (commonly LKR 30–50 returned per LKR 1 spent). The catch is you need a clean opt-in list and good content; bought or scraped lists fail and damage your sender reputation." },
      { q: "Is bulk SMS legal in Sri Lanka?", a: "Yes for opt-in contacts. The Telecommunications Regulatory Commission and the Personal Data Protection Act expect that recipients have given consent, and that every promotional SMS includes the sender ID and an opt-out option." },
      { q: "How much does WhatsApp marketing cost?", a: "WhatsApp Business API setup is typically LKR 25,000–150,000 one-time, plus per-conversation fees (around LKR 5–25 depending on category). Click-to-WhatsApp Facebook ads are one of the highest-converting digital formats in Sri Lanka right now." },
      { q: "How often should I email my list?", a: "For most B2C brands, 1–2 sends per week works well. B2B can do 1 per week. The key is value — every email should give something useful (offer, tip, news), not just sell. Frequency without value kills the list." },
      { q: "What's the difference between bulk SMS and WhatsApp?", a: "SMS reaches every mobile (no app required), is cheap and has 95%+ open rates but limited to text. WhatsApp needs the app installed (most smartphones), supports rich media and conversations, and has higher engagement but costs more per message." },
    ],
  },
  "outdoor-advertising-sri-lanka": {
    slug: "outdoor-advertising-sri-lanka",
    definition:
      "Outdoor advertising — also called OOH (Out-of-Home) — is the physical advertising you see in public spaces in Sri Lanka: billboards, hoardings, digital LED screens, lamp-post banners, bus and three-wheeler branding, train station panels, mall signage and shopping centre wraps. It builds powerful brand visibility because people can't skip, scroll past or close it.",
    whyItMatters:
      "Sri Lanka has some of the most concentrated commuter routes in South Asia — Galle Road, High Level Road, Baseline Road, Kandy Road, Negombo Road. A well-placed billboard on these routes is seen by 50,000–200,000 people per day. Outdoor builds the kind of mass familiarity that drives trust, especially for finance, telecom, automotive and FMCG.",
    channels: [
      { name: "Billboards / hoardings", desc: "Static large-format displays on key Colombo and provincial routes." },
      { name: "Digital LED billboards", desc: "Animated screens at major junctions — One Galle Face, World Trade Center, Liberty Plaza, etc." },
      { name: "LED video walls (in-store)", desc: "Indoor LED screens in malls, branches and airports." },
      { name: "Transit advertising", desc: "Bus body, train, three-wheeler, taxi wraps." },
      { name: "Mobile billboards", desc: "Branded vehicles driven through high-footfall areas." },
      { name: "Lamp post / pole branding", desc: "Repeated visibility along arterial roads." },
      { name: "Sign boards / shop facia", desc: "Branded fronts at retail outlets." },
    ],
    costs: [
      { item: "Premium billboard (Galle Rd, monthly)", range: "LKR 250,000 – 1,200,000", notes: "Depends on size and location." },
      { item: "Digital LED slot (10s, monthly)", range: "LKR 150,000 – 800,000", notes: "Shared rotation, premium junctions." },
      { item: "Bus body branding (per bus, monthly)", range: "LKR 35,000 – 120,000", notes: "Long-route inter-city buses higher." },
      { item: "Three-wheeler branding (per vehicle, monthly)", range: "LKR 3,500 – 12,000", notes: "Scale by fleet — minimum 50–100." },
      { item: "Lamp post banners (per pole, monthly)", range: "LKR 4,000 – 20,000", notes: "Permits via local authority." },
      { item: "Production / printing", range: "LKR 25,000 – 350,000", notes: "Per billboard, depending on size." },
    ],
    bestFor: [
      "Banks, telecom, automotive, real estate, education",
      "New brand launches needing visibility credibility",
      "Local-area dominance campaigns (own a route or junction)",
      "Festive and seasonal pushes (Avurudu, Christmas, school season)",
    ],
    mistakes: [
      "Renting billboards without checking actual footfall counts and visibility angle",
      "Cramming too much copy — drivers see your board for 2–3 seconds",
      "Forgetting permits — Road Development Authority, Municipal Council approvals",
      "No connection to digital — the billboard tells nobody where to go online",
    ],
    choosing: [
      "Verify they own or have direct contracts with the inventory (not 3rd-party brokers)",
      "Ask for monitoring photos every 2 weeks proving the ad is up",
      "Check creative team understands big-format design (large type, single message)",
      "Confirm permits and structural compliance",
    ],
    faqs: [
      { q: "How much does a billboard cost in Sri Lanka?", a: "A premium billboard on Galle Road or at a major Colombo junction costs around LKR 250,000–1,200,000 per month for the space, plus LKR 25,000–350,000 one-time for printing and installation. Provincial and secondary locations are 30–60% cheaper." },
      { q: "What's better — static billboards or digital LED screens?", a: "Static billboards give you 100% share of voice 24/7 in one spot. Digital LED screens rotate (you might be 1 of 6 advertisers) but you pay less and can change creative weekly. For a brand launch, static is often stronger; for ongoing presence, digital is more flexible." },
      { q: "Do I need permits for outdoor advertising?", a: "Yes. Most billboards need approvals from the local Municipal Council (CMC, Sri Jayawardenepura Kotte MC, Dehiwala MC etc.) and the Road Development Authority for highway-adjacent placements. Reputable OOH companies handle permits as part of the rental." },
      { q: "How long should an outdoor campaign run?", a: "Static outdoor needs minimum 1–3 months to build recall — it works through repeated exposure to the same commuters. Digital LED can be effective even at 2–4 weeks because it's animated and noticeable. One-week outdoor campaigns rarely work." },
      { q: "Can outdoor be measured?", a: "Yes — using daily traffic counts (RDA / police data), reach-and-frequency models, and increasingly with mobile location data. Modern outdoor campaigns also measure brand search lift on Google during the campaign window." },
    ],
  },
  "branding-sri-lanka": {
    slug: "branding-sri-lanka",
    definition:
      "Branding in Sri Lanka is the work of building a clear, distinctive identity for your business — name, logo, colours, fonts, tone of voice, packaging, signage and the overall feel customers associate with you. Strong branding turns a commodity product into a premium choice and lets you charge more, win loyalty and stand out on cluttered shelves.",
    whyItMatters:
      "Sri Lanka's retail and digital landscape is more crowded than ever — supermarkets stock 10+ brands per category, social feeds show hundreds of competitors, and price-cutting has limits. Branding is what makes a customer choose you when the alternatives are cheaper. It is a long-term investment that compounds into pricing power, repeat business and easier marketing.",
    channels: [
      { name: "Brand identity", desc: "Name, logo, colour palette, typography, design system." },
      { name: "Logo design", desc: "Primary mark, variations, lock-ups, favicon, social profile assets." },
      { name: "Brand guidelines", desc: "A document that locks in how the brand is used everywhere." },
      { name: "Packaging design", desc: "Boxes, labels, bottles, sachets — the silent salesperson on shelf." },
      { name: "Corporate collateral", desc: "Letterhead, business cards, profile, brochures, email signatures." },
      { name: "Brand communication", desc: "Tone of voice, taglines, messaging architecture across channels." },
      { name: "Retail / shop branding", desc: "Facia, in-store visuals, uniforms, environmental graphics." },
    ],
    costs: [
      { item: "Logo only (small business)", range: "LKR 25,000 – 150,000", notes: "1–3 concepts, 2 revisions." },
      { item: "Full brand identity package", range: "LKR 150,000 – 750,000", notes: "Logo + system + basic guidelines + collateral." },
      { item: "Premium brand identity (corporate)", range: "LKR 750,000 – 4,000,000+", notes: "Strategy, naming, full system, deep guidelines, launch." },
      { item: "Packaging design (per SKU)", range: "LKR 45,000 – 400,000", notes: "Depending on complexity and print specs." },
      { item: "Brand guideline document", range: "LKR 100,000 – 600,000", notes: "20–80 page master document." },
    ],
    bestFor: [
      "Any new business about to launch",
      "Established businesses that grew without proper identity",
      "Family businesses being modernised for the next generation",
      "Companies preparing for export, franchise or investment",
    ],
    mistakes: [
      "Designing the logo first instead of the strategy first — name, audience and positioning come before visuals",
      "Copying a global brand's look — looks generic and risks IP issues",
      "No brand guidelines document — every vendor reinterprets your brand differently",
      "Treating branding as one-time — it needs maintenance and evolution",
    ],
    choosing: [
      "Look at their portfolio depth, not just one nice logo",
      "Ask for the strategy/discovery document they produce, not just visuals",
      "Confirm you receive editable source files (AI, PSD, FIG) — not only PDFs",
      "Check they understand Sinhala/Tamil typography if you use those scripts",
      "Insist on a brand guideline document as a deliverable",
    ],
    faqs: [
      { q: "What is branding?", a: "Branding is the deliberate work of shaping how customers perceive your business — including your name, logo, colours, voice, packaging and overall experience. It's not just a logo; it's the entire emotional and visual signature that makes you recognisable and preferable." },
      { q: "How much does branding cost in Sri Lanka?", a: "A simple logo for a small business costs LKR 25,000–150,000. A full brand identity package (logo, system, guidelines, basic collateral) runs LKR 150,000–750,000. Premium corporate branding with strategy, naming and deep guidelines starts around LKR 750,000 and can go to LKR 4 million or more." },
      { q: "How long does the branding process take?", a: "A focused brand identity project typically takes 4–8 weeks: 1 week discovery, 2–3 weeks concepting, 1–2 weeks refinement and 1 week guidelines. Premium projects with naming, strategy and research run 8–16 weeks." },
      { q: "Should I trademark my brand in Sri Lanka?", a: "Yes — register your trademark with the National Intellectual Property Office (NIPO). It protects your name and logo from being copied and is required for franchising or export. Trademark filing costs roughly LKR 25,000–60,000 per class with an attorney." },
      { q: "What's the difference between a logo and branding?", a: "A logo is one visual mark. Branding is the entire system around it — the strategy, voice, colour palette, typography, photography style, packaging language, customer experience and how it all comes together consistently. A logo without a brand system is just a picture." },
      { q: "Do I need new branding if I just launched?", a: "Yes — get the basics right from day one. A clean logo, a simple colour and font system, and a one-page brand sheet costs much less than rebranding 2 years later after you've printed packaging, signage, vehicles and uniforms with the wrong identity." },
    ],
  },
  "web-design-sri-lanka": {
    slug: "web-design-sri-lanka",
    definition:
      "Web design and development in Sri Lanka is the work of building a website that loads fast, looks professional on mobile and desktop, ranks on Google and converts visitors into leads or sales. It includes design, development, hosting, SEO foundations, content, e-commerce and ongoing maintenance.",
    whyItMatters:
      "For most Sri Lankan customers, your website is the first impression — they Google you before they call. A slow, outdated or non-mobile site loses trust in seconds. Conversely, a fast, clear site with strong content and proper SEO produces leads 24/7 and is the foundation every other marketing channel (ads, social, email) points back to.",
    channels: [
      { name: "Business website", desc: "5–15 page corporate site with About, Services, Contact, Blog." },
      { name: "Landing page", desc: "Single conversion-focused page for ads or campaigns." },
      { name: "E-commerce store", desc: "WooCommerce, Shopify or custom — product catalogue, cart, checkout, payments." },
      { name: "WordPress development", desc: "Easy-to-edit CMS for blog and content-heavy sites." },
      { name: "Web app / portal", desc: "Custom apps, dashboards, member areas." },
      { name: "Maintenance & hosting", desc: "Updates, backups, security, speed optimisation." },
    ],
    costs: [
      { item: "Basic business website (5–8 pages)", range: "LKR 75,000 – 250,000", notes: "Template-based, WordPress." },
      { item: "Custom-designed business website", range: "LKR 250,000 – 800,000", notes: "Bespoke design, content, SEO setup." },
      { item: "Landing page (single)", range: "LKR 35,000 – 150,000", notes: "Conversion-focused for ads." },
      { item: "E-commerce site", range: "LKR 250,000 – 1,500,000+", notes: "WooCommerce / Shopify with payment gateways." },
      { item: "Custom web app", range: "LKR 800,000 – 8,000,000+", notes: "Depends entirely on features." },
      { item: "Maintenance retainer", range: "LKR 8,000 – 50,000 / month", notes: "Updates, backups, security." },
    ],
    bestFor: [
      "Every business — from solo professionals to corporates",
      "Service businesses that need lead capture",
      "Retailers expanding to online sales",
      "Brands planning digital marketing campaigns",
    ],
    mistakes: [
      "Choosing the cheapest developer — expensive to fix later",
      "No mobile-first design — 80%+ of Sri Lankan traffic is mobile",
      "Slow image-heavy sites with no Core Web Vitals optimisation",
      "No CMS access — every text change becomes a developer ticket",
      "No SEO foundations — site looks pretty but ranks for nothing",
    ],
    choosing: [
      "Ask for live URLs of past sites and run them through PageSpeed Insights",
      "Confirm you receive admin access, hosting access and source code",
      "Check the design is responsive on actual phones, not just resized desktops",
      "Insist on basic SEO setup: titles, meta, schema, sitemap, GA4, GSC",
      "Get a clear maintenance plan after launch",
    ],
    faqs: [
      { q: "How much does a website cost in Sri Lanka?", a: "A basic 5–8 page WordPress business site costs LKR 75,000–250,000. A custom-designed business site runs LKR 250,000–800,000. E-commerce stores start around LKR 250,000 and scale to LKR 1.5 million+ depending on features and integrations." },
      { q: "How long does it take to build a website?", a: "A standard small-business website takes 4–8 weeks from kickoff to launch. E-commerce takes 8–16 weeks. Custom web apps take 3–9 months. The biggest delay is usually content and approvals from your side, not development time." },
      { q: "Should I use WordPress, Shopify or a custom build?", a: "WordPress (with WooCommerce) is best for content-rich sites and flexible e-commerce. Shopify is best for stores that want to focus on selling without managing tech. Custom builds make sense only when you have unusual workflows that off-the-shelf platforms can't handle." },
      { q: "What about hosting and domain in Sri Lanka?", a: "For .lk domains, register through LK Domain Registry (around LKR 3,500–7,000 per year). Hosting can be local (LankaHost, Hostalk) or international (SiteGround, Cloudways, Cloudflare). Most modern sites are hosted internationally for speed and CDN coverage." },
      { q: "Will my website be mobile-friendly?", a: "It must be — over 80% of web traffic in Sri Lanka is mobile, and Google ranks mobile-first. Any reputable web designer in Sri Lanka builds responsive by default. Always test on a real phone before signing off." },
      { q: "How do I get traffic to my website after launch?", a: "Three engines work together: SEO (organic Google traffic, 3–12 month build), paid ads (Google + Meta, immediate traffic) and social/email (your owned audience). A great site without traffic is invisible — budget for marketing as much as for the build itself." },
    ],
  },
  "video-production-sri-lanka": {
    slug: "video-production-sri-lanka",
    definition:
      "Video production in Sri Lanka covers the full process of creating any kind of video for advertising, marketing or communication — TV commercials, corporate videos, product films, social reels, YouTube content, animation, motion graphics and drone shoots. It includes scripting, storyboarding, casting, location scouting, filming, editing, sound design, colour grading and final delivery.",
    whyItMatters:
      "Video is the single most engaging format on every modern platform — TV, YouTube, Facebook, Instagram, TikTok and even WhatsApp. A great 30-second TVC builds national awareness, a 15-second reel can drive thousands of website visits, and a corporate film can win million-rupee tenders. Quality matters: bad video damages a brand more than no video at all.",
    channels: [
      { name: "TV commercials (TVC)", desc: "30s/15s broadcast-quality ads for ATL campaigns." },
      { name: "Corporate video", desc: "Company profile, vision, manufacturing, leadership films." },
      { name: "Product video / commercial", desc: "Studio or location shoots showing the product in action." },
      { name: "Social media video / reels", desc: "Vertical short-form for Instagram, TikTok, Facebook, YouTube Shorts." },
      { name: "Motion graphics", desc: "Animated explainers, infographics, kinetic typography." },
      { name: "2D / 3D animation", desc: "Animated stories, characters, product visualisations." },
      { name: "Drone videography", desc: "Aerial cinematography for hotels, real estate, events, tourism." },
      { name: "Event coverage", desc: "Conference, launch, wedding and exhibition films." },
    ],
    costs: [
      { item: "Social reel (15–30s)", range: "LKR 35,000 – 250,000", notes: "Single-day shoot, fast edit." },
      { item: "Corporate profile video (2–4 min)", range: "LKR 250,000 – 1,500,000", notes: "Multi-location, interviews, broll." },
      { item: "TV commercial (30s)", range: "LKR 800,000 – 8,000,000+", notes: "Cast, sets, full crew, post-production." },
      { item: "Product / e-commerce video pack", range: "LKR 150,000 – 800,000", notes: "Multi-product studio shoot." },
      { item: "2D animation (per minute)", range: "LKR 150,000 – 600,000", notes: "Storyboard + script + animation." },
      { item: "3D animation (per minute)", range: "LKR 350,000 – 2,500,000", notes: "Far higher for photoreal." },
      { item: "Drone shoot (half day)", range: "LKR 65,000 – 250,000", notes: "Includes pilot and basic edit." },
    ],
    bestFor: [
      "Brand launches and re-launches",
      "Corporate communications, IR, recruitment films",
      "E-commerce product pages and ads",
      "Real estate, hotels, tourism, education",
      "Social media content engines",
    ],
    mistakes: [
      "Skipping pre-production — bad scripts and storyboards waste shoot day budgets",
      "One generic edit instead of platform-specific cuts (16:9 / 9:16 / 1:1)",
      "Cheap voiceover and weak audio — viewers forgive bad video, not bad sound",
      "No call-to-action or destination — beautiful video that drives nowhere",
    ],
    choosing: [
      "Check showreel quality, not just years of experience",
      "Confirm in-house gear (camera, lighting, audio) vs constant rentals",
      "Ask for the editor's previous solo work — editing makes or breaks the film",
      "Insist on script and storyboard sign-off before shoot day",
      "Get all platform-cut deliverables in the contract",
    ],
    faqs: [
      { q: "How much does video production cost in Sri Lanka?", a: "A simple social reel costs LKR 35,000–250,000. A corporate profile video runs LKR 250,000–1.5 million. A broadcast-quality TV commercial typically costs LKR 800,000–8 million depending on cast, locations and post-production. Animation pricing is per minute, starting around LKR 150,000/min for 2D." },
      { q: "How long does video production take?", a: "Pre-production (script, storyboard, casting, locations) takes 1–3 weeks. The shoot itself is 1–5 days. Post-production (edit, sound, colour, VFX) is 2–4 weeks. So a typical project runs 4–10 weeks from kick-off to final delivery." },
      { q: "Do I need a TV commercial or just social reels?", a: "If your audience is primarily over 35 and outside Western Province, TV still has unmatched reach. If your audience is under 35 and urban, social reels usually deliver more conversions per rupee. Most strong brands produce both — the same shoot can yield a TVC plus 6–10 social cuts." },
      { q: "Can I just film on a phone?", a: "Yes for behind-the-scenes, vlogs, simple tutorials and authentic creator content. No for corporate films, TVCs and brand-defining hero videos — the audio, lighting, framing and edit difference is immediate and viewers judge production quality unconsciously." },
      { q: "Do I need permits for filming in Sri Lanka?", a: "Yes for many public locations — Galle Face, Independence Square, Sigiriya, Yala, Kandy Temple, government buildings — permits come from the relevant authority (UDA, Wildlife, Archaeology, Police). Drone flights need CAASL clearance. Reputable production houses handle permits as part of pre-production." },
    ],
  },
};

// --------- HELPERS ---------
function findCategoryBlock(category: Category): CategoryKnowledge | null {
  return KNOWLEDGE[category.slug] ?? null;
}

function kw(keyword: string) {
  // Normalise display variant.
  return titleCase(keyword);
}

// --------- BLOG ARTICLE GENERATOR (1,200+ words real content) ---------
export function buildBlogArticle(category: Category, keyword: string): { blocks: Block[]; faqs: FAQ[] } {
  const k = findCategoryBlock(category);
  const titled = titleCase(keyword);
  const lowKw = kw(keyword);
  const blocks: Block[] = [];

  if (!k) {
    return {
      blocks: [
        { type: "p", text: `${titled} is one of the most searched advertising topics in Sri Lanka. This guide explains how it works, what it costs and how Sri Lankan businesses use it to grow.` },
      ],
      faqs: [],
    };
  }

  blocks.push({
    type: "p",
    text: `If you're researching ${lowKw}, you're in the right place. This guide explains exactly what ${lowKw} means in the Sri Lankan market, how it actually works, what it costs in LKR, where it fits in your overall marketing mix, and the mistakes to avoid before you spend a rupee. It is written for Sri Lankan business owners, marketing managers and decision-makers who want straight answers — not sales pitches.`,
  });

  blocks.push({ type: "h2", text: `What is ${lowKw}?` });
  blocks.push({ type: "p", text: k.definition });
  blocks.push({
    type: "p",
    text: `${titled} sits within the broader ${category.title.toLowerCase()} category. If you're comparing options across the full advertising mix in Sri Lanka, it helps to first understand where this channel fits and what alternatives exist — covered in detail throughout this guide.`,
  });

  blocks.push({ type: "h2", text: `Why ${lowKw} matters in Sri Lanka` });
  blocks.push({ type: "p", text: k.whyItMatters });

  blocks.push({ type: "h2", text: `Main types and channels of ${category.title.toLowerCase()}` });
  blocks.push({
    type: "p",
    text: `Below are the formats most Sri Lankan brands use under ${category.title.toLowerCase()}. Each one has a different role — some build awareness, some drive trial, some close the sale.`,
  });
  blocks.push({
    type: "ul",
    items: k.channels.map((c) => `${c.name} — ${c.desc}`),
  });

  blocks.push({ type: "h2", text: `How much does ${lowKw} cost in Sri Lanka?` });
  blocks.push({
    type: "p",
    text: `Costs vary by format, scale and partner. The figures below are typical 2025 ranges in LKR for the Sri Lankan market — use them as a planning baseline, not a final quote.`,
  });
  blocks.push({
    type: "table",
    head: ["Item", "Typical range (LKR)", "Notes"],
    rows: k.costs.map((c) => [c.item, c.range, c.notes]),
  });
  blocks.push({
    type: "p",
    text: `For a custom estimate based on your business, audience and goals, call ${SITE.phone} or send a quick brief — we'll come back with a clear plan and price.`,
  });

  blocks.push({ type: "h2", text: `Who ${lowKw} works best for` });
  blocks.push({ type: "ul", items: k.bestFor });

  blocks.push({ type: "h2", text: `Common mistakes to avoid with ${lowKw}` });
  blocks.push({
    type: "p",
    text: `These are the issues we see most often when Sri Lankan businesses run ${lowKw} for the first time. Avoiding them protects your budget and gets you to results faster.`,
  });
  blocks.push({ type: "ul", items: k.mistakes });

  blocks.push({ type: "h2", text: `How to choose the right ${lowKw} partner` });
  blocks.push({
    type: "p",
    text: `Whether you hire an agency, a freelancer or build in-house, use this checklist to filter shortlisted partners.`,
  });
  blocks.push({ type: "ol", items: k.choosing });

  blocks.push({ type: "h2", text: `How to get started` });
  blocks.push({
    type: "ol",
    items: [
      `Define one clear goal — leads, sales, awareness, footfall, or app installs.`,
      `Set a realistic budget based on the cost ranges above.`,
      `Pick the 1–2 channels that match your audience best instead of spreading thin.`,
      `Brief your partner clearly: target audience, KPI, deadline, must-haves.`,
      `Insist on transparent reporting — weekly for digital, fortnightly for ATL/BTL.`,
      `Review at 30 / 60 / 90 days and double down on what works.`,
    ],
  });

  blocks.push({ type: "h2", text: `Talk to a Sri Lankan ${category.title.toLowerCase()} specialist` });
  blocks.push({
    type: "p",
    text: `If you'd like a no-obligation conversation about ${lowKw} for your business, call ${SITE.phone}, message us on WhatsApp, or send your brief via the inquiry form. We'll explain options, expected results and a realistic budget — clearly, in plain English.`,
  });

  return { blocks, faqs: k.faqs };
}

// --------- CATEGORY HUB LONG-FORM (used after the existing service grid) ---------
export function buildCategoryLongForm(category: Category): { blocks: Block[]; faqs: FAQ[] } {
  const k = findCategoryBlock(category);
  if (!k) return { blocks: [], faqs: [] };
  const blocks: Block[] = [];
  const lowName = category.title.toLowerCase();

  blocks.push({ type: "h2", text: `What is ${category.title} in Sri Lanka?` });
  blocks.push({ type: "p", text: k.definition });

  blocks.push({ type: "h2", text: `Why ${lowName} matters for Sri Lankan businesses` });
  blocks.push({ type: "p", text: k.whyItMatters });

  blocks.push({ type: "h2", text: `${category.title} channels and formats` });
  blocks.push({ type: "ul", items: k.channels.map((c) => `${c.name} — ${c.desc}`) });

  blocks.push({ type: "h2", text: `Typical ${lowName} costs in Sri Lanka (LKR)` });
  blocks.push({
    type: "table",
    head: ["Item", "Typical range", "Notes"],
    rows: k.costs.map((c) => [c.item, c.range, c.notes]),
  });

  blocks.push({ type: "h2", text: `Who ${lowName} suits best` });
  blocks.push({ type: "ul", items: k.bestFor });

  blocks.push({ type: "h2", text: `Mistakes Sri Lankan brands make with ${lowName}` });
  blocks.push({ type: "ul", items: k.mistakes });

  blocks.push({ type: "h2", text: `How to choose the right ${lowName} partner` });
  blocks.push({ type: "ol", items: k.choosing });

  return { blocks, faqs: k.faqs };
}

// --------- SUB-SERVICE LONG-FORM ---------
export function buildServiceLongForm(category: Category, keyword: string): { blocks: Block[]; faqs: FAQ[] } {
  const k = findCategoryBlock(category);
  if (!k) return { blocks: [], faqs: [] };
  const blocks: Block[] = [];
  const titled = titleCase(keyword);

  blocks.push({ type: "h2", text: `Where ${titled} fits in your marketing mix` });
  blocks.push({
    type: "p",
    text: `${titled} is part of ${category.title.toLowerCase()} in Sri Lanka. ${k.definition}`,
  });

  blocks.push({ type: "h2", text: `What's involved in delivering ${titled}` });
  blocks.push({
    type: "ul",
    items: k.channels.slice(0, 6).map((c) => `${c.name}: ${c.desc}`),
  });

  blocks.push({ type: "h2", text: `Typical investment in Sri Lanka` });
  blocks.push({
    type: "table",
    head: ["Item", "Typical range (LKR)", "Notes"],
    rows: k.costs.slice(0, 5).map((c) => [c.item, c.range, c.notes]),
  });

  blocks.push({ type: "h2", text: `Common pitfalls to avoid` });
  blocks.push({ type: "ul", items: k.mistakes });

  blocks.push({ type: "h2", text: `What to ask before signing` });
  blocks.push({ type: "ol", items: k.choosing });

  return { blocks, faqs: k.faqs.slice(0, 5) };
}

// --------- HOME PAGE LONG-FORM (~2,000 words) ---------
export const HOME_LONGFORM: { blocks: Block[]; faqs: FAQ[] } = {
  blocks: [
    { type: "h2", text: "What is advertising in Sri Lanka?" },
    {
      type: "p",
      text: "Advertising in Sri Lanka is the full set of tools businesses use to reach customers across the country — from a 30-second TVC on Derana, to a Google search ad, a billboard on Galle Road, a TikTok reel, an SMS campaign or a roadshow in Kandy. It is divided into three broad families: ATL (mass media — TV, radio, press, cinema), BTL (on-ground activations, retail and field marketing) and digital (Google, social, SEO, email, SMS, WhatsApp). Every business — from a small Colombo cafe to a national bank — uses some combination of these channels to win awareness, leads and sales.",
    },
    {
      type: "p",
      text: "What makes Sri Lanka unique is the mix of audiences and languages: Sinhala (around 75%), Tamil (around 15%) and English (urban, professional). Successful campaigns localise both the message and the media — running parallel creatives, choosing the right stations and publications, and adapting tone for each community. Sri Lanka also has very high mobile penetration (140%+) and one of South Asia's highest social media usage rates relative to internet penetration, which makes digital advertising disproportionately effective.",
    },

    { type: "h2", text: "Types of advertising available in Sri Lanka" },
    {
      type: "p",
      text: "There are 11 main categories used by Sri Lankan brands. Each one has a different strength — pick the mix that matches your audience and budget.",
    },
    {
      type: "ul",
      items: [
        "ATL Advertising — TV, radio, newspaper, magazine and cinema. Best for fast national awareness.",
        "BTL Advertising — brand activations, mall events, roadshows, sampling, retail branding. Best for trial and conversion.",
        "TTL / Integrated — combined ATL + BTL + digital under one strategy. Best for major launches.",
        "Digital Marketing — Google, Meta, TikTok, LinkedIn, YouTube, programmatic. Best for measurable ROI.",
        "SEO — organic Google rankings. Best long-term, lowest cost-per-lead channel.",
        "Social Media Marketing — Facebook, Instagram, TikTok, YouTube, LinkedIn. Best for community and brand love.",
        "Email & SMS Marketing — direct to your existing list. Highest ROI per rupee spent.",
        "Outdoor / OOH — billboards, LED, transit, lamp posts. Best for visibility and trust.",
        "Branding & Creative — identity, logo, packaging, design. Foundation for everything else.",
        "Web Design & Development — websites, e-commerce, landing pages. The home base every other channel points to.",
        "Video Production — TVCs, corporate films, social reels, animation. The most engaging format on every platform.",
      ],
    },

    { type: "h2", text: "How to choose the right advertising mix for your business" },
    {
      type: "p",
      text: "Most Sri Lankan businesses waste their first marketing budget by spreading too thin across too many channels. The simple framework below avoids that — start by answering four questions, then build around the answers.",
    },
    {
      type: "ol",
      items: [
        "Who is your customer? (Age, language, location, income, behaviour)",
        "Where do they spend their attention? (TV, FM, Facebook, TikTok, Google, in-store)",
        "What is your goal? (Awareness, leads, sales, footfall, retention)",
        "What is your realistic 6-month budget? (Be honest — under-funding kills more campaigns than bad creative)",
      ],
    },
    {
      type: "p",
      text: "Once you have those answers, the right channels become obvious. A premium urban audience under 35? — Instagram, TikTok and Google. An islandwide FMCG launch? — TV + radio + retail branding + digital. A B2B service? — LinkedIn + SEO + email + targeted Google Search. A local restaurant? — Google Business Profile + Facebook/Instagram ads + WhatsApp.",
    },

    { type: "h2", text: "What advertising costs in Sri Lanka — at a glance" },
    {
      type: "p",
      text: "These are typical 2025 LKR ranges across the most-used channels. Treat them as a planning baseline; actual quotes depend on inventory, scale and creative.",
    },
    {
      type: "table",
      head: ["Channel", "Typical monthly range (LKR)", "Best for"],
      rows: [
        ["TV advertising (campaign)", "1,500,000 – 15,000,000+", "National awareness"],
        ["Radio advertising", "150,000 – 2,500,000", "Regional reach, drive-time"],
        ["Newspaper advertising", "200,000 – 3,000,000", "Trust, local SMEs, tenders"],
        ["Outdoor billboards", "250,000 – 5,000,000", "Visibility, brand recall"],
        ["Google Ads", "50,000 – 1,500,000+", "Lead gen, e-commerce"],
        ["Facebook / Instagram ads", "30,000 – 1,000,000+", "Awareness + sales"],
        ["TikTok ads", "50,000 – 800,000", "Under-35 audience"],
        ["SEO retainer", "60,000 – 600,000", "Long-term organic traffic"],
        ["Social media management", "35,000 – 700,000", "Brand presence"],
        ["Email + SMS marketing", "25,000 – 250,000", "Existing customer revenue"],
        ["Web design (one-off)", "75,000 – 1,500,000+", "Lead capture base"],
        ["Video / TVC production", "35,000 – 8,000,000+", "All channels"],
      ],
    },

    { type: "h2", text: "How fast does advertising produce results?" },
    {
      type: "ul",
      items: [
        "Google Search Ads — leads typically within 3–7 days of launch.",
        "Facebook / Instagram / TikTok ads — engagement within hours, sales within the first week.",
        "TV / Radio / Outdoor — measurable brand search lift within 2–4 weeks; full impact at 6–12 weeks.",
        "BTL activations — same-day footfall, leads and sampling data.",
        "SEO — first ranking movements at 4–8 weeks; meaningful traffic at 3–6 months; #1 positions at 6–12 months.",
        "Email / SMS / WhatsApp — immediate, but only if you already have an opt-in list.",
      ],
    },

    { type: "h2", text: "Why most Sri Lankan advertising budgets get wasted" },
    {
      type: "p",
      text: "Five mistakes account for the majority of failed campaigns we see across Sri Lanka. Avoiding them saves more money than any clever tactic.",
    },
    {
      type: "ul",
      items: [
        "Boosting Facebook posts instead of running structured campaigns with conversion objectives.",
        "Running ads with no tracking — no Meta Pixel, no GA4 conversions, no UTM tags. The agency reports impressions while you wonder where the leads are.",
        "Hiring vendors who own your ad accounts, hosting and domain. When you switch agencies, you lose everything.",
        "One English creative subtitled into Sinhala/Tamil instead of three properly localised versions.",
        "Cutting the marketing budget before it has time to compound — most channels need 90 days of consistency before they show their real potential.",
      ],
    },

    { type: "h2", text: "Why use advertisingsrilanka.lk?" },
    {
      type: "p",
      text: `We're an information hub, not just an agency. Use this site to learn what's available, compare channels and decide what fits your business — at your own pace, in plain English. When you're ready, call ${SITE.phone} or message us on WhatsApp and we'll help you scope, plan and execute. Free guidance, no obligation, no sales pressure.`,
    },
  ],
  faqs: [
    {
      q: "What is the cheapest form of advertising in Sri Lanka?",
      a: "For most small businesses, Google Business Profile (free), local SEO (LKR 35,000–100,000/month) and targeted Facebook/Instagram ads (from LKR 30,000/month) deliver the lowest cost-per-lead. Email marketing to your existing customers is essentially free if you have a list.",
    },
    {
      q: "How much should I spend on advertising as a percentage of revenue?",
      a: "Healthy Sri Lankan SMEs typically spend 5–10% of target revenue on marketing if they're stable, and 12–20% if they're growing aggressively. New brands trying to establish themselves often spend 25–40% in the first year, then scale down.",
    },
    {
      q: "Can I run a national campaign without TV?",
      a: "Yes — many digital-first brands in Sri Lanka have built strong national awareness using Facebook + TikTok + YouTube + outdoor + influencers, with no TV at all. TV is fastest for mass awareness but no longer essential, especially if your audience is under 40.",
    },
    {
      q: "What's the difference between an advertising agency and a digital agency?",
      a: "An advertising agency typically covers the full mix — strategy, creative, ATL, BTL, digital, media buying. A digital agency focuses only on online channels (Google, Meta, SEO, email). For an integrated campaign in Sri Lanka, a full-service partner usually delivers better consistency.",
    },
    {
      q: "Do I need separate vendors for design, video, ads and SEO?",
      a: "Not if you can find one team that does all of them well — it usually saves cost and keeps the brand consistent. But never accept generalist mediocrity in any one area; a great Google Ads specialist plus a great designer outperforms one weak full-service shop.",
    },
    {
      q: "How do I measure if my advertising is working?",
      a: "Three numbers matter: cost-per-lead (CPL), cost-per-sale or return on ad spend (ROAS), and customer lifetime value (LTV). Set them up in GA4, Meta Pixel and your CRM before launching. If your agency can't tell you these numbers monthly, switch agencies.",
    },
    {
      q: "Is advertising in Sri Lanka regulated?",
      a: "Yes — broadcast TV/radio is regulated by the Telecommunications Regulatory Commission (TRCSL); product claims fall under the Consumer Affairs Authority (CAA); financial, pharma and alcohol/tobacco advertising have additional category-specific rules; and personal data use is governed by the Personal Data Protection Act 2022.",
    },
    {
      q: "Can a small business compete with big brands in Sri Lanka?",
      a: "Absolutely — small businesses can outperform large competitors on Google search, local SEO, niche social communities and targeted email. Big brands win on mass reach (TV, billboards), but small businesses win on relevance, speed and customer relationships when they pick the right channels.",
    },
  ],
};

// --------- ORG / LOCAL BUSINESS JSON-LD ---------
export const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phoneIntl,
  email: SITE.email,
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressRegion: "Western Province",
    addressLocality: "Colombo",
  },
  description:
    "Information hub for advertising in Sri Lanka — TV, radio, press, billboards, Google Ads, social media, SEO, branding, web and video.",
};

export function faqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
