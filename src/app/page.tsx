import { Metadata } from 'next';
import { Button } from '@/components/button';
import { getRecentPosts } from '@/lib/posts';
import PostList from '@/components/PostList';

export const metadata: Metadata = {
  title: 'gakuseiBotコミュニティ - 学生のためのDiscord Bot',
  description: 'gakuseiBotは学生や開発者の支援を提供します。時間管理、クイズ機能、モチベーション向上機能などを搭載しております。',
};

export default function Home() {
  const posts = getRecentPosts('announce', 4);
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white text-black space-y-0">
      <section className="w-full border flex flex-col items-center p-5 min-h-[370px] w-full bg-white text-black space-y-6 justify-center">
        <h2 className="text-lg">
          学生のためのDiscord Bot
        </h2>
        <h1 className="text-4xl font-bold mt-10">GakuseiBot</h1>
        <p className='text-center'>
          gakusei BOTは学生や開発者の支援を提供します。<br/>
          時間管理、クイズ機能、モチベーション向上機能などを搭載しております。
        </p>
        <Button href="/invite" className="mt-5">
          招待する
        </Button>
      </section>
      <section className='w-full min-h-[370px] flex flex-col items-center space-y-5 p-5 justify-center'>
        <h1 className='text-2xl font-semibold'>最新のお知らせ</h1>
        <PostList posts={posts} dirname='announce' className='lg:w-2/5 w-4/5 mx-auto h-[90px] justify-center' />
      </section>
      <section id="join" className="flex space-y-5 items-center min-w-full lg:p-20 p-10 flex-col bg-gray-100">
        <h3 className="text-2xl font-semibold">
          <a href="#join">サポートサーバー</a>
        </h3>
        <div className="text-center min-h-[150px] flex flex-col space-y-5">
          <p>サポートサーバーでは、Botに関する最新情報を得たり、サポートを受けたりすることができます。</p>
          <div className='flex lg:flex-row flex-col justify-center items-center lg:space-x-5 lg:space-y-0 space-y-3'>
            <Button<'Link'> href="/discord" className="lg:w-2/5 w-full" disabled={false}>
              Discord
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
