import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "DTF Printing Sri Lanka | Direct to Film T-Shirt & Fabric Prints";
const DESC = "DTF printing in Sri Lanka — full-colour transfers for t-shirts, hoodies & uniforms. No minimum order. From Rs 150 per transfer. Fast turnaround. Call 0771437707.";

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
