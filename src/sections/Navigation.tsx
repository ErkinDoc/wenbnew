import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

interface NavigationProps {
  onAssessmentClick?: () => void;
}

export function Navigation({ onAssessmentClick }: NavigationProps) {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ГАРАНТИРОВАННО ВЕРНЫЕ ССЫЛКИ
  const formLinks: Record<string, string> = {
    ru: 'https://forms.gle/VCejYUhzTLyQxJXU9',
    sk: 'https://forms.gle/t7W8zVt1GwNafz1KA',
    en: 'https://forms.gle/r7hQ44MV6C4UG4kz8',
    de: 'https://forms.gle/r7hQ44MV6C4UG4kz8'
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.method'), href: '#method6d' },
    { label: t('nav.services'), href: '#services' },
    { label: 'Global Experience', href: '#global' },
    { label: 'Publications', href: '/publications.html', external: true },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string, external?: boolean) => {
    if (external) {
      window.location.href = href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleAssessmentClick = (e: React.MouseEvent) => {
    // Останавливаем любое другое действие
    e.preventDefault();
    e.stopPropagation();

    // Определяем язык максимально точно
    const currentLang = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0].toLowerCase();
    const finalLink = formLinks[currentLang] || formLinks.en;

    console.log('Opening form for lang:', currentLang, 'URL:', finalLink);
    
    // Открываем новую ссылку
    window.open(finalLink, '_blank', 'noopener,noreferrer');
    
    // Если в App.tsx была какая-то логика (например, метрика), вызываем её, но ссылку она уже не изменит
    if (onAssessmentClick) {
      onAssessmentClick();
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-container">
          <div className="section-inner flex items-center justify-between">
            <a 
              href="/" 
              className="flex flex-col"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <span className="text-[20px] font-serif font-bold text-[#1A365D] leading-tight">
                Medicine of Coherence
              </span>
              <span className="text-[11px] text-[#68A07C] font-sans tracking-wider uppercase">
                Dr. Erkinbek Dzhamanbaev
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href, link.external)}
                  className="text-[14px] font-sans font-medium text-[#4A5568] hover:text-[#1A365D] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <LanguageSwitcher variant={isScrolled ? 'light' : 'light'} />
              </div>
              
              <button
                onClick={handleAssessmentClick}
                className="hidden sm:block px-5 py-2.5 bg-[#1A365D] hover:bg-[#2C5282] 
                           text-white text-[13px] font-sans font-medium rounded-lg transition-colors"
              >
                {t('hero.ctaAssessment')}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#1A365D]"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/30" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute top-0 right-0 w-[300px] h-full bg-white shadow-xl pt-24 px-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href, link.external)}
                    className="block w-full text-left text-[16px] font-medium text-[#1A365D] 
                               hover:text-[#68A07C] py-3 border-b border-[#E2E8F0]"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 space-y-4">
                <LanguageSwitcher variant="light" />
                <button
                  onClick={handleAssessmentClick}
                  className="w-full py-4 bg-[#1A365D] hover:bg-[#2C5282] text-white 
                             font-medium rounded-lg transition-colors"
                >
                  {t('hero.ctaAssessment')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
