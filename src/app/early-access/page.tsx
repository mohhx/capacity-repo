import type { Metadata } from "next";
import { EarlyHead, EarlyNext } from "@/components/early-access/EarlyIntro";
import { EarlyView } from "@/components/early-access/EarlyView";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Request early access" };

export default function EarlyAccessPage() {
  return (
    <main className={`container ${styles.page}`}>
      <EarlyView head={<EarlyHead />} next={<EarlyNext />} />
    </main>
  );
}
