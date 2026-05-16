import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Online Marketing Sri Lanka — Costs, Channels & ROI";
const DESC = "Learn how online marketing sri lanka delivers measurable ROI for Sri Lankan brands — channels, audience targeting, creative tips and reporting.";

export const Route = createFileRoute("/blog/online-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "online marketing sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/online-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="online marketing sri lanka" extraLinks={[{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing","anchor":"digital marketing Sri Lanka"},{"href":"/social-media-marketing-sri-lanka","label":"Social Media Marketing","anchor":"social media marketing Sri Lanka"},{"href":"/","label":"Advertising Sri Lanka (Home)","anchor":"advertising Sri Lanka"}]} /></PageShell>),
});
