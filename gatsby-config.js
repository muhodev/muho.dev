require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `muho.dev`,
    description: `Öğrendiğim bilgileri hikaye üreticiliği süzgecinden geçirerek burada paylaşıyorum.`,
    author: `muhodev`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        queryLimit: 100,
        contentTypes: [`article`, `category`, "tag"]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
