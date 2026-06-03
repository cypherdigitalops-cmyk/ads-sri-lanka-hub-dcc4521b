import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-to-run-tiktok-ads-in-sri-lanka-step-by-step";
const TITLE = "How to Run TikTok Ads in Sri Lanka — Step-by-Step (2025)";
const DESC = "Complete TikTok Ads setup guide for Sri Lanka — account creation, pixel install, audience targeting, creative specs, budgets, bidding and optimisation cycle.";

const PRIMARY_ANCHOR = {
  href: "/tiktok-marketing-sri-lanka",
  regex: /(tiktok)/i,
  fallbackText: "TikTok",
  ctaLabel: "Launch my TikTok ads",
  ctaHeadline: "Want experts to run your TikTok campaign?",
  ctaService: "TikTok Ads Sri Lanka",
};

export const Route = createFileRoute("/blog/how-to-run-tiktok-ads-in-sri-lanka-step-by-step")({
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
        kicker="TikTok Ads Guide"
        publishedISO="2025-04-25"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Short-form video is now the fastest-growing ad platform in Sri Lanka. Here is exactly how to launch a profitable TikTok campaign in under an hour."
        blocks={[
  {
    "type": "h2",
    "text": "Step 1 — Set up the ad account"
  },
  {
    "type": "ul",
    "items": [
      "Sign up via the TikTok for Business platform",
      "Select Sri Lanka as the country; currency will default to USD as LKR is not yet supported",
      "Verify the business with a registration number and a bank statement"
    ]
  },
  {
    "type": "h2",
    "text": "Step 2 — Install the pixel"
  },
  {
    "type": "ul",
    "items": [
      "Generate the pixel in Events Manager",
      "Install via a tag manager or directly in the site head",
      "Verify standard events: PageView, AddToCart, Lead and Purchase fire correctly"
    ]
  },
  {
    "type": "h2",
    "text": "Step 3 — Build native creative"
  },
  {
    "type": "ul",
    "items": [
      "Shoot 9:16 vertical, 9–30 seconds long",
      "Hook the viewer in the first 1.5 seconds with a face and bold on-screen text",
      "Keep it native and UGC-style — polished TVC re-cuts underperform here",
      "Caption in Sinhala or Tamil for local audience segments",
      "Always test 3–5 creatives per ad group"
    ]
  },
  {
    "type": "h2",
    "text": "Step 4 — Targeting and budget"
  },
  {
    "type": "table",
    "head": [
      "Setting",
      "Recommendation"
    ],
    "rows": [
      [
        "Location",
        "Sri Lanka, or narrow to Western Province for premium tests"
      ],
      [
        "Age",
        "18–34 for broad reach; 25–44 for premium offers"
      ],
      [
        "Daily budget",
        "Minimum around Rs 4,000/day per ad group"
      ],
      [
        "Bidding strategy",
        "Lowest cost for the first 5 days, then cost cap once you have data"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Step 5 — Optimise continuously"
  },
  {
    "type": "ul",
    "items": [
      "Pause creatives below 0.8% CTR after roughly Rs 8,000 spend",
      "Scale winning creatives by 20% every 2 days",
      "Refresh creative every 10–14 days to fight ad fatigue"
    ]
  }
]}
        faqs={[
  {
    "q": "What is the minimum TikTok ads budget in Sri Lanka?",
    "a": "Rs 40,000/month produces meaningful learning data. To meaningfully scale a winning creative, plan for Rs 100,000+/month."
  },
  {
    "q": "Do TikTok ads work for B2B in Sri Lanka?",
    "a": "Limited. The platform is strongest for B2C — retail, food, fashion, beauty and visually engaging services."
  }
]}
        related={[
  {
    "href": "/tiktok-marketing-sri-lanka",
    "label": "TikTok Marketing"
  },
  {
    "href": "/facebook-marketing-sri-lanka",
    "label": "Facebook Marketing"
  },
  {
    "href": "/influencer-marketing-sri-lanka",
    "label": "Influencer Marketing"
  }
]}
      />
    </PageShell>
  ),
});
