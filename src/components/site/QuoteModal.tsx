import { useEffect, useState } from "react";
import { MessageCircle, Phone, Send, X } from "lucide-react";
import { SITE, CATEGORIES, titleCase } from "@/data/site";

export type QuoteOpenDetail = { service?: string };

export function openQuoteModal(service?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<QuoteOpenDetail>("openQuoteModal", { detail: { service } }),
  );
}

const ALL_SERVICES: string[] = (() => {
  const set = new Set<string>();
  // Push our priority services first
  [
    "Printing Services",
    "LED Screen Rental",
    "Event Management",
    "Outdoor Advertising",
    "Banner Printing",
    "Backdrop Printing",
    "Sticker Printing",
    "Vehicle Branding",
    "Sign Boards",
    "Roll-Up Banners",
    "Exhibition Printing",
    "Tent & Marquee Rental",
    "Sound System Rental",
    "Stage Rental",
  ].forEach((x) => set.add(x));
  for (const cat of CATEGORIES) {
    set.add(titleCase(cat.hubKeyword).replace(/ Sri Lanka$/i, ""));
    for (const s of cat.services) {
      set.add(titleCase(s.keyword).replace(/ Sri Lanka$/i, ""));
    }
  }
  return Array.from(set);
})();

export function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    function handler(e: Event) {
      const detail = (e as CustomEvent<QuoteOpenDetail>).detail;
      if (detail?.service) setService(detail.service);
      setSent(false);
      setOpen(true);
    }
    window.addEventListener("openQuoteModal", handler);
    return () => window.removeEventListener("openQuoteModal", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `New Quote Request — ${service || "General Inquiry"}`,
      "",
      `Service: ${service || "—"}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      company ? `Company: ${company}` : "",
      message ? `Message: ${message}` : "",
    ].filter(Boolean);
    const url = `${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
    setSent(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <button
        type="button"
        aria-label="Close quote form"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
        <div className="bg-[image:var(--gradient-hero)] px-6 py-5 text-primary-foreground">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                Free Quote — Reply in 5 min
              </div>
              <h2 id="quote-modal-title" className="mt-1 text-xl font-bold sm:text-2xl">
                Get a Free Quote
              </h2>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Fill the form and we'll reply on WhatsApp / call you back.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-primary-foreground/80 transition hover:bg-primary-foreground/10 hover:text-primary-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
          {sent ? (
            <div className="py-6 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--whatsapp)]/15 text-[var(--whatsapp)]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-3 text-lg font-bold">Sent — check WhatsApp</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We've opened WhatsApp with your details. Hit send and we'll reply within minutes.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-5 rounded-full border border-border px-5 py-2 text-sm font-semibold hover:bg-muted"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <label className="block text-sm">
                <span className="font-semibold">Service Required *</span>
                <input
                  required
                  list="quote-services"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="e.g. Banner Printing, LED Screen Rental"
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <datalist id="quote-services">
                  {ALL_SERVICES.map((s) => (
                    <option key={s} value={s} />
                  ))}
                </datalist>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="font-semibold">Name *</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-semibold">Phone *</span>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="07X XXX XXXX"
                  />
                </label>
              </div>

              <label className="block text-sm">
                <span className="font-semibold">Company <span className="font-normal text-muted-foreground">(optional)</span></span>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Your company"
                />
              </label>

              <label className="block text-sm">
                <span className="font-semibold">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Quantity, sizes, deadline, budget…"
                />
              </label>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-bold text-accent-foreground shadow-lg transition hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" /> Send Free Quote Request
                </button>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-muted"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>
              <p className="text-xs text-muted-foreground">
                We respond in minutes during business hours (Mon–Sat 9am–7pm).
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}