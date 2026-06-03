import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-to-get-on-first-page-of-google-sri-lanka";
const TITLE = "How to Get Your Business on the First Page of Google in Sri Lanka";
const DESC = "Proven playbook to rank on Google's first page in Sri Lanka — keyword research, on-page SEO, local SEO, content, backlinks and timeline expectations.";

const PRIMARY_ANCHOR = {
  href: "/seo-services-sri-lanka",
  regex: /(SEO|search\\s+engine)/i,
  fallbackText: "SEO",
  ctaLabel: "Rank my website",
  ctaHeadline: "Want first-page rankings in 90–180 days?",
  ctaService: "SEO Sri Lanka",
};

export const Route = createFileRoute("/blog/how-to-get-on-first-page-of-google-sri-lanka")({
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
        kicker="SEO Playbook"
        publishedISO="2025-05-20"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Ranking on Google's first page in Sri Lanka is a 90–180 day project — not a trick. Here is the exact sequence we use for our own clients."
        blocks={[
  {
    "type": "h2",
    "text": "Step 1 — Pick the right keywords"
  },
  {
    "type": "ul",
    "items": [
      "Use Google Keyword Planner + Ubersuggest for Sri Lanka volume",
      "Target keywords with 100–2,000 monthly searches first",
      "Always combine service + city: 'wedding photographer colombo' beats 'wedding photographer'"
    ]
  },
  {
    "type": "h2",
    "text": "Step 2 — Fix on-page SEO"
  },
  {
    "type": "ul",
    "items": [
      "One target keyword per page in title, H1, URL, first 100 words",
      "Meta description under 160 chars with city + CTA",
      "Internal links from related pages",
      "Schema markup: LocalBusiness, FAQPage, BreadcrumbList",
      "Page speed under 2.5s LCP"
    ]
  },
  {
    "type": "h2",
    "text": "Step 3 — Win local SEO"
  },
  {
    "type": "p",
    "text": "Verified Google Business Profile + NAP consistency on Yamu, ikman, hotfrog, local chambers. Get 20+ Google reviews in 90 days."
  },
  {
    "type": "h2",
    "text": "Step 4 — Build content moat"
  },
  {
    "type": "ul",
    "items": [
      "Publish 2–4 long-form articles (1,500+ words) per month",
      "Answer questions Sri Lankans actually search",
      "Update old posts every 6 months"
    ]
  },
  {
    "type": "h2",
    "text": "Step 5 — Earn backlinks"
  },
  {
    "type": "ul",
    "items": [
      "Sri Lankan press: Daily Mirror, Newswire, Daily FT",
      "Industry directories: Yellow Pages Lanka, Lanka Business Online",
      "Guest posts on industry blogs",
      "Avoid buying low-quality bulk backlinks"
    ]
  },
  {
    "type": "h2",
    "text": "Realistic timeline"
  },
  {
    "type": "table",
    "head": [
      "Month",
      "Expected outcome"
    ],
    "rows": [
      [
        "1–2",
        "Indexed, ranking page 5–10"
      ],
      [
        "3–4",
        "Long-tail keywords on page 1–2"
      ],
      [
        "5–6",
        "Primary keywords on page 1"
      ],
      [
        "6–12",
        "Top 3 + map pack"
      ]
    ]
  }
]}
        faqs={[
  {
    "q": "How long to rank #1 in Sri Lanka?",
    "a": "Low-competition local keywords: 60–90 days. Competitive national keywords: 6–12 months."
  },
  {
    "q": "Can I do SEO myself?",
    "a": "Yes for basic local SEO. For competitive keywords you need experienced help — link building especially."
  }
]}
        related={[
  {
    "href": "/seo-services-sri-lanka",
    "label": "SEO Services Sri Lanka"
  },
  {
    "href": "/local-seo-sri-lanka",
    "label": "Local SEO"
  },
  {
    "href": "/seo-pricing-sri-lanka",
    "label": "SEO Pricing"
  }
]}
      />
    </PageShell>
  ),
});
