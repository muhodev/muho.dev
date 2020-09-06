// const path = require("path")

// module.exports.createPages = async ({ graphql, actions }) => {

//   const { createPage } = actions
//   const blogTemplate = path.resolve("./src/templates/blog.js")

//   const res = await graphql(`
//     query {
//       allContentfulBlog {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   res.data.allContentfulBlog.edges.forEach(({ node }) => {
//     createPage({
//       component: blogTemplate,
//       path: "/blog/" + node.slug,
//       context: {
//         slug: node.slug
//       }
//     })
//   });
// }
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiBlog {
          edges {
            node {
              strapiId
              Slug
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              Slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges

  const ArticleTemplate = require.resolve("./src/templates/article.js")

  articles.forEach((article, index) => {
    createPage({
      path: `/article/${article.node.Slug}`,
      component: ArticleTemplate,
      context: {
        slug: article.node.Slug,
      },
    })
  })

  const CategoryTemplate = require.resolve("./src/templates/category.js")

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.Slug}`,
      component: CategoryTemplate,
      context: {
        slug: category.node.Slug,
      },
    })
  })
}
