import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Poster Printing Sri Lanka | A3 A2 A1 & Custom Size Posters";
const DESC = "Poster printing in Sri Lanka — A3, A2, A1 & custom sizes. Gloss & matt lamination. From Rs 80 per A3. Fast 24–48hr turnaround. Islandwide delivery. Call 0771437707.";

export const Route = createFileRoute("/poster-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "poster printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/poster-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="poster printing sri lanka" /></PageShell>),
});
