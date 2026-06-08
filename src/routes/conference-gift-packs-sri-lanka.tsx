import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Conference Gift Packs Sri Lanka | Delegate Welcome Kits";
const DESC = "Conference gift packs in Sri Lanka — branded delegate welcome kits with notebooks, pens, USBs & lanyards. Custom packaging. Call 0771437707.";

export const Route = createFileRoute("/conference-gift-packs-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "conference gift packs sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/conference-gift-packs-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="conference gift packs sri lanka" /></PageShell>),
});
