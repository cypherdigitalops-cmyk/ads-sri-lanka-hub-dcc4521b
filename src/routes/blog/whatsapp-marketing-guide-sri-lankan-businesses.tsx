import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/whatsapp-marketing-guide-sri-lankan-businesses";
const TITLE = "WhatsApp Marketing Guide for Sri Lankan Businesses (2025)";
const DESC = "Complete WhatsApp marketing guide for Sri Lanka — Business App vs API, broadcast lists, catalogs, automation, template messages and compliance.";

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
        intro="WhatsApp is the highest-conversion channel for most Sri Lankan SMEs — when used correctly. Here is the full 2025 playbook."
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
        "Up to 256 contacts/broadcast",
        "Bulk + automation"
      ],
      [
        "Cost",
        "Free",
        "Rs 1.80–4.50/msg + setup"
      ],
      [
        "Automation",
        "Limited",
        "Full"
      ],
      [
        "CRM integration",
        "No",
        "Yes"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Acquisition tactics that work in Sri Lanka"
  },
  {
    "type": "ul",
    "items": [
      "'Click-to-WhatsApp' Facebook & Instagram ads (lowest CPL in 2025)",
      "WhatsApp button on Google Business Profile",
      "QR code on receipts, packaging, in-store posters",
      "Lead magnet (price list, brochure) delivered via WhatsApp"
    ]
  },
  {
    "type": "h2",
    "text": "Broadcast rules"
  },
  {
    "type": "ul",
    "items": [
      "Only message users who opted in",
      "Use template messages (pre-approved) for any outbound",
      "Send within business hours (9am–9pm SLT)",
      "Personalise with first name — generic blasts get reported"
    ]
  },
  {
    "type": "h2",
    "text": "Automation that lifts conversion"
  },
  {
    "type": "ul",
    "items": [
      "Instant auto-reply with menu (1=catalog, 2=quote, 3=human)",
      "Order status updates via API webhooks",
      "Cart abandonment 1 hour after drop-off",
      "Review request 48 hours after delivery"
    ]
  },
  {
    "type": "callout",
    "text": "Bulk-promotional blasts to non-opted-in numbers will get your number banned. Use TrustedSource opt-in flows always."
  }
]}
        faqs={[
  {
    "q": "Is WhatsApp marketing legal in Sri Lanka?",
    "a": "Yes — but only to users who opt in. Unsolicited bulk messaging violates WhatsApp ToS and can result in number bans."
  },
  {
    "q": "What's the ROI vs SMS?",
    "a": "WhatsApp open rates: 95%+ vs SMS ~98%, but WhatsApp click-through is 4–8× higher due to rich media."
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
