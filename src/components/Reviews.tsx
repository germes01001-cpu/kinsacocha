import Reveal from "@/components/ui/Reveal";
import type { Dict } from "@/i18n/dict";

/**
 * ⚠️ TODO: ЗАМЕНИТЬ ПЕРЕД ПУБЛИКАЦИЕЙ.
 *
 * Отзывы придуманы — это заглушки из ТЗ. Публиковать выдуманные отзывы
 * как настоящие нельзя: и юридически, и потому что весь сайт стоит на честности.
 * Заказчик подтвердил, что заменит на реальные. См. OPEN_QUESTIONS.md.
 */
export default function Reviews({ t }: { t: Dict }) {
  return (
    <section className="bg-paper-deep px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{t.reviews.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {t.reviews.items.map((review, i) => (
            <Reveal
              key={review.author}
              as="article"
              delay={(i % 3) as 0 | 1 | 2}
            >
              <p className="font-display text-lg leading-relaxed text-ink/90">
                {review.text}
              </p>
              <p className="mt-5 text-sm text-muted">— {review.author}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
