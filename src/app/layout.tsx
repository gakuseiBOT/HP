import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import Link from 'next/link';

import Header from '@/components/header';

export const metadata: Metadata = {
  title: {
    default: 'GakuseiBot コミュニティ',
    template: '%s | GakuseiBot',
  },
  description:
    'gakuseiBotは学生や開発者の支援を提供します。時間管理、クイズ機能、グローバルチャット機能などを搭載しております。',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleAnalytics gaId={'G-T218GPX3X5'} />
      <body className="flex min-h-dvh w-full flex-col">
        <Header />
        <div className="flex-1">
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </div>
        <footer className="mt-16 border-t border-slate-200/70 bg-white/70">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:px-8">
            <p className="text-center lg:text-left">
              Copyright&copy;2025 GakuseiBOTコミュニティ All Rights Reserved.
            </p>
            <Link
              href={'https://github.com/gakuseiBOT/HP/graphs/contributors'}
              className="font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              Credits
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
