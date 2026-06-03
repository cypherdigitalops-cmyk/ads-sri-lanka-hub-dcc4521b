import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/google-business-profile-setup-guide-sri-lanka";
const TITLE = "Google Business Profile Setup Guide for Sri Lankan Businesses";
const DESC = "Step-by-step guide to creating, verifying and optimising a Google Business Profile in Sri Lanka — categories, photos, posts, reviews, ranking factors and local SEO playbook.";

const PRIMARY_ANCHOR = {
  href: "/local-seo-sri-lanka",
  regex: /(local\s+seo)/i,
  fallbackText: "local SEO",
  ctaLabel: "Optimise my profile",
  ctaHeadline: "Want us to set up and rank your Google Business Profile?",
  ctaService: "Google Business Profile Sri Lanka",
};

export const Route = createFileRoute("/blog/google-business-profile-setup-guide-sri-lanka")({
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
        kicker="Local SEO Guide"
        publishedISO="2025-05-05"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="A verified, well-optimised Google Business Profile is the single highest-ROI marketing asset any Sri Lankan business with a physical location can own."
        blocks={[
  {
    "type": "h2",
    "text": "Step 1 — Create the profile"
  },
  {
    "type": "ul",
    "items": [
      "Sign in with a dedicated business email account",
      "Enter the exact registered business name — never stuff keywords into the name",
      "Select the most accurate primary business category",
      "Add the precise address as it appears on your signboard and utility bills"
    ]
  },
  {
    "type": "h2",
    "text": "Step 2 — Verify the listing"
  },
  {
    "type": "ul",
    "items": [
      "Postcard verification: typically 7–14 days to your registered address",
      "Video verification: increasingly common in Sri Lanka — record the signboard, interior and proof of management",
      "Phone verification: only available for select categories"
    ]
  },
  {
    "type": "h2",
    "text": "Step 3 — Optimise every field"
  },
  {
    "type": "ul",
    "items": [
      "Add 8–15 high-quality photos: exterior, interior, team and products",
      "Complete every service or product field with descriptions and pricing where possible",
      "Add accurate opening hours, including national and religious holidays",
      "Write a 750-character description that naturally includes city and service keywords",
      "Enable messaging and commit to replying within 24 hours"
    ]
  },
  {
    "type": "h2",
    "text": "Step 4 — Understand the ranking factors"
  },
  {
    "type": "table",
    "head": [
      "Ranking factor",
      "Relative weight"
    ],
    "rows": [
      [
        "Reviews — quantity, quality and recency",
        "High"
      ],
      [
        "NAP (name, address, phone) consistency across the web",
        "High"
      ],
      [
        "Proximity of the searcher to the business",
        "High"
      ],
      [
        "Primary and secondary categories",
        "Medium"
      ],
      [
        "Photos and regular posts",
        "Medium"
      ],
      [
        "Backlinks to the website",
        "Medium"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Step 5 — Earn reviews the right way"
  },
  {
    "type": "p",
    "text": "Generate a short review link, print it as a QR code on receipts or table cards, and ask satisfied customers in person. Never buy reviews — detection systems remove fake reviews within weeks and can suspend the listing."
  }
]}
        faqs={[
  {
    "q": "How long until my profile ranks in the map pack?",
    "a": "With consistent optimisation and steady review velocity, expect 4–10 weeks for moderately competitive categories in Colombo."
  },
  {
    "q": "Can I rank without a physical storefront?",
    "a": "Yes. Service-area businesses can hide the address but must still verify a real one and accurately define their service area."
  }
]}
        related={[
  {
    "href": "/local-seo-sri-lanka",
    "label": "Local SEO Sri Lanka"
  },
  {
    "href": "/seo-services-sri-lanka",
    "label": "SEO Services"
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
