// @ts-nocheck
/* eslint-disable */
import React from 'react';

type Props = {
  lang: 'en' | 'ru' | 'sk';
};

const SchemaOrg = ({ lang }: Props) => {
  const baseUrl = "https://drerkin.eu";
  
  const data = {
    en: {
      name: "Dr. Erkinbek Dzhamanbaev",
      description: "Expert in Integrative Medicine and 6D Diagnostics for complex chronic conditions.",
      serviceName: "6D Diagnostic Navigation"
    },
    ru: {
      name: "Д-р Эркинбек Джаманбаев",
      description: "Специалист по интегративной медицине и 6D-диагностике сложных хронических состояний.",
      serviceName: "6D-диагностическая навигация"
    },
    sk: {
      name: "MUDr. Erkinbek Džamanbajev, PhD, MBA",
      description: "Odborník na integratívnu medicínu a 6D diagnostiku pre zložité chronické stavy.",
      serviceName: "6D diagnostická navigácia"
    }
  };

  const current = data[lang] || data.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${baseUrl}/${lang}/#physician`,
        "name": current.name,
        "url": `${baseUrl}/${lang}`,
        "telephone": "+421940270511",
        "image": `${baseUrl}/photo.jpg`,
        "description": current.description,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SK",
          "addressLocality": "Bratislava"
        }
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${baseUrl}/${lang}/#business`,
        "name": "Medicine of Coherence",
        "parentOrganization": { "@id": `${baseUrl}/${lang}/#physician` },
        "priceRange": "€100",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Medical Consultations",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": current.serviceName
              },
              "price": "100.00",
              "priceCurrency": "EUR"
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SchemaOrg;
