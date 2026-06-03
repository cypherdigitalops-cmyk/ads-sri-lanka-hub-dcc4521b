import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-much-does-advertising-cost-in-sri-lanka-2025";
const TITLE = "How Much Does Advertising Cost in Sri Lanka? (2025)";
const DESC = "Real 2025 advertising costs in Sri Lanka — TV, radio, billboard, Facebook, Google, TikTok, SMS and WhatsApp pricing in LKR with realistic monthly budgets.";

const PRIMARY_ANCHOR = {
  href: "/advertising-rates",
  regex: /(advertising\\s+rates)/i,
  fallbackText: "advertising rates",
  ctaLabel: "Get a custom 2025 quote",
  ctaHeadline: "Want a tailored 2025 plan?",
  ctaService: "Advertising Cost Sri Lanka",
};

export const Route = createFileRoute("/blog/how-much-does-advertising-cost-in-sri-lanka-2025")({
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
        kicker="2025 Cost Guide"
        publishedISO="2025-03-01"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="A clear, no-fluff answer to the question every Sri Lankan business owner asks first: what does advertising actually cost in 2025?"
        blocks={[
  {
    "type": "p",
    "text": "Advertising in Sri Lanka can start from Rs 15,000/month on Meta Ads and reach Rs 5,000,000+ on a national TV + outdoor campaign. The honest answer depends on channel, geography and how aggressively you negotiate."
  },
  {
    "type": "h2",
    "text": "Typical monthly budgets by business size"
  },
  {
    "type": "table",
    "head": [
      "Business size",
      "Monthly ad spend",
      "Best channels"
    ],
    "rows": [
      [
        "Solo / startup",
        "Rs 15,000 – 50,000",
        "Meta, WhatsApp, Google Search"
      ],
      [
        "SME",
        "Rs 75,000 – 300,000",
        "Meta + Google + TikTok"
      ],
      [
        "Mid-market",
        "Rs 400,000 – 1.5M",
        "Add radio, outdoor, influencer"
      ],
      [
        "National brand",
        "Rs 2M – 25M+",
        "TV + 360° integrated"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Cost by channel (2025)"
  },
  {
    "type": "table",
    "head": [
      "Channel",
      "Entry cost",
      "Notes"
    ],
    "rows": [
      [
        "Facebook / Instagram",
        "Rs 15,000/mo",
        "CPM Rs 90–280"
      ],
      [
        "Google Search",
        "Rs 30,000/mo",
        "CPC Rs 25–180"
      ],
      [
        "TikTok Ads",
        "Rs 40,000/mo",
        "CPM Rs 70–220"
      ],
      [
        "Radio (30s prime)",
        "Rs 3,500–18,000/spot",
        "Hiru/Sirasa premium"
      ],
      [
        "TV (30s prime)",
        "Rs 25,000–180,000/spot",
        "Derana/Sirasa premium"
      ],
      [
        "Billboard Colombo",
        "Rs 90,000–350,000/mo",
        "By size + tier"
      ],
      [
        "SMS bulk",
        "Rs 0.50–1.20/SMS",
        "Min 5k volume"
      ],
      [
        "WhatsApp API",
        "Rs 1.80–4.50/msg",
        "Plus setup"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "What you should actually spend"
  },
  {
    "type": "ul",
    "items": [
      "Allocate 5–12% of revenue to marketing if you are growing",
      "Spend 70% on what works, 20% on testing, 10% on brand",
      "Never put 100% in a single channel — diversify"
    ]
  },
  {
    "type": "callout",
    "text": "Rate cards in Sri Lanka are almost always negotiable. Experienced agencies typically secure 15–35% off published rates."
  }
]}
        faqs={[
  {
    "q": "What is the minimum advertising budget in Sri Lanka?",
    "a": "You can start meaningful campaigns from Rs 15,000–25,000/month on Meta Ads or WhatsApp."
  },
  {
    "q": "Is TV still worth it in 2025?",
    "a": "Yes for mass brands targeting 25+ audiences nationally. Skip TV for niche or B2B."
  },
  {
    "q": "Which channel gives the best ROI?",
    "a": "For most SMEs: Google Search + Meta retargeting + WhatsApp follow-up."
  }
]}
        related={[
  {
    "href": "/advertising-rates",
    "label": "Advertising Rates Sri Lanka"
  },
  {
    "href": "/digital-marketing-sri-lanka",
    "label": "Digital Marketing"
  },
  {
    "href": "/billboard-advertising-cost-sri-lanka",
    "label": "Billboard Cost Sri Lanka"
  }
]}
      />
    </PageShell>
  ),
});
