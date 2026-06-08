import { Link } from "@tanstack/react-router";
import { Quote, Building2, BookOpen, ShieldCheck, Briefcase, Factory } from "lucide-react";
import { SITE } from "@/data/site";

const TESTIMONIALS = [
  { q: "We had no idea where to start with advertising. The free guidance call gave us a clear 3-channel plan — Google Search, Facebook and a Galle Road billboard. Within 4 months our lead volume tripled.", who: "Director, Real Estate Developer, Colombo 3" },
  { q: "Banner printing and LED screen rental for our product launch were delivered islandwide on the same day. The team managed artwork through installation — we didn't coordinate a single vendor ourselves.", who: "Marketing Manager, FMCG Company, Colombo" },
  { q: "LED sign boards for our three pharmacy branches in Kandy, Kurunegala and Matara were installed within the same week. The quality difference from our previous signs is immediately visible.", who: "Owner, Pharmacy Chain, Central Province" },
  { q: "The annual report was delivered to our offices 48 hours before the AGM. Every section was print-perfect. Our board noted the quality improvement from previous years immediately.", who: "IR Manager, Listed Company, Colombo 7" },
  { q: "We used the channel comparison guide to justify our budget reallocation from TV to digital. The structured breakdown by channel made the internal business case straightforward to present.", who: "Brand Manager, Retail Chain, Sri Lanka" },
  { q: "Same-day banner printing in Colombo saved our event. Artwork approved at 10am, banners at the venue by 3pm. No other supplier could do that.", who: "Events Coordinator, Corporate Event Agency" },
];

const AGENCY_TYPES: [string, string, string, string][] = [
  ["Full-Service Agency", "Strategy, creative, media buying, production — all channels under one roof", "Large brands needing integrated ATL + BTL campaign management", "Expensive — minimum monthly fees typically Rs 300,000+"],
  ["Digital Marketing Agency", "Google Ads, Facebook/Instagram, SEO, email, content — online only", "Businesses where most customers come through digital channels", "No traditional media — need a separate partner for TV, radio, OOH"],
  ["Creative Agency", "Brand identity, visual design, TVC production, campaign creative", "Brands needing strong creative — logos, campaigns, video", "Does not buy media — you still need media placement"],
  ["Media Buying Agency", "Plans and buys media — TV slots, radio, billboards, digital inventory", "Large advertisers spending Rs 500,000+ monthly on media", "Does not produce creative — you supply the ad"],
  ["PR Agency", "Media relations, press releases, crisis comms, reputation management", "Brands needing earned media or reputation management", "No paid media capability"],
  ["BTL / Activation Agency", "Brand activations, mall promotions, field marketing, sampling, roadshows", "FMCG brands, product launches, trial-driving campaigns", "On-ground only — no digital or ATL"],
  ["Outdoor / OOH Specialist", "Billboard networks, transit advertising, LED screen placements", "Brands wanting outdoor as a primary or supporting channel", "Outdoor only — need separate partners for digital and ATL"],
  ["Production House", "TVC, corporate video, animation, photography production", "Any brand needing video or photographic content", "Production only — does not plan campaigns or buy media"],
];

const AGENCY_QUESTIONS = [
  ["Who will actually work on my account?", "Ask for names and profiles of day-to-day team members — not just the senior team who pitch you."],
  ["Can I see work for businesses in my sector?", "Sector experience matters — an agency that understands the FMCG retail calendar will outperform one that doesn't."],
  ["Do I own my ad accounts, domain and data?", "All Google Ads, Facebook Business Manager, domain and hosting must be in your business name."],
  ["How do you report results monthly?", "Expect clear metrics — impressions, clicks, leads, cost-per-lead, ROAS — not just dashboard screenshots."],
  ["What is your minimum contract and exit terms?", "Avoid long lock-ins. Month-to-month or 3-month initial contracts are reasonable for new relationships."],
  ["Do you have Sinhala and Tamil creative capability?", "English-only agencies are fundamentally limited for most Sri Lankan markets."],
  ["What is your testing and optimisation process?", "Good agencies test multiple variants and iterate — not run one ad forever."],
  ["Can you provide client references I can call?", "Reachable Sri Lankan references are the single best indicator of agency quality."],
  ["Which 2–3 channels are you genuinely expert in?", "Most agencies claim everything. Verify specialisation with case studies."],
  ["How do you handle a campaign that's not working?", "Ask for a specific underperforming example and how they responded."],
];

