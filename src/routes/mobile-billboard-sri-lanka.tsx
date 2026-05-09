import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "outdoor-advertising-sri-lanka")!;
const TITLE = "Top-Rated Mobile Billboard Sri Lanka in Sri Lanka";
const DESC = "Hire trusted specialists for mobile billboard sri lanka in Sri Lanka. Goal-driven planning, on-brand creative and always-on optimisation.";

export const Route = createFileRoute("/mobile-billboard-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "mobile billboard sri lanka, outdoor advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/mobile-billboard-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="mobile billboard sri lanka" /></PageShell>),
});
