import type { NextConfig } from 'next'
import withSVGR from 'next-plugin-svgr'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  //  assetPrefix: '/static/out',
  images: {
    unoptimized: true,
  },
}

export default withSVGR(nextConfig)
