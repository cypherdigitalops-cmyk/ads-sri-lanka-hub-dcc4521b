import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Stage Rental in Sri Lanka — Hire & Pricing | advertisingsrilanka.lk";
const DESC = "Reliable stage rental for events in Sri Lanka. Get pricing, packages and free guidance — call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/stage-rental-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "stage rental sri lanka, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/stage-rental-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate
        category={CAT}
        keyword="stage rental sri lanka"
        extraLinks={[
          { href: "/sound-system-rental-sri-lanka", label: "Sound System Rental Sri Lanka", anchor: "line-array sound systems" },
          { href: "/led-screen-rental-sri-lanka", label: "LED Screen Rental Sri Lanka", anchor: "indoor/outdoor LED screens" },
        ]}
      />
    </PageShell>
  ),
});
