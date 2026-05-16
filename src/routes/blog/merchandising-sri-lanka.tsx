import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "What Is Merchandising Sri Lanka? A Practical Sri Lankan Guide";
const DESC = "A practical, no-fluff guide to merchandising sri lanka in Sri Lanka. Real tactics, indicative pricing and proven frameworks. Talk to our specialists.";

export const Route = createFileRoute("/blog/merchandising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "merchandising sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/merchandising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="merchandising sri lanka" extraLinks={[{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising","anchor":"BTL advertising Sri Lanka"},{"href":"/retail-branding-sri-lanka","label":"Retail Branding","anchor":"retail branding Sri Lanka"},{"href":"/corporate-gifting-sri-lanka","label":"Corporate Gifting","anchor":"corporate gifting Sri Lanka"}]} /></PageShell>),
});
