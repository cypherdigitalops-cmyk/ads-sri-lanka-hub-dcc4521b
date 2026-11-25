import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BriefBlogPost, briefPostHead } from "@/components/site/BriefBlogPost";

export const Route = createFileRoute("/blog/how-to-write-a-marketing-brief-for-an-agency")({
  head: () => briefPostHead("how-to-write-a-marketing-brief-for-an-agency"),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <BriefBlogPost slug="how-to-write-a-marketing-brief-for-an-agency" />
    </PageShell>
  );
}
