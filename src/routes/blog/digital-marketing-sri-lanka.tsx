import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Digital Marketing Sri Lanka — Pricing & Best Practices";
const DESC = "Wondering if digital marketing sri lanka is right for your business? This guide explains pros, cons, costs and case studies. Free consultation available.";

export const Route = createFileRoute("/blog/digital-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "digital marketing sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/digital-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="digital marketing sri lanka" extraLinks={[{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing"},{"href":"/google-ads-sri-lanka","label":"Google Ads"},{"href":"/seo-services-sri-lanka","label":"SEO Services"},{"href":"/social-media-marketing-sri-lanka","label":"Social Media Marketing"},{"href":"/","label":"Advertising Sri Lanka (Home)"}]} /></PageShell>),
});
