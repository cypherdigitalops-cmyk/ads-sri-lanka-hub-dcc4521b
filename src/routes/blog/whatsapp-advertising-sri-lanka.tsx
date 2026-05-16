import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "email-sms-marketing-sri-lanka")!;
const TITLE = "Whatsapp Advertising Sri Lanka in 2026 — Trends & Tactics";
const DESC = "Avoid the most common whatsapp advertising sri lanka mistakes Sri Lankan brands make. This guide covers strategy, creative and execution from start to finish.";

export const Route = createFileRoute("/blog/whatsapp-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "whatsapp advertising sri lanka, email marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/whatsapp-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="whatsapp advertising sri lanka" extraLinks={[{"href":"/social-media-marketing-sri-lanka","label":"Social Media Marketing","anchor":"social media marketing Sri Lanka"},{"href":"/email-sms-marketing-sri-lanka","label":"Email & SMS Marketing","anchor":"email and SMS marketing Sri Lanka"},{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing","anchor":"digital marketing Sri Lanka"}]} /></PageShell>),
});
