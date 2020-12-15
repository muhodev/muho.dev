import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Layout, Section, SEO, Post } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___createdAt] }
        filter: {
          frontmatter: {
            isDraft: { eq: false }
          }
        }
      ) {
        edges {
          node {
            id
            frontmatter { 
              title
              slug
              description
              category {
                title
                slug
              }
              tags {
                title
                slug
              }
              cover {
                childImageSharp {
                  fluid(maxWidth:300) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              createdAt
            }
          }
        }
      }
    }
  `)


  return (
    <Layout >
      <SEO title="Yazılım, Tasarım, Teknoloji İçerikleri" />
      <Section>
        <div className="posts__grid">
          {
            data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                slug={"/article/" + node.frontmatter.slug}
                category={node.frontmatter.category}
                description={node.frontmatter.description}
                cover={node.frontmatter.cover.childImageSharp}
                date={node.frontmatter.createdAt}
                tags={node.frontmatter.tags}
              />
            ))
          }

        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
