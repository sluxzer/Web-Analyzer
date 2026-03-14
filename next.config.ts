import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'chrome-launcher']
    return config
  },
}

export default nextConfig