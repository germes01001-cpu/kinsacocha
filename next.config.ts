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
};

export default nextConfig;
