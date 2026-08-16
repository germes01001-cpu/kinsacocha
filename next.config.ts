import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Next.js по умолчанию генерирует свой CLAUDE.md при запуске.
   * У нас это спецификация проекта, согласованная с заказчиком, — перезаписывать нельзя.
   */
  agentRules: false,

  images: {
    // Фото отдаются как готовые WebP из public/photos — оптимизатор их не трогает.
    formats: ["image/webp"],
    deviceSizes: [640, 828, 1080, 1200, 1920, 2400],
  },

  /**
   * Превью тёмной версии лежит статикой в public/v2/. Next отдаёт такие файлы
   * только по точному пути, поэтому /v2 и /v2/ сами по себе дают 404.
   * Эти два правила ведут оба адреса на index.html.
   */
  async rewrites() {
    return [
      { source: "/v2", destination: "/v2/index.html" },
      { source: "/v2/", destination: "/v2/index.html" },
    ];
  },
};

export default nextConfig;
