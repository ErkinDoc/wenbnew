// Vercel Routing Middleware: old links with ?lang=xx -> clean URLs (301).
// /?lang=ru -> /ru, /?lang=en -> /en, /?lang=sk -> /, any other path just drops ?lang.
// Other query params (utm_*, etc.) are preserved.
export const config = {
  matcher: ['/((?!assets/|_vercel/|.*\\.[a-z0-9]+$).*)'],
};

const HOME: Record<string, string> = { ru: '/ru', en: '/en', sk: '/' };

export default function middleware(request: Request): Response | undefined {
  const url = new URL(request.url);
  if (!url.searchParams.has('lang')) return undefined;

  const lang = (url.searchParams.get('lang') || '').toLowerCase();
  url.searchParams.delete('lang');
  if (url.pathname === '/' && HOME[lang]) url.pathname = HOME[lang];

  return Response.redirect(url.toString(), 301);
}
