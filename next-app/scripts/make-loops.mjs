/**
 * Фоновые видео-петли из полных роликов.
 *
 * Полные видео (225 МБ) на сайте не хостятся — они уходят на Vimeo.
 * Здесь режутся короткие зацикленные фрагменты для фонов секций:
 * без звука, 1280px, до 3 МБ каждый.
 *
 * ⚠️ Кадров с огнём в печи в исходниках НЕТ. Секция «Живой огонь» пока
 * стоит на фотографии. См. OPEN_QUESTIONS.md.
 *
 * Запуск: npm run loops (нужен ffmpeg в системе)
 */

import { execFile } from "node:child_process";
import { mkdir, stat } from "node:fs/promises";
import { promisify } from "node:util";

const run = promisify(execFile);

const SRC = "Kinsa_media/VIDEO";
const OUT = "public/video";

const CLIPS = [
  {
    name: "fog",
    file: "VID_20260728_152415.mp4",
    start: 3,
    duration: 8,
    note: "туман сползает по гребню",
  },
  {
    name: "lagoon",
    file: "VID_20260803_162346.mp4",
    start: 0.5,
    duration: 7,
    note: "бирюзовая лагуна сверху",
  },
  {
    name: "water",
    file: "VID_20260728_120146.mp4",
    start: 6,
    duration: 8,
    note: "вода в русле",
  },
];

async function main() {
  await mkdir(OUT, { recursive: true });

  for (const clip of CLIPS) {
    const out = `${OUT}/${clip.name}.mp4`;

    await run("ffmpeg", [
      "-v", "error",
      "-ss", String(clip.start),
      "-i", `${SRC}/${clip.file}`,
      "-t", String(clip.duration),
      "-an",                                   // без звука
      "-vf", "scale=1280:-2,fps=24",
      "-c:v", "libx264",
      "-profile:v", "main",
      "-crf", "30",
      "-preset", "slow",
      "-pix_fmt", "yuv420p",
      "-movflags", "+faststart",               // старт до полной загрузки
      out,
      "-y",
    ]);

    const { size } = await stat(out);
    const mb = (size / 1024 / 1024).toFixed(1);
    console.log(`${clip.name}.mp4 — ${mb} МБ (${clip.note})`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
