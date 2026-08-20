// Ищет текст, который сливается с фоном. node contrast.mjs <маршруты через запятую>
import zlib from 'node:zlib';
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

/* ── проверка находки снимком ───────────────────────────────────────
   getComputedStyle на этом сайте несколько раз отдавал не тот цвет:
   на связке «сокращение + var() + !important» он показывал старую охру
   там, где пиксель был чистый #E8B33A. Поэтому каждую находку снимаем
   и смотрим, что на самом деле нарисовано. Снимок главнее замера. */
function unpng(buf){
  let pos=8,w=0,h=0,ct=6,idat=[];
  while(pos<buf.length){
    const ln=buf.readUInt32BE(pos), typ=buf.toString('ascii',pos+4,pos+8);
    if(typ==='IHDR'){ w=buf.readUInt32BE(pos+8); h=buf.readUInt32BE(pos+12); ct=buf[pos+17]; }
    else if(typ==='IDAT') idat.push(buf.subarray(pos+8,pos+8+ln));
    pos+=12+ln;
  }
  const raw=zlib.inflateSync(Buffer.concat(idat)), bpp=ct===6?4:3, stride=w*bpp;
  const out=Buffer.alloc(h*stride); let prev=Buffer.alloc(stride), i=0;
  for(let y=0;y<h;y++){
    const f=raw[i++]; const line=Buffer.from(raw.subarray(i,i+stride)); i+=stride;
    for(let x=0;x<stride;x++){
      const a=x>=bpp?line[x-bpp]:0, b=prev[x], c=x>=bpp?prev[x-bpp]:0;
      if(f===1) line[x]=(line[x]+a)&255;
      else if(f===2) line[x]=(line[x]+b)&255;
      else if(f===3) line[x]=(line[x]+((a+b)>>1))&255;
      else if(f===4){ const p=a+b-c, pa=Math.abs(p-a), pb=Math.abs(p-b), pc=Math.abs(p-c);
        line[x]=(line[x]+(pa<=pb&&pa<=pc?a:pb<=pc?b:c))&255; }
    }
    line.copy(out,y*stride); prev=line;
  }
  return {w,h,bpp,px:out};
}
const srgb=v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)};
async function realRatio(send, box){
  if(box.w<2||box.h<2||box.w>1400||box.h>400) return null;
  const s=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,
    clip:{x:box.x,y:box.y,width:box.w,height:box.h,scale:1}});
  if(!s||!s.data) return null;
  const {w,h,bpp,px}=unpng(Buffer.from(s.data,'base64'));
  const lums=[];
  for(let y=0;y<h;y++) for(let x=0;x<w;x++){
    const o=(y*w+x)*bpp;
    lums.push(0.2126*srgb(px[o])+0.7152*srgb(px[o+1])+0.0722*srgb(px[o+2]));
  }
  if(lums.length<16) return null;
  lums.sort((a,b)=>a-b);
  const lo=lums[Math.floor(lums.length*0.03)], hi=lums[Math.floor(lums.length*0.97)];
  return Math.round(((hi+0.05)/(lo+0.05))*100)/100;
}

const probe = `(function(){
  function parse(c){var m=c.match(/[\\d.]+/g);if(!m)return null;return {r:+m[0],g:+m[1],b:+m[2],a:m[3]===undefined?1:+m[3]};}
  function over(f,b){var a=f.a;return {r:f.r*a+b.r*(1-a),g:f.g*a+b.g*(1-a),b:f.b*a+b.b*(1-a),a:1};}
  function lum(c){var s=[c.r,c.g,c.b].map(function(v){v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)});
    return 0.2126*s[0]+0.7152*s[1]+0.0722*s[2];}
  function ratio(a,b){var l1=lum(a),l2=lum(b);if(l1<l2){var t=l1;l1=l2;l2=t;}return (l1+0.05)/(l2+0.05);}
  /* фон бывает не цветом, а градиентом или фотографией: тогда посчитать
     контраст по числам нельзя. Раньше скрипт брал цвет из-под градиента
     и объявлял всю главу «Растения» нечитаемой, хотя на снимке она читается.
     Теперь такие места честно откладываются в «не измеряется» */
  function bgOf(el){var base={r:255,g:255,b:255,a:1};var stack=[];
    for(var n=el;n&&n.nodeType===1;n=n.parentElement){
      var stn=getComputedStyle(n);
      if(stn.backgroundImage&&stn.backgroundImage!=='none') return null;
      var c=parse(stn.backgroundColor);
      if(c&&c.a>0){stack.push(c); if(c.a>=1)break;}}
    var out=stack.length?stack[stack.length-1]:base;
    for(var i=stack.length-2;i>=0;i--) out=over(stack[i],out);
    return out;}
  var bad=[],skipped=0;
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
    if(!bg){skipped++;continue;}
    var eff=over(fg,bg);
    var cr=ratio(eff,bg);
    if(cr<2.4) bad.push({sel:el.tagName.toLowerCase()+(el.className&&typeof el.className==='string'?'.'+el.className.trim().split(/\\s+/).slice(0,2).join('.'):''),
                         cr:Math.round(cr*100)/100,txt:txt.slice(0,42),
                         box:{x:Math.round(r.x+scrollX),y:Math.round(r.y+scrollY),w:Math.round(r.width),h:Math.round(r.height)}});
  }
  var seen={},out=[];
  for(var j=0;j<bad.length;j++){var k2=bad[j].sel;if(seen[k2])continue;seen[k2]=1;out.push(bad[j]);}
  return JSON.stringify({bad:out.slice(0,14),skipped:skipped});
})()`;

for (const r of routes) {
  await send('Runtime.evaluate',{expression:`location.hash='#/${r}'`});
  await new Promise(t=>setTimeout(t,800));
  await send('Runtime.evaluate',{expression:'window.__scan&&window.__scan()'});
  await new Promise(t=>setTimeout(t,500));
  const res = await send('Runtime.evaluate',{returnByValue:true,expression:probe});
  const { bad, skipped } = JSON.parse(res.result.value);
  const kept=[], dropped=[];
  for (const o of bad) {
    o.real = await realRatio(send, o.box);
    (o.real !== null && o.real >= 3 ? dropped : kept).push(o);
  }
  const notes = [];
  if (skipped) notes.push('не измеряется поверх кадра или градиента: ' + skipped);
  if (dropped.length) notes.push('снято по снимку: ' + dropped.length);
  const tail = notes.length ? '  (' + notes.join('; ') + ')' : '';
  console.log('\n### ' + (r||'главная') + (kept.length ? tail : '  — чисто' + tail));
  kept.forEach(o=>console.log('   ' + String(o.cr).padStart(5) + '  ' + o.sel.padEnd(34) + ' « ' + o.txt + ' »'
    + (o.real!==null ? '   на снимке ' + o.real : '   снимок не снят')));
  dropped.forEach(o=>console.log('   снято  ' + o.sel.padEnd(32) + ' « ' + o.txt + ' »   замер ' + o.cr + ', на снимке ' + o.real));
}
ws.close();
