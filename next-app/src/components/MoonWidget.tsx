"use client";

import { Moon } from "lucide-react";
import { useEffect, useState } from "react";

import { waLink } from "@/lib/whatsapp";
import { formatMoonDate, nextFullMoon } from "@/lib/moon";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";

/**
 * Ближайшее полнолуние и обратный отсчёт.
 *
 * Считается на клиенте после монтирования: на сервере дата сборки может
 * отличаться от сегодняшней у пользователя, и получилось бы враньё.
 */
export default function MoonWidget({
  t,
  locale,
}: {
  t: Dict;
  locale: Locale;
}) {
  const [moon, setMoon] = useState<{ label: string; days: number } | null>(null);

  useEffect(() => {
    const { date, daysUntil } = nextFullMoon();
    setMoon({ label: formatMoonDate(date, locale), days: daysUntil });
  }, [locale]);

  return (
    <div className="mt-7 max-w-sm border border-paper/25 bg-stone/50 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-paper/60">
        <Moon size={14} strokeWidth={1.5} aria-hidden />
        {t.routes.moon.title}
      </div>

      {/* Пока не посчитали — держим высоту, чтобы блок не прыгал. */}
      <p className="mt-3 min-h-14 font-display text-2xl leading-tight text-paper">
        {moon ? (
          moon.days === 0 ? (
            t.routes.moon.today
          ) : (
            <>
              {moon.label}
              <span className="block text-sm font-normal text-paper/60">
                {t.routes.moon.next} · {moon.days} {t.routes.moon.days}
              </span>
            </>
          )
        ) : (
          <span className="opacity-0">—</span>
        )}
      </p>

      <a
        href={waLink(
          moon ? `${t.routes.moon.wa} — ${moon.label}` : t.routes.moon.wa,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block border-b border-paper/40 pb-0.5 text-sm text-paper/85 transition-colors hover:border-paper hover:text-paper"
      >
        {t.routes.moon.cta}
      </a>
    </div>
  );
}
