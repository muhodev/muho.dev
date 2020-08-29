import React from 'react'
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Layout, Section, SEO } from "../components"

export const query = graphql`
    query($slug: String) {
        contentfulBlog(
            slug: {eq: $slug}
        )
        {
            id
            title
            slug
            category {
                id
                title
                slug
            }
            cover {
                file {
                    url
                } 
                title
            }
            description {description}
            createdAt(formatString: "D.M.YYYY")
            content {json}
        }
    }
`

function BlogTemplate(props) {
    return (
        <Layout>
            <SEO title={props.data.contentfulBlog.title} />
            <Section>
                <div className="article">
                    <header className="article__header">
                        <div className="article__category">
                            {props.data.contentfulBlog.category.title}
                        </div>
                        <h1 className="article__title">{props.data.contentfulBlog.title}</h1>
                        <p className="article__description">
                            {props.data.contentfulBlog.description.description}
                        </p>
                        <div className="article__meta">
                            <div className="article__date">
                                {props.data.contentfulBlog.createdAt}
                            </div>
                            <div className="tags">
                                <div className="tag">
                                    <Link to="/">
                                        css
                                    </Link>
                                </div>
                                <div className="tag">
                                    <Link to="/">
                                        react
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="article__cover">
                            <img loading="lazy" src={props.data.contentfulBlog.cover.file.url} alt={props.data.contentfulBlog.cover.title} />
                        </div>
                    </header>

                    <div className="article__content">
                        {documentToReactComponents(props.data.contentfulBlog.content.json)}
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default BlogTemplate