import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BriefBlogPost, briefPostHead } from "@/components/site/BriefBlogPost";

export const Route = createFileRoute("/blog/social-media-marketing-kpis-sri-lanka")({
  head: () => briefPostHead("social-media-marketing-kpis-sri-lanka"),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <BriefBlogPost slug="social-media-marketing-kpis-sri-lanka" />
    </PageShell>
  );
}
