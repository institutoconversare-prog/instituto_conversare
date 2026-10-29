'use client';

import { useRouter } from 'next/navigation';
import { LANGS, pathOf, type Lang } from '@/lib/i18n';

export default function LanguageSelect({ current, names }: { current: Lang; names: Record<Lang, string> }) {
  const router = useRouter();
  return (
    <label className="langsel">
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f7d7a" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="9.5" />
        <path d="M2.5 12h19M12 2.5c2.6 2.8 3.9 6 3.9 9.5s-1.3 6.7-3.9 9.5c-2.6-2.8-3.9-6-3.9-9.5s1.3-6.7 3.9-9.5z" />
      </svg>
      <span className="sr">Idioma / Language</span>
      <select value={current} onChange={(e) => router.push(pathOf(e.target.value as Lang))} aria-label="Idioma / Language">
        {LANGS.map((l) => (
          <option key={l} value={l}>{names[l]}</option>
        ))}
      </select>
    </label>
  );
}
