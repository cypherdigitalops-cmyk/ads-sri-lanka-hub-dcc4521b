import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/advertising-budget-calculator-sri-lankan-businesses";
const TITLE = "Advertising Budget Calculator for Sri Lankan Businesses";
const DESC = "How to calculate the right advertising budget for your Sri Lankan business — percentage-of-revenue method, objective-based budgeting and channel allocation by goal.";

const PRIMARY_ANCHOR = {
  href: "/advertising-rates",
  regex: /(advertising\s+budget|budget)/i,
  fallbackText: "advertising budget",
  ctaLabel: "Get my custom budget plan",
  ctaHeadline: "Want a tailored budget breakdown for your business?",
  ctaService: "Advertising Budget Planning Sri Lanka",
};

export const Route = createFileRoute("/blog/advertising-budget-calculator-sri-lankan-businesses")({
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
        kicker="Budget Planning"
        publishedISO="2025-05-12"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Most Sri Lankan businesses underspend on marketing — or worse, spend the wrong amount on the wrong channel. Here is how to set a realistic, defensible budget."
        blocks={[
  {
    "type": "h2",
    "text": "Method 1 — Percentage of revenue"
  },
  {
    "type": "table",
    "head": [
      "Business stage",
      "% of revenue",
      "Strategic intent"
    ],
    "rows": [
      [
        "Startup / launch",
        "15–25%",
        "Aggressive — build initial awareness"
      ],
      [
        "Growth (1–3 years)",
        "10–15%",
        "Scale what already works"
      ],
      [
        "Established",
        "5–10%",
        "Defend market share, stay top of mind"
      ],
      [
        "Mature market leader",
        "3–6%",
        "Brand maintenance and innovation"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Method 2 — Objective-based (CPL × leads needed)"
  },
  {
    "type": "p",
    "text": "Required revenue ÷ average order value = customers needed ÷ close rate = leads needed × CPL = monthly budget."
  },
  {
    "type": "ul",
    "items": [
      "Example: Rs 5M revenue ÷ Rs 25,000 AOV = 200 customers",
      "200 customers ÷ 20% close rate = 1,000 leads needed",
      "1,000 leads × Rs 350 CPL = Rs 350,000 monthly ad budget"
    ]
  },
  {
    "type": "h2",
    "text": "Recommended channel allocation by goal"
  },
  {
    "type": "table",
    "head": [
      "Primary goal",
      "Digital",
      "Traditional",
      "BTL / Events"
    ],
    "rows": [
      [
        "Online sales or leads",
        "75%",
        "10%",
        "15%"
      ],
      [
        "Local brick-and-mortar footfall",
        "45%",
        "30%",
        "25%"
      ],
      [
        "National brand awareness",
        "35%",
        "45%",
        "20%"
      ],
      [
        "B2B services",
        "60%",
        "30%",
        "10%"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Always reserve a test budget"
  },
  {
    "type": "ul",
    "items": [
      "70% on proven channels (with monthly performance reviews)",
      "20% on testing new creative or audience segments",
      "10% on entirely new channels and experiments"
    ]
  },
  {
    "type": "callout",
    "text": "If you cannot measure CPL or CAC for each channel, you do not have an advertising budget — you have an expense."
  }
]}
        faqs={[
  {
    "q": "What if I am a brand-new business with no revenue yet?",
    "a": "Set a fixed monthly cap (typically Rs 50,000–150,000) for 3–6 months, then reassess based on customer acquisition cost versus lifetime value."
  },
  {
    "q": "How should an SME split spend between paid social and paid search?",
    "a": "Start around 60/40 social-to-search for B2C and 30/70 for B2B; rebalance monthly based on cost per acquisition."
  }
]}
        related={[
  {
    "href": "/advertising-rates",
    "label": "Advertising Rates Sri Lanka"
  },
  {
    "href": "/advertising-packages",
    "label": "Advertising Packages"
  },
  {
    "href": "/performance-marketing-sri-lanka",
    "label": "Performance Marketing"
  }
]}
      />
    </PageShell>
  ),
});
