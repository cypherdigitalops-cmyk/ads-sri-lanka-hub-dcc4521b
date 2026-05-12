import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "pr-communications-sri-lanka")!;
const TITLE = "Market Research And Media Planning Sri Lanka — Strategy, Creative & Media";
const DESC = "Need market research and media planning sri lanka that actually converts? We blend local insight with proven advertising frameworks to deliver leads and sales. Call 0771437707.";

export const Route = createFileRoute("/market-research-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "market research and media planning sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/market-research-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="market research and media planning sri lanka" /></PageShell>),
});
