import { siteConfig } from "@/lib/siteConfig";
import { WhatsApp, Phone } from "@/components/Icons";

export default function FloatingButtons() {
  const waHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 print:hidden">
      <a
        href={`tel:${siteConfig.phoneNumber}`}
        aria-label={`Call ${siteConfig.name}`}
        title={`Call ${siteConfig.phoneDisplay}`}
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <WhatsApp className="h-7 w-7" />
      </a>
    </div>
  );
}
