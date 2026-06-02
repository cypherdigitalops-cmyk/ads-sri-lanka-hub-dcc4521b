import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/billboard-advertising-sri-lanka";
const TITLE = "Billboard Advertising in Sri Lanka — Locations, Sizes, Costs & Tips";
const DESC = "Everything you need to book a billboard in Sri Lanka in 2026 — top locations, standard sizes, permit process, production tips and LKR rate ranges.";

const PRIMARY_ANCHOR = {
  href: "/",
  regex: /(advertising\s+in\s+Sri\s+Lanka)/i,
  fallbackText: "advertising in Sri Lanka",
  ctaLabel: "Get free advice from our team",
  ctaHeadline: "Planning a campaign? Get free, no-obligation advice",
  ctaService: "Advertising in Sri Lanka",
};

export const Route = createFileRoute(`/blog/billboard-advertising-sri-lanka` as "/blog/billboard-advertising-sri-lanka")({
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
        kicker="Outdoor Advertising"
        publishedISO="2026-01-25"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Billboards still dominate brand recall in Sri Lanka. Here is exactly how to book one — from picking the right hoarding to printing the flex that actually survives monsoon season."
        blocks={[
          { type: "h2", text: "Top billboard locations in Sri Lanka" },
          { type: "ul", items: ["Galle Road (Kollupitiya → Bambalapitiya → Wellawatte)", "Liberty Plaza & Town Hall — premium CBD eyeballs", "Nugegoda junction & Maharagama — Western suburb retail", "Kandy Road through Kiribathgoda, Yakkala, Nittambuwa", "Kandy city — Peradeniya Road & Dalada Veediya", "Galle Fort entrance & Karapitiya", "Jaffna — Hospital Road & Kandy Road junction"] },
          { type: "h2", text: "Standard billboard sizes" },
          { type: "table", head: ["Type", "Size (ft)", "Best for"], rows: [["Standard hoarding", "20 × 10", "Brand campaigns"], ["Large format", "30 × 15 / 40 × 20", "Flagship sites"], ["Spectacular / unipole", "Custom", "Highway and expressway"], ["LED screen / DOOH", "Various", "Dynamic content, day-parted creative"]] },
          { type: "h2", text: "Material types" },
          { type: "ul", items: ["Flex / vinyl (most common, 1–6 month durability)", "Mesh (high-wind sites)", "Backlit panels (night visibility)", "DOOH / LED panels (no printing, programmatic)"] },
          { type: "h2", text: "Permit process" }, { type: "p", text: "Permits are issued by the relevant Pradeshiya Sabha, Urban Council or Municipal Council. Most premium hoardings are pre-permitted by the media owner. Allow 7–14 days from artwork sign-off to live install." },
          { type: "h2", text: "Indicative 2026 costs" },
          { type: "table", head: ["Tier", "Size", "Per month (LKR)"], rows: [["Premium CBD", "20×10", "180,000 – 350,000"], ["Suburban high street", "15×8", "90,000 – 180,000"], ["Outstation main road", "12×6", "35,000 – 90,000"]] },
          { type: "h2", text: "Design tips that increase recall" },
          { type: "ul", items: ["6 words or fewer on the main headline", "One clear visual focal point — no clutter", "Brand logo bottom-right, large", "High contrast colours that read at 60 km/h", "Always test the artwork at thumbnail size first"] },
        ]}
        faqs={[
          { q: "How long does it take to put up a billboard?", a: "7–14 days from artwork approval — including printing, permits and installation." },
          { q: "Can I book a billboard for less than a month?", a: "Some media owners allow 2-week minimums but the per-day rate is higher. Monthly bookings are standard." },
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
