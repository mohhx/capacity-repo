"use client";

import { useRef } from "react";
import type { KeyboardEvent } from "react";
import type { Role } from "@/content/how-it-works";
import styles from "./RoleTabs.module.css";

interface RoleTabsProps {
  roles: readonly { id: Role; label: string }[];
  value: Role;
  onChange: (role: Role) => void;
}

/** Pill-shaped toggle. Arrow keys, Home and End move between the tabs. */
export function RoleTabs({ roles, value, onChange }: RoleTabsProps) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = roles.length - 1;
    let next = index;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    onChange(roles[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div className={styles.tabs} role="tablist" aria-label="Choose your role">
      {roles.map((role, i) => {
        const selected = role.id === value;
        return (
          <button
            key={role.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`role-tab-${role.id}`}
            aria-selected={selected}
            aria-controls="role-panel"
            tabIndex={selected ? 0 : -1}
            className={styles.tab}
            onClick={() => onChange(role.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {role.label}
          </button>
        );
      })}
    </div>
  );
}
