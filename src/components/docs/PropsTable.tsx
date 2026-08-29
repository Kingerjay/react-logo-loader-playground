interface Prop {
    name: string;
    type: string;
    default?: string;
    required?: boolean;
    description: string;
  }
  
  interface PropsTableProps {
    props: Prop[];
  }
  
  export function PropsTable({ props }: PropsTableProps) {
    return (
      <div
        className="w-full overflow-x-auto rounded-xl border"
        style={{ borderColor: "var(--border)" }}
      >
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: "var(--surface-2)" }}>
              {["Prop", "Type", "Default", "Description"].map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest"
                  style={{
                    color: "var(--text-secondary)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.map((prop, i) => (
              <tr
                key={prop.name}
                style={{
                  backgroundColor: i % 2 === 0 ? "var(--background)" : "var(--surface)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {/* Prop name */}
                <td className="px-4 py-3 font-mono text-xs font-bold"
                  style={{ color: "var(--primary)" }}>
                  {prop.name}
                  {prop.required && (
                    <span className="ml-1 text-[10px]"
                      style={{ color: "var(--secondary)" }}>
                      *
                    </span>
                  )}
                </td>
  
                {/* Type */}
                <td className="px-4 py-3">
                  <code
                    className="text-xs px-2 py-0.5 rounded-md font-mono"
                    style={{
                      backgroundColor: "var(--surface-2)",
                      color: "var(--foreground)",
                    }}
                  >
                    {prop.type}
                  </code>
                </td>
  
                {/* Default */}
                <td className="px-4 py-3">
                  {prop.default ? (
                    <code
                      className="text-xs px-2 py-0.5 rounded-md font-mono"
                      style={{
                        backgroundColor: "var(--surface-2)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {prop.default}
                    </code>
                  ) : (
                    <span style={{ color: "var(--text-secondary)" }}>—</span>
                  )}
                </td>
  
                {/* Description */}
                <td
                  className="px-4 py-3 text-xs leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }