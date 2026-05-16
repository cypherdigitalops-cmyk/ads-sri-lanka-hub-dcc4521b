import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "outdoor-advertising-sri-lanka")!;
const TITLE = "How LED Display Advertising Sri Lanka Works in Sri Lanka";
const DESC = "Compare options, budgets and timelines for led display advertising sri lanka. We break down each step so you can plan with confidence.";

export const Route = createFileRoute("/blog/led-display-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "led display advertising sri lanka, outdoor advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/led-display-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="led display advertising sri lanka" extraLinks={[{"href":"/led-screen-rental-sri-lanka","label":"LED Screen Rental","anchor":"LED screen rent"},{"href":"/outdoor-advertising-sri-lanka","label":"Outdoor Advertising","anchor":"outdoor advertising Sri Lanka"},{"href":"/event-management-sri-lanka","label":"Event Management Sri Lanka","anchor":"event management Sri Lanka"}]} /></PageShell>),
});
