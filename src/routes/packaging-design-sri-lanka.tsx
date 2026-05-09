import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "branding-sri-lanka")!;
const TITLE = "Packaging Design Sri Lanka Services — Get a Free Quote Today";
const DESC = "Get measurable results from packaging design sri lanka in Sri Lanka. Strategy, creative production and media buying handled by one specialist team.";

export const Route = createFileRoute("/packaging-design-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "packaging design sri lanka, branding sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/packaging-design-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="packaging design sri lanka" /></PageShell>),
});
