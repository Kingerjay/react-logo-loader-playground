"use client";

import { useState } from "react";
import { ControlPanel } from "@/components/playground/ControlPanel";
import { LivePreview } from "@/components/playground/LivePreview";
import { CodeOutput } from "@/components/playground/CodeOutput";
import { ComponentGrid } from "@/components/playground/ComponentGrid";
import { PRESET_LOGOS } from "@/constants/loaders";
import type { LoaderConfig } from "@/types";

const DEFAULT_CONFIG: LoaderConfig = {
  component: "ArcOrbit",
  size: 64,
  color: "#0d9488",
  speed: "normal",
  logoBehavior: "pulse",
  svgCode: PRESET_LOGOS[0]?.svg ?? "",
  logoFileName: "",
  logoDataUrl: "",
  logoScale: 0.7,
  strokeWidth: "normal",
};

export default function PlaygroundPage() {
  const [config, setConfig] = useState<LoaderConfig>(DEFAULT_CONFIG);
  const [darkBg, setDarkBg] = useState(true);
  
  // Mobile/Tablet navigation state configuration tracking
  const [activeTab, setActiveTab] = useState<"preview" | "controls" | "components">("preview");

  const updateConfig = (updates: Partial<LoaderConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="flex flex-col w-full overflow-hidden flex-1 lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] h-full">
      
      {/* Page header */}
      <div className="flex-none px-6 border-b flex flex-col items-center justify-center text-center py-4" style={{ borderColor: "var(--border)" }}>
        <h1 className="text-xl font-extrabold tracking-[-0.03em]">Playground</h1>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>Customize and preview all 20 loader components</p>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="flex lg:hidden flex-none border-b text-sm z-20" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-1)" }}>
        <button onClick={() => setActiveTab("preview")} className={`flex-1 py-3 text-center font-bold border-b-2 transition-all ${activeTab === "preview" ? "border-[var(--primary)] text-[var(--text-main)]" : "border-transparent text-[var(--text-secondary)]"}`}>Preview</button>
        <button onClick={() => setActiveTab("controls")} className={`flex-1 py-3 text-center font-bold border-b-2 transition-all ${activeTab === "controls" ? "border-[var(--primary)] text-[var(--text-main)]" : "border-transparent text-[var(--text-secondary)]"}`}>Controls</button>
        <button onClick={() => setActiveTab("components")} className={`flex-1 py-3 text-center font-bold border-b-2 transition-all ${activeTab === "components" ? "border-[var(--primary)] text-[var(--text-main)]" : "border-transparent text-[var(--text-secondary)]"}`}>Loaders</button>
      </div>

      {/* Main Grid Row */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-0 w-full overflow-hidden">
        
        {/* Column 1 — Control panel */}
        <div className={`${activeTab === "controls" ? "block" : "hidden"} lg:block w-full lg:w-[280px] lg:min-w-[280px] border-b lg:border-b-0 lg:border-r overflow-y-auto h-full min-h-0 flex-1 lg:flex-none`} style={{ borderColor: "var(--border)" }}>
          <ControlPanel config={config} onChange={updateConfig} />
        </div>

        {/* Column 2 — Preview + Code */}
        <div
          className={`${
            activeTab === "preview" ? "flex" : "hidden"
          } lg:flex flex-1 flex-col min-w-0 border-b lg:border-b-0 lg:border-r min-h-0 h-full overflow-y-auto`}
          style={{ borderColor: "var(--border)" }}
        >
          {/* Live Preview Container Box Area */}
          <div className="flex-none p-4 w-full flex flex-col justify-center">
            <LivePreview
              config={config}
              darkBg={darkBg}
              onToggleBg={() => setDarkBg((p) => !p)}
            />
          </div>

          {/* Code Output Wrapper Container */}
          <div
            className="flex-none border-t bg-[var(--surface-1)]"
            style={{ borderColor: "var(--border)" }}
          >
            <CodeOutput config={config} />
          </div>
        </div>


        {/* Column 3 — Component grid */}
        <div className={`${activeTab === "components" ? "flex" : "hidden"} lg:flex w-full lg:w-[320px] lg:min-w-[320px] flex-col min-h-0 h-full lg:flex-none`} style={{ borderColor: "var(--border)" }}>
          <div className="flex-none px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)", margin: "0.5rem 0" }}>Components</p>
          </div>
          <div className="flex-1 overflow-y-auto min-h-0">
            <ComponentGrid selected={config.component} color={config.color} svgCode={config.svgCode} logoDataUrl={config.logoDataUrl} onSelect={(component) => updateConfig({ component })} />
          </div>
        </div>

      </div>
      
    </div>
  );
}
