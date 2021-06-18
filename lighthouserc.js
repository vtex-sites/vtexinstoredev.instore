const VTEXLHConfig = require('@vtex/lighthouse-config').default

const urls = ['', '/instore/login']

module.exports = VTEXLHConfig({
  urls,
  server: process.env.BASE_SITE_URL,
  assertions: {
    'categories:accessibility': ['error', { minScore: 0.9 }],
    'categories:best-practices': ['error', { minScore: 0.9 }],
    'categories:performance': ['error', { minScore: 0.9 }],
    'first-contentful-paint': ['error', { maxNumericValue: 3000 }],
  },
})
