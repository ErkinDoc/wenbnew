import { motion } from 'framer-motion';
import { Users, Globe, TrendingDown, Clock, Shield, GraduationCap, Briefcase, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TrustAuthority() {
  const { t } = useTranslation();

  const credentials = t('trust.credentials', { returnObjects: true }) as string[];

  const stats = [
    { icon: Users, number: '5000+', label: t('trust.stats.0.label') },
    { icon: Clock, number: '30+', label: t('trust.stats.1.label') },
    { icon: TrendingDown, number: '70-85%', label: t('trust.stats.2.label') },
    { icon: Globe, number: '15', label: t('trust.stats.3.label') },
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-[#F7F9FC]">
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
              Credentials
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-[#1A365D] mb-4">
              {t('trust.title')}
            </h2>
          </motion.div>

          {/* Credentials Grid */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[20px] lg:text-[24px] font-serif font-semibold text-[#1A365D] mb-6">
              {t('trust.credentialsTitle')}
            </h3>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {credentials.map((cred, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F9FC]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="w-10 h-10 bg-[#1A365D] rounded-lg flex items-center justify-center flex-shrink-0">
                      {index < 2 ? (
                        <GraduationCap className="w-5 h-5 text-white" />
                      ) : index < 4 ? (
                        <Briefcase className="w-5 h-5 text-white" />
                      ) : (
                        <Shield className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <span className="text-[14px] text-[#4A5568] font-sans leading-relaxed pt-1">
                      {cred}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* GDPR Badge */}
            <motion.div 
              className="mt-6 flex items-center justify-center gap-3 p-4 bg-[#68A07C]/10 rounded-xl border border-[#68A07C]/20"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="w-10 h-10 bg-[#68A07C] rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <span className="text-[14px] font-sans font-medium text-[#1A365D]">
                {t('trust.gdpr')}
              </span>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#1A365D] rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-7 h-7 text-[#68A07C]" />
                    </div>
                    <p className="text-[40px] lg:text-[52px] font-serif font-bold text-white leading-none mb-2">
                      {stat.number}
                    </p>
                    <p className="text-[13px] text-white/70 font-sans">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
