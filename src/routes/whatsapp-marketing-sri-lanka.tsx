import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "email-sms-marketing-sri-lanka")!;
const TITLE = "Whatsapp Marketing SRI LANKA — Best Whatsapp Marketing SRI LANKA Services | advertisingsrilanka.lk";
const DESC = "Looking for whatsapp marketing sri lanka? We deliver high-performance whatsapp marketing sri lanka campaigns for Sri Lankan businesses. Strategy, creative & media in one team. Call 0771437707.";

export const Route = createFileRoute("/whatsapp-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "whatsapp marketing sri lanka, email marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/whatsapp-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="whatsapp marketing sri lanka" /></PageShell>),
});
