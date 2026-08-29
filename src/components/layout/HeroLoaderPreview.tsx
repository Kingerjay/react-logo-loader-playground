"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArcSpinner, DualSpinner, ArcOrbit,
  OrbitDots, StrokeDraw, SpinLogo,
} from "react-logo-loader";

const DefaultLogo = () => (
  <Image
          src="/react-logo-loader.png"
          alt="React Logo"
          width="20"
          height="20"
        />
);

const HERO_LOADERS = [
  { Component: ArcSpinner,   color: "#0d9488", props: { logoBehavior: "blur"   as const } },
  { Component: DualSpinner,  color: "#f43f5e", props: { logoBehavior: "pulse"  as const } },
  { Component: ArcOrbit,  color: "#0d9488", props: { logoBehavior: "none" as const } },
  { Component: OrbitDots,    color: "#f43f5e", props: { logoBehavior: "blur"   as const, dotsSpeed: "fast" as const } },
  { Component: StrokeDraw,   color: "#0d9488", props: { logoBehavior: "pulse"  as const } },
  { Component: SpinLogo,   color: "#f43f5e", props: {} },
];

export function HeroLoaderPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_LOADERS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
        padding: "2rem",
      }}
    >
      {HERO_LOADERS.map(({ Component, color, props }, index) => (
        <div
          key={index}
          style={{
            opacity: index === activeIndex ? 1 : 0.3,
            transform: index === activeIndex ? "scale(1.15)" : "scale(1)",
            transition: "all 0.4s ease",
          }}
        >
          <Component
            size={56}
            color={color}
            speed="normal"
            logo={<DefaultLogo />}
            {...props}
          />
        </div>
      ))}
    </div>
  );
}