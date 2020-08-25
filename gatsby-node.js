const path = require(`path`)

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        const absolutePath = node.fileAbsolutePath.split("/")
        const slug = absolutePath[absolutePath.length - 2]

        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }

}

// Log out information after a build is done
module.exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog.js`)
    const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
                slug
            }
            frontmatter {
                title
            }
          }
        }
      }
    }
  `)


    result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.fields.slug}`,
            component: blogPostTemplate,
            context: {
                slug: edge.node.fields.slug,
            },
        })
    })
}