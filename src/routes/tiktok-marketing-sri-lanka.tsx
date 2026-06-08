import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "TikTok Marketing Sri Lanka | Ads, Content & Creator Campaigns";
const DESC = "TikTok marketing in Sri Lanka — TikTok Ads, organic content, creator partnerships & influencer campaigns. Call 0771437707.";

export const Route = createFileRoute("/tiktok-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "tiktok marketing sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/tiktok-marketing-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate category={CAT} keyword="tiktok marketing sri lanka" />
      <section className="mx-auto max-w-3xl px-4 pb-14 text-sm text-muted-foreground">
        <p>
          Looking for expert support? Explore{" "}
          <a
            href="https://cypherdigital.lk/tiktok-marketing-sri-lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            Tiktok Marketing Sri Lanka
          </a>{" "}
          services from a trusted digital partner.
        </p>
      </section>
    </PageShell>
  ),
});
