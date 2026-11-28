"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ApplyForm } from "@/components/apply/ApplyForm";
import { ApplySent } from "@/components/apply/ApplySent";
import { EarlyForm } from "@/components/early-access/EarlyForm";
import { EarlySent } from "@/components/early-access/EarlySent";
import { Card } from "@/components/ui/Card";
import enter from "@/components/ui/Enter.module.css";
import { PageTitle } from "@/components/ui/PageTitle";
import { Reveal } from "@/components/ui/Reveal";
import { COMING_SOON } from "@/content/coming-soon";
import styles from "./ComingSoon.module.css";

type TabId = "provider" | "business";

interface SentState {
  kind: TabId;
  firstName: string;
  email: string;
}

const TAB_ORDER: readonly TabId[] = ["provider", "business"];

/** Hero on the left, a two-tab form on the right, and the three steps below. Only the chosen tab's form is mounted. */
export function ComingSoonView() {
  const { eyebrow, title, accent, lead, launch, tabs, steps } = COMING_SOON;
  const labels: Record<TabId, string> = { provider: tabs.provider, business: tabs.business };
  const [tab, setTab] = useState<TabId>("provider");
  const [sent, setSent] = useState<SentState | null>(null);
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({ provider: null, business: null });

  if (sent) {
    return sent.kind === "provider" ? (
      <ApplySent firstName={sent.firstName} email={sent.email} />
    ) : (
      <EarlySent firstName={sent.firstName} email={sent.email} />
    );
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = TAB_ORDER.indexOf(tab);
    let next: TabId | null = null;
    if (event.key === "ArrowRight") next = TAB_ORDER[(index + 1) % TAB_ORDER.length];
    else if (event.key === "ArrowLeft") next = TAB_ORDER[(index + TAB_ORDER.length - 1) % TAB_ORDER.length];
    else if (event.key === "Home") next = TAB_ORDER[0];
    else if (event.key === "End") next = TAB_ORDER[TAB_ORDER.length - 1];
    if (!next) return;
    event.preventDefault();
    setTab(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.hero}>
          <p className={`${styles.eyebrow} ${enter.eyebrowIn}`}>{eyebrow}</p>
          <h1 className={styles.title}>
            <PageTitle title={title} accent={accent} accentClassName={styles.accent} />
          </h1>
          <p className={`${styles.lead} ${enter.leadIn}`}>{lead}</p>
          <p className={`${styles.launch} ${enter.leadIn}`}>{launch}</p>
        </div>

        <div className={styles.formArea}>
          <div
            role="tablist"
            aria-label={tabs.label}
            className={`${styles.tabs} ${enter.eyebrowIn}`}
            onKeyDown={onKeyDown}
          >
            {TAB_ORDER.map((id) => {
              const selected = tab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`coming-soon-tab-${id}`}
                  aria-selected={selected}
                  aria-controls={selected ? `coming-soon-panel-${id}` : undefined}
                  tabIndex={selected ? 0 : -1}
                  className={styles.tab}
                  ref={(node) => {
                    tabRefs.current[id] = node;
                  }}
                  onClick={() => setTab(id)}
                >
                  {labels[id]}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" id={`coming-soon-panel-${tab}`} aria-labelledby={`coming-soon-tab-${tab}`}>
            {tab === "provider" ? (
              <ApplyForm onSent={(firstName, email) => setSent({ kind: "provider", firstName, email })} />
            ) : (
              <EarlyForm onSent={(firstName, email) => setSent({ kind: "business", firstName, email })} />
            )}
          </div>
        </div>
      </div>

      <Reveal>
        <section className={styles.steps} aria-labelledby="coming-soon-steps-title">
          <h2 id="coming-soon-steps-title" className={styles.stepsTitle}>
            {steps.title}
          </h2>
          <ol className={styles.stepList}>
            {steps.items.map((item, i) => (
              <Card as="li" key={item.title} padded={false} className={styles.step}>
                <span className={styles.num} aria-hidden="true">
                  {i + 1}
                </span>
                <span className={styles.stepBody}>
                  <span className={styles.stepTitle}>{item.title}</span>
                  <span className={styles.stepText}>{item.text}</span>
                </span>
              </Card>
            ))}
          </ol>
        </section>
      </Reveal>
    </div>
  );
}
