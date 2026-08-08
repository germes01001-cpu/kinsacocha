import Link from "next/link";

import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/config/site";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";

/**
 * Подвал — последнее, что видит человек перед уходом.
 *
 * В первой версии здесь были логотип, пять ссылок и почта: страница обрывалась.
 * Теперь подвал работает последним аргументом, а не служебной строкой.
 */
export default function Footer({
  t,
  locale,
}: {
  t: Dict;
  locale: Locale;
}) {
  const anchors = [
    { href: `/${locale}#lakes`, label: t.nav.lakes },
    { href: `/${locale}#formats`, label: t.nav.formats },
    { href: `/${locale}#routes`, label: t.nav.routes },
    { href: `/${locale}#fauna`, label: t.nav.life },
    { href: `/${locale}/gallery`, label: t.nav.gallery },
    { href: `/${locale}/blog`, label: t.nav.blog },
  ];

  return (
    <footer className="bg-stone px-5 pt-20 pb-10 text-paper sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Последний заход на разговор — до всех служебных ссылок. */}
        <div className="border-b border-paper/10 pb-14">
          <p className="max-w-xl font-display text-2xl leading-snug text-paper sm:text-3xl">
            {t.footer.tagline}
          </p>
          <WhatsAppButton
            message={t.contact.wa}
            label={t.contact.cta}
            variant="light"
            className="mt-7"
          />
          <p className="mt-4 text-sm text-paper/45">{t.contact.reply}</p>
        </div>

        <div className="grid gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">Kinsacocha</p>
            {/* Локация без координат — намеренно. */}
            <p className="mt-3 text-sm leading-relaxed text-paper/55">
              {SITE.location}
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-paper/40">
              {t.footer.lakesTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-paper/60">
              {t.lakes.items.map((lake) => (
                <li key={lake.name} className="flex justify-between gap-4">
                  <span>{lake.name}</span>
                  <span className="text-paper/35">{lake.altitude}</span>
                </li>
              ))}
            </ul>
          </div>

          <nav>
            <h2 className="text-xs uppercase tracking-[0.18em] text-paper/40">
              {t.footer.nav}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {anchors.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-paper/40">
              {t.nav.contact}
            </h2>

            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 block text-sm text-paper/70 transition-colors hover:text-paper"
            >
              {SITE.email}
            </a>

            {SITE.instagram && (
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-paper/70 transition-colors hover:text-paper"
              >
                {t.footer.instagram}
              </a>
            )}

            <div className="mt-6 flex gap-4">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`text-xs tracking-widest transition-colors ${
                    l === locale
                      ? "text-paper"
                      : "text-paper/40 hover:text-paper/80"
                  }`}
                >
                  {localeLabels[l]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-14 border-t border-paper/10 pt-6 text-xs text-paper/40">
          © {SITE.year} Kinsacocha. Comunidad Paru-Paru, Peru.
        </p>
      </div>
    </footer>
  );
}
