import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Beginner's Guide to Conversion Marketing Sri Lanka";
const DESC = "An expert overview of conversion marketing sri lanka in Sri Lanka — what works in 2026, what to avoid and how to measure results.";

export const Route = createFileRoute("/blog/conversion-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "conversion marketing sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/conversion-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="conversion marketing sri lanka" extraLinks={[{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing"},{"href":"/performance-marketing-sri-lanka","label":"Performance Marketing"},{"href":"/lead-generation-sri-lanka","label":"Lead Generation"}]} /></PageShell>),
});
