import { getPortfolio } from "@/lib/portfolio";
import { SectionHeader, Tag } from "@/components/ui";

export default function Projects() {
  const { projects } = getPortfolio();

  const ACCENT_BG = [
    "linear-gradient(135deg, rgba(251,146,60,0.12) 0%, rgba(244,63,94,0.06) 100%)",
    "linear-gradient(135deg, rgba(244,63,94,0.12) 0%, rgba(251,146,60,0.06) 100%)",
  ];
  const ACCENT_BORDER = ["rgba(251,146,60,0.22)", "rgba(244,63,94,0.22)"];

  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="section-line" />
        <SectionHeader
          num="01 —"
          title="Projects"
          description="Things I've built and what I learned from each."
        />

        <div className="space-y-5">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: ACCENT_BG[i % ACCENT_BG.length],
                border: `1px solid ${ACCENT_BORDER[i % ACCENT_BORDER.length]}`,
              }}
            >
              {/* Accent line left */}
              <div
                className="absolute left-0 top-0 h-full w-1 opacity-60"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(180deg, #fb923c 0%, #f43f5e 100%)"
                      : "linear-gradient(180deg, #f43f5e 0%, #fb923c 100%)",
                }}
              />

              <div className="pl-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p
                      className="text-[10px] font-mono uppercase tracking-widest mb-1"
                      style={{ color: "rgba(251,146,60,0.7)" }}
                    >
                      {project.domain}
                    </p>
                    <h3
                      className="text-xl font-semibold leading-snug"
                      style={{ color: "rgba(255,255,255,0.92)" }}
                    >
                      {project.name}
                    </h3>
                  </div>
                  <span
                    className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-mono"
                    style={{
                      background:
                        project.status === "Completed"
                          ? "rgba(251,146,60,0.12)"
                          : "rgba(244,63,94,0.12)",
                      border:
                        project.status === "Completed"
                          ? "1px solid rgba(251,146,60,0.3)"
                          : "1px solid rgba(244,63,94,0.3)",
                      color:
                        project.status === "Completed" ? "#fb923c" : "#f43f5e",
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                <p
                  className="text-sm leading-7 mb-4"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {project.description}
                </p>

                {/* Details */}
                <div
                  className="rounded-xl p-4 mb-4 space-y-2"
                  style={{
                    background: "rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {[
                    ["Problem solved", project.problem_solved],
                    ["What I learned", project.what_i_learned],
                    ["Challenge", project.challenge],
                  ].map(([label, val]) => (
                    <p
                      key={label}
                      className="text-sm leading-6"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      <span
                        className="font-medium"
                        style={{ color: "rgba(255,255,255,0.82)" }}
                      >
                        {label}:{" "}
                      </span>
                      {val}
                    </p>
                  ))}
                </div>

                {/* Role */}
                <div
                  className="rounded-lg px-4 py-2.5 mb-4 inline-block"
                  style={{
                    background: "rgba(0,0,0,0.25)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    Role:{" "}
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {project.role}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech_stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
