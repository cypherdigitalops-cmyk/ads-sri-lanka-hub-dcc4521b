import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Customized Corporate Gifts Sri Lanka | Logo-Branded Gifts";
const DESC = "Customized corporate gifts in Sri Lanka — logo-branded executive sets, drinkware, tech & desk accessories. Min 25 units. Call 0771437707.";

export const Route = createFileRoute("/customized-corporate-gifts-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "customized corporate gifts sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/customized-corporate-gifts-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="customized corporate gifts sri lanka" /></PageShell>),
});
