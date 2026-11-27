import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { EventPackagePage, eventPackageHead } from "@/components/site/EventPackagePage";

const PATH = "/team-building-events-sri-lanka";

export const Route = createFileRoute("/team-building-events-sri-lanka")({
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
