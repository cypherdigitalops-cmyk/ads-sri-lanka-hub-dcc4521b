import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight, Award, BarChart3, Building2, CheckCircle2, Film, Layers, Mail,
 Megaphone, MessageCircle, Monitor, MousePointerClick, Palette, PartyPopper, Phone,
  Search, Share2, Sparkles, Star, Tv, Users, Globe, Clock, TrendingUp, Zap,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTASection";
import { CATEGORIES, SITE, titleCase } from "@/data/site";
import { HOME_LONGFORM, ORG_JSONLD, faqJsonLd } from "@/data/content-engine";
import heroImg from "@/assets/hero-advertising.jpg";

const TITLE = "Advertising in Sri Lanka — Complete Guide to Every Advertising Option | advertisingsrilanka.lk";
const TITLE_OG = "Advertising in Sri Lanka — Complete Guide to Every Option";
const DESC = "The complete guide to advertising in Sri Lanka. Learn how TV, radio, billboards, Google Ads, social media, SEO, branding and video advertising work — and get free advice for your business. Call 0771437707.";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Tv, Megaphone, Layers, MousePointerClick, Search, Share2, Mail, Building2,
  Palette, Monitor, Film, PartyPopper,
};

const HOME_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE.url,
  name: SITE.name,
  potentialAction: {
    "@type": "SearchAction",
    target: SITE.url + "/services?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "advertising sri lanka, advertising agency sri lanka, atl, btl, digital marketing sri lanka, seo sri lanka, billboard advertising, tv advertising, radio advertising, social media marketing sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { property: "og:image", content: SITE.url + "/og-home.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE_OG },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: SITE.url + "/" }],
  }),
  component: Index,
});

