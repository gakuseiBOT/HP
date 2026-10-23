import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/button';
import { getRecentPosts } from '@/lib/posts';
import PostList from '@/components/PostList';

export const metadata: Metadata = {
  title: 'gakuseiBotコミュニティ - 学生のためのDiscord Bot',
  description:
    'gakuseiBotは学生や開発者の支援を提供します。時間管理、クイズ機能、グローバルチャット機能などを搭載しております。',
};

const features = [
  {
    title: '時間管理',
    description: '課題や予定を Discord 上でまとめて管理。学習リズムを整えます。',
  },
  {
    title: 'クイズ機能',
    description: '友達やサーバーメンバーと気軽に遊べるクイズを搭載しています。',
  },
  {
    title: 'グローバルチャット',
    description: '複数のサーバーをつないで、新しい交流のきっかけをつくります。',
  },
];

export default function Home() {
  const posts = getRecentPosts('announce', 4);
  return (
    <main className="flex w-full flex-col">
      <section className="border-b border-slate-900/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">gakuseiBot</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              学生生活を、もっとスマートに。
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              gakuseiBot は学生や開発者の支援を提供します。時間管理・クイズ・グローバルチャットなどを、いつもの Discord に。
            </p>
            <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button href="/invite">Bot を招待する</Button>
              <Link
                href="/howto"
                className="inline-flex h-10 items-center justify-center rounded-md border border-slate-900/15 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                コマンド一覧
              </Link>
            </div>
          </div>
          <div className="w-full max-w-md border border-slate-900/10 bg-white">
            <div className="border-b border-slate-900/10 px-5 py-3">
              <p className="text-sm font-semibold text-slate-900">主な機能</p>
            </div>
            <dl className="divide-y divide-slate-900/10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="px-5 py-4"
                >
                  <dt className="text-sm font-semibold text-slate-900">{feature.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">News</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              最新のお知らせ
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              gakuseiBot からの最新のアップデートをお届けします。
            </p>
          </div>
          <Link
            href="/announce"
            className="text-sm font-semibold text-slate-700 transition hover:text-slate-900"
          >
            一覧を見る →
          </Link>
        </div>
        <PostList
          posts={posts}
          dirname="announce"
          className="mt-6 w-full"
          listClassName="grid-cols-1 md:grid-cols-2"
        />
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div
          id="join"
          className="border border-slate-900/10 bg-white px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Support</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              サポートサーバー
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              サポートサーバーでは、Bot に関する最新情報を得たり、サポートを受けたりすることができます。
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <Button<'Link'>
              href="/discord"
              disabled={false}
            >
              Discord に参加
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
