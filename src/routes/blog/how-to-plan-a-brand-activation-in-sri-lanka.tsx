import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-to-plan-a-brand-activation-in-sri-lanka";
const TITLE = "How to Plan a Brand Activation in Sri Lanka — Full Guide";
const DESC = "Step-by-step brand activation planning guide for Sri Lanka — objective setting, venue selection, permits, BTL teams, sampling logistics, budgets and ROI measurement.";

const PRIMARY_ANCHOR = {
  href: "/brand-activation-sri-lanka",
  regex: /(brand\s+activation|activation)/i,
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
        intro="A well-planned activation can drive 10× more brand recall than the same budget spent on TV. Here is how to plan one properly in Sri Lanka."
        blocks={[
  {
    "type": "h2",
    "text": "Step 1 — Define the objective"
  },
  {
    "type": "ul",
    "items": [
      "Trial and sampling — for new SKU launches",
      "Awareness and footfall — for store openings",
      "Lead capture — for service brands, telcos and financial services",
      "Loyalty and retention — for existing customer bases"
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
        "Premium shopping mall",
        "FMCG, fashion, electronics",
        "Rs 450,000 – 1,200,000"
      ],
      [
        "Mid-tier shopping mall",
        "Mid-mass categories",
        "Rs 200,000 – 500,000"
      ],
      [
        "Supermarket forecourt",
        "FMCG sampling and trial",
        "Rs 80,000 – 250,000"
      ],
      [
        "University or school campus",
        "Youth-focused brands, telcos, snacks",
        "Rs 50,000 – 180,000"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Step 3 — Permits and paperwork"
  },
  {
    "type": "ul",
    "items": [
      "Venue contract and event insurance",
      "Municipal council permits for outdoor activations",
      "Police notification for any crowd-pulling activation",
      "Regulatory approvals for product samples where applicable"
    ]
  },
  {
    "type": "h2",
    "text": "Step 4 — Team and logistics"
  },
  {
    "type": "ul",
    "items": [
      "Brand promoters at Rs 3,500–6,500 per day",
      "One supervisor per four promoters",
      "Branded uniforms, IDs and a paid training day",
      "Booth, backdrops, sound system and giveaways",
      "Daily transport, secure storage and restock runs"
    ]
  },
  {
    "type": "h2",
    "text": "Step 5 — Measure ROI"
  },
  {
    "type": "ul",
    "items": [
      "Samples distributed and conversion to QR scans or coupon redemptions",
      "Footfall counters at the activation zone",
      "Lead capture forms and WhatsApp opt-ins",
      "Sales lift in nearby outlets compared against a pre-activation baseline"
    ]
  }
]}
        faqs={[
  {
    "q": "What is a realistic activation budget?",
    "a": "From around Rs 250,000 for a single venue over one weekend, up to Rs 5M+ for national multi-city activations."
  },
  {
    "q": "How early should I start planning?",
    "a": "Allow a minimum of 4 weeks for venue booking, permits, team recruitment and training, plus creative production."
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
