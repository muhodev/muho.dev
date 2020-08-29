import React from 'react'
import { graphql } from "gatsby"

import { Layout, Section } from "../components"

export const query = graphql`
    query($slug: String) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                description
                cover
            }
            html
        }
    }

`

function BlogTemplate(props) {

    console.log(props.data)
    return (
        <Layout>
            <Section>
                <div>
                    <img loading="lazy" src={props.data.markdownRemark.frontmatter.cover} alt="" />
                </div>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
            </Section>
        </Layout>

    )
}

export default BlogTemplate