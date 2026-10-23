import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Google Ads Sri Lanka | Services & Planning Guide";
const DESC = "Explore google ads in Sri Lanka: service scope, budget factors, measurement and common mistakes. Get clear answers and guidance.";

export const Route = createFileRoute("/google-ads-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "google ads sri lanka, marketing planning sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/google-ads-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate category={CAT} keyword="google ads sri lanka" />
      <section className="mx-auto max-w-3xl px-4 pb-14 text-sm text-muted-foreground">
        <p>
          Looking for another angle on paid search? See this resource on{" "}
          <a
            href="https://cypherdigital.lk/google-ads-sri-lanka"
            target="_blank"
            rel="noopener"
            className="text-primary underline-offset-2 hover:underline"
          >
            google ads sri lanka
          </a>{" "}
          for additional local campaign insights.
        </p>
      </section>
    </PageShell>
  ),
});
