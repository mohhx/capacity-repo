"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PATH, ROLE_TABS, WHO_DOES_WHAT, type Role } from "@/content/how-it-works";
import { BookingPath } from "./BookingPath";
import { RoleTable } from "./RoleTable";
import { RoleTabs } from "./RoleTabs";
import styles from "./HowItWorksView.module.css";

/** Holds the selected role. The booking path and the table are added in the next steps. */
export function HowItWorksView() {
  const [role, setRole] = useState<Role>("provider");
  return (
    <div className={styles.view}>
      <div className={styles.tabs}>
        <RoleTabs roles={ROLE_TABS} value={role} onChange={setRole} />
      </div>
      <section className={styles.block}>
        <SectionHeading>{PATH.title}</SectionHeading>
        <div className={styles.pathWrap}>
          <BookingPath />
          <p className={styles.note}>{PATH.note}</p>
        </div>
      </section>
      <section className={styles.block}>
        <SectionHeading>{WHO_DOES_WHAT.title}</SectionHeading>
        <div role="tabpanel" id="role-panel" aria-labelledby={`role-tab-${role}`}>
          <RoleTable role={role} />
        </div>
      </section>
    </div>
  );
}
