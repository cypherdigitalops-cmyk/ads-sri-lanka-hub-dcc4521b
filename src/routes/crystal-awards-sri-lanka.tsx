import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Crystal Awards Sri Lanka | Engraved Crystal Trophies from Rs 4,500";
const DESC = "Crystal awards in Sri Lanka from Rs 4,500. Optical-grade crystal trophies with laser engraving for corporate recognition & awards nights. Call 0701772626.";

export const Route = createFileRoute("/crystal-awards-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "crystal awards sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/crystal-awards-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="crystal awards sri lanka" /></PageShell>),
});
