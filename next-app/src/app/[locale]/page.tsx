import { notFound } from "next/navigation";

import About from "@/components/About";
import Altitude from "@/components/Altitude";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Fauna from "@/components/Fauna";
import Flora from "@/components/Flora";
import Food from "@/components/Food";
import Footer from "@/components/Footer";
import Formats from "@/components/Formats";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Lakes from "@/components/Lakes";
import NotPublished from "@/components/NotPublished";
import OneDay from "@/components/OneDay";
import PhotoMosaic from "@/components/PhotoMosaic";
import Preparation from "@/components/Preparation";
import Reviews from "@/components/Reviews";
import Road from "@/components/Road";
import RoutesSection from "@/components/RoutesSection";
import Sleep from "@/components/Sleep";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Story from "@/components/Story";
import Weaving from "@/components/Weaving";
import { SITE } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getDict } from "@/i18n/dict";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDict(locale);

  /* Schema.org — без координат, намеренно. */
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Kinsacocha",
    description: t.meta.description,
    url: `${SITE.domain}/${locale}`,
    email: SITE.email,
    telephone: `+${SITE.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Comunidad Paru-Paru, Pisac",
      addressRegion: "Cusco",
      addressCountry: "PE",
    },
    image: `${SITE.domain}/photos/full/1786035198697.webp`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header locale={locale} t={t} />

      {/*
       * Порядок собран главами, а не по одному блоку:
       *   Место — Story, Обо мне, Чего не найдёте, Озёра, Дорога, Высота
       *   Дом   — Форматы, Сутки здесь, Еда, Удобства, Где спать
       *   Снаружи — Маршруты, Фауна, Флора, Ткачество
       *   Финал — Мозаика, Подготовка, Практика, Отзывы, Контакты
       *
       * «Обо мне» стоит выше «Чего вы здесь не найдёте» намеренно: тогда
       * правило про непубликуемые тропы звучит от человека, а не от бренда.
       */}
      <main>
        <Hero t={t} />
        <Story t={t} />
        <About t={t} />
        <NotPublished t={t} />
        <Lakes t={t} locale={locale} />
        <Road t={t} />
        <Altitude t={t} locale={locale} />
        <Formats t={t} />
        <OneDay t={t} />
        <Food t={t} />
        <Amenities t={t} />
        <Sleep t={t} />
        <RoutesSection t={t} locale={locale} />
        <Fauna t={t} />
        <Flora t={t} />
        <Weaving t={t} />
        <PhotoMosaic t={t} locale={locale} />
        <Preparation t={t} />
        <Faq t={t} />
        <Reviews t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} locale={locale} />
      <StickyWhatsApp t={t} />
    </>
  );
}
