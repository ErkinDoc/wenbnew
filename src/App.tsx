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
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

// Тип языка
type Lang = 'en' | 'ru' | 'sk';

function App() {
  // Убрал лишнюю переменую 't', которая блокировала билд
  const { i18n } = useTranslation();
  
  const trackEvent = (action: string, category: string, label?: string) => {
    console.log('Track:', { action, category, label });
  };

  const assessmentFormLinks: Record<string, string> = {
    ru: 'https://forms.gle/oDEBWUFKi6vLbTmk9',
    sk: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform',
    en: 'https://forms.gle/zAVdvWisrwWMbNGT7?hl=en',
    de: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform'
  };

  const handleAssessmentClick = () => {
    const currentLang = i18n.language.split('-')[0];
    const formLink = assessmentFormLinks[currentLang] || assessmentFormLinks.sk;
    trackEvent('click_assessment', 'conversion', '6d_diagnostic');
    window.open(formLink, '_blank');
    toast.success('Opening 6D Assessment Form', {
      description: 'You will be redirected to the secure Google Form.',
      duration: 3000,
    });
  };

  const currentLang = (i18n.language.split('-')[0]) as Lang;

  return (
    <HelmetProvider>
      <Helmet>
        {/* Динамический SEO блок */}
        {currentLang === 'ru' ? (
          <>
            <title>Др. Эркинбек Джаманбаев | 6D-диагностика сложных случаев онлайн</title>
            <meta name="description" content="Онлайн-консультации эксперта по системной медицине. 30+ лет практики, 6D-навигация при хронической усталости, боли, выгорании и пост-COVID. €100 за глубокий анализ через Zoom." />
          </>
        ) : currentLang === 'en' ? (
          <>
            <title>Dr. Erkinbek Dzhamanbayev | 6D Diagnostics for Complex Cases</title>
            <meta name="description" content="Online consultations with a systemic medicine expert. 30+ years of practice, 6D navigation for chronic fatigue, pain, burnout, and post-COVID. €100 in-depth assessment via Zoom." />
          </>
        ) : (
          <>
            <title>MUDr. Erkinbek Džamanbajev | 6D diagnostika komplexných prípadov</title>
            <meta name="description" content="Online konzultácie s expertom na systémovú medicínu. 30+ rokov praxe, 6D navigácia pre chronickú únavu, bolesť a vyhorenie. €100 za hĺbkovú diagnostiku cez Zoom." />
          </>
        )}

        {/* Теги Hreflang */}
        <link rel="alternate" hrefLang="sk" href="https://drerkin.eu/" />
        <link rel="alternate" hrefLang="ru" href="https://drerkin.eu/ru" />
        <link rel="alternate" hrefLang="en" href="https://drerkin.eu/en" />
        <link rel="alternate" hrefLang="x-default" href="https://drerkin.eu/" />

        <meta property="og:title" content={currentLang === 'ru' ? 'Др. Эркинбек Джаманбаев' : 'MUDr. Erkinbek Džamanbajev'} />
        <meta property="og:image" content="/dr-erkin.webp" />
      </Helmet>

      <div className="min-h-screen bg-white">
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
        <Toaster position="top-center" richColors />
      </div>
    </HelmetProvider>
  );
}

export default App;
