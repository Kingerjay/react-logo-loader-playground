"use client";
import { useEffect, useState } from "react";

const WORDS = ["Brand", "Logo"];

export function HeroHeading() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("Brand");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const pause = setInterval(() => {
      const currentWord = WORDS[wordIndex % WORDS.length];
      const nextWord = WORDS[(wordIndex + 1) % WORDS.length];

      setTyping(true);
      let i = currentWord.length;

      // Delete current word
      const delInterval = setInterval(() => {
        setDisplayed(currentWord.slice(0, i));
        i--;
        if (i < 0) {
          clearInterval(delInterval);
          let j = 0;
          // Type next word
          const typeInterval = setInterval(() => {
            setDisplayed(nextWord.slice(0, j));
            j++;
            if (j > nextWord.length) {
              clearInterval(typeInterval);
              setTyping(false);
              setWordIndex((p) => p + 1);
            }
          }, 200);
        }
      }, 200);
    }, 2500);

    return () => clearInterval(pause);
  }, [wordIndex]);

  const isLogo = displayed === "Logo" || (typing && wordIndex % 2 === 1);

  return (
    <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.5rem", maxWidth: "800px", margin: "0 auto 1.5rem", color: "var(--text-secondary)" }}>
      Load with your{" "}
      <span style={{ color: isLogo ? "var(--primary)" : "var(--secondary)" }}>
        {displayed}
        <span
          style={{
            display: "inline-block",
            width: "3px",
            height: "0.85em",
            backgroundColor: "currentColor",
            marginLeft: "2px",
            verticalAlign: "middle",
            animation: "blink 0.7s step-end infinite",
          }}
        />
      </span>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </h1>
  );
}