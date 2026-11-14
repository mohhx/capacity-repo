import type { Metadata } from "next";
import { ApplyHead, ApplyNext } from "@/components/apply/ApplyIntro";
import { ApplyView } from "@/components/apply/ApplyView";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Apply to list capacity" };

export default function ApplyPage() {
  return (
    <main className={`container ${styles.page}`}>
      <ApplyView head={<ApplyHead />} next={<ApplyNext />} />
    </main>
  );
}
