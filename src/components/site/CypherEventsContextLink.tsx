import { useLocation } from "@tanstack/react-router";
import { getEventBacklink } from "@/data/cypher-events-backlinks";

export function CypherEventsContextLink({
  path,
  className = "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
}: {
  path?: string;
  className?: string;
}) {
  const pathname = useLocation({ select: (location) => location.pathname });
  const link = getEventBacklink(path ?? pathname);
  if (!link) return null;

  return (
    <p className={className} data-event-context-link>
      {link.before}<a href={link.href} className="text-inherit hover:underline underline-offset-2">{link.anchor}</a>{link.after}
    </p>
  );
}