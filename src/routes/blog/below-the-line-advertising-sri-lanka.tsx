import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "Below The Line Advertising Sri Lanka — Costs, Channels & ROI";
const DESC = "Learn how below the line advertising sri lanka delivers measurable ROI for Sri Lankan brands — channels, audience targeting, creative tips and reporting.";

export const Route = createFileRoute("/blog/below-the-line-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "below the line advertising sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/below-the-line-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="below the line advertising sri lanka" extraLinks={[{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising","anchor":"BTL advertising Sri Lanka"},{"href":"/brand-activation-sri-lanka","label":"Brand Activation","anchor":"brand activation Sri Lanka"},{"href":"/field-marketing-sri-lanka","label":"Field Marketing","anchor":"field marketing Sri Lanka"},{"href":"/","label":"Advertising Sri Lanka (Home)","anchor":"advertising Sri Lanka"}]} /></PageShell>),
});
