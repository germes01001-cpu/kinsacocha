import { POSTS } from "@/config/photos";
import type { Post } from "./types";

/**
 * Черновики: заголовок, описание, план и обложка.
 *
 * Тексты дописываются по мере готовности. Приоритет смещён в EN и ES:
 * наша аудитория — люди, которые уже в Перу, а не те, кто выбирает страну.
 *
 * Чтобы превратить черновик в статью: убрать draft, заменить план на body.
 */

const outline = (items: string[]) => [{ t: "list" as const, items }];

export const drafts: Post[] = [
  {
    slug: "tkachestvo",
    cover: POSTS.weaving,
    date: "2026-08-08",
    draft: true,
    related: ["tri-ozera"],
    content: {
      ru: {
        title: "Ткачество Пару-Пару: почему здесь ткут на ходу",
        description:
          "Пояса, накидки и пончо, которые делают, пока идут за стадом. И почему это не сувенир, а заработок.",
        body: outline([
          "Ткачество, а не вышивка: станок и руки, не игла",
          "Шерсть и нитки всегда с собой — как телефон в кармане у городского",
          "Что делают: пояса, накидки, шапки, сумки, перчатки, пончо",
          "Музей при общине: вывеска, выставка, вход 5–10 солей",
          "Деньги идут в общину. Продажа на рынках — практически единственный заработок",
          "Почему «сувенир» — неверное слово",
          "Как себя вести: фотографировать можно, но спрашивают разрешение",
        ]),
      },
      en: {
        title: "Weaving in Paru-Paru: why they weave while walking",
        description:
          "Belts, shawls and ponchos made on the move, behind the herd. And why calling it a souvenir gets it wrong.",
        body: outline([
          "Weaving, not embroidery: loom and hands, not a needle",
          "Wool and thread always carried — the way a city person carries a phone",
          "What they make: belts, shawls, hats, bags, gloves, ponchos",
          "The community museum: a sign, an exhibition, 5–10 soles to enter",
          "The money goes to the community. Market sales are close to the only income",
          "Why “souvenir” is the wrong word",
          "How to behave: photography is allowed, but we ask first",
        ]),
      },
      es: {
        title: "Tejido en Paru-Paru: por qué aquí se teje caminando",
        description:
          "Fajas, mantas y ponchos hechos en el camino, detrás del rebaño. Y por qué llamarlo souvenir es un error.",
        body: outline([
          "Tejido, no bordado: telar y manos, no aguja",
          "La lana y el hilo siempre encima — como el celular de alguien de ciudad",
          "Qué se hace: fajas, mantas, chullos, bolsos, guantes, ponchos",
          "El museo de la comunidad: letrero, exposición, entrada de 5–10 soles",
          "El dinero va a la comunidad. La venta en los mercados es casi el único ingreso",
          "Por qué «souvenir» es la palabra equivocada",
          "Cómo comportarse: se puede fotografiar, pero preguntamos antes",
        ]),
      },
    },
  },

  {
    slug: "kaktusy",
    cover: POSTS.cactus,
    date: "2026-08-08",
    draft: true,
    related: ["tri-ozera"],
    content: {
      ru: {
        title: "Почему кактусы на 4200 носят шерсть",
        description:
          "Растения высокогорья решают те же задачи, что и внизу, только иначе: ветер, ультрафиолет и мороз каждую ночь в году.",
        body: outline([
          "Кактус, которому холодно: сбой ожидания",
          "Четыре стратегии высоты: прижаться, обрасти, собраться в подушку, цвести коротко",
          "Кактусы-подушки: лепёшки у земли, крупные колючки, белый пух",
          "Жёлтые цветы в несколько миллиметров — и почему они ярче равнинных",
          "Октябрь-ноябрь: всё зацветает разом на стыке сезонов",
          "Кеуния: дерево, которое растёт выше всех деревьев планеты",
          "Ичу: крыши, верёвки, подстилка",
          "⏳ Названия видов — уточняются по фото заказчика",
        ]),
      },
      en: {
        title: "Why cacti at 4,200 m wear wool",
        description:
          "High-altitude plants solve the same problems as the ones below, only differently: wind, ultraviolet and frost every night of the year.",
        body: outline([
          "A cactus that is cold: the expectation breaks",
          "Four strategies of altitude: hug the ground, grow wool, form a cushion, flower briefly",
          "Cushion cacti: pads on the ground, heavy spines, white fuzz",
          "Yellow flowers a few millimetres across — and why they outshine lowland ones",
          "October–November: everything flowers at once on the seam between seasons",
          "Queuña: the tree that grows higher than any tree on earth",
          "Ichu: roofs, rope, bedding",
          "⏳ Species names pending confirmation from the owner's photographs",
        ]),
      },
      es: {
        title: "Por qué los cactus a 4200 m usan lana",
        description:
          "Las plantas de altura resuelven los mismos problemas que las de abajo, solo que de otra manera: viento, radiación y helada todas las noches.",
        body: outline([
          "Un cactus que tiene frío: se rompe la expectativa",
          "Cuatro estrategias de la altura: pegarse al suelo, cubrirse de lana, formar cojín, florecer poco",
          "Cactus en cojín: pencas al ras, espinas grandes, pelusa blanca",
          "Flores amarillas de milímetros — y por qué superan a las de abajo",
          "Octubre y noviembre: todo florece de golpe en la costura entre estaciones",
          "Queuña: el árbol que crece más alto que cualquier árbol del planeta",
          "Ichu: techos, sogas, cama",
          "⏳ Nombres de especies pendientes de confirmar con las fotos del dueño",
        ]),
      },
    },
  },

  {
    slug: "kak-dobratsya",
    cover: POSTS.getting,
    date: "2026-08-08",
    draft: true,
    related: ["tri-ozera", "gornaya-bolezn"],
    content: {
      en: {
        title: "How to get to the Paru-Paru community from Cusco or Pisac",
        description:
          "For anyone already in Peru with two spare days: how far it actually is, how long it takes and what the road is like.",
        body: outline([
          "Who this is for: you are already in Cusco, not choosing a country",
          "Cusco → Pisac: the Sacred Valley leg",
          "Pisac → up: the climb, and why it is part of the experience",
          "The transfer to the door, arranged over WhatsApp, paid separately",
          "Altitude on the way up — why two days in Cusco first change everything",
          "What to buy in Pisac before going up: fruit, bread, coca leaves",
          "⏳ Exact times and distances to be confirmed by the owner",
        ]),
        // ⏳ RU и ES версии — после подтверждения фактуры.
      },
    },
  },

  {
    slug: "pisac-off-the-beaten-path",
    cover: POSTS.community,
    date: "2026-08-08",
    draft: true,
    related: ["tri-ozera"],
    content: {
      en: {
        title: "Off the beaten path near Pisac: what is actually up there",
        description:
          "Everyone does the Pisac ruins and the Sunday market. Above them, at 4,200 m, there is a different valley entirely.",
        body: outline([
          "What the guidebooks send you to, and where they stop",
          "The three lakes as the entry point, not the destination",
          "The community: alpacas, trout, chuño, weaving",
          "Why we publish no coordinates, and what that buys you",
          "How to visit without turning it into a tour",
        ]),
      },
    },
  },

  {
    slug: "moon-trekking",
    cover: POSTS.moon,
    date: "2026-08-08",
    draft: true,
    related: ["tri-ozera", "gornaya-bolezn"],
    content: {
      en: {
        title: "Walking under a full moon in the Andes",
        description:
          "Three nights a month, no torches, and a landscape that looks nothing like it does by day.",
        body: outline([
          "Why no torches: your eyes take about twenty minutes",
          "Three nights a month — the window, and how to catch it",
          "Cold at night at 4,200 m: what this actually means",
          "Why we do not do this with children, and what we do instead",
          "Never alone. Non-negotiable",
          "How to book: the moon widget and a WhatsApp message",
        ]),
      },
    },
  },

  {
    slug: "obshina-paru-paru",
    cover: POSTS.community,
    date: "2026-08-08",
    draft: true,
    related: ["tkachestvo", "chuno"],
    content: {
      ru: {
        title: "Община Пару-Пару: жизнь на высоте, о которой не пишут",
        description:
          "Кто здесь живёт, чем зарабатывает и почему дом частный, а всё вокруг — общее.",
        body: outline([
          "Дом частный, вода и рыба общинные — что это значит на практике",
          "Форель в лагуне: разводит община, ловить нельзя",
          "Картошка, чуньо и морайя",
          "Ткачество как основной заработок",
          "Parque de la Papa — рядом ⏳ уточнить статус",
          "Почему сюда нельзя приехать «как в отель»",
          "Как себя вести: айни и обмен вместо подарков сверху вниз",
        ]),
      },
    },
  },

  {
    slug: "cifrovoy-detoks",
    cover: POSTS.detox,
    date: "2026-08-08",
    draft: true,
    related: ["tri-ozera"],
    content: {
      ru: {
        title: "Цифровой детокс: что происходит с головой без интернета три дня",
        description:
          "Здесь нет WiFi, и это не недоработка. Что успевает поменяться за три дня и почему первая ночь самая тяжёлая.",
        body: outline([
          "Первый вечер: рука сама тянется к карману",
          "Вторая ночь: тишина, от которой не сразу засыпаешь",
          "Третий день: возвращается длинное внимание",
          "Дети без экрана: что происходит на самом деле",
          "Звёздное небо на 4200 — почему оно выглядит иначе",
          "Что забрать вниз, кроме фотографий",
        ]),
      },
    },
  },

  {
    slug: "alpaki",
    cover: POSTS.alpacas,
    date: "2026-08-08",
    draft: true,
    related: ["obshina-paru-paru"],
    content: {
      ru: {
        title: "Почему альпаки не боятся людей — и что это говорит об Андах",
        description:
          "Шесть тысяч лет рядом с человеком. Что из этого следует и почему к ним можно подойти близко.",
        body: outline([
          "Одомашнены около шести тысяч лет назад",
          "Не боятся маленьких гостей — почему это правда, а не рекламная строчка",
          "Альпака и лама: чем отличаются",
          "Шерсть: почему она тёплая при таком малом весе",
          "Та же задача, что у растений — и то же решение",
          "Как вести себя рядом со стадом",
        ]),
      },
    },
  },

  {
    slug: "retiro-digital",
    cover: POSTS.retiro,
    date: "2026-08-08",
    draft: true,
    related: ["tri-ozera"],
    content: {
      es: {
        title: "Retiro digital en los Andes: por qué Paru-Paru no es un resort",
        description:
          "No hay WiFi, no hay programa y no hay recepción. Hay una casa, un fogón y una comunidad al lado.",
        body: outline([
          "Qué no es: ni hotel, ni centro de retiro, ni glamping",
          "La casa: fogón, agua caliente, cocina — a 4200 eso ya es lujo",
          "La comunidad al lado: alpacas, trucha, chuño, tejido",
          "Sin WiFi: por qué es la razón y no el defecto",
          "Con niños: por qué funciona mejor de lo que parece",
          "Cómo llegar y cómo se coordina todo por WhatsApp",
        ]),
      },
    },
  },
];
