import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "outdoor-advertising-sri-lanka")!;
const TITLE = "Outdoor Advertising Sri Lanka — Billboards, DOOH, Transit & OOH Campaigns";
const DESC = "Outdoor advertising Sri Lanka — billboards, digital DOOH, transit, mobile billboards & hoardings. Premium sites on Galle Road, Baseline Road & islandwide. Call 0771437707.";
const H1 = "Outdoor Advertising Sri Lanka — Billboards, DOOH, Transit & Hoardings Islandwide";
const INTRO = "Plan and book outdoor advertising in Sri Lanka — static billboards, digital DOOH screens, gantries, bus shelters, transit, mobile billboards and airport advertising on Galle Road, Baseline Road, Kirulapona, Thurstan Road and across all 25 districts. Permitted sites, transparent rates and free media planning.";

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Outdoor Advertising Sri Lanka",
  description: "Outdoor advertising in Sri Lanka — billboards, digital DOOH screens, transit advertising, mobile billboards, hoardings and OOH campaigns. Premium locations on Galle Road and islandwide.",
  provider: {
    "@type": "Organization",
    name: "Advertising Sri Lanka",
    url: SITE.url,
    telephone: "+94771437707",
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  serviceType: [
    "Billboard Advertising",
    "Digital Billboard DOOH",
    "Transit Advertising",
    "Mobile Billboard",
    "Hoarding Advertising",
    "Lamp Post Banner Advertising",
    "Airport Advertising",
    "OOH Media Planning",
  ],
  url: `${SITE.url}/outdoor-advertising-sri-lanka`,
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is outdoor advertising (OOH) in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "OOH advertising in Sri Lanka covers billboards, digital LED screens (DOOH), transit advertising on buses/trains/three-wheelers, lamp post banners, mobile billboards and airport advertising. It cannot be skipped or blocked — visible to everyone who passes." } },
    { "@type": "Question", name: "What is DOOH advertising in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "DOOH (Digital Out-of-Home) uses digital LED screens to display animated and video advertising. Key Sri Lanka locations include One Galle Face Mall, Thurstan Road and Kirulapona gantries, World Trade Centre, Colombo City Centre Mall, Kandy City Centre and Bandaranaike International Airport." } },
    { "@type": "Question", name: "Which is better — static billboards or digital DOOH in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Static billboards give 100% share of voice 24/7. DOOH rotates between advertisers (15–25% SOV) at lower cost with creative flexibility. For brand launches and sustained awareness use static. For short promotions with changeable creative use DOOH. Many advertisers run both simultaneously." } },
    { "@type": "Question", name: "How much does billboard advertising cost in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Costs vary by location, size and duration. Premium sites on Galle Road and key Colombo junctions command the highest rates; provincial and outstation locations are considerably lower. Call 0771437707 with your preferred location, size and duration for a detailed written quotation within 24 hours." } },
    { "@type": "Question", name: "Do I need a permit for a billboard in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Yes — CMC or the relevant local authority permit plus RDA approval for sites adjacent to national highways. Permits must be in place before installation and renewed annually. Reputable OOH suppliers hold valid permits for all their sites — always verify in writing before booking." } },
    { "@type": "Question", name: "How long should an outdoor advertising campaign run in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Minimum 4 weeks for promotional campaigns. Minimum 3 months for brand awareness objectives. Outdoor works through repeated exposure — less than 4 weeks rarely builds measurable recall. Most effective campaigns run 3 to 6 months on key routes." } },
    { "@type": "Question", name: "What are the best billboard locations in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Highest-value locations: Galle Road (80,000–200,000 daily impressions), Baseline Road (60,000–120,000), Kirulapona and Thurstan Road gantries (100,000–150,000) and One Galle Face Mall LED façade. Contact 0771437707 for site availability and a free media plan." } },
    { "@type": "Question", name: "Can I advertise on buses and three-wheelers in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Yes — CTB and private buses, Sri Lanka Railways trains and three-wheelers in multiple cities. Bus rear panel is one of the most cost-effective formats. Full bus body wraps give maximum presence; three-wheeler advertising is used for hyper-local awareness." } },
  ],
};

