#!/usr/bin/env python3
"""
Запуск аудита через Messages API.

Зачем не Workbench: в браузере соединение рвётся на 600-й секунде,
и оплаченный ответ пропадает. Здесь браузера нет — обрыву неоткуда взяться.

Использование:
    python3 scripts/run-audit.py claude-opus-5 AUDIT_OPUS.md
"""

import json
import os
import re
import sys
import time
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SYSTEM = """Ты — сильный продуктовый стратег, UX-редактор и SEO-специалист в одном лице. Твоя работа — разбирать готовые сайты и говорить владельцу правду, а не то, что ему приятно слышать.

Принципы:

1. Не соглашайся с чужими решениями по умолчанию. Спецификация, которую ты получишь, переписывалась дважды и перепишется ещё. Если решение ошибочно — скажи прямо и объясни, чем именно.
2. Проверяй фактуру. Высоты, сезоны, расстояния, биологию, названия на кечуа. Ошибка в факте важнее любого замечания по тону.
3. Смотри, как делают другие. Ищи сопоставимые проекты и объясняй, что у них работает.
4. Предлагай своё, даже если это ломает текущую структуру.
5. Не пиши эссе. Пиши список правок с приоритетами и готовыми формулировками замены, а не советы вида «сделайте живее».

Лучший результат твоей работы — не список опечаток, а две-три мысли, до которых заказчик сам бы не дошёл."""

# Тарифы, $ за миллион токенов. Сверено с platform.claude.com/docs/en/about-claude/pricing
RATES = {
    "claude-opus-5": (5.0, 25.0),
    "claude-fable-5": (10.0, 50.0),
    "claude-sonnet-5": (2.0, 10.0),
    "claude-haiku-4-5-20251001": (1.0, 5.0),
}


def api_key() -> str:
    with open(os.path.join(ROOT, ".anthropic.key"), encoding="utf-8") as f:
        m = re.search(r"^ANTHROPIC_API_KEY=(.+)$", f.read(), re.M)
    if not m:
        sys.exit("В .anthropic.key нет строки ANTHROPIC_API_KEY=...")
    return m.group(1).strip().strip("\"'")


def build(model: str, messages: list) -> dict:
    """Ровно те же настройки, что стояли в Workbench у прогона Fable."""
    return {
        "model": model,
        "max_tokens": 32000,
        "output_config": {"effort": "high"},
        "thinking": {"type": "adaptive"},
        "system": SYSTEM,
        "messages": messages,
        "tools": [
            {"type": "web_search_20260209", "name": "web_search", "max_uses": 5},
            {
                "type": "web_fetch_20260209",
                "name": "web_fetch",
                "max_uses": 2,
                "max_content_tokens": 20000,
            },
        ],
        "stream": True,
    }


def call(body: dict, key: str) -> dict:
    """Один запрос потоком. Возвращает собранное сообщение целиком."""
    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=json.dumps(body).encode(),
        headers={
            "x-api-key": key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        },
    )

    msg, blocks, buf = {}, [], {}
    started = time.time()

    with urllib.request.urlopen(req, timeout=3600) as resp:
        for raw in resp:
            line = raw.decode("utf-8").rstrip("\n")
            if not line.startswith("data: "):
                continue
            ev = json.loads(line[6:])
            t = ev.get("type")

            if t == "message_start":
                msg = ev["message"]
            elif t == "content_block_start":
                blocks.append(ev["content_block"])
                buf[ev["index"]] = []
                kind = ev["content_block"].get("type")
                print(f"  [{time.time()-started:6.0f}s] {kind}", file=sys.stderr, flush=True)
            elif t == "content_block_delta":
                d = ev["delta"]
                for field in ("text", "thinking", "partial_json"):
                    if field in d:
                        buf[ev["index"]].append(d[field])
            elif t == "content_block_stop":
                i = ev["index"]
                joined = "".join(buf.get(i, []))
                b = blocks[i]
                if b.get("type") == "text":
                    b["text"] = joined
                elif b.get("type") == "thinking":
                    b["thinking"] = joined
            elif t == "message_delta":
                msg.setdefault("usage", {}).update(ev.get("usage", {}))
                msg["stop_reason"] = ev["delta"].get("stop_reason")
            elif t == "error":
                sys.exit(f"Ошибка API: {ev}")

    msg["content"] = blocks
    return msg


def main() -> None:
    model = sys.argv[1] if len(sys.argv) > 1 else "claude-opus-5"
    out = sys.argv[2] if len(sys.argv) > 2 else "AUDIT_OPUS.md"

    with open(os.path.join(ROOT, "PROMPT_AUDIT.txt"), encoding="utf-8") as f:
        prompt = f.read()

    key = api_key()
    messages = [{"role": "user", "content": prompt}]
    began = time.time()
    total_in = total_out = searches = 0
    final = None

    # Длинный агентский ход сервер может поставить на паузу (stop_reason: pause_turn).
    # Тогда ответ надо вернуть обратно без изменений и продолжить.
    for attempt in range(1, 11):
        print(f"\n— запрос {attempt} к {model}", file=sys.stderr, flush=True)
        msg = call(build(model, messages), key)

        u = msg.get("usage", {})
        total_in += u.get("input_tokens", 0)
        total_out += u.get("output_tokens", 0)
        searches += u.get("server_tool_use", {}).get("web_search_requests", 0)
        final = msg

        if msg.get("stop_reason") != "pause_turn":
            break
        messages += [
            {"role": "assistant", "content": msg["content"]},
            {"role": "user", "content": "Продолжай."},
        ]

    text = "\n\n".join(b["text"] for b in final["content"] if b.get("type") == "text")
    with open(os.path.join(ROOT, out), "w", encoding="utf-8") as f:
        f.write(text)

    r_in, r_out = RATES.get(model, (0, 0))
    cost = total_in / 1e6 * r_in + total_out / 1e6 * r_out + searches * 0.01

    print(
        f"\nГотово: {out}\n"
        f"  символов в ответе : {len(text):,}\n"
        f"  токенов вход/выход: {total_in:,} / {total_out:,}\n"
        f"  поисков           : {searches}\n"
        f"  время             : {time.time()-began:.0f} с\n"
        f"  стоимость         : ${cost:.2f}\n"
        f"  причина остановки : {final.get('stop_reason')}",
        file=sys.stderr,
    )


if __name__ == "__main__":
    main()
