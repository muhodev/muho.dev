"use client";
import Link from "next/link";
import { GithubIcon, TwitterIcon } from "../Icons";
import {
  EMAIL,
  GITHUB_URL,
  SOURCE_CODE_URL,
  TWITTER_URL,
} from "@/constants/env";
import { navItems, NavItem } from "../Header/Header";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-zinc-800 py-8 border-t border-zinc-700">
      <div className="container">
        <div className="flex gap-x-10 flex-wrap gap-y-4 mb-4 justify-center lg:justify-start">
          {navItems.map((navItem) => (
            <NavItem
              key={navItem.href}
              href={navItem.href}
              label={navItem.label}
              className="text-zinc-300"
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-y-4 items-center gap-x-2 justify-between">
          <div>
            <span className="text-zinc-400">The source code available at </span>
            {SOURCE_CODE_URL && (
              <Link
                href={SOURCE_CODE_URL}
                target="_blank"
                className="text-indigo-300"
              >
                Github
              </Link>
            )}
          </div>
          <div className="flex items-center divide-x divide-zinc-600 text-zinc-400">
            {!!EMAIL && (
              <Link href={`mailto:${EMAIL}`} className="  pr-4">
                {EMAIL}
              </Link>
            )}
            {!!TWITTER_URL && (
              <Link href={TWITTER_URL} target="_blank" className="px-4">
                <TwitterIcon />
              </Link>
            )}
            {!!GITHUB_URL && (
              <Link href={GITHUB_URL} target="_blank" className="px-4">
                <GithubIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
