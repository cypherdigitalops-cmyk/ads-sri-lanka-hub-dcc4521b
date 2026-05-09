import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CTASection } from "./CTASection";
import { SITE, titleCase, type Category } from "@/data/site";

function Hero({ kicker, h1, intro, crumbs }: { kicker: string; h1: string; intro: string; crumbs: Crumb[] }) {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-primary-foreground">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="text-primary-foreground/80"><Breadcrumbs items={crumbs} /></div>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
          <Sparkles className="h-3.5 w-3.5" /> {kicker}
        </div>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">{h1}</h1>
        <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">{intro}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:opacity-90">
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
          <Link to="/get-quote" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20">
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid({ title, items }: { title: string; items: { icon: React.ReactNode; title: string; body: string }[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">{it.icon}</div>
            <div className="font-semibold">{it.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Bullets({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" />
            <span className="text-sm">{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    { t: "Discover", d: "We learn your business, audience and KPIs." },
    { t: "Strategise", d: "We craft a channel + creative plan tied to results." },
    { t: "Launch", d: "Campaigns go live across selected media in days." },
    { t: "Optimise", d: "Weekly reporting, A/B tests and ongoing scaling." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-bold sm:text-3xl">Our 4-step process</h2>
      <ol className="mt-8 grid gap-5 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.t} className="rounded-xl border border-border bg-card p-6">
            <div className="text-sm font-mono text-accent">0{i + 1}</div>
            <div className="mt-1 font-semibold">{s.t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
      <div className="mt-6 space-y-3">
        {items.map((f) => (
          <details key={f.q} className="group rounded-lg border border-border bg-card p-5">
            <summary className="cursor-pointer list-none font-semibold marker:hidden">{f.q}</summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ========== CATEGORY HUB ========== */
export function CategoryHubTemplate({ category }: { category: Category }) {
  const h1 = `${titleCase(category.hubKeyword)}`;
  return (
    <>
      <Hero
        kicker={`${category.title} Sri Lanka`}
        h1={`${category.title} in Sri Lanka — ${category.short}`}
        intro={category.intro}
        crumbs={[{ label: "Home", to: "/" }, { label: h1 }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">Our {category.title.toLowerCase()} services</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.services.map((s) => (
            <Link key={s.slug} to={`/${s.slug}` as never} className="group rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-primary/40">
              <div className="text-base font-semibold capitalize">{titleCase(s.keyword)}</div>
              <p className="mt-2 text-sm text-muted-foreground">Learn more about {s.keyword} and how we deliver results.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <FeatureGrid
        title={`Why brands choose us for ${category.title.toLowerCase()}`}
        items={[
          { icon: <Target className="h-5 w-5" />, title: "Strategy first", body: "Every campaign starts with audience, message and channel mix." },
          { icon: <TrendingUp className="h-5 w-5" />, title: "Measurable ROI", body: "Transparent reporting on reach, engagement and conversions." },
          { icon: <Users className="h-5 w-5" />, title: "Local expertise", body: "Deep market knowledge across Sinhala, Tamil and English audiences." },
        ]}
      />
      <ProcessSteps />
      {category.blog.length ? (
        <section className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-bold sm:text-3xl">{category.title} insights & guides</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {category.blog.map((b) => (
              <Link key={b.slug} to={`/blog/${b.slug}` as never} className="rounded-lg border border-border bg-card p-4 hover:border-primary/40">
                <div className="text-sm font-semibold capitalize">{titleCase(b.keyword)}</div>
                <div className="mt-1 text-xs text-muted-foreground">Read the guide →</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
      <div className="mx-auto max-w-7xl px-4">
        <CTASection
          headline={`Get expert help with ${category.title.toLowerCase()} in Sri Lanka`}
          sub="One call. Free strategy. Custom plan for your brand."
        />
      </div>
      <FAQ
        items={[
          { q: `What is ${category.hubKeyword}?`, a: `${category.intro}` },
          { q: `How quickly can a ${category.title.toLowerCase()} campaign launch?`, a: `Most campaigns can go live within 2–3 weeks of brief approval, depending on creative and inventory availability.` },
          { q: `Do you work with small businesses?`, a: `Yes. We have campaign frameworks for SMEs, mid-market and enterprise brands across Sri Lanka.` },
        ]}
      />
    </>
  );
}

/* ========== SUB-SERVICE ========== */
export function ServicePageTemplate({
  category,
  keyword,
}: {
  category: Category;
  keyword: string;
}) {
  const title = titleCase(keyword);
  return (
    <>
      <Hero
        kicker={`${category.title} • Sri Lanka`}
        h1={`${title} — Get Found, Get Customers`}
        intro={`Looking for the best ${keyword} solution? We design, plan and execute high-performing ${keyword} campaigns for businesses across Sri Lanka. Strategy, creative and media — all under one team.`}
        crumbs={[
          { label: "Home", to: "/" },
          { label: category.title, to: `/${category.slug}` },
          { label: title },
        ]}
      />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Why {keyword} works in Sri Lanka</h2>
        <p className="mt-4 text-muted-foreground">
          {keyword.charAt(0).toUpperCase() + keyword.slice(1)} remains one of the most effective ways for Sri Lankan brands to reach the right audience at the right time. Whether you are a startup, SME or enterprise, our team blends data, creativity and local insight to deliver measurable results — leads, sales, awareness or brand love.
        </p>
        <p className="mt-4 text-muted-foreground">
          We handle the complete journey: strategy, audience research, creative production, media buying, campaign launch, optimisation and detailed reporting. You stay in control while we do the heavy lifting.
        </p>
      </section>
      <Bullets
        title={`What's included in our ${keyword} service`}
        items={[
          "Discovery call & objective setting",
          "Audience research & competitor analysis",
          "Creative concept & content production",
          "Channel selection & media planning",
          "Campaign setup, launch & QA",
          "Continuous optimisation & A/B testing",
          "Transparent weekly performance reporting",
          "Dedicated account manager",
        ]}
      />
      <FeatureGrid
        title={`Why choose us for ${keyword}`}
        items={[
          { icon: <Target className="h-5 w-5" />, title: "Goal-driven", body: "Every rupee tied to a measurable outcome." },
          { icon: <Sparkles className="h-5 w-5" />, title: "Creative that converts", body: "On-brand creative built for the Sri Lankan audience." },
          { icon: <TrendingUp className="h-5 w-5" />, title: "Always-on optimisation", body: "Weekly tuning to keep results climbing." },
        ]}
      />
      <ProcessSteps />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Related {category.title.toLowerCase()} services</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {category.services
            .filter((s) => s.keyword !== keyword)
            .slice(0, 6)
            .map((s) => (
              <Link key={s.slug} to={`/${s.slug}` as never} className="rounded-lg border border-border bg-card p-4 hover:border-primary/40">
                <div className="font-semibold capitalize">{titleCase(s.keyword)}</div>
                <div className="mt-1 text-xs text-muted-foreground">Explore service →</div>
              </Link>
            ))}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4">
        <CTASection headline={`Start your ${keyword} campaign today`} sub={`Free strategy call with our ${category.title.toLowerCase()} specialists.`} />
      </div>
      <FAQ
        items={[
          { q: `Who needs ${keyword}?`, a: `Any brand in Sri Lanka that wants more visibility, leads or sales can benefit from ${keyword}, from local SMEs to multinational enterprises.` },
          { q: `How long until I see results from ${keyword}?`, a: `Performance channels (digital, SEM, social ads) typically show traction within 2–4 weeks. Brand-led channels build momentum over 1–3 months.` },
          { q: `Do you handle the creative as well?`, a: `Yes — copy, design, video and adaptations are all handled by our in-house creative team.` },
          { q: `How do I get started?`, a: `Call ${SITE.phone} or send us a quick brief via the inquiry form. We respond within one business day.` },
        ]}
      />
    </>
  );
}

/* ========== BLOG ARTICLE ========== */
export function BlogArticleTemplate({
  category,
  keyword,
}: {
  category: Category;
  keyword: string;
}) {
  const title = titleCase(keyword);
  return (
    <>
      <Hero
        kicker="Insights & Guides"
        h1={`${title}: Complete Guide`}
        intro={`Everything Sri Lankan businesses need to know about ${keyword} — strategies, channels, costs to consider, common mistakes and how to choose the right partner.`}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Blog" },
          { label: title },
        ]}
      />
      <article className="prose prose-slate mx-auto max-w-3xl px-4 py-12 prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary">
        <p className="lead text-lg text-muted-foreground">
          {keyword.charAt(0).toUpperCase() + keyword.slice(1)} is one of the most searched advertising topics in Sri Lanka — and for good reason. The right approach can transform a small business into a household name, or take an established brand to a new audience.
        </p>
        <h2>What is {keyword}?</h2>
        <p>
          In simple terms, {keyword} refers to the strategies, platforms and creative work used to promote products, services or ideas to the Sri Lankan market through this specific channel or approach. It sits within {category.title.toLowerCase()} — a key pillar of any modern marketing mix.
        </p>
        <h2>Why {keyword} matters today</h2>
        <ul>
          <li>Sri Lankan consumers are spending more time across multiple channels — both traditional and digital.</li>
          <li>Buying decisions are increasingly research-led and locally relevant.</li>
          <li>The right campaign can outperform a much bigger competitor's budget if planned well.</li>
        </ul>
        <h2>How to plan a winning campaign</h2>
        <ol>
          <li><strong>Set a clear objective.</strong> Awareness, leads, sales — the goal shapes everything.</li>
          <li><strong>Define the audience.</strong> Demographics, language, geography, behaviour.</li>
          <li><strong>Pick the right channels.</strong> Don't spread thin — go deep where your audience actually is.</li>
          <li><strong>Create message-market fit.</strong> Localised creative beats translated creative every time.</li>
          <li><strong>Measure everything.</strong> If it isn't measured, it isn't optimised.</li>
        </ol>
        <h2>Common mistakes to avoid</h2>
        <p>
          Most {keyword} budgets are wasted on three things: weak targeting, generic creative, and no follow-through. A strong partner will help you avoid all three from day one.
        </p>
        <h2>How we can help</h2>
        <p>
          Our team has delivered {category.title.toLowerCase()} campaigns for brands across Sri Lanka — from Colombo SMEs to islandwide enterprises. We bring strategy, creative, media and reporting into one transparent service.
        </p>
        <p>
          <strong>Talk to a specialist:</strong> call <a href={`tel:${SITE.phone}`}>{SITE.phone}</a> or <Link to="/get-quote">request a free quote</Link>.
        </p>
      </article>
      <div className="mx-auto max-w-7xl px-4">
        <CTASection headline={`Need expert help with ${keyword}?`} sub="Free consultation with a senior strategist." />
      </div>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold">Explore related services</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {category.services.slice(0, 6).map((s) => (
            <Link key={s.slug} to={`/${s.slug}` as never} className="rounded-lg border border-border bg-card p-4 hover:border-primary/40">
              <div className="font-semibold capitalize">{titleCase(s.keyword)}</div>
              <div className="mt-1 text-xs text-muted-foreground">View service →</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}