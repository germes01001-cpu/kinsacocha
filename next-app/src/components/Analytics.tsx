import Script from "next/script";

import { SITE } from "@/config/site";

/**
 * GA4. Подключается одной константой в site.ts.
 *
 * Пока gaId пустой — на страницу не попадает ни одного лишнего байта,
 * и cookie-баннер не нужен.
 */
export default function Analytics() {
  if (!SITE.gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${SITE.gaId}');
        `}
      </Script>
    </>
  );
}
