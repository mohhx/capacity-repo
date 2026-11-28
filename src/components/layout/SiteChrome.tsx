"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Routes that bring their own minimal header and footer, so the site-wide ones are left out. */
const BARE_ROUTES = ["/coming-soon"];

interface SiteChromeProps {
  /** The announcement bar and header. */
  top: ReactNode;
  /** The footer. */
  bottom: ReactNode;
  children: ReactNode;
}

export function SiteChrome({ top, bottom, children }: SiteChromeProps) {
  const pathname = usePathname();
  const bare = BARE_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));

  if (bare) return <>{children}</>;
  return (
    <>
      {top}
      {children}
      {bottom}
    </>
  );
}
