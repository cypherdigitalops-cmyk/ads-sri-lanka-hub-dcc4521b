import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "video-production-sri-lanka")!;
const TITLE = "TV Commercials Sri Lanka | TVC Production & Ad Placement";
const DESC = "TV commercials in Sri Lanka — TVC production, script-to-screen direction & ad placement on Sirasa, Derana, Hiru & ITN. Call 0771437707.";

export const Route = createFileRoute("/tv-commercials-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "tv commercials sri lanka, video production sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/tv-commercials-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="tv commercials sri lanka" /></PageShell>),
});
