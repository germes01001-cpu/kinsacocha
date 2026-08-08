import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostCard } from "@/components/BlogLayout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/config/site";
import { postsFor } from "@/data/posts";
import { isLocale, locales } from "@/i18n/config";
import { getDict } from "@/i18n/dict";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const t = getDict(locale);
  const title = `${t.blog.title} — Kinsacocha`;

  return {
    title,
    description: t.blog.lead,
    alternates: {
      canonical: `${SITE.domain}/${locale}/blog`,
      languages: {
        ...Object.fromEntries(
          locales.map((l) => [l, `${SITE.domain}/${l}/blog`]),
        ),
        "x-default": `${SITE.domain}/en/blog`,
      },
    },
    openGraph: { title, description: t.blog.lead },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDict(locale);
  const list = postsFor(locale);

  return (
    <>
      <Header locale={locale} t={t} solid />

      <main className="px-5 pb-24 pt-32 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl sm:text-5xl">{t.blog.title}</h1>
          <p className="mt-4 max-w-lg text-muted">{t.blog.lead}</p>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((post, i) => (
              <PostCard
                key={post.slug}
                post={post}
                locale={locale}
                t={t}
                delay={(i % 3) as 0 | 1 | 2}
              />
            ))}
          </div>

          {list.length === 0 && (
            <Reveal>
              <p className="mt-14 text-muted">—</p>
            </Reveal>
          )}
        </div>
      </main>

      <Footer t={t} locale={locale} />
    </>
  );
}
