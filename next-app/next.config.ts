import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Silence the "multiple lockfiles" warning in monorepo-like setups
  outputFileTracingRoot: path.join(__dirname, '..'),

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
