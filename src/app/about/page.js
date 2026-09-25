import Link from "next/link";
import Image from "next/image";
import { Eyebrow, IconTile } from "@/components/Bits";
import {
  ArrowRight,
  BookOpen,
  Users,
  Target,
  TrendingUp,
  Compass,
  Route,
  GraduationCap,
  Briefcase,
  Pill,
  Dna,
  Microscope,
  Monitor,
  Flask,
  MoreDots,
  Award,
} from "@/components/Icons";

export const metadata = { title: "About Us" };

const whatWeBelieve = [
  {
    icon: Compass,
    label: "Direction",
    description: "Helping students understand their strengths and career possibilities.",
  },
  {
    icon: Users,
    label: "Motivation",
    description: "Creating a supportive environment to keep students focused and confident.",
  },
  {
    icon: BookOpen,
    label: "Preparation",
    description:
      "Building strong academic foundations through conceptual learning, NCERT mastery and testing.",
  },
  {
    icon: TrendingUp,
    label: "Transition",
    description:
      "Guiding students from school to entrance exams, college admission and professional careers.",
  },
];

const journeySteps = [
  { icon: BookOpen, label: "Class 10", description: "Choose the PCB Pathway" },
  { icon: Users, label: "Class 11 – 12", description: "Academic Foundation + Mentoring" },
  { icon: Target, label: "Entrance Preparation", description: "NEET / Other Examinations" },
  { icon: Compass, label: "Career Exploration", description: "Understand Courses & Opportunities" },
  { icon: GraduationCap, label: "College Admission", description: "Course & College Guidance" },
  { icon: Briefcase, label: "Professional Career", description: "Step into a brighter future" },
];

const opportunities = [
  { icon: Pill, label: "Pharmacy" },
  { icon: Dna, label: "Biotechnology" },
  { icon: Microscope, label: "Microbiology" },
  { icon: Briefcase, label: "Paramedical Sciences" },
  { icon: Monitor, label: "Bioinformatics" },
  { icon: Flask, label: "Forensic Science" },
  { icon: MoreDots, label: "And Many More" },
];

const approach = [
  { icon: Target, label: "Conceptual Clarity" },
  { icon: BookOpen, label: "NCERT-Centric Learning" },
  { icon: Route, label: "Regular Practice & Testing" },
  { icon: TrendingUp, label: "Performance Analysis" },
  { icon: Users, label: "Personalised Mentoring" },
  { icon: Compass, label: "Career & Admission Guidance" },
];

