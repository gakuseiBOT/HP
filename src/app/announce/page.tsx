import { NextPage } from 'next';
import React from 'react';
import { Metadata } from 'next';
import PostList from '@/components/PostList';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'アナウンス一覧 - gakuseiBotコミュニティ',
  description: 'gakuseiBOTのアナウンス一覧です。',
};

const ContactsPage: NextPage = () => {
  const posts = getAllPosts('announce');
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black space-y-10 p-5">
      <h1 className="text-4xl font-bold mt-10">アナウンス一覧</h1>
      <p className="text-lg">お知らせ一覧です。</p>
      <PostList
        dirname="announce"
        posts={posts}
        className="lg:w-2/5 w-4/5 mx-auto mt-10"
        btnDisabled={true}
      />
    </main>
  );
};

export default ContactsPage;
