import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Activity, Wind, Zap, Beaker, Brain, Target, ExternalLink } from 'lucide-react';

export function Method6D() {
  const { t } = useTranslation();

  // Иконки для 6 измерений по порядку
  const icons = [
    <Activity className="w-6 h-6" />, 
    <Wind className="w-6 h-6" />, 
    <Zap className="w-6 h-6" />, 
    <Beaker className="w-6 h-6" />, 
    <Brain className="w-6 h-6" />, 
    <Target className="w-6 h-6" />
  ];

  // Получаем массив измерений из JSON
  const dimensions = t('method6d.dimensions', { returnObjects: true }) as any[];

  return (
    <section id="method" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[12px] font-sans font-bold tracking-[0.2em] uppercase text-[#68A07C] mb-4 block"
          >
            {t('method6d.subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[42px] font-serif font-bold text-[#1A365D] mb-6"
          >
            {t('method6d.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-[16px] md:text-[18px] text-[#4A5568] leading-relaxed"
          >
            {t('method6d.description')}
          </motion.p>
        </div>

        {/* Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Array.isArray(dimensions) && dimensions.map((dim, index) => (
            <motion.div
              key={dim.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#68A07C] hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#1A365D] text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#68A07C] transition-colors">
                {icons[index]}
              </div>
              <span className="text-[12px] font-bold text-[#68A07C] uppercase tracking-wider mb-2 block">
                {dim.id}
              </span>
              <h3 className="text-[20px] font-serif font-bold text-[#1A365D] mb-3">
                {/* Очищаем имя от "D1: ", оставляя только "Diagnostika" */}
                {dim.name.includes(': ') ? dim.name.split(': ')[1] : dim.name}
              </h3>
              <p className="text-[14px] font-bold text-[#718096] mb-3 uppercase tracking-tight">
                {dim.subtitle}
              </p>
              <p className="text-[15px] text-[#4A5568] leading-relaxed">
                {dim.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scientific Basis Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center pt-8 border-t border-[#E2E8F0]"
        >
          <p className="text-[14px] text-[#718096] mb-4 font-medium italic">
            {t('method6d.scientificBasis.label')}
          </p>
          <a 
            href={t('method6d.scientificBasis.publications.0.url')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#1A365D] hover:text-[#68A07C] font-bold transition-colors group"
          >
            <span className="text-[16px] border-b-2 border-[#1A365D]/10 group-hover:border-[#68A07C]">
              {t('method6d.scientificBasis.publications.0.title')}
            </span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
