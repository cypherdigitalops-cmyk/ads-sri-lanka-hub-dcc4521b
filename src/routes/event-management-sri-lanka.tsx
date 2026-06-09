import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Event Management Sri Lanka — Corporate Events, Weddings & MICE | Full Service";
const DESC = "Event management in Sri Lanka for corporate events, weddings, MICE, exhibitions, brand activations & product launches. Full-service — stage, sound, LED, catering. 500+ events. Call 0771437707.";
const H1 = "Event Management Sri Lanka — Corporate Events, Weddings, MICE & Brand Activations";
const INTRO = "Sri Lanka's full-service event management team — 500+ events delivered, 10+ years in event production, islandwide coverage. Corporate events, MICE (Meetings, Incentives, Conferences & Exhibitions), weddings, brand activations, exhibitions, product launches and concerts — stage, sound, lighting, LED, catering and permits under one accountable team.";

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Event Management Sri Lanka",
  description: "Full-service event management in Sri Lanka — corporate events, MICE, weddings, exhibitions, brand activations and stage production. Islandwide coverage.",
  provider: {
    "@type": "Organization",
    name: "Advertising Sri Lanka",
    url: SITE.url,
    telephone: "+94771437707",
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  serviceType: [
    "Corporate Event Management",
    "MICE Event Management",
    "Wedding Planning",
    "Exhibition Management",
    "Conference Management",
    "Brand Activation",
    "Stage Production",
    "LED Screen Rental",
    "Sound System Rental",
  ],
  url: `${SITE.url}/event-management-sri-lanka`,
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is event management in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Event management in Sri Lanka is the end-to-end planning, production and execution of corporate events, MICE (Meetings, Incentives, Conferences and Exhibitions), weddings, brand activations, concerts, exhibitions and product launches — covering concept, venue, stage, AV, lighting, LED, generators, permits, catering, entertainment, photography and on-day coordination." } },
    { "@type": "Question", name: "What does a full-service event management company in Sri Lanka provide?", acceptedAnswer: { "@type": "Answer", text: "Concept development, venue sourcing, stage, PA sound, lighting, LED video wall, generator, permits (CMC, Police, CAASL drone), catering, décor, photography, MC, transport, registration and full on-day show-calling — all under one point of accountability." } },
    { "@type": "Question", name: "What is MICE and why does it matter for events in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "MICE stands for Meetings, Incentives, Conferences and Exhibitions — the professional designation for the corporate events sector. Sri Lanka has invested in MICE infrastructure with BMICH and five-star hotel conference facilities, positioning Colombo as a regional MICE destination." } },
    { "@type": "Question", name: "How far in advance should I book event management in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Small to medium events: 6 to 8 weeks. Large events above 500 people: 3 to 6 months. Premium Colombo venues in November/December: 4 to 6 months. Weddings: 6 to 18 months before the date." } },
    { "@type": "Question", name: "What permits are required for events in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "CMC Public Entertainment Permit (7–21 days), Police Permit for 500+ people events, CAASL drone permit (14–28 days), noise permit for outdoor amplified sound after 10pm, Excise temporary licence for alcohol service outside licensed venues." } },
    { "@type": "Question", name: "Can one company supply stage, sound, lighting and LED screens in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Yes — full-service event production companies own and operate stage, sound, lighting and LED as a complete package. This single-vendor approach prevents the coordination failures between separate contractors that are one of the leading causes of technical problems at Sri Lankan events." } },
    { "@type": "Question", name: "Do you manage events outside Colombo across Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Yes. We manage events islandwide — dealer meets in Kandy, Kurunegala and Matara, activations in Galle and Negombo, corporate events in Jaffna and Anuradhapura, and beach events in Trincomalee and Bentota. Call 0771437707 with your event location." } },
  ],
};

