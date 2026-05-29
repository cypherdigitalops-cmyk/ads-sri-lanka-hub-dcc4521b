import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";
import { StickyCallBar, FloatingWhatsApp, FloatingQuoteButton, TopContactBar } from "./CTASection";
import { QuoteModal } from "./QuoteModal";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopContactBar />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <StickyCallBar />
      <FloatingWhatsApp />
      <FloatingQuoteButton />
      <QuoteModal />
    </div>
  );
}