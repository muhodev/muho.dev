const works = [
  {
    title: "Navisio",
    description: "A shopify alternative next-gen & fast ecommerce platform",
  },
  {
    title: "Craftpage",
    description: "No-code website builder. Currently beta",
  },
  {
    title: "Powered",
    description: "Creating an api for frontend developers from UI",
  },
];

export default function FeaturedWorks() {
  return (
    <section className="border-b border-zinc-700">
      <div className="container mx-auto py-32">
        <div className="flex items-center justify-between">
          <h3 className="text-indigo-100 text-5xl font-bold">Works</h3>
          <button className="text-lg font-medium text-zinc-300">
            Show All Works
          </button>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.title}
              className="bg-zinc-800 rounded-2xl border border-zinc-700 px-10 py-10"
            >
              <h4 className="text-3xl text-zinc-300 font-bold text-center">
                {work.title}
              </h4>
              <p className="text-zinc-400 mt-10 text-center text-xl">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
