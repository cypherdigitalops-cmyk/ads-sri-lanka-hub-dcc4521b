import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Contact Advertising Sri Lanka — Call 0771437707";
const DESC = "Contact advertisingsrilanka.lk for advertising, marketing, SEO, branding and media services in Sri Lanka. Phone, WhatsApp, email and office details.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/contact` }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80"><Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} /></div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Contact us</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">Sri Lanka's advertising experts — one call away.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <a href={`tel:${SITE.phone}`} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] hover:border-primary/40">
          <Phone className="mx-auto h-8 w-8 text-primary" />
          <div className="mt-3 font-semibold">Phone</div>
          <div className="mt-1 text-sm text-muted-foreground">{SITE.phone}</div>
        </a>
        <a href={SITE.whatsapp} target="_blank" rel="noopener" className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] hover:border-primary/40">
          <MessageCircle className="mx-auto h-8 w-8 text-[var(--whatsapp)]" />
          <div className="mt-3 font-semibold">WhatsApp</div>
          <div className="mt-1 text-sm text-muted-foreground">Chat with us 24/7</div>
        </a>
        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
          <MapPin className="mx-auto h-8 w-8 text-primary" />
          <div className="mt-3 font-semibold">Office</div>
          <div className="mt-1 text-sm text-muted-foreground">Colombo, Sri Lanka</div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4">
        <CTASection />
      </div>
    </PageShell>
  );
}