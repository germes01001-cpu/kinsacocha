import type { Locale } from "./config";

/**
 * ВСЕ ТЕКСТЫ САЙТА. Три языка в одном объекте.
 *
 * Тон речи намеренно разный, это не перевод одного текста:
 *   RU — философский, медитативный. Тишина, цифровой детокс, побег от суеты.
 *   EN — приключенческий, off-the-beaten-path. Редкость места.
 *   ES — близкий, общинный. Связь с Пару-Пару.
 *
 * EN и ES написаны самостоятельно, а не переводом с русского: основная
 * аудитория — люди, которые уже в Перу (CLAUDE.md, раздел 19).
 */

export type TimeKey = "hours" | "half" | "day" | "night";
export type WhoKey = "kids" | "two" | "group" | "alone";

export type Dict = {
  meta: { title: string; description: string };
  nav: {
    story: string;
    lakes: string;
    formats: string;
    routes: string;
    life: string;
    gallery: string;
    contact: string;
    menu: string;
    close: string;
    blog: string;
  };
  hero: { title: string; subtitle: string; watchFilm: string; scroll: string };
  story: {
    title: string;
    lead: string;
    body: string[];
    name: string;
    ownership: string;
  };
  notFound: {
    title: string;
    lead: string;
    items: string[];
    footer: string;
  };
  lakes: {
    title: string;
    name: string;
    lead: string;
    items: { name: string; altitude: string; body: string }[];
    cta: string;
  };
  road: {
    title: string;
    lead: string;
    pisac: string;
    cusco: string;
    minutes: string;
    note: string;
    /**
     * Долина — одной строкой и намеренно. Отдельная страница экскурсий
     * превратила бы дом в турагентство и размыла единственное отличие.
     */
    valley: string;
    cta: string;
    wa: string;
  };
  /** Кто отвечает на том конце. Личный мессенджер требует лица и имени. */
  about: { title: string; name: string; body: string[] };
  /** Гость не гуляет на 4200 — он здесь спит. Это разные вещи. */
  altitude: { title: string; lead: string; items: string[]; footer: string };
  /** Продаём сутки — значит обязаны их показать. */
  oneDay: { title: string; lead: string; items: { time: string; body: string }[] };
  sleep: { title: string; items: { name: string; body: string }[]; total: string };
  /** Вопросы, которые иначе уходят в переписку и убивают половину заявок. */
  faq: { title: string; lead: string; items: { q: string; a: string }[] };
  formats: {
    title: string;
    lead: string;
    kids: string;
    priceFrom: string;
    perPersonDay: string;
    perDay: string;
    dayNote: string;
    individual: string;
    cta: string;
    items: Record<
      "access" | "guided" | "beds" | "exclusive",
      { name: string; body: string; host: string; wa: string }
    >;
  };
  food: {
    title: string;
    lead: string;
    items: { name: string; body: string }[];
  };
  amenities: {
    title: string;
    items: { name: string; body: string }[];
  };
  routes: {
    title: string;
    noMap: string;
    times: { key: string; label: string; body: string }[];
    guide: {
      title: string;
      timeLabel: string;
      whoLabel: string;
      time: Record<TimeKey, string>;
      who: Record<WhoKey, string>;
      answers: Record<string, string>;
      footer: string;
    };
    moon: {
      title: string;
      next: string;
      days: string;
      today: string;
      cta: string;
      wa: string;
    };
  };
  fauna: {
    title: string;
    lead: string;
    tiers: { title: string; items: { name: string; quechua?: string; body: string }[] }[];
    herded: {
      title: string;
      lead: string;
      items: { name: string; body: string }[];
    };
    puma: { title: string; body: string[]; safety: string };
  };
  flora: {
    title: string;
    opener: string;
    lead: string;
    wool: string;
    items: { name: string; body: string }[];
    note: string;
  };
  weaving: {
    title: string;
    lead: string;
    onTheMove: string;
    notSouvenir: string;
    museum: string;
    makes: string;
    makesList: string[];
    park: string;
  };
  mosaic: { title: string; cta: string };
  prep: {
    title: string;
    lead: string;
    night: { title: string; items: string[]; note: string };
    day: { title: string; items: string[] };
    have: { title: string; body: string };
    water: { title: string; body: string };
    hands: { title: string; body: string; note: string };
    pets: { title: string; body: string };
    family: { title: string; body: string };
  };
  reviews: { title: string; items: { text: string; author: string }[] };
  contact: {
    title: string;
    lead: string;
    cta: string;
    reply: string;
    /**
     * ⚠️ Добавлено после аудита. Для англоязычного гостя в Перу вопрос
     * «сможем ли мы вообще объясниться» — реальный и часто первый.
     * Молчание об этом стоит дороже, чем честный ответ.
     */
    languages: string;
    wa: string;
    emailLabel: string;
  };
  footer: {
    nav: string;
    rights: string;
    instagram: string;
    tagline: string;
    lakesTitle: string;
  };
  gallery: {
    title: string;
    lead: string;
    all: string;
    noGeo: string;
    tags: Record<string, string>;
    /**
     * Фильтр по месяцу съёмки. Главный, выше тегов: в горах месяц
     * меняет всё — цвет воды, снег на вершинах, цветение. Один и тот
     * же склон в июле и в ноябре выглядит как два разных места.
     */
    byMonth: string;
    allMonths: string;
    /** Двенадцать названий, январь первым. */
    months: string[];
    close: string;
    prev: string;
    next: string;
  };
  blog: {
    title: string;
    lead: string;
    readMore: string;
    related: string;
    back: string;
    draft: string;
    cta: string;
    wa: string;
  };
};

