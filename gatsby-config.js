require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `muho.dev`,
    description: `Öğrendiğim bilgileri hikaye üreticiliği süzgecinden geçirerek burada paylaşıyorum.`,
    author: `muhodev`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://muhodev.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`blog`, `category`, "tag"]
      }
    },
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
