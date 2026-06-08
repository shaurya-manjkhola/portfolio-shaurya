import { getPortfolio } from "@/lib/portfolio";
import { SectionHeader, Tag } from "@/components/ui";

export default function Experience() {
  const { experience } = getPortfolio();

  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="section-line" />
        <SectionHeader
          num="03 —"
          title="Experience"
          description="Internships and work so far."
        />

        <div className="space-y-5">
          {experience.map((exp) => (
            <article
              key={exp.id}
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(251,146,60,0.08) 0%, rgba(0,0,0,0.2) 100%)",
                border: "1px solid rgba(251,146,60,0.18)",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, #fb923c 0%, #f43f5e 60%, transparent 100%)",
                }}
              />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "rgba(255,255,255,0.92)" }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="mt-0.5 text-sm"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {exp.organization}
                  </p>
                </div>
                <span
                  className="flex-shrink-0 rounded-md px-2.5 py-1 text-[10px] font-mono"
                  style={{
                    background: "rgba(251,146,60,0.12)",
                    border: "1px solid rgba(251,146,60,0.25)",
                    color: "#fb923c",
                  }}
                >
                  {exp.status}
                </span>
              </div>

              <p
                className="text-sm leading-7 mb-4"
                style={{ color: "rgba(255,255,255,0.58)" }}
              >
                {exp.description}
              </p>

              {exp.contributions && (
                <p
                  className="text-sm leading-7 mb-4"
                  style={{ color: "rgba(255,255,255,0.52)" }}
                >
                  <span
                    style={{ color: "rgba(255,255,255,0.78)" }}
                    className="font-medium"
                  >
                    Contributions:{" "}
                  </span>
                  {exp.contributions}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5">
                {exp.skills_used.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>

              {exp.duration && (
                <p
                  className="mt-3 text-[10px] font-mono"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {exp.duration}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
