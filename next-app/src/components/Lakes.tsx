import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { LAKES } from "@/config/photos";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";

/**
 * Три озера — то, ради чего сюда едут.
 *
 * В первой версии сайта этого блока не было: озёра жили только в статье блога,
 * и на главной не было ответа на вопрос «зачем ехать». Это была ошибка.
 *
 * Высоты называем. Порядок обхода и дорогу к воде — нет: мы описываем,
 * ЧТО вы увидите, и не описываем, КАК дойти (CLAUDE.md, раздел 3).
 */
export default function Lakes({
  t,
  locale,
}: {
  t: Dict;
  locale: Locale;
}) {
  return (
    <section id="lakes" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{t.lakes.title}</h2>
          {/* Возможно, лучшая строка на сайте: место названо числом озёр. */}
          <p className="mt-5 font-display text-2xl leading-snug text-clay sm:text-3xl">
            {t.lakes.name}
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-ink/80">
            {t.lakes.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.lakes.items.map((lake, i) => (
            <Reveal
              key={lake.name}
              as="article"
              delay={(i % 3) as 0 | 1 | 2}
              className="group"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <Photo
                  id={LAKES[i]}
                  size="full"
                  fill
                  alt=""
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone/85 via-stone/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-3xl text-paper">
                    {lake.altitude}
                  </p>
                  <h3 className="mt-1 text-lg text-paper/90">{lake.name}</h3>
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
                {lake.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Лендинг подкармливает блог, блог тянет поиск. */}
        <Reveal className="mt-12">
          <Link
            href={`/${locale}/blog/tri-ozera`}
            className="group inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-sm transition-colors hover:border-ink"
          >
            {t.lakes.cta}
            <ArrowRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
