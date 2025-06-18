import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import Head from 'next/head';
import Link from 'next/link';

import Header from '@/components/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
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
