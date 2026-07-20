import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Vehicle Branding Sri Lanka | Car Wraps from Rs 40,000";
const DESC = "Vehicle branding in Sri Lanka from Rs 40,000. Full wraps, partial wraps & fleet graphics using cast vinyl. 3-5 year outdoor life. Islandwide. Call 0701772626.";

export const Route = createFileRoute("/vehicle-branding-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "vehicle branding sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/vehicle-branding-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="vehicle branding sri lanka" /></PageShell>),
});
