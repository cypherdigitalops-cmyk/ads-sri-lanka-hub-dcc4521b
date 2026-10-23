import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Programmatic Advertising Sri Lanka | Services & Planning Guide";
const DESC = "Explore programmatic advertising in Sri Lanka: service scope, budget factors, measurement and common mistakes. Get clear answers and guidance.";

export const Route = createFileRoute("/programmatic-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "programmatic advertising sri lanka, marketing planning sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/programmatic-advertising-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate category={CAT} keyword="programmatic advertising sri lanka" />
      <section className="mx-auto max-w-3xl px-4 pb-14 text-sm text-muted-foreground">
        <p>
          Want another agency comparison? See{" "}
          <a
            href="https://cypherdigital.lk/programmatic-advertising-sri-lanka"
            target="_blank"
            rel="noopener"
            className="text-primary underline-offset-2 hover:underline"
          >
            programmatic advertising Sri Lanka
          </a>{" "}
          by Cypher Digital for an alternative view of programmatic display and media buying.
        </p>
      </section>
    </PageShell>
  ),
});
