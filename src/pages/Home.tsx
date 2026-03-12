/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'; 
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

// Импорты компонентов
import { Navigation } from '../sections/Navigation';
import { HeroSection } from '../sections/HeroSection';
import { Method6D } from '../sections/Method6D';
import { GlobalExperience } from '../sections/GlobalExperience';
import { Services } from '../sections/Services';
import { SuccessStories } from '../sections/SuccessStories';
import { Testimonials } from '../sections/Testimonials';
import { TrustAuthority } from '../sections/TrustAuthority';
import { FAQ } from '../sections/FAQ';
import { FinalCTA } from '../sections/FinalCTA';
import { Footer } from '../sections/Footer';

// Импорты вспомогательных элементов
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CookieConsent } from '../components/CookieConsent';
import { Toaster } from 'sonner';
import { toast } from 'sonner';

type Lang = 'en' | 'ru' | 'sk';

export function Home() {
  const { i18n } = useTranslation();
  
  const currentLang = useMemo(() => {
    const lang = i18n.language.split('-')[0];
    return (['en', 'ru', 'sk'].includes(lang) ? lang : 'sk') as Lang;
  }, [i18n.language]);

  const assessmentFormLinks: Record<Lang, string> = {
    ru: 'https://docs.google.com/forms/d/e/1FAIpQLSfvhsVW5kg70y1qqj0TtOQH_zA9INrea-qFR_YqCjYZhn6INQ/viewform?usp=header',
    sk: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform',
    en: 'https://forms.gle/zAVdvWisrwWMbNGT7?hl=en'
  };

  const handleAssessmentClick = () => {
    const formLink = assessmentFormLinks[currentLang] || assessmentFormLinks.sk;
    window.open(formLink, '_blank', 'noopener,noreferrer');
    
    toast.success(currentLang === 'ru' ? 'Открываем форму диагностики' : 'Opening 6D Assessment Form', {
      description: currentLang === 'ru' 
        ? 'Вы будете перенаправлены на защищенную Google-форму.' 
        : 'You will be redirected to the secure Google Form.',
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        {currentLang === 'ru' && (
          <>
            <title>Др. Эркинбек Джаманбаев | 6D-диагностика сложных случаев</title>
            <meta name="description" content="Онлайн-консультации эксперта по системной медицине." />
          </>
        )}
        {currentLang === 'en' && (
          <>
            <title>Dr. Erkinbek Dzhamanbayev | 6D Diagnostics</title>
            <meta name="description" content="Online consultations with a systemic medicine expert." />
          </>
        )}
        {currentLang === 'sk' && (
          <>
            <title>MUDr. Erkinbek Džamanbajev | 6D diagnostika</title>
            <meta name="description" content="Online konzultácie s expertom na systémovú medicínu." />
          </>
        )}
        <link rel="alternate" hrefLang="sk" href="https://drerkin.eu/" />
        <link rel="alternate" hrefLang="ru" href="https://drerkin.eu/?lang=ru" />
        <link rel="alternate" hrefLang="en" href="https://drerkin.eu/?lang=en" />
      </Helmet>

      <Navigation onAssessmentClick={handleAssessmentClick} />
      
      <main>
        <HeroSection onAssessmentClick={handleAssessmentClick} />
        <Method6D />
        <GlobalExperience />
        <Services onAssessmentClick={handleAssessmentClick} />
        <SuccessStories />
        <Testimonials />
        <TrustAuthority />
        <FAQ />
        <FinalCTA onAssessmentClick={handleAssessmentClick} />
      </main>
      
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
      <Toaster position="top-center" richColors />
    </div>
  );
}
