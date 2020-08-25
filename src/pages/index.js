import React from "react"
import { Layout, Section, SEO, HomeBanner, Post } from "../components"
import { dummyPosts } from "../dummyApi"


const IndexPage = () => (
  <Layout>
    <SEO title="Ana Sayfa" lang="tr" />
    <HomeBanner />
    <Section>
      <div className="posts__grid">

        {
          dummyPosts.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              cover={post.cover}
              tag={post.tag}
            />
          ))
        }

      </div>
    </Section>
  </Layout >
)

export default IndexPage
