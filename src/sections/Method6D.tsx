import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Activity, Wind, Brain, Apple, Heart, Sparkles, ChevronRight, FileText } from 'lucide-react';

const dimensionIcons = {
  'D1': Activity,
  'D2': Wind,
  'D3': Brain,
  'D4': Apple,
  'D5': Heart,
  'D6': Sparkles,
};

export function Method6D() {
  const { t } = useTranslation();
  const [activeDim, setActiveDim] = useState(0);
  const [showPubs, setShowPubs] = useState(false);

  const dimensions = t('method6d.dimensions', { returnObjects: true }) as Array<{
    id: string;
    name: string;
    subtitle: string;
    description: string;
  }>;

  const scientificBasis = t('method6d.scientificBasis', { returnObjects: true }) as {
    label: string;
    publications: Array<{ title: string; url: string }>;
  };

  return (
    <section id="method6d" className="w-full py-24 lg:py-32 bg-white">
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
              Our Methodology
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-[#1A365D] mb-4">
              {t('method6d.title')}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#4A5568] max-w-2xl mx-auto font-sans">
              {t('method6d.subtitle')}
            </p>

            {/* Scientific Basis */}
            <div className="mt-6 flex flex-col items-center">
              <button
                onClick={() => setShowPubs(!showPubs)}
                className="inline-flex items-center gap-2 text-[13px] font-sans font-medium text-[#68A07C] hover:text-[#1A365D] transition-colors"
              >
                <FileText className="w-4 h-4" />
                {scientificBasis.label}
                <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${showPubs ? 'rotate-90' : ''}`} />
              </button>

              {showPubs && (
                <motion.div
                  className="mt-3 flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {scientificBasis.publications.map((pub, i) => (
                    <a
                      key={i}
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-sans text-[#4A5568] hover:text-[#68A07C] hover:underline transition-colors max-w-lg text-center"
                    >
                      {pub.title}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* 6D Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Dimension Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dimensions.map((dim, index) => {
                const Icon = dimensionIcons[dim.id as keyof typeof dimensionIcons];
                const isActive = activeDim === index;
                
                return (
                  <motion.button
                    key={dim.id}
                    onClick={() => setActiveDim(index)}
                    className={`text-left p-6 rounded-xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#1A365D] border-[#1A365D] text-white' 
                        : 'bg-white border-[#E2E8F0] hover:border-[#68A07C] hover:shadow-md'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-white/20' : 'bg-[#E6F0EA]'
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-[#68A07C]'}`} />
                      </div>
                      <span className={`text-[24px] font-serif font-bold ${
                        isActive ? 'text-white/30' : 'text-[#E2E8F0]'
                      }`}>
                        {dim.id}
                      </span>
                    </div>
                    <h3 className={`text-[18px] font-serif font-semibold mb-1 ${
                      isActive ? 'text-white' : 'text-[#1A365D]'
                    }`}>
                      {dim.name}
                    </h3>
                    <p className={`text-[12px] font-sans uppercase tracking-wider ${
                      isActive ? 'text-[#68A07C]' : 'text-[#718096]'
                    }`}>
                      {dim.subtitle}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            {/* Active Dimension Detail */}
            <div className="lg:col-span-5">
              <motion.div
                className="bg-[#F7F9FC] rounded-2xl p-8 h-full"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {dimensions[activeDim] && (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[48px] font-serif font-bold text-[#1A365D]/10">
                        {dimensions[activeDim].id}
                      </span>
                      <div>
                        <h3 className="text-[24px] font-serif font-bold text-[#1A365D]">
                          {dimensions[activeDim].name}
                        </h3>
                        <p className="text-[13px] font-sans text-[#68A07C] uppercase tracking-wider">
                          {dimensions[activeDim].subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-[16px] text-[#4A5568] leading-[1.8] font-sans mb-8">
                      {dimensions[activeDim].description}
                    </p>

                    <a
                      href="https://forms.gle/oDEBWUFKi6vLbTmk9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-sans font-medium text-[#1A365D] hover:text-[#68A07C] transition-colors"
                    >
                      Start 6D Assessment
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
