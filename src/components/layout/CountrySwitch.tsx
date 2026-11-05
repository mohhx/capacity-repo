"use client";

import { useEffect, useRef, useState } from "react";
import { COUNTRIES, type CountryCode } from "@/config/platform";
import { useCountry } from "./CountryProvider";
import styles from "./CountrySwitch.module.css";

export function CountrySwitch({ variant = "code" }: { variant?: "code" | "name" }) {
  const { country, setCountry } = useCountry();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (code: CountryCode) => {
    setCountry(code);
    setOpen(false);
  };

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={`${styles.trigger} ${variant === "name" ? styles.named : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`Country: ${country.name}. Change country`}
        onClick={() => setOpen((v) => !v)}
      >
        {variant === "name" ? country.name : country.code} <span aria-hidden="true">▾</span>
      </button>

      {open ? (
        <ul className={`${styles.list} ${variant === "name" ? styles.listUp : ""}`}>
          {Object.values(COUNTRIES).map((c) => (
            <li key={c.code}>
              <button
                type="button"
                className={styles.option}
                aria-current={c.code === country.code ? "true" : undefined}
                onClick={() => choose(c.code)}
              >
                <span>{c.name}</span>
                <span className={styles.currency}>{c.currency}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}