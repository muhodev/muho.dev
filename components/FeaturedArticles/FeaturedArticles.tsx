import Link from "next/link";

const articles = [
  {
    slug: "developing-animation",
    title: "Animated components with Framer",
    description: "A shopify alternative next-gen & fast ecommerce platform",
    createdAt: "2023-07-06",
    tags: ["react"],
  },
  {
    slug: "testing-react",
    title: "Testing react applications",
    description: "No-code website builder. Currently beta",
    createdAt: "2023-07-06",
    tags: ["react"],
  },
];

export default function FeaturedArticles() {
  return (
    <section>
      <div className="container mx-auto py-32">
        <div className="flex items-center justify-between">
          <h3 className="text-zinc-200 text-5xl font-bold flex items-end gap-x-2">
            <span>Articles</span>
            <span className="text-zinc-700 text-4xl">#20</span>
          </h3>
          <button className="text-lg font-medium text-indigo-200">
            Show All Articles
          </button>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="bg-zinc-800 rounded-3xl border border-zinc-700 px-10 py-10 flex flex-col"
            >
              <div className="mb-6 text-zinc-300">
                <time>{new Date(article.createdAt).toLocaleDateString()}</time>{" "}
              </div>
              <h4 className="text-3xl text-zinc-300 font-bold">
                <Link
                  href={`/articles/${article.slug}`}
                  className="hover:underline"
                >
                  {article.title}
                </Link>
              </h4>
              <div className="mt-6 text-green-300">
                {article.tags.map((tag, ind) => (
                  <Link
                    className="hover:underline"
                    href={`/articles?tag=${tag}`}
                    key={tag + ind}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
              <p className="text-zinc-400 mt-10 text-xl flex-1">
                {article.description}
              </p>
              <footer>
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-indigo-300 mt-6 hover:underline inline-block"
                >
                  Read more
                </Link>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
