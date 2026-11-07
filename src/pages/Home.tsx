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
  const { i18n, t } = useTranslation();
  
  const currentLang = useMemo(() => {
    const lang = i18n.language.split('-')[0];
    return (['en', 'ru', 'sk'].includes(lang) ? lang : 'sk') as Lang;
  }, [i18n.language]);

  // Инженерное исправление: Ссылки теперь подтягиваются из JSON (t)
  // Это исключает потерю лидов при обновлении локализации
  const handleAssessmentClick = () => {
    const formLink = t('contact.form.url'); 
    
    if (formLink) {
      window.open(formLink, '_blank', 'noopener,noreferrer');
      
      const toastMessages = {
        ru: { title: 'Открываем форму диагностики', desc: 'Вы будете перенаправлены на защищенную Google-форму.' },
        en: { title: 'Opening 6D Assessment Form', desc: 'You will be redirected to the secure Google Form.' },
        sk: { title: 'Otvárame diagnostický formulár', desc: 'Budete presmerovaní na zabezpečený Google formulár.' }
      };

      const msg = toastMessages[currentLang] || toastMessages.sk;

      toast.success(msg.title, {
        description: msg.desc,
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        {currentLang === 'ru' && (
          <>
            <title>Др. Эркинбек Джаманбаев | Хроническая усталость, боль — 6D-диагностика онлайн</title>
            <meta name="description" content="Врач с 30+ лет практики. Хроническая усталость, боль, выгорание, «анализы в норме». Первый шаг — бесплатная 6D-анкета онлайн. Консультации на русском по всему ЕС." />
          </>
        )}
        {currentLang === 'en' && (
          <>
            <title>Dr. Erkinbek Dzhamanbaev | Chronic fatigue &amp; pain — 6D Diagnostics online</title>
            <meta name="description" content="Physician with 30+ years of practice. Chronic fatigue, pain, burnout, 'normal' test results. Start with a free online 6D questionnaire. Consultations across the EU." />
          </>
        )}
        {currentLang === 'sk' && (
          <>
            <title>Dr. Erkinbek Džamanbajev | Chronická únava a bolesť — 6D diagnostika</title>
            <meta name="description" content="Lekár s 30+ rokmi praxe. Chronická únava, bolesť, vyhorenie, výsledky „v norme“. Začnite bezplatným 6D dotazníkom online. Piešťany a online v celej EÚ." />
          </>
        )}
        <html lang={currentLang} />
        <link rel="alternate" hrefLang="sk" href="https://drerkin.eu/?lang=sk" />
        <link rel="alternate" hrefLang="ru" href="https://drerkin.eu/?lang=ru" />
        <link rel="alternate" hrefLang="en" href="https://drerkin.eu/?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://drerkin.eu/" />
      </Helmet>

      <Navigation onAssessmentClick={handleAssessmentClick} />
      
      <main>
        <HeroSection onAssessmentClick={handleAssessmentClick} />
        <Method6D />
        <GlobalExperience />
        <Services onAssessmentClick={handleAssessmentClick} />
        <SuccessStories />
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
