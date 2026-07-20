import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Corporate Gift Hampers Sri Lanka | Festive & Year-End Hampers";
const DESC = "Corporate gift hampers in Sri Lanka — festive, Avurudu & year-end hampers with custom branding & islandwide delivery. From Rs 2,500. Call 0701772626.";

export const Route = createFileRoute("/corporate-gift-hampers-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "corporate gift hampers sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/corporate-gift-hampers-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="corporate gift hampers sri lanka" /></PageShell>),
});
