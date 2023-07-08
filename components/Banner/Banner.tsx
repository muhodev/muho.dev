import Image from "next/image";
import { GithubIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import { GITHUB_URL, TWITTER_URL } from "@/constants/env";

export default function Banner() {
  return (
    <section className="border-b border-zinc-700">
      <div className="container mx-auto my-32 flex flex-col gap-y-4 md:flex-row items-start justify-between">
        <div className="order-2 md:order-1">
          <div className="text-6xl font-bold text-zinc-400">
            Frontend Developer
          </div>
          <div className="text-6xl font-bold text-indigo-200 mt-2">
            Indie Creator
          </div>
          <div className="text-6xl font-bold text-zinc-700 mt-2">
            Freelancer
          </div>
          <div className="text-lg md:text-xl lg:text-2xl mt-16 text-zinc-400">
            I build ideas, design products and share the proces on
            <span className="text-indigo-200 font-bold underline pl-2">
              #buildinpublic
            </span>
          </div>
          <div className="mt-8 space-x-4 flex items-center">
            <button className="rounded-full h-12 min-w-[5rem] bg-zinc-700 text-zinc-200 font-bold text-center">
              Email
            </button>
            {!!TWITTER_URL && (
              <Link
                href={TWITTER_URL}
                className="rounded-full h-12 w-12 flex items-center justify-center bg-zinc-700 text-zinc-300 font-bold text-2xl"
              >
                <TwitterIcon />
              </Link>
            )}
            {!!GITHUB_URL && (
              <Link
                href={GITHUB_URL}
                className="rounded-full h-12 w-12 flex items-center justify-center bg-zinc-700 text-zinc-300 font-bold text-2xl"
              >
                <GithubIcon />
              </Link>
            )}
          </div>
        </div>
        <div className="order-1 md:order-2 mr-4 w-20 h-20 md:w-32 md:h-32 bg-slate-400 rounded-full">
          <Image
            width={150}
            height={150}
            alt="muhodev's profile image"
            className="rounded-full overflow-hidden border-4 border-indigo-300"
            src="/assets/images/pp.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
