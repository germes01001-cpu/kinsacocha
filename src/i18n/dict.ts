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
  formats: {
    title: string;
    lead: string;
    kids: string;
    priceFrom: string;
    perPersonNight: string;
    perPersonDay: string;
    perNight: string;
    individual: string;
    cta: string;
    items: Record<
      "access" | "guided" | "beds" | "exclusive",
      { name: string; body: string; host: string; hint: string; wa: string }
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
    night: { title: string; items: string[] };
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
    wa: string;
    emailLabel: string;
  };
  footer: { nav: string; rights: string; instagram: string };
  gallery: {
    title: string;
    lead: string;
    all: string;
    noGeo: string;
    tags: Record<string, string>;
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
      title: "Дом на высоте 4200",
      subtitle: "Три озера, живой огонь и небо, которого не видно из города.",
      watchFilm: "Смотреть фильм",
      scroll: "Листайте",
    },
    story: {
      title: "Просто дом",
      lead: "Это не отель, не ретрит-центр и не глэмпинг. Это дом.",
      body: [
        "С печью, горячей водой и кухней. На высоте 4200 метров это уже роскошь.",
        "Вокруг — горные озёра. Рядом живут люди, которые разводят альпак, сушат картошку морозом и почти никогда не спускаются в город. Это их мир. Мы — его часть и готовы разделить его с теми, кому нужно вырваться из шума.",
        "Здесь холодно, и здесь нет интернета. Именно поэтому сюда привозят детей: чтобы один раз в жизни увидеть настоящее звёздное небо и не смотреть в телефон.",
      ],
      name: "Kinsa qucha на кечуа — «три озера». Место названо счётом.",
      ownership: "Дом — частный. Всё вокруг — общее.",
    },
    notFound: {
      title: "Чего вы здесь не найдёте",
      lead: "Все пишут о себе всё. Мы — нет.",
      items: [
        "Координат",
        "Маршрутов и треков",
        "Мест, где видели пуму",
      ],
      footer:
        "Не из вредности. Эти тропы держатся на том, что о них не пишут.",
    },
    formats: {
      title: "Как сюда приезжают",
      lead: "Четыре формата. С детьми комфортно в любом.",
      kids: "С детьми — да",
      priceFrom: "от",
      perPersonNight: "с человека за ночь",
      perPersonDay: "с человека за день",
      perNight: "за ночь",
      individual: "Обсуждается индивидуально",
      cta: "Написать в WhatsApp",
      items: {
        access: {
          name: "Доступ к пространству",
          body: "Приехал, кинул вещи, гуляй сам. Базовый доступ к дому и территории.",
          host: "Хозяин не нужен",
          hint: "Самый доступный",
          wa: "Здравствуйте! Интересует доступ к пространству в Kinsacocha.",
        },
        guided: {
          name: "С проводником",
          body: "Хозяин лично идёт с вами. Тропы, которых нет на картах.",
          host: "Хозяин рядом",
          hint: "Средний",
          wa: "Здравствуйте! Интересует визит с проводником в Kinsacocha.",
        },
        beds: {
          name: "Аренда мест",
          body: "Группа арендует спальные места. Хозяин может быть в доме.",
          host: "Хозяин может быть",
          hint: "Выше среднего",
          wa: "Здравствуйте! Интересует аренда спальных мест в Kinsacocha.",
        },
        exclusive: {
          name: "Эксклюзивная аренда",
          body: "Весь дом ваш. Хозяин уезжает. Абсолютная приватность.",
          host: "Хозяин уезжает",
          hint: "Индивидуально",
          wa: "Здравствуйте! Интересует эксклюзивная аренда дома Kinsacocha.",
        },
      },
    },
    food: {
      title: "Еда и напитки",
      lead: "Ресторана нет. Продукты привозят с собой — кроме одного.",
      items: [
        {
          name: "Труча",
          body: "Форель. Её разводит община прямо в лагуне — единственное, что здесь не нужно везти снизу. Заказывается заранее.",
        },
        {
          name: "Чуньо и морайя",
          body: "Картошка, высушенная морозом и солнцем. Чёрная и белая. Технологии пять тысяч лет, и она всё ещё работает.",
        },
        {
          name: "Чича",
          body: "Ферментированный напиток, который здесь пьют горячим.",
        },
        {
          name: "Чай",
          body: "Китайский, цейлонский или перуанский — на выбор. На этой высоте чай перестаёт быть напитком и становится событием.",
        },
      ],
    },
    amenities: {
      title: "Что есть в доме",
      items: [
        {
          name: "Живой огонь",
          body: "Дровяная печь. Единственный источник тепла и главный повод не расходиться по комнатам.",
        },
        {
          name: "Горячая вода",
          body: "На 4200 метрах это редкость, а не удобство.",
        },
        {
          name: "Трансфер",
          body: "Такси из Писака до двери. Вызывается под гостей, оплачивается отдельно.",
        },
        {
          name: "Типи",
          body: "Ночёвка под звёздами для тех, кому дома мало.",
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
              name: "Анский гусь",
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
              body: "Форель. Её разводит община. Ловить нельзя — можно заказать к ужину.",
            },
          ],
        },
        {
          title: "Если повезёт",
          items: [
            {
              name: "Кондор",
              body: "Над горами и над тропой. Не каждый день, но бывает.",
            },
            {
              name: "Тарука",
              body: "Андский олень. Увидите раньше, чем он вас, — редко.",
            },
            { name: "Андская лиса", body: "Чаще след, чем сама лиса." },
            { name: "Скунс", body: "Лучше издалека." },
          ],
        },
      ],
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
          body: "Растёт выше всех деревьев на планете, кора слоится как старая бумага. У дома её нет — она по дороге, как награда за то, что пошёл.",
        },
        {
          name: "Ичу",
          body: "Трава пуны. Из неё здесь крыши, верёвки, подстилка. Жёсткая настолько, что режет руку.",
        },
      ],
      note: "Мы не ботанический справочник. Названия уточняем — и не пишем наугад.",
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
      park: "Рядом — Parque de la Papa.",
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
      water: {
        title: "Вода из скалы",
        body: "Воду на весь день брать не нужно. В горах есть источники: чистая вода течёт прямо из камня, и её можно пить.",
      },
      hands: {
        title: "Не с пустыми руками",
        body: "Купите что-нибудь внизу, в городе. Фрукты, хлеб, листья коки. На тропе вы встретите пастухов, стариков, детей — здесь не проходят мимо друг друга.",
        note: "Это не подарок. Это то, как здесь здороваются.",
      },
      pets: { title: "Питомцы", body: "Собаки и кошки — можно." },
      family: {
        title: "Семья",
        body: "С детьми комфортно. Маршрут подбирается под возраст, а не наоборот.",
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
      reply: "Обычно отвечаю в течение часа.",
      wa: "Здравствуйте! Хочу узнать про Kinsacocha.",
      emailLabel: "Почта",
    },
    footer: {
      nav: "Навигация",
      rights: "Все права защищены",
      instagram: "Instagram",
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
      formats: "Ways to stay",
      routes: "Walking",
      life: "Wild",
      gallery: "Photos",
      contact: "Get in touch",
      menu: "Menu",
      close: "Close",
      blog: "Journal",
    },
    hero: {
      title: "A house at 4,200 metres",
      subtitle: "Three lakes, a wood fire, and a sky the city hides from you.",
      watchFilm: "Watch the film",
      scroll: "Scroll",
    },
    story: {
      title: "Just a house",
      lead: "Not a hotel. Not a retreat centre. Not glamping. A house.",
      body: [
        "With a wood stove, hot water and a kitchen. At 4,200 metres that already counts as luxury.",
        "Mountain lakes all around. The neighbours raise alpacas, freeze-dry potatoes the way their grandparents did, and rarely go down to town. This is their world. We are part of it, and we share it with people who need out of the noise.",
        "It is cold here and there is no internet. That is precisely why people bring their children: to see a real night sky once in their life, and not look at a phone while it happens.",
      ],
      name: "Kinsa qucha is Quechua for “three lakes”. The place is named after a count.",
      ownership: "The house is private. Everything around it belongs to the community.",
    },
    notFound: {
      title: "What you won't find here",
      lead: "Everyone publishes everything about themselves. We don't.",
      items: ["Coordinates", "Routes or GPS tracks", "Where the puma was seen"],
      footer:
        "Not out of stubbornness. These trails survive because nobody writes about them.",
    },
    formats: {
      title: "Ways to come",
      lead: "Four of them. All of them work with children.",
      kids: "Good with kids",
      priceFrom: "from",
      perPersonNight: "per person, per night",
      perPersonDay: "per person, per day",
      perNight: "per night",
      individual: "Priced case by case",
      cta: "Message on WhatsApp",
      items: {
        access: {
          name: "Access to the place",
          body: "Arrive, drop your bags, wander on your own. The house and the land, nothing scheduled.",
          host: "No host needed",
          hint: "Most affordable",
          wa: "Hello! I'd like to ask about staying at Kinsacocha.",
        },
        guided: {
          name: "With a guide",
          body: "The owner walks with you. Trails that are on no map anywhere.",
          host: "Host with you",
          hint: "Mid range",
          wa: "Hello! I'm interested in a guided walk at Kinsacocha.",
        },
        beds: {
          name: "Beds for a group",
          body: "Your group takes the beds. The host may be in the house.",
          host: "Host may be around",
          hint: "Above mid",
          wa: "Hello! I'd like to ask about booking beds at Kinsacocha.",
        },
        exclusive: {
          name: "The whole house",
          body: "All of it is yours. The host leaves. Complete privacy.",
          host: "Host leaves",
          hint: "Case by case",
          wa: "Hello! I'd like to ask about renting the whole house at Kinsacocha.",
        },
      },
    },
    food: {
      title: "Food and drink",
      lead: "There is no restaurant. You bring your food — except for one thing.",
      items: [
        {
          name: "Trucha",
          body: "Trout, farmed by the community in the lake itself. The one thing you don't have to carry up. Order ahead.",
        },
        {
          name: "Chuño and moraya",
          body: "Potatoes freeze-dried by frost and sun, black and white. Five thousand years old as a technique, and still the best one up here.",
        },
        {
          name: "Chicha",
          body: "The fermented drink of the Andes. Here it is served hot.",
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
          name: "Real fire",
          body: "A wood stove. The only heat in the building, and the reason nobody goes off to their own room.",
        },
        {
          name: "Hot water",
          body: "At 4,200 metres this is rare, not standard.",
        },
        {
          name: "Transfer",
          body: "A taxi from Pisac to the door, arranged for guests. Paid separately.",
        },
        {
          name: "Tipi",
          body: "Sleeping under the stars, for anyone who finds a roof excessive.",
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
              body: "Farmed by the community. No fishing — but you can order it for dinner.",
            },
          ],
        },
        {
          title: "If you're lucky",
          items: [
            {
              name: "Condor",
              body: "Over the ridges and over the trail. Not every day, but it happens.",
            },
            {
              name: "Taruca",
              body: "The Andean deer. You'll see it before it sees you — rarely.",
            },
            { name: "Andean fox", body: "More often the tracks than the fox." },
            { name: "Skunk", body: "Best from a distance." },
          ],
        },
      ],
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
          body: "Grows higher than any tree on earth, bark peeling like old paper. Not by the house — it waits along the way, for whoever walked.",
        },
        {
          name: "Ichu",
          body: "The grass of the puna. Roofs, rope, bedding. Stiff enough to cut your hand.",
        },
      ],
      note: "We are not a field guide. Names are being confirmed — we don't guess in public.",
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
      park: "Parque de la Papa is nearby.",
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
        title: "Water from the rock",
        body: "You don't need to carry a day's water. There are springs in these mountains: clean water straight out of the stone, and you can drink it.",
      },
      hands: {
        title: "Don't arrive empty-handed",
        body: "Buy something down in town. Fruit, bread, coca leaves — coca is legal, traditional and sold in every market in Peru. On the trail you will meet shepherds, elders, children. People here do not walk past one another.",
        note: "It isn't a gift. It's how people say hello here.",
      },
      pets: { title: "Pets", body: "Dogs and cats are welcome." },
      family: {
        title: "Family",
        body: "Children do well here. The walk is chosen to fit the child, not the other way round.",
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
      reply: "I usually reply within the hour.",
      wa: "Hello! I'd like to know more about Kinsacocha.",
      emailLabel: "Email",
    },
    footer: {
      nav: "Navigation",
      rights: "All rights reserved",
      instagram: "Instagram",
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
      title: "Una casa a 4200 metros",
      subtitle: "Tres lagunas, un fogón y un cielo que en la ciudad no existe.",
      watchFilm: "Ver la película",
      scroll: "Desliza",
    },
    story: {
      title: "Solo una casa",
      lead: "No es un hotel, ni un centro de retiro, ni glamping. Es una casa.",
      body: [
        "Con fogón, agua caliente y cocina. A 4200 metros eso ya es lujo.",
        "Alrededor, las lagunas. Al lado viven personas que crían alpacas, hacen chuño y casi nunca bajan al pueblo. Este es su mundo. Nosotros somos parte de él y lo compartimos con quien necesita salir del ruido.",
        "Hace frío y no hay internet. Justamente por eso traen a los niños: para ver una vez en la vida un cielo estrellado de verdad, y no mirar el celular mientras pasa.",
      ],
      name: "Kinsa qucha en quechua es «tres lagunas». El lugar lleva el nombre de una cuenta.",
      ownership: "La casa es privada. Todo lo que la rodea es de la comunidad.",
    },
    notFound: {
      title: "Lo que aquí no vas a encontrar",
      lead: "Todos publican todo sobre sí mismos. Nosotros no.",
      items: ["Coordenadas", "Rutas ni tracks", "Dónde se vio al puma"],
      footer:
        "No por terquedad. Estos caminos siguen existiendo porque nadie escribe sobre ellos.",
    },
    formats: {
      title: "Cómo se viene",
      lead: "Cuatro formas. Todas funcionan con niños.",
      kids: "Con niños, sí",
      priceFrom: "desde",
      perPersonNight: "por persona, por noche",
      perPersonDay: "por persona, por día",
      perNight: "por noche",
      individual: "Se conversa caso por caso",
      cta: "Escribir por WhatsApp",
      items: {
        access: {
          name: "Acceso al lugar",
          body: "Llegas, dejas las cosas y caminas por tu cuenta. La casa y el terreno, sin programa.",
          host: "Sin anfitrión",
          hint: "El más accesible",
          wa: "¡Hola! Quisiera consultar por una estadía en Kinsacocha.",
        },
        guided: {
          name: "Con guía",
          body: "El dueño camina contigo. Caminos que no están en ningún mapa.",
          host: "Anfitrión contigo",
          hint: "Intermedio",
          wa: "¡Hola! Me interesa una caminata con guía en Kinsacocha.",
        },
        beds: {
          name: "Camas para un grupo",
          body: "El grupo toma las camas. El anfitrión puede estar en la casa.",
          host: "Anfitrión quizá",
          hint: "Sobre el promedio",
          wa: "¡Hola! Quisiera consultar por camas en Kinsacocha.",
        },
        exclusive: {
          name: "La casa entera",
          body: "Toda la casa es tuya. El anfitrión se va. Privacidad completa.",
          host: "El anfitrión se va",
          hint: "Caso por caso",
          wa: "¡Hola! Quisiera consultar por alquilar toda la casa de Kinsacocha.",
        },
      },
    },
    food: {
      title: "Comida y bebida",
      lead: "No hay restaurante. La comida se trae — salvo una cosa.",
      items: [
        {
          name: "Trucha",
          body: "La cría la comunidad en la laguna misma. Lo único que no hay que subir. Se encarga con anticipación.",
        },
        {
          name: "Chuño y moraya",
          body: "Papa deshidratada por la helada y el sol, negra y blanca. Cinco mil años de técnica, y sigue siendo la mejor aquí arriba.",
        },
        {
          name: "Chicha",
          body: "La bebida fermentada de los Andes. Aquí se toma caliente.",
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
          name: "Fuego de verdad",
          body: "Fogón a leña. El único calor de la casa, y la razón por la que nadie se va a su cuarto.",
        },
        {
          name: "Agua caliente",
          body: "A 4200 metros esto es raro, no es estándar.",
        },
        {
          name: "Traslado",
          body: "Taxi desde Písac hasta la puerta, se coordina para los huéspedes. Se paga aparte.",
        },
        {
          name: "Tipi",
          body: "Dormir bajo las estrellas, para quien encuentra excesivo un techo.",
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
              body: "La cría la comunidad. No se pesca — pero se puede encargar para la cena.",
            },
          ],
        },
        {
          title: "Si hay suerte",
          items: [
            {
              name: "Cóndor",
              body: "Sobre los cerros y sobre el camino. No todos los días, pero pasa.",
            },
            {
              name: "Taruca",
              body: "El venado andino. Lo vas a ver antes de que él te vea — pocas veces.",
            },
            { name: "Zorro andino", body: "Más seguido la huella que el zorro." },
            { name: "Zorrino", body: "Mejor de lejos." },
          ],
        },
      ],
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
          body: "Crece más alto que cualquier árbol del planeta, con la corteza en láminas como papel viejo. No está junto a la casa: espera en el camino, para quien caminó.",
        },
        {
          name: "Ichu",
          body: "El pasto de la puna. Techos, sogas, cama. Tan duro que corta la mano.",
        },
      ],
      note: "No somos una guía botánica. Los nombres se están confirmando — no adivinamos en público.",
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
      park: "Cerca está el Parque de la Papa.",
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
        title: "Agua de la roca",
        body: "No hace falta cargar agua para todo el día. En estos cerros hay manantiales: agua limpia que sale de la piedra, y se puede tomar.",
      },
      hands: {
        title: "No llegues con las manos vacías",
        body: "Compra algo abajo, en el pueblo. Fruta, pan, hoja de coca. En el camino vas a encontrarte con pastores, abuelos, niños. Aquí la gente no pasa de largo.",
        note: "No es un regalo. Es la forma de saludar.",
      },
      pets: { title: "Mascotas", body: "Perros y gatos, bienvenidos." },
      family: {
        title: "Familia",
        body: "Con niños se está bien. La caminata se elige según el niño, y no al revés.",
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
      reply: "Normalmente respondo dentro de la hora.",
      wa: "¡Hola! Quisiera saber más sobre Kinsacocha.",
      emailLabel: "Correo",
    },
    footer: {
      nav: "Navegación",
      rights: "Todos los derechos reservados",
      instagram: "Instagram",
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
