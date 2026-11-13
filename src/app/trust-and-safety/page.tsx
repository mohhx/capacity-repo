import type { Metadata } from "next";
import { TrustCards } from "@/components/trust/TrustCards";
import { TrustHero } from "@/components/trust/TrustHero";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Trust and safety" };

export default function TrustAndSafetyPage() {
  return (
    <main className={`container ${styles.page}`}>
      <TrustHero />
      <TrustCards />
    </main>
  );
}
