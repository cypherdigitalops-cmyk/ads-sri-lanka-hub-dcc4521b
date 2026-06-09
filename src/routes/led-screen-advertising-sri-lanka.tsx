import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, MessageCircle, CheckCircle2, MapPin, Monitor, Eye } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "LED Screen Advertising Sri Lanka — DOOH Billboards, Indoor LED & Video Walls";
const DESC = "LED screen advertising in Sri Lanka — digital billboards, indoor LED displays, DOOH at premium Colombo locations and islandwide. Named screens with 30,000–200,000 daily impressions. Call 0771437707.";
const H1 = "LED Screen Advertising Sri Lanka — Digital Displays, DOOH & Video Walls for Maximum Brand Impact";

const FAQS: { q: string; a: string }[] = [
  { q: "What is LED screen advertising in Sri Lanka?", a: "LED screen advertising in Sri Lanka means buying advertising slots on permanent digital LED display screens installed at high-traffic public locations — road junctions, commercial buildings, malls and airports. Your animated or video advertisement rotates with other advertisers on the screen, delivering your brand message to thousands of daily viewers. Major locations in Colombo include Pearl Tower (the largest LED in Sri Lanka), One Galle Face Mall, Thurstan Road gantry, Kirulapona junction, Liberty Cinema Building and Townhall junction." },
  { q: "What is the difference between LED screen rental and LED screen advertising?", a: "LED screen rental means hiring a portable LED video wall for your own event — conference, concert or wedding — where the screen is exclusively yours. LED screen advertising means buying airtime on a permanent screen owned by a media network at a fixed public location, where your ad rotates with other advertisers. For events you need rental; for brand awareness and outdoor media you need advertising. Call 0771437707 to clarify which is right for you." },
  { q: "What is the largest LED screen in Sri Lanka?", a: "The largest LED screen in Sri Lanka is the Pearl Tower screen at 69ft × 39ft on the Colombo 01 waterfront, visible to tens of thousands of commuters daily on the Galle Face corridor. The exterior façade screen at One Galle Face Mall is also one of the largest in Colombo. For booking enquiries on premium screens contact us on 0771437707." },
  { q: "How much does LED screen advertising cost in Sri Lanka?", a: "Costs vary by screen location, audience size, share of voice and booking duration. Premium outdoor screens on high-traffic Colombo routes command higher rates than provincial or indoor mall screens. Some networks offer weekly bookings, others require monthly commitments. Share your target audience, location and budget with us on 0771437707 and we will provide a written media plan with confirmed rates." },
  { q: "What content format do I need for LED screen advertising?", a: "Supply video as MP4 (H.264) at 1920×1080 Full HD, 25–30fps, or static images as JPEG/PNG. Content must be sRGB — not CMYK. Most outdoor screens are silent, so design for visual impact without audio. Animation duration is typically 5–15 seconds per rotation slot. Always confirm exact pixel dimensions, aspect ratio, file size limit and accepted formats with the screen operator before producing creative." },
  { q: "How do I measure ROI of LED screen advertising in Sri Lanka?", a: "Track brand search lift on Google during the campaign (set up Search Console before launch), monitor calls/WhatsApp using a campaign-specific contact number, track promo code redemptions, and compare sales in the campaign geography against a control area. Mobile location data measurement is available through advanced DOOH networks. For brand campaigns, pre/post awareness surveys in the catchment area give the most reliable impact data." },
  { q: "Which LED locations in Colombo have the highest impressions?", a: "The highest-impression locations are Kirulapona junction (100,000–150,000 daily), Pearl Tower (80,000–150,000), Thurstan Road gantry (80,000–120,000) and One Galle Face Mall façade (100,000+). Raw impression counts must be weighted by audience quality — Dutch Hospital/WTC with 30,000 daily impressions from Colombo's corporate professional district may deliver higher ROI for a banking brand than a higher-impression screen in a mixed residential area." },
];

