import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Exhibition Banner Printing Sri Lanka | Trade Show Graphics";
const DESC = "Exhibition banner printing in Sri Lanka for BMICH, trade shows & product launches. Fabric, flex & pop-up banners from Rs 3,500. Fast turnaround. Call 0771437707.";

export const Route = createFileRoute("/exhibition-banner-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "exhibition banner printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/exhibition-banner-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="exhibition banner printing sri lanka" /></PageShell>),
});
