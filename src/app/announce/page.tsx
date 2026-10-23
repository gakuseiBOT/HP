import React from 'react';
import { Metadata } from 'next';
import PostList from '@/components/PostList';
import PageHeader from '@/components/PageHeader';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'アナウンス一覧 - gakuseiBotコミュニティ',
  description: 'gakuseiBOTのアナウンス一覧です。',
};

const Announce = () => {
  const posts = getAllPosts('announce');
  return (
    <main className="flex w-full flex-col">
      <PageHeader
        eyebrow="Announce"
        title="アナウンス一覧"
        description="gakuseiBot からのお知らせをまとめています。"
      />
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <PostList
          dirname="announce"
          posts={posts}
          btnDisabled={true}
        />
      </div>
    </main>
  );
};

export default Announce;
