import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "In-App & Mobile Advertising Sri Lanka — Reach Users Where They Scroll";
const DESC = "Performance-driven in-app and mobile advertising for Sri Lankan audiences — banners, interstitials, rewarded video and playable ads across top apps and ad networks.";

export const Route = createFileRoute("/mobile-app-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "in-app mobile advertising sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/mobile-app-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="in-app mobile advertising sri lanka" /></PageShell>),
});
