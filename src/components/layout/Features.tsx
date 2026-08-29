"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Badge } from "../ui/Badge";
import { Reveal } from "../animations/Reveal";

interface FeaturesProps {
  reverse?: boolean;
  badge: string;
  badgeVariant: "primary" | "secondary";
  title: string;
  description: string;
  button: ReactNode;
  image: string;
  imageAlt: string;
}

export function Features(props: FeaturesProps) {
  const {
    reverse = false,
    badge,
    badgeVariant,
    title,
    description,
    button,
    image,
    imageAlt,
  } = props;

  return (
    <div
        style={{maxWidth: "1200px", margin: "0 auto", }}
        className={[
          "flex flex-col-reverse items-center gap-10 md:gap-18 mx-auto max-w-[1200px] px-6",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row",
        ].join(" ")}
    >
      
      <div className="flex flex-1 min-w-0 max-w-[560px] lg:max-w-full flex-col gap-4">
        <Reveal>
        <Badge variant={badgeVariant}>{badge}</Badge>
        </Reveal>

        <Reveal delay={0.3}>
        <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-[-0.03em] leading-tight">
          {title}
        </h3>
        </Reveal>

        <Reveal delay={0.4}>
        <p
          className="text-sm md:text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
        </Reveal>

        <Reveal delay={0.5}>
        <p
          className="text-sm md:text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
        </Reveal>

        <Reveal delay={0.6}>
        <div className="mt-2">{button}</div>
        </Reveal>
      </div>

      <Reveal direction="right" delay={1.9}>
      <div className="flex flex-1 min-w-0 items-center justify-center">
        <Image
          src={image}
          alt={imageAlt}
          width={480}
          height={320}
          sizes="(max-width: 768px) 100vw, 480px"
          className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[480px] rounded-2xl border-[5px] border-black object-cover"
        />
      </div>
      </Reveal>
    </div>
  );
}