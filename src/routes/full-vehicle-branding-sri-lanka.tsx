import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Full Vehicle Branding Sri Lanka | Complete Fleet Wrap & Graphics";
const DESC = "Full vehicle branding in Sri Lanka for cars, vans, trucks & buses. Complete corporate fleet wraps with cast vinyl. Professional installation. Call 0701772626.";

export const Route = createFileRoute("/full-vehicle-branding-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "full vehicle branding sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/full-vehicle-branding-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="full vehicle branding sri lanka" /></PageShell>),
});
