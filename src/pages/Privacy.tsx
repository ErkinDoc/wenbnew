import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type Lang = 'sk' | 'ru' | 'en';

interface Section {
  h: string;
  p: string[];
}

const CONTENT: Record<Lang, { title: string; back: string; updated: string; sections: Section[] }> = {
  sk: {
    title: 'Ochrana osobných údajov (GDPR)',
    back: 'Späť na hlavnú stránku',
    updated: 'Posledná aktualizácia: november 2026',
    sections: [
      { h: 'Prevádzkovateľ', p: ['Dr. Erkinbek Džamanbajev, Piešťany, Slovensko. Kontakt: erkinslovakia@gmail.com, WhatsApp +421 940 270 511.'] },
      { h: 'Aké údaje spracúvam', p: ['Údaje, ktoré mi sami poskytnete: meno, kontakt (e-mail, telefón), odpovede v 6D dotazníku vrátane údajov o zdravotnom stave, a obsah správ cez WhatsApp alebo e-mail.'] },
      { h: 'Účel a právny základ', p: ['Posúdenie vášho dotazníka, príprava predbežného záveru a konzultácie, komunikácia s vami. Údaje o zdraví spracúvam na základe vášho výslovného súhlasu (čl. 9 ods. 2 písm. a) GDPR), ktorý dávate vyplnením a odoslaním dotazníka. Ostatné údaje na základe predzmluvných a zmluvných vzťahov (čl. 6 ods. 1 písm. b) GDPR).'] },
      { h: 'Kto má k údajom prístup', p: ['Iba ja. Na technické zabezpečenie používam služby Google (formuláre), WhatsApp a Zoom. Údaje nepredávam ani neposkytujem na marketing.'] },
      { h: 'Ako dlho údaje uchovávam', p: ['Po dobu nevyhnutnú na poskytnutie služby a splnenie zákonných povinností, prípadne do odvolania súhlasu.'] },
      { h: 'Vaše práva', p: ['Máte právo na prístup k údajom, ich opravu, vymazanie, obmedzenie spracúvania, prenosnosť a právo kedykoľvek odvolať súhlas — stačí napísať na erkinslovakia@gmail.com. Máte tiež právo podať sťažnosť na Úrad na ochranu osobných údajov SR (dataprotection.gov.sk).'] },
      { h: 'Cookies a štatistika', p: ['Stránka nepoužíva reklamné ani sledovacie cookies. Návštevnosť sa meria anonymne, bez cookies (Vercel Web Analytics). Písma sú načítané priamo z tejto stránky, nie zo serverov Google.'] },
    ],
  },
  ru: {
    title: 'Защита персональных данных (GDPR)',
    back: 'На главную',
    updated: 'Последнее обновление: ноябрь 2026',
    sections: [
      { h: 'Оператор данных', p: ['Др. Эркинбек Джаманбаев (Dr. Erkinbek Dzhamanbaev), Пьештяни, Словакия. Контакт: erkinslovakia@gmail.com, WhatsApp +421 940 270 511.'] },
      { h: 'Какие данные я обрабатываю', p: ['Только те, что вы сообщаете сами: имя, контакты (e-mail, телефон), ответы в 6D-анкете, включая сведения о здоровье, и переписку в WhatsApp или по e-mail.'] },
      { h: 'Цель и правовое основание', p: ['Изучение вашей анкеты, подготовка предварительного заключения и консультации, связь с вами. Данные о здоровье обрабатываются на основании вашего явного согласия (ст. 9 п. 2 «a» GDPR), которое вы даёте, заполняя и отправляя анкету. Остальные данные — в рамках преддоговорных и договорных отношений (ст. 6 п. 1 «b» GDPR).'] },
      { h: 'Кто имеет доступ', p: ['Только я. Для технической работы используются сервисы Google (формы), WhatsApp и Zoom. Данные не продаются и не передаются для рекламы.'] },
      { h: 'Срок хранения', p: ['В течение срока, необходимого для оказания услуги и выполнения требований закона, либо до отзыва согласия.'] },
      { h: 'Ваши права', p: ['Вы вправе получить доступ к своим данным, исправить, удалить их, ограничить обработку, перенести данные и в любой момент отозвать согласие — достаточно написать на erkinslovakia@gmail.com. Также можно подать жалобу в Управление по защите персональных данных Словакии (dataprotection.gov.sk).'] },
      { h: 'Cookies и статистика', p: ['Сайт не использует рекламные и отслеживающие cookies. Посещаемость считается анонимно, без cookies (Vercel Web Analytics). Шрифты загружаются с этого сайта, а не с серверов Google.'] },
    ],
  },
  en: {
    title: 'Privacy policy (GDPR)',
    back: 'Back to home page',
    updated: 'Last updated: November 2026',
    sections: [
      { h: 'Data controller', p: ['Dr. Erkinbek Dzhamanbaev, Piešťany, Slovakia. Contact: erkinslovakia@gmail.com, WhatsApp +421 940 270 511.'] },
      { h: 'What data I process', p: ['Only what you provide: name, contact details (email, phone), answers in the 6D questionnaire including health information, and messages sent via WhatsApp or email.'] },
      { h: 'Purpose and legal basis', p: ['Reviewing your questionnaire, preparing a preliminary conclusion and consultation, and communicating with you. Health data is processed on the basis of your explicit consent (Art. 9(2)(a) GDPR), given by completing and submitting the questionnaire. Other data is processed for pre-contractual and contractual purposes (Art. 6(1)(b) GDPR).'] },
      { h: 'Who has access', p: ['Only me. Google (forms), WhatsApp and Zoom are used as technical services. Data is never sold or used for advertising.'] },
      { h: 'Retention', p: ['For as long as needed to provide the service and meet legal obligations, or until you withdraw consent.'] },
      { h: 'Your rights', p: ['You may access, correct or delete your data, restrict processing, request portability and withdraw consent at any time — just write to erkinslovakia@gmail.com. You may also lodge a complaint with the Slovak Data Protection Office (dataprotection.gov.sk).'] },
      { h: 'Cookies and statistics', p: ['The site uses no advertising or tracking cookies. Visits are counted anonymously without cookies (Vercel Web Analytics). Fonts are served from this site, not from Google servers.'] },
    ],
  },
};

export function Privacy() {
  const { i18n } = useTranslation();
  const code = (i18n.language || 'sk').split('-')[0];
  const lang: Lang = code === 'ru' || code === 'en' ? code : 'sk';
  const c = CONTENT[lang];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <html lang={lang} />
        <title>{c.title} | Dr. Erkinbek Džamanbajev</title>
        <meta name="description" content={c.sections[2].p[0].slice(0, 155)} />
        <link rel="canonical" href="https://www.drerkin.eu/privacy" />
      </Helmet>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-[14px] text-[#68A07C] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> {c.back}
        </Link>
        <h1 className="text-[32px] md:text-[40px] font-serif font-bold text-[#1A365D] mb-2">{c.title}</h1>
        <p className="text-[13px] text-[#718096] mb-10">{c.updated}</p>
        <div className="space-y-8">
          {c.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-[20px] font-serif font-semibold text-[#1A365D] mb-2">{s.h}</h2>
              {s.p.map((t, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-[#4A5568]">{t}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
