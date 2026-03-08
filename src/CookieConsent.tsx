import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_PREFERENCES_KEY = 'cookie-preferences';

export function CookieConsent() {
  const { t, i18n } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  // Тексты для разных языков
  const texts: Record<string, {
    title: string;
    description: string;
    acceptAll: string;
    acceptSelected: string;
    settings: string;
    necessary: string;
    necessaryDesc: string;
    analytics: string;
    analyticsDesc: string;
    marketing: string;
    marketingDesc: string;
    privacyLink: string;
  }> = {
    sk: {
      title: 'Používame cookies',
      description: 'Táto stránka používa cookies na zlepšenie vašej skúsenosti. Niektoré sú nevyhnutné pre fungovanie stránky, iné nám pomáhajú zlepšovať naše služby.',
      acceptAll: 'Prijať všetko',
      acceptSelected: 'Prijať vybrané',
      settings: 'Nastavenia',
      necessary: 'Nevyhnutné',
      necessaryDesc: 'Potrebné pre základné fungovanie stránky.',
      analytics: 'Analytické',
      analyticsDesc: 'Pomáhajú nám pochopiť, ako používate stránku.',
      marketing: 'Marketingové',
      marketingDesc: 'Používané na zobrazenie relevantnej reklamy.',
      privacyLink: 'Zásady ochrany súkromia',
    },
    ru: {
      title: 'Мы используем cookies',
      description: 'Этот сайт использует cookies для улучшения вашего опыта. Некоторые необходимы для работы сайта, другие помогают нам улучшать наши услуги.',
      acceptAll: 'Принять все',
      acceptSelected: 'Принять выбранные',
      settings: 'Настройки',
      necessary: 'Необходимые',
      necessaryDesc: 'Требуются для базовой работы сайта.',
      analytics: 'Аналитические',
      analyticsDesc: 'Помогают понять, как вы используете сайт.',
      marketing: 'Маркетинговые',
      marketingDesc: 'Используются для показа релевантной рекламы.',
      privacyLink: 'Политика конфиденциальности',
    },
    en: {
      title: 'We use cookies',
      description: 'This website uses cookies to improve your experience. Some are essential for the site to function, others help us improve our services.',
      acceptAll: 'Accept all',
      acceptSelected: 'Accept selected',
      settings: 'Settings',
      necessary: 'Necessary',
      necessaryDesc: 'Required for basic site functionality.',
      analytics: 'Analytics',
      analyticsDesc: 'Help us understand how you use the site.',
      marketing: 'Marketing',
      marketingDesc: 'Used to display relevant advertising.',
      privacyLink: 'Privacy Policy',
    },
  };

  const currentLang = i18n.language || 'sk';
  const t_cookie = texts[currentLang] || texts.sk;

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Показываем баннер через небольшую задержку
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Загружаем сохранённые предпочтения
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
        applyConsent(JSON.parse(savedPrefs));
      }
    }
  }, []);

  const applyConsent = (prefs: CookiePreferences) => {
    // Здесь применяем настройки cookies
    if (prefs.analytics) {
      // Включаем Google Analytics или другую аналитику
      enableAnalytics();
    } else {
      disableAnalytics();
    }

    if (prefs.marketing) {
      // Включаем маркетинговые скрипты
      enableMarketing();
    } else {
      disableMarketing();
    }
  };

  const enableAnalytics = () => {
    // Google Analytics или другая аналитика
    // window.gtag && window.gtag('consent', 'update', { analytics_storage: 'granted' });
    console.log('Analytics enabled');
  };

  const disableAnalytics = () => {
    // window.gtag && window.gtag('consent', 'update', { analytics_storage: 'denied' });
    console.log('Analytics disabled');
  };

  const enableMarketing = () => {
    // Facebook Pixel, Google Ads и т.д.
    // window.gtag && window.gtag('consent', 'update', { ad_storage: 'granted' });
    console.log('Marketing enabled');
  };

  const disableMarketing = () => {
    // window.gtag && window.gtag('consent', 'update', { ad_storage: 'denied' });
    console.log('Marketing disabled');
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(allAccepted));
    applyConsent(allAccepted);
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
    applyConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Нельзя отключить необходимые
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto">
            {!showSettings ? (
              /* Основной баннер */
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Cookie className="w-6 h-6 text-[#68A07C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1A365D] text-[15px] mb-1">
                      {t_cookie.title}
                    </h3>
                    <p className="text-[13px] text-gray-600 leading-relaxed">
                      {t_cookie.description}{' '}
                      <a href="/privacy" className="text-[#68A07C] hover:underline">
                        {t_cookie.privacyLink}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex items-center gap-2 px-4 py-2 text-[13px] text-gray-600 hover:text-[#1A365D] transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    {t_cookie.settings}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 md:flex-none px-6 py-2.5 bg-[#68A07C] hover:bg-[#5a8f6d] text-white text-[13px] font-medium rounded-lg transition-colors"
                  >
                    {t_cookie.acceptAll}
                  </button>
                </div>
              </div>
            ) : (
              /* Настройки cookies */
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-[#1A365D] text-[15px]">
                    {t_cookie.settings}
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                
                <div className="space-y-3 mb-4">
                  {/* Necessary */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-[14px] text-[#1A365D]">{t_cookie.necessary}</p>
                      <p className="text-[12px] text-gray-500">{t_cookie.necessaryDesc}</p>
                    </div>
                    <div className="w-12 h-6 bg-[#68A07C] rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-60">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  
                  {/* Analytics */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-[14px] text-[#1A365D]">{t_cookie.analytics}</p>
                      <p className="text-[12px] text-gray-500">{t_cookie.analyticsDesc}</p>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? 'bg-[#68A07C] justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                  
                  {/* Marketing */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-[14px] text-[#1A365D]">{t_cookie.marketing}</p>
                      <p className="text-[12px] text-gray-500">{t_cookie.marketingDesc}</p>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? 'bg-[#68A07C] justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3">
                  <button
                    onClick={handleAcceptSelected}
                    className="px-6 py-2.5 bg-[#1A365D] hover:bg-[#15294a] text-white text-[13px] font-medium rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    {t_cookie.acceptSelected}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
