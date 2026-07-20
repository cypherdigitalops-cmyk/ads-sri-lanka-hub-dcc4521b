import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Stage Setup Sri Lanka — Trusted Sri Lankan Agency | advertisingsrilanka.lk";
const DESC = "Looking for stage setup sri lanka? Our Sri Lankan team plans, executes and delivers seamless stage setup sri lanka with full production support. Free quote — call 0701772626 or WhatsApp.";

export const Route = createFileRoute("/stage-setup-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "stage setup sri lanka, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/stage-setup-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate
        category={CAT}
        keyword="stage setup sri lanka"
        extraLinks={[
          { href: "/sound-system-rental-sri-lanka", label: "Sound System Rental Sri Lanka", anchor: "line-array sound systems" },
          { href: "/led-screen-rental-sri-lanka", label: "LED Screen Rental Sri Lanka", anchor: "indoor/outdoor LED screens" },
          { href: "/event-management-sri-lanka", label: "Event Management Sri Lanka", anchor: "turnkey package" },
        ]}
      />
    </PageShell>
  ),
});
