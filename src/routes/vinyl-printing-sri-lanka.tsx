import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Vinyl Printing Sri Lanka | Stickers, Wraps & Decals from Rs 120/sqft";
const DESC = "Vinyl printing in Sri Lanka from Rs 120/sqft. Self-adhesive vinyl for stickers, wall graphics, vehicle wraps & window decals. Call 0701772626.";

export const Route = createFileRoute("/vinyl-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "vinyl printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/vinyl-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="vinyl printing sri lanka" /></PageShell>),
});
