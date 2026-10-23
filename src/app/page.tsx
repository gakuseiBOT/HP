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
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.12),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        />
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            学生のための Discord Bot
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            学生生活を、もっとスマートに。
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg">
            gakuseiBot は学生や開発者の支援を提供します。
            時間管理・クイズ・グローバルチャットなどを、いつもの Discord に。
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button
              href="/invite"
              className="w-full sm:w-auto"
            >
              招待する
            </Button>
            <Link
              href="/howto"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 sm:w-auto"
            >
              使い方を見る
            </Link>
          </div>
          <dl className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 text-left shadow-sm backdrop-blur-sm"
              >
                <dt className="text-sm font-semibold text-slate-900">{feature.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">News</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            最新のお知らせ
          </h2>
          <p className="max-w-xl text-sm text-slate-600 sm:text-base">
            gakuseiBot からの最新のアップデートをお届けします。
          </p>
        </div>
        <PostList
          posts={posts}
          dirname="announce"
          className="mx-auto mt-10 w-full max-w-3xl"
        />
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div
          id="join"
          className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-center text-white sm:px-12 lg:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
          />
          <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
            サポートサーバー
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            サポートサーバーでは、Bot に関する最新情報を得たり、サポートを受けたりすることができます。
          </p>
          <div className="relative mt-8 flex justify-center">
            <Button<'Link'>
              href="/discord"
              className="w-full sm:w-auto"
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
