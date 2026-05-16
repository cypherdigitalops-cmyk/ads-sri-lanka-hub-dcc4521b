import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CTASection } from "./CTASection";
import { SITE } from "@/data/site";
import heroImg from "@/assets/hero-advertising.jpg";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type FAQ = { q: string; a: string };

export type RelatedLink = { href: string; label: string };

export type CustomBlogProps = {
  slug: string; // e.g. blog/led-screen-rent-colombo-guide
  title: string;
  description: string;
  kicker?: string;
  publishedISO?: string;
  category?: { label: string; href?: string };
  intro: string; // hero/intro paragraph
  blocks: ContentBlock[];
  faqs?: FAQ[];
  related?: RelatedLink[];
};

const TARGET_ANCHOR = "LED screen rent";
const TARGET_HREF = "/led-screen-rental-sri-lanka";

/**
 * Linkifies the FIRST occurrence of "LED screen rent" (and close variants)
 * in a string into a link to the LED screen rental service page. Used to
 * guarantee each paragraph carries a clean keyword anchor to the target page
 * without manual HTML in every article file.
 */
const ANCHOR_RE = /(LED\s+screen\s+rent(?:al)?s?)/i;
function withAnchor(text: string, used: { value: boolean }): React.ReactNode {
  if (used.value) return text;
  const m = ANCHOR_RE.exec(text);
  if (!m) return text;
  used.value = true;
  const before = text.slice(0, m.index);
  const after = text.slice(m.index + m[0].length);
  return (
    <>
      {before}
      <Link to={TARGET_HREF} className="font-semibold text-primary underline-offset-2 hover:underline">
        {m[0]}
      </Link>
      {after}
    </>
  );
}

function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  // We let the first matching paragraph become the keyword anchor.
  const used = { value: false };
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.type === "h2")
          return (
            <h2 key={i} className="mt-10 text-2xl font-bold sm:text-3xl">
              {b.text}
            </h2>
          );
        if (b.type === "h3")
          return (
            <h3 key={i} className="mt-6 text-xl font-semibold">
              {b.text}
            </h3>
          );
        if (b.type === "p")
          return (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {withAnchor(b.text, used)}
            </p>
          );
        if (b.type === "callout")
          return (
            <div
              key={i}
              className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm text-foreground"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <p className="leading-relaxed">{withAnchor(b.text, used)}</p>
              </div>
            </div>
          );
        if (b.type === "ul")
          return (
            <ul key={i} className="ml-5 list-disc space-y-2 text-muted-foreground">
              {b.items.map((it, j) => (
                <li key={j}>{withAnchor(it, used)}</li>
              ))}
            </ul>
          );
        if (b.type === "ol")
          return (
            <ol key={i} className="ml-5 list-decimal space-y-2 text-muted-foreground">
              {b.items.map((it, j) => (
                <li key={j}>{withAnchor(it, used)}</li>
              ))}
            </ol>
          );
        if (b.type === "table")
          return (
            <div key={i} className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60">
                  <tr>
                    {b.head.map((h, j) => (
                      <th key={j} className="px-3 py-2 text-left font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((r, j) => (
                    <tr key={j} className="border-t border-border">
                      {r.map((c, k) => (
                        <td key={k} className="px-3 py-2 align-top text-muted-foreground">
                          {withAnchor(c, used)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        return null;
      })}
      {/* Hard-guarantee: if no paragraph matched the anchor regex, render a
          dedicated "see also" line so every article still passes link equity
          to the target page with the exact anchor text. */}
      {!used.value ? (
        <p className="text-muted-foreground leading-relaxed">
          See our full pricing, sizes and booking process on the{" "}
          <Link
            to={TARGET_HREF}
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            {TARGET_ANCHOR}
          </Link>{" "}
          service page.
        </p>
      ) : null}
    </div>
  );
}

function FaqList({ items }: { items: FAQ[] }) {
  if (!items.length) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

export function CustomBlogArticle({
  slug,
  title,
  description,
  kicker = "Insights & Guides",
  publishedISO = "2025-01-15",
  category,
  intro,
  blocks,
  faqs = [],
  related = [],
}: CustomBlogProps) {
  const url = `${SITE.url}/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    inLanguage: "en-LK",
    datePublished: publishedISO,
    dateModified: publishedISO,
    mainEntityOfPage: url,
    url,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    about: { "@type": "Thing", name: category?.label ?? "LED screen rent Sri Lanka" },
    articleSection: category?.label ?? "Event AV",
    keywords: [
      "led screen rent",
      "led screen rental sri lanka",
      "led screen hire sri lanka",
      "event led screen",
    ].join(", "),
  };
  const crumbs: Crumb[] = [
    { label: "Home", to: "/" },
    { label: "Blog" },
    { label: title },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="relative overflow-hidden text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-20">
          <div className="text-primary-foreground/80">
            <Breadcrumbs items={crumbs} />
          </div>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-accent">
            <Sparkles className="h-3.5 w-3.5" /> {kicker}
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">{intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={anchor.href as never}
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:opacity-90"
            >
              {anchor.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <Blocks blocks={blocks} anchor={anchor} />
      </article>

      <div className="mx-auto max-w-7xl px-4">
        <CTASection
          headline={anchor.ctaHeadline ?? `Get expert help with ${anchor.fallbackText}`}
          sub={`Free advice on screen size, pixel pitch and budget — call ${SITE.phone} or WhatsApp.`}
          service={anchor.ctaService ?? anchor.fallbackText}
        />
      </div>

      <FaqList items={faqs} />

      {related.length ? (
        <section className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-2xl font-bold">Continue reading</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.href}
                to={r.href as never}
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/40"
              >
                <div className="flex items-start gap-2 text-sm font-semibold">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  {r.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Read the guide →</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
