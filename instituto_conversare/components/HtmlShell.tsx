import { HTML_LANG, SCRIPT_FONT, dirOf, type Lang } from '@/lib/i18n';
import '@/app/globals.css';

/** Documento HTML de cada idioma (lang, direção do texto e fontes). */
export default function HtmlShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const extra = SCRIPT_FONT[lang];
  const families = ['Lora:ital,wght@0,500;0,700;1,500', 'DM+Sans:wght@400;500;700'];
  if (extra) families.push(`${extra.replace(/ /g, '+')}:wght@400;700`);
  const href = `https://fonts.googleapis.com/css2?${families.map((f) => `family=${f}`).join('&')}&display=swap`;
  const stack = extra ? `'${extra}',` : '';
  return (
    <html lang={HTML_LANG[lang]} dir={dirOf(lang)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={href} />
        <style>{`:root{--sans:'DM Sans',${stack}system-ui,sans-serif;--serif:Lora,${stack}Georgia,serif}`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
