// @ts-nocheck
import React from 'react';

type Props = {
  lang: 'en' | 'ru' | 'sk';
};

const SchemaOrg = ({ lang }: Props) => {
  const baseUrl = "https://drerkin.eu";
  
  const data = {
    en: {
      name: "Dr. Erkinbek Dzhamanbaev",
      description: "Expert in Integrative Medicine and 6D Diagnostics for complex chronic conditions. 30+ years of clinical experience. EU licensed.",
      serviceName: "6D Diagnostic Navigation",
      questions: [
        { q: "Why do I feel exhausted even after a full night's sleep?", a: "This type of fatigue often stems from mitochondrial dysfunction or a state of 'cellular hibernation' rather than simple lack of rest. When the body stays in a state of chronic stress, it conserves energy to survive, making traditional sleep ineffective. Our 6D Diagnostic Navigation helps identify if the root cause lies in metabolic or neurological regulation." },
        { q: "Why are my lab results 'normal' if I feel so unwell?", a: "Standard lab tests are designed to find acute pathology, often missing sub-clinical functional imbalances like HPA-axis dysfunction. You may be experiencing chronic low-grade inflammation that hasn't yet caused organ damage but severely impacts your life. We look beyond the 'reference range' to find the physiological logic behind your symptoms." },
        { q: "What is HPA-axis dysfunction and how does it affect energy?", a: "The Hypothalamic-Pituitary-Adrenal (HPA) axis is your body's main stress-response system. When dysregulated, it leads to 'tired but wired' feelings, brain fog, and poor recovery. Restoring this axis is a critical pillar of integrative recovery from chronic exhaustion." },
        { q: "How is Chronic Fatigue Syndrome (ME/CFS) different from regular tiredness?", a: "ME/CFS is characterized by Post-Exertional Malaise (PEM), where even minor effort causes a disproportionate crash in energy. Unlike regular tiredness, it doesn't improve with rest and involves immune dysregulation. Identifying specific triggers is the first step in our diagnostic process." },
        { q: "Why has my chronic pain lasted for years despite treatment?", a: "Persistent pain often transitions from a tissue issue to a nervous system issue known as 'Central Sensitization.' In this state, the brain becomes hyper-reactive, interpreting even normal signals as pain. 6D-diagnostics aim to find the original systemic triggers keeping your system in this high-alert state." },
        { q: "What is Central Sensitization in chronic pain management?", a: "Central Sensitization is a condition where the central nervous system becomes hypersensitive to stimuli. It explains why pain can spread or persist even after the initial injury has healed. Effective treatment requires calming the systemic inflammatory response rather than just using localized painkillers." },
        { q: "Why do painkillers eventually stop working for chronic conditions?", a: "Traditional painkillers target symptoms of inflammation but not the underlying neuro-metabolic causes. Over time, the body develops tolerance, or pain pathways become so reinforced that medication cannot suppress them. We focus on neuroplasticity and systemic health to reduce the biological need for pain signals." },
        { q: "Can chronic pain be caused by a dysregulated nervous system?", a: "Yes, much chronic pain is 'nociplastic,' arising from altered pain sensing despite no clear tissue damage. This is often linked to the autonomic nervous system being stuck in 'fight-or-flight' mode. Our approach navigates these connections to find a path toward systemic regulation." },
        { q: "Why doesn't a vacation help with professional burnout?", a: "Burnout is a physiological state of neuroendocrine depletion, not just mental fatigue. A short rest cannot instantly replenish neurotransmitters or repair a dysregulated cortisol rhythm. Recovery requires a targeted approach to restore cellular energy and recalibrate the nervous system." },
        { q: "What happens to the body at a cellular level during burnout?", a: "During burnout, mitochondria may decrease energy production to protect cells from oxidative stress. This results in systemic low energy and brain fog as the brain consumes significant energy. Understanding this biological 'braking system' is essential for recovery through 6D-navigation." },
        { q: "Why are antidepressants sometimes ineffective for burnout symptoms?", a: "Antidepressants target specific neurotransmitters, but burnout often involves neuroinflammation and adrenal fatigue that SSRIs cannot reach. If the underlying cause is physiological exhaustion rather than primary depression, chemical intervention may only mask the problem. We look for the systemic root causes." },
        { q: "Why can't doctors find a clear diagnosis for my symptoms?", a: "Modern medicine often views the body as separate organs rather than an interconnected system. If symptoms cross multiple systems (gut, brain, joints), specialists may only see 'normal' results in their narrow field. Our 6D-method connects these dots into a coherent diagnostic picture." },
        { q: "What should I do if every specialist gives me a different diagnosis?", a: "Conflicting diagnoses usually mean the root cause is systemic, affecting multiple pathways simultaneously. Instead of chasing symptoms, it is more effective to look at common denominators like autonomic dysregulation. 6D-diagnostics acts as a map to find this central point of failure." },
        { q: "How are autoimmune processes linked to chronic inflammation?", a: "Autoimmunity is often the end stage of prolonged systemic inflammation where the immune system loses self-tolerance. Triggers can include gut permeability, chronic viral loads, or toxins. Our goal is to identify these triggers and calm the inflammatory fire before further tissue damage occurs." },
        { q: "Why do Long COVID symptoms persist for months?", a: "Long COVID may involve viral persistence, micro-clots hindering oxygen delivery, and a hyper-activated immune system. It keeps the body in a state of high-alert that it cannot exit alone. 6D-navigation helps identify which factor is dominant in your specific case." },
        { q: "What is autonomic dysfunction (dysautonomia) after COVID-19?", a: "Post-COVID dysautonomia occurs when the virus affects the Autonomic Nervous System, which controls involuntary functions like heart rate. This leads to symptoms like POTS (racing heart) and dizziness. Managing this requires a neurological and systemic approach rather than just symptomatic relief." },
        { q: "Is full recovery possible after a Long COVID diagnosis?", a: "While recovery takes time, many patients improve once systemic triggers are addressed. By reducing neuroinflammation and supporting mitochondrial health, we can help the body return to homeostasis. Our diagnostic session provides a roadmap for this complex recovery journey." },
        { q: "What exactly is the 6D Diagnostic Navigation method?", a: "6D-diagnostics is a holistic assessment viewing health through six dimensions: biological, neurological, psychological, environmental, lifestyle, and temporal. By overlaying these layers, we find the logic of why you are sick, resulting in a clear, actionable recovery roadmap." },
        { q: "How does an online consultation work for complex cases?", a: "The session is conducted via Zoom and lasts 60 minutes. I review your history beforehand so we can focus on 'connecting the dots.' You receive a deep systemic analysis and a strategic plan for next steps, saving months of trial and error." },
        { q: "What do I get for the €100 consultation fee?", a: "You receive a 60-minute expert session with a physician having 30 years of experience in complex cases. You get a 'navigation map'—a clear explanation of root causes and a prioritized plan for further action, stopping the cycle of ineffective consultations." }
      ]
    },
    ru: {
      name: "Д-р Эркинбек Джаманбаев",
      description: "Специалист по интегративной медицине и 6D-диагностике сложных хронических состояний. 30+ лет клинического опыта. Лицензия EU.",
      serviceName: "6D-диагностическая навигация",
      questions: [
        { q: "Почему я чувствую себя истощенным даже после полноценного сна?", a: "Такая усталость часто связана не с недостатком отдыха, а с митохондриальной дисфункцией — состоянием «клеточной спячки». Когда организм находится в хроническом стрессе, он экономит энергию для выживания, делая обычный сон неэффективным. 6D-диагностика помогает понять, кроется ли причина в метаболических или неврологических нарушениях." },
        { q: "Почему анализы в норме, если я чувствую себя плохо?", a: "Стандартные анализы ищут острые патологии, часто пропуская функциональные сбои, такие как дисфункция оси ХГН (гипоталамус-гипофиз-надпочечники). У вас может быть хроническое вялотекущее воспаление, которое еще не разрушило органы, но уже лишило вас сил. Мы смотрим глубже референсных значений, чтобы найти логику ваших симптомов." },
        { q: "Что такое дисфункция оси ХГН и как она влияет на энергию?", a: "Ось ХГН — это главная система реагирования на стресс. При её нарушении возникает состояние «устал, но взвинчен», затуманенность мозга и плохая восстанавливаемость. Восстановление этой оси — критический этап в лечении хронического истощения." },
        { q: "Чем отличается синдром хронической усталости (СХУ) от обычной усталости?", a: "Для СХУ характерно недомогание после нагрузки (PEM): даже небольшое усилие вызывает несоразмерный обвал энергии. В отличие от обычной усталости, это состояние не проходит после отдыха и связано с глубокими сбоями в иммунной системе. Поиск триггеров этого цикла — наша первая задача." },
        { q: "Почему боль не проходит годами, несмотря на лечение?", a: "Длительная боль часто переходит из проблемы тканей в проблему нервной системы — так называемую «центральную сенситизацию». Мозг становится гиперреактивным и интерпретирует даже нормальные сигналы как боль. 6D-диагностика ищет системные триггеры, удерживающие вашу систему в состоянии тревоги." },
        { q: "Что такое центральная сенситизация при хронической боли?", a: "Это состояние, при котором центральная нервная система становится сверхчувствительной к любым стимулам. Это объясняет, почему боль может блуждать или сохраняться после заживления травмы. Эффективное лечение требует успокоения системного воспаления, а не просто приема обезболивающих." },
        { q: "Почему обезболивающие со временем перестают работать?", a: "Обычные препараты борются с симптомами, но не с нейрометаболическими причинами. Со временем организм вырабатывает толерантность, или болевые пути в мозге закрепляются настолько сильно, что лекарства их уже не подавляют. Мы фокусируемся на нейропластичности и системном здоровье." },
        { q: "Может ли хроническая боль быть связана с дисфункцией нервной системы?", a: "Да, значительная часть боли является «ноципластической» — она возникает из-за искаженного восприятия сигналов мозгом. Это часто связано с тем, что вегетативная нервная система «застряла» в режиме выживания. Наш подход позволяет найти путь к системной регуляции." },
        { q: "Почему отпуск не помогает при профессиональном выгорании?", a: "Выгорание — это не просто психологическая усталость, а физиологическое истощение нейроэндокринной системы. Неделя отдыха не может мгновенно восполнить запас нейромедиаторов или восстановить ритм кортизола. Требуется целевой подход для восстановления клеточной энергии." },
        { q: "Что происходит с организмом при выгорании на клеточном уровне?", a: "При выгорании митохондрии (энергостанции клеток) снижают выработку энергии, чтобы защитить клетку от окислительного стресса. Это приводит к системному упадку сил и «туману в голове». Понимание этой биологической «тормозной системы» — ключ к восстановлению через 6D-навигацию." },
        { q: "Почему антидепрессанты не всегда помогают при симптомах выгорания?", a: "Антидепрессанты работают с конкретными нейромедиаторами, но выгорание часто связано с нейровоспалением и усталостью надпочечников, на которые СИОЗС не влияют. Если причина в физиологическом истощении, таблетки могут лишь замаскировать проблему. Мы ищем системные первопричины." },
        { q: "Почему врачи не могут поставить мне четкий диагноз?", a: "Современная медицина узкоспециализирована. Если симптомы затрагивают сразу несколько систем (кишечник, мозг, суставы), каждый специалист видит лишь норму в своей области. Метод 6D соединяет эти точки в единую картину, объясняющую логику вашей болезни." },
        { q: "Что делать, если каждый специалист ставит разный диагноз?", a: "Противоречивые диагнозы обычно означают, что корень проблемы системный. Вместо того чтобы лечить отдельные симптомы, эффективнее найти «общий знаменатель» — обычно это вегетативная дисрегуляция или хроническое воспаление. 6D-диагностика служит картой для поиска этой точки сбоя." },
        { q: "Как связаны аутоиммунные процессы и хроническое воспаление?", a: "Аутоиммунитет часто является финальной стадией затянувшегося системного воспаления, при котором иммунная система теряет способность различать «своих» и «чужих». Триггерами могут быть проблемы с кишечником или хронические вирусы. Наша цель — найти эти триггеры и погасить воспалительный пожар." },
        { q: "Почему симптомы COVID не проходят месяцами?", a: "Лонг-ковид может быть связан с сохранением вируса в организме, микротромбозами или гиперреактивностью иммунной системы. Организм остается в режиме тревоги, из которого не может выйти сам. 6D-навигация помогает определить, какой фактор доминирует именно в вашем случае." },
        { q: "Что такое автономная дисфункция после COVID-19?", a: "Это нарушение работы вегетативной нервной системы, контролирующей сердцебиение и давление. Это ведет к тахикардии (POTS) и головокружениям. Лечение требует системного неврологического подхода, а не просто симптоматической терапии." },
        { q: "Можно ли полностью восстановиться после диагноза Long COVID?", a: "Восстановление требует времени, но оно реально при выявлении системных триггеров. Снижая нейровоспаление и поддерживая митохондрии, мы помогаем телу вернуться в состояние равновесия. Наша консультация дает четкий план действий для этого пути." },
        { q: "Что такое метод 6D-диагностики?", a: "Это целостный анализ вашего здоровья через шесть измерений: биологическое, неврологическое, психологическое, экологическое, образ жизни и историю болезни (время). Соединяя эти слои, мы находим «когерентность» — логику болезни, невидимую при обычных обследованиях." },
        { q: "Как проходит онлайн-консультация при сложных случаях?", a: "Сессия проходит в Zoom и длится 60 минут. До встречи я изучаю ваши анализы и историю, чтобы на консультации сфокусироваться на поиске связей. Вы получаете глубокий анализ состояния и стратегический план действий, что экономит месяцы бесплодных хождений по врачам." },
        { q: "Что я получу за €100 в рамках консультации?", a: "Вы получаете 60-минутную сессию с врачом, имеющим 30-летний опыт работы со сложными случаями. Главное — вы получаете «навигационную карту»: четкое объяснение причин вашего состояния и приоритетный план дальнейших обследований или действий." }
      ]
    },
    sk: {
      name: "MUDr. Erkinbek Džamanbajev, PhD, MBA",
      description: "Odborník na integratívnu medicínu a 6D diagnostiku pre zložité chronické stavy. Viac ako 30 rokov klinickej praxe. EU licencia.",
      serviceName: "6D diagnostická navigácia",
      questions: [
        { q: "Prečo sa cítim vyčerpaný aj po plnohodnotnom spánku?", a: "Tento typ únavy často pramení z mitochondriálnej dysfunkcie alebo stavu „celulárnej hibernácie\". Keď sa telo nachádza v stave chronického stresu, konzervuje energiu na prežitie, čím sa tradičný spánok stáva neefektívnym. Naša 6D diagnostická navigácia pomáha identifikovať, či je príčina v metabolickej alebo neurologickej regulácii." },
        { q: "Prečo sú moje výsledky testov „v norme\", ak sa cítim tak zle?", a: "Štandardné laboratórne testy sú navrhnuté na detekciu akútnej patológie, pričom často prehliadajú subklinické funkčné nerovnováhy, ako je dysfunkcia osi HPA. Môžete trpieť chronickým low-grade zápalom, ktorý ešte nespôsobil poškodenie orgánov, ale vážne ovplyvňuje kvalitu života. Hľadáme fyziologickú logiku mimo referenčných hodnôt." },
        { q: "Čo je dysfunkcia osi HPA a ako ovplyvňuje energiu?", a: "Os HPA (hypotalamo-hypofýzo-adrenálna) je hlavný systém reakcie na stres. Jej dysregulácia vedie k pocitom únavy pri súčasnom vnútornom napätí, kognitívnej dysfunkcii („brain fog\") a zlej regenerácii. Obnova tejto osi je kľúčovým pilierom integratívnej liečby chronického vyčerpania." },
        { q: "Aký je rozdiel medzi syndrómom chronickej únavy (ME/CFS) a bežnou únavou?", a: "ME/CFS je charakterizovaný post-exertional malaise (PEM), kedy aj malá námaha spôsobuje neprimeraný prepad energie. Na rozdiel od bežnej únavy sa nezlepšuje odpočinkom a zahŕňa imunitnú dysreguláciu. Identifikácia špecifických spúšťačov je prvým krokom nášho procesu." },
        { q: "Prečo moja chronická bolesť pretrváva roky napriek liečbe?", a: "Pretrvávajúca bolesť sa často transformuje z tkanivového problému na problém nervového systému, známy ako „centrálna senzitizácia\". V tomto stave sa mozog stáva hyperreaktívnym a interpretuje aj bežné signály ako bolesť. 6D diagnostika hľadá systémové spúšťače tohto stavu pohotovosti." },
        { q: "Čo znamená centrálna senzitizácia v manažmente chronickej bolesti?", a: "Centrálna senzitizácia je stav, kedy sa centrálny nervový systém stáva precitliveným na podnety. To vysvetľuje, prečo sa bolesť môže šíriť alebo pretrvávať aj po zahojení pôvodného zranenia. Efektívna liečba si vyžaduje upokojenie systémovej zápalovej reakcie namiesto lokálnych analgetík." },
        { q: "Prečo analgetiká časom prestávajú účinkovať pri chronických stavoch?", a: "Tradičné lieky proti bolesti sa zameriavajú na symptómy zápalu, nie na základné neurometabolické príčiny. Časom sa vyvíja tolerancia alebo sa bolestivé dráhy v mozgu posilnia natoľko, že ich lieky nedokážu potlačiť. Zameriavame sa na neuroplasticitu a systémové zdravie." },
        { q: "Môže byť chronická bolesť spôsobená dysreguláciou nervového systému?", a: "Áno, veľká časť chronickej bolesti je „nociplastická\", čo znamená, že vzniká v dôsledku zmeneného vnímania bolesti napriek absencii poškodenia tkaniva. Často to súvisí s autonómnym nervovým systémom uviaznutým v režime „bojuj alebo uteč\". Hľadáme cestu k systémovej regulácii." },
        { q: "Prečo dovolenka nepomáha pri profesionálnom vyhorení?", a: "Vyhorenie je fyziologický stav neuroendokrinného vyčerpania, nielen mentálna únava. Krátky odpočinok nedokáže okamžite doplniť neurotransmitery alebo opraviť dysregulovaný kortizolový rytmus. Zotavenie si vyžaduje cielený prístup k obnove bunkovej energie." },
        { q: "Čo sa deje v tele na celulárnej úrovni počas vyhorenia?", a: "Počas vyhorenia môžu mitochondrie znížiť produkciu energie, aby chránili bunky pred oxidačným stresom. Výsledkom je systémový nedostatok energie a kognitívna únava. Pochopenie tohto biologického „brzdného systému\" je nevyhnutné pre proces zotavenia cez 6D navigáciu." },
        { q: "Prečo sú antidepresíva niekedy neúčinné pri symptómoch vyhorenia?", a: "Antidepresíva sa zameriavajú na konkrétne neurotransmitery, ale vyhorenie často zahŕňa neurozápal a adrenálnu únavu, na ktoré SSRI nemusia pôsobiť. Ak je príčinou fyziologické vyčerpanie, chemická intervencia môže len maskovať problém. Hľadáme systémové koreňové príčiny." },
        { q: "Prečo lekári nevedia nájsť jasnú diagnózu mojich symptómov?", a: "Moderná medicína sa často pozerá na telo ako na súbor oddelených orgánov. Ak symptómy zasahujú viacero systémov (trávenie, mozog, kĺby), špecialista môže vidieť len „normálne" výsledky vo svojom odbore. Naša 6D metóda spája tieto body do koherentného obrazu." },
        { q: "Čo robiť, ak mi každý špecialista dáva inú diagnózu?", a: "Konfliktné diagnózy zvyčajne znamenajú, že príčina je systémová. Namiesto potláčania symptómov je efektívnejšie hľadať „spoločného menovateľa" — zvyčajne autonómnu dysreguláciu. 6D diagnostika slúži ako mapa na nájdenie tohto centrálneho bodu zlyhania." },
        { q: "Ako súvisia autoimunitné procesy s chronickým zápalom?", a: "Autoimunita je často konečným štádiom dlhodobého systémového zápalu, kedy imunitný systém stráca schopnosť rozlišovať vlastné tkanivá. Spúšťačom môže byť črevná permeabilita alebo chronická vírusová záťaž. Naším cieľom je identifikovať tieto spúšťače a upokojiť zápal." },
        { q: "Prečo symptómy Long COVID pretrvávajú mesiace?", a: "Long COVID môže zahŕňať perzistenciu vírusu, mikrotromby brániace distribúcii kyslíka a hyperaktivovaný imunitný systém. Telo zostáva v stave pohotovosti, z ktorého nevie samo vystúpiť. 6D navigácia pomáha určiť, ktorý faktor je vo vašom prípade dominantný." },
        { q: "Čo je autonómna dysfunkcia (dysautonómia) po COVID-19?", a: "Post-covidová dysautonómia vzniká, keď vírus zasiahne autonómny nervový systém kontrolujúci mimovoľné funkcie. To vedie k symptómom ako POTS (tachykardia) a závraty. Liečba si vyžaduje systémový neurologický prístup, nielen symptomatickú pomoc." },
        { q: "Je možné úplné zotavenie po diagnóze Long COVID?", a: "Hoci zotavenie si vyžaduje čas, mnohí pacienti pocítia zlepšenie po adresovaní systémových spúšťačov. Znížením neurozápalu a podporou mitochondriálneho zdravia pomáhame telu vrátiť sa k homeostáze. Naša konzultácia poskytuje mapu pre túto cestu." },
        { q: "Čo presne je metóda 6D diagnostickej navigácie?", a: "6D diagnostika je holistické posúdenie zdravia cez šesť dimenzií: biologickú, neurologickú, psychologickú, environmentálnu, životný štýl a anamnézu (čas). Spojením týchto vrstiev nachádzame „koherentnosť" — logiku vašej choroby, ktorá je v bežných vyšetreniach neviditeľná." },
        { q: "Prečo lekári nevedia nájsť jasnú diagnózu mojich symptómov?", a: "Moderná medicína sa často pozerá na telo ako na súbor oddelených orgánov. Ak symptómy zasahujú viacero systémov (trávenie, mozog, kĺby), špecialista môže vidieť len „normálne" výsledky vo svojom odbore. Naša 6D metóda spája tieto body do koherentného obrazu." },
        { q: "Ako prebieha online konzultácia pri zložitých prípadoch?", a: "Stretnutie prebieha cez Zoom a trvá 60 minút. Vopred si preštudujem vašu anamnézu, aby sme sa mohli sústrediť na hľadanie súvislostí. Získate hĺbkovú systémovú analýzu a strategický plán ďalších krokov, čo vám ušetrí mesiace neúspešných pokusov." },
        { q: "Čo získam za poplatok 100 € za konzultáciu?", a: "Získate 60-minútové expertné stretnutie s lekárom s 30-ročnou praxou v zložitých prípadoch. Získate „navigačnú mapu" — jasné vysvetlenie príčin vašich symptómov a prioritný plán ďalšieho postupu, čím zastavíte cyklus neefektívnych vyšetrení." }
      ]
    }
  };

  const current = data[lang] || data.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${baseUrl}/${lang}/#physician`,
        "name": current.name,
        "url": `${baseUrl}/${lang}`,
        "telephone": "+421940270511",
        "image": `${baseUrl}/photo.jpg`,
        "description": current.description,
        "medicalSpecialty": [
          "https://schema.org/PainManagement",
          "https://schema.org/FamilyPractice"
        ],
        "knowsAbout": [
          "Integrative Medicine",
          "Chronic Fatigue Syndrome",
          "Autoimmune Diseases",
          "Long COVID recovery",
          "Burnout Syndrome",
          "HPA-axis dysfunction",
          "Central Sensitization",
          "Autonomic Dysfunction"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "MUDr. (MD)",
            "recognizedBy": {
              "@type": "EducationalOrganization",
              "name": "Kyrgyz State Medical University"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "PhD in Medicine",
            "recognizedBy": {
              "@type": "EducationalOrganization",
              "name": "Military Medical Academy, St. Petersburg"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "MBA",
            "recognizedBy": {
              "@type": "EducationalOrganization",
              "name": "University of Groningen"
            }
          }
        ],
        "knowsLanguage": ["Russian", "English", "Slovak"],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SK",
          "addressLocality": "Bratislava"
        }
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${baseUrl}/${lang}/#business`,
        "name": "Medicine of Coherence",
        "parentOrganization": { "@id": `${baseUrl}/${lang}/#physician` },
        "priceRange": "€100",
        "areaServed": "European Union",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Medical Consultations",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": current.serviceName,
                "description": "60-minute online diagnostic session for complex chronic conditions."
              },
              "price": "100.00",
              "priceCurrency": "EUR"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": current.questions.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SchemaOrg;
