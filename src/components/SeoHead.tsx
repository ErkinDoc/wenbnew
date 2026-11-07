import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SITE_URL, homePath, type Lang } from '@/i18n';
import { WHATSAPP_NUMBER } from '@/lib/contact';

const OG_LOCALE: Record<Lang, string> = { sk: 'sk_SK', ru: 'ru_RU', en: 'en_GB' };

const NAME: Record<Lang, string> = {
  sk: 'Dr. Erkinbek Džamanbajev',
  ru: 'Др. Эркинбек Джаманбаев',
  en: 'Dr. Erkinbek Dzhamanbaev',
};

const absUrl = (lang: Lang) => `${SITE_URL}${homePath(lang)}`;

export function SeoHead({ lang }: { lang: Lang }) {
  const { t } = useTranslation();
  const title = t('seo.title');
  const description = t('seo.description');
  const url = absUrl(lang);
  const image = `${SITE_URL}/og-${lang}.jpg`;
  const faq = (t('faq.items', { returnObjects: true }) as { question: string; answer: string }[]) || [];
  const conditions = (t('conditions.items', { returnObjects: true }) as { title: string }[]) || [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'Medicine of Coherence — Dr. Erkin',
        inLanguage: ['sk', 'ru', 'en'],
      },
      {
        '@type': ['Physician', 'MedicalBusiness'],
        '@id': `${SITE_URL}/#physician`,
        name: `${NAME[lang]}, PhD, MBA`,
        alternateName: Object.values(NAME).filter((n) => n !== NAME[lang]).concat('Dr. Erkin'),
        brand: 'Medicine of Coherence',
        url,
        image: `${SITE_URL}/dr-erkin.jpg`,
        description,
        telephone: `+${WHATSAPP_NUMBER}`,
        email: 'erkinslovakia@gmail.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Piešťany', postalCode: '921 01', addressCountry: 'SK' },
        areaServed: [{ '@type': 'Country', name: 'Slovakia' }, { '@type': 'Place', name: 'European Union' }],
        availableLanguage: ['sk', 'ru', 'en'],
        medicalSpecialty: ['Integrative Medicine', 'Pain Management'],
        knowsAbout: conditions.map((c) => c.title),
        priceRange: '0–100 €',
        makesOffer: [
          {
            '@type': 'Offer',
            name: t('services.items.0.title'),
            price: '0',
            priceCurrency: 'EUR',
          },
          {
            '@type': 'Offer',
            name: t('services.items.1.title'),
            price: '100',
            priceCurrency: 'EUR',
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: lang,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#physician` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: lang,
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="sk" href={absUrl('sk')} />
      <link rel="alternate" hrefLang="ru" href={absUrl('ru')} />
      <link rel="alternate" hrefLang="en" href={absUrl('en')} />
      <link rel="alternate" hrefLang="x-default" href={absUrl('sk')} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Medicine of Coherence — Dr. Erkin" />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={t('seo.ogTitle')} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('seo.ogTitle')} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
