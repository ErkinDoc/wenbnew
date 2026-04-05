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
          className="mt-16 rounded-3xl border border-[#E2E8F0] bg-[#F0F7F4] p-8 md:p-12"
        >
          <h3 className="text-[22px] font-serif font-bold text-[#1A365D] mb-2 text-center">
            Specializované programy Dr. Erkina
          </h3>
          <p className="text-[#4A5568] text-center mb-8 text-[15px]">
            Okrem komplexnej diagnostiky ponúkame aj cielené programy pre konkrétne zdravotné ciele.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://rehabilitation-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#E2E8F0] hover:shadow-lg hover:border-[#1A365D] transition-all group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1A365D]/10 flex items-center justify-center">
                <span className="text-2xl">🦴</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-[17px] font-bold text-[#1A365D]">System presnej rehabilitacie</h4>
                  <ExternalLink className="w-4 h-4 text-[#4A5568] group-hover:text-[#1A365D]" />
                </div>
                <p className="text-[14px] text-[#4A5568]">
                  Klinicka strategia obnovy funkcie pohyboveho aparatu. Presna diagnostika klbov a chrbtice.
                </p>
              </div>
            </a>

            <a
              href="https://v0-presne-chudenie-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#E2E8F0] hover:shadow-lg hover:border-[#1A365D] transition-all group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#68A07C]/10 flex items-center justify-center">
                <span className="text-2xl">⚖️</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-[17px] font-bold text-[#1A365D]">Presne Chudenie</h4>
                  <ExternalLink className="w-4 h-4 text-[#4A5568] group-hover:text-[#1A365D]" />
                </div>
                <p className="text-[14px] text-[#4A5568]">
                  Individualny integrativny program trvaleho znizenia hmotnosti. Obnovujeme metabolizmus.
                </p>
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
