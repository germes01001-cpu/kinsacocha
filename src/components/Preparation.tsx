import { Baby, Dog, Droplet, Hand, Moon, Sun } from "lucide-react";

import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { PREP } from "@/config/photos";
import type { Dict } from "@/i18n/dict";

/**
 * Подготовка — два списка, а не один.
 *
 * В ТЗ был единый перечень вещей. На деле это две разные проблемы:
 * ночью холод, днём солнце. Люди едут «в горы, там холодно» и сгорают
 * в первый же день. Разделив список, мы объясняем место, а не перечисляем вещи.
 */
export default function Preparation({ t }: { t: Dict }) {
  return (
    <section className="relative overflow-hidden bg-stone text-paper">
      {/* Параллакс — фиксированный фон. На мобайле iOS его игнорирует, и это
          нормально: там он всё равно был бы дорогим по производительности. */}
      <div className="absolute inset-0">
        <Photo
          id={PREP}
          size="full"
          fill
          alt=""
          sizes="100vw"
          className="object-cover opacity-30 [background-attachment:fixed]"
        />
        <div className="absolute inset-0 bg-stone/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="text-3xl text-paper sm:text-4xl">{t.prep.title}</h2>
          <p className="mt-5 max-w-xl font-display text-xl leading-snug text-paper/85 sm:text-2xl">
            {t.prep.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {[
            { icon: Moon, block: t.prep.night, note: t.prep.night.note },
            { icon: Sun, block: t.prep.day, note: null },
          ].map(({ icon: Icon, block, note }, i) => (
            <Reveal
              key={block.title}
              delay={i as 0 | 1}
              className="border border-paper/20 bg-stone/40 p-7 backdrop-blur-sm"
            >
              <Icon
                size={22}
                strokeWidth={1.5}
                className="text-clay"
                aria-hidden
              />
              <h3 className="mt-4 text-xl text-paper">{block.title}</h3>
              <ul className="mt-5 space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-paper/10 pb-3 text-[15px] leading-relaxed text-paper/75 last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Чем греются, если своего спальника не хватило. */}
              {note && (
                <p className="mt-5 text-sm leading-relaxed text-paper/55">
                  {note}
                </p>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <Reveal className="border border-paper/20 bg-stone/40 p-7 backdrop-blur-sm">
            <h3 className="text-lg text-paper">{t.prep.have.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-paper/75">
              {t.prep.have.body}
            </p>
          </Reveal>

          <Reveal
            delay={1}
            className="border border-paper/20 bg-stone/40 p-7 backdrop-blur-sm"
          >
            <Droplet
              size={20}
              strokeWidth={1.5}
              className="text-clay"
              aria-hidden
            />
            <h3 className="mt-3 text-lg text-paper">{t.prep.water.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-paper/75">
              {t.prep.water.body}
            </p>
          </Reveal>
        </div>

        {/* Айни: не подарок сверху вниз, а местное правило обмена. */}
        <Reveal className="mt-8 border-l-2 border-clay bg-stone/40 p-7 backdrop-blur-sm">
          <Hand size={20} strokeWidth={1.5} className="text-clay" aria-hidden />
          <h3 className="mt-3 text-lg text-paper">{t.prep.hands.title}</h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-paper/75">
            {t.prep.hands.body}
          </p>
          <p className="mt-4 font-display text-lg text-paper">
            {t.prep.hands.note}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {[
            { icon: Dog, block: t.prep.pets },
            { icon: Baby, block: t.prep.family },
          ].map(({ icon: Icon, block }, i) => (
            <Reveal key={block.title} delay={i as 0 | 1}>
              <div className="flex gap-4">
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-clay"
                  aria-hidden
                />
                <div>
                  <h3 className="text-lg text-paper">{block.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-paper/70">
                    {block.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
