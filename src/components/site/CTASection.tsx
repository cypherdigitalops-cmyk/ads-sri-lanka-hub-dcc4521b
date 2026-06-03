import { Link, useLocation } from "@tanstack/react-router";
import { MessageCircle, Phone, Send } from "lucide-react";
import { CATEGORIES, SITE, titleCase } from "@/data/site";
import { useState } from "react";
import { openQuoteModal } from "./QuoteModal";

/**
 * Derive the human-readable service/category name from the current URL path
 * so floating CTAs can tell us exactly what the visitor is inquiring about.
 */
function useCurrentService(): string | undefined {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  if (!slug) return undefined;
  for (const cat of CATEGORIES) {
    if (cat.slug === slug) return titleCase(cat.hubKeyword);
    const svc = cat.services.find((s) => s.slug === slug);
    if (svc) return titleCase(svc.keyword);
  }
  return undefined;
}

function waLink(service?: string) {
  if (!service) return SITE.whatsapp;
  const msg = `Hi, I'm inquiring about ${service}. Please share more details.`;
  return `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/**
 * Always-visible thin top contact bar — phone, WhatsApp and email
 * shown above the main header on every page.
 */
export function TopContactBar() {
  return (
    <div
      className="w-full text-white"
      style={{ background: "#15224A" }}
    >
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-3 px-4 text-[12px] font-medium">
        <a
          href={`tel:${SITE.phone}`}
          className="inline-flex items-center gap-1.5 hover:text-accent"
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden xs:inline">Call</span> {SITE.phone}
        </a>
        <div className="flex items-center gap-4">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 hover:text-accent"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Desktop-only floating "Get Free Quote" button — pinned to the left
 * edge so it complements the WhatsApp button on the right.
 */
export function FloatingQuoteButton() {
  const service = useCurrentService();
  return (
    <button
      type="button"
      onClick={() => openQuoteModal(service)}
      aria-label={service ? `Get a free quote for ${service}` : "Get a free quote"}
      className="fixed left-4 bottom-6 z-50 hidden items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-bold text-accent-foreground shadow-2xl ring-2 ring-accent/40 transition hover:scale-105 md:inline-flex"
    >
      <Send className="h-4 w-4" />
      Get Free Quote
    </button>
  );
}

/**
 * Mid-content WhatsApp CTA — drop into long-form pages roughly halfway
 * down so visitors can jump straight into a conversation.
 */
export function MidContentWhatsAppCTA({ service }: { service?: string }) {
  const href = service
    ? `${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${service}. Can you share pricing and timelines?`)}`
    : SITE.whatsapp;
  return (
    <section className="mx-auto my-10 max-w-3xl px-4">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-[var(--whatsapp)]/30 bg-[var(--whatsapp)]/5 p-6 sm:flex-row sm:p-7">
        <div className="text-center sm:text-left">
          <div className="text-base font-bold sm:text-lg">
            Talking to a specialist is faster than reading.
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {service ? `Get instant pricing & samples for ${service} on WhatsApp.` : "Get instant pricing & answers on WhatsApp — usually within 5 minutes."}
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener"
          className="inline-flex flex-none items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-bold text-[var(--whatsapp-foreground)] shadow-lg transition hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp Us Now
        </a>
      </div>
    </section>
  );
}

/**
 * Inline inquiry form — submission opens WhatsApp with the user's
 * details pre-filled. No backend required and works on every page.
 */
export function InlineInquiryForm({ service }: { service?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Hi, I'd like to inquire about ${service ?? "your services"}.`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      "",
      message ? `Message: ${message}` : "",
    ].filter(Boolean);
    const url = `${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  }

  return (
    <section id="inquiry" className="mx-auto max-w-3xl px-4 py-14">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
        <h2 className="text-2xl font-bold sm:text-3xl">
          {service ? `Request a free quote for ${service}` : "Send us an inquiry"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Fill in your details and we'll reply on WhatsApp within minutes (Mon–Sat 9am–7pm).
        </p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-semibold">Your name *</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="e.g. Nimal Perera"
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold">Phone / WhatsApp *</span>
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
            <span className="font-semibold">Email (optional)</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="you@company.lk"
            />
          </label>
          <label className="block text-sm">
            <span className="font-semibold">Tell us about your project</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder={service ? `Quantity, sizes, deadline for ${service}…` : "Goals, timeline, budget…"}
            />
          </label>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-bold text-[var(--whatsapp-foreground)] shadow-lg transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Send via WhatsApp
            </button>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              <Phone className="h-4 w-4" /> Or call {SITE.phone}
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            By submitting, you agree to be contacted about your inquiry. We never share your details.
          </p>
        </form>
      </div>
    </section>
  );
}

export function CTASection({ headline, sub, service }: { headline?: string; sub?: string; service?: string }) {
  const waHref = service
    ? `${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I'm inquiring about ${service}. Please share more details.`)}`
    : SITE.whatsapp;
  const quoteHref = service ? `/get-quote?service=${encodeURIComponent(service)}` : "/get-quote";
  return (
    <section className="my-12 rounded-2xl bg-[image:var(--gradient-hero)] p-8 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          {headline ?? "Have a question? Get free advice — no obligation"}
        </h2>
        <p className="mt-3 text-primary-foreground/85">
          {sub ?? "Speak to advertising specialists for free guidance on the right channel for your business."}
        </p>
        {service ? (
          <p className="mt-3 inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-sm font-semibold text-primary-foreground">
            Inquiring about: {service}
          </p>
        ) : null}
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={waHref}
            target="_blank"
            rel="noopener"
            aria-label={service ? `Chat on WhatsApp about ${service}` : "Chat with us on WhatsApp"}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-8 py-3.5 text-base font-bold text-[var(--whatsapp-foreground)] shadow-lg ring-2 ring-[var(--whatsapp)]/40 transition hover:scale-[1.03] hover:opacity-95"
          >
            <span className="absolute -inset-0.5 rounded-full bg-[var(--whatsapp)] opacity-50 blur-md transition group-hover:opacity-70" aria-hidden />
            <MessageCircle className="relative h-5 w-5" />
            <span className="relative">
              {service ? `WhatsApp about ${service}` : "Chat on WhatsApp — reply in 5 min"}
            </span>
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3 text-base font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:opacity-90"
          >
            <Phone className="h-5 w-5" /> Call {SITE.phone}
          </a>
          <Link
            to={quoteHref as never}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
          >
            <Send className="h-5 w-5" />
            {service ? `Get a quote for ${service}` : "Get Free Advertising Advice"}
          </Link>
        </div>
        <p className="mt-4 text-xs text-primary-foreground/70">
          Free consultation • No obligation • Mon–Sat 9am–7pm
        </p>
      </div>
    </section>
  );
}

/**
 * Floating WhatsApp button — visible on every page, every device.
 * Animated pulse ring draws the eye. Persistent label on desktop;
 * compact circle on mobile (lifts above the StickyCallBar).
 */
export function FloatingWhatsApp() {
  const service = useCurrentService();
  const label = service ? `WhatsApp about ${service}` : "Chat on WhatsApp";
  return (
    <div className="fixed right-4 z-50 flex flex-col items-end gap-2 sm:right-6 bottom-[70px] md:bottom-6">
      {service ? (
        <span
          className="max-w-[78vw] truncate rounded-full bg-foreground/90 px-3 py-1 text-[11px] font-semibold text-background shadow-lg ring-1 ring-foreground/10 sm:max-w-xs sm:text-xs"
          aria-hidden
        >
          Inquiring about: {service}
        </span>
      ) : null}
      <a
        href={waLink(service)}
        target="_blank"
        rel="noopener"
        aria-label={service ? `Chat on WhatsApp about ${service}` : "Chat on WhatsApp — typically replies within 5 minutes"}
        className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3 font-semibold text-[var(--whatsapp-foreground)] shadow-2xl transition hover:scale-105"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--whatsapp)] opacity-60" aria-hidden />
        <span className="absolute inset-0 -z-10 rounded-full bg-[var(--whatsapp)] opacity-90" aria-hidden />
        <MessageCircle className="relative h-6 w-6" />
        <span className="relative hidden whitespace-nowrap text-sm sm:inline">
          {label}
        </span>
        <span className="relative hidden text-[10px] font-medium opacity-90 lg:inline">
          · replies in 5 min
        </span>
      </a>
    </div>
  );
}

export function StickyCallBar() {
  const service = useCurrentService();
  return (
    <>
      {/* Spacer so content is not hidden behind the fixed bar on mobile */}
      <div className="h-[54px] md:hidden" aria-hidden="true" />
      <div
        className="fixed bottom-0 left-0 right-0 z-40 flex h-[54px] md:hidden"
        style={{ background: "#15224A", borderTop: "1px solid rgba(255,255,255,0.12)" }}
      >
        <a
          href={`tel:${SITE.phone}`}
          className="flex flex-1 items-center justify-center gap-2 text-white"
          style={{ fontSize: 14, fontWeight: 500 }}
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={waLink(service)}
          target="_blank"
          rel="noopener"
          className="flex flex-1 items-center justify-center gap-2 text-white"
          style={{ fontSize: 14, fontWeight: 500, borderLeft: "1px solid rgba(255,255,255,0.12)" }}
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <button
          type="button"
          onClick={() => openQuoteModal(service)}
          className="flex flex-1 items-center justify-center gap-2 font-semibold text-accent-foreground"
          style={{ fontSize: 14, fontWeight: 700, background: "var(--accent, #f59e0b)", borderLeft: "1px solid rgba(255,255,255,0.12)" }}
        >
          <Send className="h-4 w-4" /> Free Quote
        </button>
      </div>
    </>
  );
}