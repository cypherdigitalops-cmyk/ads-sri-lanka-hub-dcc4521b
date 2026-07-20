import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Best Google Ads Sri Lanka Agency in Sri Lanka — Call 0701772626";
const DESC = "Affordable, ROI-focused google ads sri lanka for Sri Lankan SMEs and enterprises. We design, run and report every campaign end-to-end.";

export const Route = createFileRoute("/google-ads-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "google ads sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
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
