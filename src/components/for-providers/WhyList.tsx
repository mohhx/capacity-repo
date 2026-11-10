import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOR_PROVIDERS } from "@/content/for-providers";
import styles from "./WhyList.module.css";

const svg = { width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", "aria-hidden": true } as const;
const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const ICONS: Record<string, ReactNode> = {
  price: (
    <svg {...svg}>
      <circle cx="13" cy="13" r="10" {...stroke} />
      <path d="M13 3v20M3 13h20" {...stroke} />
    </svg>
  ),
  confirm: (
    <svg {...svg}>
      <circle cx="13" cy="13" r="10" {...stroke} />
      <path d="M8 13.5l3.5 3.5 6.5-7" {...stroke} />
    </svg>
  ),
  held: (
    <svg {...svg}>
      <rect x="5" y="11" width="16" height="12" rx="3" {...stroke} />
      <path d="M8.5 11V8a4.5 4.5 0 019 0v3" {...stroke} />
    </svg>
  ),
};

export function WhyList() {
  const { title, items } = FOR_PROVIDERS.why;
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.id}>
            <Card as="article" className={styles.card}>
              <span className={styles.icon}>{ICONS[item.id]}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
