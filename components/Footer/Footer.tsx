import Link from "next/link";
import { GithubIcon, TwitterIcon } from "../Icons";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-zinc-800 py-8 border-t border-zinc-700">
      <div className="container flex items-center gap-x-2 justify-between">
        <div>
          <span className="text-zinc-300">The source code available at </span>
          <Link href="" className="text-indigo-300">
            Github
          </Link>
        </div>
        <div className="flex items-center divide-x divide-zinc-600 text-zinc-400">
          <Link href="mailto:hi@muho.dev" className="  pr-4">
            hi@muho.dev
          </Link>
          <Link href="" className="px-4">
            <TwitterIcon />
          </Link>
          <Link href="" className="px-4">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
