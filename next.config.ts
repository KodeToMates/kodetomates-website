import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.21st.dev',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/mates',
        destination: '/community',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/what-we-do',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/what-we-do/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
