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
    </PageShell>
  ),
});
