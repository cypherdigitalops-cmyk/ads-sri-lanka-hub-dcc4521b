/**
 * Subtle external anchor backlink to Vacation Ceylon.
 * Styled to read as ordinary page copy: same colour, size and line height as the
 * surrounding paragraphs, no underline, no box, no highlight.
 */
export function VacationCeylonLink({
  lead = "For island-wide trip planning and ground arrangements, see this",
}: {
  lead?: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-muted-foreground">
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
