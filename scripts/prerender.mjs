// Generates static HTML for each public route so that search engines,
// Facebook/WhatsApp previews etc. see real content, titles and links.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, topicRoutes } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const routes = [
  { url: '/', lang: 'sk', file: 'index.html' },
  { url: '/ru', lang: 'ru', file: 'ru/index.html' },
  { url: '/en', lang: 'en', file: 'en/index.html' },
  { url: '/publications', lang: 'sk', file: 'publications/index.html' },
  { url: '/privacy', lang: 'sk', file: 'privacy/index.html' },
  ...topicRoutes,
];

for (const r of routes) {
  const { html, head, htmlAttributes } = await render(r.url, r.lang);
  const out = template
    .replace(/<html[^>]*>/, `<html ${htmlAttributes || `lang="${r.lang}"`}>`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)
    .replaceAll('hrefLang=', 'hreflang=');
  if (out.includes('<!--app-head-->') || out.includes('<!--app-html-->')) {
    throw new Error(`placeholders not replaced for ${r.url}`);
  }
  const target = path.join(dist, r.file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, out);
  console.log(`prerendered ${r.url} -> dist/${r.file} (${(out.length / 1024).toFixed(0)} kB)`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
