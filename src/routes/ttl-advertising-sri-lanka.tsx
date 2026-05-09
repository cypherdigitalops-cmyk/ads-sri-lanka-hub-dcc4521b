import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "ttl-advertising-sri-lanka")!;
const TITLE = "Sri Lanka's #1 TTL Advertising Hub — Plans, Pricing & Free Advice";
const DESC = "Through-the-line, 360° and omnichannel campaigns that connect every touchpoint. Get pricing and free advice — call 0771437707 or WhatsApp.";

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
