// @ts-nocheck
/* eslint-disable */
import React from 'react';

type Props = {
  lang: 'en' | 'ru' | 'sk';
};

const SchemaOrg = ({ lang }: Props) => {
  const baseUrl = "https://drerkin.eu";
  
  const content = {
    en: {
      name: "Dr. Erkinbek Dzhamanbaev",
      desc: "Expert in Integrative Medicine and 6D Diagnostics.",
      q1: "What is 6D Diagnostics?",
      a1: "It is a comprehensive medical navigation system analyzing health across six dimensions: biological, psychological, social, spiritual, digital, and environmental.",
      q2: "Do you provide online consultations?",
      a2: "Yes, I provide telemedicine services for Russian-speaking clients worldwide and local consultations in Bratislava."
    },
    ru: {
      name: "Д-р Эркинбек Джаманбаев",
      desc: "Специалист по интегративной медицине и 6D-диагностике.",
      q1: "Что такое 6D-диагностика?",
      a1: "Это комплексная система медицинской навигации, анализирующая здоровье в шести измерениях: биологическом, психологическом, социальном, духовном, цифровом и экологическом.",
      q2: "Проводите ли вы онлайн-консультации?",
      a2: "Да, я провожу телемедицинские консультации для русскоязычных клиентов по всему миру и очные приемы в Братиславе."
    },
    sk: {
      name: "MUDr. Erkinbek Džamanbajev, PhD, MBA",
      desc: "Odborník na integratívnu medicínu a 6D diagnostiku.",
      q1: "Čo je 6D diagnostika?",
      a1: "Ide o komplexný systém lekárskej navigácie, ktorý analyzuje zdravie v šiestich dimenziách: biologickej, psychologickej, sociálnej, duchovnej, digitálnej a environmentálnej.",
      q2: "Poskytujete online konzultácie?",
      a2: "Áno, poskytujem telemedicínske služby pre rusky hovoriacich klientov po celom svete a osobné konzultácie v Bratislave."
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
        "description": c.desc,
        "telephone": "+421940270511",
        "address": { "@type": "PostalAddress", "addressCountry": "SK", "addressLocality": "Bratislava" }
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/${lang}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": c.q1,
            "acceptedAnswer": { "@type": "Answer", "text": c.a1 }
          },
          {
            "@type": "Question",
            "name": c.q2,
            "acceptedAnswer": { "@type": "Answer", "text": c.a2 }
          }
        ]
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
