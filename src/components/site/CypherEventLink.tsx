/** Subtle external link to Cypher Digital's event management page, styled as normal body copy. */
export function CypherEventLink() {
  const cls = "text-muted-foreground no-underline hover:underline underline-offset-4";
  return (
    <section className="mx-auto max-w-3xl px-4 pb-14 text-base leading-6 text-muted-foreground">
      <p>
        For a wider view of planning, production and on-the-day coordination, read more about{" "}
        <a href="https://cypherdigital.lk/event-management-sri-lanka" target="_blank" rel="noopener noreferrer" className={cls}>event management Sri Lanka</a>{" "}
        and practical{" "}
        <a href="https://cypherdigital.lk/event-management-sri-lanka" target="_blank" rel="noopener noreferrer" className={cls}>event planning Sri Lanka</a>{" "}
        advice before you brief your suppliers.
      </p>
    </section>
  );
}
