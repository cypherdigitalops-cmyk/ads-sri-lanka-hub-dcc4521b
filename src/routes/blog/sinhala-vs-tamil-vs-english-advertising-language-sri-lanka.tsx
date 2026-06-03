import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/sinhala-vs-tamil-vs-english-advertising-language-sri-lanka";
const TITLE = "Sinhala vs Tamil vs English — Which Language to Advertise In?";
const DESC = "Data-driven guide to choosing Sinhala, Tamil or English for advertising in Sri Lanka. Audience size, channel fit, CPM comparison and bilingual creative tips.";

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
        kicker="Audience Strategy"
        publishedISO="2025-03-18"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Choosing the right language is the cheapest performance lever in Sri Lankan advertising. Here is how to pick — backed by audience data."
        blocks={[
  {
    "type": "h2",
    "text": "Audience by language"
  },
  {
    "type": "table",
    "head": [
      "Language",
      "Speakers",
      "Buying power index"
    ],
    "rows": [
      [
        "Sinhala",
        "~16M (75%)",
        "Broad, mass market"
      ],
      [
        "Tamil",
        "~3.5M (15%)",
        "High in North, East + Up-country"
      ],
      [
        "English",
        "~2M fluent (10%)",
        "Highest disposable income"
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
      "TV: Sinhala dominant (Sirasa, Derana, Hiru); Tamil (Shakthi, Vasantham); English (TV1, ITN sub-strands)",
      "Radio: split by station — pick by audience map",
      "Newspapers: Sinhala (Lankadeepa, Divaina), Tamil (Thinakkural, Virakesari), English (Daily Mirror, Sunday Times)",
      "Digital: English skews higher CPM but higher AOV; Sinhala cheapest reach; Tamil underpriced opportunity"
    ]
  },
  {
    "type": "h2",
    "text": "CPM comparison (Meta Ads, 2025)"
  },
  {
    "type": "table",
    "head": [
      "Creative language",
      "Avg CPM (LKR)"
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
      "Mass FMCG: Sinhala primary + Tamil secondary",
      "Premium / luxury / B2B: English primary, Sinhala for trust signals",
      "North + East campaigns: Tamil first always",
      "Up-country tea estates: Tamil dominant"
    ]
  },
  {
    "type": "callout",
    "text": "Bilingual creatives (Sinhala voice-over + English text overlay) often outperform monolingual versions for premium and aspirational brands."
  }
]}
        faqs={[
  {
    "q": "Should I run the same ad in all three languages?",
    "a": "Yes for national campaigns, but translate idiomatically — never run direct translations."
  },
  {
    "q": "Is English advertising more expensive?",
    "a": "Higher CPM but higher conversion value for premium products. ROI is comparable or better."
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
