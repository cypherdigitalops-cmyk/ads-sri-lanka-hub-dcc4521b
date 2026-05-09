import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "outdoor-advertising-sri-lanka")!;
const TITLE = "Outdoor Advertising SRI LANKA — Outdoor Advertising Services in Sri Lanka | advertisingsrilanka.lk";
const DESC = "Dominate Sri Lanka's streets with high-impact outdoor advertising. We secure premium billboards, digital LEDs, transit, mobile and hoardings on Colombo's b";

export const Route = createFileRoute("/outdoor-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "outdoor advertising sri lanka, outdoor advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/outdoor-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><CategoryHubTemplate category={CAT} /></PageShell>),
});
