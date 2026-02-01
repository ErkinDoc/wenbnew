import { motion } from 'framer-motion';
import { TrendingDown, Clock, Stethoscope, Award, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Story {
  condition: string;
  history: string;
  approach: string;
  result: string;
}

export function SuccessStories() {
  const { t } = useTranslation();

  const stories = t('successStories.stories', { returnObjects: true }) as Story[];

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return TrendingDown;
      case 1:
        return Stethoscope;
      case 2:
        return Clock;
      default:
        return Award;
    }
  };

  return (
    <section className="w-full py-24 lg:py-32 bg-gradient-to-b from-white to-[#F7F9FC]">
      <div className="section-container">
        <div className="section-inner">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {stories.map((story, index) => {
              const Icon = getIcon(index);
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Condition Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#1A365D] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-[11px] font-sans font-medium tracking-wider uppercase text-[#68A07C]">
                        Condition
                      </span>
                      <h3 className="text-[16px] font-serif font-semibold text-[#1A365D]">
                        {story.condition}
                      </h3>
                    </div>
                  </div>

                  {/* Story Details */}
                  <div className="space-y-4">
                    {/* History */}
                    <div className="p-4 bg-[#F7F9FC] rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-[#718096]" />
                        <span className="text-[12px] font-sans font-medium uppercase tracking-wider text-[#718096]">
                          Patient History
                        </span>
                      </div>
                      <p className="text-[14px] text-[#4A5568] font-sans leading-relaxed">
                        {story.history}
                      </p>
                    </div>

                    {/* Approach */}
                    <div className="p-4 bg-[#F7F9FC] rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Stethoscope className="w-4 h-4 text-[#718096]" />
                        <span className="text-[12px] font-sans font-medium uppercase tracking-wider text-[#718096]">
                          6D Approach
                        </span>
                      </div>
                      <p className="text-[14px] text-[#4A5568] font-sans leading-relaxed">
                        {story.approach}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="p-4 bg-[#68A07C]/10 rounded-xl border border-[#68A07C]/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingDown className="w-4 h-4 text-[#68A07C]" />
                        <span className="text-[12px] font-sans font-medium uppercase tracking-wider text-[#68A07C]">
                          Result
                        </span>
                      </div>
                      <p className="text-[15px] text-[#1A365D] font-sans font-medium leading-relaxed">
                        {story.result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
