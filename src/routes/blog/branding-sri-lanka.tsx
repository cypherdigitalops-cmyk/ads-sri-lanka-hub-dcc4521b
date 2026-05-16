import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "branding-sri-lanka")!;
const TITLE = "Branding Sri Lanka Explained — Costs, Channels & ROI in Sri Lanka";
const DESC = "Learn how branding sri lanka delivers measurable ROI for Sri Lankan brands — channels, audience targeting, creative tips and reporting.";

export const Route = createFileRoute("/blog/branding-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "branding sri lanka, branding sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/branding-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="branding sri lanka" extraLinks={[{"href":"/branding-sri-lanka","label":"Branding & Creative","anchor":"branding Sri Lanka"},{"href":"/web-design-sri-lanka","label":"Web Design","anchor":"web design Sri Lanka"},{"href":"/pr-communications-sri-lanka","label":"PR & Communications","anchor":"PR Sri Lanka"},{"href":"/","label":"Advertising Sri Lanka (Home)","anchor":"advertising Sri Lanka"}]} /></PageShell>),
});
