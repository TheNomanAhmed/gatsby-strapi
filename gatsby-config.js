module.exports = {
  siteMetadata: {
    title: "Noman Ahmed Khan portfolio",
    description: "This is a Portfolio Site build with strapi and gatsby",
    author: "@webdev",
    twitterUsername: "@thenomanahmed",
    image: "/twitter-img.png",
    siteUrl: "https://strapicms.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Strapi Gatsby`,
        short_name: `strapi`,
        start_url: `/`,
        background_color: `#E0FCFF`,
        theme_color: `#52D1DA`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? `https://noman-strapi-postgres.herokuapp.com`
          : `http://localhost:8082`,
        queryLimit: 1000,
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `muli\:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i`,
          `open sans`,
          `Yeseva One`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/contact/`, `/blog/*`],
      },
    },
  ],
}
