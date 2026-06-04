import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Paper Bag Printing Sri Lanka | Custom Branded Shopping Bags";
const DESC = "Custom paper bag printing in Sri Lanka. Branded kraft & art paper shopping bags for boutiques, bakeries & retailers. Eco-friendly options. Call 0771437707.";

export const Route = createFileRoute("/paper-bag-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "paper bag printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/paper-bag-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="paper bag printing sri lanka" /></PageShell>),
});
