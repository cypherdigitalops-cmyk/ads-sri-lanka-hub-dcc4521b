import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Pay Per Click Sri Lanka | Practical Business Guide";
const DESC = "Explore pay per click in Sri Lanka: practical steps, budget factors, measurement and common mistakes. Get clear answers and guidance.";

export const Route = createFileRoute("/blog/pay-per-click-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "pay per click sri lanka, marketing planning sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/pay-per-click-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="pay per click sri lanka" extraLinks={[{"href":"/ppc-sri-lanka","label":"PPC Sri Lanka","anchor":"PPC Sri Lanka"},{"href":"/google-ads-sri-lanka","label":"Google Ads","anchor":"Google Ads Sri Lanka"},{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing","anchor":"digital marketing Sri Lanka"}]} /></PageShell>),
});
