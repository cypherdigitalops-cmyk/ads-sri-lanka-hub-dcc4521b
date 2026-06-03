import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "industry-advertising-sri-lanka")!;
const TITLE = "Industry-Specific Advertising Sri Lanka — Playbooks by Sector";
const DESC = "Tailored advertising strategies for hotels, real estate, schools, hospitals, restaurants, banks, e-commerce, automotive, IT and more in Sri Lanka.";

export const Route = createFileRoute("/industry-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "industry advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/industry-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><CategoryHubTemplate category={CAT} /></PageShell>),
});
