import { useTranslation } from 'react-i18next';
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

// Тип языка — нужен для корректной работы SchemaOrg
type Lang = 'en' | 'ru' | 'sk';

function App() {
  const { i18n } = useTranslation();

  const trackEvent = (action: string, category: string, label?: string) => {
    console.log('Track:', { action, category, label });
  };

  // Ссылки на формы диагностики по языкам
  const assessmentFormLinks: Record<string, string> = {
    ru: 'https://forms.gle/Gb6nj1SURsMk6G9c7',
    sk: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform',
    en: 'https://forms.gle/zAVdvWisrwWMbNGT7?hl=en',
    de: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform'
  };

  // Главная функция обработки клика по кнопкам заказа
  const handleAssessmentClick = () => {
    const currentLang = i18n.language;
    const formLink = assessmentFormLinks[currentLang] || assessmentFormLinks.sk;

    trackEvent('click_assessment', 'conversion', '6d_diagnostic');
    window.open(formLink, '_blank');
    toast.success('Opening 6D Assessment Form', {
      description: 'You will be redirected to the secure Google Form.',
      duration: 3000,
    });
  };

  // Указываем тип языка для SchemaOrg (исправление ошибки TS2322)
  const currentLang = (i18n.language.split('-')[0]) as Lang;

  return (
    <div className="min-h-screen bg-white">
      {/* Данные для Google (адрес в Пьештянах) */}
      <SchemaOrg lang={currentLang} />

      {/* Навигация */}
      <Navigation onAssessmentClick={handleAssessmentClick} />

      <main>
        {/* Кнопка в главном блоке */}
        <HeroSection onAssessmentClick={handleAssessmentClick} />
        
        <Method6D />
        <GlobalExperience />
        
        {/* Кнопки в блоке услуг (теперь передаем функцию клика) */}
        <Services onAssessmentClick={handleAssessmentClick} />
        
        <SuccessStories />
        <Testimonials />
        <TrustAuthority />
        <FAQ />
        
        {/* Кнопка в финальном призыве к действию */}
        <FinalCTA onAssessmentClick={handleAssessmentClick} />
      </main>

      <Footer />
      <WhatsAppButton />
      
      {/* Уведомления */}
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
