import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "seo-services-sri-lanka")!;
const TITLE = "Top-Rated Ecommerce Seo Sri Lanka Agency in Sri Lanka | advertising...";
const DESC = "Hire trusted specialists for ecommerce seo sri lanka in Sri Lanka. Goal-driven planning, on-brand creative and always-on optimisation. Free 15-min consulta...";

export const Route = createFileRoute("/ecommerce-seo-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "ecommerce seo sri lanka, seo services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/ecommerce-seo-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="ecommerce seo sri lanka" /></PageShell>),
});
