exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              slug
              title
            }
          }
        }
        tags: allStrapiTag {
          edges {
            node {
              strapiId 
              slug
              title
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
  const tags = result.data.tags.edges


  const ArticleTemplate = require.resolve("./src/templates/article.js")

  articles.forEach((article) => {
    createPage({
      path: `/article/${article.node.slug}`,
      component: ArticleTemplate,
      context: {
        slug: article.node.slug,
      },
    })
  })

  let CategoryTemplate = require.resolve("./src/templates/category.js")

  categories.forEach((category) => {
    createPage({
      path: `/category/${category.node.slug}`,
      component: CategoryTemplate,
      context: {
        slug: category.node.slug,
        title: category.node.title
      },
    })
  })

  let TagTemplate = require.resolve("./src/templates/tag.js")


  tags.forEach((tag) => {
    createPage({
      path: `/tag/${tag.node.slug}`,
      component: TagTemplate,
      context: {
        slug: tag.node.slug,
        type: "Tag",
        title: tag.node.title
      },
    })
  })
}