const INDUSTRY_STATS: [string, string, string][] = [
  ["Total ad market size", "USD 200–250 million annually", "Mid-sized by Asian standards — competitive but accessible for well-planned campaigns"],
  ["Digital advertising share", "40–45% and growing 20–25% annually", "Digital has overtaken traditional in new spend — budgets should reflect this"],
  ["TV advertising share", "~35% of total ad spend", "TV still the largest single channel — FMCG and finance remain heavy investors"],
  ["Internet penetration", "~52% of population (2024)", "Substantial reach but rural and older demographics still need traditional media"],
  ["Mobile SIM penetration", "~140% — multi-SIM households common", "Mobile-first creative is not optional"],
  ["Facebook users", "~6.5 million active", "Meta Ads (FB + IG) reaches the widest digital audience"],
  ["TikTok users", "~4 million, fastest growing", "Essential for under-35 audiences and product discovery"],
  ["Google search share", "~97% of Sri Lanka's search", "SEO and Google Ads are the only search channels worth investing in"],
  ["Language split", "Sinhala ~75%, Tamil ~15%, English urban", "Multilingual creative is essential for national reach"],
  ["Radio reach", "~60% of adults daily — strong North, East, upcountry", "Undervalued by digital-focused marketers — very low cost-per-reach"],
  ["Newspaper circulation", "Dailies ~150k–250k combined and declining", "Still meaningful for B2B, government, finance, older demographics"],
  ["Registered advertising agencies", "200+ in Sri Lanka", "Market is fragmented — due diligence before hiring is essential"],
];

const SEASONS: [string, string, string, string][] = [
  ["Sinhala & Tamil New Year (Avurudu)", "April 13–14", "Highest consumer spending — ad rates spike 30–50% in Mar/Apr", "FMCG, retail, banking, mobile, electronics"],
  ["Christmas & New Year", "December–January", "Second highest peak — tourism, hospitality, gifts, retail", "Hotels, retail, gifts, F&B, tourism"],
  ["Back to School", "January (main) and September", "Strong peak — education, stationery, uniforms, tuition", "Education, textbooks, clothing, electronics"],
  ["Vesak", "May (full moon)", "Cultural values-led — restraint on aggressive messaging", "CSR campaigns, telecoms, FMCG"],
  ["Cricket Season", "Major series — varies annually", "TV audiences spike — premium ad rates on cricket telecasts", "Telecoms, beverages, banking, automotive"],
  ["Valentine's Day", "February 14", "Growing gifting and dining peak — digital and social driven", "Hospitality, gifts, jewellery, flowers, restaurants"],
  ["Q4 Tourist Peak", "October–January", "International arrivals peak — tourism businesses increase spend", "Hotels, resorts, tourism services, retail in tourist areas"],
];

const REGULATIONS: [string, string, string][] = [
  ["Sri Lanka Rupavahini Corporation (SLRC)", "State television advertising standards", "Ad content pre-approval; no comparative ads; alcohol/tobacco prohibited"],
  ["Sri Lanka Broadcasting Corporation (SLBC)", "State radio advertising", "Duration limits; prohibited categories; content standards"],
  ["Outdoor Advertising (Municipal Councils)", "Billboards, signs, lamp-post banners", "Sign permits required; size and placement restrictions; annual licence fees"],
  ["Sri Lanka Standards Institution (SLSI)", "Product advertising claims", "Quality and certification claims must be accurate and substantiated"],
  ["Consumer Affairs Authority (CAA)", "Consumer protection in advertising", "Misleading price, comparative and deceptive claims prohibited"],
  ["Telecommunications Regulatory Commission (TRCSL)", "SMS and digital marketing", "Bulk SMS requires consent; regulates unsolicited commercial communications"],
  ["Food Act & Drug Act (Ministry of Health)", "Food, beverage and pharmaceutical advertising", "Health claims pre-approved; pharma to public heavily restricted"],
  ["Advertising Standards Association of Sri Lanka (AASL)", "Self-regulatory industry code", "Member agencies follow AASL code on truthfulness, decency, legality"],
];

