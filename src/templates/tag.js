import React from 'react'
import { graphql } from "gatsby"

import { Layout, Section, SEO, Post } from "../components"

export const query =

    graphql`
    query($slug: String) {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___createdAt] }
            filter: {
                frontmatter: {
                    tags: {elemMatch: {slug : {eq: $slug}}}
                    isDraft: { eq: false }
                }
            }
          ){
            edges {
                node {

                    id
                    frontmatter {

                        title
                        slug
                        tags { 
                            title
                            slug
                        }
                        category {
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
                        createdAt
                    }
                    
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
                        props.data.allMarkdownRemark.edges.map(({ node }) => (
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

export default TagTemplate