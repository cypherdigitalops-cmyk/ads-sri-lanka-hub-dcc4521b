import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Water Bottle Printing Sri Lanka | Branded Bottles from Rs 450";
const DESC = "Water bottle printing in Sri Lanka from Rs 450. BPA-free plastic, aluminium & stainless steel bottles with logo print. Call 0771437707.";

export const Route = createFileRoute("/water-bottle-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "water bottle printing sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/water-bottle-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="water bottle printing sri lanka" /></PageShell>),
});
