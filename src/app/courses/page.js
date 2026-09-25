import { courses } from "@/data/courses";
import { Eyebrow } from "@/components/Bits";
import * as Icons from "@/components/Icons";
import { BookOpen, Download, Check, FileText } from "@/components/Icons";

export const metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <section className="section py-12 sm:py-16 md:py-20">
      <div className="text-center">
        <Eyebrow>OUR COURSES</Eyebrow>
        <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-5xl">
          Big Dreams <span className="text-teal">Begin Here</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-navy/70 sm:text-base">
          Structured, syllabus-aligned coaching for NEET (UG) and MHT-CET (PCB), built
          around the official board and NCERT curriculum.
        </p>
      </div>

      <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-16">
        {courses.map((course) => (
          <div key={course.id} className="card overflow-hidden">
            <div className="grid grid-cols-1 gap-8 p-5 sm:p-6 md:p-10 lg:grid-cols-[1.4fr_0.9fr]">
              <div className="min-w-0">
                <div className="flex items-start gap-3 sm:items-center">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal sm:h-12 sm:w-12">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <div>
                    <h2 className="font-heading text-xl font-bold leading-tight text-navy sm:text-2xl">
                      {course.name}
                    </h2>
                    <p className="text-xs font-semibold text-teal">{course.fullName}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium italic text-navy/60">
                  {course.tagline}
                </p>
                <p className="mt-4 text-sm text-navy/70 sm:text-base">{course.description}</p>

                <h3 className="mt-6 text-xs font-bold uppercase tracking-wide text-navy sm:mt-8 sm:text-sm">
                  {course.name} Paper Pattern
                </h3>
                <div className="mt-3 w-full overflow-x-auto rounded-xl border border-black/5">
                  <table className="w-full min-w-[480px] text-left text-sm">
                    <thead className="bg-teal-soft/70 text-navy">
                      <tr>
                        <th className="whitespace-nowrap px-4 py-3 font-semibold">Subject</th>
                        <th className="whitespace-nowrap px-4 py-3 font-semibold">
                          No. of Questions
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 font-semibold">
                          Marks / Question
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 font-semibold">
                          Total Marks
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.pattern.map((row) => (
                        <tr key={row.subject} className="border-t border-black/5">
                          <td className="whitespace-nowrap px-4 py-3 text-navy/80">
                            {row.subject}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-navy/80">
                            {row.questions}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-navy/80">
                            {row.marksEach}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-navy/80">
                            {row.total}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t border-black/5 bg-teal-soft/40 font-bold text-navy">
                        <td className="whitespace-nowrap px-4 py-3">Total</td>
                        <td className="whitespace-nowrap px-4 py-3">
                          {course.patternTotal.questions}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3">—</td>
                        <td className="whitespace-nowrap px-4 py-3">
                          {course.patternTotal.total}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4">
                  {course.patternBadges.map((h) => {
                    const Icon = Icons[h.icon];
                    return (
                      <div key={h.label} className="flex flex-col items-center gap-2 text-center">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-soft text-teal sm:h-11 sm:w-11">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                        <span className="text-xs font-bold text-navy sm:text-sm">{h.value}</span>
                        <span className="text-[11px] font-medium text-navy/60 sm:text-xs">
                          {h.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="min-w-0">
                <div className="card border-teal/20 bg-teal-soft/40 p-4 sm:p-5">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-teal sm:text-sm">
                    Why Choose {course.name}?
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {course.whyChoose.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-navy/75">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-navy sm:text-sm">
                    Download {course.id === "neet" ? "NCERT" : "HSC"} Textbooks
                  </h3>
                  <p className="mt-1 text-xs text-navy/55">
                    Build your basics with the official textbooks.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {course.textbooks.map((book) => (
                      <div
                        key={book.subject}
                        className="card flex flex-col items-center gap-2 p-3 text-center"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-soft text-teal">
                          <BookOpen className="h-4 w-4" />
                        </span>
                        <span className="text-xs font-semibold text-navy">{book.subject}</span>
                        <span className="text-[10px] text-navy/50">{book.label}</span>
                        <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-teal px-2 py-1 text-[10px] font-semibold text-white">
                          <Download className="h-3 w-3" /> PDF
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-navy/55">
                    {course.booksNote}
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-navy sm:text-sm">
                    {course.cutoff.title}
                  </h3>
                  <p className="mt-1 text-xs text-navy/55">{course.cutoff.subtitle}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {course.cutoff.years.map((y) => (
                      <div
                        key={y.label}
                        className={`card flex flex-col items-center gap-2 p-3 text-center ${
                          !y.available ? "opacity-60" : ""
                        }`}
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-soft text-teal">
                          <FileText className="h-4 w-4" />
                        </span>
                        <span className="text-xs font-semibold text-navy">{y.label}</span>
                        <span className="text-[10px] leading-tight text-navy/50">{y.note}</span>
                        {y.available ? (
                          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-teal px-2 py-1 text-[10px] font-semibold text-white">
                            <Download className="h-3 w-3" /> PDF
                          </span>
                        ) : (
                          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-navy/10 px-2 py-1 text-[10px] font-semibold text-navy/50">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}