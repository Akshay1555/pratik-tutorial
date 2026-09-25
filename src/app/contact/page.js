import { Eyebrow } from "@/components/Bits";
import EnquiryForm from "@/components/EnquiryForm";
import { Phone, WhatsApp, MapPin, Clock, ArrowRight } from "@/components/Icons";
import { siteConfig, getMapEmbedUrl } from "@/lib/siteConfig";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <section className="section py-16 md:py-20">
        <Eyebrow>CONTACT US</Eyebrow>
        <h1 className="mt-2 font-heading text-4xl font-bold text-navy sm:text-5xl">
          Let&rsquo;s Build Your <span className="text-teal">Future Together</span>
        </h1>
        <p className="mt-4 max-w-xl text-navy/70">
          Have questions about NEET (UG), MHT-CET (PCB) or our teaching approach? Send us
          an enquiry, call, or drop by any of our centers below.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <EnquiryForm />

          <div className="space-y-4">
            <a
              href={`tel:${siteConfig.phoneNumber}`}
              className="card flex items-center gap-4 p-5 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                  Call us
                </p>
                <p className="font-heading font-bold text-navy">{siteConfig.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-5 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                <WhatsApp className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                  WhatsApp us
                </p>
                <p className="font-heading font-bold text-navy">Chat instantly</p>
              </div>
            </a>

            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                Email us
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-heading font-bold text-navy hover:text-teal"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BRANCH LOCATIONS */}
      <section className="bg-teal-soft/50 py-16">
        <div className="section">
          <Eyebrow>OUR CENTERS</Eyebrow>
          <h2 className="mt-2 h2">
            Visit a <span className="text-teal">PT MED Branch</span> Near You
          </h2>
          <p className="mt-3 max-w-xl text-navy/70">
            Four centers across Thane, each with the same small-batch, focused-PCB
            environment.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {siteConfig.branches.map((branch) => (
              <div key={branch.name} className="card p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading text-lg font-bold text-navy">{branch.name}</h3>
                  <span className="rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold text-teal">
                    PT MED Center
                  </span>
                </div>

                <p className="mt-3 flex items-start gap-2.5 text-sm text-navy/70">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                  {branch.address}
                </p>
                <p className="mt-2 flex items-center gap-2.5 text-sm text-navy/60">
                  <Clock className="h-4 w-4 flex-shrink-0 text-teal" />
                  {branch.hours}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={`tel:${branch.phoneNumber}`} className="btn-outline !px-4 !py-2 text-xs">
                    <Phone className="h-3.5 w-3.5" /> {branch.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${branch.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 text-xs font-semibold text-[#128C4A] transition-colors hover:bg-[#25D366]/20"
                  >
                    <WhatsApp className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                  <a
                    href={branch.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy/70 hover:text-teal"
                  >
                    Get directions <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="section">
          <Eyebrow>FIND US ON MAP</Eyebrow>
          <h2 className="mt-2 h2">Our Flagship Center — Thane West</h2>
          <div className="mt-6 overflow-hidden rounded-xl2 shadow-card">
            <iframe
              title="PT MED - Thane West location on Google Maps"
              src={getMapEmbedUrl(siteConfig.branches[0].address)}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-xs text-navy/50">
            Looking for a different center? Use &ldquo;Get directions&rdquo; on any branch
            card above to open it directly in Google Maps.
          </p>
        </div>
      </section>
    </>
  );
}
