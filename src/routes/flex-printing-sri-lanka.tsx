import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Flex Printing Sri Lanka | PVC Flex Banners from Rs 120/sqft";
const DESC = "Flex printing in Sri Lanka from Rs 120/sqft. Frontlit & backlit PVC flex for banners, hoardings & outdoor advertising. Any size, fast turnaround. Call 0771437707.";

export const Route = createFileRoute("/flex-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "flex printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/flex-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="flex printing sri lanka" /></PageShell>),
});
