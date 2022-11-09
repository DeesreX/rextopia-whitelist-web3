// const { redirect } = require('next/dist/server/api-utils')

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
        source: '/calculator.js',
        destination: '/calculator', // Proxy to Backend
        permanent: true,
      },
      {
        source: '/algebra-calculator.js',
        destination: '/algebra-calculator', // Proxy to Backend
        permanent: true,
      },
     
    ]
  }
}

module.exports = nextConfig
