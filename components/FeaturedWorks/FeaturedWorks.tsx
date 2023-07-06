import Link from "next/link";

const works = [
  {
    title: "Navisio",
    slug: "navisio",
    description: "A shopify alternative next-gen & fast ecommerce platform",
  },
  {
    title: "Craftpage",
    description: "No-code website builder. Currently beta",
    slug: "craftpage",
  },
  {
    title: "Powered",
    description: "Creating an API for frontend developers from UI",
    slug: "powered",
  },
];

export default function FeaturedWorks() {
  return (
    <section className="border-b border-zinc-700">
      <div className="container mx-auto py-32">
        <div className="flex items-center justify-between">
          <h3 className="text-zinc-300 text-5xl font-bold flex items-end gap-x-2">
            <span>Works</span>
            <span className="text-zinc-700 text-4xl">#4</span>
          </h3>
          <Link
            href="/works"
            className="hover:underline text-lg font-medium text-indigo-200"
          >
            Show All Works
          </Link>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.title}
              className="bg-zinc-800 rounded-3xl border border-zinc-700 px-10 py-10"
            >
              <h4 className="text-3xl text-zinc-300 font-bold text-center">
                <Link className="hover:underline" href={`/works/${work.slug}`}>
                  {work.title}
                </Link>
              </h4>
              <div className="flex items-center justify-center mt-6">
                <div className="flex items-center gap-x-1 rounded-full px-2 font-bold text-xs py-1 border-green-300 text-green-300 border">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300"></span>
                  <span>Currently Building</span>
                </div>
              </div>
              <p className="text-zinc-400 mt-6 text-center text-xl">
                {work.description}
              </p>
              <footer>
                <Link
                  href={`/works/${work.slug}`}
                  className="text-center text-indigo-300 block mt-6 hover:underline"
                >
                  Go detai
                </Link>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
