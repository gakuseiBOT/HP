'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { ComponentPropsWithoutRef, JSX, Ref, forwardRef } from 'react';
const styles = {
  commonDesign: "border-b text-black px-4 py-2 leading-none m-2",
  linkDisabled: "opacity-50 cursor-not-allowed leading-none",
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
  const router = useRouter()
  const handleClick = (e: any, href: string) => {
    e.preventDefault()
    router.push(href)
  }

  // propsにhrefがあればLinkコンポーネントとしてレンダリング
  /*
  if ('href' in props) {
    const { disabled, ...linkAttributes } = props as unknown as CustomLinkProps;
    return (
      <Link className={`${styles.commonDesign} ${disabled && styles.linkDisabled}`} {...linkAttributes}>
        {linkAttributes.children}
      </Link>
    );
  }*/

  const buttonAttributes = props as ButtonProps;
  const { disabled, ...linkAttributes } = props as unknown as CustomLinkProps;
  return (
    <>
      <button onClick={(e) => handleClick(e, buttonAttributes.href)} className={`${disabled && styles.linkDisabled} ${props.className} group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200`}><span>{buttonAttributes.children}</span><div className="ml-1 transition group-hover:translate-x-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div></button>
    </>
  );
}) as <T extends 'button' | 'Link' = 'button'>(p: Props<T>) => JSX.Element;