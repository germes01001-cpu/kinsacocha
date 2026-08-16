import type { Locale } from "@/i18n/config";

/**
 * Тело статьи — простые блоки вместо MDX.
 *
 * MDX тянет за собой сборочный пайплайн и рантайм. Здесь всё статично
 * и типизировано, а рендер — тридцать строк в BlogLayout.
 */
export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "quote"; text: string }
  | { t: "list"; items: string[] }
  /** Внутренняя ссылка на другую статью — по slug. */
  | { t: "link"; slug: string; text: string };

export type PostContent = {
  title: string;
  /** Для meta description и карточки в списке. */
  description: string;
  body: Block[];
};

export type Post = {
  slug: string;
  /** Имя файла обложки из public/photos. */
  cover: string;
  date: string;
  /** Черновик: заголовок и план есть, текст дописывается. */
  draft?: boolean;
  /** Slug'и связанных статей. */
  related?: string[];
  /** Языки, на которых статья существует. */
  content: Partial<Record<Locale, PostContent>>;
};
