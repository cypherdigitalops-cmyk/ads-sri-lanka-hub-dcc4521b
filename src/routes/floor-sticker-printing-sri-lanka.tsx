import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Floor Sticker Printing Sri Lanka | Anti-Slip Floor Decals";
const DESC = "Floor sticker printing in Sri Lanka. Anti-slip certified floor graphics for retail, events & wayfinding. Temporary & permanent options. Call 0701772626.";

export const Route = createFileRoute("/floor-sticker-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "floor sticker printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/floor-sticker-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="floor sticker printing sri lanka" /></PageShell>),
});
