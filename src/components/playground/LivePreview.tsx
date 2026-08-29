"use client";

import { useMemo } from "react";
import type { LoaderConfig } from "@/types";

import {
  ArcOrbit, FadedArc, ElasticArcOrbit, DualArcOrbit,
  ArcSpinner, DualSpinner, DualArc, CrossArc, ElasticArc,
  RippleRings, DoubleRing, RadarPing, PulseRing,
  HelixDots, OrbitDots, HelixOrbit, DotOrbit, ZigZagOrbit,
  SpinLogo, PulseLogo, BounceLoop, BlurPulse,
  StrokeDraw, GlitchWave, FlipCard, SpinTracks,
} from "react-logo-loader";

const COMPONENT_MAP: Record<string, React.FC<any>> = {
  ArcOrbit, FadedArc, ElasticArcOrbit, DualArcOrbit,
  ArcSpinner, DualSpinner, DualArc, CrossArc, ElasticArc,
  RippleRings, DoubleRing, RadarPing, PulseRing,
  HelixDots, OrbitDots, HelixOrbit, DotOrbit, ZigZagOrbit,
  SpinLogo, PulseLogo, BounceLoop, BlurPulse,
  StrokeDraw, GlitchWave, FlipCard, SpinTracks,
};

interface LivePreviewProps {
  config: LoaderConfig;
  darkBg: boolean;
  onToggleBg: () => void;
}

export function LivePreview({ config, darkBg, onToggleBg }: LivePreviewProps) {
  const Component = COMPONENT_MAP[config.component];

  const LogoEl = useMemo(() => {
    if (!config.svgCode) return null;
  
    if (config.svgCode.startsWith("__img__:")) {
      const src = config.logoDataUrl || `/${config.logoFileName}`;
      return function Logo() {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt="logo"
            style={{
              width: "55%",
              height: "55%",
              objectFit: "contain",
            }}
          />
        );
      };
    }
  
    return function Logo() {
      return (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "55%",
            height: "55%",
            color: config.color,
          }}
          dangerouslySetInnerHTML={{
            __html: config.svgCode.replace(
              "<svg",
              `<svg width="100%" height="100%"`
            ),
          }}
        />
      );
    };
  }, [config.svgCode, config.color, config.logoFileName, config.logoDataUrl]);

  if (!Component) return null;

  return (
    <div className="flex flex-col h-full" style={{ minHeight: "0px" }}>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 "
        style={{ borderColor: "var(--border)",  }}>
        <p className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}>
          Live Preview
        </p>
        <div className="flex items-center gap-2">
          {/* Background toggle */}
          <button
            onClick={onToggleBg}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs
                       font-semibold border cursor-pointer transition-all duration-150"
            style={{
              backgroundColor: "var(--surface-2)",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
              padding: "0.2rem 0.75rem",
            }}
          >
            <span
              className="w-3 h-3 rounded-full border"
              style={{
                backgroundColor: darkBg ? "#0a0a0a" : "#ffffff",
                borderColor: "var(--border)",
              }}
            />
            {darkBg ? "Dark" : "Light"}
          </button>
        </div>
      </div>

      {/* Preview area */}
      <div
        className="flex-1 flex items-center justify-center border border-black/30 rounded-2xl transition-colors duration-300"
        style={{
          backgroundColor: darkBg ? "#0a0a0a" : "#f8fafc",
          minHeight: "250px",
          margin: " 0.5rem 0.75rem"
        }}
      >
        <Component
          size={config.size}
          color={config.color}
          speed={config.speed}
          logoBehavior={config.logoBehavior}
          logoScale={config.logoScale}
          strokeWidth={config.strokeWidth}
          logo={LogoEl ? <LogoEl /> : undefined}
        />
      </div>
    </div>
  );
}