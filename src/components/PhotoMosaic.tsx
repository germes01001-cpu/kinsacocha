import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import { MOSAIC } from "@/config/photos";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";

export default function PhotoMosaic({
  t,
  locale,
}: {
  t: Dict;
  locale: Locale;
}) {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{t.mosaic.title}</h2>
        </Reveal>

        {/* Masonry колонками — без JS и без библиотек. */}
        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {MOSAIC.map((id, i) => (
            <Reveal key={id} delay={(i % 3) as 0 | 1 | 2} className="break-inside-avoid">
              <div className="group overflow-hidden">
                <Photo
                  id={id}
                  alt=""
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full saturate-[0.92] transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:saturate-100"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            href={`/${locale}/gallery`}
            className="group inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-sm transition-colors hover:border-ink"
          >
            {t.mosaic.cta}
            <ArrowRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
