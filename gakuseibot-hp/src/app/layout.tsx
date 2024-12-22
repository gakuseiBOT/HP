import Image from "next/image";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import Hamburger from "@/components/hamburger";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "ホーム",
      link: "/",
    },
    {
      name: "お知らせ",
      link: "/announce",
    },
    {
      name: "使い方",
      link: "/howto",
    },
    {
      name: "利用規約",
      link: "/tos",
    },
    {
      name: "開発者紹介",
      link: "/member",
    },
    {
      name: "お問い合わせ",
      link: "/contact",
    }
  ];

  return (
    <html lang="ja">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GoogleAnalytics gaId={"GA-ID"} />
      <body className="w-full">
        <header className="flex flex-col justify-center items-center bg-[#2c3e50] text-white w-full">
          <Link href="/" className="m-3">
            <Image
              src={"/img/logo.png"}
              alt="UniProject's Logo"
              width={352}
              height={81}
            />
          </Link>
          <nav className="hidden lg:flex items-center justify-between p-2">
            <ul className="flex right-4 text-right space-x-5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.link
                  }>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Hamburger />
        </header>
        {children}
        <footer className="p-4 bg-gray-800 text-white w-full flex lg:flex-row flex-col items-center justify-center lg:justify-between relative">
          <Link href={"https://github.com/gakuseiBOT/HP/graphs/contributors"} className="text-center hover:text-blue mx-auto">
            Copyright&copy;2024 GakuseiBOTコミュニティ All Rights Reserved. See credits here.
          </Link>
        </footer>
      </body>
    </html>
  );
}
