const categories = require("./src/content/data/categories")
const tags = require("./src/content/data/tags")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
        `
            {
                articles: allMarkdownRemark(filter: { frontmatter: {isDraft: {eq: false}}}) {
                    edges {
                        node {
                            id
                            frontmatter {
                                slug
                            }
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

    const ArticleTemplate = require.resolve("./src/templates/article.js")

    articles.forEach((article) => {
        createPage({
            path: `/article/${article.node.frontmatter.slug}`,
            component: ArticleTemplate,
            context: {
                slug: article.node.frontmatter.slug,
            },
        })
    })

    let CategoryTemplate = require.resolve("./src/templates/category.js")

    categories.forEach((category) => {
        createPage({
            path: `/category/${category.slug}`,
            component: CategoryTemplate,
            context: {
                slug: category.slug,
                title: category.title
            },
        })
    })

    let TagTemplate = require.resolve("./src/templates/tag.js")


    tags.forEach((tag) => {
        createPage({
            path: `/tag/${tag.slug}`,
            component: TagTemplate,
            context: {
                slug: tag.slug,
                type: "Tag",
                title: tag.title
            },
        })
    })
}
