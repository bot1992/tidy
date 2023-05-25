const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      process.env.NODE_ENV === "production"
        ? {
            protocol: "https",
            hostname: "*",
            pathname: "/media/**",
          }
        : {
            protocol: "http",
            hostname: "localhost",
            port: "8080",
            pathname: "/**",
          },
    ],
  },
}

module.exports = nextConfig
