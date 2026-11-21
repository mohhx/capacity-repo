import type { Metadata } from "next";
import { StatusPage } from "@/components/status/StatusPage";
import { Button } from "@/components/ui/Button";
import { NOT_FOUND } from "@/content/errors";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <StatusPage
      mark={NOT_FOUND.mark}
      title={NOT_FOUND.title}
      text={NOT_FOUND.text}
      actions={
        <>
          <Button href={NOT_FOUND.home.href}>{NOT_FOUND.home.label}</Button>
          <Button href={NOT_FOUND.contact.href} variant="secondary">
            {NOT_FOUND.contact.label}
          </Button>
        </>
      }
    />
  );
}
