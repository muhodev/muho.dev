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
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.YOUR_GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "muho.dev",
      },
    },
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
  ],
}
