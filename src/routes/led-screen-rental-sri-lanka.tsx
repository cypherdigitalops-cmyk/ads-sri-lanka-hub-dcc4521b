import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "LED Screen Rental Sri Lanka — Trusted Sri Lankan Agency | advertisingsrilanka.lk";
const DESC = "Looking for led screen rental sri lanka? Our Sri Lankan team plans, executes and delivers seamless led screen rental sri lanka with full production support. Free quote — call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/led-screen-rental-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "led screen rental sri lanka, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/led-screen-rental-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate
        category={CAT}
        keyword="led screen rental sri lanka"
        extraLinks={[
          { href: "/sound-system-rental-sri-lanka", label: "Sound System Rental Sri Lanka", anchor: "line-array sound systems" },
          { href: "/stage-setup-sri-lanka", label: "Stage Setup Sri Lanka", anchor: "Truss stages" },
          { href: "/lighting-rental-sri-lanka", label: "Lighting Rental Sri Lanka", anchor: "intelligent lighting" },
          { href: "/generator-rental-sri-lanka", label: "Generator Rental Sri Lanka", anchor: "Silent diesel generators" },
          { href: "/tent-marquee-rental-sri-lanka", label: "Tent & Marquee Rental Sri Lanka", anchor: "Pagoda, frame and stretch tents" },
          { href: "/event-photography-sri-lanka", label: "Event Photography Sri Lanka", anchor: "photography and videography" },
          { href: "/photo-booth-rental-sri-lanka", label: "Photo Booth Rental Sri Lanka", anchor: "Photo booth" },
          { href: "/drone-rental-sri-lanka", label: "Drone Rental Sri Lanka", anchor: "drone" },
          { href: "/bouncy-castle-rental-sri-lanka", label: "Bouncy Castle Rental Sri Lanka", anchor: "bouncy castle" },
          { href: "/product-launch-sri-lanka", label: "Product Launch Sri Lanka", anchor: "Product launches" },
          { href: "/wedding-planners-sri-lanka", label: "Wedding Planners Sri Lanka", anchor: "Weddings" },
          { href: "/exhibition-management-sri-lanka", label: "Exhibition Management Sri Lanka", anchor: "Exhibitions & trade shows" },
          { href: "/corporate-event-management-sri-lanka", label: "Corporate Event Management Sri Lanka", anchor: "Corporate events & conferences" },
          { href: "/conference-management-sri-lanka", label: "Conference Management Sri Lanka", anchor: "AGMs, dealer meets" },
          { href: "/mall-activation-sri-lanka", label: "Mall Activation Sri Lanka", anchor: "mall activations" },
        ]}
      />
      <LedSizeTable />
    </PageShell>
  ),
});

const SIZES = [
  { pkg: "Starter Indoor", size: "2m × 1.5m", pitch: "P3", dist: "Up to 5m", best: "Boardrooms, small meetings", avail: "Call to check" },
  { pkg: "Standard Indoor", size: "4m × 3m", pitch: "P3 / P4", dist: "Up to 15m", best: "Conferences, weddings, dinners", avail: "Call to check" },
  { pkg: "Large Indoor", size: "6m × 4m", pitch: "P3 / P4", dist: "Up to 25m", best: "Concerts, large conferences", avail: "Call to check" },
  { pkg: "Extra Large Indoor", size: "8m × 5m", pitch: "P3", dist: "Up to 35m", best: "Arena events, exhibitions", avail: "Call to check" },
  { pkg: "Outdoor Standard", size: "4m × 3m", pitch: "P6", dist: "Up to 30m", best: "Activations, outdoor events", avail: "Call to check" },
  { pkg: "Outdoor Large", size: "6m × 4m", pitch: "P6 / P10", dist: "Up to 60m", best: "Concerts, festivals, roadshows", avail: "Call to check" },
  { pkg: "Custom Build", size: "Any size", pitch: "P2 – P10", dist: "Any distance", best: "Any requirement", avail: "Call for quote" },
];

function LedSizeTable() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-bold sm:text-3xl">LED Screen Rental Sizes — Sri Lanka</h2>
      <p className="mt-2 text-sm text-muted-foreground">Pick the size that fits your venue. Pixel pitch and viewing distance help us recommend the sharpest screen for your audience.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Package</th>
              <th className="px-4 py-3">Screen Size</th>
              <th className="px-4 py-3">Pixel Pitch</th>
              <th className="px-4 py-3">Viewing Distance</th>
              <th className="px-4 py-3">Best For</th>
              <th className="px-4 py-3">Availability</th>
            </tr>
          </thead>
          <tbody>
            {SIZES.map((r) => (
              <tr key={r.pkg} className="border-t border-border align-top">
                <td className="px-4 py-3 font-semibold">{r.pkg}</td>
                <td className="px-4 py-3">{r.size}</td>
                <td className="px-4 py-3">{r.pitch}</td>
                <td className="px-4 py-3">{r.dist}</td>
                <td className="px-4 py-3">{r.best}</td>
                <td className="px-4 py-3">{r.avail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-5 text-sm">
        <strong>Not sure what size you need?</strong> Tell us your venue dimensions and expected audience size — we will recommend the right screen and pixel pitch for free. Call{" "}
        <a href={`tel:${SITE.phone}`} className="font-semibold text-primary">{SITE.phone}</a> or{" "}
        <a href={`https://wa.me/${SITE.phone.replace(/[^0-9]/g, "")}`} className="font-semibold text-primary">WhatsApp</a>.
      </div>
    </section>
  );
}
