import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useLocation } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { submitGuidanceInquiry } from "@/lib/guidance-inquiries.functions";
import { SITE } from "@/data/site";

export const GOAL_OPTIONS = [
  "More customers / leads",
  "More phone calls",
  "More online orders / sales",
  "More people visiting my shop",
  "Build my brand / get known",
  "Not sure — please advise",
];

export const BUDGET_OPTIONS = [
  "Under LKR 50,000",
  "LKR 50,000 – 100,000",
  "LKR 100,000 – 250,000",
  "LKR 250,000 – 500,000",
  "Above LKR 500,000",
  "Not sure yet",
];

const PRESENCE_OPTIONS: { value: "yes" | "some" | "no"; label: string }[] = [
  { value: "yes", label: "Yes — I have these and/or run ads already" },
  { value: "some", label: "Some — I have a page but don't really use it" },
  { value: "no", label: "No — starting from scratch" },
];

const fieldClass =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export function FreeGuidanceForm({ digital = false }: { digital?: boolean }) {
  const submit = useServerFn(submitGuidanceInquiry);
  const { pathname } = useLocation();
  const startedAt = useRef<number>(Date.now());
  const [goals, setGoals] = useState<string[]>([]);
  const [presence, setPresence] = useState<"yes" | "some" | "no" | "">("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [waLink, setWaLink] = useState<string>(SITE.whatsapp);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const toggleGoal = (g: string) =>
    setGoals((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setError(null);
    setSending(true);
    const values = {
      sells: String(f.get("sells") ?? ""),
      customers: String(f.get("customers") ?? ""),
      budget: String(f.get("budget") ?? ""),
      name: String(f.get("name") ?? ""),
      whatsapp: String(f.get("whatsapp") ?? ""),
      notes: String(f.get("notes") ?? ""),
    };
    const presenceLabel = PRESENCE_OPTIONS.find((p) => p.value === presence)?.label ?? "Not stated";
    const message = [
      "Hi, I'd like free marketing guidance.",
      "",
      `Name: ${values.name}`,
      `WhatsApp: ${values.whatsapp}`,
      `What I sell: ${values.sells}`,
      `My customers: ${values.customers}`,
      `Goals: ${goals.length ? goals.join(", ") : "Not sure"}`,
      `Budget: ${values.budget || "Not stated"}`,
      `Digital presence: ${presenceLabel}`,
      values.notes ? `Notes: ${values.notes}` : "",
      "",
      `Page: ${SITE.url}${pathname}`,
    ]
      .filter(Boolean)
      .join("\n");
    const link = `${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
    setWaLink(link);
    // Opened synchronously-ish after submit so mobile browsers keep the user gesture.
    const waWindow = typeof window !== "undefined" ? window.open("", "_blank") : null;
    try {
      await submit({
        data: {
          sells: values.sells,
          customers: values.customers,
          goals,
          budget: values.budget,
          digital_presence: presence || undefined,
          name: values.name,
          whatsapp: values.whatsapp,
          notes: values.notes,
          source_page: pathname,
          referrer: typeof document !== "undefined" ? document.referrer.slice(0, 500) : "",
          hp: String(f.get("company_website") ?? ""),
          elapsed_ms: Date.now() - startedAt.current,
        },
      });
      setDone(true);
      if (waWindow) waWindow.location.href = link;
      if (typeof window !== "undefined") window.scrollTo({ top: window.scrollY - 120, behavior: "smooth" });
    } catch (err) {
      waWindow?.close();
      setError(
        err instanceof Error && err.message.length < 160
          ? err.message
          : "Something went wrong. Please check your details and try again.",
      );
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-2xl font-bold text-foreground">Thank you — your details are with a specialist.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          There's nothing more you need to do. One of our advisors is reviewing your business and budget, and will send
          you free, tailored guidance within 24 hours — with no obligation.
        </p>
        <p className="mx-auto mt-4 max-w-xl rounded-lg bg-secondary/40 p-4 text-sm text-foreground">
          {presence === "no"
            ? "Since you're just getting started, our specialist will send you a simple step-by-step plan for the first digital channels to set up."
            : presence
              ? "Because you already have a page and/or ads running, our specialist will include a quick free audit — showing exactly where you may be losing customers or money."
              : "Our specialist will send you a simple plan matched to your goal and budget."}
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-105"
        >
          <MessageCircle className="h-4 w-4" /> Send your details on WhatsApp
        </a>
        <p className="mt-3 text-xs text-muted-foreground">
          WhatsApp should have opened with your details ready to send — if not, tap the button above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <p className="inline-flex items-center gap-2 rounded-full bg-secondary/50 px-3 py-1 text-xs font-semibold text-foreground">
        <ShieldCheck className="h-3.5 w-3.5" /> Free guidance • No obligation • No sales pressure
      </p>

      <fieldset className="mt-6 space-y-5">
        <legend className="text-lg font-bold text-foreground">About your business</legend>

        <div>
          <label htmlFor="sells" className="text-sm font-semibold text-foreground">
            What do you sell? <span className="text-destructive">*</span>
          </label>
          <input id="sells" name="sells" required maxLength={300} placeholder="e.g. Handmade furniture" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="customers" className="text-sm font-semibold text-foreground">Who are your customers?</label>
          <input id="customers" name="customers" maxLength={300} placeholder="e.g. Families in Colombo & suburbs" className={fieldClass} />
        </div>

        <div>
          <span className="text-sm font-semibold text-foreground">What do you want to achieve?</span>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {GOAL_OPTIONS.map((g) => {
              const active = goals.includes(g);
              return (
                <button
                  type="button"
                  key={g}
                  aria-pressed={active}
                  onClick={() => toggleGoal(g)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                    active
                      ? "border-primary bg-primary/10 font-semibold text-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {g}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="text-sm font-semibold text-foreground">Your monthly budget</label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="" disabled>Select a range</option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <span className="text-sm font-semibold text-foreground">
            Do you already have a website, Facebook/Instagram page, or run any ads?
          </span>
          <div className="mt-2 space-y-2">
            {PRESENCE_OPTIONS.map((p) => (
              <label
                key={p.value}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                  presence === p.value
                    ? "border-primary bg-primary/10 font-semibold text-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary/50"
                }`}
              >
                <input
                  type="radio"
                  name="digital_presence"
                  value={p.value}
                  checked={presence === p.value}
                  onChange={() => setPresence(p.value)}
                  className="h-4 w-4 accent-[hsl(var(--primary))]"
                />
                {p.label}
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-8 space-y-5">
        <legend className="text-lg font-bold text-foreground">How can we reach you</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-foreground">
              Name <span className="text-destructive">*</span>
            </label>
            <input id="name" name="name" required maxLength={120} className={fieldClass} />
          </div>
          <div>
            <label htmlFor="whatsapp" className="text-sm font-semibold text-foreground">
              Mobile / WhatsApp number <span className="text-destructive">*</span>
            </label>
            <input id="whatsapp" name="whatsapp" required inputMode="tel" maxLength={40} placeholder="07X XXX XXXX" className={fieldClass} />
          </div>
        </div>
        <div>
          <label htmlFor="notes" className="text-sm font-semibold text-foreground">Anything else you'd like to tell us?</label>
          <textarea id="notes" name="notes" rows={3} maxLength={2000} className={fieldClass} />
        </div>
      </fieldset>

      {/* honeypot — hidden from real users */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {error ? <p className="mt-5 text-sm font-medium text-destructive">{error}</p> : null}

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-4 text-base font-bold text-accent-foreground shadow-lg transition hover:scale-[1.01] disabled:opacity-60"
      >
        <Sparkles className="h-4 w-4" />
        {sending ? "Sending…" : digital ? "Get My Free Growth Plan" : "Get My Free Marketing Guidance"}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        {digital
          ? "Free • No obligation • Personally reviewed within 24 hours"
          : "Free • No obligation • Reply within 24 hours"}
      </p>
    </form>
  );
}

export function GuidanceTrustPanel() {
  return (
    <aside className="space-y-4">
      <div className="rounded-2xl border border-border bg-secondary/30 p-6">
        <p className="text-sm font-semibold text-foreground">
          A specialist reviews your details personally and sends a tailored recommendation within 24 hours.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          We are an information hub — not a sales desk. You'll get an honest recommendation on what would work best for
          your business and budget, even if that means spending less.
        </p>
      </div>
      <blockquote className="rounded-2xl border border-border bg-card p-6 text-sm italic text-muted-foreground">
        “I had no idea where to start. They sent me a clear 3-channel plan for my budget — no pressure to buy anything.”
        <footer className="mt-3 not-italic text-xs font-semibold text-foreground">— Small business owner, Colombo</footer>
      </blockquote>
      <p className="text-xs text-muted-foreground">Reviewed by our advisory team.</p>
    </aside>
  );
}