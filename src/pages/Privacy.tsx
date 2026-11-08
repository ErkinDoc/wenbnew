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
      { h: 'Kto má k údajom prístup', p: ['Iba ja. Ako technických sprostredkovateľov používam: Google (Google Formuláre a e-mail — uloženie odpovedí z dotazníka), WhatsApp (správy, šifrované end-to-end), Zoom (videokonzultácie) a Vercel (hosting webu, anonymná štatistika bez cookies). Údaje nepredávam ani neposkytujem na marketing.'] },
      { h: 'Prenos mimo EÚ', p: ['Niektorí poskytovatelia (Google, Zoom, Vercel) môžu údaje spracúvať aj mimo EÚ, najmä v USA. Prenos sa opiera o rámec EÚ – USA na ochranu údajov (Data Privacy Framework) alebo o štandardné zmluvné doložky, ktoré títo poskytovatelia uplatňujú.'] },
      { h: 'Ako dlho údaje uchovávam', p: ['Odpovede z dotazníka, po ktorých nenasleduje konzultácia: najviac 12 mesiacov od vyplnenia, potom ich vymažem. Ak konzultácia prebehne: po dobu, ktorú vyžadujú predpisy o zdravotnej dokumentácii (zákon č. 576/2004 Z. z.). Správy cez WhatsApp a e-mail: najviac 24 mesiacov od posledného kontaktu.', 'Odvolanie súhlasu zastaví ďalšie spracúvanie; nevzťahuje sa na údaje, ktoré musím uchovávať zo zákona.'] },
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
      { h: 'Кто имеет доступ', p: ['Только я. Как технические обработчики используются: Google (Google Формы и e-mail — хранение ответов анкеты), WhatsApp (сообщения, сквозное шифрование), Zoom (видеоконсультации) и Vercel (хостинг сайта, анонимная статистика без cookies). Данные не продаются и не передаются для рекламы.'] },
      { h: 'Передача за пределы ЕС', p: ['Некоторые сервисы (Google, Zoom, Vercel) могут обрабатывать данные и за пределами ЕС, прежде всего в США. Передача основана на рамочном соглашении ЕС – США о защите данных (Data Privacy Framework) или на стандартных договорных положениях, которые применяют эти сервисы.'] },
      { h: 'Срок хранения', p: ['Ответы анкеты, после которых консультации не было: не более 12 месяцев с момента заполнения, затем удаляются. Если консультация состоялась: в течение срока, установленного правилами о медицинской документации (закон Словакии № 576/2004 Z. z.). Переписка в WhatsApp и по e-mail: не более 24 месяцев с последнего контакта.', 'Отзыв согласия прекращает дальнейшую обработку, но не отменяет обязанности хранить данные, предусмотренные законом.'] },
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
      { h: 'Who has access', p: ['Only me. Technical processors: Google (Google Forms and email — storing questionnaire answers), WhatsApp (messages, end-to-end encrypted), Zoom (video consultations) and Vercel (website hosting, anonymous cookieless statistics). Data is never sold or used for advertising.'] },
      { h: 'Transfers outside the EU', p: ['Some providers (Google, Zoom, Vercel) may process data outside the EU, mainly in the USA. Transfers rely on the EU–US Data Privacy Framework or on the standard contractual clauses these providers apply.'] },
      { h: 'Retention', p: ['Questionnaire answers not followed by a consultation: at most 12 months after submission, then deleted. If a consultation takes place: for the period required by the rules on medical records (Slovak Act No. 576/2004 Coll.). WhatsApp and email messages: at most 24 months after the last contact.', 'Withdrawing consent stops further processing but does not override data retention required by law.'] },
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
        <Link to="/" className="inline-flex items-center gap-2 text-[14px] text-[#3F7354] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> {c.back}
        </Link>
        <h1 className="text-[32px] md:text-[40px] font-serif font-bold text-[#1A365D] mb-2">{c.title}</h1>
        <p className="text-[13px] text-[#5A6577] mb-10">{c.updated}</p>
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
