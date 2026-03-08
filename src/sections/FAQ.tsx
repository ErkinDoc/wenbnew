import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Достаем массив вопросов из секции "faq" нашего JSON
  const faqItems = t('faq.items', { returnObjects: true }) as any[];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 bg-[#68A07C]/10 rounded-full">
              <HelpCircle className="w-6 h-6 text-[#68A07C]" />
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[42px] font-serif font-bold text-[#1A365D]"
          >
            {t('faq.title')}
          </motion.h2>
        </div>

        {/* Аккордеон */}
        <div className="space-y-4">
          {Array.isArray(faqItems) && faqItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#68A07C]/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#F8FAFC] transition-colors"
              >
                <span className="text-[16px] md:text-[18px] font-sans font-semibold text-[#1A365D] pr-8 leading-snug">
                  {item.question}
                </span>
                <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-[#68A07C] text-white' : 'text-[#68A07C]'}`}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-[15px] md:text-[16px] text-[#4A5568] leading-relaxed border-t border-[#F1F5F9] pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
