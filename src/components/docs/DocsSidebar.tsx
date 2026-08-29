"use client";

import { useEffect, useState } from "react";
import { LOADERS, LOADER_FAMILIES } from "@/constants/loaders";

const FAMILY_COLORS: Record<string, string> = {
  arc: "var(--primary)",
  ring: "var(--secondary)",
  dot: "var(--primary)",
  logo: "var(--secondary)",
  special: "var(--primary)",
};

export function DocsSidebar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    LOADERS.forEach((loader) => {
      const el = document.getElementById(loader.component);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const grouped = Object.entries(LOADER_FAMILIES).map(([key, label]) => ({
    key,
    label,
    loaders: LOADERS.filter((l) => l.family === key),
  }));

  return (
    <nav className="flex flex-col gap-6 p-4">

      {/* Getting started */}
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: "var(--text-secondary)" }}>
          Getting Started
        </p>
        {["Installation", "Quick Start", "Base Props"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-sm px-3 py-1.5 rounded-lg transition-all duration-150"
            style={{ color: "var(--text-secondary)", textDecoration: "none" }}
          >
            {item}
          </a>
        ))}
      </div>

      <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

      {/* Components by family */}
      {grouped.map(({ key, label, loaders }) => (
        <div key={key} className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-2 h-2 rounded-full flex-none"
              style={{ backgroundColor: FAMILY_COLORS[key] }}
            />
            <p className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--text-secondary)" }}>
              {label}
            </p>
          </div>
          {loaders.map((loader) => (
            <a
              key={loader.component}
              href={`#${loader.component}`}
              className="text-sm px-3 py-1.5 rounded-lg transition-all duration-150"
              style={{
                color: active === loader.component
                  ? "var(--primary)"
                  : "var(--text-secondary)",
                backgroundColor: active === loader.component
                  ? "var(--primary-light)"
                  : "transparent",
                textDecoration: "none",
                fontWeight: active === loader.component ? 600 : 400,
              }}
            >
              {loader.name}
            </a>
          ))}
        </div>
      ))}
    </nav>
  );
}