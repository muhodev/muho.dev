import React, { useEffect } from 'react'
import { graphql, Link } from "gatsby"

import { Layout, Section, SEO } from "../components"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"
import Img from "gatsby-image"

export const query = graphql`
    query($slug: String) {
        strapiArticle(
            slug: {eq: $slug}
        )
        {
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
            content
            
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
            <SEO title={props.data.strapiArticle.title} />
            <Section>
                <div className="article">
                    <header className="article__header">
                        <div className="article__category">
                            <Link to={"/category/" + props.data.strapiArticle.category.slug}>
                                {props.data.strapiArticle.category.title}
                            </Link>
                        </div>
                        <h1 className="article__title title-10">{props.data.strapiArticle.title}</h1>
                        <p className="article__description">
                            {props.data.strapiArticle.description}
                        </p>
                        <div className="article__meta">

                            {
                                props.data.strapiArticle.tags &&

                                <div className="tags">
                                    {
                                        props.data.strapiArticle.tags.map((tag, ind) => (
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
                                {props.data.strapiArticle.createdAt}
                            </div>
                        </div>
                        <div className="article__cover">
                            <Img fluid={props.data.strapiArticle.cover.childImageSharp.fluid} alt="" />
                        </div>
                    </header>

                    <div className="article__content">
                        <ReactMarkdown source={props.data.strapiArticle.content} />
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default BlogTemplate