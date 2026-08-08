import { notFound } from "next/navigation";

import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Fauna from "@/components/Fauna";
import Flora from "@/components/Flora";
import Food from "@/components/Food";
import Footer from "@/components/Footer";
import Formats from "@/components/Formats";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NotPublished from "@/components/NotPublished";
import PhotoMosaic from "@/components/PhotoMosaic";
import Preparation from "@/components/Preparation";
import Reviews from "@/components/Reviews";
import RoutesSection from "@/components/RoutesSection";
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

      <main>
        <Hero t={t} />
        <Story t={t} />
        <NotPublished t={t} />
        <Formats t={t} />
        <Food t={t} />
        <Amenities t={t} />
        <RoutesSection t={t} locale={locale} />
        <Fauna t={t} />
        <Flora t={t} />
        <Weaving t={t} />
        <PhotoMosaic t={t} locale={locale} />
        <Preparation t={t} />
        <Reviews t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} locale={locale} />
    </>
  );
}
