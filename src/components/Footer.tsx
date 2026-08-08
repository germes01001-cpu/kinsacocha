import Link from "next/link";

import { SITE } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";

export default function Footer({
  t,
  locale,
}: {
  t: Dict;
  locale: Locale;
}) {
  return (
    <footer className="bg-stone px-5 py-16 text-paper sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl">Kinsacocha</p>
            {/* Локация без координат — намеренно. */}
            <p className="mt-3 text-sm leading-relaxed text-paper/55">
              {SITE.location}
            </p>
          </div>

          <nav>
            <h2 className="text-xs uppercase tracking-[0.18em] text-paper/40">
              {t.footer.nav}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#story" className="text-paper/70 hover:text-paper">
                  {t.nav.story}
                </a>
              </li>
              <li>
                <a href="#formats" className="text-paper/70 hover:text-paper">
                  {t.nav.formats}
                </a>
              </li>
              <li>
                <a href="#routes" className="text-paper/70 hover:text-paper">
                  {t.nav.routes}
                </a>
              </li>
              <li>
                <Link
                  href={`/${locale}/gallery`}
                  className="text-paper/70 hover:text-paper"
                >
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-paper/70 hover:text-paper"
                >
                  {t.nav.blog}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-paper/70 hover:text-paper"
            >
              {SITE.email}
            </a>

            {SITE.instagram && (
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-sm text-paper/70 hover:text-paper"
              >
                {t.footer.instagram}
              </a>
            )}
          </div>
        </div>

        <p className="mt-14 border-t border-paper/10 pt-6 text-xs text-paper/40">
          © {SITE.year} Kinsacocha. Comunidad Paru-Paru, Peru.
        </p>
      </div>
    </footer>
  );
}
