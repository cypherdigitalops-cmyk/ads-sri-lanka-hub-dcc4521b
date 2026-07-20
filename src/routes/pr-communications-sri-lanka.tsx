import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "pr-communications-sri-lanka")!;
const TITLE = "PR & Communications in Sri Lanka — Services Hub";
const DESC = "Public relations, media coverage, press releases and market research in Sri Lanka. Free guidance — call 0701772626 or WhatsApp.";

export const Route = createFileRoute("/pr-communications-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "pr sri lanka, public relations sri lanka, communications sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/pr-communications-sri-lanka` }],
  }),
  component: () => (<PageShell><CategoryHubTemplate category={CAT} /></PageShell>),
});