import { Mountain } from "lucide-react";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";

/**
 * «Высота».
 *
 * Сайт продаёт не прогулку на 4200, а сон на 4200 — и это разные вещи
 * с точки зрения физиологии. До аудита на лендинге об этом не было
 * ни слова: статья в блоге есть, но кто дошёл до кнопки, в блог не идёт.
 *
 * Тон — не пугающий, а взрослый. Последняя строка про «отговорить
 * от неудачной даты» продаёт сильнее любого обещания комфорта.
 */
export default function Altitude({
  t,
  locale,
}: {
  t: Dict;
  locale: Locale;
}) {
  return (
    <section className="bg-stone px-5 py-24 text-paper sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Mountain
            size={24}
            strokeWidth={1.5}
            className="text-paper/50"
            aria-hidden
          />
          <h2 className="mt-4 text-3xl sm:text-4xl">{t.altitude.title}</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-paper/75">
            {t.altitude.lead}
          </p>
        </Reveal>

        <ul className="mt-10 space-y-4">
          {t.altitude.items.map((item, i) => (
            <Reveal
              key={item}
              as="li"
              delay={(i % 3) as 0 | 1 | 2}
              className="border-l-2 border-clay/60 pl-5 text-[15px] leading-relaxed text-paper/80"
            >
              {item}
            </Reveal>
          ))}
        </ul>

        <Reveal delay={1}>
          <p className="mt-10 max-w-xl font-display text-lg leading-relaxed text-paper sm:text-xl">
            {t.altitude.footer}
          </p>

          {/* Перелинковка на опорную статью — и польза, и SEO. */}
          <Link
            href={`/${locale}/blog/gornaya-bolezn`}
            className="mt-6 inline-block border-b border-paper/30 pb-0.5 text-sm text-paper/70 transition-colors hover:border-paper hover:text-paper"
          >
            {t.blog.readMore}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
