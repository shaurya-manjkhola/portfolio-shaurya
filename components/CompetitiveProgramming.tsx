import { getPortfolio } from "@/lib/portfolio";
import { SectionHeader } from "@/components/ui";

export default function CompetitiveProgramming() {
  const { competitive_programming } = getPortfolio();

  return (
    <section id="cp" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="section-line" />
        <SectionHeader
          num="04 —"
          title="Competitive programming"
          description="Codeforces — solving problems in C++."
        />

        <div className="grid gap-5 md:grid-cols-[1fr_2fr]">
          {/* Left — big rating display */}
          <div
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(251,146,60,0.18) 0%, rgba(244,63,94,0.12) 100%)",
              border: "1px solid rgba(251,146,60,0.28)",
            }}
          >
            {/* Glow blob */}
            <div
              className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full blur-2xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle, #f43f5e 0%, #fb923c 60%, transparent 100%)",
              }}
            />
            <p
              className="text-[10px] font-mono uppercase tracking-widest mb-4"
              style={{ color: "rgba(251,146,60,0.7)" }}
            >
              {competitive_programming.platform}
            </p>
            <div>
              <p
                className="text-6xl font-bold font-mono tabular-nums"
                style={{
                  background:
                    "linear-gradient(120deg, #fb923c 0%, #f43f5e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {competitive_programming.rating}
              </p>
              <p
                className="mt-1 text-xs font-mono"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Current Rating
              </p>
            </div>
          </div>

          {/* Right — detail boxes */}
          <div className="space-y-4">
            <div
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {[
                ["Handle", competitive_programming.handle],
                ["Language", competitive_programming.language],
                ["Platform", competitive_programming.platform],
                ["Status", "Active"],
              ].map(([label, val]) => (
                <div
                  key={label}
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(251,146,60,0.06)",
                    border: "1px solid rgba(251,146,60,0.14)",
                  }}
                >
                  <p
                    className="text-[10px] font-mono uppercase tracking-widest mb-1"
                    style={{ color: "rgba(251,146,60,0.5)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm font-semibold font-mono"
                    style={{ color: "rgba(255,255,255,0.88)" }}
                  >
                    {val}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={competitive_programming.profile_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full rounded-xl px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 group"
              style={{
                background:
                  "linear-gradient(135deg, rgba(251,146,60,0.1) 0%, rgba(244,63,94,0.06) 100%)",
                border: "1px solid rgba(251,146,60,0.2)",
              }}
            >
              <span
                className="text-sm font-mono"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                View Codeforces Profile
              </span>
              <span
                className="transition-transform duration-150 group-hover:translate-x-1"
                style={{ color: "#fb923c" }}
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
