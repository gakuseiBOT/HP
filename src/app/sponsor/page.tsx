import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'スポンサー',
  description: '当プロジェクトを支援してくださるスポンサーのご紹介です。',
};

const sponsorDescription = `
当プロジェクトを支援してくださるスポンサーの皆様に心より感謝申し上げます。

## 現在のスポンサー
- Nothing
`;

const SponsorsPage = () => {
  return (
    <main className="flex w-full flex-col">
      <PageHeader
        eyebrow="Sponsors"
        title="スポンサー"
        description="当プロジェクトを支援してくださるスポンサーのご紹介です。"
      />
      <section
        id="sponsors"
        className="mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="prose prose-slate max-w-none rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm prose-headings:tracking-tight sm:p-10">
          <ReactMarkdown>{sponsorDescription}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
};

export default SponsorsPage;
