"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { PropsTable } from "./PropsTable";
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

interface Prop {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface ComponentDocProps {
  id: string;
  name: string;
  description: string;
  family: string;
  supportsLogoBehavior: boolean;
  supportsDotsSpeed: boolean;
  extraProps?: Prop[];
  exampleCode: string;
}

const DefaultLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="55%" height="55%">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const BASE_PROPS: Prop[] = [
  {
    name: "size",
    type: "number | string",
    default: "48",
    description: "Width and height of the loader. Accepts a number (px) or CSS string e.g. '4rem'",
  },
  {
    name: "color",
    type: "string",
    default: '"#6366f1"',
    description: "Primary color of the loader animation",
  },
  {
    name: "speed",
    type: '"slow" | "normal" | "fast"',
    default: '"normal"',
    description: "Preset animation speed",
  },
  {
    name: "speedMultiplier",
    type: "number",
    default: "—",
    description: "Fine-grained speed multiplier — overrides speed if provided. e.g. 0.5 = half speed, 2 = double",
  },
  {
    name: "logo",
    type: "ReactNode",
    default: "—",
    description: "Your SVG logo as a React element",
  },
  {
    name: "ariaLabel",
    type: "string",
    default: '"Loading"',
    description: "Accessible label read by screen readers",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description: "Additional CSS class for the outer wrapper",
  },
];

const LOGO_BEHAVIOR_PROP: Prop = {
  name: "logoBehavior",
  type: '"pulse" | "blur" | "bounce" | "none"',
  default: '"pulse"',
  description: "Controls how the logo animates while the loader runs",
};

const DOTS_SPEED_PROP: Prop = {
  name: "dotsSpeed",
  type: '"slow" | "normal" | "fast"',
  default: '"normal"',
  description: "Independent speed control for the dots — separate from the logo speed",
};

const FAMILY_COLORS: Record<string, "primary" | "secondary"> = {
  arc: "primary",
  ring: "secondary",
  dot: "primary",
  logo: "secondary",
  special: "primary",
};

export function ComponentDoc({
  id,
  name,
  description,
  family,
  supportsLogoBehavior,
  supportsDotsSpeed,
  extraProps = [],
  exampleCode,
}: ComponentDocProps) {
  const [darkBg, setDarkBg] = useState(true);
  const Component = COMPONENT_MAP[id];

  const allProps = useMemo(() => {
    const props = [...BASE_PROPS];
    if (supportsLogoBehavior) props.push(LOGO_BEHAVIOR_PROP);
    if (supportsDotsSpeed) props.push(DOTS_SPEED_PROP);
    props.push(...extraProps);
    return props;
  }, [supportsLogoBehavior, supportsDotsSpeed, extraProps]);

  return (
    <div
      id={id}
      className="flex flex-col gap-6 pb-12 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start gap-3 pt-10">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-2xl font-extrabold tracking-[-0.03em]">
              {name}
            </h2>
            <Badge variant={FAMILY_COLORS[family] ?? "primary"}>
              {family}
            </Badge>
            {supportsLogoBehavior && (
              <Badge variant="secondary">logoBehavior</Badge>
            )}
            {supportsDotsSpeed && (
              <Badge variant="primary">dotsSpeed</Badge>
            )}
          </div>
          <p className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}>
            {description}
          </p>
        </div>
      </div>

      {/* Live demo + code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Live demo */}
        <div
          className="flex flex-col rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--border)" }}
        >
          {/* Demo toolbar */}
          <div
            className="flex items-center justify-between px-4 py-2 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--text-secondary)" }}>
              Preview
            </span>
            <button
              onClick={() => setDarkBg((p) => !p)}
              className="flex items-center gap-1.5 text-xs font-semibold
                         rounded-lg border cursor-pointer px-2 py-1"
              style={{
                backgroundColor: "var(--surface-2)",
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: darkBg ? "#0a0a0a" : "#ffffff",
                  border: "1px solid var(--border)" }}
              />
              {darkBg ? "Dark" : "Light"}
            </button>
          </div>

          {/* Demo canvas */}
          <div
            className="flex-1 flex items-center justify-center transition-colors duration-300"
            style={{
              backgroundColor: darkBg ? "#0a0a0a" : "#f8fafc",
              minHeight: "200px",
            }}
          >
            {Component && (
              <Component
                size={56}
                color="#0d9488"
                speed="normal"
                logoBehavior="pulse"
                logo={<DefaultLogo />}
              />
            )}
          </div>
        </div>

        {/* Code example */}
        <CodeBlock code={exampleCode} language="tsx" />
      </div>

      {/* Props table */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-bold uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}>
          Props
        </h3>
        <PropsTable props={allProps} />
      </div>
    </div>
  );
}