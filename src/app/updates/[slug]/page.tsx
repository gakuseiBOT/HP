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
    <main className="mx-auto flex w-full max-w-3xl flex-col px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Link
        href="/updates"
        className="inline-flex w-fit items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
      >
        <ArrowBackIcon style={{ fontSize: 18 }} /> 更新情報一覧
      </Link>
      <article className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Updates</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {update.title}
        </h1>
        <time className="mt-3 block text-sm text-slate-500">更新日: {formattedDate}</time>
        <div
          className="prose prose-slate prose-sm mt-8 max-w-none prose-headings:tracking-tight prose-a:text-blue-600 sm:prose-base"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
