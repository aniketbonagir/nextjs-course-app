const { PHASE_PRODUCTION_SERVER } = require('next/constants')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// Way 2 overide the NextJs config
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      ...defaultConfig,
      webpack: {
        plugins: [new BundleAnalyzerPlugin()]
      }
    }
  }

  return defaultConfig
} 




/*
Way 1 to overide the NextJs config

module.exports = {
    webpack: {
        // webpack config properties
    },
    env: {
        MY_ENV_VAR: process.env.SECRET
    }
}

*/