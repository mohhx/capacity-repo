import type { ElementType, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  as?: ElementType;
  /** "raised" is the slightly lighter surface used for audience panels and the route form. */
  tone?: "default" | "raised";
  padded?: boolean;
  className?: string;
  children: ReactNode;
}

export function Card({ as: Tag = "div", tone = "default", padded = true, className, children }: CardProps) {
  const cls = [styles.card, tone === "raised" ? styles.raised : "", padded ? styles.padded : "", className ?? ""]
    .filter(Boolean)
    .join(" ");
  return <Tag className={cls}>{children}</Tag>;
}