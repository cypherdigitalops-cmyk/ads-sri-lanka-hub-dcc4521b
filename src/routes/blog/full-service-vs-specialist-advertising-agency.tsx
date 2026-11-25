import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BriefBlogPost, briefPostHead } from "@/components/site/BriefBlogPost";

export const Route = createFileRoute("/blog/full-service-vs-specialist-advertising-agency")({
  head: () => briefPostHead("full-service-vs-specialist-advertising-agency"),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <BriefBlogPost slug="full-service-vs-specialist-advertising-agency" />
    </PageShell>
  );
}
