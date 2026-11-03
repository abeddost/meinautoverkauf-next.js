import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // The rewrite below serves /autoankauf-<slug> from this internal route.
      { source: '/autoankauf', destination: '/standorte', permanent: true },
      { source: '/autoankauf/:slug', destination: '/autoankauf-:slug', permanent: true },
      // Guides merged because each pair competed for the same search intent.
      {
        source: '/ratgeber/autoankauf-mit-motorschaden',
        destination: '/ratgeber/auto-mit-motorschaden-verkaufen',
        permanent: true,
      },
      {
        source: '/ratgeber/unfallwagen-ankauf',
        destination: '/ratgeber/unfallwagen-verkaufen',
        permanent: true,
      },
      {
        source: '/ratgeber/autoverkauf-an-exporthaendler',
        destination: '/ratgeber/autoexport-ankauf',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        // Maps /autoankauf-frankfurt → /autoankauf/frankfurt (preserving SEO URLs)
        source: '/autoankauf-:slug(.*)',
        destination: '/autoankauf/:slug',
      },
    ];
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid intermittent ENOENT corruption in webpack filesystem cache
      // (observed as missing chunk files like ./5873.js during runtime).
      config.cache = false;
    }
    return config;
  },

  experimental: {},
};

export default nextConfig;
