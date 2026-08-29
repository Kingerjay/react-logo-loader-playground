import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Features } from "@/components/layout/Features";
import Image from "next/image";
import { HeroHeading } from "@/components/layout/HeroHeading";
import { ScatteredLogos } from "@/components/layout/ScatteredLogos";
import { Reveal } from "@/components/animations/Reveal";
import { Footer } from "@/components/layout/Footer";


const COMPONENT_FAMILIES = [
  { name: "Arc Family", count: 5, color: "var(--primary)", description: "Spinning arc animations" },
  { name: "Ring Family", count: 4, color: "var(--secondary)", description: "Expanding ring effects" },
  { name: "Dot Family", count: 2, color: "var(--primary)", description: "Orbiting dot patterns" },
  { name: "Logo Only", count: 4, color: "var(--secondary)", description: "Pure logo animations" },
  { name: "Special Effects", count: 5, color: "var(--primary)", description: "Unique creative styles" },
];

export default function HomePage() {
  return (
    <div>
      {/* ----- Hero -------------*/}
      <section
        style={{
          padding: "3rem 1.5rem 4rem",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >

        {/* Headline */}
        <HeroHeading />

        <ScatteredLogos />

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "var(--foreground)",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
          }}
        >
          A customizable React loader library with 20+ animated styles.
          Pass your SVG logo and go live in minutes.
        </p>
          
        {/* CTAs */}
        <div className="flex flex-col gap-2 align-center justify-center flex-wrap"style={{ maxWidth: "400px", margin: "2rem auto" }}
        >
          <Button href="/playground" size="lg" variant="primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Try the Playground
          </Button>
          <Button href="https://www.npmjs.com/package/react-logo-loader" size="lg" variant="outline" external>
            View on npm
          </Button>
        </div>

        {/* Install command */}
        <div style={{ maxWidth: "300px", margin: "2rem auto" }}>
          <CodeBlock code="npm install react-logo-loader" language="bash" />
        </div>

       
      </section>

      {/* ------- Features ------------ */}

  <section 
  style={{
    borderColor: "var(--border)",
    width: "100%",
    margin: "0 auto",   
  }}
  >
    <div
      className=" w-full px-6 py-20"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--surface-2)",       
      }}
    >
      <Features
        badge="Styles"
        badgeVariant="primary"
        title="20+ Animation Styles"
        description="From subtle pulse rings to cyberpunk glitch waves, every loading state has a perfect match. Choose from arc spinners, ripple rings, helix dots, stroke draws and more."
        image="/multiple-loading-styles.jpg"
        imageAlt="Multiple loading styles"
        button={
          <Button href="/playground" variant="primary" size="md">
            Browse all styles →
          </Button>
        }
      />
    </div>

    <div className="w-full px-6 py-20"
      >
      <Features
        reverse
        badge="Fast"
        badgeVariant="primary"
        title="Easy to Install. Lightweight."
        description="Zero runtime dependencies. All animations are pure CSS, no heavy animation libraries needed. Ships at just 30KB and works with any React or Next.js project out of the box."
        image="/easy-to-install-lightweight.jpg"
        imageAlt="Easy to install and lightweight"
        button={
          <Button
            href="https://www.npmjs.com/package/react-logo-loader"
            variant="primary"
            size="md"
            external
          >
            View on npm →
          </Button>
        }
      />
    </div>

    <div className="w-full px-6 py-20"
      style={{
        backgroundColor: "var(--surface-2)",
      }}
      >
    <Features
      badge="Types"
      badgeVariant="primary"
      title="TypeScript Ready. React & Next.js Compatible."
      description="Full type definitions included. Autocomplete for every prop in VS Code. Works seamlessly with React 18+, Next.js App Router, and supports SSR with no hydration issues."
      image="/typescript-ready-react-nextjs.png"
      imageAlt="TypeScript ready and React Next.js compatible"
      button={
        <Button href="/docs" variant="primary" size="md">
          Read the docs →
        </Button>
      }
    />
    </div>
</section>

