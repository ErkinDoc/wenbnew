/* eslint-disable */
// @ts-nocheck
import React from 'react';
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();

  // Безопасное получение данных из перевода
  const rawPackages = t('services.packages', { returnObjects: true });
  const packages = Array.isArray(rawPackages) ? rawPackages : [];

  // Функция выбора ссылки на основе URL
  const getCorrectLink = () => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      if (currentUrl.includes('/sk') || currentUrl.includes('/en')) {
        return 'https://forms.gle/13N35XNrZKdvnJJPA';
      }
    }
    return 'https://forms.gle/Gb6nj1SURsMk6G9c7';
  };

  return (
    <section id="services" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', color: '#1A365D', marginBottom: '20px' }}>
            {t('services.title')}
          </h2>
          <p style={{ color: '#4A5568', fontSize: '18px' }}>
            {t('services.subtitle')}
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {packages.map((pkg, index) => (
            <div key={index} style={{ 
              padding: '40px', 
              border: '1px solid #E2E8F0', 
              borderRadius: '16px',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '24px', color: '#1A365D', margin: '0 0 10px 0' }}>{pkg.name}</h3>
              <p style={{ color: '#718096', fontSize: '14px', marginBottom: '20px' }}>{pkg.subtitle}</p>
              <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#1A365D', marginBottom: '30px' }}>
                {pkg.price}
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                {Array.isArray(pkg.features) && pkg.features.map((feat, i) => (
                  <li key={i} style={{ marginBottom: '12px', fontSize: '14px', color: '#4A5568', display: 'flex', alignItems: 'start' }}>
                    <span style={{ color: '#68A07C', marginRight: '10px' }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={getCorrectLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  padding: '16px', 
                  backgroundColor: '#1A365D', 
                  color: '#ffffff', 
                  textAlign: 'center', 
                  borderRadius: '12px', 
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                {pkg.cta || 'Apply'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
