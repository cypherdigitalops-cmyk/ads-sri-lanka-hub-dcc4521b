/**
 * Subtle external anchor backlink to Cypher Digital's social media management page.
 * Styled to blend in (muted, no underline) — not highlighted.
 * Renders a short contextual sentence containing the keyword-rich anchor text.
 */
export function CypherSocialBacklink({
  lead = "For ongoing channel management, see this guide on",
}: {
  lead?: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-14 text-sm text-muted-foreground">
      <p>
        {lead}{" "}
        <a
          href="https://cypherdigital.lk/social-media-management-sri-lanka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground underline-offset-4 hover:underline"
        >
          social media marketing Sri Lanka
        </a>{" "}
        for a deeper look at managed social channels.
      </p>
    </section>
  );
}
