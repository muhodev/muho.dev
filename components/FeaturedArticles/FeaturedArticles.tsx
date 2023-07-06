const articles = [
  {
    slug: "developing-animation",
    title: "Animated components with Framer",
    description: "A shopify alternative next-gen & fast ecommerce platform",
  },
  {
    slug: "testing-react",
    title: "Testing react applications",
    description: "No-code website builder. Currently beta",
  },
];

export default function FeaturedArticles() {
  return (
    <section>
      <div className="container mx-auto py-32">
        <div className="flex items-center justify-between">
          <h3 className="text-indigo-100 text-5xl font-bold">Articles</h3>
          <button className="text-lg font-medium text-zinc-300">
            Show All Articles
          </button>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="bg-zinc-800 rounded-2xl border border-zinc-700 px-10 py-10"
            >
              <h4 className="text-3xl text-zinc-300 font-bold">
                {article.title}
              </h4>
              <p className="text-zinc-400 mt-10 text-xl">
                {article.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
