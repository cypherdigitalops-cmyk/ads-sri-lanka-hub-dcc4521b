import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "BTL Advertising Sri Lanka — Brand Activations, Roadshows & Field Marketing";
const DESC = "BTL advertising in Sri Lanka — brand activations, mall events, roadshows, sampling, retail branding & field marketing across all 25 districts. Free campaign planning. Call 0701772626.";
const H1 = "BTL Advertising Sri Lanka — Brand Activations, Roadshows, Sampling & Field Marketing";
const INTRO = "Full-service BTL advertising in Sri Lanka — 500+ activations delivered across all 25 districts, 10+ years on-ground experience. Brand activations, mall events, roadshows, product sampling, retail branding, POS, exhibitions, field marketing and loyalty programmes — promoters in Sinhala, Tamil and English with real-time daily reporting.";

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BTL Advertising Sri Lanka",
  description: "Full-service BTL advertising in Sri Lanka — brand activations, mall events, roadshows, sampling, retail branding, POS, field marketing and exhibitions across all 25 districts.",
  provider: {
    "@type": "Organization",
    name: "Advertising Sri Lanka",
    url: SITE.url,
    telephone: "+94701772626",
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  serviceType: [
    "Brand Activation",
    "Mall Activation",
    "Roadshow",
    "Product Sampling",
    "Field Marketing",
    "Retail Branding",
    "Point of Sale Displays",
    "Exhibition Management",
    "Loyalty Programmes",
  ],
  url: `${SITE.url}/btl-advertising-sri-lanka`,
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is BTL advertising in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "BTL (Below-the-Line) advertising in Sri Lanka covers targeted, on-ground promotional activities — brand activations, mall events, roadshows, sampling, retail and shop branding, POS, leaflet distribution, field marketing, exhibition stalls and loyalty programmes. Unlike ATL which broadcasts to mass audiences, BTL reaches specific audiences in specific locations for direct engagement, trial and conversion." } },
    { "@type": "Question", name: "What is the difference between BTL and ATL advertising in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "ATL uses mass media (TV, radio, press, cinema, billboards) to build broad awareness. BTL uses targeted on-ground activations (mall events, roadshows, sampling, POS, field teams) to drive direct interaction, trial and conversion. Most effective Sri Lankan campaigns use both — ATL for awareness, BTL to convert that awareness into trial and purchase." } },
    { "@type": "Question", name: "What is a brand activation in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "A live, interactive consumer experience at high-footfall locations — malls, supermarkets, festivals, public spaces — designed to introduce or reinforce a product. Includes demos, sampling, competitions, photo booths and trained promoter engagement, driving trial, social content and real-time feedback advertising alone cannot replicate." } },
    { "@type": "Question", name: "What is a roadshow in Sri Lanka and how does it work?", acceptedAnswer: { "@type": "Answer", text: "A roadshow is a BTL campaign where a branded team — vehicle, sound, stall, promoters — travels to multiple locations across the island. Used for product launches, dealer activation and brand awareness where traditional media reach is limited. Typically 5–25 stops over 1–4 weeks, with each stop lasting half a day to 2 days. We run roadshows across all 25 districts." } },
    { "@type": "Question", name: "How much does a BTL campaign cost in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Single-day mall activations with promoters, stall and sampling start from around Rs 150,000. National roadshows across 5+ cities over 2 weeks range from Rs 1 million upward. Field marketing teams covering 100+ outlets per month are typically monthly retainers. Call 0701772626 for a free itemised quote." } },
    { "@type": "Question", name: "What is field marketing in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Deploying a trained team of brand or sales reps to retail outlets, markets, offices or residential areas to promote products, distribute samples, take orders, train retailer staff and gather market intelligence. FMCG, telecom and banking brands use field marketing teams as an extension of their sales force — especially for retail compliance and outlet relationships outside permanent sales coverage." } },
    { "@type": "Question", name: "Do you run BTL campaigns outside Colombo across Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Yes. We operate BTL campaigns across all 25 districts — mall activations in Colombo and Kandy, roadshows in Jaffna, Anuradhapura, Batticaloa and Trincomalee, and field teams in every province. Outstation activations use locally sourced promoters in the primary district language with on-ground supervision and daily digital reporting." } },
    { "@type": "Question", name: "How do I measure the ROI of a BTL campaign in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Measure cost per trial (cost ÷ samples or demos), cost per lead (cost ÷ qualified leads captured), and where possible cost per conversion (tracked via redemption codes, app installs or CRM sign-ups). Combine with post-campaign brand tracker surveys (aided and unaided awareness before vs after). Avoid measuring BTL by impressions or reach alone — these are ATL metrics misapplied." } },
  ],
};

