import type { ReactNode } from "react";
import styles from "./Banner.module.css";

interface BannerProps {
  tone?: "info" | "success" | "error";
  title?: string;
  children: ReactNode;
}

export function Banner({ tone = "info", title, children }: BannerProps) {
  return (
    <div className={`${styles.banner} ${styles[tone]}`} role={tone === "error" ? "alert" : "status"}>
      {title ? <p className={styles.title}>{title}</p> : null}
      <div className={styles.body}>{children}</div>
    </div>
  );
}