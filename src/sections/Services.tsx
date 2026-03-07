/* eslint-disable */
// @ts-nocheck
import React from 'react';
import { useTranslation } from 'react-i18next';

export function Services({ onAssessmentClick }: { onAssessmentClick: () => void }) {
  const { t } = useTranslation();
  
  // Безопасное получение данных из перевода
  const rawPackages = t('services.packages', { returnObjects: true });
  const packages = Array.isArray(rawPackages) ? rawPackages : [];

  return (
    <section id="services" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', color: '#1A365D', marginBottom: '20px', fontWeight: 'bold' }}>
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
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease-in-out',
              backgroundColor: '#fff'
            }}>
              <div>
                <h3 style={{ fontSize: '24px', color: '#1A365D', margin: '0 0 10px 0', fontWeight: 'bold' }}>
                  {pkg.name}
                </h3>
                <p style={{ color: '#718096', fontSize: '14px', marginBottom: '20px' }}>
                  {pkg.subtitle}
                </p>
                
                {/* Список особенностей услуги */}
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                  {pkg.features && Array.isArray(pkg.features) && pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{ marginBottom: '10px', color: '#4A5568', display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#38A169', marginRight: '10px' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div style={{ fontSize: '28px', color: '#1A365D', fontWeight: 'bold', marginBottom: '20px' }}>
                  {pkg.price}
                </div>
                
                {/* Исправленная кнопка */}
                <button
                  onClick={onAssessmentClick}
                  style={{ 
                    display: 'block',
                    width: '100%',
                    padding: '16px',
                    backgroundColor: '#1A365D',
                    color: '#ffffff',
                    textAlign: 'center',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2c5282'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1A365D'}
                >
                  {pkg.cta || t('common.orderNow') || 'Apply'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
