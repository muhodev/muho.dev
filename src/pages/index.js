import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Layout, Section, SEO, HomeBanner, Post } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(
        sort: {
          fields: createdAt,
          order: DESC
        }
      ) {
        edges {
          node {
            id
            title
            slug
            category {
              title
              slug
            }
            cover {file {url}}
            description {description}
            createdAt(formatString: "D.M.YYYY")
          }
        }
      }
    }
  `)


  return (
    <Layout >
      <SEO title="Yazılım, Tasarım, Teknoloji İçerikleri" />
      <HomeBanner />
      <Section>
        <div className="posts__grid">

          {
            data.allContentfulBlog.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.title}
                slug={"/blog/" + node.slug}
                category={node.category}
                description={node.description.description}
                cover={node.cover.file.url}
                date={node.createdAt}
              />
            ))
          }

        </div>
      </Section>
    </Layout >
  )
}

export default IndexPage
