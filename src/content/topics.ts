// Content of the topic (SEO landing) pages in SK / RU / EN.
// Rules: no promises of results, no unverifiable numbers, no "tests are normal /
// doctors find nothing" framing. Each page: what it is, what I assess, red flags, FAQ.
import type { TopicId, TopicLang } from './slugs';

export interface TopicSection {
  h: string;
  p?: string[];
  list?: string[];
}

export interface TopicContent {
  short: string; // label for links
  title: string; // <title>, max ~60 chars
  description: string; // meta description, max ~160 chars
  h1: string;
  lead: string;
  condition?: string; // schema.org MedicalCondition name
  sections: TopicSection[];
  redFlagsTitle: string;
  redFlags: string[];
  faq: { q: string; a: string }[];
  related: TopicId[];
}

export const LAST_REVIEWED = '2026-11-08';

/** Clinical guidelines behind each page (verified links). */
export const TOPIC_SOURCES: Record<TopicId, { title: string; url: string }[]> = {
  'back-pain': [
    { title: 'WHO (2023): Guideline for non-surgical management of chronic primary low back pain in adults', url: 'https://www.who.int/publications/i/item/9789240081789' },
    { title: 'NICE NG59: Low back pain and sciatica in over 16s', url: 'https://www.nice.org.uk/guidance/ng59' },
    { title: 'NICE NG193: Chronic pain in over 16s — assessment and management', url: 'https://www.nice.org.uk/guidance/ng193' },
  ],
  fatigue: [
    { title: 'NICE NG206: ME/CFS — diagnosis and management', url: 'https://www.nice.org.uk/guidance/ng206' },
    { title: 'NICE NG188: Managing the long-term effects of COVID-19', url: 'https://www.nice.org.uk/guidance/ng188' },
  ],
  'second-opinion': [
    { title: 'Directive 2011/24/EU on patients’ rights in cross-border healthcare', url: 'https://eur-lex.europa.eu/eli/dir/2011/24/oj' },
  ],
  diagnostics: [
    { title: 'WHO: International Classification of Functioning, Disability and Health (ICF)', url: 'https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health' },
    { title: 'NICE NG193: Chronic pain in over 16s — assessment and management', url: 'https://www.nice.org.uk/guidance/ng193' },
  ],
};

export const TOPIC_UI: Record<
  TopicLang,
  {
    home: string;
    author: string;
    authorName: string;
    authorBio: string;
    reviewed: string;
    reviewedDate: string;
    ctaTitle: string;
    ctaText: string;
    ctaForm: string;
    ctaWa: string;
    faq: string;
    related: string;
    more: string;
    method: string;
    sources: string;
    nextReview: string;
  }
> = {
  sk: {
    home: 'Domov',
    author: 'Autor a odborná revízia',
    authorName: 'Dr. Erkinbek Džamanbajev, PhD, MBA',
    authorBio:
      'Lekár s 30+ rokmi klinickej praxe (Kirgizsko, Moskva, Petrohrad, Španielsko, Soul, Quito, Slovensko). Lekársku špecializáciu získal v Španielsku. Autor metódy 6D navigácie (Medicine of Coherence) a viac ako 20 kníh. Konzultuje po slovensky, rusky a anglicky.',
    reviewed: 'Posledná revízia',
    reviewedDate: '8. 11. 2026',
    ctaTitle: 'Prvý krok: bezplatný 6D dotazník',
    ctaText:
      'Vyplníte ho online. Do 48 hodín ho osobne preštudujem a odpíšem, či má zmysel pokračovať 6D klinickým zhodnotením (60 min, 100 € vopred prevodom).',
    ctaForm: 'Vyplniť 6D dotazník',
    ctaWa: 'Opýtať sa pred objednaním',
    faq: 'Časté otázky',
    related: 'Súvisiace témy',
    more: 'Viac o téme',
    method: 'Ako prebieha 6D klinické zhodnotenie',
    sources: 'Zdroje a odborné odporúčania',
    nextReview: 'Ďalšia revízia: 11/2027',
  },
  ru: {
    home: 'Главная',
    author: 'Автор и медицинская редакция',
    authorName: 'Др. Эркинбек Джаманбаев, PhD, MBA',
    authorBio:
      'Врач с 30+ годами клинической практики (Кыргызстан, Москва, Санкт-Петербург, Испания, Сеул, Кито, Словакия). Врачебную специализацию получил в Испании. Автор метода 6D-навигации (Medicine of Coherence) и более 20 книг. Консультирует на русском, словацком и английском.',
    reviewed: 'Последняя редакция',
    reviewedDate: '08.11.2026',
    ctaTitle: 'Первый шаг: бесплатная 6D-анкета',
    ctaText:
      'Заполняется онлайн. В течение 48 часов я лично изучу её и отвечу, есть ли смысл переходить к 6D-оценке (60 мин, 100 € заранее переводом).',
    ctaForm: 'Заполнить 6D-анкету',
    ctaWa: 'Задать вопрос до записи',
    faq: 'Частые вопросы',
    related: 'Связанные темы',
    more: 'Подробнее',
    method: 'Как проходит 6D-оценка',
    sources: 'Источники и клинические рекомендации',
    nextReview: 'Следующая редакция: 11/2027',
  },
  en: {
    home: 'Home',
    author: 'Author and medical review',
    authorName: 'Dr. Erkinbek Dzhamanbaev, PhD, MBA',
    authorBio:
      'Physician with 30+ years of clinical practice (Kyrgyzstan, Moscow, St. Petersburg, Spain, Seoul, Quito, Slovakia). Obtained his medical specialization in Spain. Author of the 6D Navigation method (Medicine of Coherence) and more than 20 books. Consults in English, Russian and Slovak.',
    reviewed: 'Last reviewed',
    reviewedDate: '8 Nov 2026',
    ctaTitle: 'First step: the free 6D questionnaire',
    ctaText:
      'You fill it in online. Within 48 hours I review it personally and reply whether it makes sense to continue with the 6D clinical assessment (60 min, €100 paid in advance by bank transfer).',
    ctaForm: 'Fill in the 6D questionnaire',
    ctaWa: 'Ask a question first',
    faq: 'Frequently asked questions',
    related: 'Related topics',
    more: 'Read more',
    method: 'How the 6D clinical assessment works',
    sources: 'Sources and clinical guidelines',
    nextReview: 'Next review: 11/2027',
  },
};

