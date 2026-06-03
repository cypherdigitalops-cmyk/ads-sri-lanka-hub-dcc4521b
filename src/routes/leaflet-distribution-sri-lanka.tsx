import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "Newspaper Insert & Leaflet Distribution Sri Lanka";
const DESC = "Hyper-local leaflet, flyer and newspaper insert distribution across Colombo, Kandy, Galle and every district. GPS-tracked teams and verified delivery reports.";

export const Route = createFileRoute("/leaflet-distribution-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "leaflet distribution sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/leaflet-distribution-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="leaflet distribution sri lanka" /></PageShell>),
});
