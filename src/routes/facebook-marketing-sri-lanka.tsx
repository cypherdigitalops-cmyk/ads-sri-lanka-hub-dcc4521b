import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Facebook Marketing Sri Lanka — Strategy, Creative, Media";
const DESC = "Need facebook marketing sri lanka that actually converts? We blend local insight with proven media frameworks to deliver leads and sales.";

export const Route = createFileRoute("/facebook-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "facebook marketing sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/facebook-marketing-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate category={CAT} keyword="facebook marketing sri lanka" />
      <section className="mx-auto max-w-3xl px-4 pb-14 text-sm text-muted-foreground">
        <p>
          Looking for broader channel coverage? See our guide to{" "}
          <a
            href="https://cypherdigital.lk/social-media-management-sri-lanka"
            className="text-primary underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            social media marketing sri lanka
          </a>{" "}
          for more.
        </p>
      </section>
    </PageShell>
  ),
});
