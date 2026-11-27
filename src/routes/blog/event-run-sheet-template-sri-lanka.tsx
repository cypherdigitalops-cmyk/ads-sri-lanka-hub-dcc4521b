import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { EventPackagePage, eventPackageHead } from "@/components/site/EventPackagePage";

const PATH = "/blog/event-run-sheet-template-sri-lanka";

export const Route = createFileRoute("/blog/event-run-sheet-template-sri-lanka")({
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
