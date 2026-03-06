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

function App() {
  const { i18n } = useTranslation();
  
  const trackEvent = (action: string, category: string, label?: string) => {
    console.log('Track:', { action, category, label });
  };
  
  const assessmentFormLinks: Record<string, string> = {
    ru: 'https://forms.gle/Gb6nj1SURsMk6G9c7',
    sk: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform',
    en: 'https://forms.gle/zAVdvWisrwWMbNGT7?hl=en',
    de: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform'
  };
  
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

  return (
    <div className="min-h-screen bg-white">
      {/* Данные для Google об адресе в Пьештянах */}
      <SchemaOrg lang={i18n.language} />

      {/* Navigation */}
      <Navigation onAssessmentClick={handleAssessmentClick} />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <Method6D />
        <GlobalExperience />
        <Services />
        <SuccessStories />
        <Testimonials />
        <TrustAuthority />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
