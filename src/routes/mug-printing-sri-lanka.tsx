import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Mug Printing Sri Lanka — Custom Ceramic, Travel & Magic Mugs | Logo & Photo Printing";
const DESC = "Custom mug printing in Sri Lanka — ceramic, magic, travel & enamel mugs with sublimation photo or logo print. From 12 units. Same-day Colombo. Islandwide. Call 0771437707.";

export const Route = createFileRoute("/mug-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "mug printing sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/mug-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="mug printing sri lanka" /></PageShell>),
});
