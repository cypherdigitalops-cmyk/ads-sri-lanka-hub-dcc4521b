import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Video Production Cost in Sri Lanka — TVC, Corporate & Social (2026)";
const DESC = "Video production cost in Sri Lanka — TV commercials, corporate films, social reels, drone, 2D/3D animation. Realistic 2026 budget ranges.";
const SLUG = "video-production-cost-sri-lanka";

const ROWS: { format: string; cost: string; notes: string }[] = [
  {
    "format": "Social media reel (single shoot day)",
    "cost": "LKR 65,000 – 250,000 / video",
    "notes": "Phone-first or DSLR, single talent."
  },
  {
    "format": "Corporate profile film (3–5 min)",
    "cost": "LKR 350,000 – 1,500,000",
    "notes": "Interviews, b-roll, drone, motion graphics."
  },
  {
    "format": "TV commercial — basic (30s)",
    "cost": "LKR 450,000 – 1,200,000",
    "notes": "Single location, voiceover, no celeb."
  },
  {
    "format": "TV commercial — premium (30s)",
    "cost": "LKR 2M – 12M+",
    "notes": "Director, name talent, jingle, multi-location."
  },
  {
    "format": "Drone shoot (half day)",
    "cost": "LKR 35,000 – 120,000",
    "notes": "CAA-cleared pilot, 4K."
  },
  {
    "format": "2D animation (per finished minute)",
    "cost": "LKR 80,000 – 350,000",
    "notes": "Script, storyboard, illustration, VO."
  },
  {
    "format": "3D animation / product CGI",
    "cost": "LKR 250,000 – 1,500,000 / minute",
    "notes": "Modelling, texturing, lighting, render."
  },
  {
    "format": "Edit-only (footage supplied)",
    "cost": "LKR 25,000 – 150,000 / video",
    "notes": "Colour, sound, motion graphics."
  }
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Are these prices fixed?", acceptedAnswer: { "@type": "Answer", text: "No. These are indicative 2026 ranges from live Sri Lankan campaigns. Final quotes depend on volume, season, contract length and creative scope." } },
    { "@type": "Question", name: "Do you give written quotes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Call 0701772626 or WhatsApp us for a free written quote tailored to your brief." } },
    { "@type": "Question", name: "Do prices include taxes?", acceptedAnswer: { "@type": "Answer", text: "Ranges shown are net of VAT and other applicable government taxes." } },
  ],
};

export const Route = createFileRoute("/video-production-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `video production cost sri lanka, advertising cost sri lanka, advertising rates sri lanka` },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/${SLUG}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/${SLUG}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) }],
  }),
  component: CostPage,
});

function CostPage() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Cost Guides", to: "/advertising-rates" }, { label: TITLE }]} />
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Video Production Cost in Sri Lanka</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{DESC}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
        <p>Video production cost in Sri Lanka depends on crew size, talent, locations and post-production complexity. These are turnkey ranges.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Indicative 2026 rate card</h2>
        <div className="mt-5 overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/40 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Format / option</th>
                <th className="px-4 py-3 font-semibold">Typical cost</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.format} className="border-t border-border align-top">
                  <td className="px-4 py-3 font-medium text-foreground">{r.format}</td>
                  <td className="px-4 py-3 text-foreground/90">{r.cost}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">What you are really buying when you pay for video</h2>
        <p className="mt-3">A video quote is not a price per minute — it is a price per shoot day, plus pre-production complexity, plus post-production complexity. A 30-second social reel and a 30-second TV commercial can both be "30 seconds of finished video", yet cost LKR 80,000 and LKR 2,500,000 respectively. The difference is everything that happens around the camera.</p>
        <p className="mt-3">Three multipliers drive the entire bill: crew size (a 4-person reel crew vs a 22-person TVC crew), equipment grade (mirrorless DSLR vs cinema camera with full lighting package), and post-production scope (a 4-hour edit vs a 60-hour edit with colour grading, sound design and motion graphics).</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Realistic Sri Lankan rate cards by format</h2>
        <p className="mt-3">A 2026 working set of prices for common formats produced in Sri Lanka:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Social reel (single shoot day, phone-first or DSLR):</strong> LKR 65,000–250,000 per video. Best value when shot in batches of 4–8 videos in one day.</li>
          <li><strong>Corporate profile film (3–5 min):</strong> LKR 350,000–1,500,000. Interviews, B-roll, drone, motion graphics, music licensing.</li>
          <li><strong>Product / catalogue video (per SKU):</strong> LKR 25,000–80,000 when shot in batches of 10+ products in a single studio day.</li>
          <li><strong>TVC — basic (30s):</strong> LKR 450,000–1,200,000. Single location, voiceover, no celebrity, 2-day shoot.</li>
          <li><strong>TVC — premium (30s):</strong> LKR 2M–12M+. Director, name talent, jingle, multi-location, full agency creative.</li>
          <li><strong>2D animation (per finished minute):</strong> LKR 80,000–350,000. Script, storyboard, illustration, animation, voiceover.</li>
          <li><strong>3D animation / product CGI (per finished minute):</strong> LKR 250,000–1,500,000. Modelling, texturing, lighting and render time are the cost drivers.</li>
          <li><strong>Drone shoot (half day):</strong> LKR 35,000–120,000 with a CAA-cleared pilot and 4K footage delivery.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">How to brief a video to keep cost under control</h2>
        <p className="mt-3">Six brief decisions made early save 20–40% of the production budget:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Lock the shoot location count.</strong> Each extra location adds half a shoot day and one crew transfer.</li>
          <li><strong>Lock the talent count.</strong> Each on-screen person adds make-up, wardrobe, fees and rehearsal time.</li>
          <li><strong>Decide voiceover vs synced dialogue early.</strong> Sync sound requires a boom operator and a controlled location — voiceover does not.</li>
          <li><strong>Confirm music licensing route.</strong> Original score is more expensive but owned forever; stock music is cheap but limited in usage rights.</li>
          <li><strong>Batch shoot multiple deliverables in one day.</strong> 4 reels in one shoot day usually cost 60% of 4 reels shot on 4 separate days.</li>
          <li><strong>Provide brand assets early.</strong> Logo files, fonts, colour codes and approved imagery delivered before pre-production saves 4–8 hours of post-production rework.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Pre, production and post — the typical timeline</h2>
        <p className="mt-3">For a corporate profile film with interviews and on-location B-roll, plan roughly:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Days 1–4:</strong> brief, concept, script, storyboard, location recce.</li>
          <li><strong>Days 5–7:</strong> pre-production — casting, scheduling, logistics, equipment booking.</li>
          <li><strong>Days 8–10:</strong> shoot (typically 2–3 days for a 3–5 minute corporate piece).</li>
          <li><strong>Days 11–18:</strong> offline edit, client review rounds 1–2.</li>
          <li><strong>Days 19–24:</strong> online edit, colour, sound design, motion graphics.</li>
          <li><strong>Days 25–28:</strong> final review, audio mix, deliverable exports in all required formats.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">The deliverables conversation nobody has up-front</h2>
        <p className="mt-3">Always agree the deliverable list in writing before the shoot. A single shoot can produce many cuts: a 60-second hero film, a 30-second social cutdown, a 15-second story version, a 6-second bumper, vertical and horizontal aspect ratios, subtitled versions in Sinhala/Tamil/English, behind-the-scenes content, stills for press. Each additional cut adds 1–3 hours of editor time. Listing all of these in the contract avoids the awkward "but you said you would also give us…" conversation a week after delivery.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
