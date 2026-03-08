import { useTranslation } from 'react-i18next';

export function SchemaMarkup() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'sk';
  
  // Получаем FAQ items для текущего языка
  const faqItems = t('faq.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  // MedicalBusiness Schema
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.drerkin.eu/#organization",
    "name": "Medicine of Coherence - Dr. Erkinbek Dzhamanbaev",
    "alternateName": "Medicína Koherencie",
    "description": currentLang === 'sk' 
      ? "Expert na integratívny manažment bolesti a medicínu koherencie. Viac ako 30 rokov medzinárodnej klinickej praxe."
      : currentLang === 'ru'
      ? "Эксперт в области системного управления болью и медицины когерентности. Более 30 лет международной клинической практики."
      : "Expert in integrative pain management and medicine of coherence. Over 30 years of international clinical practice.",
    "url": "https://www.drerkin.eu",
    "logo": "https://www.drerkin.eu/logo.png",
    "image": "https://www.drerkin.eu/dr-erkin.jpg",
    "telephone": "+421940270511",
    "email": "erkinslovakia@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rekreačná ulica, Poliklinika",
      "addressLocality": "Piešťany",
      "postalCode": "921 01",
      "addressCountry": "SK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.7921",
      "longitude": "17.8375"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
      "description": "Online consultations available anytime by appointment"
    },
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Bank Transfer",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "48.7921",
        "longitude": "17.8375"
      },
      "geoRadius": "5000 km"
    },
    "serviceArea": [
      { "@type": "Country", "name": "Slovakia" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "Austria" },
      { "@type": "Country", "name": "Czech Republic" },
      { "@type": "Country", "name": "Russia" },
      { "@type": "Country", "name": "Ukraine" }
    ],
    "medicalSpecialty": [
      "Pain Medicine",
      "Internal Medicine",
      "Integrative Medicine"
    ],
    "availableService": {
      "@type": "MedicalProcedure",
      "name": "6D Diagnostic Navigation",
      "description": "Comprehensive 60-minute systemic health analysis for complex chronic conditions"
    },
    "sameAs": [
      "https://www.facebook.com/drerkin.medicine",
      "https://www.instagram.com/pain.therapy",
      "https://www.linkedin.com/in/doctorerkin"
    ],
    "founder": {
      "@id": "https://www.drerkin.eu/#doctor"
    }
  };

  // Person (Doctor) Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.drerkin.eu/#doctor",
    "name": "Dr. Erkinbek Dzhamanbaev",
    "givenName": "Erkinbek",
    "familyName": "Dzhamanbaev",
    "honorificPrefix": "MUDr.",
    "honorificSuffix": "PhD, MBA",
    "jobTitle": currentLang === 'sk'
      ? "Expert na komplexné prípady a chronickú bolesť"
      : currentLang === 'ru'
      ? "Эксперт по комплексным случаям и хронической боли"
      : "Complex Case and Chronic Pain Expert",
    "description": currentLang === 'sk'
      ? "Lekár s viac ako 30 ročnou praxou špecializujúci sa na chronickú bolesť, fibromyalgiu a komplexné diagnózy."
      : currentLang === 'ru'
      ? "Врач с более чем 30-летним опытом, специализирующийся на хронической боли, фибромиалгии и сложных диагнозах."
      : "Physician with over 30 years of experience specializing in chronic pain, fibromyalgia, and complex diagnoses.",
    "image": "https://www.drerkin.eu/dr-erkin.jpg",
    "url": "https://www.drerkin.eu",
    "email": "erkinslovakia@gmail.com",
    "telephone": "+421940270511",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Piešťany",
      "addressCountry": "SK"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Medical University"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Medical Degree",
        "name": "MUDr. (Doctor of Medicine)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Doctoral Degree",
        "name": "PhD"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Business Degree",
        "name": "MBA"
      }
    ],
    "knowsAbout": [
      "Chronic Pain Management",
      "Fibromyalgia",
      "Chronic Fatigue Syndrome",
      "Post-COVID Syndrome",
      "HPA Axis Dysfunction",
      "Integrative Medicine",
      "6D Navigation System"
    ],
    "medicalSpecialty": [
      {
        "@type": "MedicalSpecialty",
        "name": "Pain Medicine"
      },
      {
        "@type": "MedicalSpecialty", 
        "name": "Internal Medicine"
      }
    ],
    "workLocation": {
      "@type": "MedicalClinic",
      "name": "Poliklinika Piešťany",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rekreačná ulica",
        "addressLocality": "Piešťany",
        "addressCountry": "SK"
      }
    },
    "worksFor": {
      "@id": "https://www.drerkin.eu/#organization"
    },
    "sameAs": [
      "https://www.facebook.com/drerkin.medicine",
      "https://www.instagram.com/pain.therapy",
      "https://www.linkedin.com/in/doctorerkin"
    ]
  };

  // FAQPage Schema (динамически из переводов)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Array.isArray(faqItems) ? faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    })) : []
  };

  // WebSite Schema для поиска
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dr. Erkin - Medicine of Coherence",
    "url": "https://www.drerkin.eu",
    "inLanguage": ["sk", "ru", "en"],
    "publisher": {
      "@id": "https://www.drerkin.eu/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
