import Reveal from "@/components/ui/Reveal";
import type { Dict } from "@/i18n/dict";

/**
 * «Чего вы здесь не найдёте».
 *
 * Не техническое ограничение, а позиционирование: мы ничего не публикуем,
 * и это условие того, что место останется таким, какое оно есть.
 */
export default function NotPublished({ t }: { t: Dict }) {
  return (
    <section className="border-y border-fog bg-paper-deep px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl">{t.notFound.title}</h2>
        <p className="mt-4 text-muted">{t.notFound.lead}</p>

        <ul className="mt-10 flex flex-col items-center gap-3">
          {t.notFound.items.map((item) => (
            <li
              key={item}
              className="font-display text-xl text-ink/45 line-through decoration-clay/60 decoration-1 sm:text-2xl"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-md text-[15px] leading-relaxed text-ink/75">
          {t.notFound.footer}
        </p>
      </Reveal>
    </section>
  );
}
