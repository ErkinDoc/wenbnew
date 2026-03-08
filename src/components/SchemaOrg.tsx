import React from 'react';

interface SchemaOrgProps {
  lang: 'en' | 'ru' | 'sk';
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({ lang }) => {
  const descriptions = {
    ru: "Др. Эркинбек Джаманбаев — эксперт по системной медицине. 6D-диагностика сложных случаев: хроническая усталость, боли, выгорание, пост-COVID. Онлайн-консультации по всей Европе.",
    en: "Dr. Erkinbek Dzhamanbayev — systemic medicine expert. 6D diagnostics for complex cases: chronic fatigue, pain, burnout, post-COVID. Online consultations across Europe.",
    sk: "MUDr. Erkinbek Džamanbajev — expert na systémovú medicínu. 6D diagnostika komplexných prípadov: chronická únava, bolesť, vyhorenie, post-COVID. Online konzultácie po celej Európe."
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": lang === 'sk' ? "MUDr. Erkinbek Džamanbajev" : "Dr. Erkinbek Dzhamanbayev",
    "jobTitle": "MD, PhD, MBA",
    "image": "https://drerkin.eu/dr-erkin.webp",
    "description": descriptions[lang],
    // Исправлено: теперь ссылки соответствуют формату ?lang=
    "url": lang === 'sk' ? "https://drerkin.eu/" : `https://drerkin.eu/?lang=${lang}`,
    "telephone": "+421940270511",
    "priceRange": "100 EUR",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Piešťany",
      "addressCountry": "SK"
    },
    "areaServed": "Europe",
    "medicalSpecialty": [
      "Integrative Medicine",
      "Chronic Pain Management",
      "Rehabilitation Medicine",
      "Autonomic Nervous System Disorders"
    ],
    "knowsAbout": [
      "Systemic Medicine",
      "Chronic Fatigue Syndrome",
      "Burnout Syndrome",
      "Post-COVID Syndrome",
      "6D Navigation Model",
      "Medicine of Coherence"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "6D Diagnostics Consultation",
            "description": lang === 'ru' ? "Глубокий 60-минутный анализ через Zoom" : "In-depth 60-minute analysis via Zoom"
          },
          "price": "100.00",
          "priceCurrency": "EUR"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "24"
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaOrg;
