"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { localeLabels, locales, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";

const SECTIONS = [
  { id: "story", key: "story" },
  { id: "lakes", key: "lakes" },
  { id: "formats", key: "formats" },
  { id: "routes", key: "routes" },
  { id: "fauna", key: "life" },
  { id: "contact", key: "contact" },
] as const;

/**
 * solid — для страниц без Hero (галерея, блог): там шапка не может быть
 * прозрачной, иначе светлый текст ляжет на светлый фон и исчезнет.
 */
export default function Header({
  locale,
  t,
  solid = false,
}: {
  locale: Locale;
  t: Dict;
  solid?: boolean;
}) {
  const [scrolledRaw, setScrolled] = useState(false);
  const scrolled = solid || scrolledRaw;
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Меню на мобайле блокирует прокрутку под собой.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** На главной якорь скроллит, с других страниц — уводит на главную к секции. */
  const isHome = pathname === `/${locale}`;
  const anchor = (id: string) => (isHome ? `#${id}` : `/${locale}#${id}`);

  /** Тот же путь на другом языке: /ru/blog → /en/blog. */
  const swapLocale = (next: Locale) => {
    const rest = pathname.replace(/^\/[a-z]{2}/, "");
    return `/${next}${rest}`;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-paper/85 backdrop-blur-md border-b border-fog/60"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href={`/${locale}`}
            className={`font-display text-xl tracking-tight transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-paper drop-shadow-sm"
            }`}
          >
            Kinsacocha
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={anchor(s.id)}
                className={`text-sm transition-colors duration-500 ${
                  scrolled
                    ? "text-muted hover:text-ink"
                    : "text-paper/80 hover:text-paper drop-shadow-sm"
                }`}
              >
                {t.nav[s.key]}
              </a>
            ))}
            <Link
              href={`/${locale}/gallery`}
              className={`text-sm transition-colors duration-500 ${
                scrolled
                  ? "text-muted hover:text-ink"
                  : "text-paper/80 hover:text-paper drop-shadow-sm"
              }`}
            >
              {t.nav.gallery}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className={`text-sm transition-colors duration-500 ${
                scrolled
                  ? "text-muted hover:text-ink"
                  : "text-paper/80 hover:text-paper drop-shadow-sm"
              }`}
            >
              {t.nav.blog}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div
              className={`hidden items-center gap-1 text-xs sm:flex ${
                scrolled ? "text-muted" : "text-paper/70"
              }`}
            >
              {locales.map((l, i) => (
                <span key={l} className="flex items-center gap-1">
                  {i > 0 && <span className="opacity-40">/</span>}
                  <Link
                    href={swapLocale(l)}
                    className={`px-0.5 transition-colors ${
                      l === locale
                        ? scrolled
                          ? "text-ink font-medium"
                          : "text-paper font-medium"
                        : "hover:opacity-100 opacity-70"
                    }`}
                  >
                    {localeLabels[l]}
                  </Link>
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.nav.menu}
              className={`lg:hidden ${scrolled ? "text-ink" : "text-paper"}`}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню — полноэкранное. */}
      {open && (
        <div className="fixed inset-0 z-100 flex flex-col bg-paper lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-xl">Kinsacocha</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.nav.close}
              className="text-ink"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={anchor(s.id)}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-ink py-2"
              >
                {t.nav[s.key]}
              </a>
            ))}
            <Link
              href={`/${locale}/gallery`}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ink py-2"
            >
              {t.nav.gallery}
            </Link>
            <Link
              href={`/${locale}/blog`}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ink py-2"
            >
              {t.nav.blog}
            </Link>
          </nav>

          <div className="flex gap-6 border-t border-fog px-8 py-6">
            {locales.map((l) => (
              <Link
                key={l}
                href={swapLocale(l)}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-widest ${
                  l === locale ? "text-ink font-medium" : "text-muted"
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
