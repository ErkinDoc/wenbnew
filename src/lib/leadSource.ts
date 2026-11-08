// Lead attribution without cookies: remembers utm_source for the visit (sessionStorage)
// and appends "page · source" to WhatsApp messages at click time (no hydration impact).
const KEY = 'lead_src';

export function initLeadSource() {
  try {
    const p = new URLSearchParams(window.location.search);
    const src = p.get('utm_source') || p.get('src');
    if (src) sessionStorage.setItem(KEY, [src, p.get('utm_campaign')].filter(Boolean).join('/'));
  } catch { /* storage unavailable */ }

  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null;
    if (!a || a.dataset.tagged) return;
    try {
      const url = new URL(a.href);
      let src = '';
      try { src = sessionStorage.getItem(KEY) || ''; } catch { /* ignore */ }
      const page = window.location.pathname.replace(/\/+$/, '') || '/';
      const tag = `\n\n[${page}${src ? ' · ' + src : ''}]`;
      const text = (url.searchParams.get('text') || '') + tag;
      a.href = `${url.origin}${url.pathname}?text=${encodeURIComponent(text)}`;
      a.dataset.tagged = '1';
    } catch { /* leave link unchanged */ }
  }, true);
}
