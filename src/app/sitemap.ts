import type { MetadataRoute } from "next";

import { SITE } from "@/config/site";
import { allPostParams } from "@/data/posts";
import { locales } from "@/i18n/config";

/** Все языки и все статьи. Генерируется на сборке, руками не поддерживается. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = locales.flatMap((locale) => [
    {
      url: `${SITE.domain}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${SITE.domain}/${locale}/gallery`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE.domain}/${locale}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]);

  const articles = allPostParams().map(({ locale, slug }) => ({
    url: `${SITE.domain}/${locale}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
