import { Fragment } from "react";
import type { CSSProperties } from "react";
import styles from "./Enter.module.css";

interface PageTitleProps {
  title: string;
  accent: string;
  /** The page's own accent class, so each page keeps its own sizes and colours. */
  accentClassName?: string;
  /** Put a space between the title and the accent line (the Markets heading has none). */
  gap?: boolean;
}

function Words({ text, start }: { text: string; start: number }) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${start}-${i}`}>
          {i > 0 ? " " : null}
          <span className={styles.word}>
            <span className={styles.wordInner} style={{ "--i": start + i } as CSSProperties}>
              {word}
            </span>
          </span>
        </Fragment>
      ))}
    </>
  );
}

/** Goes inside the page's own <h1>. The text stays real text; only the way it appears is animated. */
export function PageTitle({ title, accent, accentClassName, gap = true }: PageTitleProps) {
  const count = title.split(/\s+/).filter(Boolean).length;
  return (
    <>
      <Words text={title} start={0} />
      {gap ? " " : null}
      <span className={accentClassName}>
        <Words text={accent} start={count} />
      </span>
    </>
  );
}
