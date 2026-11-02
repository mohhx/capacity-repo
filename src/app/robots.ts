import type { MetadataRoute } from "next";

// TEMPORARY: block indexing until launch (Day 4). Remove or replace at go-live.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
