import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  date: Date;
  description: string;
  content: string;
};

const POSTS_ROOT = path.join(process.cwd(), 'posts');

function sanitizeSlug(slug: string): string | null {
  if (!slug || typeof slug !== 'string') return null;
  // Only allow safe slug characters
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;
  return slug;
}

export function getAllPosts(dirpath: string): Post[] {
  const postsDirectory = path.resolve(POSTS_ROOT, dirpath);
  if (!postsDirectory.startsWith(POSTS_ROOT)) return [];
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.resolve(postsDirectory, filename);
      if (!filePath.startsWith(postsDirectory)) return null;
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date,
        description: data.description,
        content,
      } as Post;
    })
    .filter((p): p is Post => p !== null);
}

export function getRecentPosts(dirpath: string, limit: number = 5): Post[] {
  const postsDirectory = path.resolve(POSTS_ROOT, dirpath);
  if (!postsDirectory.startsWith(POSTS_ROOT)) return [];
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.resolve(postsDirectory, filename);
      if (!filePath.startsWith(postsDirectory)) return null;
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date,
        description: data.description,
        content,
      } as Post;
    })
    .filter((p): p is Post => p !== null);

  const res = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
  return res;
}

export function getPostBySlug(dirpath: string, slug: string): Post | null {
  const safeSlug = sanitizeSlug(slug);
  if (!safeSlug) return null;
  const postsDirectory = path.resolve(POSTS_ROOT, dirpath);
  if (!postsDirectory.startsWith(POSTS_ROOT)) return null;
  const filePath = path.resolve(postsDirectory, `${safeSlug}.md`);
  if (!filePath.startsWith(postsDirectory)) return null;
  if (!fs.existsSync(filePath)) return null;
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: safeSlug,
      title: data.title,
      date: new Date(data.date),
      description: data.description,
      content,
    };
  } catch {
    return null;
  }
}
