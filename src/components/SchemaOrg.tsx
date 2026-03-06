// @ts-nocheck
/* eslint-disable */
import React from 'react';

type Lang = 'en' | 'ru' | 'sk';

interface Props {
  lang: Lang;
}

const SchemaOrg: React.FC<Props> = ({ lang }) => {
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
      desc: "Expert in Integrative Medicine and 6D Diagnostics. Consultations at Poliklinika Piešťany (Rekreačná 2).",
      specialties: ["Integrative Medicine", "Pain Management", "Chronic Fatigue Specialist"],
      serviceName: "6D Diagnostic Navigation",
      serviceDesc: "60-minute comprehensive health analysis across six dimensions.",
      catalogName: "Medical Consultations",
    },
    ru: {
      name: "Д-р Эркинбек Джаманбаев, PhD, MBA",
      desc: "Специалист по интегративной медицине и 6D-диагностике. Прием в Поликлинике Пьештяны (Rekreačná 2).",
      specialties: ["Интегративная медицина", "Лечение боли", "Специалист по хронической усталости"],
      serviceName: "6D-диагностическая навигация",
      serviceDesc: "60-минутный комплексный анализ здоровья в шести измерениях.",
      catalogName: "Медицинские консультации",
    },
    sk: {
      name: "MUDr. Erkinbek Džamanbajev, PhD, MBA",
      desc: "Odborník na integratívnu medicínu a 6D diagnostiku. Konzultácie v Poliklinike Piešťany (Rekreačná 2).",
      specialties: ["Integratívna medicína", "Liečba bolesti", "Špecialista na chronickú únavu"],
      serviceName: "6D diagnostická navigácia",
      serviceDesc: "60-minútová komplexná analýza zdravia v šiestich dimenziách.",
      catalogName: "Lekárske konzultácie",
    },
  };

  const c = content[lang] || content.en;

  const commonAddress = {
    "@type": "PostalAddress",
    "streetAddress": "Rekreačná 2",
    "addressLocality": "Piešťany",
    "postalCode": "921 01",
    "addressCountry": "SK",
    "addressRegion": "Trnavský kraj",
  };

  const geoCoordinates = {
    "@type": "GeoCoordinates",
    "latitude": 48.574,
    "longitude": 17.814
  };

  const openingHours = [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "16:00"
    }
  ];

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
        "geo": geoCoordinates,
        "openingHoursSpecification": openingHours,
        "areaServed": ["Slovakia", "European Union"],
        "knowsLanguage": ["sk", "ru", "en"],
        "medicalSpecialty": c.specialties,
        "isAcceptingNewPatients": true,
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "name": "PhD" },
          { "@type": "EducationalOccupationalCredential", "name": "MBA" }
        ]
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
        "geo": geoCoordinates,
        "priceRange": "€€",
        "sameAs": socialLinks,
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Credit Card, Bank Transfer, Online Payment",
        "openingHoursSpecification": openingHours,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": c.catalogName,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": c.serviceName,
                "description": c.serviceDesc
              },
              "price": 100,
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  );
};

export default SchemaOrg;
