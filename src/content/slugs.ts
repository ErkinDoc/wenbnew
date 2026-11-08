// URL slugs for the topic (SEO landing) pages. Kept separate from the content
// so i18n/index.ts can detect the language of a URL without loading all texts.
export type TopicLang = 'sk' | 'ru' | 'en';
export const TOPIC_IDS = ['back-pain', 'fatigue', 'second-opinion', 'diagnostics'] as const;
export type TopicId = (typeof TOPIC_IDS)[number];

export const TOPIC_SLUGS: Record<TopicId, Record<TopicLang, string>> = {
  'back-pain': { sk: 'bolest-chrbta', ru: 'bol-v-spine', en: 'chronic-back-pain' },
  fatigue: { sk: 'chronicka-unava', ru: 'hronicheskaya-ustalost', en: 'chronic-fatigue' },
  'second-opinion': { sk: 'druhy-nazor-lekara', ru: 'vtoroe-mnenie-vracha', en: 'second-medical-opinion' },
  diagnostics: { sk: 'diagnostika', ru: 'diagnostika', en: 'diagnostics' },
};

export const topicPath = (id: TopicId, lang: TopicLang) =>
  lang === 'sk' ? `/${TOPIC_SLUGS[id].sk}` : `/${lang}/${TOPIC_SLUGS[id][lang]}`;

/** "/ru/bol-v-spine" -> { id: 'back-pain', lang: 'ru' } */
export function findTopic(pathname: string): { id: TopicId; lang: TopicLang } | null {
  const clean = pathname.replace(/\/+$/, '') || '/';
  for (const id of TOPIC_IDS) {
    for (const lang of ['sk', 'ru', 'en'] as const) {
      if (topicPath(id, lang) === clean) return { id, lang };
    }
  }
  return null;
}
