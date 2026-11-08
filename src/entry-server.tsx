// Used only at build time (scripts/prerender.mjs) to generate static HTML
// for search engines and social previews. The browser still runs the normal SPA.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import i18n, { type Lang } from './i18n';
import { AppRoutes } from './App';
import { TOPIC_IDS, topicPath } from './content/slugs';
import { LANGS } from './i18n';

/** All topic pages: { url, lang, file } for prerendering. */
export const topicRoutes = TOPIC_IDS.flatMap((id) =>
  LANGS.map((lang) => {
    const url = topicPath(id, lang);
    return { url, lang, file: `${url.slice(1)}/index.html` };
  })
);

export async function render(url: string, lang: Lang) {
  await i18n.changeLanguage(lang);
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );
  const h = helmetContext.helmet!;
  const head = [h.title, h.meta, h.link, h.script].map((x) => x.toString()).join('\n    ');
  return { html, head, htmlAttributes: h.htmlAttributes.toString() };
}
