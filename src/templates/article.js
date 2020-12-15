import React, { useEffect } from 'react'
import { graphql, Link } from "gatsby"

import { Layout, Section, SEO } from "../components"
import Prism from "prismjs"
import Img from "gatsby-image"

export const query = graphql`
    query($slug: String) {
        markdownRemark(
            frontmatter: {
                slug: {eq: $slug}
            }
        )
        {
            id
            html
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
`

function BlogTemplate(props) {
    useEffect(() => {
        Prism.highlightAll()

        document.querySelectorAll("pre").forEach(el => {
            if (el.className) {
                el.setAttribute("data-language", el.className.split("-")[1].toUpperCase())
            }

        })
    }, [])

    return (
        <Layout>
            <SEO title={props.data.markdownRemark.frontmatter.title} />
            <Section>
                <div className="article">
                    <header className="article__header">
                        <div className="article__category">
                            <Link to={"/category/" + props.data.markdownRemark.frontmatter.category.slug}>
                                {props.data.markdownRemark.frontmatter.category.title}
                            </Link>
                        </div>
                        <h1 className="article__title title-10">{props.data.markdownRemark.frontmatter.title}</h1>
                        <p className="article__description">
                            {props.data.markdownRemark.frontmatter.description}
                        </p>
                        <div className="article__meta">

                            {
                                props.data.markdownRemark.frontmatter.tags &&

                                <div className="tags">
                                    {
                                        props.data.markdownRemark.frontmatter.tags.map((tag, ind) => (
                                            <div className="tag" key={ind}>
                                                <Link to={"/tag/" + tag.slug}>
                                                    {tag.title}
                                                </Link>
                                            </div>
                                        ))
                                    }


                                </div>
                            }
                            <div className="article__date">
                                {new Date(
                                    props.data.markdownRemark.frontmatter.createdAt
                                ).toLocaleDateString()}
                            </div>
                        </div>
                        <div className="article__cover">
                            <Img fluid={props.data.markdownRemark.frontmatter.cover.childImageSharp.fluid} alt="" />
                        </div>
                    </header>

                    <div className="article__content">
                        <div
                            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
                        />
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default BlogTemplate