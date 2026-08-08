"use client";

import { Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import Photo from "@/components/ui/Photo";
import VideoModal from "@/components/VideoModal";
import { HERO } from "@/config/photos";
import type { Dict } from "@/i18n/dict";

const INTERVAL = 4200; // мс между кадрами

export default function Hero({ t }: { t: Dict }) {
  const [index, setIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const lastWheel = useRef(0);

  const advance = useCallback((step: number) => {
    setIndex((i) => (i + step + HERO.length) % HERO.length);
  }, []);

  // Смена по таймеру.
  useEffect(() => {
    if (videoOpen) return;
    const id = setInterval(() => advance(1), INTERVAL);
    return () => clearInterval(id);
  }, [advance, videoOpen]);

  // Смена по колесу мыши, пока Hero на экране. Скролл страницы не блокируем.
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (window.scrollY > window.innerHeight * 0.6) return;
      const now = Date.now();
      if (now - lastWheel.current < 700) return;
      lastWheel.current = now;
      advance(e.deltaY > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [advance]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone">
      {HERO.map((id, i) => (
        <div
          key={id}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Photo
            id={id}
            size="full"
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            alt=""
          />
        </div>
      ))}

      {/* Затемнение под текст. Кадры разные — на солнечных заголовок иначе
          читается на грани, поэтому overlay плотнее, чем кажется нужным. */}
      <div className="absolute inset-0 bg-linear-to-b from-stone/55 via-stone/35 to-stone/75" />
      <div className="absolute inset-0 bg-radial-[at_50%_60%] from-stone/45 to-transparent to-60%" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-4xl leading-[1.08] text-paper drop-shadow-md sm:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-base text-paper/85 drop-shadow sm:text-lg">
          {t.hero.subtitle}
        </p>

        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          className="mt-10 inline-flex items-center gap-3 border border-paper/40 px-7 py-3.5 text-sm tracking-wide text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
        >
          <Play size={16} strokeWidth={1.75} aria-hidden />
          {t.hero.watchFilm}
        </button>
      </div>

      {/* Индикатор слайдов. */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {HERO.map((id, i) => (
          <button
            key={id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${i + 1}`}
            className={`h-0.5 transition-all duration-500 ${
              i === index ? "w-7 bg-paper" : "w-3 bg-paper/40"
            }`}
          />
        ))}
      </div>

      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        closeLabel={t.nav.close}
      />
    </section>
  );
}
