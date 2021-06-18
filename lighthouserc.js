const VTEXLHConfig = require('@vtex/lighthouse-config').default

const urls = ['', '/instore/login']

// https://github.com/vtex/faststore/blob/d30c59807b7f6e67b182ceeaacf9f3b777d77d4a/packages/lighthouse-config/src/index.ts#L42-L63
// https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
module.exports = VTEXLHConfig({
  urls,
  server: process.env.BASE_SITE_URL,
  assertions: {
    'categories:accessibility': ['error', { minScore: 0.9 }],
    'categories:best-practices': ['error', { minScore: 0.8 }],
    'categories:performance': ['warn', { minScore: 0.8 }],
    'categories:seo': ['warn', { minScore: 0.9 }],
    'color-contrast': 'warn',
    'errors-in-console': 'warn',
    'first-contentful-paint': ['warn', { maxNumericValue: 3000 }],
    'html-has-lang': 'warn',
    interactive: ['warn', { maxNumericValue: 3000 }],
    'largest-contentful-paint': ['warn', { maxNumericValue: 4000 }],
    'max-potential-fid': ['warn', { maxNumericValue: 300 }],
    'meta-description': 'warn',
    'no-unload-listeners': 'warn',
    'tap-targets': 'warn',
    'total-blocking-time': ['warn', { maxNumericValue: 200 }],
    'unused-css-rules': 'warn',
    'valid-source-maps': 'warn',
  },
})
