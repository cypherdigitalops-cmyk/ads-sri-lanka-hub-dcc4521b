import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "video-production-sri-lanka")!;
const TITLE = "Commercial Photography Sri Lanka — Brand, Product & Event Shoots";
const DESC = "Professional commercial photography in Sri Lanka — product, food, fashion, corporate, event and brand campaign shoots. Call 0701772626.";

export const Route = createFileRoute("/photography-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "commercial photography sri lanka, product photography sri lanka, event photography sri lanka, advertising photography sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/photography-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="commercial photography sri lanka" /></PageShell>),
});
