import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CTASection } from "./CTASection";
import { RELATED_CATEGORIES, SITE, titleCase, type Category } from "@/data/site";
import heroImg from "@/assets/hero-advertising.jpg";
import {
  buildBlogArticle,
  buildCategoryLongForm,
  buildServiceLongForm,
  faqJsonLd,
  type Block,
  type FAQ,
} from "@/data/content-engine";
import { getPageFaqs } from "@/data/page-faqs";
import { getPrintingServiceContent } from "@/data/printing-service-content";

/**
 * Linkify variants of the brand keyword to the homepage.
 * Matches: "advertising in sri lanka", "advertising sri lanka",
 * "sri lanka advertising" (case-insensitive). Only the FIRST match
 * encountered during a page render becomes a link — one keyword per page.
 */
let __adLinkUsed = false;
let __ledLinkUsed = false;
let __currentSlug = "";
function resetHomeAnchor(currentSlug = "") {
  __adLinkUsed = false;
  __ledLinkUsed = false;
  __currentSlug = currentSlug;
}

const LED_TARGET_SLUG = "led-screen-rental-sri-lanka";
const LED_REGEX = /(led\s+screen\s+(?:rentals?|hires?|on\s+rent)|(?:rent|hire|rents|hires|renting|hiring)\s+(?:an?\s+|the\s+)?led\s+screens?|led\s+video\s+wall\s+(?:rentals?|hires?))/i;

function linkifyLedRental(text: string): React.ReactNode {
  if (!text || __ledLinkUsed || __currentSlug === LED_TARGET_SLUG) return text;
  const m = LED_REGEX.exec(text);
  if (!m) return text;
  __ledLinkUsed = true;
  const before = text.slice(0, m.index);
  const after = text.slice(m.index + m[0].length);
  return [
    before,
    <Link
      key={`led-${m.index}`}
      to={`/${LED_TARGET_SLUG}` as never}
      className="text-primary underline-offset-2 hover:underline"
    >
      {m[0]}
    </Link>,
    after,
  ];
}

function applyLinks(text: string): React.ReactNode {
  const extra = linkifyExtra(text);
  if (typeof extra !== "string") {
    return (extra as React.ReactNode[]).map((n, i) =>
      typeof n === "string" ? <span key={`e${i}`}>{applyLinksInner(n)}</span> : n,
    );
  }
  return applyLinksInner(extra);
}
function applyLinksInner(text: string): React.ReactNode {
  const led = linkifyLedRental(text);
  if (typeof led === "string") return linkifyAdSL(led);
  // led replaced part of text; linkifyAdSL only on the unlinked string segments
  if (Array.isArray(led)) {
    return led.map((node, i) =>
      typeof node === "string" ? <span key={`s${i}`}>{linkifyAdSL(node)}</span> : node,
    );
  }
  return led;
}

type ExtraLink = { href: string; label: string; anchor?: string };
let __extraLinks: ExtraLink[] = [];
const __extraUsed = new Set<string>();
function setExtraLinks(links: ExtraLink[]) {
  __extraLinks = links.filter((l) => l.anchor);
  __extraUsed.clear();
}
function escapeRe(s: string) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function linkifyExtra(text: string): React.ReactNode {
  if (!text || !__extraLinks.length) return text;
  for (let i = 0; i < __extraLinks.length; i++) {
    const l = __extraLinks[i];
    const key = `${i}:${l.anchor}:${l.href}`;
    if (__extraUsed.has(key)) continue;
    const re = new RegExp(`(${escapeRe(l.anchor!).replace(/\\ /g, "\\s+")})`, "i");
    const m = re.exec(text);
    if (!m) continue;
    __extraUsed.add(key);
    const before = text.slice(0, m.index);
    const after = text.slice(m.index + m[0].length);
    const isExternal = /^https?:\/\//i.test(l.href);
    const linkNode = isExternal ? (
      <a key={`ex-${l.href}-${m.index}`} href={l.href} target="_blank" rel="noopener" className="text-primary underline-offset-2 hover:underline">
        {m[0]}
      </a>
    ) : (
      <Link key={`ex-${l.href}-${m.index}`} to={l.href as never} className="text-primary underline-offset-2 hover:underline">
        {m[0]}
      </Link>
    );
    // Recurse on the remaining "after" segment so multiple extras can link in same paragraph
    const tail = linkifyExtra(after);
    const tailNodes = typeof tail === "string" ? [tail] : (tail as React.ReactNode[]);
    return [before, linkNode, ...tailNodes];
  }
  return text;
}
function linkifyAdSL(text: string): React.ReactNode {
  if (!text) return text;
  const re = /(advertising\s+in\s+sri\s+lanka|advertising\s+sri\s+lanka|sri\s+lanka\s+advertising)/gi;
  if (__adLinkUsed || !re.test(text)) return text;
  re.lastIndex = 0;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (__adLinkUsed) break;
    parts.push(text.slice(last, m.index));
    parts.push(
      <Link
        key={m.index}
        to="/"
        className="text-primary underline-offset-2 hover:underline"
      >
        {m[0]}
      </Link>,
    );
    __adLinkUsed = true;
    last = m.index + m[0].length;
    break;
  }
  parts.push(text.slice(last));
  return parts;
}

function LongFormBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h2 key={i} className="mt-8 text-2xl font-bold sm:text-3xl">{b.text}</h2>;
        if (b.type === "h3") return <h3 key={i} className="mt-6 text-xl font-semibold">{b.text}</h3>;
        if (b.type === "p") return <p key={i} className="text-muted-foreground leading-relaxed">{applyLinks(b.text)}</p>;
        if (b.type === "ul")
          return (
            <ul key={i} className="ml-5 list-disc space-y-2 text-muted-foreground">
              {b.items.map((it, j) => <li key={j}>{applyLinks(it)}</li>)}
            </ul>
          );
        if (b.type === "ol")
          return (
            <ol key={i} className="ml-5 list-decimal space-y-2 text-muted-foreground">
              {b.items.map((it, j) => <li key={j}>{applyLinks(it)}</li>)}
            </ol>
          );
        if (b.type === "table")
          return (
            <div key={i} className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60">
                  <tr>{b.head.map((h, j) => <th key={j} className="px-3 py-2 text-left font-semibold">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {b.rows.map((r, j) => (
                    <tr key={j} className="border-t border-border">
                      {r.map((c, k) => <td key={k} className="px-3 py-2 align-top text-muted-foreground">{applyLinks(c)}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        return null;
      })}
    </div>
  );
}

function FaqList({ items }: { items: FAQ[] }) {
  if (!items.length) return null;
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
      <div className="mt-6 space-y-3">
        {items.map((f) => (
          <details key={f.q} className="group rounded-lg border border-border bg-card p-5">
            <summary className="cursor-pointer list-none font-semibold marker:hidden">{applyLinks(f.q)}</summary>
            <p className="mt-3 text-sm text-muted-foreground">{applyLinks(f.a)}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
    </section>
  );
}

function RelatedCategories({ categorySlug }: { categorySlug: string }) {
  const items = RELATED_CATEGORIES[categorySlug];
  if (!items || items.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-bold sm:text-3xl">Explore related services</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((r) => (
          <Link
            key={r.slug}
            to={`/${r.slug}` as never}
            className="rounded-lg border border-border bg-card p-4 hover:border-primary/40"
          >
            <div className="text-sm font-semibold">{titleCase(r.anchor)}</div>
            <div className="mt-1 text-xs text-muted-foreground">Learn more →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Hero({ kicker, h1, intro, crumbs }: { kicker: string; h1: string; intro: string; crumbs: Crumb[] }) {
  return (
    <section className="relative overflow-hidden text-primary-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" aria-hidden />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="text-primary-foreground/80"><Breadcrumbs items={crumbs} /></div>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-accent">
          <Sparkles className="h-3.5 w-3.5" /> {kicker}
        </div>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">{h1}</h1>
        <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">{applyLinks(intro)}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:opacity-90">
            <Phone className="h-4 w-4" /> Ask a Free Question — {SITE.phone}
          </a>
          <Link to="/get-quote" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20">
            Send Us an Inquiry <ArrowRight className="h-4 w-4" />
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
export function CategoryHubTemplate({
  category,
  extraLinks,
}: {
  category: Category;
  extraLinks?: { href: string; label: string; anchor?: string }[];
}) {
  resetHomeAnchor(category.slug);
  setExtraLinks(
    (extraLinks ?? []).map((l) => ({
      ...l,
      label: l.label.replace(/\s*\(home\)\s*/i, "").trim(),
    })),
  );
  const h1 = `${titleCase(category.hubKeyword)}`;
  const longForm = buildCategoryLongForm(category);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/${category.slug}#service`,
    name: `${category.title} in Sri Lanka`,
    serviceType: category.title,
    description: category.intro,
    url: `${SITE.url}/${category.slug}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    audience: { "@type": "BusinessAudience", name: "Sri Lankan businesses" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${category.title} services`,
      itemListElement: category.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: titleCase(s.keyword),
          url: `${SITE.url}/${s.slug}`,
        },
      })),
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
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
              <div className="text-base font-semibold">{titleCase(s.keyword)}</div>
              <p className="mt-2 text-sm text-muted-foreground">Learn more about {titleCase(s.keyword)} and how we deliver results.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      {longForm.blocks.length ? (
        <section className="mx-auto max-w-3xl px-4 py-8">
          <LongFormBlocks blocks={longForm.blocks} />
        </section>
      ) : null}
      {(() => {
        const unique = getPrintingServiceContent(slug);
        return unique.length ? (
          <section className="mx-auto max-w-3xl px-4 py-8">
            <LongFormBlocks blocks={unique} />
          </section>
        ) : null;
      })()}
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
                <div className="text-sm font-semibold">{titleCase(b.keyword)}</div>
                <div className="mt-1 text-xs text-muted-foreground">Read the guide →</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
      <div className="mx-auto max-w-7xl px-4">
        <CTASection
          headline={`Have a question about ${category.title.toLowerCase()} in Sri Lanka?`}
          sub={`Free guidance from real specialists — call ${SITE.phone} or send an inquiry.`}
          service={category.title}
        />
      </div>
      <RelatedCategories categorySlug={category.slug} />
      <FaqList items={getPageFaqs(category.slug).length ? getPageFaqs(category.slug) : longForm.faqs} />
    </>
  );
}

/* ========== SUB-SERVICE ========== */
export function ServicePageTemplate({
  category,
  keyword,
  extraLinks,
}: {
  category: Category;
  keyword: string;
  extraLinks?: { href: string; label: string; anchor?: string }[];
}) {
  const title = titleCase(keyword);
  const longForm = buildServiceLongForm(category, keyword);
  const slug = category.services.find((s) => s.keyword === keyword)?.slug ?? "";
  resetHomeAnchor(slug);
  setExtraLinks(
    (extraLinks ?? []).map((l) => ({
      ...l,
      label: l.label.replace(/\s*\(home\)\s*/i, "").trim(),
    })),
  );
  const overrideFaqs = getPageFaqs(slug);
  const faqs = overrideFaqs.length ? overrideFaqs : longForm.faqs;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/${slug}#service`,
    name: title,
    serviceType: title,
    category: category.title,
    description: `Professional ${title} services for businesses across Sri Lanka — strategy, creative, media and reporting under one team.`,
    url: `${SITE.url}/${slug}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    audience: { "@type": "BusinessAudience", name: "Sri Lankan businesses" },
    isPartOf: { "@id": `${SITE.url}/${category.slug}#service` },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        kicker={`${category.title} • Sri Lanka`}
        h1={`${title} — Get Found, Get Customers`}
        intro={`Looking for the best ${title} solution? We design, plan and execute high-performing ${title} campaigns for businesses across Sri Lanka. Strategy, creative and media — all under one team.`}
        crumbs={[
          { label: "Home", to: "/" },
          { label: category.title, to: `/${category.slug}` },
          { label: title },
        ]}
      />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Why {title} works in Sri Lanka</h2>
        <p className="mt-4 text-muted-foreground">
          {title} remains one of the most effective ways for Sri Lankan brands to reach the right audience at the right time. Whether you are a startup, SME or enterprise, our team blends data, creativity and local insight to deliver measurable results — leads, sales, awareness or brand love.
        </p>
        <p className="mt-4 text-muted-foreground">
          We handle the complete journey: strategy, audience research, creative production, media buying, campaign launch, optimisation and detailed reporting. You stay in control while we do the heavy lifting.
        </p>
      </section>
      <Bullets
        title={`What's included in our ${title} service`}
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
        title={`Why choose us for ${title}`}
        items={[
          { icon: <Target className="h-5 w-5" />, title: "Goal-driven", body: "Every rupee tied to a measurable outcome." },
          { icon: <Sparkles className="h-5 w-5" />, title: "Creative that converts", body: "On-brand creative built for the Sri Lankan audience." },
          { icon: <TrendingUp className="h-5 w-5" />, title: "Always-on optimisation", body: "Weekly tuning to keep results climbing." },
        ]}
      />
      <ProcessSteps />
      {longForm.blocks.length ? (
        <section className="mx-auto max-w-3xl px-4 py-8">
          <LongFormBlocks blocks={longForm.blocks} />
        </section>
      ) : null}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Related {category.title.toLowerCase()} services</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {category.services
            .filter((s) => s.keyword !== keyword)
            .map((s) => (
              <Link key={s.slug} to={`/${s.slug}` as never} className="rounded-lg border border-border bg-card p-4 hover:border-primary/40">
                <div className="font-semibold">{titleCase(s.keyword)}</div>
                <div className="mt-1 text-xs text-muted-foreground">Explore service →</div>
              </Link>
            ))}
        </div>
      </section>
      <FaqList items={faqs} />
      <div className="mx-auto max-w-7xl px-4">
        <CTASection
          headline={`Want clear answers about ${title}?`}
          sub={`Tell us your goal — we'll explain options, channels and what to expect. Call ${SITE.phone}.`}
          service={title}
        />
      </div>
      <RelatedCategories categorySlug={category.slug} />
    </>
  );
}

/* ========== BLOG ARTICLE ========== */
export function BlogArticleTemplate({
  category,
  keyword,
  extraLinks,
}: {
  category: Category;
  keyword: string;
  extraLinks?: { href: string; label: string; anchor?: string }[];
}) {
  const title = titleCase(keyword);
  const article = buildBlogArticle(category, keyword);
  const filteredExtra = (extraLinks ?? []).map((l) => ({
    ...l,
    label: l.label.replace(/\s*\(home\)\s*/i, "").trim(),
  }));
  setExtraLinks(filteredExtra);
  const slug = category.blog.find((b) => b.keyword === keyword)?.slug ?? "";
  resetHomeAnchor(`blog/${slug}`);
  const url = `${SITE.url}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: `${title}: Complete Guide`,
    description: `Everything Sri Lankan businesses need to know about ${title}.`,
    inLanguage: "en-LK",
    mainEntityOfPage: url,
    url,
    image: `${SITE.url}/og-home.jpg`,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    about: { "@type": "Thing", name: category.title },
    articleSection: category.title,
    keywords: [keyword, category.hubKeyword, "Sri Lanka", "advertising"].join(", "),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Hero
        kicker="Insights & Guides"
        h1={`${title}: Complete Guide`}
        intro={`Everything Sri Lankan businesses need to know about ${title} — strategies, channels, costs to consider, common mistakes and how to choose the right partner.`}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Blog" },
          { label: title },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-12">
        {filteredExtra.length ? (
          <div className="mb-8 rounded-lg border border-border bg-muted/30 p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Related on this site
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {filteredExtra.map((l) => (
                <li key={l.href}>
                  <Link to={l.href as never} className="text-primary underline-offset-4 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <LongFormBlocks blocks={article.blocks} />
      </article>
      <div className="mx-auto max-w-7xl px-4">
        <CTASection
          headline={`Still have questions about ${title}?`}
          sub={`Free phone & WhatsApp guidance — talk to a real Sri Lankan advertising specialist.`}
          service={title}
        />
      </div>
      <FaqList items={article.faqs} />
      {filteredExtra.length ? (
        <section className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-2xl font-bold">Recommended reading</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredExtra.map((l) => (
              <Link
                key={l.href}
                to={l.href as never}
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/40"
              >
                <div className="font-semibold">{l.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">Learn more →</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold">Explore related services</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {category.services.slice(0, 6).map((s) => (
            <Link key={s.slug} to={`/${s.slug}` as never} className="rounded-lg border border-border bg-card p-4 hover:border-primary/40">
              <div className="font-semibold">{titleCase(s.keyword)}</div>
              <div className="mt-1 text-xs text-muted-foreground">View service →</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}