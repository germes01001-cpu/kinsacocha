/**
 * Зернистость 35мм плёнки поверх всего сайта.
 *
 * SVG-фильтр feTurbulence кодируется в data-URI и подставляется фоном —
 * ни одного лишнего запроса, ни одного килобайта картинки.
 * Слой не перехватывает клики и лежит ниже навигации и модалок.
 */

const grain = `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/>
    <feColorMatrix type='saturate' values='0'/>
  </filter>
  <rect width='100%' height='100%' filter='url(#n)' opacity='0.55'/>
</svg>`;

const src = `url("data:image/svg+xml;utf8,${encodeURIComponent(grain)}")`;

export default function FilmGrain() {
  return (
    <div
      className="film-grain"
      aria-hidden="true"
      style={{ "--grain-src": src } as React.CSSProperties}
    />
  );
}
