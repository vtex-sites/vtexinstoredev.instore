require('dotenv').config({
  path: `${__dirname}/vtex.env`,
})

module.exports = {
  plugins: [
    {
      resolve: '@vtexlab/gatsby-theme-instore-core',
      options: {
        tenant: process.env.GATSBY_STORE_ID,
        enableExtensions: true,
      },
    },
    // {
    //   resolve: '@vtexlab/gatsby-theme-instore-poc',
    // },
    // {
    //   resolve: '@vtex/gatsby-instore-plugin-example',
    // },
    // {
    //   resolve: '@vtex/gatsby-instore-plugin-example-2',
    // },
    // {
    //   resolve: '@vtex/gatsby-instore-plugin-example-3',
    // },
    // {
    //   resolve: '@vtex/instore-admin-example',
    // },
  ],
}
