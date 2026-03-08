import { motion } from 'framer-motion';
import { Users, Globe, TrendingUp, Clock, Shield, GraduationCap, Briefcase, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TrustAuthority() {
  const { t } = useTranslation();

  // Получаем список регалий из JSON
  const credentials = t('trust.credentials', { returnObjects: true }) as string[];

  // Статистика — берем цифры из JSON (блок stats) и сопоставляем с иконками
  const stats = [
    { 
      icon: Users, 
      number: t('trust.stats.0.number'), // 5000+
      label: t('trust.stats.0.label')    // pacientov
    },
    { 
      icon: Clock, 
      number: t('trust.stats.1.number'), // 30+
      label: t('trust.stats.1.label')    // rokov praxe
    },
    { 
      icon: TrendingUp, 
      number: t('trust.stats.2.number'), // 70-85%
      label: t('trust.stats.2.label')    // zlepšenie
    },
    { 
      icon: Globe, 
      number: t('trust.stats.3.number'), // 15
      label: t('trust.stats.3.label')    // krajín Európy
    },
  ];

  return (
    // Добавлен id="experience" для работы навигации
    <section id="experience" className="w-full py-24 lg:py-32 bg-[#F7F9FC]">
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
              {t('trust.badge')} 
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
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0] shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.isArray(credentials) && credentials.map((cred, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F9FC]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="w-10 h-10 bg-[#1A365D] rounded-lg flex items-center justify-center flex-shrink-0">
                      {/* Умный выбор иконки по индексу */}
                      {index === 0 ? (
                        <GraduationCap className="w-5 h-5 text-white" />
                      ) : index < 3 ? (
                        <Shield className="w-5 h-5 text-white" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <span className="text-[14px] text-[#4A5568] font-sans font-medium leading-relaxed pt-1">
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
              <div className="w-8 h-8 bg-[#68A07C] rounded-lg flex items-center justify-center">
                <Lock className="w-4 h-4 text-white" />
              </div>
              <span className="text-[14px] font-sans font-medium text-[#1A365D]">
                {t('trust.gdpr')}
              </span>
            </motion.div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#1A365D] rounded-3xl p-8 lg:p-12 shadow-xl">
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
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-[#68A07C]" />
                    </div>
                    <p className="text-[32px] lg:text-[42px] font-serif font-bold text-white leading-none mb-2">
                      {stat.number}
                    </p>
                    <p className="text-[11px] lg:text-[12px] text-white/70 font-sans uppercase tracking-widest font-medium">
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
