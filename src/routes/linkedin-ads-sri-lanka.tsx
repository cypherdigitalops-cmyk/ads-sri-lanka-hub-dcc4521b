import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "social-media-marketing-sri-lanka")!;
const TITLE = "LinkedIn Ads Sri Lanka | B2B Lead Generation from Rs 50,000/month";
const DESC = "LinkedIn ads management in Sri Lanka from Rs 50,000/month. B2B targeting, lead-gen forms, creative & reporting. Call 0771437707.";

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
