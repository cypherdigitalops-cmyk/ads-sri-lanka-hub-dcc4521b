import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Social Media Advertising Sri Lanka — Costs, Channels & ROI";
const DESC = "Learn how social media advertising sri lanka delivers measurable ROI for Sri Lankan brands — channels, audience targeting, creative tips and reporting.";

export const Route = createFileRoute("/blog/social-media-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "social media advertising sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/social-media-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="social media advertising sri lanka" extraLinks={[{"href":"/social-media-marketing-sri-lanka","label":"Social Media Marketing"},{"href":"/facebook-marketing-sri-lanka","label":"Facebook Marketing"},{"href":"/instagram-marketing-sri-lanka","label":"Instagram Marketing"},{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing"}]} /></PageShell>),
});
