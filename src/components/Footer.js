import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center">
            <span className="relative h-14 w-[160px] rounded-lg bg-white/95 px-2 py-1.5">
              <Image
                src="/images/logo.png"
                alt="PT MED — NEET-UG, Shaping Medical Minds"
                fill
                className="object-contain p-1"
                sizes="160px"
              />
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.socials.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socials.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socials.youtube}
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-teal-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
            Programs
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li>NEET (UG) Coaching</li>
            <li>MHT-CET (PCB) Coaching</li>
            <li>PT-SAT Test Series</li>
            <li>Career Guidance Sessions</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-light" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 flex-shrink-0 text-teal-light" />
              <a href={`tel:${siteConfig.phoneNumber}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 flex-shrink-0 text-teal-light" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="section flex flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} PT MED &middot; A Medical Wing of Pratik Tutorials. All rights reserved.</p>
          <p>Explore. Prepare. Progress.</p>
        </div>
      </div>
    </footer>
  );
}