export const Route = createFileRoute("/outdoor-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "outdoor advertising sri lanka, billboard sri lanka, dooh sri lanka, transit advertising sri lanka, hoarding sri lanka, ooh sri lanka, mobile billboard sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/outdoor-advertising-sri-lanka` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(SERVICE_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
    ],
  }),
  component: () => (
    <PageShell>
      <CategoryHubTemplate category={CAT} h1Override={H1} introOverride={INTRO} reducedCtas />
      <OutdoorRankContent />
    </PageShell>
  ),
});

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-card">
      <table className="w-full text-left text-sm">
        <thead className="bg-secondary/40 text-foreground">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "px-4 py-3 font-semibold text-foreground" : "px-4 py-3"}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OutdoorRankContent() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Outdoor advertising formats in Sri Lanka — complete comparison</h2>
      <p className="mt-3">Outdoor advertising in Sri Lanka — also called Out-of-Home (OOH) advertising — covers eight distinct formats. Each reaches a different audience in a different context with a different impact. Understanding the differences prevents spending on the wrong format for your campaign objective.</p>
      <Table
        headers={["Format", "Description", "Size", "Daily Impressions", "Share of Voice", "Best For"]}
        rows={[
          ["Static Billboard / Hoarding", "Large-format printed vinyl on a permanent structure", "10×20 to 20×40 ft", "30,000–200,000", "100% — your ad only", "Brand launches, sustained awareness, FMCG"],
          ["Digital Billboard (DOOH)", "LED screen rotating multiple advertisers — animated creative", "10×20 to 20×40 ft", "30,000–200,000", "15–25%", "Promotions, time-sensitive offers, creative testing"],
          ["Gantry / Over-Road Sign", "Structure spanning the full road width", "Full road × 10–15 ft", "50,000–300,000", "100% / rotating", "Arterial-route automotive, telecom, banking"],
          ["Bus Shelter / Street Furniture", "Backlit panels at bus stops and pedestrian areas", "4×6 ft standard", "5,000–30,000", "100% per site", "Local targeting, retail, FMCG near purchase"],
          ["Transit Advertising", "Wraps or panels on buses, trains, three-wheelers, taxis", "Varies by vehicle", "10,000–80,000 per route", "100% per vehicle", "Mass reach, youth, route-specific"],
          ["Mobile Billboard", "Branded vehicle driven on a fixed schedule and route", "Truck-mounted panels", "5,000–50,000", "100%", "Launches, events, local domination"],
          ["Lamp Post / Pole Banner", "Double-sided banners hung from lamp posts", "2×4 to 3×6 ft", "10,000–60,000 per road", "100% per post", "Events, festive campaigns, corridor dominance"],
          ["Airport Advertising", "Banners, screens and wraps inside BIA", "Varies", "10,000–40,000 premium", "Per site", "Luxury, tourism, banking, premium brands"],
        ]}
      />
      <p className="mt-4"><strong className="text-foreground">Static vs digital — the key decision:</strong> static delivers 100% share of voice 24/7 — every passer-by sees your brand. Digital DOOH rotates between 4–6 advertisers (15–25% share) but lets you change creative weekly with no reprint. For brand launches and sustained awareness, static is usually stronger; for short, agile promotions, DOOH is more practical.</p>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">Digital Out-of-Home (DOOH) in Sri Lanka — the growing opportunity</h2>
      <p className="mt-3">DOOH is the fastest-growing OOH segment in Sri Lanka. Large LED screens at premium junctions, malls, the airport and commercial facades allow brands to run animated, video and time-of-day content rather than static images. Capacity is expanding rapidly across Colombo and key provincial cities.</p>

      <h3 className="mt-6 text-xl font-bold text-foreground">Key DOOH locations in Sri Lanka</h3>
      <Table
        headers={["Location", "Format", "Audience", "Daily Impressions", "Best Categories"]}
        rows={[
          ["One Galle Face Mall (Façade LED)", "Large exterior LED wall", "Premium Colombo consumers, tourists, Galle Face commuters", "100,000+", "Luxury, premium FMCG, automotive, finance"],
          ["Gantry — Thurstan Road, Colombo 3", "Over-road gantry digital screen", "Morning/evening commuters, Colombo 3/5/7 professionals", "80,000–120,000", "Banking, insurance, real estate, automotive"],
          ["Gantry — Kirulapona Junction", "Over-road gantry digital screen", "High-volume cross-city traffic", "100,000–150,000", "FMCG, telecoms, banking"],
          ["World Trade Centre / Echelon Square", "Premium commercial building displays", "Corporate professionals", "30,000–60,000", "B2B, financial services"],
          ["Colombo City Centre Mall (Interior)", "Indoor atrium screens", "Urban shoppers, families, young pros", "20,000–50,000", "Retail, FMCG, telecoms, F&B"],
          ["Bandaranaike International Airport", "Terminal screens, backlit, baggage claim", "International and domestic travellers", "15,000–30,000 daily pax", "Luxury, tourism, banking, premium"],
          ["Kandy City Centre Mall", "Indoor digital screens", "Central Province urban consumers", "10,000–20,000", "FMCG, telecoms, banking"],
          ["Galle Road Corridor (mixed)", "Static + digital billboards", "Highest-value corridor in Sri Lanka", "50,000–200,000 per site", "All premium advertisers"],
        ]}
      />

      <h3 className="mt-8 text-xl font-bold text-foreground">DOOH vs traditional static OOH</h3>
      <Table
        headers={["Dimension", "DOOH (Digital)", "Traditional Static OOH"]}
        rows={[
          ["Creative format", "Animated video, stills, time-triggered", "Printed static image — one per booking"],
          ["Share of voice", "15–25% (rotating)", "100% — your ad only, 24/7"],
          ["Creative change", "Weekly — no reprint cost", "One creative per booking; reprint to change"],
          ["Minimum booking", "1 week in some networks", "Typically 1 month minimum"],
          ["Measurement", "Ad-play verification, audience data on some networks", "Traffic-count estimates only"],
          ["Contextual targeting", "Time-of-day, day-of-week scheduling", "Not possible"],
          ["Cost", "Lower entry cost per booking — shared screen", "Higher for exclusive site"],
        ]}
      />

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">Prime outdoor advertising locations — city-by-city guide</h2>
      <p className="mt-3">Location is the most important decision in any OOH campaign. The best creative on the wrong location is wasted. Here are the highest-value corridors and locations across Sri Lanka.</p>

      <h3 className="mt-6 text-xl font-bold text-foreground">Colombo — premium OOH corridors</h3>
      <Table
        headers={["Road / Location", "Stretch / Key Points", "Daily Traffic", "Audience", "Best Advertiser"]}
        rows={[
          ["Galle Road", "Kollupitiya to Dehiwala — premium corridor", "80,000–200,000", "Urban pros, Colombo 3/5/6/7, international visitors", "Banking, automotive, luxury, FMCG, telecoms"],
          ["Baseline Road", "Dematagoda to Borella — high-volume cross-city", "60,000–120,000", "Aspirational middle class, commuters, traders", "FMCG, telecom, finance, retail"],
          ["High Level Road", "Maharagama to Nugegoda — commercial + residential", "50,000–100,000", "Suburban families, traders, south commuters", "FMCG, retail, banking, education"],
          ["Kandy Road (A1)", "Kelaniya to Kadawatha — gateway to upcountry", "40,000–80,000", "Cross-country commuters, truckers, suburban families", "Automotive, FMCG, telecom, building materials"],
          ["Negombo Road (A3)", "Wattala to Ja-Ela — airport corridor", "40,000–70,000", "Airport travellers, Gampaha consumers, garment workers", "Tourism, FMCG, banking, housing"],
          ["Malabe Road (A4)", "Rajagiriya to Malabe — IT parks, universities", "30,000–60,000", "IT pros, students, young professionals", "Tech, banking, education, housing"],
          ["Marine Drive / Galle Face Promenade", "Fort to Bambalapitiya — sea-facing leisure", "High on weekends", "Tourists, leisure visitors, premium consumers", "Tourism, hospitality, premium, telecoms"],
        ]}
      />

      <h3 className="mt-8 text-xl font-bold text-foreground">Key OOH locations — other major cities</h3>
      <Table
        headers={["City", "Key OOH Locations", "Audience", "Best Format"]}
        rows={[
          ["Kandy", "Town centre, Peradeniya Rd, Katugastota junction, bypass", "Central Province, pilgrims, students, tourists", "Approach-road billboards, town centre panels"],
          ["Galle", "Fort area, Mahamodara Rd, Hikkaduwa approach, town centre", "Southern Province consumers, tourists", "Southern Expressway approach billboards"],
          ["Negombo", "Town, airport road, beach road hotels, Chilaw Rd", "Airport arrivals, beach tourists, Gampaha", "Airport-road hoardings, transit"],
          ["Kurunegala", "Town centre, Colombo–Kandy bypass junction, market", "North Western Province, traders, provincial audience", "Town billboards, junction hoardings"],
          ["Anuradhapura", "Heritage approach roads, A9 highway, town", "North Central, pilgrims, A9 traffic", "A9 highway hoardings, town billboards"],
          ["Jaffna", "Town centre, KKS Road, Point Pedro Rd, Fort area", "Tamil-speaking Northern Province — underserved nationally", "Town billboards, bus transit"],
          ["Trincomalee", "Town, beach road, Nilaveli approach", "Eastern Province, tourists, naval community", "Town billboards, beach road hoardings"],
          ["Hambantota", "Port road, Southern Highway exit, town", "Southern, port community, dev zone", "Highway hoardings, port approach"],
        ]}
      />

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">Transit advertising in Sri Lanka — buses, trains & three-wheelers</h2>
      <p className="mt-3">Transit advertising places your brand on the vehicles Sri Lankans use every day — moving your message through cities and districts rather than waiting for an audience to pass a fixed location.</p>
      <Table
        headers={["Transit Format", "Coverage", "Audience", "Impression Scale", "Best For"]}
        rows={[
          ["Bus body wrap (full)", "Full exterior wrap on CTB or private bus", "Route commuters + bus-stop pedestrians", "30,000–100,000 per bus/mo", "FMCG, telecom, beverages — high-frequency routes"],
          ["Bus rear panel", "Rear of bus — visible to all following traffic", "Following motorists for full journey", "20,000–60,000 per bus/mo", "Cost-effective awareness, telecom, banking"],
          ["Bus interior panel", "Inside-bus posters above seating", "Captive seated commuters", "10,000–30,000 per bus/mo", "Insurance, finance, education, mobile apps"],
          ["Train wrap / panel", "Sri Lanka Railways exterior wraps and interior panels", "Long-distance + commuter rail passengers", "20,000–80,000 per train/mo", "Tourism, telecom, FMCG, banking"],
          ["Three-wheeler branding", "Magnetic or vinyl branding on Colombo & city three-wheelers", "Hyper-local urban consumers", "5,000–20,000 per vehicle/mo", "Local retail, FMCG, telecom, food delivery"],
          ["Taxi / PickMe advertising", "Exterior branding on ride-hailing vehicles", "Premium Colombo urban audience", "10,000–30,000 per vehicle/mo", "Premium, tech, financial services"],
        ]}
      />

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">OOH creative rules that work in Sri Lanka</h2>
      <p className="mt-3">Outdoor advertising fails most often not because of poor placement but because of poor creative. A driver on Galle Road has 2–3 seconds to process your billboard. These rules make outdoor work in Sri Lanka.</p>
      <Table
        headers={["Design Rule", "Why It Matters", "Sri Lanka Context"]}
        rows={[
          ["One message only", "Drivers have 2–3 seconds — one clear message is all that's absorbed", "SL advertisers commonly overload billboards with taglines + features + URL + phone + QR. Pick one."],
          ["Headline ≥ 30% of board", "Text must be legible at viewing distance and approaching speed", "On Galle Road at 40 km/h, text under 600mm cap-height is illegible from 50m"],
          ["Maximum 7 words", "The brain processes OOH ads in 2–3 seconds — 7 words is the cognitive limit", "Dialog, Mobitel, Commercial Bank's most effective boards use 3–6 words"],
          ["High contrast text vs background", "Low-contrast is illegible in sunlight, rain and varying light", "SL's bright tropical sun washes out low contrast. Dark on light or light on dark only."],
          ["One dominant visual", "A single strong image communicates faster than several small ones", "Product shot or human face at scale commands peripheral attention"],
          ["Logo visible at distance", "The logo must be readable at maximum viewing distance", "Minimum ~15% of board width for the logo; test at viewing distance before printing"],
          ["Sinhala/Tamil independently legible", "Transliterated or shrunken Sinhala is unreadable", "Sinhala script needs larger minimum type size than English for the same legibility"],
          ["QR codes only when stationary", "QR scanning takes 3–5 seconds — impossible from a moving vehicle", "Use QR on bus shelters, mall interior screens, train ads — not roadside billboards"],
          ["One CTA — phone OR website", "Space is premium — two CTAs is one too many", "WhatsApp number is often more actionable than a URL — saved direct from a traffic light"],
        ]}
      />

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">Measuring OOH in Sri Lanka — how to prove ROI</h2>
      <p className="mt-3">OOH has historically been the hardest channel to measure in Sri Lanka, but modern tools have significantly improved accountability. Use these methods.</p>
      <Table
        headers={["Method", "What It Measures", "How to Implement", "Accuracy"]}
        rows={[
          ["Road traffic count", "Estimated impressions from vehicle/pedestrian counts at the site", "Request RDA traffic count for the road, or use Google Maps density as proxy", "Medium — counts vehicles, not viewers"],
          ["Brand search lift (Google Trends)", "Increase in branded searches during the campaign", "Baseline brand search volume before launch; compare campaign vs control period", "Good directional indicator of awareness"],
          ["WhatsApp / call tracking", "Calls or WhatsApp mentioning the billboard", "Dedicated campaign number distinct from main business line", "Good — direct lead attribution"],
          ["Promo code / QR redemption", "Direct attribution of visits/purchases to the campaign", "Unique promo code on the board — track redemptions in CRM/e-commerce", "Very good for promo campaigns"],
          ["Mobile location data", "Exposure to the site measured via mobile devices", "Available through DOOH networks (e.g. Moving Walls) with programmatic platform", "Good — DOOH only"],
          ["Pre/post brand tracker", "Change in awareness, consideration, recall in the target audience", "200–500 target consumers surveyed before and after in the catchment", "Very good — suitable for Rs 1m+ spend"],
          ["Sales uplift in campaign area", "Sales increase in the district vs control geography", "Compare campaign-geo sales vs control-geo sales for the same period", "Excellent for FMCG/retail with disciplined geo data"],
        ]}
      />

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">Outdoor advertising permits in Sri Lanka — what you need</h2>
      <p className="mt-3">OOH in Sri Lanka requires permits from multiple regulators depending on location and format. Non-compliant signs are removed by local authorities — sometimes within days, at the advertiser's expense.</p>
      <Table
        headers={["Permit", "Issued By", "Required For", "Lead Time", "Annual?"]}
        rows={[
          ["Sign / Billboard Licence", "CMC for Colombo; Urban Council / Pradeshiya Sabha elsewhere", "Any sign or hoarding visible from public roads within the municipality", "7–30 days", "Yes — annual"],
          ["RDA Approval", "Road Development Authority", "Billboards on or adjacent to A-class and B-class national highways", "14–45 days", "Yes — annual"],
          ["UDA Clearance", "Urban Development Authority", "Large signs in designated urban development zones", "14–30 days", "Project-specific"],
          ["CEA Clearance", "Central Environmental Authority", "Large structures or signs near sensitive areas/coastal zones", "30–90 days", "Project-specific"],
          ["Structural Compliance", "Chartered Civil / Structural Engineer", "Any structure above 10 ft height or 20 ft pole span", "7–14 days", "Per install"],
          ["Lamp Post Banner Permit", "CMC / local authority + CEB for lamp post access", "Banners attached to public lamp posts", "7–21 days", "Per campaign"],
          ["Transit Advertising Permit", "SLTB for CTB buses; private bus permits via owner associations", "Advertising on public bus fleet vehicles", "14–30 days", "Per contract"],
        ]}
      />
      <p className="mt-4"><strong className="text-foreground">Important:</strong> reputable OOH suppliers handle permit applications as part of the rental contract — you should never apply yourself. Always confirm in writing that your supplier holds current valid permits for every site before printing or installing.</p>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">Outdoor advertising market context — planning reference</h2>
      <Table
        headers={["Market Factor", "Context", "Planning Implication"]}
        rows={[
          ["OOH share of total ad spend", "Approx. 8–12% of total SL advertising expenditure", "Use OOH to complement TV and digital rather than as the only spend"],
          ["Premium Galle Road rental period", "Typically 1, 3 or 6 months minimum", "Budget for 3+ months to build recall — single month rarely delivers measurable impact"],
          ["Peak OOH demand", "March–April (Avurudu) and Nov–Dec (Christmas/New Year)", "Premium sites book out 2–3 months ahead — secure Q4 by September"],
          ["Number of OOH operators", "50+ registered operators islandwide", "Fragmented market — always verify permit status before booking a new supplier"],
          ["DOOH growth", "Fastest-growing OOH segment — significant new capacity 2022–2025", "Request DOOH quotes alongside static for like-for-like comparison"],
          ["Minimum effective campaign", "4 weeks for promotions; 3 months for awareness", "Outdoor works through repetition — anything less rarely registers"],
          ["Most competitive categories", "Telecoms, banking, insurance — highest spend", "Challenger brands need creative excellence to stand out on shared routes"],
        ]}
      />
    </section>
  );
}
