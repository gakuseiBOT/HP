import { Metadata } from 'next';
import { Button } from '@/components/button';
import { getRecentPosts } from '@/lib/posts';
import PostList from '@/components/PostList';

export const metadata: Metadata = {
  title: 'GakuseiBot',
};

export default function Home() {
  const posts = getRecentPosts('announce', 4);
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white text-black space-y-0">
      
    </main>
  );
}
