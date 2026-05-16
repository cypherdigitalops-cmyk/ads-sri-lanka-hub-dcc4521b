import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/led-screen-rent-for-weddings-sri-lanka";
const TITLE = "LED Screen Rent for Weddings in Sri Lanka: What Couples Need to Know";
const DESC =
  "From live feed screens to LED backdrops and photo slideshows — a Sri Lankan couple's guide to LED screen rent for weddings, with vendor coordination tips and pricing.";

export const Route = createFileRoute("/blog/led-screen-rent-for-weddings-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "led screen rent for weddings sri lanka, wedding led wall, wedding led backdrop, led screen rent, wedding av sri lanka",
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
        kicker="Weddings"
        publishedISO="2025-02-18"
        category={{ label: "Wedding AV", href: "/event-management-sri-lanka" }}
        intro="An LED screen at a Sri Lankan wedding does three jobs at once — live feed for back rows, photo slideshow during dinner, and a backdrop that becomes every guest's Instagram photo. Done right, it's the single highest-impact AV decision of the night."
        blocks={[
          {
            type: "p",
            text: "A wedding LED screen pulls triple duty. During the ceremony it's a live feed for the back tables. Through dinner it's a curated slideshow of the couple. During the dance set, it's the visual backdrop that defines every photo guests take that night. Getting all three right starts with choosing the right size, pixel pitch and vendor mix.",
          },
          { type: "h2", text: "The three wedding screen formats" },
          {
            type: "h3",
            text: "1. Live feed screens (back-of-room or flanking the stage)",
          },
          {
            type: "p",
            text: "For receptions of 250+ guests, the back rows physically cannot see the cake-cut or the speeches. A pair of 3m × 2m P4 indoor screens flanking the head table fixes that. Feed comes from one or two cameras the videographer is already running — the AV team mirrors the camera output to the LED screens with a few seconds of latency removed.",
          },
          { type: "h3", text: "2. Centerpiece LED backdrop" },
          {
            type: "p",
            text: "A 6m × 3.5m or 8m × 4m wall behind the head table replaces traditional drape backdrops entirely. It rotates between the couple's monogram, slow ambient visuals during dinner, the slideshow, and finally bright dance-floor content. This is the dominant wedding LED format in Colombo and Negombo over the last two years.",
          },
          { type: "h3", text: "3. Photo slideshow + monogram loops" },
          {
            type: "p",
            text: "Even on a budget, a single 3m × 2m wall by the welcome area showing childhood photos, the proposal story and the couple's monogram delivers more guest engagement than any other decor spend. Couples regularly tell us this is the most-photographed element of the night.",
          },
          { type: "h2", text: "What it actually costs" },
          {
            type: "table",
            head: ["Wedding format", "Typical build", "All-in price (one night)"],
            rows: [
              ["Welcome / slideshow only", "3m × 2m P4 indoor", "LKR 75,000 – 110,000"],
              ["Pair of flanking live-feed screens", "2× 3m × 2m P4", "LKR 140,000 – 200,000"],
              ["Head-table LED backdrop", "6m × 3.5m P3 indoor", "LKR 200,000 – 290,000"],
              ["Backdrop + slideshow + live feed", "Bundle of above", "LKR 320,000 – 480,000"],
              ["Outdoor garden ceremony screen", "4m × 2.5m P5 outdoor", "LKR 220,000 – 320,000"],
            ],
          },
          { type: "h2", text: "Vendor coordination — the bit that always breaks" },
          {
            type: "p",
            text: "Bundling your LED screen rent with your stage, sound and lighting from one supplier avoids the most common day-of coordination failures: power circuits clashing, the truss not fitting around the screen, the videographer's HDMI feed not matching the processor's input, or the DJ's lighting cues washing out the LED at the worst moment. Couples who split AV across 3+ vendors regularly end up paying their wedding planner to mediate problems on the night.",
          },
          {
            type: "callout",
            text: "If you must split vendors, schedule a joint site visit at least 14 days out — all AV suppliers, the videographer and the venue's in-house team in the same room with the floor plan. This single meeting prevents most launch-day disasters.",
          },
          { type: "h2", text: "Content checklist for the AV team" },
          {
            type: "ul",
            items: [
              "Monogram / hashtag loop in the exact aspect ratio of the screen (a 6m × 3.5m wall is 16:9.3, not standard 16:9 — content stretches if not designed to match).",
              "Pre-ceremony slideshow (10–15 minutes of photos at 5 seconds each).",
              "Live feed input pre-tested with the actual camera and cabling — not assumed.",
              "Dinner ambient content (low-motion, low-brightness — the screen shouldn't compete with conversation).",
              "Dance-floor visuals or a beat-reactive content reel if you want energy.",
              "Emergency static image (couple's monogram) for any moment the live feed fails.",
            ],
          },
          { type: "h2", text: "Five mistakes Sri Lankan couples make" },
          {
            type: "ol",
            items: [
              "Booking too small — a 2m × 1.5m screen behind a head table looks more like a TV than a feature; go 6m wide minimum for backdrop use.",
              "Wrong pixel pitch — P5 looks fine from 8 metres but pixelated for the front guest tables 3 metres away.",
              "Forgetting outdoor garden ceremonies need outdoor-rated panels (1,500 nit indoor screens vanish in daylight).",
              "No backup content file — when the slideshow USB fails 20 minutes before guests arrive, nobody has a Plan B.",
              "Skipping the dedicated technician — a venue engineer running the screen between mixing sound rarely ends well.",
            ],
          },
        ]}
        faqs={[
          {
            q: "Is an LED wall better than fabric drape for a wedding backdrop?",
            a: "For most modern receptions, yes — an LED backdrop is dynamic (monogram → slideshow → ambient → dance), photographs beautifully under standard wedding lighting, and replaces 3–4 separate decor elements. The cost is comparable to a premium fabric + floral install.",
          },
          {
            q: "How early before the wedding does the AV team need to install the LED screen?",
            a: "Most ballrooms allow morning-of install (typically 8am for a 7pm reception). Larger 8m+ walls or outdoor builds need a day-before pre-rig. Always confirm load-in window with the venue before signing the AV contract.",
          },
          {
            q: "Can the LED screen be hidden during the ceremony and revealed for the reception?",
            a: "Yes — common approach is a soft drape reveal or a transition from a static monogram during the ceremony to dynamic content for the reception. Brief the AV team in advance so the screen content is staged correctly.",
          },
          {
            q: "Do we need separate screens for live feed and backdrop?",
            a: "Not always — one large central LED can switch from monogram backdrop to live camera feed during speeches and back. But flanking live-feed screens give better sightlines for guests at side tables, which matters for receptions above 300 guests.",
          },
        ]}
        related={[
          { href: "/blog/event-stage-setup-av-package-sri-lanka", label: "What's in a full event stage & AV package in Sri Lanka?" },
          { href: "/blog/led-screen-rent-colombo-guide", label: "LED screen rent in Colombo — sizes, prices and venue notes" },
          { href: "/blog/corporate-event-av-checklist-sri-lanka", label: "Corporate event AV checklist for Sri Lanka" },
        ]}
      />
    </PageShell>
  ),
});
