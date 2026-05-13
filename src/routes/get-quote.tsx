import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SITE } from "@/data/site";

const TITLE = "Get a Free Advertising Quote in Sri Lanka | advertisingsrilanka.lk";
const DESC = "Request a custom advertising plan and free quote for your business in Sri Lanka. ATL, BTL, digital, SEO, outdoor & more. Call 0771437707.";

export const Route = createFileRoute("/get-quote")({
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/get-quote` }],
  }),
  component: GetQuote,
});

function GetQuote() {
  const [submitted, setSubmitted] = useState(false);
  const { service } = useSearch({ from: "/get-quote" });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text =
      `New advertising inquiry from advertisingsrilanka.lk\n\n` +
      `Name: ${f.get("name")}\n` +
      `Phone: ${f.get("phone")}\n` +
      `Email: ${f.get("email")}\n` +
      `Service: ${f.get("service")}\n\n` +
      `${f.get("message")}`;
    const waUrl = `${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener");
    setSubmitted(true);
  };
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80"><Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Get a Quote" }]} /></div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Get a free advertising quote</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            Tell us about your business. We'll come back with a custom plan and recommended channels — usually within one business day.
          </p>
          {service ? (
            <p className="mt-4 inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-semibold">
              Inquiring about: {service}
            </p>
          ) : null}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.2fr,1fr]">
        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-accent" />
              <div className="text-xl font-bold">Thanks! Your inquiry is on the way.</div>
              <p className="text-sm text-muted-foreground">If your email client didn't open, please call us on {SITE.phone}.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Your name</label>
                <input required name="name" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Phone</label>
                  <input required name="phone" type="tel" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <input required name="email" type="email" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Interested in</label>
                <select name="service" defaultValue={service ?? undefined} className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary">
                  {service ? <option value={service}>{service}</option> : null}
                  <option>ATL Advertising (TV, Radio, Press)</option>
                  <option>BTL & Activations</option>
                  <option>Digital Marketing & Google Ads</option>
                  <option>SEO Services</option>
                  <option>Social Media Marketing</option>
                  <option>Outdoor / Billboards / LED</option>
                  <option>Branding & Creative</option>
                  <option>Web Design & Development</option>
                  <option>Video Production</option>
                  <option>Email / SMS / WhatsApp</option>
                  <option>Not sure — recommend the best mix</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Tell us about your business & goals</label>
                <textarea name="message" rows={5} required className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-3 text-sm font-semibold text-[var(--whatsapp-foreground)] shadow-[var(--shadow-card)]">
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </button>
              <p className="text-xs text-muted-foreground">Opens WhatsApp with your details pre-filled — just hit send.</p>
            </div>
          )}
        </form>
        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-sm font-semibold text-accent">Faster?</div>
            <div className="mt-2 text-xl font-bold">Talk to us right now</div>
            <div className="mt-5 space-y-3">
              <a href={`tel:${SITE.phone}`} className="flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 font-semibold text-accent-foreground"><Phone className="h-4 w-4" /> Call {SITE.phone}</a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-3 font-semibold text-[var(--whatsapp-foreground)]"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              <a href={`mailto:${SITE.email}`} className="flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 font-semibold"><Mail className="h-4 w-4" /> {SITE.email}</a>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <div className="font-semibold text-foreground">What happens next?</div>
            <ol className="mt-3 list-decimal space-y-1 pl-5">
              <li>We respond within one business day.</li>
              <li>Free 30-minute strategy call.</li>
              <li>Custom plan & recommendation.</li>
              <li>Campaign launch in days, not months.</li>
            </ol>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}