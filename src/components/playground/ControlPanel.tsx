"use client";

import type { AnimationSpeed, LogoBehavior, LoaderConfig } from "@/types";
import { LogoInput } from "./LogoInput";
import { LOADERS } from "@/constants/loaders";

interface ControlPanelProps {
  config: LoaderConfig;
  onChange: (updates: Partial<LoaderConfig>) => void;
}

const SPEEDS: AnimationSpeed[] = ["slow", "normal", "fast"];
const BEHAVIORS: LogoBehavior[] = ["pulse", "blur", "bounce", "none"];
const STROKE_WIDTHS = ["thin", "normal", "thick", "bold"] as const;

export function ControlPanel({ config, onChange }: ControlPanelProps) {
  const selectedLoader = LOADERS.find((l) => l.component === config.component);

  return (
    <div
      className="flex flex-col gap-5 p-4"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Logo input */}
      <LogoInput
        svgCode={config.svgCode}
        logoFileName={config.logoFileName}
        onChange={(svg: string, fileName?: string | null, dataUrl?: string | null, suggestedColor?: string) =>
          onChange({
            svgCode: svg,
            logoFileName: fileName ?? "",
            logoDataUrl: dataUrl ?? "",
            ...(suggestedColor ? { color: suggestedColor } : {}),
          })
        }
      />

      <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

      {/* Color */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}>
          Color
        </p>
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={config.color}
            onChange={(e) => onChange({ color: e.target.value })}
            className="w-10 h-10 rounded-lg cursor-pointer border-none"
            style={{ backgroundColor: "transparent" }}
          />
          <input
            type="text"
            value={config.color}
            onChange={(e) => onChange({ color: e.target.value })}
            className="flex-1 text-sm font-mono px-3 py-2 rounded-lg outline-none"
            style={{
              backgroundColor: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
          />
        </div>
        <div className="flex gap-2 flex-wrap mt-1">
          {["#0d9488","#f43f5e","#6366f1","#f59e0b",
            "#10b981","#3b82f6","#8b5cf6","#ec4899"].map((c) => (
            <button
              key={c}
              onClick={() => onChange({ color: c })}
              className="w-6 h-6 rounded-full border-2 cursor-pointer
                         transition-transform hover:scale-110"
              style={{
                backgroundColor: c,
                borderColor: config.color === c ? "var(--foreground)" : "transparent",
              }}
            />
          ))}
        </div>
      </div>

      <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

      {/* Size */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}>
            Size
          </p>
          <span className="text-sm font-bold" style={{ color: "var(--primary)" }}>
            {config.size}px
          </span>
        </div>
        <input
          type="range"
          min={32}
          max={120}
          value={config.size}
          onChange={(e) => onChange({ size: Number(e.target.value) })}
          className="w-full cursor-pointer"
          style={{ accentColor: "var(--primary)" }}
        />
        <div className="flex justify-between text-[10px]"
          style={{ color: "var(--text-secondary)" }}>
          <span>32px</span>
          <span>120px</span>
        </div>
      </div>

      <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

      {/* Logo Scale */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}>
            Logo Scale
          </p>
          <span className="text-sm font-bold" style={{ color: "var(--primary)" }}>
            {Math.round(config.logoScale * 100)}%
          </span>
        </div>
        <input
          type="range"
          min={30}
          max={90}
          value={Math.round(config.logoScale * 100)}
          onChange={(e) => onChange({ logoScale: Number(e.target.value) / 100 })}
          className="w-full cursor-pointer"
          style={{ accentColor: "var(--primary)" }}
        />
        <div className="flex justify-between text-[10px]"
          style={{ color: "var(--text-secondary)" }}>
          <span>30%</span>
          <span>90%</span>
        </div>
      </div>

      <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

      {/* Stroke Width */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}>
          Stroke Width
        </p>
        <div className="flex gap-2">
          {STROKE_WIDTHS.map((sw) => (
            <button
              key={sw}
              onClick={() => onChange({ strokeWidth: sw })}
              className="flex-1 py-2 text-xs font-semibold rounded-lg
                         capitalize cursor-pointer border transition-all duration-150"
              style={{
                backgroundColor: config.strokeWidth === sw
                  ? "var(--primary-light)"
                  : "var(--surface-2)",
                borderColor: config.strokeWidth === sw
                  ? "var(--primary)"
                  : "var(--border)",
                color: config.strokeWidth === sw
                  ? "var(--primary)"
                  : "var(--text-secondary)",
              }}
            >
              {sw}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

      {/* Speed */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}>
          Speed
        </p>
        <div className="flex gap-2">
          {SPEEDS.map((s) => (
            <button
              key={s}
              onClick={() => onChange({ speed: s })}
              className="flex-1 py-2 text-xs font-semibold rounded-lg
                         capitalize cursor-pointer border transition-all duration-150"
              style={{
                backgroundColor: config.speed === s
                  ? "var(--primary-light)"
                  : "var(--surface-2)",
                borderColor: config.speed === s
                  ? "var(--primary)"
                  : "var(--border)",
                color: config.speed === s
                  ? "var(--primary)"
                  : "var(--text-secondary)",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

      {/* Logo Behavior */}
      {selectedLoader?.supportsLogoBehavior && (
        <>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--text-secondary)" }}>
              Logo Behavior
            </p>
            <div className="grid grid-cols-2 gap-2">
              {BEHAVIORS.map((b) => (
                <button
                  key={b}
                  onClick={() => onChange({ logoBehavior: b })}
                  className="py-2 text-xs font-semibold rounded-lg
                             capitalize cursor-pointer border transition-all duration-150"
                  style={{
                    backgroundColor: config.logoBehavior === b
                      ? "var(--primary-light)"
                      : "var(--surface-2)",
                    borderColor: config.logoBehavior === b
                      ? "var(--primary)"
                      : "var(--border)",
                    color: config.logoBehavior === b
                      ? "var(--primary)"
                      : "var(--text-secondary)",
                  }}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div className="h-px" style={{ backgroundColor: "var(--border)" }} />
        </>
      )}

      {/* Install reminder */}
      <div
        className="rounded-xl text-xs"
        style={{
          backgroundColor: "var(--primary-light)",
          color: "var(--primary)",
          padding: "0.875rem",
        }}
      >
        <p className="font-bold mb-1">Install</p>
        <p className="font-mono">npm install react-logo-loader</p>
      </div>
    </div>
  );
}