function Index() {
  const [q, setQ] = useState("");
  const allServices = useMemo(
    () =>
      CATEGORIES.flatMap((c) =>
        c.services.map((s) => ({ ...s, category: c })),
      ),
    [],
  );
  const filtered = q
    ? allServices.filter((s) => s.keyword.toLowerCase().includes(q.toLowerCase())).slice(0, 8)
    : [];

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(HOME_LONGFORM.faqs)) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-primary-foreground">
        <img
          src={heroImg}
          alt="Advertising in Sri Lanka — billboards, digital ads and social media campaigns over Colombo skyline"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Sri Lanka's #1 Advertising Information Hub
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Advertising in <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">Sri Lanka</span> — Your Complete Guide to Every Option
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
            Sri Lanka's #1 advertising information hub — learn how every advertising channel works, compare your options, and get free guidance for your next campaign.
          </p>

          {/* SEARCH */}
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search any advertising service... e.g. Google Ads, billboard, TV"
                className="h-14 w-full rounded-full bg-background pl-14 pr-32 text-base text-foreground shadow-[var(--shadow-elegant)] outline-none ring-2 ring-transparent focus:ring-accent"
                aria-label="Search advertising services"
              />
              <Link
                to="/services"
                className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-accent-foreground sm:inline-flex"
              >
                Browse all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {filtered.length > 0 && (
              <div className="mt-2 overflow-hidden rounded-2xl border border-border bg-background text-foreground shadow-[var(--shadow-elegant)]">
                {filtered.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}` as never}
                    className="flex items-center justify-between border-b border-border px-5 py-3 last:border-0 hover:bg-muted"
                  >
                    <div>
                      <div className="text-sm font-semibold">{titleCase(s.keyword)}</div>
                      <div className="text-xs text-muted-foreground">{s.category.title}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90"
            >
              <Phone className="h-5 w-5" /> Call {SITE.phone}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-3.5 text-base font-semibold text-[var(--whatsapp-foreground)] transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
            >
              Ask a Free Question <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-accent" /> Information hub — not just an agency</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Sinhala · Tamil · English</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Islandwide coverage</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Free advice &amp; guidance</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> 180+ services explained</span>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:gap-4 sm:p-6 md:grid-cols-4">
          {[
            { n: "180+", l: "Advertising services explained", i: Layers },
            { n: "25+", l: "Channels — ATL, BTL, Digital", i: Megaphone },
            { n: "3", l: "Languages — Sinhala, Tamil, English", i: Globe },
            { n: "24/7", l: "Free guidance — call or WhatsApp", i: Clock },
          ].map((s) => (
            <div key={s.l} className="group relative overflow-hidden rounded-2xl bg-[image:var(--gradient-hero)] p-5 text-primary-foreground sm:p-6">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/30 blur-2xl transition group-hover:bg-accent/50" />
              <s.i className="relative h-5 w-5 text-accent" />
              <div className="relative mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{s.n}</div>
              <div className="relative mt-1 text-xs text-primary-foreground/80 sm:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold text-accent">Explore by category</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Every type of advertising in Sri Lanka — explained</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Browse a category to learn how it works, where it fits and what to expect — or call {SITE.phone} for free guidance tailored to your business.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => {
            const Icon = ICONS[c.icon ?? "Megaphone"] ?? Megaphone;
            return (
              <Link
                key={c.slug}
                to={`/${c.slug}` as never}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-hero)] opacity-0 blur-2xl transition group-hover:opacity-30" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-card)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-lg font-semibold">{c.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.short}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.services.slice(0, 3).map((s) => (
                      <span key={s.slug} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                        {titleCase(s.keyword).replace(" Sri Lanka", "")}
                      </span>
                    ))}
                    {c.services.length > 3 && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                        +{c.services.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn about {c.title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-accent">Most requested</div>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Popular advertising services</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-primary hover:underline">
              View all 180+ services →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "google-ads-sri-lanka", "facebook-ads-sri-lanka", "tv-advertising-sri-lanka",
              "billboard-advertising-sri-lanka", "seo-services-sri-lanka", "tiktok-ads-sri-lanka",
              "instagram-ads-sri-lanka", "radio-advertising-sri-lanka", "youtube-ads-sri-lanka",
              "newspaper-advertising-sri-lanka", "logo-design-sri-lanka", "web-design-sri-lanka",
              "video-production-sri-lanka", "whatsapp-marketing-sri-lanka", "lead-generation-sri-lanka",
              "led-screen-advertising-sri-lanka", "brand-activation-sri-lanka", "influencer-marketing-sri-lanka",
            ].map((slug) => (
              <Link
                key={slug}
                to={`/${slug}` as never}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
              >
                {titleCase(slug.replace(/-/g, " ")).replace(" Sri Lanka", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-semibold text-accent">Why advertisingsrilanka.lk</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">The easiest way to understand advertising in Sri Lanka</h2>
            <p className="mt-4 text-muted-foreground">
              We're an information hub — not an agency. Use this site to learn what's available, compare channels and decide what fits your business. When you're ready, we connect you with the right specialists.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Plain-English explanations of every advertising option",
                "Compare ATL, BTL, digital, outdoor & more in one place",
                "Free phone or WhatsApp guidance — no obligation",
                "Local context: Sinhala, Tamil & English markets",
                "Up-to-date guides for Sri Lankan businesses",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-accent-foreground">
                <Phone className="h-4 w-4" /> Ask {SITE.phone}
              </a>
              <Link to="/get-quote" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary">
                Send a Question <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { i: <Search className="h-5 w-5" />, t: "Discover", d: "Learn what advertising channels exist in Sri Lanka." },
              { i: <BarChart3 className="h-5 w-5" />, t: "Compare", d: "Understand strengths of each channel & approach." },
              { i: <Users className="h-5 w-5" />, t: "Local insight", d: "Sinhala, Tamil & English market context." },
              { i: <Award className="h-5 w-5" />, t: "Get help", d: "Free guidance — by phone, WhatsApp or email." },
            ].map((f) => (
              <div key={f.t} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">{f.i}</div>
                <div className="font-semibold">{f.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold text-accent">How it works</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Find the right advertising in 3 simple steps</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            No jargon, no pressure. Learn, compare and get free guidance — all in one place.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { i: Search, t: "1. Explore", d: "Browse 180+ advertising services and 13 categories — TV, radio, billboards, Google Ads, social media, SEO, branding and more.", c: "from-primary to-primary-glow" },
            { i: TrendingUp, t: "2. Compare", d: "Read plain-English guides explaining how each channel works, what it costs, and where it fits your business.", c: "from-primary-glow to-accent" },
            { i: Zap, t: "3. Get help", d: "Call 0771437707 or WhatsApp us for free guidance. We connect you with the right Sri Lankan specialists.", c: "from-accent to-primary-glow" },
          ].map((s, i) => (
            <div key={s.t} className="relative">
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.c} text-primary-foreground shadow-[var(--shadow-card)]`}>
                  <s.i className="h-6 w-6" />
                </div>
                <div className="text-xl font-semibold">{s.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
              {i < 2 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-accent md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4">
        <CTASection
          headline="One call. Every advertising channel. One trusted partner."
          sub={`Call ${SITE.phone} now or send a quick brief — free strategy plan within 24 hours.`}
        />
      </div>

      {/* INSIGHTS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-accent">
              <BarChart3 className="h-4 w-4" /> Latest insights
            </div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Advertising guides for Sri Lanka</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">
            See all guides →
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.flatMap((c) => c.blog.slice(0, 1).map((b) => ({ c, b }))).map(({ c, b }) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}` as never}
              className="group rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="text-xs font-semibold text-accent">{c.title}</div>
              <div className="mt-2 font-semibold">{titleCase(b.keyword)}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Read guide <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 pb-4 pt-20">
          <div className="space-y-5">
            {HOME_LONGFORM.blocks.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="mt-8 text-2xl font-bold sm:text-3xl">{b.text}</h2>;
              if (b.type === "p") return <p key={i} className="text-muted-foreground leading-relaxed">{b.text}</p>;
              if (b.type === "ul") return <ul key={i} className="ml-5 list-disc space-y-2 text-muted-foreground">{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
              if (b.type === "ol") return <ol key={i} className="ml-5 list-decimal space-y-2 text-muted-foreground">{b.items.map((it, j) => <li key={j}>{it}</li>)}</ol>;
              if (b.type === "table") return (
                <div key={i} className="overflow-x-auto rounded-lg border border-border bg-background">
                  <table className="w-full text-sm">
                    <thead className="bg-secondary/60"><tr>{b.head.map((h, j) => <th key={j} className="px-3 py-2 text-left font-semibold">{h}</th>)}</tr></thead>
                    <tbody>{b.rows.map((r, j) => (<tr key={j} className="border-t border-border">{r.map((c, k) => <td key={k} className="px-3 py-2 align-top text-muted-foreground">{c}</td>)}</tr>))}</tbody>
                  </table>
                </div>
              );
              return null;
            })}
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <div className="text-center">
            <div className="text-sm font-semibold text-accent">FAQ</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Common questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              ...HOME_LONGFORM.faqs,
            ].map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-background p-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold marker:hidden">
                  {f.q}
                  <span className="text-accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
