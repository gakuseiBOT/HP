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
  feature: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  bugfix: 'bg-rose-50 text-rose-700 ring-rose-200',
  improvement: 'bg-blue-50 text-blue-700 ring-blue-200',
  other: 'bg-slate-100 text-slate-600 ring-slate-200',
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
    <article className="group py-5">
      <Link
        href={`/updates/${slug}`}
        className="block"
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900 transition-colors group-hover:text-blue-700">
            {title}
          </span>
          {isNew && (
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
              NEW
            </span>
          )}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <time>{formattedDate(date)}</time>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${typeColors[type] ?? typeColors.other}`}
          >
            {formattedType(type)}
          </span>
        </div>
      </Link>
    </article>
  );
}
