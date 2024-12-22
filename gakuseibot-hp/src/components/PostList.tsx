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
        <div className="post-card text-black w-full" key={slug}>
            <div className='flex content-end flex-row justify-between mb-2'>
                <h2 className='text-xl'>{title}</h2><small className='content-end'>{date}</small>
            </div>
            <p className='text-sm mb-2'>{description}</p>
            <Link href={`/${dirname}/${slug}`}>続きを読む</Link>
        </div>
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

const PostList = ({ dirname, posts, className, btnClassName, listClassName, btnDisabled = false }: PostListProps) => {
    return (
        <div className={`${className} flex flex-col items-center space-y-3 lg:space-y-0`}>
            <div className={`flex flex-col items-center space-y-1 lg:flex-grow w-full divide-y divide-y-3 divide-gray-400 ${listClassName}`}>
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
            </div>
            {btnClassName && (
                <Button<'button'> href={`/${dirname}`} disabled={btnDisabled} className={btnClassName}>
                    もっと見る
                </Button>
            )}
        </div>
    );
};

export default PostList;