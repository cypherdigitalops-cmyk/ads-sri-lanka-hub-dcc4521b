import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Corporate Gifts Sri Lanka — Branded Pens, Mugs, Hampers from LKR 145";
const DESC = "Corporate gifting Sri Lanka: branded pens, mugs, T-shirts, power banks, Ceylon tea hampers & awards. Bulk LKR pricing, 3–14 day delivery. WhatsApp 0701772626 for free quote.";

export const Route = createFileRoute("/corporate-gifting-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "corporate gifting sri lanka, branded merchandise sri lanka, promotional products sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/corporate-gifting-sri-lanka` }],
  }),
  component: () => (<PageShell><CategoryHubTemplate category={CAT} /></PageShell>),
});
