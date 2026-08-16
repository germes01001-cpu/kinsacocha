import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { FOOD } from "@/config/photos";
import type { Dict } from "@/i18n/dict";

export default function Food({ t }: { t: Dict }) {
  return (
    <section className="bg-paper-deep px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{t.food.title}</h2>
          <p className="mt-4 max-w-lg text-muted">{t.food.lead}</p>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.food.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) as 0 | 1 | 2}>
              {/* TODO: заменить на съёмку еды — в исходниках кадров еды нет. */}
              <Photo
                id={FOOD[i % FOOD.length]}
                alt=""
                sizes="(max-width: 640px) 100vw, 25vw"
                className="aspect-3/4 w-full object-cover"
              />
              <h3 className="mt-5 text-lg">{item.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
