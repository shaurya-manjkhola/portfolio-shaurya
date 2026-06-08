import { getPortfolio } from "@/lib/portfolio";
import { SectionHeader } from "@/components/ui";

export default function Contact() {
  const { contact, personal } = getPortfolio();

  const links = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false },
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone}`, external: false },
    { label: "GitHub", value: `github.com/${contact.github_handle}`, href: contact.github, external: true },
    { label: "Location", value: contact.location, href: null, external: false },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="section-line" />
        <SectionHeader
          num="06 —"
          title="Reach out"
          description="Fastest way to reach me is email."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Left — availability card */}
          <div
            className="rounded-2xl p-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(251,146,60,0.12) 0%, rgba(244,63,94,0.08) 100%)",
              border: "1px solid rgba(251,146,60,0.22)",
            }}
          >
            {/* Top accent */}
            <div
              className="h-px w-full mb-5 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #fb923c 0%, #f43f5e 100%)",
                opacity: 0.5,
              }}
            />
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono mb-4"
              style={{
                background: "rgba(251,146,60,0.1)",
                border: "1px solid rgba(251,146,60,0.25)",
                color: "#fb923c",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse-glow flex-shrink-0"
                style={{ background: "#fb923c" }}
              />
              Available for opportunities
            </div>
            <p
              className="text-sm leading-7"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {personal.looking_for}
            </p>
          </div>

          {/* Right — contact grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {links.map(({ label, value, href, external }) => {
              const inner = (
                <>
                  <p
                    className="text-[10px] font-mono uppercase tracking-widest mb-2"
                    style={{ color: "rgba(255,255,255,0.32)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm font-medium break-words"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {value}
                  </p>
                </>
              );

              const cls =
                "rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5";
              const style = {
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              };

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className={cls}
                  style={style}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls} style={style}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
