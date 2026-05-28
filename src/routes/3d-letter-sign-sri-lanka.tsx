import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "3D Letter Sign Sri Lanka — Premium Quality, Islandwide Delivery";
const DESC = "Hire trusted specialists for 3d letter sign sri lanka in Sri Lanka. Goal-driven planning, on-brand creative and reliable production.";

export const Route = createFileRoute("/3d-letter-sign-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "3d letter sign sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/3d-letter-sign-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="3d letter sign sri lanka" /></PageShell>),
});
