import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogLayout from "@/components/BlogLayout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SITE } from "@/config/site";
import { allPostParams, postBySlug, relatedFor } from "@/data/posts";
import { isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dict";

export function generateStaticParams() {
  return allPostParams();
}

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const post = postBySlug(slug);
  const content = post?.content[locale];
  if (!post || !content) return {};

  const url = `${SITE.domain}/${locale}/blog/${slug}`;
  const image = `${SITE.domain}/photos/full/${post.cover}.webp`;

  /* hreflang — только на языки, где статья действительно есть. */
  const languages = Object.fromEntries(
    (Object.keys(post.content) as Locale[]).map((l) => [
      l,
      `${SITE.domain}/${l}/blog/${slug}`,
    ]),
  );

  return {
    title: `${content.title} — Kinsacocha`,
    description: content.description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "article",
      url,
      title: content.title,
      description: content.description,
      images: [image],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [image],
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const post = postBySlug(slug);
  const content = post?.content[locale];
  if (!post || !content) notFound();

  const t = getDict(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.description,
    datePublished: post.date,
    image: `${SITE.domain}/photos/full/${post.cover}.webp`,
    author: { "@type": "Organization", name: "Kinsacocha" },
    publisher: { "@type": "Organization", name: "Kinsacocha" },
    mainEntityOfPage: `${SITE.domain}/${locale}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header locale={locale} t={t} solid />

      <main>
        <BlogLayout
          post={post}
          content={content}
          related={relatedFor(post, locale)}
          t={t}
          locale={locale}
        />
      </main>

      <Footer t={t} locale={locale} />
    </>
  );
}
