import { NextResponse, type NextRequest } from 'next/server';
import { LANGS, type Lang } from './lib/i18n';

/**
 * Idioma automático.
 * Quem entra na página principal (/) é levado direto para a versão no idioma
 * do navegador (ou do país, se o navegador não indicar um idioma que temos).
 * - Se a pessoa escolher outro idioma no seletor, a escolha fica salva no
 *   cookie "lang" e é respeitada nas próximas visitas.
 * - Robôs de busca (Google etc.) não são redirecionados, para que cada idioma
 *   continue aparecendo no Google com o seu próprio endereço.
 */

const COOKIE = 'lang';

// País (código da Vercel) -> idioma, usado só quando o navegador não ajuda.
const COUNTRY_LANG: Record<string, Lang> = {
  BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',
  US: 'en', GB: 'en', CA: 'en', AU: 'en', NZ: 'en', IE: 'en', ZA: 'en', IN: 'en',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', UY: 'es', PY: 'es', BO: 'es', EC: 'es',
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr', SN: 'fr', CI: 'fr',
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',
  IT: 'it', SM: 'it',
  NL: 'nl',
  PL: 'pl',
  RU: 'ru', BY: 'ru', KZ: 'ru',
  TR: 'tr',
  JP: 'ja',
  CN: 'zh', TW: 'zh', HK: 'zh', SG: 'zh',
  KR: 'ko',
  SA: 'ar', AE: 'ar', EG: 'ar', MA: 'ar', DZ: 'ar', QA: 'ar', KW: 'ar', JO: 'ar', IQ: 'ar', OM: 'ar', BH: 'ar', TN: 'ar', LB: 'ar',
};

const BOT = /bot|crawler|spider|crawling|facebookexternalhit|whatsapp|telegram|slurp|preview/i;

function isLang(v: string | undefined): v is Lang {
  return !!v && (LANGS as readonly string[]).includes(v);
}

function fromAcceptLanguage(header: string | null): Lang | null {
  if (!header) return null;
  const prefs = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { base: tag.toLowerCase().split('-')[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const p of prefs) if (isLang(p.base)) return p.base;
  return null;
}

export function middleware(req: NextRequest) {
  // Robôs e prévias de link (WhatsApp, Facebook) veem a página sem redirecionar.
  if (BOT.test(req.headers.get('user-agent') ?? '')) return NextResponse.next();

  const saved = req.cookies.get(COOKIE)?.value;
  const lang: Lang =
    (isLang(saved) && saved) ||
    fromAcceptLanguage(req.headers.get('accept-language')) ||
    COUNTRY_LANG[(req.headers.get('x-vercel-ip-country') ?? '').toUpperCase()] ||
    'pt';

  if (lang === 'pt') return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${lang}/`;
  return NextResponse.redirect(url, 307);
}

// Só a página principal. As páginas /en/, /de/ etc. abrem sempre no idioma do endereço.
export const config = { matcher: ['/'] };
