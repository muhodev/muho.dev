"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import cn from "classnames";

type NavItemProps = {
  href: string;
  label: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/blog", label: "Blog" },
  {
    href: "/contact",
    label: "Contact Me",
    className:
      "bg-indigo-500 px-4 rounded-md text-center min-w-[9rem] justify-center inline-flex",
  },
];

export function NavItem({ href, label, className, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("py-2.5 font-semibold block", className)}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header className="flex items-center justify-center sticky top-0 bg-background z-50">
      <div className="container h-24 flex items-center justify-between">
        <h1>
          <Link href="/" className="text-lg lg:text-xl font-bold">
            muho.dev
          </Link>
        </h1>
        <div>
          <HamburgerMenu
            isOpen={isOpen}
            onToggle={() => setOpen((prev) => !prev)}
          />
          <div
            className={cn(
              "lg:static lg:top-auto lg:space-y-0 lg:left-auto lg:right-auto lg:flex lg:min-h-0 lg:py-0 lg:border-none lg:items-center gap-x-2 transition-all duration-150 lg:space-x-8",
              {
                "border-t border-zinc-700 block absolute top-full left-0 right-0 bg-background w-full py-10 min-h-[95vh] container mx-auto space-y-8 text-lg":
                  isOpen,
                " hidden lg:flex": !isOpen,
              }
            )}
          >
            {navItems.map((navItem) => (
              <NavItem
                key={navItem.href}
                href={navItem.href}
                label={navItem.label}
                className={navItem.className}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
