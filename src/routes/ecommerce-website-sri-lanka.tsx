import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "web-design-sri-lanka")!;
const TITLE = "Ecommerce Website Sri Lanka | Shopify & WooCommerce from Rs 75,000";
const DESC = "Ecommerce website development in Sri Lanka from Rs 75,000. Shopify, WooCommerce & custom stores with PayHere/Stripe integration. Call 0701772626.";

export const Route = createFileRoute("/ecommerce-website-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "ecommerce website sri lanka, web design sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/ecommerce-website-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="ecommerce website sri lanka" /></PageShell>),
});
