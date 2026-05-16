import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/outdoor-led-screen-rent-sri-lanka";
const TITLE = "Outdoor LED Screen Rent in Sri Lanka: Brightness, Weather & Setup Tips";
const DESC =
  "Everything you need to know about outdoor LED screen rent in Sri Lanka — nits ratings for daylight, monsoon-proofing, generator sizing, pixel pitch for outdoor viewing and rigging safety.";

export const Route = createFileRoute("/blog/outdoor-led-screen-rent-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "outdoor led screen rent sri lanka, outdoor led screen hire, daylight led wall sri lanka, outdoor led video wall, led screen rent",
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
        kicker="Outdoor Events"
        publishedISO="2025-02-12"
        category={{ label: "Outdoor Event AV", href: "/event-management-sri-lanka" }}
        intro="Outdoor LED screens behave nothing like the indoor ones in a hotel ballroom — brightness, weather sealing, rigging and power all become non-negotiable. Here's what actually works for Sri Lankan conditions."
        blocks={[
          {
            type: "p",
            text: "Outdoor LED screens fail in Sri Lanka for three predictable reasons: not bright enough for tropical daylight, not sealed against a sudden monsoon shower, and not rigged for coastal wind. Booking the right gear from the start avoids 95% of day-of-event problems.",
          },
          { type: "h2", text: "Brightness — why nits matter" },
          {
            type: "p",
            text: "Indoor LED panels run at 800–1,500 nits. That's fine in a dimmed ballroom and useless outdoors. Direct Sri Lankan sun delivers 8,000–10,000 nits of ambient brightness; even shaded outdoor settings hit 3,000–5,000. You need a screen rated at minimum 5,000 nits for shaded outdoor and 6,500–7,500 nits if any direct sun will hit the panel surface.",
          },
          {
            type: "table",
            head: ["Lighting condition", "Minimum panel brightness", "Typical use"],
            rows: [
              ["Indoor (house lights down)", "800 – 1,500 nits", "Conferences, weddings, ballrooms"],
              ["Covered outdoor / evening", "3,500 – 5,000 nits", "Marquee events, after sunset"],
              ["Shaded outdoor / overcast", "5,000 – 6,000 nits", "Most day-time outdoor events"],
              ["Direct sunlight", "6,500 – 7,500+ nits", "Galle Face, mall atriums, sports"],
            ],
          },
          { type: "h2", text: "Weatherproofing for Sri Lankan rain" },
          {
            type: "p",
            text: "Look for IP65 front / IP54 rear (or better) cabinets — that rating means panels survive rain on the front face and splash on the rear. Lower ratings should never be installed where weather can reach them. Even with IP65 panels, the cable connections at the rear of the screen, the processor station, and the generator all need their own weather covers; one wet input cable kills an entire wall.",
          },
          {
            type: "callout",
            text: "Sri Lankan monsoon season (May–September on the west coast, October–January on the east) needs a contingency plan in writing — including who decides to drop the screen if winds exceed safe limits.",
          },
          { type: "h2", text: "Pixel pitch — bigger is better outdoors" },
          {
            type: "p",
            text: "Outdoor audiences sit further away — front rows are typically 6–12 metres back, not 3. That means P5, P6, P8 and even P10 give you the same perceived sharpness as P3 indoors, at a fraction of the rental rate. Spending on P3 outdoor stock is wasted unless the screen is at eye level a couple of metres from the audience.",
          },
          { type: "h2", text: "Power & generator sizing" },
          {
            type: "ul",
            items: [
              "Rule of thumb: outdoor LED panels draw 200–400 watts per square metre at full brightness. A 6m × 4m wall = 24 sqm × 350W = roughly 8.5kW peak.",
              "Add the processor (200W), lighting and sound on the same generator: round up by 40% headroom.",
              "For most mid-size outdoor builds, a 15–25 kVA silent generator is the right size. Bigger walls (40+ sqm) need 40–60 kVA.",
              "Never share the screen's circuit with stage sound — voltage dips during loud bass passages can crash the LED processor.",
              "Always specify a stable, regulated power feed; raw village mains will damage panels long before the event ends.",
            ],
          },
          { type: "h2", text: "Rigging & wind safety" },
          {
            type: "p",
            text: "Coastal Sri Lanka regularly sees 25–40 km/h winds during the inter-monsoon. Any outdoor LED wall above 4 metres in height needs a properly engineered ground-support truss with wind-load calculations on paper, ballast or staked tie-downs, and a documented safe-wind threshold above which the screen must be dropped. Reputable suppliers refuse to install without these — that's a signal you've picked the right team.",
          },
          { type: "h2", text: "Where to start" },
          {
            type: "p",
            text: "Start by reviewing your options through a specialist LED screen rent provider who stocks outdoor-rated panels, carries an IP65 inventory, and can issue a wind-load certificate for the venue's approval team. Get this in writing before paying any deposit — venues like Galle Face Hotel, Waters Edge and Diyatha Uyana actively reject installations without it.",
          },
          { type: "h2", text: "Common outdoor-rental mistakes to avoid" },
          {
            type: "ol",
            items: [
              "Booking indoor stock 'because the event is in the evening' — twilight reflections still wash out 1,500 nit panels.",
              "Skipping the processor backup — a single point of failure that has killed dozens of high-profile launches.",
              "Sharing the generator with stage lighting on the same phase — voltage dips will crash the screen.",
              "Forgetting fuel quantity for the full day — small generators eat 5–8 litres of diesel per hour.",
              "No content test on-site the day before — outdoor colour calibration always shifts vs the warehouse preview.",
            ],
          },
        ]}
        faqs={[
          {
            q: "Can an indoor LED screen be used outdoors at night?",
            a: "Risky — even after sunset, ambient streetlight and stage lighting often exceed indoor panel ratings, and indoor cabinets have zero weather sealing. A single shower destroys them. Always book outdoor-rated panels for any outdoor event.",
          },
          {
            q: "What pixel pitch is recommended for an outdoor LED screen in Sri Lanka?",
            a: "P5 or P6 is the sweet spot for most outdoor events with audiences 8+ metres from the screen. P8 and P10 are perfectly acceptable for concerts and festivals at 15+ metres. P3 outdoor is overkill unless the audience is right at the foot of the screen.",
          },
          {
            q: "Do I need a permit to install a large outdoor LED screen?",
            a: "For private venues, no — but the venue itself usually requires a wind-load engineering certificate. For public spaces (roadside, parks), you need municipal council approval and traffic management clearance, organised at least 2–3 weeks in advance.",
          },
          {
            q: "What happens if it rains during an outdoor LED event?",
            a: "IP65-rated panels keep running through normal rain — the issue is wind. Above the supplier's safe-wind threshold (usually 40–45 km/h), the screen must be dropped to ground level immediately. Always have this protocol agreed before the event.",
          },
        ]}
        related={[{"href":"/blog/how-much-does-led-screen-rent-cost-sri-lanka","label":"How much does LED screen rent cost in Sri Lanka? 2025 breakdown"},{"href":"/blog/pixel-pitch-explained-led-screen-rent-sri-lanka","label":"Pixel pitch explained — choosing the right LED screen"},{"href":"/blog/event-stage-setup-av-package-sri-lanka","label":"What's in a full event stage & AV package in Sri Lanka?"},{"href":"/led-screen-rental-sri-lanka","label":"LED Screen Rental"},{"href":"/outdoor-advertising-sri-lanka","label":"Outdoor Advertising"},{"href":"/event-management-sri-lanka","label":"Event Management Sri Lanka"}]}
      />
    </PageShell>
  ),
});
