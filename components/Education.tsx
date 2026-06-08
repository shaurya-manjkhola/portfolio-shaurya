import { getPortfolio } from "@/lib/portfolio";
import { SectionHeader } from "@/components/ui";

export default function Education() {
  const { education } = getPortfolio();

  return (
    <section id="education" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="section-line" />
        <SectionHeader
          num="05 —"
          title="Education"
          description="BITS Pilani, Goa — B.E. Mathematics and Computing."
        />

        <div className="space-y-5">
          {education.map((edu, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Header bar with gradient */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(244,63,94,0.1) 0%, rgba(251,146,60,0.06) 100%)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "rgba(255,255,255,0.92)" }}
                  >
                    {edu.institution}
                  </h3>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "rgba(255,255,255,0.48)" }}
                  >
                    {edu.degree}
                  </p>
                </div>
                <span
                  className="rounded-md px-2.5 py-1 text-[10px] font-mono"
                  style={{
                    background: "rgba(244,63,94,0.1)",
                    border: "1px solid rgba(244,63,94,0.2)",
                    color: "#f43f5e",
                  }}
                >
                  {edu.level}
                </span>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 px-6 py-4">
                {[
                  ["Graduation", edu.graduation_year],
                  ["Status", "Ongoing"],
                ].map(([label, val]) => (
                  <div key={label}>
                    <p
                      className="text-[10px] font-mono uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="mt-1 text-sm font-semibold"
                      style={{ color: "rgba(255,255,255,0.82)" }}
                    >
                      {val}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              {edu.highlights && (
                <div
                  className="px-6 pb-5"
                >
                  <ul className="space-y-1.5">
                    {edu.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-6"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                      >
                        <span
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ background: "#f43f5e" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
