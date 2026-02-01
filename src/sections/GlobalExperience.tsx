import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Award, BadgeCheck } from 'lucide-react';

export function GlobalExperience() {
  const { t } = useTranslation();

  const locations = t('globalExperience.locations', { returnObjects: true }) as Array<{
    country: string;
    details: string;
  }>;

  const memberships = t('globalExperience.memberships', { returnObjects: true }) as string[];
  const certifications = t('globalExperience.certifications', { returnObjects: true }) as string[];

  return (
    <section id="global" className="w-full py-24 lg:py-32 bg-[#F7F9FC]">
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
              International Practice
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-[#1A365D] mb-4">
              {t('globalExperience.title')}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#4A5568] max-w-2xl mx-auto font-sans">
              {t('globalExperience.subtitle')}
            </p>
          </motion.div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {locations.map((location, index) => (
              <motion.div
                key={location.country}
                className="bg-white rounded-xl p-6 border border-[#E2E8F0] hover:shadow-lg hover:border-[#68A07C] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 bg-[#E6F0EA] rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-[#68A07C]" />
                </div>
                <h3 className="text-[18px] font-serif font-semibold text-[#1A365D] mb-2">
                  {location.country}
                </h3>
                <p className="text-[13px] text-[#4A5568] font-sans leading-relaxed">
                  {location.details}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Memberships & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Professional Memberships */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-[#E2E8F0]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1A365D] rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[20px] font-serif font-semibold text-[#1A365D]">
                  Professional Memberships
                </h3>
              </div>
              <ul className="space-y-3">
                {memberships.map((membership, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#68A07C] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[14px] text-[#4A5568] font-sans">{membership}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-[#E2E8F0]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#68A07C] rounded-lg flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[20px] font-serif font-semibold text-[#1A365D]">
                  International Certifications
                </h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#68A07C] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[14px] text-[#4A5568] font-sans">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
