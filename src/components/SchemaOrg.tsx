// @ts-nocheck
/* eslint-disable */
import React from 'react';

type Props = {
  lang: 'en' | 'ru' | 'sk';
};

const SchemaOrg = ({ lang }: Props) => {
  const baseUrl = "https://www.drerkin.eu";
  
  const socialLinks = [
    "https://www.facebook.com/drerkin.medicine",
    "https://www.instagram.com/pain.therapy",
    "https://www.linkedin.com/in/doctorerkin/",
    "https://ko-fi.com/erkindoc/shop"
  ];

  const content = {
    en: {
      name: "Dr. Erkinbek Dzhamanbaev",
      desc: "Expert in Integrative Medicine and 6D Diagnostics for complex chronic conditions. 30+ years of practice.",
      questions: [
        { q: "What is 6D Diagnostic Navigation?", a: "Comprehensive health analysis across biological, psychological, social, spiritual, digital, and environmental dimensions." },
        { q: "Do you offer online consultations?", a: "Yes, I provide international telemedicine for Russian-speaking clients." }
      ]
    },
    ru: {
      name: "Д-р Эркинбек Джаманбаев",
      desc: "Эксперт в области интегративной медицины и 6D-диагностики сложных хронических состояний. Более 30 лет практики.",
      questions: [
        { q: "Что такое 6D-диагностическая навигация?", a: "Комплексная система анализа здоровья в шести измерениях: биологическом, психологическом, социальном, духовном, цифровом и экологическом." },
        { q: "Проводите ли вы онлайн-консультации?", a: "Да, я провожу международные телемедицинские консультации для русскоязычных клиентов по всему миру." }
      ]
    },
    sk: {
      name: "MUDr. Erkinbek Džamanbajev, PhD, MBA",
      desc: "Odborník na integratívnu medicínu a 6D diagnostiku pre zložité chronické stavy. Viac ako 30 rokov klinickej praxe.",
      questions: [
        { q: "Čo je 6D diagnostická navigácia?", a: "Komplexný systém lekárskej analýzy v šiestich dimenziách: biologickej, psychologickej, sociálnej, duchovnej, digitálnej a environmentálnej." },
        { q: "Poskytujete online konzultácie?", a: "Áno, poskytujem telemedicínske služby pre rusky hovoriacich klientov a osobné stretnutia v Bratislave." }
      ]
    }
  };

  const c = content[lang] || content.en;

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
        "priceRange": "€100",
        "sameAs": socialLinks,
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
        "url": `${baseUrl}/${lang}`,
        "telephone": "+421940270511",
        "image": `${baseUrl}/photo.jpg`,
        "priceRange": "€100",
        "sameAs": socialLinks,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SK",
          "addressLocality": "Bratislava"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Medical Consultations",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": lang === 'ru' ? "6D-диагностическая навигация" : (lang === 'sk' ? "6D diagnostická navigácia" : "6D Diagnostic Navigation")
              },
              "price": "100.00",
              "priceCurrency": "EUR"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/${lang}/#faq`,
        "mainEntity": c.questions.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
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
