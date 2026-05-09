import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BarChart3, Megaphone, Phone, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTASection";
import { CATEGORIES, SITE } from "@/data/site";

const TITLE = "Advertising Sri Lanka — #1 Advertising Agency for ATL, BTL, Digital, SEO & Outdoor";
const DESC = "Advertising Sri Lanka is the all-in-one advertising hub for businesses in Sri Lanka. TV, radio, press, billboards, Google Ads, social media, SEO, branding & more. Call 0771437707.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "advertising sri lanka, advertising agency sri lanka, atl, btl, digital marketing sri lanka, seo sri lanka, billboard advertising, tv advertising, radio advertising" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE.url + "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Sri Lanka's #1 Advertising Hub
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Every advertising solution your business needs in <span className="text-accent">Sri Lanka</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            ATL, BTL, digital, SEO, outdoor, branding, web and video — under one expert team. From Colombo to Jaffna, we get your brand seen, heard and remembered.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90">
              <Phone className="h-5 w-5" /> Call {SITE.phone}
            </a>
            <Link to="/get-quote" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20">
              Get Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { n: "500+", l: "Campaigns" },
              { n: "200+", l: "Brands served" },
              { n: "11", l: "Service categories" },
              { n: "25", l: "Districts covered" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-accent sm:text-3xl">{s.n}</div>
                <div className="text-xs text-primary-foreground/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-accent">Our services</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Advertising solutions for every brand</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to={`/${c.slug}` as never} className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground">
                <Megaphone className="h-6 w-6" />
              </div>
              <div className="text-lg font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.short}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Explore {c.title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Why advertisingsrilanka.lk?</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: <Target className="h-5 w-5" />, t: "Strategy-led", d: "Every campaign starts with a clear goal and KPI." },
              { i: <TrendingUp className="h-5 w-5" />, t: "Performance-focused", d: "Measurable ROI on every channel and rupee." },
              { i: <Users className="h-5 w-5" />, t: "Local insight", d: "Sinhala, Tamil & English audiences understood deeply." },
              { i: <Award className="h-5 w-5" />, t: "Full-service", d: "Strategy, creative, media, tech and reporting in one team." },
            ].map((f) => (
              <div key={f.t} className="rounded-xl bg-background p-6 shadow-[var(--shadow-card)]">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">{f.i}</div>
                <div className="font-semibold">{f.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold sm:text-4xl">How we work</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            { t: "Brief", d: "Tell us your goals and audience." },
            { t: "Plan", d: "We craft strategy, channels and creative." },
            { t: "Launch", d: "Campaigns go live across selected media." },
            { t: "Optimise", d: "We track, tune and scale weekly." },
          ].map((s, i) => (
            <li key={s.t} className="rounded-xl border border-border bg-card p-6">
              <div className="text-sm font-mono text-accent">0{i + 1}</div>
              <div className="mt-1 text-lg font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <CTASection
          headline="One call. Every advertising channel. One trusted partner."
          sub={`Call ${SITE.phone} now or send a quick brief for a free strategy plan.`}
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
          <BarChart3 className="h-4 w-4" /> Latest insights
        </div>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Advertising guides for Sri Lanka</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.flatMap((c) => c.blog.slice(0, 1).map((b) => ({ c, b }))).map(({ c, b }) => (
            <Link key={b.slug} to={`/blog/${b.slug}` as never} className="rounded-lg border border-border bg-card p-5 hover:border-primary/40">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">{c.title}</div>
              <div className="mt-2 font-semibold capitalize">{b.keyword}</div>
              <div className="mt-3 text-xs text-muted-foreground">Read guide →</div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
