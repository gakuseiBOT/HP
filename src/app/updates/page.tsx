import UpdateTitle from '@/components/UpdateTitle';
import PageHeader from '@/components/PageHeader';
import fs from 'fs/promises';
import path from 'path';
import { Metadata } from 'next';

type UpdateItem = {
  title: string;
  date: string;
  type: 'feature' | 'bugfix' | 'improvement' | 'other';
  slug: string;
};

const isNew = (dateStr: string) => {
  const now = new Date();
  const posted = new Date(dateStr);
  const diff = (now.getTime() - posted.getTime()) / (1000 * 60 * 60 * 24);
  return diff < 4; // 3日以内
};

export const metadata: Metadata = {
  title: '更新情報 - gakuseiBotコミュニティ',
  description: 'gakuseiBOTの更新情報をお知らせします。',
};

export default async function UpdatesPage() {
  const filePath = path.join(process.cwd(), 'src/data/updates.json');

  const file = await fs.readFile(filePath, 'utf-8');
  const updates: UpdateItem[] = JSON.parse(file);

  return (
    <main className="flex w-full flex-col">
      <PageHeader
        eyebrow="Updates"
        title="更新情報"
        description="日々新しくなる gakuseiBOT の様子をお伝えします。"
      />
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="divide-y divide-slate-900/10 border border-slate-900/10 bg-white px-5 sm:px-8">
          {updates.map((update) => (
            <UpdateTitle
              key={update.slug}
              title={update.title}
              date={update.date}
              type={update.type}
              slug={update.slug}
              isNew={isNew(update.date)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
