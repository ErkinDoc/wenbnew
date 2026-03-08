import { useTranslation } from 'react-i18next';
import Head from 'next/head';

interface SEOHeadProps {
  page?: 'home' | 'services' | 'method' | 'faq' | 'contact';
}

export function SEOHead({ page = 'home' }: SEOHeadProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'sk';
  const baseUrl = 'https://www.drerkin.eu';

  // Meta данные по языкам и страницам
  const meta: Record<string, Record<string, { title: string; description: string }>> = {
    home: {
      sk: {
        title: 'Dr. Erkinbek Džamanbajev | Medicína Koherencie | Chronická bolesť Piešťany',
        description: 'Expert na chronickú bolesť, fibromyalgiu a komplexné diagnózy. 30+ rokov praxe. Online konzultácie v celej EÚ. 6D diagnostická navigácia.'
      },
      ru: {
        title: 'Др. Эркинбек Джаманбаев | Медицина Когерентности | Хроническая боль',
        description: 'Эксперт по хронической боли, фибромиалгии и сложным диагнозам. 30+ лет практики. Онлайн-консультации по всей Европе. 6D-диагностика.'
      },
      en: {
        title: 'Dr. Erkinbek Dzhamanbaev | Medicine of Coherence | Chronic Pain Expert',
        description: 'Expert in chronic pain, fibromyalgia, and complex diagnoses. 30+ years of practice. Online consultations across EU. 6D Diagnostic Navigation.'
      }
    },
    services: {
      sk: {
        title: '6D Diagnostika | Služby | Dr. Erkin Piešťany',
        description: '60-minútová hĺbková diagnostická konzultácia. Systémová analýza chronickej bolesti a únavy. Online alebo osobne v Piešťanoch.'
      },
      ru: {
        title: '6D Диагностика | Услуги | Др. Эркин',
        description: '60-минутная глубокая диагностическая консультация. Системный анализ хронической боли и усталости. Онлайн или лично.'
      },
      en: {
        title: '6D Diagnostics | Services | Dr. Erkin',
        description: '60-minute deep diagnostic consultation. Systemic analysis of chronic pain and fatigue. Online or in-person in Piešťany, Slovakia.'
      }
    },
    method: {
      sk: {
        title: '6D Navigačný Systém | Metóda | Dr. Erkin',
        description: 'Šesť vektorov zdravia pre komplexné prípady. Inovatívna metóda diagnostiky chronickej bolesti a fibromyalgie.'
      },
      ru: {
        title: 'Система 6D-навигации | Метод | Др. Эркин',
        description: 'Шесть векторов здоровья для сложных случаев. Инновационный метод диагностики хронической боли и фибромиалгии.'
      },
      en: {
        title: '6D Navigation System | Method | Dr. Erkin',
        description: 'Six vectors of health for complex cases. Innovative diagnostic method for chronic pain and fibromyalgia.'
      }
    },
    faq: {
      sk: {
        title: 'Často Kladené Otázky | FAQ | Dr. Erkin',
        description: 'Odpovede na otázky o chronickej únave, bolesti, vyhorení a 6D diagnostike. Prečo som unavený? Prečo mi nepomáha liečba?'
      },
      ru: {
        title: 'Часто Задаваемые Вопросы | FAQ | Др. Эркин',
        description: 'Ответы на вопросы о хронической усталости, боли, выгорании и 6D-диагностике. Почему я устал? Почему лечение не помогает?'
      },
      en: {
        title: 'Frequently Asked Questions | FAQ | Dr. Erkin',
        description: 'Answers about chronic fatigue, pain, burnout, and 6D diagnostics. Why am I tired? Why isn\'t treatment helping?'
      }
    },
    contact: {
      sk: {
        title: 'Kontakt | Objednať Konzultáciu | Dr. Erkin Piešťany',
        description: 'Objednajte sa na 6D diagnostickú konzultáciu. Online cez Zoom alebo osobne v Piešťanoch. WhatsApp: +421 940 270 511.'
      },
      ru: {
        title: 'Контакт | Записаться на Консультацию | Др. Эркин',
        description: 'Запишитесь на 6D диагностическую консультацию. Онлайн через Zoom или лично. WhatsApp: +421 940 270 511.'
      },
      en: {
        title: 'Contact | Book Consultation | Dr. Erkin Slovakia',
        description: 'Book your 6D diagnostic consultation. Online via Zoom or in-person in Piešťany, Slovakia. WhatsApp: +421 940 270 511.'
      }
    }
  };

  const currentMeta = meta[page]?.[currentLang] || meta.home.sk;
  
  // URL для текущей страницы
  const getPageUrl = (lang: string) => {
    const langParam = lang === 'sk' ? '' : `?lang=${lang}`;
    return `${baseUrl}${langParam}`;
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{currentMeta.title}</title>
      <meta name="title" content={currentMeta.title} />
      <meta name="description" content={currentMeta.description} />
      <meta name="author" content="Dr. Erkinbek Dzhamanbaev" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLang} />
      
      {/* Canonical */}
      <link rel="canonical" href={getPageUrl(currentLang)} />
      
      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang="sk" href={getPageUrl('sk')} />
      <link rel="alternate" hrefLang="ru" href={getPageUrl('ru')} />
      <link rel="alternate" hrefLang="en" href={getPageUrl('en')} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={getPageUrl(currentLang)} />
      <meta property="og:title" content={currentMeta.title} />
      <meta property="og:description" content={currentMeta.description} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Dr. Erkin - Medicine of Coherence" />
      <meta property="og:locale" content={currentLang === 'sk' ? 'sk_SK' : currentLang === 'ru' ? 'ru_RU' : 'en_US'} />
      <meta property="og:locale:alternate" content="sk_SK" />
      <meta property="og:locale:alternate" content="ru_RU" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={getPageUrl(currentLang)} />
      <meta name="twitter:title" content={currentMeta.title} />
      <meta name="twitter:description" content={currentMeta.description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
      
      {/* Medical/Health specific */}
      <meta name="medical-specialty" content="Pain Medicine, Internal Medicine, Integrative Medicine" />
      <meta name="geo.region" content="SK" />
      <meta name="geo.placename" content="Piešťany" />
      <meta name="geo.position" content="48.7921;17.8375" />
      <meta name="ICBM" content="48.7921, 17.8375" />
    </Head>
  );
}
