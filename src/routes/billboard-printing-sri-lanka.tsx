import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Billboard Printing Sri Lanka | Hoarding & Banner Print from Rs 90/sqft";
const DESC = "Billboard printing in Sri Lanka — large-format hoardings, building wraps & roadside billboards from Rs 90/sqft. UV-stable inks, 510gsm flex. Call 0771437707.";

export const Route = createFileRoute("/billboard-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "billboard printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/billboard-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="billboard printing sri lanka" /></PageShell>),
});
