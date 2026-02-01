import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('nav.method'), href: '#method6d' },
    { label: t('nav.services'), href: '#services' },
    { label: 'Global Experience', href: '#global' },
    { label: t('nav.faq'), href: '#faq' },
  ];

  return (
    <footer id="contact" className="w-full bg-[#1A365D] text-white/80">
      <div className="section-container py-16 lg:py-20">
        <div className="section-inner">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <h3 className="text-[20px] font-serif font-bold text-white mb-1">
                  Medicine of Coherence
                </h3>
                <p className="text-[12px] text-[#68A07C] font-sans tracking-wider uppercase">
                  Dr. Erkinbek Dzhamanbaev, MD PhD MBA
                </p>
              </div>
              <p className="text-[13px] text-white/60 font-sans leading-relaxed">
                Expert in Integrative Pain Management & Medicine of Coherence. 30+ years of international clinical practice.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold text-[14px] font-sans mb-5">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-[13px] text-white/70 hover:text-[#68A07C] transition-colors font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold text-[14px] font-sans mb-5">
                {t('footer.contact')}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#68A07C] mt-0.5 flex-shrink-0" />
                  <a 
                    href="mailto:erkinslovakia@gmail.com"
                    className="text-[13px] text-white/70 hover:text-[#68A07C] transition-colors font-sans"
                  >
                    {t('footer.email')}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#68A07C] mt-0.5 flex-shrink-0" />
                  <a 
                    href="https://wa.me/421940270511"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/70 hover:text-[#68A07C] transition-colors font-sans"
                  >
                    WhatsApp: {t('footer.phone')}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#68A07C] mt-0.5 flex-shrink-0" />
                  <span className="text-[13px] text-white/70 font-sans">
                    {t('footer.location')}
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Language & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-white font-semibold text-[14px] font-sans mb-5">
                {t('footer.legal')}
              </h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a href="#privacy" className="text-[13px] text-white/70 hover:text-[#68A07C] transition-colors font-sans">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-[13px] text-white/70 hover:text-[#68A07C] transition-colors font-sans">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#gdpr" className="text-[13px] text-white/70 hover:text-[#68A07C] transition-colors font-sans">
                    GDPR
                  </a>
                </li>
              </ul>
              
              <div>
                <p className="text-[11px] text-white/40 mb-2 font-sans">Language</p>
                <LanguageSwitcher variant="dark" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[12px] text-white/50 font-sans">
                {t('footer.copyright')}
              </p>
              <p className="text-[12px] text-white/50 font-sans">
                EU Medical License — Slovakia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
