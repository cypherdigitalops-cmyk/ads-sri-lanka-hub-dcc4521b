import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "ttl-advertising-sri-lanka")!;
const TITLE = "Omnichannel Marketing Sri Lanka | Trusted Agency in Sri Lanka — adv...";
const DESC = "Looking for omnichannel marketing sri lanka? Our Sri Lankan team plans, launches and optimises high-performing omnichannel marketing sri lanka campaigns wi...";

export const Route = createFileRoute("/omnichannel-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "omnichannel marketing sri lanka, ttl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/omnichannel-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="omnichannel marketing sri lanka" /></PageShell>),
});
