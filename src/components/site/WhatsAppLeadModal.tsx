import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry } from "@/lib/inquiries.functions";

const LS_KEY = "asl_lead_v1";
const SKIP_KEY = "asl_lead_skip_v1";

type Saved = { name?: string; email?: string; phone?: string };

function isWhatsAppHref(href: string) {
  return (
    /^https?:\/\/(api\.|web\.)?wa\.me\//i.test(href) ||
    /^https?:\/\/(web\.)?whatsapp\.com\//i.test(href)
  );
}

function readSaved(): Saved {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as Saved) : {};
  } catch {
    return {};
  }
}

export function WhatsAppLeadModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const pendingUrl = useRef<string | null>(null);
  const submit = useServerFn(submitInquiry);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const a = (e.target as HTMLElement | null)?.closest("a") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (!href || !isWhatsAppHref(href)) return;
      // Already captured / skipped -> let it through
      try {
        if (sessionStorage.getItem(SKIP_KEY) === "1") return;
        const s = readSaved();
        if (s.name) return;
      } catch { /* ignore */ }
      e.preventDefault();
      e.stopPropagation();
      pendingUrl.current = a.href;
      const s = readSaved();
      setName(s.name ?? "");
      setEmail(s.email ?? "");
      setOpen(true);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAndSkip();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function proceed(prependIntro: boolean) {
    const url = pendingUrl.current;
    pendingUrl.current = null;
    setOpen(false);
    if (!url) return;
    let finalUrl = url;
    if (prependIntro && (name.trim() || email.trim())) {
      try {
        const u = new URL(url);
        const existing = u.searchParams.get("text") ?? "";
        const intro = [
          name.trim() ? `Name: ${name.trim()}` : "",
          email.trim() ? `Email: ${email.trim()}` : "",
        ].filter(Boolean).join("\n");
        const combined = existing ? `${intro}\n\n${existing}` : intro;
        u.searchParams.set("text", combined);
        finalUrl = u.toString();
      } catch { /* ignore */ }
    }
    window.open(finalUrl, "_blank", "noopener");
  }

  function closeAndSkip() {
    try { sessionStorage.setItem(SKIP_KEY, "1"); } catch { /* ignore */ }
    proceed(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (trimmedName || trimmedEmail) {
      try {
        localStorage.setItem(LS_KEY, JSON.stringify({ name: trimmedName, email: trimmedEmail }));
      } catch { /* ignore */ }
    }
    // Only record an inquiry when a name is provided (backend requires name).
    if (trimmedName) {
      try {
        await submit({
          data: {
            name: trimmedName,
            phone: "",
            email: trimmedEmail,
            service: "WhatsApp Chat",
            message: "Started WhatsApp chat from website",
            page_url: typeof window !== "undefined" ? window.location.href : "",
            referrer: typeof document !== "undefined" ? document.referrer : "",
            user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : "",
          },
        });
      } catch (err) {
        console.error("Lead save failed", err);
      }
    }
    proceed(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wa-lead-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={closeAndSkip}
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
        <div className="flex items-start justify-between gap-4 bg-[var(--whatsapp)] px-5 py-4 text-[var(--whatsapp-foreground)]">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <h2 id="wa-lead-title" className="text-base font-bold sm:text-lg">
              Before we chat on WhatsApp
            </h2>
          </div>
          <button
            type="button"
            onClick={closeAndSkip}
            className="rounded-full p-1 hover:bg-black/10"
            aria-label="Skip"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-3 px-5 py-4">
          <p className="text-sm text-muted-foreground">
            Share your name & email so we can follow up (optional — you can skip).
          </p>
          <label className="block text-sm">
            <span className="font-semibold">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </label>
          <label className="block text-sm">
            <span className="font-semibold">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </label>
          <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={closeAndSkip}
              className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
            >
              Skip this step
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-2 text-sm font-bold text-[var(--whatsapp-foreground)] shadow-md hover:opacity-95"
            >
              <MessageCircle className="h-4 w-4" /> Continue to WhatsApp
            </button>
          </div>
          <p className="text-[11px] text-muted-foreground">
            We'll only use this to reply to your inquiry. Not compulsory.
          </p>
        </form>
      </div>
    </div>
  );
}