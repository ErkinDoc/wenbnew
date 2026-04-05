/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface ServicesProps {
  onAssessmentClick: () => void;
}

export function Services({ onAssessmentClick }: ServicesProps) {
  const { t } = useTranslation();
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

        {/* Specializovane programy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-3xl border-2 border-[#1A365D]/20 bg-gradient-to-br from-[#F0F7F4] to-[#EBF4FF] p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <span className="inline-block bg-[#1A365D] text-white text-[12px] font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              {t('services.specializedBadge')}
            </span>
            <h3 className="text-[26px] font-serif font-bold text-[#1A365D] mb-2">
              {t('services.specializedTitle')}
            </h3>
            <p className="text-[#4A5568] text-[15px] max-w-xl mx-auto">
              {t('services.specializedSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://rehabilitation-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#E2E8F0] hover:shadow-lg hover:border-[#1A365D] transition-all group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1A365D]/10 flex items-center justify-center text-3xl">
                🦴
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-[17px] font-bold text-[#1A365D]">
                    {t('services.rehab.title')}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-[#4A5568] group-hover:text-[#1A365D] flex-shrink-0" />
                </div>
                <p className="text-[14px] text-[#4A5568] leading-relaxed">
                  {t('services.rehab.description')}
                </p>
                <span className="inline-block mt-3 text-[13px] font-semibold text-[#1A365D] group-hover:underline">
                  {t('services.learnMore')} →
                </span>
              </div>
            </a>

            <a
              href="https://v0-presne-chudenie-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#E2E8F0] hover:shadow-lg hover:border-[#68A07C] transition-all group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#68A07C]/10 flex items-center justify-center text-3xl">
                ⚖️
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-[17px] font-bold text-[#1A365D]">
                    {t('services.weight.title')}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-[#4A5568] group-hover:text-[#68A07C] flex-shrink-0" />
                </div>
                <p className="text-[14px] text-[#4A5568] leading-relaxed">
                  {t('services.weight.description')}
                </p>
                <span className="inline-block mt-3 text-[13px] font-semibold text-[#68A07C] group-hover:underline">
                  {t('services.learnMore')} →
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
