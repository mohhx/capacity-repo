"use client";

import { useSyncExternalStore } from "react";
import { ANNOUNCEMENT } from "@/content/announcement";
import styles from "./AnnouncementBar.module.css";

const STORAGE_KEY = "capacity-announcement-dismissed";

const listeners = new Set<() => void>();
let dismissedInMemory = false; // covers browsers where sessionStorage is blocked

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): boolean {
  if (dismissedInMemory) return true;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === ANNOUNCEMENT.text;
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

export function AnnouncementBar() {
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!ANNOUNCEMENT.enabled || dismissed) return null;

  function dismiss() {
    dismissedInMemory = true;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, ANNOUNCEMENT.text);
    } catch {
      // Ignore: the in-memory flag still hides the bar for this page view.
    }
    listeners.forEach((listener) => listener());
  }

  return (
    <div className={styles.bar} role="region" aria-label="Announcement">
      <p className={styles.text}>{ANNOUNCEMENT.text}</p>
      <button type="button" className={styles.close} onClick={dismiss} aria-label="Dismiss announcement">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}
