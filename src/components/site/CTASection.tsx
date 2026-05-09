import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Send } from "lucide-react";
import { SITE } from "@/data/site";

export function CTASection({ headline, sub }: { headline?: string; sub?: string }) {
  return (
    <section className="my-12 rounded-2xl bg-[image:var(--gradient-hero)] p-8 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          {headline ?? "Ready to grow your brand in Sri Lanka?"}
        </h2>
        <p className="mt-3 text-primary-foreground/85">
          {sub ?? "Talk to our advertising specialists today. Free strategy call, no obligation."}
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3 text-base font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:opacity-90"
          >
            <Phone className="h-5 w-5" /> Call {SITE.phone}
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-3 text-base font-semibold text-[var(--whatsapp-foreground)] transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
          <Link
            to="/get-quote"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
          >
            <Send className="h-5 w-5" /> Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export function StickyCallBar() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-30 flex justify-center sm:hidden">
      <div className="flex w-full max-w-md gap-2 rounded-full bg-background/95 p-1.5 shadow-[var(--shadow-elegant)] ring-1 ring-border">
        <a href={`tel:${SITE.phone}`} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-sm font-semibold text-accent-foreground">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a href={SITE.whatsapp} target="_blank" rel="noopener" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2 text-sm font-semibold text-[var(--whatsapp-foreground)]">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}