export const Route = createFileRoute("/event-management-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "event management sri lanka, event planners sri lanka, corporate event management sri lanka, wedding planners sri lanka, MICE sri lanka, conference management sri lanka, exhibition management sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: "Event management in Sri Lanka — corporate events, weddings, MICE, exhibitions, brand activations and full production. Call 0771437707." },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/event-management-sri-lanka` }],
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
        extraLinks={[
          { href: "/led-screen-rental-sri-lanka", label: "LED Screen Rental Sri Lanka", anchor: "indoor/outdoor LED screens" },
          { href: "/sound-system-rental-sri-lanka", label: "Sound System Rental Sri Lanka", anchor: "line-array sound systems" },
          { href: "/stage-setup-sri-lanka", label: "Stage Setup Sri Lanka", anchor: "Truss stages" },
        ]}
        extraContent={<EventManagementRankContent />}
      />
    </PageShell>
  ),
});

function EventManagementRankContent() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">MICE Event Management in Sri Lanka — Meetings, Incentives, Conferences & Exhibitions</h2>
      <p className="mt-3">MICE — Meetings, Incentives, Conferences and Exhibitions — is the professional designation for the corporate events sector in Sri Lanka and globally. Sri Lanka has invested heavily in MICE infrastructure over the past decade, positioning Colombo as a regional MICE destination. Understanding what each MICE category requires helps organisations plan and budget correctly.</p>

      <div className="mt-6 overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/40 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">MICE Category</th>
              <th className="px-4 py-3 font-semibold">Scale</th>
              <th className="px-4 py-3 font-semibold">Key Requirements</th>
              <th className="px-4 py-3 font-semibold">Best Venues</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {[
              ["Meetings (M)", "10–200 attendees", "AV setup, breakout rooms, catering, business-grade internet, NDA compliance", "Shangri-La, Hilton, Cinnamon Grand, Galadari"],
              ["Incentives (I)", "20–300 participants", "Experience design, transport, accommodation, cultural experiences, awards ceremony", "Resorts in Galle, Bentota, Negombo, Sigiriya, Nuwara Eliya"],
              ["Conferences (C)", "100–2,500 attendees", "Main stage with LED, breakout rooms, simultaneous translation, delegate management, press area", "BMICH, Shangri-La, Cinnamon Grand, Kingsbury, Hilton"],
              ["Exhibitions (E)", "50–500 exhibitors", "Floor plan, booth design and build, power distribution, visitor registration", "BMICH Exhibition Hall, SBMEC, Cinnamon Grand"],
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

      <h3 className="mt-8 text-xl font-bold text-foreground">Why Sri Lanka is a growing MICE destination</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li><strong>Central Indian Ocean location</strong> — Colombo is within 5 hours' flight of most South and Southeast Asian capitals.</li>
        <li><strong>Cost competitive vs Singapore, Bangkok and Dubai</strong> — comparable international infrastructure at significantly lower per-delegate costs.</li>
        <li><strong>World-class resorts</strong> — combine Colombo business sessions with incentive experiences in Galle, Bentota or Sigiriya.</li>
        <li><strong>Improved convention infrastructure</strong> — BMICH expansion and five-star hotel facilities support events above 500 delegates.</li>
        <li><strong>Rich cultural experiences</strong> — tea estates, whale watching, cultural performances and heritage site access regional rivals can't replicate.</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">How to choose an event management company in Sri Lanka</h2>
      <p className="mt-3">There are over 200 event management companies in Sri Lanka — from one-person freelancers to full-service production houses with their own stage, sound and LED inventory. Choosing the wrong partner is one of the most expensive mistakes an organisation can make. Use this framework.</p>

      <h3 className="mt-6 text-xl font-bold text-foreground">Event management company types</h3>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/40 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Owns Equipment?</th>
              <th className="px-4 py-3 font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Full-service production house", "Yes — stage, sound, LED", "Large corporate events, concerts, launches, national events"],
              ["Event planning agency", "No — sub-contracts production", "Weddings, gala dinners, intimate corporate events"],
              ["MICE specialist", "Partial — often own AV", "Conferences 200+ pax, international delegates, incentive programmes"],
              ["Wedding planner", "No — coordinates vendors", "Weddings and private social events"],
              ["AV / technical contractor", "Yes — technical only", "Clients who have planning covered, need production"],
              ["Freelance coordinator", "No", "Small events under 100 pax"],
            ].map((r) => (
              <tr key={r[0]} className="border-t border-border align-top">
                <td className="px-4 py-3 font-semibold text-foreground">{r[0]}</td>
                <td className="px-4 py-3">{r[1]}</td>
                <td className="px-4 py-3">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-8 text-xl font-bold text-foreground">10 questions to ask any event management company in Sri Lanka</h3>
      <ol className="mt-3 list-decimal space-y-2 pl-5">
        <li><strong>Do you own your stage, sound, lighting and LED — or sub-rent?</strong> Owning inventory means more control over quality, availability and setup time.</li>
        <li><strong>Can I visit a live event you're producing before I sign?</strong> Seeing production quality live is the most reliable way to assess a company.</li>
        <li><strong>Who is the single show-caller on my event day?</strong> One named person, not a committee.</li>
        <li><strong>Can you show me an itemised Bill of Quantities (BOQ)?</strong> Every professional quote lists every item with unit cost — never a lump sum.</li>
        <li><strong>What is your contingency plan for generator failure, weather or vendor no-show?</strong> Professionals have written contingency plans.</li>
        <li><strong>Can you give three client references in my event category?</strong> A conference reference is not useful for a product launch.</li>
        <li><strong>Do you have licensed electricians and riggers?</strong> Unlicensed rigging is a safety and insurance violation.</li>
        <li><strong>Who manages permits and when do you start?</strong> CMC and Police permits take 7–21 days — start 3+ weeks ahead.</li>
        <li><strong>What is your cancellation and force majeure policy?</strong> Understand refunds before you sign.</li>
        <li><strong>How do you handle last-minute programme changes on the day?</strong> Ask for a specific recent example.</li>
      </ol>

      <h3 className="mt-8 text-xl font-bold text-foreground">Red flags in Sri Lankan event management proposals</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>No itemised BOQ — single lump-sum price with no breakdown.</li>
        <li>Cannot name specific equipment brands for stage, sound and LED.</li>
        <li>No named show-caller or single point of on-day accountability.</li>
        <li>References from a different event category than yours.</li>
        <li>No written contingency plan for power failure or weather.</li>
        <li>Starts permits less than 3 weeks before the event.</li>
        <li>No portfolio at your event scale.</li>
        <li>100% upfront payment terms with no production milestones.</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">Event budget allocation framework — Sri Lanka</h2>
      <p className="mt-3">Budget allocation is where most Sri Lankan event organisers make their first costly mistake — too much on décor and venue, too little on sound and contingency. Use these allocation ranges by event type.</p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/40 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Conference</th>
              <th className="px-4 py-3 font-semibold">Launch</th>
              <th className="px-4 py-3 font-semibold">Awards</th>
              <th className="px-4 py-3 font-semibold">Wedding</th>
              <th className="px-4 py-3 font-semibold">Concert</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Venue", "25–35%", "20–30%", "25–35%", "20–30%", "5–15%"],
              ["Stage, sound, lighting, LED", "20–30%", "25–35%", "20–30%", "10–20%", "30–45%"],
              ["Catering & F&B", "15–25%", "10–20%", "20–30%", "25–35%", "5–10%"],
              ["Décor & florals", "5–10%", "10–20%", "10–15%", "15–25%", "5–10%"],
              ["Photo & video", "5–10%", "10–15%", "5–10%", "10–15%", "5–10%"],
              ["Entertainment & talent", "0–5%", "5–10%", "5–10%", "5–15%", "20–35%"],
              ["Transport & logistics", "5–10%", "5–10%", "5–10%", "5–10%", "5–10%"],
              ["Contingency (always)", "10%", "10%", "10%", "10%", "10%"],
            ].map((r) => (
              <tr key={r[0]} className="border-t border-border align-top">
                <td className="px-4 py-3 font-semibold text-foreground">{r[0]}</td>
                {r.slice(1).map((c, i) => <td key={i} className="px-4 py-3">{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4"><strong className="text-foreground">The most important rule:</strong> always include a 10% contingency. Sri Lankan events consistently encounter last-minute costs — generator fuel, venue overtime, emergency equipment, additional catering, higher permit fees. Contingency is insurance against the inevitable.</p>

      <h3 className="mt-8 text-xl font-bold text-foreground">Where Sri Lankan event organisers most often overspend</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li><strong>Premium hotel venues</strong> — the same event quality often achievable at less prestigious venues for 40% less cost.</li>
        <li><strong>Elaborate décor and florals</strong> that look better in the budget spreadsheet than in the room.</li>
        <li><strong>Catering portions that exceed actual consumption</strong> — confirm realistic per-head consumption with your caterer.</li>
        <li><strong>Entertainment acts the audience does not recognise</strong> — impressive on paper, poor ROI in the room.</li>
      </ul>

      <h3 className="mt-6 text-xl font-bold text-foreground">Where Sri Lankan event organisers most often underspend</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li><strong>Sound system specification</strong> — the single biggest factor in poor event experience. An underpowered PA cannot fill the room evenly.</li>
        <li><strong>Photography and video</strong> — generates branded content used for 12 months after the event. Underspending costs more in lost brand content than the saving.</li>
        <li><strong>Technical rehearsal time</strong> — paying for venue access the evening before for a full rehearsal is the highest-ROI event investment available.</li>
        <li><strong>Contingency buffer</strong> — events without contingency face crisis decisions under time pressure — always the worst environment for financial decisions.</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">Types of events managed by professional companies in Sri Lanka</h2>
      <p className="mt-3">Understanding what falls within professional event management scope — versus what can be self-managed — helps organisations allocate budget and resource correctly.</p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/40 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Event Category</th>
              <th className="px-4 py-3 font-semibold">Complexity</th>
              <th className="px-4 py-3 font-semibold">Pro Management Needed?</th>
              <th className="px-4 py-3 font-semibold">Key Reason</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["National/international conference (500+ pax)", "Very High", "Essential", "AV complexity, translation, delegate management, security and protocol"],
              ["Product launch with media/press", "High", "Essential", "The reveal moment, PR coordination and live photography must be choreographed"],
              ["Award ceremony (200+ pax, live camera)", "High", "Essential", "Run-of-show precision — a single timing error on camera is permanent"],
              ["Concert (500+ audience)", "Very High", "Essential", "Stage load, sound engineering, crowd management and permits require specialists"],
              ["Wedding (200+ guests)", "High", "Strongly recommended", "Vendor coordination complexity grows exponentially with guest count"],
              ["BMICH exhibition (multi-booth)", "High", "Strongly recommended", "Booth design, build, utilities and floor plan require trade experience"],
              ["Mall brand activation (3–7 days)", "Medium", "Recommended", "Landlord requirements, activation mechanics, staffing benefit from coordination"],
              ["Corporate dinner (under 100, hotel)", "Medium", "Optional", "Hotel events team can manage most requirements"],
              ["Small team offsite (under 30)", "Low", "Not essential", "Internal coordination sufficient — hotel handles logistics"],
              ["Webinar / virtual event", "Medium", "Depends on scale", "Specialist support needed above 500 virtual attendees"],
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

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">What our clients say — event management across Sri Lanka</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          { q: "The stage, sound and LED setup for our annual dealer conference were exactly what we briefed. The technical team was on-site from 6am, full rehearsal done by noon, and the event ran without a single technical issue for 800 delegates.", c: "Marketing Director, FMCG Company, Colombo" },
          { q: "We needed a product launch that could generate press coverage and social content simultaneously. The reveal moment was choreographed perfectly — we trended on social within 2 hours of the event starting.", c: "Brand Manager, Consumer Electronics, Sri Lanka" },
          { q: "CMC permit, police clearance and fire safety sign-off all confirmed in writing 10 days before our outdoor event. We have worked with three other event companies who left permits to the last week. The difference in stress level alone justified the choice.", c: "Event Manager, NGO, Colombo" },
          { q: "Our Jaffna dealer meet was managed with the same standard as our Colombo events. The outstation team sourced the venue, organised catering and delivered full stage and AV on time — 300km from Colombo.", c: "National Sales Manager, Telecommunications Company" },
        ].map((t) => (
          <figure key={t.c} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <blockquote className="text-sm text-foreground/90">“{t.q}”</blockquote>
            <figcaption className="mt-3 text-xs font-semibold text-muted-foreground">— {t.c}</figcaption>
          </figure>
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">Sri Lanka event industry — key facts</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li><strong>200+ registered event management companies</strong> — fragmented market, due diligence essential.</li>
        <li><strong>BMICH main auditorium:</strong> 2,500 theatre / 1,200 banquet — Sri Lanka's largest dedicated conference venue.</li>
        <li><strong>Peak event months:</strong> November & December — premium Colombo venues fill 3–6 months ahead.</li>
        <li><strong>CMC Public Entertainment Permit:</strong> 7–21 days lead time — cannot be expedited.</li>
        <li><strong>CAASL drone permit:</strong> 14–28 days — the most commonly forgotten event permit.</li>
        <li><strong>Sri Lanka MICE growth:</strong> international conference arrivals growing 15–20% annually.</li>
        <li><strong>Peak wedding season:</strong> January–April and September–November — book vendors 6–18 months ahead.</li>
      </ul>
    </section>
  );
}
