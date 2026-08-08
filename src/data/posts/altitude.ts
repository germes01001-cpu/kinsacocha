import { POSTS } from "@/config/photos";
import type { Post } from "./types";

/**
 * ⚠️ Медицинская фактура — на проверку заказчику перед публикацией.
 * Симптомы, сроки акклиматизации и рекомендации написаны по общим источникам.
 * Отвечать за советы на 4200 должен человек, который там живёт.
 */
export const altitude: Post = {
  slug: "gornaya-bolezn",
  cover: POSTS.altitude,
  date: "2026-08-08",
  related: ["tri-ozera", "chuno"],
  content: {
    ru: {
      title: "Горная болезнь на высоте 4200: как подготовиться",
      description:
        "Что происходит с телом на четырёх тысячах метров, как выглядят первые симптомы, сколько нужно на акклиматизацию и когда нужно спускаться.",
      body: [
        {
          t: "p",
          text: "На 4200 метрах кислорода в воздухе примерно на сорок процентов меньше, чем на уровне моря. Воздух тот же самый по составу — его просто меньше в каждом вдохе. Тело замечает это в первые часы и начинает перестраиваться: дышать чаще, гнать кровь быстрее, менять её состав. Эта перестройка и есть акклиматизация, и она занимает не минуты, а дни.",
        },
        { t: "h2", text: "Как это ощущается" },
        {
          t: "p",
          text: "Чаще всего — головная боль, которая появляется через несколько часов после подъёма. Плюс что-нибудь из этого списка:",
        },
        {
          t: "list",
          items: [
            "Одышка при обычной ходьбе",
            "Тяжёлый или прерывистый сон в первую ночь",
            "Пропавший аппетит",
            "Тошнота",
            "Странная усталость, несоразмерная нагрузке",
            "Ощущение, что вы простыли, хотя не простыли",
          ],
        },
        {
          t: "p",
          text: "Это неприятно, но само по себе не опасно и обычно проходит за сутки-двое. Опасно другое — когда состояние не улучшается, а ухудшается.",
        },
        { t: "h2", text: "Когда нужно вниз, и вниз немедленно" },
        {
          t: "p",
          text: "Есть симптомы, при которых не ждут утра и не пьют таблетку «на всякий случай». Спускаются.",
        },
        {
          t: "list",
          items: [
            "Спутанность сознания, странное поведение, речь невпопад",
            "Потеря равновесия, шаткая походка",
            "Одышка в состоянии полного покоя",
            "Кашель с пеной или розовой мокротой",
            "Сильная головная боль, которую не снимает обезболивающее",
            "Рвота, которая не прекращается",
          ],
        },
        {
          t: "p",
          text: "Высота — единственное лекарство, которое работает наверняка: сброс высоты снимает симптомы. Всё остальное — вспомогательное.",
        },
        { t: "h2", text: "Акклиматизация: сколько времени нужно" },
        {
          t: "p",
          text: "Куско стоит примерно на 3400 метрах — уже достаточно высоко, чтобы тело начало приспосабливаться. Два-три дня в Куско или Священной долине перед подъёмом на 4200 меняют опыт полностью: разница между «мне тяжело и я ничего не почувствовал» и «я запомнил этот день».",
        },
        {
          t: "p",
          text: "Если вы только что прилетели из города на уровне моря и в тот же день поехали наверх — вероятность провести первую ночь с головной болью очень высокая.",
        },
        { t: "h2", text: "Что помогает" },
        {
          t: "list",
          items: [
            "Вода. Пить больше обычного — на высоте организм теряет жидкость быстрее, а обезвоживание похоже на горную болезнь и усиливает её",
            "Медленный темп. Наверху спешка не даёт выигрыша, она даёт головную боль",
            "Лёгкая еда. Тяжёлый ужин в первую ночь — плохая идея",
            "Никакого алкоголя в первые сутки. Он бьёт по тому же механизму, что и высота",
            "Лист коки. В Перу легален, традиционен и продаётся на любом рынке. Местные жуют его или заваривают как чай — это часть повседневной жизни, а не экзотика для туристов",
            "Тепло. Замёрзший человек переносит высоту хуже",
          ],
        },
        { t: "h2", text: "Дети" },
        {
          t: "p",
          text: "Дети переносят высоту не хуже взрослых, но хуже её описывают: ребёнок редко скажет «у меня одышка», он скажет, что не хочет идти, или просто начнёт капризничать. Поэтому смотреть надо не на слова, а на поведение — и не уговаривать пройти ещё немного, если ребёнок сел.",
        },
        {
          t: "p",
          text: "Маршрут с детьми подбирается под ребёнка, а не наоборот. Три часа до ближнего озера и возвращение к обеду — нормальный полноценный день, а не урезанная версия чего-то большего.",
        },
        { t: "h2", text: "Про купание в озёрах" },
        {
          t: "p",
          text: "Купаться на такой высоте можно, и люди купаются. Но резкий холод — это нагрузка на сердце поверх той, которую уже даёт высота. Не в первый день после подъёма, не в одиночку и не после алкоголя.",
        },
        {
          t: "link",
          slug: "tri-ozera",
          text: "Про сами озёра — что это за вода и чем они отличаются",
        },
      ],
    },

    en: {
      title: "Altitude sickness at 4,200 m: how to prepare",
      description:
        "What happens to your body above four thousand metres, what the early symptoms look like, how long acclimatisation takes and when you must go down.",
      body: [
        {
          t: "p",
          text: "At 4,200 metres there is roughly forty per cent less oxygen in the air than at sea level. The air has the same composition — there is simply less of it in every breath. Your body notices within hours and starts rebuilding: breathing faster, moving blood harder, changing what the blood is made of. That rebuild is acclimatisation, and it takes days, not minutes.",
        },
        { t: "h2", text: "What it feels like" },
        {
          t: "p",
          text: "Usually a headache, arriving a few hours after you get up there. Plus some of the following:",
        },
        {
          t: "list",
          items: [
            "Breathlessness while simply walking",
            "Broken or heavy sleep on the first night",
            "No appetite",
            "Nausea",
            "Tiredness out of all proportion to the effort",
            "The sense that you are coming down with a cold when you are not",
          ],
        },
        {
          t: "p",
          text: "Unpleasant, but not in itself dangerous, and it usually passes in a day or two. What is dangerous is the opposite pattern: not improving, but getting worse.",
        },
        { t: "h2", text: "When to go down, and go down now" },
        {
          t: "p",
          text: "Some symptoms mean you do not wait for morning and do not take a pill and hope. You descend.",
        },
        {
          t: "list",
          items: [
            "Confusion, strange behaviour, speech that does not make sense",
            "Loss of balance, unsteady walking",
            "Breathlessness while completely at rest",
            "A cough producing froth or pink sputum",
            "A severe headache that painkillers do not touch",
            "Vomiting that will not stop",
          ],
        },
        {
          t: "p",
          text: "Altitude is the one treatment that reliably works: losing height relieves the symptoms. Everything else is support.",
        },
        { t: "h2", text: "Acclimatisation: how long you need" },
        {
          t: "p",
          text: "Cusco sits at roughly 3,400 metres — already high enough for your body to start adapting. Two or three days in Cusco or the Sacred Valley before going up to 4,200 changes the entire experience: the difference between “that was hard and I noticed nothing” and “I will remember that day”.",
        },
        {
          t: "p",
          text: "If you have just flown in from a city at sea level and gone straight up the same day, a first night with a headache is close to guaranteed.",
        },
        { t: "h2", text: "What helps" },
        {
          t: "list",
          items: [
            "Water. Drink more than usual — you lose fluid faster at altitude, and dehydration both mimics altitude sickness and makes it worse",
            "A slow pace. Up here hurrying buys you nothing except a headache",
            "Light food. A heavy dinner on the first night is a poor idea",
            "No alcohol for the first day. It hits the same machinery altitude does",
            "Coca leaf. Legal, traditional and sold in every market in Peru. People here chew it or brew it as tea — it is ordinary daily life, not a tourist novelty",
            "Warmth. A cold body handles altitude worse",
          ],
        },
        { t: "h2", text: "Children" },
        {
          t: "p",
          text: "Children handle altitude no worse than adults, but they describe it worse: a child rarely says “I am short of breath”, they say they do not want to walk, or simply become difficult. So watch behaviour rather than words — and if a child sits down, do not talk them into one more stretch.",
        },
        {
          t: "p",
          text: "The walk is chosen to fit the child, not the other way round. Three hours to the near lake and back for lunch is a complete day in its own right, not a cut-down version of something bigger.",
        },
        { t: "h2", text: "About swimming in the lakes" },
        {
          t: "p",
          text: "You can swim at this altitude, and people do. But sudden cold is a load on the heart on top of the load altitude is already applying. Not on your first day up, not alone, and not after alcohol.",
        },
        {
          t: "link",
          slug: "tri-ozera",
          text: "About the lakes themselves — what that water is and how they differ",
        },
      ],
    },
  },
};
