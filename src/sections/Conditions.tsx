import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BatteryLow, Activity, Flame, Wind, Waves, FileSearch } from 'lucide-react';

const ICONS = [BatteryLow, Activity, Flame, Wind, Waves, FileSearch];

export function Conditions() {
  const { t } = useTranslation();
  const items = (t('conditions.items', { returnObjects: true }) as { title: string; text: string }[]) || [];

  return (
    <section id="conditions" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-serif font-bold text-[#1A365D] mb-3">
            {t('conditions.title')}
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#4A5568] max-w-2xl mx-auto font-sans">
            {t('conditions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {Array.isArray(items) &&
            items.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <motion.div
                  key={item.title}
                  className="flex gap-4 p-5 lg:p-6 rounded-2xl bg-[#F7F9FC] border border-[#E2E8F0]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#E6F0EA] text-[#68A07C] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-serif font-bold text-[#1A365D] mb-1">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-[#4A5568] font-sans">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
        </div>

        <p className="mt-8 text-center text-[15px] text-[#4A5568] font-sans max-w-3xl mx-auto">
          {t('conditions.note')}
        </p>
      </div>
    </section>
  );
}
