import { Layout, Posts, PostPreview } from "components";

export default function Home() {
  return (
    <Layout>
      <section className="container my-4">
        <Posts
          items={[
            {
              title: "Deneme Blog",
              slug: "deneme",
              description: "Lorem impus dolar sit amet.",
              date: "2021-08-04",
              category: { title: "Blog", slug: "blog" },
              tags: [{ title: "react", slug: "react" }],
            },
          ]}
          renderItem={(item) => <PostPreview {...item} />}
        />
      </section>
    </Layout>
  );
}
