import { getPortfolio } from "@/lib/portfolio";
import { SectionHeader, Tag } from "@/components/ui";

export default function Skills() {
  const { skills } = getPortfolio();

  const sections = [
    { label: "Languages", items: skills.programming_languages, color: "rgba(251,146,60,0.55)" },
    { label: "ML & Computing", items: skills.libraries_and_frameworks, color: "rgba(244,63,94,0.6)" },
    { label: "Tools & Platforms", items: skills.tools, color: "rgba(251,190,60,0.55)" },
    { label: "Soft Skills", items: skills.soft_skills, color: "rgba(251,146,60,0.45)" },
    { label: "Currently Learning", items: skills.currently_learning, color: "rgba(244,63,94,0.5)" },
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="section-line" />
        <SectionHeader
          num="02 —"
          title="Stack & craft"
          description="Tools I use and things I'm still learning."
        />

        {/* Wrapped in a glassy outer box */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {sections.map(({ label, items, color }, i) => (
            <div
              key={label}
              className="flex flex-wrap items-start gap-4 px-6 py-5 transition-colors duration-150 hover:bg-white/[0.02]"
              style={{
                borderBottom:
                  i < sections.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
              }}
            >
              {/* Label column */}
              <div className="w-40 flex-shrink-0 flex items-center gap-2 pt-0.5">
                <span
                  className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ background: color }}
                />
                <p
                  className="text-[10px] font-mono uppercase tracking-widest"
                  style={{ color }}
                >
                  {label}
                </p>
              </div>
              {/* Tags */}
              <div className="flex flex-1 flex-wrap gap-1.5">
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
