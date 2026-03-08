import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Testimonials() {
  const { t } = useTranslation();

  // Простая структура — только то, что есть в JSON
  const testimonialIds = [1, 2, 3, 4, 5, 6, 7, 8];

  const avatarColors = [
    '4A5568', '1A365D', '68A07C', '2D3748', 
    'C9A227', '1A365D', '68A07C', '2D3748'
  ];

  const names = [
    'Maria K.', 'Andrey M.', 'Gulnara A.', 'Pavel S.',
    'Jennifer L.', 'David M.', 'Anna D.', 'Carlos R.'
  ];

  const renderStars = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F7F9FC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-serif font-bold text-[#1A365D] mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#4A5568] max-w-3xl mx-auto font-sans">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialIds.map((id, index) => (
              <motion.div
                key={id}
                className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://ui-avatars.com/api/?name=${names[index].replace(' ', '+')}&background=${avatarColors[index]}&color=fff&size=128&bold=true`}
                    alt={names[index]}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-sans font-bold text-[#1A365D] text-[15px]">
                      {names[index]}
                    </h3>
                    {renderStars()}
                  </div>
                </div>

                {/* Condition Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1.5 bg-[#68A07C]/10 text-[#68A07C] text-[12px] font-sans font-semibold rounded-full">
                    {t(`testimonials.${id}.condition`)}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-[#68A07C]/20 absolute -top-1 -left-1" />
                  <p className="text-[14px] leading-[1.7] text-[#4A5568] font-sans pl-5">
                    {t(`testimonials.${id}.quote`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-[13px] text-[#718096] font-sans max-w-4xl mx-auto">
              {t('testimonials.disclaimer')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
