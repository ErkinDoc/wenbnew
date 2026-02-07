import { motion } from 'framer-motion';
import { Shield, Clock, Users, Globe, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  onAssessmentClick: () => void;
}

export function HeroSection({ onAssessmentClick }: HeroSectionProps) {
  const { t, i18n } = useTranslation();

  const trustBadges = [
    { icon: Shield, label: t('hero.badge1') },
    { icon: Clock, label: t('hero.badge2') },
    { icon: Users, label: t('hero.badge3') },
    { icon: Globe, label: t('hero.badge4') },
  ];

  // Ссылки на ПОЛНЫЕ анкеты (Apply for Consultation)
  const applicationFormLinks = {
    ru: 'https://forms.gle/QiKP5EhXjxZjVAwL9?hl=ru',
    sk: 'https://forms.gle/j7MzVAug4HVv6bxu7?hl=sk',
    en: 'https://forms.gle/zAVdvWisrwWMbNGT7?hl=en', 
    de: 'https://forms.gle/j7MzVAug4HVv6bxu7?hl=de'
  };

  // Ссылки на КОРОТКИЕ оценки (Start 6D Assessment)
  const assessmentFormLinks = {
    ru: 'https://forms.gle/Gb6nj1SURsMk6G9c7',
    sk: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform',
    en: 'https://forms.gle/zAVdvWisrwWMbNGT7?hl=en', // Используем ту же полную форму
    de: 'https://forms.gle/j7MzVAug4HVv6bxu7?hl=de'
  };

  const lang = (i18n.resolvedLanguage || i18n.language).split('-')[0];
  const currentApplicationLink = applicationFormLinks[lang as keyof typeof applicationFormLinks] || applicationFormLinks.en;
  const currentAssessmentLink = assessmentFormLinks[lang as keyof typeof assessmentFormLinks] || assessmentFormLinks.en;

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#F7F9FC] via-white to-[#E6F0EA] overflow-hidden pt-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-96 h-96 border border-[#1A365D] rounded-full" />
        <div className="absolute bottom-40 left-10 w-64 h-64 border border-[#68A07C] rounded-full" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="section-inner min-h-[calc(100vh-96px)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-12 lg:py-0">
            
            {/* Left column - Text content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Doctor Name & Credentials */}
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 bg-[#1A365D]/5 text-[#1A365D] 
                             px-4 py-2 rounded-full text-[12px] font-sans font-medium tracking-wider uppercase mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Award className="w-4 h-4" />
                  {t('hero.credentials')}
                </motion.div>
                
                <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-[#1A365D] leading-[1.1] mb-3">
                  {t('hero.title')}
                </h1>
                
                <p className="text-[16px] lg:text-[18px] text-[#68A07C] font-sans">
                  {t('hero.specialty')}
                </p>
              </div>

              {/* Main Headline */}
              <div>
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-serif font-semibold text-[#1A365D] leading-[1.2] mb-4">
                  {t('hero.headline')}
                </h2>
                
                <p className="text-[15px] lg:text-[16px] leading-[1.8] text-[#4A5568] max-w-xl font-sans">
                  {t('hero.subheadline')}
                </p>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 lg:gap-6">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    className="flex items-center gap-2 text-[#4A5568]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <badge.icon className="w-4 h-4 text-[#68A07C]" />
                    <span className="text-[12px] font-sans font-medium">{badge.label}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Button 1: Quick Assessment */}
                <motion.button
                  onClick={() => window.open(currentAssessmentLink, '_blank')}
                  className="btn-primary text-[14px] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('hero.ctaAssessment')}
                </motion.button>
                
                {/* Button 2: Full Application */}
                <motion.a
                  href={currentApplicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-[14px] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('hero.ctaApply')}
                </motion.a>
              </div>
            </motion.div>
            
            {/* Right column - Professional Portrait */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-[#68A07C]/30 rounded-2xl" />
                <div className="absolute -inset-8 border border-[#1A365D]/10 rounded-3xl" />
                
                {/* Portrait with WebP optimization */}
                <div className="relative w-[300px] h-[400px] sm:w-[360px] sm:h-[480px] lg:w-[420px] lg:h-[560px] 
                                rounded-xl overflow-hidden border border-[#E2E8F0]">
                  <picture>
                    <source srcSet="/dr-erkin.webp" type="image/webp" />
                    <img 
                      src="/dr-erkin.jpg" 
                      alt="Dr. Erkinbek Dzhamanbaev"
                      className="w-full h-full object-cover"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </picture>
                  
                  {/* Credentials floating badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-[#E2E8F0]">
                    <div className="flex items-center justify-center gap-3">
                      <span className="px-3 py-1 bg-[#1A365D] text-white text-[11px] font-bold rounded">MD</span>
                      <span className="px-3 py-1 bg-[#68A07C] text-white text-[11px] font-bold rounded">PhD</span>
                      <span className="px-3 py-1 bg-[#C9A227] text-white text-[11px] font-bold rounded">MBA</span>
                    </div>
                  </div>
                </div>

                {/* Experience badge */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-[#1A365D] rounded-xl shadow-xl p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-[#68A07C]" />
                    <div>
                      <p className="text-[24px] font-serif font-bold text-white">30+</p>
                      <p className="text-[11px] text-white/70 font-sans">Years Practice</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
