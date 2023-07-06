import { GithubIcon, TwitterIcon } from "../Icons";

export default function Banner() {
  return (
    <section className="border-b border-zinc-700">
      <div className="container mx-auto my-32">
        <div className="text-6xl font-bold text-zinc-400">
          Frontend Developer
        </div>
        <div className="text-6xl font-bold text-indigo-200 mt-2">
          Indie Creator
        </div>
        <div className="text-6xl font-bold text-zinc-700 mt-2">Freelancer</div>
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
          <button className="rounded-full h-12 w-12 flex items-center justify-center bg-zinc-700 text-zinc-300 font-bold text-2xl">
            <TwitterIcon />
          </button>
          <button className="rounded-full h-12 w-12 flex items-center justify-center bg-zinc-700 text-zinc-300 font-bold text-2xl">
            <GithubIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
