require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `muho.dev`,
    description: `Öğrendiğim bilgileri ve edindiğim deneyimleri burada paylaşıyorum.`,
    author: `muhodev`,
    siteUrl: "https://www.muho.dev"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `muho.dev`,
        short_name: `muho.dev`,
        start_url: `/`,
        background_color: `#f1f1f1`,
        theme_color: `#f1f1f1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.muho.dev',
        sitemap: 'https://www.muho.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts/`,
      },
    }, {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
  ],
}
