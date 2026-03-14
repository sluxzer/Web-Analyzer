import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Disable Turbopack to use webpack
  experimental: {
    turbo: undefined,
  },
}

export default nextConfig