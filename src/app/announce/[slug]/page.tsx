import { getPostBySlug, getRecentPosts } from '@/lib/posts';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import PostList from '@/components/PostList';

import { Metadata } from 'next';

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug('announce', slug);

  if (!post) {
    return {
      title: '記事が見つかりません  | ',
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
      url: `https://announce/${slug}`,
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
    return <div>記事が見つかりません。</div>;
  }
  const posts = await getRecentPosts('announce', 8);

  return (
    <div className="bg-white min-h-screen w-full text-black p-5">
      <article className="min-h-96 p-4 w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-2">
          {new Date(post.date).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <div className="markdown mx-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{ h1: 'h2' }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
      <h1 className="text-2xl mx-auto lg:w-2/5 w-4/5 text-left mb-5">最近のアナウンス</h1>
      <PostList
        posts={posts}
        dirname="announce"
        className={'min-h-[200px] bg-white lg:w-2/5 w-4/5 mx-auto'}
      />
    </div>
  );
}
