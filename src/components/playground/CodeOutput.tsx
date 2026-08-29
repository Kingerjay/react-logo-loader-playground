"use client";

import { useState } from "react";
import type { LoaderConfig } from "@/types";
import { LOADERS } from "@/constants/loaders";

interface CodeOutputProps {
  config: LoaderConfig;
}

export function CodeOutput({ config }: CodeOutputProps) {
  const [copied, setCopied] = useState(false);
  const loader = LOADERS.find((l) => l.component === config.component);

  const behaviorLine = loader?.supportsLogoBehavior
    ? `\n          logoBehavior="${config.logoBehavior}"`
    : "";

  const scaleLine = config.logoScale !== 0.7
    ? `\n          logoScale={${config.logoScale}}`
    : "";
  
  const strokeLine = config.strokeWidth !== "normal"
    ? `\n          strokeWidth="${config.strokeWidth}"`
    : "";

    const isImgMode = config.svgCode.startsWith("__img__:");
    const fileName = config.logoFileName || config.svgCode.replace("__img__:", "");
    
    const logoCode = isImgMode
      ? `<img src="/${fileName}" alt="logo" width={40} height={40} />`
      : config.svgCode
          .replace(/width="[^"]*"/g, 'width="100%"')
          .replace(/height="[^"]*"/g, 'height="100%"')
          .trim() ||
        `<svg viewBox="0 0 24 24" fill="currentColor">
        {/* paste your svg paths here */}
      </svg>`;
    
      const importLine = isImgMode
      ? `// Save your logo asset to your project directory\n   // Import it here if you are using Next.js\n`
      : "";
    
    const logoComponent = isImgMode
      ? `const MyLogo = () => (
        <img
        src="/${fileName}"
        alt="logo"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    );`
      : `const MyLogo = () => (
      ${logoCode}
    );`;
    
    const code = `   import { ${config.component} } from "react-logo-loader";
    ${importLine}
    ${logoComponent}
    
    export default function App() {
      return (
        <${config.component}
          size={${config.size}}
          color="${config.color}"
          speed="${config.speed}"${behaviorLine}${scaleLine}${strokeLine}
          logo={<MyLogo />}
        />
      );
    }`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="flex flex-col border-t"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b"
        style={{ borderColor: "var(--border)", padding: "1rem 1.25rem" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}
        >
          Generated Code
        </p>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg text-xs font-semibold
                     border cursor-pointer transition-all duration-150"
          style={{
            backgroundColor: copied ? "var(--primary-light)" : "var(--surface-2)",
            borderColor: copied ? "var(--primary)" : "var(--border)",
            color: copied ? "var(--primary)" : "var(--text-secondary)",
            padding: "0.5rem 0.75rem",
          }}
        >
          {copied ? (
            <>
              <svg
                width="12" height="12" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                width="12" height="12" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy Code
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre
        className="text-xs overflow-x-auto leading-relaxed rounded-2xl"
        style={{
          fontFamily: "var(--font-geist-mono)",
          color: "var(--foreground)",
          backgroundColor: "var(--surface-2)",
          margin: "1.25rem",
          padding: "1.25rem",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}