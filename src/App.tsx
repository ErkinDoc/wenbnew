import { useMemo } from 'react'; // Добавлено для оптимизации
import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './i18n';
import SchemaOrg from './components/SchemaOrg';
import { Navigation } from './sections/Navigation';
import { HeroSection } from './sections/HeroSection';
import { Method6D } from './sections/Method6D';
import { GlobalExperience } from './sections/GlobalExperience';
import { Services } from './sections/Services';
import { SuccessStories } from './sections/SuccessStories';
import { Testimonials } from './sections/Testimonials';
import { TrustAuthority } from './sections/TrustAuthority';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsent } from './components/CookieConsent';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

// Расширенный тип языка (добавил de, раз он есть в формах)
type Lang = 'en' | 'ru' | 'sk' | 'de';

function App() {
  const { i18n } = useTranslation();
  
  // Оптимизация: вычисляем текущий язык только при его изменении
  const currentLang = useMemo(() => 
    (i18n.language.split('-')[0] || 'sk') as Lang, 
  [i18n.language]);

  const trackEvent = (action: string, category: string, label?: string) => {
    // В будущем здесь будет вызов window.gtag или ym
    console.log('Track:', { action, category, label });
  };

  const assessmentFormLinks: Record<Lang, string> = {
    ru: 'https://forms.gle/oDEBWUFKi6vLbTmk9',
    sk: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform',
    en: 'https://forms.gle/zAVdvWisrwWMbNGT7?hl=en',
    de: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform'
  };

  const handleAssessmentClick = () => {
    const formLink = assessmentFormLinks[currentLang] || assessmentFormLinks.sk;
    trackEvent('click_assessment', 'conversion', '6d_diagnostic');
    
    window.open(formLink, '_blank', 'noopener,noreferrer');
    
    // Динамический перевод уведомления (опционально, если есть в i18n)
    toast.success(currentLang === 'ru' ? 'Открываем форму диагностики' : 'Opening 6D Assessment Form', {
      description: currentLang === 'ru' 
        ? 'Вы будете перенаправлены на защищенную Google-форму.' 
        : 'You will be redirected to the secure Google Form.',
      duration: 3000,
    });
  };

  return (
    <HelmetProvider>
      <Helmet>
        {/* SEO Блок: Умная проверка языка */}
        {currentLang === 'ru' && (
          <>
            <title>Др. Эркинбек Джаманбаев | 6D-диагностика сложных случаев онлайн</title>
            <meta name="description" content="Онлайн-консультации эксперта по системной медицине. 30+ лет практики, 6D-навигация при хронической усталости, боли и выгорании." />
          </>
        )}
        {currentLang === 'en' && (
          <>
            <title>Dr. Erkinbek Dzhamanbayev | 6D Diagnostics for Complex Cases</title>
            <meta name="description" content="Online consultations with a systemic medicine expert. 30+ years of practice, 6D navigation for chronic fatigue, pain, and burnout." />
          </>
        )}
        {(currentLang === 'sk' || currentLang === 'de') && (
          <>
            <title>MUDr. Erkinbek Džamanbajev | 6D diagnostika komplexných prípadov</title>
            <meta name="description" content="Online konzultácie s expertom na systémovú medicínu. 30+ rokov praxe, 6D navigácia pre chronickú únavu, bolesť a vyhorenie." />
          </>
        )}

        {/* Теги Hreflang: Важно! Если у тебя нет реальных подпапок /ru, ссылки должны вести на ?lang=ru */}
        <link rel="alternate" hrefLang="sk" href="https://drerkin.eu/" />
        <link rel="alternate" hrefLang="ru" href="https://drerkin.eu/?lang=ru" />
        <link rel="alternate" hrefLang="en" href="https://drerkin.eu/?lang=en" />
        <link rel="alternate" hrefLang="de" href="https://drerkin.eu/?lang=de" />
        <link rel="alternate" hrefLang="x-default" href="https://drerkin.eu/" />

        <meta property="og:title" content={currentLang === 'ru' ? 'Др. Эркинбек Джаманбаев' : 'MUDr. Erkinbek Džamanbajev'} />
        <meta property="og:image" content="https://drerkin.eu/dr-erkin.webp" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* SchemaOrg теперь получает очищенный код языка */}
        <SchemaOrg lang={currentLang} />
        
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
    </HelmetProvider>
  );
}

export default App;
