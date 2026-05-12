import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Exhibition Giveaway Items Sri Lanka Services — Get a Free Quote Today";
const DESC = "Get measurable results from exhibition giveaway items sri lanka in Sri Lanka. Strategy, sourcing, branding and delivery handled by one specialist team.";

export const Route = createFileRoute("/exhibition-giveaway-items-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "exhibition giveaway items sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/exhibition-giveaway-items-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="exhibition giveaway items sri lanka" /></PageShell>),
});
