import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";
import { StickyCallBar, FloatingWhatsApp, FloatingQuoteButton, TopContactBar } from "./CTASection";
import { QuoteModal } from "./QuoteModal";
import { SocialMediaStickyBanner } from "./SocialMediaStickyBanner";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopContactBar />
      <SiteHeader />
      <main className="flex-1">
        {children}
        <SocialMediaStickyBanner />
      </main>
      <SiteFooter />
      <StickyCallBar />
      <FloatingWhatsApp />
      <FloatingQuoteButton />
      <QuoteModal />
    </div>
  );
}