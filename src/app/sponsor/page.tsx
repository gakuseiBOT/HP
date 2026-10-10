import { NextPage } from 'next';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

export const metadata: Metadata = {
  title: 'スポンサー',
  description: '当プロジェクトを支援してくださるスポンサーのご紹介です。',
};

const sponsorDescription = `
当プロジェクトを支援してくださるスポンサーの皆様に心より感謝申し上げます。

## 現在のスポンサー
- Nothing
`;

const SponsorsPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black space-y-4">
      <section
        id="sponsors"
        className="flex flex-col items-center justify-center flex-1 w-full space-y-6 px-3 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold">スポンサー</h1>
        <div className="w-full max-w-2xl text-left text-base md:text-lg space-y-4">
          <ReactMarkdown>{sponsorDescription}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
};

export default SponsorsPage;
