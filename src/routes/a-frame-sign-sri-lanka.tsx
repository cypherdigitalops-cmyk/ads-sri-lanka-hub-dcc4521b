import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "A Frame Sign Sri Lanka | Pavement Signs & Sandwich Boards";
const DESC = "A-frame & pavement sign printing in Sri Lanka. Folding sandwich boards for shops, restaurants & street promotions. Durable outdoor signs. Call 0771437707.";

export const Route = createFileRoute("/a-frame-sign-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "a frame sign sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/a-frame-sign-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="a frame sign sri lanka" /></PageShell>),
});
