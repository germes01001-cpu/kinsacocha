import Reveal from "@/components/ui/Reveal";
import type { Dict } from "@/i18n/dict";

/**
 * «Практика».
 *
 * Мы отказались от форм бронирования — значит обязаны снять неопределённость
 * до нажатия кнопки. Вместимость, туалет, электричество, оплата, предоплата,
 * отмена: именно эти вопросы человек пишет в WhatsApp вместо «беру»,
 * и половина переписок умирает на третьем сообщении.
 *
 * Разметка `FAQPage` — чтобы ответы попадали в поисковую выдачу и в ответы
 * поисковых ИИ, где сегодня и происходит часть поиска «что делать рядом с Писаком».
 */
export default function Faq({ t }: { t: Dict }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="border-t border-fog px-5 py-24 sm:px-8 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{t.faq.title}</h2>
          <p className="mt-4 text-muted">{t.faq.lead}</p>
        </Reveal>

        <div className="mt-12">
          {t.faq.items.map((item, i) => (
            <Reveal
              key={item.q}
              as="details"
              delay={(i % 3) as 0 | 1 | 2}
              className="group border-b border-fog"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[15px] transition-colors hover:text-clay sm:text-base">
                {item.q}
                <span
                  className="shrink-0 text-clay transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="pb-6 pr-10 text-[15px] leading-relaxed text-muted">
                {item.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
