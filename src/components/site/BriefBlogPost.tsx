import { Fragment, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { BRIEF_POSTS, PUBLISHED, type BriefPost } from "@/data/cypher-blog-posts";

const AUTHOR = "Advertising Sri Lanka Editorial Team";

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] && m[2]) {
      out.push(
        <a key={k++} href={m[2]} className="font-medium text-primary underline underline-offset-2 hover:opacity-80">
          {m[1]}
        </a>,
      );
    } else if (m[3]) out.push(<strong key={k++} className="font-semibold text-foreground">{m[3]}</strong>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source }: { source: string }) {
  const lines = source.split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let k = 0;
  while (i < lines.length) {
    const line = lines[i] ?? "";
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("### ")) { blocks.push(<h3 key={k++} className="mt-6 text-lg font-bold text-foreground">{inline(line.slice(4))}</h3>); i++; continue; }
    if (line.startsWith("## ")) { blocks.push(<h2 key={k++} className="mt-10 text-2xl font-bold text-foreground">{inline(line.slice(3))}</h2>); i++; continue; }
    const collect = (test: (l: string) => boolean) => { const g: string[] = []; while (i < lines.length && test(lines[i] ?? "")) g.push(lines[i++] ?? ""); return g; };
    if (line.startsWith(">")) {
      const g = collect((l) => l.startsWith(">")).map((l) => l.replace(/^>\s?/, ""));
      const items = g.filter((l) => l.startsWith("- ")).map((l) => l.slice(2));
      const head = g.find((l) => !l.startsWith("- ") && l.trim());
      blocks.push(
        <aside key={k++} className="my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          {head && <p className="mb-2 font-bold text-foreground">{inline(head)}</p>}
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">{items.map((t, j) => <li key={j}>{inline(t)}</li>)}</ul>
        </aside>,
      );
      continue;
    }
    if (line.startsWith("|")) {
      const rows = collect((l) => l.startsWith("|")).filter((l) => !/^\|[\s|:-]+\|$/.test(l)).map((l) => l.slice(1, -1).split("|").map((c) => c.trim()));
      const [head, ...rest] = rows;
      blocks.push(
        <div key={k++} className="my-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-muted"><tr>{head?.map((c, j) => <th key={j} className="px-3 py-2 font-semibold text-foreground">{inline(c)}</th>)}</tr></thead>
            <tbody>{rest.map((r, j) => <tr key={j} className="border-t border-border">{r.map((c, n) => <td key={n} className="px-3 py-2 align-top text-muted-foreground">{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }
    if (/^[-*] /.test(line)) {
      const g = collect((l) => /^[-*] /.test(l));
      blocks.push(<ul key={k++} className="my-4 list-disc space-y-2 pl-6 text-muted-foreground">{g.map((l, j) => <li key={j}>{inline(l.slice(2))}</li>)}</ul>);
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const g = collect((l) => /^\d+\. /.test(l));
      blocks.push(<ol key={k++} className="my-4 list-decimal space-y-2 pl-6 text-muted-foreground">{g.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\. /, ""))}</li>)}</ol>);
      continue;
    }
    const g = collect((l) => !!l.trim() && !/^(#|>|\||[-*] |\d+\. )/.test(l));
    blocks.push(<p key={k++} className="my-4 leading-relaxed text-muted-foreground">{inline(g.join(" "))}</p>);
  }
  return <>{blocks}</>;
}

const strip = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");

export function briefPostHead(slug: string) {
  const p = BRIEF_POSTS[slug] as BriefPost;
  const url = `${SITE.url}/blog/${slug}`;
  const ld = [
    { "@context": "https://schema.org", "@type": "BlogPosting", headline: p.h1, description: p.description, author: { "@type": "Organization", name: AUTHOR }, publisher: { "@type": "Organization", name: "advertisingsrilanka.lk", url: SITE.url }, datePublished: PUBLISHED, dateModified: PUBLISHED, mainEntityOfPage: url },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: p.h1, item: url },
    ] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: strip(f.a) } })) },
  ];
  return {
    meta: [
      { title: p.title },
      { name: "description", content: p.description },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: ld.map((x) => ({ type: "application/ld+json", children: JSON.stringify(x) })),
  };
}

function titleFor(path: string) {
  return path.replace("/blog/", "").replace(/-/g, " ").replace(/\bsri lanka\b/gi, "Sri Lanka").replace(/\bseo\b/gi, "SEO").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function BriefBlogPost({ slug }: { slug: string }) {
  const p = BRIEF_POSTS[slug] as BriefPost;
  const date = new Date(PUBLISHED).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link> <span>›</span>{" "}
        <Link to="/blog" className="hover:text-primary">Blog</Link> <span>›</span>{" "}
        <span className="text-foreground">{p.h1}</span>
      </nav>
      <h1 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">{p.h1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        By {AUTHOR} · Last updated <time dateTime={PUBLISHED}>{date}</time>
      </p>
      <Markdown source={p.body} />
      <h2 className="mt-10 text-2xl font-bold text-foreground">Frequently asked questions</h2>
      <div className="mt-4 space-y-3">
        {p.faqs.map((f) => (
          <Fragment key={f.q}>
            <h3 className="text-lg font-bold text-foreground">{f.q}</h3>
            <Markdown source={f.a} />
          </Fragment>
        ))}
      </div>
      <section className="mt-10 rounded-xl border border-border bg-card p-5">
        <h2 className="text-xl font-bold text-foreground">Related guides</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {p.related.map((r) => (
            <li key={r}>
              <a href={r} className="block rounded-lg border border-border p-4 font-medium text-foreground hover:border-primary">
                {titleFor(r)} <span className="text-primary">→ Read guide</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
