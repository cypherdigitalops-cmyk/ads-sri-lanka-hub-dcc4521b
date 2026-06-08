import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Event Giveaway Items Sri Lanka | Branded Promo Giveaways";
const DESC = "Event giveaway items in Sri Lanka — branded pens, notebooks, bags, USBs & tech accessories. Bulk pricing from 100 units. Call 0771437707.";

export const Route = createFileRoute("/event-giveaway-items-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "event giveaway items sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/event-giveaway-items-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="event giveaway items sri lanka" /></PageShell>),
});
