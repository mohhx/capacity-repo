import type { Metadata } from "next";
import { LegalView } from "@/components/legal/LegalView";
import { TERMS } from "@/content/legal";

export const metadata: Metadata = {
  title: "Website terms",
};

export default function TermsPage() {
  return <LegalView document={TERMS} />;
}
