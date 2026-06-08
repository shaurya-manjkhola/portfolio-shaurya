"use client";

import { useState, useMemo, useRef, useEffect } from "react";

const SUGGESTIONS = [
  "What ML projects has Shaurya built?",
  "Tell me about his transformer research.",
  "What tools and languages does he use?",
  "What is his competitive programming background?",
  "What is Shaurya currently looking for?",
  "How can I contact Shaurya?",
];

export default function AICopilot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const canAsk = useMemo(
    () => question.trim().length > 0 && !loading,
    [question, loading]
  );

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  async function askQuestion() {
    if (!canAsk) return;
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setAnswer(data.answer ?? "No answer returned.");
      setQuestion("");
    } catch {
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ── Floating panel ─────────────────────────────────── */}
      {open && (
        <div
          className="fixed bottom-24 right-5 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up"
          style={{
            background: "#0d0f18",
            border: "1px solid rgba(251,146,60,0.2)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 40px rgba(251,146,60,0.06)",
          }}
        >
          {/* Panel header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              background: "rgba(251,146,60,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full animate-pulse-glow"
                style={{ background: "#fb923c" }}
              />
              <span
                className="text-xs font-mono uppercase tracking-widest"
                style={{ color: "rgba(251,146,60,0.8)" }}
              >
                AI Copilot
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-xs font-mono transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              ✕
            </button>
          </div>

          {/* Suggestions */}
          <div className="px-4 pt-3 pb-2">
            <p
              className="text-[10px] font-mono uppercase tracking-widest mb-2"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Try asking
            </p>
            <div className="flex flex-col gap-1.5">
              {SUGGESTIONS.slice(0, 3).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuestion(s)}
                  className="rounded-lg px-3 py-2 text-left text-xs font-mono transition-all duration-150 hover:bg-white/5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Answer area */}
          {(answer || loading) && (
            <div
              className="mx-4 mb-3 rounded-lg p-3"
              style={{
                background: "rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.06)",
                maxHeight: "140px",
                overflowY: "auto",
              }}
            >
              <p
                className="whitespace-pre-wrap text-xs leading-6"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {loading ? (
                  <span
                    className="animate-pulse-glow"
                    style={{ color: "#fb923c" }}
                  >
                    Thinking…
                  </span>
                ) : (
                  answer
                )}
              </p>
            </div>
          )}

          {/* Input */}
          <div
            className="mx-4 mb-4 flex items-center gap-2 rounded-xl px-3 py-2"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && askQuestion()}
              placeholder="Ask anything…"
              className="flex-1 bg-transparent text-xs outline-none"
              style={{ color: "rgba(255,255,255,0.88)" }}
            />
            <button
              type="button"
              onClick={askQuestion}
              disabled={!canAsk}
              className="flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-mono font-semibold transition-all duration-150 disabled:opacity-30"
              style={{
                background: canAsk
                  ? "linear-gradient(135deg, #fb923c 0%, #f43f5e 100%)"
                  : "rgba(255,255,255,0.1)",
                color: canAsk ? "#fff" : "rgba(255,255,255,0.4)",
              }}
            >
              {loading ? "…" : "Ask"}
            </button>
          </div>
        </div>
      )}

      {/* ── Floating trigger button ─────────────────────────── */}
      <button
        id="ai-copilot-btn"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full px-4 py-3 shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange-500/20"
        style={{
          background: open
            ? "rgba(30,20,10,0.95)"
            : "linear-gradient(135deg, #fb923c 0%, #f43f5e 100%)",
          border: open
            ? "1px solid rgba(251,146,60,0.3)"
            : "none",
          color: "#fff",
          boxShadow: open
            ? "0 8px 32px rgba(0,0,0,0.4)"
            : "0 8px 32px rgba(251,146,60,0.3)",
        }}
      >
        <span className="text-sm">{open ? "✕" : "✦"}</span>
        <span className="text-xs font-mono font-semibold tracking-wide">
          {open ? "Close" : "Ask AI"}
        </span>
      </button>
    </>
  );
}
