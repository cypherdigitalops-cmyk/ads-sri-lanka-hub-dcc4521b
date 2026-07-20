import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Luxury Corporate Gifts Sri Lanka | Premium Executive Gifting";
const DESC = "Luxury corporate gifts in Sri Lanka — premium leather, crystal & metal gift sets with bespoke packaging for VIP clients. Call 0701772626.";

export const Route = createFileRoute("/luxury-corporate-gifts-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "luxury corporate gifts sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/luxury-corporate-gifts-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="luxury corporate gifts sri lanka" /></PageShell>),
});
