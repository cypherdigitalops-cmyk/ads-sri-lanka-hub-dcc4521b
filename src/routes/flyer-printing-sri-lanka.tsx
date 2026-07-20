import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Flyer Printing Sri Lanka | A5 & A4 Flyers from Rs 3 Each";
const DESC = "Flyer printing in Sri Lanka from Rs 3 per A5 flyer. Single & double sided, gloss or matt. Minimum 100 copies. Fast 24hr turnaround. Call 0701772626.";

export const Route = createFileRoute("/flyer-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "flyer printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/flyer-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="flyer printing sri lanka" /></PageShell>),
});
