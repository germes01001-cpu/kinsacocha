// Автоматическая часть ревью: переполнение, размеры целей, alt, фокус, перекрытия
const DEFAULT_ROUTES = ["","tseny","ozera","atlas","atlas/zveri","atlas/rasteniya","atlas/rasteniya/kaktus","gallery","blog","dnevnik","artefakty","kontakty"];
// маршруты можно передать аргументом через запятую, пустая строка — главная
const routes = process.argv[2] ? process.argv[2].split(',') : DEFAULT_ROUTES;
const VPS = [[375,2,true],[768,2,true],[1280,1,false],[1920,1,false]];
const list = await (await fetch('http://localhost:9222/json/list')).json();
const page = list.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl); await new Promise(r=>ws.onopen=r);
let id=0; const pend=new Map();
ws.onmessage=e=>{const m=JSON.parse(e.data); if(pend.has(m.id)){pend.get(m.id)(m.result);pend.delete(m.id);}};
const send=(mm,p={})=>new Promise(r=>{const i=++id;pend.set(i,r);ws.send(JSON.stringify({id:i,method:mm,params:p}))});
await send('Page.enable');

const CHECK = `(function(){
  var out={overflow:[],small:[],noalt:0,imgs:0,nofocus:[],clip:[]};
  var vw=innerWidth;
  var all=document.querySelectorAll('.page.on *, header.site *, footer.site *, .lift, .lift *, .m-pill, .m-pill *');
  for(var i=0;i<all.length;i++){
    var e=all[i], st=getComputedStyle(e);
    if(st.display==='none'||st.visibility==='hidden') continue;
    var r=e.getBoundingClientRect();
    if(!r.width||!r.height) continue;
    if(r.right>vw+1||r.left<-1){
      var sel=e.tagName.toLowerCase()+(typeof e.className==='string'&&e.className?'.'+e.className.trim().split(/\\s+/).slice(0,2).join('.'):'');
      out.overflow.push(sel+' ['+Math.round(r.left)+'…'+Math.round(r.right)+']');
    }
    var tag=e.tagName.toLowerCase();
    var clickable = tag==='button'||tag==='a'||e.getAttribute('role')==='button';
    if(clickable&&vw<900){
      /* область нажатия может быть растянута псевдоэлементом — строчную ссылку
         не двигают, а ::after поверх неё делают в 44 px. Меряем то, по чему палец
         реально попадает, иначе проверка кричит на уже исправленное */
      var hw=r.width, hh=r.height, pa=getComputedStyle(e,'::after');
      if(pa && pa.position==='absolute' && pa.content && pa.content!=='none'){
        var ph=parseFloat(pa.height)||0, pw=parseFloat(pa.width)||0;
        if(ph>hh) hh=ph; if(pw>hw) hw=pw;
      }
      if(hw<40||hh<28){
        var s2=tag+(typeof e.className==='string'&&e.className?'.'+e.className.trim().split(/\\s+/).slice(0,2).join('.'):'');
        out.small.push(s2+' '+Math.round(r.width)+'×'+Math.round(r.height)+(hh>r.height?' (нажатие '+Math.round(hh)+')':''));
      }
    }
    /* кадр во всю ширину намеренно вылезает за колонку: у секции стоит
       overflow-x:clip, ничего не режется. Это не находка, а приём */
    var bleed = e.querySelector && e.querySelector('.fullbleed');
    if(!bleed&&e.scrollWidth>e.clientWidth+2&&st.overflowX!=='auto'&&st.overflowX!=='scroll'&&r.width>60){
      var s3=tag+(typeof e.className==='string'&&e.className?'.'+e.className.trim().split(/\\s+/).slice(0,2).join('.'):'');
      if(out.clip.length<6) out.clip.push(s3+' '+e.scrollWidth+'>'+e.clientWidth);
    }
  }
  /* <img> на сайте почти нет — кадры вставлены фоном. Проверка alt проходила
     вхолостую и всегда молчала. Считаем то, что есть: фоновые кадры без имени */
  var im=document.querySelectorAll('.page.on img');
  out.imgs=im.length;
  for(var j=0;j<im.length;j++) if(!im[j].getAttribute('alt')) out.noalt++;
  var bg=document.querySelectorAll('.page.on .ph[data-bg], .page.on .ph[style*="background-image"]');
  out.bgtotal=bg.length; out.bgnamed=0;
  for(var q=0;q<bg.length;q++) if(bg[q].getAttribute('aria-label')) out.bgnamed++;
  out.bgshots=document.querySelectorAll('.page.on [data-bg], .page.on .ph[style*="background-image"]').length;
  function uniq(a){var s={},o=[];for(var k=0;k<a.length;k++){if(s[a[k]])continue;s[a[k]]=1;o.push(a[k]);}return o;}
  out.overflow=uniq(out.overflow).slice(0,6); out.small=uniq(out.small).slice(0,8);
  return JSON.stringify(out);
})()`;

for (const [w,dsf,mob] of VPS) {
  await send('Emulation.setDeviceMetricsOverride',{width:w,height:mob?812:900,deviceScaleFactor:dsf,mobile:mob});
  console.log('\n══════ ' + w + 'px ══════');
  for (const r of routes) {
    await send('Page.navigate',{url:`http://localhost:8899/index.html?v=${Date.now()}#/novyy`});
    await new Promise(t=>setTimeout(t,1800));
    if (r) { await send('Runtime.evaluate',{expression:`location.hash='#/${r}'`}); await new Promise(t=>setTimeout(t,700)); }
    const res = await send('Runtime.evaluate',{returnByValue:true,expression:CHECK});
    const o = JSON.parse(res.result.value);
    const bits=[];
    if(o.overflow.length) bits.push('ВЫЛЕЗАЕТ: '+o.overflow.join(' | '));
    if(o.small.length) bits.push('МЕЛКИЕ ЦЕЛИ: '+o.small.join(' | '));
    if(o.clip.length) bits.push('ОБРЕЗАНО: '+o.clip.join(' | '));
    if(o.noalt) bits.push('без alt: '+o.noalt+'/'+o.imgs);
    if(o.bgtotal) bits.push('кадров фоном: '+o.bgtotal+', с именем: '+o.bgnamed);
    if(bits.length) console.log('  ' + (r||'главная').padEnd(24) + bits.join('\n' + ' '.repeat(28)));
  }
}
ws.close();
