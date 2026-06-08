import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Catalogue Printing Sri Lanka | Product Catalogues from Rs 85";
const DESC = "Catalogue printing in Sri Lanka from Rs 85 per copy. A4/A5 perfect-bound or saddle-stitched, gloss/matt lamination. Min 100 copies. Call 0771437707.";

export const Route = createFileRoute("/catalogue-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "catalogue printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/catalogue-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="catalogue printing sri lanka" /></PageShell>),
});
