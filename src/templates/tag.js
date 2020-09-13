import React from 'react'
import { graphql } from "gatsby"

import { Layout, Section, SEO, Post } from "../components"

export const query =

    graphql`
    query($slug: String) {
        allStrapiArticle(
            filter: {
              tags: {elemMatch: {slug : {eq: $slug}}}
              isDraft: { eq: false }
              isActive: { eq: true }
            }
          ){
            edges {
                node {

                    id
                    title
                    slug
                    tags { 
                        title
                        slug
                    }
                    category {
                        id
                        title
                        slug
                    }
                    cover {
                        childImageSharp {
                            fluid(maxWidth:900) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                          }
                    }
                    description
                    createdAt(formatString: "D.M.YYYY")
                    
                }
            }
        }
    }
`

function TagTemplate(props) {

    return (
        <Layout >
            <SEO title="Yazılım, Tasarım, Teknoloji İçerikleri" />
            <Section>
                <div className="posts__grid">
                    <div>Tag: {props.pageContext.title}</div>
                    {
                        props.data.allStrapiArticle.edges.map(({ node }) => (
                            <Post
                                key={node.id}
                                title={node.title}
                                slug={"/article/" + node.slug}
                                category={node.category}
                                description={node.description}
                                cover={node.cover.childImageSharp}
                                date={node.createdAt}
                                tags={node.tags}
                            />
                        ))
                    }

                </div>
            </Section>
        </Layout >
    )
}

export default TagTemplate