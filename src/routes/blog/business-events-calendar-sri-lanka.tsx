import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BriefBlogPost, briefPostHead } from "@/components/site/BriefBlogPost";

export const Route = createFileRoute("/blog/business-events-calendar-sri-lanka")({
  head: () => briefPostHead("business-events-calendar-sri-lanka"),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <BriefBlogPost slug="business-events-calendar-sri-lanka" />
    </PageShell>
  );
}
