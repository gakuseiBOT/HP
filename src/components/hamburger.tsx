'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import NavLinks from '@/components/NavLinks';

/**
 * Hamburger component.
 *
 * @returns The rendered Hamburger component.
 */
const Hamburger = ({ links }: { links: { label: string; link: string }[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="メニューを開く"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2 5.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.5Zm0 4.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 4.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="サイトメニュー"
            className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col gap-6 border-l border-slate-200 bg-white p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Menu
              </span>
              <button
                type="button"
                aria-label="メニューを閉じる"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    d="M6 6l12 12M18 6 6 18"
                  />
                </svg>
              </button>
            </div>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="text-xl font-semibold tracking-tight text-slate-900">GakuseiBot</span>
            </Link>
            <NavLinks
              setIsMenuOpen={setIsMenuOpen}
              links={links}
              propClass="flex-col items-stretch gap-1 [&>a]:px-4 [&>a]:py-3 [&>a]:text-base [&>a]:w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hamburger;
