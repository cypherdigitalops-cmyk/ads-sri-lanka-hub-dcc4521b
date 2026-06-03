import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Roll Up Banner Printing Sri Lanka | Pull-Up Stands from Rs 4,500";
const DESC = "Roll up banner printing in Sri Lanka from Rs 4,500 including stand. 85×200cm standard size. Express 24hr service available. Islandwide delivery. Call 0771437707.";

export const Route = createFileRoute("/roll-up-banner-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "roll up banner printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/roll-up-banner-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="roll up banner printing sri lanka" /></PageShell>),
});
