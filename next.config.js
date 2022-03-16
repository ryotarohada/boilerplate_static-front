const nextConfig = {
  env: {
    NEXT_PUBLIC_FRONTEND_ORIGIN: 'http://localhost:3000',
    NEXT_PUBLIC_API_SERVER: 'http://localhost:3000/api',
    NEXT_PUBLIC_SITE_NAME: 'Boilerplate_Next',
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)
