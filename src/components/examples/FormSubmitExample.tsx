"use client";

import { useState } from "react";
import { StrokeDraw } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="55%" height="55%">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

type State = "idle" | "loading" | "success";

export function FormSubmitExample() {
  const [state, setState] = useState<State>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => setState("success"), 2500);
    setTimeout(() => setState("idle"), 4500);
  };

  return (
    <div className="w-full max-w-sm">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 p-6 rounded-2xl border"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <h4 className="font-bold text-sm">Contact Form</h4>

        <input
          type="text"
          placeholder="Your name"
          disabled={state !== "idle"}
          className="px-3 py-2 rounded-lg text-sm outline-none"
          style={{
            backgroundColor: "var(--surface-2)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
          }}
        />
        <input
          type="email"
          placeholder="Your email"
          disabled={state !== "idle"}
          className="px-3 py-2 rounded-lg text-sm outline-none"
          style={{
            backgroundColor: "var(--surface-2)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
          }}
        />
        <textarea
          placeholder="Your message"
          rows={3}
          disabled={state !== "idle"}
          className="px-3 py-2 rounded-lg text-sm outline-none resize-none"
          style={{
            backgroundColor: "var(--surface-2)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
          }}
        />

        <button
          type="submit"
          disabled={state !== "idle"}
          className="flex items-center justify-center gap-2 py-2.5
                     rounded-xl text-sm font-semibold cursor-pointer
                     transition-all duration-150"
          style={{
            backgroundColor: state === "success"
              ? "#10b981"
              : "var(--primary)",
            color: "#ffffff",
            border: "none",
          }}
        >
          {state === "loading" && (
            <StrokeDraw
              size={18}
              color="#ffffff"
              speed="normal"
              logoBehavior="pulse"
              logo={<MyLogo />}
            />
          )}
          {state === "idle" && "Send Message"}
          {state === "loading" && "Sending..."}
          {state === "success" && "✓ Message Sent!"}
        </button>
      </form>
    </div>
  );
}

export const FORM_SUBMIT_CODE = `import { useState } from "react";
import { StrokeDraw } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await submitForm();
    setLoading(false);
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={loading}>
        {loading && (
          <StrokeDraw
            size={18}
            color="#ffffff"
            speed="normal"
            logoBehavior="pulse"
            logo={<MyLogo />}
          />
        )}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}`;