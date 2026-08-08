import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import { notFound } from "next/navigation";

import Analytics from "@/components/Analytics";
import FilmGrain from "@/components/FilmGrain";
import { SITE } from "@/config/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dict";

import "../globals.css";

/* Заголовки — плитный serif, тяжёлый и грубоватый. Кириллица есть. */
const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  variable: "--font-bitter",
  display: "swap",
});

/* Текст — нейтральный читаемый гротеск. */
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const { meta } = getDict(locale);

  /* hreflang на все три языка — иначе EN и ES версии не проиндексируются. */
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${SITE.domain}/${l}`]),
  );

  return {
    metadataBase: new URL(SITE.domain),
    /* Мета-запрет индексации на временном адресе — надёжнее, чем один robots.txt. */
    robots: SITE.allowIndexing ? undefined : { index: false, follow: false },
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${SITE.domain}/${locale}`,
      languages: { ...languages, "x-default": `${SITE.domain}/ru` },
    },
    openGraph: {
      type: "website",
      locale,
      url: `${SITE.domain}/${locale}`,
      title: meta.title,
      description: meta.description,
      siteName: "Kinsacocha",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function LocaleLayout({ params, children }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale satisfies Locale} className={`${bitter.variable} ${inter.variable}`}>
      <body>
        {children}
        <FilmGrain />
        <Analytics />
      </body>
    </html>
  );
}
