import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Stage Backdrop Printing Sri Lanka | Conference Stage Banners";
const DESC = "Stage backdrop printing in Sri Lanka for conferences, concerts & corporate events. Large format fabric & vinyl stage backdrops. Fast turnaround. Call 0771437707.";

export const Route = createFileRoute("/stage-backdrop-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "stage backdrop printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/stage-backdrop-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="stage backdrop printing sri lanka" /></PageShell>),
});
