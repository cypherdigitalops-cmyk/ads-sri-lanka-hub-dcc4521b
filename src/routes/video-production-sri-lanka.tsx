import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "video-production-sri-lanka")!;
const TITLE = "Video Production Sri Lanka — Compare Services, Costs & Agencies";
const DESC = "TVCs, corporate films, animation and drone videography. Get pricing and free advice — call 0701772626 or WhatsApp.";

export const Route = createFileRoute("/video-production-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "video production sri lanka, video production & media sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/video-production-sri-lanka` }],
  }),
  component: () => (<PageShell><CategoryHubTemplate category={CAT} /></PageShell>),
});
