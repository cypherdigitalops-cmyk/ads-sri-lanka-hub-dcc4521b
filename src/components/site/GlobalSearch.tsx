import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { CATEGORIES, titleCase } from "@/data/site";

type Item = { slug: string; label: string; group: string; kind: "service" | "hub" | "blog" };

function buildIndex(): Item[] {
  const items: Item[] = [];
  for (const c of CATEGORIES) {
    items.push({ slug: c.slug, label: c.title, group: c.title, kind: "hub" });
    for (const s of c.services) {
      items.push({ slug: s.slug, label: titleCase(s.keyword), group: c.title, kind: "service" });
    }
    for (const b of c.blog) {
      items.push({ slug: `blog/${b.slug}`, label: titleCase(b.keyword), group: c.title, kind: "blog" });
    }
  }
  return items;
}

export function GlobalSearch({ compact = false }: { compact?: boolean }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const wrapRef = useRef<HTMLDivElement>(null);
  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [] as Item[];
    return index
      .filter((i) => i.label.toLowerCase().includes(needle) || i.group.toLowerCase().includes(needle))
      .slice(0, 12);
  }, [q, index]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function go(item: Item) {
    setOpen(false);
    setQ("");
    navigate({ to: `/${item.slug}` as never });
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter" && results[active]) { e.preventDefault(); go(results[active]); }
    else if (e.key === "Escape") { setOpen(false); }
  }

  return (
    <div ref={wrapRef} className={`relative ${compact ? "w-full" : "w-full max-w-md"}`}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        value={q}
        onChange={(e) => { setQ(e.target.value); setOpen(true); setActive(0); }}
        onFocus={() => q && setOpen(true)}
        onKeyDown={onKey}
        placeholder="Search 180+ services..."
        aria-label="Search services"
        className="h-10 w-full rounded-full border-2 border-primary/40 bg-background pl-9 pr-8 text-sm font-medium shadow-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
      {q && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => { setQ(""); setOpen(false); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
      {open && results.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-auto rounded-lg border border-border bg-popover shadow-[var(--shadow-elegant)]">
          <ul className="py-1">
            {results.map((r, i) => (
              <li key={`${r.kind}-${r.slug}`}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(r)}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm ${i === active ? "bg-muted" : ""}`}
                >
                  <span className="truncate">
                    <span className="font-medium">{r.label}</span>
                    <span className="ml-2 text-xs text-muted-foreground">{r.group}</span>
                  </span>
                  <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                    {r.kind}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {open && q && results.length === 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-lg border border-border bg-popover p-3 text-sm text-muted-foreground shadow-[var(--shadow-elegant)]">
          No services match "{q}".
        </div>
      )}
    </div>
  );
}