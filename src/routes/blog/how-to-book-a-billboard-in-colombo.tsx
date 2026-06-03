import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-to-book-a-billboard-in-colombo";
const TITLE = "How to Book a Billboard in Colombo — Step-by-Step (2025)";
const DESC = "End-to-end guide to booking a billboard in Colombo — location tiers, sizes, indicative rates, council permits, artwork specs, printing, installation and contract terms.";

const PRIMARY_ANCHOR = {
  href: "/billboard-advertising-sri-lanka",
  regex: /(billboard)/i,
  fallbackText: "billboard",
  ctaLabel: "Find me a billboard",
  ctaHeadline: "Want help scouting and booking a billboard in Colombo?",
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
        intro="Booking a billboard in Colombo is straightforward once you know the site tiers, permitting requirements and what to negotiate in the contract."
        blocks={[
  {
    "type": "h2",
    "text": "Step 1 — Define the objective"
  },
  {
    "type": "p",
    "text": "Brand awareness campaigns suit high-traffic arterial road sites with long dwell time. Direction-to-store and footfall campaigns are far more efficient with sites within roughly 1 km of the outlet."
  },
  {
    "type": "h2",
    "text": "Step 2 — Choose a site tier"
  },
  {
    "type": "table",
    "head": [
      "Tier",
      "Typical location type",
      "Indicative monthly rate"
    ],
    "rows": [
      [
        "Premium",
        "Central Colombo arterial junctions",
        "Rs 250,000 – 500,000"
      ],
      [
        "Standard",
        "Inner suburban high-traffic junctions",
        "Rs 90,000 – 200,000"
      ],
      [
        "Suburban / outer",
        "Outer suburbs and feeder roads",
        "Rs 45,000 – 110,000"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Step 3 — Permits and approvals"
  },
  {
    "type": "ul",
    "items": [
      "Municipal council approval for sites within city limits",
      "Urban development authority approval where applicable",
      "Road development authority approval for highway-facing sites",
      "Signed site contract (typically 1-month minimum, usually booked in 3-month blocks)"
    ]
  },
  {
    "type": "h2",
    "text": "Step 4 — Artwork and print specs"
  },
  {
    "type": "ul",
    "items": [
      "Artwork supplied in CMYK at 150 DPI at final size",
      "50 mm bleed on all sides",
      "Front-lit flex (around 440 GSM) for standard hoardings; vinyl on rigid substrate for premium builds",
      "Allow 3–5 working days for print and installation"
    ]
  },
  {
    "type": "h2",
    "text": "Step 5 — Install, photo-proof and monitor"
  },
  {
    "type": "p",
    "text": "Insist on installation photos within 24 hours and weekly condition photos for the duration of the booking. Negotiate make-good days for any downtime caused by weather damage or vendor issues."
  },
  {
    "type": "callout",
    "text": "On any contract over 3 months, always negotiate a free 7–14 day extension at the end of the campaign — it is widely accepted across the industry but rarely offered upfront."
  }
]}
        faqs={[
  {
    "q": "How long does it take to book a billboard in Colombo?",
    "a": "Allow 7–14 working days from site selection to live install, including artwork production and council permits."
  },
  {
    "q": "Do I need approval for my artwork?",
    "a": "Yes for sites within municipal city limits. The site vendor usually submits the artwork on your behalf, but you formally sign off the creative."
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
