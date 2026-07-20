import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Printing Services Sri Lanka | Banners, Signage, Cards & Packaging — Same-Day in Colombo";
const DESC = "Full-service printing in Sri Lanka — banners, signage, business cards, packaging, vehicle wraps, t-shirts. Same-day jobs in Colombo. Call 0701772626.";

export const Route = createFileRoute("/printing-services-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "printing services sri lanka, large format printing sri lanka, hoarding printing sri lanka, flex printing sri lanka, banner printing sri lanka, billboard printing sri lanka, vehicle branding sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/printing-services-sri-lanka` }],
  }),
  component: () => (<PageShell><CategoryHubTemplate category={CAT} /></PageShell>),
});
