import { Button } from '@/components/button';
import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ - gakuseiBotコミュニティ',
  description: 'gakuseiBOT へのご依頼・ご質問はこちらから。',
};

const ContactsPage = () => {
  return (
    <main className="flex w-full flex-col">
      <PageHeader
        eyebrow="Contact"
        title="お問い合わせ先"
        description="ご依頼やご質問は下記の連絡先にて受け付けております。どうぞお気軽にお問い合わせください。"
      />
      <section
        id="contact"
        className="mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-sm sm:p-10">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Discord サポートサーバー
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Discord サーバーでは、お問い合わせやご質問に対応しております。
            <br className="hidden sm:block" />
            雑談チャンネルもありますので、お気軽にご参加ください。
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/discord">Discord サーバーに参加</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
