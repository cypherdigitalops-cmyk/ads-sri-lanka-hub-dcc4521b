import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "email-sms-marketing-sri-lanka")!;
const TITLE = "The Sri Lankan Brand's Playbook to Newsletter Marketing Sri Lanka";
const DESC = "From planning to launch — a complete walkthrough of newsletter marketing sri lanka for Sri Lankan businesses.";

export const Route = createFileRoute("/blog/newsletter-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "newsletter marketing sri lanka, email marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/newsletter-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="newsletter marketing sri lanka" extraLinks={[{"href":"/email-sms-marketing-sri-lanka","label":"Email & SMS Marketing"},{"href":"/content-marketing-sri-lanka","label":"Content Marketing"}]} /></PageShell>),
});
