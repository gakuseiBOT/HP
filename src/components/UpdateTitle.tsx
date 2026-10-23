'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

type Props = {
  title: string;
  date: string;
  type: 'feature' | 'bugfix' | 'improvement' | 'other';
  slug: string;
  isNew: boolean;
};

const typeLabels: { [key: string]: string } = {
  feature: '新機能',
  bugfix: 'バグ修正',
  improvement: '改善',
  other: 'その他',
};

const typeColors: Record<string, string> = {
  feature: 'bg-slate-900 text-white',
  bugfix: 'bg-slate-700 text-white',
  improvement: 'bg-slate-600 text-white',
  other: 'bg-slate-500 text-white',
};

export default function UpdateTitle({ title, date, type, slug, isNew }: Props) {
  const formattedDate = (rawDate: unknown) => {
    let parsed: Date;

    if (typeof rawDate === 'string' || rawDate instanceof Date) {
      parsed = new Date(rawDate);
    } else {
      console.error('Invalid date format:', rawDate);
      return '不正な日付です';
    }

    if (isNaN(parsed.getTime())) {
      console.error('Invalid date format:', rawDate);
      return '不正な日付です';
    }

    return format(parsed, 'yyyy年MM月dd日', { locale: ja });
  };

  const formattedType = (type: unknown) => {
    const validTypes = ['feature', 'bugfix', 'improvement', 'other'];

    if (!validTypes.includes(type as string)) {
      console.error('Invalid type:', type);
      return '';
    }

    return typeLabels[type as string] ?? type;
  };

  return (
    <article className="py-4">
      <Link
        href={`/updates/${slug}`}
        className="block"
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900 hover:underline">{title}</span>
          {isNew && (
            <span className="bg-slate-900 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              NEW
            </span>
          )}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <time>{formattedDate(date)}</time>
          <span className={`px-1.5 py-0.5 ${typeColors[type] ?? typeColors.other}`}>
            {formattedType(type)}
          </span>
        </div>
      </Link>
    </article>
  );
}
