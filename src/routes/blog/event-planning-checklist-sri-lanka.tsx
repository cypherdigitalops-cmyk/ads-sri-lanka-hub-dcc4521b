import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/event-planning-checklist-sri-lanka";
const TITLE = 'The Ultimate Event Planning Checklist for Sri Lanka (12 Weeks to Event Day)';
const DESC = 'A week-by-week event planning checklist for Sri Lankan corporate events and weddings — from 12 weeks out to day-of execution, covering brief, venue, permits, AV, catering and rehearsal.';

export const Route = createFileRoute("/blog/event-planning-checklist-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: 'event planning checklist sri lanka, event timeline sri lanka, event planning steps, event management' },
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
        publishedISO='2025-04-08'
        category={{ label: 'Planning' }}
        intro='A 12-week countdown for Sri Lankan event planners — corporate or wedding — broken into weekly task blocks so nothing slips through the cracks.'
        blocks={[{"type": "p", "text": "If managing this checklist in-house feels overwhelming, a professional event management Sri Lanka team takes ownership of every line item. This guide is built so you can either run it yourself or hand it cleanly to a planner without rebuilding it from scratch."}, {"type": "h2", "text": "12 weeks out — strategy"}, {"type": "ul", "items": ["Lock event purpose, date, guest count and budget ceiling.", "Shortlist 3 venues; visit 2.", "Identify must-have suppliers (photographer, AV lead, planner)."]}, {"type": "h2", "text": "8 weeks out — vendor lock-in"}, {"type": "ul", "items": ["Sign venue contract with deposit.", "Confirm AV, catering, décor, entertainment.", "Issue save-the-date / invite design brief."]}, {"type": "h2", "text": "4 weeks out — logistics"}, {"type": "ul", "items": ["Submit permits — CMC, police if applicable.", "Confirm seating plan, dietary requirements.", "Lock printed materials, signage, gift bags."]}, {"type": "h2", "text": "2 weeks out — content & rehearsal"}, {"type": "ul", "items": ["Approve all AV content (slides, video, monogram).", "Walk-through rehearsal with key suppliers.", "Issue final run-of-show to every vendor."]}, {"type": "h2", "text": "1 week out — final confirmations"}, {"type": "ul", "items": ["Reconfirm guest count with venue.", "Issue contact sheet with every supplier's day-of mobile.", "Brief the on-site lead on emergency protocols."]}, {"type": "h2", "text": "Day before — site setup"}, {"type": "ul", "items": ["AV install begins early morning.", "Walk the venue with the planner + venue manager.", "Test every microphone, every input, every cue."]}, {"type": "h2", "text": "Event day — execution"}, {"type": "ol", "items": ["Arrive 2 hours before guests.", "Run a final sound check with the actual presenter/MC.", "Brief the host on emergency content / contingency cues.", "Photograph the room before guests arrive.", "Hand the run-of-show to the show-caller, then stay out of the technical path."]}]}
        faqs={[{"q": "How many weeks before should I start planning a Sri Lankan wedding?", "a": "Minimum 9 months for any wedding over 200 guests; 12–14 months for peak-season Saturdays at premium venues."}, {"q": "Can a wedding planner take over halfway through?", "a": "Yes — most planners offer partial planning packages that pick up at 3–4 months out. Quality is usually identical if the existing plan is documented."}, {"q": "What's the most-skipped item on event planning checklists?", "a": "The day-before walk-through with all suppliers in the room together. Skipping it is the single biggest predictor of day-of problems."}]}
        related={[{"href": "/blog/event-permits-sri-lanka", "label": "Event permits in Sri Lanka — CMC, police, fire safety"}, {"href": "/blog/corporate-event-management-sri-lanka-guide", "label": "Corporate event management — complete planning guide"}, {"href": "/blog/how-to-choose-event-management-company-sri-lanka", "label": "How to choose an event management company"}]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
