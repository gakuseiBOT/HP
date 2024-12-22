import Link from "next/link";
import { ComponentPropsWithoutRef, JSX, Ref, forwardRef } from "react";
const styles = {
  commonDesign: "border-b text-white px-4 py-2 leading-none m-2",
  linkDisabled: "opacity-50 cursor-not-allowed leading-none",
};

// buttonタグのprops + ref
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  ref?: Ref<HTMLButtonElement>;
};
// next/link のprops + disabled
type CustomLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  disabled?: boolean;
};
// Buttonコンポーネントが受け取ることができる値
type AS = "button" | "Link";
// Buttonコンポーネントが設定できるprops
type Props<T extends AS> = T extends "button" ? ButtonProps : CustomLinkProps;

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, Props<AS>>((props, ref) => {
  // propsにhrefがあればLinkコンポーネントとしてレンダリング
  if ("href" in props) {
    const { disabled, ...linkAttributes } = props as unknown as CustomLinkProps;
    return (
      <a
        className={`${styles.commonDesign} ${disabled && styles.linkDisabled}`}
        href={String(linkAttributes.href)}
      >
        {linkAttributes.children}
      </a>
    );
  }

  // buttonタグとしてレンダリング
  const buttonAttributes = props as ButtonProps;
  return (
    <button ref={ref} className={styles.commonDesign} {...buttonAttributes}>
      {buttonAttributes.children}
    </button>
  );
}) as <T extends "button" | "Link" = "button">(p: Props<T>) => JSX.Element;
