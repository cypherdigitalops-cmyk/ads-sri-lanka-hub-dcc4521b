import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Corporate Event Management Sri Lanka — Trusted Sri Lankan Agency | advertisingsrilanka.lk";
const DESC = "Looking for corporate event management sri lanka? Our Sri Lankan team plans, executes and delivers seamless corporate event management sri lanka with full production support. Free quote — call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/corporate-event-management-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "corporate event management sri lanka, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/corporate-event-management-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate
        category={CAT}
        keyword="corporate event management sri lanka"
        extraLinks={[
          { href: "/led-screen-rental-sri-lanka", label: "LED Screen Rental Sri Lanka", anchor: "indoor/outdoor LED screens" },
          { href: "/sound-system-rental-sri-lanka", label: "Sound System Rental Sri Lanka", anchor: "line-array sound systems" },
          { href: "/stage-setup-sri-lanka", label: "Stage Setup Sri Lanka", anchor: "Truss stages" },
        ]}
      />
    </PageShell>
  ),
});
