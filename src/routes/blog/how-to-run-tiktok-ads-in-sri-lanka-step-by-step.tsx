import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-to-run-tiktok-ads-in-sri-lanka-step-by-step";
const TITLE = "How to Run TikTok Ads in Sri Lanka — Step-by-Step (2025)";
const DESC = "Complete TikTok Ads setup guide for Sri Lanka — account creation, pixel install, audience targeting, creative specs, budgets and optimisation.";

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
        intro="TikTok is now the fastest-growing ad platform in Sri Lanka. Here is exactly how to launch a profitable campaign in under an hour."
        blocks={[
  {
    "type": "h2",
    "text": "Step 1 — Set up the ad account"
  },
  {
    "type": "ul",
    "items": [
      "Sign up at ads.tiktok.com (TikTok for Business)",
      "Select country: Sri Lanka, currency: USD (LKR not yet supported)",
      "Verify business with BR number + bank statement"
    ]
  },
  {
    "type": "h2",
    "text": "Step 2 — Install the TikTok Pixel"
  },
  {
    "type": "ul",
    "items": [
      "Generate pixel in Events Manager",
      "Install via Google Tag Manager or direct script",
      "Verify events: PageView, AddToCart, Purchase, Lead"
    ]
  },
  {
    "type": "h2",
    "text": "Step 3 — Build creative"
  },
  {
    "type": "ul",
    "items": [
      "9:16 vertical, 9–30 seconds",
      "Hook in first 1.5 seconds — face + bold text",
      "Native, ugc-style — avoid polished TVCs",
      "Captions in Sinhala or Tamil for local audiences",
      "Test 3–5 creatives per ad group"
    ]
  },
  {
    "type": "h2",
    "text": "Step 4 — Targeting & budget"
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
        "Sri Lanka (or Western Province only)"
      ],
      [
        "Age",
        "18–34 broad, 25–44 for premium"
      ],
      [
        "Budget",
        "Min Rs 4,000/day per ad group"
      ],
      [
        "Bidding",
        "Lowest cost first 5 days, then cost cap"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Step 5 — Optimise"
  },
  {
    "type": "ul",
    "items": [
      "Kill creatives below 0.8% CTR after Rs 8,000 spend",
      "Scale winners 20% every 2 days",
      "Refresh creative every 10–14 days to fight fatigue"
    ]
  }
]}
        faqs={[
  {
    "q": "What's the minimum TikTok ads budget in Sri Lanka?",
    "a": "Rs 40,000/month gives meaningful data; Rs 100,000+ to scale a winning creative."
  },
  {
    "q": "Do TikTok ads work for B2B in Sri Lanka?",
    "a": "Limited — TikTok is best for B2C retail, food, fashion, beauty, services with visual appeal."
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
