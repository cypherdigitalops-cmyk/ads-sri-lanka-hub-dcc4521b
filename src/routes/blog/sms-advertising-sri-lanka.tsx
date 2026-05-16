import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "email-sms-marketing-sri-lanka")!;
const TITLE = "The Sri Lankan Brand's Playbook to SMS Advertising Sri Lanka";
const DESC = "From planning to launch — a complete walkthrough of sms advertising sri lanka for Sri Lankan businesses. Tools, tips and partner-selection checklist included.";

export const Route = createFileRoute("/blog/sms-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "sms advertising sri lanka, email marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/sms-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="sms advertising sri lanka" extraLinks={[{"href":"/email-sms-marketing-sri-lanka","label":"Email & SMS Marketing","anchor":"email and SMS marketing Sri Lanka"},{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing","anchor":"digital marketing Sri Lanka"}]} /></PageShell>),
});
