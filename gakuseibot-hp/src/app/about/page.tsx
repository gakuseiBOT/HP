import { Button } from '@/components/button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  
};

const markdownString = `
`;

const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white text-black space-y-0">
      <ReactMarkdown remarkPlugins={[remarkGfm]} className='markdown'>{markdownString}</ReactMarkdown>
    </main>
  );
};

export default Home;