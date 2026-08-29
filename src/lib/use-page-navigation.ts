"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function usePageNavigation() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigateTo = (href: string) => {
    // 1. Dispatch an event to tell our PageLoader to show up immediately
    window.dispatchEvent(new Event("customNavigationStart"));

    // 2. Wait slightly for the animation overlay to fully mask the viewport
    setTimeout(() => {
      startTransition(() => {
        router.push(href);
      });
    }, 150); // 150ms is instant to the eye, but gives the loader enough time to render
  };

  return { navigateTo, isPending };
}
