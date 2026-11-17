import type { Metadata } from "next";
import { LegalView } from "@/components/legal/LegalView";
import { COOKIES } from "@/content/legal";

export const metadata: Metadata = {
  title: "Cookie notice",
};

export default function CookiesPage() {
  return <LegalView document={COOKIES} />;
}
