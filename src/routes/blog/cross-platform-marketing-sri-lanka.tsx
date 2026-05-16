import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "ttl-advertising-sri-lanka")!;
const TITLE = "Cross Platform Marketing Sri Lanka in 2026 — Trends & Tactics";
const DESC = "Avoid the most common cross platform marketing sri lanka mistakes Sri Lankan brands make.";

export const Route = createFileRoute("/blog/cross-platform-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "cross platform marketing sri lanka, ttl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/cross-platform-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="cross platform marketing sri lanka" extraLinks={[{"href":"/ttl-advertising-sri-lanka","label":"TTL & Integrated Marketing","anchor":"integrated advertising Sri Lanka"},{"href":"/omnichannel-marketing-sri-lanka","label":"Omnichannel Marketing","anchor":"omnichannel marketing Sri Lanka"},{"href":"/multi-channel-advertising-sri-lanka","label":"Multi Channel Advertising","anchor":"multi channel advertising Sri Lanka"}]} /></PageShell>),
});
