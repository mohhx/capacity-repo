"use client";

import { useCallback } from "react";
import type { ReactNode } from "react";
import styles from "./Reveal.module.css";

/**
 * Fades a block up once, the first time it scrolls into view.
 * Content stays visible unless the block starts below the fold, so nothing is hidden if JavaScript fails,
 * for blocks already in view at load, or for people who prefer reduced motion (the CSS also guards this).
 */
export function Reveal({ children }: { children: ReactNode }) {
  const ref = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    delete node.dataset.reveal;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    node.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          node.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.reveal}>
      {children}
    </div>
  );
}
