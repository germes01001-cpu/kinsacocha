import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import GalleryPage from "@/components/GalleryPage";
import Header from "@/components/Header";
import { SITE } from "@/config/site";
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
  const title = `${t.gallery.title} — Kinsacocha`;

  return {
    title,
    description: t.gallery.lead,
    alternates: {
      canonical: `${SITE.domain}/${locale}/gallery`,
      languages: {
        ...Object.fromEntries(
          locales.map((l) => [l, `${SITE.domain}/${l}/gallery`]),
        ),
        "x-default": `${SITE.domain}/en/gallery`,
      },
    },
    openGraph: { title, description: t.gallery.lead },
  };
}

export default async function Gallery({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDict(locale);

  return (
    <>
      <Header locale={locale} t={t} solid />
      <main>
        <GalleryPage t={t} />
      </main>
      <Footer t={t} locale={locale} />
    </>
  );
}
