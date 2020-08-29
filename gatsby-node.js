const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlog.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: "/blog/" + node.slug,
      context: {
        slug: node.slug
      }
    })
  });
}