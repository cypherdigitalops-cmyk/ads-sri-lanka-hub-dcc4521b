import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "ttl-advertising-sri-lanka")!;
const TITLE = "TTL Advertising SRI LANKA — TTL & Integrated Marketing Services in Sri Lanka | advertisingsrilanka.lk";
const DESC = "Combine ATL reach with BTL precision through fully integrated 360° campaigns. We orchestrate consistent brand stories across TV, radio, digital, social, ou";

export const Route = createFileRoute("/ttl-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "ttl advertising sri lanka, ttl & integrated marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/ttl-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><CategoryHubTemplate category={CAT} /></PageShell>),
});
