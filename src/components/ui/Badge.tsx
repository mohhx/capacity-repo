import type { ReactNode } from "react";
import styles from "./Badge.module.css";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  const classes = className ? `${styles.badge} ${className}` : styles.badge;
  return <span className={classes}>{children}</span>;
}
