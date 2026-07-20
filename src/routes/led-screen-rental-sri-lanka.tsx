import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "LED Screen Rental Sri Lanka — Trusted Sri Lankan Agency | advertisingsrilanka.lk";
const DESC = "Looking for led screen rental sri lanka? Our Sri Lankan team plans, executes and delivers seamless led screen rental sri lanka with full production support. Free quote — call 0701772626 or WhatsApp.";

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
  { size: "10 × 6.5 feet", pitch: "P2.8", type: "Indoor", dist: "Up to 15 feet", best: "Weddings, corporate events, dinners", avail: "Call to check" },
  { size: "10 × 6.5 feet + 2 pillars", pitch: "P2.8", type: "Indoor", dist: "Up to 15 feet", best: "Weddings with side pillars, stage setups", avail: "Call to check" },
  { size: "20 × 10 feet", pitch: "P2.8", type: "Indoor / Outdoor", dist: "Up to 30 feet", best: "Large conferences, concerts, product launches", avail: "Call to check" },
  { size: "20 × 13 feet", pitch: "P2.8", type: "Indoor / Outdoor", dist: "Up to 40 feet", best: "Arena events, large weddings, festivals", avail: "Call to check" },
  { size: "Custom size", pitch: "P2.8 – P6", type: "Indoor / Outdoor", dist: "Any distance", best: "Any requirement", avail: "Call for quote" },
];

function LedSizeTable() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-bold sm:text-3xl">LED Screen Rental Sizes — Sri Lanka</h2>
      <p className="mt-2 text-sm text-muted-foreground">All packages include: LED wall · video processor · power distribution board · operator · laptop · delivery &amp; setup</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Screen Size</th>
              <th className="px-4 py-3">Pixel Pitch</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Viewing Distance</th>
              <th className="px-4 py-3">Best For</th>
              <th className="px-4 py-3">Availability</th>
            </tr>
          </thead>
          <tbody>
            {SIZES.map((r) => (
              <tr key={r.size} className="border-t border-border align-top">
                <td className="px-4 py-3 font-semibold">{r.size}</td>
                <td className="px-4 py-3">{r.pitch}</td>
                <td className="px-4 py-3">{r.type}</td>
                <td className="px-4 py-3">{r.dist}</td>
                <td className="px-4 py-3">{r.best}</td>
                <td className="px-4 py-3">{r.avail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-5 text-sm">
        All sizes available islandwide across Sri Lanka — Colombo, Kandy, Galle, Negombo, Jaffna and beyond. Not sure what size fits your venue? Tell us your hall dimensions and guest count — we will recommend the right screen for free.
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-accent-foreground">Call {SITE.phone}</a>
          <a href="https://wa.me/94701772626?text=Hi,%20I%20need%20help%20choosing%20the%20right%20LED%20screen%20size%20for%20my%20event%20in%20Sri%20Lanka" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold">WhatsApp for Size Guide</a>
        </div>
      </div>
    </section>
  );
}
