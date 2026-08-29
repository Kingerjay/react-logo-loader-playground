import type { LoaderMeta } from "@/types";

export const LOADER_FAMILIES = {
  arc: "Arc Family",
  ring: "Ring Family",
  dot: "Dot Family",
  logo: "Logo Only",
  special: "Special Effects",
} as const;

export const LOADERS: LoaderMeta[] = [
  {
    name: "Arc Orbit",
    component: "ArcOrbit",
    description: "SVG track with rotating colored arc segment",
    family: "arc",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["arc", "track", "orbit"],
  },
  {
    name: "Faded Arc",
    component: "FadedArc",
    description: "Spinning arc with a fading comet tail",
    family: "arc",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["arc", "fade", "comet"],
  },
  {
    name: "Elastic Arc Orbit",
    component: "ElasticArcOrbit",
    description: "Elastic arc that stretches on a track",
    family: "arc",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["arc", "track", "elastic"],
  },
  {
    name: "Dual Arc Orbit",
    component: "DualArcOrbit",
    description: "Two opposite arcs spinning on a track",
    family: "arc",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["arc", "track", "dual"],
  },
  {
    name: "Arc Spinner",
    component: "ArcSpinner",
    description: "Single spinning arc around the logo",
    family: "arc",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["arc", "spin", "minimal"],
  },
  {
    name: "Dual Spinner",
    component: "DualSpinner",
    description: "Two opposite arcs spinning together",
    family: "arc",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["arc", "dual", "spin"],
  },
  {
    name: "Dual Arc",
    component: "DualArc",
    description: "Two arcs spinning in opposite directions",
    family: "arc",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["arc", "dual", "opposite"],
  },
  {
    name: "Cross Arc",
    component: "CrossArc",
    description: "Inner and outer arcs crossing each other",
    family: "arc",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["arc", "cross", "complex"],
  },
  {
    name: "Elastic Arc",
    component: "ElasticArc",
    description: "Arc that stretches and shrinks as it spins",
    family: "arc",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["arc", "elastic", "appwrite"],
  },
  // Ring Family
  {
    name: "Ripple Rings",
    component: "RippleRings",
    description: "Four expanding ripple rings",
    family: "ring",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["ring", "ripple", "expand"],
  },
  {
    name: "Double Ring",
    component: "DoubleRing",
    description: "Two staggered expanding rings",
    family: "ring",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["ring", "double", "minimal"],
  },
  {
    name: "Radar Ping",
    component: "RadarPing",
    description: "Radar ping expanding from center",
    family: "ring",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["ring", "radar", "ping"],
  },
  {
    name: "Pulse Ring",
    component: "PulseRing",
    description: "Pulsing disc with radiating ring",
    family: "ring",
    supportsLogoBehavior: false,
    supportsDotsSpeed: false,
    tags: ["ring", "pulse", "classic"],
  },
  // Dot Family
  {
    name: "Helix Dots",
    component: "HelixDots",
    description: "Logo with flanking helix dots",
    family: "dot",
    supportsLogoBehavior: true,
    supportsDotsSpeed: true,
    tags: ["dots", "helix", "flanking"],
  },
  {
    name: "Orbit Dots",
    component: "OrbitDots",
    description: "Dots orbiting around the logo",
    family: "dot",
    supportsLogoBehavior: true,
    supportsDotsSpeed: true,
    tags: ["dots", "orbit", "particle"],
  },
  {
    name: "Helix Orbit",
    component: "HelixOrbit",
    description: "Dots arranged in a ring pulsing in helix wave",
    family: "dot",
    supportsLogoBehavior: true,
    supportsDotsSpeed: true,
    tags: ["dots", "helix", "orbit"],
  },
  {
    name: "Dot Orbit",
    component: "DotOrbit",
    description: "Dots arranged in circle rotating clockwise",
    family: "dot",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["dots", "orbit", "rotate"],
  },
  {
    name: "Zig Zag Orbit",
    component: "ZigZagOrbit",
    description: "Zigzag circular path rotating around logo",
    family: "dot",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["zigzag", "orbit", "rotate"],
  },
  // Logo Only
  {
    name: "Spin Logo",
    component: "SpinLogo",
    description: "Logo spinning 360° continuously",
    family: "logo",
    supportsLogoBehavior: false,
    supportsDotsSpeed: false,
    tags: ["logo", "spin", "minimal"],
  },
  {
    name: "Pulse Logo",
    component: "PulseLogo",
    description: "Logo pulsing continuously",
    family: "logo",
    supportsLogoBehavior: false,
    supportsDotsSpeed: false,
    tags: ["logo", "pulse", "minimal"],
  },
  {
    name: "Bounce Loop",
    component: "BounceLoop",
    description: "Squash and stretch bounce",
    family: "logo",
    supportsLogoBehavior: false,
    supportsDotsSpeed: false,
    tags: ["logo", "bounce", "playful"],
  },
  {
    name: "Blur Pulse",
    component: "BlurPulse",
    description: "Cinematic blur in and out",
    family: "logo",
    supportsLogoBehavior: false,
    supportsDotsSpeed: false,
    tags: ["logo", "blur", "cinematic"],
  },
  // Special Effects
  {
    name: "Stroke Draw",
    component: "StrokeDraw",
    description: "Circle drawing around the logo",
    family: "special",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["stroke", "draw", "svg"],
  },
  {
    name: "Glitch Wave",
    component: "GlitchWave",
    description: "Cyberpunk left and right glitch split",
    family: "special",
    supportsLogoBehavior: false,
    supportsDotsSpeed: false,
    tags: ["glitch", "cyberpunk", "split"],
  },
  {
    name: "Flip Card",
    component: "FlipCard",
    description: "3D card flip animation",
    family: "special",
    supportsLogoBehavior: false,
    supportsDotsSpeed: false,
    tags: ["flip", "3d", "card"],
  },
  {
    name: "Spin Tracks",
    component: "SpinTracks",
    description: "Rounded track segments spinning clockwise",
    family: "special",
    supportsLogoBehavior: true,
    supportsDotsSpeed: false,
    tags: ["tracks", "segments", "spin"],
  },
];

