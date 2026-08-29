"use client";

import { useState } from "react";
import { OrbitDots } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const FAKE_DATA = [
  { id: 1, name: "Arc Spinner", downloads: "12.4k" },
  { id: 2, name: "Helix Dots", downloads: "9.1k" },
  { id: 3, name: "Glitch Wave", downloads: "7.8k" },
];

export function DataFetchExample() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<typeof FAKE_DATA | null>(null);

  const fetch = () => {
    setData(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData(FAKE_DATA);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm">
      <div
        className="w-full rounded-xl border overflow-hidden"
        style={{
          borderColor: "var(--border)",
          minHeight: "160px",
        }}
      >
        {/* Loading state */}
        {loading && (
          <div
            className="flex flex-col items-center justify-center gap-3"
            style={{ minHeight: "160px" }}
          >
            <OrbitDots
              size={48}
              color="#0d9488"
              speed="normal"
              dotsSpeed="fast"
              logoBehavior="blur"
              logo={<MyLogo />}
            />
            <p
              className="text-xs font-semibold"
              style={{ color: "var(--text-secondary)" }}
            >
              Fetching data...
            </p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !data && (
          <div
            className="flex items-center justify-center"
            style={{
              minHeight: "160px",
              color: "var(--text-secondary)",
              fontSize: "0.875rem",
            }}
          >
            Click fetch to load data
          </div>
        )}

        {/* Data rows */}
        {!loading && data && (
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--surface-2)" }}>
                <th
                  className="text-left px-4 py-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Component
                </th>
                <th
                  className="text-right px-4 py-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Downloads
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  className="border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <td className="px-4 py-2.5 font-medium">{row.name}</td>
                  <td
                    className="px-4 py-2.5 text-right font-bold"
                    style={{ color: "var(--primary)" }}
                  >
                    {row.downloads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <button
        onClick={fetch}
        disabled={loading}
        className="px-5 py-2.5 rounded-xl text-sm font-semibold
                   cursor-pointer transition-all duration-150"
        style={{
          backgroundColor: loading ? "var(--surface-2)" : "var(--primary)",
          color: loading ? "var(--text-secondary)" : "#ffffff",
          border: "1px solid var(--border)",
        }}
      >
        {loading ? "Fetching..." : "Fetch Data"}
      </button>
    </div>
  );
}

export const DATA_FETCH_CODE = `import { useState } from "react";
import { OrbitDots } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);

export function DataTable() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const result = await getData();
    setData(result);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <OrbitDots
          size={56}
          color="#0d9488"
          dotsSpeed="fast"
          logoBehavior="blur"
          logo={<MyLogo />}
        />
      </div>
    );
  }

  return <table>{/* render data */}</table>;
}`;