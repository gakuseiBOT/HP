import Image from 'next/image';
import Link from 'next/link';
import Hamburger from './hamburger';
import NavLinks from './NavLinks';

const navItems = [
  {
    label: 'ホーム',
    link: '/',
  },
  {
    label: 'お知らせ',
    link: '/announce',
  },
  {
    label: '使い方',
    link: '/howto',
  },
  {
    label: '利用規約',
    link: '/tos',
  },
  {
    label: 'プライバシーポリシー',
    link: '/privacypolicy',
  },
  {
    label: '開発者紹介',
    link: '/member',
  },
  {
    label: 'お問い合わせ',
    link: '/contact',
  },
  {
    label: '更新情報',
    link: '/updates',
  },
  {
    label: 'スポンサー',
    link: '/sponsor',
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-900/10 bg-white/95">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="GakuseiBot ホーム"
        >
          <Image
            src={'/img/logo.png'}
            alt="GakuseiBot's Logo"
            width={352}
            height={81}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>
        <nav
          className="hidden lg:block"
          aria-label="メインナビゲーション"
        >
          <NavLinks links={navItems} />
        </nav>
        <div className="lg:hidden">
          <Hamburger links={navItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
