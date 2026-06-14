import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin, Clock, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SITE } from "@/data/site";
import { trackCta } from "@/components/site/ClickTracker";

const TITLE = "Careers at Advertising Sri Lanka — Join Our Creative & Media Team";
const DESC =
  "Open roles for strategists, designers, copywriters, digital marketers, account managers and media planners in Colombo. Apply to join Sri Lanka's #1 advertising team.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/careers` }],
  }),
  component: CareersPage,
});

type Role = {
  id: string;
  title: string;
  type: "Full-time" | "Contract" | "Internship";
  location: string;
  blurb: string;
};

const ROLES: Role[] = [
  {
    id: "senior-art-director",
    title: "Senior Art Director",
    type: "Full-time",
    location: "Colombo",
    blurb: "Lead creative on ATL and digital campaigns. 6+ years in advertising or design-led agencies.",
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Colombo",
    blurb: "Plan and run Meta, Google and TikTok campaigns. Hands-on with reporting and creative briefs.",
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    type: "Full-time",
    location: "Colombo / Remote (Sri Lanka)",
    blurb: "Print, packaging and social. Strong typography and a portfolio that shows craft, not just templates.",
  },
  {
    id: "copywriter-sinhala-english",
    title: "Copywriter (Sinhala + English)",
    type: "Full-time",
    location: "Colombo",
    blurb: "Write campaign lines, scripts and long-form content. Bilingual in Sinhala and English required.",
  },
  {
    id: "account-manager",
    title: "Account Manager",
    type: "Full-time",
    location: "Colombo",
    blurb: "Own client relationships end-to-end. 3+ years in advertising, brand or media account management.",
  },
  {
    id: "media-planner",
    title: "Media Planner & Buyer",
    type: "Full-time",
    location: "Colombo",
    blurb: "Plan TV, radio, press and outdoor buys. Negotiate rates with sales houses and outdoor vendors.",
  },
  {
    id: "marketing-internship",
    title: "Marketing Internship",
    type: "Internship",
    location: "Colombo",
    blurb: "6-month internship across strategy, creative and digital. Open to final-year and fresh graduates.",
  },
];

function applyViaWhatsApp(role: Role) {
  trackCta("apply_job", { role: role.id, channel: "whatsapp" });
  const text =
    `Hi, I'd like to apply for the ${role.title} role at advertisingsrilanka.lk.\n\n` +
    `Role: ${role.title}\nLocation: ${role.location}\nType: ${role.type}\n\n` +
    `My background:\n(short summary + link to CV / portfolio)`;
  const url = `${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  if (typeof window !== "undefined") window.open(url, "_blank", "noopener");
}

function applyViaEmail(role: Role) {
  trackCta("apply_job", { role: role.id, channel: "email" });
  const subject = `Application: ${role.title}`;
  const body =
    `Hi,\n\nI'd like to apply for the ${role.title} role.\n\n` +
    `Location: ${role.location}\nType: ${role.type}\n\n` +
    `A short note about my background:\n(paste here)\n\nCV / portfolio link:\n(paste here)\n\nThanks.`;
  if (typeof window !== "undefined") {
    window.location.href = `mailto:careers@${SITE.domain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}

function CareersPage() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Careers" }]} />
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Careers at Advertising Sri Lanka</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            We're hiring strategists, creatives, digital marketers and media planners. Work on
            campaigns for some of Sri Lanka's most loved brands — across ATL, BTL, digital, print
            and outdoor.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Open roles</h2>
          <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
            {ROLES.length} positions
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {ROLES.map((role) => (
            <article
              key={role.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                  <Clock className="h-3 w-3" /> {role.type}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {role.location}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-foreground">{role.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{role.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  onClick={() => applyViaWhatsApp(role)}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2 text-sm font-semibold text-[var(--whatsapp-foreground)]"
                >
                  <MessageCircle className="h-4 w-4" /> Apply on WhatsApp
                </button>
                <button
                  onClick={() => applyViaEmail(role)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground"
                >
                  <Mail className="h-4 w-4" /> Apply by email
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-bold text-foreground">Don't see your role?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We're always open to senior creative, digital and media talent. Send your CV and a short
            note about how you'd add value.
          </p>
          <button
            onClick={() =>
              applyViaWhatsApp({
                id: "general-application",
                title: "General Application",
                type: "Full-time",
                location: "Colombo",
                blurb: "",
              })
            }
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Send general application <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </PageShell>
  );
}