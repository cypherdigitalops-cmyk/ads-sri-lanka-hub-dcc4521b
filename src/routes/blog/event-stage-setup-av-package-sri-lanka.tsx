import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/event-stage-setup-av-package-sri-lanka";
const TITLE = "What's Included in a Full Event Stage & AV Package in Sri Lanka?";
const DESC =
  "A clear breakdown of what a turnkey event stage & AV package covers in Sri Lanka — stage build, sound, lighting, LED video wall, technician, generator, processor and content support.";

export const Route = createFileRoute("/blog/event-stage-setup-av-package-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "event stage setup sri lanka, av package sri lanka, event production sri lanka, led video wall, led screen rent, turnkey stage hire",
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
        kicker="Turnkey AV"
        publishedISO="2025-03-10"
        category={{ label: "Stage & AV", href: "/event-management-sri-lanka" }}
        intro="A 'full AV package' from a Sri Lankan event supplier should cover six independent technical disciplines — and the cheapest quote usually drops one of them. Here's what a real turnkey stage + AV package includes."
        blocks={[
          {
            type: "p",
            text: "Asking three suppliers for a 'stage and AV package' will produce three wildly different quotes — not because the suppliers disagree on price, but because they're scoping different things in. This guide breaks the turnkey package into its six independent disciplines so you know exactly what you're buying.",
          },
          { type: "h2", text: "1. Stage build" },
          {
            type: "p",
            text: "Modular truss-deck stages, typically 600mm or 1000mm high, in widths from 6m × 4m up to 16m × 10m. Includes anti-slip carpet, edge skirting, riser steps, and a barrier rail. For events with 5+ presenters or any musical performance, the stage doubles in cost compared with a single-keynote setup because of the load rating and the additional deck.",
          },
          { type: "h2", text: "2. Sound system" },
          {
            type: "ul",
            items: [
              "Line-array main speakers — sized to room volume, not just attendee count.",
              "Subwoofers — essential for any music, optional for keynote-only.",
              "Stage monitors or in-ear monitor pack for presenters.",
              "Mixing console with at least 2 spare mic channels.",
              "Wireless mic kit — typically 4–8 channels (handheld + lavalier mix).",
              "Cabling, DI boxes, signal splitters and a dedicated audio engineer.",
            ],
          },
          { type: "h2", text: "3. Lighting" },
          {
            type: "p",
            text: "Stage wash (key + fill + back), front spots for presenter pickup, a follow-spot if there's a moving host, and audience-area wash so guests can navigate. For brand events, programmable LED par cans deliver colour scenes synced to content. A lighting designer (LD) cues the show — without one, even good rig hardware produces inconsistent results.",
          },
          { type: "h2", text: "4. LED video wall" },
          {
            type: "p",
            text: "A quality LED screen rent should always come with a dedicated technician — content switching, brightness adjustment and troubleshooting cannot be left to your venue crew. The screen itself is sized to room scale: 4m × 2.5m for breakout, 6m × 3.5m for conferences, 8m × 4.5m+ for galas and large weddings. Always include the seamless processor in the same line item; without it, you can't switch cleanly between slides, video and live camera feed.",
          },
          { type: "h2", text: "5. Power & infrastructure" },
          {
            type: "ul",
            items: [
              "Power distribution from the venue feed to every supplier station — sound, lighting, LED, video — on separate circuits.",
              "Backup generator sized for the full event load + 40% headroom.",
              "UPS protection for the LED processor and sound mixing console.",
              "Cable ramps, gaff tape, safe routing across guest walkways.",
              "Spare fuses, spare cables, spare connectors for every signal type.",
            ],
          },
          { type: "h2", text: "6. Content & show-call" },
          {
            type: "p",
            text: "The piece most suppliers leave out. A show-caller (often the event planner) drives the run-of-show — cueing AV inputs, slide changes, lighting state changes and music transitions. A serious package includes a comms (intercom) channel so all technicians hear the same cues at the same moment.",
          },
          { type: "h2", text: "Sample turnkey package pricing" },
          {
            type: "table",
            head: ["Event scale", "What's included", "All-in Sri Lanka price"],
            rows: [
              [
                "Boardroom AGM (100 guests)",
                "Small stage, 4-mic sound, basic lighting, 3m × 2m LED, 1 technician",
                "LKR 220,000 – 320,000",
              ],
              [
                "Hotel conference (300 guests)",
                "Mid stage, 8-mic sound, full rig, 6m × 3.5m P3 LED, 2 technicians, processor",
                "LKR 550,000 – 850,000",
              ],
              [
                "Product launch (500 guests, gala)",
                "Large stage, 12-mic sound, programmable lighting, 8m × 4.5m LED, 3 technicians, generator",
                "LKR 950,000 – 1,500,000",
              ],
              [
                "Outdoor brand activation (800+)",
                "Outdoor stage, rigged sound, programmable lighting, outdoor LED, generators, full crew",
                "LKR 1,600,000 – 3,200,000+",
              ],
            ],
          },
          { type: "h2", text: "How to read a turnkey AV quote" },
          {
            type: "ol",
            items: [
              "Demand line-item pricing for stage, sound, lighting, LED, power, and crew. A single 'AV package' figure hides what's missing.",
              "Check the technician count — sound, lighting and LED each need a dedicated operator. Anything less is a single-point-of-failure.",
              "Verify a generator is included for events above 300 guests or any outdoor build.",
              "Confirm rehearsal time is included in the day rate — not charged hourly on top.",
              "Check the dismantle window matches the venue's load-out rule.",
            ],
          },
        ]}
        faqs={[
          {
            q: "Is it cheaper to book one full-AV supplier or specialists for each discipline?",
            a: "For events under 500 guests, a single turnkey supplier is almost always cheaper and operationally smoother — coordination is internal to one team. Above 500 guests or for hybrid livestream events, specialists often deliver better quality at a 15–25% premium that's worth paying.",
          },
          {
            q: "Can I rent a stage, LED screen and sound separately in Sri Lanka?",
            a: "Yes — many event suppliers offer individual rentals. Just be aware you become the integrator: signal flow between systems, power circuit management, and on-the-day fault recovery are your responsibility unless you hire a separate AV producer.",
          },
          {
            q: "What's the minimum stage size for a corporate event?",
            a: "A 6m × 4m × 600mm stage handles a single presenter with a side podium and slide screen. For panel discussions add 2m of depth and 2m of width. For musical entertainment or dance, a 10m × 6m stage at 1000mm height is the practical minimum.",
          },
          {
            q: "Does a turnkey package include content design (slides, video)?",
            a: "Sometimes — most Sri Lankan AV suppliers offer it as a separate line item rather than bundling. Always clarify in the quote. Content design is typically LKR 25,000–150,000 depending on slide complexity, animation and video editing.",
          },
        ]}
        related={[
          { href: "/blog/corporate-event-av-checklist-sri-lanka", label: "Corporate event AV checklist for Sri Lanka" },
          { href: "/blog/led-screen-rent-for-weddings-sri-lanka", label: "LED screen rent for weddings — what couples need to know" },
          { href: "/blog/pixel-pitch-explained-led-screen-rent-sri-lanka", label: "Pixel pitch explained — choosing the right LED screen" },
        ]}
      />
    </PageShell>
  ),
});