export const Route = createFileRoute("/led-screen-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "led screen advertising sri lanka, dooh sri lanka, digital billboard sri lanka, led video wall sri lanka, pearl tower led, one galle face led" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/led-screen-advertising-sri-lanka` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/led-screen-advertising-sri-lanka` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE.url}/led-screen-advertising-sri-lanka#service`,
          name: "LED Screen Advertising Sri Lanka",
          serviceType: "DOOH / LED Screen Advertising",
          description: "LED screen advertising in Sri Lanka — DOOH digital billboards, indoor LED displays and video walls at premium Colombo locations including Pearl Tower, One Galle Face, Thurstan Road gantry and islandwide.",
          areaServed: { "@type": "Country", name: "Sri Lanka" },
          provider: { "@type": "Organization", name: SITE.name, telephone: SITE.phone, url: SITE.url },
          url: `${SITE.url}/led-screen-advertising-sri-lanka`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "Outdoor Advertising", item: `${SITE.url}/outdoor-advertising-sri-lanka` },
            { "@type": "ListItem", position: 3, name: "LED Screen Advertising", item: `${SITE.url}/led-screen-advertising-sri-lanka` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: LedScreenAdvertisingPage,
});

function Th({ children }: { children: ReactNode }) {
  return <th className="border border-border bg-muted px-3 py-2 text-left text-sm font-semibold">{children}</th>;
}
function Td({ children }: { children: ReactNode }) {
  return <td className="border border-border px-3 py-2 align-top text-sm">{children}</td>;
}

