import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { WEAVING } from "@/config/photos";
import type { Dict } from "@/i18n/dict";

/**
 * Ткачество и музей общины.
 *
 * Это ткачество, а не вышивка — уточнено у заказчика.
 * Смысловой центр — «ткут на ходу, пока идут за стадом». Одна деталь
 * объясняет место лучше страницы текста, и её видно своими глазами.
 *
 * Тон про деньги: факт и достоинство, не жалость. Жалость продаёт один раз.
 */
export default function Weaving({ t }: { t: Dict }) {
  return (
    <section className="bg-paper-deep px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{t.weaving.title}</h2>
          <p className="mt-4 text-muted">{t.weaving.lead}</p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            {/* TODO: заменить на съёмку музея и ткачества — настоящих кадров нет. */}
            <Photo
              id={WEAVING[0]}
              size="full"
              alt=""
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="font-display text-2xl leading-snug sm:text-3xl">
                {t.weaving.onTheMove}
              </p>
            </Reveal>

            <Reveal delay={1}>
              <p className="mt-10 border-l-2 border-clay pl-5 font-display text-lg leading-snug text-clay">
                {t.weaving.notSouvenir}
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-10 text-[15px] leading-relaxed text-ink/75">
                {t.weaving.museum}
              </p>

              <div className="mt-8">
                <h3 className="text-xs uppercase tracking-[0.18em] text-muted">
                  {t.weaving.makes}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {t.weaving.makesList.map((item) => (
                    <li
                      key={item}
                      className="border border-fog px-3.5 py-1.5 text-sm text-ink/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Формулировка осторожная: связь Пару-Пару с Parque de la Papa
                  ещё уточняется. См. OPEN_QUESTIONS.md. */}
              <p className="mt-8 text-sm text-muted">{t.weaving.park}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
