import { Check } from "lucide-react";

import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { FORMATS } from "@/config/photos";
import { PRICING, type FormatKey } from "@/config/site";
import type { Dict } from "@/i18n/dict";

const ORDER: FormatKey[] = ["access", "guided", "beds", "exclusive"];

export default function Formats({ t }: { t: Dict }) {
  /** Цена или текстовый ориентир, если цифры нет. Вёрстка не ломается ни там, ни там. */
  const price = (key: FormatKey) => {
    const { from, unit } = PRICING.formats[key];
    if (from === null) return t.formats.individual;

    const per =
      unit === "person-night"
        ? t.formats.perPersonNight
        : unit === "person-day"
          ? t.formats.perPersonDay
          : t.formats.perNight;

    return `${t.formats.priceFrom} ${from} ${PRICING.currency} · ${per}`;
  };

  return (
    <section id="formats" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{t.formats.title}</h2>
          <p className="mt-4 max-w-lg text-muted">{t.formats.lead}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {ORDER.map((key, i) => {
            const f = t.formats.items[key];
            return (
              <Reveal
                key={key}
                as="article"
                delay={(i % 2) as 0 | 1}
                className="group flex flex-col border border-fog bg-paper-deep/40 transition-colors duration-500 hover:border-clay/50"
              >
                <div className="relative h-44 overflow-hidden">
                  <Photo
                    id={FORMATS[i]}
                    fill
                    alt=""
                    sizes="(max-width: 640px) 100vw, 45vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone/25" />
                  <span className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.18em] text-paper/85">
                    {f.host}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl">{f.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
                    {f.body}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs text-muted">
                    <Check size={14} strokeWidth={2} className="text-clay" />
                    {t.formats.kids}
                  </div>

                  <div className="mt-auto pt-7">
                    <p className="font-display text-base text-clay">
                      {price(key)}
                    </p>
                    <p className="mt-1 text-xs text-muted">{f.hint}</p>

                    <WhatsAppButton
                      message={f.wa}
                      label={t.formats.cta}
                      variant="outline"
                      className="mt-5 w-full"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
