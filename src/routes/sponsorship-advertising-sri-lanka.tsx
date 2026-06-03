import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "Sponsorship Advertising Sri Lanka — Events, Sports & Media Deals";
const DESC = "Sponsor events, sports teams, TV shows, podcasts and influencers in Sri Lanka. We negotiate rights, design activations and measure the brand lift you actually get.";

export const Route = createFileRoute("/sponsorship-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "sponsorship advertising sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/sponsorship-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="sponsorship advertising sri lanka" /></PageShell>),
});
