import Reveal from "@/components/ui/Reveal";
import type { Dict } from "@/i18n/dict";

/**
 * «Сутки здесь».
 *
 * Цена назначена за сутки от утра до утра — а показать эти сутки было негде.
 * Восемнадцать блоков описывают место по частям, но прожить день целиком
 * гость не мог. Для продукта, единица которого — сутки, это самый
 * конвертирующий блок из возможных.
 *
 * Последняя строка («либо остаётесь ещё на сутки») — тихий апсейл
 * на многодневку, без единого слова про цену.
 */
export default function OneDay({ t }: { t: Dict }) {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{t.oneDay.title}</h2>
          <p className="mt-4 text-muted">{t.oneDay.lead}</p>
        </Reveal>

        <ol className="mt-14 border-l border-fog">
          {t.oneDay.items.map((item, i) => (
            <Reveal
              key={`${item.time}-${item.body}`}
              as="li"
              delay={(i % 3) as 0 | 1 | 2}
              className="relative grid gap-1 pb-9 pl-7 last:pb-0 sm:grid-cols-[72px_1fr] sm:gap-6 sm:pl-9"
            >
              <span
                className="absolute -left-[3px] top-2 h-[5px] w-[5px] rounded-full bg-clay"
                aria-hidden
              />
              <span className="font-display text-sm text-clay sm:text-base">
                {item.time}
              </span>
              <span className="text-[15px] leading-relaxed text-ink/80">
                {item.body}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