export const TOPICS: Record<TopicId, Record<TopicLang, TopicContent>> = {
  // ───────────────────────────── BACK PAIN ─────────────────────────────
  'back-pain': {
    sk: {
      short: 'Bolesť chrbta a krku',
      title: 'Chronická bolesť chrbta a krku | Dr. Džamanbajev',
      description:
        'Bolesť chrbta, ktorá trvá mesiace? Čo ju udržiava, kedy nečakať a ako prebieha komplexné lekárske zhodnotenie. Piešťany a online v EÚ.',
      h1: 'Chronická bolesť chrbta a krku',
      lead:
        'Bolesť chrbta, ktorá trvá dlhšie ako tri mesiace, je chronická. Zriedka ide o jednu poškodenú štruktúru. Častejšie o súhru viacerých faktorov — a práve tie hľadám.',
      condition: 'Chronic low back pain',
      sections: [
        {
          h: 'Prečo bolesť pretrváva',
          p: [
            'Pri väčšine chronických bolestí chrbta zobrazovacie vyšetrenia neukážu jednu príčinu, ktorá by všetko vysvetlila. Protrúzia platničky či degeneratívne zmeny sú časté aj u ľudí, ktorých chrbát nebolí. Samy osebe nevysvetľujú, prečo bolesť trvá.',
            'Bolesť udržiava kombinácia: pohybový vzorec a ochranné napätie svalov, spánok, dlhodobý stres, kondícia, pracovná záťaž, niekedy metabolické alebo zápalové ochorenie. Každý faktor osobitne vyzerá nevinne. Spolu tvoria uzavretý kruh.',
          ],
        },
        {
          h: 'Čo posudzujem',
          list: [
            'Doterajšie vyšetrenia, snímky a lekárske správy — čo z nich vyplýva a čo nie',
            'Pohybový vzorec, dýchanie, držanie tela',
            'Spánok, stres a autonómny nervový systém',
            'Výživu, hmotnosť a metabolické súvislosti',
            'Lieky, ktoré užívate, a ich vedľajšie účinky',
            'Čo už bolo vyskúšané a prečo to nefungovalo',
          ],
        },
        {
          h: 'Kedy vyhľadať lekára pre bolesť chrbta',
          p: ['Ak bolesť chrbta pretrváva viac ako niekoľko týždňov, opakovane sa vracia alebo obmedzuje každodenné fungovanie, je vhodné lekárske zhodnotenie. Pri varovných príznakoch nižšie nečakajte.'],
        },
        {
          h: 'Čo dostanete',
          p: [
            'Nie novú diagnózu za každú cenu. Mapu: čo bolesť pravdepodobne udržiava, v akom poradí to riešiť a čo ešte vyšetriť, ak niečo chýba. Ak patríte k inému špecialistovi, poviem to priamo.',
            'Postupujem podľa medicíny založenej na dôkazoch. Cvičenie, fyzioterapiu, lieky či manuálnu medicínu odporúčam len tam, kde pre ne existuje dôvod.',
          ],
        },
      ],
      redFlagsTitle: 'Kedy nečakať a ísť k lekárovi hneď',
      redFlags: [
        'Porucha močenia alebo stolice, znecitlivenie v oblasti genitálií a konečníka',
        'Narastajúca slabosť nohy alebo ruky',
        'Horúčka, nevysvetliteľný úbytok hmotnosti, nočná bolesť, ktorá neustupuje v pokoji',
        'Bolesť po úraze alebo páde, onkologické ochorenie v anamnéze',
        'Pri akútnych ťažkostiach volajte 155 alebo 112.',
      ],
      faq: [
        {
          q: 'Potrebujem nové MR alebo RTG?',
          a: 'Nie vždy. Najprv posúdim, či existujúce vyšetrenia odpovedajú na vašu otázku. Opakované zobrazovanie bez nového dôvodu často nič nezmení.',
        },
        {
          q: 'Dá sa chronická bolesť chrbta riešiť online?',
          a: 'Úvodné zhodnotenie áno: anamnéza, výsledky, pohybové testy cez kameru a plán. Ak je potrebné fyzikálne vyšetrenie, dohodneme osobnú konzultáciu v Piešťanoch.',
        },
        {
          q: 'Nahrádzate ortopéda alebo neurológa?',
          a: 'Nie. Dávam nezávislý pohľad na celok a vysvetlím, ako spolu súvisia jednotlivé nálezy. Vaši ošetrujúci lekári zostávajú.',
        },
      ],
      related: ['second-opinion', 'diagnostics'],
    },
    ru: {
      short: 'Боль в спине и шее',
      title: 'Хроническая боль в спине и шее | Др. Джаманбаев',
      description:
        'Боль в спине месяцами? Что её поддерживает, когда не ждать и как проходит комплексная врачебная оценка. Онлайн на русском по всему ЕС.',
      h1: 'Хроническая боль в спине и шее',
      lead:
        'Боль в спине дольше трёх месяцев считается хронической. Редко это одна повреждённая структура. Чаще — сочетание нескольких факторов. Именно их я ищу.',
      condition: 'Chronic low back pain',
      sections: [
        {
          h: 'Почему боль не проходит',
          p: [
            'При большинстве хронических болей в спине снимки не показывают одну причину, которая объясняла бы всё. Протрузии и дегенеративные изменения часто встречаются и у людей, у которых спина не болит. Сами по себе они не объясняют, почему боль сохраняется.',
            'Боль поддерживает сочетание: двигательный паттерн и защитное напряжение мышц, сон, хронический стресс, физическая форма, рабочая нагрузка, иногда обменное или воспалительное заболевание. По отдельности каждый фактор выглядит безобидно. Вместе они замыкают круг.',
          ],
        },
        {
          h: 'Что я оцениваю',
          list: [
            'Имеющиеся обследования, снимки и выписки — что из них следует и что нет',
            'Двигательный паттерн, дыхание, осанку',
            'Сон, стресс и вегетативную нервную систему',
            'Питание, вес и обменные связи',
            'Принимаемые препараты и их побочные эффекты',
            'Что уже пробовали и почему это не сработало',
          ],
        },
        {
          h: 'Когда обращаться к врачу при боли в спине',
          p: ['Если боль сохраняется дольше нескольких недель, регулярно возвращается или ограничивает повседневную активность, нужна врачебная оценка. При тревожных симптомах ниже — не ждите.'],
        },
        {
          h: 'Что вы получаете',
          p: [
            'Не новый диагноз любой ценой. Карту: что, вероятно, поддерживает боль, в каком порядке с этим работать и что ещё обследовать, если чего-то не хватает. Если вам нужен другой специалист — скажу прямо.',
            'Я работаю в рамках доказательной медицины. Упражнения, физиотерапию, препараты или мануальную медицину рекомендую только там, где для этого есть основания.',
          ],
        },
      ],
      redFlagsTitle: 'Когда не ждать и сразу обратиться к врачу',
      redFlags: [
        'Нарушение мочеиспускания или стула, онемение в области промежности',
        'Нарастающая слабость в ноге или руке',
        'Температура, необъяснимая потеря веса, ночная боль, не стихающая в покое',
        'Боль после травмы или падения, онкологическое заболевание в анамнезе',
        'При острых состояниях звоните 112.',
      ],
      faq: [
        {
          q: 'Нужно ли делать новое МРТ или рентген?',
          a: 'Не всегда. Сначала я оценю, отвечают ли имеющиеся обследования на ваш вопрос. Повторные снимки без нового повода часто ничего не меняют.',
        },
        {
          q: 'Можно ли разбираться с хронической болью в спине онлайн?',
          a: 'Первичную оценку — да: анамнез, результаты, двигательные тесты по видео и план. Если нужен физический осмотр, договоримся об очной консультации в Пьештяни (Словакия).',
        },
        {
          q: 'Вы заменяете ортопеда или невролога?',
          a: 'Нет. Я даю независимый взгляд на картину в целом и объясняю, как связаны отдельные находки. Ваши лечащие врачи остаются.',
        },
      ],
      related: ['second-opinion', 'diagnostics'],
    },
    en: {
      short: 'Back and neck pain',
      title: 'Chronic Back and Neck Pain | Dr. Dzhamanbaev',
      description:
        'Back pain that has lasted for months? What keeps it going, when not to wait, and how a comprehensive medical assessment works. Online across the EU.',
      h1: 'Chronic back and neck pain',
      lead:
        'Back pain lasting longer than three months is chronic. It is rarely one damaged structure. More often it is several factors working together — and those are what I look for.',
      condition: 'Chronic low back pain',
      sections: [
        {
          h: 'Why the pain persists',
          p: [
            'In most chronic back pain, imaging does not show a single cause that explains everything. Disc bulges and degenerative changes are common in people whose backs do not hurt. On their own they do not explain why pain persists.',
            'What keeps it going is a combination: movement patterns and protective muscle tension, sleep, long-term stress, fitness, workload, sometimes a metabolic or inflammatory condition. Each factor looks harmless alone. Together they close the loop.',
          ],
        },
        {
          h: 'What I assess',
          list: [
            'Your existing tests, imaging and medical reports — what they show and what they do not',
            'Movement patterns, breathing, posture',
            'Sleep, stress and the autonomic nervous system',
            'Nutrition, weight and metabolic links',
            'Medication you take and its side effects',
            'What has been tried and why it did not work',
          ],
        },
        {
          h: 'When to see a doctor for back pain',
          p: ['Back pain that lasts more than a few weeks, keeps coming back or limits daily activities deserves a medical assessment. With the warning signs below, do not wait.'],
        },
        {
          h: 'What you get',
          p: [
            'Not a new diagnosis at any cost. A map: what most likely keeps the pain going, in what order to address it, and what else to test if something is missing. If you need a different specialist, I will tell you directly.',
            'I work within evidence-based medicine. Exercise, physiotherapy, medication or manual medicine are recommended only where there is a reason for them.',
          ],
        },
      ],
      redFlagsTitle: 'When not to wait — see a doctor now',
      redFlags: [
        'Problems passing urine or stool, numbness around the genitals or back passage',
        'Increasing weakness in a leg or arm',
        'Fever, unexplained weight loss, night pain that does not ease with rest',
        'Pain after an injury or fall, a history of cancer',
        'In an emergency call 112.',
      ],
      faq: [
        {
          q: 'Do I need a new MRI or X-ray?',
          a: 'Not always. First I assess whether your existing tests answer your question. Repeated imaging without a new reason often changes nothing.',
        },
        {
          q: 'Can chronic back pain be assessed online?',
          a: 'The initial assessment, yes: history, results, movement tests on video, and a plan. If a physical examination is needed, we arrange an in-person visit in Piešťany, Slovakia.',
        },
        {
          q: 'Do you replace my orthopaedist or neurologist?',
          a: 'No. I give an independent view of the whole picture and explain how the individual findings connect. Your treating doctors stay.',
        },
      ],
      related: ['second-opinion', 'diagnostics'],
    },
  },

  // ───────────────────────────── FATIGUE ─────────────────────────────
  fatigue: {
    sk: {
      short: 'Chronická únava a vyhorenie',
      title: 'Chronická únava: príčiny a vyšetrenie | Dr. Džamanbajev',
      description:
        'Únava, ktorá neprejde ani po spánku? Možné príčiny, čo skontrolovať, kedy nečakať a ako prebieha komplexné lekárske zhodnotenie. Online v EÚ.',
      h1: 'Chronická únava: príčiny a lekárske zhodnotenie',
      lead:
        'Chronická únava môže mať jednu hlavnú príčinu alebo vzniknúť súhrou viacerých faktorov. Dôležité je rozlíšiť, čo sa na vašich ťažkostiach skutočne podieľa.',
      condition: 'Fatigue',
      sections: [
        {
          h: 'Príčiny chronickej únavy',
          p: ['Chronická únava nie je diagnóza, ale príznak. Najčastejšie skupiny príčin:'],
          list: [
            'Krvné — chudokrvnosť, nedostatok železa',
            'Hormonálne a metabolické — štítna žľaza, cukrovka',
            'Poruchy spánku — spánkové apnoe, nespavosť',
            'Lieky a ich vedľajšie účinky',
            'Psychické a psychosociálne — depresia, úzkosť, dlhodobý stres',
            'Stavy po infekcii vrátane postcovidového syndrómu',
            'ME/CFS — so zhoršením stavu po námahe',
          ],
        },
        {
          h: 'Čo posudzujem',
          list: [
            'Ktoré vyšetrenia už boli urobené a čo z nich vyplýva (krvný obraz, feritín, štítna žľaza, glykémia a ďalšie podľa situácie)',
            'Spánok — dĺžku, kvalitu, chrápanie, prestávky v dýchaní',
            'Stres, pracovnú záťaž a regeneráciu',
            'Výživu, pohyb a kondíciu',
            'Lieky a doplnky stravy',
            'Priebeh v čase: čo únave predchádzalo a čo ju zhoršuje',
          ],
        },
        {
          h: 'Vyhorenie, stres a nervový systém',
          p: [
            'Dlhodobá záťaž mení spánok, reguláciu autonómneho nervového systému, chuť do jedla aj vnímanie bolesti. Nie je to „len v hlave“. Nie je to ani ochorenie, ktoré vyrieši jeden doplnok. Plán preto rieši viac oblastí naraz, v jasnom poradí.',
          ],
        },
        {
          h: 'Čo dostanete',
          p: [
            'Prehľad: ktoré príčiny sú pravdepodobné, ktoré sú už vylúčené, čo ešte vyšetriť a konkrétny postup. Ak výsledky ukážu na ochorenie, ktoré patrí špecialistovi, odporučím, na koho sa obrátiť.',
          ],
        },
      ],
      redFlagsTitle: 'Kedy nečakať',
      redFlags: [
        'Nevysvetliteľný úbytok hmotnosti, horúčky alebo nočné potenie',
        'Dýchavičnosť, bolesť na hrudi, búšenie srdca, odpadnutie',
        'Krv v stolici alebo moči',
        'Náhla slabosť, porucha reči alebo videnia',
        'Myšlienky na sebapoškodenie — vyhľadajte pomoc ihneď',
        'Pri akútnych ťažkostiach volajte 155 alebo 112.',
      ],
      faq: [
        {
          q: 'Mám už veľa vyšetrení. Má zmysel ďalšia konzultácia?',
          a: 'Áno, ak ich nikto nedal dokopy. Často nechýba ďalší test, ale interpretácia existujúcich výsledkov spolu so spánkom, liekmi a záťažou.',
        },
        {
          q: 'Ide o syndróm chronickej únavy (ME/CFS)?',
          a: 'ME/CFS je samostatná diagnóza s presnými kritériami, napríklad zhoršením stavu po námahe. Posúdim, či ich spĺňate, alebo či je pravdepodobnejšie iné vysvetlenie.',
        },
        {
          q: 'Odporúčate doplnky stravy?',
          a: 'Len pri preukázanom nedostatku alebo jasnej indikácii. Doplnky bez dôvodu stoja peniaze a zakrývajú príčinu.',
        },
      ],
      related: ['second-opinion', 'diagnostics'],
    },
    ru: {
      short: 'Хроническая усталость и выгорание',
      title: 'Хроническая усталость: причины | Др. Джаманбаев',
      description:
        'Усталость, которая не проходит даже после сна? Возможные причины, что проверить, когда не ждать и как проходит врачебная оценка. Онлайн по ЕС.',
      h1: 'Хроническая усталость: причины и обследование',
      lead:
        'Хроническая усталость может иметь одну основную причину или быть результатом сочетания нескольких факторов. Важно разобраться, какие из них действительно влияют на ваше состояние.',
      condition: 'Fatigue',
      sections: [
        {
          h: 'Причины хронической усталости',
          p: ['Хроническая усталость — не диагноз, а симптом. Основные группы причин:'],
          list: [
            'Гематологические — анемия, дефицит железа',
            'Эндокринные и обменные — щитовидная железа, диабет',
            'Нарушения сна — апноэ сна, бессонница',
            'Препараты и их побочные эффекты',
            'Психические и психосоциальные — депрессия, тревога, хронический стресс',
            'Состояния после инфекций, включая постковидный синдром',
            'ME/CFS — с ухудшением после нагрузки',
          ],
        },
        {
          h: 'Что я оцениваю',
          list: [
            'Какие обследования уже сделаны и что из них следует (общий анализ крови, ферритин, щитовидная железа, глюкоза и другие — по ситуации)',
            'Сон — продолжительность, качество, храп, остановки дыхания',
            'Стресс, рабочую нагрузку и восстановление',
            'Питание, движение и физическую форму',
            'Препараты и БАДы',
            'Динамику: что предшествовало усталости и что её усиливает',
          ],
        },
        {
          h: 'Выгорание, стресс и нервная система',
          p: [
            'Длительная нагрузка меняет сон, регуляцию вегетативной нервной системы, аппетит и восприятие боли. Это не «всё в голове». Но и не болезнь, которую решит одна добавка. Поэтому план охватывает несколько областей сразу — в чётком порядке.',
          ],
        },
        {
          h: 'Что вы получаете',
          p: [
            'Обзор: какие причины вероятны, какие уже исключены, что ещё обследовать, и конкретный план действий. Если результаты укажут на заболевание, которое ведёт профильный специалист, — скажу, к кому обратиться.',
          ],
        },
      ],
      redFlagsTitle: 'Когда не ждать',
      redFlags: [
        'Необъяснимая потеря веса, температура или ночная потливость',
        'Одышка, боль в груди, сердцебиение, обмороки',
        'Кровь в стуле или моче',
        'Внезапная слабость, нарушение речи или зрения',
        'Мысли о причинении себе вреда — обратитесь за помощью немедленно',
        'При острых состояниях звоните 112.',
      ],
      faq: [
        {
          q: 'У меня уже много обследований. Есть ли смысл в ещё одной консультации?',
          a: 'Да, если их никто не свёл вместе. Часто не хватает не нового анализа, а интерпретации имеющихся результатов вместе со сном, препаратами и нагрузкой.',
        },
        {
          q: 'Это синдром хронической усталости (ME/CFS)?',
          a: 'ME/CFS — отдельный диагноз с чёткими критериями, например ухудшением после нагрузки. Я оценю, соответствуете ли вы им, или вероятнее другое объяснение.',
        },
        {
          q: 'Вы назначаете БАДы?',
          a: 'Только при подтверждённом дефиците или ясном показании. Добавки без повода стоят денег и маскируют причину.',
        },
      ],
      related: ['second-opinion', 'diagnostics'],
    },
    en: {
      short: 'Chronic fatigue and burnout',
      title: 'Chronic Fatigue: Causes and Assessment | Dr. Dzhamanbaev',
      description:
        'Tired even after sleep? Possible causes, what to check, when not to wait, and how a comprehensive medical assessment works. Online across the EU.',
      h1: 'Chronic fatigue: causes and medical assessment',
      lead:
        'Chronic fatigue may have one underlying cause or result from several contributing factors. The aim is to identify which factors are relevant to your situation.',
      condition: 'Fatigue',
      sections: [
        {
          h: 'Causes of chronic fatigue',
          p: ['Chronic fatigue is a symptom, not a diagnosis. The main groups of causes:'],
          list: [
            'Haematological — anaemia, iron deficiency',
            'Endocrine and metabolic — thyroid disorders, diabetes',
            'Sleep disorders — sleep apnoea, insomnia',
            'Medication and its side effects',
            'Mental health and psychosocial — depression, anxiety, long-term stress',
            'Post-infection states, including post-COVID syndrome',
            'ME/CFS — with worsening after exertion',
          ],
        },
        {
          h: 'What I assess',
          list: [
            'Which tests have been done and what they show (blood count, ferritin, thyroid, glucose and others as needed)',
            'Sleep — duration, quality, snoring, pauses in breathing',
            'Stress, workload and recovery',
            'Nutrition, activity and fitness',
            'Medication and supplements',
            'The course over time: what came before the fatigue and what makes it worse',
          ],
        },
        {
          h: 'Burnout, stress and the nervous system',
          p: [
            'Long-term strain changes sleep, autonomic nervous system regulation, appetite and pain perception. It is not "all in your head". Nor is it a condition one supplement will fix. So the plan addresses several areas at once, in a clear order.',
          ],
        },
        {
          h: 'What you get',
          p: [
            'An overview: which causes are likely, which are already ruled out, what else to test, and a concrete plan. If results point to a condition that belongs with a specialist, I will tell you whom to see.',
          ],
        },
      ],
      redFlagsTitle: 'When not to wait',
      redFlags: [
        'Unexplained weight loss, fevers or night sweats',
        'Breathlessness, chest pain, palpitations, fainting',
        'Blood in stool or urine',
        'Sudden weakness, speech or vision problems',
        'Thoughts of harming yourself — seek help immediately',
        'In an emergency call 112.',
      ],
      faq: [
        {
          q: 'I already have many test results. Is another consultation worth it?',
          a: 'Yes, if nobody has put them together. Often what is missing is not another test but interpretation of existing results alongside sleep, medication and workload.',
        },
        {
          q: 'Is this chronic fatigue syndrome (ME/CFS)?',
          a: 'ME/CFS is a distinct diagnosis with defined criteria, such as worsening after exertion. I assess whether you meet them or whether another explanation is more likely.',
        },
        {
          q: 'Do you recommend supplements?',
          a: 'Only for a proven deficiency or a clear indication. Supplements without a reason cost money and mask the cause.',
        },
      ],
      related: ['second-opinion', 'diagnostics'],
    },
  },

  // ───────────────────────────── SECOND OPINION ─────────────────────────────
  'second-opinion': {
    sk: {
      short: 'Druhý názor lekára',
      title: 'Druhý názor lekára online | Dr. Džamanbajev',
      description:
        'Nezávislý druhý alebo tretí názor lekára na vaše diagnózy, výsledky a liečbu. Po slovensky, rusky a anglicky. V Piešťanoch alebo online v EÚ.',
      h1: 'Druhý názor lekára online',
      lead:
        'Máte niekoľko diagnóz, rôzne odporúčania alebo liečbu, ktorá nefunguje, ako ste čakali? Nezávislý názor lekára pomôže pochopiť celok a rozhodnúť sa.',
      sections: [
        {
          h: 'Čo zahŕňa nezávislý druhý názor lekára',
          p: ['Posúdenie dostupných lekárskych správ, porovnanie diagnóz a výsledkov vyšetrení, zhodnotenie možných súvislostí a rozhovor o ďalšom postupe. Druhý názor neruší predchádzajúce diagnózy ani nenahrádza starostlivosť vášho ošetrujúceho lekára.'],
        },
        {
          h: 'Aké dokumenty poslať',
          list: ['Lekárske správy a prepúšťacie správy', 'Výsledky krvi a ďalších vyšetrení', 'Popisy snímok (MR, CT, RTG, USG)', 'Zoznam liekov a doplnkov', 'Stačia fotky alebo PDF — v slovenčine, češtine, ruštine či angličtine'],
        },
        {
          h: 'Kedy má zmysel',
          list: [
            'Rôzni lekári vám povedali rôzne veci',
            'Máte viacero diagnóz a nikto nevysvetlil, ako spolu súvisia',
            'Liečba trvá dlho a výsledok je slabý',
            'Stojíte pred rozhodnutím — napríklad o operácii alebo dlhodobej liečbe — a chcete mu rozumieť',
            'Chcete rozumieť svojim správam a výsledkom vo vlastnom jazyku',
          ],
        },
        {
          h: 'Ako to prebieha',
          list: [
            'Vyplníte bezplatný 6D dotazník a pripravíte dostupné správy a výsledky',
            'Preštudujem ich a odpíšem, či má konzultácia zmysel',
            '60-minútová konzultácia online alebo v Piešťanoch po dohode (100 €)',
            'Osobná mapa zdravia a konkrétny plán: čo vyplýva z doterajších nálezov, čo chýba a aké sú možnosti',
          ],
        },
        {
          h: 'Čo druhý názor je a čo nie je',
          p: [
            'Druhý názor nie je spochybnenie vašich lekárov. Ich diagnózy sú často správne. Môj pohľad hľadá to, čo pri delení medicíny na špecializácie ľahko zapadne: súvislosti medzi nálezmi.',
            'Liečbu od ošetrujúceho lekára nemeníte bez dohody s ním. Moje odporúčania mu môžete ukázať.',
          ],
        },
        {
          h: 'Jazyk a orientácia v systéme',
          p: [
            'Konzultácie vediem po slovensky, rusky a anglicky. Pracoval som v zdravotníctve viacerých krajín, preto pomôžem zorientovať sa aj v slovenskom systéme — kam ísť, čo žiadať a ako čítať správy.',
          ],
        },
      ],
      redFlagsTitle: 'Kedy nie je čas na druhý názor',
      redFlags: [
        'Bolesť na hrudi, dýchavičnosť, príznaky mozgovej príhody, silné krvácanie, vysoká horúčka — volajte 155 alebo 112',
        'Druhý názor je pre stabilné, dlhodobé situácie, nie pre urgentné stavy',
      ],
      faq: [
        {
          q: 'Potrebujem odporúčanie od svojho lekára?',
          a: 'Nie. Ide o súkromnú konzultáciu, ktorú zdravotná poisťovňa nehradí.',
        },
        {
          q: 'Ako zaplatím?',
          a: '100 € vopred prevodom na účet. Údaje pošlem po potvrdení termínu.',
        },
        {
          q: 'Môžem poslať správy v inom jazyku?',
          a: 'Áno — v slovenčine, češtine, ruštine aj angličtine.',
        },
      ],
      related: ['back-pain', 'fatigue'],
    },
    ru: {
      short: 'Второе мнение врача',
      title: 'Второе мнение врача онлайн на русском | Др. Джаманбаев',
      description:
        'Независимое второе или третье мнение врача о ваших диагнозах, анализах и лечении. На русском языке, онлайн по всему ЕС или очно в Словакии.',
      h1: 'Второе мнение врача онлайн',
      lead:
        'У вас несколько диагнозов, разные рекомендации или лечение работает не так, как ожидалось? Независимое мнение врача помогает увидеть целое и принять решение.',
      sections: [
        {
          h: 'Что включает независимое второе мнение врача',
          p: ['Анализ имеющихся медицинских заключений, сопоставление диагнозов и результатов обследований, оценка возможных взаимосвязей и обсуждение дальнейших вариантов. Второе мнение не отменяет предыдущие диагнозы и не заменяет наблюдение у лечащего врача.'],
        },
        {
          h: 'Какие документы прислать',
          list: ['Выписки и заключения врачей', 'Анализы крови и другие результаты', 'Описания снимков (МРТ, КТ, рентген, УЗИ)', 'Список препаратов и БАДов', 'Достаточно фото или PDF — на словацком, чешском, английском или русском. Объясню всё по-русски'],
        },
        {
          h: 'Когда это имеет смысл',
          list: [
            'Разные врачи сказали вам разное',
            'У вас несколько диагнозов, и никто не объяснил, как они связаны',
            'Лечение длится долго, а результат слабый',
            'Предстоит решение — например, об операции или длительной терапии — и вы хотите его понимать',
            'Вы живёте в ЕС и хотите обсудить выписки и анализы на родном языке',
          ],
        },
        {
          h: 'Как это проходит',
          list: [
            'Вы заполняете бесплатную 6D-анкету и готовите имеющиеся выписки и анализы',
            'Я изучаю их и отвечаю, есть ли смысл в консультации',
            'Консультация 60 минут онлайн или очно в Пьештяни по договорённости (100 €)',
            'Персональная карта здоровья и конкретный план: что следует из имеющихся данных, чего не хватает и какие есть варианты',
          ],
        },
        {
          h: 'Что такое второе мнение — и чем оно не является',
          p: [
            'Второе мнение — не сомнение в ваших врачах. Их диагнозы часто верны. Мой взгляд ищет то, что легко теряется при делении медицины на специальности: связи между находками.',
            'Лечение, назначенное лечащим врачом, не меняйте без согласования с ним. Мои рекомендации можно показать ему.',
          ],
        },
        {
          h: 'Язык и ориентация в системе',
          p: [
            'Я веду консультации на русском, словацком и английском. Я работал в здравоохранении нескольких стран и помогу сориентироваться в местной системе — куда идти, что просить и как читать выписки на словацком, чешском или английском.',
          ],
        },
      ],
      redFlagsTitle: 'Когда не время для второго мнения',
      redFlags: [
        'Боль в груди, одышка, признаки инсульта, сильное кровотечение, высокая температура — звоните 112',
        'Второе мнение — для стабильных, длительных ситуаций, а не для неотложных состояний',
      ],
      faq: [
        {
          q: 'Нужно ли направление от моего врача?',
          a: 'Нет. Это частная консультация, страховка её не покрывает.',
        },
        {
          q: 'Как оплатить?',
          a: '100 € заранее переводом на счёт. Реквизиты пришлю после подтверждения времени.',
        },
        {
          q: 'Документы на словацком, чешском или английском — это проблема?',
          a: 'Нет. Я читаю документы на русском, словацком, чешском и английском и объясню их по-русски.',
        },
      ],
      related: ['back-pain', 'fatigue'],
    },
    en: {
      short: 'Second medical opinion',
      title: 'Second Medical Opinion Online | Dr. Dzhamanbaev',
      description:
        'An independent second or third medical opinion on your diagnoses, test results and treatment. In English, Russian or Slovak — online across the EU.',
      h1: 'Second medical opinion online',
      lead:
        'Several diagnoses, conflicting recommendations, or treatment that is not working as expected? An independent medical opinion helps you see the whole picture and decide.',
      sections: [
        {
          h: 'What an independent second medical opinion includes',
          p: ['A review of your existing medical records, comparison of diagnoses and test results, assessment of possible connections and a discussion of next steps. A second opinion does not invalidate previous diagnoses or replace care from your treating physician.'],
        },
        {
          h: 'What documents to send',
          list: ['Medical reports and discharge letters', 'Blood and other test results', 'Imaging reports (MRI, CT, X-ray, ultrasound)', 'A list of medication and supplements', 'Photos or PDFs are fine — in English, Slovak, Czech or Russian'],
        },
        {
          h: 'When it makes sense',
          list: [
            'Different doctors have told you different things',
            'You have several diagnoses and nobody has explained how they connect',
            'Treatment has gone on for a long time with weak results',
            'You face a decision — such as surgery or long-term treatment — and want to understand it',
            'You live abroad in the EU and want to understand your reports in your own language',
          ],
        },
        {
          h: 'How it works',
          list: [
            'You fill in the free 6D questionnaire and prepare your reports and results',
            'I review them and reply whether a consultation makes sense',
            '60-minute consultation online or in Piešťany by arrangement (€100)',
            'A personal health map and a concrete plan: what follows from existing findings, what is missing, and what the options are',
          ],
        },
        {
          h: 'What a second opinion is — and is not',
          p: [
            'A second opinion does not question your doctors. Their diagnoses are often correct. My view looks for what easily gets lost when medicine is split into specialties: the links between findings.',
            'Do not change treatment prescribed by your doctor without agreeing it with them. You can show them my recommendations.',
          ],
        },
        {
          h: 'Language and navigating the system',
          p: [
            'I consult in English, Russian and Slovak. Having worked in healthcare in several countries, I can help you navigate the local system — where to go, what to ask for, and how to read reports in Slovak, Czech or Russian.',
          ],
        },
      ],
      redFlagsTitle: 'When it is not the time for a second opinion',
      redFlags: [
        'Chest pain, breathlessness, signs of stroke, heavy bleeding, high fever — call 112',
        'A second opinion is for stable, long-term situations, not emergencies',
      ],
      faq: [
        {
          q: 'Do I need a referral from my doctor?',
          a: 'No. This is a private consultation and is not covered by health insurance.',
        },
        {
          q: 'How do I pay?',
          a: '€100 in advance by bank transfer. I send the details once the time is confirmed.',
        },
        {
          q: 'Can I send reports in another language?',
          a: 'Yes — English, Slovak, Czech or Russian.',
        },
      ],
      related: ['back-pain', 'fatigue'],
    },
  },

  // ───────────────────────────── 6D DIAGNOSTICS ─────────────────────────────
  diagnostics: {
    sk: {
      short: '6D klinické zhodnotenie',
      title: '6D klinické zhodnotenie zdravia | Dr. Džamanbajev',
      description:
        'Ako prebieha 6D klinické zhodnotenie: bezplatný dotazník, konzultácia 60 minút za 100 €, osobná mapa zdravia a plán. Online v EÚ alebo v Piešťanoch.',
      h1: '6D klinické zhodnotenie zdravia',
      lead:
        '6D je môj spôsob klinického uvažovania: systematicky prejdem šesť oblastí, v ktorých sa chronické ťažkosti najčastejšie udržiavajú, a spojím ich do jedného plánu. Nenahrádza štandardnú diagnostiku — nadväzuje na ňu.',
      sections: [
        {
          h: 'Šesť oblastí',
          list: [
            'D1 Diagnostika — čo hovoria vaše vyšetrenia a čo ešte chýba (podľa medicíny založenej na dôkazoch)',
            'D2 Dysfunkcia — pohybové vzorce, dýchanie, držanie tela',
            'D3 Spojenie mozog–telo — stres, spánok, autonómny nervový systém',
            'D4 Biochémia — výživa, metabolizmus, lieky a doplnky',
            'D5 Kognícia — ako vnímate a zvládate príznaky, cyklus bolesti a únavy',
            'D6 Integrácia — každodenný režim, práca, regenerácia',
          ],
        },
        {
          h: 'Ako to prebieha',
          list: [
            'Bezplatný 6D dotazník online — osobne ho preštudujem',
            'Predbežná odpoveď: či má zmysel pokračovať',
            'Konzultácia 60 minút (Zoom alebo osobne v Piešťanoch po dohode) — 100 €',
            'Osobná mapa zdravia a konkrétny akčný plán',
            'Podľa potreby sprevádzanie — rozsah a cenu dohodneme vopred',
          ],
        },
        {
          h: 'Pre koho to je',
          p: [
            'Pre dospelých s dlhodobými ťažkosťami — bolesťou chrbta a kĺbov, únavou, vyčerpaním alebo viacerými diagnózami bez celkového obrazu. Nie pre akútne stavy a nie ako náhrada ošetrujúceho lekára.',
          ],
        },
        {
          h: 'Čo si pripraviť',
          list: [
            'Lekárske správy a výsledky za posledné 1–2 roky',
            'Zoznam liekov a doplnkov',
            'Pri online konzultácii počítač alebo mobil s kamerou a tiché miesto',
          ],
        },
      ],
      redFlagsTitle: 'Kedy 6D nie je správna voľba',
      redFlags: [
        'Akútne a urgentné stavy — volajte 155 alebo 112',
        'Ťažkosti, ktoré vznikli náhle v posledných dňoch — patria k všeobecnému lekárovi alebo na pohotovosť',
      ],
      faq: [
        {
          q: 'Koľko to stojí?',
          a: 'Dotazník je bezplatný. 6D klinické zhodnotenie (60 minút) stojí 100 €. Cenu sprevádzania dohodneme vopred podľa rozsahu.',
        },
        {
          q: 'Hradí to zdravotná poisťovňa?',
          a: 'Nie, ide o súkromnú konzultáciu.',
        },
        {
          q: 'Je 6D vedecky overená metóda?',
          a: '6D nie je nový test ani prístroj. Je to štruktúra, podľa ktorej postupujem pri zložitých prípadoch. Jednotlivé kroky vychádzajú z medicíny založenej na dôkazoch; kde dôkazy chýbajú, poviem to otvorene.',
        },
      ],
      related: ['back-pain', 'fatigue', 'second-opinion'],
    },
    ru: {
      short: '6D-оценка',
      title: '6D-оценка: комплексный взгляд | Др. Джаманбаев',
      description:
        'Как проходит 6D-оценка: бесплатная анкета, консультация 60 минут за 100 €, персональная карта здоровья и план. Онлайн на русском по ЕС.',
      h1: '6D-оценка — комплексная клиническая оценка здоровья',
      lead:
        '6D — это мой способ клинического мышления: я системно прохожу шесть областей, в которых хронические проблемы чаще всего поддерживаются, и свожу их в один план. Она не заменяет стандартную диагностику — она продолжает её.',
      sections: [
        {
          h: 'Шесть областей',
          list: [
            'D1 Диагностика — что говорят ваши обследования и чего не хватает (с позиций доказательной медицины)',
            'D2 Дисфункция — двигательные паттерны, дыхание, осанка',
            'D3 Связь мозг–тело — стресс, сон, вегетативная нервная система',
            'D4 Биохимия — питание, обмен веществ, препараты и БАДы',
            'D5 Когниция — как вы воспринимаете симптомы и справляетесь с ними, цикл боли и усталости',
            'D6 Интеграция — режим дня, работа, восстановление',
          ],
        },
        {
          h: 'Как это проходит',
          list: [
            'Бесплатная 6D-анкета онлайн — я лично её изучаю',
            'Предварительный ответ: есть ли смысл продолжать',
            'Консультация 60 минут (Zoom или очно в Пьештяни по договорённости) — 100 €',
            'Персональная карта здоровья и конкретный план действий',
            'При необходимости — сопровождение; объём и стоимость согласуем заранее',
          ],
        },
        {
          h: 'Для кого это',
          p: [
            'Для взрослых с длительными проблемами — болью в спине и суставах, усталостью, истощением или несколькими диагнозами без общей картины. Не для острых состояний и не вместо лечащего врача.',
          ],
        },
        {
          h: 'Что подготовить',
          list: [
            'Выписки и результаты обследований за последние 1–2 года',
            'Список препаратов и БАДов',
            'Для онлайн-консультации — компьютер или телефон с камерой и тихое место',
          ],
        },
      ],
      redFlagsTitle: 'Когда 6D — не тот формат',
      redFlags: [
        'Острые и неотложные состояния — звоните 112',
        'Жалобы, возникшие внезапно в последние дни, — к семейному врачу или в неотложку',
      ],
      faq: [
        {
          q: 'Сколько это стоит?',
          a: 'Анкета бесплатна. 6D-оценка (60 минут) стоит 100 €. Стоимость сопровождения согласуем заранее в зависимости от объёма.',
        },
        {
          q: 'Покрывает ли это страховка?',
          a: 'Нет, это частная консультация.',
        },
        {
          q: '6D — научно доказанный метод?',
          a: '6D — не новый анализ и не прибор. Это структура, по которой я работаю со сложными случаями. Отдельные шаги опираются на доказательную медицину; где доказательств нет, я говорю об этом прямо.',
        },
      ],
      related: ['back-pain', 'fatigue', 'second-opinion'],
    },
    en: {
      short: '6D clinical assessment',
      title: '6D Clinical Assessment | Dr. Dzhamanbaev',
      description:
        'How the 6D clinical assessment works: free questionnaire, a 60-minute consultation for €100, a personal health map and plan. Online across the EU.',
      h1: '6D clinical assessment — a comprehensive health review',
      lead:
        '6D is my way of clinical reasoning: I systematically go through six areas where chronic problems are most often maintained and bring them into one plan. It does not replace standard diagnostics — it builds on them.',
      sections: [
        {
          h: 'Six areas',
          list: [
            'D1 Diagnostics — what your tests show and what is missing (evidence-based)',
            'D2 Dysfunction — movement patterns, breathing, posture',
            'D3 Mind–body connection — stress, sleep, the autonomic nervous system',
            'D4 Biochemistry — nutrition, metabolism, medication and supplements',
            'D5 Cognition — how you perceive and cope with symptoms, the pain and fatigue cycle',
            'D6 Integration — daily routine, work, recovery',
          ],
        },
        {
          h: 'How it works',
          list: [
            'Free online 6D questionnaire — I review it personally',
            'A preliminary reply: whether it makes sense to continue',
            '60-minute consultation (Zoom or in person in Piešťany by arrangement) — €100',
            'A personal health map and a concrete action plan',
            'Follow-up support if needed — scope and price agreed in advance',
          ],
        },
        {
          h: 'Who it is for',
          p: [
            'Adults with long-standing problems — back and joint pain, fatigue, exhaustion, or several diagnoses without a whole picture. Not for acute conditions and not a replacement for your treating doctor.',
          ],
        },
        {
          h: 'What to prepare',
          list: [
            'Medical reports and results from the last 1–2 years',
            'A list of medication and supplements',
            'For an online consultation: a computer or phone with a camera and a quiet place',
          ],
        },
      ],
      redFlagsTitle: 'When 6D is not the right choice',
      redFlags: [
        'Acute and urgent conditions — call 112',
        'Symptoms that started suddenly in the last few days — see your GP or emergency services',
      ],
      faq: [
        {
          q: 'How much does it cost?',
          a: 'The questionnaire is free. The 6D clinical assessment (60 minutes) costs €100. The price of follow-up support is agreed in advance depending on scope.',
        },
        {
          q: 'Is it covered by health insurance?',
          a: 'No, it is a private consultation.',
        },
        {
          q: 'Is 6D a scientifically proven method?',
          a: '6D is not a new test or device. It is the structure I follow in complex cases. Individual steps are based on evidence-based medicine; where evidence is lacking, I say so openly.',
        },
      ],
      related: ['back-pain', 'fatigue', 'second-opinion'],
    },
  },
};
