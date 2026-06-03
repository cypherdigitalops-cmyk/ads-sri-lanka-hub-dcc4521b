import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Event Management Sri Lanka | Corporate, Wedding & Conference Specialists";
const DESC = "Sri Lanka's full-service event management team — corporate events, weddings, launches, conferences & concerts. One team, every detail. Call 0771437707.";

export const Route = createFileRoute("/event-management-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "event management sri lanka, event planners sri lanka, corporate event management sri lanka, wedding planners sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/event-management-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <CategoryHubTemplate
        category={CAT}
        extraLinks={[
          { href: "/led-screen-rental-sri-lanka", label: "LED Screen Rental Sri Lanka", anchor: "indoor/outdoor LED screens" },
          { href: "/sound-system-rental-sri-lanka", label: "Sound System Rental Sri Lanka", anchor: "line-array sound systems" },
          { href: "/stage-setup-sri-lanka", label: "Stage Setup Sri Lanka", anchor: "Truss stages" },
        ]}
      />
    </PageShell>
  ),
});
