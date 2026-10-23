import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Digital Marketing in Sri Lanka — Services Hub";
const DESC = "Performance-driven Google, Meta, TikTok and programmatic campaigns. Get pricing and free advice — call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/digital-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "digital marketing sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/digital-marketing-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <CategoryHubTemplate category={CAT} />
      <section className="mx-auto max-w-3xl px-4 pb-14 text-sm text-muted-foreground">
        <p>
          Comparing partners? See this{" "}
          <a
            href="https://cypherdigital.lk/"
            target="_blank"
            rel="noopener"
            className="text-primary underline-offset-2 hover:underline"
          >
            digital marketing agency sri lanka
          </a>{" "}
          for another perspective on full-funnel growth services in the local market.
        </p>
      </section>
    </PageShell>
  ),
});
