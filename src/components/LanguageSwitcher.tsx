import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { homePath, langFromPath, type Lang } from '@/i18n';

const languages: { code: Lang; label: string; name: string }[] = [
  { code: 'sk', label: 'SK', name: 'Slovenčina' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'en', label: 'EN', name: 'English' },
];

interface LanguageSwitcherProps {
  variant?: 'dark' | 'light';
}

export function LanguageSwitcher({ variant = 'dark' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const { pathname, hash } = useLocation();
  const currentLang = (i18n.language || 'sk').split('-')[0];
  const onHome = pathname === '/' || langFromPath(pathname) !== null;
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-1 rounded-lg p-1 ${isDark ? 'bg-white/10' : 'bg-[#1A365D]/5'}`}>
      {languages.map((lang) => {
        const active = currentLang === lang.code;
        const cls = `px-3 py-1.5 rounded-md text-[13px] font-medium transition-all ${
          active
            ? isDark
              ? 'bg-white text-[#1A365D] shadow-sm'
              : 'bg-[#1A365D] text-white shadow-sm'
            : isDark
              ? 'text-white/70 hover:text-white hover:bg-white/10'
              : 'text-[#4A5568] hover:text-[#1A365D] hover:bg-[#1A365D]/10'
        }`;
        // On the home page each language has its own URL (/, /ru, /en) — real links help search engines.
        return onHome ? (
          <Link
            key={lang.code}
            to={homePath(lang.code) + (hash || '')}
            hrefLang={lang.code}
            lang={lang.code}
            title={lang.name}
            aria-current={active ? 'true' : undefined}
            className={cls}
          >
            {lang.label}
          </Link>
        ) : (
          <button
            key={lang.code}
            type="button"
            title={lang.name}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={cls}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
