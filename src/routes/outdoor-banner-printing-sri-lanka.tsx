import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Outdoor Banner Printing Sri Lanka | Weather-Resistant PVC Banners";
const DESC = "Outdoor banner printing in Sri Lanka — PVC flex & vinyl banners from Rs 120/sqft. Monsoon-rated, hemmed & eyeleted. Any size. Call 0701772626.";

export const Route = createFileRoute("/outdoor-banner-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "outdoor banner printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/outdoor-banner-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="outdoor banner printing sri lanka" /></PageShell>),
});
