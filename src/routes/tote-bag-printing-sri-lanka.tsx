import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Tote Bag Printing Sri Lanka | Canvas & Non-Woven Bags from Rs 350";
const DESC = "Tote bag printing in Sri Lanka from Rs 350. Cotton canvas, non-woven & jute bags with custom logo printing. Corporate gifts & events. Call 0771437707.";

export const Route = createFileRoute("/tote-bag-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "tote bag printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/tote-bag-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="tote bag printing sri lanka" /></PageShell>),
});