export const DEFAULT_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
</svg>`;

export const PRESET_LOGOS = [
  {
    name: "Microsoft",
    svg: `<svg xmlns="http://w3.org" viewBox="0 0 200 200" width="100%" height="100%">
    <!-- Top Left Orange-Red Square -->
    <rect x="15" y="15" width="80" height="80" fill="#F25022" />
    <!-- Top Right Green Square -->
    <rect x="105" y="15" width="80" height="80" fill="#7FBA00" />
    <!-- Bottom Left Blue Square -->
    <rect x="15" y="105" width="80" height="80" fill="#00A4EF" />
    <!-- Bottom Right Yellow Square -->
    <rect x="105" y="105" width="80" height="80" fill="#FFB900" />
  </svg>
  `,
  },
  {
    name: "Mastercard",
    svg: `<svg xmlns="http://w3.org" viewBox="0 0 200 200" width="100%" height="100%">
    <!-- Left Red Circle -->
    <circle cx="73" cy="100" r="55" fill="#EB001B" />
    <!-- Right Yellow Circle -->
    <circle cx="127" cy="100" r="55" fill="#F79E1B" />
    <!-- Overlapping Translucent Orange Segment -->
    <path d="M100,51.2 A55,55 0 0,0 73,100 A55,55 0 0,0 100,148.8 A55,55 0 0,0 127,100 A55,55 0 0,0 100,51.2 Z" fill="#FF5F00" />
  </svg>
  `,
  },
  {
    name: "Netflix",
    svg: `<img
          src="/netflix-logo.png"
          alt="Netflix Logo"
          width="20"
          height="20"
        />`,
  },
  {
    name: "Instagram",
    svg: `<img
          src="/instagram-logo.png"
          alt="Instagram Logo"
          width="25"
          height="25"
        />
  `,
  },
  {
    name: "YouTube",
    svg: `<img
          src="/youtube-logo.ico"
          alt="YouTube Logo"
          width="25"
          height="25"
        />`,
  },
  {
    name: "Facebook",
    svg: `<svg xmlns="http://w3.org" viewBox="0 0 200 200" width="100%" height="100%">
    <!-- Official Blue Circular Background Base -->
    <circle cx="100" cy="100" r="90" fill="#1877F2" />
    <!-- Monolithic White Offset Shape Geometry -->
    <path d="M118,190 L118,122 L138,122 L142,96 L118,96 L118,82 C118,74 122,68 132,68 L144,68 L144,42 C139,41 129,40 120,40 C98,40 85,52 85,78 L85,96 L65,96 L65,122 L85,122 L85,190 Z" fill="#FFFFFF" />
  </svg>
  `,
  },
];

export const LOADER_EXAMPLES: Record<string, string> = {
  ArcSpinner: `import { ArcSpinner } from "react-logo-loader";

<ArcSpinner
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

  DualSpinner: `import { DualSpinner } from "react-logo-loader";

<DualSpinner
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="blur"
  logo={<MyLogo />}
/>`,

  DualArc: `import { DualArc } from "react-logo-loader";

<DualArc
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

ElasticArc: `import { ElasticArc } from "react-logo-loader";

