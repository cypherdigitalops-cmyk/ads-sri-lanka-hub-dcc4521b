import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Vehicle Sticker Printing Sri Lanka | Car & Van Vinyl Stickers";
const DESC = "Vehicle sticker printing in Sri Lanka using cast vinyl. Car, van, bus & tuk tuk stickers from Rs 25/sqft. Weatherproof 3-5 year life. Islandwide. Call 0701772626.";

export const Route = createFileRoute("/vehicle-sticker-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "vehicle sticker printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/vehicle-sticker-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="vehicle sticker printing sri lanka" /></PageShell>),
});
