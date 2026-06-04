import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Hoodie Printing Sri Lanka | Custom Branded Hoodies from Rs 2,500";
const DESC = "Hoodie printing in Sri Lanka from Rs 2,500. Screen print, embroidery & DTF for corporate hoodies, event merch & team apparel. Fast turnaround. Call 0771437707.";

export const Route = createFileRoute("/hoodie-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "hoodie printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/hoodie-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="hoodie printing sri lanka" /></PageShell>),
});
