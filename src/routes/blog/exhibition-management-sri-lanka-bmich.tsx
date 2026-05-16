import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/exhibition-management-sri-lanka-bmich";
const TITLE = 'Exhibition & Trade Show Management in Sri Lanka: BMICH, EDEX & Beyond';
const DESC = 'Booth design, build timelines, BMICH regulations, power requirements, staffing and lead capture — exhibition management in Sri Lanka, from EDEX to industry trade shows.';

export const Route = createFileRoute("/blog/exhibition-management-sri-lanka-bmich")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: 'exhibition management sri lanka, bmich exhibition, trade show sri lanka, edex sri lanka, event management' },
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
        kicker='Exhibitions'
        publishedISO='2025-04-22'
        category={{ label: 'Exhibitions' }}
        intro='Sri Lankan exhibitions and trade shows turn on three things — booth visibility, booth functionality and staff readiness. Everything else is decoration.'
        blocks={[{"type": "p", "text": "Exhibitions require the same end-to-end event management Sri Lanka disciplines as any other large event — plus booth fabrication expertise. The difference is that you're competing with 50+ other exhibitors for the same foot traffic, so booth design and engagement strategy decide your ROI."}, {"type": "h2", "text": "BMICH exhibition rules that catch first-timers"}, {"type": "ul", "items": ["All octanorm builds require BMICH-approved contractors — outside fabricators need pre-approval.", "Power is metered separately and quoted per kW; under-quote your booth power and you're at the BMICH electrician's mercy on day one.", "Rigging from ceiling trusses needs sign-off 5 working days before move-in.", "Move-in windows are strictly timed — late arrival costs labour penalties."]}, {"type": "h2", "text": "Booth design priorities"}, {"type": "ol", "items": ["Visibility from 15m down the aisle — branding above eye-level.", "Clear entry point — open frontage, not booths people have to step into.", "Demo area separated from conversation area.", "Lead capture station with a fast tablet or QR + form."]}, {"type": "h2", "text": "Staffing the booth"}, {"type": "p", "text": "Two-shift staffing for any show longer than 4 hours. Brief every staff member on the 30-second product pitch, lead-capture process and key competitor differentiators. Bored staff on phones is the #1 killer of exhibition ROI in Sri Lanka."}]}
        faqs={[{"q": "What's the cost of a basic 9 sqm BMICH booth?", "a": "Booth space LKR 90,000–180,000, basic octanorm LKR 60,000–120,000, branding LKR 40,000–100,000, staffing/leads LKR 30,000–80,000 — roughly LKR 250,000 all-in for a functional baseline."}, {"q": "How early should I commit to a major trade show like EDEX?", "a": "12–14 weeks for prime booth locations. Late commitments end up in low-traffic corners."}]}
        related={[{"href":"/blog/event-management-cost-sri-lanka","label":"Event management cost in Sri Lanka"},{"href":"/blog/stage-setup-av-production-sri-lanka","label":"Stage setup & AV production"},{"href":"/exhibition-management-sri-lanka","label":"Exhibition management — service page"},{"href":"/event-management-sri-lanka","label":"Event Management Sri Lanka"},{"href":"/stage-setup-sri-lanka","label":"Stage Setup"},{"href":"/led-screen-rental-sri-lanka","label":"LED Screen Rental"}]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