export const dict: Record<Locale, Dict> = {
  /* ─────────────────────────────── RU ─────────────────────────────── */
  ru: {
    meta: {
      title: "Kinsacocha — дом на 4200 метрах в Андах",
      description:
        "Частный дом у трёх горных озёр в общине Пару-Пару, Перу. Печь, горячая вода, тишина. Без WiFi — и именно поэтому сюда везут детей.",
    },
    nav: {
      story: "Место",
      lakes: "Озёра",
      formats: "Форматы",
      routes: "Маршруты",
      life: "Живое",
      gallery: "Фото",
      contact: "Связаться",
      menu: "Меню",
      close: "Закрыть",
      blog: "Блог",
    },
    hero: {
      title: "Ночь у трёх озёр Кинса Коча",
      subtitle: "4200 метров. Печь, горячий душ и небо, которого не видно из города. Сюда приезжают на день. Здесь можно остаться.",
      watchFilm: "Смотреть фильм",
      scroll: "Листайте",
    },
    story: {
      title: "Просто дом",
      lead: "Это не отель, не ретрит-центр и не глэмпинг. Это дом.",
      body: [
        "С печью, горячей водой и кухней. На высоте 4200 метров это уже роскошь.",
        "Вокруг — горные озёра. Рядом живут люди, которые разводят альпак, сушат картошку морозом и почти никогда не спускаются в город. Это их мир. Мы — его часть и готовы разделить его с теми, кому нужно вырваться из шума.",
        "Здесь холодно, и здесь нет Wi-Fi. Мобильная связь то есть, то нет — и это лучшее, что может случиться с вами за год: один раз увидеть настоящее звёздное небо и ни разу не посмотреть в телефон.",
      ],
      name: "Kinsa qucha на кечуа — «три озера». Место названо счётом.",
      ownership: "Дом — частный. Всё вокруг — общее.",
    },
    notFound: {
      title: "Чего вы здесь не найдёте",
      lead: "Три озера найдёт любой — маршрут к ним давно в интернете, и мы не делаем вид, что это не так. Мы не пишем о другом.",
      items: [
        "Координат",
        "Троп за озёрами",
        "Мест, где видели пуму",
      ],
      footer:
        "Не из вредности. Эти тропы держатся на том, что о них не пишут.",
    },
    lakes: {
      title: "Три озера",
      name: "Kinsa qucha на кечуа — «три озера». Место названо счётом.",
      lead: "За ними сюда и едут. Мы называем высоты и цвет воды — и не рассказываем, как дойти.",
      items: [
        {
          name: "Пума Коча",
          altitude: "4325 м",
          body: "Самое высокое. «Озеро пумы» на кечуа: пума у инков означала силу и связь с землёй. Саму пуму здесь не видели.",
        },
        {
          name: "Асуль Коча",
          altitude: "4247 м",
          body: "Насыщенно-синяя, почти бирюзовая вода. В ясный день граница между водой и небом почти исчезает.",
        },
        {
          name: "Кинса Коча",
          altitude: "Самое большое",
          body: "Ближайшее. У него стоит дом, и оно дало имя всему месту. Здесь община разводит форель.",
        },
      ],
      cta: "Подробнее про три озера",
    },
    road: {
      title: "Дорога",
      lead: "Если вы уже в Священной долине — это ближе, чем кажется.",
      pisac: "от Писака",
      cusco: "от Куско",
      minutes: "минут",
      note: "Трансфер до двери заказывается отдельно, через WhatsApp. Дорогу лучше не проезжать в спешке — она часть впечатления.",
      valley: "Если после гор захочется дальше — возьмём водителя и поедем по долине: Марас, Морай, Ольянтайтамбо. Об этом просто спросите.",
      cta: "Заказать трансфер",
      wa: "Здравствуйте! Хочу узнать про трансфер до Kinsacocha.",
    },
    about: {
      title: "Кому вы пишете",
      name: "Ян",
      body: [
        "Меня зовут Ян. Это мой дом, и я же ваш проводник.",
        "Дом стоит на первой линии у Кинса Кочи — от двери до воды шаги, а не дорога.",
        "Когда вы нажмёте кнопку внизу, отвечу вам я, не менеджер. Выберу тропу под вас, встречу на дороге и растоплю печь к приезду.",
      ],
    },
    altitude: {
      title: "Высота",
      lead: "Дом стоит на 4200. Куско — 3400, Писак — 2900. Разница чувствуется в первую ночь: сердце бьётся чаще, сон рваный, утром может болеть голова. Это нормально и проходит.",
      items: [
        "Не приезжайте сюда в первый или второй день после прилёта в Перу. Две-три ночи в Куско или в долине — и вы подниметесь другим человеком.",
        "Пейте больше воды, ешьте меньше, спиртное — не в первый вечер.",
        "Если ночью станет по-настоящему плохо, лечение здесь одно и работает всегда — спуститься. Машина есть, до Писака сорок минут, вниз ещё быстрее.",
      ],
      footer: "Мы предпочтём отговорить вас от неудачной даты, чем принять и смотреть, как вам плохо.",
    },
    oneDay: {
      title: "Сутки здесь",
      lead: "Цена — за сутки, от утра до утра. Вот как они выглядят.",
      items: [
        { time: "10:00", body: "Приезжаете. Такси доходит до двери, вещи внутрь, чай." },
        { time: "12:00", body: "Первый выход. Ближнее озеро — или просто вокруг дома, если высота ещё не отпустила." },
        { time: "17:30", body: "Солнце уходит за хребет, и температура падает на десять градусов за час." },
        { time: "18:00", body: "Печь. Дальше все сидят вокруг неё, потому что больше нигде не тепло." },
        { time: "19:30", body: "Ужин, если заказывали у соседей." },
        { time: "21:00", body: "Выходим во двор. Это то, ради чего вы ехали." },
        { time: "06:00", body: "Вода в лагуне неподвижная, ровно один час. Потом поднимается ветер." },
        { time: "10:00", body: "Уезжаете. Либо остаётесь ещё на сутки — второе бывает чаще." },
      ],
    },
    sleep: {
      title: "Где вы будете спать",
      items: [
        { name: "Комната", body: "Две кровати, одеяла, своя дверь." },
        { name: "Гостиная", body: "Диван у печи. Самое тёплое место в доме." },
        { name: "Типи", body: "Шесть-восемь мест. Дрова и газовая печка. Под звёздами, но не под открытым небом." },
      ],
      total: "Итого до одиннадцати мест. Постель есть везде, спальник всё равно берите — со своим теплее.",
    },
    faq: {
      title: "Практика",
      lead: "Всё, что обычно выясняют в переписке.",
      items: [
        { q: "Сколько человек помещается", a: "Две кровати в комнате, диван у печи и типи на шесть-восемь. До одиннадцати человек." },
        { q: "Туалет и душ", a: "Туалет со смывом. Горячий душ, вода греется газом." },
        { q: "Электричество", a: "Сеть. Розетки есть, свет ночью есть. Перебои случаются — это горы." },
        { q: "Связь и интернет", a: "Кларо ловит нормально, Бител с перебоями. Wi-Fi нет и не будет. Гарантий на сигнал не даём: погода, электричество." },
        { q: "Сколько градусов ночью", a: "Около четырёх-шести. Одеяла, грелки с горячей водой, печь. Спальник всё равно берите." },
        { q: "Как платить", a: "Любым способом: наличные, соли или доллары, Yape." },
        { q: "Нужна ли предоплата", a: "Да, 30% при брони. Остальное на месте." },
        { q: "Если передумали", a: "Скажите за три дня — вопросов нет. Не приехали молча — предоплата остаётся." },
        { q: "Дети", a: "С любого возраста. Ехать или нет — решают родители, рекомендаций мы не даём." },
        { q: "Дорога в сезон дождей", a: "Доезжает любая машина. Полный привод не нужен." },
        { q: "Еда", a: "Обед и ужин у соседей — 30 солей с человека, заказ за день. Или везите своё и готовьте сами." },
      ],
    },
    formats: {
      title: "Как сюда приезжают",
      lead: "Четыре формата. С детьми комфортно в любом.",
      kids: "С детьми — да",
      priceFrom: "от",
      perPersonDay: "с человека за сутки",
      perDay: "за сутки",
      dayNote:
        "Сутки считаются от утра до утра: приезжаете утром — уезжаете следующим. Для групп цена тоже с человека.",
      individual: "Обсуждается индивидуально",
      cta: "Написать в WhatsApp",
      items: {
        access: {
          name: "Сутки в доме",
          body: "Дом и территория ваши на сутки. Никакой программы: гуляете сами, возвращаетесь к печи когда захотите.",
          host: "Хозяин не нужен",
          wa: "Здравствуйте! Интересует доступ к пространству в Kinsacocha.",
        },
        guided: {
          name: "С проводником",
          body: "Хозяин лично идёт с вами. Тропы, которых нет на картах.",
          host: "Хозяин рядом",
          wa: "Здравствуйте! Интересует визит с проводником в Kinsacocha.",
        },
        beds: {
          name: "Аренда мест",
          body: "Группа арендует спальные места. Хозяин может быть в доме.",
          host: "Хозяин может быть",
          wa: "Здравствуйте! Интересует аренда спальных мест в Kinsacocha.",
        },
        exclusive: {
          name: "Эксклюзивная аренда",
          body: "Весь дом ваш. Хозяин уезжает. Абсолютная приватность.",
          host: "Хозяин уезжает",
          wa: "Здравствуйте! Интересует эксклюзивная аренда дома Kinsacocha.",
        },
      },
    },
    /*
     * ⚠️ Переписано после аудита. Старый лид «Продукты привозят с собой»
     * стоял первым и в одиночку убивал главный сценарий: человек, который
     * уже в Куско и решает за сутки, не поедет закупать продукты и тащить
     * их на 4200. Еду готовят соседи — это снимает возражение №1.
     *
     * 🔴 Вопрос 11 в Notion: цена ужина и срок заказа. «Заранее» без числа
     * не работает — как только ответят, ставим в site.ts.
     * 🔴 Вопрос 16: чичу здесь действительно пьют горячей? Чича де хора
     * ферментированная и подаётся холодной. До ответа claim снят.
     */
    food: {
      title: "Еда и напитки",
      lead: "Ресторана здесь нет — есть соседи, которые готовят. Заказ через WhatsApp за день.",
      items: [
        {
          name: "Готовят соседи",
          body: "Обед и ужин — 30 солей с человека. Заказывать за день: наверху ничего не покупают в последнюю минуту, продукты поднимают снизу. Еду приносят в дом или вы идёте в соседний дом, где её готовят при вас.",
        },
        {
          name: "Труча",
          body: "Форель. Её разводит община в Асуль Коче — единственное, что здесь не нужно везти снизу. Заказывается за день.",
        },
        {
          name: "Чуньо и морайя",
          body: "Картошка, высушенная морозом и солнцем. Чёрная и белая. Технологии пять тысяч лет, и она всё ещё работает.",
        },
        {
          name: "Готовить самим",
          body: "Плита, посуда, утварь — всё в доме. Привезите продукты снизу и готовьте что хотите. А можно на живом огне: получается совсем другая еда.",
        },
        {
          name: "Чича",
          body: "Здесь её пьют горячей — так придумал хозяин: мёд, имбирь, специи. На 4200 всё время хочется горячего, а это ещё и разогревает изнутри. Нигде больше так не делают.",
        },
        {
          name: "Чай",
          body: "Китайский, цейлонский или перуанский — на выбор. На этой высоте чай перестаёт быть напитком и становится событием.",
        },
      ],
    },
    /*
     * ⚠️ Переработано после аудита. «Горячая вода» — не то же самое,
     * что горячий душ, и это оказалось главным, о чём говорят гости.
     * Страх «обесценить суровость» пуст: тезис сайта — суровость снаружи,
     * тепло внутри, и душ есть буквальное доказательство второй половины.
     * Обесценило бы перечисление мелочёвки вроде фена и утюга.
     */
    amenities: {
      title: "Что есть в доме",
      items: [
        {
          name: "Горячий душ",
          body: "Не «горячая вода» — душ. После дня на ветру на 4200 это не удобство, это событие. Гости говорят о нём чаще, чем о звёздах, — и нам не обидно.",
        },
        {
          name: "Живой огонь",
          body: "Дровяная печь. Единственный источник тепла и главный повод не расходиться по комнатам.",
        },
        {
          name: "Кухня ваша",
          body: "Плита, посуда, утварь. Привезите продукты — готовьте что хотите.",
        },
        {
          name: "Типи",
          body: "Ночёвка под звёздами для тех, кому дома мало.",
        },
        {
          name: "Трансфер",
          body: "Такси из Писака до двери. Вызывается под гостей, оплачивается отдельно.",
        },
        {
          name: "Стиральная машина",
          body: "Да, на 4200. Мы сами удивляемся.",
        },
      ],
    },
    routes: {
      title: "Маршруты",
      noMap: "Здесь нет карты. И не будет.",
      times: [
        {
          key: "dawn",
          label: "Рассвет",
          body: "Выход в 5:30. Туман лежит в долинах, вершины уже в огне. Только вы и тишина.",
        },
        {
          key: "morning",
          label: "Утро, с детьми",
          body: "Три часа. Лёгкий маршрут. Первое озеро и возвращение к обеду. Альпаки не боятся маленьких гостей.",
        },
        {
          key: "day",
          label: "День",
          body: "Шесть часов. Три озера. Привал с едой у воды. Для тех, кто хочет глубже.",
        },
        {
          key: "moon",
          label: "Полная луна",
          body: "Ночью. Без фонарей. Только три дня в месяц. По запросу.",
        },
      ],
      guide: {
        title: "Расскажите о себе — проводник ответит",
        timeLabel: "Сколько у вас времени",
        whoLabel: "Кто идёт",
        time: {
          hours: "Пара часов",
          half: "Полдня",
          day: "Целый день",
          night: "Ночь",
        },
        who: {
          kids: "С детьми",
          two: "Вдвоём",
          group: "Компанией",
          alone: "Один",
        },
        answers: {
          "hours:kids":
            "С детьми и на пару часов — пойдём к ближнему озеру. Вернёмся к обеду, дети успеют устать ровно настолько, чтобы уснуть до заката.",
          "hours:two":
            "Пара часов вдвоём — это подъём к воде и обратно. Немного, но высоту вы почувствуете сразу. Возьмите термос.",
          "hours:group":
            "Компанией и ненадолго — держимся ближней воды. В группе всегда есть кто-то, кому высота даётся тяжелее, и это нормально.",
          "hours:alone":
            "Одному и на пару часов — самый честный вариант для первого дня. Далеко не уйдём, но тишину услышите.",
          "half:kids":
            "Полдня с детьми — успеем к воде, посидим, вернёмся другой стороной. Если устанут, поворачиваем раньше, без обсуждений.",
          "half:two":
            "Полдня вдвоём — выйдем рано, пока туман ещё в долинах. К обеду будем там, где никого нет.",
          "half:group":
            "Полдня компанией — идём медленно, останавливаемся часто. Наверху спешка ничего не даёт, кроме головной боли.",
          "half:alone":
            "Полдня одному — покажу, куда идти, и оставлю вас в покое. Некоторым нужно именно это.",
          "day:kids":
            "Целый день с детьми — возможно, если они ходят и вы не торопитесь. Берём еду, делаем длинный привал у воды.",
          "day:two":
            "Целый день вдвоём — три озера, привал у воды, возвращение к закату. Тот самый день, ради которого сюда едут.",
          "day:group":
            "Целый день компанией — идём по самому медленному. Так доходят все, и никто не запоминает этот день как испытание.",
          "day:alone":
            "Целый день одному — далеко, тихо и без разговоров. Скажу, где вода, и когда повернуть назад.",
          "night:kids":
            "Ночью с детьми не ходим. Но небо у дома ничем не хуже — вынесем одеяла и останемся во дворе.",
          "night:two":
            "Ночью вдвоём — только в полнолуние и только без фонарей. Глаза привыкают минут за двадцать, а потом начинается то, ради чего всё это.",
          "night:group":
            "Ночью компанией — идём плотно и молча. Голоса в темноте слышно на километр, и это портит всё.",
          "night:alone":
            "Ночью одному не отпущу. Пойдём вместе — или дождёмся утра.",
        },
        footer:
          "Мы не публикуем маршруты. Проводник выберет тропу утром — по погоде, по вашему дыханию, по тому, кто с вами идёт.",
      },
      moon: {
        title: "Лунное окно",
        next: "Следующее полнолуние",
        days: "дней",
        today: "Сегодня",
        cta: "Спросить про эту дату",
        wa: "Здравствуйте! Хочу узнать про ночной выход в полнолуние",
      },
    },
    fauna: {
      title: "Кого вы увидите",
      lead: "По убыванию вероятности встречи. Мы не обещаем того, чего не можем.",
      tiers: [
        {
          title: "Увидите точно",
          items: [
            {
              name: "Андский гусь",
              quechua: "huallata",
              body: "Летают парами. Одной и той же парой — всю жизнь. На 4200 это выглядит как заявление, а не как факт из справочника.",
            },
            {
              name: "Вискача",
              quechua: "wisk'acha",
              body: "Похожа на зайца, которому приделали беличий хвост. Живёт в камнях, видно прямо с тропы.",
            },
            {
              name: "Яна вико",
              quechua: "yanavico",
              body: "Стоят в воде неподвижно. Час, два. Их проще принять за камень.",
            },
            {
              name: "Утки",
              body: "На воде круглый год, в любую погоду.",
            },
            {
              name: "Альпаки",
              body: "Не боятся маленьких гостей.",
            },
            {
              name: "Труча",
              body: "Форель. Её разводит община в Асуль Коче. Ловить нельзя — можно заказать к ужину.",
            },
          ],
        },
        {
          title: "Если повезёт",
          items: [
            {
              name: "Кондор",
              body: "Несколько раз в год. Если увидите — вам очень повезло.",
            },
            {
              name: "Тарука",
              body: "Андский олень. Он увидит вас первым и уйдёт. Если наоборот — вам очень повезло.",
            },
            { name: "Андская лиса", body: "Чаще след, чем сама лиса." },
            { name: "Скунс", body: "Лучше издалека." },
          ],
        },
      ],
      herded: {
        title: "И те, кого пасут",
        lead: "Это не дикая природа. Это чей-то заработок, который идёт вам навстречу по тропе.",
        items: [
          { name: "Овцы", body: "Стадами, чаще всего с пастухом где-то рядом." },
          { name: "Коровы", body: "На склонах, там, где трава погуще." },
          { name: "Ослы", body: "Возят всё, что здесь нужно возить. Дорог наверху нет." },
        ],
      },
      puma: {
        title: "Почти никогда",
        body: [
          "Пума здесь есть. Её здесь не видели.",
          "Местные говорят: она видит вас первой. Всегда. И уходит раньше, чем вы успеете о ней подумать.",
          "У нас нет её фотографии. Поэтому её здесь не будет.",
        ],
        safety:
          "Опасности нет. Пума уходит от человека, а не к нему — она замечает вас задолго до того, как вы могли бы заметить её.",
      },
    },
    flora: {
      title: "То, что под ногами",
      opener: "Кактус, которому холодно.",
      lead: "Растения на 4200 — не уменьшенные копии равнинных. Это те же задачи, решённые иначе: ветер, ультрафиолет, ночной мороз круглый год.",
      wool: "Здесь всё носит шерсть. Даже кактусы.",
      items: [
        {
          name: "Кактусы-подушки",
          body: "Растут лепёшками, прижаты к земле, крупные колючки и белый пух. Вверх здесь не растёт ничего.",
        },
        {
          name: "Жёлтые цветы",
          body: "Несколько миллиметров — и ярче всего, что растёт внизу. Опылителей мало, окно короткое.",
        },
        {
          name: "Октябрь и ноябрь",
          body: "Всё зацветает разом. Сухой сезон заканчивается, первые дожди уже близко — цветение и вода приходят вместе.",
        },
        {
          name: "Кеуния",
          body: "Деревья её рода растут выше всех на планете, кора слоится как старая бумага. У дома её нет — она по дороге, как награда за то, что пошёл.",
        },
        {
          name: "Ичу",
          body: "Трава пуны. Из неё здесь крыши, верёвки, подстилка. Жёсткая настолько, что режет руку.",
        },
      ],
      note: "Названия уточняем по фотографиям. Наугад не пишем.",
    },
    weaving: {
      title: "Ткачество",
      lead: "У лагуны есть музей общины. Там же можно купить то, что здесь ткут.",
      onTheMove:
        "Здесь ткут на ходу. Пока идут за стадом. Шерсть и нитки — всегда с собой, как телефон в кармане у городского человека.",
      notSouvenir:
        "Это не сувенир. Это заработок. Пояс, который вы увезёте, кто-то ткал, пока шёл за альпаками.",
      museum:
        "Музей с выставкой тканого. Вход платный, 5–10 солей. Фотографировать можно — но мы всё равно спрашиваем разрешение.",
      makes: "Здесь делают",
      makesList: ["Пояса", "Накидки", "Шапки", "Сумки", "Перчатки", "Пончо"],
      park: "Пару-Пару — одна из пяти общин, которым принадлежит Parque de la Papa: земля, где хранят больше тысячи сортов картошки. Дом стоит внутри неё.",
    },
    mosaic: { title: "Как это выглядит", cta: "Смотреть все фото" },
    prep: {
      title: "Подготовка",
      lead: "Днём вы обгорите. Ночью замёрзнете. Обе проблемы решаются заранее.",
      night: {
        title: "Ночь в доме",
        items: [
          "Спальник — постель есть, но со своим теплее",
          "Пуховик",
          "Шерстяные носки",
          "Термос",
        ],
        note: "Ночью в доме около четырёх-шести градусов. Одеяла есть — укрываются двумя, тремя. Есть грелки: наливаешь горячую воду и кладёшь в постель. В типи — дрова и газовая печка. Жить можно, и живут.",
      },
      day: {
        title: "День на маршруте",
        items: [
          "Шляпа",
          "Крем от солнца",
          "Рюкзак — под бутылку воды, термос и немного еды",
          "Треккинговые палки — есть на месте, но свои удобнее",
          "Дождевик — обязателен в сезон дождей",
        ],
      },
      have: {
        title: "Это уже есть — везти не надо",
        body: "Одеяла, посуда, вода, дрова, свет.",
      },
      /*
       * ⚠️ Исправлено после аудита. Старый текст обещал, что воду можно
       * не брать — это ложное обещание с санитарным риском: выше источников
       * пасут овец и коров, о чём сайт сам пишет в блоке про фауну.
       * Образ спасаем, обещание убираем: сила переезжает из «можно не брать»
       * в «местные пьют её всю жизнь».
       */
      water: {
        title: "Вода",
        body: "Полтора литра на человека — с собой. По дороге будут источники: вода выходит прямо из камня, и местные пьют её всю жизнь. Наберите и вы — но вечером вскипятите на печи. Выше по склону пасут овец, а высота не прощает желудку ничего.",
      },
      hands: {
        title: "Не с пустыми руками",
        body: "Купите что-нибудь внизу, в городе. Фрукты, хлеб, листья коки. На тропе вы встретите пастухов, стариков, детей — здесь не проходят мимо друг друга.",
        note: "Это не подарок. Это то, как здесь здороваются.",
      },
      pets: { title: "Питомцы", body: "Собаки и кошки — можно." },
      family: {
        title: "Дети",
        body: "Здесь высоко и сурово. Здесь живут местные дети, и сюда приезжают дети из долины. Ехать ли с ребёнком — решают родители: рекомендаций мы не даём. Маршрут подберём под возраст, высоту под него подобрать нельзя.",
      },
    },
    reviews: {
      title: "Кто здесь был",
      items: [
        {
          text: "Мы приехали на два дня, а уехали другими людьми. Дочка до сих пор спрашивает, когда вернёмся к альпакам.",
          author: "Марина, Москва",
        },
        {
          text: "Первую ночь я не мог уснуть от тишины. На вторую понял, что не проверял телефон почти сутки.",
          author: "Дмитрий, Санкт-Петербург",
        },
        {
          text: "Хозяин не устраивает программу. Он просто живёт, а вы живёте рядом. Оказалось, это и нужно.",
          author: "Аня и Павел, Киев",
        },
      ],
    },
    contact: {
      title: "Приезжайте",
      lead: "Формы бронирования нет. Есть человек, которому можно написать.",
      cta: "Написать в WhatsApp",
      reply: "Обычно отвечаю в течение часа — но если я наверху, связь ловит не всегда: тогда ответ придёт вечером или утром.",
      languages: "Пишите по-русски, по-английски или по-испански.",
      wa: "Здравствуйте! Хочу узнать про Kinsacocha.",
      emailLabel: "Почта",
    },
    footer: {
      nav: "Навигация",
      rights: "Все права защищены",
      instagram: "Instagram",
      tagline: "Дом — частный. Всё вокруг — общее.",
      lakesTitle: "Три озера",
    },
    gallery: {
      title: "Фотографии",
      lead: "Всё, что снято здесь.",
      all: "Все",
      noGeo: "Локации не подписаны намеренно.",
      tags: {
        lakes: "Озёра",
        mountains: "Горы",
        house: "Дом",
        tipi: "Типи",
        alpacas: "Альпаки",
        sunset: "Закат и рассвет",
        night: "Ночь и звёзды",
        trails: "Маршруты",
        life: "Быт и люди",
        food: "Еда и чай",
        plants: "Растения",
        crafts: "Ремёсла",
      },
      byMonth: "Когда снято",
      allMonths: "Любой месяц",
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ],
      close: "Закрыть",
      prev: "Предыдущее",
      next: "Следующее",
    },
    blog: {
      title: "Записи",
      lead: "О месте, высоте и о том, что здесь растёт.",
      readMore: "Читать",
      related: "Ещё по теме",
      back: "Все записи",
      draft: "Черновик",
      cta: "Спросить про поездку",
      wa: "Здравствуйте! Прочитал статью на сайте, хочу узнать подробнее.",
    },
  },

  /* ─────────────────────────────── EN ─────────────────────────────── */
  en: {
    meta: {
      title: "Kinsacocha — a house at 4,200 m in the Andes",
      description:
        "A private house by three mountain lakes in the Paru-Paru community, Peru. Wood stove, hot water, silence. No WiFi — which is exactly the point.",
    },
    nav: {
      story: "The place",
      lakes: "The lakes",
      formats: "Ways to stay",
      routes: "Walking",
      life: "Wildlife",
      gallery: "Photos",
      contact: "Get in touch",
      menu: "Menu",
      close: "Close",
      blog: "Journal",
    },
    hero: {
      title: "A night at the Kinsa Cocha lakes",
      subtitle: "4,200 metres above the Sacred Valley. A stove, a hot shower and a sky the city hides from you. People come here for the day. You can stay.",
      watchFilm: "Watch the film",
      scroll: "Scroll",
    },
    story: {
      title: "Just a house",
      lead: "Not a hotel. Not a retreat centre. Not glamping. A house.",
      body: [
        "With a wood stove, hot water and a kitchen. At 4,200 metres that already counts as luxury.",
        "Mountain lakes all around. The neighbours raise alpacas, freeze-dry potatoes the way their grandparents did, and rarely go down to town. This is their world. We are part of it, and we share it with people who need out of the noise.",
        "It is cold here and there is no Wi-Fi. The mobile signal comes and goes — which may be the best thing to happen to you all year: to see a real night sky once, and not look at a phone while it happens.",
      ],
      name: "Kinsa qucha is Quechua for “three lakes”. The place is named after a count.",
      ownership: "The house is private. Everything around it belongs to the community.",
    },
    notFound: {
      title: "What you won't find here",
      lead: "Anyone can find the three lakes — the trail has been online for years, and we won't pretend otherwise. It's the rest we keep quiet about.",
      items: ["Coordinates", "The trails beyond the lakes", "Where the puma was seen"],
      footer:
        "Not out of stubbornness. These trails survive because nobody writes about them.",
    },
    lakes: {
      title: "Three lakes",
      name: "Kinsa qucha is Quechua for “three lakes”. The place is named after a count.",
      lead: "This is what people come for. We give you the altitudes and the colour of the water. We do not tell you how to get there.",
      items: [
        {
          name: "Puma Cocha",
          altitude: "4,325 m",
          body: "The highest. “Lake of the puma” in Quechua: to the Inca the puma meant strength and the bond with the earth. Nobody here has seen her.",
        },
        {
          name: "Azul Cocha",
          altitude: "4,247 m",
          body: "Deep blue water going to turquoise. On a clear day the line between water and sky nearly disappears.",
        },
        {
          name: "Kinsa Cocha",
          altitude: "The largest",
          body: "The closest one. The house stands by it and it named the whole place. The community farms trout here.",
        },
      ],
      cta: "More about the three lakes",
    },
    road: {
      title: "Getting here",
      lead: "If you are already in the Sacred Valley, this is closer than it sounds.",
      pisac: "from Pisac",
      cusco: "from Cusco",
      minutes: "minutes",
      note: "A transfer to the door is arranged separately over WhatsApp. The road is best not rushed — it is part of the experience.",
      valley: "If the mountains leave you wanting more, we'll find a driver and take the valley: Maras, Moray, Ollantaytambo. Just ask.",
      cta: "Ask about a transfer",
      wa: "Hello! I'd like to ask about a transfer to Kinsacocha.",
    },
    about: {
      title: "Who you're writing to",
      name: "Yan",
      body: [
        "My name is Yan. This is my house, and I am also your guide.",
        "The house stands on the first line of Kinsa Cocha — from the door to the water is a few steps, not a drive.",
        "When you press the button below, it is me who answers, not a manager. I'll pick the trail to suit you, meet you on the road, and have the stove going before you arrive.",
      ],
    },
    altitude: {
      title: "Altitude",
      lead: "The house sits at 4,200 metres. Cusco is 3,400, Pisac 2,900. You feel the difference on the first night: a faster heartbeat, broken sleep, maybe a headache in the morning. That is normal and it passes.",
      items: [
        "Don't come up on your first or second day in Peru. Two or three nights in Cusco or the valley, and you'll arrive a different person.",
        "Drink more water, eat less, and leave the alcohol for another evening.",
        "If a night goes genuinely wrong, there is one cure here and it always works — go down. There is a car, Pisac is forty minutes away, and downhill is faster.",
      ],
      footer: "We would rather talk you out of a bad date than take your money and watch you suffer.",
    },
    oneDay: {
      title: "A day and a night",
      lead: "The price is for a day, morning to morning. Here is what that looks like.",
      items: [
        { time: "10:00", body: "You arrive. The taxi reaches the door, bags inside, tea." },
        { time: "12:00", body: "First walk. The near lake — or just around the house, if the altitude hasn't let go yet." },
        { time: "17:30", body: "The sun drops behind the ridge and the temperature falls ten degrees in an hour." },
        { time: "18:00", body: "The stove. After this everyone sits around it, because nowhere else is warm." },
        { time: "19:30", body: "Dinner, if you ordered from the neighbours." },
        { time: "21:00", body: "Out into the yard. This is the thing you came for." },
        { time: "06:00", body: "The lake goes perfectly still for exactly one hour. Then the wind gets up." },
        { time: "10:00", body: "You leave. Or you stay another day — which happens more often." },
      ],
    },
    sleep: {
      title: "Where you'll sleep",
      items: [
        { name: "The room", body: "Two beds, blankets, a door of your own." },
        { name: "The living room", body: "The sofa by the stove. The warmest place in the house." },
        { name: "The tipi", body: "Six to eight places. Firewood and a gas stove. Under the stars, but not under open sky." },
      ],
      total: "Eleven places in all. There is bedding everywhere; bring a sleeping bag anyway, your own is warmer.",
    },
    faq: {
      title: "Practical",
      lead: "Everything people usually work out over messages.",
      items: [
        { q: "How many people fit", a: "Two beds in the room, the sofa by the stove, and a tipi for six to eight. Up to eleven." },
        { q: "Toilet and shower", a: "Flush toilet. Hot shower, water heated by gas." },
        { q: "Electricity", a: "Mains. Sockets, light at night. Cuts happen — these are mountains." },
        { q: "Signal and internet", a: "Claro works well, Bitel comes and goes. No Wi-Fi, and there won't be. We don't promise signal: weather, power." },
        { q: "How cold at night", a: "Around four to six degrees. Blankets, hot water bottles, the stove. Bring a sleeping bag anyway." },
        { q: "How to pay", a: "Any way you like: cash, soles or dollars, Yape." },
        { q: "Is a deposit needed", a: "Yes, 30% to hold the date. The rest on arrival." },
        { q: "If you change your mind", a: "Tell us three days ahead and that's the end of it. Don't turn up without a word and the deposit stays." },
        { q: "Children", a: "Any age. Whether to bring yours is the parents' call — we don't give advice on it." },
        { q: "The road in the rainy season", a: "Any car gets through. You don't need four-wheel drive." },
        { q: "Food", a: "Lunch and dinner from the neighbours — 30 soles a head, ordered a day ahead. Or bring your own and cook." },
      ],
    },
    formats: {
      title: "Ways to come",
      lead: "Four of them. All of them work with children.",
      kids: "Good with kids",
      priceFrom: "from",
      perPersonDay: "per person, per day",
      perDay: "per day",
      dayNote:
        "A day runs morning to morning: you arrive one morning and leave the next. Groups are priced per person too.",
      individual: "Priced case by case",
      cta: "Message on WhatsApp",
      items: {
        access: {
          name: "A day in the house",
          body: "The house and the land are yours for a day. Nothing scheduled: you walk where you like and come back to the fire when you want.",
          host: "No host needed",
          wa: "Hello! I'd like to ask about staying at Kinsacocha.",
        },
        guided: {
          name: "With a guide",
          body: "The owner walks with you. Trails that are on no map anywhere.",
          host: "Host with you",
          wa: "Hello! I'm interested in a guided walk at Kinsacocha.",
        },
        beds: {
          name: "Beds for a group",
          body: "Your group takes the beds. The host may be in the house.",
          host: "Host may be around",
          wa: "Hello! I'd like to ask about booking beds at Kinsacocha.",
        },
        exclusive: {
          name: "The whole house",
          body: "All of it is yours. The host leaves. Complete privacy.",
          host: "Host leaves",
          wa: "Hello! I'd like to ask about renting the whole house at Kinsacocha.",
        },
      },
    },
    food: {
      title: "Food and drink",
      lead: "There is no restaurant. There are neighbours who cook. Arrange it on WhatsApp a day ahead.",
      items: [
        {
          name: "The neighbours cook",
          body: "Lunch and dinner, 30 soles per person. Order the day before — nothing is bought last-minute up here, everything comes up from below. They bring it to the house, or you walk over and eat where it was cooked.",
        },
        {
          name: "Trucha",
          body: "Trout, farmed by the community in Azul Cocha. The one thing you don't have to carry up. Order a day ahead.",
        },
        {
          name: "Chuño and moraya",
          body: "Potatoes freeze-dried by frost and sun, black and white. Five thousand years old as a technique, and still the best one up here.",
        },
        {
          name: "Cook it yourself",
          body: "Stove, pots, plates — all in the house. Bring food up from below and cook whatever you like. Or cook it over the fire: it comes out a different thing entirely.",
        },
        {
          name: "Chicha",
          body: "Here it is served hot — the owner's own idea: honey, ginger, spices. At 4,200 metres you want something hot all day, and this one warms you from the inside. Nobody else makes it this way.",
        },
        {
          name: "Tea",
          body: "Chinese, Ceylon or Peruvian. At this altitude tea stops being a drink and becomes an event.",
        },
      ],
    },
    amenities: {
      title: "What the house has",
      items: [
        {
          name: "A hot shower",
          body: "Not “hot water” — a shower. After a day in the wind at 4,200 metres that isn't an amenity, it's an event. Guests talk about it more than the stars, and we've made our peace with that.",
        },
        {
          name: "Real fire",
          body: "A wood stove. The only heat in the building, and the reason nobody goes off to their own room.",
        },
        {
          name: "The kitchen is yours",
          body: "Stove, pots, plates. Bring food up and cook whatever you like.",
        },
        {
          name: "Tipi",
          body: "Sleeping under the stars, for anyone who finds a roof excessive.",
        },
        {
          name: "Transfer",
          body: "A taxi from Pisac to the door, arranged for guests. Paid separately.",
        },
        {
          name: "Washing machine",
          body: "Yes. At 4,200 metres. We're surprised too.",
        },
      ],
    },
    routes: {
      title: "Walking",
      noMap: "There is no map here. There won't be one.",
      times: [
        {
          key: "dawn",
          label: "Dawn",
          body: "Out at 5:30. Fog still lying in the valleys, the peaks already burning. You and the silence.",
        },
        {
          key: "morning",
          label: "Morning, with children",
          body: "Three hours. Easy going. The first lake and back for lunch. Alpacas are not afraid of small guests.",
        },
        {
          key: "day",
          label: "Full day",
          body: "Six hours. Three lakes. A long stop with food by the water. For people who want more of it.",
        },
        {
          key: "moon",
          label: "Full moon",
          body: "At night. No torches. Three days a month, on request only.",
        },
      ],
      guide: {
        title: "Tell us about yourself — the guide answers",
        timeLabel: "How much time you have",
        whoLabel: "Who is walking",
        time: {
          hours: "A couple of hours",
          half: "Half a day",
          day: "A full day",
          night: "At night",
        },
        who: {
          kids: "With children",
          two: "The two of us",
          group: "A group",
          alone: "On my own",
        },
        answers: {
          "hours:kids":
            "Children and two hours — we go to the near lake. Back by lunch, tired exactly enough to sleep before sunset.",
          "hours:two":
            "Two hours for the two of you — up to the water and back. Not far, but you will feel the altitude immediately. Bring the thermos.",
          "hours:group":
            "A group, briefly — we stay near the water. In every group someone struggles with the altitude, and that is normal.",
          "hours:alone":
            "Alone, two hours — the honest choice for a first day. We won't go far, but you will hear the silence.",
          "half:kids":
            "Half a day with children — down to the water, a long sit, back another way. If they tire, we turn early. No discussion.",
          "half:two":
            "Half a day, the two of you — early start, while the fog is still in the valleys. By midday you'll be where nobody is.",
          "half:group":
            "Half a day as a group — slowly, stopping often. Up here hurrying buys you nothing but a headache.",
          "half:alone":
            "Half a day alone — I'll show you where to go and leave you to it. Some people come for exactly that.",
          "day:kids":
            "A full day with children — possible if they walk and you are not in a hurry. Food comes with us, and the stop by the water is long.",
          "day:two":
            "A full day, the two of you — three lakes, lunch by the water, home at sunset. This is the day people come for.",
          "day:group":
            "A full day as a group — we walk at the pace of the slowest. That way everyone arrives, and nobody remembers it as an ordeal.",
          "day:alone":
            "A full day alone — far, quiet, no conversation. I'll tell you where the water is and when to turn back.",
          "night:kids":
            "We don't walk at night with children. But the sky above the house is no worse — we carry blankets out and stay in the yard.",
          "night:two":
            "At night, the two of you — full moon only, and no torches. Your eyes take about twenty minutes, and then it starts.",
          "night:group":
            "A group at night — close together and quiet. Voices carry a kilometre in the dark and ruin the whole thing.",
          "night:alone":
            "I won't send you out alone at night. We go together, or we wait for morning.",
        },
        footer:
          "We don't publish routes. The guide picks the trail in the morning — by the weather, by your breathing, by who came with you.",
      },
      moon: {
        title: "The moon window",
        next: "Next full moon",
        days: "days",
        today: "Tonight",
        cta: "Ask about this date",
        wa: "Hello! I'd like to ask about a full-moon night walk",
      },
    },
    fauna: {
      title: "What you'll see",
      lead: "In descending order of likelihood. We don't promise what we can't deliver.",
      tiers: [
        {
          title: "You will see these",
          items: [
            {
              name: "Andean goose",
              quechua: "huallata",
              body: "They fly in pairs. The same pair, for life. At 4,200 metres that reads as a statement, not a fact from a field guide.",
            },
            {
              name: "Vizcacha",
              quechua: "wisk'acha",
              body: "A hare with a squirrel's tail attached. Lives in the rocks, visible straight from the trail.",
            },
            {
              name: "Puna ibis",
              quechua: "yanavico",
              body: "They stand in the shallows without moving. An hour, two. Easier to mistake for a stone.",
            },
            { name: "Ducks", body: "On the water all year, in any weather." },
            { name: "Alpacas", body: "Not afraid of small guests." },
            {
              name: "Trout",
              body: "Farmed by the community in Azul Cocha. No fishing — but you can order it for dinner.",
            },
          ],
        },
        {
          title: "If you're lucky",
          items: [
            {
              name: "Condor",
              body: "A few times a year. If you see one, it's your day.",
            },
            {
              name: "Taruca",
              body: "The Andean deer. She sees you first and leaves. If it happens the other way round, it's your day.",
            },
            { name: "Andean fox", body: "More often the tracks than the fox." },
            { name: "Skunk", body: "Best from a distance." },
          ],
        },
      ],
      herded: {
        title: "And the ones being herded",
        lead: "This is not wildlife. This is somebody's livelihood walking towards you on the trail.",
        items: [
          { name: "Sheep", body: "In flocks, usually with a shepherd somewhere close." },
          { name: "Cattle", body: "On the slopes, wherever the grass is thicker." },
          { name: "Donkeys", body: "They carry everything that needs carrying. There are no roads up here." },
        ],
      },
      puma: {
        title: "Almost never",
        body: [
          "There are pumas here. Nobody has seen one.",
          "The locals say she sees you first. Always. And leaves before you have had the thought.",
          "We have no photograph of her. So there isn't one here.",
        ],
        safety:
          "There is no danger. A puma moves away from people, not toward them — she notices you long before you could notice her.",
      },
    },
    flora: {
      title: "What's underfoot",
      opener: "A cactus that is cold.",
      lead: "Plants at 4,200 metres are not smaller versions of the ones below. They are the same problems solved differently: wind, ultraviolet, frost every night of the year.",
      wool: "Everything here wears wool. Even the cactus.",
      items: [
        {
          name: "Cushion cactus",
          body: "Growing in flat pads pressed to the ground, heavy spines, white fuzz. Nothing here grows upward.",
        },
        {
          name: "Yellow flowers",
          body: "A few millimetres across, and brighter than anything growing below. Few pollinators, short window.",
        },
        {
          name: "October and November",
          body: "Everything flowers at once. The dry season ends, the first rain is close — the bloom and the water arrive together.",
        },
        {
          name: "Queuña",
          body: "Trees of its genus grow higher than any on earth, bark peeling like old paper. Not by the house — it waits along the way, for whoever walked.",
        },
        {
          name: "Ichu",
          body: "The grass of the puna. Roofs, rope, bedding. Stiff enough to cut your hand.",
        },
      ],
      note: "Names are confirmed against photographs. We don't guess in public.",
    },
    weaving: {
      title: "Weaving",
      lead: "There is a community museum by the lake, and what is woven here is sold there.",
      onTheMove:
        "They weave while walking. Behind the herd. Wool and thread always on them, the way a city person carries a phone.",
      notSouvenir:
        "This is not a souvenir. This is income. The belt you take home was woven by someone walking after alpacas.",
      museum:
        "A museum with an exhibition of the weaving. Entry is 5–10 soles. Photography is allowed — we ask first anyway.",
      makes: "What they make",
      makesList: ["Belts", "Shawls", "Hats", "Bags", "Gloves", "Ponchos"],
      park: "Paru-Paru is one of the five communities that own Parque de la Papa — the land that keeps more than a thousand varieties of potato. The house stands inside it.",
    },
    mosaic: { title: "What it looks like", cta: "See all photos" },
    prep: {
      title: "Coming prepared",
      lead: "You will burn during the day. You will freeze at night. Both are solved in advance.",
      night: {
        title: "Night in the house",
        items: [
          "Sleeping bag — bedding is provided, but your own is warmer",
          "Down jacket",
          "Wool socks",
          "Thermos",
        ],
        note: "The house sits at about four to six degrees at night. There are blankets — people sleep under two or three. There are hot water bottles: fill one and take it to bed. The tipi has firewood and a gas stove. It is livable, and people live it.",
      },
      day: {
        title: "Day on the trail",
        items: [
          "Hat",
          "Sunscreen",
          "Backpack — for a water bottle, a thermos and some food",
          "Trekking poles — available here, but yours will fit better",
          "Rain jacket — essential in the wet season",
        ],
      },
      have: {
        title: "Already here — leave it at home",
        body: "Blankets, dishes, water, firewood, light.",
      },
      water: {
        title: "Water",
        body: "Carry a litre and a half per person. You'll pass springs on the way — water straight out of the rock, and people here have drunk it all their lives. Fill up if you like, but boil it on the stove at night: there are sheep grazing above every spring, and altitude forgives your stomach nothing.",
      },
      hands: {
        title: "Don't arrive empty-handed",
        body: "Buy something down in town. Fruit, bread, coca leaves — coca is legal, traditional and sold in every market in Peru. On the trail you will meet shepherds, elders, children. People here do not walk past one another.",
        note: "It isn't a gift. It's how people say hello here.",
      },
      pets: { title: "Pets", body: "Dogs and cats are welcome." },
      family: {
        title: "Children",
        body: "It is high here, and it is harsh. Local children live here, and children come up from the valley. Whether to bring yours is the parents' call — we don't give advice on it. We'll fit the walk to the child; the altitude can't be fitted to anyone.",
      },
    },
    reviews: {
      title: "People who came",
      items: [
        {
          text: "We came for two days and left as different people. Our daughter still asks when we are going back to the alpacas.",
          author: "Marina, Moscow",
        },
        {
          text: "The first night I couldn't sleep because of the silence. The second, I realised I hadn't checked my phone in a day.",
          author: "Dmitry, St Petersburg",
        },
        {
          text: "The host doesn't run a programme. He just lives there, and you live alongside him. Turns out that was the point.",
          author: "Anya and Pavel, Kyiv",
        },
      ],
    },
    contact: {
      title: "Come up",
      lead: "There is no booking form. There is a person you can write to.",
      cta: "Message on WhatsApp",
      reply: "I usually reply within the hour — but when I'm up at the house the signal comes and goes, and the answer may reach you that evening or the next morning.",
      languages: "Write in English, Spanish or Russian.",
      wa: "Hello! I'd like to know more about Kinsacocha.",
      emailLabel: "Email",
    },
    footer: {
      nav: "Navigation",
      rights: "All rights reserved",
      instagram: "Instagram",
      tagline: "The house is private. Everything around it belongs to the community.",
      lakesTitle: "Three lakes",
    },
    gallery: {
      title: "Photographs",
      lead: "Everything shot up here.",
      all: "All",
      noGeo: "Locations are deliberately not captioned.",
      tags: {
        lakes: "Lakes",
        mountains: "Mountains",
        house: "The house",
        tipi: "Tipi",
        alpacas: "Alpacas",
        sunset: "Dawn & dusk",
        night: "Night & stars",
        trails: "Trails",
        life: "People & daily life",
        food: "Food & tea",
        plants: "Plants",
        crafts: "Crafts",
      },
      byMonth: "When it was taken",
      allMonths: "Any month",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      close: "Close",
      prev: "Previous",
      next: "Next",
    },
    blog: {
      title: "Journal",
      lead: "On the place, the altitude, and what grows up here.",
      readMore: "Read",
      related: "More like this",
      back: "All entries",
      draft: "Draft",
      cta: "Ask about visiting",
      wa: "Hello! I read an article on your site and would like to know more.",
    },
  },

  /* ─────────────────────────────── ES ─────────────────────────────── */
  es: {
    meta: {
      title: "Kinsacocha — una casa a 4200 m en los Andes",
      description:
        "Casa privada junto a tres lagunas en la comunidad de Paru-Paru, Cusco. Fogón, agua caliente, silencio. Sin WiFi — y por eso vale la pena.",
    },
    nav: {
      story: "El lugar",
      lakes: "Las lagunas",
      formats: "Cómo venir",
      routes: "Caminatas",
      life: "Lo vivo",
      gallery: "Fotos",
      contact: "Escríbenos",
      menu: "Menú",
      close: "Cerrar",
      blog: "Diario",
    },
    hero: {
      title: "Una noche en las lagunas de Kinsa Cocha",
      subtitle: "4200 metros sobre el Valle Sagrado. Fogón, ducha caliente y un cielo que en la ciudad no existe. Aquí la gente viene por el día. Tú puedes quedarte.",
      watchFilm: "Ver la película",
      scroll: "Desliza",
    },
    story: {
      title: "Solo una casa",
      lead: "No es un hotel, ni un centro de retiro, ni glamping. Es una casa.",
      body: [
        "Con fogón, agua caliente y cocina. A 4200 metros eso ya es lujo.",
        "Alrededor, las lagunas. Al lado viven personas que crían alpacas, hacen chuño y casi nunca bajan al pueblo. Este es su mundo. Nosotros somos parte de él y lo compartimos con quien necesita salir del ruido.",
        "Hace frío y no hay Wi-Fi. La señal va y viene — y quizá sea lo mejor que te pase en todo el año: ver una vez en la vida un cielo estrellado de verdad, y no mirar el celular mientras pasa.",
      ],
      name: "Kinsa qucha en quechua es «tres lagunas». El lugar lleva el nombre de una cuenta.",
      ownership: "La casa es privada. Todo lo que la rodea es de la comunidad.",
    },
    notFound: {
      title: "Lo que aquí no vas a encontrar",
      lead: "Las tres lagunas las encuentra cualquiera — la ruta lleva años en internet y no vamos a fingir lo contrario. Lo que callamos es lo demás.",
      items: ["Coordenadas", "Los caminos más allá de las lagunas", "Dónde se vio al puma"],
      footer:
        "No por terquedad. Estos caminos siguen existiendo porque nadie escribe sobre ellos.",
    },
    lakes: {
      title: "Tres lagunas",
      name: "Kinsa qucha en quechua es «tres lagunas». El lugar lleva el nombre de una cuenta.",
      lead: "Por esto viene la gente. Damos las alturas y el color del agua. No decimos cómo llegar.",
      items: [
        {
          name: "Puma Cocha",
          altitude: "4325 m",
          body: "La más alta. «Laguna del puma» en quechua: para los incas el puma era la fuerza y el vínculo con la tierra. Aquí nadie lo ha visto.",
        },
        {
          name: "Azul Cocha",
          altitude: "4247 m",
          body: "Agua azul intensa, casi turquesa. En un día despejado el límite entre el agua y el cielo casi desaparece.",
        },
        {
          name: "Kinsa Cocha",
          altitude: "La más grande",
          body: "La más cercana. Junto a ella está la casa y de ella viene el nombre del lugar. Aquí la comunidad cría trucha.",
        },
      ],
      cta: "Más sobre las tres lagunas",
    },
    road: {
      title: "Cómo llegar",
      lead: "Si ya estás en el Valle Sagrado, queda más cerca de lo que parece.",
      pisac: "desde Pisac",
      cusco: "desde Cusco",
      minutes: "minutos",
      note: "El traslado hasta la puerta se coordina aparte por WhatsApp. El camino conviene no apurarlo — es parte de la experiencia.",
      valley: "Si después de los cerros quieres seguir, conseguimos chofer y bajamos al valle: Maras, Moray, Ollantaytambo. Solo pregunta.",
      cta: "Consultar por el traslado",
      wa: "¡Hola! Quisiera consultar por el traslado a Kinsacocha.",
    },
    about: {
      title: "A quién le escribes",
      name: "Yan",
      body: [
        "Me llamo Yan. Esta es mi casa, y también soy tu guía.",
        "La casa está en la primera línea de Kinsa Cocha — de la puerta al agua son pasos, no un camino.",
        "Cuando aprietes el botón de abajo te respondo yo, no un gestor. Elijo la ruta según tú, te recibo en el camino y prendo el fogón antes de que llegues.",
      ],
    },
    altitude: {
      title: "La altura",
      lead: "La casa está a 4200 metros. Cusco está a 3400, Pisac a 2900. La diferencia se siente la primera noche: el corazón late más rápido, el sueño se corta, en la mañana puede doler la cabeza. Es normal y pasa.",
      items: [
        "No subas el primer ni el segundo día en el Perú. Dos o tres noches en Cusco o en el valle, y subes siendo otra persona.",
        "Toma más agua, come menos, y deja el trago para otra noche.",
        "Si una noche se pone de verdad mal, aquí hay una sola cura y siempre funciona — bajar. Hay carro, Pisac está a cuarenta minutos, y para abajo es más rápido.",
      ],
      footer: "Preferimos convencerte de cambiar la fecha antes que recibirte y verte mal.",
    },
    oneDay: {
      title: "Un día y una noche",
      lead: "El precio es por día, de mañana a mañana. Así se ve.",
      items: [
        { time: "10:00", body: "Llegas. El taxi llega hasta la puerta, las cosas adentro, un mate." },
        { time: "12:00", body: "Primera salida. La laguna cercana — o solo alrededor de la casa, si la altura todavía no suelta." },
        { time: "17:30", body: "El sol se va detrás del cerro y la temperatura cae diez grados en una hora." },
        { time: "18:00", body: "El fogón. De ahí en adelante todos se sientan alrededor, porque no hay otro lugar tibio." },
        { time: "19:30", body: "La cena, si la encargaste con las vecinas." },
        { time: "21:00", body: "Salimos al patio. Esto es por lo que viniste." },
        { time: "06:00", body: "La laguna se queda quieta exactamente una hora. Después se levanta el viento." },
        { time: "10:00", body: "Te vas. O te quedas un día más — eso pasa más seguido." },
      ],
    },
    sleep: {
      title: "Dónde vas a dormir",
      items: [
        { name: "El cuarto", body: "Dos camas, frazadas, puerta propia." },
        { name: "La sala", body: "El sofá junto al fogón. El lugar más tibio de la casa." },
        { name: "El tipi", body: "De seis a ocho lugares. Leña y estufa a gas. Bajo las estrellas, pero no a la intemperie." },
      ],
      total: "Once lugares en total. Hay cama en todos lados; igual trae saco de dormir, el propio abriga más.",
    },
    faq: {
      title: "Práctica",
      lead: "Todo lo que normalmente se resuelve por mensajes.",
      items: [
        { q: "Cuánta gente entra", a: "Dos camas en el cuarto, el sofá junto al fogón y un tipi para seis u ocho. Hasta once." },
        { q: "Baño y ducha", a: "Baño con desagüe. Ducha caliente, el agua se calienta a gas." },
        { q: "Electricidad", a: "Red. Hay enchufes y luz de noche. Hay cortes — son los cerros." },
        { q: "Señal e internet", a: "Claro entra bien, Bitel va y viene. Wi-Fi no hay ni va a haber. No prometemos señal: clima, electricidad." },
        { q: "Cuántos grados de noche", a: "Unos cuatro a seis. Frazadas, bolsas de agua caliente, el fogón. Igual trae saco." },
        { q: "Cómo pagar", a: "Como quieras: efectivo, soles o dólares, Yape." },
        { q: "Hace falta adelanto", a: "Sí, 30% para separar la fecha. El resto al llegar." },
        { q: "Si cambias de idea", a: "Avísanos con tres días y ahí queda. Si no llegas y no dices nada, el adelanto se queda." },
        { q: "Niños", a: "De cualquier edad. Traerlos lo deciden los padres — nosotros no damos recomendaciones." },
        { q: "El camino en época de lluvias", a: "Pasa cualquier carro. No hace falta doble tracción." },
        { q: "Comida", a: "Almuerzo y cena con las vecinas — 30 soles por persona, encargado un día antes. O trae lo tuyo y cocina." },
      ],
    },
    formats: {
      title: "Cómo se viene",
      lead: "Cuatro formas. Todas funcionan con niños.",
      kids: "Con niños, sí",
      priceFrom: "desde",
      perPersonDay: "por persona, por día",
      perDay: "por día",
      dayNote:
        "El día va de mañana a mañana: llegas una mañana y te vas a la siguiente. Para grupos el precio también es por persona.",
      individual: "Se conversa caso por caso",
      cta: "Escribir por WhatsApp",
      items: {
        access: {
          name: "Un día en la casa",
          body: "La casa y el terreno son tuyos por un día. Sin programa: caminas por donde quieras y vuelves al fogón cuando quieras.",
          host: "Sin anfitrión",
          wa: "¡Hola! Quisiera consultar por una estadía en Kinsacocha.",
        },
        guided: {
          name: "Con guía",
          body: "El dueño camina contigo. Caminos que no están en ningún mapa.",
          host: "Anfitrión contigo",
          wa: "¡Hola! Me interesa una caminata con guía en Kinsacocha.",
        },
        beds: {
          name: "Camas para un grupo",
          body: "El grupo toma las camas. El anfitrión puede estar en la casa.",
          host: "Anfitrión quizá",
          wa: "¡Hola! Quisiera consultar por camas en Kinsacocha.",
        },
        exclusive: {
          name: "La casa entera",
          body: "Toda la casa es tuya. El anfitrión se va. Privacidad completa.",
          host: "El anfitrión se va",
          wa: "¡Hola! Quisiera consultar por alquilar toda la casa de Kinsacocha.",
        },
      },
    },
    food: {
      title: "Comida y bebida",
      lead: "Aquí no hay restaurante: hay vecinas que cocinan. Se coordina por WhatsApp con un día de anticipación.",
      items: [
        {
          name: "Cocinan las vecinas",
          body: "Almuerzo y cena, 30 soles por persona. Se encarga el día antes: aquí arriba nada se compra a última hora, todo sube desde abajo. Lo traen a la casa, o vas tú a la casa donde se cocinó y comes ahí.",
        },
        {
          name: "Trucha",
          body: "La cría la comunidad en Azul Cocha. Lo único que no hay que subir. Se encarga con un día de anticipación.",
        },
        {
          name: "Chuño y moraya",
          body: "Papa deshidratada por la helada y el sol, negra y blanca. Cinco mil años de técnica, y sigue siendo la mejor aquí arriba.",
        },
        {
          name: "Cocinar tú mismo",
          body: "Fogón, ollas, vajilla — todo está en la casa. Sube tus productos y cocina lo que quieras. O hazlo sobre el fuego vivo: sale otra cosa.",
        },
        {
          name: "Chicha",
          body: "Aquí se toma caliente — invento del dueño: miel, jengibre, especias. A 4200 el cuerpo pide algo caliente todo el día, y esta además calienta por dentro. En ningún otro lado la hacen así.",
        },
        {
          name: "Té",
          body: "Chino, de Ceilán o peruano. A esta altura el té deja de ser una bebida y se vuelve un acontecimiento.",
        },
      ],
    },
    amenities: {
      title: "Lo que tiene la casa",
      items: [
        {
          name: "Ducha caliente",
          body: "No «agua caliente» — ducha. Después de un día de viento a 4200 eso no es una comodidad, es un acontecimiento. Los huéspedes hablan más de ella que de las estrellas, y no nos ofende.",
        },
        {
          name: "Fuego de verdad",
          body: "Fogón a leña. El único calor de la casa, y la razón por la que nadie se va a su cuarto.",
        },
        {
          name: "La cocina es tuya",
          body: "Fogón, ollas, vajilla. Sube la comida y cocina lo que quieras.",
        },
        {
          name: "Tipi",
          body: "Dormir bajo las estrellas, para quien encuentra excesivo un techo.",
        },
        {
          name: "Traslado",
          body: "Taxi desde Pisac hasta la puerta, se coordina para los huéspedes. Se paga aparte.",
        },
        {
          name: "Lavadora",
          body: "Sí. A 4200 metros. Nosotros también nos sorprendemos.",
        },
      ],
    },
    routes: {
      title: "Caminatas",
      noMap: "Aquí no hay mapa. Y no lo va a haber.",
      times: [
        {
          key: "dawn",
          label: "Amanecer",
          body: "Salida 5:30. La niebla todavía en los valles, las cumbres ya encendidas. Tú y el silencio.",
        },
        {
          key: "morning",
          label: "Mañana, con niños",
          body: "Tres horas. Tranquilo. La primera laguna y de vuelta para el almuerzo. Las alpacas no le temen a los invitados chicos.",
        },
        {
          key: "day",
          label: "Todo el día",
          body: "Seis horas. Tres lagunas. Una parada larga con comida junto al agua. Para quien quiere más.",
        },
        {
          key: "moon",
          label: "Luna llena",
          body: "De noche. Sin linternas. Tres días al mes, solo a pedido.",
        },
      ],
      guide: {
        title: "Cuéntanos de ti — el guía responde",
        timeLabel: "Cuánto tiempo tienes",
        whoLabel: "Quién camina",
        time: {
          hours: "Un par de horas",
          half: "Medio día",
          day: "Todo el día",
          night: "De noche",
        },
        who: {
          kids: "Con niños",
          two: "Los dos",
          group: "En grupo",
          alone: "Solo",
        },
        answers: {
          "hours:kids":
            "Con niños y dos horas — vamos a la laguna cercana. De vuelta al almuerzo, cansados justo lo necesario para dormir antes del atardecer.",
          "hours:two":
            "Dos horas los dos — subir al agua y volver. No es lejos, pero la altura se siente enseguida. Lleva el termo.",
          "hours:group":
            "En grupo y poco tiempo — nos quedamos cerca del agua. En todo grupo hay alguien a quien la altura le cuesta, y es normal.",
          "hours:alone":
            "Solo y dos horas — la opción honesta para el primer día. No iremos lejos, pero vas a escuchar el silencio.",
          "half:kids":
            "Medio día con niños — bajamos al agua, nos sentamos un rato, volvemos por otro lado. Si se cansan, damos la vuelta antes. Sin discusión.",
          "half:two":
            "Medio día los dos — salimos temprano, con la niebla todavía en los valles. Al mediodía estarán donde no hay nadie.",
          "half:group":
            "Medio día en grupo — despacio y parando seguido. Aquí arriba apurarse solo da dolor de cabeza.",
          "half:alone":
            "Medio día solo — te muestro por dónde y te dejo tranquilo. Hay gente que viene exactamente por eso.",
          "day:kids":
            "Todo el día con niños — se puede si caminan y no hay apuro. La comida va con nosotros y la parada junto al agua es larga.",
          "day:two":
            "Todo el día los dos — tres lagunas, comida junto al agua, de regreso al atardecer. Este es el día por el que vienen.",
          "day:group":
            "Todo el día en grupo — al ritmo del más lento. Así llegan todos, y nadie lo recuerda como una prueba.",
          "day:alone":
            "Todo el día solo — lejos, callado y sin conversación. Te digo dónde está el agua y cuándo dar la vuelta.",
          "night:kids":
            "De noche no caminamos con niños. Pero el cielo sobre la casa no es peor — sacamos frazadas y nos quedamos en el patio.",
          "night:two":
            "De noche los dos — solo en luna llena y sin linternas. Los ojos tardan unos veinte minutos, y después empieza.",
          "night:group":
            "En grupo de noche — juntos y en silencio. Las voces se oyen a un kilómetro en la oscuridad y arruinan todo.",
          "night:alone":
            "Solo de noche no te dejo ir. Vamos juntos, o esperamos la mañana.",
        },
        footer:
          "No publicamos rutas. El guía elige el camino en la mañana — por el clima, por tu respiración, por quién vino contigo.",
      },
      moon: {
        title: "La ventana de luna",
        next: "Próxima luna llena",
        days: "días",
        today: "Esta noche",
        cta: "Preguntar por esta fecha",
        wa: "¡Hola! Quisiera consultar por una caminata nocturna de luna llena",
      },
    },
    fauna: {
      title: "Qué vas a ver",
      lead: "En orden de probabilidad. No prometemos lo que no podemos cumplir.",
      tiers: [
        {
          title: "Esto lo vas a ver",
          items: [
            {
              name: "Huallata",
              quechua: "huallata",
              body: "Vuelan en pareja. La misma pareja, toda la vida. A 4200 metros eso suena a declaración, no a dato de manual.",
            },
            {
              name: "Vizcacha",
              quechua: "wisk'acha",
              body: "Una liebre con cola de ardilla. Vive entre las piedras, se ve desde el camino.",
            },
            {
              name: "Yanavico",
              quechua: "yanavico",
              body: "Se quedan quietos en la orilla. Una hora, dos. Es más fácil confundirlos con una piedra.",
            },
            { name: "Patos", body: "En el agua todo el año, con cualquier clima." },
            { name: "Alpacas", body: "No le temen a los invitados chicos." },
            {
              name: "Trucha",
              body: "La cría la comunidad en Azul Cocha. No se pesca — pero se puede encargar para la cena.",
            },
          ],
        },
        {
          title: "Si hay suerte",
          items: [
            {
              name: "Cóndor",
              body: "Unas pocas veces al año. Si lo ves, es tu día.",
            },
            {
              name: "Taruca",
              body: "El venado andino. Te ve primero y se va. Si pasa al revés, es tu día.",
            },
            { name: "Zorro andino", body: "Más seguido la huella que el zorro." },
            { name: "Zorrino", body: "Mejor de lejos." },
          ],
        },
      ],
      herded: {
        title: "Y los que se pastorean",
        lead: "Esto no es fauna silvestre. Es el sustento de alguien que viene caminando hacia ti.",
        items: [
          { name: "Ovejas", body: "En rebaños, casi siempre con un pastor cerca." },
          { name: "Vacas", body: "En las laderas, donde el pasto está más tupido." },
          { name: "Burros", body: "Cargan todo lo que hay que cargar. Aquí arriba no hay carreteras." },
        ],
      },
      puma: {
        title: "Casi nunca",
        body: [
          "Aquí hay puma. Aquí nadie lo ha visto.",
          "Los comuneros dicen que ella te ve primero. Siempre. Y se va antes de que alcances a pensarlo.",
          "No tenemos una foto suya. Por eso aquí no hay ninguna.",
        ],
        safety:
          "No hay peligro. El puma se aleja de la gente, no se acerca — te nota mucho antes de que tú pudieras notarlo a él.",
      },
    },
    flora: {
      title: "Lo que hay bajo los pies",
      opener: "Un cactus que tiene frío.",
      lead: "Las plantas a 4200 no son versiones chicas de las de abajo. Son los mismos problemas resueltos de otra manera: viento, radiación, helada todas las noches del año.",
      wool: "Aquí todo usa lana. Hasta los cactus.",
      items: [
        {
          name: "Cactus en cojín",
          body: "Crecen en pencas pegadas al suelo, espinas grandes y pelusa blanca. Aquí nada crece hacia arriba.",
        },
        {
          name: "Flores amarillas",
          body: "De unos milímetros, y más intensas que cualquier cosa de abajo. Pocos polinizadores, ventana corta.",
        },
        {
          name: "Octubre y noviembre",
          body: "Todo florece de golpe. Termina la seca, la primera lluvia ya viene — la flor y el agua llegan juntas.",
        },
        {
          name: "Queuña",
          body: "Los árboles de su género crecen más alto que cualquiera del planeta, con la corteza en láminas como papel viejo. No está junto a la casa: espera en el camino, para quien caminó.",
        },
        {
          name: "Ichu",
          body: "El pasto de la puna. Techos, sogas, cama. Tan duro que corta la mano.",
        },
      ],
      note: "Los nombres se confirman con fotografías. No adivinamos en público.",
    },
    weaving: {
      title: "Tejido",
      lead: "Junto a la laguna hay un museo de la comunidad. Ahí mismo se vende lo que aquí se teje.",
      onTheMove:
        "Aquí se teje caminando. Detrás del rebaño. La lana y el hilo siempre encima, como el celular en el bolsillo de alguien de ciudad.",
      notSouvenir:
        "Esto no es un souvenir. Es el ingreso. La faja que te lleves la tejió alguien mientras caminaba detrás de las alpacas.",
      museum:
        "Un museo con exposición de tejidos. La entrada cuesta 5–10 soles. Se puede fotografiar — igual preguntamos antes.",
      makes: "Lo que se hace aquí",
      makesList: ["Fajas", "Mantas", "Chullos", "Bolsos", "Guantes", "Ponchos"],
      park: "Paru-Paru es una de las cinco comunidades dueñas del Parque de la Papa: la tierra que guarda más de mil variedades de papa. La casa está dentro.",
    },
    mosaic: { title: "Cómo se ve", cta: "Ver todas las fotos" },
    prep: {
      title: "Cómo venir preparado",
      lead: "De día te vas a quemar. De noche vas a pasar frío. Las dos cosas se resuelven antes.",
      night: {
        title: "La noche en la casa",
        items: [
          "Saco de dormir — hay cama, pero el propio abriga más",
          "Casaca de plumas",
          "Medias de lana",
          "Termo",
        ],
        note: "De noche la casa está a unos cuatro o seis grados. Hay frazadas — se duerme con dos o tres. Hay bolsas de agua caliente: la llenas y te la llevas a la cama. El tipi tiene leña y una estufa a gas. Se puede vivir, y se vive.",
      },
      day: {
        title: "El día en el camino",
        items: [
          "Sombrero",
          "Bloqueador solar",
          "Mochila — para una botella de agua, el termo y algo de comida",
          "Bastones — hay aquí, pero los propios acomodan mejor",
          "Impermeable — imprescindible en época de lluvia",
        ],
      },
      have: {
        title: "Esto ya está — no lo traigas",
        body: "Frazadas, vajilla, agua, leña, luz.",
      },
      water: {
        title: "Agua",
        body: "Litro y medio por persona, contigo. En el camino hay manantiales: agua que sale de la piedra, y la gente de aquí la toma toda la vida. Llena tu botella si quieres — pero hiérvela en el fogón por la noche: ladera arriba pastan ovejas, y la altura no le perdona nada al estómago.",
      },
      hands: {
        title: "No llegues con las manos vacías",
        body: "Compra algo abajo, en el pueblo. Fruta, pan, hoja de coca. En el camino vas a encontrarte con pastores, abuelos, niños. Aquí la gente no pasa de largo.",
        note: "No es un regalo. Es la forma de saludar.",
      },
      pets: { title: "Mascotas", body: "Perros y gatos, bienvenidos." },
      family: {
        title: "Niños",
        body: "Aquí es alto y es duro. Aquí viven niños de la comunidad, y suben niños del valle. Traer al tuyo lo deciden los padres: nosotros no damos recomendaciones. La caminata la ajustamos al niño; la altura no se ajusta a nadie.",
      },
    },
    reviews: {
      title: "Quiénes estuvieron",
      items: [
        {
          text: "Fuimos por dos días y volvimos siendo otros. Nuestra hija todavía pregunta cuándo volvemos con las alpacas.",
          author: "Marina, Moscú",
        },
        {
          text: "La primera noche no pude dormir por el silencio. La segunda me di cuenta de que llevaba un día sin mirar el celular.",
          author: "Dmitry, San Petersburgo",
        },
        {
          text: "El anfitrión no arma un programa. Simplemente vive ahí, y uno vive al lado. Resultó que era justo eso.",
          author: "Anya y Pavel, Kyiv",
        },
      ],
    },
    contact: {
      title: "Vengan",
      lead: "No hay formulario de reserva. Hay una persona a la que puedes escribir.",
      cta: "Escribir por WhatsApp",
      reply: "Normalmente respondo dentro de la hora — pero cuando estoy arriba la señal va y viene: la respuesta puede llegarte esa noche o a la mañana siguiente.",
      languages: "Escríbeme en español, inglés o ruso.",
      wa: "¡Hola! Quisiera saber más sobre Kinsacocha.",
      emailLabel: "Correo",
    },
    footer: {
      nav: "Navegación",
      rights: "Todos los derechos reservados",
      instagram: "Instagram",
      tagline: "La casa es privada. Todo lo que la rodea es de la comunidad.",
      lakesTitle: "Tres lagunas",
    },
    gallery: {
      title: "Fotografías",
      lead: "Todo lo que se tomó aquí arriba.",
      all: "Todas",
      noGeo: "Las ubicaciones no están indicadas a propósito.",
      tags: {
        lakes: "Lagunas",
        mountains: "Cerros",
        house: "La casa",
        tipi: "Tipi",
        alpacas: "Alpacas",
        sunset: "Amanecer y atardecer",
        night: "Noche y estrellas",
        trails: "Caminos",
        life: "Gente y vida diaria",
        food: "Comida y té",
        plants: "Plantas",
        crafts: "Artesanía",
      },
      byMonth: "Cuándo se tomó",
      allMonths: "Cualquier mes",
      months: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      close: "Cerrar",
      prev: "Anterior",
      next: "Siguiente",
    },
    blog: {
      title: "Diario",
      lead: "Sobre el lugar, la altura y lo que crece aquí arriba.",
      readMore: "Leer",
      related: "Más sobre esto",
      back: "Todas las entradas",
      draft: "Borrador",
      cta: "Consultar por una visita",
      wa: "¡Hola! Leí un artículo en su web y quisiera saber más.",
    },
  },
};

export function getDict(locale: Locale): Dict {
  return dict[locale];
}
