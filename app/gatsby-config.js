const path = require('path');

module.exports = {
  /* Your site config here */
  plugins: [
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: `${__dirname}/src/assets/images`
    //   }
    // },
    // 'gatsby-plugin-styled-components',
    // 'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.join(__dirname, `src`, `assets`, `images`),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: path.join(__dirname, `src`),
        },
      },
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-react-helmet`,
  ],
}
