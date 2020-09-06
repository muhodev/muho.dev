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
