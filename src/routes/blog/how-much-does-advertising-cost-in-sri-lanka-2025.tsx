import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-much-does-advertising-cost-in-sri-lanka-2025";
const TITLE = "How Much Does Advertising Cost in Sri Lanka? (2025)";
const DESC = "Realistic 2025 advertising cost benchmarks in Sri Lanka — TV, radio, billboard, Facebook, Google, TikTok, SMS and WhatsApp pricing in LKR with sensible monthly budgets by business size.";

const PRIMARY_ANCHOR = {
  href: "/advertising-rates",
  regex: /(advertising\s+rates)/i,
  fallbackText: "advertising rates",
  ctaLabel: "Get a custom 2025 quote",
  ctaHeadline: "Want a tailored 2025 advertising plan?",
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
        intro="A clear, no-fluff answer to the question every Sri Lankan business owner asks first: what does advertising actually cost in 2025 — and how much should you spend?"
        blocks={[
  {
    "type": "p",
    "text": "Advertising in Sri Lanka can start from Rs 15,000/month on social ads and reach Rs 5,000,000+ on a national TV + outdoor campaign. The honest answer always depends on three things: channel mix, geographic reach, and how aggressively rates are negotiated."
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
      "Recommended channel mix"
    ],
    "rows": [
      [
        "Solo / startup",
        "Rs 15,000 – 50,000",
        "Social ads, WhatsApp, search"
      ],
      [
        "Small / SME",
        "Rs 75,000 – 300,000",
        "Search + social + light video"
      ],
      [
        "Mid-market",
        "Rs 400,000 – 1.5M",
        "Add radio, outdoor and influencer layers"
      ],
      [
        "National brand",
        "Rs 2M – 25M+",
        "Integrated TV, radio, digital, outdoor, BTL"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Indicative cost by channel (2025)"
  },
  {
    "type": "table",
    "head": [
      "Channel",
      "Entry cost",
      "Pricing notes"
    ],
    "rows": [
      [
        "Social ads (Meta family)",
        "Rs 15,000/mo",
        "CPM typically Rs 90–280"
      ],
      [
        "Paid search",
        "Rs 30,000/mo",
        "CPC typically Rs 25–180"
      ],
      [
        "Short-form video ads",
        "Rs 40,000/mo",
        "CPM typically Rs 70–220"
      ],
      [
        "Radio (30s prime spot)",
        "Rs 3,500–18,000 per spot",
        "Premium stations sit at the top of the range"
      ],
      [
        "TV (30s prime spot)",
        "Rs 25,000–180,000 per spot",
        "Top private channels sit at the top of the range"
      ],
      [
        "Billboards in Colombo",
        "Rs 90,000–350,000/mo",
        "Size and visibility tier drive the price"
      ],
      [
        "Bulk SMS",
        "Rs 0.50–1.20 per message",
        "Volume minimums apply"
      ],
      [
        "WhatsApp Business API",
        "Rs 1.80–4.50 per message",
        "Plus one-off setup"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "How much you should actually spend"
  },
  {
    "type": "ul",
    "items": [
      "Allocate 5–12% of revenue to marketing if you are actively growing",
      "Split spend roughly 70% on proven channels, 20% on testing, 10% on long-term brand",
      "Never put 100% of budget in a single channel — diversify across at least two formats"
    ]
  },
  {
    "type": "callout",
    "text": "Published rate cards in Sri Lanka are almost always negotiable. Experienced buyers routinely secure 15–35% off the headline rate, especially for multi-month commitments."
  }
]}
        faqs={[
  {
    "q": "What is the minimum useful advertising budget in Sri Lanka?",
    "a": "You can launch meaningful campaigns from around Rs 15,000–25,000/month on social ads or WhatsApp. Below that, you struggle to generate statistically significant data."
  },
  {
    "q": "Is TV still worth it in 2025?",
    "a": "Yes for mass-market brands targeting 25+ audiences nationally. For niche, B2B or pure-online businesses, digital usually beats TV on ROI."
  },
  {
    "q": "Which channel gives the best ROI?",
    "a": "For most SMEs in Sri Lanka, the highest-ROI combination is paid search + social retargeting + WhatsApp follow-up."
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
