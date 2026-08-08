import type { Locale } from "@/i18n/config";

import { altitude } from "./altitude";
import { chuno } from "./chuno";
import { drafts } from "./drafts";
import { lakes } from "./lakes";
import type { Post } from "./types";

export type { Block, Post, PostContent } from "./types";

/** Порядок в списке: сначала написанное, потом черновики. */
export const posts: Post[] = [lakes, altitude, chuno, ...drafts];

/** Статьи, существующие на этом языке. */
export function postsFor(locale: Locale) {
  return posts.filter((p) => p.content[locale]);
}

export function postBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/** Связанные статьи — только те, что есть на нужном языке. */
export function relatedFor(post: Post, locale: Locale) {
  return (post.related ?? [])
    .map(postBySlug)
    .filter((p): p is Post => Boolean(p?.content[locale]));
}

/** Все пары locale + slug — для generateStaticParams и sitemap. */
export function allPostParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const post of posts) {
    for (const locale of Object.keys(post.content) as Locale[]) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}
