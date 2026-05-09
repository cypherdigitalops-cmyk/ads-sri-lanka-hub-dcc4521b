import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";
import { StickyCallBar } from "./CTASection";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <StickyCallBar />
    </div>
  );
}