"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArcOrbit, DualSpinner, SpinLogo, PulseLogo,
  ArcSpinner, DualArc, RippleRings, DoubleRing,
} from "react-logo-loader";

interface LogoItem {
  id: number;
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  opacity: number;
  rotation: number;
  svg: string;
  name: string;
  color: string;
  loader: string;
}

const LOGOS = [
  {
    name: "Facebook",
    color: "#1877F2",
    loader: "ArcOrbit",
    svg: `<svg xmlns="http://w3.org" viewBox="0 0 200 200" width="100%" height="100%">
    <!-- Official Blue Circular Background Base -->
    <circle cx="100" cy="100" r="90" fill="#1877F2" />
    <!-- Monolithic White Offset Shape Geometry -->
    <path d="M118,190 L118,122 L138,122 L142,96 L118,96 L118,82 C118,74 122,68 132,68 L144,68 L144,42 C139,41 129,40 120,40 C98,40 85,52 85,78 L85,96 L65,96 L65,122 L85,122 L85,190 Z" fill="#FFFFFF" />
  </svg>`,
  },
  {
    name: "Microsoft",
    loader: "SpinLogo",
    svg: `<svg xmlns="http://w3.org" viewBox="0 0 200 200" width="100%" height="100%">
    <!-- Top Left Orange-Red Square -->
    <rect x="15" y="15" width="80" height="80" fill="#F25022" />
    <!-- Top Right Green Square -->
    <rect x="105" y="15" width="80" height="80" fill="#7FBA00" />
    <!-- Bottom Left Blue Square -->
    <rect x="15" y="105" width="80" height="80" fill="#00A4EF" />
    <!-- Bottom Right Yellow Square -->
    <rect x="105" y="105" width="80" height="80" fill="#FFB900" />
  </svg>`,
  },
  {
    name: "Mastercard",
    color: "#FF5F00",
    loader: "ArcSpinner",
    svg: `<svg xmlns="http://w3.org" viewBox="0 0 200 200" width="100%" height="100%">
    <!-- Left Red Circle -->
    <circle cx="73" cy="100" r="55" fill="#EB001B" />
    <!-- Right Yellow Circle -->
    <circle cx="127" cy="100" r="55" fill="#F79E1B" />
    <!-- Overlapping Translucent Orange Segment -->
    <path d="M100,51.2 A55,55 0 0,0 73,100 A55,55 0 0,0 100,148.8 A55,55 0 0,0 127,100 A55,55 0 0,0 100,51.2 Z" fill="#FF5F00" />
  </svg>`,
  },
  {
    name: "YouTube",
    loader: "PulseLogo",
    svg: `<img
    src="/youtube-logo.ico"
    alt="YouTube Logo"
    width="25"
    height="25"
  />`,
  },
  {
    name: "Spotify",
    color: "#1DB954",
    loader: "DualArc",
    svg: `<svg viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
  },
  {
    name: "Instagram",
    color: "#E1306C",
    loader: "DualSpinner",
    svg: `<img
    src="/instagram-logo.png"
    alt="Instagram Logo"
    width="25"
    height="25"
  />`,
  },
  {
    name: "Netflix",
    color: "#E50914",
    loader: "RippleRings",
    svg: `<img
    src="/netflix-logo.png"
    alt="Netflix Logo"
    width="20"
    height="20"
  />`,
  },
  {
    name: "TikTok",
    color: "#69C9D9",
    loader: "DoubleRing",
    svg: `<img
    src="/tiktok-logo.png"
    alt="Tiktok Logo"
    width="20"
    height="20"
  />`,
  },
];

const LOADER_MAP: Record<string, React.FC<any>> = {
  ArcOrbit, DualSpinner, SpinLogo, PulseLogo,
  ArcSpinner, DualArc, RippleRings, DoubleRing,
};

const POSITIONS = [
  { x: 5,  y: 25, rotation: -15 },
  { x: 8,  y: 70, rotation:  10 },
  { x: 18,  y: 92, rotation:  -8 },
  { x: 88, y: 25, rotation:  20 },
  { x: 92, y: 65, rotation:  -5 },
  { x: 85, y: 90, rotation:  12 },
  { x: 15, y: 48, rotation: -20 },
  { x: 80, y: 50, rotation:   8 },
];

const SIZES = [40, 36, 44, 38, 42, 36, 40, 38];

export function ScatteredLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -999, y: -999 });

  const [positions, setPositions] = useState(() =>
    POSITIONS.map((p) => ({ x: p.x, y: p.y }))
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 };
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      setPositions((prev) =>
        prev.map((pos, i) => {
          const origin = POSITIONS[i]!;
          const dx = pos.x - mouseRef.current.x;
          const dy = pos.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 15;
          const repelStrength = 10;

          let targetX = origin.x;
          let targetY = origin.y;

          if (dist < repelRadius && dist > 0) {
            const force = (repelRadius - dist) / repelRadius;
            targetX = origin.x + (dx / dist) * repelStrength * force;
            targetY = origin.y + (dy / dist) * repelStrength * force;
          }

          const lerpSpeed = 0.08;
          return {
            x: pos.x + (targetX - pos.x) * lerpSpeed,
            y: pos.y + (targetY - pos.y) * lerpSpeed,
          };
        })
      );

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ pointerEvents: "all", zIndex: 0 }}
    >
      {LOGOS.map((logo, i) => {
        const LoaderComponent = LOADER_MAP[logo.loader];
        const pos = positions[i] ?? { x: 0, y: 0 };
        const origin = POSITIONS[i]!;
        const size = SIZES[i] ?? 40;

        if (!LoaderComponent) return null;

        const LogoEl = (
          <span
            style={{
              display: "flex",
              width: "55%",
              height: "55%",
              alignItems: "center",
              justifyContent: "center",
              color: logo.color,
            }}
            dangerouslySetInnerHTML={{ __html: logo.svg }}
          />
        );

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: `translate(-50%, -50%) rotate(${origin.rotation}deg)`,
              opacity: 0.45,
              willChange: "left, top",
              transition: "opacity 0.3s ease",
              pointerEvents: "none",
            }}
          >
            <LoaderComponent
              size={size}
              color={logo.color}
              speed="normal"
              logoBehavior="pulse"
              logo={LogoEl}
              trackColor={`${logo.color}22`}
            />
          </div>
        );
      })}
    </div>
  );
}