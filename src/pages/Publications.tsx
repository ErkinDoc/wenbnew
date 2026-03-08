import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, Star, ArrowLeft, Award } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  description: {
    ru: string;
    sk: string;
    en: string;
  };
  audience: {
    ru: string;
    sk: string;
    en: string;
  };
  url: string;
  language: string;
  priority: 'high' | 'medium';
}

export function Publications() {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] || 'en') as 'ru' | 'sk' | 'en';

  const books: Book[] = [
    {
      id: '1',
      title: 'Fibromyalgia & Myofascial Pain',
      description: {
        ru: 'Практические стратегии для управления симптомами фибромиалгии и миофасциальной боли. Последние исследования, методы самопомощи и механизмы адаптации. Незаменимый ресурс для всех, кто живёт с хронической болью.',
        sk: 'Praktické stratégie pre zvládanie príznakov fibromyalgie a myofasciálnej bolesti. Najnovší výskum, metódy sebapomoci a mechanizmy adaptácie.',
        en: 'Practical strategies for managing fibromyalgia and myofascial pain symptoms. Latest research, self-care methods and coping mechanisms. Essential resource for anyone living with chronic pain.'
      },
      audience: {
        ru: 'Для пациентов с хронической болью и фибромиалгией',
        sk: 'Pre pacientov s chronickou bolesťou a fibromyalgiou',
        en: 'For patients with chronic pain and fibromyalgia'
      },
      url: 'https://ko-fi.com/s/7d6bde3113',
      language: 'EN',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Empowering Caregivers',
      description: {
        ru: 'Руководство для семей по навигации в процессе реабилитации. Книга написана понятным языком, разбивая сложную структуру реабилитации на простые разделы. Практические инструменты для поддержки близких.',
        sk: 'Sprievodca pre rodiny v procese rehabilitácie. Kniha je napísaná zrozumiteľným jazykom, rozdeľuje komplexnú rehabilitačnú štruktúru na jednoduché časti.',
        en: 'A family\'s guide to navigating the rehabilitation journey. Written in clear, accessible language, breaking down complex rehabilitation framework into digestible sections.'
      },
      audience: {
        ru: 'Для семей и тех, кто ухаживает за близкими',
        sk: 'Pre rodiny a opatrovateľov',
        en: 'For families and caregivers'
      },
      url: 'https://ko-fi.com/s/7f62c663da',
      language: 'EN',
      priority: 'high'
    },
    {
      id: '3',
      title: 'Mind Transformation: Theory & Practice',
      description: {
        ru: 'Комплексное руководство по пониманию и преодолению жизненных трудностей. Автор делится инсайтами из своего пути, инструментами для контроля жизни, смелости и правильных решений.',
        sk: 'Komplexný sprievodca pochopením a prekonávaním životných výziev. Autor zdieľa poznatky zo svojej cesty, nástroje pre kontrolu života.',
        en: 'Comprehensive guide to understanding and overcoming life\'s challenges. Author shares insights from his journey, tools for life control, courage and right choices.'
      },
      audience: {
        ru: 'Для личностного роста и трансформации мышления',
        sk: 'Pre osobný rast a transformáciu myslenia',
        en: 'For personal growth and mindset transformation'
      },
      url: 'https://ko-fi.com/s/3fe60a8762',
      language: 'EN',
      priority: 'medium'
    },
    {
      id: '4',
      title: 'Neurorehabilitation Guide',
      description: {
        ru: 'Современные концепции нейрореабилитации: классификация неврологических заболеваний, анатомия, причины, мировые методы реабилитации, психологические аспекты. Для профессионалов и пациентов.',
        sk: 'Moderné koncepty neurorehabilitácie: klasifikácia neurologických ochorení, anatómia, príčiny, svetové metódy rehabilitácie. Pre profesionálov aj pacientov.',
        en: 'Modern concepts of neurorehabilitation: classification of neurological diseases, anatomy, causes, world rehabilitation methods, psychological aspects. For professionals and patients.'
      },
      audience: {
        ru: 'Для специалистов и пациентов с неврологическими проблемами',
        sk: 'Pre odborníkov a pacientov s neurologickými problémami',
        en: 'For specialists and patients with neurological issues'
      },
      url: 'https://ko-fi.com/erkindoc/shop',
      language: 'EN',
      priority: 'medium'
    },
    {
      id: '5',
      title: 'Rehabilitation Principles',
      description: {
        ru: 'Основы реабилитации: от стационара до амбулатории. Книга развенчивает мифы, объясняет диапазон возможностей и результаты. Написана простым языком для профессионалов и пациентов.',
        sk: 'Základy rehabilitácie: od nemocnice po ambulanciu. Kniha vyvracia mýty, vysvetľuje možnosti a výsledky. Napísaná jednoduchým jazykom.',
        en: 'Rehabilitation foundations: from inpatient to outpatient. Book debunks myths, explains range of possibilities and outcomes. Written in easy language for professionals and patients.'
      },
      audience: {
        ru: 'Для пациентов в процессе реабилитации',
        sk: 'Pre pacientov v procese rehabilitácie',
        en: 'For patients in rehabilitation process'
      },
      url: 'https://ko-fi.com/erkindoc/shop',
      language: 'EN',
      priority: 'medium'
    }
  ];

  const content = {
    ru: {
      pageTitle: 'Публикации | Dr. Erkinbek Dzhamanbayev',
      heroTitle: 'Публикации',
      heroSubtitle: 'Книги и руководства по управлению хронической болью и восстановлению здоровья',
      recommended: 'Рекомендуем',
      buyButton: 'Купить на Ko-fi',
      viewAll: 'Все публикации в магазине',
      ctaTitle: 'Хотите персональную консультацию?',
      ctaSubtitle: 'Запишитесь на 6D-диагностику для индивидуального плана восстановления',
      ctaButton: 'Записаться на консультацию',
      backHome: 'На главную'
    },
    sk: {
      pageTitle: 'Publikácie | MUDr. Erkinbek Džamanbajev',
      heroTitle: 'Publikácie',
      heroSubtitle: 'Knihy a príručky o zvládaní chronickej bolesti a obnove zdravia',
      recommended: 'Odporúčame',
      buyButton: 'Kúpiť na Ko-fi',
      viewAll: 'Všetky publikácie v obchode',
      ctaTitle: 'Chcete osobnú konzultáciu?',
      ctaSubtitle: 'Objednajte sa na 6D diagnostiku pre individuálny plán obnovy',
      ctaButton: 'Objednať konzultáciu',
      backHome: 'Domov'
    },
    en: {
      pageTitle: 'Publications | Dr. Erkinbek Dzhamanbayev',
      heroTitle: 'Publications',
      heroSubtitle: 'Books and guides on chronic pain management and health recovery',
      recommended: 'Recommended',
      buyButton: 'Buy on Ko-fi',
      viewAll: 'All publications in store',
      ctaTitle: 'Want a personal consultation?',
      ctaSubtitle: 'Book a 6D diagnostic session for an individual recovery plan',
      ctaButton: 'Book consultation',
      backHome: 'Back to Home'
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.heroSubtitle} />
      </Helmet>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-[#1A365D] hover:text-[#68A07C] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t.backHome}</span>
            </Link>
            <a 
              href="/" 
              className="flex flex-col items-end"
            >
              <span className="text-[16px] font-serif font-bold text-[#1A365D]">
                Medicine of Coherence
              </span>
              <span className="text-[10px] text-[#68A07C] font-sans tracking-wider uppercase">
                Dr. Erkinbek Dzhamanbaev
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1A365D] to-[#2D4A6F] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-[#68A07C]" />
              <Award className="w-6 h-6 text-[#C9A227]" />
            </div>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-serif font-bold mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-[18px] lg:text-[20px] text-white/80 max-w-2xl mx-auto">
              {t.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Book Cover Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#1A365D] via-[#2D4A6F] to-[#1A365D] flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/30" />
                  {book.priority === 'high' && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#C9A227] text-white px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-white" />
                      <span className="text-[11px] font-bold uppercase">{t.recommended}</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold rounded">
                      {book.language}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[20px] font-serif font-bold text-[#1A365D] mb-3">
                    {book.title}
                  </h3>
                  <p className="text-[14px] text-[#4A5568] leading-relaxed mb-4 flex-1">
                    {book.description[lang] || book.description.en}
                  </p>
                  <p className="text-[12px] text-[#68A07C] font-medium mb-6">
                    {book.audience[lang] || book.audience.en}
                  </p>
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#1A365D] hover:bg-[#2C5282] text-white text-[14px] font-medium rounded-xl transition-colors"
                  >
                    {t.buyButton}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="https://ko-fi.com/erkindoc/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1A365D] text-[#1A365D] hover:bg-[#1A365D] hover:text-white font-medium rounded-xl transition-colors"
            >
              {t.viewAll}
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[28px] sm:text-[36px] font-serif font-bold text-[#1A365D] mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-[16px] text-[#4A5568] mb-8 max-w-xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#68A07C] hover:bg-[#5A8F6E] text-white font-medium rounded-xl transition-colors shadow-lg"
            >
              {t.ctaButton}
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A365D] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[14px] text-white/60">
            © 2026 Dr. Erkinbek Dzhamanbaev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
