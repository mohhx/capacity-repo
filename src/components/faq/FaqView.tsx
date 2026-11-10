"use client";

import { useState } from "react";
import { RoleTabs } from "@/components/how-it-works/RoleTabs";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ } from "@/content/faq";
import { ROLE_TABS, type Role } from "@/content/how-it-works";
import styles from "./FaqView.module.css";

/** Holds the selected role. Each role has the same three groups; the first question of the first group starts open. */
export function FaqView() {
  const [role, setRole] = useState<Role>("provider");
  return (
    <div>
      <div className={styles.tabs}>
        <RoleTabs roles={ROLE_TABS} value={role} onChange={setRole} />
      </div>
      <div role="tabpanel" id="role-panel" aria-labelledby={`role-tab-${role}`} className={styles.panel}>
        {FAQ.groups.map((group, index) => {
          const items = group.items[role];
          return (
            // The role is part of the key, so switching role resets which question is open.
            <section key={`${role}-${group.id}`} className={styles.group} aria-labelledby={`faq-group-${group.id}`}>
              <h2 id={`faq-group-${group.id}`} className={styles.label}>
                {group.title}
              </h2>
              <Accordion items={items} defaultOpenId={index === 0 ? items[0].id : undefined} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
