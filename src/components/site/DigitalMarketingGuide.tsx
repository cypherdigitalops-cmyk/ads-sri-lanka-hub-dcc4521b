import { Link } from "@tanstack/react-router";
import { digitalGuideSchema, getDigitalGuide } from "@/data/digital-marketing-content";

export function DigitalMarketingGuide({ path, showFaqs = true }: { path: string; showFaqs?: boolean }) {
  const guide = getDigitalGuide(path);
  if (!guide) return null;
  return (
    <section className="mx-auto max-w-3xl px-4 py-12" aria-label={`${guide.label} planning guide`}>
      <h2 className="text-2xl font-bold sm:text-3xl">{guide.label} in Sri Lanka: planning and practical answers</h2>
      <p className="mt-5 text-base leading-relaxed text-foreground">{guide.answer}</p>
      {guide.sections.map(section => (
        <div key={section.heading} className="mt-9">
          <h3 className="text-xl font-semibold">{section.heading}</h3>
          {section.paragraphs.map(p => <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">{p}</p>)}
        </div>
      ))}
      <nav aria-label="Related marketing services" className="mt-9 border-y border-border py-5">
        <h3 className="font-semibold">Related services and next steps</h3>
        <ul className="mt-3 space-y-2">
          {guide.links.map(link => <li key={link.href}><Link to={link.href as never} className="text-primary underline underline-offset-4">{link.label}</Link></li>)}
        </ul>
      </nav>
      {showFaqs ? <>
        <h2 className="mt-10 text-2xl font-bold">{guide.label}: frequently asked questions</h2>
        <div className="mt-5 space-y-3">
          {guide.faqs.map(f => <details key={f.q} className="rounded-lg border border-border bg-card p-5">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
          </details>)}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalGuideSchema(guide)) }} />
      </> : null}
      <div className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
        <h3 className="font-semibold text-foreground">Further reading</h3>
        <ul className="mt-3 space-y-2">{guide.sources.map(s => <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{s.label}</a></li>)}</ul>
      </div>
    </section>
  );
}