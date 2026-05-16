import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/pixel-pitch-explained-led-screen-rent-sri-lanka";
const TITLE = "Pixel Pitch Explained: Choosing the Right LED Screen Rent for Your Event";
const DESC =
  "P2, P3, P4, P5, P6, P8, P10 explained for Sri Lankan event organisers — viewing distance formulas, indoor vs outdoor rules, cost impact and how to spec the right LED screen rent.";

export const Route = createFileRoute("/blog/pixel-pitch-explained-led-screen-rent-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "pixel pitch led screen sri lanka, p3 p4 p5 led panel, led screen viewing distance, led screen rent, led wall resolution",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE.url}/${SLUG}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/${SLUG}` }],
  }),
  component: () => (
    <PageShell>
      <CustomBlogArticle
        slug={SLUG}
        title={TITLE}
        description={DESC}
        kicker="Tech Deep-Dive"
        publishedISO="2025-03-18"
        category={{ label: "LED Tech", href: "/event-management-sri-lanka" }}
        intro="Pixel pitch is the single biggest driver of LED screen cost — and the most misunderstood spec on every quote. Get it wrong and you either overpay 60% or end up with a visibly pixelated wall."
        blocks={[
          {
            type: "p",
            text: "Before you confirm any LED screen rent booking, understanding pixel pitch will save you from renting the wrong screen for your venue. It's the difference between a wall that looks crisp at 3 metres and one that looks tiled, and it swings the rental rate by 50–70% on the same surface area.",
          },
          { type: "h2", text: "What pixel pitch actually means" },
          {
            type: "p",
            text: "Pixel pitch is the distance between the centre of one LED dot and the next, measured in millimetres. P3 means 3mm between pixels. P5 means 5mm. Smaller number = more pixels per square metre = sharper image at close range = higher rental cost. That's the entire concept.",
          },
          {
            type: "table",
            head: ["Pitch", "Pixels per sqm", "Cost vs P5", "Typical use"],
            rows: [
              ["P1.5 / P2", "443,000 / 250,000", "2.5–3.5×", "Studio backdrops, broadcast"],
              ["P2.5 / P3", "160,000 / 111,000", "1.6–2.0×", "Conference, premium indoor"],
              ["P3.91 / P4", "65,500 / 62,500", "1.2–1.4×", "Standard indoor events"],
              ["P5", "40,000", "1.0× (baseline)", "Indoor mid-size, outdoor short throw"],
              ["P6 / P6.67", "27,800 / 22,500", "0.85–0.9×", "Outdoor mid-distance"],
              ["P8 / P10", "15,600 / 10,000", "0.7–0.8×", "Outdoor long-distance, concerts"],
            ],
          },
          { type: "h2", text: "The viewing distance rule" },
          {
            type: "p",
            text: "Minimum comfortable viewing distance in metres ≈ pixel pitch number. A P3 panel looks crisp from 3 metres away. A P5 looks crisp from 5 metres. Closer than that, you start to see individual dots; farther than that, you're paying for resolution you can't perceive. This single rule selects 90% of LED bookings correctly.",
          },
          {
            type: "callout",
            text: "There's also an optimum viewing distance, roughly 2–3× the pitch number. P3 looks ideal from 6–9 metres, P5 from 10–15 metres. Use this for the seated bulk of the audience, not the front row.",
          },
          { type: "h2", text: "Indoor vs outdoor — the rule changes" },
          {
            type: "p",
            text: "Indoor screens prioritise sharpness because the audience is close (3–10 metres typical). Outdoor screens prioritise brightness and weather sealing because the audience is far (8–30 metres typical). That's why outdoor P5/P6 is the workhorse pitch and outdoor P3 is rare — you'd be paying for resolution the audience physically cannot perceive at outdoor viewing distances.",
          },
          { type: "h2", text: "Matching pitch to event type" },
          {
            type: "ul",
            items: [
              "Studio / broadcast backdrop (camera framing very close) — P1.5 to P2.5.",
              "Premium corporate conference, ballroom — P2.5 to P3.",
              "Standard corporate conference, AGM, wedding backdrop — P3 to P4.",
              "Indoor exhibition booth, retail activation — P4 to P5.",
              "Outdoor brand activation, mall atrium — P5 to P6.",
              "Concert, festival, sports — P6 to P10.",
              "Large-format DOOH (billboard-scale) — P10 to P16.",
            ],
          },
          { type: "h2", text: "When P5 beats P3" },
          {
            type: "p",
            text: "If your audience is uniformly 8+ metres back, P5 looks identical to P3 to the naked eye — and saves you 30–40% on the rental rate, which you can redirect into a larger screen area or a better content design. Many Sri Lankan event planners over-spec pitch out of habit; this single decision is where genuine LED budget optimisation lives.",
          },
          { type: "h2", text: "When NOT to compromise on pitch" },
          {
            type: "ol",
            items: [
              "Live broadcast — the camera sees pitch artefacts that the naked eye does not. Always go one pitch tighter than the audience needs.",
              "Close-quarters retail / brand activation — guests will photograph the screen from arm's length.",
              "Detailed content with fine text or thin graphics — P5 chews up sub-pixel detail.",
              "Premium product launches where the LED wall IS the photo backdrop — pitch quality lives forever in social media.",
            ],
          },
          { type: "h2", text: "Common pitch mistakes" },
          {
            type: "ul",
            items: [
              "Specifying P3 outdoor 'because finer is better' — pays a 50% premium nobody perceives.",
              "Specifying P10 for an indoor breakout 'because it's cheaper' — front-row guests see clear pixel dots.",
              "Mixing pitches across a multi-screen install — pixels per square metre mismatch creates visible brightness differences.",
              "Ignoring camera distance for hybrid livestream events — broadcast feeds need finer pitch than in-room viewers do.",
            ],
          },
        ]}
        faqs={[
          {
            q: "What does the 'P' in P3, P4, P5 mean?",
            a: "It stands for 'pitch' — short for pixel pitch, the centre-to-centre distance between LED dots in millimetres. P3 = 3mm between pixels, P5 = 5mm, and so on.",
          },
          {
            q: "Is P3 always better than P5?",
            a: "Not for outdoor or far-distance viewing. Beyond about 5 metres, the human eye cannot distinguish P3 from P5 — you're paying for resolution that isn't perceptible. P5 is the better commercial choice for most outdoor and large-distance indoor events.",
          },
          {
            q: "What pitch do I need for an LED backdrop with a camera filming the stage?",
            a: "Cameras resolve detail better than the naked eye and amplify pitch artefacts (moire patterns). For broadcast or filmed events, choose one pitch tighter than the audience needs — typically P2.5 or P3 for camera distances of 5–10 metres.",
          },
          {
            q: "How do I know if the supplier has actually quoted the pitch they say?",
            a: "Ask for the panel brand and model number — e.g. Absen A3 Pro, Unilumin UpadIIIH5, ROE Ruby 2.6. Then verify the pitch on the manufacturer's datasheet. Bait-and-switch (quoting P3, delivering P4) is rare among reputable Sri Lankan suppliers but happens at the cheapest end of the market.",
          },
        ]}
        related={[{"href":"/blog/how-much-does-led-screen-rent-cost-sri-lanka","label":"How much does LED screen rent cost in Sri Lanka?"},{"href":"/blog/outdoor-led-screen-rent-sri-lanka","label":"Outdoor LED screen rent — brightness, weather and setup"},{"href":"/blog/led-screen-rent-colombo-guide","label":"LED screen rent in Colombo — sizes, prices and venue notes"},{"href":"/led-screen-rental-sri-lanka","label":"LED Screen Rental"},{"href":"/event-management-sri-lanka","label":"Event Management Sri Lanka"}]}
      />
    </PageShell>
  ),
});
