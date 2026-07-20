import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Neon Sign Sri Lanka | LED Neon Signs Any Shape from Rs 8,000";
const DESC = "Custom LED neon signs in Sri Lanka from Rs 8,000. Any shape, any colour for bars, restaurants & offices. Manufactured islandwide. Call 0701772626.";

export const Route = createFileRoute("/neon-sign-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "neon sign printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/neon-sign-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="neon sign printing sri lanka" /></PageShell>),
});
