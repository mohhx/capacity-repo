"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { MENU_LINKS, PRIMARY_CTA, SECONDARY_CTA, SITE } from "@/content/site";
import { Button } from "@/components/ui/Button";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  onClose: () => void;
}

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = (): HTMLElement[] =>
      panelRef.current
        ? Array.from(panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
        : [];

    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const els = focusables();
      if (els.length === 0) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      <div
        className={styles.panel}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${SITE.name} menu`}
      >
        <div className={styles.top}>
          <span className={styles.title}>Menu</span>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close menu">
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className={styles.list}>
            {MENU_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.link} ${active ? styles.active : ""}`}
                    aria-current={active ? "page" : undefined}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.ctas}>
          <Button href={PRIMARY_CTA.href} fullWidth onClick={onClose}>
            {PRIMARY_CTA.label}
          </Button>
          <Button href={SECONDARY_CTA.href} variant="secondary" fullWidth onClick={onClose}>
            {SECONDARY_CTA.label}
          </Button>
        </div>
      </div>
    </div>
  );
}