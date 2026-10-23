import Link from 'next/link';
import { Post } from '@/lib/posts';
import { Button } from './button';

type PostCardProps = {
  dirname: string;
  slug: string;
  title: string;
  date: string;
  description: string;
};

const PostCard = ({ dirname, slug, title, date, description }: PostCardProps) => {
  return (
    <article className="flex h-full w-full flex-col border border-slate-900/10 bg-white p-5 text-slate-900 transition hover:bg-slate-50 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <time className="shrink-0 text-xs text-slate-500">{date}</time>
      </div>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{description}</p>
      <Link
        href={`/${encodeURIComponent(dirname)}/${encodeURIComponent(slug)}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:underline"
      >
        続きを読む
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
};

type PostListProps = {
  dirname: string;
  posts: Post[];
  className?: string;
  listClassName?: string;
  btnClassName?: string;
  btnDisabled?: boolean;
};

const PostList = ({
  dirname,
  posts,
  className,
  btnClassName,
  listClassName,
  btnDisabled = false,
}: PostListProps) => {
  return (
    <div className={`flex flex-col items-center gap-6 ${className ?? ''}`}>
      <div className={`grid w-full gap-4 ${listClassName ?? ''}`}>
        {posts.map((post) => (
          <PostCard
            dirname={dirname}
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date.toLocaleDateString()}
            description={post.description}
          />
        ))}
        {posts.length === 0 && (
          <p className="border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-sm text-slate-500">
            記事がありません。
          </p>
        )}
      </div>
      {!btnDisabled && !(posts.length === 0) && (
        <Button<'button'>
          href={`/${dirname}`}
          className={btnClassName}
        >
          もっと見る
        </Button>
      )}
    </div>
  );
};

export default PostList;
