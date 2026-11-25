import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BriefBlogPost, briefPostHead } from "@/components/site/BriefBlogPost";

export const Route = createFileRoute("/blog/how-to-brief-a-logo-designer-sri-lanka")({
  head: () => briefPostHead("how-to-brief-a-logo-designer-sri-lanka"),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <BriefBlogPost slug="how-to-brief-a-logo-designer-sri-lanka" />
    </PageShell>
  );
}
