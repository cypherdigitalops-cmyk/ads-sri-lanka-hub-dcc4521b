import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-to-plan-a-brand-activation-in-sri-lanka";
const TITLE = "How to Plan a Brand Activation in Sri Lanka — Full Guide";
const DESC = "Step-by-step brand activation planning guide for Sri Lanka — venue selection, permits, BTL team, sampling logistics, budgets and ROI measurement.";

const PRIMARY_ANCHOR = {
  href: "/brand-activation-sri-lanka",
  regex: /(brand\\s+activation|activation)/i,
  fallbackText: "brand activation",
  ctaLabel: "Plan my activation",
  ctaHeadline: "Want end-to-end activation management?",
  ctaService: "Brand Activation Sri Lanka",
};

export const Route = createFileRoute("/blog/how-to-plan-a-brand-activation-in-sri-lanka")({
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
        kicker="BTL Activation Guide"
        publishedISO="2025-03-28"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="A well-planned activation can drive 10× more brand recall than the same budget spent on TV. Here is how to plan one in Sri Lanka."
        blocks={[
  {
    "type": "h2",
    "text": "Step 1 — Define the objective"
  },
  {
    "type": "ul",
    "items": [
      "Trial / sampling — for new SKU launches",
      "Awareness / footfall — for store openings",
      "Lead capture — for service brands, telcos, banks",
      "Loyalty — for existing customers"
    ]
  },
  {
    "type": "h2",
    "text": "Step 2 — Pick the venue"
  },
  {
    "type": "table",
    "head": [
      "Venue type",
      "Best for",
      "Indicative cost (3-day weekend)"
    ],
    "rows": [
      [
        "Premium mall (One Galle Face, K-Zone)",
        "FMCG, fashion, electronics",
        "Rs 450,000 – 1,200,000"
      ],
      [
        "Standard mall (Majestic City, Liberty Plaza)",
        "Mid-mass",
        "Rs 200,000 – 500,000"
      ],
      [
        "Supermarket forecourt (Cargills, Keells)",
        "FMCG sampling",
        "Rs 80,000 – 250,000"
      ],
      [
        "University / school",
        "Youth, telcos, snacks",
        "Rs 50,000 – 180,000"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Step 3 — Permits & paperwork"
  },
  {
    "type": "ul",
    "items": [
      "Venue contract + insurance",
      "CMC permits for outdoor sites",
      "Police notification for crowd-pulling activations",
      "BOI / Ministry approvals for product samples"
    ]
  },
  {
    "type": "h2",
    "text": "Step 4 — Team & logistics"
  },
  {
    "type": "ul",
    "items": [
      "Brand promoters: Rs 3,500–6,500/day per promoter",
      "Supervisor (1 per 4 promoters)",
      "Branded uniforms, ID, training day",
      "Branded booth, backdrops, sound, giveaways",
      "Transport, storage, daily restock"
    ]
  },
  {
    "type": "h2",
    "text": "Step 5 — Measure ROI"
  },
  {
    "type": "ul",
    "items": [
      "Sample distribution count + conversion to QR scan/coupon redemption",
      "Footfall counters",
      "Lead capture (forms, WhatsApp opt-ins)",
      "Sales lift in nearby outlets (compare vs baseline)"
    ]
  }
]}
        faqs={[
  {
    "q": "What's a typical activation budget?",
    "a": "Rs 250,000 (one venue, one weekend) up to Rs 5M+ for national multi-city activations."
  },
  {
    "q": "How early should I plan?",
    "a": "Minimum 4 weeks for venue, permits, team training and creative production."
  }
]}
        related={[
  {
    "href": "/brand-activation-sri-lanka",
    "label": "Brand Activation Sri Lanka"
  },
  {
    "href": "/mall-activation-sri-lanka",
    "label": "Mall Activation"
  },
  {
    "href": "/roadshow-marketing-sri-lanka",
    "label": "Roadshow Marketing"
  }
]}
      />
    </PageShell>
  ),
});
