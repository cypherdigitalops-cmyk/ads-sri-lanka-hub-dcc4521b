import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Hoarding Printing Sri Lanka | Billboard Flex from Rs 150/sqft";
const DESC = "Hoarding printing in Sri Lanka from Rs 150/sqft. Heavy-duty PVC flex for highways, construction sites & commercial properties. Islandwide installation. Call 0771437707.";

export const Route = createFileRoute("/hoarding-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "hoarding printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/hoarding-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="hoarding printing sri lanka" /></PageShell>),
});
