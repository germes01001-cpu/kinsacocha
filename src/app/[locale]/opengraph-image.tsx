import { ImageResponse } from "next/og";

import { isLocale } from "@/i18n/config";
import { getDict } from "@/i18n/dict";

/**
 * Картинка для соцсетей.
 *
 * Без неё превью ссылки в WhatsApp и Instagram подтягивается случайное.
 * Трафик придёт именно оттуда, поэтому превью — часть первого впечатления.
 *
 * Генерируется на сборке, отдельный файл держать не нужно.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kinsacocha";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDict(isLocale(locale) ? locale : "ru");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1F1D1A",
          color: "#EDE6DA",
          padding: 72,
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 2 }}>
          KINSACOCHA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.1, maxWidth: 900 }}>
            {t.hero.title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#CFC7B8",
              maxWidth: 820,
            }}
          >
            {t.hero.subtitle}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#9C5A32" }}>
          Comunidad Paru-Paru · Cusco · Peru
        </div>
      </div>
    ),
    size,
  );
}
