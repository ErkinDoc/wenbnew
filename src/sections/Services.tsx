import { motion } from 'framer-motion';
import { Check, Star, FileText, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t, i18n } = useTranslation();

  const packages = t('services.packages', { returnObjects: true }) as Array<{
    name: string;
    subtitle: string;
    price: string;
    includes?: string;
    badge?: string;
    features: string[];
    cta: string;
    formUrl: string;
  }>;

  // Функция определения ссылки по жесткому условию URL
  const getFinalUrl = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      // Если в адресе есть /sk или /en — это ЕВРОПЕЙСКАЯ форма
      if (url.includes('/sk') || url.includes('/en')) {
        return 'https://forms.gle/13N35XNrZKdvnJJPA';
      }
    }
    // Во всех остальных случаях — РУССКАЯ форма
    return 'https://forms.gle/Gb6nj1SURsMk6G9c7';
  };

  return (
    <section id="services" className="w-full py-24 lg:py-32 bg-white">
      <div className="section-container">
        <div className="section-inner">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-[#1A365D] mb-4">
              {t('services.title')}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#4A5568] max-w-2xl mx-auto font-sans">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {Array.isArray(packages) && packages.map((pkg, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#1A365D] transition-all"
              >
                <h3 className="text-[22px] font-serif font-bold text-[#1A365D] mb-1">{pkg.name}</h3>
                <div className="text-[40px] font-serif font-bold text-[#1A365D] mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#4A5568]">
                      <Check className="w-5 h-5 text-[#68A07C] flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getFinalUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-sans font-semibold text-[14px] bg-[#1A365D] text-white flex items-center justify-center gap-2"
                >
                  {/* Проверочный текст: если вы видите TEST — значит код обновился */}
                  {pkg.cta} {typeof window !== 'undefined' && window.location.href.includes('/sk') ? '(SK)' : ''}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
