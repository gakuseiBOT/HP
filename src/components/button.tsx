'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent, ComponentPropsWithoutRef, JSX, forwardRef } from 'react';

const styles = {
  disabled: 'pointer-events-none opacity-50',
};

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href: string;
};
type CustomLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  disabled?: boolean;
};
type AS = 'button' | 'Link';
type Props<T extends AS> = T extends 'button' ? ButtonProps : CustomLinkProps;

/**
 * Represents a button component.
 *
 * @template AS - The type of the button component.
 * @param {Props<AS>} props - The props for the button component.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref for the button component.
 * @returns {JSX.Element} - The rendered button component.
 */
// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, Props<AS>>((props, ref) => {
  const router = useRouter();

  if ('href' in props && 'disabled' in props && props.disabled) {
    return (
      <span
        className={`${styles.disabled} inline-flex h-12 items-center justify-center rounded-full bg-slate-200 px-7 text-sm font-semibold text-slate-500 ${props.className ?? ''}`}
      >
        {props.children}
      </span>
    );
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>, href: string) => {
    event.preventDefault();
    router.push(href);
  };

  const { href, className } = props as ButtonProps;

  return (
    <button
      ref={ref}
      onClick={(event) => handleClick(event, href)}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-900 px-7 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl ${className ?? ''}`}
    >
      <span>{props.children}</span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}) as <T extends 'button' | 'Link' = 'button'>(p: Props<T>) => JSX.Element;

export default Button;
