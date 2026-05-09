import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Advertising Packages in Sri Lanka — Custom Plans for Every Business";
const DESC = "Flexible advertising packages combining ATL, BTL, digital, SEO, outdoor and creative services. Built for Sri Lankan SMEs and enterprises. Call 0771437707.";

export const Route = createFileRoute("/advertising-packages")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/advertising-packages` }],
  }),
  component: Packages,
});

const PACKS = [
  {
    name: "Starter",
    blurb: "Perfect for small businesses launching their first campaigns.",
    items: ["Brand & audience workshop", "Social media setup & content", "Google My Business + local SEO", "Monthly performance report"],
  },
  {
    name: "Growth",
    blurb: "For SMEs scaling lead generation and brand presence.",
    items: ["Google Ads & Meta Ads management", "SEO + content marketing", "Email/SMS automation", "Creative production", "Bi-weekly reporting"],
    highlight: true,
  },
  {
    name: "Enterprise 360°",
    blurb: "Full-funnel ATL + BTL + digital for established brands.",
    items: ["TVC, radio & press planning + buying", "Outdoor / billboard / LED", "Digital, SEO & social ads", "Brand activations", "Dedicated account team"],
  },
];

function Packages() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80"><Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Packages" }]} /></div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Advertising packages</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">Three flexible starting points — every plan is tailored to your goals, audience and channels.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {PACKS.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-7 shadow-[var(--shadow-card)] ${p.highlight ? "border-accent bg-card ring-2 ring-accent" : "border-border bg-card"}`}>
              {p.highlight ? <div className="mb-3 inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">Most popular</div> : null}
              <div className="text-2xl font-bold">{p.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" /> {it}</li>
                ))}
              </ul>
              <Link to="/get-quote" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-accent-foreground">Request {p.name} plan</Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">Every package is fully customisable. Call <a href={`tel:${SITE.phone}`} className="font-semibold text-primary">{SITE.phone}</a> to discuss yours.</p>
      </section>
      <div className="mx-auto max-w-7xl px-4"><CTASection /></div>
    </PageShell>
  );
}