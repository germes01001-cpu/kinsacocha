import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { STORY } from "@/config/photos";
import type { Dict } from "@/i18n/dict";

/** Небрежно разбросанные поляроиды — лёгкие повороты и тени. */
const TILT = ["-4deg", "3deg", "-2deg", "5deg"];

export default function Story({ t }: { t: Dict }) {
  return (
    <section id="story" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="text-3xl sm:text-4xl">{t.story.title}</h2>
          <p className="mt-6 font-display text-xl leading-snug text-clay sm:text-2xl">
            {t.story.lead}
          </p>

          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink/80">
            {t.story.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-10 space-y-3 border-l-2 border-clay/40 pl-5">
            <p className="font-display text-lg leading-snug">{t.story.name}</p>
            <p className="font-display text-lg leading-snug">
              {t.story.ownership}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 sm:gap-7">
          {STORY.map((id, i) => (
            <Reveal
              key={id}
              delay={(i % 3) as 0 | 1 | 2}
              className={i % 2 === 1 ? "mt-10" : ""}
            >
              <div
                className="bg-paper p-2.5 pb-8 shadow-[0_10px_30px_-12px_rgba(31,29,26,0.45)]"
                style={{ transform: `rotate(${TILT[i % TILT.length]})` }}
              >
                <Photo
                  id={id}
                  alt=""
                  sizes="(max-width: 1024px) 45vw, 25vw"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
