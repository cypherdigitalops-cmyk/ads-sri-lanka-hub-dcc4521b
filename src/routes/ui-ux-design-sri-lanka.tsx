import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "web-design-sri-lanka")!;
const TITLE = "UI/UX Design Sri Lanka | App & Web Design from Rs 50,000";
const DESC = "UI/UX design in Sri Lanka from Rs 50,000. Mobile app, SaaS & website design with Figma prototypes & design systems. Call 0771437707.";

export const Route = createFileRoute("/ui-ux-design-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "ui ux design sri lanka, web design sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/ui-ux-design-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="ui ux design sri lanka" /></PageShell>),
});
