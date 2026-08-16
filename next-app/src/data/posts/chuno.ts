import { POSTS } from "@/config/photos";
import type { Post } from "./types";

export const chuno: Post = {
  slug: "chuno",
  cover: POSTS.chuno,
  date: "2026-08-08",
  related: ["tri-ozera", "gornaya-bolezn"],
  content: {
    ru: {
      title: "Что такое чуньо и почему инки сушили картошку на морозе",
      description:
        "Технология, которой пять тысяч лет: как ночной мороз и дневное солнце превращают картошку в продукт, который хранится годами.",
      body: [
        {
          t: "p",
          text: "На четырёх тысячах метров нельзя вырастить пшеницу и нельзя держать погреб. Зато можно вырастить картошку — и здесь её вырастили столько сортов, сколько нет больше нигде на планете. Проблема была не в том, чтобы её получить, а в том, чтобы дожить с ней до следующего урожая.",
        },
        {
          t: "p",
          text: "Решение нашли простое до неприличия: использовать погоду как оборудование.",
        },
        { t: "h2", text: "Как это работает" },
        {
          t: "p",
          text: "В сухой сезон на такой высоте ночью крепкий мороз, а днём — жёсткое солнце и очень сухой воздух. Картошку раскладывают прямо на земле и оставляют на несколько ночей.",
        },
        {
          t: "p",
          text: "Ночью вода внутри клубня замерзает и рвёт клеточные стенки. Днём солнце вытапливает лёд, а сухой воздух уносит влагу. Люди топчут клубни ногами, выдавливая остатки воды. Цикл повторяется несколько раз подряд.",
        },
        {
          t: "p",
          text: "На выходе — лёгкий, твёрдый, почти невесомый продукт, который хранится годами и не портится. По сути это лиофилизация: тот же принцип, по которому делают еду для космонавтов, только оборудование здесь — ночное небо.",
        },
        { t: "h2", text: "Чёрный и белый" },
        {
          t: "p",
          text: "Чуньо — чёрный. Его делают без промывки, и он темнеет от процесса. Вкус плотный, землистый, ни на что не похожий.",
        },
        {
          t: "p",
          text: "Морайя — белый. Разница в одном шаге: клубни держат в проточной воде — в ручье, под камнями, несколько недель — и только потом выкладывают на мороз. Вода вымывает то, что даёт горечь и цвет. Морайя мягче, светлее и ценится выше.",
        },
        { t: "h2", text: "Зачем это было нужно" },
        {
          t: "p",
          text: "Империя инков держалась на логистике не меньше, чем на армии. По дорогам стояли склады — колька, — и в них хранили именно чуньо: он не тяжёлый, не гниёт и переживает годы. Это была страховка от неурожая для целых провинций и паёк для армии на марше.",
        },
        {
          t: "p",
          text: "Технологии, по разным оценкам, около пяти тысяч лет. Она старше письменности в большинстве регионов мира и до сих пор работает без единого изменения.",
        },
        { t: "h2", text: "Что с этим делают сегодня" },
        {
          t: "p",
          text: "То же самое. Чуньо размачивают и кладут в суп, где он набухает и становится похож на плотную клёцку. Морайю чаще подают отдельно, к мясу или к сыру.",
        },
        {
          t: "p",
          text: "Здесь это не блюдо для гостей и не гастрономический опыт. Это то, что стоит в доме круглый год, потому что так удобнее. Гостю его дают ровно потому же, почему дали бы соседу.",
        },
        {
          t: "quote",
          text: "Пять тысяч лет назад кто-то заметил, что мороз работает бесплатно. С тех пор ничего лучше не придумали.",
        },
      ],
    },

    en: {
      title: "What chuño is, and why the Inca freeze-dried potatoes",
      description:
        "A five-thousand-year-old technique: how night frost and daytime sun turn potatoes into something that keeps for years without a cellar.",
      body: [
        {
          t: "p",
          text: "At four thousand metres you cannot grow wheat and you cannot keep a cellar. You can grow potatoes — and more varieties of them were bred here than anywhere else on the planet. The problem was never producing them. The problem was surviving on them until the next harvest.",
        },
        {
          t: "p",
          text: "The solution was almost insultingly simple: use the weather as equipment.",
        },
        { t: "h2", text: "How it works" },
        {
          t: "p",
          text: "In the dry season at this altitude the nights bring a hard frost and the days bring fierce sun and very dry air. Potatoes are spread straight on the ground and left out for several nights.",
        },
        {
          t: "p",
          text: "At night the water inside the tuber freezes and tears the cell walls apart. By day the sun melts the ice and the dry air carries the moisture off. People tread on the tubers to press out what is left. The cycle repeats several times.",
        },
        {
          t: "p",
          text: "What comes out is light, hard and almost weightless, and it keeps for years without spoiling. It is freeze-drying — the same principle behind food for astronauts, except the equipment here is the night sky.",
        },
        { t: "h2", text: "Black and white" },
        {
          t: "p",
          text: "Chuño is the black one. It is made without washing and darkens through the process. The flavour is dense and earthy and resembles nothing else.",
        },
        {
          t: "p",
          text: "Moraya is the white one. The difference is a single step: the tubers sit in running water — in a stream, weighed down with stones, for weeks — and only then go out into the frost. The water washes out what causes the bitterness and the colour. Moraya is milder, paler and worth more.",
        },
        { t: "h2", text: "Why it mattered" },
        {
          t: "p",
          text: "The Inca empire ran on logistics as much as on armies. Storehouses — qollqa — stood along the roads, and what they held was chuño: light, rot-proof, good for years. It was crop-failure insurance for entire provinces and rations for an army on the move.",
        },
        {
          t: "p",
          text: "The technique is thought to be around five thousand years old. It predates writing in most of the world and still runs without a single modification.",
        },
        { t: "h2", text: "What people do with it now" },
        {
          t: "p",
          text: "The same thing. Chuño is soaked and dropped into soup, where it swells into something like a dense dumpling. Moraya is more often served on its own, with meat or cheese.",
        },
        {
          t: "p",
          text: "This is not a dish for visitors or a culinary experience. It is what sits in the house all year because that is simply more practical. A guest is given it for exactly the reason a neighbour would be.",
        },
        {
          t: "quote",
          text: "Five thousand years ago somebody noticed that frost works for free. Nobody has improved on it since.",
        },
      ],
    },
  },
};
