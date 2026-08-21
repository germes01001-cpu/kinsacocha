// Целостность каркаса: не сбежала ли секция из своей страницы.
//
// Зачем. 21 августа 2026 один лишний </div> в главе «Архитектура» закрыл
// #p-home на шесть блоков раньше срока. Блоки 18–23 стали соседями страниц,
// а не их содержимым — и висели поверх КАЖДОГО маршрута. Внешне всё работало:
// адрес менялся, класс .on переезжал, ссылки вели куда надо. Только видно
// сверху было всегда одно и то же — ткачество. Проверки ссылок это пропустили,
// потому что смотрели на роутер, а не на то, что человек видит.
//
// Здесь смотрим ровно на две вещи: у #main нет посторонних детей,
// и на каждом маршруте первое, что попадает в кадр, принадлежит своей странице.
const list = await (await fetch('http://localhost:9222/json/list')).json();
const page = list.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl); await new Promise(r=>ws.onopen=r);
let id=0; const pend=new Map();
ws.onmessage=e=>{const m=JSON.parse(e.data); if(pend.has(m.id)){pend.get(m.id)(m.result);pend.delete(m.id);}};
const send=(mm,p={})=>new Promise(r=>{const i=++id;pend.set(i,r);ws.send(JSON.stringify({id:i,method:mm,params:p}))});
const ev=x=>send('Runtime.evaluate',{returnByValue:true,expression:x}).then(r=>r.result&&r.result.value);
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});

const BASE = process.argv[2] || 'http://localhost:8899/index.html';
const routes = (process.argv[3] || ",tseny,ozera,atlas,atlas/zveri,atlas/arhitektura,gallery,blog,dnevnik,artefakty,kontakty").split(',');

await send('Page.navigate',{url: BASE + '?v=' + Date.now()});
await new Promise(r=>setTimeout(r,3500));

let bad = 0;

const chuzhie = await ev(`(()=>{const m=document.getElementById('main');
  return [...m.children].filter(c=>!c.classList.contains('page'))
    .map(c=>c.tagName.toLowerCase()+'.'+(c.className||'—')+' ['+(c.innerText||'').trim().slice(0,32).replace(/\\s+/g,' ')+']').join('\\n');})()`);
if (chuzhie) { bad++; console.log('❌ у #main посторонние дети (значит, страница закрылась раньше времени):\n' + chuzhie); }
else console.log('✅ у #main только .page — ни одна секция не сбежала');

for (const r of routes) {
  await ev(`location.hash='#/${r}'`); await new Promise(t=>setTimeout(t,1000));
  const res = await ev(`(()=>{const on=[...document.querySelectorAll('.page')].filter(p=>p.classList.contains('on'))[0];
    if(!on) return 'НЕТ АКТИВНОЙ СТРАНИЦЫ';
    const e=document.elementFromPoint(innerWidth/2, 320);
    if(!e) return 'ПУСТО НА ЭКРАНЕ';
    return (on.contains(e)?'ok ':'ЧУЖОЕ ') + on.id + ' · видно: "'
      + (e.innerText||e.textContent||'').trim().slice(0,40).replace(/\\s+/g,' ') + '"';})()`);
  if (!res.startsWith('ok')) bad++;
  console.log(('#/'+r).padEnd(24) + res);
}
console.log(bad ? '\n❌ проблем: ' + bad : '\n✅ каркас цел');
ws.close();
