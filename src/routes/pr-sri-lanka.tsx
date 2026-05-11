import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "pr-communications-sri-lanka")!;
const TITLE = "PR & Public Relations in Sri Lanka — Complete Guide | advertisingsrilanka.lk";
const DESC = "Complete guide to PR and public relations in Sri Lanka. Learn how press releases, media relations and reputation building work. Call 0771437707 for free guidance.";

export const Route = createFileRoute("/pr-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "pr sri lanka, public relations sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/pr-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="pr and public relations sri lanka" /></PageShell>),
});