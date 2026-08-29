"use client";

import { useState } from "react";
import { ArcSpinner } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="55%" height="55%">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export function PageLoadingExample() {
  const [loading, setLoading] = useState(false);

  const simulate = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm">
      {/* Simulated page overlay */}
      <div
        className="relative w-full rounded-xl overflow-hidden border"
        style={{
          height: "200px",
          borderColor: "var(--border)",
          backgroundColor: "var(--surface-2)",
        }}
      >
        {/* Fake page content */}
        <div className="p-4 flex flex-col gap-2">
          {[80, 60, 70, 40].map((w, i) => (
            <div
              key={i}
              className="h-3 rounded-full"
              style={{
                width: `${w}%`,
                backgroundColor: "var(--border)",
              }}
            />
          ))}
        </div>

        {/* Loading overlay */}
        {loading && (
          <div
            className="absolute inset-0 flex flex-col items-center
                       justify-center gap-3 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          >
            <ArcSpinner
              size={56}
              color="#0d9488"
              speed="normal"
              logoBehavior="blur"
              logo={<MyLogo />}
            />
            <p className="text-white text-xs font-semibold">
              Loading page...
            </p>
          </div>
        )}
      </div>

      <button
        onClick={simulate}
        disabled={loading}
        className="px-5 py-2.5 rounded-xl text-sm font-semibold
                   cursor-pointer border transition-all duration-150"
        style={{
          backgroundColor: loading ? "var(--surface-2)" : "var(--primary)",
          color: loading ? "var(--text-secondary)" : "#ffffff",
          borderColor: loading ? "var(--border)" : "var(--primary)",
        }}
      >
        {loading ? "Loading..." : "Simulate Page Load"}
      </button>
    </div>
  );
}

export const PAGE_LOADING_CODE = `import { useState } from "react";
import { ArcSpinner } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);

export function PageLoader() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex flex-col items-center
                        justify-center bg-black/60 backdrop-blur-sm z-50">
          <ArcSpinner
            size={64}
            color="#0d9488"
            speed="normal"
            logoBehavior="blur"
            logo={<MyLogo />}
          />
          <p className="text-white text-sm mt-3">Loading...</p>
        </div>
      )}
    </>
  );
}`;