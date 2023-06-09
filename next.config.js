const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.*.amazonaws.com',
        port: '',
        pathname: '/secure.notion-static.com/**',
      },
    ],
  },
}

module.exports = withContentlayer(nextConfig)