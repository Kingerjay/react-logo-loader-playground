"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Badge } from "@/components/ui/Badge";

interface ExampleCardProps {
  title: string;
  description: string;
  badge: string;
  badgeVariant?: "primary" | "secondary" | "neutral";
  code: string;
  children: React.ReactNode;
}

export function ExampleCard({
  title,
  description,
  badge,
  badgeVariant = "primary",
  code,
  children,
}: ExampleCardProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div
      className="flex flex-col rounded-2xl border overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Header */}
      <div
        className="flex items-start justify-between gap-4 px-6 py-5 border-b"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-base">{title}</h3>
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>
        </div>

        {/* Toggle code button */}
        <button
          onClick={() => setShowCode((p) => !p)}
          className="flex-none flex items-center gap-1.5 text-xs font-semibold
                     px-3 py-1.5 rounded-lg border cursor-pointer transition-all duration-150"
          style={{
            backgroundColor: showCode ? "var(--primary-light)" : "var(--surface-2)",
            borderColor: showCode ? "var(--primary)" : "var(--border)",
            color: showCode ? "var(--primary)" : "var(--text-secondary)",
          }}
        >
          <svg
            width="12" height="12" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          {showCode ? "Hide Code" : "View Code"}
        </button>
      </div>

      {/* Demo area */}
      <div
        className="flex items-center justify-center px-6 py-12"
        style={{ backgroundColor: "var(--background)" }}
      >
        {children}
      </div>

      {/* Code block — toggleable */}
      {showCode && (
        <div className="border-t" style={{ borderColor: "var(--border)" }}>
          <CodeBlock code={code} language="tsx" showCopy />
        </div>
      )}
    </div>
  );
}