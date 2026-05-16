import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "What Is Activation Marketing Sri Lanka? Sri Lanka Guide";
const DESC = "A practical, no-fluff guide to activation marketing sri lanka in Sri Lanka. Real tactics, indicative pricing and proven frameworks. Talk to our specialists.";

export const Route = createFileRoute("/blog/activation-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "activation marketing sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/activation-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="activation marketing sri lanka" extraLinks={[{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising"},{"href":"/brand-activation-sri-lanka","label":"Brand Activation"},{"href":"/mall-activation-sri-lanka","label":"Mall Activation"}]} /></PageShell>),
});
