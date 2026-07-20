import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Delegate Gift Packs Sri Lanka | Conference Welcome Kits";
const DESC = "Delegate gift packs in Sri Lanka — branded welcome kits for conferences, summits & seminars with custom assembly & delivery. Call 0701772626.";

export const Route = createFileRoute("/delegate-gift-packs-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "delegate gift packs sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/delegate-gift-packs-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="delegate gift packs sri lanka" /></PageShell>),
});
