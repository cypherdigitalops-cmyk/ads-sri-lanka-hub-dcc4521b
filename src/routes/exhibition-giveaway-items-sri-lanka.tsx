import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Exhibition Giveaway Items Sri Lanka | Booth Promo Items";
const DESC = "Exhibition giveaway items in Sri Lanka — branded bags, pens, USBs & lanyards for trade show booths. Bulk discounts. Call 0701772626.";

export const Route = createFileRoute("/exhibition-giveaway-items-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "exhibition giveaway items sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/exhibition-giveaway-items-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="exhibition giveaway items sri lanka" /></PageShell>),
});
