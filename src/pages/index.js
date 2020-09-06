import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Layout, Section, SEO, Post } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiBlog(
        sort: {
          fields: created_at,
          order: DESC
        }
      ) {
        edges {
          node {
            id
            Title
            Slug
            Description
            category {
              Title
              Slug
            }
            tags {
              Title
              Slug
            }
            Cover {
              childImageSharp {
                fluid {
                   ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            created_at(formatString: "DD.MM.YYYY")
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
            data.allStrapiBlog.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.Title}
                slug={"/article/" + node.Slug}
                category={node.category}
                description={node.Description}
                cover={node.Cover.childImageSharp}
                date={node.created_at}
                tags={node.tags}
              />
            ))
          }

        </div>
      </Section>
    </Layout >
  )
}

export default IndexPage
