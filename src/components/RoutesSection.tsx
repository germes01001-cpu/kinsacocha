"use client";

import { useState } from "react";

import MoonWidget from "@/components/MoonWidget";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { ROUTES } from "@/config/photos";
import type { Locale } from "@/i18n/config";
import type { Dict, TimeKey, WhoKey } from "@/i18n/dict";

const TIME_KEYS: TimeKey[] = ["hours", "half", "day", "night"];
const WHO_KEYS: WhoKey[] = ["kids", "two", "group", "alone"];

/**
 * Маршруты.
 *
 * Вместо «матрицы нагрузки» из ТЗ — перевёрнутая логика: не сайт показывает
 * маршруты, а гость описывает себя, и проводник отвечает. Матрица измеряла бы
 * маршруты, которые мы принципиально не публикуем.
 */
export default function RoutesSection({
  t,
  locale,
}: {
  t: Dict;
  locale: Locale;
}) {
  const [time, setTime] = useState<TimeKey>("half");
  const [who, setWho] = useState<WhoKey>("two");

  const answer = t.routes.guide.answers[`${time}:${who}`];

  return (
    <section id="routes" className="bg-stone text-paper">
      <Reveal className="px-5 pt-24 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl text-paper sm:text-4xl">{t.routes.title}</h2>
          <p className="mt-5 font-display text-2xl text-paper/55 sm:text-3xl">
            {t.routes.noMap}
          </p>
        </div>
      </Reveal>

      {/* Слой 1 — четыре времени суток. Широкие полосы, не карточки. */}
      <div className="mt-16 flex flex-col">
        {t.routes.times.map((slot, i) => (
          <Reveal key={slot.key} as="article" className="group relative">
            <div className="relative h-[62vh] min-h-[380px] w-full overflow-hidden sm:h-[70vh]">
              <Photo
                id={ROUTES[slot.key as keyof typeof ROUTES]}
                size="full"
                fill
                alt=""
                sizes="100vw"
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
              />
              <div
                className={`absolute inset-0 ${
                  i % 2 === 0
                    ? "bg-linear-to-r from-stone/90 via-stone/50 to-transparent"
                    : "bg-linear-to-l from-stone/90 via-stone/50 to-transparent"
                }`}
              />

              <div
                className={`absolute inset-0 flex items-center px-6 sm:px-14 ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="max-w-md">
                  <span className="text-xs uppercase tracking-[0.22em] text-paper/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-3xl text-paper sm:text-4xl">
                    {slot.label}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-paper/80">
                    {slot.body}
                  </p>

                  {/* Слой 3 — лунное окно живёт внутри полосы, а не сбоку. */}
                  {slot.key === "moon" && <MoonWidget t={t} locale={locale} />}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Слой 2 — «проводник отвечает». */}
      <Reveal className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h3 className="text-center text-2xl text-paper sm:text-3xl">
            {t.routes.guide.title}
          </h3>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <fieldset>
              <legend className="text-xs uppercase tracking-[0.18em] text-paper/50">
                {t.routes.guide.timeLabel}
              </legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {TIME_KEYS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTime(key)}
                    aria-pressed={time === key}
                    className={`border px-4 py-2 text-sm transition-colors duration-300 ${
                      time === key
                        ? "border-paper bg-paper text-ink"
                        : "border-paper/25 text-paper/70 hover:border-paper/60"
                    }`}
                  >
                    {t.routes.guide.time[key]}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-xs uppercase tracking-[0.18em] text-paper/50">
                {t.routes.guide.whoLabel}
              </legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {WHO_KEYS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setWho(key)}
                    aria-pressed={who === key}
                    className={`border px-4 py-2 text-sm transition-colors duration-300 ${
                      who === key
                        ? "border-paper bg-paper text-ink"
                        : "border-paper/25 text-paper/70 hover:border-paper/60"
                    }`}
                  >
                    {t.routes.guide.who[key]}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Реплика живого человека, а не карточка товара. */}
          <blockquote
            aria-live="polite"
            className="mt-12 border-l-2 border-clay pl-6 sm:pl-8"
          >
            <p className="font-display text-xl leading-relaxed text-paper sm:text-2xl">
              {answer}
            </p>
          </blockquote>

          <p className="mt-12 text-sm leading-relaxed text-paper/45">
            {t.routes.guide.footer}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
