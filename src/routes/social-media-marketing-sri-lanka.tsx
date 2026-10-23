import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "social-media-marketing-sri-lanka")!;
const TITLE = "Social Media Marketing Sri Lanka | Services & Planning Guide";
const DESC = "Explore social media marketing in Sri Lanka: service scope, budget factors, measurement and common mistakes. Get clear answers and guidance.";

export const Route = createFileRoute("/social-media-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "social media marketing sri lanka, marketing planning sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/social-media-marketing-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <CategoryHubTemplate category={CAT} />
      <section className="mx-auto max-w-3xl px-4 pb-14 text-sm text-muted-foreground">
        <p>
          Looking for a broader view of the market? Read this guide on{" "}
          <a
            href="https://cypherdigital.lk/advertising-in-sri-lanka"
            target="_blank"
            rel="noopener"
            className="text-primary underline-offset-2 hover:underline"
          >
            advertising sri lanka
          </a>{" "}
            for a wider perspective on the local advertising landscape.
        </p>
        <p className="mt-3">
          Need ongoing channel management? Explore this resource on{" "}
          <a
            href="https://cypherdigital.lk/social-media-management-sri-lanka"
            target="_blank"
            rel="noopener"
            className="text-primary underline-offset-2 hover:underline"
          >
            Social Media Marketing Sri Lanka
          </a>{" "}
          for additional context on managing brand presence across platforms.
        </p>
      </section>
    </PageShell>
  ),
});
