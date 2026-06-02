import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/best-advertising-agencies-sri-lanka-2026";
const TITLE = "Best Advertising Agencies in Sri Lanka 2026 — How to Choose the Right One";
const DESC = "What to look for in a Sri Lankan advertising agency in 2026 — types of agencies, how to brief them, red flags to avoid and how to evaluate proposals.";

const PRIMARY_ANCHOR = {
  href: "/",
  regex: /(advertising\s+in\s+Sri\s+Lanka)/i,
  fallbackText: "advertising in Sri Lanka",
  ctaLabel: "Get free advice from our team",
  ctaHeadline: "Planning a campaign? Get free, no-obligation advice",
  ctaService: "Advertising in Sri Lanka",
};

export const Route = createFileRoute("/blog/best-advertising-agencies-sri-lanka-2026")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
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
        kicker="Agency Selection"
        publishedISO="2026-01-20"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Choosing the right advertising agency in Sri Lanka can make or break your year. Here is the framework we wish every brand used."
        blocks={[
          { type: "h2", text: "Types of advertising agencies in Sri Lanka" },
          { type: "ul", items: ["Full-service agencies — strategy, creative, media and digital under one roof", "Creative boutiques — concept and production only", "Media buying houses — TV, radio, press and outdoor placement specialists", "Digital / performance agencies — Google, Meta, SEO and analytics", "Activation agencies — BTL, sampling, events and mall promotions"] },
          { type: "h2", text: "What to look for in a 2026 agency" },
          { type: "ol", items: ["Verifiable case studies with measurable outcomes — not just pretty creative", "A senior person actually on YOUR account, not just at the pitch", "Transparent media commissions (10–15% is standard; >20% is a red flag)", "Native Sinhala and Tamil creative capability in-house", "Clear reporting cadence — weekly for digital, monthly for ATL"] },
          { type: "h2", text: "How to brief an agency" }, { type: "p", text: "Give them: the business goal, the audience, the budget range, the timing, the deliverables, the constraints and the success metric. A good brief saves 4 weeks of misalignment." },
          { type: "h2", text: "Red flags" }, { type: "ul", items: ["Guaranteed first-page rankings or guaranteed sales", "Hidden mark-ups on print, production or media", "Junior team after a senior pitch", "Refusal to share access to ad accounts you pay for"] },
          { type: "h2", text: "Why brands work with us" }, { type: "p", text: "Advertising in Sri Lanka is one of the few teams that covers ATL, BTL and digital under a single accountable team — no finger-pointing between vendors, no inflated media commissions, and senior strategists on every account." },
        ]}
        faqs={[
          { q: "How much do advertising agencies charge in Sri Lanka?", a: "Retainers range from Rs 50,000 to Rs 500,000+ per month depending on scope. Project fees start around Rs 100,000." },
          { q: "Should I pick a digital-only or full-service agency?", a: "If 100% of your audience is online, digital-only works. For most Sri Lankan brands a full-service team prevents fragmentation." },
        ]}
        related={[
          { href: "/atl-advertising-sri-lanka", label: "ATL Advertising Sri Lanka" },
          { href: "/digital-marketing-sri-lanka", label: "Digital Marketing Sri Lanka" },
          { href: "/outdoor-advertising-sri-lanka", label: "Outdoor Advertising Sri Lanka" },
        ]}
      />
    </PageShell>
  ),
});
