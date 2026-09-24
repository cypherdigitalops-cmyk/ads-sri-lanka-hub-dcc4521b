import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Lead Generation Sri Lanka That Drives Real Results";
const DESC = "From concept to launch — full-service lead generation sri lanka for Sri Lankan brands. Get pricing, timelines and channel options. Call 0707310410 today.";

export const Route = createFileRoute("/lead-generation-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "lead generation sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/lead-generation-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate category={CAT} keyword="lead generation sri lanka" />
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-[#f0f7ff] p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-[#15224a] sm:text-2xl">What Happens After the Lead?</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Generating a lead is only the beginning. Once someone enquires through your ads, website or WhatsApp, the next step is to contact them, understand their requirement and identify who is ready for a sales conversation.
          </p>
          <Link
            to="/lead-follow-up-services-sri-lanka"
            className="mt-4 inline-block rounded-md bg-[#2563eb] px-6 py-3 text-sm font-bold text-white hover:opacity-90"
          >
            See Lead Follow-Up Services Sri Lanka →
          </Link>
        </div>
      </section>
    </PageShell>
  ),
});
