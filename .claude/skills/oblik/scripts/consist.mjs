// Ищет остатки старого облика: чужие шрифты и старые акцентные цвета
const DEFAULT_ROUTES = ["","tseny","ozera","atlas","atlas/zveri","atlas/rasteniya","gallery","blog","dnevnik","artefakty","kontakty","pravila"];
// маршруты можно передать аргументом через запятую, пустая строка — главная
const routes = process.argv[2] ? process.argv[2].split(',') : DEFAULT_ROUTES;
const list = await (await fetch('http://localhost:9222/json/list')).json();
const page = list.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl); await new Promise(r=>ws.onopen=r);
let id=0; const pend=new Map();
ws.onmessage=e=>{const m=JSON.parse(e.data); if(pend.has(m.id)){pend.get(m.id)(m.result);pend.delete(m.id);}};
const send=(mm,p={})=>new Promise(r=>{const i=++id;pend.set(i,r);ws.send(JSON.stringify({id:i,method:mm,params:p}))});
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
const CHECK=`(function(){
  var OLD_FONTS=['Cormorant','Montserrat'];
  var OLD_COLORS=['rgb(168, 137, 35)','rgb(199, 165, 58)','rgb(23, 122, 205)','rgb(93, 81, 66)','rgb(143, 207, 198)','rgb(159, 216, 207)'];
  var f={},c={};
  /* getComputedStyle врёт на связке «сокращение + var() + !important»: на кнопке
     WhatsApp он отдавал старую охру, а пиксель на снимке был чистый #E8B33A.
     Поэтому перед тем как записать находку, смотрим, не перебито ли свойство
     правилом с !important — если перебито, компьютерное значение недостоверно */
  function overridden(el, prop){
    for(var si=0; si<document.styleSheets.length; si++){
      var rules; try{ rules=document.styleSheets[si].cssRules }catch(err){ continue }
      if(!rules) continue;
      for(var ri=0; ri<rules.length; ri++){
        var rl=rules[ri]; if(!rl.selectorText||!rl.style) continue;
        if(rl.style.getPropertyPriority(prop)!=='important') continue;
        try{ if(el.matches(rl.selectorText)) return true }catch(err){}
      }
    }
    return false;
  }
  var all=document.querySelectorAll('.page.on *, footer.site *, header.site *');
  for(var i=0;i<all.length;i++){
    var e=all[i],st=getComputedStyle(e);
    if(st.display==='none') continue;
    var t='';for(var k=0;k<e.childNodes.length;k++)if(e.childNodes[k].nodeType===3)t+=e.childNodes[k].nodeValue;
    t=t.replace(/\\s+/g,' ').trim(); if(!t) continue;
    var sel=e.tagName.toLowerCase()+(typeof e.className==='string'&&e.className?'.'+e.className.trim().split(/\\s+/).slice(0,2).join('.'):'');
    var ff=st.fontFamily;
    for(var j=0;j<OLD_FONTS.length;j++) if(ff.indexOf(OLD_FONTS[j])===0){ f[sel+' ← '+OLD_FONTS[j]+' « '+t.slice(0,24)+' »']=1; }
    if(OLD_COLORS.indexOf(st.color)>=0 && !overridden(e,'color')) c[sel+' ← '+st.color+' « '+t.slice(0,24)+' »']=1;
  }
  return JSON.stringify({f:Object.keys(f).slice(0,8),c:Object.keys(c).slice(0,8)});
})()`;
for (const r of routes) {
  await send('Page.navigate',{url:`http://localhost:8899/index.html?v=${Date.now()}#/novyy`});
  await new Promise(t=>setTimeout(t,1800));
  if (r) { await send('Runtime.evaluate',{expression:`location.hash='#/${r}'`}); await new Promise(t=>setTimeout(t,700)); }
  const res=await send('Runtime.evaluate',{returnByValue:true,expression:CHECK});
  const o=JSON.parse(res.result.value);
  if(o.f.length||o.c.length){
    console.log('\n### '+(r||'главная'));
    o.f.forEach(x=>console.log('   ШРИФТ  '+x));
    o.c.forEach(x=>console.log('   ЦВЕТ   '+x));
  }
}
ws.close();
