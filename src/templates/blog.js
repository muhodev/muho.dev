import React from 'react'
import { graphql } from "gatsby"
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
            cover {file {url}}
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
                <div>
                    <img loading="lazy" src={props.data.contentfulBlog.cover.file.url} alt="" />
                </div>
                <h1>{props.data.contentfulBlog.title}</h1>
                <div>
                    {documentToReactComponents(props.data.contentfulBlog.content.json)}
                </div>
            </Section>
        </Layout>
    )
}

export default BlogTemplate