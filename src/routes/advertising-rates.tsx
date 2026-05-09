import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Advertising Cost Guide Sri Lanka — How Pricing Works";
const DESC = "Understand how advertising costs work in Sri Lanka — TV, radio, billboards, digital, SEO and creative. Get a free custom quote at 0771437707.";

export const Route = createFileRoute("/advertising-rates")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/advertising-rates` }],
  }),
  component: Rates,
});

const ROWS = [
  { c: "TV Advertising", f: "Channel, slot, duration, daypart" },
  { c: "Radio Advertising", f: "Station reach, time-band, frequency" },
  { c: "Newspaper / Magazine", f: "Publication, page, colour, size" },
  { c: "Billboards & LED", f: "Location, size, duration, traffic volume" },
  { c: "Google Ads / PPC", f: "Industry, keywords, target geography" },
  { c: "Facebook / Instagram / TikTok", f: "Audience size, objective, creative volume" },
  { c: "SEO Services", f: "Competition, target keywords, technical scope" },
  { c: "Branding & Creative", f: "Project scope, deliverables, revisions" },
  { c: "Web Design", f: "Pages, functionality, integrations" },
  { c: "Video Production", f: "Concept, locations, talent, post-production" },
  { c: "BTL & Activations", f: "Locations, manpower, duration, materials" },
  { c: "Email / SMS / WhatsApp", f: "List size, frequency, automation depth" },
];

function Rates() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80"><Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Cost Guide" }]} /></div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Advertising cost guide</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">Pricing depends on the channel, audience and objective. Here's how to think about advertising costs in Sri Lanka — and how we keep yours efficient.</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-14">
        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary text-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Channel</th>
                <th className="px-5 py-3 font-semibold">What drives the cost</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.c} className="border-t border-border">
                  <td className="px-5 py-3 font-semibold">{r.c}</td>
                  <td className="px-5 py-3 text-muted-foreground">{r.f}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">For a quick custom estimate tailored to your business, call <a href={`tel:${SITE.phone}`} className="font-semibold text-primary">{SITE.phone}</a>.</p>
      </section>
      <div className="mx-auto max-w-7xl px-4"><CTASection /></div>
    </PageShell>
  );
}