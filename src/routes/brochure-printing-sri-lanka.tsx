import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Brochure Printing Sri Lanka | A4 & A5 Brochures from Rs 25";
const DESC = "Brochure printing in Sri Lanka from Rs 25 per copy. A4, A5, trifold & Z-fold. Gloss, matt & soft-touch lamination. Minimum 100 copies. Call 0771437707.";

export const Route = createFileRoute("/brochure-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "brochure printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/brochure-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="brochure printing sri lanka" /></PageShell>),
});
