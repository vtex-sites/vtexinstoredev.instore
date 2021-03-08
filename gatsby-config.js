const STORE_ID = 'vtexinstoredev'

module.exports = {
  plugins: [
    {
      resolve: '@vtexlab/gatsby-theme-instore-core',
      options: { tenant: STORE_ID },
    },
    {
      resolve: '@vtex/gatsby-instore-plugin-example',
    },
    {
      resolve: '@vtex/gatsby-instore-plugin-example-2',
    },
    {
      resolve: '@vtex/gatsby-instore-plugin-example-3',
    },
  ],
}
