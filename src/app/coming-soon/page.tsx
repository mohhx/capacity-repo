import type { Metadata } from "next";
import { ComingSoonFooter, ComingSoonHeader } from "@/components/coming-soon/ComingSoonChrome";
import { ComingSoonView } from "@/components/coming-soon/ComingSoonView";
import styles from "@/components/coming-soon/ComingSoon.module.css";

// Not linked from anywhere and kept out of search results until the forms are connected to the backend.
export const metadata: Metadata = {
  title: "Coming soon",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <>
      <ComingSoonHeader />
      <main className={`container ${styles.main}`}>
        <ComingSoonView />
      </main>
      <ComingSoonFooter />
    </>
  );
}
