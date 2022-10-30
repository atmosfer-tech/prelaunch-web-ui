/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'prod'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/prelaunch-web-ui/' : '',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
