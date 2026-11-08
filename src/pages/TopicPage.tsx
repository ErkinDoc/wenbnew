import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'sonner';
import { AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, UserRound } from 'lucide-react';

import { Navigation } from '../sections/Navigation';
import { Footer } from '../sections/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { SITE_URL, homePath, type Lang } from '@/i18n';
import { TOPICS, TOPIC_UI, LAST_REVIEWED } from '@/content/topics';
import { topicPath, type TopicId } from '@/content/slugs';
import { WHATSAPP_NUMBER, whatsappUrl } from '@/lib/contact';

const OG_LOCALE: Record<Lang, string> = { sk: 'sk_SK', ru: 'ru_RU', en: 'en_GB' };
const abs = (p: string) => `${SITE_URL}${p === '/' ? '/' : p}`;

export function TopicPage({ id, lang }: { id: TopicId; lang: Lang }) {
  const { i18n, t } = useTranslation();
  const [, force] = useState(0);
  const c = TOPICS[id][lang];
  const ui = TOPIC_UI[lang];
  const url = abs(topicPath(id, lang));
  const formUrl = t('contact.form.url');

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang).then(() => force((n) => n + 1));
  }, [lang, i18n]);

  const openForm = () => {
    if (formUrl) window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  const physician = {
    '@type': 'Physician',
    '@id': `${SITE_URL}/#physician`,
    name: ui.authorName,
    url: abs(homePath(lang)),
    image: `${SITE_URL}/dr-erkin.jpg`,
    telephone: `+${WHATSAPP_NUMBER}`,
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      physician,
      {
        '@type': 'MedicalWebPage',
        '@id': `${url}#webpage`,
        url,
        name: c.title,
        headline: c.h1,
        description: c.description,
        inLanguage: lang,
        lastReviewed: LAST_REVIEWED,
        dateModified: LAST_REVIEWED,
        author: { '@id': `${SITE_URL}/#physician` },
        reviewedBy: { '@id': `${SITE_URL}/#physician` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
        ...(c.condition ? { about: { '@type': 'MedicalCondition', name: c.condition } } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: ui.home, item: abs(homePath(lang)) },
          { '@type': 'ListItem', position: 2, name: c.short, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: lang,
        mainEntity: c.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  const cta = (
    <div className="my-12 rounded-2xl bg-[#1A365D] text-white p-6 sm:p-8">
      <h2 className="text-[22px] sm:text-[26px] font-serif font-bold mb-2 !text-white">{ui.ctaTitle}</h2>
      <p className="text-[15px] text-white/80 font-sans leading-relaxed mb-6">{ui.ctaText}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4A7F5E] hover:bg-[#3F7354] rounded-xl font-semibold text-[15px] transition-colors"
        >
          {ui.ctaForm} <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href={whatsappUrl(t('whatsapp.defaultMessage'))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold text-[15px] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> {ui.ctaWa}
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <Helmet>
        <html lang={lang} />
        <title>{c.title}</title>
        <meta name="description" content={c.description} />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="sk" href={abs(topicPath(id, 'sk'))} />
        <link rel="alternate" hrefLang="ru" href={abs(topicPath(id, 'ru'))} />
        <link rel="alternate" hrefLang="en" href={abs(topicPath(id, 'en'))} />
        <link rel="alternate" hrefLang="x-default" href={abs(topicPath(id, 'sk'))} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Medicine of Coherence — Dr. Erkin" />
        <meta property="og:locale" content={OG_LOCALE[lang]} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={c.h1} />
        <meta property="og:description" content={c.description} />
        <meta property="og:image" content={`${SITE_URL}/og-${lang}.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navigation onAssessmentClick={openForm} />

      <main className="pt-28 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="breadcrumb" className="mb-6 text-[13px] font-sans text-[#5A6577]">
            <ol className="flex items-center gap-1 flex-wrap">
              <li>
                <Link to={homePath(lang)} className="hover:text-[#1A365D]">{ui.home}</Link>
              </li>
              <li aria-hidden><ChevronRight className="w-3.5 h-3.5" /></li>
              <li aria-current="page" className="text-[#1A365D]">{c.short}</li>
            </ol>
          </nav>

          <h1 className="text-[32px] sm:text-[42px] leading-tight font-serif font-bold text-[#1A365D] mb-5">{c.h1}</h1>
          <p className="text-[18px] sm:text-[20px] leading-relaxed text-[#2D3748] font-sans mb-4">{c.lead}</p>
          <p className="text-[13px] text-[#5A6577] font-sans mb-10">
            {ui.authorName} · {ui.reviewed}: <time dateTime={LAST_REVIEWED}>{ui.reviewedDate}</time>
          </p>

          {c.sections.map((s, i) => (
            <section key={s.h} className="mb-10">
              <h2 className="text-[24px] sm:text-[28px] font-serif font-bold text-[#1A365D] mb-4">{s.h}</h2>
              {s.p?.map((p) => (
                <p key={p.slice(0, 24)} className="text-[16px] leading-relaxed text-[#4A5568] font-sans mb-4">{p}</p>
              ))}
              {s.list && (
                <ul className="space-y-3">
                  {s.list.map((li) => (
                    <li key={li} className="flex gap-3 text-[16px] leading-relaxed text-[#4A5568] font-sans">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-[#68A07C]" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
              {i === 1 && cta}
            </section>
          ))}

          <aside className="mb-12 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <h2 className="flex items-center gap-2 text-[20px] font-serif font-bold text-amber-900 mb-3">
              <AlertTriangle className="w-5 h-5" /> {c.redFlagsTitle}
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-amber-900 font-sans">
              {c.redFlags.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </aside>

          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-serif font-bold text-[#1A365D] mb-4">{ui.faq}</h2>
            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {c.faq.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="cursor-pointer list-none flex justify-between gap-4 text-[17px] font-semibold text-[#1A365D] font-sans">
                    {f.q}
                    <ChevronRight className="w-5 h-5 shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#4A5568] font-sans">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {id !== 'diagnostics' && cta}

          <section className="mb-12 flex gap-4 rounded-2xl bg-[#F7F9FC] border border-[#E2E8F0] p-6">
            <img
              src="/dr-erkin.webp"
              alt={ui.authorName}
              width={72}
              height={72}
              loading="lazy"
              className="w-[72px] h-[72px] rounded-full object-cover shrink-0"
            />
            <div>
              <p className="flex items-center gap-1.5 text-[12px] uppercase tracking-wider text-[#3F7354] font-sans font-medium mb-1">
                <UserRound className="w-3.5 h-3.5" /> {ui.author}
              </p>
              <p className="text-[17px] font-serif font-bold text-[#1A365D] mb-1">{ui.authorName}</p>
              <p className="text-[14px] leading-relaxed text-[#4A5568] font-sans">{ui.authorBio}</p>
            </div>
          </section>

          <nav className="mb-10">
            <h2 className="text-[20px] font-serif font-bold text-[#1A365D] mb-3">{ui.related}</h2>
            <ul className="flex flex-wrap gap-3">
              {c.related.map((r) => (
                <li key={r}>
                  <Link
                    to={topicPath(r, lang)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#1A365D]/20 text-[14px] text-[#1A365D] hover:bg-[#1A365D] hover:text-white transition-colors font-sans"
                  >
                    {TOPICS[r][lang].short} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-[13px] text-[#5A6577] font-sans leading-relaxed">{t('footer.disclaimerText')}</p>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
    </div>
  );
}
