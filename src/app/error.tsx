"use client";

import { useEffect } from "react";
import { BackHomeLink, ErrorContact, ExclamationMark } from "@/components/status/ErrorParts";
import { StatusPage } from "@/components/status/StatusPage";
import { Button } from "@/components/ui/Button";
import { ERROR_PAGE } from "@/content/errors";

/** Shown when a page throws while rendering. The header and footer stay, because this sits inside the root layout. */
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      mark={<ExclamationMark />}
      tone="mint"
      stacked
      title={ERROR_PAGE.title}
      text={ERROR_PAGE.text}
      extra={<ErrorContact />}
      actions={
        <>
          <Button type="button" onClick={reset}>
            {ERROR_PAGE.retry}
          </Button>
          <BackHomeLink />
        </>
      }
    />
  );
}
