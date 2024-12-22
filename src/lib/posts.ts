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

export function getAllPosts(dirpath: string): Post[] {
  const postsDirectory = path.join(process.cwd(), 'posts', dirpath);
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      description: data.description,
      content,
    };
  });
}

export function getRecentPosts(dirpath: string, limit: number = 5): Post[] {
  const postsDirectory = path.join(process.cwd(), 'posts', dirpath);
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      description: data.description,
      content,
    };
  });

  const res = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
  return res;
}

export function getPostBySlug(dirpath: string, slug: string): Post {
  const postsDirectory = path.join(process.cwd(), 'posts', dirpath);
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: new Date(data.date),
    description: data.description,
    content,
  };
}