function LedScreenAdvertisingPage() {
  const waPhone = SITE.phone.replace(/[^0-9]/g, "").replace(/^0/, "94");
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-wider opacity-80">DOOH & Digital LED Advertising</div>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{H1}</h1>
            <p className="mt-4 max-w-2xl text-lg opacity-90">
              Buy advertising airtime on Sri Lanka's premium LED screens — Pearl Tower, One Galle Face, Thurstan Road gantry, Kirulapona, Townhall, Liberty Cinema Building, Rajagiriya, Seeduwa and airport. Named locations, audited impressions and creative that converts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] hover:opacity-90">
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
              <a href={`https://wa.me/${waPhone}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
                <MessageCircle className="h-4 w-4" /> WhatsApp media plan
              </a>
              <Link to="/get-quote" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-90">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> 10+ named premium screens</span>
              <span className="inline-flex items-center gap-2"><Eye className="h-4 w-4" /> 30K–200K daily impressions</span>
              <span className="inline-flex items-center gap-2"><Monitor className="h-4 w-4" /> Outdoor DOOH + indoor mall + airport</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Proof-of-play monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form converting content */}
      <LedAdvertisingContent />

      {/* Related services */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Related Outdoor & LED Advertising Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/led-screen-rental-sri-lanka", title: "LED Screen Rental Sri Lanka", desc: "Portable LED video walls for events — conferences, concerts, weddings, activations." },
            { href: "/digital-billboard-sri-lanka", title: "Digital Billboard Sri Lanka", desc: "DOOH digital billboards at premium Colombo locations and key junctions." },
            { href: "/outdoor-advertising-sri-lanka", title: "Outdoor Advertising Sri Lanka", desc: "Complete OOH — billboards, transit, gantries, islandwide outdoor media planning." },
            { href: "/billboard-advertising-sri-lanka", title: "Billboard Advertising Sri Lanka", desc: "Static billboard advertising with 100% share of voice on key Colombo and provincial roads." },
            { href: "/led-video-wall-sri-lanka", title: "LED Video Wall Sri Lanka", desc: "LED video wall installation for permanent indoor and outdoor applications." },
            { href: "/transit-advertising-sri-lanka", title: "Transit Advertising Sri Lanka", desc: "Bus, train and three-wheeler advertising for mass reach on commuter routes." },
            { href: "/led-sign-board-sri-lanka", title: "LED Sign Board Sri Lanka", desc: "Custom LED sign boards for shopfronts, offices and commercial premises." },
            { href: "/atl-advertising-sri-lanka", title: "ATL Advertising Sri Lanka", desc: "TV, radio and press advertising to complement outdoor LED campaigns." },
          ].map((r) => (
            <Link key={r.href} to={r.href as never} className="group rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-primary/40">
              <div className="text-base font-semibold">{r.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}

function LedAdvertisingContent() {
  const waPhone = SITE.phone.replace(/[^0-9]/g, "").replace(/^0/, "94");
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 text-foreground
      [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold sm:[&_h2]:text-3xl [&_h2]:mb-4 [&_h2:first-child]:mt-0
      [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-3
      [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground
      [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol_li]:text-muted-foreground
      [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul_li]:text-muted-foreground
      [&_table]:my-6 [&_strong]:text-foreground">

      {/* Section 1 */}
      <h2>Two Types of LED Screen in Sri Lanka — Know the Difference Before You Buy</h2>
      <p>The most common confusion when buyers search for "LED screen advertising Sri Lanka" is not realising there are two completely different products with the same name. Choosing the wrong one wastes budget and delivers the wrong result.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead><tr><Th>Type</Th><Th>What It Is</Th><Th>Who Operates the Screen</Th><Th>What You Buy</Th><Th>Best For</Th><Th>Typical Contract</Th></tr></thead>
          <tbody>
            {[
              ["LED Screen Rental (Event)", "A portable LED video wall installed at your event venue, operated by a technician for the event, then removed.", "Your event — fully exclusive", "The screen, operator, setup and pack-down", "Corporate conferences, product launches, concerts, weddings, exhibitions", "Per event (hours or days)"],
              ["LED Screen Advertising (DOOH Media)", "Advertising slots on a permanent LED screen owned by a media network at a fixed public location. Your ad rotates with other advertisers.", "The media network — shared with 4–6 advertisers", "Advertising airtime (seconds per rotation per hour)", "Brand awareness, promo campaigns, sustained visibility at premium Colombo locations", "Per week or month"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <p><strong>This page covers LED screen advertising — the permanent DOOH media buy.</strong> If you need a portable screen for an event, see our <Link to="/led-screen-rental-sri-lanka" className="text-primary underline-offset-2 hover:underline font-semibold">LED Screen Rental Sri Lanka</Link> page.</p>

      {/* Section 2 */}
      <h2>LED Advertising Locations in Sri Lanka — Named Sites & Audience Data</h2>
      <p>The value of digital LED advertising is determined by the location of the screen. A screen with 50,000 daily impressions in front of the right audience is worth five times a screen with 50,000 impressions in front of the wrong one. Here's a guide to the key DOOH sites available in Sri Lanka, organised by audience profile.</p>

      <h3>Premium Colombo Outdoor LED Screens</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead><tr><Th>Location / Screen Name</Th><Th>Area</Th><Th>Approx. Daily Impressions</Th><Th>Audience Profile</Th><Th>Screen Type</Th><Th>Best Advertiser Categories</Th></tr></thead>
          <tbody>
            {[
              ["Pearl Tower LED Screen", "Colombo 01 waterfront", "80,000 – 150,000", "Premium Fort/Pettah commercial, Galle Face Road commuters, business district", "Large format outdoor — 69ft × 39ft (largest LED in Sri Lanka)", "Banking, insurance, luxury, automotive, premium FMCG"],
              ["Dutch Hospital / WTC Screen", "Colombo 01 — Fort", "30,000+ daily", "Corporate professionals, WTC offices, Kingsbury & Colombo hotel guests, Central Bank area", "Outdoor LED facing WTC and Bank of Ceylon", "B2B, financial services, professional services, banking"],
              ["Townhall Junction Screen", "Colombo 07 — Townhall", "60,000 – 100,000", "Colombo 7 professionals, civil servants, cross-city commuters at 4-way junction", "Outdoor LED with illuminated borders — 4-way junction", "Banking, telecoms, FMCG, healthcare, govt comms"],
              ["Thurstan Road Gantry LED", "Colombo 03", "80,000 – 120,000", "Colombo 3/5/7 morning and evening commuters — premium urban professional", "Digital gantry — over-road full-width screen", "Premium FMCG, banking, automotive, real estate"],
              ["Kirulapona Junction LED", "Kirulapona — cross-city junction", "100,000 – 150,000", "High-volume cross-city traffic — aspirational middle class, traders, commuters", "Digital gantry or large outdoor screen", "FMCG, telecoms, banking, retail"],
              ["One Galle Face Mall — Façade LED", "Colombo 02 — Galle Face", "100,000+", "Premium consumers, Galle Face Road traffic, hotel guests (Shangri-La, Taj)", "Large format exterior LED wall — largest mall façade", "Luxury, premium FMCG, automotive, financial services"],
              ["Liberty Cinema Building", "Colombo 03 — Colpetty", "40,000 – 70,000", "Colombo 3 — urban professionals, Colpetty supermarket shoppers, office workers", "Outdoor LED on building façade", "FMCG, banking, telecoms, lifestyle brands"],
              ["Rajagiriya Thilakma Building", "Rajagiriya", "40,000 – 80,000", "Morning/evening Battaramulla commuters, IT park workers, residential catchment", "Outdoor LED on commercial building", "Tech, banking, education, telecoms, housing"],
              ["IOC Fuel Station — Seeduwa", "Seeduwa — Negombo Road", "35,000+ daily", "Airport corridor commuters, Gampaha district consumers, freight traffic", "Outdoor LED at fuel station forecourt", "Automotive, FMCG, banking, hotel/tourism"],
              ["Diyatha Uyana / Park Areas", "Sri Jayawardenepura Kotte", "15,000 – 30,000", "Weekend leisure audience — families, joggers, government workers", "Double-sided outdoor LED", "Family brands, FMCG, personal care, govt comms"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Indoor LED Advertising — Malls & Commercial Spaces</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead><tr><Th>Location</Th><Th>Daily Visitors</Th><Th>Audience</Th><Th>Screen Type</Th><Th>Best For</Th></tr></thead>
          <tbody>
            {[
              ["Colombo City Centre (CCC)", "5,000–7,000 weekday, 10,000 weekend", "Colombo premium shoppers — fashion, food, cinema-goers", "Indoor digital screens at atrium and thoroughfares", "Premium retail, FMCG, telecoms, food & beverage"],
              ["Kandy City Centre", "8,000 – 15,000", "Kandy and Central Province urban shoppers", "Indoor digital screens", "FMCG, banking, telecoms — Central Province reach"],
              ["Bandaranaike International Airport", "15,000 – 30,000 passengers", "International and domestic travellers — premium demographic, high disposable income", "Terminal screens, backlit panels, baggage claim", "Luxury, tourism, banking, premium brands targeting frequent travellers"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <p><strong>How to choose the right location:</strong> match the screen's primary audience to your target consumer. Don't chase the highest impression count — a screen seen by 150,000 people irrelevant to your product is less valuable than a screen seen by 30,000 in your exact target audience. Share your audience profile and campaign geography with us and we'll recommend the right screen or mix.</p>

      {/* Mid CTA */}
      <div className="my-10 rounded-2xl border border-border bg-muted/40 p-6 text-center">
        <div className="text-lg font-semibold">Need a media plan with confirmed rates for these screens?</div>
        <p className="mt-1 text-sm text-muted-foreground">Tell us your audience, geography and budget — we'll come back with a written plan.</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"><Phone className="h-4 w-4" /> Call {SITE.phone}</a>
          <a href={`https://wa.me/${waPhone}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
        </div>
      </div>

      {/* Section 3 */}
      <h2>LED Screen Technical Specifications — What the Numbers Mean for Advertisers</h2>
      <p>Understanding the basics helps you ask the right questions when comparing DOOH proposals — and ensures you're not paying premium rates for a screen that can't deliver the visual quality your creative requires.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead><tr><Th>Specification</Th><Th>What It Means</Th><Th>What to Look For</Th><Th>Why It Matters</Th></tr></thead>
          <tbody>
            {[
              ["Pixel Pitch (P2, P3, P4, P6, P10)", "Distance in mm between LED clusters. Lower number = more pixels = finer detail.", "P3 or lower for indoor/close-viewing. P6–P10 for outdoor long-distance.", "P10 viewed from 3m looks pixelated. P3 from 50m is no better than P10 at that distance — but costs more."],
              ["Brightness (Nits)", "How bright the screen is. Higher nits = visible in brighter conditions.", "Outdoor: minimum 5,000 nits for Sri Lankan sun. Indoor: 800–2,000 nits.", "A low-brightness outdoor screen is washed out in tropical sunlight — your ad is invisible during peak commute hours."],
              ["Refresh Rate (Hz)", "How many times per second the screen redraws. Higher = smoother video.", "Minimum 1,920 Hz for video that will be photographed or filmed.", "Low refresh produces a visible scan-line band in photos and on mobile cameras. If your campaign is documented on social, this matters."],
              ["IP Rating (IP65, IP67)", "How well the screen is sealed against dust and water.", "IP65 minimum outdoor in Sri Lanka. IP67 for exposed coastal locations.", "Monsoon seasons (May–Sep and Nov–Jan) test screens hard. IP54 or lower suffer damage in heavy rain."],
              ["Viewing Angle", "Horizontal/vertical angle from which the screen stays visible and colour-accurate.", "Minimum 140° horizontal for outdoor roadside screens.", "Narrow viewing angles are invisible to drivers approaching from the side, especially at T-junctions."],
              ["Share of Voice (SOV)", "Percentage of total screen time your ad receives when sharing with other advertisers.", "Typical DOOH rotation: 4–6 advertisers. Your SOV = 15–25%.", "At 20% SOV, a screen with 100,000 daily impressions delivers 20,000 net impressions to your brand — the calculation that matters for cost-per-impression."],
              ["Screen Size", "Physical dimensions of the LED panel in feet or metres.", "Confirm the actual LED panel size — not the supporting structure size.", "A 'large' screen that is actually 8×4ft at 100m is far less impactful than a 30×15ft screen at the same location."],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 4 */}
      <h2>Artwork & Content Guide — How to Create for Digital LED Advertising</h2>
      <p>LED screen content has different requirements from print, social media or TV. Getting specs right before you produce creative prevents rejected files, quality degradation and rework costs.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead><tr><Th>Specification</Th><Th>Standard</Th><Th>Notes</Th></tr></thead>
          <tbody>
            {[
              ["Video resolution", "1920×1080px min (Full HD). 3840×2160px (4K) preferred for large format.", "Supply content at the exact pixel dimensions of the screen if known. Never upscale low-res content — pixelation is magnified on large format."],
              ["File format", "MP4 (H.264) for video. JPEG or PNG at 96–150 DPI for static.", "Some networks require specific formats — always confirm accepted formats with the screen operator before production."],
              ["Frame rate", "25fps or 30fps for video.", "Higher (60fps) produces smoother motion but larger files — confirm the network's max file size."],
              ["Colour profile", "sRGB. Avoid HDR or wide-gamut profiles.", "LED screens use RGB — CMYK content (from print designers) appears incorrect. Ensure your designer works in sRGB for LED output."],
              ["Aspect ratio", "16:9 standard landscape for most outdoor screens. Confirm per screen.", "Portrait screens exist (Pearl Tower is approximately 9:16). Always confirm the specific screen's aspect ratio before creative production."],
              ["Animation / video duration", "5–15 seconds per rotation slot on most Sri Lankan DOOH networks.", "If your key message only appears in the final 3 seconds, most viewers will miss it. Design the message into the opening frames."],
              ["Text legibility", "Max 5–7 words on screen at once. Min text height 10% of screen height.", "Text that works on a laptop at 24pt is illegible from 50m. Scale up aggressively — bold sans-serif performs best at distance."],
              ["Audio", "Most outdoor screens are silent — design for visual impact without sound.", "Indoor mall screens sometimes support audio — confirm with the network before including audio."],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>5 Creative Rules That Work on Sri Lankan LED Screens</h3>
      <ol>
        <li><strong>Design for 3 seconds.</strong> A commuter on a moving vehicle processes a roadside LED in 2–5 seconds. Every design decision must assume 3 seconds — brand, key message, CTA. If creative needs more, simplify it.</li>
        <li><strong>One message only.</strong> The most effective digital LED campaigns carry a single focused message — not a product range, not four offers, not a phone number plus a website plus a QR code together. One idea, executed boldly.</li>
        <li><strong>Use motion strategically.</strong> Movement catches peripheral attention before a driver consciously looks at the screen. The opening 0.5s of motion is more important than the final frame.</li>
        <li><strong>High contrast always.</strong> Tropical midday sun washes out low-contrast content regardless of nit rating. White on yellow or light blue on white is invisible. Dark backgrounds with white or bright text are safest outdoors.</li>
        <li><strong>Sinhala and Tamil need larger type.</strong> Script-based characters need more pixels to remain legible at viewing distance. Test on a printed large-format proof before approving digital content.</li>
      </ol>

      {/* Section 5 */}
      <h2>How to Buy DOOH Advertising in Sri Lanka — Media Buying Guide</h2>
      <p>Buying digital outdoor in Sri Lanka is different from print or digital — it requires understanding how the DOOH market is structured and what to negotiate before signing.</p>
      <h3>The Sri Lanka DOOH Buying Process</h3>
      <ol>
        <li><strong>Define your audience and geography first.</strong> Before selecting any screen, define who you are reaching and where they are. The screen's primary audience must match your target consumer — not just its impression count or location prestige.</li>
        <li><strong>Request confirmed traffic data per screen.</strong> Ask the media owner for the source of impression figures — ideally Road Development Authority (RDA) counts or a third-party study. Self-reported numbers should be treated as estimates, not guarantees.</li>
        <li><strong>Confirm share of voice and rotation.</strong> Establish how many advertisers share the screen, rotation length, and whether your brand can be excluded from rotating alongside direct competitors. Category exclusivity is worth negotiating in financial services and telecoms.</li>
        <li><strong>Negotiate creative change flexibility.</strong> Ask how many times you can update creative during the booking and the lead time per change. Some networks require 48–72 hours. If your campaign involves time-sensitive promos (Avurudu, flash sales), speed matters.</li>
        <li><strong>Request monitoring evidence.</strong> All contracts should include timestamped monitoring screenshots showing your ad playing with the screen location visible. Without this there's no independent verification — professional networks provide it as standard.</li>
        <li><strong>Integrate with digital from day one.</strong> DOOH performs significantly better combined with mobile retargeting — consumers who pass your billboard are served your digital ads on Facebook, Instagram and Google. Set up location-based retargeting audiences before launch.</li>
      </ol>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead><tr><Th>Booking Element</Th><Th>What to Confirm in Writing</Th><Th>Why</Th></tr></thead>
          <tbody>
            {[
              ["Screen dimensions", "Actual LED panel size in feet/metres", "Not the supporting structure — the visible LED area"],
              ["Traffic/impression data source", "RDA data, third-party study or self-reported", "Unverified impression claims are the most common misrepresentation in Sri Lankan OOH"],
              ["Number of advertisers on rotation", "Exact concurrent advertisers sharing the screen", "Determines your effective SOV — 10 advertisers = 10% SOV"],
              ["Your slot duration per rotation", "Exact seconds per rotation", "A 5s slot on a 60s rotation = 1,440 plays per day — confirm the calculation"],
              ["Creative file specifications", "Exact pixel dimensions, format, frame rate, max file size", "Rejected files cause delays and sometimes missed first-day launch"],
              ["Monitoring and proof of play", "Frequency and format of monitoring reports", "Your only independent verification that the campaign ran as contracted"],
              ["Permit status", "Written confirmation of current local-authority permits", "Screens without permits are removed by local authorities — sometimes mid-campaign"],
              ["Make-good policy", "What happens if the screen is dark (technical failure) during your booking", "Screen downtime without a make-good clause means you pay for days your ad wasn't displayed"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 6 */}
      <h2>Industry Applications — Who Uses Digital LED Advertising in Sri Lanka</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead><tr><Th>Industry</Th><Th>How They Use It</Th><Th>Best Screen Type</Th><Th>Message Approach</Th><Th>Peak Season</Th></tr></thead>
          <tbody>
            {[
              ["Banking & Finance", "Product launches (home loans, credit cards), branch openings, festive campaigns", "Premium Colombo outdoor — WTC area, Thurstan Road, Townhall", "Simple benefit statement + brand logo — compliance requires no misleading claims", "New Year (Jan), Avurudu (Apr), home loan season (Q1)"],
              ["Telecommunications", "New plan launches, device bundling, data package promotions", "High-traffic outdoor — Kirulapona, Baseline Road, provincial city screens", "Bold offer statement, data speed/price, single CTA", "Year-round — peaks at new plan launches"],
              ["Automotive", "New model launches, test drive invitations, showroom openings", "Premium outdoor near showroom locations + Galle Road corridor", "Hero product shot + nearest showroom location", "New-model launches, post-Avurudu bonus period"],
              ["Real Estate", "Project launch visibility, show flat traffic, apartment pre-sales", "Screens near catchment — Rajagiriya, Battaramulla, Malabe corridor", "Project render + key benefit (payment plan, location) + contact number", "Project launch periods — Q1 and Q3"],
              ["FMCG & Retail", "New product launches, seasonal promotions, brand building alongside in-store BTL", "High-volume commuter screens + mall indoor screens near purchase point", "Product visual + key claim or offer — bold, clear, one message", "Avurudu (Apr), back-to-school (Jan), Christmas (Dec)"],
              ["Healthcare & Pharma", "Health awareness, hospital brand building, wellness launches", "Outdoor in residential catchments + hospital corridor indoor screens", "Clear health message — avoid technical claims not approved by MOH", "World Health Day (Apr 7), dengue/flu seasons"],
              ["Tourism & Hospitality", "Hotel brand awareness, seasonal occupancy, restaurant promotions", "Airport screens (international arrivals), premium Colombo, coastal city screens", "High-quality photography + property name + booking channel", "Peak tourist season (Oct–Jan), domestic peak (Avurudu, holidays)"],
              ["Education", "Enrolment season, new campus openings, exam preparation course promotions", "Screens near residential areas, universities and school corridors", "Institution name + key differentiator + intake dates", "Oct–Dec (Grade 1), Jan–Apr (A/L, O/L results, tertiary intake)"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 7 FAQ */}
      <h2>Frequently Asked Questions — LED Screen Advertising in Sri Lanka</h2>
      {FAQS.map((f, i) => (
        <div key={i}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
    </div>
  );
}
