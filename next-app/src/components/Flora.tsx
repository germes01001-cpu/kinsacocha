import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { FLORA } from "@/config/photos";
import type { Dict } from "@/i18n/dict";

/**
 * Флора — единственный блок, который просит смотреть вниз.
 *
 * Всё остальное на сайте — горизонты и небо. Здесь макро и земля.
 * Оформление как разворот полевого дневника: снимки приколоты к бумаге,
 * подписи мелкие. Другая текстура работает паузой между блоками.
 */

const TILT = ["-2.5deg", "1.8deg", "-1.2deg", "2.4deg", "-1.8deg"];

export default function Flora({ t }: { t: Dict }) {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{t.flora.title}</h2>
          <p className="mt-5 font-display text-2xl leading-snug text-clay sm:text-3xl">
            {t.flora.opener}
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-ink/80">
            {t.flora.lead}
          </p>
        </Reveal>

        {/* Строка, ради которой блок существует: люди носят альпаку,
            кактусы — свой пух, по одной и той же причине. */}
        <Reveal className="my-16 border-y border-fog py-10 text-center">
          <p className="font-display text-2xl leading-snug sm:text-4xl">
            {t.flora.wool}
          </p>
        </Reveal>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {t.flora.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) as 0 | 1 | 2}>
              <div
                className="bg-paper p-2.5 pb-4 shadow-[0_8px_24px_-14px_rgba(31,29,26,0.5)]"
                style={{ transform: `rotate(${TILT[i % TILT.length]})` }}
              >
                <Photo
                  id={FLORA[i % FLORA.length]}
                  alt=""
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="aspect-square w-full object-cover"
                />
              </div>

              <h3 className="mt-6 text-lg">{item.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 text-sm text-muted">{t.flora.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
