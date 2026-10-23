'use client';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import NavLinks from '@/components/NavLinks';

/**
 * Hamburger component.
 *
 * @returns The rendered Hamburger component.
 */
const Hamburger = ({ links }: { links: { label: string; link: string }[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const dialog = dialogRef.current;
    const previousActive = document.activeElement as HTMLElement | null;
    const trigger = triggerRef.current;
    const getFocusable = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
      );

    getFocusable()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      (previousActive ?? trigger)?.focus();
    };
  }, [isMenuOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="メニューを開く"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsMenuOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center border border-slate-900/15 bg-white text-slate-700 transition hover:bg-slate-50"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2 5.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.5Zm0 4.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 4.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 14.5Z" />
        </svg>
      </button>
      {mounted &&
        isMenuOpen &&
        createPortal(
          <div
            id="mobile-menu"
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-950/50"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label="サイトメニュー"
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col gap-6 overflow-y-auto border-l border-slate-900/10 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="メニューを閉じる"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center border border-slate-900/15 text-slate-600 transition hover:bg-slate-50"
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
          </div>,
          document.body
        )}
    </>
  );
};

export default Hamburger;
