module.exports = {
  siteMetadata: {
    title: 'romanonthego',
  },
  pathPrefix: '/romanonthego-static',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-91109543-1',
        head: false,
        anonymize: false,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'romanonthego',
        short_name: 'romanonthego',
        start_url: '/',
        background_color: '#12151E',
        theme_color: 'white',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
