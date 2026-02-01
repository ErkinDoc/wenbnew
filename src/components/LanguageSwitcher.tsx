import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const languages = [
  { code: 'sk', label: 'SK', flag: '🇸🇰' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
];

interface LanguageSwitcherProps {
  variant?: 'dark' | 'light';
}

export function LanguageSwitcher({ variant = 'dark' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-1 rounded-lg p-1 ${
      isDark ? 'bg-white/10' : 'bg-[#1A365D]/5'
    }`}>
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-all ${
            currentLang === lang.code
              ? isDark 
                ? 'bg-white text-[#1A365D] shadow-sm' 
                : 'bg-[#1A365D] text-white shadow-sm'
              : isDark
                ? 'text-white/70 hover:text-white hover:bg-white/10'
                : 'text-[#4A5568] hover:text-[#1A365D] hover:bg-[#1A365D]/10'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
}
