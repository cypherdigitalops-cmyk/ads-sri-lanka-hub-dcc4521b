import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "The Sri Lankan Brand's Playbook to Stall Branding Sri Lanka";
const DESC = "From planning to launch — a complete walkthrough of stall branding sri lanka for Sri Lankan businesses. Tools, tips and partner-selection checklist included.";

export const Route = createFileRoute("/blog/stall-branding-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "stall branding sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/stall-branding-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="stall branding sri lanka" extraLinks={[{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising","anchor":"BTL advertising Sri Lanka"},{"href":"/exhibition-branding-sri-lanka","label":"Exhibition Branding","anchor":"exhibition branding Sri Lanka"},{"href":"/brand-activation-sri-lanka","label":"Brand Activation","anchor":"brand activation Sri Lanka"}]} /></PageShell>),
});
