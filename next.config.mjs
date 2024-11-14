import withSVGR from 'next-plugin-svgr'

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  //  assetPrefix: '/static/out',
  images: {
    unoptimized: true,
  },
}

export default withSVGR(nextConfig)
