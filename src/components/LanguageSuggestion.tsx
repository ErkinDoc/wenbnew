import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { homePath, type Lang } from '@/i18n';

const KEY = 'langSuggestionDismissed';

const TEXT: Record<'ru' | 'en', { text: string; cta: string }> = {
  ru: { text: 'Сайт есть на русском языке', cta: 'Перейти на русский' },
  en: { text: 'This site is available in English', cta: 'Switch to English' },
};

/**
 * On the Slovak home page, gently offers the Russian or English version
 * based on the browser language. No automatic redirect (that would confuse
 * search engines), just a small dismissible bar.
 */
export function LanguageSuggestion({ lang }: { lang: Lang }) {
  const [suggest, setSuggest] = useState<'ru' | 'en' | null>(null);

  useEffect(() => {
    if (lang !== 'sk') return;
    try {
      if (window.localStorage.getItem(KEY)) return;
    } catch {
      /* ignore */
    }
    const nav = (navigator.languages?.[0] || navigator.language || '').toLowerCase();
    if (!nav || nav.startsWith('sk') || nav.startsWith('cs')) return;
    if (/^(ru|uk|be|kk|ky|uz)/.test(nav)) setSuggest('ru');
    else setSuggest('en');
  }, [lang]);

  if (!suggest) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(KEY, '1');
    } catch {
      /* ignore */
    }
    setSuggest(null);
  };

  return (
    <div className="fixed bottom-4 left-4 right-24 sm:right-28 sm:left-auto sm:w-[320px] z-50 bg-white border border-[#E2E8F0] shadow-xl rounded-xl px-4 py-3 flex items-center gap-2">
      <p className="flex-1 text-[14px] text-[#1A365D] font-sans">
        {TEXT[suggest].text}
        <Link
          to={homePath(suggest)}
          onClick={dismiss}
          className="block mt-1 font-semibold text-[#68A07C] hover:underline"
        >
          {TEXT[suggest].cta} →
        </Link>
      </p>
      <button onClick={dismiss} aria-label="Close" className="p-2 text-[#718096] hover:text-[#1A365D]">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
