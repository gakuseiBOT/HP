"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PropsType = {
    propClass?: string;
    setIsMenuOpen?: (arg0: boolean) => void;
};

/**
 * Renders the navigation links component.
 *
 * @param propClass - The additional class name for styling.
 * @param setIsMenuOpen - The function to set the state of the menu open status.
 */
const NavLinks = ({ propClass, setIsMenuOpen }: PropsType) => {
    const currentPath = usePathname();

    const links = [
        { label: "ABOUT", href: "/about" },
        { label: "CONTACT", href: "/contact" }
    ];

    return (
        <div
            className={`flex gap-3 mx-3 max-[899px]:flex-col max-[899px]:text-white 
      max-[899px]:gap-9 max-[767px]:w-[fit-content] max-[767px]:last:w-[70%] ${propClass}`}
        >
            {links
                .map((link) => (
                    <Link
                        //? Close hamburger menu
                        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
                        href={link.href}
                        className={`w-[fit-content] hover:bg-slate-700 hover:text-primary/60 px-3 py-1 rounded-md text-sm font-medium cursor-pointer text-[1.1rem]
            ${currentPath == link.href
                                ? "bg-slate-700 cursor-default shadow-1 text-primary/70 hover:text-primary/60 "
                                : ""
                            }`}
                        key={link.label}
                    >
                        {link.label}
                    </Link>
                ))}
        </div>
    );
};

export default NavLinks;