import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Shrink Sleeve Printing Sri Lanka | FMCG & Beverage Label Sleeves";
const DESC = "Shrink sleeve label printing in Sri Lanka. Full-body PET & PETG sleeves for bottles, jars & cans. 360-degree branding. From 500 units. Call 0701772626.";

export const Route = createFileRoute("/shrink-sleeve-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "shrink sleeve printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/shrink-sleeve-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="shrink sleeve printing sri lanka" /></PageShell>),
});
