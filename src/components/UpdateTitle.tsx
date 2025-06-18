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
  feature: 'bg-green-200 text-green-800',
  bugfix: 'bg-red-200 text-red-800',
  improvement: 'bg-blue-200 text-blue-800',
  other: 'bg-gray-200 text-gray-800',
};

export default function UpdateTitle({ title, date, type, slug, isNew }: Props) {
  const formattedDate = (rawDate: unknown) => {
    let date: Date;

    if (typeof rawDate === 'string' || rawDate instanceof Date) {
      date = new Date(rawDate);
    } else {
      console.error('Invalid date format:', rawDate);
      return '不正な日付です';
    }

    if (isNaN(date.getTime())) {
      console.error('Invalid date format:', rawDate);
      return '不正な日付です';
    }

    return format(date, 'yyyy年MM月dd日', { locale: ja });
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
    <div className="border-b py-4">
      <Link
        href={`/updates/${slug}`}
        className="text-blue-600 hover:underline block"
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold">{title}</span>
          {isNew && <span className="text-xs text-white bg-red-500 px-2 py-0.4 rounded">NEW</span>}
        </div>
      </Link>
      <div className="text-sm text-gray-500 mt-1 flex items-center gap-4">
        <span>{formattedDate(date)}</span>
        <span className={`px-2 py-0.5 rounded text-xs ${typeColors[type]}`}>
          {formattedType(type)}
        </span>
      </div>
    </div>
  );
}
