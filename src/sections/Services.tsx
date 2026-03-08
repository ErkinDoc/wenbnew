import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, Video, ArrowRight } from 'lucide-react';

export function Services() {
  const { t } = useTranslation();

  // Получаем данные пакета услуг из JSON
  const packages = t('services.packages', { returnObjects: true }) as any[];
  const mainPackage = packages[0];

  return (
    <section id="services" className="w-full py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[12px] font-sans font-bold tracking-[0.2em] uppercase text-[#68A07C] mb-4 block"
          >
            {t('services.subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[42px] font-serif font-bold text-[#1A365D] mb-4"
          >
            {t('services.title')}
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-[#E2E8F0] relative"
          >
            {/* Декоративная плашка сверху */}
            <div className="bg-[#1A365D] py-3 px-6 text-center">
              <span className="text-white text-[12px] font-sans font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <Video className="w-4 h-4" />
                {t('services.note')}
              </span>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-[28px] font-serif font-bold text-[#1A365D] mb-2">
                    {mainPackage.name}
                  </h3>
                  <p className="text-[#68A07C] font-sans font-bold text-[16px]">
                    {mainPackage.subtitle}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-[48px] font-serif font-bold text-[#1A365D]">
                    {mainPackage.price}
                  </span>
                </div>
              </div>

              {/* Список преимуществ */}
              <div className="space-y-4 mb-10">
                {mainPackage.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#68A07C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#68A07C]" />
                    </div>
                    <p className="text-[16px] text-[#4A5568] font-sans">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Кнопка действия */}
              <motion.a
                href={mainPackage.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full bg-[#68A07C] hover:bg-[#5a8c6b] text-white py-5 rounded-2xl font-sans font-bold text-[18px] transition-all shadow-lg shadow-[#68A07C]/20"
              >
                {mainPackage.cta}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Дополнительная подпись под карточкой */}
          <p className="text-center mt-8 text-[14px] text-[#718096] font-sans italic">
            * {t('footer.disclaimerTitle')}: {t('services.note')}
          </p>
        </div>

      </div>
    </section>
  );
}
