interface BadgeProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "neutral";
  }
  
  export function Badge({ children, variant = "neutral" }: BadgeProps) {
    const variants = {
      primary: {
        backgroundColor: "var(--primary-light)",
        color: "var(--primary)",
        border: "1px solid rgba(13,148,136,0.2)",
        width: "fit-content",
      },
      secondary: {
        backgroundColor: "var(--secondary-light)",
        color: "var(--secondary)",
        border: "1px solid rgba(244,63,94,0.2)",
        width: "fit-content",
      },
      neutral: {
        backgroundColor: "var(--surface-2)",
        color: "var(--text-secondary)",
        border: "1px solid var(--border)",
        width: "fit-content",
      },
    };
  
    return (
      <span
        style={{
          ...variants[variant],
          padding: "0.25rem 0.75rem",
          borderRadius: "999px",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.02em",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
        }}
      >
        {children}
      </span>
    );
  }