import { getPostBySlug, getRecentPosts } from '@/lib/posts';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import PostList from '@/components/PostList';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { Metadata } from 'next';

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug('announce', slug);

  if (!post) {
    return {
      title: '記事が見つかりません | ',
      description: '指定された記事は見つかりませんでした。',
    };
  }

  return {
    title: `${post.title} | `,
    description: post.description || '詳細はこの記事をご覧ください。',
    openGraph: {
      title: post.title,
      description: post.description || '詳細はこの記事をご覧ください。',
      type: 'article',
      url: `/announce/${post.slug}`,
    },
  };
}

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug('announce', slug);
  if (!post) {
    notFound();
  }
  const posts = await getRecentPosts('announce', 8);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Link
        href="/announce"
        className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
      >
        ← お知らせ一覧
      </Link>
      <article className="mt-6">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {post.title}
        </h1>
        <time className="mt-3 block text-sm text-slate-500">
          {new Date(post.date).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <div className="markdown mt-8">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{ h1: 'h2' }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
      <section className="mt-16 border-t border-slate-200/70 pt-10">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">最近のアナウンス</h2>
        <PostList
          posts={posts}
          dirname="announce"
          className="mt-6"
          btnDisabled={true}
        />
      </section>
    </div>
  );
}
