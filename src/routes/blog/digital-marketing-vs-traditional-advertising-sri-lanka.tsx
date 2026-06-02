import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/digital-marketing-vs-traditional-advertising-sri-lanka";
const TITLE = "Digital vs Traditional Advertising in Sri Lanka — Which is Right for You?";
const DESC = "Side-by-side comparison of digital and traditional advertising in Sri Lanka — costs, reach, targeting, measurement and which channels suit which business.";

const PRIMARY_ANCHOR = {
  href: "/",
  regex: /(advertising\s+in\s+Sri\s+Lanka)/i,
  fallbackText: "advertising in Sri Lanka",
  ctaLabel: "Get free advice from our team",
  ctaHeadline: "Planning a campaign? Get free, no-obligation advice",
  ctaService: "Advertising in Sri Lanka",
};

export const Route = createFileRoute(`/blog/digital-marketing-vs-traditional-advertising-sri-lanka` as "/blog/digital-marketing-vs-traditional-advertising-sri-lanka")({
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
        kicker="Strategy"
        publishedISO="2026-02-05"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Should you spend on TV or on Meta? On a billboard or on Google? The honest answer is: it depends. Here is the framework Sri Lankan brands use to decide."
        blocks={[
          { type: "h2", text: "The fundamental difference" }, { type: "p", text: "Traditional advertising (TV, radio, press, outdoor) buys attention at scale. Digital advertising (Google, Meta, TikTok, SEO) buys targeted intent. Most winning campaigns in Sri Lanka use both." },
          { type: "h2", text: "Head-to-head" },
          { type: "table", head: ["Dimension", "Traditional", "Digital"], rows: [["Entry budget", "Rs 200,000+", "Rs 25,000+"], ["Audience targeting", "Broad demographic", "Granular (interest, behaviour, geo)"], ["Measurement", "GRP, recall surveys", "Real-time ROAS, conversions"], ["Creative shelf life", "Long (months)", "Short (1–4 weeks)"], ["Trust factor", "Very high — perceived prestige", "Variable"], ["Best for", "Mass brand awareness", "Lead-gen, direct response, retargeting"]] },
          { type: "h2", text: "Which suits which business?" },
          { type: "ul", items: ["FMCG launching nationally — TV + radio + billboards + Meta", "Local restaurant — Meta Ads + Google Maps + Instagram", "B2B services — LinkedIn + Google Search + email", "Real estate — Facebook + YouTube + Daily Mirror + premium billboards", "E-commerce — Meta + TikTok + Google Shopping + SEO"] },
          { type: "h2", text: "Sri Lankan case examples" }, { type: "p", text: "Telco launches still need TV for the credibility halo. New D2C brands grow faster on Meta + TikTok. Premium real-estate combines billboards with LinkedIn retargeting. There is no single right answer — there is a right MIX." },
          { type: "callout", text: "Rule of thumb for 2026: spend 60–70% of your budget on the most measurable channel that works, and 30–40% on brand-building. Pure-performance campaigns plateau without brand support." },
        ]}
        faqs={[
          { q: "Is digital cheaper than traditional advertising in Sri Lanka?", a: "Per impression, often yes. Per qualified conversion, the gap is much smaller because digital intent is sharper but inventory is bid-up." },
          { q: "Can I run only digital and skip TV in Sri Lanka?", a: "Yes for many SMEs and D2C brands. National FMCG and telco still need TV for trust and unaided recall." },
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
