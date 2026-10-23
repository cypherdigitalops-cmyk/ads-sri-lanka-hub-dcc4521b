import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "email-sms-marketing-sri-lanka")!;
const TITLE = "Promotional SMS Sri Lanka | Practical Business Guide";
const DESC = "Explore promotional sms in Sri Lanka: practical steps, budget factors, measurement and common mistakes. Get clear answers and guidance.";

export const Route = createFileRoute("/blog/promotional-sms-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "promotional sms sri lanka, marketing planning sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/promotional-sms-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="promotional sms sri lanka" extraLinks={[{"href":"/email-sms-marketing-sri-lanka","label":"Email & SMS Marketing","anchor":"email and SMS marketing Sri Lanka"},{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising","anchor":"BTL advertising Sri Lanka"}]} /></PageShell>),
});