export default function AboutPage() {
  return (
    <>
      {/* ABOUT PT MED — HERO (same overlay-on-image layout on every breakpoint, content just scales down) */}
      <section className="section py-16 md:py-20">
        <div className="relative w-full overflow-hidden rounded-xl2 shadow-card min-h-[440px] sm:min-h-[400px] md:min-h-[420px] lg:aspect-[1860/620] lg:min-h-0">
          <Image
            src="/images/books-banner.jpg"
            alt="Biology, Chemistry, Physics and NCERT textbooks with a stethoscope"
            fill
            priority
            className="object-cover object-right sm:object-center"
            sizes="100vw"
          />

          {/* light wash so text stays readable over the photo at every size */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 sm:via-white/70 sm:to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-5 py-8 sm:px-10 md:px-14">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[10px] font-bold tracking-wide text-teal sm:text-xs">
                ABOUT PT MED
              </span>
              <span className="h-px w-8 flex-shrink-0 bg-teal/40 sm:w-12" />
            </div>

            <h1 className="mt-2 max-w-xl font-heading text-xl font-bold leading-[1.2] text-navy sm:mt-3 sm:text-3xl md:text-[2.5rem]">
              Guiding PCB Students Towards a <span className="text-teal">Brighter</span>{" "}
              <span className="text-teal">Tomorrow</span>
            </h1>

            <p className="mt-3 max-w-md text-[11px] leading-relaxed text-navy/70 sm:mt-4 sm:text-[15px]">
              PT-MED is the Medical &amp; Life Sciences wing of Pratik Tutorials, created
              with a focused vision for students pursuing the PCB pathway. We combine
              academic excellence, personalised mentoring and career-oriented guidance to
              help students prepare for competitive examinations and make informed
              decisions about their future.
            </p>

            <div className="relative mt-4 w-fit sm:mt-6">
              <p className="font-script text-base leading-[1.15] text-teal sm:text-2xl">
                Same Knowledge
                <br />
                Bigger Horizons
              </p>
              <svg
                viewBox="0 0 180 14"
                className="mt-1 h-2.5 w-28 text-teal sm:h-3 sm:w-40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M2 8c30-10 60-10 88-2 28 8 58 8 88-2" />
              </svg>
            </div>
          </div>

          {/* handwritten script tagline, top-right corner over the image */}
          <div className="absolute right-3 top-3 text-right sm:right-6 sm:top-6 lg:right-10 lg:top-8">
            <p className="font-script text-xs leading-[1.3] text-teal sm:text-xl lg:text-2xl">
              Learn
              <br />
              Prepare
              <br />
              Explore
              <br />
              Grow
            </p>
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="bg-teal-soft/60 py-16">
        <div className="section grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Eyebrow>OUR VISION</Eyebrow>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
              Right Direction. Right Motivation.
              <br />
              <span className="text-teal">Right Future.</span>
            </h2>
            <p className="mt-4 max-w-xl text-navy/70">
              We envision a future where every PCB student has access to the right
              guidance, academic environment and motivation to make informed decisions
              about their education and career. Our goal is to ensure a smooth transition
              from school to professional education, supporting students at every step —
              from entrance preparation to college admission and beyond.
            </p>
          </div>
          <div className="card flex items-center gap-4 p-6">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal">
              <Target className="h-6 w-6" />
            </span>
            <p className="font-heading font-semibold text-navy">
              A stronger tomorrow, built with PCB.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="section py-16 text-center">
        <Eyebrow>WHAT WE BELIEVE</Eyebrow>
        <h2 className="mx-auto mt-2 max-w-2xl font-heading text-3xl font-bold text-navy sm:text-4xl">
          Education is More Than <span className="text-teal">Just Examination Preparation</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy/70">
          At PT-MED, we believe in a holistic approach that focuses on academic growth,
          personal development and informed career choices.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whatWeBelieve.map((w) => (
            <div key={w.label} className="card p-6 text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-soft text-teal">
                <w.icon className="h-6 w-6" />
              </span>
              <p className="mt-4 font-heading font-bold text-navy">{w.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{w.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 font-heading text-lg italic text-teal">
          Dream. Learn. Achieve.
        </p>
      </section>

      {/* MEET THE FOUNDER */}
      <section className="bg-teal-soft/40 py-16">
        <div className="section">
          <Eyebrow>MEET THE FOUNDER</Eyebrow>
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.4fr]">
            <div>
              <div className="relative aspect-[5/6] w-full overflow-hidden rounded-xl2 shadow-card">
                <Image
                  src="/images/founder.jpg"
                  alt="Prof. Pratik Bhimrajka, Founder of PT MED"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, 90vw"
                />
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
                Prof. Pratik Bhimrajka
              </h2>
              <p className="mt-1 text-sm font-semibold text-teal">
                Founder &amp; Academic Mentor, PT-MED
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm">
                  <GraduationCap className="h-4 w-4 text-teal" /> IIT Patna Alumnus
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm">
                  <Award className="h-4 w-4 text-teal" /> 18+ Years of Teaching &amp; Mentoring Experience
                </span>
              </div>

              <div className="mt-6 space-y-4 text-navy/75">
                <p>
                  Over the years of teaching and mentoring students, Prof. Pratik Bhimrajka
                  has seen many bright PCB students choose this stream with the dream of
                  becoming a doctor. However, many of them lack the right guidance,
                  academic environment and clarity about the journey ahead.
                </p>
                <p>
                  PT-MED was created to bridge this gap — to provide a focused and
                  supportive ecosystem where PCB students receive quality education,
                  personal attention, motivation and career guidance, enabling them to
                  make informed decisions and achieve their true potential.
                </p>
                <p>
                  For Prof. Pratik, teaching is not simply about completing a syllabus or
                  preparing students for an examination. The real reward is seeing a
                  student grow in confidence, achieve their goals and build a meaningful
                  career.
                </p>
              </div>

              <blockquote className="mt-6 border-l-4 border-teal pl-4 font-heading italic text-navy">
                &ldquo;If we can give students the right environment, the right guidance
                and the right motivation, I believe we can help many more students turn
                their dreams into reality.&rdquo;
                <footer className="mt-2 text-sm font-semibold not-italic text-teal">
                  — Prof. Pratik Bhimrajka
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FROM SCHOOL TO PROFESSIONAL CAREER */}
      <section className="section py-16">
        <div className="text-center">
          <Eyebrow>FROM SCHOOL TO PROFESSIONAL CAREER</Eyebrow>
          <h2 className="mx-auto mt-2 max-w-2xl font-heading text-3xl font-bold text-navy sm:text-4xl">
            We Guide the Journey — <span className="text-teal">Not Just the Examination.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/70">
            From choosing PCB to choosing the right college, PT-MED strives to be a
            trusted guide at every important step.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-6 gap-y-10">
          {journeySteps.map((step, i) => (
            <div key={step.label} className="flex items-start gap-6">
              <div className="flex w-28 flex-col items-center gap-2 text-center sm:w-32">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-soft text-teal">
                  <step.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-bold text-navy">{step.label}</span>
                <span className="text-xs leading-snug text-navy/55">{step.description}</span>
              </div>
              {i < journeySteps.length - 1 && (
                <ArrowRight className="mt-5 hidden h-5 w-5 flex-shrink-0 text-navy/20 sm:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BEYOND NEET */}
      <section className="bg-teal-soft/60 py-16">
        <div className="section grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>BEYOND NEET. BEYOND ONE CAREER.</Eyebrow>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
              A World of Opportunities <span className="text-teal">for PCB Students</span>
            </h2>
            <p className="mt-4 max-w-md text-navy/70">
              NEET is an important pathway — but it is not the only destination.
              Healthcare and life sciences continue to grow, creating exciting
              opportunities for students with a strong foundation in Biology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {opportunities.map((o) => (
              <IconTile key={o.label} icon={o.icon} label={o.label} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section py-16 text-center">
        <Eyebrow>OUR APPROACH</Eyebrow>
        <h2 className="mx-auto mt-2 max-w-xl font-heading text-3xl font-bold text-navy sm:text-4xl">
          Learn. Practise. <span className="text-teal">Analyse. Improve.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy/70">
          A focused and structured approach for academic excellence.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {approach.map((a) => (
            <IconTile key={a.label} icon={a.icon} label={a.label} />
          ))}
        </div>
      </section>

      {/* CLOSING CTA — same overlay-on-image layout on every breakpoint, content just scales down */}
      <section className="pb-20">
        <div className="section overflow-hidden rounded-xl2 bg-navy shadow-card">
          <div className="relative h-[380px] w-full sm:h-[360px] md:h-[380px] lg:aspect-[1860/620] lg:h-auto">
            <Image
              src="/images/explore-banner.jpg"
              alt="A hiker celebrating on a mountain summit at sunrise"
              fill
              className="block h-full w-full object-cover object-right sm:object-center"
              sizes="100vw"
            />

            {/* dark wash so text stays readable over the photo at every size */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/40 sm:via-navy/75 sm:to-navy/10" />

            <div className="absolute inset-0 flex flex-col justify-center gap-2 px-5 py-8 sm:gap-4 sm:px-10 md:px-14">
              <p className="text-[10px] font-semibold tracking-wide text-teal-light sm:text-xs">
                DISCOVER. EXPLORE. PREPARE.
              </p>
              <h2 className="max-w-lg font-heading text-xl font-bold leading-[1.25] text-white sm:text-3xl lg:text-4xl">
                A Stronger Tomorrow, <span className="text-teal-light">Built With PCB.</span>
              </h2>
              <Link
                href="/contact"
                className="btn-outline-light mt-1 w-fit text-xs sm:mt-2 sm:text-sm"
              >
                Enquire Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* handwritten script tagline, top-right corner over the image */}
            <div className="absolute right-4 top-4 text-right sm:right-8 sm:top-8 lg:right-12 lg:top-10">
              <p className="font-script text-sm italic leading-[1.3] text-white sm:text-xl lg:text-2xl">
                Your
                <br />
                Journey
                <br />
                Matters
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}