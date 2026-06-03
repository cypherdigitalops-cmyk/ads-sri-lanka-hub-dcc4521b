import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/sinhala-vs-tamil-vs-english-advertising-language-sri-lanka";
const TITLE = "Sinhala vs Tamil vs English — Which Language to Advertise In?";
const DESC = "Data-driven guide to choosing Sinhala, Tamil or English for advertising in Sri Lanka. Audience size, channel fit, CPM comparison and tips for bilingual creative.";

const PRIMARY_ANCHOR = {
  href: "/digital-marketing-sri-lanka",
  regex: /(advertising)/i,
  fallbackText: "advertising",
  ctaLabel: "Build a multi-language plan",
  ctaHeadline: "Need bilingual creative that converts?",
  ctaService: "Multilingual Advertising Sri Lanka",
};

export const Route = createFileRoute("/blog/sinhala-vs-tamil-vs-english-advertising-language-sri-lanka")({
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
        kicker="Audience & Language Strategy"
        publishedISO="2025-03-18"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Choosing the right language is the cheapest performance lever in Sri Lankan advertising. Here is how to pick — backed by audience and CPM data."
        blocks={[
  {
    "type": "h2",
    "text": "Audience by language"
  },
  {
    "type": "table",
    "head": [
      "Language",
      "Approx. speakers",
      "Buying-power profile"
    ],
    "rows": [
      [
        "Sinhala",
        "~16M (≈75%)",
        "Broad mass market across the country"
      ],
      [
        "Tamil",
        "~3.5M (≈15%)",
        "Strong concentration in North, East and up-country"
      ],
      [
        "English",
        "~2M fluent (≈10%)",
        "Highest disposable income, urban-skewed"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Which channel speaks which language"
  },
  {
    "type": "ul",
    "items": [
      "Television: most channels are Sinhala-dominant, with dedicated Tamil and English-language slots",
      "Radio: split by station — choose by the audience map for your target district",
      "Newspapers: each major language has its own leading dailies and weekend titles",
      "Digital: English carries a higher CPM but a higher average order value; Sinhala is the cheapest reach; Tamil is often the most underpriced opportunity"
    ]
  },
  {
    "type": "h2",
    "text": "CPM comparison on social (2025)"
  },
  {
    "type": "table",
    "head": [
      "Creative language",
      "Average CPM (LKR)"
    ],
    "rows": [
      [
        "Sinhala",
        "90–160"
      ],
      [
        "Tamil",
        "70–130"
      ],
      [
        "English",
        "180–320"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Rules of thumb"
  },
  {
    "type": "ul",
    "items": [
      "Mass FMCG: Sinhala primary, Tamil secondary",
      "Premium, luxury or B2B: English primary, Sinhala used for trust signals",
      "Campaigns in North and East: Tamil first, always",
      "Up-country tea estate communities: Tamil dominant"
    ]
  },
  {
    "type": "callout",
    "text": "Bilingual creatives (for example Sinhala voice-over with English overlay text) often outperform monolingual versions for aspirational and premium brands."
  }
]}
        faqs={[
  {
    "q": "Should I run the same ad in all three languages?",
    "a": "Yes for national campaigns — but localise idiomatically. Never publish direct word-for-word translations."
  },
  {
    "q": "Is English advertising more expensive?",
    "a": "It carries a higher CPM, but typically delivers higher conversion value for premium products. ROI is usually comparable or better."
  }
]}
        related={[
  {
    "href": "/digital-marketing-sri-lanka",
    "label": "Digital Marketing"
  },
  {
    "href": "/facebook-marketing-sri-lanka",
    "label": "Facebook Marketing"
  },
  {
    "href": "/tv-advertising-sri-lanka",
    "label": "TV Advertising"
  }
]}
      />
    </PageShell>
  ),
});
