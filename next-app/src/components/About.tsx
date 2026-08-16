import Image from "next/image";

import Reveal from "@/components/ui/Reveal";
import type { Dict } from "@/i18n/dict";

/**
 * «Кому вы пишете».
 *
 * Единственное целевое действие сайта — написать в личный мессенджер.
 * Личный мессенджер требует лица и имени: без них человек пишет в пустоту.
 * Блок стоит выше «Чего вы здесь не найдёте» намеренно — тогда правило
 * про непубликуемые тропы звучит от человека, а не от бренда.
 */
export default function About({ t }: { t: Dict }) {
  return (
    <section className="border-y border-fog bg-paper-deep px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-[200px_1fr] sm:items-start sm:gap-14">
        <Reveal>
          <div className="relative aspect-square w-40 overflow-hidden sm:w-full">
            <Image
              src="/photos/owner.webp"
              alt={t.about.name}
              fill
              sizes="200px"
              className="object-cover saturate-[0.85]"
            />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="text-2xl sm:text-3xl">{t.about.title}</h2>

          {t.about.body.map((line) => (
            <p
              key={line}
              className="mt-4 text-[15px] leading-relaxed text-ink/80"
            >
              {line}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
