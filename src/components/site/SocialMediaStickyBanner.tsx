import { useEffect, useState } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";

const WA_URL =
  "https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20promote%20my%20business%20on%20social%20media.%20Can%20you%20help%3F";

const GRADIENT = "linear-gradient(150deg,#15224a 0%,#20347a 100%)";
const BORDER = "1px solid #2c3f7f";
const WHATSAPP_GREEN = "#25d366";
const TEXT_MUTED = "#c3cfeb";

export function SocialMediaStickyBanner() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (dismissed || !open) return null;

  return (
    <>
      {/* Desktop: fixed right-side floating card */}
      <div
        role="complementary"
        aria-label="Social media marketing offer"
        className="fixed z-40 hidden animate-in fade-in slide-in-from-right-4 duration-500 xl:block"
        style={{
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          width: 240,
          background: GRADIENT,
          borderRadius: 18,
          border: BORDER,
          boxShadow: "0 20px 44px -14px rgba(21,34,74,.7)",
          color: "#fff",
          padding: "22px 20px 20px",
        }}
      >
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Close"
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-[#9fb0e0] transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>

        <div
          className="mb-3 inline-flex items-center justify-center"
          style={{
            width: 48,
            height: 48,
            borderRadius: 13,
            background: WHATSAPP_GREEN,
            color: "#0b3d1f",
            boxShadow: "0 8px 20px -6px rgba(37,211,102,.55)",
          }}
          aria-hidden
        >
          <MessageCircle size={26} strokeWidth={2.2} />
        </div>

        <div
          className="text-[11px] font-semibold uppercase tracking-wider"
          style={{ color: WHATSAPP_GREEN, letterSpacing: "0.12em" }}
        >
          Social Media Marketing
        </div>
        <h3 className="mt-1 text-[17px] font-bold leading-snug text-white">
          Want to grow your business online?
        </h3>
        <p className="mt-1 text-[13px] leading-snug" style={{ color: TEXT_MUTED }}>
          Content, ads &amp; growth — handled for you.
        </p>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp"
          data-cta-source="social-sticky-banner"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[14px] font-semibold transition-transform hover:-translate-y-0.5"
          style={{ background: WHATSAPP_GREEN, color: "#0b3d1f" }}
        >
          Contact us
          <ArrowRight size={16} strokeWidth={2.6} />
        </a>
      </div>

      {/* Mobile / tablet: inline banner that flows with page content */}
      <div className="block w-full border-t border-border bg-background xl:hidden">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:py-5">
          <div
            className="relative overflow-hidden rounded-2xl px-4 py-4 sm:px-6 sm:py-5"
            style={{ background: GRADIENT, border: BORDER }}
          >
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Close"
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-[#9fb0e0] transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-4">
                <div
                  className="grid shrink-0 place-items-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 13,
                    background: WHATSAPP_GREEN,
                    color: "#0b3d1f",
                    boxShadow: "0 8px 20px -6px rgba(37,211,102,.55)",
                  }}
                  aria-hidden
                >
                  <MessageCircle size={26} strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <div
                    className="text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: WHATSAPP_GREEN, letterSpacing: "0.12em" }}
                  >
                    Social Media Marketing
                  </div>
                  <h3 className="mt-0.5 text-base font-bold leading-snug text-white sm:text-lg">
                    Want to grow your business online?
                  </h3>
                  <p className="hidden text-[13px] leading-snug sm:block" style={{ color: TEXT_MUTED }}>
                    Content, ads &amp; growth — handled for you.
                  </p>
                </div>
              </div>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                data-cta-source="social-inline-banner"
                className="flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-semibold transition-transform hover:-translate-y-0.5 sm:ml-auto"
                style={{ background: WHATSAPP_GREEN, color: "#0b3d1f" }}
              >
                Contact us
                <ArrowRight size={16} strokeWidth={2.6} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
