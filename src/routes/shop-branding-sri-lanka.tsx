import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "Shop Branding Sri Lanka | Shopfront Signage & Interior Branding";
const DESC = "Shop branding in Sri Lanka — shopfront signage, ACP fascia, window graphics & interior branding. Design & installation. Call 0771437707.";

export const Route = createFileRoute("/shop-branding-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "shop branding sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/shop-branding-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="shop branding sri lanka" /></PageShell>),
});
