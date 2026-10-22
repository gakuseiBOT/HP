import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import updates from '@/data/updates.json';
import fs from 'fs/promises';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function sanitizeSlug(slug: string): string | null {
  if (!slug || typeof slug !== 'string') return null;
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;
  return slug;
}

export default async function UpdateDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const safeSlug = sanitizeSlug(slug);
  if (!safeSlug) return notFound();

  const update = updates.find((u) => u.slug === safeSlug);
  if (!update) return notFound();

  const baseDir = path.resolve(process.cwd(), 'src/data/updates');
  const mdPath = path.resolve(baseDir, `${update.slug}.md`);
  if (!mdPath.startsWith(baseDir)) return notFound();

  let contentHtml = '';
  try {
    const fileContent = await fs.readFile(mdPath, 'utf-8');
    const processed = await remark().use(html, { sanitize: true }).process(fileContent);
    contentHtml = processed.toString();
  } catch (err) {
    console.error('Markdown読み込み失敗:', err);
    contentHtml = '<p>本文が見つかりません</p>';
  }

  const formattedDate = format(new Date(update.date), 'yyyy年MM月dd日', { locale: ja });

  return (
    <main className="flex flex-col items-center w-full min-h-screen space-y-0 text-black bg-white">
      <section className="w-full border flex flex-col items-center p-5 min-h-[150px] bg-white text-black space-y-6 justify-center">
        <h2 className="mt-10 text-4xl font-bold">更新情報</h2>
        <h1 className="text-2xl font-bold mb-2">{update.title}</h1>
        <div className="text-sm mb-4">更新日: {formattedDate}</div>
      </section>

      <div className="w-full flex justify-start max-w-2xl mx-auto">
        <Link
          href="/updates"
          className="text-lg mt-6 mb-4 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-150 font-medium gap-1"
        >
          <ArrowBackIcon style={{ fontSize: 20 }} /> 戻る
        </Link>
      </div>
      <div
        className="prose prose-sm prose-blue"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
