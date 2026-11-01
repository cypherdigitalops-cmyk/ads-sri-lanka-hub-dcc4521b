/**
 * Subtle external anchor backlink to Vacation Ceylon.
 * Styled to blend in (muted, no underline) — not highlighted.
 * Renders a short contextual sentence containing the keyword-rich anchor text.
 */
export function VacationCeylonBacklink({
  lead = "For island-wide trip planning and ground arrangements, see this",
}: {
  lead?: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-14 text-sm text-muted-foreground">
      <p>
        {lead}{" "}
        <a
          href="https://vacationceylon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground underline-offset-4 hover:underline"
        >
          Sri Lanka tour agency
        </a>{" "}
        for a closer look at curated itineraries and local travel support.
      </p>
    </section>
  );
}
