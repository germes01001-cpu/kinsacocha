import { POSTS } from "@/config/photos";
import type { Post } from "./types";

/**
 * Опорная статья всего блога.
 *
 * Люди не ищут «частный дом в Андах» — ищут лагуны. Заказчик: «место
 * раскручено именно лагунами». Спрос уже есть, в него надо войти.
 * Дальше статья показывает то, чего не делает ни один путеводитель:
 * озёра — это только вход.
 *
 * ⏳ Высота Кинса Кочи и то, в каком озере купаются, — уточняются.
 * См. OPEN_QUESTIONS.md. До ответа пишем без этих деталей.
 */
export const lakes: Post = {
  slug: "tri-ozera",
  cover: POSTS.lakes,
  date: "2026-08-08",
  related: ["gornaya-bolezn", "chuno"],
  content: {
    ru: {
      title: "Кинсакоча, Пумакоча, Асулкоча: три озера над облаками",
      description:
        "Что это за озёра, чем они отличаются друг от друга и почему сюда стоит ехать не только ради них. Без маршрута и без координат.",
      body: [
        {
          t: "p",
          text: "Kinsa qucha на кечуа — «три озера». Kinsa значит три, qucha значит озеро. Место названо счётом: здесь ровно столько озёр, сколько сказано в имени. Ни метафоры, ни легенды — просто арифметика, которой несколько сотен лет.",
        },
        {
          t: "p",
          text: "Здесь не будет маршрута. Будет описание того, что вы увидите.",
        },
        { t: "h2", text: "Почему едут именно за лагунами" },
        {
          t: "p",
          text: "Из всего, что есть вокруг Писака, в поиске живут именно эти три озера. Их фотографируют, их ищут, про них спрашивают в чатах Куско. И это честная слава: озёра на высоте за четыре тысячи метров действительно выглядят так, как не выглядит вода нигде внизу — плотный бирюзовый цвет, который не получается ни на одном фильтре.",
        },
        {
          t: "p",
          text: "Но местные, если спросить их прямо, назовут другие места. Не потому что озёра плохи, а потому что вокруг есть вещи, которые никто не раскручивал. Мы их не публикуем — об этом ниже.",
        },
        { t: "h2", text: "Пума Коча — 4325 метров" },
        {
          t: "p",
          text: "Самое высокое из трёх. Название переводится с кечуа как «озеро пумы». Пума для инков была не просто зверем: она означала силу и связь с землёй, один из трёх уровней мира. Назвать её именем воду на такой высоте — это не то же самое, что назвать озеро в честь красивой птицы.",
        },
        {
          t: "p",
          text: "Пуму здесь не видели. В регионе она есть, но следов не находят, и никто из местных не может сказать, что встречал её. Озеро носит её имя, а самой пумы в кадре не будет — и это, пожалуй, самое точное описание этого места.",
        },
        { t: "h2", text: "Асуль Коча — 4247 метров" },
        {
          t: "p",
          text: "Ниже Пума Кочи почти на восемьдесят метров. Асуль — «синее» по-испански, и название не преувеличивает: вода здесь уходит в насыщенную бирюзу, а в ясный день, когда небо стоит без единого облака, граница между водой и небом почти исчезает.",
        },
        {
          t: "p",
          text: "Цвет — не краска и не минерал в привычном смысле. Так работает высота: чистая холодная вода, мало органики, много света. Внизу такой воды не бывает просто потому, что внизу теплее.",
        },
        { t: "h2", text: "Кинса Коча — то, у которого стоит дом" },
        {
          t: "p",
          text: "Самое большое из трёх и самое близкое. Именно у него стоит дом, и именно оно дало имя всему месту. В нём же община разводит форель — тручу. Ловить её нельзя, а заказать к ужину можно: это единственная еда, которую здесь не нужно везти с собой снизу.",
        },
        {
          t: "p",
          text: "Порядок обхода не задан. Есть длинные варианты и короткие, и в каком порядке вы увидите озёра, зависит от того, сколько у вас времени, какая погода и кто с вами идёт. Проводник решает это утром, а не за неделю до вашего приезда.",
        },
        { t: "h2", text: "Купаться — можно. Но подумайте дважды" },
        {
          t: "p",
          text: "Да, здесь купаются. Вода холодная — не «бодрящая», а именно холодная, и это не преувеличение для красного словца.",
        },
        {
          t: "p",
          text: "Честная часть: вы находитесь выше четырёх тысяч двухсот метров. Кислорода примерно на сорок процентов меньше, чем на уровне моря. Резкий холод — это дополнительная нагрузка на сердце, а на такой высоте организм и без того работает в непривычном режиме. Поэтому: не в первый день после подъёма, не в одиночку, не после алкоголя и не «на слабо».",
        },
        {
          t: "link",
          slug: "gornaya-bolezn",
          text: "Что нужно знать про высоту 4200 до того, как подниматься",
        },
        { t: "h2", text: "Что здесь есть кроме озёр" },
        {
          t: "p",
          text: "Пики. Малые лагуны, у которых нет ни имени в интернете, ни фотографий. Тропы, о которых знает довольно мало людей.",
        },
        {
          t: "p",
          text: "Мы не будем про них писать. Не из вредности и не ради интриги: эти места существуют в нынешнем виде ровно потому, что о них не пишут. Как только появляется координата, появляется поток, а за потоком — мусор, вытоптанная трава и очередь на фотографию.",
        },
        {
          t: "quote",
          text: "Озёра — это то, за чем едут. Не то, ради чего остаются.",
        },
        { t: "h2", text: "Когда ехать" },
        {
          t: "p",
          text: "Сухой сезон — с апреля по октябрь-ноябрь. Ясно, солнечно, ночи морозные. Сезон дождей — с ноября по март: дожди меняют маршруты и форматы, но не отменяют поездку. Зелени больше, людей меньше.",
        },
        {
          t: "p",
          text: "Отдельно стоит октябрь-ноябрь. Это стык сезонов: сухой заканчивается, первые дожди уже близко, и в этот момент всё зацветает разом. Крошечные жёлтые цветы, каких не бывает внизу, и кактусы, которые здесь растут подушками и обрастают белым пухом от холода.",
        },
        { t: "h2", text: "Сколько добираться" },
        {
          t: "p",
          text: "Если вы уже в Куско или Писаке — это вопрос нескольких часов, а не дней. Ради одних этих озёр вряд ли стоит лететь через полмира, но если вы уже в Перу и у вас есть два свободных дня, вопрос «стоит ли» решается просто: стоит.",
        },
        {
          t: "p",
          text: "Трансфер из Писака до двери заказывается отдельно, через WhatsApp. Дорога — часть впечатления, и её лучше не проезжать в спешке.",
        },
      ],
    },

    en: {
      title: "Kinsacocha, Pumacocha, Azulcocha: three lakes above the clouds",
      description:
        "What these three high-altitude lakes actually are, how they differ, and why the lakes are the reason people come — but not the reason they stay.",
      body: [
        {
          t: "p",
          text: "Kinsa qucha is Quechua for “three lakes”. Kinsa is three, qucha is lake. The place is named after a count: there are exactly as many lakes here as the name says. No metaphor, no legend — just arithmetic that is a few centuries old.",
        },
        {
          t: "p",
          text: "There will be no route here. There will be a description of what you will see.",
        },
        { t: "h2", text: "Why people come for the lagoons" },
        {
          t: "p",
          text: "Of everything around Pisac, these three lakes are what actually lives in search results. People photograph them, look for them, ask about them in Cusco travel groups. The fame is earned: water above 4,000 metres genuinely does not look like water anywhere lower down — a dense turquoise that no filter reproduces honestly.",
        },
        {
          t: "p",
          text: "Ask anyone local, though, and they will name other places instead. Not because the lakes disappoint, but because nobody ever marketed the rest. We are not going to publish those — more on that below.",
        },
        { t: "h2", text: "Puma Cocha — 4,325 m" },
        {
          t: "p",
          text: "The highest of the three. The name means “lake of the puma” in Quechua. To the Inca the puma was not simply an animal: it stood for strength and for the connection to the earth, one of the three levels of the world. Naming water at this altitude after her is not the same as naming a lake after a pretty bird.",
        },
        {
          t: "p",
          text: "Nobody has seen the puma here. She exists in the region, but no tracks are found, and no one local will tell you they have met her. The lake carries her name and she is not in the photograph — which is, in fact, the most accurate description of this place we can offer.",
        },
        { t: "h2", text: "Azul Cocha — 4,247 m" },
        {
          t: "p",
          text: "Nearly eighty metres below Puma Cocha. Azul is Spanish for blue, and the name does not oversell it: the water goes deep turquoise, and on a cloudless day the border between water and sky nearly disappears.",
        },
        {
          t: "p",
          text: "The colour is altitude at work: cold clean water, very little organic matter, a great deal of light. You do not get water like this lower down for the simple reason that lower down is warmer.",
        },
        { t: "h2", text: "Kinsa Cocha — the one with the house" },
        {
          t: "p",
          text: "The largest of the three and the closest. The house stands by it, and it gave its name to the whole place. The community farms trout here — trucha. You cannot fish for it, but you can order it for dinner: it is the only food you do not have to carry up the mountain.",
        },
        {
          t: "p",
          text: "There is no fixed order to walk them in. There are longer versions and shorter ones, and which lake you see first depends on how much time you have, what the weather is doing and who came with you. The guide decides that in the morning, not a week before you arrive.",
        },
        { t: "h2", text: "You can swim. Think about it twice first" },
        {
          t: "p",
          text: "Yes, people swim here. The water is cold — not “refreshing”, cold — and that is not a figure of speech.",
        },
        {
          t: "p",
          text: "The honest part: you are above 4,200 metres. There is roughly forty per cent less oxygen than at sea level. Sudden cold puts extra load on the heart, and at this altitude your body is already working in an unfamiliar mode. So: not on your first day up, not alone, not after alcohol, and not as a dare.",
        },
        {
          t: "link",
          slug: "gornaya-bolezn",
          text: "What to know about 4,200 m before you go up",
        },
        { t: "h2", text: "What else is here" },
        {
          t: "p",
          text: "Peaks. Small lagoons with no name on the internet and no photographs. Trails that very few people know about.",
        },
        {
          t: "p",
          text: "We are not going to write about them. Not out of stubbornness and not for mystique: those places exist in their present state precisely because nobody writes about them. The moment a coordinate appears, a flow appears, and behind the flow come rubbish, flattened grass and a queue for the photograph.",
        },
        {
          t: "quote",
          text: "The lakes are what people come for. They are not what people stay for.",
        },
        { t: "h2", text: "When to come" },
        {
          t: "p",
          text: "Dry season runs April to October or November: clear, sunny, freezing at night. Wet season is November to March — the rain changes the walks and the formats, but it does not cancel the trip. More green, fewer people.",
        },
        {
          t: "p",
          text: "October and November deserve a separate mention. They are the seam between seasons: the dry ends, the first rain is close, and everything flowers at once. Tiny yellow flowers you never see lower down, and cacti that grow here as cushions and cover themselves in white wool against the cold.",
        },
        { t: "h2", text: "How far it is" },
        {
          t: "p",
          text: "If you are already in Cusco or Pisac this is a question of hours, not days. Flying across the world for these lakes alone probably makes no sense — but if you are already in Peru with two spare days, the question answers itself.",
        },
        {
          t: "p",
          text: "A transfer from Pisac to the door is arranged separately over WhatsApp. The road is part of the experience and is best not rushed.",
        },
      ],
    },

    es: {
      title: "Kinsacocha, Pumacocha, Azulcocha: tres lagunas sobre las nubes",
      description:
        "Qué son estas tres lagunas de altura, en qué se diferencian y por qué son el motivo por el que la gente viene — pero no por el que se queda.",
      body: [
        {
          t: "p",
          text: "Kinsa qucha en quechua es «tres lagunas». Kinsa es tres, qucha es laguna. El lugar lleva el nombre de una cuenta: hay exactamente tantas lagunas como dice el nombre. Sin metáfora ni leyenda, aritmética de hace varios siglos.",
        },
        {
          t: "p",
          text: "Aquí no va a haber una ruta. Va a haber una descripción de lo que vas a ver.",
        },
        { t: "h2", text: "Por qué la gente viene por las lagunas" },
        {
          t: "p",
          text: "De todo lo que hay alrededor de Písac, son estas tres lagunas las que viven en las búsquedas. Se fotografían, se buscan, se preguntan en los grupos de viajeros de Cusco. La fama es merecida: el agua por encima de los 4000 metros no se parece a ninguna de abajo — un turquesa denso que ningún filtro reproduce con honestidad.",
        },
        {
          t: "p",
          text: "Pero si le preguntas a un comunero, te va a nombrar otros lugares. No porque las lagunas decepcionen, sino porque el resto nunca se promocionó. Y eso no lo vamos a publicar — más abajo explicamos por qué.",
        },
        { t: "h2", text: "Puma Cocha — 4325 m" },
        {
          t: "p",
          text: "La más alta de las tres. El nombre significa «laguna del puma» en quechua. Para los incas el puma no era un animal cualquiera: representaba la fuerza y el vínculo con la tierra, uno de los tres niveles del mundo. Ponerle su nombre al agua a esta altura no es lo mismo que nombrar una laguna por un ave bonita.",
        },
        {
          t: "p",
          text: "Al puma aquí no lo han visto. Existe en la región, pero no se encuentran huellas y nadie de la comunidad dice haberse cruzado con él. La laguna lleva su nombre y él no está en la foto — que es, probablemente, la descripción más exacta de este lugar.",
        },
        { t: "h2", text: "Azul Cocha — 4247 m" },
        {
          t: "p",
          text: "Casi ochenta metros por debajo de Puma Cocha. El nombre no exagera: el agua se va a un turquesa intenso, y en un día despejado el límite entre el agua y el cielo casi desaparece.",
        },
        {
          t: "p",
          text: "El color es la altura trabajando: agua fría y limpia, muy poca materia orgánica, mucha luz. Abajo no hay agua así por la sencilla razón de que abajo hace más calor.",
        },
        { t: "h2", text: "Kinsa Cocha — la de la casa" },
        {
          t: "p",
          text: "La más grande de las tres y la más cercana. Junto a ella está la casa, y de ella viene el nombre de todo el lugar. Ahí mismo la comunidad cría trucha. Pescar no se puede, pero encargarla para la cena sí: es la única comida que no hay que subir desde abajo.",
        },
        {
          t: "p",
          text: "No hay un orden fijo para recorrerlas. Hay versiones largas y cortas, y cuál ves primero depende del tiempo que tengas, del clima y de quién vino contigo. Eso lo decide el guía en la mañana, no una semana antes de que llegues.",
        },
        { t: "h2", text: "Se puede nadar. Piénsalo dos veces" },
        {
          t: "p",
          text: "Sí, aquí la gente se baña. El agua es fría — no «refrescante», fría — y no es una forma de hablar.",
        },
        {
          t: "p",
          text: "La parte honesta: estás por encima de los 4200 metros. Hay alrededor de un cuarenta por ciento menos de oxígeno que a nivel del mar. El frío repentino es carga extra para el corazón, y a esta altura el cuerpo ya está trabajando en un modo que no conoce. Entonces: no el primer día, no solo, no después de tomar y no por reto.",
        },
        {
          t: "link",
          slug: "gornaya-bolezn",
          text: "Qué saber sobre los 4200 metros antes de subir",
        },
        { t: "h2", text: "Qué más hay aquí" },
        {
          t: "p",
          text: "Cerros. Lagunas chicas sin nombre en internet y sin fotos. Caminos que conoce muy poca gente.",
        },
        {
          t: "p",
          text: "No vamos a escribir sobre eso. No por terquedad ni por misterio: esos lugares siguen como están justamente porque nadie escribe sobre ellos. En el momento en que aparece una coordenada aparece un flujo, y detrás del flujo vienen la basura, el pasto pisoteado y la cola para la foto.",
        },
        {
          t: "quote",
          text: "Las lagunas son por lo que la gente viene. No son por lo que se queda.",
        },
        { t: "h2", text: "Cuándo venir" },
        {
          t: "p",
          text: "La seca va de abril a octubre o noviembre: despejado, con sol, noches de helada. La época de lluvia va de noviembre a marzo — la lluvia cambia las caminatas y los formatos, pero no cancela el viaje. Más verde, menos gente.",
        },
        {
          t: "p",
          text: "Octubre y noviembre merecen mención aparte. Son la costura entre estaciones: termina la seca, la primera lluvia ya viene, y todo florece de golpe. Flores amarillas diminutas que abajo no existen, y cactus que aquí crecen en cojines y se cubren de pelusa blanca contra el frío.",
        },
        { t: "h2", text: "Qué tan lejos queda" },
        {
          t: "p",
          text: "Si ya estás en Cusco o en Písac, es cuestión de horas, no de días. Cruzar medio mundo solo por estas lagunas probablemente no tenga sentido — pero si ya estás en Perú y tienes dos días libres, la pregunta se responde sola.",
        },
        {
          t: "p",
          text: "El traslado desde Písac hasta la puerta se coordina aparte por WhatsApp. El camino es parte de la experiencia y conviene no apurarlo.",
        },
      ],
    },
  },
};
