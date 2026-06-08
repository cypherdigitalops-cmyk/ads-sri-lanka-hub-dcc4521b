import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Notebook Printing Sri Lanka | Custom Branded Notebooks from Rs 250";
const DESC = "Notebook printing in Sri Lanka from Rs 250. A5/A6 hardback & soft-cover with logo debossing or full-colour print. Call 0771437707.";

export const Route = createFileRoute("/notebook-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "notebook printing sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/notebook-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="notebook printing sri lanka" /></PageShell>),
});
