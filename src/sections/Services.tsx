/* eslint-disable */
// @ts-nocheck
import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();

  // 1. Защита от ошибок в JSON: если данных нет, используем пустой массив
  const rawData = t('services.packages', { returnObjects: true });
  const packages = Array.isArray(rawData) ? rawData : [];

  // 2. Логика ссылок, не зависящая от состояния системы перевода
  const getUrl = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('/sk') || path.includes('/en')) {
        return 'https://forms.gle/13N35XNrZKdvnJJPA';
      }
    }
    return 'https://forms.gle/Gb6nj1SURsMk6G9c7';
  };

  return (
    <section id="services" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A365D] mb-4">
            {t('services.title')}
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className="p-8 border rounded-2xl border-gray-200 hover:border-[#1A365D] transition-all">
              <h3 className="text-2xl font-serif font-bold text-[#1A365D] mb-2">{pkg.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{pkg.subtitle}</p>
              <div className="text-4xl font-serif font-bold text-[#1A365D] mb-6">{pkg.price}</div>
              
              <ul className="space-y-3 mb-8">
                {Array.isArray(pkg.features) && pkg.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-[#68A07C] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-bold text-white bg-[#1A365D] flex items-center justify-center gap-2 hover:bg-[#2C5282]"
              >
                {pkg.cta || 'Apply'}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
