import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Branded Merchandise Sri Lanka | Custom Corporate Giveaways";
const DESC = "Branded merchandise in Sri Lanka — caps, mugs, pens, USBs, bags & apparel printed or embroidered with your logo. Min 50 units. Call 0771437707.";

export const Route = createFileRoute("/branded-merchandise-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "branded merchandise sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/branded-merchandise-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="branded merchandise sri lanka" /></PageShell>),
});
