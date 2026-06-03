import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/best-time-to-run-facebook-ads-in-sri-lanka";
const TITLE = "Best Time to Run Facebook Ads in Sri Lanka (2025)";
const DESC = "When should you schedule Facebook & Instagram ads in Sri Lanka? Hour-by-hour data on peak engagement times, day of week patterns and seasonal windows.";

const PRIMARY_ANCHOR = {
  href: "/facebook-marketing-sri-lanka",
  regex: /(facebook\\s+ads)/i,
  fallbackText: "Facebook ads",
  ctaLabel: "Plan my Meta campaign",
  ctaHeadline: "Want a Meta Ads plan built for Sri Lankan timezones?",
  ctaService: "Facebook Ads Sri Lanka",
};

export const Route = createFileRoute("/blog/best-time-to-run-facebook-ads-in-sri-lanka")({
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
        kicker="Meta Ads Strategy"
        publishedISO="2025-04-12"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Timing matters more than most Sri Lankan advertisers realise. Here is when Sri Lankan users actually open Facebook and Instagram — and when your ads convert."
        blocks={[
  {
    "type": "h2",
    "text": "Peak engagement hours"
  },
  {
    "type": "table",
    "head": [
      "Time block",
      "Engagement",
      "Best for"
    ],
    "rows": [
      [
        "6:30am – 8:00am",
        "High",
        "News, breakfast brands"
      ],
      [
        "12:00pm – 1:30pm",
        "Very High",
        "Food delivery, retail"
      ],
      [
        "7:30pm – 10:30pm",
        "Highest",
        "Most categories, e-commerce"
      ],
      [
        "10:30pm – 12:00am",
        "High",
        "Entertainment, OTT"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Best days"
  },
  {
    "type": "ul",
    "items": [
      "Sunday evening (highest CTR for retail)",
      "Wednesday + Thursday (B2B, services)",
      "Friday night (entertainment, leisure)",
      "Avoid Monday morning — lowest engagement"
    ]
  },
  {
    "type": "h2",
    "text": "Seasonal high-intent windows"
  },
  {
    "type": "ul",
    "items": [
      "April: Sinhala/Tamil New Year — gifting, retail, electronics",
      "Late November–December: Christmas + year-end bonus spending",
      "January: school admissions, January sales",
      "Ramadan + Eid: food, fashion, gifting (Muslim audience targeting)"
    ]
  },
  {
    "type": "callout",
    "text": "Sri Lankan users check Facebook on average 11 times per day. Dayparting (running ads only during peak windows) can lower CPM by 20–35%."
  }
]}
        faqs={[
  {
    "q": "Should I run Facebook ads 24/7?",
    "a": "No. Daypart to peak hours — you waste budget on low-intent late-night and early-morning impressions."
  },
  {
    "q": "What is the cheapest day to advertise?",
    "a": "Tuesday and Wednesday midday have the lowest CPM in Sri Lanka."
  }
]}
        related={[
  {
    "href": "/facebook-marketing-sri-lanka",
    "label": "Facebook Marketing Sri Lanka"
  },
  {
    "href": "/instagram-marketing-sri-lanka",
    "label": "Instagram Marketing"
  },
  {
    "href": "/facebook-ads-cost-sri-lanka",
    "label": "Facebook Ads Cost"
  }
]}
      />
    </PageShell>
  ),
});
