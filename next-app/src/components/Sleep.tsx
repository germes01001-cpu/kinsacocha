import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { AMENITIES } from "@/config/photos";
import type { Dict } from "@/i18n/dict";

/**
 * «Где вы будете спать» — продолжение блока «Удобства», не отдельная витрина.
 *
 * Вместимость указана намеренно: группы спрашивают её первым сообщением,
 * и каждый такой вопрос в WhatsApp — работа, которую сайт не сделал.
 *
 * TODO: заменить на съёмку комнаты, дивана у печи и типи изнутри —
 * настоящих кадров интерьера в исходниках нет ни одного.
 */
export default function Sleep({ t }: { t: Dict }) {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{t.sleep.title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {t.sleep.items.map((item, i) => (
            <Reveal key={item.name} delay={i as 0 | 1 | 2}>
              <div className="relative aspect-4/3 overflow-hidden">
                <Photo
                  id={AMENITIES[i]}
                  fill
                  alt=""
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover saturate-[0.9]"
                />
              </div>
              <h3 className="mt-4 text-lg">{item.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1}>
          <p className="mt-10 border-t border-fog pt-6 text-[15px] leading-relaxed text-ink/80">
            {t.sleep.total}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
