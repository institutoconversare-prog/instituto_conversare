import { notFound } from 'next/navigation';
import Landing from '@/components/Landing';
import { isLang } from '@/lib/i18n';
import { metadataFor } from '@/lib/meta';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return isLang(lang) ? metadataFor(lang) : {};
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === 'pt') notFound();
  return <Landing lang={lang} />;
}
