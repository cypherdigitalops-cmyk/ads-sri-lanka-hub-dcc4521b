import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/google-business-profile-setup-guide-sri-lanka";
const TITLE = "Google Business Profile Setup Guide for Sri Lankan Businesses";
const DESC = "Step-by-step guide to creating, verifying and optimising a Google Business Profile in Sri Lanka — categories, photos, posts, reviews and local SEO ranking factors.";

const PRIMARY_ANCHOR = {
  href: "/local-seo-sri-lanka",
  regex: /(local\\s+seo)/i,
  fallbackText: "local SEO",
  ctaLabel: "Optimise my profile",
  ctaHeadline: "Want us to set up & rank your Google Business Profile?",
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
        intro="A verified, optimised Google Business Profile is the single highest-ROI marketing asset for any Sri Lankan business with a physical location."
        blocks={[
  {
    "type": "h2",
    "text": "Step 1 — Create the profile"
  },
  {
    "type": "ul",
    "items": [
      "Go to business.google.com and sign in with a business Gmail",
      "Enter exact registered business name (no keywords stuffed)",
      "Pick the most accurate primary category",
      "Add the precise address as on your signboard"
    ]
  },
  {
    "type": "h2",
    "text": "Step 2 — Verify"
  },
  {
    "type": "ul",
    "items": [
      "Postcard verification: 7–14 days to your address",
      "Video verification: now common in Sri Lanka — record the signboard, interior and proof of management",
      "Phone verification: only for select categories"
    ]
  },
  {
    "type": "h2",
    "text": "Step 3 — Optimise"
  },
  {
    "type": "ul",
    "items": [
      "Add 8–15 high-quality photos (exterior, interior, team, products)",
      "Complete every service / product field",
      "Add opening hours including special holidays (Vesak, Poya, New Year)",
      "Write a 750-character description with city + service keywords",
      "Enable messaging and reply within 24 hours"
    ]
  },
  {
    "type": "h2",
    "text": "Step 4 — Ranking factors"
  },
  {
    "type": "table",
    "head": [
      "Factor",
      "Weight"
    ],
    "rows": [
      [
        "Reviews (quantity + recency)",
        "High"
      ],
      [
        "NAP consistency across web",
        "High"
      ],
      [
        "Proximity to searcher",
        "High"
      ],
      [
        "Categories",
        "Medium"
      ],
      [
        "Photos + posts",
        "Medium"
      ],
      [
        "Backlinks to website",
        "Medium"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Step 5 — Get reviews the right way"
  },
  {
    "type": "p",
    "text": "Generate a short Google review link, print it as a QR on receipts, and ask happy customers in person. Never buy reviews — Google now detects them within weeks."
  }
]}
        faqs={[
  {
    "q": "How long until my profile ranks in the map pack?",
    "a": "With consistent optimisation and reviews, 4–10 weeks for moderately competitive categories in Colombo."
  },
  {
    "q": "Can I rank without a physical address?",
    "a": "Service-area businesses (plumbers, mobile services) can hide the address but must still verify a real one."
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
