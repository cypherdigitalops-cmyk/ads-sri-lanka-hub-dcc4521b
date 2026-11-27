import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { EventPackagePage, eventPackageHead } from "@/components/site/EventPackagePage";

const PATH = "/blog/event-planning-timeline-sri-lanka";

export const Route = createFileRoute("/blog/event-planning-timeline-sri-lanka")({
  head: () => eventPackageHead(PATH),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <EventPackagePage path={PATH} />
    </PageShell>
  );
}
