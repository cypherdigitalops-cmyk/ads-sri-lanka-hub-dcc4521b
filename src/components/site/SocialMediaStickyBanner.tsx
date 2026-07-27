import { useEffect, useState } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";

const WA_URL =
  "https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20promote%20my%20business%20on%20social%20media.%20Can%20you%20help%3F";

export function SocialMediaStickyBanner() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (dismissed || !open) return null;

  return (
    <div
      role="complementary"
      aria-label="Social media marketing offer"
      className="fixed z-[9999] animate-in fade-in slide-in-from-bottom-4 duration-500
                 left-3 right-3 bottom-3 mx-auto max-w-sm
                 sm:left-auto sm:right-5 sm:bottom-24 sm:mx-0 sm:w-[270px] sm:max-w-none"
      style={{
        background: "linear-gradient(150deg,#15224a 0%,#20347a 100%)",
        borderRadius: 18,
        border: "1px solid #2c3f7f",
        boxShadow: "0 20px 44px -14px rgba(21,34,74,.7)",
        color: "#fff",
        padding: "22px 20px 20px",
      }}
    >
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Close"
        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-[#9fb0e0] hover:bg-white/10 hover:text-white transition-colors"
      >
        <X size={18} />
      </button>

      <div
        className="mb-3 inline-flex items-center justify-center"
        style={{
          width: 48,
          height: 48,
          borderRadius: 13,
          background: "#25d366",
          color: "#0b3d1f",
          boxShadow: "0 8px 20px -6px rgba(37,211,102,.55)",
        }}
        aria-hidden
      >
        <MessageCircle size={26} strokeWidth={2.2} />
      </div>

      <div
        className="text-[11px] font-semibold uppercase tracking-wider"
        style={{ color: "#25d366", letterSpacing: "0.12em" }}
      >
        Social Media Marketing
      </div>
      <h3 className="mt-1 text-[17px] font-bold leading-snug text-white">
        Want to grow your business online?
      </h3>
      <p className="mt-1 text-[13px] leading-snug" style={{ color: "#c3cfeb" }}>
        Content, ads &amp; growth — handled for you.
      </p>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="whatsapp"
        data-cta-source="social-sticky-banner"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[14px] font-semibold transition-transform hover:-translate-y-0.5"
        style={{ background: "#25d366", color: "#0b3d1f" }}
      >
        Contact us
        <ArrowRight size={16} strokeWidth={2.6} />
      </a>
    </div>
  );
}