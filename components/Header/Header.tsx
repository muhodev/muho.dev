import Link from "next/link";
import { ReactNode } from "react";

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
    <Link href={href} className="px-4 py-4 font-semibold">
      {label}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="flex items-center justify-center">
      <div className="container h-24 flex items-center justify-between">
        <h1>
          <Link href="/" className="text-lg md:text-xl font-bold">
            muho.dev
          </Link>
        </h1>
        <div className="flex items-center gap-x-2">
          {navItems.map((navItem) => (
            <NavItem
              key={navItem.href}
              href={navItem.href}
              label={navItem.label}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
