import type { MetadataRoute } from "next";

import { SITE } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  /* Временный адрес закрыт от поисковиков: там заглушки и выдуманные отзывы.
     Открывается одной строкой в site.ts перед настоящим запуском. */
  if (!SITE.allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.domain}/sitemap.xml`,
  };
}
