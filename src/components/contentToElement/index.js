import React from 'react'
import { StaticQuery, graphql } from "gatsby"

function ContentToElement({ el }) {
    const content = el.content[0]
    switch (el.nodeType) {
        case "heading-2":
            return <h2>{content.value}</h2>
        case "paragraph":
            if (content.marks.length > 0) {
                if (content.marks[0].type === "code") {
                    return <pre><code>{content.value}</code></pre>
                }
            }
            return <p>{content.value}</p>
        case "blockquote":
            return <blockquote>{content.content[0].value}</blockquote>
        case "hr":
            return <hr />
        case "embedded-entry-block":
            return null
        case "embedded-asset-block":
            return <StaticQuery
                query={graphql`
                query{
                    contentfulAsset(contentful_id: { eq: "2ZC2odHt1MqLCdEaFRT8Kh" }) {
                      file {
                        url
                      }
                    }
                  }
                  
            `}
                render={data => (
                    <header>
                        <img src={data.contentfulAsset.file.url} alt="" />
                    </header>
                )}
            />

        default:
            return null
    }
}

export default ContentToElement