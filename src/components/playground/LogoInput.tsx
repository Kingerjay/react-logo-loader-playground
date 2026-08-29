"use client";

import { useState, useRef } from "react";
import { PRESET_LOGOS } from "@/constants/loaders";

interface LogoInputProps {
  svgCode: string;
  logoFileName: string;
  onChange: (svg: string, fileName?: string, dataUrl?: string) => void;
}

type Tab = "upload" | "paste";
type ActiveSource = "preset" | "upload" | "paste";

export function LogoInput({ svgCode, logoFileName, onChange }: LogoInputProps) {
  const [activeTab, setActiveTab] = useState<Tab>("upload");
  const [activeSource, setActiveSource] = useState<ActiveSource>("preset");
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>(logoFileName ?? "");
  const [pastedSvg, setPastedSvg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleTabSwitch = (tab: Tab) => {
    setActiveTab(tab);
    setError("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const name = file.name;
    setFileName(name);
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setPreviewUrl(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleUseLogo = () => {
    if (!previewUrl || !fileName) return;
    setPastedSvg("");
    setActiveSource("upload");
    onChange(`__img__:${fileName}`, fileName, previewUrl);
  };

  const handleApplySvg = () => {
    if (!pastedSvg.trim()) return;
    if (!pastedSvg.trim().startsWith("<svg")) {
      setError("Please paste a valid SVG starting with <svg");
      return;
    }
    setError("");
    setPreviewUrl("");
    setFileName("");
    setActiveSource("paste");
    onChange(pastedSvg, "", "");
  };

  const handlePasteChange = (value: string) => {
    setPastedSvg(value);
    setError("");

    if (!value.trim()) {
      setActiveSource("preset");
      const defaultPreset = PRESET_LOGOS[0];
      if (defaultPreset) {
        onChange(defaultPreset.svg, "", "");
      }
      return;
    }

    if (value !== svgCode && activeSource === "paste") {
      setActiveSource("preset"); // or a neutral string state
    }
  };

  const handlePresetClick = (svg: string) => {
    setPastedSvg("");
    setPreviewUrl("");
    setFileName("");
    setActiveSource("preset");
    onChange(svg, "", "");
  };

  // Active source label
  const activeLabel: Record<ActiveSource, string> = {
    preset: "Preset logo active",
    upload: `Using: ${fileName || "uploaded file"}`,
    paste: "Pasted SVG active",
  };

  const activeLabelColor: Record<ActiveSource, string> = {
    preset: "var(--text-secondary)",
    upload: "var(--primary)",
    paste: "var(--secondary)",
  };

  return (
    <div className="flex flex-col gap-3">
      <p
        className="text-xs font-bold uppercase tracking-widest py-2"
        style={{ color: "var(--text-secondary)" }}
      >
        Add Your Logo
      </p>

      

      {/* Tabs */}
      <div
        className="flex gap-1 p-1 rounded-xl"
        style={{ backgroundColor: "var(--surface-2)" }}
      >
        {(["upload", "paste"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabSwitch(tab)}
            className="text-sm font-semibold rounded-lg transition-all
                       duration-150 cursor-pointer border-none"
            style={{
              flex: 1,
              padding: "0.5rem",
              backgroundColor: activeTab === tab ? "var(--primary)" : "transparent",
              color: activeTab === tab ? "#ffffff" : "var(--text-secondary)",
            }}
          >
            {tab === "upload" ? "Upload Logo" : "Paste SVG"}
          </button>
        ))}
      </div>

      {/* Upload tab */}
      {activeTab === "upload" && (
        <div className="flex flex-col gap-3">

          {/* Drop zone */}
          <div
            className="flex flex-col items-center justify-center gap-2
                       rounded-xl border-2 border-dashed cursor-pointer
                       transition-all duration-150 py-5"
            style={{
              borderColor: previewUrl ? "var(--primary)" : "var(--border)",
              backgroundColor: previewUrl ? "var(--primary-light)" : "var(--surface-2)",
            }}
            onClick={() => 
              {if (activeSource === "upload") {
                setActiveSource("preset");
                const defaultPreset = PRESET_LOGOS[0];
                if (defaultPreset) onChange(defaultPreset.svg, "", "");
              }
              // 2. Open the file browser window
              fileRef.current?.click();
            }}
            
          >
            {previewUrl ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-h-16 max-w-full object-contain rounded-lg"
                />
                {fileName && (
                  <p
                    className="text-[10px] font-mono font-semibold mt-1 truncate max-w-full px-2"
                    style={{ color: "var(--primary)" }}
                  >
                    {fileName}
                  </p>
                )}
              </>
            ) : (
              <>
                <svg
                  width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Click to upload
                </p>
                <p
                  className="text-[10px]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  PNG, JPG, SVG, WebP
                </p>
              </>
            )}
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/svg+xml,image/x-icon,image/avif, image/gif"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Use this Logo button — only when file chosen */}
          {previewUrl && (
            <button
              onClick={handleUseLogo}
              className="w-full py-2.5 rounded-xl text-sm font-bold
                         cursor-pointer border-none transition-all duration-150"
              style={{
                backgroundColor: activeSource === "upload"
                  ? "#0f766e"
                  : "var(--primary)",
                color: "#ffffff",
              }}
            >
              {activeSource === "upload" ? "✓ Logo Applied" : "Use this Logo"}
            </button>
          )}

          {/* Re-upload */}
          {previewUrl && (
            <button
              onClick={() => {
                setPreviewUrl("");
                setFileName("");
                if (fileRef.current) fileRef.current.value = "";
                if (activeSource === "upload") {
                  setActiveSource("preset");
                  const firstPreset = PRESET_LOGOS[0];
                  if (firstPreset) onChange(firstPreset.svg, "", "");
                }
              }}
              className="text-[10px] text-center cursor-pointer text-[var(--text-secondary)] bg-transparent border-none hover:underline"
            >
              Upload a different image
            </button>
          )}
        </div>
      )}

      {/* Paste SVG tab */}
      {activeTab === "paste" && (
        <div className="flex flex-col gap-2">
          <textarea
            value={pastedSvg}
            onChange={(e) => handlePasteChange(e.target.value)}
            placeholder={`<svg viewBox="0 0 24 24" fill="currentColor">\n  <path d="..." />\n</svg>`}
            rows={6}
            className="w-full text-xs rounded-xl p-3 resize-none font-mono
                       outline-none transition-all duration-150"
            style={{
              backgroundColor: "var(--surface-2)",
              border: `1px solid ${error ? "var(--secondary)" : "var(--border)"}`,
              color: "var(--foreground)",
              lineHeight: 1.6,
            }}
          />
          {error && (
            <p className="text-xs" style={{ color: "var(--secondary)" }}>
              {error}
            </p>
          )}

          {/* Apply SVG button */}
          <button
            onClick={handleApplySvg}
            disabled={!pastedSvg.trim()}
            className="w-full py-2.5 rounded-xl text-sm font-bold
                       cursor-pointer border-none transition-all duration-150"
            style={{
              backgroundColor: !pastedSvg.trim()
                ? "var(--surface-2)"
                : activeSource === "paste"
                ? "#0f766e"
                : "var(--primary)",
              color: !pastedSvg.trim()
                ? "var(--text-secondary)"
                : "#ffffff",
            }}
          >
            {!pastedSvg.trim() 
        ? "Apply Svg" 
        : activeSource === "paste" && pastedSvg === svgCode
        ? "✓ SVG Applied" 
        : "Apply Svg"}
          </button>

          <p
            className="text-[11px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Paste SVG code from Figma, your design system, or iconify.design
          </p>
        </div>
      )}

      {/* Presets — always visible */}
      <div className="flex flex-col gap-2">
        <p
          className="text-[10px] font-bold uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}
        >
          Presets
        </p>
        <div className="grid grid-cols-3 gap-2">
          {PRESET_LOGOS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handlePresetClick(preset.svg)}
              className="flex flex-col items-center gap-1 rounded-xl border
                         cursor-pointer transition-all duration-150"
              style={{
                backgroundColor: svgCode === preset.svg && activeSource === "preset"
                  ? "var(--primary-light)"
                  : "var(--surface-2)",
                borderColor: svgCode === preset.svg && activeSource === "preset"
                  ? "var(--primary)"
                  : "var(--border)",
                padding: "0.5rem",
              }}
            >
              <span
                style={{
                  color: svgCode === preset.svg && activeSource === "preset"
                    ? "var(--primary)"
                    : "var(--text-secondary)",
                }}
                dangerouslySetInnerHTML={{
                  __html: preset.svg.replace(
                    "<svg",
                    `<svg width="24" height="24"`
                  ),
                }}
              />
              <span
                className="text-[10px] font-semibold"
                style={{ color: "var(--text-secondary)" }}
              >
                {preset.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}