<ElasticArc
  size={64}
  color="#0d9488"
  speed="normal"
  strokeWidth="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

FadedArc: `import { FadedArc } from "react-logo-loader";

<FadedArc
  size={64}
  color="#0d9488"
  speed="normal"
  strokeWidth="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

ElasticArcOrbit: `import { ElasticArcOrbit } from "react-logo-loader";

<ElasticArcOrbit
  size={64}
  color="#0d9488"
  trackColor="rgba(13,148,136,0.15)"
  speed="normal"
  strokeWidth="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

DualArcOrbit: `import { DualArcOrbit } from "react-logo-loader";

<DualArcOrbit
  size={64}
  color="#0d9488"
  speed="normal"
  strokeWidth="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

HelixOrbit: `import { HelixOrbit } from "react-logo-loader";

<HelixOrbit
  size={64}
  color="#0d9488"
  speed="normal"
  dotsSpeed="fast"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

DotOrbit: `import { DotOrbit } from "react-logo-loader";

<DotOrbit
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

ZigZagOrbit: `import { ZigZagOrbit } from "react-logo-loader";

<ZigZagOrbit
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

SpinTracks: `import { SpinTracks } from "react-logo-loader";

<SpinTracks
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

  CrossArc: `import { CrossArc } from "react-logo-loader";

<CrossArc
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="blur"
  logo={<MyLogo />}
/>`,

  ArcOrbit: `import { ArcOrbit } from "react-logo-loader";

<ArcOrbit
  size={64}
  color="#0d9488"
  trackColor="#e5e7eb"
  speed="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

  RippleRings: `import { RippleRings } from "react-logo-loader";

<RippleRings
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

  DoubleRing: `import { DoubleRing } from "react-logo-loader";

<DoubleRing
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="blur"
  logo={<MyLogo />}
/>`,

  RadarPing: `import { RadarPing } from "react-logo-loader";

<RadarPing
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="bounce"
  logo={<MyLogo />}
/>`,

  PulseRing: `import { PulseRing } from "react-logo-loader";

<PulseRing
  size={64}
  color="#0d9488"
  speed="normal"
  logo={<MyLogo />}
/>`,

  HelixDots: `import { HelixDots } from "react-logo-loader";

<HelixDots
  size={64}
  color="#0d9488"
  speed="normal"
  dotsSpeed="fast"
  logoBehavior="pulse"
  logo={<MyLogo />}
/>`,

  OrbitDots: `import { OrbitDots } from "react-logo-loader";

<OrbitDots
  size={64}
  color="#0d9488"
  speed="normal"
  dotsSpeed="slow"
  logoBehavior="blur"
  logo={<MyLogo />}
/>`,

  SpinLogo: `import { SpinLogo } from "react-logo-loader";

<SpinLogo
  size={64}
  color="#0d9488"
  speed="normal"
  logo={<MyLogo />}
/>`,

  PulseLogo: `import { PulseLogo } from "react-logo-loader";

<PulseLogo
  size={64}
  color="#0d9488"
  speed="normal"
  logo={<MyLogo />}
/>`,

  BounceLoop: `import { BounceLoop } from "react-logo-loader";

<BounceLoop
  size={64}
  color="#0d9488"
  speed="normal"
  logo={<MyLogo />}
/>`,

  BlurPulse: `import { BlurPulse } from "react-logo-loader";

<BlurPulse
  size={64}
  color="#0d9488"
  speed="normal"
  logo={<MyLogo />}
/>`,

  ShimmerScan: `import { ShimmerScan } from "react-logo-loader";

<ShimmerScan
  size={64}
  color="#0d9488"
  shimmerColor="rgba(255,255,255,0.6)"
  speed="normal"
  logo={<MyLogo />}
/>`,

  FloodFill: `import { FloodFill } from "react-logo-loader";

<FloodFill
  size={64}
  color="#0d9488"
  trackColor="rgba(13,148,136,0.15)"
  speed="normal"
  logo={<MyLogo />}
/>`,

  StrokeDraw: `import { StrokeDraw } from "react-logo-loader";

<StrokeDraw
  size={64}
  color="#0d9488"
  speed="normal"
  logoBehavior="blur"
  logo={<MyLogo />}
/>`,

  GlitchWave: `import { GlitchWave } from "react-logo-loader";

<GlitchWave
  size={64}
  color="#0d9488"
  speed="normal"
  logo={<MyLogo />}
/>`,

  FlipCard: `import { FlipCard } from "react-logo-loader";

<FlipCard
  size={64}
  color="#0d9488"
  speed="normal"
  logo={<MyLogo />}
/>`,
};