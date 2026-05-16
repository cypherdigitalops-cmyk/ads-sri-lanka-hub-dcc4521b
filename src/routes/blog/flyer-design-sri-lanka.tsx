import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "branding-sri-lanka")!;
const TITLE = "The Sri Lankan Brand's Playbook to Flyer Design Sri Lanka";
const DESC = "From planning to launch — a complete walkthrough of flyer design sri lanka for Sri Lankan businesses. Tools, tips and partner-selection checklist included.";

export const Route = createFileRoute("/blog/flyer-design-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "flyer design sri lanka, branding sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/flyer-design-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="flyer design sri lanka" extraLinks={[{"href":"/branding-sri-lanka","label":"Branding & Creative"},{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising"},{"href":"/printing-services-sri-lanka","label":"Printing Services"}]} /></PageShell>),
});
