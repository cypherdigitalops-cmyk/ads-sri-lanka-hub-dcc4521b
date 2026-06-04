import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "T-Shirt Printing Sri Lanka | Custom T-Shirts from Rs 800 Each";
const DESC = "T-shirt printing in Sri Lanka from Rs 800. Screen print, DTG & DTF for corporates, events & teams. Minimum 12 pieces for screen print. Call 0771437707.";

export const Route = createFileRoute("/t-shirt-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "t shirt printing sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/t-shirt-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="t shirt printing sri lanka" /></PageShell>),
});
