import type { Metadata } from 'next';
import { LANGS, HTML_LANG, dict, pathOf, type Lang } from './i18n';
import { SITE_URL } from './config';

export function metadataFor(lang: Lang): Metadata {
  const t = dict(lang);
  const languages: Record<string, string> = Object.fromEntries(LANGS.map((l) => [HTML_LANG[l], pathOf(l)]));
  languages['x-default'] = '/';
  return {
    metadataBase: new URL(SITE_URL),
    title: `${t.title} — Instituto Conversare`,
    description: t.sub,
    alternates: { canonical: pathOf(lang), languages },
    icons: { icon: '/assets/logo.png' },
    openGraph: {
      type: 'website',
      title: t.title,
      description: t.h1,
      url: pathOf(lang),
      locale: HTML_LANG[lang].replace('-', '_'),
      images: [{ url: `/assets/${lang}-capa-01.jpg`, width: 827, height: 1170, alt: t.title }],
    },
  };
}
