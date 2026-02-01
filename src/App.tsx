import { useTranslation } from 'react-i18next';
import './i18n';
import { Navigation } from './sections/Navigation';
import { HeroSection } from './sections/HeroSection';
import { Method6D } from './sections/Method6D';
import { GlobalExperience } from './sections/GlobalExperience';
import { Services } from './sections/Services';
import { SuccessStories } from './sections/SuccessStories';
import { TrustAuthority } from './sections/TrustAuthority';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

function App() {
  const { i18n } = useTranslation();
  
  // Track events for analytics
  const trackEvent = (action: string, category: string, label?: string) => {
    console.log('Track:', { action, category, label });
  };
  
  // Assessment form links by language
  const assessmentFormLinks: Record<string, string> = {
    ru: 'https://forms.gle/Gb6nj1SURsMk6G9c7',
    sk: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform',
    en: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform',
    de: 'https://docs.google.com/forms/d/e/1FAIpQLSedOMJH-In-P7bnyar4-MrTqoCF16ZKzhHH2xwjw7liNnHuNQ/viewform'
  };
  
  // Handle assessment click
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
      {/* Navigation */}
      <Navigation onAssessmentClick={handleAssessmentClick} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection 
          onAssessmentClick={handleAssessmentClick}
        />
        
        {/* 6D Method Section */}
        <Method6D />
        
        {/* Global Experience Section */}
        <GlobalExperience />
        
        {/* Services Section */}
        <Services />
        
        {/* Success Stories Section */}
        <SuccessStories />
        
        {/* Trust & Authority Section */}
        <TrustAuthority />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Final CTA Section */}
        <FinalCTA />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Toast notifications */}
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;