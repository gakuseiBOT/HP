import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import Link from 'next/link';
import Header from '@/components/header';

const title = "GakuseiBOTコミュニティ - ホームページ";
const description = "gakuseiBotは学生や開発者の支援を提供します。時間管理、クイズ機能、グローバルチャット機能などを搭載しております。";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s - GakuseiBOTコミュニティ"
  },
  description,

  openGraph: {
    title,
    description,
  },

  twitter: {
    title,
    description,
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleAnalytics gaId={'G-T218GPX3X5'} />
      <body className="w-full">
        <Header />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        <footer className="p-4 bg-gray-800 text-white w-full flex lg:flex-row flex-col items-center justify-center lg:justify-between relative">
          <Link
            href={'https://github.com/gakuseiBOT/HP/graphs/contributors'}
            className="text-center hover:text-blue mx-auto"
          >
            Copyright&copy;2025 GakuseiBOTコミュニティ All Rights Reserved. See credits here.
          </Link>
        </footer>
      </body>
    </html>
  );
}
