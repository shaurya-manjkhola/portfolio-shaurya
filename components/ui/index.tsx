import type { ReactNode } from "react";

/* ── Card ─────────────────────────────────────────────────── */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={["rounded-2xl p-6 md:p-8", className].join(" ")}
      style={{
        background: "rgba(255,255,255,0.025)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderLeft: "1px solid rgba(255,255,255,0.05)",
        borderRight: "1px solid rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.02)",
      }}
    >
      {children}
    </div>
  );
}

/* ── Section header — numbered style ─────────────────────── */
export function SectionHeader({
  num,
  title,
  description,
}: {
  num: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-4 mb-2">
        <span
          className="text-xs font-mono tabular-nums"
          style={{ color: "rgba(251,146,60,0.6)" }}
        >
          {num}
        </span>
        <h2
          className="text-2xl font-semibold tracking-tight md:text-3xl"
          style={{ color: "rgba(255,255,255,0.92)", fontFamily: "inherit" }}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className="text-sm leading-7 ml-10 max-w-2xl"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ── Tag / Chip ───────────────────────────────────────────── */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-mono transition-colors duration-150 hover:border-orange-400/30"
      style={{
        background: "rgba(251,146,60,0.06)",
        border: "1px solid rgba(251,146,60,0.15)",
        color: "rgba(255,255,255,0.65)",
      }}
    >
      {children}
    </span>
  );
}

/* ── Button ───────────────────────────────────────────────── */
export function Button({
  href,
  children,
  variant = "primary",
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  target?: string;
}) {
  if (variant === "primary") {
    return (
      <a
        href={href}
        target={target}
        rel={target ? "noreferrer" : undefined}
        className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, #fb923c 0%, #f43f5e 100%)",
          color: "#fff",
          boxShadow: "0 4px 20px rgba(251,146,60,0.25)",
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-mono tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        color: "rgba(255,255,255,0.65)",
      }}
    >
      {children}
    </a>
  );
}

/* ── Inner panel ──────────────────────────────────────────── */
export function InnerPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={["rounded-xl p-4", className].join(" ")}
      style={{
        background: "rgba(0,0,0,0.25)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {children}
    </div>
  );
}

/* ── Stat box ─────────────────────────────────────────────── */
export function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex flex-col gap-1 px-5 py-3"
      style={{
        borderLeft: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <p
        className="text-[10px] font-mono uppercase tracking-widest"
        style={{ color: "rgba(255,255,255,0.32)" }}
      >
        {label}
      </p>
      <p
        className="text-sm font-semibold"
        style={{ color: "rgba(255,255,255,0.88)" }}
      >
        {value}
      </p>
    </div>
  );
}
