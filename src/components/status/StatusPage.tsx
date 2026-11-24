import type { ReactNode } from "react";
import { PageTitle } from "@/components/ui/PageTitle";
import enter from "@/components/ui/Enter.module.css";
import styles from "./StatusPage.module.css";

interface StatusPageProps {
  /** What sits inside the circle: the text "404", or an icon. */
  mark: ReactNode;
  /** Circle border: "muted" for 404, "mint" for the error page. */
  tone?: "muted" | "mint";
  title: string;
  text: string;
  /** Optional block under the text (the error page's contact card). */
  extra?: ReactNode;
  /** Buttons and links. */
  actions: ReactNode;
  /** Keep the actions in a column on every size (the error page). */
  stacked?: boolean;
}

/** Shared layout for the 404 and error pages. The header and footer come from the root layout. */
export function StatusPage({ mark, tone = "muted", title, text, extra, actions, stacked = false }: StatusPageProps) {
  return (
    <main className={`container ${styles.page}`}>
      <div className={`${styles.circle} ${tone === "mint" ? styles.mint : ""}`} aria-hidden="true">
        {mark}
      </div>
      <h1 className={styles.title}>
        <PageTitle title={title} />
      </h1>
      <p className={`${styles.text} ${enter.leadIn}`}>{text}</p>
      {extra}
      <div className={`${styles.actions} ${stacked ? styles.stacked : ""} ${enter.actionsIn}`}>{actions}</div>
    </main>
  );
}
