import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BriefBlogPost, briefPostHead } from "@/components/site/BriefBlogPost";

export const Route = createFileRoute("/blog/ai-search-and-seo-sri-lanka")({
  head: () => briefPostHead("ai-search-and-seo-sri-lanka"),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <BriefBlogPost slug="ai-search-and-seo-sri-lanka" />
    </PageShell>
  );
}
