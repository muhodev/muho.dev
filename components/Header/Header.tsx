"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import cn from "classnames";

type NavItemProps = {
  href: string;
  label: ReactNode;
};

const navItems = [
  { href: "/about-me", label: "About" },
  { href: "/projects", label: "Works" },
  { href: "/blog", label: "Blog" },
  {
    href: "/contact",
    label: (
      <span className="bg-indigo-500 px-4 py-3 rounded-md text-center min-w-[7rem]">
        Contact me
      </span>
    ),
  },
];

function NavItem({ href, label }: NavItemProps) {
  return (
    <Link href={href} className="px-4 py-4 font-semibold block">
      {label}
    </Link>
  );
}

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="flex items-center justify-center sticky top-0 bg-background z-50">
      <div className="container h-24 flex items-center justify-between">
        <h1>
          <Link href="/" className="text-lg md:text-xl font-bold">
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
              "lg:static lg:top-auto lg:space-y-0 lg:left-auto lg:right-auto lg:flex lg:min-h-0 lg:py-0 lg:border-none lg:items-center gap-x-2 transition-all duration-150",
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
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