const GLOSSARY: [string, string, string][] = [
  ["ATL (Above-the-Line)", "Mass media — TV, radio, newspapers, cinema, outdoor", "Siyatha/Derana TV, Shaa FM/Yes FM, Sunday Observer, Galle Road billboards"],
  ["BTL (Below-the-Line)", "Targeted activations — promotions, events, sampling, direct", "One Galle Face, Crescat, Majestic City activations; supermarket roadshows"],
  ["TTL (Through-the-Line)", "Integrated ATL + BTL under one brand message", "Product launch using TV + BTL + Facebook under a single campaign theme"],
  ["GRP (Gross Rating Point)", "TV reach measurement — 1 GRP = 1% of target reached once", "TV is planned and bought in GRPs on Siyatha, Derana, Hiru"],
  ["CPM (Cost Per Mille)", "Cost to reach 1,000 people", "Facebook CPM Rs 200–600; Google Display Rs 150–400"],
  ["CPC (Cost Per Click)", "Cost each time a user clicks your ad", "Google Search CPC Rs 15 (low comp) to Rs 400+ (finance, legal, insurance)"],
  ["CTR (Click-Through Rate)", "% of impressions that result in a click", "Avg Facebook CTR 0.8–1.5%; Google Search 3–8%"],
  ["ROAS (Return on Ad Spend)", "Revenue per rupee of ad spend", "E-commerce target 4–8x; service businesses use cost-per-lead instead"],
  ["OOH (Out-of-Home)", "All outdoor — billboards, transit, street furniture", "Galle Road, bus shelters, three-wheeler rear, lamp-posts, digital LED"],
  ["SEM / SEO", "Paid vs organic search visibility", "Google holds 97% of Sri Lanka search — SEO means Google SEO"],
  ["KPIs", "Specific metrics used to measure campaign success", "Define KPIs before spending — impressions, leads, sales, CPL, ROAS"],
  ["Reach vs Frequency", "Unique people reached vs times each sees the ad", "Awareness needs reach; conversion needs 3–7 frequency"],
];

const INDUSTRY_GUIDES: [string, string, string, string, string][] = [
  ["Hotels & Resorts", "Filling rooms year-round, competing with OTAs", "Google Search, Instagram, TripAdvisor, remarketing", "Oct–Jan peak, Jul–Aug secondary", "/advertising-for-hotels-and-resorts-sri-lanka"],
  ["Real Estate", "Long sales cycle — trust-building critical", "Google Search, Facebook Lead Ads, OOH near site, WhatsApp", "Q1 and Q3 project launches", "/advertising-for-real-estate-sri-lanka"],
  ["Schools & Universities", "Annual enrolment cycle — limited admissions window", "Google Search, Facebook, open day events, local radio", "Oct–Dec (Grade 1), Feb–Apr (O/L, A/L)", "/advertising-for-schools-and-universities-sri-lanka"],
  ["Restaurants & Cafés", "Foot traffic, bookings, delivery orders", "Instagram, Google Business Profile, Uber Eats/PickMe, Facebook", "Dec, Valentine's, Mother's Day, Avurudu", "/advertising-for-restaurants-sri-lanka"],
  ["Healthcare & Hospitals", "Trust-building, appointments, health awareness", "Google Search, Facebook awareness, outdoor near catchment", "World Health Day (Apr), seasonal campaigns", "/advertising-for-healthcare-sri-lanka"],
  ["FMCG & Retail", "Shelf visibility, trial, trade-channel engagement", "TV (awareness), BTL (trial), Facebook + TikTok", "Avurudu, Christmas, back-to-school", "/advertising-for-fmcg-sri-lanka"],
  ["Banks & Finance", "Trust, product awareness, regulatory compliance", "TV (brand), Google Search (intent), radio (mass reach)", "New Year, Avurudu, home loan Q1", "/advertising-for-banks-sri-lanka"],
  ["E-Commerce", "CAC, retention, competing with Daraz", "Meta Ads, Google Shopping, SEO, email, influencers", "Christmas, Valentine's, Avurudu, flash sales", "/advertising-for-ecommerce-sri-lanka"],
  ["Automotive", "High-consideration, long research, dealer competition", "Google Search, YouTube, Facebook, OOH near showrooms", "Year-round — model launch peaks", "/advertising-for-automotive-sri-lanka"],
  ["IT & Tech Startups", "B2B lead gen, credibility in trust-sensitive market", "LinkedIn, Google Search, SEO, content, event sponsorship", "Year-round — launch cycles", "/advertising-for-it-and-tech-sri-lanka"],
];

