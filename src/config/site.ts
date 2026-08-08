/**
 * ЕДИНСТВЕННЫЙ ФАЙЛ, КОТОРЫЙ НУЖНО ПРАВИТЬ ЗАКАЗЧИКУ.
 *
 * Всё, что помечено TODO, — заглушка. Меняется здесь, по всему сайту подхватится само.
 * Открытые вопросы по этим значениям — в OPEN_QUESTIONS.md.
 */

export const SITE = {
  /** Домен без слэша на конце. Используется в canonical, og:url, sitemap. */
  domain: "https://kinsacocha.com",

  /** Номер для wa.me — только цифры, без плюса и пробелов. */
  whatsapp: "447916693473",

  /** TODO: заменить на реальный адрес. */
  email: "hola@kinsacocha.com",

  /** TODO: заменить на реальный профиль. Пустая строка — ссылка не выводится. */
  instagram: "",

  /** TODO: ID ролика на Vimeo для кнопки «Смотреть фильм». Сейчас — демо. */
  vimeoId: "76979871",

  /** TODO: код GA4 вида G-XXXXXXXXXX. Пустая строка — аналитика не подключается. */
  gaId: "",

  /** Локация без координат — намеренно (см. CLAUDE.md, раздел «Приватность»). */
  location: "Comunidad Paru-Paru, Pisac, Cusco, Peru",

  /** Год в копирайте. */
  year: 2026,

  /**
   * Пускать ли поисковики.
   *
   * Сейчас false: сайт живёт на временном адресе, а на нём выдуманные отзывы
   * и цены-заглушки. Если Google это проиндексирует, мусор останется в выдаче
   * и будет конкурировать с настоящим доменом.
   *
   * ⚠️ ПЕРЕД НАСТОЯЩИМ ЗАПУСКОМ ПОСТАВИТЬ true.
   */
  allowIndexing: false,
} as const;

/**
 * Цены. TODO: все значения — заглушки, заказчик подставит реальные.
 *
 * from: null  → на сайте останется только текстовый ориентир
 *               («Обсуждается индивидуально»), вёрстка не сломается.
 */
export const PRICING = {
  currency: "USD",
  formats: {
    /** Приехал, кинул вещи, гуляй сам. */
    access: { from: 40 as number | null, unit: "person-night" },
    /** Хозяин сопровождает на маршруте. */
    guided: { from: 90 as number | null, unit: "person-day" },
    /** Группа арендует спальные места. */
    beds: { from: 220 as number | null, unit: "night" },
    /** Весь дом, хозяин уезжает. */
    exclusive: { from: null as number | null, unit: "night" },
  },
  /** Трансфер из Писака оплачивается отдельно. */
  transferIncluded: false,
} as const;

export type FormatKey = keyof typeof PRICING.formats;
