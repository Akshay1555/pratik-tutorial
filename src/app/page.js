import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Target, BookOpen, GraduationCap, Stethoscope, Pill, Dna, Microscope, Briefcase, Monitor, MoreDots, Award } from "@/components/Icons";
import { IconTile, StatBlock, Eyebrow } from "@/components/Bits";

const heroFeatures = [
  { icon: Users, label: "Small Batches" },
  { icon: Target, label: "Focused PCB Environment" },
  { icon: BookOpen, label: "NCERT-Centric Learning" },
  { icon: GraduationCap, label: "Doctors & IITian Faculties" },
];

const careerPaths = [
  { icon: Stethoscope, label: "Medicine" },
  { icon: Pill, label: "Pharmacy" },
  { icon: Dna, label: "Biotechnology" },
  { icon: Microscope, label: "Microbiology" },
  { icon: Briefcase, label: "Paramedical Sciences" },
  { icon: Monitor, label: "Bioinformatics" },
  { icon: MoreDots, label: "And Many More" },
];

const stats = [
  { icon: Users, value: "9000+", label: "Students Guided" },
  { icon: Award, value: "17 Years", label: "of Excellence" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-soft/70 to-white">
        <div className="section grid items-center gap-12 py-7 md:py-5 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Eyebrow>SHAPING MEDICAL MINDS</Eyebrow>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.1] text-navy sm:text-5xl">
              Master NEET with <span className="text-teal">Confidence</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-navy/70">
              Focused guidance, strong fundamentals and continuous support to help you
              achieve your medical dreams — and explore a world of opportunities beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Journey <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-outline">
                Know More
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-4">
              {heroFeatures.map((f) => (
                <IconTile key={f.label} icon={f.icon} label={f.label} />
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[9/11] w-full max-w-sm overflow-hidden rounded-xl2 bg-teal-soft/40 shadow-card lg:aspect-auto lg:h-[540px] lg:max-w-xl">
            <Image
              src="/images/hero-student.jpg"
              alt="Aspiring doctor in a white coat holding a notebook, with Biology, Chemistry, Physics and NCERT books"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-teal shadow">
              &ldquo;A Healthier, Brighter Tomorrow&rdquo;
            </div>
            <div className="absolute bottom-4 right-4 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold text-white shadow">
              &ldquo;Dream. Prepare. Achieve.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* MORE THAN NEET COACHING */}
      <section className="bg-teal-soft/60 py-16">
        <div className="section grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="h2">
              More than just <span className="text-teal">NEET coaching</span>
            </h2>
            <p className="mt-4 max-w-md text-navy/70">
              We help you build a strong foundation for NEET and explore diverse career
              opportunities in healthcare and life sciences.
            </p>
          </div>
          <div className="relative mx-auto h-auto w-full max-w-xl">
            <Image
              src="/images/career-icons.png"
              alt="Career paths: Medicine, Pharmacy, Biotechnology, Microbiology, Paramedical Sciences, Bioinformatics and more"
              width={865}
              height={289}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-b border-black/5 py-12">
        <div className="section">
          <div className="card mx-auto flex max-w-xl flex-wrap items-center justify-center gap-x-14 gap-y-6 bg-teal-soft/40 px-8 py-7">
            {stats.map((s) => (
              <StatBlock key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* PCB JOURNEY BANNER */}
      <section className="py-16">
        <div className="section overflow-hidden rounded-xl2 shadow-card lg:grid lg:grid-cols-2">
          <div className="relative min-h-[260px]">
            <Image
              src="/images/books-banner.jpg"
              alt="Stack of Biology, Chemistry, Physics and NCERT textbooks"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 bg-teal px-8 py-12 text-white sm:px-12">
            <h3 className="font-heading text-2xl font-bold sm:text-3xl">
              Your PCB Journey. Our Guidance.
            </h3>
            <p className="text-white/85">
              Let&rsquo;s build your future together — with disciplined preparation and
              mentorship at every step.
            </p>
            <Link href="/contact" className="btn-outline-light w-fit">
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING TAGLINE */}
      <section className="pb-20 text-center">
        <div className="section">
          <p className="font-heading text-lg font-semibold text-navy sm:text-xl">
            NEET is a pathway. Your potential is much greater.
          </p>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-teal" />
          <p className="mt-4 text-sm tracking-wide text-navy/60">
            Explore. Prepare. Progress.
          </p>
        </div>
      </section>
    </>
  );
}