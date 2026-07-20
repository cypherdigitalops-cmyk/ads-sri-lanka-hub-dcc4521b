import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Bag Printing Sri Lanka | Cotton, Jute & Non-Woven from Rs 95 Each";
const DESC = "Bag printing in Sri Lanka — cotton, jute, canvas & non-woven bags from Rs 95. Screen, heat-transfer & embroidery. Min 50 units. Call 0701772626.";

export const Route = createFileRoute("/bag-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "bag printing sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/bag-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="bag printing sri lanka" /></PageShell>),
});
