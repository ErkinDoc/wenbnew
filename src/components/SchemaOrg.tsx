// @ts-nocheck
/* eslint-disable */
import React from 'react';

type Props = {
  lang: 'en' | 'ru' | 'sk';
};

const SchemaOrg = ({ lang }: Props) => {
  const baseUrl = "https://www.drerkin.eu";
  
  // Социальные сети и внешние профили
  const socialLinks = [
    "https://www.facebook.com/drerkin.medicine",
    "https://www.instagram.com/pain.therapy",
    "https://www.linkedin.com/in/doctorerkin/",
    "https://ko-fi.com/erkindoc/shop"
  ];

  const content = {
    en: {
      name: "Dr. Erkinbek Dzhamanbaev",
      desc: "Expert in Integrative Medicine and 6D Diagnostics for complex chronic conditions.",
      questions: [
        { q: "What is 6D Diagnostic Navigation?", a: "A comprehensive medical analysis evaluating health across six dimensions: biological, psychological, social, spiritual, digital, and environmental." },
        { q: "Do you offer online consultations?", a: "Yes, I provide international telemedicine for Russian-speaking clients and local appointments in Bratislava." }
      ]
    },
    ru: {
      name: "Д-р Эркинбек Джаманбаев",
      desc: "Эксперт в области интегративной медицины и 6D-диагностики сложных хронических состояний.",
      questions: [
        { q: "Что такое 6D-диагностическая навигация?", a: "Это комплексная система анализа здоровья в шести измерениях: биологическом, психологическом, социальном, духовном, цифровом и экологическом." },
        { q: "Проводите ли вы онлайн-консультации?", a: "Да, я провожу международные телемедицинские консультации для русскоязычных клиентов по всему миру." }
      ]
    },
    sk: {
      name: "MUDr. Erkinbek Džamanbajev, PhD, MBA",
      desc: "Odborník na integratívnu medicínu a 6D diagnostiku pre zložité chronické stavy.",
      questions: [
        { q: "Čo je 6D diagnostická navigácia?", a: "Komplexný systém analýzy zdravia v šiestich dimenziách: biologickej, psychologickej, sociálnej, duchovnej, digitálnej a environmentálnej." },
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
        "sameAs": socialLinks,
        "priceRange": "€100",
        "image": `${baseUrl}/logo.png`
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
