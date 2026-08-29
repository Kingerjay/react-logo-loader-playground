"use client";

import { useState } from "react";
import { usePageNavigation } from "@/lib/use-page-navigation";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  external?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  external,
  fullWidth,
  disabled,
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const { navigateTo } = usePageNavigation(); // Destructure our seamless navigation helper

  const sizes = {
    sm: { padding: "0.375rem 0.875rem", fontSize: "0.8rem" },
    md: { padding: "0.625rem 1.25rem", fontSize: "0.875rem" },
    lg: { padding: "0.875rem 1.75rem", fontSize: "1rem" },
  };

  const variants = {
    primary: {
      backgroundColor: hovered ? "#0f766e" : "var(--primary)",
      color: "#ffffff",
      border: "none",
    },
    secondary: {
      backgroundColor: hovered ? "#e11d48" : "var(--secondary)",
      color: "#ffffff",
      border: "none",
    },
    ghost: {
      backgroundColor: hovered ? "var(--surface-2)" : "transparent",
      color: "var(--text-secondary)",
      border: "none",
    },
    outline: {
      backgroundColor: hovered ? "var(--surface-2)" : "transparent",
      color: "var(--foreground)",
      border: "1px solid var(--border)",
    },
  };

  const style: React.CSSProperties = {
    ...sizes[size],
    ...variants[variant],
    borderRadius: "10px",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    textDecoration: "none",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.5 : 1,
    whiteSpace: "nowrap" as const,
    letterSpacing: "-0.01em",
    transition:
      "background-color 200ms ease, color 200ms ease, border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease",
    transform: hovered ? "translateY(-2px)" : "translateY(0)",
    boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.12)" : "0 0 0 rgba(0,0,0,0)",
  };

  // Handle internal vs external navigation seamlessly
  const handleLinkClick = (e: React.MouseEvent) => {
    if (disabled) return;

    if (href && !external) {
      e.preventDefault(); // Stop the hard <a> tag reload
      navigateTo(href);   // Run the transition overlay navigation instead!
    } else if (onClick) {
      onClick();
    }
  };

  // If it's an external link (like an outside website), keep using the raw <a> tag
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    );
  }

  // Otherwise, all buttons and internal links run safely as standard buttons
  return (
    <button
      onClick={handleLinkClick}
      disabled={disabled}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}
