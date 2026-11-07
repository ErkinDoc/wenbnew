// Used only at build time (scripts/prerender.mjs) to generate static HTML
// for search engines and social previews. The browser still runs the normal SPA.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import i18n, { type Lang } from './i18n';
import { AppRoutes } from './App';

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
