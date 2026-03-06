// @ts-nocheck
/* eslint-disable */
import React from 'react';

type Lang = 'en' | 'ru' | 'sk';

type Props = {
  lang: Lang;
};

const SchemaOrg = ({ lang }: Props) => {
  const baseUrl = "https://www.drerkin.eu";

  const socialLinks = [
    "https://www.facebook.com/drerkin.medicine",
    "https://www.instagram.com/pain.therapy",
    "https://www.linkedin.com/in/doctorerkin/",
    "https://ko-fi.com/erkindoc/shop",
  ];

  const content = {
    en: {
      name: "Dr. Erkinbek Dzhamanbaev, PhD, MBA",
      desc: "Expert in Integrative Medicine and 6D Diagnostics for complex chronic conditions. 30+ years of clinical practice. EU License.",
      specialties: ["Integrative Medicine", "Pain Management", "Chronic Fatigue Specialist"],
      serviceName: "6D Diagnostic Navigation",
      serviceDesc: "60-minute online diagnostic analysis for complex chronic conditions.",
      catalogName: "Medical Consultations",
    },
    ru: {
      name: "Д-р Эркинбек Джаманбаев, PhD, MBA",
      desc: "Специалист по интегративной медицине и 6D-диагностике сложных хронических состояний. Более 30 лет клинической практики. Лицензия ЕС.",
      specialties: ["Интегративная медицина", "Лечение боли", "Специалист по хронической усталости"],
      serviceName: "6D-диагностическая навигация",
      serviceDesc: "60-минутный онлайн-диагностический анализ сложных хронических состояний.",
      catalogName: "Медицинские консультации",
    },
    sk: {
      name: "MUDr. Erkinbek Džamanbajev, PhD, MBA",
      desc: "Odborník na integratívnu medicínu a 6D diagnostiku pre zložité chronické stavy. Viac ako 30 rokov klinickej praxe. EU licencia.",
      specialties: ["Integratívna medicína", "Liečba bolesti", "Špecialista na chronickú únavu"],
      serviceName: "6D diagnostická navigácia",
      serviceDesc: "60-minútová online diagnostická analýza pre zložité chronické stavy.",
      catalogName: "Lekárske konzultácie",
    },
  };

  const c = content[lang] || content.en;

  const commonAddress = {
    "@type": "PostalAddress",
    "addressCountry": "SK",
    "addressLocality": "Bratislava",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${baseUrl}/${lang}/#physician`,
        "name": c.name,
        "url": `${baseUrl}/${lang}`,
        "telephone": "+421940270511",
        "image": `${baseUrl}/photo.jpg`,
        "description": c.desc,
        "priceRange": "€€",
        "sameAs": socialLinks,
        "address": commonAddress,
        "areaServed": ["Slovakia", "European Union"],
        "knowsLanguage": ["sk", "ru", "en"],
        "medicalSpecialty": c.specialties,
        "isAcceptingNewPatients": true,
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "PhD",
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "MBA",
          }
        ],
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${baseUrl}/${lang}/#business`,
        "name": "Medicine of Coherence",
        "parentOrganization": { "@id": `${baseUrl}/${lang}/#physician` },
        "url": `${baseUrl}/${lang}`,
        "telephone": "+421940270511",
        "image": `${baseUrl}/photo.jpg`,
        "description": c.desc,
        "address": commonAddress,
        "areaServed": ["Slovakia", "European Union"],
        "priceRange": "€€",
        "sameAs": socialLinks,
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Credit Card, Bank Transfer, Online Payment",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": c.catalogName,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": c.serviceName,
                "description": c.serviceDesc,
              },
              "price": 100,
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  );
};

export default SchemaOrg;
