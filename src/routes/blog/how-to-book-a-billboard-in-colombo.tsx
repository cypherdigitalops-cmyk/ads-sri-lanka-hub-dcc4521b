import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-to-book-a-billboard-in-colombo";
const TITLE = "How to Book a Billboard in Colombo — Step-by-Step (2025)";
const DESC = "Complete guide to booking a billboard in Colombo — locations, sizes, rates, CMC permits, design specs, printing, installation and contract terms.";

const PRIMARY_ANCHOR = {
  href: "/billboard-advertising-sri-lanka",
  regex: /(billboard)/i,
  fallbackText: "billboard",
  ctaLabel: "Find me a billboard",
  ctaHeadline: "Want us to scout Colombo billboards for you?",
  ctaService: "Billboard Booking Colombo",
};

export const Route = createFileRoute("/blog/how-to-book-a-billboard-in-colombo")({
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
        kicker="Outdoor Advertising Guide"
        publishedISO="2025-02-20"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Booking a billboard in Colombo is straightforward once you know who owns which site, how CMC permits work, and what to negotiate."
        blocks={[
  {
    "type": "h2",
    "text": "Step 1 — Decide your goal"
  },
  {
    "type": "p",
    "text": "Brand awareness needs high-traffic Galle Road / Town Hall / Liberty. Direction-to-store needs sites within 1km of your outlet."
  },
  {
    "type": "h2",
    "text": "Step 2 — Choose a site tier"
  },
  {
    "type": "table",
    "head": [
      "Tier",
      "Examples",
      "Per month"
    ],
    "rows": [
      [
        "Premium",
        "Liberty, Town Hall, Galle Face",
        "Rs 250,000–500,000"
      ],
      [
        "Standard",
        "Nugegoda, Maharagama, Dehiwala",
        "Rs 90,000–200,000"
      ],
      [
        "Suburban",
        "Kelaniya, Ja-Ela, Moratuwa",
        "Rs 45,000–110,000"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Step 3 — Permits & approvals"
  },
  {
    "type": "ul",
    "items": [
      "CMC (Colombo Municipal Council) approval for sites inside CMC limits",
      "UDA approval for sites visible from arterial roads",
      "RDA approval for highway-facing sites",
      "Site owner contract (1 month minimum, usually 3 months)"
    ]
  },
  {
    "type": "h2",
    "text": "Step 4 — Design & print specs"
  },
  {
    "type": "ul",
    "items": [
      "Artwork in CMYK at 150 DPI at final size",
      "Bleed 50mm on all sides",
      "Flex print (440 GSM frontlit) for backlit, vinyl for front-lit",
      "Allow 3–5 working days for print + install"
    ]
  },
  {
    "type": "h2",
    "text": "Step 5 — Install, photo-proof & monitor"
  },
  {
    "type": "p",
    "text": "Insist on installation photos within 24 hours and weekly condition photos. Negotiate make-good days for any downtime."
  },
  {
    "type": "callout",
    "text": "Always negotiate a free 7-day extension for any new contract over 3 months — it is industry standard but rarely offered upfront."
  }
]}
        faqs={[
  {
    "q": "How long does it take to book a billboard?",
    "a": "Allow 7–14 working days from site selection to live install, including artwork and permits."
  },
  {
    "q": "Do I need CMC approval for my artwork?",
    "a": "Yes for sites in CMC limits. The vendor usually handles submission but you sign off on artwork."
  }
]}
        related={[
  {
    "href": "/billboard-advertising-sri-lanka",
    "label": "Billboard Advertising Sri Lanka"
  },
  {
    "href": "/outdoor-advertising-sri-lanka",
    "label": "Outdoor Advertising"
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
