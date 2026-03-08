import { motion } from 'framer-motion';
import { TrendingUp, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function SuccessStories() {
  const { t } = useTranslation();

  // ИСПРАВЛЕНО: используем 'items' вместо 'stories'
  const items = t('successStories.items', { returnObjects: true }) as Array<{
    title: string;
    content: string;
  }>;

  return (
    <section className="w-full py-24 lg:py-32 bg-gradient-to-b from-white to-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[12px] font-sans font-medium tracking-wider uppercase text-[#68A07C] mb-4">
              Clinical Outcomes
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-[#1A365D] mb-4">
              {t('successStories.title')}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#4A5568] max-w-2xl mx-auto font-sans">
              {t('successStories.subtitle')}
            </p>
          </motion.div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {Array.isArray(items) && items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#68A07C] rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[18px] font-serif font-semibold text-[#1A365D]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[15px] text-[#4A5568] font-sans leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* GDPR Disclaimer */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-[#E2E8F0]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1A365D]/5 rounded-full">
              <Shield className="w-5 h-5 text-[#1A365D]" />
              <span className="text-[13px] font-sans font-medium text-[#1A365D]">
                GDPR Compliant
              </span>
            </div>
            <p className="text-[13px] text-[#718096] font-sans text-center sm:text-left">
              {t('successStories.disclaimer')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
