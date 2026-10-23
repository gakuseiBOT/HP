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
    <article className="group flex h-full w-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 text-slate-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-blue-700">
          {title}
        </h3>
        <time className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {date}
        </time>
      </div>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{description}</p>
      <Link
        href={`/${encodeURIComponent(dirname)}/${encodeURIComponent(slug)}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
      >
        続きを読む
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
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
          <p className="rounded-2xl border border-dashed border-slate-300 bg-white/60 px-6 py-10 text-center text-sm text-slate-500">
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
