import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Layout, Section, SEO, HomeBanner, Post } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt(format: PLAIN)
            frontmatter {
              title
              description
              cover
              date
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout >
      <SEO title="Ana Sayfa" lang="tr" />
      <HomeBanner />
      <Section>
        <div className="posts__grid">

          {
            data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                date={node.frontmatter.date}
                cover={node.frontmatter.cover}
                category={node.frontmatter.category}
                slug={node.fields.slug}
              />
            ))
          }

        </div>
      </Section>
    </Layout >
  )
}

export default IndexPage
