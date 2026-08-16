/**
 * Фазы луны — расчётом, без внешних API.
 *
 * Синодический месяц (от полнолуния до полнолуния) — 29.530588853 суток.
 * Опорная точка: полнолуние 6 января 2000, 18:14 UTC.
 * Точности до минут нам не нужно: на сайте показывается дата и число дней.
 */

const SYNODIC = 29.530588853;
const KNOWN_FULL_MOON = Date.UTC(2000, 0, 6, 18, 14) / 86_400_000;

export type MoonWindow = {
  /** Дата ближайшего полнолуния. */
  date: Date;
  /** Сколько дней осталось. 0 — сегодня. */
  daysUntil: number;
};

export function nextFullMoon(from: Date = new Date()): MoonWindow {
  const days = from.getTime() / 86_400_000;
  const cycles = (days - KNOWN_FULL_MOON) / SYNODIC;

  // Ближайшее полнолуние вперёд по времени.
  const nextDays = KNOWN_FULL_MOON + Math.ceil(cycles) * SYNODIC;
  const date = new Date(nextDays * 86_400_000);

  const startOfToday = new Date(from);
  startOfToday.setHours(0, 0, 0, 0);
  const startOfMoon = new Date(date);
  startOfMoon.setHours(0, 0, 0, 0);

  const daysUntil = Math.max(
    0,
    Math.round((startOfMoon.getTime() - startOfToday.getTime()) / 86_400_000),
  );

  return { date, daysUntil };
}

/** Дата в локали пользователя, без года — он и так очевиден. */
export function formatMoonDate(date: Date, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
  }).format(date);
}
