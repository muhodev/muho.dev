import React, { useEffect } from 'react'
import { graphql, Link } from "gatsby"

import { Layout, Section, SEO } from "../components"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"
import Img from "gatsby-image"

export const query = graphql`
    query($slug: String) {
        strapiBlog(
            Slug: {eq: $slug}
        )
        {
            id
            Title
            Slug
            tags { 
                Title
                Slug
            }
            category {
                id
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
            Description
            created_at(formatString: "D.M.YYYY")
            Content
            
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
            <SEO title={props.data.strapiBlog.Title} />
            <Section>
                <div className="article">
                    <header className="article__header">
                        <div className="article__category">
                            {props.data.strapiBlog.category.Title}
                        </div>
                        <h1 className="article__title title-10">{props.data.strapiBlog.Title}</h1>
                        <p className="article__description">
                            {props.data.strapiBlog.Description}
                        </p>
                        <div className="article__meta">

                            {
                                props.data.strapiBlog.tags &&

                                <div className="tags">
                                    {
                                        props.data.strapiBlog.tags.map((tag, ind) => (
                                            <div className="tag" key={ind}>
                                                <Link to={"/tag/" + tag.Slug}>
                                                    {tag.Title}
                                                </Link>
                                            </div>
                                        ))
                                    }


                                </div>
                            }
                            <div className="article__date">
                                {props.data.strapiBlog.created_at}
                            </div>
                        </div>
                        <div className="article__cover">
                            <Img fluid={props.data.strapiBlog.Cover.childImageSharp.fluid} alt="" />
                        </div>
                    </header>

                    <div className="article__content">
                        <ReactMarkdown source={props.data.strapiBlog.Content} />
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default BlogTemplate