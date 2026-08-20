// Снимок страницы или блока через уже запущенный Chrome с отладочным портом.
// Использование:
//   node shot.mjs <селектор|view> <файл.png> [маршрут] [индекс секции] [ширина]
// Примеры:
//   node shot.mjs view экран.png               — видимая часть главной
//   node shot.mjs '.jM' мозаика.png '' 18      — блок по селектору, прокрутив к 18-й секции
//   node shot.mjs view телефон.png '' 10 390   — то же в ширину телефона
import { writeFileSync } from 'node:fs';

const [sel = 'view', out = 'shot.png', route = '', scrollTo = '', width = '1440'] = process.argv.slice(2);
const PORT = 9222, SITE = 8899;

const list = await (await fetch(`http://localhost:${PORT}/json/list`)).json();
const page = list.find(t => t.type === 'page');
if (!page) { console.error('Не найдена вкладка. Chrome запущен с --remote-debugging-port=9222?'); process.exit(1); }

const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(r => (ws.onopen = r));
let id = 0; const pend = new Map();
ws.onmessage = e => { const m = JSON.parse(e.data); if (pend.has(m.id)) { pend.get(m.id)(m.result); pend.delete(m.id); } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride',
  { width: +width, height: +width < 600 ? 844 : 900, deviceScaleFactor: +width < 600 ? 2 : 1, mobile: +width < 600 });
await send('Page.navigate', { url: `http://localhost:${SITE}/index.html?v=${Date.now()}${route ? '#/' + route : ''}` });
await new Promise(r => setTimeout(r, 2600));

if (scrollTo !== '') {
  await send('Runtime.evaluate', { expression:
    `(()=>{const s=[...document.getElementById('p-home').children].filter(e=>e.tagName==='SECTION');
      const t=s[${scrollTo}]; if(t) window.scrollTo({top:t.getBoundingClientRect().top+pageYOffset-52,behavior:'auto'});})()` });
  await new Promise(r => setTimeout(r, 1500));
}
// толчок прокрутки: в фоновой вкладке кадр иначе остаётся старым
await send('Runtime.evaluate', { expression: 'window.scrollBy(0,-2);window.scrollBy(0,2);' });
await new Promise(r => setTimeout(r, 900));

let shot;
if (sel === 'view') {
  shot = await send('Page.captureScreenshot', { format: 'png' });
} else {
  const box = await send('Runtime.evaluate', { returnByValue: true, expression:
    `(()=>{const e=document.querySelector(${JSON.stringify(sel)}); if(!e) return 'null';
      const r=e.getBoundingClientRect();
      return JSON.stringify({x:r.x+scrollX,y:r.y+scrollY,w:r.width,h:Math.min(r.height,3000)});})()` });
  if (box.result.value === 'null') { console.error('Не найден:', sel); process.exit(1); }
  const b = JSON.parse(box.result.value);
  shot = await send('Page.captureScreenshot',
    { format: 'png', captureBeyondViewport: true, clip: { x: b.x, y: b.y, width: b.w, height: b.h, scale: 0.5 } });
}
writeFileSync(out, Buffer.from(shot.data, 'base64'));
console.log('ok', out);
ws.close();
