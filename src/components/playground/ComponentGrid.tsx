"use client";

import { useMemo } from "react";
import { LOADERS, LOADER_FAMILIES } from "@/constants/loaders";
import type { LoaderMeta } from "@/types";

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

const FAMILY_COLORS: Record<string, string> = {
  arc: "var(--primary)",
  ring: "var(--secondary)",
  dot: "var(--primary)",
  logo: "var(--secondary)",
  special: "var(--primary)",
};

interface ComponentGridProps {
  selected: string;
  color: string;
  svgCode: string;
  logoDataUrl: string; 
  onSelect: (component: string) => void;
}

const DefaultLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" fill={color} width="55%" height="55%">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export function ComponentGrid({
  selected, color, svgCode, logoDataUrl, onSelect,
}: ComponentGridProps) {
  const grouped = useMemo(() => {
    return Object.entries(LOADER_FAMILIES).map(([key, label]) => ({
      key,
      label,
      loaders: LOADERS.filter((l) => l.family === key),
    }));
  }, []);

  const UserLogo = useMemo(() => {
    if (!svgCode) return null;
  
    if (svgCode.startsWith("__img__:")) {
      const src = logoDataUrl || `/${svgCode.replace("__img__:", "")}`;
      return function Logo() {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt="logo"
            style={{ width: "55%", height: "55%", objectFit: "contain" }}
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
            color,
          }}
          dangerouslySetInnerHTML={{
            __html: svgCode.replace("<svg", `<svg width="100%" height="100%"`),
          }}
        />
      );
    };
  }, [svgCode, color, logoDataUrl]);

  return (
    <div style={{ overflowY: "auto", padding: "1rem", maxHeight: "100%", }} className="flex flex-col gap-6 p-5 ">
      {grouped.map(({ key, label, loaders }) => (
        <div key={key}>
          {/* Family label */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: FAMILY_COLORS[key] }}
            />
            <p className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--text-secondary)" }}>
              {label}
            </p>
          </div>

          {/* Loader cards */}
          <div className="grid grid-cols-2 gap-2">
            {loaders.map((loader) => {
              const Component = COMPONENT_MAP[loader.component];
              const isSelected = selected === loader.component;

              return (
                <button
                  key={loader.component}
                  onClick={() => onSelect(loader.component)}
                  className="flex flex-col items-center gap-3 rounded-xl
                             border cursor-pointer transition-all duration-150
                             text-left"
                  style={{
                    borderColor: isSelected
                      ? "var(--primary)"
                      : "var(--border)",
                      padding: "1rem",
                  }}
                >
                  {/* Mini live preview */}
                  <div className="flex items-center justify-center h-14">
                    {Component && (
                      <Component
                      size={36}
                      color={isSelected ? "#0d9488" : color}
                      speed="normal"
                      logoScale={0.7}
                      strokeWidth="normal"
                      logo={
                        UserLogo
                          ? <UserLogo />
                          : <DefaultLogo color={isSelected ? "#0d9488" : color} />
                      }
                    />
                    )}
                  </div>

                  {/* Name */}
                  <span
                    className="text-xs font-semibold text-center w-full truncate"
                    style={{
                      color: isSelected ? "var(--primary)" : "var(--foreground)",
                    }}
                  >
                    {loader.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}