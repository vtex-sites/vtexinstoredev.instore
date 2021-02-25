exports.onCreatePage = async (args) => {
  const {
    actions: { createRedirect },
  } = args

  // Redirect / to /instore
  createRedirect({
    fromPath: `/`,
    toPath: '/instore',
    isPermanent: true,
    statusCode: 301,
    redirectInBrowser: false,
  })
}
