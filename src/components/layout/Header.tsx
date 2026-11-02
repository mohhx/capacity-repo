"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_LINKS, PRIMARY_CTA } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { CountrySwitch } from "./CountrySwitch";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Close the drawer when the page changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close the drawer if the window grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <Logo />

          <nav className={styles.nav} aria-label="Main">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.link} ${active ? styles.active : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <CountrySwitch />
            <Button href={PRIMARY_CTA.href} size="sm" className={styles.cta}>
              {PRIMARY_CTA.label}
            </Button>
            <button
              type="button"
              ref={menuButtonRef}
              className={styles.menuButton}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span aria-hidden="true">☰</span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? <MobileMenu onClose={closeMenu} /> : null}
    </>
  );
}