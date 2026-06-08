import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Eco Solvent Printing Sri Lanka | Outdoor-Grade Wide Format";
const DESC = "Eco solvent printing in Sri Lanka — outdoor-grade banners, vehicle graphics & signage with UV-stable, low-odour inks. Call 0771437707.";

export const Route = createFileRoute("/eco-solvent-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "eco solvent printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/eco-solvent-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="eco solvent printing sri lanka" /></PageShell>),
});
