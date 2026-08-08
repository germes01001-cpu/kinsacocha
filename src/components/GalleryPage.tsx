"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Photo from "@/components/ui/Photo";
import { photos, photoTags, type PhotoTag } from "@/data/photos.generated";
import type { Dict } from "@/i18n/dict";

/** Сколько фото добавляем за раз при подгрузке по скроллу. */
const PAGE = 24;

export default function GalleryPage({ t }: { t: Dict }) {
  const [tag, setTag] = useState<PhotoTag | null>(null);
  const [limit, setLimit] = useState(PAGE);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sentinel = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (tag ? photos.filter((p) => p.tags.includes(tag)) : photos),
    [tag],
  );

  const visible = filtered.slice(0, limit);

  // Смена фильтра — начинаем показ заново.
  useEffect(() => setLimit(PAGE), [tag]);

  // Догрузка по мере прокрутки.
  useEffect(() => {
    const node = sentinel.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLimit((n) => n + PAGE);
      },
      { rootMargin: "600px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [filtered.length]);

  const move = useCallback(
    (step: number) =>
      setLightbox((i) =>
        i === null ? i : (i + step + filtered.length) % filtered.length,
      ),
    [filtered.length],
  );

  // Клавиатура в лайтбоксе: стрелки и Esc.
  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, move]);

  // Свайпы на телефоне.
  const touchX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 60) move(dx < 0 ? 1 : -1);
  };

  return (
    <div className="px-5 pb-24 pt-32 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl sm:text-5xl">{t.gallery.title}</h1>
        <p className="mt-4 text-muted">{t.gallery.lead}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTag(null)}
            aria-pressed={tag === null}
            className={`border px-4 py-1.5 text-sm transition-colors duration-300 ${
              tag === null
                ? "border-ink bg-ink text-paper"
                : "border-fog text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {t.gallery.all}
          </button>

          {photoTags.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTag(item)}
              aria-pressed={tag === item}
              className={`border px-4 py-1.5 text-sm transition-colors duration-300 ${
                tag === item
                  ? "border-ink bg-ink text-paper"
                  : "border-fog text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {t.gallery.tags[item] ?? item}
            </button>
          ))}
        </div>

        {/* Локации не подписаны намеренно — часть позиционирования. */}
        <p className="mt-5 text-xs text-muted">{t.gallery.noGeo}</p>

        <div className="mt-10 columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
          {visible.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightbox(i)}
              className="group block w-full break-inside-avoid overflow-hidden"
            >
              <Photo
                id={photo.id}
                alt=""
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full saturate-[0.9] transition-all duration-[900ms] ease-out group-hover:scale-[1.03] group-hover:saturate-100"
              />
            </button>
          ))}
        </div>

        <div ref={sentinel} className="h-4" />
      </div>

      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-stone/95 backdrop-blur-sm"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label={t.gallery.close}
            className="absolute right-5 top-5 z-10 text-paper/70 transition-colors hover:text-paper"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={t.gallery.prev}
            className="absolute left-3 z-10 p-2 text-paper/60 transition-colors hover:text-paper sm:left-6"
          >
            <ChevronLeft size={36} strokeWidth={1.25} />
          </button>

          <button
            type="button"
            onClick={() => move(1)}
            aria-label={t.gallery.next}
            className="absolute right-3 z-10 p-2 text-paper/60 transition-colors hover:text-paper sm:right-6"
          >
            <ChevronRight size={36} strokeWidth={1.25} />
          </button>

          <div className="relative h-[85vh] w-full max-w-6xl px-12">
            <Photo
              id={filtered[lightbox].id}
              size="full"
              fill
              alt=""
              sizes="90vw"
              priority
              className="object-contain"
            />
          </div>

          <p className="absolute bottom-5 text-xs text-paper/40">
            {lightbox + 1} / {filtered.length}
          </p>
        </div>
      )}
    </div>
  );
}
