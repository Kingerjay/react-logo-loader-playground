"use client";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  distance?: number;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
    distance = 50,
}: RevealProps) {

  const initial = {
    opacity: 0,
    x:
      direction === "left"
        ? -distance
        : direction === "right"
        ? distance
        : 0,
    y:
      direction === "up"
        ? distance
        : direction === "down"
        ? -distance
        : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}