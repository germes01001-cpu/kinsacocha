import { Car, ChefHat, Flame, ShowerHead, Tent, WashingMachine } from "lucide-react";

import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { AMENITIES } from "@/config/photos";
import type { Dict } from "@/i18n/dict";

/**
 * Порядок соответствует `amenities.items` в словаре.
 * Горячий душ идёт первым намеренно: гости говорят о нём чаще, чем о звёздах.
 */
const ICONS = [ShowerHead, Flame, ChefHat, Tent, Car, WashingMachine];

/** Bento: асимметричная сетка, первая карточка крупная. */
const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
  "sm:col-span-2",
];

export default function Amenities({ t }: { t: Dict }) {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{t.amenities.title}</h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[210px] gap-5 sm:grid-cols-4">
          {t.amenities.items.map((item, i) => {
            const Icon = ICONS[i];
            const big = i === 0;

            return (
              <Reveal
                key={item.name}
                delay={(i % 3) as 0 | 1 | 2}
                className={`group relative overflow-hidden ${SPANS[i]}`}
              >
                {/* TODO: заменить на кадры дома, печи и типи — их в исходниках нет. */}
                <Photo
                  id={AMENITIES[i]}
                  fill
                  alt=""
                  sizes={big ? "60vw" : "30vw"}
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone/85 via-stone/35 to-stone/10" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <Icon
                    size={big ? 26 : 20}
                    strokeWidth={1.5}
                    className="mb-3 text-paper/80"
                    aria-hidden
                  />
                  <h3
                    className={`text-paper ${big ? "text-2xl" : "text-lg"}`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-paper/75 ${
                      big ? "max-w-sm text-[15px]" : "text-sm"
                    }`}
                  >
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