{/* ------- Component Families ------------ */}
<section className="py-16 md:py-24 px-4 sm:px-6 max-w-[1200px] mx-auto w-full">
  {/* Cards + Laptop layout */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 w-full">

    {/* Left 2 cards */}
    <Reveal direction="left" delay={0.1}>
      <div className="flex flex-col gap-4 w-full min-w-[280px] max-w-[360px] sm:w-[280px] md:w-[240px] lg:w-[360px] items-center">
        {COMPONENT_FAMILIES.slice(0, 2).map((family) => (
          <div
            key={family.name}
            className="w-full min-h-[110px] rounded-2xl p-5 text-center border flex flex-col justify-center"
            style={{
              backgroundColor: "var(--surface-2)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="text-2xl font-extrabold tracking-[-0.04em]"
              style={{ color: "var(--secondary)" }}
            >
              {family.count}
            </div>
            <div className="font-bold text-sm mt-1">{family.name}</div>
            <div
              className="text-xs mt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {family.description}
            </div>
          </div>
        ))}
      </div>
    </Reveal>

    <div className="md:hidden flex flex-col items-center my-2 h-12">
      <div 
        className="w-[1px] h-full border-l-2 border-dashed"
        style={{ borderColor: "var(--border)" }}
      />
    </div>

    <div className="hidden md:block">
      <Reveal direction="up" delay={0.4}>
        <div className="relative flex items-center justify-center mx-2 md:w-[180px] lg:w-[220px]">
          <Image
            src="/laptop-img.png"
            alt="react-logo-loader on laptop"
            className="w-full h-auto object-contain"
            width={400}
            height={300}
            priority
          />
        </div>
      </Reveal>
    </div>


    {/* Right 2 cards */}
    <Reveal direction="right" delay={0.2}>
      {/* Layout wrapper moved entirely inside Reveal */}
      <div className="flex flex-col gap-4 w-full min-w-[280px] max-w-[360px] sm:w-[280px] md:w-[240px] lg:w-[360px] items-center">
        {COMPONENT_FAMILIES.slice(2, 4).map((family) => (
          <div
            key={family.name}
            className="w-full min-h-[110px] rounded-2xl p-5 text-center border flex flex-col justify-center"
            style={{
              backgroundColor: "var(--surface-2)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="text-2xl font-extrabold tracking-[-0.04em]"
              style={{ color: "var(--secondary)" }}
            >
              {family.count}
            </div>
            <div className="font-bold text-sm mt-1">{family.name}</div>
            <div
              className="text-xs mt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {family.description}
            </div>
          </div>
        ))}
      </div>
    </Reveal>

  </div>


  {/* Button */}
  <Reveal direction="up" delay={0.6}>
    <div className="text-center pt-8">
      <Button href="/playground" variant="primary" size="lg">
        Browse all 20+ components →
      </Button>
    </div>
  </Reveal>
</section>

{/* Code Example and Installation */}
    <section
    style={{
    padding: "5rem 1.5rem",
    backgroundColor: "var(--surface)",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
  }}
>
  <div style={{ maxWidth: "720px", margin: "0 auto" }}>

    <Reveal direction="up">
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <Badge variant="primary">Quick Start</Badge>

        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginTop: "1rem",
          }}
        >
          Up and running in 60 seconds
        </h2>
      </div>
    </Reveal>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >

      <Reveal direction="up" delay={0.15} distance={40}>
        <div>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              marginBottom: "0.5rem",
              fontWeight: 600,
            }}
          >
            1. Install
          </p>

          <CodeBlock
            code="npm install react-logo-loader"
            language="bash"
          />
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.3} distance={70}>
        <div>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              marginBottom: "0.5rem",
              fontWeight: 600,
            }}
          >
            2. Import and use
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
                logoBehavior="blur"
                logo={<MyLogo />}
              />
            );
          }`}
          />
        </div>
      </Reveal>

    </div>

  </div>
      </section>

      {/* ------- CTA Banner --------------- */}
<section
  style={{
    padding: "5rem 1.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  }}
>
  <div
    style={{
      background:
        "linear-gradient(135deg, rgba(13,148,136,0.08), rgba(244,63,94,0.08))",
      border: "1px solid var(--border)",
      borderRadius: "24px",
      padding: "4rem 2rem",
    }}
  >
    <Reveal direction="up">
      <h2
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          marginBottom: "1rem",
        }}
      >
        Ready to load with your brand?
      </h2>
    </Reveal>

    <Reveal direction="up" delay={0.1}>
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "1rem",
          marginBottom: "2rem",
          maxWidth: "480px",
          margin: "0 auto 2rem",
        }}
      >
        Try the interactive playground and find the perfect loader for your
        project.
      </p>
    </Reveal>

    <Reveal direction="up" delay={0.2}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        <Button href="/playground" size="lg" variant="primary">
          Open Playground
        </Button>

        <Button href="/docs" size="lg" variant="outline">
          Read the Docs
        </Button>
      </div>
    </Reveal>
  </div>
</section>

<Footer />
    </div>
  );
}