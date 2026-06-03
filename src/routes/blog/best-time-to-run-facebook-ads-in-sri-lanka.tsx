import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/best-time-to-run-facebook-ads-in-sri-lanka";
const TITLE = "Best Time to Run Facebook Ads in Sri Lanka (2025)";
const DESC = "When should you schedule Facebook and Instagram ads in Sri Lanka? Hour-by-hour engagement patterns, day-of-week trends, seasonal windows and dayparting tips for Sri Lankan audiences.";

const PRIMARY_ANCHOR = {
  href: "/facebook-marketing-sri-lanka",
  regex: /(facebook\s+ads)/i,
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
        kicker="Meta Ads Timing"
        publishedISO="2025-04-12"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Timing is the cheapest performance lever in social advertising. Here is when Sri Lankan users actually open their feeds — and when ads tend to convert hardest."
        blocks={[
  {
    "type": "h2",
    "text": "Peak engagement windows"
  },
  {
    "type": "table",
    "head": [
      "Time block (SLT)",
      "Engagement level",
      "Best for"
    ],
    "rows": [
      [
        "6:30am – 8:00am",
        "High",
        "News, breakfast brands, commuter offers"
      ],
      [
        "12:00pm – 1:30pm",
        "Very high",
        "Food, retail, quick-decision purchases"
      ],
      [
        "7:30pm – 10:30pm",
        "Highest",
        "E-commerce, lifestyle, most B2C categories"
      ],
      [
        "10:30pm – 12:00am",
        "High",
        "Entertainment, streaming, late-night browsing"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Best days of the week"
  },
  {
    "type": "ul",
    "items": [
      "Sunday evening — highest click-through rates for retail and lifestyle",
      "Wednesday and Thursday — strongest results for B2B and services",
      "Friday night — peak for entertainment and weekend planning",
      "Monday morning consistently shows the lowest engagement of the week"
    ]
  },
  {
    "type": "h2",
    "text": "Seasonal high-intent windows"
  },
  {
    "type": "ul",
    "items": [
      "April: Sinhala and Tamil New Year — gifting, retail, electronics, fashion",
      "Late November – December: festive season and year-end bonus spending",
      "January: school admissions, new-year promotions, fitness",
      "Ramadan and Eid: food, fashion, gifting for Muslim audiences"
    ]
  },
  {
    "type": "callout",
    "text": "Sri Lankan users open social apps an average of 10+ times per day. Dayparting — only running ads during peak windows — can lower CPM by 20–35%."
  }
]}
        faqs={[
  {
    "q": "Should I run social ads 24/7?",
    "a": "No. Dayparting to peak hours wastes less budget on low-intent late-night and early-morning impressions."
  },
  {
    "q": "Which days have the lowest CPM in Sri Lanka?",
    "a": "Mid-week mornings (Tuesday and Wednesday) typically have the lowest CPM as competition is lighter."
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
