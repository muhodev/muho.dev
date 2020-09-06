import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Layout, Section, SEO, HomeBanner, Post } from "../components"

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
                original {
                  src
                }
              }
            }
            created_at(formatString: "D.M.YYYY")
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
            data.allStrapiBlog.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.Title}
                slug={"/article/" + node.Slug}
                category={node.category}
                description={node.Description}
                cover={node.Cover.childImageSharp.original.src}
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
