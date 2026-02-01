import { motion } from 'framer-motion';
import { Lock, Shield, FileCheck, ExternalLink, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24 lg:py-32 bg-gradient-to-b from-[#F7F9FC] to-white">
      <div className="section-container">
        <div className="section-inner max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h2 
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-[#1A365D] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            {t('finalCta.title')}
          </motion.h2>
          
          {/* Subheadline */}
          <motion.p 
            className="text-[16px] lg:text-[18px] text-[#4A5568] mb-12 max-w-2xl mx-auto font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('finalCta.subtitle')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="https://forms.gle/oDEBWUFKi6vLbTmk9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[14px] flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('finalCta.ctaAssessment')}
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            
            <motion.a
              href="https://forms.gle/hKjSMrxBabZ3NYda8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-[14px] flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('finalCta.ctaApply')}
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
          
          {/* Trust Reinforcements */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-[13px] text-[#718096] font-sans mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#68A07C]" />
              <span>{t('finalCta.trust1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#68A07C]" />
              <span>{t('finalCta.trust2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#68A07C]" />
              <span>{t('finalCta.trust3')}</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="pt-8 border-t border-[#E2E8F0]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-[14px] text-[#718096] font-sans mb-4">
              Or contact directly:
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:erkinslovakia@gmail.com" 
                className="text-[14px] text-[#1A365D] hover:text-[#68A07C] transition-colors font-sans"
              >
                erkinslovakia@gmail.com
              </a>
              <a 
                href="https://wa.me/421940270511"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#25D366] hover:text-[#128C7E] transition-colors font-sans flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4" />
                +421 940 270 511
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
