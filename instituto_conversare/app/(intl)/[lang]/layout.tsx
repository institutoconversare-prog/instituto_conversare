import { notFound } from 'next/navigation';
import HtmlShell from '@/components/HtmlShell';
import { LANGS, isLang } from '@/lib/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.filter((l) => l !== 'pt').map((lang) => ({ lang }));
}

export default async function IntlLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === 'pt') notFound();
  return <HtmlShell lang={lang}>{children}</HtmlShell>;
}
