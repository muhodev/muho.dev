import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Layout, Section, SEO, Post } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiArticle(
        filter:{
          isDraft: {eq:false},
          isActive: {eq: true}   
        },
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
            createdAt(formatString: "DD.MM.YYYY")
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
            data.allStrapiArticle.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.title}
                slug={"/article/" + node.slug}
                category={node.category}
                description={node.description}
                cover={node.cover.childImageSharp}
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
