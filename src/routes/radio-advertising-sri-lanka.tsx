import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "Radio Advertising Sri Lanka | FM Ad Slots on Sirasa, Hiru & TNL";
const DESC = "Radio advertising in Sri Lanka — ad slots on Sirasa FM, Hiru FM, TNL Radio, Y FM & Yes FM. Script, production & airtime buying. Call 0771437707.";

export const Route = createFileRoute("/radio-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "radio advertising sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/radio-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="radio advertising sri lanka" /></PageShell>),
});