export function HomeExtraSections() {
  return (
    <>
      {/* TESTIMONIALS */}
      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <div className="text-sm font-semibold text-accent">Trusted by Sri Lankan businesses</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What Sri Lankan Businesses Say About Advertising Sri Lanka</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Over 500 businesses across Sri Lanka have used our platform to plan, compare and execute their advertising. Here is what some of them experienced.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.who} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <Quote className="h-6 w-6 text-accent" />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">"{t.q}"</blockquote>
                <figcaption className="mt-4 text-xs font-semibold text-foreground">— {t.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CHOOSE AN ADVERTISING AGENCY */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-accent">
            <Briefcase className="h-4 w-4" /> Choosing an agency
          </div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">How to Choose an Advertising Agency in Sri Lanka</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Finding the right advertising agency in Sri Lanka is one of the most consequential decisions a business makes. The wrong agency costs you not just their fee — but every month your campaigns underperform. Here is a practical framework for making the right choice.
          </p>
        </div>

        <h3 className="mt-12 text-xl font-bold">Types of Advertising Agencies in Sri Lanka</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Agency Type</th>
                <th className="px-3 py-2 text-left font-semibold">What They Do</th>
                <th className="px-3 py-2 text-left font-semibold">Best For</th>
                <th className="px-3 py-2 text-left font-semibold">Limitation</th>
              </tr>
            </thead>
            <tbody>
              {AGENCY_TYPES.map((r) => (
                <tr key={r[0]} className="border-t border-border">
                  <td className="px-3 py-2 align-top font-semibold">{r[0]}</td>
                  <td className="px-3 py-2 align-top text-muted-foreground">{r[1]}</td>
                  <td className="px-3 py-2 align-top text-muted-foreground">{r[2]}</td>
                  <td className="px-3 py-2 align-top text-muted-foreground">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 text-xl font-bold">10 Questions to Ask Before Hiring an Advertising Agency</h3>
        <ol className="mt-4 grid gap-3 md:grid-cols-2">
          {AGENCY_QUESTIONS.map(([q, a], i) => (
            <li key={q} className="flex gap-3 rounded-xl border border-border bg-card p-4">
              <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[image:var(--gradient-accent)] text-xs font-bold text-accent-foreground">{i + 1}</span>
              <div>
                <div className="text-sm font-semibold">{q}</div>
                <p className="mt-1 text-sm text-muted-foreground">{a}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ADVERTISING INDUSTRY IN SRI LANKA */}
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-accent">
              <Building2 className="h-4 w-4" /> Industry overview
            </div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">The Advertising Industry in Sri Lanka — Key Facts</h2>
            <p className="mx-auto mt-4 max-w-3xl text-primary-foreground/85">
              Understanding the Sri Lankan advertising industry helps you make informed decisions about budgets, agencies and channel mix.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-xl border border-primary-foreground/10 bg-primary-foreground/5">
            <table className="w-full text-sm">
              <thead className="bg-accent/15 text-accent">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold uppercase tracking-wider">Metric</th>
                  <th className="px-3 py-2 text-left font-semibold uppercase tracking-wider">Data</th>
                  <th className="px-3 py-2 text-left font-semibold uppercase tracking-wider">Implication</th>
                </tr>
              </thead>
              <tbody>
                {INDUSTRY_STATS.map((r) => (
                  <tr key={r[0]} className="border-t border-primary-foreground/10">
                    <td className="px-3 py-2 align-top font-semibold">{r[0]}</td>
                    <td className="px-3 py-2 align-top text-primary-foreground/85">{r[1]}</td>
                    <td className="px-3 py-2 align-top text-primary-foreground/80">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-xl font-bold">Key Advertising Seasons in Sri Lanka</h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-primary-foreground/10 bg-primary-foreground/5">
            <table className="w-full text-sm">
              <thead className="bg-accent/15 text-accent">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold uppercase tracking-wider">Season</th>
                  <th className="px-3 py-2 text-left font-semibold uppercase tracking-wider">Timing</th>
                  <th className="px-3 py-2 text-left font-semibold uppercase tracking-wider">Advertising Impact</th>
                  <th className="px-3 py-2 text-left font-semibold uppercase tracking-wider">Key Sectors</th>
                </tr>
              </thead>
              <tbody>
                {SEASONS.map((r) => (
                  <tr key={r[0]} className="border-t border-primary-foreground/10">
                    <td className="px-3 py-2 align-top font-semibold">{r[0]}</td>
                    <td className="px-3 py-2 align-top text-primary-foreground/85">{r[1]}</td>
                    <td className="px-3 py-2 align-top text-primary-foreground/85">{r[2]}</td>
                    <td className="px-3 py-2 align-top text-primary-foreground/80">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* REGULATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-accent">
            <ShieldCheck className="h-4 w-4" /> Compliance
          </div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Advertising Regulations &amp; Standards in Sri Lanka</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Advertising in Sri Lanka operates within a regulatory framework every marketer needs to understand before launching campaigns.
          </p>
        </div>
        <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Regulatory Body</th>
                <th className="px-3 py-2 text-left font-semibold">What It Governs</th>
                <th className="px-3 py-2 text-left font-semibold">Key Rules</th>
              </tr>
            </thead>
            <tbody>
              {REGULATIONS.map((r) => (
                <tr key={r[0]} className="border-t border-border">
                  <td className="px-3 py-2 align-top font-semibold">{r[0]}</td>
                  <td className="px-3 py-2 align-top text-muted-foreground">{r[1]}</td>
                  <td className="px-3 py-2 align-top text-muted-foreground">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          <strong>Disclaimer:</strong> General reference only. Advertising regulations vary by product category, channel and local authority. Always consult legal counsel and the relevant regulator before launching campaigns in regulated categories (pharmaceuticals, financial services, food &amp; beverage, children's advertising).
        </p>
      </section>

      {/* GLOSSARY */}
      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-accent">
              <BookOpen className="h-4 w-4" /> Glossary
            </div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Advertising Terms Glossary — Sri Lanka Edition</h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              A quick reference for the terms most commonly used by Sri Lankan advertisers and agencies.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-secondary/60">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Term</th>
                  <th className="px-3 py-2 text-left font-semibold">What It Means</th>
                  <th className="px-3 py-2 text-left font-semibold">Sri Lanka Context</th>
                </tr>
              </thead>
              <tbody>
                {GLOSSARY.map((r) => (
                  <tr key={r[0]} className="border-t border-border">
                    <td className="px-3 py-2 align-top font-semibold">{r[0]}</td>
                    <td className="px-3 py-2 align-top text-muted-foreground">{r[1]}</td>
                    <td className="px-3 py-2 align-top text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INDUSTRY GUIDES BY SECTOR */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-accent">
            <Factory className="h-4 w-4" /> Sector playbooks
          </div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Advertising Guides by Industry — Sri Lanka Sector Playbooks</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Different industries face different advertising challenges. Here is a practical summary for each major Sri Lankan sector — with links to the full guide.
          </p>
        </div>
        <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Industry</th>
                <th className="px-3 py-2 text-left font-semibold">Primary Challenge</th>
                <th className="px-3 py-2 text-left font-semibold">Most Effective Channels</th>
                <th className="px-3 py-2 text-left font-semibold">Key Season</th>
                <th className="px-3 py-2 text-left font-semibold">Full Guide</th>
              </tr>
            </thead>
            <tbody>
              {INDUSTRY_GUIDES.map((r) => (
                <tr key={r[0]} className="border-t border-border">
                  <td className="px-3 py-2 align-top font-semibold">{r[0]}</td>
                  <td className="px-3 py-2 align-top text-muted-foreground">{r[1]}</td>
                  <td className="px-3 py-2 align-top text-muted-foreground">{r[2]}</td>
                  <td className="px-3 py-2 align-top text-muted-foreground">{r[3]}</td>
                  <td className="px-3 py-2 align-top">
                    <Link to={r[4] as never} className="font-semibold text-primary hover:underline">
                      Guide →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Not sure which playbook fits your business? Call <a href={`tel:${SITE.phone}`} className="font-semibold text-primary hover:underline">{SITE.phone}</a> for free guidance.
        </p>
      </section>
    </>
  );
}