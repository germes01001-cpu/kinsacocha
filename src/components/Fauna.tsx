import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { FAUNA } from "@/config/photos";
import type { Dict } from "@/i18n/dict";

/**
 * Фауна — по убыванию вероятности встречи.
 *
 * Не список видов, а честная шкала. Чем ниже — тем меньше шансов, тем темнее
 * кадры и короче текст. Заканчивается пумой: пустой склон и три строки.
 */

const IDS: Record<string, string[]> = {
  0: [
    FAUNA.huallata,
    FAUNA.vizcacha,
    FAUNA.yanavico,
    FAUNA.ducks,
    FAUNA.alpacas,
    FAUNA.trout,
  ],
  1: [FAUNA.condor, FAUNA.taruca, FAUNA.fox, FAUNA.skunk],
};

export default function Fauna({ t }: { t: Dict }) {
  return (
    <section id="fauna" className="bg-stone px-5 py-24 text-paper sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl text-paper sm:text-4xl">{t.fauna.title}</h2>
          <p className="mt-4 max-w-lg text-paper/55">{t.fauna.lead}</p>
        </Reveal>

        {t.fauna.tiers.map((tier, tierIndex) => (
          <div key={tier.title} className="mt-16">
            <Reveal>
              <h3 className="text-xs uppercase tracking-[0.22em] text-clay">
                {tier.title}
              </h3>
            </Reveal>

            <div
              className={`mt-7 grid gap-6 sm:grid-cols-2 ${
                tierIndex === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"
              }`}
            >
              {tier.items.map((item, i) => (
                <Reveal
                  key={item.name}
                  as="article"
                  delay={(i % 3) as 0 | 1 | 2}
                  className="group"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Photo
                      id={IDS[tierIndex][i]}
                      fill
                      alt=""
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    {/* Ниже по шкале — темнее кадр. */}
                    <div
                      className={`absolute inset-0 ${
                        tierIndex === 0 ? "bg-stone/10" : "bg-stone/45"
                      }`}
                    />
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <h4 className="text-lg text-paper">{item.name}</h4>
                    {item.quechua && (
                      /* Имя на кечуа — местное, не переведённое. */
                      <span className="font-display text-sm text-clay/80">
                        {item.quechua}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-paper/65">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        {/* Пума. Кадр намеренно пустой — фотографии пумы нет и не будет. */}
        <Reveal className="mt-24">
          <h3 className="text-xs uppercase tracking-[0.22em] text-clay">
            {t.fauna.puma.title}
          </h3>

          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-16/10 overflow-hidden">
              <Photo
                id={FAUNA.puma}
                size="full"
                fill
                alt=""
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-stone/70" />
            </div>

            <div>
              {t.fauna.puma.body.map((line) => (
                <p
                  key={line}
                  className="mb-4 font-display text-xl leading-snug text-paper/90 sm:text-2xl"
                >
                  {line}
                </p>
              ))}

              {/* Родитель везёт ребёнка — ответ должен быть здесь, а не в Google. */}
              <p className="mt-8 border-l-2 border-clay/50 pl-5 text-sm leading-relaxed text-paper/60">
                {t.fauna.puma.safety}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
