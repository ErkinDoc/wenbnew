import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

interface NavigationProps {
  onAssessmentClick: () => void;
}

export function Navigation({ onAssessmentClick }: NavigationProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.method'), href: '#method', type: 'anchor' },
    { label: t('nav.services'), href: '#services', type: 'anchor' },
    { label: t('nav.global'), href: '#global', type: 'anchor' },
    { label: 'Publications', href: '/publications', type: 'route' },
    { label: t('nav.faq'), href: '#faq', type: 'anchor' },
    { label: t('nav.contact'), href: '#footer', type: 'anchor' },
  ];

  const handleNavClick = (href: string, type: string) => {
    if (type === 'route') {
      navigate(href);
    } else {
      // Если мы на другой странице, сначала переходим на главную
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onAssessmentClick();
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a 
              href="/" 
              className="flex flex-col group"
              onClick={handleLogoClick}
            >
              <span className="text-[18px] md:text-[20px] font-serif font-bold text-[#1A365D] leading-tight group-hover:text-[#68A07C] transition-colors">
                Medicine of Coherence
              </span>
              <span className="text-[10px] md:text-[11px] text-[#68A07C] font-sans tracking-wider uppercase">
                Dr. Erkinbek Dzhamanbaev
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.type)}
                  className="text-[14px] font-sans font-medium text-[#4A5568] hover:text-[#1A365D] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#68A07C] after:transition-all hover:after:w-full"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="hidden md:block">
                <LanguageSwitcher variant="light" />
              </div>
              
              <button
                onClick={handleCtaClick}
                className="hidden sm:block px-5 py-2.5 bg-[#1A365D] hover:bg-[#2C5282] 
                           text-white text-[13px] font-sans font-medium rounded-lg 
                           transition-all transform hover:scale-105 active:scale-95 shadow-md"
              >
                {t('hero.ctaAssessment')}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#1A365D] hover:bg-[#F7FAFC] rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute top-0 right-0 w-[280px] h-full bg-white shadow-2xl pt-20 px-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <nav className="flex-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.type)}
                    className="block w-full text-left text-[16px] font-medium text-[#1A365D] 
                               hover:text-[#68A07C] py-4 border-b border-[#E2E8F0] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              
              <div className="pb-10 space-y-4">
                <div className="flex justify-center py-2">
                  <LanguageSwitcher variant="light" />
                </div>
                <button
                  onClick={handleCtaClick}
                  className="w-full py-4 bg-[#1A365D] hover:bg-[#2C5282] text-white 
                             font-semibold rounded-xl transition-all shadow-lg active:scale-95"
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
