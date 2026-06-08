import { getPortfolio } from "@/lib/portfolio";
import { Button, Tag } from "@/components/ui";

export default function Hero() {
  const p = getPortfolio();

  const navLinks = [
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["CP", "#cp"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ minHeight: "100svh", display: "flex", flexDirection: "column" }}
    >
      {/* Background: bottom-up bloom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(251,146,60,0.18) 0%, rgba(244,63,94,0.1) 40%, transparent 70%)",
        }}
      />
      {/* Faint diagonal grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(60deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* ── Top nav ────────────────────────────────────────── */}
      <header
        className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <span
          className="text-xs font-mono uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Portfolio
        </span>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs font-mono uppercase tracking-widest transition-colors duration-150 hover:text-white"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${p.contact.email}`}
          className="rounded-md px-3 py-1.5 text-xs font-mono transition-all duration-150 hover:bg-orange-400/10"
          style={{
            border: "1px solid rgba(251,146,60,0.3)",
            color: "#fb923c",
          }}
        >
          Hire me
        </a>
      </header>

      {/* ── Big name display ───────────────────────────────── */}
      <div className="relative z-10 px-6 pt-10 md:px-12 animate-fade-in">
        <h1
          className="select-none font-bold leading-none tracking-tighter"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 10rem)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.35) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Shaurya
        </h1>
        <h2
          className="select-none font-bold leading-none tracking-tighter"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 10rem)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginTop: "-0.05em",
          }}
        >
          Manjkhola
        </h2>
      </div>

      {/* ── Tagline + CTA centered below name ─────────────── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 py-10 md:px-12">
        {/* Status pill */}
        <div
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono animate-fade-in-up mx-auto"
          style={{
            background: "rgba(251,146,60,0.08)",
            border: "1px solid rgba(251,146,60,0.2)",
            color: "rgba(251,146,60,0.9)",
            opacity: 0,
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full animate-pulse-glow flex-shrink-0"
            style={{ background: "#fb923c" }}
          />
          Open to internship opportunities
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-in-up delay-100 max-w-xl text-lg leading-8 md:text-xl"
          style={{ color: "rgba(255,255,255,0.55)", opacity: 0 }}
        >
          Building at the edge of{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, #fb923c 0%, #f43f5e 60%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 600,
            }}
          >
            math & machine learning
          </span>
          .
        </p>

        <p
          className="animate-fade-in-up delay-200 mt-4 max-w-xl text-sm leading-7"
          style={{ color: "rgba(255,255,255,0.4)", opacity: 0 }}
        >
          {p.personal.bio}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up delay-300 mt-7 flex flex-wrap justify-center gap-3"
          style={{ opacity: 0 }}
        >
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="ghost">Contact</Button>
        </div>
      </div>

      {/* ── Bottom stat strip ──────────────────────────────── */}
      <div
        className="relative z-10 animate-fade-in delay-400"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          opacity: 0,
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap px-6 py-4 md:px-12">
          {[
            ["Batch", "2024–28"],
            ["Campus", "BITS Goa"],
            ["Degree", "B.E. Math & Computing"],
            ["Focus", "ML / Algo"],
            ["CP Rating", "1437"],
            ["Location", p.contact.location],
          ].map(([label, val], i) => (
            <div
              key={label}
              className="flex flex-col gap-0.5 px-5 py-2 first:pl-0"
              style={{
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <span
                className="text-[10px] font-mono uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {label}
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                {val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Interests strip ────────────────────────────────── */}
      <div
        className="relative z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-3 md:px-12">
          <span
            className="mr-2 text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            Interests
          </span>
          {[...p.interests.professional, ...p.interests.personal].map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
