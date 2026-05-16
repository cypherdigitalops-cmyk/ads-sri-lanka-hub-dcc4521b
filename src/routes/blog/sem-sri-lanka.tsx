import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "The Sri Lankan Brand's Playbook to SEM Sri Lanka";
const DESC = "From planning to launch — a complete walkthrough of SEM sri lanka for Sri Lankan businesses. Tools, tips and partner-selection checklist included.";

export const Route = createFileRoute("/blog/sem-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "SEM sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/sem-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="SEM sri lanka" extraLinks={[{"href":"/google-ads-sri-lanka","label":"Google Ads"},{"href":"/ppc-sri-lanka","label":"PPC Sri Lanka"},{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing"}]} /></PageShell>),
});
