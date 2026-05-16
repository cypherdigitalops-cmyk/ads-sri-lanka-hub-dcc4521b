import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "email-sms-marketing-sri-lanka")!;
const TITLE = "Promotional SMS Sri Lanka — Pricing & Best Practices";
const DESC = "Wondering if promotional sms sri lanka is right for your business? This guide explains pros, cons, costs and case studies. Free consultation available.";

export const Route = createFileRoute("/blog/promotional-sms-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "promotional sms sri lanka, email marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/promotional-sms-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="promotional sms sri lanka" extraLinks={[{"href":"/email-sms-marketing-sri-lanka","label":"Email & SMS Marketing","anchor":"email and SMS marketing Sri Lanka"},{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising","anchor":"BTL advertising Sri Lanka"}]} /></PageShell>),
});
