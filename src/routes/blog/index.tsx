import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SITE } from "@/data/site";

const modules = import.meta.glob("./*.tsx", { eager: false });
const SLUGS = Object.keys(modules)
  .map((p) => p.replace("./", "").replace(/\.tsx$/, ""))
  .filter((s) => s !== "index")
  .sort();

function humanize(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\bsri lanka\b/gi, "Sri Lanka")
    .replace(/\bbmich\b/gi, "BMICH")
    .replace(/\batl\b/gi, "ATL")
    .replace(/\bbtl\b/gi, "BTL")
    .replace(/\bttl\b/gi, "TTL")
    .replace(/\bav\b/gi, "AV")
    .replace(/\bled\b/gi, "LED")
    .replace(/\bseo\b/gi, "SEO")
    .replace(/\bdj\b/gi, "DJ")
    .replace(/\bmc\b/gi, "MC")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Advertising Blog Sri Lanka | Guides, Costs & How-Tos" },
      {
        name: "description",
        content:
          "Read the latest advertising, marketing, branding, SEO and event management guides for Sri Lanka. Costs, strategies, case studies and how-tos from Advertising Sri Lanka.",
      },
      { property: "og:title", content: "Advertising Blog — Sri Lanka" },
      {
        property: "og:description",
        content:
          "Guides on advertising, branding, SEO, digital marketing and event management in Sri Lanka.",
      },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog` }],
  }),
});

function BlogIndex() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Advertising &amp; Marketing Blog — Sri Lanka
          </h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            In-depth guides on advertising, branding, SEO, digital marketing,
            event management and LED screen rentals in Sri Lanka. {SLUGS.length}{" "}
            articles and counting.
          </p>
        </header>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SLUGS.map((slug) => (
            <li key={slug}>
              <Link
                to={`/blog/${slug}` as never}
                className="block rounded-lg border border-border bg-card p-4 hover:border-primary hover:bg-accent/30 transition-colors"
              >
                <span className="font-medium text-foreground">
                  {humanize(slug)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}