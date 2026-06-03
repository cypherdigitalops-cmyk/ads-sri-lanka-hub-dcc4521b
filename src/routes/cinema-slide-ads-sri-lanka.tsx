import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "Cinema Slide Ads Sri Lanka — Affordable Pre-Show Advertising";
const DESC = "Affordable static slide advertising before movies at top Sri Lankan cinemas. A cost-efficient alternative to full-screen TVCs with strong local reach.";

export const Route = createFileRoute("/cinema-slide-ads-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "cinema slide ads sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/cinema-slide-ads-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="cinema slide ads sri lanka" /></PageShell>),
});
