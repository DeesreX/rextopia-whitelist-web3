const { redirect } = require('next/dist/server/api-utils')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirect() {
    return [
      {
        source: '/index.js',
        destination: '/', // Proxy to Backend
        permanent: true,
      },
      {
        source: '/nfts.js',
        destination: '/nfts', // Proxy to Backend
        permanent: true,
      },
      {
        source: '/rextoken.js',
        destination: '/rextoken', // Proxy to Backend
        permanent: true,
      },
      {
        source: '/dao.js',
        destination: '/dao', // Proxy to Backend
        permanent: true,
      },
      {
        source: '/exchange.js',
        destination: '/exchange', // Proxy to Backend
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
