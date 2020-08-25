module.exports = {
  siteMetadata: {
    title: `Yazılım, Tasarım, Teknoloji İçerikleri | muho.dev`,
    description: `Öğrendiğim bilgileri hikaye üreticiliği süzgecinden geçirerek burada paylaşıyorum.`,
    author: `muhodev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/content/images/icon.png`,
      },
    },
    "gatsby-plugin-sass"
  ],
}
