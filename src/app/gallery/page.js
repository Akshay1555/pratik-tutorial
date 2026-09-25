"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Bits";
import { Play, ArrowRight } from "@/components/Icons";
import { galleryCategories, videos, felicitations, events } from "@/data/gallery";

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const showWorkshops = active === "All" || active === "Workshops & Learning";
  const showFelicitations = active === "All" || active === "Felicitation & Achievements";
  const showEvents = active === "All" || active === "Events & Moments";

  return (
    <>
      <section className="section py-16 md:py-20">
        <Eyebrow>GALLERY</Eyebrow>
        <h1 className="mt-2 font-heading text-4xl font-bold text-navy sm:text-5xl">
          Experience <span className="text-teal">PT MED</span>
        </h1>
        <p className="mt-4 max-w-xl text-navy/70">
          Where learning meets experience, achievement and inspiration. A glimpse into
          the moments, milestones and memories that make the PT MED journey special.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-teal text-white"
                  : "bg-teal-soft text-teal hover:bg-teal/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {showWorkshops && (
        <section className="border-t border-black/5 py-14">
          <div className="section">
            <h2 className="h2">
              See. Experience. <span className="text-teal">Learn.</span>
            </h2>
            <p className="mt-2 max-w-xl text-navy/60">
              From live demonstrations to hands-on activities, our workshops help students
              experience science beyond textbooks.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {videos.map((v) => (
                <div key={v.title} className="group cursor-pointer overflow-hidden rounded-xl2 shadow-card">
                  <div className="relative aspect-video">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, 90vw"
                    />
                    <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      {v.duration}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-11 w-11 text-white/95 drop-shadow" />
                    </span>
                  </div>
                  <div className="bg-white p-4">
                    <p className="font-heading text-sm font-bold text-navy">{v.title}</p>
                    <p className="mt-0.5 text-xs text-navy/55">{v.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showFelicitations && (
        <section className="bg-teal-soft/50 py-14">
          <div className="section">
            <h2 className="h2">
              Their Success. <span className="text-teal">Our Pride.</span>
            </h2>
            <p className="mt-2 max-w-xl text-navy/60">
              Every achievement represents a student&rsquo;s hard work, perseverance and
              determination. We are proud to be a part of their journey.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {felicitations.map((f) => (
                <figure key={f.title} className="overflow-hidden rounded-xl2 shadow-card">
                  <div className="relative aspect-[4/3]">
                    <Image src={f.image} alt={f.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 90vw" />
                  </div>
                  <figcaption className="bg-white px-4 py-3 text-sm font-semibold text-navy">
                    {f.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {showEvents && (
        <section className="py-14">
          <div className="section">
            <h2 className="h2">
              Beyond the <span className="text-teal">Classroom.</span>
            </h2>
            <p className="mt-2 max-w-xl text-navy/60">
              Learning is also about people, experiences and memories. Here&rsquo;s a
              glimpse of the moments we share along the way.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {events.map((e) => (
                <figure key={e.title} className="overflow-hidden rounded-xl2 shadow-card">
                  <div className="relative aspect-[4/3]">
                    <Image src={e.image} alt={e.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 90vw" />
                  </div>
                  <figcaption className="bg-white px-4 py-3 text-sm font-semibold text-navy">
                    {e.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-teal-soft/60 py-12">
        <div className="section flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="font-heading text-lg font-bold text-navy">
              Be Part of the PT MED Journey
            </p>
            <p className="text-sm text-navy/60">Learn. Prepare. Grow. Achieve.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
