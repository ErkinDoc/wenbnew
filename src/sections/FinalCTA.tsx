/* eslint-disable */
// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export function FinalCTA({ onAssessmentClick }: { onAssessmentClick: () => void }) {
  const { t } = useTranslation();

  const benefits = t('finalCta.benefits', { returnObjects: true }) || [];

  return (
    <section className="py-20 bg-[#1A365D] text-white overflow-hidden relative">
      {/* Декоративный фон */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-blue-400 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[80%] rounded-full bg-blue-600 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('finalCta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            {t('finalCta.subtitle')}
          </p>

          {/* Преимущества */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left max-w-2xl mx-auto">
            {Array.isArray(benefits) && benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-50">{benefit}</span>
              </div>
            ))}
          </div>

          {/* ИСПРАВЛЕННЫЕ КНОПКИ — ТЕПЕРЬ ОНИ СЛУШАЮТ ЯЗЫК */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onAssessmentClick}
              className="px-8 py-4 bg-white text-[#1A365D] rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('finalCta.ctaAssessment')}
              <ExternalLink className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={onAssessmentClick}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('finalCta.ctaApply')}
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </div>

          <p className="mt-8 text-blue-200 text-sm italic">
            {t('finalCta.guarantee') || 'Vaše zdravie je našou prioritou.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
