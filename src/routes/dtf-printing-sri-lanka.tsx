import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "DTF Printing Sri Lanka | Heat Transfers from Rs 150 Each";
const DESC = "DTF printing in Sri Lanka from Rs 150 per transfer. Full-colour heat transfers for t-shirts, hoodies & bags. No minimum order. Any fabric colour. Call 0701772626.";

export const Route = createFileRoute("/dtf-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "dtf printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/dtf-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="dtf printing sri lanka" /></PageShell>),
});
