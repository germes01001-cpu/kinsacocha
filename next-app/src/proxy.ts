import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/i18n/config";

/**
 * Корень сайта уводим на язык по умолчанию.
 *
 * Автоопределения по языку браузера НЕТ намеренно: оно отдаёт поисковому
 * роботу случайную версию и ломает индексацию остальных двух.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|photos|video|og|favicon.ico|robots.txt|sitemap.xml).*)"],
};
