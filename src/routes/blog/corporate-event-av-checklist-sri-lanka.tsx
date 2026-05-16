import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/corporate-event-av-checklist-sri-lanka";
const TITLE = "Corporate Event AV Checklist for Sri Lanka: Sound, Lighting & LED Screen Rent";
const DESC =
  "Complete pre-event AV checklist for Sri Lankan corporate events — sound system, lighting, LED screen rent, processor, backups, content review and venue coordination, 4 weeks to day-of.";

export const Route = createFileRoute("/blog/corporate-event-av-checklist-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "corporate event av checklist sri lanka, event av planning, conference av sri lanka, led screen rent, event sound and lighting sri lanka",
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
        kicker="Planner's Checklist"
        publishedISO="2025-03-04"
        category={{ label: "Corporate AV", href: "/event-management-sri-lanka" }}
        intro="A printable, vendor-tested AV checklist for Sri Lankan corporate events — conferences, AGMs, product launches, awards nights. Built from real run-of-show notes, organised by how many weeks out you should be doing each task."
        blocks={[
          {
            type: "p",
            text: "Corporate event AV in Sri Lanka fails at the same three points every time: incompatible content formats, late venue site visits, and one supplier assuming another is handling power or rigging. This checklist solves all three by sequencing every decision to its correct lead time.",
          },
          { type: "h2", text: "4 weeks out — strategic decisions" },
          {
            type: "ul",
            items: [
              "Confirm event format: keynote-only, panel, hybrid (livestream), gala dinner, multi-track conference.",
              "Lock the venue and request the technical pack: ceiling height, rigging points, in-house power (single or three phase), in-house AV team contact.",
              "Decide screen format: single central LED, dual flanking screens, projector in a darkened ballroom, or hybrid (LED main + monitor confidence screens).",
              "Set a content design lead time — slides, videos, lower-thirds, intro reel, animated logo. Two weeks minimum, three for video-heavy events.",
              "Identify backup power need — for events 200+ attendees, plan a generator regardless of venue capability.",
            ],
          },
          { type: "h2", text: "3 weeks out — vendor lock-in" },
          {
            type: "ol",
            items: [
              "Confirm LED supplier with pixel pitch, panel count, processor model and dedicated technician.",
              "Confirm sound supplier with mic count (handheld, lavalier, headset), in-ear monitors for presenters, mixing console.",
              "Confirm lighting designer with key/fill rig, follow spots if needed, stage wash colour temperature matched to LED panels (very common mismatch).",
              "Schedule the joint site visit — all three suppliers + venue AV manager + event planner in one room with the floor plan.",
              "Issue a single 'AV master document' to every supplier so they all work from the same plan.",
            ],
          },
          { type: "h2", text: "2 weeks out — content & technical review" },
          {
            type: "ul",
            items: [
              "Lock the slide template at the correct aspect ratio for the LED wall (NEVER assume 16:9 — confirm pixel resolution from the supplier).",
              "Test every external video file plays cleanly from the venue's playback laptop, not the designer's.",
              "Confirm the live camera feed format with the videographer (HDMI vs SDI vs NDI — each needs a different processor input).",
              "Confirm microphone count vs presenter list; identify any non-presenters who'll be miked (Q&A, panelists).",
              "Issue a draft run-of-show with cues for AV — slide changes, video plays, lighting shifts, music in/out.",
            ],
          },
          { type: "h2", text: "1 week out — operational alignment" },
          {
            type: "ol",
            items: [
              "Walk-through rehearsal with at least one presenter on-stage with mic, slides on the LED, lighting at show level.",
              "Test transitions: slide → video → live feed → slide. This is where 80% of show-day faults appear.",
              "Issue final printed run-of-show to AV team — they should be marking cue points the day before the event.",
              "Confirm load-in/load-out windows in writing with the venue (every venue has a different rule).",
              "Brief the AV technician on emergency content — what to display if a presenter's slides fail mid-keynote.",
            ],
          },
          { type: "h2", text: "Day of — the actual checklist" },
          {
            type: "h3",
            text: "Sound" },
          {
            type: "ul",
            items: [
              "Soundcheck every microphone with the actual presenter holding it — not a sound engineer.",
              "Set in-ear monitor levels for the host and panel; comfort matters during the show.",
              "Test playback music (intros, breaks) at house level — not just monitor level.",
              "Test feedback risk in the actual presenter walking pattern.",
            ],
          },
          { type: "h3", text: "Lighting" },
          {
            type: "ul",
            items: [
              "Confirm key light colour temperature matches LED panel (typically 5,600K daylight balance).",
              "Test follow-spot pickup at each entry point.",
              "Run the lighting cue sheet against the run-of-show in full.",
              "Set audience-area level so guests can still take notes between sessions.",
            ],
          },
          { type: "h3", text: "LED display" },
          {
            type: "p",
            text: "Confirm pixel pitch, brightness and content format with your LED screen rent provider at least two weeks before the event — and on the day, test every input source, every slide template and every video file through the actual processor and panel, not via a laptop preview. Pixel pitch you booked is too late to change; content rendering at the wrong aspect ratio is fixable on the morning if caught early.",
          },
          { type: "h2", text: "Backups that have saved real events" },
          {
            type: "ul",
            items: [
              "Two copies of every presenter's slides on two separate USB drives.",
              "PDF export of every slide deck as last-resort fallback.",
              "Backup wireless microphone (one extra per 4 in use).",
              "Spare LED cabinet on-site (every reputable supplier provides this).",
              "Backup video playback laptop already running, paused on the next file.",
            ],
          },
        ]}
        faqs={[
          {
            q: "How many weeks ahead should I book AV for a corporate event in Sri Lanka?",
            a: "Four weeks minimum for events under 250 guests, six weeks for 250–500, eight weeks for 500+ or hybrid livestream events. Peak corporate seasons (March–April, September–November) book out fastest.",
          },
          {
            q: "Should the AV team handle content design or just playback?",
            a: "Most AV suppliers in Sri Lanka offer content design as a separate service, but the planner usually has more control by hiring a dedicated content designer who collaborates with the AV team. Either way, design must be locked at the AV team's confirmed resolution and aspect ratio.",
          },
          {
            q: "What's the most common AV failure at Sri Lankan corporate events?",
            a: "Aspect ratio mismatch between presenter slides and the LED wall — slides built in 16:9 on a 16:9.3 LED wall stretch slightly, and the cumulative effect is visible to every attendee. Fix: confirm exact resolution from the LED supplier and design the master template to match.",
          },
          {
            q: "Do I need a separate sound engineer if my venue has in-house AV?",
            a: "For events with more than 4 microphones, multiple presenters or any music playback, a dedicated sound engineer pays for itself in cleaner audio and faster recovery from any issue. Hotel in-house teams are usually generalists who also have other rooms to attend to.",
          },
        ]}
        related={[{"href":"/blog/event-stage-setup-av-package-sri-lanka","label":"What's in a full event stage & AV package in Sri Lanka?"},{"href":"/blog/led-screen-rent-vs-projector-events-sri-lanka","label":"LED screen rent vs projector hire — which wins?"},{"href":"/blog/how-much-does-led-screen-rent-cost-sri-lanka","label":"How much does LED screen rent cost in Sri Lanka?"},{"href":"/event-management-sri-lanka","label":"Event Management Sri Lanka"},{"href":"/corporate-event-management-sri-lanka","label":"Corporate Event Management"},{"href":"/led-screen-rental-sri-lanka","label":"LED Screen Rental"},{"href":"/sound-system-rental-sri-lanka","label":"Sound System Rental"},{"href":"/stage-setup-sri-lanka","label":"Stage Setup"}]}
      />
    </PageShell>
  ),
});
