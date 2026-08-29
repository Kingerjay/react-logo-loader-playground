import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { ComponentDoc } from "@/components/docs/ComponentDoc";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Badge } from "@/components/ui/Badge";
import { LOADERS, LOADER_EXAMPLES } from "@/constants/loaders";
import { Footer } from "@/components/layout/Footer";

const EXTRA_PROPS: Record<string, any[]> = {
  ArcOrbit: [
    {
      name: "trackColor",
      type: "string",
      default: '"#e5e7eb"',
      description: "Color of the static background track ring",
    },
  ],
  ElasticArcOrbit: [
    {
      name: "trackColor",
      type: "string",
      default: '"#e5e7eb"',
      description: "Color of the static background track ring",
    },
  ],
  DualArcOrbit: [
    {
      name: "trackColor",
      type: "string",
      default: '"#e5e7eb"',
      description: "Color of the static background track ring",
    },
  ],
};

export default function DocsPage() {
  return (
    <div>
    <div className="flex min-h-screen">

      {/* Sidebar — sticky on desktop */}
      <aside
        className="hidden lg:flex flex-col w-[240px] flex-none border-r
                   sticky top-[64px] h-[calc(100vh-64px)] overflow-y-auto"
        style={{ borderColor: "var(--border)" }}
      >
        <DocsSidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 px-6 lg:px-12 pb-20"
        style={{ maxWidth: "860px" }}>

        {/* Page header */}
        <div className="pt-12 pb-8 border-b"
          style={{ borderColor: "var(--border)" }}>
          <Badge variant="primary">Documentation</Badge>
          <h1 className="text-4xl font-extrabold tracking-[-0.04em] mt-4 mb-3">
            react-logo-loader
          </h1>
          <p className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}>
            A customizable React loading spinner library with 20 animated styles.
            Pass your SVG logo and go live in minutes.
          </p>
        </div>

        {/* Installation */}
        <div id="installation" className="flex flex-col gap-4 pt-10 pb-12 border-b"
          style={{ borderColor: "var(--border)" }}>
          <h2 className="text-2xl font-extrabold tracking-[-0.03em]">
            Installation
          </h2>
          <CodeBlock code="npm install react-logo-loader" language="bash" />
          <CodeBlock code="yarn add react-logo-loader" language="bash" />
          <CodeBlock code="pnpm add react-logo-loader" language="bash" />
        </div>

        {/* Quick Start */}
        <div id="quick-start" className="flex flex-col gap-4 pt-10 pb-12 border-b"
          style={{ borderColor: "var(--border)" }}>
          <h2 className="text-2xl font-extrabold tracking-[-0.03em]">
            Quick Start
          </h2>
          <p className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}>
            Import any component, pass your SVG as the logo prop, and customize
            with size, color, speed and logoBehavior.
          </p>
          <CodeBlock
            language="tsx"
            code={`import { ArcSpinner } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);

export default function App() {
  return (
    <ArcSpinner
      size={64}
      color="#0d9488"
      speed="normal"
      logoBehavior="pulse"
      logo={<MyLogo />}
    />
  );
}`}
          />
        </div>

        {/* Base Props */}
        <div id="base-props" className="flex flex-col gap-4 pt-10 pb-12 border-b"
          style={{ borderColor: "var(--border)" }}>
          <h2 className="text-2xl font-extrabold tracking-[-0.03em]">
            Base Props
          </h2>
          <p className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}>
            Every component accepts these base props. Some components extend
            these with additional props documented in their individual section.
          </p>

          <div className="w-full overflow-x-auto rounded-xl border"
            style={{ borderColor: "var(--border)" }}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "var(--surface-2)" }}>
                  {["Prop", "Type", "Default", "Description"].map((h) => (
                    <th key={h}
                      className="text-left px-4 py-3 text-xs font-bold
                                 uppercase tracking-widest"
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
                {[
                  { name: "size", type: "number | string", default: "48", description: "Width and height. Accepts number (px) or CSS string e.g. '4rem'" },
                  { name: "color", type: "string", default: '"#6366f1"', description: "Primary animation color" },
                  { name: "speed", type: '"slow" | "normal" | "fast"', default: '"normal"', description: "Animation speed preset" },
                  { name: "speedMultiplier", type: "number", default: "—", description: "Fine-grained multiplier — overrides speed. 0.5 = half, 2 = double" },
                  { name: "logo", type: "ReactNode", default: "—", description: "Your SVG logo as a React element" },
                  { name: "ariaLabel", type: "string", default: '"Loading"', description: "Screen reader label" },
                  { name: "className", type: "string", default: '""', description: "Additional CSS class on the wrapper" },
                  { name: "logoBehavior", type: '"pulse" | "blur" | "bounce" | "none"', default: '"pulse"', description: "Logo animation — available on select components" },
                  { name: "dotsSpeed", type: '"slow" | "normal" | "fast"', default: '"normal"', description: "Independent dot speed — available on HelixDots and OrbitDots" },
                  { name: "logoScale", type: "number", default: "0.7", description: "Logo size as a fraction of the size prop. e.g. 0.8 = 80%" },
                  { name: "strokeWidth", type: '"thin" | "normal" | "thick" | "bold"', default: '"normal"', description: "Thickness of arcs and track rings" },
                ].map((row, i) => (
                  <tr key={row.name}
                    style={{
                      backgroundColor: i % 2 === 0
                        ? "var(--background)"
                        : "var(--surface)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <td className="px-4 py-3 font-mono text-xs font-bold"
                      style={{ color: "var(--primary)" }}>
                      {row.name}
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-xs px-2 py-0.5 rounded-md font-mono"
                        style={{
                          backgroundColor: "var(--surface-2)",
                          color: "var(--foreground)",
                        }}>
                        {row.type}
                      </code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-xs px-2 py-0.5 rounded-md font-mono"
                        style={{
                          backgroundColor: "var(--surface-2)",
                          color: "var(--text-secondary)",
                        }}>
                        {row.default}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-xs leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}>
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* All 20 components */}
        {LOADERS.map((loader) => (
          <ComponentDoc
            key={loader.component}
            id={loader.component}
            name={loader.name}
            description={loader.description}
            family={loader.family}
            supportsLogoBehavior={loader.supportsLogoBehavior}
            supportsDotsSpeed={loader.supportsDotsSpeed}
            extraProps={EXTRA_PROPS[loader.component]}
            exampleCode={LOADER_EXAMPLES[loader.component] ?? ""}
          />
        ))}
      </main>
    </div>
    <Footer />
    </div>
  );
}