import sanity from "lib/sanity";

const query = `*[_type == "post"] {
  _id,
  title,
  "slug": slug.current,
  description,
  publishedAt,
  cover,
  "coverAspect": cover.asset->.metadata.dimensions.aspectRatio,
  category->
  {
    title,
    "slug": slug.current
  },
  tags[]-> {
    title,
    color,
    bg,
    "slug": slug.current
  }
}[0...50]
`;

import { Layout, Posts, PostPreview } from "components";

export default function Home({ posts = [] }) {
  return (
    <Layout>
      <section className="container my-4">
        <Posts items={posts} renderItem={(item) => <PostPreview {...item} />} />
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await sanity.fetch(query);
  return {
    props: { posts },
    revalidate: 10,
  };
};
