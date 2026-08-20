// Ищет текст, который сливается с фоном. node contrast.mjs <маршруты через запятую>
const routes = process.argv[2].split(",");
const list = await (await fetch('http://localhost:9222/json/list')).json();
const page = list.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl); await new Promise(r=>ws.onopen=r);
let id=0; const pend=new Map();
ws.onmessage=e=>{const m=JSON.parse(e.data); if(pend.has(m.id)){pend.get(m.id)(m.result);pend.delete(m.id);}};
const send=(mm,p={})=>new Promise(r=>{const i=++id;pend.set(i,r);ws.send(JSON.stringify({id:i,method:mm,params:p}))});
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});
await send('Page.navigate',{url:`http://localhost:8899/index.html?v=${Date.now()}#/novyy`});
await new Promise(r=>setTimeout(r,2800));

const probe = `(function(){
  function parse(c){var m=c.match(/[\\d.]+/g);if(!m)return null;return {r:+m[0],g:+m[1],b:+m[2],a:m[3]===undefined?1:+m[3]};}
  function over(f,b){var a=f.a;return {r:f.r*a+b.r*(1-a),g:f.g*a+b.g*(1-a),b:f.b*a+b.b*(1-a),a:1};}
  function lum(c){var s=[c.r,c.g,c.b].map(function(v){v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)});
    return 0.2126*s[0]+0.7152*s[1]+0.0722*s[2];}
  function ratio(a,b){var l1=lum(a),l2=lum(b);if(l1<l2){var t=l1;l1=l2;l2=t;}return (l1+0.05)/(l2+0.05);}
  function bgOf(el){var base={r:255,g:255,b:255,a:1};var stack=[];
    for(var n=el;n&&n.nodeType===1;n=n.parentElement){
      var c=parse(getComputedStyle(n).backgroundColor);
      if(c&&c.a>0){stack.push(c); if(c.a>=1)break;}}
    var out=stack.length?stack[stack.length-1]:base;
    for(var i=stack.length-2;i>=0;i--) out=over(stack[i],out);
    return out;}
  var bad=[];
  var all=document.querySelectorAll('.page.on *, footer.site *, header.site *');
  for(var i=0;i<all.length;i++){
    var el=all[i];
    var txt='';
    for(var k=0;k<el.childNodes.length;k++) if(el.childNodes[k].nodeType===3) txt+=el.childNodes[k].nodeValue;
    txt=txt.replace(/\\s+/g,' ').trim();
    if(!txt) continue;
    var r=el.getBoundingClientRect(); if(!r.width||!r.height) continue;
    var st=getComputedStyle(el);
    if(st.visibility==='hidden'||st.opacity==='0'||st.display==='none') continue;
    var fg=parse(st.color); if(!fg) continue;
    var bg=bgOf(el);
    var eff=over(fg,bg);
    var cr=ratio(eff,bg);
    if(cr<2.4) bad.push({sel:el.tagName.toLowerCase()+(el.className&&typeof el.className==='string'?'.'+el.className.trim().split(/\\s+/).slice(0,2).join('.'):''),
                         cr:Math.round(cr*100)/100,txt:txt.slice(0,42)});
  }
  var seen={},out=[];
  for(var j=0;j<bad.length;j++){var k2=bad[j].sel;if(seen[k2])continue;seen[k2]=1;out.push(bad[j]);}
  return JSON.stringify(out.slice(0,14));
})()`;

for (const r of routes) {
  await send('Runtime.evaluate',{expression:`location.hash='#/${r}'`});
  await new Promise(t=>setTimeout(t,800));
  await send('Runtime.evaluate',{expression:'window.__scan&&window.__scan()'});
  await new Promise(t=>setTimeout(t,500));
  const res = await send('Runtime.evaluate',{returnByValue:true,expression:probe});
  const arr = JSON.parse(res.result.value);
  console.log('\n### ' + (r||'главная') + (arr.length? '' : '  — чисто'));
  arr.forEach(o=>console.log('   ' + String(o.cr).padStart(5) + '  ' + o.sel.padEnd(34) + ' « ' + o.txt + ' »'));
}
ws.close();
