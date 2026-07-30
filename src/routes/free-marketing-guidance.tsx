import { createFileRoute, useLocation } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FreeGuidanceForm, GuidanceTrustPanel } from "@/components/site/FreeGuidanceForm";
import { isDigitalPage } from "@/components/site/FreeGuidanceSection";
import { SITE } from "@/data/site";

const TITLE = "Get Free Marketing Guidance in Sri Lanka | Ask a Specialist";
const DESC =
  "Not sure which marketing channel suits your business? Tell us what you sell and your budget — a specialist sends free, tailored guidance within 24 hours. No obligation.";
const SLUG = "free-marketing-guidance";

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the guidance really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A specialist reviews your business and budget and sends a tailored recommendation within 24 hours. There is no obligation and no sales pressure.",
      },
    },
    {
      "@type": "Question",
      name: "What do I need to know about marketing to ask?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nothing. You only answer questions about your own business — what you sell, who your customers are, your goal and your budget.",
      },
    },
    {
      "@type": "Question",
      name: "I already run ads. Can you review them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you already have a page or run ads, the specialist includes a free audit showing where you may be losing customers or money.",
      },
    },
  ],
};

export const Route = createFileRoute("/free-marketing-guidance")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/${SLUG}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/${SLUG}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) }],
  }),
  component: FreeGuidancePage,
});

function FreeGuidancePage() {
  const { search } = useLocation();
  const from = typeof search === "object" && search && "from" in search ? String((search as Record<string, unknown>).from) : "";
  const digital = isDigitalPage(from);

  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Free Marketing Guidance" }]} />
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">
            {digital ? "Get your free digital marketing growth plan" : "Get free marketing guidance for your business"}
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            You don't need to know anything about advertising. Just tell us about your business and your budget, and a
            specialist will send you free guidance on what would work best.
          </p>
          <p className="mt-4 inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-semibold">
            Free • No obligation • No sales pressure
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <FreeGuidanceForm digital={digital} />
          <GuidanceTrustPanel />
        </div>

        <div className="mt-14 max-w-3xl text-muted-foreground">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">How the free guidance works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5">
            <li>You describe your business in plain language — what you sell, who buys it, what you want more of.</li>
            <li>A specialist reviews it personally against what already works for similar Sri Lankan businesses.</li>
            <li>
              You receive a short, jargon-free recommendation: which 2–3 channels suit your goal and budget, and roughly
              what results to expect. If you already have a page or ads running, a free audit is included.
            </li>
          </ol>
          <p className="mt-5">
            There is no cost and no obligation. Most people use the recommendation to plan their own next step — that's
            exactly what this hub is for.
          </p>
        </div>
      </section>
    </PageShell>
  );
}