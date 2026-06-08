import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Booklet Printing Sri Lanka | A4 & A5 Booklets from Rs 35 per Copy";
const DESC = "Booklet printing in Sri Lanka from Rs 35 per copy. Saddle-stitch & perfect bound, A4/A5, 8–200 pages, gloss or matt. Min 100 copies. Call 0771437707.";

export const Route = createFileRoute("/booklet-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "booklet printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/booklet-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="booklet printing sri lanka" /></PageShell>),
});
