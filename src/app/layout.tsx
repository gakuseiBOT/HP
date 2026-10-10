import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import '@/styles/globals.css';

const title = "GakuseiBOTコミュニティ - ホームページ";
const description = "gakuseiBotは学生や開発者の支援を提供します。時間管理、クイズ機能、グローバルチャット機能などを搭載しております。";

export const metadata: Metadata = {
  title,
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
        <Footer />
      </body>
    </html>
  );
}
