import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTASection";
import { CATEGORIES, SITE, titleCase } from "@/data/site";

const TITLE = "All Advertising Services in Sri Lanka — Full Directory | advertisingsrilanka.lk";
const DESC = "Browse 180+ advertising services for Sri Lanka — ATL, BTL, digital, SEO, social media, outdoor, branding, web & video. Search and find your solution in seconds.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: SITE.url + "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const [q, setQ] = useState("");
  const filteredCats = useMemo(() => {
    if (!q) return CATEGORIES;
    const needle = q.toLowerCase();
    return CATEGORIES.map((c) => ({
      ...c,
      services: c.services.filter((s) => s.keyword.toLowerCase().includes(needle)),
      blog: c.blog.filter((b) => b.keyword.toLowerCase().includes(needle)),
    })).filter((c) => c.services.length || c.blog.length || c.title.toLowerCase().includes(needle));
  }, [q]);

  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
          <nav className="text-xs text-primary-foreground/70">
            <Link to="/" className="hover:text-accent">Home</Link> <span className="mx-1">/</span> Services
          </nav>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">All advertising services in Sri Lanka</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            Every service we offer, organised by category. Use search to find exactly what you need.
          </p>
          <div className="relative mt-7 max-w-2xl">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search 180+ advertising services..."
              className="h-14 w-full rounded-full bg-background pl-14 pr-5 text-base text-foreground shadow-[var(--shadow-elegant)] outline-none ring-2 ring-transparent focus:ring-accent"
              aria-label="Search services"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        {/* Quick anchor list */}
        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to={`/${c.slug}` as never} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold hover:border-primary hover:text-primary">
              {c.title}
            </Link>
          ))}
        </div>

        {filteredCats.length === 0 && (
          <p className="text-center text-muted-foreground">No services match "{q}".</p>
        )}

        {filteredCats.map((c) => (
          <div key={c.slug} className="mb-14">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-3">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">{c.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.short}</p>
              </div>
              <Link to={`/${c.slug}` as never} className="text-sm font-semibold text-primary hover:underline">
                View hub →
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}` as never}
                  className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 hover:border-primary/40"
                >
                  <span className="text-sm font-semibold">{titleCase(s.keyword)}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
            {c.blog.length > 0 && (
              <details className="mt-5 rounded-lg border border-border bg-secondary/30 p-4 text-sm">
                <summary className="cursor-pointer font-semibold">Guides &amp; insights ({c.blog.length})</summary>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {c.blog.map((b) => (
                    <li key={b.slug}>
                      <Link to={`/blog/${b.slug}` as never} className="text-primary hover:underline">
                        {titleCase(b.keyword)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        ))}
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <CTASection
          headline="Not sure which service fits your goal?"
          sub={`Call ${SITE.phone} for a free recommendation — we'll match you to the right channel and budget.`}
        />
      </div>
    </PageShell>
  );
}
