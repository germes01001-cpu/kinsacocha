/**
 * Оригиналы → веб.
 *
 *   Kinsa_media/FOTO/*.jpg   (107 файлов, 4096×2304, ~549 МБ)
 *     → public/photos/full/  WebP 2400px  — Hero и лайтбокс
 *     → public/photos/grid/  WebP 1200px  — сетка галереи и мозаика
 *     → src/data/photos.generated.ts      — манифест
 *
 * EXIF снимается полностью: в исходниках со съёмки могут быть GPS-координаты,
 * а мы координаты не публикуем (CLAUDE.md, раздел «Приватность»).
 *
 * Запуск: npm run media
 */

import { createHash } from "node:crypto";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const SRC = "Kinsa_media/FOTO";
const OUT_FULL = "public/photos/full";
const OUT_GRID = "public/photos/grid";
const MANIFEST = "src/data/photos.generated.ts";

const SIZES = [
  { dir: OUT_FULL, width: 2400, quality: 78 },
  { dir: OUT_GRID, width: 1200, quality: 72 },
];

/** Теги галереи. Пока проставляются условно — см. OPEN_QUESTIONS.md. */
const TAGS = [
  "lakes",
  "mountains",
  "house",
  "tipi",
  "alpacas",
  "sunset",
  "night",
  "trails",
  "life",
  "food",
  "plants",
  "crafts",
];

/** Детерминированный выбор тегов: один и тот же файл всегда получает одно и то же. */
function pickTags(id) {
  const hash = createHash("sha1").update(id).digest();
  const first = TAGS[hash[0] % TAGS.length];
  const second = TAGS[hash[1] % TAGS.length];
  return first === second ? [first] : [first, second];
}

/**
 * Месяц съёмки — «2026-07».
 *
 * Берём из EXIF: даты там лежат обычным текстом «2026:07:22 15:54:17»,
 * поэтому ищем их прямо в буфере, без отдельной библиотеки. Сам EXIF
 * при этом в готовые файлы не попадает — его снимает пайплайн ниже
 * вместе с GPS-метками.
 *
 * Если даты в снимке нет, месяц остаётся пустым: фото просто не попадёт
 * в фильтр по месяцам, но останется в галерее и в тегах.
 */
function pickMonth(exif) {
  if (!exif) return "";
  const match = /(\d{4}):(\d{2}):\d{2} \d{2}:\d{2}:\d{2}/.exec(
    exif.toString("latin1"),
  );
  return match ? `${match[1]}-${match[2]}` : "";
}

async function main() {
  await Promise.all([
    mkdir(OUT_FULL, { recursive: true }),
    mkdir(OUT_GRID, { recursive: true }),
    mkdir(path.dirname(MANIFEST), { recursive: true }),
  ]);

  const files = (await readdir(SRC))
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .sort();

  console.log(`Найдено ${files.length} фото. Обрабатываю…`);

  const manifest = [];
  let done = 0;

  for (const file of files) {
    const id = path.parse(file).name;
    const src = path.join(SRC, file);
    const image = sharp(src, { failOn: "none" });
    const meta = await image.metadata();

    for (const { dir, width, quality } of SIZES) {
      await sharp(src, { failOn: "none" })
        .rotate() // применяем EXIF-поворот до того, как выбросим EXIF
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 5 })
        .toFile(path.join(dir, `${id}.webp`));
    }

    // Крошечное превью в base64 — держит размер блока до загрузки фото.
    const blur = await sharp(src, { failOn: "none" })
      .rotate()
      .resize({ width: 16 })
      .webp({ quality: 40 })
      .toBuffer();

    const rotated = meta.orientation && meta.orientation >= 5;
    const width = rotated ? meta.height : meta.width;
    const height = rotated ? meta.width : meta.height;

    manifest.push({
      id,
      w: width ?? 4096,
      h: height ?? 2304,
      blur: `data:image/webp;base64,${blur.toString("base64")}`,
      month: pickMonth(meta.exif),
      tags: pickTags(id),
    });

    done += 1;
    if (done % 10 === 0 || done === files.length) {
      console.log(`  ${done}/${files.length}`);
    }
  }

  const body = `// Файл сгенерирован: npm run media. Руками не править.
// Теги проставлены условно — размечаются начисто после отбора финальных фото.

export type PhotoTag =
${TAGS.map((t) => `  | "${t}"`).join("\n")};

export type Photo = {
  id: string;
  w: number;
  h: number;
  blur: string;
  /** Месяц съёмки, «2026-07». Пустая строка — даты в снимке не было. */
  month: string;
  tags: PhotoTag[];
};

export const photos: Photo[] = ${JSON.stringify(manifest, null, 2)};

export const photoTags: PhotoTag[] = ${JSON.stringify(TAGS)};

/** Месяцы, в которые здесь снимали, от новых к старым. */
export const photoMonths: string[] = ${JSON.stringify(
    [...new Set(manifest.map((p) => p.month).filter(Boolean))].sort().reverse(),
  )};

/** Путь к файлу нужного размера. */
export function photoSrc(id: string, size: "full" | "grid" = "grid") {
  return \`/photos/\${size}/\${id}.webp\`;
}
`;

  await writeFile(MANIFEST, body, "utf8");
  console.log(`\nГотово. Манифест: ${MANIFEST}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
