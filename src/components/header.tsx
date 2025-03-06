import Image from "next/image";
import Link from "next/link";
import Hamburger from "./hamburger";

const Header = () => {
  const navItems = [
    {
      label: "ホーム",
      link: "/",
    },
    {
      label: "お知らせ",
      link: "/announce",
    },
    {
      label: "使い方",
      link: "/howto",
    },
    {
      label: "利用規約",
      link: "/tos",
    },
    {
      label: "プライバシーポリシー",
      link: "/privacypolicy",
    },
    {
      label: "開発者紹介",
      link: "/member",
    },
    {
      label: "お問い合わせ",
      link: "/contact",
    },
    {
      label: "スポンサー",
      link: "/sponsor",
    },
  ];
  return (
    <header className="flex flex-col justify-center items-center bg-[url('/img/header.webp')] bg-center bg-cover text-white w-full text-black">
      <Link
        href="/"
        className="mt-6"
      >
        <Image
          src={"/img/logo.png"}
          alt="GakuseiBot's Logo"
          width={352}
          height={81}
        />
      </Link>
      <nav className="w-full bg-black bg-opacity-50 justify-center hidden lg:flex items-center p-2 text-white font-semibold m-3">
        <ul className="flex right-4 text-right space-x-5 jusitfy-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Hamburger links={navItems} />
    </header>
  );
};

export default Header;
