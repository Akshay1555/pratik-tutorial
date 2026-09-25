import Image from "next/image";
import { Eyebrow } from "@/components/Bits";
import { Award, Users, Target, BookOpen, Trophy } from "@/components/Icons";
import { students } from "@/data/students";

export const metadata = { title: "Results" };

const badges = [
  { icon: Trophy, label: "Consistent Top Performers" },
  { icon: Users, label: "Mentored by Expert Faculty" },
  { icon: Target, label: "Results that Inspire" },
  { icon: BookOpen, label: "Bright Careers Ahead" },
];

export default function ResultsPage() {
  return (
    <>
      <section className="section py-16 md:py-20">
        <Eyebrow>OUR RESULTS</Eyebrow>
        <h1 className="mt-2 font-heading text-4xl font-bold text-navy sm:text-5xl">
          Results <span className="text-teal">That Reflect Dedication</span>
        </h1>
        <p className="mt-4 max-w-2xl text-navy/70">
          Our students turn their dedication into outstanding results with the right
          guidance, academic support and a focused learning environment at PT MED.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-soft text-teal">
                <b.icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-medium text-navy/70">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-soft/40 py-16">
        <div className="section">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {students.map((s) => (
              <article key={s.name} className="card flex gap-4 p-5">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
                  <Image src={s.photo} alt={s.name} fill className="object-cover" sizes="80px" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-navy">{s.name}</h3>
                  <p className="text-xs text-navy/55">{s.college}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-teal px-2.5 py-1 text-xs font-bold text-white">
                      {s.course}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-teal">
                      <Target className="h-3.5 w-3.5" /> {s.percentile}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-navy/70">
                      <Trophy className="h-3.5 w-3.5" /> {s.air}
                    </span>
                  </div>
                  <p className="mt-3 text-sm italic leading-relaxed text-navy/65">
                    &ldquo;{s.quote}&rdquo;
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="card mt-8 flex flex-col items-center gap-2 p-8 text-center">
            <Award className="h-8 w-8 text-teal" />
            <p className="font-heading text-lg font-bold text-navy">
              Many More Success Stories&hellip;
            </p>
            <p className="max-w-md text-sm text-navy/60">
              Every student&rsquo;s journey is unique. At PT MED, we are proud to be a part
              of their success. Bigger dreams ahead.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
