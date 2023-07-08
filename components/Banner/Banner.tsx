import Image from "next/image";
import { GithubIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import { EMAIL, GITHUB_URL, TWITTER_URL } from "@/constants/env";

export default function Banner() {
  return (
    <section className="border-b border-zinc-700">
      <div className="container mx-auto my-10 lg:my-24 text-center">
        <div className="mb-8 flex items-center justify-center overflow-hidden mx-auto w-20 h-20 lg:w-32 lg:h-32 text-xl rounded-full">
          <Image
            width={150}
            height={150}
            alt="muhodev's profile image"
            className="rounded-full overflow-hidden border-4 border-indigo-300"
            src="/assets/images/pp.jpeg"
          />
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold  text-zinc-400">
          Indie Creator
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-indigo-200 mt-2">
          Frontend Developer
        </div>

        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-zinc-700 mt-2">
          Freelancer
        </div>

        <div className="text-lg lg:text-2xl mt-8 lg:mt-16 text-zinc-400">
          I build ideas, design products and share the process on
          <Link
            href={TWITTER_URL ?? ""}
            target="_blank"
            className="text-green-200 font-bold underline pl-2"
          >
            #buildinpublic
          </Link>
        </div>

        <div className="mt-8 lg:mt-16 space-x-4 flex items-center justify-center">
          {EMAIL && (
            <Link
              href={`mailto:${EMAIL}`}
              className="hover:bg-indigo-500 transition-all duration-150 rounded-full h-12 min-w-[5rem] bg-zinc-700 text-zinc-200 font-bold flex items-center justify-center text-center text-sm lg:text-base"
            >
              Email
            </Link>
          )}
          {!!TWITTER_URL && (
            <Link
              href={TWITTER_URL}
              className="hover:bg-blue-400 transition-all duration-150 rounded-full h-12 w-12 flex items-center justify-center bg-zinc-700 text-zinc-300 font-bold text-lg lg:text-2xl"
            >
              <TwitterIcon />
            </Link>
          )}
          {!!GITHUB_URL && (
            <Link
              href={GITHUB_URL}
              className="hover:bg-black transition-all duration-150 rounded-full h-12 w-12 flex items-center justify-center bg-zinc-700 text-zinc-300 font-bold text-lg lg:text-2xl"
            >
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
