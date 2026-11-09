"use client";

import { useState } from "react";
import { ClosingCta } from "@/components/home/ClosingCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLOSING, PATH, ROLE_TABS, WHO_DOES_WHAT, type Role } from "@/content/how-it-works";
import { BookingPath } from "./BookingPath";
import { RoleTable } from "./RoleTable";
import { RoleTabs } from "./RoleTabs";
import styles from "./HowItWorksView.module.css";

/** Holds the selected role. It drives the table emphasis and the closing panel; the booking path is the same for both roles. */
export function HowItWorksView() {
  const [role, setRole] = useState<Role>("provider");
  const closing = CLOSING[role];
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
      <section className={`${styles.block} ${styles.tableBlock}`}>
        <SectionHeading>{WHO_DOES_WHAT.title}</SectionHeading>
        <div role="tabpanel" id="role-panel" aria-labelledby={`role-tab-${role}`}>
          <RoleTable role={role} />
        </div>
      </section>
      <ClosingCta title={closing.title} text={closing.text} cta={closing.cta} roomy />
    </div>
  );
}
