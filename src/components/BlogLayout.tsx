import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";
import type { Block, Post, PostContent } from "@/data/posts";

/** Рендер блоков статьи. MDX не нужен — типы и тридцать строк. */
function Body({ blocks, locale }: { blocks: Block[]; locale: Locale }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.t) {
          case "h2":
            return (
              <h2 key={i} className="mt-14 mb-5 text-2xl sm:text-3xl">
                {block.text}
              </h2>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                className="my-12 border-l-2 border-clay pl-6 font-display text-xl leading-snug text-clay sm:text-2xl"
              >
                {block.text}
              </blockquote>
            );

          case "list":
            return (
              <ul key={i} className="my-6 space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-fog pb-3 text-[17px] leading-relaxed text-ink/80 last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "link":
            return (
              <Link
                key={i}
                href={`/${locale}/blog/${block.slug}`}
                className="group my-8 flex items-center gap-2 border-y border-fog py-4 text-[15px] text-clay"
              >
                {block.text}
                <ArrowRight
                  size={16}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            );

          default:
            return (
              <p
                key={i}
                className="mb-5 text-[17px] leading-[1.75] text-ink/85"
              >
                {block.text}
              </p>
            );
        }
      })}
    </>
  );
}

export default function BlogLayout({
  post,
  content,
  related,
  t,
  locale,
}: {
  post: Post;
  content: PostContent;
  related: Post[];
  t: Dict;
  locale: Locale;
}) {
  return (
    <article className="pb-24 pt-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link
          href={`/${locale}/blog`}
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.75}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          {t.blog.back}
        </Link>

        {post.draft && (
          <p className="mt-8 border border-clay/40 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-clay inline-block">
            {t.blog.draft}
          </p>
        )}

        <h1 className="mt-6 text-3xl leading-tight sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {content.description}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-5 sm:px-8">
        <Photo
          id={post.cover}
          size="full"
          alt=""
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
          className="aspect-16/9 w-full object-cover"
        />
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-5 sm:px-8">
        <Body blocks={content.body} locale={locale} />

        <div className="mt-16 border-t border-fog pt-10">
          <WhatsAppButton message={t.blog.wa} label={t.blog.cta} />
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xs uppercase tracking-[0.18em] text-muted">
              {t.blog.related}
            </h2>
            <ul className="mt-6 space-y-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${locale}/blog/${item.slug}`}
                    className="group flex items-baseline gap-3"
                  >
                    <span className="font-display text-lg transition-colors group-hover:text-clay">
                      {item.content[locale]?.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}

/** Карточка в списке — вынесена сюда, чтобы список и статья были в одном месте. */
export function PostCard({
  post,
  locale,
  t,
  delay = 0,
}: {
  post: Post;
  locale: Locale;
  t: Dict;
  delay?: 0 | 1 | 2;
}) {
  const content = post.content[locale];
  if (!content) return null;

  return (
    <Reveal as="article" delay={delay}>
      <Link href={`/${locale}/blog/${post.slug}`} className="group block">
        <div className="overflow-hidden">
          <Photo
            id={post.cover}
            alt=""
            sizes="(max-width: 640px) 100vw, 33vw"
            className="aspect-4/3 w-full object-cover saturate-[0.92] transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:saturate-100"
          />
        </div>

        {post.draft && (
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-clay">
            {t.blog.draft}
          </p>
        )}

        <h2 className="mt-3 text-xl leading-snug transition-colors group-hover:text-clay">
          {content.title}
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
          {content.description}
        </p>
      </Link>
    </Reveal>
  );
}
