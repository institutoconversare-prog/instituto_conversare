import texts from '@/content/texts.json';

export const LANGS = ['pt', 'en', 'es', 'fr', 'de', 'it', 'nl', 'pl', 'ru', 'tr', 'ja', 'zh', 'ko', 'ar', 'hi'] as const;
export type Lang = (typeof LANGS)[number];

export type Dict = (typeof texts)['pt'];

export const HTML_LANG: Record<Lang, string> = {
  pt: 'pt-BR', en: 'en', es: 'es', fr: 'fr', de: 'de', it: 'it', nl: 'nl', pl: 'pl',
  ru: 'ru', tr: 'tr', ja: 'ja', zh: 'zh-CN', ko: 'ko', ar: 'ar', hi: 'hi',
};

/** Fonte extra do Google Fonts para escritas não latinas. */
export const SCRIPT_FONT: Partial<Record<Lang, string>> = {
  ja: 'Noto Sans JP', zh: 'Noto Sans SC', ko: 'Noto Sans KR', ar: 'Noto Sans Arabic', hi: 'Noto Sans Devanagari',
};

export function isLang(v: string): v is Lang {
  return (LANGS as readonly string[]).includes(v);
}

export function dict(lang: Lang): Dict {
  return (texts as Record<Lang, Dict>)[lang];
}

export function dirOf(lang: Lang): 'rtl' | 'ltr' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

/** Endereço de cada idioma: português na raiz, os demais em /xx/. */
export function pathOf(lang: Lang): string {
  return lang === 'pt' ? '/' : `/${lang}/`;
}
