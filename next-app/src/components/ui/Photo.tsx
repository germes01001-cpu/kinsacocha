import Image from "next/image";

import { photos } from "@/data/photos.generated";

const byId = new Map(photos.map((p) => [p.id, p]));

/**
 * Фото из манифеста.
 *
 * Размеры и размытое превью берутся из photos.generated.ts — это держит
 * блок на месте до загрузки картинки и убирает «прыжок» вёрстки.
 */
export default function Photo({
  id,
  size = "grid",
  alt = "",
  priority = false,
  sizes = "100vw",
  className = "",
  fill = false,
}: {
  id: string;
  size?: "full" | "grid";
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fill?: boolean;
}) {
  const meta = byId.get(id);
  if (!meta) return null;

  const src = `/photos/${size}/${id}.webp`;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        placeholder="blur"
        blurDataURL={meta.blur}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={meta.w}
      height={meta.h}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      placeholder="blur"
      blurDataURL={meta.blur}
      className={className}
    />
  );
}
