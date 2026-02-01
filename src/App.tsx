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

/**
 * Medicine of Coherence - Dr. Erkinbek Dzhamanbaev
 * 
 * Premium CEE-positioned landing page:
 * - Identity: Dr. Erkinbek Dzhamanbaev, MD PhD MBA
 * - Title: Expert in Integrative Pain Management & Medicine of Coherence
 * - Colors: Deep Medical Blue (#1A365D), White, Sage Green (#68A07C)
 * - Typography: Playfair Display (serif) headers, Inter (sans-serif) body
 * - Languages: SK | EN | RU
 * - Forms: Google Forms integration for lead magnets
 * - Pricing: €100 (6D Diagnostic), €600 (Coherence Recovery), €450 (Women's Health), €400 (3-Month Map)
 */

function App() {
  useTranslation(); // Initialize i18n

  // Track events for analytics
  const trackEvent = (action: string, category: string, label?: string) => {
    // [INTEGRATION POINT] Google Analytics event tracking
    // gtag('event', action, { event_category: category, event_label: label });
    console.log('Track:', { action, category, label });
  };

  // Handle assessment click
  const handleAssessmentClick = () => {
    trackEvent('click_assessment', 'conversion', '6d_diagnostic');
    window.open('https://forms.gle/oDEBWUFKi6vLbTmk9', '_blank');
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
