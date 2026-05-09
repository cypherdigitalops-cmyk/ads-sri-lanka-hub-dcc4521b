import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "social-media-marketing-sri-lanka")!;
const TITLE = "Top-Rated Linkedin Ads Sri Lanka in Sri Lanka";
const DESC = "Hire trusted specialists for linkedin ads sri lanka in Sri Lanka. Goal-driven planning, on-brand creative and always-on optimisation.";

export const Route = createFileRoute("/linkedin-ads-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "linkedin ads sri lanka, social media marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/linkedin-ads-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="linkedin ads sri lanka" /></PageShell>),
});
