import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

import { Navigation } from '../sections/Navigation';
import { HeroSection } from '../sections/HeroSection';
import { Conditions } from '../sections/Conditions';
import { Method6D } from '../sections/Method6D';
import { GlobalExperience } from '../sections/GlobalExperience';
import { Services } from '../sections/Services';
import { SuccessStories } from '../sections/SuccessStories';
import { TrustAuthority } from '../sections/TrustAuthority';
import { FAQ } from '../sections/FAQ';
import { FinalCTA } from '../sections/FinalCTA';
import { Footer } from '../sections/Footer';

import { WhatsAppButton } from '../components/WhatsAppButton';
import { LanguageSuggestion } from '../components/LanguageSuggestion';
import { SeoHead } from '../components/SeoHead';
import { isLang, homePath, type Lang } from '@/i18n';

const TOAST: Record<Lang, { title: string; desc: string }> = {
  ru: { title: 'Открываем 6D-анкету', desc: 'Анкета откроется в новой вкладке (Google Forms).' },
  en: { title: 'Opening the 6D questionnaire', desc: 'It opens in a new tab (Google Forms).' },
  sk: { title: 'Otvárame 6D dotazník', desc: 'Dotazník sa otvorí v novej karte (Google Forms).' },
};

export function Home({ lang }: { lang: Lang }) {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [, force] = useState(0);

  // Keep i18n in sync with the URL (/, /ru, /en)
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang).then(() => force((n) => n + 1));
    }
  }, [lang, i18n]);

  // Old links like /?lang=ru -> /ru
  useEffect(() => {
    const q = new URLSearchParams(location.search).get('lang');
    if (isLang(q) && q !== lang) {
      navigate(homePath(q) + location.hash, { replace: true });
    }
  }, [location.search, location.hash, lang, navigate]);

  const handleAssessmentClick = () => {
    const formLink = t('contact.form.url');
    if (!formLink) return;
    window.open(formLink, '_blank', 'noopener,noreferrer');
    const msg = TOAST[lang];
    toast.success(msg.title, { description: msg.desc, duration: 3000 });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <SeoHead lang={lang} />
      <LanguageSuggestion lang={lang} />
      <Navigation onAssessmentClick={handleAssessmentClick} />

      <main>
        <HeroSection onAssessmentClick={handleAssessmentClick} />
        <Conditions />
        <Method6D />
        <Services onAssessmentClick={handleAssessmentClick} />
        <GlobalExperience />
        <SuccessStories />
        <TrustAuthority />
        <FAQ />
        <FinalCTA onAssessmentClick={handleAssessmentClick} />
      </main>

      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
    </div>
  );
}
