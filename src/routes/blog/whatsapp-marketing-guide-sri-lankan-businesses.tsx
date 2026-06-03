import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/whatsapp-marketing-guide-sri-lankan-businesses";
const TITLE = "WhatsApp Marketing Guide for Sri Lankan Businesses (2025)";
const DESC = "Complete WhatsApp marketing playbook for Sri Lanka — Business App vs Cloud API, broadcast rules, catalogs, automation, template messages and compliance.";

const PRIMARY_ANCHOR = {
  href: "/whatsapp-advertising-sri-lanka",
  regex: /(WhatsApp)/i,
  fallbackText: "WhatsApp",
  ctaLabel: "Launch my WhatsApp campaign",
  ctaHeadline: "Want a WhatsApp funnel that converts?",
  ctaService: "WhatsApp Marketing Sri Lanka",
};

export const Route = createFileRoute("/blog/whatsapp-marketing-guide-sri-lankan-businesses")({
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
        kicker="WhatsApp Playbook"
        publishedISO="2025-04-02"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="WhatsApp is the highest-conversion direct channel for most Sri Lankan SMEs — when used correctly. Here is the full 2025 playbook."
        blocks={[
  {
    "type": "h2",
    "text": "Business App vs Cloud API"
  },
  {
    "type": "table",
    "head": [
      "Feature",
      "Business App",
      "Cloud API"
    ],
    "rows": [
      [
        "Best for",
        "Up to 256 contacts per broadcast",
        "Bulk messaging and automation"
      ],
      [
        "Cost",
        "Free to install",
        "Rs 1.80–4.50 per message plus setup"
      ],
      [
        "Automation",
        "Limited",
        "Full programmatic flows"
      ],
      [
        "CRM integration",
        "No",
        "Yes via webhooks"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Acquisition tactics that work"
  },
  {
    "type": "ul",
    "items": [
      "Click-to-WhatsApp ads from social platforms — consistently the lowest cost per lead",
      "WhatsApp button on the Google Business Profile",
      "QR code on receipts, packaging and in-store posters",
      "Lead magnets such as price lists or brochures delivered via WhatsApp"
    ]
  },
  {
    "type": "h2",
    "text": "Broadcast rules"
  },
  {
    "type": "ul",
    "items": [
      "Only message users who have explicitly opted in",
      "Use pre-approved template messages for any outbound campaign",
      "Send within business hours (9am–9pm SLT) to avoid spam complaints",
      "Always personalise with the customer's first name"
    ]
  },
  {
    "type": "h2",
    "text": "Automation that lifts conversion"
  },
  {
    "type": "ul",
    "items": [
      "Instant auto-reply with a numbered menu (1 = catalog, 2 = quote, 3 = talk to a human)",
      "Order status updates triggered by your CRM or shop platform",
      "Cart abandonment reminder 1 hour after drop-off",
      "Review request 48 hours after delivery"
    ]
  },
  {
    "type": "callout",
    "text": "Unsolicited bulk messaging to non-opted-in numbers will get your business number banned. Always use proper opt-in flows."
  }
]}
        faqs={[
  {
    "q": "Is WhatsApp marketing legal in Sri Lanka?",
    "a": "Yes — provided users opt in. Unsolicited bulk messaging violates the platform's terms and can result in permanent number bans."
  },
  {
    "q": "How does WhatsApp ROI compare to SMS?",
    "a": "Open rates are similar (95%+), but WhatsApp click-through is typically 4–8× higher because of rich media support."
  }
]}
        related={[
  {
    "href": "/whatsapp-advertising-sri-lanka",
    "label": "WhatsApp Advertising Sri Lanka"
  },
  {
    "href": "/bulk-sms-sri-lanka",
    "label": "Bulk SMS"
  },
  {
    "href": "/chatbot-marketing-sri-lanka",
    "label": "Chatbot Marketing"
  }
]}
      />
    </PageShell>
  ),
});
