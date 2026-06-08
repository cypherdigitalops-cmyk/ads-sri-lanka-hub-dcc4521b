import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "social-media-marketing-sri-lanka")!;
const TITLE = "Influencer Marketing Sri Lanka | Creator Campaigns & Sourcing";
const DESC = "Influencer marketing in Sri Lanka — creator sourcing, campaign management, content briefs & performance reporting. Call 0771437707.";

export const Route = createFileRoute("/influencer-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "influencer marketing sri lanka, social media marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/influencer-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="influencer marketing sri lanka" /></PageShell>),
});
