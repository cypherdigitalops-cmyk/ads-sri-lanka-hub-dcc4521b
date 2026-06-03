import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-to-get-on-first-page-of-google-sri-lanka";
const TITLE = "How to Get Your Business on the First Page of Google in Sri Lanka";
const DESC = "Proven playbook to rank on the first page of Google in Sri Lanka — keyword research, on-page SEO, local SEO, content strategy, ethical link building and realistic timelines.";

const PRIMARY_ANCHOR = {
  href: "/seo-services-sri-lanka",
  regex: /(SEO|search\s+engine)/i,
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
        intro="Ranking on the first page of Google in Sri Lanka is a 90–180 day project — not a trick. Here is the exact sequence that consistently works."
        blocks={[
  {
    "type": "h2",
    "text": "Step 1 — Pick the right keywords"
  },
  {
    "type": "ul",
    "items": [
      "Use established keyword research tools to validate Sri Lanka search volume",
      "Target keywords with 100–2,000 monthly searches first",
      "Always combine the service with a city, for example 'wedding photographer colombo' beats the generic version"
    ]
  },
  {
    "type": "h2",
    "text": "Step 2 — Fix on-page SEO"
  },
  {
    "type": "ul",
    "items": [
      "One target keyword per page in the title, H1, URL slug and first 100 words",
      "Meta description under 160 characters, ending in a clear call to action",
      "Internal links between related service pages",
      "Schema markup: LocalBusiness, FAQPage and BreadcrumbList",
      "Largest Contentful Paint under 2.5 seconds on mobile"
    ]
  },
  {
    "type": "h2",
    "text": "Step 3 — Win local SEO"
  },
  {
    "type": "p",
    "text": "Verified Google Business Profile plus consistent NAP across reputable Sri Lankan directories. Aim for 20+ Google reviews in the first 90 days."
  },
  {
    "type": "h2",
    "text": "Step 4 — Build a content moat"
  },
  {
    "type": "ul",
    "items": [
      "Publish 2–4 long-form articles (1,500+ words) per month",
      "Answer the questions Sri Lankans actually search for",
      "Refresh and update older posts every 6 months"
    ]
  },
  {
    "type": "h2",
    "text": "Step 5 — Earn high-quality backlinks"
  },
  {
    "type": "ul",
    "items": [
      "Pitch local press and respected industry publications",
      "Get listed on reputable national directories and chambers of commerce",
      "Contribute guest articles to recognised industry blogs",
      "Never buy low-quality bulk backlinks — they hurt rankings more than they help"
    ]
  },
  {
    "type": "h2",
    "text": "Realistic ranking timeline"
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
        "Pages indexed and ranking on page 5–10"
      ],
      [
        "3–4",
        "Long-tail keywords moving onto pages 1–2"
      ],
      [
        "5–6",
        "Primary keywords visible on page 1"
      ],
      [
        "6–12",
        "Top 3 positions and consistent map pack appearances"
      ]
    ]
  }
]}
        faqs={[
  {
    "q": "How long until I can rank number one in Sri Lanka?",
    "a": "Low-competition local keywords: 60–90 days. Competitive national keywords: 6–12 months of disciplined work."
  },
  {
    "q": "Can I do SEO myself?",
    "a": "Yes for basic local SEO. For competitive keywords — especially link building and technical SEO — experienced help pays for itself quickly."
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
