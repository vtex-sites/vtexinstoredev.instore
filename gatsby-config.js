const path = require('path')

const STORE_ID = path.basename(__dirname).replace('.instore', '')

module.exports = {
  plugins: [
    {
      resolve: '@vtexlab/gatsby-theme-instore-core',
      options: { tenant: STORE_ID },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
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
