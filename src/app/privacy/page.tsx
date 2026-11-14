import type { Metadata } from "next";
import { LegalView } from "@/components/legal/LegalView";
import { PRIVACY } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy notice",
};

export default function PrivacyPage() {
  return <LegalView document={PRIVACY} />;
}
