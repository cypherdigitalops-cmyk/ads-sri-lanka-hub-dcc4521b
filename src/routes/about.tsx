import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe, Heart, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "About Us | Advertising Sri Lanka";
const DESC = "Meet the advertising specialists behind advertisingsrilanka.lk. Strategy, creative, media, digital, SEO and outdoor — one expert team for every brand in Sri Lanka.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/about` }],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80"><Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} /></div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">About advertisingsrilanka.lk</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">Sri Lanka's all-in-one advertising hub — built by senior strategists, creatives and media buyers with decades of combined experience.</p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-14 text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our story</h2>
        <p className="mt-4">We started with a simple belief: every Sri Lankan business deserves world-class advertising — without the agency runaround. Today we serve startups, SMEs and enterprises across the island with a single, accountable team for every channel.</p>
        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">What we believe</h2>
        <ul className="mt-4 space-y-3">
          <li><strong className="text-foreground">Strategy beats spend.</strong> A clear plan always outperforms a bigger budget.</li>
          <li><strong className="text-foreground">Local insight wins.</strong> Sinhala, Tamil and English audiences respond to authentic, locally-rooted creative.</li>
          <li><strong className="text-foreground">Measurement is non-negotiable.</strong> Every campaign is reported transparently.</li>
        </ul>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { i: <Users className="h-5 w-5" />, t: "Senior team", d: "Decades of mass-media + digital experience." },
            { i: <Award className="h-5 w-5" />, t: "Award-winning", d: "Recognised creative & performance work." },
            { i: <Globe className="h-5 w-5" />, t: "Islandwide", d: "Coverage from Colombo to the deep north and east." },
            { i: <Heart className="h-5 w-5" />, t: "Client-first", d: "Long-term partnerships, not transactional projects." },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">{f.i}</div>
              <div className="font-semibold">{f.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4"><CTASection /></div>
    </PageShell>
  );
}