"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";
import styles from "./Accordion.module.css";

export interface AccordionItem {
  id: string;
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Layout: single column, or two columns on desktop (Home FAQ teaser). */
  columns?: 1 | 2;
  className?: string;
}

export function Accordion({ items, columns = 1, className }: AccordionProps) {
  const base = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ul className={`${styles.list} ${columns === 2 ? styles.two : ""} ${className ?? ""}`}>
      {items.map((item) => {
        const open = openId === item.id;
        const buttonId = `${base}-${item.id}-button`;
        const panelId = `${base}-${item.id}-panel`;
        return (
          <li key={item.id} className={`${styles.item} ${open ? styles.open : ""}`}>
            <h3 className={styles.heading}>
              <button
                type="button"
                id={buttonId}
                className={styles.trigger}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.question}</span>
                <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className={styles.panel}>
              {item.answer}
            </div>
          </li>
        );
      })}
    </ul>
  );
}