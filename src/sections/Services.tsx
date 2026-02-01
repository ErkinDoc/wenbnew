import { motion } from 'framer-motion';
import { Check, Star, FileText, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();

  const packages = t('services.packages', { returnObjects: true }) as Array<{
    name: string;
    subtitle: string;
    price: string;
    includes?: string;
    badge?: string;
    features: string[];
    cta: string;
    formUrl: string;
  }>;

  return (
    <section id="services" className="w-full py-24 lg:py-32 bg-white">
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
              Programs & Pricing
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-[#1A365D] mb-4">
              {t('services.title')}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#4A5568] max-w-2xl mx-auto font-sans">
              {t('services.subtitle')}
            </p>
          </motion.div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 ${
                  pkg.badge 
                    ? 'border-[#68A07C] shadow-lg ring-1 ring-[#68A07C]/20' 
                    : 'border-[#E2E8F0] hover:border-[#1A365D] hover:shadow-lg'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-8 bg-[#68A07C] text-white 
                                  px-4 py-1 rounded-full text-[11px] font-sans font-semibold 
                                  flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-current" />
                    {pkg.badge}
                  </div>
                )}

                {/* Package Name */}
                <h3 className="text-[22px] lg:text-[26px] font-serif font-bold text-[#1A365D] mb-1">
                  {pkg.name}
                </h3>
                
                {/* Subtitle */}
                <p className="text-[14px] text-[#718096] font-sans mb-4">
                  {pkg.subtitle}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[40px] lg:text-[48px] font-serif font-bold text-[#1A365D]">
                      {pkg.price}
                    </span>
                  </div>
                  {pkg.includes && (
                    <p className="text-[13px] text-[#68A07C] mt-1 font-sans flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      {pkg.includes}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-3 text-[14px] leading-[1.7] text-[#4A5568] font-sans"
                    >
                      <Check className="w-5 h-5 text-[#68A07C] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={pkg.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-sans font-semibold text-[14px] 
                             flex items-center justify-center gap-2 transition-all ${
                    pkg.badge
                      ? 'bg-[#68A07C] text-white hover:bg-[#4A7A5E]'
                      : 'bg-[#1A365D] text-white hover:bg-[#2C5282]'
                    }`}
                >
                  {pkg.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p 
            className="text-center text-[13px] text-[#718096] mt-10 font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('services.note')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
