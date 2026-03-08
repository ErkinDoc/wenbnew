/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowRight } from 'lucide-react';

// Добавляем интерфейс, чтобы App.tsx не ругался
interface ServicesProps {
  onAssessmentClick: () => void;
}

export function Services({ onAssessmentClick }: ServicesProps) {
  const { t } = useTranslation();

  // Безопасное получение массива услуг
  const services = t('services.items', { returnObjects: true }) as any[] || [];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-serif font-bold text-[#1A365D] mb-4">
            {t('services.title')}
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto text-[18px]">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(services) && services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-[#E2E8F0] bg-[#F7F9FC] hover:shadow-xl transition-all group"
            >
              <h3 className="text-[22px] font-serif font-bold text-[#1A365D] mb-4">
                {service.title}
              </h3>
              <p className="text-[#4A5568] mb-6 text-[15px] leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features?.map((feature: string, fIndex: number) => (
                  <li key={fIndex} className="flex items-center gap-2 text-[14px] text-[#4A5568]">
                    <CheckCircle2 className="w-4 h-4 text-[#68A07C]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={onAssessmentClick}
                className="w-full py-4 bg-white border-2 border-[#1A365D] text-[#1A365D] rounded-xl font-bold group-hover:bg-[#1A365D] group-hover:text-white transition-all flex items-center justify-center gap-2"
              >
                {t('services.cta')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