export const Route = createFileRoute("/btl-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "btl advertising sri lanka, brand activation sri lanka, roadshow sri lanka, sampling sri lanka, field marketing sri lanka, mall activation sri lanka, retail branding sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/btl-advertising-sri-lanka` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(SERVICE_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
    ],
  }),
  component: () => (
    <PageShell>
      <CategoryHubTemplate
        category={CAT}
        h1Override={H1}
        introOverride={INTRO}
        reducedCtas
        extraContent={<BtlRankContent />}
      />
    </PageShell>
  ),
});

function BtlRankContent() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">BTL advertising channels in Sri Lanka — complete comparison</h2>
      <p className="mt-3">BTL advertising in Sri Lanka covers twelve distinct activation formats — each with different consumer reach, engagement depth, measurement capability and cost profile. Use the comparison below to allocate budget to the right mix for your campaign objective.</p>
      <div className="mt-6 overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/40 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">BTL Channel</th>
              <th className="px-4 py-3 font-semibold">Reach</th>
              <th className="px-4 py-3 font-semibold">Best Objective</th>
              <th className="px-4 py-3 font-semibold">Lead Time</th>
              <th className="px-4 py-3 font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Mall Activation", "500–5,000 daily", "Trial, sampling, lead capture", "2–6 weeks", "FMCG, telecom, banking, F&B"],
              ["Roadshow (multi-city)", "200–2,000 per stop", "Regional awareness, dealer activation", "4–10 weeks", "Telecoms, FMCG, automotive, finance"],
              ["Product Sampling", "200–10,000+ per day", "Trial generation, first purchase", "2–4 weeks", "New FMCG launches, food & beverage"],
              ["Exhibition / Trade Booth", "500–10,000+ over event", "B2B lead generation, product demos", "4–10 weeks", "B2B, tech, construction, FMCG trade"],
              ["Retail / Shop Branding", "Daily footfall of outlet", "Visibility at point of purchase", "1–3 weeks", "FMCG, beverages, personal care, pharma"],
              ["Point-of-Sale (POS)", "Outlet footfall", "Shelf conversion, promo activation", "2–4 weeks", "FMCG, confectionery, beverages"],
              ["Field Marketing", "100–500 outlets per team/mo", "Retailer training, shelf compliance", "2–4 weeks", "FMCG, beverages, telecom, banking"],
              ["Leaflet / Flyer", "1,000–50,000 per day", "Local awareness, promo dissemination", "1–2 weeks", "Real estate, restaurants, local retail"],
              ["Door-to-Door", "50–200 households per team/day", "Subscription, home service sign-up", "2–3 weeks", "Insurance, ISP, utilities, delivery"],
              ["Loyalty Programmes", "Existing customer base", "Retention, repeat purchase", "8–16 weeks to build", "Retail, F&B, banking, telecom"],
              ["Sponsorship Activation", "Event audience (100s–100,000s)", "Brand association, PR, affinity", "4–12 weeks", "Telecom, banking, insurance, beverages"],
              ["School / Campus Activation", "Captive 200–5,000", "Youth targeting, trial, database", "3–6 weeks", "Telecom, banking, personal care"],
            ].map((r) => (
              <tr key={r[0]} className="border-t border-border align-top">
                <td className="px-4 py-3 font-semibold text-foreground">{r[0]}</td>
                <td className="px-4 py-3">{r[1]}</td>
                <td className="px-4 py-3">{r[2]}</td>
                <td className="px-4 py-3">{r[3]}</td>
                <td className="px-4 py-3">{r[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">BTL vs ATL vs Digital advertising in Sri Lanka</h2>
      <p className="mt-3">Each layer plays a different role in the consumer journey — the most effective Sri Lankan campaigns use all three in coordination.</p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/40 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Dimension</th>
              <th className="px-4 py-3 font-semibold">BTL</th>
              <th className="px-4 py-3 font-semibold">ATL</th>
              <th className="px-4 py-3 font-semibold">Digital</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Reach", "Targeted by location", "Mass, undifferentiated", "Targeted by behaviour/demo"],
              ["Engagement", "Very high — face-to-face", "Low — passive", "Medium — click/scroll"],
              ["Conversion speed", "Fast — on the spot", "Slow — builds awareness", "Fast for search intent"],
              ["Measurability", "High on-ground; soft on brand", "Low — GRPs are proxies", "Very high — real-time ROAS"],
              ["Min effective budget", "From Rs 150,000/day", "Rs 300,000+/month TV", "Rs 30,000+/month Meta/Google"],
              ["Geographic targeting", "Hyper-local — district/outlet", "National/provincial only", "Postcode / GPS radius"],
              ["Sinhala / Tamil reach", "Excellent — any language", "Excellent — dedicated channels", "Good — lower Sinhala content"],
              ["Rural / upcountry", "Best — reaches villages", "Good — radio + OOH", "Limited — smartphone/internet gaps"],
              ["Campaign role", "Trial, conversion, data capture", "Awareness, brand fame", "Targeting, retargeting, leads"],
            ].map((r) => (
              <tr key={r[0]} className="border-t border-border align-top">
                <td className="px-4 py-3 font-semibold text-foreground">{r[0]}</td>
                <td className="px-4 py-3">{r[1]}</td>
                <td className="px-4 py-3">{r[2]}</td>
                <td className="px-4 py-3">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4"><strong className="text-foreground">The integrated view:</strong> ATL builds awareness ("the brand is here"), digital targets and retargets ("the brand is for you"), BTL converts ("the brand is right here, try it now"). Each layer without the others is less efficient — BTL without ATL means cold consumers, ATL without BTL means awareness that never converts to trial.</p>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">BTL advertising by industry in Sri Lanka</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/40 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Industry</th>
              <th className="px-4 py-3 font-semibold">Most Effective BTL Formats</th>
              <th className="px-4 py-3 font-semibold">Peak Season</th>
              <th className="px-4 py-3 font-semibold">Key Locations</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["FMCG & Beverages", "In-store sampling, POS, mall activation, gondola branding", "Avurudu, Christmas, back-to-school", "Keells, Cargills, Arpico, Laugfs"],
              ["Telecommunications", "Roadshows, dealer activation, kiosks, campus events", "Year-round", "Bus stations, markets, campuses"],
              ["Banking & Finance", "Branch events, field teams, roadshows, agri fairs", "New Year, Avurudu, harvest", "Pola markets, agri fairs, district towns"],
              ["Pharma & Healthcare", "Doctor detailing, health camps, hospital activations", "Health awareness campaigns", "Hospitals, clinics, pharmacies"],
              ["Automotive", "Mall display + test drive, regional roadshows", "January, post-Avurudu", "Colombo malls, regional showrooms"],
              ["Real Estate", "Mall activations, show flat events, field teams", "Q1 & Q3 launches", "Colombo 5/7, Battaramulla, Malabe"],
              ["Education", "School gate activations, parent events, mall stalls", "Oct–Dec, Jan–Apr", "School gates, edu fairs"],
              ["Personal Care", "In-store sampling, beauty counters, salon events", "Valentine's, Christmas, Avurudu", "Keells, Cargills, salons, malls"],
              ["E-Commerce & Tech", "Mall kiosks, campus events, demo stations", "Flash sales, feature launches", "Campuses, IT parks, malls"],
              ["Insurance", "Door-to-door, workplace events, roadshows, Pola", "New Year, post-Avurudu", "HR depts, Pola markets, rural"],
            ].map((r) => (
              <tr key={r[0]} className="border-t border-border align-top">
                <td className="px-4 py-3 font-semibold text-foreground">{r[0]}</td>
                <td className="px-4 py-3">{r[1]}</td>
                <td className="px-4 py-3">{r[2]}</td>
                <td className="px-4 py-3">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">BTL advertising across Sri Lanka — district-by-district</h2>
      <p className="mt-3">Effective BTL requires district-level planning — consumer profile, language, shopping patterns and activation locations vary significantly between Colombo and Kandy, Jaffna and Galle.</p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/40 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Region</th>
              <th className="px-4 py-3 font-semibold">Language</th>
              <th className="px-4 py-3 font-semibold">High-Value BTL Locations</th>
              <th className="px-4 py-3 font-semibold">Key Sectors</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Greater Colombo (Colombo, Dehiwala, Moratuwa, Kotte)", "English + Sinhala", "One Galle Face, CCC, Crescat, Liberty, Majestic City, Colpetty", "Banking, telecom, FMCG, automotive, tech"],
              ["Gampaha (Negombo, Ja-Ela, Wattala, Ragama)", "Sinhala", "Negombo centre, Keells Negombo, K-Zone Wattala", "FMCG, telecom, personal care, real estate"],
              ["Kalutara (Panadura, Kalutara, Beruwala)", "Sinhala + Tamil (coastal)", "Panadura town, Kalutara market, Beruwala bazaar", "FMCG, fishing products, telecoms"],
              ["Kandy & Central (Kandy, Matale, Nuwara Eliya)", "Sinhala + Tamil", "Kandy City Centre, Kandy Market, Katugastota", "FMCG, banking, telecom, tourism"],
              ["Southern (Galle, Matara, Hambantota)", "Sinhala", "Galle Fort area, Matara town, Hambantota govt zones", "FMCG, banking, telecom, hospitality"],
              ["North Western (Kurunegala, Puttalam, Chilaw)", "Sinhala", "Kurunegala centre, Pola markets, Chilaw bazaar", "Agri, FMCG, telecom, banking"],
              ["North Central (Anuradhapura, Polonnaruwa)", "Sinhala", "Anuradhapura centre, Pola, temple precincts", "FMCG, agri/fertiliser, banking"],
              ["Northern (Jaffna, Vavuniya, Mannar)", "Tamil", "Jaffna town, KKS Road, Vavuniya town", "FMCG, banking, telecom, construction"],
              ["Eastern (Trincomalee, Batticaloa, Ampara)", "Tamil + Sinhala", "Trinco town, Batticaloa town, beaches", "FMCG, fishing, telecom, tourism"],
              ["Sabaragamuwa (Ratnapura, Kegalle)", "Sinhala", "Ratnapura town, gem market, Kegalle town", "FMCG, gem trade, banking, rubber"],
            ].map((r) => (
              <tr key={r[0]} className="border-t border-border align-top">
                <td className="px-4 py-3 font-semibold text-foreground">{r[0]}</td>
                <td className="px-4 py-3">{r[1]}</td>
                <td className="px-4 py-3">{r[2]}</td>
                <td className="px-4 py-3">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4"><strong className="text-foreground">Critical planning insight:</strong> the most common BTL failure in Sri Lanka is deploying Colombo-designed activations in regional markets without localisation. A Sinhala-speaking Colombo team in Tamil-dominant Jaffna with English-printed materials signals disrespect — every district activation must be briefed with local language, cultural references and consumer insight.</p>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">How to plan a BTL campaign in Sri Lanka — 5-phase framework</h2>

      <h3 className="mt-6 text-xl font-bold text-foreground">Phase 1 — Strategic brief (week 1–2)</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li><strong>Single campaign objective</strong> — one measurable outcome (trials, leads, accounts opened, app installs), not a list.</li>
        <li><strong>Specific target audience</strong> — age, income, language, location, occasion of purchase — not "women 25–45".</li>
        <li><strong>Defined geographic scope</strong> — specific districts and locations, not "nationwide" without a per-district plan.</li>
        <li><strong>Consumer insight</strong> — what does the target already believe? What barrier to trial exists?</li>
        <li><strong>Numeric KPIs</strong> — "5,000 samples, 500 leads, 200 sign-ups per city" — not "increase awareness".</li>
        <li><strong>Budget + 10% contingency</strong> broken down by channel and district.</li>
      </ul>

      <h3 className="mt-6 text-xl font-bold text-foreground">Phase 2 — Activation design (week 2–4)</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li><strong>Activation mechanic:</strong> sample, spin a wheel, fill a form, scan a QR, watch a demo — passive display generates a fraction of the data interactive mechanics do.</li>
        <li><strong>Brand environment:</strong> branded stall, vehicle, uniforms, merchandise and digital screens — consistent every touchpoint.</li>
        <li><strong>Data capture:</strong> tablet forms syncing to CRM in real time — paper is inefficient and error-prone.</li>
        <li><strong>Promoter brief:</strong> written script — product, objections, data capture, escalation.</li>
        <li><strong>Language versions:</strong> Sinhala, Tamil and English per district plan.</li>
      </ul>

      <h3 className="mt-6 text-xl font-bold text-foreground">Phase 3 — Logistics & permits (week 3–6)</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>Venue permission from mall/landowner; CMC permit for public-space activations (7–14 days minimum).</li>
        <li>Vehicle permits for roadshows crossing district boundaries.</li>
        <li>Promoter deployment plan — team sizes, schedules, 1 supervisor per 5–8 promoters minimum.</li>
        <li>Equipment logistics — stall fabrication, branded materials, sampling stock, waste management.</li>
        <li>Reporting framework — daily photo reports, footfall counts, lead data, supervisor sign-off.</li>
      </ul>

      <h3 className="mt-6 text-xl font-bold text-foreground">Phase 4 — Execution & daily management</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>Morning supervisor briefing — review previous day, address issues, confirm targets.</li>
        <li>Real-time WhatsApp photo reports — set-up, peak, close-down minimum.</li>
        <li>Daily data submission — leads, samples, footfall.</li>
        <li>Weekly review — actual vs planned KPI, decision to continue, scale or pivot by location.</li>
      </ul>

      <h3 className="mt-6 text-xl font-bold text-foreground">Phase 5 — Reporting & evaluation</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>Total reach vs planned reach per district.</li>
        <li>Cost per trial, cost per lead, cost per sign-up by location.</li>
        <li>Conversion rate from trial to purchase (where trackable).</li>
        <li>Qualitative consumer feedback from promoters.</li>
        <li>Recommendations for next cycle — best locations, formats and messages.</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">BTL promoter management — quality standards in Sri Lanka</h2>
      <p className="mt-3">More BTL campaigns fail at the promoter level than at any other point — an undertrained or disengaged team destroys ROI. These are the non-negotiable standards.</p>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        <li><strong>Half-day training minimum</strong> before first activation — product knowledge, messaging, data capture, escalation.</li>
        <li><strong>Language matching</strong> — Tamil promoters in Jaffna/Batticaloa, Sinhala upcountry, English in corporate Colombo. A wrong-language promoter is instantly distrusted.</li>
        <li><strong>Appearance standards</strong> — branded uniform, lanyard/ID, consistent grooming across the team.</li>
        <li><strong>1 supervisor per 6 promoters</strong> minimum for multi-location campaigns.</li>
        <li><strong>15-minute daily briefing</strong> every activation day — targets, key messages, learnings.</li>
        <li><strong>Timestamped photo reports</strong> — set-up, peak activity, close-down, daily.</li>
        <li><strong>Verify lead capture at the point of capture</strong> — incomplete data cannot be fixed after the activation.</li>
        <li><strong>Written, rehearsed script</strong> — opening line, 3 product points, data ask, objection responses — before live deployment.</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">Sectors we deliver BTL advertising for in Sri Lanka</h2>
      <p className="mt-3">FMCG and beverages (snacks, confectionery, dairy, beer, soft drinks), telecommunications (SIM acquisition, data plans, dealer activation), banking and financial services (account opening, loan campaigns, insurance enrolment), automotive (test drive activations and regional launches), pharmaceuticals and healthcare (doctor detailing, health camps), personal care and cosmetics (sampling and beauty counter activations), e-commerce and tech (campus and mall demo stations), real estate (show flat events and lead capture), education (school-gate and parent activations) and insurance (door-to-door, workplace, Pola markets) — across all 25 districts of Sri Lanka.</p>
    </section>
  );
}
