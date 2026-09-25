"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Menu, XIcon } from "@/components/Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <nav className="section flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <span className="relative h-12 w-[130px] sm:h-14 sm:w-[150px]">
            <Image
              src="/images/logo.png"
              alt="PT MED — NEET-UG, Shaping Medical Minds"
              fill
              priority
              className="object-contain object-left"
              sizes="150px"
            />
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    active ? "text-teal" : "text-navy/80 hover:text-teal"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-teal" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/contact" className="btn-primary hidden lg:inline-flex">
          Enquire Now
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <ul className="section flex flex-col gap-1 py-4">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    pathname === link.href
                      ? "bg-teal-soft text-teal"
                      : "text-navy/80 hover:bg-teal-soft hover:text-teal"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
