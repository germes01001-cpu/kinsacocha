// Выполнить выражение на открытой странице и напечатать результат.
// node probe.mjs "JSON.stringify({y:scrollY})"
const list = await (await fetch('http://localhost:9222/json/list')).json();
const page = list.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(r => (ws.onopen = r));
let id = 0; const pend = new Map();
ws.onmessage = e => { const m = JSON.parse(e.data); if (pend.has(m.id)) { pend.get(m.id)(m.result); pend.delete(m.id); } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const r = await send('Runtime.evaluate', { expression: process.argv[2], returnByValue: true });
console.log(typeof r.result.value === 'string' ? r.result.value : JSON.stringify(r.result.value));
ws.close();
