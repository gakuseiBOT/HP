'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type PropsType = {
  links: { label: string; link: string }[];
  propClass?: string;
  setIsMenuOpen?: (arg0: boolean) => void;
};

/**
 * Renders the navigation links component.
 *
 * @param propClass - The additional class name for styling.
 * @param setIsMenuOpen - The function to set the state of the menu open status.
 */
const NavLinks = ({ links, propClass, setIsMenuOpen }: PropsType) => {
  const currentPath = usePathname();

  return (
    <div className={`flex items-center gap-1 ${propClass ?? ''}`}>
      {links.map((link) => {
        const isActive =
          currentPath === link.link ||
          (link.link !== '/' && (currentPath?.startsWith(`${link.link}/`) ?? false));

        return (
          <Link
            //? Close hamburger menu
            onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
            href={link.link}
            aria-current={isActive ? 'page' : undefined}
            className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
            key={link.label}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
