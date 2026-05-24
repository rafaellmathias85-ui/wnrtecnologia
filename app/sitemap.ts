import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { solutions } from "@/lib/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    ...solutions.map((solution) => ({
      url: `${siteConfig.url}/${solution.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
