/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { ElasticArc, FadedArc } from "react-logo-loader"; 

const emptySubscribe = () => () => {};

export function PageLoader() {
  const pathname = usePathname();
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);

  // 1. Core Loader Timer Lifecycle Manager
  useEffect(() => {
    setVisible(true);
    setFading(false);

    const fadeTimer = setTimeout(() => setFading(true), 2000);
    const hideTimer = setTimeout(() => setVisible(false), 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  // 2. Immediate Button Interceptor Listener
  useEffect(() => {
    const handleTrigger = () => {
      setVisible(true);
      setFading(false);
    };

    window.addEventListener("customNavigationStart", handleTrigger);
    return () => window.removeEventListener("customNavigationStart", handleTrigger);
  }, []);

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient || !visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        backgroundColor: "var(--background, #0a0a0a)",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.4s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      
      <FadedArc
        size={80}
        color="#0d9488"
        // trackColor="rgba(13,148,136,0.15)"
        speed="normal"
        logoBehavior="pulse"
        logoScale={0.75}
        strokeWidth="thick"
        logo={
          <img
            src="/react-logo-loader.png"
            alt="react-logo-loader"
            style={{ 
              width: "75%", 
              height: "75%", 
              objectFit: "contain"
            }}
          />
        }
      />
    </div>
  );
}
