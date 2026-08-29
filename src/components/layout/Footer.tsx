"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  const Footer_Links = [
    { href: "/playground", label: "Playground" },
    { href: "/docs", label: "Docs" },
    { href: "/examples", label: "Examples" },
    {
      href: "https://www.npmjs.com/package/react-logo-loader",
      label: "npm",
      external: true,
    },
    {
      href: "https://github.com/kingerjay/react-logo-loader",
      label: "GitHub",
      external: true,
    },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--surface-2)",
      }}
      className="py-8 px-6 w-full"
    >
      <div
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left w-full"
      >
        {/* Left — branding */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "6px",
              background: "linear-gradient(135deg, #0d9488, #f43f5e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="flex-none"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            React-Logo-Loader — MIT License
          </span>
        </div>

        {/* Center — Links Wrap Area */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 max-w-md px-2">
          {Footer_Links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm no-underline hover:opacity-80 transition-opacity"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm no-underline hover:opacity-80 transition-opacity"
                style={{
                  color: pathname === link.href ? "var(--primary)" : "var(--text-secondary)",
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Right — credit */}
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          Built by{" "}
          <a
            href="https://github.com/kingerjay"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Kingerjay
          </a>
        </p>
      </div>
    </footer>
  );
}
